"""Validate the shape and cross-references of a synthetic atlas snapshot."""

import argparse
import json
from pathlib import Path

from jsonschema import Draft202012Validator, FormatChecker


SCHEMA = Path(__file__).resolve().parents[1] / "schemas" / "atlas-pilot.schema.json"


def index_revisions(records):
    index = {f"{row['id']}@{row['revision']}": row for row in records}
    if len(index) != len(records):
        raise ValueError("Doppelte ID und Revision in einer Sammlung")
    return index


def check_snapshot(snapshot):
    works = index_revisions(snapshot["works"])
    editions = index_revisions(snapshot["editions"])
    passages = index_revisions(snapshot["passages"])
    readings = index_revisions(snapshot["readings"])
    comparisons = index_revisions(snapshot["comparisons"])

    for edition in editions.values():
        if edition["work"] not in works:
            raise ValueError(f"Unbekannte Werkrevision {edition['work']}")
    for passage in passages.values():
        if passage["edition"] not in editions:
            raise ValueError(f"Unbekannte Editionsrevision {passage['edition']}")
    for reading in readings.values():
        if reading["passage"] not in passages:
            raise ValueError(f"Unbekannte Fundstellenrevision {reading['passage']}")

    for key, comparison in comparisons.items():
        left, right = comparison["readings"]
        if left not in readings or right not in readings:
            raise ValueError(f"{key} verweist auf eine unbekannte Lesart-Revision")
        if readings[left]["id"] == readings[right]["id"]:
            raise ValueError(f"{key} muss zwei verschiedene Lesart-IDs vergleichen")

        reviews = comparison["reviews"]
        reviewers = {review["reviewer"] for review in reviews}
        if len(reviewers) != len(reviews) or comparison["author"] in reviewers:
            raise ValueError(f"{key} braucht unabhängige, eindeutige Prüfpersonen")
        if comparison["status"] != "approved":
            continue

        decision = comparison["decision"]
        approvals = sum(review["verdict"] == "approve" for review in reviews)
        if approvals < 2 or decision is None:
            raise ValueError(f"{key} braucht zwei Zustimmungen und eine Entscheidung")
        if decision["editor"] == comparison["author"]:
            raise ValueError(f"{key} braucht eine redaktionelle Entscheidung ohne Selbstfreigabe")
        if any(review["date"] > decision["date"] for review in reviews):
            raise ValueError(f"{key} hat ein Review nach dem Entscheidungsdatum")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("snapshot", type=Path)
    args = parser.parse_args()

    try:
        schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
        snapshot = json.loads(args.snapshot.read_text(encoding="utf-8"))
        Draft202012Validator.check_schema(schema)
        validator = Draft202012Validator(schema, format_checker=FormatChecker())
        error = next(validator.iter_errors(snapshot), None)
        if error:
            raise ValueError(f"{error.json_path}: {error.message}")
        check_snapshot(snapshot)
    except (OSError, ValueError) as error:
        parser.exit(1, f"Ungültig: {error}\n")

    print(f"Gültiger synthetischer Atlas-Datensatz ({len(snapshot['comparisons'])} Vergleiche)")


if __name__ == "__main__":
    main()
