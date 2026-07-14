# Phase D Design Specification — Dual Lateral, Cluster Analogs & Histograms

**Project:** McKinlay Water-Risk Review  
**Phase:** D — extends Phase C Executive Summary on `/`  
**Date:** 2026-07-14  
**Status:** Design complete — ready for implementation  
**Source plan:** `QoL-Updates-2026-07-13.md` §5  
**Prerequisites:** `phase-a-design.md`, `phase-c-design.md` (implemented: `ExecutiveSummary`, `ComparisonPanel`, `ConcernTrack`)  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md`  
**Design-system search:** `dual well comparison histogram clustering analytics dashboard` → **Comparison Table + CTA** + **Data-Dense Dashboard**

> **Token policy:** Retain dark geoscience tokens (`site/src/styles/tokens.css`). Do not adopt light Fira palette from UI/UX Pro Max search.

---

## 0. Explicit scope — additive only (Phase C preserved)

### 0.1 What stays unchanged

| Element | Phase C behaviour | Phase D |
|---------|-------------------|---------|
| Hero *Executive Summary* section above portfolio table | ✅ | **No layout change** |
| **Panels A & B** anatomy | Focus dropdown + compare dropdown + dual concern tracks + 4 stat tiles + 2 bullets | **Same structure** |
| `ConcernTrack` plot style | Elevated/High markers, isolation hatch, absolute MD axis | **Unchanged on A/B/C compare track** |
| Portfolio elevated strip | Ranked bars, accent highlight for focus+compare | **Extended** (add `JENA31_DUAL` row) |
| Collapsible portfolio table | Below executive block | **Unchanged** |
| `/compare` Jaccard heatmaps | Jaccard matrix | **Unchanged — Jaccard stays on `/compare` only** |

### 0.2 What Phase D adds or swaps

| Change type | Detail |
|-------------|--------|
| **Swap (A/B/C)** | Compare-well dropdown **sort** + header badge: **cluster cosine** instead of Jaccard `J=` |
| **Add** | **Panel C** — focus `JENA31_DUAL`; dual-lateral colour track + standard compare track |
| **Add** | **Distribution histogram** card below Panel C |
| **Add** | Pipeline virtual well `JENA31_DUAL` + `stats/cluster_analog_ranking.json` |
| **Add** | `source_lateral` colour tokens + legend |
| **Exclude** | `JENA31_DUAL` from Well Detail + Water-Risk pickers |

**Do not** remove, reorder, or redesign Panels A/B. Panel C inserts **after Panel B**, histogram **after Panel C**, then portfolio strip (same order as Phase C strip relative to table).

---

## 1. Full page wireframe (Phase C + Phase D additions)

### 1.1 Desktop (≥ 1024px)

```
┌─ Portfolio Dashboard (/) ──────────────────────────────────────────────────────────────┐
│                                                                                         │
│ ┌─ Executive Summary ────────────────────────────────────────────────────────────────┐ │
│ │ Executive Summary — Analog Concern Hub                          [UNCHANGED header]   │ │
│ │                                                                                     │ │
│ │ ┌─ PANEL A (Phase C layout — ranking swap only) ─────────────────────────────────┐ │ │
│ │ │ Panel A    cos=0.75                                              ← was Jaccard  │ │ │
│ │ │ Focus [JENA 31 ▼]     Compare [STIMPEE 6 ▼]   ← sorted by cluster cosine      │ │ │
│ │ │ ┌─ Focus — concern track ──────┐ ┌─ Compare — concern track ─────────────────┐ │ │ │
│ │ │ │ ○ ● Elevated/High markers    │ │ Same ConcernTrack as Phase C              │ │ │ │
│ │ │ │ ░░ isolation hatch             │ │                                           │ │ │ │
│ │ │ └──────────────────────────────┘ └───────────────────────────────────────────┘ │ │ │
│ │ │ [Elevated][High][Isol. concerns][Open concerns]  + 2 bullets                   │ │ │
│ │ └────────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                     │ │
│ │ ┌─ PANEL B (same — focus JENA31DW1) ─────────────────────────────────────────────┐ │ │
│ │ │ (identical anatomy; cosine-ranked compare dropdown)                              │ │ │
│ │ └────────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                     │ │
│ │ ┌─ PANEL C — NEW ──────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Panel C — Dual Lateral    cos=0.69                                              │ │ │
│ │ │ Focus: JENA 31 Dual Lateral (fixed)    Compare [GRANCHIO 4 ▼]                 │ │ │
│ │ │ ┌─ Dual lateral — single MD track ─────┐ ┌─ Compare — concern track ─────────┐ │ │ │
│ │ │ │ JENA31 │ JENA31DW1  (50/50 segments) │ │ Standard ConcernTrack              │ │ │ │
│ │ │ │ ●○ markers coloured by source_lateral │ │ cluster-ranked compare well        │ │ │ │
│ │ │ │ ░░ union isolation bands              │ │                                    │ │ │ │
│ │ │ └──────────────────────────────────────┘ └────────────────────────────────────┘ │ │ │
│ │ │ [Elevated][High][Isol. concerns][Open concerns]  + 2 bullets (dual-lateral copy) │ │ │
│ │ └────────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                     │ │
│ │ ┌─ DISTRIBUTION COMPARISON — NEW ────────────────────────────────────────────────┐ │ │
│ │ │ Distribution comparison                                                           │ │ │
│ │ │ Well A [JENA 31 ▼]   Well B [JENA 31 Dual Lateral ▼]   Property [RQI ▼]      │ │ │
│ │ │ ┌────────────────────────────────────────────────────────────────────────────┐  │ │ │
│ │ │ │  ▓▓▓▓ JENA31 (accent)     ░░░░ JENA31_DUAL (teal)   grouped histogram      │  │ │ │
│ │ │ │  0.0 ─────────────────────────────────────────────────────────── 1.0 RQI   │  │ │ │
│ │ │ └────────────────────────────────────────────────────────────────────────────┘  │ │ │
│ │ │ n=197 (JENA 31) · n=362 (Dual Lateral) · 16 bins                                │ │ │
│ │ └────────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                     │ │
│ │ ┌─ Legends (extended) ───────────────────────────────────────────────────────────┐ │ │
│ │ │ Concern track (Phase C) + source_lateral colours (Phase D)                     │ │ │
│ │ └────────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                     │ │
│ │ [ Open Water-Risk Explorer ]  [ Full portfolio table ▼ ]                         │ │
│ │                                                                                     │ │
│ │ ┌─ Portfolio elevated strip (Phase C + JENA31_DUAL bar) ───────────────────────────┐ │ │
│ │ └────────────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                         │
│ ┌─ Collapsible portfolio table (Phase C) ─────────────────────────────────────────────┐ │
│ └─────────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Insertion order in `ExecutiveSummary`

