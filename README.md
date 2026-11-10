# Interfaith Knowledge Atlas

## Wo Ethik für mich beginnt

Wer zu Hause erlebt, dass beim Essen alle etwas bekommen sollen, lernt eine Vorstellung von Fairness durch eine alltägliche Gepflogenheit. Aus solchen Gepflogenheiten wächst für mich **Sittlichkeit**, also das gelebte Verständnis davon, was wir einander schulden. Sie bildet eine Grundlage gesellschaftlicher Normen und Gesetze. **Ethik** entsteht für mich, wenn wir diese Sittlichkeit bewusst prüfen. Dann fragen wir, warum eine Regel gelten soll und für wen sie gerecht ist.

Das **Haus, in dem wir aufwachsen**, steht für die Menschen und das soziale Umfeld, die uns prägen. Dazu gehören religiöse und nichtreligiöse Überzeugungen, etwa humanistische oder philosophische. Der Atlas hält solche Prägungen fest, wo Quellen einen Bezug zu einer Aussage oder Gepflogenheit belegen.

## Was der Atlas untersucht

Der Interfaith Knowledge Atlas ist ein Forschungs- und Entwicklungsprojekt für den nachvollziehbaren Vergleich religiöser Aussagen aus Christentum, Judentum, Islam und Hinduismus. Der deutschsprachige Pilot untersucht Gegenseitigkeit. Jede geplante Gegenüberstellung verbindet konkrete Lesarten mit Editionsbelegen, Vergleichsgrund, Unterschieden und Prüfstatus.

**Projektstand** · Konzept und validierbare synthetische Beispieldaten. Die Webanwendung, der Forschungskorpus und die Evaluation sind im Backlog geplant.

| Einstieg | Inhalt |
| --- | --- |
| [Konzeptpapier](docs/konzeptpapier.md) | Forschungsfragen, Vergleichsmethode, Provenienz, Evaluation und Roadmap |
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
