#!/usr/bin/env python3
"""Build static corpus index for the McKinlay Water-Risk Corpus Assistant."""

from __future__ import annotations

import json
import math
import os
import re
import sys
from datetime import datetime, timezone

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)

OUTPUT_DIR = os.path.join(WORKSPACE, "output")
DATA_ROOT = os.path.join(WORKSPACE, "site", "public", "data")
CORPUS_ROOT = os.path.join(WORKSPACE, "site", "public", "corpus")
METHODS_FILE = os.path.join(WORKSPACE, "New Statistical Methods.md")

INTERVAL_HEADER_RE = re.compile(
    r"^### (\d+(?:\.\d+)?) m MD — Interval ([\d.]+) – ([\d.]+) m\s*$",
    re.MULTILINE,
)
METHOD_HEADER_RE = re.compile(r"^## Method (\d) — (.+)$", re.MULTILINE)


def load_json(path: str):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def write_json(path: str, data) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")


def markdown_to_plain(text: str) -> str:
    """Light cleanup for searchable plain text."""
    plain = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    plain = re.sub(r"`([^`]+)`", r"\1", plain)
    plain = re.sub(r"^#+\s*", "", plain, flags=re.MULTILINE)
    plain = re.sub(r"^\|", "", plain, flags=re.MULTILINE)
    plain = re.sub(r"\s+", " ", plain)
    return plain.strip()


def parse_interpretation_sections(md_path: str) -> dict[float, dict]:
    """Return {depth: {top, bot, title, detail_markdown}} from interpretation MD."""
    with open(md_path, encoding="utf-8") as f:
        content = f.read()

    matches = list(INTERVAL_HEADER_RE.finditer(content))
    sections: dict[float, dict] = {}

    for i, match in enumerate(matches):
        depth = float(match.group(1))
        top = float(match.group(2))
        bot = float(match.group(3))
        start = match.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        block = content[start:end].strip()
        block = re.sub(r"\n---\s*$", "", block).strip()
        title = match.group(0).lstrip("# ").strip()
        sections[depth] = {
            "top": top,
            "bot": bot,
            "title": title,
            "detail_markdown": block,
        }

    return sections


def match_md_section(
    md_sections: dict[float, dict],
    interval: dict,
) -> dict | None:
    """Match interpretation section to interval (exact depth, then top/bot, then nearest)."""
    depth = float(interval["depth"])
    if depth in md_sections:
        return md_sections[depth]

    top = float(interval["top"])
    bot = float(interval["bot"])
    for section in md_sections.values():
        if abs(section["top"] - top) <= 0.25 and abs(section["bot"] - bot) <= 0.25:
            return section

    if not md_sections:
        return None

    nearest_depth = min(md_sections.keys(), key=lambda d: abs(d - depth))
    if abs(nearest_depth - depth) <= 1.0:
        return md_sections[nearest_depth]
    return None


def build_interval_summary(interval: dict) -> dict:
    return {
        "pct_ss": interval.get("pct_ss"),
        "grain": interval.get("grain"),
        "poro_class": interval.get("poro_class"),
        "loose_grains": bool(interval.get("loose_grains")),
        "fluor": interval.get("fluor"),
        "RQI": interval.get("RQI"),
        "WRCI": interval.get("WRCI"),
        "risk_class": interval.get("risk_class"),
        "flags": list(interval.get("flags") or []),
        "long_desc": interval.get("long_desc") or "",
    }


TOKEN_RE = re.compile(r"[a-z0-9]{2,}")


def tokenize_search_text(text: str) -> list[str]:
    return TOKEN_RE.findall(text.lower())


def build_bm25_index(chunks: list[dict]) -> dict:
    """Precompute BM25 term frequencies and IDF for client-side hybrid search."""
    k1 = 1.5
    b = 0.75
    documents: list[dict] = []
    df: dict[str, int] = {}

    for chunk in chunks:
        tokens = tokenize_search_text(f"{chunk.get('title', '')} {chunk.get('text', '')}")
        tf: dict[str, int] = {}
        for token in tokens:
            tf[token] = tf.get(token, 0) + 1
        dl = len(tokens)
        documents.append({"id": chunk["id"], "dl": dl, "tf": tf})
        for token in set(tokens):
            df[token] = df.get(token, 0) + 1

    n_docs = len(documents)
    avg_dl = sum(doc["dl"] for doc in documents) / n_docs if n_docs else 1.0
    idf = {
        term: math.log((n_docs - freq + 0.5) / (freq + 0.5) + 1.0)
        for term, freq in df.items()
    }

    return {
        "k1": k1,
        "b": b,
        "avg_dl": avg_dl,
        "document_count": n_docs,
        "idf": idf,
        "documents": documents,
    }


