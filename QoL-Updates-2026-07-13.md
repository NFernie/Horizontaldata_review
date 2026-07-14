# QoL & Visualisation Updates — Implementation Plan

**Date:** 2026-07-13 (rev. 2026-07-14b)  
**Status:** Approved — Phases **A**, **C**, **D**, **E** implemented (2026-07-14); **F** spec drafted; **B1/B2** pending  
**Repo:** `NFernie/Horizontaldata_review`  
**Baseline:** Post–Phase 6 pipeline (`updated-plan-2026-07-10.md`) — **23 wells**, RQI v2, WRCI v2, ZOI, OWC, mechanical isolation, no ΔRes  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md` — **required for all Design agents**  
**Reference (private):** [NFernie/Geosteering_Guide](https://github.com/NFernie/Geosteering_Guide) — intersection window UX (static adaptation)

---

## 0. Agent workflow — Design then Implement

Each phase (**A**, **B1**, **B2**, **C**, **D**) runs as **two separate agent sessions**.  
**Phase E** (readability) uses a **single combined** design+implementation session.

| Stage | Agent type | Delivers | Does **not** do |
|-------|------------|----------|-----------------|
| **Design** | UI/UX designer | Written spec in `docs/qol-design/phase-{X}-design.md` | No production code commits |
| **Implement** | Engineer | React/scripts per spec + design doc | No redesign without updating design doc |

### Design agent checklist (all phases)

1. Read this document’s phase section + linked data/method docs.
2. Load **UI/UX Pro Max** skill (`.cursor/skills/ui-ux-pro-max/SKILL.md`).
3. Run design-system search for context, e.g.  
   `python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "oil gas geoscience dashboard water risk analytics" --design-system -p "McKinlay Water-Risk Review"`
4. Produce `docs/qol-design/phase-{X}-design.md` containing:
   - Layout wireframe (ASCII or described regions)
   - Component inventory (new vs reused)
   - Colour / typography / spacing tokens (map to existing CSS vars in `site/src/index.css`)
   - Interaction states (hover, focus, selected, empty, loading)
   - Responsive behaviour (mobile / tablet / desktop)
   - Accessibility notes (contrast, keyboard, `prefers-reduced-motion`)
   - Data bindings (exact JSON paths)
5. **Commit design doc only** to `main` (or hand off path to implement agent).

### Implement agent checklist (all phases)

1. Read phase section here + **`docs/qol-design/phase-{X}-design.md`** (must exist).
2. Implement exactly per design spec; flag conflicts back to stakeholder.
3. `npm test && npm run build` must pass.
4. Commit production code to `main`.

### Design output paths

| Phase | Design doc |
|-------|------------|
| A | `docs/qol-design/phase-a-design.md` |
| B1 | `docs/qol-design/phase-b1-design.md` |
| B2 | `docs/qol-design/phase-b2-design.md` |
| C | `docs/qol-design/phase-c-design.md` |
| D | `docs/qol-design/phase-d-design.md` |
| E | *(combined prompt §10 — no separate design doc required)* |

---

## 1. Current implementation review (as of 2026-07-14)

### ✅ Delivered (updated-plan Phases 1–6)

| Area | Status | Notes |
|------|--------|-------|
| Wells | **23 / 23** in `wells.json` | McKinlay 10–15 onboarded (litho+gas ingest) |
| RQI v2 | ✅ | 8 components; `scripts/config.py` + `site/src/config.ts` |
| WRCI v2 | ✅ | `0.40·RQI + 0.20·lowres + 0.20·lowfluor + 0.20·owc_severity` |
| Flags | ✅ | `lowres`, `lowfluor`, `low_GR` (<70 gAPI), `ZOI`, `owc_near` / `owc_elevated` |
| Mechanical isolation | ✅ | `isolated` per interval + `isolation_depths[]` from `Isolation_Depths.xlsx` |
| ΔRes / `highperm` | ✅ Removed | Absent from JSON, site, stats |
| Trajectory | ✅ `mTVDss` per interval | `scripts/trajectory.py`; Petrel `*_trajectory` at repo root |
| OWC | ✅ | `Oil_Water_Contact.csv`; distance + severity in WRCI |
| Pay / overburden | ✅ | Exclusion logic unchanged; 23-well pay summaries |
| CI | ✅ | Single-pass `export_web_data.py` + path filters (`deploy.yml`) |
| RQI in tables | ✅ | Well Detail + Water-Risk show RQI alongside WRCI |
| Well selection persistence | ✅ | `sessionStorage` for wells, executive panels, scroll, histogram |

### ✅ QoL Phases A / C / D (2026-07-14)

| Phase | Delivered |
|-------|-----------|
| **A** | RQI/WRCI threshold tints, sticky `DataTable`, `usePageState`, methodology accordion (Methods 2–5), AppShell 23 wells |
| **C** | Executive Summary on `/` — Panels A/B, concern MD tracks, portfolio strip, Water-Risk CTA |
| **D** | Virtual `JENA31_DUAL`, Panel C dual-lateral track, distribution histogram, cluster cosine compare dropdowns (`cos=`), `cluster_analog_ranking.json` |
| **E** | Readability pass — legibility audit, executive track sizing, flag/risk popovers, dendrogram + cluster cards, isolation band tokens |

### ⚠️ Remaining gaps

| Gap | Current behaviour |
|-----|-------------------|
| **Intersection window** | Not implemented (Phase B1) |
| **Structural grids** | Not in repo — **pending delivery** (Phase B2) |
| **Trajectory for viz** | Only `mTVDss` on intervals — **no X/Y/INCL** exported to `site/public/data/` |
| **Readability popovers** | ✅ Phase E — flag/risk popovers, dendrogram, isolation bands |
| **Geosteering_Guide** | Private repo — **not readable** by agents without access or copied modules |

### Jena focus wells — live stats (`wells.json`)

| Metric | JENA 31 | JENA 31DW1 | Notes |
|--------|---------|------------|-------|
| Elevated risk intervals | **57** | **69** | `elevated_risk_count` |
| High risk | 0 | 0 | Portfolio-wide |
| Pay % | **80.4%** | **73.6%** | |
| Lateral (m) | 1144 | 1597 | |
| Cluster | 1 | 2 | `stats/clusters.json` |
| Isolation depths | **none** | **none** | `isolation_depths: []` |
| Default Jaccard analog #1 | **STIMPEE 7** (J=1.0) | **BIALA 19** (J=1.0) | `stats/jaccard.json` → `jena_analog_ranking` |

Use these figures in Phase C graphics and copy.

---

## 2. QoL updates (Phase A — ready now)

### A1 — RQI threshold colouring

**Requirement:** On **all pages** that display RQI, colour cells:

| Condition | Colour | Token |
|-----------|--------|-------|
| **RQI > 0.6** (good rock) | **Red** | `var(--risk-high)` or dedicated `--rqi-high` |
| **RQI ≤ 0.6** (poor rock) | **Green** | `var(--risk-low)` or `--rqi-low` |

> **Semantic note:** Red = high RQI highlights **good reservoir rock** (watch for water charge / OWC proximity), not “bad data”. Document in Methodology tooltip.

**Implementation:**

1. Add `site/src/lib/rqiWrciStyle.ts` with `rqiCellClass(rqi: number | null): string`
2. Shared component `MetricCell` or extend `DataTable` column `tone?: 'rqi' | 'wrci' | 'none'`
3. Apply on: Portfolio (if RQI added), Well Detail table, Water-Risk cards, Corpus `ResultCard`, Intra-well if RQI shown

**Config:** Import `RQI_THRESHOLD` from `@/config` (0.6) — do not hardcode.

---

### A2 — WRCI threshold colouring

**Requirement:** Colour WRCI values:

| Condition | Colour |
|-----------|--------|
| **WRCI > 66** | **Red** (`--risk-high`) |
| **WRCI ≤ 66** | **Green** (`--risk-low`) |

Optional middle band (stakeholder did not request): 40–66 amber — **skip unless asked**; use binary red/green per spec.

Use `WRCI_HIGH_THRESHOLD` (66) from config. Apply everywhere WRCI is rendered (same surfaces as A1).

---

### A3 — Persist page state across navigation

**Requirement:** When users switch sidebar routes and return, restore:

| Route | State to persist |
|-------|------------------|
| `/` Portfolio | Scroll Y (optional); executive panel dropdown selections (Phase C) |
| `/well/:alias` | Selected well alias ✅ (exists); **scroll position** |
| `/water-risk` | Left/right well ✅ (exists); **scroll** |
| `/compare` | `matrixMode` (`feature` \| `depth`); scroll |
| `/intra/:alias` | Selected well; scroll |
| `/methodology` | Scroll; **expanded method accordion id** (A5) |
| **Global** | Assistant panel open/closed (optional) |

**Implementation:**

1. New hook `site/src/hooks/usePageState.ts`:
   - `usePersistedState<T>(key, default)` → `sessionStorage` JSON
   - `useScrollRestore(routeKey)` → save `scrollY` on `visibilitychange` / unmount
2. Keys prefixed `hr-page:` + pathname
3. Wire into each page component

**Out of scope:** `localStorage` cross-session persistence (use `sessionStorage` only — matches existing well selection).

---

### A4 — Freeze label column on tables

**Requirement:** First column (row label / depth / well name) **sticky** while scrolling vertically.

**Implementation:**

1. Extend `DataTable`:
   - `stickyFirstColumn?: boolean` (default `true` for interval tables)
   - CSS: `position: sticky; left: 0; z-index: 2; background: var(--surface); box-shadow` on first `th`/`td`
2. Wrap table in `max-h-[70vh] overflow-y-auto` container for long interval tables (Well Detail)
3. Portfolio table: sticky **Well** column on horizontal scroll if needed (`overflow-x-auto` already present)

**Acceptance:** Well Detail 197-row table — depth column visible while scrolling to WRCI/RQI columns.

---

### A5 — Methodology: detailed “Other Statistical Methods” (dropdown per method)

**Requirement:** Replace the brief grid on **Methodology → Other statistical methods** with **high-detail, selectable method panels**.

**Source of truth for content:** `New Statistical Methods.md` (Methods 2–5). WRCI (Method 1) remains in the existing top card; Methods 2–5 move into the enhanced section.

| Method | Title | Must include in panel |
|--------|-------|------------------------|
| **2** | Robust Z-Score Anomaly Detection | Objective; metrics list (`ZSCORE_METRICS`); MAD formula with 0.6745 constant; threshold \|z\| > 3.5; diagnostic patterns; JSON path; site route |
| **3** | Spearman Rank-Correlation | Variables (`SPEARMAN_VARS`); ρ and p-value definition; interpretation table (decoupling patterns); caveats on small n |
| **4** | Jaccard Similarity | Feature vocabulary (`JACCARD_FEATURES`); presence rule (≥10%); J(A,B) equation; depth-binned variant (20 bins); analog ranking purpose |
| **5** | Clustering + KS | Feature vector list (`CLUSTER_FEATURES`); Ward linkage; cosine/Euclidean; KS properties (`KS_PROPERTIES`); D and p-value meaning |

**UI pattern (design + implement):**

- **Single-select dropdown** or **vertical accordion** — one method visible at a time (user picks from list).
- Each panel: **Objective** → **Inputs / properties** → **Equations** (monospace `FormulaBlock`) → **Outputs & JSON** → **Site route** → **Water-risk mapping** (1–2 sentences).
- Pull numeric constants from `@/config` — do not duplicate hardcoded values.
- Persist expanded/selected method id via `usePageState` (A3).

**Acceptance:** A geoscientist can read Method 4 alone and understand Jaccard features, equation, and how Jena analogs are ranked — without opening the markdown file.

---

## 3. Intersection Windows (Phase B — partial; grid data pending)

### 3.1 Objective

Static **intersection window** per well (selectable filter):

- Trajectory polyline in a **2D section plane** (high-inclination lateral: **INCL > 80°** from entry to TD)
- **Structural grid** points (XYZ) projected onto same plane — shows trajectory vs depth grid separation
- **Risk flags** coloured along trajectory by sample MD
- **OWC** horizon at field contact (mTVDss from `Oil_Water_Contact.csv`)
- **Hard floor** at **OWC + 3 m** (3 m structurally above contact → less negative TVDss, e.g. −1198 → **−1195**)
- **Isolation bands** (optional B1): shaded MD intervals from `isolation_depths[]`

Adapt UX from **Geosteering_Guide** as a **static** view (no live steering).

### 3.2 Geosteering_Guide reference

**Access:** Repo is **private** — agents cannot read it (404). Before Phase B implementation:

| Option | Action |
|--------|--------|
| **Recommended** | Copy intersection/SVG modules into `site/src/lib/geosteering/` or grant repo read access |
| **Fallback** | Implement from spec below without Guide code |

### 3.3 Data pipeline (new build-time export)

**New script:** `scripts/export_trajectory_web.py` (or extend `export_web_data.py`)

```
site/public/data/trajectory/{ALIAS}.json
{
  "alias": "JENA31",
  "field": "Jena",
  "owc_mtvds": -1198,
  "hard_floor_mtvds": -1195,
  "stations": [
    { "md", "tvd", "mtvds", "x", "y", "incl", "azim" }
  ],
  "lateral_window": { "md_start", "md_end", "incl_min": 80 }
}
```

**Grid data (pending):** `site/public/data/grids/{FIELD}.json` per §3.3 schema in prior revision.

### 3.4 Viewer (static React)

**New route:** `/intersection` — `IntersectionExplorer.tsx`, `SectionSvg.tsx`, `FlagOverlay.tsx`, `OwcLines.tsx`, `GridPoints.tsx` (B2).

### 3.5 Phase B gating

| Prerequisite | Status |
|--------------|--------|
| Trajectory files at repo root | ✅ |
| Interval flags in JSON | ✅ |
| OWC CSV | ✅ |
| Isolation depths in interval JSON | ✅ |
| **Grid XYZ point sets per field** | ❌ **Pending** |
| Geosteering_Guide modules | ❌ **Need copy or access** |

**Deliver Phase B in two sub-phases:**

- **B1 (now):** Trajectory export + static section **without grid** — trajectory + flags + OWC + isolation bands  
- **B2 (when grids arrive):** Grid overlay + separation metric

---

## 4. Executive summary — Analog Concern Hub (Phase C)

### 4.1 Objective (revised)

Replace the portfolio-only landing experience with a **graphic-first Executive Summary** that answers:

1. **Where are zones of concern?** (Elevated and High `risk_class` intervals on focus wells)
2. **Which portfolio wells look most similar?** (Jaccard analogs — **not** Jena 31 vs Jena 31DW1 by default)
3. **What is mechanically isolated vs open?** (`isolated` flag + `isolation_depths` MD bands)

**Default focus wells:** JENA 31 and JENA 31DW1 each get an **independent comparison row** against their **closest Jaccard analog**, swappable via dropdowns.

### 4.2 Core UX — two independent comparison panels

```
┌──────────────────────────────────────────────────────────────────────────┐
│  McKinlay Water-Risk Review — Executive Summary                         │
├──────────────────────────────────────────────────────────────────────────┤
│  PANEL A                                                                 │
│  Focus: [JENA 31 ▼]     Analog: [STIMPEE 7 ▼]   Jaccard: 1.00          │
│  ┌─ Focus — concern zones ─────────┐ ┌─ Analog — concern zones ────────┐ │
│  │ MD track: Elevated/High markers │ │ Same MD-normalized or separate  │ │
│  │ ░░ isolation MD bands (grey)    │ │ scales; isolation bands if any  │ │
│  │ ● isolated concern  ○ not      │ │ Legend shared                   │ │
│  └─────────────────────────────────┘ └─────────────────────────────────┘ │
│  Tiles: Elevated | High | Isolated concerns | Non-isolated concerns      │
├──────────────────────────────────────────────────────────────────────────┤
│  PANEL B  (independent — NOT paired with Panel A)                        │
│  Focus: [JENA 31DW1 ▼]   Analog: [BIALA 19 ▼]   Jaccard: 1.00            │
│  (same layout as Panel A)                                                │
├──────────────────────────────────────────────────────────────────────────┤
│  Portfolio context: ranked strip — elevated count all 23 wells           │
│  (focus wells + current analogs highlighted in accent)                 │
├──────────────────────────────────────────────────────────────────────────┤
│  [ Open in Water-Risk Explorer ]   [ Full portfolio table ▼ ]            │
└──────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Dropdown behaviour

