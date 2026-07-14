# QoL & Visualisation Updates — Implementation Plan

**Date:** 2026-07-13 (rev. 2026-07-14)  
**Status:** Approved — **Design → Implement** two-stage workflow per phase  
**Repo:** `NFernie/Horizontaldata_review`  
**Baseline:** Post–Phase 6 pipeline (`updated-plan-2026-07-10.md`) — **23 wells**, RQI v2, WRCI v2, ZOI, OWC, mechanical isolation, no ΔRes  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md` — **required for all Design agents**  
**Reference (private):** [NFernie/Geosteering_Guide](https://github.com/NFernie/Geosteering_Guide) — intersection window UX (static adaptation)

---

## 0. Agent workflow — Design then Implement

Each phase (**A**, **B1**, **B2**, **C**) runs as **two separate agent sessions**:

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
| Well selection persistence | **Partial** | `sessionStorage` for Well Detail alias + Water-Risk left/right wells only |

### ⚠️ Stale / gaps (motivation for this plan)

| Gap | Current behaviour |
|-----|-------------------|
| **RQI / WRCI cell colours** | Plain monospace text — no threshold colouring |
| **Full page state** | Navigating away loses scroll, Compare matrix mode, Intra-well well, filters |
| **Sticky table columns** | `DataTable` scrolls entire table — label column scrolls off-screen |
| **AppShell header** | May still show stale well count — verify **23** |
| **Methodology — Other methods** | Brief formula blocks only — no per-method dropdown, low detail |
| **Trajectory for viz** | Only `mTVDss` on intervals — **no X/Y/INCL** exported to `site/public/data/` |
| **Structural grids** | Not in repo — **pending delivery** |
| **Intersection window** | Not implemented |
| **Executive front page** | Portfolio table only — no concern-zone / analog comparison hub |
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

---

## 5. Phased execution summary

| Phase | Scope | Design doc | Implement | Blocked? |
|-------|--------|------------|-----------|----------|
| **A** | QoL A1–A5 (colour, state, sticky, methodology dropdown, well count) | `phase-a-design.md` | 1 session | **No** |
| **B1** | Intersection — trajectory + flags + OWC + isolation (no grid) | `phase-b1-design.md` | 1 session | **No** |
| **B2** | Grid overlay + separation | `phase-b2-design.md` | 1 session | **Yes** — grid XYZ pending |
| **C** | Executive Analog Concern Hub | `phase-c-design.md` | 1 session | **No** |

**Recommended session order:**

1. **Design A** → **Implement A**  
2. **Design C** → **Implement C** (after A merged — shares `DataTable`, `usePageState`, tokens)  
3. **Design B1** → **Implement B1** (can parallel Design with C after A)  
4. **Design B2** → **Implement B2** when grids arrive  

**Maximum simultaneous agents: 1** per stage (design OR implement, not both on same files).

**Debugging agent:** Recommended after Implement A (colour contrast / a11y) and Implement B1 (trajectory projection spot-check at INCL>80°).

---

## 6. Design agent prompts

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

## 7. Implementation agent prompts

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

## 8. Open questions

1. **RQI red / green semantics:** Tooltips on Methodology — red = high RQI good rock (attention), not error.  
2. **WRCI binary vs three-band:** Elevated band (40–66) — green or amber? (Plan uses binary per spec.)  
3. **Geosteering_Guide:** Which files to copy into this repo for intersection projection?  
4. **Grid delivery format:** CSV XYZ, GeoJSON, or Petrel export?  
5. **Hard floor +3 m:** Confirm **−1195 m TVDss** when OWC = −1198.  
6. **Phase C analog ranking:** Generalise Jaccard ranking to any focus well at runtime, or precompute in export? (Plan: runtime helper acceptable.)  
7. **Intersection default well:** JENA31 on first load?

---

## 9. Related documents

| Doc | Role |
|-----|------|
| `QoL-Updates-2026-07-13.md` | **This file** — scope, prompts, acceptance |
| `docs/qol-design/phase-{a,b1,b2,c}-design.md` | **Design agent outputs** — implement agents must read |
| `.cursor/skills/ui-ux-pro-max/SKILL.md` | UI/UX Pro Max skill — **Design agents** |
| `New Statistical Methods.md` | Canonical method text for Methodology A5 + corpus |
| `updated-plan-2026-07-10.md` | Completed pipeline baseline |
| `site/src/config.ts` | Thresholds for colouring + method constants |
| `site/public/data/stats/jaccard.json` | Analog rankings for Phase C |
| `site/public/data/intervals/{ALIAS}.json` | `risk_class`, `isolated`, `isolation_depths` |
| `Isolation_Depths.xlsx` | Mechanical isolation source |
| `Oil_Water_Contact.csv` | OWC + hard floor |
| `scripts/trajectory.py` | MD → mTVDss (extend for web export) |
| `.github/workflows/deploy.yml` | Deploy + pipeline path filters |

---

## 10. Revision history

| Date | Change |
|------|--------|
| 2026-07-13 | Initial QoL + intersection + executive summary plan |
| 2026-07-14 | Design→Implement workflow; UI/UX Pro Max; Phase A5 methodology dropdown; Phase C reimagined as Analog Concern Hub; separate design/impl prompts; updated Jena stats + isolation |
