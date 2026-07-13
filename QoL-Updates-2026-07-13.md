# QoL & Visualisation Updates — Implementation Plan

**Date:** 2026-07-13  
**Status:** Approved for implementation — QoL items ready; Intersection Windows **blocked on grid data**  
**Repo:** `NFernie/Horizontaldata_review`  
**Baseline:** Post–Phase 6 pipeline (`updated-plan-2026-07-10.md`) — **23 wells**, RQI v2, WRCI v2, ZOI, OWC, no ΔRes  
**Reference (private):** [NFernie/Geosteering_Guide](https://github.com/NFernie/Geosteering_Guide) — intersection window UX (static adaptation)

---

## 1. Current implementation review (as of 2026-07-13)

### ✅ Delivered (updated-plan Phases 1–6)

| Area | Status | Notes |
|------|--------|-------|
| Wells | **23 / 23** in `wells.json` | McKinlay 10–15 onboarded (litho+gas ingest) |
| RQI v2 | ✅ | 8 components; `scripts/config.py` + `site/src/config.ts` |
| WRCI v2 | ✅ | `0.40·RQI + 0.20·lowres + 0.20·lowfluor + 0.20·owc_severity` |
| Flags | ✅ | `lowres`, `lowfluor`, `low_GR` (<70 gAPI), `ZOI`, `owc_near` / `owc_elevated` |
| ΔRes / `highperm` | ✅ Removed | Absent from JSON, site, stats |
| Trajectory | ✅ `mTVDss` per interval | `scripts/trajectory.py`; Petrel `*_trajectory` at repo root |
| OWC | ✅ | `Oil_Water_Contact.csv`; distance + severity in WRCI |
| Pay / overburden | ✅ | Exclusion logic unchanged; 23-well pay summaries |
| CI | ✅ | `compute_pay_summary.py` in deploy workflow |
| RQI in tables | ✅ | Well Detail + Water-Risk show RQI alongside WRCI |
| Well selection persistence | **Partial** | `sessionStorage` for Well Detail alias + Water-Risk left/right wells only |

### ⚠️ Stale / gaps (motivation for this plan)

| Gap | Current behaviour |
|-----|-------------------|
| **RQI / WRCI cell colours** | Plain monospace text — no threshold colouring |
| **Full page state** | Navigating away loses scroll, Compare matrix mode, Intra-well well, filters |
| **Sticky table columns** | `DataTable` scrolls entire table — label column scrolls off-screen |
| **AppShell header** | Still says **"17 horizontal wells"** — should be **23** |
| **Trajectory for viz** | Only `mTVDss` on intervals — **no X/Y/INCL** exported to `site/public/data/` |
| **Structural grids** | Not in repo — **pending delivery** |
| **Intersection window** | Not implemented |
| **Executive front page** | Portfolio table only — no Jena-focused graphic summary |
| **Geosteering_Guide** | Private repo — **not readable** by agents without access or copied modules |

### Jena focus wells — live stats (post–Phase 6)

| Metric | JENA 31 | JENA 31DW1 | Portfolio avg (22 others) |
|--------|---------|------------|---------------------------|
| Elevated risk intervals | **25** | **18** | ~12 (varies) |
| High risk | 0 | 0 | 0 |
| Pay % | **80.4%** | **73.6%** | ~72% |
| Lateral (m) | 1144 | 1597 | — |
| Cluster | 1 | 2 | — |
| OWC field | Jena −1198 m TVDss | Jena −1198 | — |
| Spot @ 2500 m | RQI 0.66, OWC dist **3.8 m High** | — | — |

Use these figures in the executive summary graphic (§6).

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
| `/` Portfolio | Scroll Y (optional) |
| `/well/:alias` | Selected well alias ✅ (exists); **scroll position** |
| `/water-risk` | Left/right well ✅ (exists); **scroll** |
| `/compare` | `matrixMode` (`feature` \| `depth`); scroll |
| `/intra/:alias` | Selected well; scroll |
| `/methodology` | Scroll / expanded sections (optional) |
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

## 3. Intersection Windows (Phase B — partial; grid data pending)

### 3.1 Objective

Static **intersection window** per well (selectable filter):

- Trajectory polyline in a **2D section plane** (high-inclination lateral: **INCL > 80°** from entry to TD)
- **Structural grid** points (XYZ) projected onto same plane — shows trajectory vs depth grid separation
- **Risk flags** coloured along trajectory by sample MD
- **OWC** horizon at field contact (mTVDss from `Oil_Water_Contact.csv`)
- **Hard floor** at **OWC + 3 m** (3 m structurally above contact → less negative TVDss, e.g. −1198 → **−1195**)

Adapt UX from **Geosteering_Guide** as a **static** view (no live steering).

### 3.2 Geosteering_Guide reference

**Access:** Repo is **private** — agents cannot read it (404). Before Phase B implementation:

| Option | Action |
|--------|--------|
| **Recommended** | Copy intersection/SVG modules into `site/src/lib/geosteering/` or grant repo read access |
| **Fallback** | Implement from spec below without Guide code |

**Ask stakeholder:** Export 1–2 key files from Geosteering_Guide (section projection, flag overlay) into this repo.

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

Parse columns from `*_trajectory`: `MD`, `TVD`, `Z`, `X`, `Y`, `INCL` (and `AZIM_TN` if needed).

**Grid data (pending):**

```
site/public/data/grids/{FIELD}.json   # or per-well
{
  "field": "Jena",
  "crs": "MGA2020-54",
  "points": [ { "x", "y", "z" } ],   # depth grid in XYZ
  "metadata": { "source", "generated_at" }
}
```

**Build step when grids arrive:**

1. Determine **section plane** from trajectory tangent at lateral midpoint (or max inclination)
2. Project grid points → 2D `(distance_along_section, mtvds)`
3. Project trajectory stations → same 2D frame
4. Compute **separation** = normal distance from trajectory to nearest grid point (optional contour)

### 3.4 Viewer (static React)

**New route:** `/intersection` or `/section` (add to `AppShell` nav)

| Component | Role |
|-----------|------|
| `IntersectionExplorer.tsx` | Well filter (`WellSelect`); loads trajectory + intervals + optional grid |
| `SectionSvg.tsx` | SVG: Y = mTVDss (inverted depth axis), X = horizontal distance along section |
| `FlagOverlay.tsx` | Circles/markers at interval MD → projected (x, mtvds); colour by flag type |
| `OwcLines.tsx` | Horizontal lines at OWC and OWC+3 m |
| `GridPoints.tsx` | Scatter/contour of projected grid (light grey) |

**Flag colours (suggested):**

| Flag | Colour |
|------|--------|
| `owc_near` High | `--risk-high` |
| `ZOI` | `--accent` |
| `low_GR` | `#a78bfa` |
| `lowres` / `lowfluor` | `--risk-elev` |
| Elevated WRCI (no flag) | muted |

**Lateral filter:** Only render stations where `INCL ≥ 80°` and `MD` between lateral entry (DC30 / first McKinlay) and TD.

### 3.5 Phase B gating

| Prerequisite | Status |
|--------------|--------|
| Trajectory files at repo root | ✅ |
| Interval flags in JSON | ✅ |
| OWC CSV | ✅ |
| **Grid XYZ point sets per field** | ❌ **Pending** |
| Geosteering_Guide modules | ❌ **Need copy or access** |

**Deliver Phase B in two sub-phases:**

- **B1 (now):** Trajectory export + static section **without grid** — trajectory + flags + OWC lines only  
- **B2 (when grids arrive):** Grid overlay + separation metric

---

## 4. Executive summary front page (Phase C)

### 4.1 Objective

Replace or augment **`/` Portfolio** with a **graphic-first executive summary** emphasising **Jena 31** and **Jena 31DW1** vs the portfolio — minimal prose, maximum visual scan.

### 4.2 Recommended layout (single viewport hero)

```
┌─────────────────────────────────────────────────────────────────┐
│  McKinlay Water-Risk Review — Executive Summary                 │
├──────────────────────────────┬──────────────────────────────────┤
│  JENA 31 vs JENA 31DW1       │  Portfolio context (23 wells)    │
│  ┌─────────┐ ┌─────────┐     │  ┌────────────────────────────┐  │
│  │ radial  │ │ radial  │     │  │ strip chart: elevated risk │  │
│  │  gauge  │ │  gauge  │     │  │ per well (Jena highlighted)│  │
│  │ WRCI/RQI│ │ WRCI/RQI│     │  └────────────────────────────┘  │
│  └─────────┘ └─────────┘     │  ┌────────────────────────────┐  │
│  OWC proximity mini-tracks    │  │ Jaccard analog bars        │  │
│  (lateral MD → owc_distance)  │  │ (top 5 analogs to Jena 31) │  │
├──────────────────────────────┴──────────────────────────────────┤
│  Key callouts (3 StatTiles): Elevated count | OWC High band | ZOI │
│  [ View Jena 31 ]  [ View Jena 31DW1 ]  [ Full portfolio table ▼ ]│
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Graphic modules (implement with Recharts + SVG)

| # | Graphic | Data source | Insight |
|---|---------|-------------|---------|
| 1 | **Dual radial gauges** | `wells.json` + aggregate intervals | Jena 31 vs 31DW1: mean WRCI, % intervals RQI>0.6 |
| 2 | **Portfolio strip / lollipop chart** | `wells.json` `elevated_risk_count` | All wells ranked; **Jena wells highlighted** in accent |
| 3 | **OWC distance mini-tracks** | `intervals/JENA31.json`, `JENA31DW1.json` | MD vs `owc_distance_m` — show proximity to −1198 contact |
| 4 | **Flag composition stacked bar** | interval flags aggregated | Jena vs portfolio: % with ZOI, owc_near, low_GR |
| 5 | **Jaccard analog ranking** | `stats/jaccard.json` `jena_analog_ranking` | Top analog wells to Jena 31 (horizontal bars) |

### 4.4 Routing options

| Option | Pros |
|--------|------|
| **A. Replace `/`** | Executive summary is landing page; portfolio table moves to `/portfolio` |
| **B. Split `/`** | Hero graphic top half; collapsible existing portfolio table below (**recommended** — no nav churn) |

### 4.5 Copy tone

- 3 short bullets auto-generated from data, e.g.  
  - *"Jena 31: 25 elevated-risk intervals; 0 high — OWC proximity dominates flags."*  
  - *"Jena 31DW1: longer lateral (1597 m), fewer elevated zones than Jena 31."*  
- Link to Water-Risk Explorer with Jena wells pre-selected.

---

## 5. Phased execution summary

| Phase | Scope | Blocked? | Agent sessions |
|-------|--------|----------|----------------|
| **A** | QoL 1–4 (colour, state, sticky cols, fix "23 wells") | **No** | **1** |
| **B1** | Intersection window — trajectory + flags + OWC (no grid) | **No** | **1** |
| **B2** | Grid overlay + separation | **Yes** — grid XYZ pending | 1 (after data) |
| **C** | Executive summary front page | **No** (uses existing JSON) | **1** |

**Parallelism:**

| Can run together? | Phases |
|-------------------|--------|
| **Yes** | **A ∥ C** (disjoint UI files — A touches shared `DataTable`, C new components; **mild conflict risk** on `PortfolioDashboard.tsx` if C embeds there) |
| **Yes** | **B1 ∥ A** if B1 is mostly new files (`export_trajectory_web.py`, `IntersectionExplorer.tsx`) |
| **No** | **C** replacing `/` layout while **A** edits same Portfolio — **sequence A then C** or single combined prompt |
| **Recommended** | **Session 1:** A + fix AppShell well count. **Session 2:** C. **Session 3:** B1. **Session 4:** B2 when grids arrive. |

**Maximum simultaneous agents: 1–2** (2 only if B1 export script is isolated from A's `DataTable` work).

**Debugging agent:** **Recommended, not required** — after Phase A (colour contrast / a11y) and after B1 (trajectory projection spot-check at INCL>80°).

---

## 6. Implementation agent prompts

### Prompt — Phase A: QoL (colour, state, sticky tables)

```
Execute QoL-Updates-2026-07-13.md Phase A only.

Read: site/src/config.ts (RQI_THRESHOLD, WRCI_HIGH_THRESHOLD), existing useWellSelection.ts.

Tasks:
1. Add site/src/lib/rqiWrciStyle.ts — rqiCellClass (red if >0.6, green otherwise), wrciCellClass (red if >66, green otherwise)
2. Apply RQI/WRCI colouring on Well Detail table, Water-Risk Explorer, any other WRCI/RQI cells
3. Extend DataTable: stickyFirstColumn (default true), vertical scroll container for long tables
4. Add usePageState.ts + useScrollRestore; persist compare matrixMode, intra well, scroll per route (sessionStorage)
5. Fix AppShell "17 horizontal wells" → "23 horizontal wells"

Constraints:
- Use CSS tokens (--risk-high, --risk-low); respect prefers-reduced-motion
- Do not change WRCI/RQI calculation logic
- npm test && npm run build must pass

Acceptance:
- JENA31 Well Detail: RQI>0.6 rows show red RQI text; WRCI>66 red
- First column sticky on vertical scroll
- Navigate Portfolio → Well Detail → back restores scroll/compare state
- No console errors

Commit to main.
```

---

### Prompt — Phase C: Executive summary front page

```
Execute QoL-Updates-2026-07-13.md Phase C only.

Prerequisite: Phase A merged (shared DataTable/styling OK).

Read: site/public/data/wells.json, intervals/JENA31.json, stats/jaccard.json, QoL doc §4.

Tasks:
1. Add ExecutiveSummary hero section to PortfolioDashboard (option B: top half graphic, bottom half existing table)
2. Implement graphics per §4.3: Jena dual gauges, portfolio elevated-risk strip, OWC distance mini-tracks, Jaccard analog bars
3. StatTiles: Jena 31 / 31DW1 elevated counts, OWC-high band count, ZOI count (aggregate from intervals JSON)
4. CTA links to /water-risk with Jena wells pre-selected (use existing sessionStorage keys)

Constraints:
- Graphic-first, minimal prose (3 auto bullets max)
- Highlight JENA31 and JENA31DW1 in accent colour on portfolio charts
- Recharts + existing Card/StatTile components; load UI/UX Pro Max skill for polish

Acceptance:
- / loads executive graphic above portfolio table
- Jena wells visually distinct from portfolio
- npm run build clean

Commit to main.
```

---

### Prompt — Phase B1: Intersection window (trajectory + flags, no grid)

```
Execute QoL-Updates-2026-07-13.md Phase B1 only.

Read: scripts/trajectory.py, *_trajectory format, Oil_Water_Contact.csv, QoL doc §3.

Tasks:
1. scripts/export_trajectory_web.py → site/public/data/trajectory/{ALIAS}.json (MD,TVD,mtvds,X,Y,INCL, lateral_window incl>=80)
2. Hook into deploy workflow after export_web_data.py
3. New route /intersection + IntersectionExplorer page with WellSelect
4. SectionSvg: static SVG — X = distance along section, Y = mTVDss (inverted)
   - Trajectory polyline (INCL>=80 segment only)
   - OWC horizontal line + hard floor (OWC + 3 m TVDss)
   - Interval markers coloured by dominant flag (ZOI, owc_near, low_GR, etc.)
5. Add nav item in AppShell

If Geosteering_Guide code is not in repo, implement from QoL spec only.

Acceptance:
- /intersection?well=JENA31 renders lateral section with OWC at -1198 and floor at -1195
- Flag markers align with known elevated intervals (~2500 m MD)
- npm run build clean

Commit to main.
```

---

### Prompt — Phase B2: Grid overlay (when grid data delivered)

```
Execute QoL-Updates-2026-07-13.md Phase B2.

Prerequisite: B1 on main; grid files placed at site/public/data/grids/{FIELD}.json per §3.3 schema.

Tasks:
1. Ingest grid XYZ; project to section plane used in B1
2. Render grid points/contours behind trajectory in SectionSvg
3. Optional: compute/display mean normal separation trajectory-to-grid in lateral window
4. Field filter auto-matches well field (Jena, McKinlay, etc.)

Acceptance:
- JENA31 section shows grid + trajectory in same frame
- Legend explains grid vs wellbore

Commit to main.
```

---

## 7. Open questions

1. **RQI red / green semantics:** Confirm tooltips on Methodology — red = high RQI good rock (attention), not error.  
2. **WRCI binary vs three-band:** Elevated band (40–66) — green or amber? (Plan uses binary per spec.)  
3. **Geosteering_Guide:** Which files to copy into this repo for intersection projection?  
4. **Grid delivery format:** CSV XYZ, GeoJSON, or Petrel export? One file per field or per well?  
5. **Hard floor +3 m:** Confirm **−1195 m TVDss** when OWC = −1198 (structurally above contact).  
6. **Executive summary:** Replace `/` entirely or hero + table (recommended B)?  
7. **Intersection default well:** JENA31 on first load?

---

## 8. Related documents

| Doc | Role |
|-----|------|
| `updated-plan-2026-07-10.md` | Completed pipeline baseline |
| `site/src/config.ts` | Thresholds for colouring |
| `Oil_Water_Contact.csv` | OWC + hard floor |
| `scripts/trajectory.py` | MD → mTVDss (extend for web export) |

---

## 9. Revision history

| Date | Change |
|------|--------|
| 2026-07-13 | Initial QoL + intersection + executive summary plan |
