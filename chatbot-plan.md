# Chatbot / Corpus Assistant — Implementation Plan

**Repo:** `NFernie/Horizontaldata_review`  
**Status:** Planning document for Composer implementation  
**Production target:** **Phase 3** (static GitHub Pages, no paid API, no LLM)  
**Optional extensions:** Phases 4–5 (semantic search / LLM — not required for launch)

---

## 1. Executive summary

Add a **Corpus Assistant** to the static site so users can rapidly retrieve:

- McKinlay cuttings interpretation content (per interval, per well)
- Pay summaries and process summaries
- Statistical method definitions (`New Statistical Methods.md`)
- Live JSON statistics (correlations, Jaccard, KS, water-risk, portfolio)

The assistant returns **raw retrieved text** with **citations** — no LLM synthesis, no API keys, no serverless backend. Phase 3 is a **production-ready, shippable product** on GitHub Pages.

**Example query (must work at Phase 3):**

> “Give me cuttings descriptions for the interval at 2500 m MD in Jena 31”

**Expected behaviour:** Resolve well → nearest interval → show **condensed summary** + **“Show full detail”** expand with verbatim MD block from `output/JENA31_McKinlay_Cuttings_Interpretation.md`.

---

## 2. Locked product decisions (from stakeholder answers)

| Topic | Decision |
|-------|----------|
| **Hosting** | GitHub Pages only — no Cloudflare/Vercel/serverless |
| **LLM** | Not used at launch — raw retrieved text only |
| **API keys** | None — zero paid API |
| **Corpus scope** | McKinlay cuttings interps, pay summaries, process summaries, `New Statistical Methods.md`, JSON stats |
| **Answer format** | Condensed summary **+** “Show full detail” expand (verbatim MD / full record) |
| **Depth matching** | Nearest-interval matching acceptable (e.g. 2500 m → 2497.5–2502.5 m sample) |
| **Access** | Public on GitHub Pages |
| **Chat placement** | *Not specified in brief* — **Phase 3 default:** dedicated `/assistant` route + sidebar nav item. Floating widget deferred to optional Phase 5. |

---

## 3. Architecture (Phase 3 — static only)

```
Build time (CI)                         Runtime (browser)
─────────────────                       ─────────────────
process_mckinlay_wells.py               User query
export_web_data.py                            │
build_corpus_index.py  ──► site/public/corpus/   ▼
                              │            Query router (client)
                              │                   │
                              ├─ manifest.json    ├─ INTERVAL_LOOKUP
                              ├─ intervals/       ├─ METHOD_LOOKUP
                              ├─ summaries/       ├─ SUMMARY_LOOKUP
                              ├─ methods/         ├─ STATS_LOOKUP
                              └─ chunks.jsonl     └─ KEYWORD_SEARCH (Fuse.js)
                                        │
                                        ▼
                              Assistant UI (/assistant)
                              summary + Show full detail + citations
```

**Design principles**

1. **Deterministic first** — structured well + depth + intent beats fuzzy search.
2. **No hallucination** — answers are copied from indexed corpus; never generated.
3. **Citations always** — source file path, well alias, depth, chunk id.
4. **Rebuild on deploy** — corpus index regenerated whenever interpretations/JSON refresh.

---

## 4. Corpus inventory

| Source | Build input | Indexed as | Primary use |
|--------|-------------|------------|-------------|
| `output/{ALIAS}_McKinlay_Cuttings_Interpretation.md` | Per-interval `### {depth} m MD` sections | `corpus/intervals/{ALIAS}.json` + `chunks.jsonl` | Cuttings / mudlog / LAS detail |
| `output/{well}/pay-summary.md` | Pay summary markdown | `corpus/summaries/pay/{ALIAS}.json` | Pay / lateral / matching questions |
| `output/{ALIAS}_Process_Summary.md` | Process summary markdown | `corpus/summaries/process/{ALIAS}.json` | Data coverage / exclusion stats |
| `New Statistical Methods.md` | Method definitions | `corpus/methods/statistical-methods.json` | WRCI, z-score, Spearman, Jaccard, KS |
| `site/public/data/**/*.json` | Exported stats | `corpus/stats/index.json` (pointers) | Live numbers; fetch at query time |

