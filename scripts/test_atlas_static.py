#!/usr/bin/env python3
"""Static integrity checks for the public Atlas MVP. Standard library only.

These tests do NOT constitute a WCAG conformance audit or scientific review.
"""
from __future__ import annotations

import json
import re
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "data/catalog/research-candidates.json"
FIXTURE = ROOT / "data/fixtures/atlas-demo.json"
RELATIONS = {
    "same_core", "partial_overlap", "thematic", "tension",
    "contradiction", "no_supported_relation", "insufficient_evidence",
}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.fragments = []
        self.scripts = []
        self.styles = []
        self.labels = []
        self.tags = []
        self.languages = []
        self.h1_count = 0

    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)
        self.tags.append(tag)
        if "id" in attr:
            self.ids.append(attr["id"])
        if tag == "html":
            self.languages.append(attr.get("lang"))
        if tag == "h1":
            self.h1_count += 1
        if tag == "label":
            self.labels.append(attr.get("for"))
        if tag == "a":
            href = attr.get("href", "")
            if href.startswith("#"):
                self.fragments.append(href[1:])
        if tag == "script" and attr.get("src"):
            self.scripts.append(attr["src"])
        if tag == "link" and attr.get("rel") == "stylesheet":
            self.styles.append(attr.get("href"))


class AtlasTests(unittest.TestCase):
    def test_research_references(self):
        data = json.loads(CATALOG.read_text(encoding="utf-8"))
        self.assertEqual(data["dataset_type"], "research_candidates")
        self.assertEqual(data["editorial_status"], "unreviewed")
        entries = data["entries"]
        self.assertGreaterEqual(len(entries), 4)
        ids = [entry["id"] for entry in entries]
        self.assertEqual(len(ids), len(set(ids)))
        self.assertEqual(
            {"Christentum", "Judentum", "Islam", "Hinduismus"},
            set(entry["tradition"] for entry in entries),
        )
        for entry in entries:
            self.assertEqual(entry["status"], "unreviewed")
            for key in ("summary", "work", "locator", "genre", "context", "limitation", "source_label"):
                self.assertTrue(entry[key].strip(), (entry["id"], key))
            url = urlparse(entry["source_url"])
            self.assertEqual(url.scheme, "https")
            self.assertTrue(url.hostname)

        pairs = set()
        for comparison in data["comparisons"]:
            self.assertEqual(comparison["status"], "unreviewed")
            self.assertIn(comparison["relation"], RELATIONS)
            self.assertNotEqual(comparison["left"], comparison["right"])
            self.assertIn(comparison["left"], ids)
            self.assertIn(comparison["right"], ids)
            self.assertTrue(comparison["shared"].strip())
            self.assertTrue(comparison["rationale"].strip())
            self.assertTrue(comparison["differences"])
            key = frozenset((comparison["left"], comparison["right"]))
            self.assertNotIn(key, pairs, "Duplicate undirected comparison")
            pairs.add(key)

    def test_synthetic_references(self):
        data = json.loads(FIXTURE.read_text(encoding="utf-8"))
        self.assertEqual(data["dataset_type"], "synthetic")
        self.assertEqual(data["license"], "CC0-1.0")
        works = {f'{x["id"]}@{x["revision"]}' for x in data["works"]}
        editions = {f'{x["id"]}@{x["revision"]}' for x in data["editions"]}
        passages = {f'{x["id"]}@{x["revision"]}' for x in data["passages"]}
        readings = {f'{x["id"]}@{x["revision"]}' for x in data["readings"]}
        self.assertTrue(all(x["work"] in works for x in data["editions"]))
        self.assertTrue(all(x["edition"] in editions for x in data["passages"]))
        self.assertTrue(all(x["passage"] in passages for x in data["readings"]))
        for item in data["comparisons"]:
            self.assertTrue(all(r in readings for r in item["readings"]))
            self.assertEqual(len(item["readings"]), 2)

    def test_local_assets_and_navigation(self):
        for relative in ("index.html", "atlas/index.html", "demo/index.html", "glossar/index.html"):
            path = ROOT / relative
            parser = PageParser()
            parser.feed(path.read_text(encoding="utf-8"))
            self.assertEqual(parser.languages, ["de"], relative)
            self.assertEqual(parser.h1_count, 1, relative)
            self.assertIn("main", parser.tags)
            self.assertEqual(len(parser.ids), len(set(parser.ids)), relative)
            self.assertTrue(set(parser.fragments).issubset(parser.ids), relative)
            for asset in parser.scripts + parser.styles:
                self.assertFalse(asset.startswith("http"), (relative, asset))
                self.assertTrue((path.parent / asset).is_file(), (relative, asset))

    def test_atlas_interactions_are_private(self):
        js = (ROOT / "atlas/atlas.js").read_text(encoding="utf-8")
        self.assertIn("textContent", js)
        self.assertNotIn("innerHTML", js)
        for forbidden in ("localStorage", "sessionStorage", "sendBeacon", "XMLHttpRequest"):
            self.assertNotIn(forbidden, js)
        self.assertIn('credentials: "same-origin"', js)
        html = (ROOT / "atlas/index.html").read_text(encoding="utf-8")
        self.assertIn('id="katalog-status"', html)
        self.assertIn('id="vergleich-status"', html)
        self.assertIn('id="modus"', html)
        self.assertIn('id="suche"', html)


if __name__ == "__main__":
    unittest.main(verbosity=2)
