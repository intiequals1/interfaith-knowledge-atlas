# DailyEthics4all.io — Datenschutz, UX und WCAG 2.2

**Version:** 0.1 · 17. November 2026  
**Anwendungsbereich:** Szenarioauswahl, spontane Urteile, Freitextreflexionen, Feedback, freiwillige Forschung und mögliche organisationsbezogene Nutzung.  
**Charakter:** Produktspezifikation und Review-Checkliste; keine abschließende Rechtsberatung oder Bestätigung bereits erreichter Konformität.

## 1. Datenschutzprinzipien (Privacy by Design & by Default)

**Risikoprofil:** Freie Reflexionen können auf Religionszugehörigkeit, Weltanschauung, politische Meinung, Gesundheit oder andere geschützte Merkmale schließen lassen. Selbst scheinbar harmlose Auswahlmuster können Profiling ermöglichen. Der Bezug zum Interfaith Knowledge Atlas erhöht das Risiko unzulässiger Zuschreibungen.

1. **Datensparsamkeit:** Zum Lesen und Bearbeiten eines Szenarios sind kein Account, echter Name, Arbeitgeber, Standort, Religionsangabe oder Mitarbeiter-ID nötig.
2. **Lokaler Standard:** Erste Entscheidungen und Freitexte bleiben im MVP **flüchtig im Nutzergerät**; keine Übertragung an den Server, keine Analytics-Events mit Texten oder Antworten. Beendigung der Session verwirft die Reflexion; expliziter lokaler Export als Nutzeraktion ist möglich. Browserabsturz kann daher Inhalte verlieren – dies klar anzeigen.
3. **Keine Zweckänderung:** Lernentscheidungen dürfen nicht zu Leistungs-, Bewerbungs-, Risiko-, Compliance- oder Glaubensprofilen aggregiert werden. Keine Arbeitgeberansicht einzelner Antworten, keine individuellen Rankings, keine verdeckten Zeit-/Klickanalysen.
4. **Besondere Kategorien:** Vor jeder späteren Speicherung prüfen, ob Art. 9 DSGVO betroffen ist. Erforderlich wären **sowohl** eine tragfähige Art.-6-Rechtsgrundlage **als auch** eine einschlägige Art.-9-Ausnahme. Eine pauschale Einwilligung rechtfertigt keine unbegrenzte Sammlung.
5. **Beschäftigtenkontext:** Freiwilligkeit darf nicht behauptet werden, wenn Beschäftigte bei Nichtteilnahme Nachteile befürchten müssen. Einwilligung ist im Machtgefälle Arbeitgeber/Arbeitnehmer regelmäßig keine tragfähige Standardlösung. Organisationseinsatz erst nach separater Rechtsprüfung; keine Pflicht-Übungen und keine HR-Integration.
6. **Transparenz:** Vor einer optionalen Datenerhebung: Verantwortlicher, Zweck, Rechtsgrundlage, Empfänger, Drittlandtransfer, Aufbewahrungsdauer, Rechte, Kontaktweg und ggf. automatisierte Verarbeitung verständlich erklären; Trennung von Betriebsfunktion, Forschung und Kommunikation.
7. **Sicherheitsmodell:** Minimierte Logs ohne Reflexionsinhalte, kein Drittanbieter-Tracking als Standard; Transportverschlüsselung; Zugriffskontrolle, getrennte Rechte, regelmäßige Überprüfung, Lösch- und Incident-Prozess. Bei zukünftiger Cloudspeicherung Verschlüsselung im Ruhezustand, rollenbasierte Berechtigung, Auftragsverarbeitungsvereinbarungen und dokumentierte Speicherorte.
8. **KI-Grenze:** Standardmäßig keine private Erstentscheidung/Reflexion an einen externen KI-Dienst senden. Redaktionell vorab geprüfte Erklärungen bevorzugen. Falls KI angeboten wird: separat aktivieren, Anbieter und Datenfluss vor Nutzung erläutern, nur notwendige/redigierte Inhalte senden, Verträge/Transfer prüfen; keine unbemerkte Modelltrainingsnutzung.
9. **Betroffenenrechte:** Für etwaige serverseitige Kontodaten verständliche Wege für Auskunft, Berichtigung, Export, Löschung und Widerspruch; Grenzen und gesetzliche Ausnahmen nennen. Für rein flüchtige lokale Daten klären, dass der Betreiber keine serverseitigen Kopien besitzt.
10. **Forschung:** gesonderte freiwillige Teilnahme; minimaler Datensatz, Trennung von Kontakt- und Forschungsdaten, ethische Freigabe und transparente Aufbewahrung. Kein automatisches Opt-in aus bloßer Nutzung.