**Note:** Interval JSON (`site/public/data/intervals/*.json`) already has `long_desc`, RQI, WRCI, flags — use for **condensed summary**. Full MD blocks (mudlog lines, property tables) come from interpretation chunks.

---

## 5. Phase breakdown

| Phase | Deliverable | Production? |
|-------|-------------|-------------|
| **0** | Scope + corpus schema | Prerequisite |
| **1** | `build_corpus_index.py` + CI hook | Prerequisite |
| **2** | Client query router + parsers | Prerequisite |
| **3** | `/assistant` UI + nav + acceptance tests | **✅ Launch** |
| **4** | Client-side semantic / Fuse ranking improvements | Optional |
| **5** | Floating widget + LLM/backend (if policy changes) | Optional |

Phases 4–5 must **not** block Phase 3. The Phase 3 build is complete without them.

---

## 6. Phase 0 — Schema & conventions

### Outputs

- `corpus/README.md` (short index doc in `site/public/corpus/`)
- TypeScript types: `site/src/types/corpus.ts`

### `manifest.json` schema

```json
{
  "version": 1,
  "generated_at": "ISO-8601",
  "wells": [
    {
      "alias": "JENA31",
      "display": "JENA 31",
      "depth_min": 2255,
      "depth_max": 3394,
      "interval_count": 197,
      "sources": {
        "interpretation": "output/JENA31_McKinlay_Cuttings_Interpretation.md",
        "pay_summary": "output/JENA 31/pay-summary.md",
        "process_summary": "output/JENA31_Process_Summary.md"
      }
    }
  ],
  "chunk_counts": { "interval": 2991, "method": 5, "summary": 34 }
}
```

### Interval record schema (`corpus/intervals/{ALIAS}.json`)

```json
{
  "alias": "JENA31",
  "depth": 2500,
  "top": 2497.5,
  "bot": 2502.5,
  "summary": {
    "pct_ss": 100,
    "grain": "f-crs",
    "poro_class": "gd",
    "loose_grains": true,
    "fluor": 100,
    "WRCI": 42.1,
    "risk_class": "Elevated",
    "flags": ["highperm"],
    "long_desc": "Sample 2500m: ..."
  },
  "detail_markdown": "### 2500 m MD — Interval ...\n(full verbatim section)",
  "source": {
    "file": "output/JENA31_McKinlay_Cuttings_Interpretation.md",
    "anchor": "2500"
  }
}
```

### Chunk schema (`chunks.jsonl`)

One JSON object per line:

```json
{
  "id": "JENA31:2500:interval",
  "type": "interval|pay_summary|process_summary|method|stats",
  "alias": "JENA31",
  "depth": 2500,
  "title": "2500 m MD — JENA 31",
  "text": "... searchable plain text ...",
  "detail_markdown": "... optional full MD ...",
  "source": "output/JENA31_McKinlay_Cuttings_Interpretation.md"
}
```

### Composer prompt — Phase 0

```
Read chatbot-plan.md §6 (Phase 0).

Create corpus TypeScript types in site/src/types/corpus.ts matching the manifest,
interval record, and chunk schemas documented there. Do not implement UI yet.

Add a one-paragraph corpus/README.md template under site/public/corpus/ explaining
what the assistant index contains and when it is regenerated.
```

---

## 7. Phase 1 — Build-time corpus index

### New file

`scripts/build_corpus_index.py`

### Responsibilities

1. **Parse interpretation MD** — split on `^### (\d+(?:\.\d+)?) m MD` headers; capture full section to next `---` or next `###`.
2. **Merge interval JSON** — join `site/public/data/intervals/{ALIAS}.json` scalars into `summary` object.
3. **Index pay summaries** — map `output/{display name}/pay-summary.md` → alias via `wells.json`.
4. **Index process summaries** — `output/{ALIAS}_Process_Summary.md`.
5. **Index methods** — chunk `New Statistical Methods.md` by `## Method` headings (5 chunks).
6. **Stats index** — `corpus/stats/index.json` listing paths:
   - `data/stats/correlations.json`
   - `data/stats/jaccard.json`
   - `data/stats/clusters.json`
   - `data/stats/ks.json`
   - `data/water_risk/{ALIAS}.json`