def interpretation_path(alias: str) -> str:
    return os.path.join(OUTPUT_DIR, f"{alias}_McKinlay_Cuttings_Interpretation.md")


def pay_summary_path(display: str) -> str:
    return os.path.join(OUTPUT_DIR, display.replace("/", "-"), "pay-summary.md")


def process_summary_path(alias: str) -> str:
    return os.path.join(OUTPUT_DIR, f"{alias}_Process_Summary.md")


def build_interval_index(
    alias: str,
    display: str,
    intervals_payload: dict,
    md_sections: dict[float, dict],
    interpretation_rel: str,
) -> tuple[dict, list[dict]]:
    records = []
    chunks = []
    missing_md = []

    for interval in intervals_payload.get("intervals", []):
        depth = float(interval["depth"])
        md = match_md_section(md_sections, interval)
        if md is None:
            missing_md.append(depth)
            detail_markdown = ""
            top = float(interval["top"])
            bot = float(interval["bot"])
            title = f"{depth:g} m MD — {display}"
        else:
            detail_markdown = md["detail_markdown"]
            top = md["top"]
            bot = md["bot"]
            title = md["title"]

        record = {
            "alias": alias,
            "depth": depth,
            "top": top,
            "bot": bot,
            "summary": build_interval_summary(interval),
            "detail_markdown": detail_markdown,
            "source": {
                "file": interpretation_rel,
                "anchor": f"{depth:g}",
            },
        }
        records.append(record)

        chunks.append(
            {
                "id": f"{alias}:{depth:g}:interval",
                "type": "interval",
                "alias": alias,
                "depth": depth,
                "title": f"{title} — {display}",
                "text": markdown_to_plain(
                    f"{record['summary'].get('long_desc', '')}\n{detail_markdown}"
                ),
                "detail_markdown": detail_markdown,
                "source": interpretation_rel,
            }
        )

    if missing_md:
        print(
            f"  Warning: {alias} missing interpretation MD for {len(missing_md)} interval(s)",
            file=sys.stderr,
        )

    payload = {
        "alias": alias,
        "display": display,
        "interval_count": len(records),
        "intervals": records,
    }
    return payload, chunks


def index_pay_summary(alias: str, display: str) -> tuple[dict | None, dict | None]:
    path = pay_summary_path(display)
    rel = os.path.relpath(path, WORKSPACE).replace("\\", "/")
    if not os.path.isfile(path):
        print(f"  Warning: missing pay summary {path}", file=sys.stderr)
        return None, None

    with open(path, encoding="utf-8") as f:
        markdown = f.read()

    doc = {
        "alias": alias,
        "display": display,
        "type": "pay_summary",
        "title": f"Pay Summary — {display}",
        "markdown": markdown,
        "source": rel,
    }
    chunk = {
        "id": f"{alias}:pay_summary",
        "type": "pay_summary",
        "alias": alias,
        "title": doc["title"],
        "text": markdown_to_plain(markdown),
        "detail_markdown": markdown,
        "source": rel,
    }
    return doc, chunk


def index_process_summary(alias: str, display: str) -> tuple[dict | None, dict | None]:
    path = process_summary_path(alias)
    rel = os.path.relpath(path, WORKSPACE).replace("\\", "/")
    if not os.path.isfile(path):
        print(f"  Warning: missing process summary {path}", file=sys.stderr)
        return None, None

    with open(path, encoding="utf-8") as f:
        markdown = f.read()

    doc = {
        "alias": alias,
        "display": display,
        "type": "process_summary",
        "title": f"Process Summary — {display}",
        "markdown": markdown,
        "source": rel,
    }
    chunk = {
        "id": f"{alias}:process_summary",
        "type": "process_summary",
        "alias": alias,
        "title": doc["title"],
        "text": markdown_to_plain(markdown),
        "detail_markdown": markdown,
        "source": rel,
    }
    return doc, chunk