**Verbindliche Prüfstationen:** Verzeichnis der Verarbeitungstätigkeiten (sofern anwendbar), Art.-6-Prüfung je Zweck, Art.-9-Screening, DSFA-Screening gemäß Art. 35 DSGVO und gegebenenfalls DSFA, Art.-28-Prüfung von Dienstleistern, Drittlandtransferprüfung, TOMs, Lösch-/Berechtigungskonzept und Datenschutzinformation vor Pilotbeginn.

**Vorschlag für eine Datenaufbewahrungsmatrix (erst nach Architekturentscheid verbindlich):**

| Datenart | Standard-MVP | Weitere Phase nur nach Freigabe |
| --- | --- | --- |
| Szenarien, Ethik-Linsen, Referenzen | öffentliche, versionierte Katalogdaten | redaktionell geprüfte Revisionen |
| Individuelle Antwort/Freitext | ausschließlich flüchtig lokal, nicht gesendet | optional privat gespeicherte Daten mit ausdrücklicher Aktion und klarer Löschfrist |
| Diagnose-Logs | minimal, ohne Freitext oder Antwort-ID | notwendige Sicherheitslogs mit festgelegter kurzer Frist |
| Nutzungsmetriken | keine personenbezogene Telemetrie | allenfalls datensparsame, aggregierte Messung mit gesonderter Rechtsprüfung |
| Forschung | keine Erhebung durch reguläre Nutzung | eigenes Opt-in, Protokoll und festgelegtes Löschdatum |

**Offene Entscheidung:** Für etwaige spätere Konten ist eine konkrete Fristenmatrix (z. B. je Datenart, Backups und Löschbestätigung) durch Betreiber/Datenschutzverantwortliche festzulegen. Keine unbelegten Aufbewahrungsversprechen.

## 2. UX: Lernfreiheit statt moralischer Steuerung

- **Kein Dark Pattern:** Kein vorangekreuztes Opt-in, keine versteckte Ablehnung, keine „schlechte Person“-Labels, keine manipulative Deadline, keine Gamification durch Beschämung.
- **Wahlfreiheit:** „Ich bin unsicher“, „Weitere Informationen nötig“, „Ich überspringe“, „Ich bleibe bei meiner Entscheidung“ und „Feedback ausblenden“ sind gültige Wege.
- **Begründung statt Normsetzung:** Rückmeldung als Perspektive mit Quellen, angenommenen Fakten und offenen Fragen; normative Positionen und Unsicherheiten ausdrücklich unterscheiden.
- **Transparente KI:** KI-generierte Bestandteile klar kennzeichnen; menschlich geprüfte Inhalte ebenfalls kennzeichnen; eigene Entscheidungen der Nutzenden bleiben ihnen zugeordnet, niemals als Modellantwort ausgegeben.
- **Einfachheit:** Ein Fall pro Ansicht, sinnvolle progressive Offenlegung, kurze Sätze, verständliche Begriffe mit Glossar, eindeutige Navigation, leicht verständliche Fehlerbehebung.
- **Inklusivität:** Geschlechtsneutrale und kulturübergreifend verständliche Formulierungen; Alternativbeispiele; keine implizite Annahme, alle Menschen seien religiös oder hätten denselben moralischen Ausgangspunkt.
- **Flexible Dauer:** 5–7 Minuten nur als Orientierung; keine Pflicht-Timer, keine Strafpunkte bei Unterbrechung; Szenario ohne Medienzwang nutzbar.
- **Rechte und Vertrauen:** Bereits vor Eingabe verständlich anzeigen, was gespeichert wird (standardmäßig nichts serverseitig) und was eine optionale KI-Funktion erhält.

## 3. Accessibility-Ziel: WCAG 2.2 AA (W3C)

**Vier Prinzipien:** wahrnehmbar, bedienbar, verständlich und robust. Ziel ist **WCAG 2.2 Stufe AA** für alle relevanten Wege, nicht nur für die Landingpage; WCAG 2.2 ist ein technischer Qualitätsstandard, dessen konkrete rechtliche Verbindlichkeit für einen Dienst gesondert geprüft werden muss. Besonders prüfen:

| WCAG-Erfolgskriterium | Konkreter Akzeptanztest für DailyEthics4all |
| --- | --- |
| **1.1.1 Nicht-Text-Inhalt (A)** | Piktogramme, Diagramme und illustrative Fälle besitzen äquivalente Texte; dekorative Grafiken werden ausgeblendet. |
| **1.3.1 Information und Beziehungen (A)** | Szenario, Handlungsoptionen, Ethik-Linsen, Fehlermeldungen sind semantisch korrekt ausgezeichnet; nicht allein durch Farbe verbunden. |
| **1.3.5 Eingabezweck bestimmen (AA)** | Ggf. personenbezogene Eingabefelder besitzen geeignete autocomplete-Semantik; im MVP werden solche Felder vermieden. |
| **1.4.3 Kontrast (AA)** | Normaler Text mindestens 4,5:1, großer Text mindestens 3:1 (mit normativen Ausnahmen). |
| **1.4.10 Umbruch/Reflow (AA)** | Nutzbar bei 320 CSS-Pixel Breite ohne horizontales Scrollen im üblichen Fließinhalt, soweit keine Ausnahme greift. |
| **1.4.11 Nicht-Text-Kontrast (AA)** | Wichtige UI-Grenzen und Zustandsindikatoren mindestens 3:1 (mit Ausnahmen). |
| **1.4.12 Textabstände (AA)** | Bei vergrößerten Textabständen keine Überlappung und kein Funktionsverlust. |
| **2.1.1 Tastatur (A)** | Alle Optionen, Hilfen, Wechsel zwischen Ethik-Linsen und Lösch-/Exportfunktionen ohne Maus erreichbar. |
| **2.2.1 Zeiteinteilung anpassbar (A)** | Keine erzwungenen Kurz-Timer für spontane Entscheidung; ggf. Sitzungsende kontrollierbar, soweit erforderlich. |
| **2.4.3 Fokus-Reihenfolge (A)** / **2.4.7 Fokus sichtbar (AA)** | Vorwärts-/Rückwärtsnavigation logisch, Fokus klar erkennbar. |
| **2.4.11 Fokus nicht verdeckt (AA, neu 2.2)** | Der fokussierte Kontrollpunkt verschwindet nicht hinter Sticky-Bars/Overlays. |
| **2.5.7 Ziehbewegungen (AA, neu 2.2)** | Jede Drag-Aktion hat eine gleichwertige Klick-/Tastaturalternative; besser: kein Drag-Zwang. |
| **2.5.8 Zielgröße Minimum (AA, neu 2.2)** | Zeigerziele erfüllen die 24×24-CSS-Pixel-Regel inkl. Ausnahmen; intern 44×44 px als Komfortziel. |
| **3.2.6 Konsistente Hilfe (A, neu 2.2)** | Hilfe/Kontakt bleibt an konsistenter Stelle. |
| **3.3.1 Fehlerkennung (A)** / **3.3.3 Fehlervorschläge (AA)** | Fehler konkret, textlich und korrigierbar; keine moralischen Fehlerlabels. |
| **3.3.7 Redundante Eingabe (A, neu 2.2)** | Vorher eingegebene Angaben im selben Prozess nicht unnötig erneut erfassen. |
| **3.3.8 Barrierefreie Authentifizierung Minimum (AA, neu 2.2)** | Falls Login folgt: keine kognitive Gedächtnisaufgabe ohne zulässige Alternative oder unterstützenden Mechanismus; Passwortmanager/Einfügen unterstützen. |
| **4.1.3 Statusmeldungen (AA)** | Gespeichert/gelöscht/Erklärung eingeblendet für assistive Technik zugänglich ohne unerwarteten Fokuswechsel. |

**Nicht auf Tabelle beschränken:** Sämtliche anwendbaren WCAG-2.2-AA-Kriterien sind in einer vollständigen Prüfliste nachzuweisen. Diese Auswahl priorisiert die typischen Risikostellen des Lernflusses.

## 4. Screenreader- und Interaktionsdesign