```
1. Header
2. ComparisonPanel A
3. ComparisonPanel B
4. ComparisonPanel C (DualLateralPanel)     ← NEW
5. DistributionHistogramPanel               ← NEW
6. PortfolioElevatedStrip                   ← extended wells list
7. Legend (concern + source_lateral)        ← extended
8. CTA row
```

---

## 2. Panel C wireframe — `JENA31_DUAL`

### 2.1 Panel identity

| Field | Value |
|-------|-------|
| `panelId` | `"C"` |
| Focus alias | **`JENA31_DUAL`** (fixed — no focus dropdown) |
| `display` | `JENA 31 Dual Lateral` |
| `dual_lateral` | `true` |
| `constituents` | `["JENA31", "JENA31DW1"]` |
| Compare dropdown | Cluster cosine ranked (same as A/B) |
| Stat tiles | Same 4 tiles — aggregate **focus** (`JENA31_DUAL` merged intervals) |

### 2.2 Panel C header (no focus WellSelect)

```
┌─ Panel C — Dual Lateral ─────────────────────────────────────────────┐
│  JENA 31 Dual Lateral · single wellhead · commingled production       │
│  cos=0.69                                                             │
│                                                                       │
│  Compare well [GRANCHIO 4 ▼]     (full width on mobile)               │
└───────────────────────────────────────────────────────────────────────┘
```

