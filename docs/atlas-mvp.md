# Atlas-MVP: Funktionen, Datenqualität, Betrieb und Grenzen

**Version:** 0.1 · 17. November 2026  
**Status:** funktionaler Forschungsprototyp (keine begutachtete Textedition, keine zertifizierte WCAG-Konformität)  
**Oberfläche:** [Atlas öffnen](../atlas/index.html)

## 1. Was bereits funktioniert

Der Atlas verfügt über eine statisch gehostete Oberfläche mit folgenden Funktionen:

- **Stichwortsuche** in den lokal geladenen Metadaten, Themenbegriffen und eigenständig formulierten Kurzinterpretationen. Die Suche ist deterministisch und **nicht KI-basiert**.
- **Traditionsfilter** und Umschaltung zwischen zwei ausdrücklich getrennten Beständen.
- **Fundstellenkarten** mit Gattung, Umfang, Handlungstyp, Kontext, Grenzen und Link zu den Quellen.
- **Synoptischer Vergleich** zweier ausgewählter Lesarten. Für sechs Kombinationen im Recherchebestand sind Hypothesen zu Gemeinsamkeiten, Unterschieden und Relationstyp hinterlegt.
- **Synthetischer Testmodus** auf Grundlage von \`data/fixtures/atlas-demo.json\`; künstliche Testreview-Einträge sind niemals echte wissenschaftliche Genehmigungen.
- **Responsives HTML/CSS**, Tastatur-bedienbare native Formulare, zugängliche Ergebnisstatus und Inhalt ohne JavaScript (Direktlinks statt dynamischer Suche).
- **Keine Benutzerkonten, Cookies, Antwortspeicherung, Tracking- oder KI-API-Aufrufe**. Der Browser lädt lediglich die JSON-Dateien des eigenen GitHub-Pages-Hosts; beim Verlassen externer Quellenlinks gelten die Datenschutzregeln der jeweiligen Anbieter.

Technische Dateien:
- [atlas/index.html](../atlas/index.html)
- [atlas/atlas.css](../atlas/atlas.css)
- [atlas/atlas.js](../atlas/atlas.js)
- [Recherche-Katalog](../data/catalog/research-candidates.json)
- [Synthetische Testdaten](../data/fixtures/atlas-demo.json)
- [Integritätsprüfung](../scripts/test_atlas_static.py)

## 2. Datenqualität und wissenschaftliche Grenzen

### 2.1 Zwei verschiedene Datenarten

| Bereich | Rechtlicher und wissenschaftlicher Charakter | Darstellung |
| --- | --- | --- |
| \`research_candidates\` | Reale, verlinkte Quellenreferenzen. Zusammenfassungen, Verknüpfungen und Differenzanalysen sind **KI-gestützt entworfene, fachlich ungeprüfte Hypothesen**. | „Recherchekandidat – nicht fachlich begutachtet“ |
| \`synthetic\` | Ausschließlich erfundene Texte und Quellenkennungen. Etwaige Freigabestatus simulieren nur einen Softwaretest. | „Erfundenes Testbeispiel – der Prüfstatus ist nur simuliert“ |

**Wichtig:** Quellenlinks belegen die Existenz der genannten Fundstellen, nicht automatisch die Richtigkeit jeder Kurzdeutung oder die semantische Äquivalenz der Aussagen. Vor Freigabe sind Editions-, Übersetzungs-, Kontext-, Auslegungs- und Rechteprüfung notwendig.

### 2.2 Der Recherchebestand

Für das erste Thema „Gegenseitigkeit“ enthält der Katalog Fundstellenhinweise zu:

1. Evangelium nach Matthäus 7,12, mit Bibelserver-Link.
2. Babylonischer Talmud, Schabbat 31a:6, mit Sefaria-Link.
3. Sahih al-Bukhari 13, mit Sunnah.com-Link. **Hadith, kein Koranvers.**
4. Mahabharata, Anushasana Parva, Section 113 in einer bestimmten englischen Zählung. **Abschnitts- und Verszählungen variieren je nach Edition**; eine genaue Edition/Sanskrit-Abgleichung ist vor Freigabe nötig.

Die Plattform übernimmt keine längeren fremden Textzitate oder modernen Übersetzungsfassungen. Kurzzusammenfassungen sind als **eigene Paraphrasen ohne wissenschaftliche Freigabe** kenntlich gemacht. Das Modell ist für zusätzliche Traditionen, Texte und Themen erweiterbar, enthält sie derzeit aber noch nicht.

### 2.3 Review und spätere Publikationsfreigabe

Für einen wissenschaftlich freigegebenen Datensatz wären mindestens folgende Schritte nötig:

1. Editions- und Rechteinventar für jede Textrepräsentation.
2. Konkret belegte Lesart mit Gattung, Überlieferungskontext, Adressatenkreis und maßgeblicher Übersetzung.
3. Prüfung durch fachkundige Personen der betreffenden Tradition, soweit möglich aus mehreren Perspektiven.
4. Unabhängige Prüfung der Vergleichshypothese (inklusive möglicher Nicht-Äquivalenz und Dissens).
5. Redaktionelle Freigabe mit Rollen, Datum, Version und nachvollziehbarer Revision.
6. Verbindliche Sperr-, Korrektur- und Widerrufsverfahren für fehlerhafte oder unzulässig veröffentlichte Daten.

Der aktuelle Datentyp \`research_candidates\` unterstützt **ausschließlich** den Status \`unreviewed\`; eine bloße Änderung dieses Feldes zu \`approved\` würde keine Freigabe darstellen. Ein separates, versioniertes Review- und Rechteobjekt ist vor produktiver wissenschaftlicher Veröffentlichung zu entwickeln.

## 3. Datenschutz und Barrierefreiheit

Die Oberfläche speichert Suche und Auswahl nur flüchtig im Browser. Die angebotenen Direktlinks führen externe Seiten auf, für die eigene Regeln gelten. Bei GitHub Pages können technische Server-/Zugriffslogs des Hostingdienstes anfallen; keine pauschale Aussage „überhaupt keine Datenverarbeitung“ ist zulässig.

**Ziel:** [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/). Bereits technisch vorgesehen sind semantische Überschriften, Skip-Link, sichtbarer Fokus, Mindestgrößen für Buttons, responsive Layouts, Textlabels, \`aria-live\`-Meldungen und ein JavaScript-freier Quellenzugang. **Nicht nachgewiesen** sind vollständige Konformität, Bedienbarkeit mit allen Screenreadern und browserübergreifende Kompatibilität.

Zu dokumentierende manuelle Tests: Tastatur von oben bis unten, Fokus nach Vergleichsausgabe, 320-CSS-Pixel-Reflow, Zoom auf 200/400 %, Kontrast einschließlich Randlinien, Textabstände, Screenreader auf Desktop und Mobile, High-Contrast-Modus und Prüfung aller verlinkten Prozessschritte. Siehe [Datenschutz- und Accessibility-Konzept](dailyethics4all-datenschutz-wcag.md).

## 4. Lokaler Betrieb und automatisierte Prüfung

GitHub Pages liefert die Seite aus dem Repository-Unterpfad \`/interfaith-knowledge-atlas/atlas/\`, sofern der Deploy-Workflow erfolgreich abgeschlossen wurde.

Für lokale Tests im **Repository-Hauptverzeichnis**:

~~~sh
python3 scripts/test_atlas_static.py
python3 -m http.server 8000
~~~

Anschließend öffnen: \`http://localhost:8000/atlas/\`.

Die Seite benötigt einen HTTP-Webserver für das Laden lokaler JSON-Daten. Ein direktes Öffnen via \`file://\` kann wegen der Browser-Sicherheitsregeln fehlschlagen; dann erscheint eine Fehlermeldung.

Die GitHub-Actions-Datei \`.github/workflows/static.yml\` startet die Integritätsprüfung vor dem Pages-Deployment. Diese prüft u. a. Katalog-ID-Beziehungen, Quellen-URLs, synthetische Datenreferenzen, Navigation und lokale Assets. Sie ist **kein** End-to-End-Test in einem echten Browser und ersetzt keinen Fachaudit.

## 5. Nächste Entwicklungsschritte

- **IKA-10 (P0):** Annotierungs- und Quellenreview inklusive konkreter deutscher/Originaleditionen und offener Geltungsbereiche.
- **IKA-11 (P0):** Versioniertes Freigabe-, Rechte- und Widerspruchsmodell für echte Lesarten und Vergleiche; keine Selbstfreigabe durch KI.
- **IKA-12 (P1):** Zitierfähige Vergleichs-URLs, Revisionen und strukturierte JSON-LD/PROV-O-Provenienz.
- **IKA-13 (P1):** Menschlich evaluierter Hybrid-Suchversuch (BM25 plus freigegebene mehrsprachige semantische Embeddings). Keine automatische Freigabe durch Ähnlichkeitswerte.
- **IKA-14 (P1):** Vollständige WCAG-2.2-AA-Tests mit Screenreader, Tastatur und Personen mit Behinderungen.
- **IKA-15 (P2):** Weitere Themen wie Gerechtigkeit, Verteilung und Menschenwürde erst nach Quellencuration und fachlichem Review.

## 6. KI-Transparenz

Konzeption und Codestruktur sind im Dialog mit ChatGPT **GPT-6** entstanden. Die Vergleichshypothesen wurden KI-gestützt entworfen, die operativen Such- und Vergleichsfunktionen arbeiten ohne Live-KI. Kein Ergebnis ist als von unabhängigen Religionsexpertinnen und -experten bestätigt auszugeben, solange die Prüfung nicht dokumentiert ist.

Siehe [KI-Transparenz und Provenienz](ki-transparenz.md), [Konzeptpapier](konzeptpapier.md), [Technische Richtlinien](technik.md) und [Ethik und Rechte](ethik-und-rechte.md).