7. **Write** all output to `site/public/corpus/`.
8. **Validate** — every well in `wells.json` has interval index; no empty `detail_markdown` for retained intervals.

### CI change (`.github/workflows/deploy.yml`)

After `export_web_data.py`:

```yaml
- name: Build corpus index
  run: python3 scripts/build_corpus_index.py
```

### Composer prompt — Phase 1

```
Read chatbot-plan.md §7 (Phase 1) and New Statistical Methods.md.

Implement scripts/build_corpus_index.py that:
- Splits each output/{ALIAS}_McKinlay_Cuttings_Interpretation.md into per-depth chunks
- Merges summary fields from site/public/data/intervals/{ALIAS}.json
- Indexes pay summaries, process summaries, and New Statistical Methods.md
- Writes site/public/corpus/{manifest.json, intervals/, summaries/, methods/, chunks.jsonl, stats/index.json}
- Hooks into .github/workflows/deploy.yml after export_web_data.py

Acceptance:
- python3 scripts/build_corpus_index.py exits 0 locally
- corpus/intervals/JENA31.json contains depth 2500 with non-empty detail_markdown
- chunks.jsonl line count >= 3000 interval + 34 summary + 5 method chunks
```

---

## 8. Phase 2 — Client query router

### New files

- `site/src/lib/assistant/parseQuery.ts` — intent + entity extraction
- `site/src/lib/assistant/wellResolver.ts` — `Jena 31` / `J31` / `JENA31` → alias
- `site/src/lib/assistant/depthResolver.ts` — nearest interval by `depth` field
- `site/src/lib/assistant/router.ts` — dispatch to handlers
- `site/src/lib/assistant/handlers/*.ts` — one handler per intent

### Intent types

| Intent | Trigger patterns | Handler |
|--------|------------------|---------|
| `INTERVAL_LOOKUP` | well + depth (+ “cuttings”, “description”, “interval”, “sample”) | `handleIntervalLookup` |
| `INTERVAL_FILTER` | well + property filter (“loose grains”, “WRCI > 40”, “high risk”) | `handleIntervalFilter` |
| `METHOD_LOOKUP` | “WRCI”, “z-score”, “Spearman”, “Jaccard”, “KS”, “how is … calculated” | `handleMethodLookup` |
| `SUMMARY_LOOKUP` | “pay summary”, “process summary” + well | `handleSummaryLookup` |
| `STATS_LOOKUP` | “correlation”, “Jaccard”, “KS”, “flagged zones”, “analog” + well | `handleStatsLookup` |
| `KEYWORD_FALLBACK` | no confident intent | `handleKeywordSearch` (Fuse.js on `chunks.jsonl`) |

### Well resolver rules

- Load aliases from `corpus/manifest.json` + `data/wells.json`
- Match: display name (case-insensitive), alias, alias without spaces, common abbreviations (`J31` → `JENA31`)

### Depth resolver rules

- Parse integers / floats with optional `m`, `mMD`, `MD`
- Find interval where `depth` minimizes `|depth − query_depth|`
- If `|Δ| > 10 m`, include note: “Nearest sample at {depth} m MD (requested {query} m MD)”

### Stats handler

- Fetch relevant JSON from `site/public/data/` at query time (already deployed)
- Format as markdown tables in the response — no recomputation

### Composer prompt — Phase 2

```
Read chatbot-plan.md §8 (Phase 2).

Implement client-side assistant router under site/src/lib/assistant/:
- parseQuery, wellResolver, depthResolver, router, handlers for all intent types
- Use fetchJson to load corpus/manifest.json, corpus/intervals/{alias}.json, chunks.jsonl
- Add fuse.js for KEYWORD_FALLBACK search over chunk titles + text
- No LLM, no external API

Unit-test parseQuery and wellResolver with cases:
- "cuttings at 2500m in Jena 31" → INTERVAL_LOOKUP, JENA31, 2500
- "how is WRCI calculated" → METHOD_LOOKUP
- "pay summary Jena 31DW1" → SUMMARY_LOOKUP

Acceptance: router returns typed AssistantResult with { summary, detail_markdown?, citations[], match_note? }
```

