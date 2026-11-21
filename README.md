# Interfaith Knowledge Atlas

## Wo Ethik für mich beginnt

Wer zu Hause erlebt, dass beim Essen alle etwas bekommen sollen, lernt eine Vorstellung von Fairness durch eine alltägliche Gepflogenheit. Aus solchen Gepflogenheiten wächst für mich **Sittlichkeit**, also das gelebte Verständnis davon, was wir einander schulden. Sie bildet eine Grundlage gesellschaftlicher Normen und Gesetze. **Ethik** entsteht für mich, wenn wir diese Sittlichkeit bewusst prüfen. Dann fragen wir, warum eine Regel gelten soll und für wen sie gerecht ist.

Das **Haus, in dem wir aufwachsen**, steht für die Menschen und das soziale Umfeld, die uns prägen. Dazu gehören religiöse und nichtreligiöse Überzeugungen, etwa humanistische oder philosophische. Der Atlas hält solche Prägungen fest, wo Quellen einen Bezug zu einer Aussage oder Gepflogenheit belegen.

## Was der Atlas untersucht

Der Interfaith Knowledge Atlas ist ein Forschungs- und Entwicklungsprojekt für den nachvollziehbaren Vergleich religiöser Aussagen aus Christentum, Judentum, Islam und Hinduismus. Der deutschsprachige Pilot untersucht Gegenseitigkeit. Jede geplante Gegenüberstellung verbindet konkrete Lesarten mit Editionsbelegen, Vergleichsgrund, Unterschieden und Prüfstatus.

**Projektstand** · Funktionsfähiges, statisch gehostetes Recherche-MVP mit Quellenhinweisen, lokaler Suche, Paarvergleich und getrenntem synthetischem Testbestand. Die vier Quellenkurzfassungen und sechs Verbindungen sind **nicht fachlich begutachtet**. Ein überprüfter wissenschaftlicher Korpus und die formale Evaluation sind weiterhin geplant.

| Einstieg | Inhalt |
| --- | --- |
| [Religionswissenschaftliches Glossar](glossar/index.html) | 40 Begriffe zu Synopse, Nichtzugehörigkeit, religiöser Praxis, Textinterpretation und Weltanschauungen |
| [Glossar-Dokumentation](docs/glossar.md) | Definitionen, Abgrenzungen, Forschungsquellen und Zuordnungsregeln |
| [Atlas-Anwendung](atlas/index.html) | Recherche-MVP mit lokaler Suche, Quellenreferenzen und synoptischen Vergleichshypothesen |
| [MVP-Dokumentation](docs/atlas-mvp.md) | Forschungsstatus, Datenherkunft, technische Umsetzung, Testverfahren und Grenzen |
| [HTML-Startseite](index.html) | Statischer Einstieg mit Projektübersicht, KI-Transparenz und Zugang zur Demo |
| [Konzeptpapier](docs/konzeptpapier.md) | Forschungsfragen, Vergleichsmethode, Provenienz, Evaluation und Roadmap |
| [DailyEthics4all.io – Lernkonzept](docs/dailyethics4all.md) | Tägliche freiwillige Ethik-Mikroszenarien, Reflexionsfluss und Forschungshypothesen |
| [Datenschutz, UX und WCAG 2.2](docs/dailyethics4all-datenschutz-wcag.md) | Privacy by Design, DSGVO-Prüfstationen, inklusiver Lernfluss und WCAG-2.2-AA-Abnahmekriterien |
| [KI-Transparenz](docs/ki-transparenz.md) | Offenlegung der KI-gestützten Entwurfsarbeit, Grenzen, Provenienz und Prüfstatus |
| [HTML-Demo](demo/index.html) | Responsive, datensparsames Mikroszenario mit KI-Transparenz, zugänglicher CSS-Gestaltung und lokalen Interaktionen |
| [Technische Richtlinien](docs/technik.md) | Datenvertrag, Architektur, Freigaberegeln und Betrieb |
| [Ethik und Rechte](docs/ethik-und-rechte.md) | Kontext, Rechteprüfung, Datenschutz und Sperrverfahren |
| [Mitwirken](CONTRIBUTING.md) | Beiträge, Review und Verantwortlichkeiten |
| [Start-Backlog](BACKLOG.md) | Prioritäten, Abhängigkeiten und Abnahmekriterien |
| [Schema](schemas/atlas-pilot.schema.json) und [Testdaten](data/fixtures/) | Kleiner, vollständig erfundener Beispieldatensatz |
| [Lizenzen](LICENSES.md) | Geltungsbereich und Bedingungen je Dateigruppe |

## Beispieldaten prüfen

Voraussetzung ist Python ab 3.10. Die Prüfung kontrolliert JSON Schema, referenzierte Revisionen und die Voraussetzungen des synthetischen Freigabefalls.

```sh
python3 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements-dev.txt
python scripts/validate_atlas.py data/fixtures/atlas-demo.json
```

Für die Entwicklung sind ausschließlich synthetische oder nach dem dokumentierten Verfahren freigegebene Eingaben vorgesehen. Quellenhinweise im Konzept dienen der Recherche. Religiöse Volltexte, fremde Übersetzungen und Editionsscans gehören bis zur geprüften Freigabe außerhalb des Repositorys.

## HTML-Demo lokal öffnen

Die [Startseite](index.html), der [Atlas](atlas/index.html) und die [DailyEthics4all-Demo](demo/index.html) liegen als HTML-Quellcode vor; ihre Bereitstellung erfolgt über den GitHub-Pages-Workflow. Für die lokale Vorschau das Repository klonen oder herunterladen. Im Repository-Stamm `python3 -m http.server 8000` starten und `http://localhost:8000/atlas/` öffnen; für die statische Startseite genügt `index.html` im Browser. Eine direkte `file://`-Öffnung des Atlas lädt die JSON-Dateien je nach Browser nicht. `demo/styles.css` und `demo/app.js` bedienen die Lern-Demo; für den Atlas gelten `atlas/atlas.css` und `atlas/atlas.js`. Die Reflexion bleibt lokal; es gibt keine Live-KI. Ohne JavaScript bleiben die allgemeinen Perspektiven als Text zugänglich. Vor einem Hosting sind Betreiberinformationen, Sicherheitsheader, Logging, DSGVO und eine vollständige manuelle WCAG-2.2-AA-Prüfung notwendig.
