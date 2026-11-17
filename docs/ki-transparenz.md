# KI-Transparenz — Interfaith Knowledge Atlas & DailyEthics4all.io

**Dokumentversion:** 0.1 · 17. November 2026  
**Geltungsbereich:** Forschungsentwurf, Dokumentation, statische HTML-Demo und mögliche spätere KI-Komponenten.  
**Status:** Transparenzkonzept; keine fachliche Freigabe oder Konformitätszertifizierung.

## 1. Transparenzgrundsatz

> Menschen sollen wissen, wann, wozu und mit welchen Grenzen KI eingesetzt wird. Die Herkunft einer Aussage ist sichtbar, ihre Begründung überprüfbar, und ihre Bewertung darf angezweifelt werden.

Der **Interfaith Knowledge Atlas** dokumentiert interpretative Beziehungen religiöser und nichtreligiöser Quellen. **DailyEthics4all.io** nutzt die Reflexion ethischer Alltagsentscheidungen als Lernformat. Beide Projekte unterscheiden streng zwischen belegter Quelle, redaktioneller Interpretation, maschinellem Vorschlag und eigener Entscheidung des Menschen.

**KI ist weder religiöse Autorität noch moralische Instanz.** Ein Modell kann Textvorschläge strukturieren, potenzielle Parallelen auffinden oder alternative Perspektiven formulieren; es darf nicht allein entscheiden, welche Tradition „recht hat“ oder welche Person „moralisch gut“ ist.

## 2. Aktuelle Offenlegung (17. November 2026)