| Control | Options | Default | Rules |
|---------|---------|---------|-------|
| **Focus well** | All 23 active wells | Panel A → `JENA31`; Panel B → `JENA31DW1` | Changing focus resets analog to **top Jaccard rank** for that focus |
| **Analog well** | All wells **except** focus | `jena_analog_ranking[focus][0].alias` | Show `display` + Jaccard score in option label; exclude self-comparison |
| **Portfolio strip highlight** | — | Both focus wells + their selected analogs | Accent border / fill |

**Data:** `site/public/data/stats/jaccard.json` → `jena_analog_ranking` (works for any focus if extended at runtime by computing from `matrix` + `aliases`, or precomputed for Jena wells only — **implement agent**: generalise ranking helper for any focus alias using feature Jaccard matrix).

### 4.4 Concern zone definition

| Term | Rule | Data |
|------|------|------|
| **Concern zone** | `risk_class === 'Elevated'` **or** `'High'` | `intervals/{alias}.json` |
| **Isolated concern** | Concern zone **and** `isolated === true` | per-interval |
| **Non-isolated concern** | Concern zone **and** `isolated === false` | per-interval |
| **Isolation band** | MD range from `isolation_depths[].top_md`–`bot_md` | well-level overlay on MD track |

### 4.5 Graphic modules

