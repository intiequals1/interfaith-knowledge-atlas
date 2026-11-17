/* Interfaith Knowledge Atlas – lokale Stichwortsuche und Synopse.
   Kein KI-Modell, Tracking, Konto, Cookie, Storage oder Drittanbieter-Skript.
   Daten werden ausschließlich vom selben Webserver geladen. */
(() => {
  "use strict";

  const SOURCES = Object.freeze({
    research: "../data/catalog/research-candidates.json",
    synthetic: "../data/fixtures/atlas-demo.json"
  });
  const LABELS = Object.freeze({
    same_core: "Gleicher Aussagekern (Prüfkategorie)",
    partial_overlap: "Teilweise Überschneidung",
    thematic: "Thematische Verwandtschaft",
    tension: "Begründete Spannung",
    contradiction: "Möglicher Widerspruch",
    no_supported_relation: "Keine belegte Verbindung",
    insufficient_evidence: "Beleglage unzureichend"
  });
  const dom = {
    mode: document.getElementById("modus"),
    search: document.getElementById("suche"),
    tradition: document.getElementById("tradition"),
    list: document.getElementById("karten"),
    status: document.getElementById("katalog-status"),
    error: document.getElementById("katalog-fehler"),
    left: document.getElementById("vergleich-links"),
    right: document.getElementById("vergleich-rechts"),
    button: document.getElementById("vergleich-start"),
    compareStatus: document.getElementById("vergleich-status"),
    output: document.getElementById("vergleich-ergebnis")
  };

  if (Object.values(dom).some((node) => !node)) return;
  document.documentElement.classList.remove("no-js");

  let current = { entries: [], comparisons: [], kind: "research", ready: false };
  let sequence = 0;

  const labelForMode = (kind) => kind === "synthetic"
    ? "Erfundenes Testbeispiel – der Prüfstatus ist nur simuliert"
    : "Recherchekandidat – nicht fachlich begutachtet";

  function element(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  }

  function append(parent, ...children) {
    children.forEach((child) => { if (child) parent.appendChild(child); });
    return parent;
  }

  function safeLink(href, label) {
    if (typeof href !== "string") return null;
    let parsed;
    try { parsed = new URL(href); } catch (_) { return null; }
    if (parsed.protocol !== "https:") return null;
    const link = element("a", "source-link", label);
    link.href = parsed.href;
    link.rel = "noopener noreferrer";
    return link;
  }

  function normal(value) {
    return String(value || "").normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("de");
  }

  function keyed(collection) {
    return new Map(collection.map((item) => [item.id + "@" + item.revision, item]));
  }

  function asResearch(raw) {
    if (raw.dataset_type !== "research_candidates" || !Array.isArray(raw.entries) ||
        !Array.isArray(raw.comparisons)) throw new Error("Ungültiger Recherchekatalog.");
    return { entries: raw.entries, comparisons: raw.comparisons, kind: "research", ready: true };
  }

  function asSynthetic(raw) {
    if (raw.dataset_type !== "synthetic") throw new Error("Ungültiger Testdatensatz.");
    const passages = keyed(raw.passages);
    const editions = keyed(raw.editions);
    const works = keyed(raw.works);

    const entries = raw.readings.map((reading) => {
      const passage = passages.get(reading.passage);
      const edition = passage && editions.get(passage.edition);
      const work = edition && works.get(edition.work);
      if (!passage || !edition || !work) throw new Error("Referenz im synthetischen Datensatz fehlt.");
      return {
        id: reading.id, tradition: "Synthetisches Lehrbeispiel", work: work.title,
        locator: passage.locator, genre: work.genre, summary: reading.summary,
        modality: reading.modality, scope: reading.addressees,
        context: reading.conditions, limitation: "Diese Regel ist frei erfunden; die Freigabe ist lediglich in Testdaten simuliert.",
        source_url: null, source_label: edition.title,
        keywords: ["synthetisch", "test", "perspektivwechsel"], status: "simulated"
      };
    });

    const comparisons = raw.comparisons.map((item) => ({
      id: item.id, left: item.readings[0].split("@")[0], right: item.readings[1].split("@")[0],
      relation: item.relation, shared: item.dimension, rationale: item.rationale,
      differences: item.differences, status: "simulated"
    }));

    return { entries, comparisons, kind: "synthetic", ready: true };
  }

  function option(value, text) {
    const node = document.createElement("option");
    node.value = value;
    node.textContent = text;
    return node;
  }

  function setOptions(select, values) {
    select.replaceChildren(...values.map((pair) => option(pair[0], pair[1])));
  }

  function updateSelections() {
    const choices = current.entries.map((x) => [x.id, x.tradition + " – " + x.locator]);
    setOptions(dom.left, choices);
    setOptions(dom.right, choices);
    if (choices.length > 0) dom.left.value = choices[0][0];
    if (choices.length > 1) dom.right.value = choices[1][0];
  }

  function updateTraditions() {
    const list = [...new Set(current.entries.map((x) => x.tradition))].sort((a, b) => a.localeCompare(b, "de"));
    setOptions(dom.tradition, [["all", "Alle anzeigen"], ...list.map((item) => [item, item])]);
  }

  function factRow(parent, title, value) {
    if (typeof value !== "string" || !value.trim()) return;
    append(parent, element("dt", "", title), element("dd", "", value));
  }

  function choiceButton(entry, slot) {
    const button = element("button", "choose-source", slot === "left"
      ? "Als erste Fundstelle wählen" : "Als zweite Fundstelle wählen");
    button.type = "button";
    button.addEventListener("click", () => {
      (slot === "left" ? dom.left : dom.right).value = entry.id;
      dom.compareStatus.textContent = "Fundstelle gewählt. Den Vergleich unten aktualisieren.";
    });
    return button;
  }

  function buildCard(entry) {
    const li = element("li", "source-item");
    const card = append(element("article", "source-card"),
      element("p", "source-kind", entry.tradition + " · " + entry.genre),
      element("h3", "", entry.locator),
      element("p", "source-work", entry.work),
      element("p", "source-summary", entry.summary)
    );
    const dl = element("dl", "card-meta");
    factRow(dl, "Ausdruck", entry.modality);
    factRow(dl, "Geltungsbereich", entry.scope);
    card.appendChild(dl);

    const details = element("details", "source-details");
    details.appendChild(element("summary", "", "Kontext und Einschränkungen"));
    append(details,
      element("p", "", entry.context),
      element("p", "source-limitation", entry.limitation)
    );
    card.appendChild(details);
    card.appendChild(element("p", "review-note", labelForMode(current.kind)));

    const actions = element("div", "source-actions");
    append(actions, choiceButton(entry, "left"), choiceButton(entry, "right"));
    const link = safeLink(entry.source_url, "Fundstelle beim Quellenanbieter lesen");
    if (link) actions.appendChild(link);
    card.appendChild(actions);
    li.appendChild(card);
    return li;
  }

  function renderList() {
    if (!current.ready) return;
    const phrase = normal(dom.search.value.trim());
    const tradition = dom.tradition.value;
    const entries = current.entries.filter((entry) => {
      if (tradition !== "all" && entry.tradition !== tradition) return false;
      if (!phrase) return true;
      const haystack = normal([
        entry.tradition, entry.genre, entry.work, entry.locator, entry.summary,
        entry.modality, entry.scope, entry.context, ...(entry.keywords || [])
      ].join(" "));
      return haystack.includes(phrase);
    });

    dom.list.replaceChildren(...entries.map(buildCard));
    if (entries.length === 0) {
      dom.list.appendChild(append(element("li", "empty-state"),
        element("p", "", "Keine Treffer. Suche nach einem anderen Begriff oder wähle alle Traditionen.")));
    }
    dom.status.textContent = entries.length + " von " + current.entries.length +
      " Fundstellen sichtbar · " + labelForMode(current.kind) + ".";
  }

  function renderReading(entry) {
    const section = element("section", "comparison-reading");
    append(section,
      element("p", "source-kind", entry.tradition + " · " + entry.genre),
      element("h3", "", entry.locator),
      element("p", "source-work", entry.work),
      element("p", "reading-summary", entry.summary)
    );
    const dl = element("dl", "compare-meta");
    factRow(dl, "Ausdruck", entry.modality);
    factRow(dl, "Adressaten / Reichweite", entry.scope);
    factRow(dl, "Kontext", entry.context);
    factRow(dl, "Grenze der Kurzfassung", entry.limitation);
    section.appendChild(dl);
    const link = safeLink(entry.source_url, "Originalfundstelle extern öffnen");
    if (link) section.appendChild(link);
    return section;
  }

  function renderComparison(moveFocus = false) {
    if (!current.ready) return;
    const left = current.entries.find((entry) => entry.id === dom.left.value);
    const right = current.entries.find((entry) => entry.id === dom.right.value);
    dom.output.replaceChildren();
    if (!left || !right || left.id === right.id) {
      dom.compareStatus.textContent = "Bitte zwei verschiedene Fundstellen auswählen.";
      return;
    }
    const comparison = current.comparisons.find((item) =>
      (item.left === left.id && item.right === right.id) ||
      (item.left === right.id && item.right === left.id)
    );
    if (!comparison) {
      dom.compareStatus.textContent = "Für diese Auswahl gibt es noch keine dokumentierte Vergleichshypothese.";
      return;
    }
    const container = element("article", "comparison-sheet");
    const columns = append(element("div", "comparison-columns"),
      renderReading(left), renderReading(right));

    const relation = element("div", "relation-analysis");
    append(relation, element("h3", "", "Gemeinsamer Gesichtspunkt"));
    relation.appendChild(element("p", "shared-idea", comparison.shared));
    relation.appendChild(element("p", "relation-label",
      "Vergleichstyp: " + (LABELS[comparison.relation] || comparison.relation)));
    append(relation, element("h4", "", "Begründung der Hypothese"),
      element("p", "", comparison.rationale),
      element("h4", "", "Wichtige Unterschiede"));
    const differences = element("ul", "differences");
    (comparison.differences || []).forEach((difference) => {
      differences.appendChild(element("li", "", difference));
    });
    relation.appendChild(differences);
    relation.appendChild(element("p", "review-note",
      current.kind === "synthetic"
        ? "Die zugrunde liegenden Texte und Prüfentscheidungen sind frei erfunden. Kein wissenschaftlicher Beleg."
        : "KI-gestützt entworfene Arbeitshypothese ohne unabhängiges religionswissenschaftliches Review. Keine gesicherte Aussage über Gleichwertigkeit oder gemeinsame Herkunft."));

    append(container, columns, relation);
    dom.output.appendChild(container);
    dom.compareStatus.textContent = "Vergleich verfügbar: " + left.locator + " und " + right.locator + ".";
    if (moveFocus) dom.output.focus();
  }

  async function load(mode) {
    const token = ++sequence;
    current.ready = false;
    dom.status.textContent = "Der ausgewählte Datenbestand wird geladen.";
    dom.compareStatus.textContent = "Der Vergleich wird geladen.";
    dom.error.hidden = true;
    dom.list.replaceChildren();
    dom.output.replaceChildren();

    try {
      const response = await fetch(SOURCES[mode], { cache: "no-store", credentials: "same-origin" });
      if (!response.ok) throw new Error("Datei nicht verfügbar (" + response.status + ")");
      const raw = await response.json();
      if (token !== sequence) return;
      current = mode === "synthetic" ? asSynthetic(raw) : asResearch(raw);
      dom.search.value = "";
      updateTraditions();
      updateSelections();
      renderList();
      renderComparison(false);
    } catch (error) {
      if (token !== sequence) return;
      current.ready = false;
      dom.status.textContent = "Katalog nicht verfügbar; keine Daten geladen.";
      dom.compareStatus.textContent = "Für einen Vergleich muss der Katalog geladen sein.";
      dom.error.hidden = false;
    }
  }

  dom.search.addEventListener("input", renderList);
  dom.tradition.addEventListener("change", renderList);
  dom.mode.addEventListener("change", () => load(dom.mode.value));
  dom.button.addEventListener("click", () => renderComparison(true));
  load(dom.mode.value);
})();