- Szenarientitel als H1; Fragestellung als H2; Optionen mit nativen Radio-Buttons innerhalb eines fieldset mit legend; Ethik-Linsen mit echten Buttons oder Tabs und korrektem Tastaturmodell.
- Feedback erst nach Nutzeraktion offenbaren; neue Abschnitte fokussierbar machen und Fokus nur nachvollziehbar setzen; Statusänderung als Live-Region, ohne vorlesende Dauerbeschallung.
- „Zuerst entscheiden“ nicht allein durch Farbwechsel darstellen; erste/zweite Entscheidung mit verständlichen Textlabels vergleichen.
- Sprachwechsel (Deutsch/Englisch etc.) mit korrekter Spracheinstellung im Dokument und bei abweichenden Zitaten; RTL-Inhalte müssen bidi-korrekt angezeigt werden.
- Vermeide animierte Countdowns, blinkende Erfolgsmeldungen oder rein visuelle Rankings; bei Bewegung systemweite reduced-motion-Präferenz beachten.
- Responsive Design für mobile Endgeräte, Zoom bis 200 % und Reflow; große Touchflächen, ausreichend Abstand, sichtbare Fokusrahmen und Skip-Link.
- Alternative zu längeren Freitexten: freiwillige Optionenauswahl oder Diktat-kompatibles Eingabefeld; nicht aus Sprache/Tipppausen auf persönliche Eigenschaften schließen.
- Datenschutzinformationen und Löschfunktion müssen **gleich gut zugänglich** sein wie die Übungen selbst.

## 5. Prüfverfahren und Release-Gates

**Vor Freigabe eines Prototyps:**
1. Desktop und Mobile: vollständige Tastaturbedienung, sichtbarer Fokus, Zoom, Reflow, Kontrast und Textabstand.
2. Assistive Technik: mindestens ein realer Screenreader-Workflow auf Desktop und Mobile; manueller Test der Szenarien, Rückmeldung, Datenschutzinformationen, Export und Löschung.
3. Automatisierte Prüfungen (z. B. axe-core) ergänzend, nicht ersetzend; dokumentierte menschliche Testfälle und Prüfung mit Menschen mit Behinderungen.
4. Datenschutz: Datenflussprüfung im Browser/Netzwerk – ohne ausdrückliche Wahl dürfen keine Reflexionstexte, ausgewählten Urteile oder KI-Prompts abfließen.
5. Sicherheits-/Rechteprüfung: Beispieldaten dürfen keine realen Personen oder ungeklärten religiösen Volltexte enthalten.
6. Accessibility-Probleme priorisieren, dokumentieren, mit Verantwortlichen und Frist beheben; vor allgemeinem Launch wesentliche Hindernisse beseitigen.
7. Jede inhaltliche KI-/UX-Änderung wiederholt das relevante Accessibility-, Privacy- und Bias-Review.

**MVP-Definition of Done:** Alle kritischen Hauptpfade für WCAG-2.2-AA geprüft; keine bekannten blockierenden Barrieren; datensparsame lokale Standardeinstellung technisch nachgewiesen; Rechts- und Datenschutzprüfung dokumentiert. Ein automatischer Score oder ein bloßes Accessibility-Statement gilt nicht als Beleg vollständiger Konformität.

## 6. Verantwortlichkeit und Rechtsrahmen

Die DSGVO ist für einschlägige Verarbeitung personenbezogener Daten verbindlich; die Pflichten hängen vom tatsächlichen Betriebs- und Datenmodell ab. Das **österreichische Barrierefreiheitsgesetz (BaFG)** und weitere einschlägige EU-/AT-Vorschriften sind je nach Dienstkategorie, Anbieter und Zeitpunkt gesondert zu prüfen; WCAG-Konformität und Rechtskonformität dürfen nicht gleichgesetzt werden.

Vor einem Organisations- oder Forschungsbetrieb müssen Betreiber, Datenschutzverantwortliche, Accessibility-Fachpersonen und Ethik-/Domänenreview verantwortlich benannt werden.


**Konkreter HTML-Prototyp:** [demo/index.html](../demo/index.html) verwendet semantische Landmarks, Fokus- und Kontrastgestaltung und einen lokal ausgeführten Reflexionsablauf. [KI-Transparenz](ki-transparenz.md) ist im Interface direkt auffindbar. **Die Implementierung ist eine Demo, keine bestandene WCAG- oder DSGVO-Prüfung.** Vor öffentlicher Bereitstellung sind Tests mit Tastatur, Screenreader, Reflow/Zoom, statischer Codeprüfung, Netzwerkmitschnitt und Prüfung realer Hosting-Logs erforderlich.

## 7. Primärquellen

- [W3C: WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [W3C: WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/)
- [W3C: WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [W3C: What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [EU: DSGVO – Verordnung (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [EDPB: Rechtmäßige Verarbeitung](https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en)
- [Europäische Kommission: Rechtliche Verarbeitungsgrundlagen](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en)

*Diese Dokumentation ist eine Spezifikation für künftige Implementierung; sie ist weder eine rechtsverbindliche Datenschutzerklärung noch ein WCAG-Konformitätszertifikat.*