| # | Module | Data | Insight |
|---|--------|------|---------|
| 1 | **Dual MD concern tracks** (×2 panels) | `intervals/{focus}.json`, `intervals/{analog}.json` | Side-by-side concern distribution; isolation shading |
| 2 | **Concern stat tiles** (×2 panels) | aggregated counts | Elevated / High / isolated split |
| 3 | **Portfolio elevated strip** | `wells.json` `elevated_risk_count` | Context; highlight focus + analog |
| 4 | **Flag composition mini-bars** (optional) | interval `flags[]` on concern zones only | ZOI vs OWC vs lowres on focus vs analog |
| 5 | **Analog similarity badge** | Jaccard score + shared features from `jaccard.json` `feature_sets` | Why this analog was chosen |

### 4.6 Routing

| Option | Recommendation |
|--------|----------------|
| **B. Split `/`** | Hero executive hub **above** existing portfolio table (**recommended** — no nav churn) |

### 4.7 Copy tone

- Max **2 auto bullets per panel**, data-driven, e.g.  
  - *"Jena 31: 57 elevated intervals; 0 high; no mechanical isolation on file."*  
  - *"vs STIMPEE 7 (J=1.0): 23 elevated; 3 isolated concern zones at 2100–2150 m MD."*
- CTA: Water-Risk Explorer with focus well pre-selected (`sessionStorage` keys from `useWellSelection.ts`).

> **Phase D update (incremental — does not replace Phase C layout):** Keep the existing executive comparison panels (focus track + comparison track, depth/risk-flag plot, stat tiles, portfolio strip, table). **Only change:** the **comparison (non-focus) well dropdown** is ranked by **hierarchical-clustering cosine similarity** instead of Jaccard. **Add:** Panel C (`JENA31_DUAL`) and the **distribution histogram** panel. Jaccard heatmaps remain on `/compare`.

---

## 5. Phase D — Dual lateral Jena, clustering analogs & distribution histograms

### 5.0 Scope — what changes vs what stays

| Stays the same (Phase C layout) | Changes in Phase D |
|--------------------------------|-------------------|
| Hero executive section above portfolio table | — |
| Panels A/B: focus well + side-by-side **depth / concern-zone tracks** with risk-flag markers | Comparison-well dropdown **ranking method** only |
| Stat tiles (elevated, high, isolated / non-isolated) | Badge shows **cosine sim** instead of Jaccard **J** |
| Portfolio elevated strip + collapsible well table | `JENA31_DUAL` row + badge on strip |
| Isolation band overlay on MD tracks | Panel C dual-lateral **colour-by-lateral** on single MD axis |
| — | **New:** distribution histogram panel (Well A / Well B / property) |

**Do not** redesign or remove the Phase C panel structure. Phase D is an **additive + comparison-method swap**, not a layout replacement.

### 5.1 Objective

1. **Panel C (Executive Summary):** Add **`JENA31_DUAL`** — merged JENA 31 + JENA 31DW1 (single wellhead, shared production) — **same panel anatomy as A/B**, compared to its top **cluster cosine** neighbour.
2. **Pipeline:** Export virtual well **`JENA31_DUAL`** without adding it to Well Detail or Water-Risk Explorer pickers.
3. **Comparison well dropdown (Panels A/B/C):** Options **ordered by cluster cosine similarity** (`clusters.json` → `cosine_similarity`), not Jaccard. User can still pick any well; list default sort = cluster rank.
4. **Distribution panel (new):** Below panels — **Well A**, **Well B**, **property** → histogram of interval-level distributions.

### 5.2 Virtual well `JENA31_DUAL`

| Field | Value |
|-------|-------|
| `alias` | `JENA31_DUAL` |
| `display` | `JENA 31 Dual Lateral` |
| `constituents` | `["JENA31", "JENA31DW1"]` |
| `dual_lateral` | `true` |
| `notes` | Single wellhead; production commingled — interval populations merged for portfolio statistics |

**Pipeline tasks** (`scripts/export_web_data.py` or `scripts/export_dual_lateral.py`):

1. Concatenate enriched intervals from JENA31 + JENA31DW1 (preserve `source_lateral` field: `"JENA31"` \| `"JENA31DW1"` on each interval).
2. Write `site/public/data/intervals/JENA31_DUAL.json`, `water_risk/JENA31_DUAL.json`, `zones/JENA31_DUAL.json` (zones = union of both).
3. Append row to `wells.json` with aggregated counts. **`pay_pct` = sum(pay MD) / sum(lateral length)** across both constituents (not a length-weighted average of individual pay %).
4. Recompute inter-well stats to include `JENA31_DUAL` in:
   - `stats/clusters.json` (feature vector + cosine matrix + `cluster_ids`)
   - `stats/jaccard.json` (optional — for `/compare` only)
   - `stats/ks.json` (add `JENA31_DUAL` as optional KS focus or vs-analog row)
5. Export `stats/cluster_analog_ranking.json` (new): per-alias ranked list from cosine similarity — used by executive panels.

**UI exclusion:** `useWells({ includeDualLateral: false })` on Well Detail + Water-Risk; `includeDualLateral: true` on Executive Summary + Compare + histogram panel.

### 5.3 Executive layout after Phase D *(extends Phase C — not a replacement)*

