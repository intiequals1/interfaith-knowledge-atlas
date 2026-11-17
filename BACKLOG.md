# Start-Backlog

Die Einträge bilden die geplante Umsetzung nach Einrichtung des Repositorys ab. Aufwand in Personentagen für aktive Arbeit. Wartezeiten für Rechteklärung und Reviews kommen hinzu.

| ID | Prio | Aufgabe | Abhängigkeit | Aufwand | Abnahme |
| --- | --- | --- | --- | --- | --- |
| IKA-01 | P0 | Zuständigkeiten und vertraulichen Meldeweg einrichten | — | 2–3 | Projektleitung, Redaktion, Rechtekoordination und Abdeckung aller vier Fachgebiete dokumentiert. Ein Testfall erreicht die zuständige Rolle. |
| IKA-02 | P0 | Quellen- und Rechteinventar aufsetzen | IKA-01 | 4–6 | Für jede Tradition mindestens zwei konkrete Editionskandidaten mit dokumentiertem Rechteentscheid oder Metadatenroute. Freigaben unterscheiden Anzeige, Export und Indexierung. |
| IKA-03 | P0 | Annotationsleitfaden und Evaluationsplan erstellen | IKA-01, 02 | 4–6 | Mindestens zwölf Kalibrierungspaare, Gegenbeispiele, Labeldefinitionen und Protokoll für Dissens. Leitfaden trennt gelebte Praxis, religiöse und nichtreligiöse Begründungen sowie soziale Normen und Gesetze. Aufteilung, Metriken und Kriterien vor dem Test festgehalten. |
| IKA-04 | P0 | Schema zum Pilotmodell erweitern und Export absichern | IKA-02, 03 | 4–6 | Versionierte Rechte- und Prüfobjekte, referenzielle Integrität, Positiv- und Negativfälle für alle Ausgabekanäle. Sperrtest entfernt betroffene Repräsentationen. |
| IKA-05 | P1 | Pilotkorpus und Fachreview durchführen | IKA-02, 03, 04 | 18–28 | Ziel sind 40 Fundstellen und 24 freigabefähige Vergleiche. Jede Freigabe ist belegt. Auswahl und Lücken sind dokumentiert. |
| IKA-06 | P1 | Lexikalische Suche und Synopse umsetzen | IKA-04 | 7–10 | Filter, stabile Detail- und Quellenlinks, sichtbare Differenzen und Prüfstatus. Barrierearme Bedienung im Test mit synthetischen Daten. |
| IKA-07 | P1 | Hybridverfahren im Schattenbetrieb evaluieren | IKA-03, 05, 06 | 6–9 | Eingaben und Modell versioniert, BM25 und Hybrid anhand desselben zurückgehaltenen Testbestands verglichen. Rohmetriken und Fehlertypen reproduzierbar. |
| IKA-08 | P1 | Pilot abnehmen und veröffentlichungsfähigen Snapshot erzeugen | IKA-05, 06, 07 | 5–8 | Fachreview, Rechteprüfung, Sperrprobe, moderierter Nutzertest und dokumentierte Entscheidung über externen Pilot. |
| IKA-09 | P2 | JSON-LD-Export und Erweiterungsthema prüfen | IKA-08 | separat schätzen | PROV-O-/SKOS-Abbildung an Beispielen validiert. Priorisierung von Gerechtigkeit oder Menschenwürde anhand des Pilotbefunds. |

P0 bestimmt die Reihenfolge zu Beginn. IKA-05 und IKA-06 können nach Abschluss der Daten- und Rechteprüfung parallel laufen. Eine gesonderte Schätzung für IKA-09 folgt nach dem Pilotbericht.


## Ergänzungs-Backlog DailyEthics4all.io (eigenständiges Modul)

Die folgenden Aufgaben beziehen sich ausschließlich auf das **konzeptionelle Lernmodul**; bisher besteht keine produktive Plattform. Sie sind vor externen Tests zu priorisieren. Aufwände werden nach UX- und Datenschutz-Scope festgelegt.

| ID | Prio | Aufgabe | Abnahme |
| --- | --- | --- | --- |
| D4A-01 | P0 | Datenschutz- und Rollenmodell (Art. 6/9/25/28/32 DSGVO; Art. 35-Screening; Arbeitskontext) | Dokumentierte Datenflüsse und Zwecke; keine unbeabsichtigte Übermittlung von Reflexionen; Verantwortung und Rechtsgrundlagen geklärt; ggf. DSFA vor Pilot |
| D4A-02 | P0 | WCAG-2.2-AA-Akzeptanzmatrix und Co-Design | Prüffälle für sämtliche anwendbaren AA-Kriterien, Tastatur, Screenreader, Zoom/Reflow, Sprache und Fokus; Menschen mit Behinderungen in Usability-Tests |
| D4A-03 | P0 | Redaktions- und Nichtdiskriminierungsprotokoll für Szenarien | Rollen- und Perspektivenvielfalt; Quellennachweise; kein Moral-Scoring; fachlicher Freigabe- und Korrekturweg |
| D4A-04 | P1 | Datensparsamer Lernprototyp ohne Account | Ein Szenario, Erstentscheidung, alternative Linsen, Rückblick, Überspringen, lokale flüchtige Daten, optionaler Download; keine Antwort-Telemetrie |
| D4A-05 | P1 | Szenario-MVP mit Fachreviews | 12–20 fiktive Fälle (Management, Entwicklung, Sachbearbeitung), vier ethische Linsen, unterschiedliche legitime Interessen und Unsicherheitsoption |
| D4A-06 | P1 | Kombinierte Privacy-/Accessibility-/Security-Tests | Manuelle und automatisierte WCAG-Prüfung; Netzwerkmitschnitt ohne private Nutztexte; dokumentierte Blocker und behobene kritische Probleme |
| D4A-07 | P2 | Ethik-Pilot und Wirkungsforschung | Teilnahme freiwillig und von Arbeitgebersicht getrennt; präregistrierte Kriterien für Reflexionsqualität; kein personenbezogener Moral-Score |
| D4A-08 | P2 | Optionaler IKA-Referenzadapter | Nur geprüfte Atlas-Revisionen, explizites Opt-in und klare Quellen-/Differenzanzeige; keine religiösen Nutzerprofile |
| D4A-09 | P0 | KI-Transparenz an Oberfläche und Quellenmodell | KI-gestützte Entstehung und tatsächlicher Live-KI-Einsatz klar unterscheidbar; Modell/Version und Prüfstatus dokumentiert; keine ungeprüfte Angabe „menschlich freigegeben“; die Demo verlinkt den Transparenztext |
| D4A-10 | P1 | HTML-/CSS-Demo prüfen und für freigegebenen Pilot härten | Tastatur, Screenreader, Zoom, 320-CSS-px-Reflow, Farb- und Nicht-Text-Kontrast getestet; kein Absenden von Lernantworten, auch bei deaktiviertem JavaScript; barrierefreie Fehler-/Statusanzeigen; Findings dokumentiert |

**Release-Gate:** Kein personenbezogener Forschungs- oder Organisationsbetrieb, bevor Datenschutzverantwortung, Rechtsprüfung, ggf. DSFA, Freigabeverfahren und Accessibility-Nachweise dokumentiert sind. Siehe [Datenschutz, UX und WCAG 2.2](docs/dailyethics4all-datenschutz-wcag.md).