def index_methods() -> tuple[dict, list[dict]]:
    with open(METHODS_FILE, encoding="utf-8") as f:
        content = f.read()

    matches = list(METHOD_HEADER_RE.finditer(content))
    methods = []
    chunks = []
    rel = os.path.relpath(METHODS_FILE, WORKSPACE).replace("\\", "/")

    slug_map = {
        "1": "1-wrci",
        "2": "2-zscore",
        "3": "3-spearman",
        "4": "4-jaccard",
        "5": "5-clustering-ks",
    }

    for i, match in enumerate(matches):
        method_num = match.group(1)
        method_title = match.group(2).strip()
        start = match.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        block = content[start:end].strip()
        slug = slug_map.get(method_num, method_num)
        method_id = f"method:{slug}"
        title = f"Method {method_num} — {method_title}"

        entry = {
            "id": method_id,
            "method_number": int(method_num),
            "title": title,
            "markdown": block,
            "source": rel,
        }
        methods.append(entry)
        chunks.append(
            {
                "id": method_id,
                "type": "method",
                "title": title,
                "text": markdown_to_plain(block),
                "detail_markdown": block,
                "source": rel,
            }
        )

    if len(methods) != 5:
        raise RuntimeError(f"Expected 5 method chunks in {METHODS_FILE}, found {len(methods)}")

    return {"source": rel, "methods": methods}, chunks


def build_stats_index(wells: list[dict]) -> dict:
    generated = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    entries = [
        {
            "id": "stats:correlations",
            "label": "Spearman rank-correlation matrices (all wells)",
            "path": "data/stats/correlations.json",
            "type": "stats",
        },
        {
            "id": "stats:jaccard",
            "label": "Jaccard similarity matrices and Jena analog rankings",
            "path": "data/stats/jaccard.json",
            "type": "stats",
        },
        {
            "id": "stats:clusters",
            "label": "Hierarchical clustering dendrogram and cluster assignments",
            "path": "data/stats/clusters.json",
            "type": "stats",
        },
        {
            "id": "stats:ks",
            "label": "Kolmogorov–Smirnov significance tests (Jena vs analogs)",
            "path": "data/stats/ks.json",
            "type": "stats",
        },
    ]

    for well in wells:
        alias = well["alias"]
        display = well["display"]
        entries.append(
            {
                "id": f"water_risk:{alias}",
                "label": f"Water-risk flagged zones — {display}",
                "path": f"data/water_risk/{alias}.json",
                "type": "stats",
                "alias": alias,
            }
        )

    return {"generated_at": generated, "entries": entries}


def prepare_output_dirs() -> None:
    readme_path = os.path.join(CORPUS_ROOT, "README.md")
    readme = ""
    if os.path.isfile(readme_path):
        with open(readme_path, encoding="utf-8") as f:
            readme = f.read()

    for sub in ("intervals", "summaries/pay", "summaries/process", "methods", "stats"):
        dir_path = os.path.join(CORPUS_ROOT, sub)
        if os.path.isdir(dir_path):
            for name in os.listdir(dir_path):
                path = os.path.join(dir_path, name)
                if os.path.isfile(path):
                    os.remove(path)

    chunks_path = os.path.join(CORPUS_ROOT, "chunks.jsonl")
    manifest_path = os.path.join(CORPUS_ROOT, "manifest.json")
    search_index_path = os.path.join(CORPUS_ROOT, "search-index.json")
    for path in (chunks_path, manifest_path, search_index_path):
        if os.path.isfile(path):
            os.remove(path)

    if readme:
        with open(readme_path, "w", encoding="utf-8") as f:
            f.write(readme)


def validate_corpus(
    wells: list[dict],
    interval_payloads: dict[str, dict],
    chunk_counts: dict[str, int],
) -> None:
    expected_intervals = sum(
        well.get("interval_count", 0) for well in wells if not well.get("data_missing")
    )
    min_summary_chunks = 34
    min_method_chunks = 5

    if chunk_counts["interval"] < expected_intervals:
        raise RuntimeError(
            f"Expected {expected_intervals} interval chunks, got {chunk_counts['interval']}"
        )
    if chunk_counts["interval"] < 2991:
        raise RuntimeError(
            f"Expected >= 2991 interval chunks, got {chunk_counts['interval']}"
        )
    if chunk_counts["summary"] < min_summary_chunks:
        raise RuntimeError(
            f"Expected >= {min_summary_chunks} summary chunks, got {chunk_counts['summary']}"
        )
    if chunk_counts["method"] < min_method_chunks:
        raise RuntimeError(
            f"Expected >= {min_method_chunks} method chunks, got {chunk_counts['method']}"
        )

    for well in wells:
        if well.get("data_missing"):
            continue
        alias = well["alias"]
        payload = interval_payloads.get(alias)
        if payload is None:
            raise RuntimeError(f"Missing interval index for well {alias}")

        for record in payload["intervals"]:
            if not record.get("detail_markdown", "").strip():
                raise RuntimeError(
                    f"Empty detail_markdown for {alias} @ {record['depth']} m MD"
                )

    jena = interval_payloads.get("JENA31")
    if jena is None:
        raise RuntimeError("Missing JENA31 interval index")
    depth_2500 = next((r for r in jena["intervals"] if float(r["depth"]) == 2500.0), None)
    if depth_2500 is None or not depth_2500.get("detail_markdown", "").strip():
        raise RuntimeError("JENA31 depth 2500 missing or empty detail_markdown")