Phase C wireframe (§4.2) remains the base. Phase D **adds** Panel C + histogram and **updates** the comparison dropdown label/sort:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  McKinlay Water-Risk Review — Executive Summary        [unchanged hero] │
├──────────────────────────────────────────────────────────────────────────┤
│  PANEL A (Phase C layout preserved)                                      │
│  Focus: [JENA 31 ▼]     Compare: [STIMPEE 7 ▼]   cos=0.75  ← cluster  │
│  ┌─ Focus — MD concern track ─────┐ ┌─ Compare — MD concern track ────┐ │
│  │ Elevated/High markers, flags   │ │ Same plot style as Phase C      │ │
│  │ isolation bands (high contrast)│ │ Dropdown sorted by cluster rank │ │
│  └────────────────────────────────┘ └─────────────────────────────────┘ │
│  Stat tiles unchanged                                                    │
├──────────────────────────────────────────────────────────────────────────┤
│  PANEL B — same layout; focus JENA31DW1; compare well from cluster list  │
├──────────────────────────────────────────────────────────────────────────┤
│  PANEL C — NEW; focus JENA31_DUAL                                        │
│  Single MD track: colour-by-lateral (JENA31 vs JENA31DW1) + compare track│
├──────────────────────────────────────────────────────────────────────────┤
│  DISTRIBUTION COMPARISON — NEW (below panels)                            │
│  Well A [JENA31 ▼]  Well B [JENA31_DUAL ▼]  Property [RQI ▼]          │
│  [histogram — default as stakeholder specified]                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Portfolio strip + table (unchanged from Phase C)                        │
└──────────────────────────────────────────────────────────────────────────┘
```

**Panel C dual-lateral track (stakeholder decision):** **One MD axis**; interval markers / fill **coloured by `source_lateral`** (`JENA31` vs `JENA31DW1`). Legend: two lateral colours + concern markers + isolation bands.

### 5.4 Cluster comparison dropdown (executive only — replaces Jaccard sort)

```ts
// site/src/lib/clusterAnalogs.ts
rankClusterAnalogs(focusAlias, clustersPayload) → { alias, cosine }[]
// Sort cosine_similarity[focusIdx][j] descending; exclude self
// Dropdown: default option [0]; full well list sorted by cosine (cluster order)
```

- **Badge:** `STIMPEE 7 (cos=0.75)` — not `J = 1.00`
- **Jaccard** remains on `/compare` heatmaps only; executive comparison dropdown uses **cluster cosine**

### 5.5 Distribution histogram panel

| Control | Source | Default (stakeholder) |
|---------|--------|---------------------|
| Well A / B | All wells **including** `JENA31_DUAL`; exclude `data_missing` | **JENA31** vs **JENA31_DUAL** |
| Property | `DIST_HISTOGRAM_PROPERTIES` in `config.ts` — `KS_PROPERTIES` + `RQI`, `WRCI` | **RQI** |
| Chart | Recharts `BarChart` or SVG bins (12–20 bins, auto domain) | Overlaid or grouped bars |
| Legend | Colour by well; show n per well | — |

Place **below Panel C** on `/` Executive Summary (new card; does not displace existing panels).

### 5.6 Stakeholder decisions (locked)

| Question | Decision |
|----------|----------|
| `JENA31_DUAL` pay % | **Sum pay MD ÷ sum lateral** across both laterals |
| Histogram defaults | Well A = **JENA31**, Well B = **JENA31_DUAL**, property = **RQI** |
| Dual-lateral MD axis | **Single MD track**, **colour by lateral** (`source_lateral`) |

### 5.7 Acceptance

- Phase C executive layout **still present**; comparison dropdown uses cluster cosine ordering.
- `JENA31_DUAL` in `wells.json`, `clusters.json`, Panel C — **not** in Well Detail / Water-Risk dropdowns.
- Panel C shows single MD track with JENA31 vs JENA31DW1 colours.
- Histogram defaults: JENA31 vs JENA31_DUAL, property RQI.
- Deploy pipeline regenerates dual-lateral JSON when `scripts/**` changes.

---

## 6. Phase E — Readability & interaction pass

Cross-cutting UX fixes after Phases A–D. **One agent session** — design decisions inline, ship code immediately (no separate design doc).

### E1 — Site-wide legibility audit

| Area | Target |
|------|--------|
| Body text | ≥ `text-sm` (14px); table cells ≥ `text-sm`; avoid 9px except axis micro-labels |
| Table rows | `py-2.5` minimum; sticky column solid background + right-edge shadow |
| Headings | Clear hierarchy `h1` → `h2` → card titles; max line length ~72ch for prose |
| Monospace metrics | `tabular-nums`; sufficient contrast on coloured RQI/WRCI |
| All routes | Portfolio, Well Detail, Water-Risk, Compare, Intra-well, Methodology, Executive |

### E2 — Executive focus panels — larger & digestible

| Change | Spec |
|--------|------|
| Panel min-height | ≥ `min-h-[280px]` per concern track (desktop); ≥ `360px` full panel row |
| Track height | SVG / chart area ≥ **120px**; marker radius ≥ **6px** (8px High) |
| Dropdowns | Full labels (no truncated alias); `text-sm` |
| Spacing | `gap-6` between focus vs analog tracks; panel padding `p-5` |

### E3 — Focus panel node hover — risk flag popover

On **concern zone markers** (Elevated/High nodes) in executive focus/analog tracks:

- **Hover** (and **focus** for keyboard): floating popover (`FlagExplainPopover`)
- Content: depth MD, `risk_class`, each `flags[]` with **plain-language reason** from thresholds + `evidence` (reuse `water_risk` evidence shape)
- Example: *"owc_high — OWC distance 3.8 m (&lt;4 m), good rock RQI 0.66"*
- Implement `site/src/lib/flagExplain.ts` — single source for flag copy; import `@/config` cutoffs

### E4 — Risk column popover (all zone tables)

On **Well Detail**, **Water-Risk Explorer** zone lists, and any executive zone table:

- **Risk** column (`RiskBadge`) is hoverable when `risk_class` is Elevated or High (or flags present)
- Popover explains **why** flagged: WRCI value + rule summary + per-flag explanations
- Empty/Low risk: no popover (cursor default)

### E5 — Hierarchical clustering — easier to digest

Redesign `/compare` clustering block + shared `Dendrogram.tsx`:

| Issue | Fix |
|-------|-----|
| Cramped labels | `leafSpacing` ≥ 44px; SVG min-width 100%; horizontal scroll |
| Tiny text | Label `fontSize` ≥ 11px; show `display` name where short |
| No interaction | Hover leaf → tooltip: cluster id, cosine-sim to JENA31 / JENA31DW1 |
| Stat grid truncated | Full cluster assignment table (sortable) below dendrogram |
| Colour | Distinct cluster palette; WCAG AA contrast on background |

Add **cluster analog summary cards** (cosine top-5) for JENA31, JENA31DW1, JENA31_DUAL — mirrors executive logic.

### E6 — Isolation band visibility

| Token | Value |
|-------|-------|
| `--isolation-band-fill` | `color-mix(in srgb, #f59e0b 35%, transparent)` (amber) |
| `--isolation-band-stroke` | `#f59e0b` 2px dashed |
| `--isolation-band-label` | "Mechanical isolation" chip in legend |

Apply on executive concern tracks, intersection view (B1), and optional Well Detail depth track overlay.

---

## 7. Phase F — Structural executive depth tracks (pseudo-section view)

**Status:** Spec drafted — **awaiting stakeholder answers** (§11 Phase F questions) before implement  
**Session type:** **One combined** design + implement session (no separate `phase-f-design.md`)  
**Scope:** Replace flat MD-only `ConcernTrack` / compare tracks in Executive Summary Panels **A**, **B**, and Panel **C** compare side with a **structural pseudo-section**: risk flags positioned in **MD × mTVDss** space, full-width tracks, OWC + hard-floor horizons, trajectory polyline, revised isolation styling.

### 7.1 Objective

Give executives a **well-execution / structural** read of where Elevated and High concern zones sit relative to:

- The **well path** (trajectory in MD–mTVDss space)
- **Field OWC** (mTVDss from `Oil_Water_Contact.csv` / `intervals/*.json` `owc_mtvds`)
- **Hard floor** at **OWC + 3 m** structurally shallower (e.g. OWC −1198 → hard floor **−1195 m TVDss**)
- **Mechanical isolation** intervals (restyled)

**Does not replace** Phase C/D panel layout (focus + compare dropdowns, stat tiles, bullets, histogram, portfolio strip). **Only** the inner track SVG components change.

### 7.2 Requested visual changes (stakeholder brief)

| # | Change | Proposed interpretation (pending confirm) |
|---|--------|-------------------------------------------|
| F1 | Stretch depth tracks to **full panel width** | Responsive SVG (`width: 100%`, `viewBox` from container); no fixed 320px viewBox |
| F2 | Increase panel height **×1.5** | `min-h-[280px]` → **`min-h-[420px]`**; plot area ~**210px** (from ~140px) |
| F3 | **OWC** + **hard floor** lines | Horizontal lines at `owc_mtvds` and `owc_mtvds + 3` (shallower = less negative Z) |
| F4 | Risk flags in **Z (mTVDss)** | Y-position from interval `mTVDss` (or trajectory interpolate at interval MD) |
| F5 | **X-axis** = MD, larger tick labels | MD axis bottom; tick font ≥ **13px**; sensible step (50–200 m) |
| F6 | **Y-axis** = mTVDss | Left axis; geoscience convention **increasing depth downward** (more negative TVDss lower on chart) |
| F7 | **Trajectory line** between flags | Polyline through trajectory stations in lateral MD window (preferred) or through concern-interval (MD, mTVDss) points |
| F8 | **Isolation** restyle | Light grey → white **hatched** fill; **no border** (replaces Phase E amber dashed on executive tracks only) |
| F9 | Preserve Phase E **flag popovers** | `FlagExplainPopover` / `explainInterval` on markers |

### 7.3 Proposed chart model (default assumption — confirm)

```
        mTVDss (Y, down = deeper)
          ↑
    -1195 ┄┄┄ Hard floor (OWC + 3 m shallower)
    -1198 ━━━ OWC
          │    ╭──●──╮  ← trajectory polyline (MD vs mTVDss)
          │   ●    ○   ← concern markers (Y = mTVDss, X = MD)
          │  ░░░░░░░   ← isolation hatch (MD span, full Y band or clip to path)
          └──────────────────→ MD (X)
           dc30            TD
```

- **Markers:** `(x = md_mid, y = mTVDss)` per concern interval (`isConcernInterval`).
- **Trajectory:** Load `site/public/data/trajectory/{ALIAS}.json` stations filtered to McKinlay lateral MD range (`dc30`–`td` from `wells.json`), plot `(md, mtvds)`.
- **OWC / hard floor:** Span full plot width at constant Y.
- **Linked axes (open):** Focus and compare tracks in one panel — same mTVDss range? same MD range per well or normalize?

### 7.4 Data dependencies

| Data | Current | Phase F need |
|------|---------|--------------|
| Interval `mTVDss`, `depth`, `risk_class`, `flags` | ✅ `intervals/{ALIAS}.json` | Marker position + popover |
| `owc_mtvds`, `owc_field` | ✅ per intervals payload | OWC line |
| Hard floor | ✅ derivable `owc_mtvds + 3` | Hard-floor line |
| `isolation_depths[]` | ✅ intervals payload | Hatch bands (MD → X only, or MD+TVD?) |
| Full trajectory polyline | ❌ not in `site/public/data/` | **New export** — see §3.3 / B1 schema |
| Petrel `*_trajectory` at repo root | ✅ 23 files | Pipeline input |
| `JENA31_DUAL` | ✅ merged intervals + `source_lateral` | **Panel C focus** needs dual-path or split view (open) |

**Pipeline (recommended):** extend `export_web_data.py` or add `export_trajectory_web.py` → `site/public/data/trajectory/{ALIAS}.json`; hook `deploy.yml` path filter (`**/*_trajectory` already listed).

### 7.5 Components to refactor

| File | Action |
|------|--------|
| `site/src/components/executive/ConcernTrack.tsx` | Replace with `StructuralConcernTrack` (MD×mTVDss SVG) |
| `site/src/components/executive/DualLateralTrack.tsx` | Panel C focus — dual-lateral structural view (TBD after Q8) |
| `site/src/components/executive/ComparisonPanel.tsx` | Pass `owc_mtvds`, trajectory URL; full-width layout |
| `site/src/components/executive/DualLateralPanel.tsx` | Same for Panel C |
| `site/src/components/executive/ExecutiveSummary.tsx` | Update legend (OWC, hard floor, trajectory, isolation hatch) |
| `site/src/styles/tokens.css` | `--isolation-hatch-fill`, `--owc-line`, `--hard-floor-line` |
| `scripts/export_web_data.py` or new script | Trajectory JSON export |

### 7.6 Out of scope (Phase F)

- Structural **grid** overlay (Phase B2)
- `/intersection` route (Phase B1 — may share `StructuralSectionChart` lib later)
- Well Detail depth tracks (optional follow-up)
- Changing comparison dropdown ranking (stays cluster cosine)

### 7.7 Acceptance criteria (draft — finalize after §11 answers)

- [ ] Panels A/B focus + compare tracks span **100%** of panel column width
- [ ] Panel track area ≥ **420px** min-height (1.5× Phase E)
- [ ] OWC and hard-floor lines visible on JENA31 focus track with correct mTVDss labels
- [ ] Concern markers at **(MD, mTVDss)**; Y-axis labelled mTVDss; X-axis MD with readable ticks
- [ ] Trajectory polyline drawn for lateral MD range
- [ ] Isolation = grey/white hatch, no stroke
- [ ] Phase E flag popovers still work on markers
- [ ] `npm test && npm run build`; trajectory export in CI when pipeline runs
- [ ] Mobile: tracks scroll horizontally if needed; panels stack (no layout regression)

---

## 8. Phased execution summary

| Phase | Scope | Design doc | Implement | Blocked? |
|-------|--------|------------|-----------|----------|
| **A** | QoL A1–A5 (colour, state, sticky, methodology dropdown, well count) | `phase-a-design.md` | 1 session | **No** |
| **B1** | Intersection — trajectory + flags + OWC + isolation (no grid) | `phase-b1-design.md` | 1 session | **No** |
| **B2** | Grid overlay + separation | `phase-b2-design.md` | 1 session | **Yes** — grid XYZ pending |
| **C** | Executive Analog Concern Hub (Jaccard analogs — superseded by D for ranking) | `phase-c-design.md` | 1 session | **No** |
| **D** | Add Panel C + histogram; cluster comparison dropdown (keep Phase C layout) | `phase-d-design.md` | 1 session | **No** |
| **E** | Readability & popovers (site-wide) | — | **1 combined session** | **No** |
| **F** | Structural executive depth tracks (MD×mTVDss, OWC, trajectory) | — | **1 combined session** | **Partial** — trajectory web export |

### Implementation status (2026-07-14)

| Phase | Status | Notes |
|-------|--------|-------|
| **A** | ✅ **Complete** | MetricCell, sticky tables, `usePageState`, methodology Methods 2–5, well count 23 |
| **C** | ✅ **Complete** | Executive Analog Concern Hub — Panels A/B, portfolio strip, collapsible table |
| **D** | ✅ **Complete** | `JENA31_DUAL` pipeline + Panel C + histogram; cluster `cos=` compare dropdowns |
| **E** | ✅ **Complete** | Legibility audit, executive popovers, risk explain badges, dendrogram + cluster cards, isolation bands |
| **F** | **Pending** | Structural executive tracks — awaiting §11 Phase F answers |
| **B1** | Pending | Intersection viewer — design doc not started |
| **B2** | Blocked | Grid XYZ pending |

**Recommended session order:**

1. **Design A** → **Implement A**  
2. **Design C** → **Implement C**  
3. **Design D** → **Implement D** (cluster analogs + dual lateral + histogram)  
4. **Phase E combined** (readability — after C/D executive components exist)  
5. **Phase F combined** (structural executive tracks — after E; shares trajectory export with B1)  
6. **Design B1** → **Implement B1**  
7. **Design B2** → **Implement B2** when grids arrive  

**Maximum simultaneous agents: 1** per stage (design OR implement, not both on same files).

**Debugging agent:** Recommended after Phase E (popover copy, contrast) and Implement B1 (trajectory projection spot-check at INCL>80°).

---

## 9. Design agent prompts

### Prompt — Phase A Design

```
DESIGN ONLY — do not write production React code.