| Gegenstand | Tatsächlicher Stand | Was ausdrücklich nicht behauptet wird |
| --- | --- | --- |
| Konzeptpapier und Projektstruktur | KI-gestützte Entwurfs- und Textarbeit im Dialog mit ChatGPT; das Konzept beruht auch auf Anliegen und Formulierungen des Projektinitiators. | Nicht als vollständig unabhängig begutachtete wissenschaftliche Publikation ausgeben. |
| Dieses Transparenzdokument, HTML, CSS und JavaScript | Entwurf mit **OpenAI ChatGPT (GPT-6)**, erstellt am 17.11.2026. Änderungen sind über Git-Commits nachverfolgbar. | Kein abgeschlossener manueller WCAG-Test, keine geprüfte Datenschutzkonformität. |
| HTML-Demo \`demo/index.html\` | Ein **statischer, lokal im Browser arbeitender Prototyp** mit vorformulierten Reflexionsperspektiven. **Kein KI-Modellaufruf, keine API-Verbindung, keine Antwort-Telemetrie.** | Keine Live-KI, keine individuell erzeugte ethische Beratung, keine serverseitige Speicherung von Übungsantworten. |
| Religiöse Textvergleiche | Zielarchitektur und konzeptionelle Beispiel-/Testdaten; Fachreview und Rechteklärung sind vor Publikation notwendig. | Keine automatische Gleichsetzung von Traditionen oder sichere Aussage über gemeinsame historische Herkunft. |

**Prompt-Dokumentation, funktionsorientiert:** Die Anforderungen in diesem Projektentwurf entstanden aus der Bitte, (1) eine interreligiöse semantische Vergleichsinfrastruktur zu konzipieren, (2) DailyEthics4all.io als Ethik-Mikrolernformat zu ergänzen, (3) DSGVO/Privacy by Design, UX und WCAG 2.2 zu berücksichtigen und (4) einen KI-Transparenzabschnitt mit HTML-Demo und zugänglichem CSS zu erstellen. Dies ist eine **Zusammenfassung**, nicht ein vollständiges, unveränderliches Protokoll aller Nachrichten oder internen Modellparameter. Das Repository dokumentiert die konkreten Änderungen über Versionsgeschichte und Dateien. Weitere Modell- und Prompt-Provenienz ist **pro tatsächlich implementierter Funktion** nachzutragen.

## 3. Kennzeichnung jeder zukünftigen KI-Funktion

Vor dem Einsatz eines Modells ist im Nutzungskontext unmittelbar zu erläutern:

1. **Wer/was antwortet?** Deutliche Kennzeichnung „KI-generierter Vorschlag“ oder „redaktionell geprüfter Inhalt“, ohne irreführendes Gütesiegel.
2. **Wozu?** Beispielsweise semantische Suchvorschläge, Vergleichshypothesen oder Reflexionsfragen. Zweck nicht nachträglich stillschweigend ausweiten.
3. **Datenfluss:** Welche Eingaben verlassen das Gerät? An welchen Anbieter, an welchem Speicherort, auf welcher Rechtsgrundlage und zu welcher Löschfrist? **Standard: keine privaten Reflexionen an KI-Dienste.**
4. **Grenzen:** Plausibel klingende Falschaussagen, Übersetzungsunsicherheiten, voreingenommene Quellen, fehlender kultureller Kontext und unklare Validität offenlegen.
5. **Nachprüfbarkeit:** Quellenlinks, Editionen, Textrevisionen, Zitier- und Lizenzstatus, Modell-/Prompt-Versionen, Prüfstatus und verbleibenden Dissens angeben.
6. **Menschenrechte und Autonomie:** Keine verdeckten Moral-Scores, emotionserkennende/biometrische Analyse, Religions- oder Weltanschauungsprofile oder Arbeitsleistungsbewertungen aus Lernantworten.
7. **Kontrolle:** KI-Funktion freiwillig zuschalten/überspringen; Empfehlungen widersprechen und Fehler melden können; eine überprüfbare, nicht KI-gestützte Alternative anbieten.

Die gesonderten gesetzlichen **Transparenzpflichten aus Artikel 50 des EU AI Act** sind **funktions- und rollenabhängig** zu prüfen. Die Kennzeichnung eines KI-gestützten Entwurfs ist eine transparente Produktentscheidung und **keine pauschale Aussage**, dass jede statische HTML-Seite unter sämtliche Artikel-50-Pflichten fällt.

## 4. Redaktionelle Freigabe und Provenienz

Für später freizugebende vergleichende Interpretationen gilt:

\`Quellenfundstelle → Edition/Übersetzung/Rechte → Lesart → maschineller Vorschlag (falls vorhanden) → menschliche Fachprüfung → redaktioneller Beschluss → veröffentlichte Revision\`.

- KI-Vorschläge werden von autorisierten Personen geprüft; **kein ungeprüfter religiöser oder ethischer Normtext** wird als wahr ausgegeben.
- Mehrere mögliche Lesarten, Widerspruch und Nichtwissen bleiben sichtbar.
- Fachreview umfasst möglichst die jeweils betroffene religiöse oder weltanschauliche Perspektive; Reviewende dokumentieren ihre Rolle und mögliche Interessen.
- Ein gemeldeter Fehler kann zu sichtbarer Korrektur, Neufassung oder Sperre samt Änderungsprotokoll führen.
- „Vom Menschen geprüft“ erst anzeigen, wenn Person/Rolle, Umfang, Datum und freigegebene Revision tatsächlich dokumentiert sind.
- Prompt-/Modellversion, verwendeter Eingabetyp und Datenquellen können in einem **technischen, datensparsamen Laufmanifest** protokolliert werden; keine privaten Freitexte in öffentlichen Git-Commits, Issues oder Logs.

## 5. Transparenz als barrierefreie UX

- **Kennzeichnung in Worten**, nicht nur über Badge-Farbe, Symbol oder Hover.
- Kurze Erklärung **vor** einer potenziellen KI-Interaktion und detaillierte Erläuterung über eine normale Tastatur-/Screenreader-zugängliche Verlinkung.
- Eine ruhige, nicht dominante Informationshierarchie: Szenario und selbstbestimmte Antwort bleiben zentral; Transparenz bleibt gut auffindbar.
- Standardmäßig zugänglicher Inhalt statt nur aufklappbarer Hinweise. Keine Zeitlimits oder automatisches Ausblenden von Transparenzmeldungen.
- **WCAG 2.2, Level AA als Ziel**, nach allen anwendbaren Erfolgskriterien; insbesondere semantische Struktur, Kontrast, Tastatur, Fokus, Reflow, sichtbare Labels, Fehlermeldungen und Statusmeldungen testen.
- Ein Modell darf keine automatisierten Aussagen über Behinderung, Emotion, Religion oder Persönlichkeit aus Bedienverhalten ableiten.

## 6. Demo: expliziter Daten- und Funktionsumfang

Die statische Demo \`demo/index.html\`:

- funktioniert ohne Registrierung, Framework, Cookies, Webfonts und Drittanbieter-Skripte;
- zeigt **vorab redaktionell formulierte** Perspektiven; alle Varianten haben denselben Reflexionskern;
- verarbeitet eine optional angegebene Erstentscheidung **nur lokal im DOM**; der freie Begründungstext wird nicht analysiert oder an eine externe Stelle gesendet;
- löscht Formularinhalte über einen expliziten Knopf und beim Verlassen der Seite, soweit der Browser dies zulässt;
- ist **nicht** durch einen automatisierten oder manuellen WCAG-AA-Gesamtaudit zertifiziert.

**Grenze:** Das bloße Öffnen verlinkter Drittseiten kann durch deren Anbieter eigene Datenverarbeitung auslösen. Die Demo selbst lädt keine Drittressourcen automatisch nach.

## 7. Prüf- und Freigabekriterien

Vor Verknüpfung mit produktiven KI-Diensten: DPIA-/DSFA-Screening, Datenschutzrollen und Rechtsgrundlagen, Rechts-/Lizenzprüfung, Modell-Risikobewertung, Prompt-Injection-/Halluzinationsprüfungen, Bias-/Dissensprüfung, menschliche Review-Rollen und barrierefreie Interaktion dokumentieren. Keine Produktivsetzung, nur weil eine Textannotation „transparent“ erscheint.

Für die HTML-Demo: Tastatur-Ende-zu-Ende-Test, Screenreader-Tests, 320-CSS-px-Reflow, Zoom, 1.4.3/1.4.11-Kontrast, Fokus-/Statusverhalten, Browser-Netzwerkprüfung und Prüfung von Autonomie-/Privacy-Aussagen. **Offen:** Diese praktischen Tests sind noch durchzuführen.

## 8. Primärquellen und Projektverweise

- [EU-Kommission: Transparenzpflichten nach Art. 50 AI Act](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
- [AI Act Service Desk: FAQ und Geltungsdaten](https://ai-act-service-desk.ec.europa.eu/en/faq)
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C: Überblick WCAG 2](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [DSGVO, Verordnung (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [DailyEthics4all – Konzept](dailyethics4all.md)
- [DailyEthics4all – Datenschutz und WCAG](dailyethics4all-datenschutz-wcag.md)

**Freigabevermerk:** Fachliche, juristische, datenschutzrechtliche und accessibility-bezogene Prüfung durch unabhängige Verantwortliche: **ausstehend**.