def main() -> int:
    wells_payload = load_json(os.path.join(DATA_ROOT, "wells.json"))
    wells = [w for w in wells_payload.get("wells", []) if not w.get("data_missing")]

    prepare_output_dirs()

    all_chunks: list[dict] = []
    interval_payloads: dict[str, dict] = {}
    manifest_wells = []
    chunk_counts = {"interval": 0, "method": 0, "summary": 0}

    methods_doc, method_chunks = index_methods()
    write_json(os.path.join(CORPUS_ROOT, "methods", "statistical-methods.json"), methods_doc)
    all_chunks.extend(method_chunks)
    chunk_counts["method"] = len(method_chunks)

    for well in wells:
        alias = well["alias"]
        display = well["display"]
        print(f"Indexing {display} ({alias})...")

        intervals_path = os.path.join(DATA_ROOT, "intervals", f"{alias}.json")
        if not os.path.isfile(intervals_path):
            raise FileNotFoundError(f"Missing intervals JSON: {intervals_path}")

        intervals_payload = load_json(intervals_path)
        interp_path = interpretation_path(alias)
        if not os.path.isfile(interp_path):
            raise FileNotFoundError(f"Missing interpretation MD: {interp_path}")

        md_sections = parse_interpretation_sections(interp_path)
        interpretation_rel = os.path.relpath(interp_path, WORKSPACE).replace("\\", "/")
        pay_rel = os.path.relpath(pay_summary_path(display), WORKSPACE).replace("\\", "/")
        process_rel = os.path.relpath(process_summary_path(alias), WORKSPACE).replace("\\", "/")

        interval_payload, interval_chunks = build_interval_index(
            alias, display, intervals_payload, md_sections, interpretation_rel
        )
        write_json(os.path.join(CORPUS_ROOT, "intervals", f"{alias}.json"), interval_payload)
        interval_payloads[alias] = interval_payload
        all_chunks.extend(interval_chunks)
        chunk_counts["interval"] += len(interval_chunks)

        pay_doc, pay_chunk = index_pay_summary(alias, display)
        if pay_doc:
            write_json(os.path.join(CORPUS_ROOT, "summaries", "pay", f"{alias}.json"), pay_doc)
            all_chunks.append(pay_chunk)
            chunk_counts["summary"] += 1

        proc_doc, proc_chunk = index_process_summary(alias, display)
        if proc_doc:
            write_json(
                os.path.join(CORPUS_ROOT, "summaries", "process", f"{alias}.json"), proc_doc
            )
            all_chunks.append(proc_chunk)
            chunk_counts["summary"] += 1

        depths = [float(iv["depth"]) for iv in interval_payload["intervals"]]
        manifest_wells.append(
            {
                "alias": alias,
                "display": display,
                "depth_min": min(depths) if depths else 0,
                "depth_max": max(depths) if depths else 0,
                "interval_count": len(depths),
                "sources": {
                    "interpretation": interpretation_rel,
                    "pay_summary": pay_rel,
                    "process_summary": process_rel,
                },
            }
        )

    stats_index = build_stats_index(wells)
    write_json(os.path.join(CORPUS_ROOT, "stats", "index.json"), stats_index)

    chunks_path = os.path.join(CORPUS_ROOT, "chunks.jsonl")
    with open(chunks_path, "w", encoding="utf-8") as f:
        for chunk in all_chunks:
            f.write(json.dumps(chunk, ensure_ascii=False) + "\n")

    manifest = {
        "version": 1,
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "wells": manifest_wells,
        "chunk_counts": chunk_counts,
    }
    write_json(os.path.join(CORPUS_ROOT, "manifest.json"), manifest)

    search_index = build_bm25_index(all_chunks)
    write_json(os.path.join(CORPUS_ROOT, "search-index.json"), search_index)

    validate_corpus(wells, interval_payloads, chunk_counts)

    print(f"\nWrote corpus index to {CORPUS_ROOT}/")
    print(
        f"  Chunks: {chunk_counts['interval']} interval, "
        f"{chunk_counts['summary']} summary, {chunk_counts['method']} method "
        f"({len(all_chunks)} total lines in chunks.jsonl)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