Read:
- QoL-Updates-2026-07-13.md §2 (Phase A, items A1–A5)
- site/src/pages/Methodology.tsx (current layout)
- New Statistical Methods.md (Methods 2–5 — content source for A5)
- site/src/config.ts, site/src/index.css (existing tokens)
- .cursor/skills/ui-ux-pro-max/SKILL.md

Load UI/UX Pro Max skill. Run:
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "geoscience petrophysics dashboard data table methodology" --design-system -p "McKinlay Water-Risk Review"

Deliver: docs/qol-design/phase-a-design.md containing:
1. RQI/WRCI MetricCell colour spec (red/green semantics + tooltip copy)
2. DataTable sticky-first-column behaviour (shadow, z-index, scroll container)
3. usePageState key map per route (including methodology accordion id)
4. Methodology §A5: dropdown/accordion IA for Methods 2–5 — wireframe each panel sections
5. Component list: MetricCell, MethodSelector, MethodDetailPanel (names flexible)
6. Accessibility: contrast on coloured metrics, keyboard for method selector

Commit design doc to main only.
```

---

### Prompt — Phase C Design

```
DESIGN ONLY — do not write production React code.

Read:
- QoL-Updates-2026-07-13.md §4 (Executive Analog Concern Hub)
- site/public/data/wells.json, stats/jaccard.json, intervals/JENA31.json, intervals/MCKINLAY10.json (isolation example)
- site/src/pages/PortfolioDashboard.tsx
- docs/qol-design/phase-a-design.md (if exists — align tokens)
- .cursor/skills/ui-ux-pro-max/SKILL.md

