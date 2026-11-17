/* DailyEthics4all.io: lokale Demo ohne Fetch, Cookies, Storage oder Live-KI. */
(() => {
  "use strict";

  const form = document.getElementById("reflection-form");
  const result = document.getElementById("perspektiven");
  const choiceLabel = document.getElementById("auswahl-anzeige");
  const status = document.getElementById("form-status");
  const showPerspectives = document.getElementById("show-perspectives");
  const clearInputs = document.getElementById("clear-inputs");
  const reason = document.getElementById("begruendung");
  if (!form || !result || !choiceLabel || !status || !showPerspectives || !clearInputs || !reason) return;

  // Bedienelemente nur aktivieren, wenn das Skript vollständig initialisiert ist.
  document.documentElement.classList.remove("no-js");

  // Progressive Enhancement: ohne JavaScript bleiben die Perspektiven sichtbar.
  result.hidden = true;

  const selectedLabels = Object.freeze({
    check: "Unabhängig verifizieren",
    release: "Freigabe erwägen",
    escalate: "Konflikt offen ansprechen",
    uncertain: "Weitere Informationen benötigen",
    skip: "Keine Entscheidung festhalten"
  });

  showPerspectives.addEventListener("click", () => {
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

  const clearLocalInputs = () => {
    form.querySelectorAll('input[name="decision"]').forEach((input) => { input.checked = false; });
    reason.value = "";
    result.hidden = true;
    choiceLabel.textContent = "Du kannst die folgenden Perspektiven ohne eine persönliche Antwort lesen.";
    status.textContent = "Die Eingaben wurden aus dieser Ansicht entfernt.";
  };

  clearInputs.addEventListener("click", clearLocalInputs);

  window.addEventListener("pagehide", clearLocalInputs);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) clearLocalInputs();
  });
})();
