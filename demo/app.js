/* DailyEthics4all.io: lokale Demo ohne Fetch, Cookies, Storage oder Live-KI. */
(() => {
  "use strict";

  const form = document.getElementById("reflection-form");
  const result = document.getElementById("perspektiven");
  const choiceLabel = document.getElementById("auswahl-anzeige");
  const status = document.getElementById("form-status");
  if (!form || !result || !choiceLabel || !status) return;

  // Progressive Enhancement: ohne JavaScript bleiben die Perspektiven sichtbar.
  result.hidden = true;

  const selectedLabels = Object.freeze({
    check: "Unabhängig verifizieren",
    release: "Freigabe erwägen",
    escalate: "Konflikt offen ansprechen",
    uncertain: "Weitere Informationen benötigen",
    skip: "Keine Entscheidung festhalten"
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = form.querySelector('input[name="decision"]:checked');
    const choiceText = selected && Object.prototype.hasOwnProperty.call(selectedLabels, selected.value)
      ? selectedLabels[selected.value]
      : null;

    choiceLabel.textContent = choiceText
      ? "Deine erste Einschätzung: " + choiceText + ". Die nachfolgenden Fragen sind allgemeine, vorab formulierte Perspektiven."
      : "Du hast keine Ausgangsentscheidung festgehalten. Die Perspektiven stehen dir trotzdem offen.";

    // Das optionale Freitextfeld wird weder gelesen noch analysiert.
    result.hidden = false;
    status.textContent = "Die drei vorformulierten Perspektiven sind jetzt sichtbar.";
    result.focus();
  });

  form.addEventListener("reset", () => {
    result.hidden = true;
    choiceLabel.textContent = "Du kannst die folgenden Perspektiven ohne eine persönliche Antwort lesen.";
    status.textContent = "Die Formular-Eingaben wurden aus dieser Ansicht entfernt.";
  });

  window.addEventListener("pagehide", () => form.reset());
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) form.reset();
  });
})();