Load UI/UX Pro Max skill. Run:
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "executive dashboard comparison analytics oil gas risk" --design-system -p "McKinlay Executive Summary"

Deliver: docs/qol-design/phase-c-design.md containing:
1. Full wireframe for dual comparison panels + portfolio strip + collapsed table
2. WellSelect / analog Select interaction spec (defaults, reset rules, labels with Jaccard score)
3. MD concern track visual design: Elevated vs High markers, isolation band hatching, isolated vs open glyph
4. Stat tile definitions (4 per panel)
5. Colour legend and highlight rules for portfolio strip
6. Empty states (no concern zones; no isolation on file)
7. Mobile: stack focus above analog; dropdowns full-width
8. sessionStorage keys for panel focus/analog selections

Commit design doc to main only.
```

---

### Prompt — Phase B1 Design

```
DESIGN ONLY — do not write production React code.

Read:
- QoL-Updates-2026-07-13.md §3 (Intersection Windows)
- scripts/trajectory.py, Oil_Water_Contact.csv
- site/public/data/intervals/JENA31.json (flags, isolation_depths)
- .cursor/skills/ui-ux-pro-max/SKILL.md

Load UI/UX Pro Max skill. Run:
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "geoscience cross section trajectory wellbore SVG" --design-system -p "McKinlay Intersection"

Deliver: docs/qol-design/phase-b1-design.md containing:
1. /intersection page layout — WellSelect, legend, SVG viewport
2. Section axes spec (X = distance along section, Y = mTVDss inverted)
3. Flag colour map (ZOI, owc_near, low_GR, lowres, lowfluor)
4. OWC + hard floor line styles; isolation MD band overlay
5. Tooltip content on interval marker hover
6. Default well on first load (JENA31)

Commit design doc to main only.
```

---

### Prompt — Phase B2 Design

```
DESIGN ONLY — prerequisite: phase-b1-design.md on main; grid schema in QoL §3.3.

Read:
- QoL-Updates-2026-07-13.md §3, docs/qol-design/phase-b1-design.md
- .cursor/skills/ui-ux-pro-max/SKILL.md

Deliver: docs/qol-design/phase-b2-design.md — grid scatter/contour layer, legend, separation metric placement, colour hierarchy (grid behind trajectory).

Commit design doc to main only.
```

---

### Prompt — Phase D Design

```
DESIGN ONLY — do not write production React code.

Read:
- QoL-Updates-2026-07-13.md §5 (Phase D — dual lateral, clustering, histogram)
- site/public/data/stats/clusters.json (cosine_similarity matrix)
- site/public/data/wells.json, intervals/JENA31.json, intervals/JENA31DW1.json
- docs/qol-design/phase-c-design.md (if exists — extend Panel C + swap analog badge to cosine)
- .cursor/skills/ui-ux-pro-max/SKILL.md

Load UI/UX Pro Max skill. Run:
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "dual well comparison histogram clustering analytics dashboard" --design-system -p "McKinlay Phase D"

Deliver: docs/qol-design/phase-d-design.md containing:
1. **Explicit:** Phase C panel layout is preserved — document what is additive only
2. Panel C wireframe — JENA31_DUAL; **single MD track, colour-by-lateral** + compare track (cluster dropdown)
3. Comparison-well dropdown — sorted by **cluster cosine**; badge format `cos=0.75`; pluggable ranking helper
4. Distribution panel — defaults: JENA31 vs JENA31_DUAL, property **RQI**; histogram layout
5. `pay_pct` for JENA31_DUAL: **sum pay MD / sum lateral**
6. `source_lateral` colour legend for dual-lateral track
7. Exclusion rules — JENA31_DUAL not in Well Detail / Water-Risk

Commit design doc to main only.
```

---

## 10. Implementation agent prompts

### Prompt — Phase A Implement

```
IMPLEMENT — Phase A only.

Read:
- QoL-Updates-2026-07-13.md §2 (A1–A5)
- docs/qol-design/phase-a-design.md (REQUIRED — do not improvise layout)
- site/src/config.ts, site/src/hooks/useWellSelection.ts, site/src/components/DataTable.tsx
- New Statistical Methods.md (Methods 2–5 content for Methodology panels)

Tasks:
1. site/src/lib/rqiWrciStyle.ts — rqiCellClass, wrciCellClass per A1/A2
2. Apply metric colouring on Well Detail, Water-Risk, other RQI/WRCI surfaces
3. DataTable: stickyFirstColumn + vertical scroll container (A4)
4. usePageState.ts + useScrollRestore; wire all routes in A3
5. Methodology A5: method dropdown/accordion for Methods 2–5 with high-detail content (equations, properties, outputs) from New Statistical Methods.md + @/config constants
6. Fix AppShell well count → 23 if stale

Constraints:
- Match phase-a-design.md tokens and copy
- Do not change WRCI/RQI calculation logic
- npm test && npm run build must pass

Commit to main.
```

---

### Prompt — Phase C Implement

```
IMPLEMENT — Phase C only.

Prerequisite: Phase A on main; docs/qol-design/phase-c-design.md exists.