### 2.3 Dual track layout — single MD axis, colour-by-lateral

**Component:** `DualLateralTrack` (new) — left column in Panel C grid.

**Axis model (stakeholder-locked):** One SVG track split into **two equal lateral segments** on a shared horizontal axis:

```
┌─ Dual lateral — JENA 31 Dual Lateral ─────────────────────────────────────────┐
│                                                                                │
│  JENA 31 lateral          │          JENA 31DW1 lateral                        │
│  ○ ●   ● ○                │                ●  ○   ●                            │
│  ░░░ isolation (if any)   │                                                │
│  ├────────────────────────┼────────────────────────────────────────────────┤   │
│  0%              100%     │     0%                              100%         │
│  dc30────────────td       │     dc30──────────────────────────td           │
└────────────────────────────────────────────────────────────────────────────────┘
```

**X-position per interval:**

```ts
// Within each source_lateral segment (width = 50% of plot):
normLat = clamp((midMd - dc30) / (td - dc30), 0, 1)
segment = source_lateral === "JENA31" ? 0 : 1
x = padding + (segment * 0.5 + normLat * 0.5) * plotWidth
```

`dc30` / `td` from `wells.json` **per constituent**, not merged.

**Marker colour:** determined by `source_lateral`, **not** risk class fill:

| `source_lateral` | Token | Hex (design) | Marker |
|------------------|-------|--------------|--------|
| `JENA31` | `--lateral-jena31` | `#38bdf8` (`var(--accent)`) | Elevated/High shape from Phase C, fill = lateral colour |
| `JENA31DW1` | `--lateral-jena31dw1` | `#a78bfa` (violet) | same |

**Risk class encoding** (secondary — shape/size only):

| Risk | Shape |
|------|-------|
| Elevated | r=4, open ring (stroke = lateral colour, fill = `var(--surface-2)`) |
| High | r=5, filled (fill = lateral colour) |

**Concern filter:** same as Phase C — `risk_class ∈ {Elevated, High}`.