---

## 9. Phase 3 — Assistant UI (production launch)

### New files

- `site/src/pages/Assistant.tsx`
- `site/src/components/assistant/MessageList.tsx`
- `site/src/components/assistant/QueryInput.tsx`
- `site/src/components/assistant/ResultCard.tsx` — summary + collapsible “Show full detail”
- `site/src/components/assistant/CitationLink.tsx`
- `site/src/components/assistant/SuggestedPrompts.tsx`

### Routing & nav

- Add route: `/assistant` in `App.tsx`
- Add nav item **Assistant** in `AppShell.tsx` (after Methodology)

### UI behaviour

1. **Suggested prompts** on empty state (4–6 examples covering interval, method, pay, stats).
2. **User submits query** → loading state → `ResultCard`(s).
3. **ResultCard** shows:
   - Intent label (e.g. “Interval — JENA 31 @ 2500 m MD”)
   - Condensed summary (key-value grid from `summary` object)
   - **Show full detail** `<details>` or accordion with rendered markdown (`detail_markdown`)
   - Citations: source file, links to `/well/{alias}`, `/intra/{alias}`, `/water-risk` where relevant
4. **Nearest-depth note** when applicable.
5. **No results** — helpful message + keyword fallback results if any.
6. **Accessibility** — keyboard submit, focus management, `aria-expanded` on detail toggle.
7. **Mobile** — full-width layout, readable monospace for depths.

### Styling

- Reuse existing design tokens (`tokens.css`), `Card`, `RiskBadge` where applicable.
- Match dark theme of AppShell.

### Composer prompt — Phase 3

```
Read chatbot-plan.md §9 (Phase 3). Load ui-ux-pro-max skill for layout polish.

Implement production Assistant page:
- site/src/pages/Assistant.tsx at route /assistant
- Components: MessageList, QueryInput, ResultCard (summary + "Show full detail" expand), CitationLink, SuggestedPrompts
- Wire to Phase 2 router; render markdown detail with a safe markdown component (react-markdown or existing pattern)
- Add sidebar nav item "Assistant"
- Suggested prompts must include: "cuttings at 2500 m MD in Jena 31", "how is WRCI calculated", "pay summary Jena 31DW1", "flagged zones Jena 31"

Acceptance (production gate):
- npm run build succeeds
- /assistant loads on GitHub Pages base path /Horizontaldata_review/
- Example query returns condensed summary + expandable full MD for JENA31 @ 2500 m
- Method query returns section from New Statistical Methods.md
- No network calls outside site origin (except none needed)
- Works without JavaScript errors in console

This phase is the launch milestone. Phases 4–5 are NOT in scope for this prompt.
```

---

## 10. Phase 4 — Optional: improved retrieval (still static)

**Goal:** Better fuzzy matching without LLM or backend.

### Enhancements

- Precompute TF-IDF or BM25 weights at build time (`corpus/search-index.json`)
- Synonym map: `loose` → `lse`, `perm` → `res_sep`, `water risk` → `WRCI`
- Multi-result ranking with snippet highlighting
- Query history in `sessionStorage`

### Composer prompt — Phase 4 (optional)

```
Read chatbot-plan.md §10 (Phase 4). Optional enhancement only — do not break Phase 3 behaviour.

Add BM25 or improved Fuse.js weighting in build_corpus_index.py + router.
Add synonym expansion in parseQuery.ts.
Return top 5 keyword matches with highlighted snippets when structured intents fail.

Acceptance: "loose grains jena 2500" still resolves via INTERVAL_FILTER or KEYWORD_FALLBACK.
```

---

## 11. Phase 5 — Optional: UX extensions (policy change required)