Read:
- QoL-Updates-2026-07-13.md §4
- docs/qol-design/phase-c-design.md (REQUIRED)
- site/public/data/wells.json, stats/jaccard.json, intervals/*.json
- site/src/pages/PortfolioDashboard.tsx, site/src/hooks/useWellSelection.ts

Tasks:
1. ExecutiveSummary section above portfolio table on / (option B)
2. Two independent ComparisonPanel components (NOT Jena vs Jena default):
   - Panel A default: focus JENA31, analog top jaccard (STIMPEE7)
   - Panel B default: focus JENA31DW1, analog top jaccard (BIALA19)
3. Focus + Analog WellSelect dropdowns; analog excludes focus; reset analog on focus change
4. MD concern tracks: Elevated/High intervals; isolation_depths bands; isolated vs non-isolated glyph
5. Per-panel StatTiles: elevated count, high count, isolated concerns, non-isolated concerns
6. Portfolio elevated strip with highlight for focus + selected analogs
7. Persist panel selections via usePageState; CTA to /water-risk

Helper: generalise Jaccard analog ranking for any focus alias from jaccard.json matrix (not only jena_analog_ranking).
Note: Phase D will replace Jaccard with cluster cosine ranking on executive panels — build analog selector so the ranking source is pluggable.

Constraints:
- Graphic-first, minimal prose (≤2 bullets per panel)
- Load UI/UX Pro Max polish per phase-c-design.md
- npm test && npm run build must pass

Commit to main.
```

---

### Prompt — Phase B1 Implement

```
IMPLEMENT — Phase B1 only.

Read:
- QoL-Updates-2026-07-13.md §3
- docs/qol-design/phase-b1-design.md (REQUIRED)
- scripts/trajectory.py, Oil_Water_Contact.csv

Tasks:
1. scripts/export_trajectory_web.py → site/public/data/trajectory/{ALIAS}.json
2. Hook into deploy workflow (pipeline step after export_web_data.py) when trajectory inputs change
3. Route /intersection + IntersectionExplorer + SectionSvg per design doc
4. Trajectory polyline (INCL≥80), OWC + hard floor, flag markers, isolation bands
5. AppShell nav item

Acceptance:
- /intersection?well=JENA31 renders section; OWC −1198, floor −1195
- npm run build clean

Commit to main.
```

---

### Prompt — Phase B2 Implement

```
IMPLEMENT — Phase B2 only.

Prerequisite: B1 on main; docs/qol-design/phase-b2-design.md; grids at site/public/data/grids/{FIELD}.json

Read design doc + QoL §3. Implement grid layer + optional separation metric.

Commit to main.
```

---

### Prompt — Phase D Implement

```
IMPLEMENT — Phase D only.

Prerequisite: Phase C executive components on main; docs/qol-design/phase-d-design.md exists.

Read:
- QoL-Updates-2026-07-13.md §5
- docs/qol-design/phase-d-design.md (REQUIRED)
- scripts/export_web_data.py, scripts/config.py
- site/src/pages/PortfolioDashboard.tsx (or ExecutiveSummary components)
- site/src/hooks/useWells.ts, site/src/pages/CompareInterWell.tsx

Pipeline:
1. Export virtual well JENA31_DUAL — merge JENA31 + JENA31DW1 intervals; tag source_lateral
2. Update wells.json, intervals/, water_risk/, zones/ for JENA31_DUAL
3. Recompute stats/clusters.json (+ jaccard/ks if needed) including JENA31_DUAL
4. Add stats/cluster_analog_ranking.json from cosine_similarity matrix
5. Hook into deploy pipeline (scripts/** path filter already covers this)

Site:
6. **Preserve** Phase C executive layout — do not replace panels A/B
7. Add Panel C — focus JENA31_DUAL; **single MD track coloured by source_lateral**; compare track + cluster-sorted dropdown
8. Panels A/B/C: comparison-well dropdown **ordered by cluster cosine** (site/src/lib/clusterAnalogs.ts); badge `cos=` not `J=`
9. Distribution histogram — defaults: Well A **JENA31**, Well B **JENA31_DUAL**, property **RQI**
10. useWells({ includeDualLateral: false }) on Well Detail + Water-Risk; true on executive + histogram
11. Portfolio strip: JENA31_DUAL badge "Dual lateral"

pay_pct for JENA31_DUAL: sum(constituent pay MD) / sum(constituent lateral length).

Constraints:
- Do NOT replace or redesign Phase C executive panel structure
- Do NOT add JENA31_DUAL to Well Detail or Water-Risk Explorer dropdowns
- npm test && npm run build; run export_web_data.py locally to validate JSON
- python3 scripts/test_zoi.py scripts/test_owc.py as smoke tests

Commit to main (include regenerated site/public/data if pipeline outputs changed).
```

---

## 11. Combined prompt — Phase E (Design + Implement)

```
DESIGN AND IMPLEMENT in one session — Phase E readability & interaction pass.

Read:
- QoL-Updates-2026-07-13.md §6 (Phase E — E1–E6)
- All site routes: site/src/pages/*.tsx
- site/src/components/Dendrogram.tsx, DataTable.tsx, executive comparison components (Phase C/D)
- site/public/data/water_risk/JENA31.json (evidence object for popover copy)
- site/src/config.ts, site/src/index.css
- .cursor/skills/ui-ux-pro-max/SKILL.md

Load UI/UX Pro Max skill. Run:
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "data dense dashboard readability tooltip accessibility contrast" --design-system -p "McKinlay Readability"

Do NOT write a separate design doc — apply UI/UX Pro Max recommendations directly in code.

─── SITE-WIDE LEGIBILITY (E1) ───
Audit every page. Fix: font sizes, table row padding, heading hierarchy, contrast on metric colours,
truncation, horizontal scroll labels. Minimum table body text-sm; tabular-nums on numeric columns.

─── EXECUTIVE FOCUS PANELS (E2) ───
Increase ComparisonPanel / concern track size: min-h-[280px] tracks, marker radius ≥6px (8px High),
gap-6 between focus and analog, p-5 panel padding. Ensure dual-lateral Panel C readable at a glance.

─── FLAG POPOVERS ON TRACK NODES (E3) ───
Create site/src/lib/flagExplain.ts + components/FlagExplainPopover.tsx.
Hover/focus on executive concern markers → popover with risk_class, flags[], human explanations
from evidence + config thresholds (OWC distance, RES_DEEP, fluor, ZOI, etc.).

─── RISK COLUMN POPOVERS (E4) ───
Well Detail + Water-Risk zone tables: wrap RiskBadge (Elevated/High or flagged) with popover
explaining why the zone was classified — WRCI, rule path, per-flag detail from interval or water_risk evidence.

─── HIERARCHICAL CLUSTERING (E5) ───
Redesign Dendrogram + /compare clustering section: wider leaf spacing (≥44px), larger labels (≥11px),
horizontal scroll, hover tooltips (cluster id, cosine to Jena wells), full cluster assignment table.
Add cluster analog summary cards for JENA31, JENA31DW1, JENA31_DUAL (top-5 cosine).

─── ISOLATION BANDS (E6) ───
Add CSS tokens --isolation-band-fill, --isolation-band-stroke (high-contrast amber dashed).
Apply on executive tracks, Compare if relevant, legend entry "Mechanical isolation".

Acceptance:
- Executive markers show flag popover on hover with OWC example at 2500 m MD
- Well Detail Risk badge popover explains at least one Elevated zone
- Dendrogram readable without zoom; isolation bands obvious vs background
- npm test && npm run build pass; no layout regressions on mobile (stack panels)

Commit to main.
```

---

## 12. Combined prompt — Phase F (Design + Implement)

```
DESIGN AND IMPLEMENT in one session — Phase F structural executive depth tracks.

Prerequisite: Phase E complete on main; read stakeholder answers to §11 Phase F questions
(if unanswered, implement marked DEFAULT assumptions in §7.3 and document in PR).

Read:
- QoL-Updates-2026-07-13.md §7 (Phase F — full spec)
- QoL-Updates-2026-07-13.md §11 Phase F open questions
- site/src/components/executive/ConcernTrack.tsx, DualLateralTrack.tsx, ComparisonPanel.tsx, DualLateralPanel.tsx
- site/src/components/Popover.tsx, FlagExplainPopover.tsx, site/src/lib/flagExplain.ts (preserve popovers)
- scripts/trajectory.py, sample Jena_31_trajectory, Oil_Water_Contact.csv
- site/public/data/intervals/JENA31.json (mTVDss, owc_mtvds, isolation_depths)
- QoL §3.3 trajectory JSON schema (B1 — reuse for export)
- .cursor/skills/ui-ux-pro-max/SKILL.md

Load UI/UX Pro Max skill. Run:
  python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "well trajectory cross section TVDss risk flags geoscience SVG" --design-system -p "McKinlay Executive Structural"

Do NOT write a separate design doc — apply recommendations directly in code.

─── PIPELINE (if not already present) ───
1. Export site/public/data/trajectory/{ALIAS}.json per §3.3:
   stations: { md, mtvds, incl, x, y }[]; owc_mtvds; hard_floor_mtvds (= owc + 3 m shallower)
2. Hook into deploy.yml (path filter **/*_trajectory already exists)
3. JENA31_DUAL: export merged trajectory or dual constituents per §11 Q8 answer

─── STRUCTURAL CONCERN TRACK (F1–F9) ───
Replace flat MD-only ConcernTrack with StructuralConcernTrack (or refactor in place):

Layout:
- Full width of parent panel column (ResizeObserver or 100% SVG + viewBox)
- Panel min-height 420px (1.5× Phase E 280px); plot area ~210px minimum
- Margins: left Y-axis (mTVDss), bottom X-axis (MD), room for axis labels

Axes:
- X = MD (m); ticks ≥13px; auto step from lateral span
- Y = mTVDss (m TVDss); **depth increases downward** (more negative lower)
- Y-axis label "mTVDss"; X-axis label "MD (m)"