**Isolation bands:** union of `isolation_depths` from both constituents, plotted in the segment matching the MD range (map MD to correct lateral's dc30/td). JENA31 + JENA31DW1 currently `[]`; MCKINLAY10 pattern applies when dual export includes bands.

**Compare track (right column):** reuse existing `ConcernTrack` for selected compare well — identical to Panels A/B.

### 2.4 Panel C mobile

| Element | Layout |
|---------|--------|
| Compare dropdown | Full width, below title |
| Dual lateral track | Full width, **above** compare track |
| Stat tiles | 2×2 grid |
| Segment labels | Stack "JENA 31" / "JENA 31DW1" under respective halves |

### 2.5 Panel C bullets (max 2)

**Bullet 1:**

> `JENA 31 Dual Lateral: {elevated} elevated; {high} high across both laterals; {isolationCopy}.`

**Bullet 2:**

> `vs {compareDisplay} (cos={cosine}): {elevated} elevated; {isolatedConcerns} isolated concern zones{mdRange}.`

---

## 3. Comparison-well dropdown — cluster cosine ranking

### 3.1 Pluggable ranking helper

**New module:** `site/src/lib/clusterAnalogs.ts`

```ts
export interface ClusterRankEntry {
  alias: string;
  cosine: number;
}

export function rankClusterAnalogs(
  focusAlias: string,
  payload: ClustersPayload,
): ClusterRankEntry[];

export function getCosineScore(
  focusAlias: string,
  analogAlias: string,
  payload: ClustersPayload,
): number | null;

export function topClusterAnalog(
  focusAlias: string,
  payload: ClustersPayload,
): string | null;
```

**Algorithm:**

1. `focusIdx = payload.aliases.indexOf(focusAlias)` — return `[]` if missing.
2. For each `alias` at `j !== focusIdx`: `cosine = payload.cosine_similarity[focusIdx][j]`.
3. Sort **descending** by `cosine`, then `alias` ascending.
4. Exclude self.

**Optional precompute:** `site/public/data/stats/cluster_analog_ranking.json`:

```json
{
  "JENA31": [{ "alias": "STIMPEE6", "cosine": 0.7482 }, ...],
  "JENA31_DUAL": [...]
}
```

Runtime helper may read this file **or** compute from `clusters.json` matrix — implement agent chooses; design requires **identical sort order**.

### 3.2 Refactor `AnalogWellSelect` → pluggable `CompareWellSelect`

```ts
interface CompareWellSelectProps {
  wells: WellRecord[];
  focusAlias: string;
  value: string;
  onChange: (alias: string) => void;
  rankings: { alias: string; score: number }[];
  scorePrefix: "cos" | "J";   // Phase D: "cos" on executive
  label: string;
  id: string;
}
```

**Option label format (Phase D):**

```
{display} (cos=0.75)
```

- Two decimal places: `cosine.toFixed(2)`
- Badge in panel header: `cos=0.75` (mono `text-accent`, replaces `Jaccard: 0.75`)

### 3.3 Default & reset rules (Panels A/B/C)

| Event | Behaviour |
|-------|-----------|
| First visit | Compare = `topClusterAnalog(focus, clusters)` |
| Focus change (A/B only) | Compare resets to `topClusterAnalog(newFocus)` |
| Panel C focus | Fixed `JENA31_DUAL` — no focus change |
| User manual compare pick | Persist in `sessionStorage`; validate on load |
| Self-comparison | Excluded from options |

### 3.4 Live cosine reference (2026-07-13 `clusters.json`, focus `JENA31`)

| Rank | Alias | cos |
|------|-------|-----|
| 1 | STIMPEE6 | 0.75 |
| 2 | GRANCHIO4 | 0.69 |
| 3 | MCKINLAY11 | 0.69 |
| 4 | MCKINLAY10 | 0.47 |
| … | STIMPEE7 | 0.26 |

> **Jaccard vs cosine:** Jaccard = binary feature-set similarity (`/compare`). Cosine = 8-D aggregate property fingerprint (Method 5 clustering). Executive answers *"similar overall petrophysics"*; `/compare` answers *"similar risk feature flags"*.

### 3.5 `ComparisonPanel` migration (A/B)

| Before (Phase C impl) | After (Phase D) |
|-----------------------|-----------------|
| `jaccard: JaccardPayload` prop | `clusters: ClustersPayload` prop |
| `rankJaccardAnalogs` | `rankClusterAnalogs` |
| Label "Analog well" | Label **"Compare well"** (optional copy tweak) |
| Bullet `J={score}` | Bullet `cos={score}` |

**Jaccard imports removed from executive components only** — keep `jaccardRanking.ts` for `/compare`.

---

## 4. Distribution histogram panel

### 4.1 Component: `DistributionHistogramPanel`

**Placement:** New `Card` below Panel C, above portfolio strip.

### 4.2 Controls

| Control | Source | Default | Notes |
|---------|--------|---------|-------|
| **Well A** | `useWells({ includeDualLateral: true })` | `JENA31` | `WellSelect` |
| **Well B** | same | `JENA31_DUAL` | |
| **Property** | `DIST_HISTOGRAM_PROPERTIES` in `@/config` | `RQI` | `<select>` |

**`DIST_HISTOGRAM_PROPERTIES` (add to `config.ts`):**

```ts
export const DIST_HISTOGRAM_PROPERTIES = [
  "RQI",
  "WRCI",
  ...KS_PROPERTIES,  // pct_ss, grain_ordinal, avg_GR, avg_RES_DEEP, fluor, WRCI
] as const;
```

Deduplicate `WRCI` if already in `KS_PROPERTIES`.

### 4.3 Histogram layout

```
┌─ Distribution comparison ──────────────────────────────────────────────────┐
│ Well A [JENA 31 ▼]    Well B [JENA 31 Dual Lateral ▼]    Property [RQI ▼] │
│                                                                            │
│     ██                                                                     │
│     ██  ▓▓                                                                 │
│  ██ ██  ▓▓ ▓▓                                                              │
│  ██ ██  ▓▓ ▓▓ ░░                                                           │
│ ─────────────────────────────────────────────────────                      │
│  0.0        0.2        0.4        0.6        0.8        1.0              │
│                                                                            │
│  ■ JENA 31 (n=197)    ■ JENA 31 Dual Lateral (n=362)                       │
└────────────────────────────────────────────────────────────────────────────┘
```

| Property | Spec |
|----------|------|
| Chart | Recharts `BarChart` **grouped** bars (preferred over overlaid for readability) |
| Bins | **16** (auto) — `d3.bin` or equal-width from pooled min/max of finite values |
| Domain | Property-specific: RQI/WRCI `[0, 1]` / `[0, 100]`; petrophysical auto from data |
| Colours | Well A: `var(--accent)`; Well B: `var(--lateral-jena31)` or `--rock-quality-start` |
| Height | `h-56` (224px) |
| Empty bins | Show zero-height (no gap) |
| Null values | Excluded from histogram; `n` counts finite values only |

**Data path:** `intervals/{alias}.json` → `intervals[].{property}` (map `avg_GR` → `log.avg_GR` if needed via accessor table).

### 4.4 Property accessors

| Property key | Interval field |
|--------------|----------------|
| `RQI` | `RQI` |
| `WRCI` | `WRCI` |
| `pct_ss` | `pct_ss` |
| `grain_ordinal` | `grain_ordinal` |
| `avg_GR` | `log.avg_GR` |
| `avg_RES_DEEP` | `log.avg_RES_DEEP` |
| `fluor` | `fluor` |

### 4.5 Responsive

| Breakpoint | Controls |
|------------|----------|
| `< sm` | Stacked full-width dropdowns |
| `≥ sm` | `grid sm:grid-cols-3 gap-3` |

---

## 5. `pay_pct` for `JENA31_DUAL`

### 5.1 Formula (stakeholder-locked)

```
pay_pct_JENA31_DUAL = 100 × (pay_md_JENA31 + pay_md_JENA31DW1) / (lateral_JENA31 + lateral_JENA31DW1)
```

| Term | Source |
|------|--------|
| `pay_md_*` | **Matching pay** MD total per well — same logic as `scripts/compute_pay_summary.py` → `matching_pay()` merged interval lengths (Ω·m + cuttings agreement), after overburden exclusion |
| `lateral_*` | `wells.json` → `lateral` field per constituent |

**Not allowed:** length-weighted average of individual `pay_pct` values.

### 5.2 Example (illustrative — implement from pipeline)

| Constituent | `lateral` (m) | `pay_pct` (individual) |
|-------------|---------------|------------------------|
| JENA31 | 1144.3 | 80.4 |
| JENA31DW1 | 1597.2 | 73.56 |

```
pay_md_JENA31 ≈ 0.804 × 1144.3 = 920.0 m
pay_md_JENA31DW1 ≈ 0.7356 × 1597.2 = 1174.9 m
combined = (920.0 + 1174.9) / (1144.3 + 1597.2) × 100 ≈ 76.3%
```

Export rounds to 1 decimal in `wells.json`.

### 5.3 `wells.json` row shape

```json
{
  "alias": "JENA31_DUAL",
  "display": "JENA 31 Dual Lateral",
  "dual_lateral": true,
  "constituents": ["JENA31", "JENA31DW1"],
  "lateral": 2741.5,
  "pay_pct": 76.3,
  "interval_count": 362,
  "elevated_risk_count": "<sum or merged count>",
  "high_risk_count": "<merged>",
  "cluster_id": "<from recomputed clusters>",
  "data_missing": false
}
```

---

## 6. `source_lateral` colour legend

### 6.1 CSS tokens (add to `tokens.css`)

```css
--lateral-jena31: var(--accent);       /* #38bdf8 */
--lateral-jena31dw1: #a78bfa;          /* violet — distinct from risk colours */
--lateral-dual-badge: var(--rock-quality-start); /* #14b8a6 — portfolio strip badge */
```

### 6.2 Legend items (extend executive `Legend`)

| Swatch | Label | Usage |
|--------|-------|-------|
| ● `#38bdf8` | JENA 31 lateral | `source_lateral === "JENA31"` markers |
| ● `#a78bfa` | JENA 31DW1 lateral | `source_lateral === "JENA31DW1"` markers |
| ○ / ● + amber/red stroke | Elevated / High concern | Shape overlay (Phase C concern legend) |
| ░ grey hatch | Isolation MD band | Union of constituent bands |

**Portfolio strip badge** for `JENA31_DUAL` bar:

```
┌──────┐
│ DUAL │  text-[8px] uppercase on teal pill under truncated display name
└──────┘
```

---

## 7. Exclusion rules — `JENA31_DUAL`

### 7.1 `useWells` hook extension

```ts
interface UseWellsOptions {
  includeDualLateral?: boolean;  // default false
}
```

| Surface | `includeDualLateral` | Behaviour |
|---------|---------------------|-----------|
| **Well Detail** | `false` | `JENA31_DUAL` **omitted** from `WellSelect` |
| **Water-Risk Explorer** | `false` | **Omitted** from left/right well dropdowns |
| **Intra-well Stats** | `false` | **Omitted** |
| **Executive Summary** | `true` | Included in compare dropdowns (A/B/C) + strip |
| **Distribution histogram** | `true` | Well A/B options include dual |
| **`/compare`** | `true` | Included in matrices after pipeline recompute |

### 7.2 Route guards

| Route | Guard |
|-------|-------|
| `/well/JENA31_DUAL` | **404 or redirect** to `/well/JENA31` with toast *"Dual lateral view is on the Portfolio executive summary."* |
| `/water-risk` | Cannot select via UI; ignore stored alias if tampered |
| `/intra/JENA31_DUAL` | Redirect or 404 |

### 7.3 Nav / links

- Portfolio strip bar for `JENA31_DUAL`: link to `/#executive-summary` (hash) **not** `/well/JENA31_DUAL`.
- Corpus assistant may reference dual lateral concept; no well route.

### 7.4 Interval JSON contract

Each merged interval **must** include:

```json
{
  "source_lateral": "JENA31",
  "...": "all standard IntervalRecord fields"
}
```

---

## 8. sessionStorage keys (Phase D extensions)

Extend Phase A/C `hr-page:/` keys:

| Key | Type | Default | Purpose |
|-----|------|---------|---------|
| `hr-page:/:execPanelC:compare` | `string` | `topClusterAnalog("JENA31_DUAL")` | Panel C compare well |
| `hr-page:/:distHist:wellA` | `string` | `JENA31` | Histogram Well A |
| `hr-page:/:distHist:wellB` | `string` | `JENA31_DUAL` | Histogram Well B |
| `hr-page:/:distHist:property` | `string` | `RQI` | Histogram property |

**Panels A/B keys unchanged:** `execPanelA:focus`, `execPanelA:analog`, `execPanelB:focus`, `execPanelB:analog`.

**Highlight set for portfolio strip:**

```ts
highlightAliases = PanelA.focus, PanelA.compare, PanelB.focus, PanelB.compare,
                   "JENA31_DUAL", PanelC.compare
```

---

## 9. Pipeline data artefacts (design reference)

| File | Phase D change |
|------|----------------|
| `intervals/JENA31_DUAL.json` | Merged intervals + `source_lateral` |
| `water_risk/JENA31_DUAL.json` | Merged flagged zones |
| `zones/JENA31_DUAL.json` | Union of exclusion zones |
| `wells.json` | +1 row; `well_count` → 24 |
| `stats/clusters.json` | Recompute matrix incl. `JENA31_DUAL` |
| `stats/cluster_analog_ranking.json` | **New** — cosine ranks per alias |
| `stats/jaccard.json` | Optional include for `/compare` |
| `stats/ks.json` | Optional `JENA31_DUAL` rows |

---

## 10. Component inventory

| Component / module | New? | Responsibility |
|--------------------|------|----------------|
| `clusterAnalogs.ts` | **New** | Cosine ranking helper |
| `CompareWellSelect` | **Refactor** from `AnalogWellSelect` | Pluggable `cos` / `J` label |
| `DualLateralPanel` | **New** | Panel C shell (fixed focus) |
| `DualLateralTrack` | **New** | Split-segment colour-by-lateral SVG |
| `DistributionHistogramPanel` | **New** | Well A/B/property histogram |
| `ComparisonPanel` | **Extend** | Accept `clusters` not `jaccard`; `cos=` badge |
| `ExecutiveSummary` | **Extend** | Mount C + histogram; fetch `clusters.json` |
| `PortfolioElevatedStrip` | **Extend** | `DUAL` badge; dual-lateral link behaviour |
| `useWells` | **Extend** | `includeDualLateral` filter |
| `ConcernTrack` | Reuse | Compare column in all panels |

---

## 11. Accessibility & responsive summary

| Area | Requirement |
|------|-------------|
| Dual track | `aria-label` includes both lateral names + concern count |
| Histogram | `role="img"` + summary; property/units in label |
| Colour | Lateral distinction uses **position** (left/right segment) + legend, not colour alone |
| Compare dropdown | ≥44px touch height; same keyboard behaviour as Phase C |
| `prefers-reduced-motion` | No bar grow animation on histogram |

---

## 12. Implementation checklist

- [ ] Pipeline: `JENA31_DUAL` export + `pay_pct` formula §5
- [ ] `stats/cluster_analog_ranking.json`
- [ ] `clusterAnalogs.ts` + tests
- [ ] `CompareWellSelect` with `scorePrefix="cos"`
- [ ] Migrate `ComparisonPanel` A/B to clusters
- [ ] `DualLateralTrack` + `DualLateralPanel`
- [ ] `DistributionHistogramPanel` + `DIST_HISTOGRAM_PROPERTIES`
- [ ] `useWells({ includeDualLateral })` on Detail + Water-Risk
- [ ] Portfolio strip dual badge + link target
- [ ] sessionStorage keys §8
- [ ] `npm test && npm run build`

---

## 13. What to expect (after implementation)

The portfolio executive section **keeps Panels A and B exactly as today**, but compare wells sort by **cluster cosine** (`cos=0.75`) instead of Jaccard. **Panel C** adds a dual-lateral view of JENA 31 + JENA 31DW1 on one track with **blue vs violet** lateral colours. A **histogram** below compares interval **RQI** distributions between JENA 31 and the merged dual-lateral well by default. `JENA 31 Dual Lateral` appears in portfolio context but **not** in Well Detail or Water-Risk dropdowns.

---

## Appendix A — Jaccard vs cluster cosine (executive vs `/compare`)

| Method | Question answered | Executive? | `/compare`? |
|--------|-------------------|------------|-------------|
| **Cluster cosine** | Similar **aggregate petrophysics** (8-D feature vector) | ✅ dropdown sort | Dendrogram context |
| **Jaccard** | Similar **binary risk feature flags** | ❌ removed | ✅ heatmaps |

---

## Appendix B — Design-system search (abbreviated)

**Pattern:** Comparison Table + CTA — side-by-side comparison, highlight selected row.  
**Style:** Data-Dense Dashboard — grouped histogram, KPI tiles, minimal padding.  
**Effects:** Hover tooltips, row/bar highlight, smooth filter transitions.

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "dual well comparison histogram clustering analytics dashboard" \
  --design-system -p "McKinlay Phase D"
```