**Not compatible with current “GitHub only / no API” decision unless policy changes.**

### Options (if revisited later)

| Option | Requires |
|--------|----------|
| Floating assistant widget on all pages | Phase 3 components reused in `AppShell` |
| LLM synthesis with citations | Serverless backend + API key |
| Precomputed embeddings in browser | Large download; transformers.js |

### Composer prompt — Phase 5 (optional)

```
Read chatbot-plan.md §11 (Phase 5). Only implement if stakeholder approves backend/API.

If approved: add floating Assistant drawer to AppShell reusing ResultCard components.
If not approved: skip this phase entirely.
```

---

## 12. Phase 3 acceptance checklist (launch gate)

- [ ] `python3 scripts/build_corpus_index.py` runs in CI before `npm run build`
- [ ] `site/public/corpus/` deployed with dist
- [ ] `/assistant` reachable from sidebar
- [ ] Interval query: Jena 31 @ 2500 m → summary + full detail expand
- [ ] Method query: “WRCI” → `New Statistical Methods.md` §1.1 content
- [ ] Pay summary query: Jena 31 → pay-summary content
- [ ] Stats query: “Spearman Jena 31” → correlation data for JENA31
- [ ] Nearest-depth note shown when query depth ≠ sample depth
- [ ] All answers include source citation
- [ ] No paid API, no LLM, no non-GitHub hosting
- [ ] `npm run build` clean; GitHub Pages deploy green

---

## 13. Example user flows (Phase 3)

### Flow A — Interval cuttings (primary)

```
User: "give me cuttings descriptions for the interval at 2500mMD in Jena 31"

Router:
  intent = INTERVAL_LOOKUP
  alias  = JENA31
  depth  = 2500
  match  = nearest interval depth 2500 (2497.5–2502.5 m)

UI:
  Summary: %SS, grain, poro, loose grains, fluor, WRCI, flags
  [Show full detail ▼] → verbatim MD section (spreadsheet + mudlog + LAS)
  Citations: interpretation MD, /well/JENA31
```

### Flow B — Statistical method

```
User: "explain robust z-score anomaly detection"

Router:
  intent = METHOD_LOOKUP
  chunk  = methods/1.2-robust-z-score

UI:
  Summary: one-line definition + threshold |z| > 3.5
  [Show full detail ▼] → full method section from New Statistical Methods.md
```

### Flow C — JSON stats

```
User: "Jaccard analogs for Jena 31"

Router:
  intent = STATS_LOOKUP
  fetch  = data/stats/jaccard.json → jena_analog_ranking.JENA31

UI:
  Ranked table of analog wells with Jaccard scores
  Citation: data/stats/jaccard.json, /compare
```

---

## 14. Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Interpretation MD format drifts | Parse on `### {depth} m MD` header regex; add CI validation |
| Large `chunks.jsonl` download | Gzip in build; or fetch per-alias interval JSON only |
| Keyword queries too weak | Phase 4 BM25; Phase 3 still has structured intents |
| Mudlog only in MD not JSON | Phase 1 copies full MD section into `detail_markdown` |
| GitHub Pages SPA routing | HashRouter already in use — `/assistant` works |

---

## 15. File checklist (expected after Phase 3)

```
scripts/build_corpus_index.py          # NEW
New Statistical Methods.md             # corpus source (exists)
chatbot-plan.md                        # this file
site/public/corpus/manifest.json
site/public/corpus/intervals/*.json
site/public/corpus/summaries/pay/*.json
site/public/corpus/summaries/process/*.json
site/public/corpus/methods/statistical-methods.json
site/public/corpus/chunks.jsonl
site/public/corpus/stats/index.json
site/src/types/corpus.ts
site/src/lib/assistant/**/*.ts
site/src/pages/Assistant.tsx
site/src/components/assistant/*.tsx
.github/workflows/deploy.yml           # MODIFIED
```

---

## 16. Revision history

| Date | Change |
|------|--------|
| 2026-07-07 | Initial plan — Phase 3 production target; Phases 4–5 optional; stakeholder decisions locked |