Horizons:
- OWC: horizontal line at owc_mtvds (from intervals payload or trajectory JSON)
- Hard floor: horizontal at owc_mtvds + 3 (structurally shallower — less negative TVDss)
- Label lines in legend + on-chart micro-labels

Trajectory:
- Fetch trajectory/{alias}.json; plot polyline (md, mtvds) for lateral MD window (dc30–td)
- Stroke: muted accent; behind markers

Concern markers:
- Position at (md_mid, mTVDss) — prefer interval mTVDss; fallback trajectory interpolate at MD
- Keep Elevated/High radii 6px/8px; isolated filled vs open stroke
- Keep Phase E FlagExplainPopover on hover/focus

Isolation bands:
- MD span from isolation_depths[]; fill light grey→white diagonal hatch; **no border**
- New tokens: --isolation-hatch-fill (override executive --isolation-band-* amber from Phase E)
- Clip optional: full-height band vs path corridor (per §11 Q7)

Panels:
- ComparisonPanel A/B: both focus + compare tracks use StructuralConcernTrack
- DualLateralPanel: Panel C focus per §11 Q8; compare side uses standard structural track
- ExecutiveSummary legend: add OWC, Hard floor (+3 m), Trajectory, Isolation hatch

Shared lib (recommended):
- site/src/lib/structuralChart.ts — scales, tick generation, owc/hard-floor Y
- site/src/components/executive/StructuralConcernTrack.tsx

Tests:
- structuralChart.test.ts — scale monotonicity, hard floor = owc + 3, marker (md, mtvds)

Acceptance:
- JENA31 Panel A focus: OWC −1198 and hard floor −1195 visible; markers at TVDss not flat Y
- Trajectory visible through lateral; isolation hatch grey/white, no stroke
- Tracks span panel width; height ≥1.5× prior
- Popovers still work (e.g. 2500 m MD OWC zone)
- npm test && npm run build
- python3 scripts/export_web_data.py (or trajectory export) + smoke tests if pipeline touched

Commit to main (include site/public/data/trajectory/*.json if pipeline added).
```

---

## 13. Open questions

1. **RQI red / green semantics:** Tooltips on Methodology — red = high RQI good rock (attention), not error.  
2. **WRCI binary vs three-band:** Elevated band (40–66) — green or amber? (Plan uses binary per spec.)  
3. **Geosteering_Guide:** Which files to copy into this repo for intersection projection?  
4. **Grid delivery format:** CSV XYZ, GeoJSON, or Petrel export?  
5. **Hard floor +3 m:** Confirm **−1195 m TVDss** when OWC = −1198.  
6. **Intersection default well:** JENA31 on first load?

### Resolved (Phase D — 2026-07-14)

| Question | Decision |
|----------|----------|
| Replace executive layout? | **No** — keep Phase C; swap comparison ranking + add Panel C + histogram |
| `JENA31_DUAL` pay % | Sum pay MD ÷ sum lateral |
| Histogram defaults | JENA31 vs JENA31_DUAL, property **RQI** |
| Dual-lateral MD axis | Single MD track, colour by lateral |

### Phase F — structural executive tracks (open — 2026-07-14)

| # | Question | Default if unanswered |
|---|----------|------------------------|
| **F-Q1** | **Chart axes:** Confirm X = **MD**, Y = **mTVDss** (not horizontal distance / section X from B1)? | Yes — MD × mTVDss pseudo-section |
| **F-Q2** | **Y-axis direction:** Depth **increases downward** (more negative mTVDss toward bottom of chart)? | Yes — standard geoscience section |
| **F-Q3** | **Trajectory polyline:** Full lateral stations from `trajectory/{ALIAS}.json`, or only line segments **connecting concern flags**? | Full lateral trajectory (stations dc30–td) |
| **F-Q4** | **Marker Y source:** Interval `mTVDss` from JSON, or re-interpolate from trajectory at sample MD? | Interval `mTVDss` (already from `trajectory.py` at export) |
| **F-Q5** | **Linked scales:** Within a panel row, should focus + compare share the **same mTVDss Y-range** (and/or MD range) for visual comparison? | Same mTVDss range per panel row; MD range per well |
| **F-Q6** | **Hard floor:** Confirm **+3 m structurally shallower** than OWC (−1198 → **−1195** m TVDss for Jena)? | Yes — per §3.1 / prior open Q5 |
| **F-Q7** | **Isolation hatch:** Full vertical band across plot height at MD span, or narrow corridor around trajectory? | Full-height MD band |
| **F-Q8** | **Panel C dual-lateral focus:** One combined MD×mTVDss chart with two trajectory paths (JENA31 + JENA31DW1), or keep separate lateral columns? | Two trajectories, colour by `source_lateral` |
| **F-Q9** | **Trajectory export:** Extend `export_web_data.py` vs separate `export_trajectory_web.py`? | Extend `export_web_data.py` (single CI pass) |
| **F-Q10** | **Phase E isolation tokens:** Replace amber executive isolation with grey/white hatch **only on executive tracks**, keep amber elsewhere? | Executive only |

---

## 14. Jaccard vs cluster cosine — what each compares

| Method | What it compares | **Not** the same as |
|--------|------------------|---------------------|
| **Jaccard** (Method 4) | Whether two wells share the same **binary feature vocabulary** — each feature (e.g. `ZOI`, `lowres_over_good`, `good_rock`) is “on” if it fires on ≥10% of that well’s intervals. \(J = \|A \cap B\| / \|A \cup B\|\). | **Count of elevated zones** — a well with 57 elevated intervals and one with 10 can still score \(J=1\) if the same feature *types* are present often enough. |
| **Cluster cosine** (Method 5) | **Continuous aggregate well properties** after standardisation: mean %SS, mean GR, mean RES_DEEP, pay %, mean WRCI, % high risk, % ZOI, etc. Cosine similarity = angle between these 8-D vectors. | Flag-by-flag identity — two wells can have similar *average* petrophysics but different flag patterns. |

**Executive summary (Phase D):** use **cluster cosine** for the comparison-well dropdown — “which well has the most similar **overall property fingerprint**?” Jaccard stays on **`/compare`** for “which well shows the same **kinds of risk features**?”

---

## 15. Related documents

| Doc | Role |
|-----|------|
| `QoL-Updates-2026-07-13.md` | **This file** — scope, prompts, acceptance |
| `docs/qol-design/phase-{a,b1,b2,c,d}-design.md` | **Design agent outputs** — implement agents must read |
| `site/public/data/stats/cluster_analog_ranking.json` | Phase D — executive cluster analog defaults |
| `site/public/data/intervals/JENA31_DUAL.json` | Phase D — merged dual-lateral intervals |
| `.cursor/skills/ui-ux-pro-max/SKILL.md` | UI/UX Pro Max skill — **Design agents** |
| `New Statistical Methods.md` | Canonical method text for Methodology A5 + corpus |
| `updated-plan-2026-07-10.md` | Completed pipeline baseline |
| `site/src/config.ts` | Thresholds for colouring + method constants |
| `site/public/data/stats/jaccard.json` | Analog rankings for Phase C |
| `site/public/data/intervals/{ALIAS}.json` | `risk_class`, `isolated`, `isolation_depths` |
| `Isolation_Depths.xlsx` | Mechanical isolation source |
| `Oil_Water_Contact.csv` | OWC + hard floor |
| `site/public/data/trajectory/{ALIAS}.json` | Phase F / B1 — well path stations |
| `scripts/trajectory.py` | MD → mTVDss (extend for web export) |
| `.github/workflows/deploy.yml` | Deploy + pipeline path filters |

---

## 16. Revision history

| Date | Change |
|------|--------|
| 2026-07-13 | Initial QoL + intersection + executive summary plan |
| 2026-07-14 | Design→Implement workflow; UI/UX Pro Max; Phase A5 methodology dropdown; Phase C reimagined as Analog Concern Hub; separate design/impl prompts; updated Jena stats + isolation |
| 2026-07-14d | Phase F spec + combined prompt; structural executive MD×mTVDss tracks; §11 Phase F open questions |
