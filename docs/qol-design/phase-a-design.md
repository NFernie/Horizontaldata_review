# Phase A Design Specification — QoL + Methodology

**Project:** McKinlay Water-Risk Review  
**Phase:** A (A1–A5)  
**Date:** 2026-07-14  
**Status:** Design complete — ready for implementation  
**Source plan:** `QoL-Updates-2026-07-13.md` §2  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md`  
**Design-system search:** `geoscience petrophysics dashboard data table methodology` → **Data-Dense Dashboard** pattern (dark ops UI; status colours; scannable tables)

> **Token policy:** Retain existing dark geoscience tokens in `site/src/styles/tokens.css` and Tailwind mappings in `site/tailwind.config.js`. Do **not** adopt the light Fira palette from the UI/UX Pro Max search wholesale — map recommendations to existing `--risk-*`, `--surface*`, `--accent` vars only.

---

## 0. Scope summary

| Item | Deliverable |
|------|-------------|
| **A1** | RQI threshold cell colouring (red/green semantics + tooltips) |
| **A2** | WRCI threshold cell colouring |
| **A3** | `usePageState` + scroll restore across routes |
| **A4** | `DataTable` sticky first column + vertical scroll container |
| **A5** | Methodology — selectable high-detail panels for Methods 2–5 |
| **Bonus** | AppShell well count **17 → 23**; page-wide design catalogue (§8) |

**Out of scope:** Production React code in this phase; Phase C executive hub; Phase B intersection viewer.

---

## 1. RQI / WRCI `MetricCell` colour specification (A1 + A2)

### 1.1 Semantic model (critical — inverted from WRCI risk colours)

| Metric | Condition | Visual | Meaning |
|--------|-----------|--------|---------|
| **RQI** | `value > RQI_THRESHOLD` (0.6) | **Red** tint | **Good reservoir rock** — high porosity/permeability potential; warrants attention for water charge / OWC proximity, **not** an error state |
| **RQI** | `value ≤ RQI_THRESHOLD` or null boundary | **Green** tint | **Poor rock quality** — lower reservoir potential; flags on poor rock use different rules |
| **WRCI** | `value > WRCI_HIGH_THRESHOLD` | **Red** tint | **Elevated water-risk score** — aligns with High-risk threshold semantics |
| **WRCI** | `value ≤ WRCI_HIGH_THRESHOLD` | **Green** tint | **Below High threshold** — lower composite water-risk score |

> **Config binding:** Import `RQI_THRESHOLD`, `WRCI_HIGH_THRESHOLD` from `@/config`. Current values: `0.6` and `60.0`. Do not hardcode.  
> **Note:** QoL plan text mentions WRCI `66` in places; `site/src/config.ts` and Methodology page use `60` — implementation follows **config** (sync Python if stakeholder updates).

### 1.2 CSS tokens

Add to `site/src/styles/tokens.css` (aliases — keeps MetricCell independent of risk-badge semantics):

```css
--metric-rqi-high: var(--risk-high);   /* good rock — attention */
--metric-rqi-low: var(--risk-low);     /* poor rock */
--metric-wrci-high: var(--risk-high);
--metric-wrci-low: var(--risk-low);
--metric-bg-alpha: 0.14;               /* tinted cell background */
--metric-border-alpha: 0.35;
```

Tailwind utility classes (implement in `site/src/lib/rqiWrciStyle.ts` or co-located CSS):

| Class role | Properties |
|------------|------------|
| `.metric-cell--rqi-high` | `color: var(--metric-rqi-high)`; `background: color-mix(in srgb, var(--metric-rqi-high) calc(var(--metric-bg-alpha) * 100%), transparent)`; `border: 1px solid color-mix(...)` |
| `.metric-cell--rqi-low` | same pattern with `--metric-rqi-low` |
| `.metric-cell--wrci-high` | same with `--metric-wrci-high` |
| `.metric-cell--wrci-low` | same with `--metric-wrci-low` |
| `.metric-cell--null` | `color: var(--text-muted)`; no tint |

Helpers:

```ts
rqiCellClass(rqi: number | null): string
wrciCellClass(wrci: number | null): string
```

Null/`NaN` → `--null` (display `—`, no tint).

### 1.3 `MetricCell` component

```
┌─────────────────────────────────────┐
│  [optional ?]  0.72                 │  ← monospace, tabular-nums, rounded-md px-2 py-0.5
└─────────────────────────────────────┘
```

| Prop | Type | Notes |
|------|------|-------|
| `metric` | `'rqi' \| 'wrci'` | Selects threshold + tooltip template |
| `value` | `number \| null` | Formatted to 2 dp (RQI) or 1 dp (WRCI) |
| `showTooltip` | `boolean` | default `true` on table cells |
| `className` | `string` | optional |

**Interaction states**

| State | Behaviour |
|-------|-----------|
| Default | Tinted background + coloured text |
| Hover | `background` alpha +0.06; `cursor: help` when tooltip enabled |
| Focus-visible | `outline-2 outline-offset-2 outline-accent` on wrapper `<span tabIndex={0}>` |
| Reduced motion | No transition on background (≤0.01ms per `tokens.css`) |

### 1.4 Tooltip copy (exact strings)

Wrap in native `title` **or** accessible tooltip (`role="tooltip"`, `aria-describedby`). Prefer a small reusable `MetricTooltip` for keyboard access.

**RQI — high (red)**

> **RQI {value} — good rock (≥ {RQI_THRESHOLD})**  
> High reservoir quality on the RQI v2 scale. Red highlights **favourable rock**, not bad data. On good rock, low resistivity / fluorescence flags and OWC proximity carry more weight in WRCI.

**RQI — low (green)**

> **RQI {value} — poor rock (≤ {RQI_THRESHOLD})**  
> Lower reservoir quality. Red-flag rules for lowres / lowfluor require good rock (RQI ≥ {RQI_THRESHOLD}); poor-rock intervals use standard pay cutoffs instead.

**WRCI — high (red)**

> **WRCI {value} — above High threshold (> {WRCI_HIGH_THRESHOLD})**  
> Composite water-risk score in the High band. Review flags, OWC distance, and isolation status for this interval.

**WRCI — low (green)**

> **WRCI {value} — at or below High threshold (≤ {WRCI_HIGH_THRESHOLD})**  
> Score is not in the High WRCI band. Elevated risk may still apply via flags or OWC tiers — see Risk column.

**Null**

> No {RQI|WRCI} computed for this interval.

### 1.5 Application surfaces (data bindings)

| Page / component | JSON path | Columns / fields |
|------------------|-----------|-------------------|
| **Well Detail** `DataTable` | `intervals/{alias}.json` → `intervals[].RQI`, `.WRCI` | `rqi`, `wrci` columns |
| **Water-Risk** `ZoneCard` | `water_risk/{alias}.json` → `flagged_zones[].RQI`, `.WRCI` | `<dl>` metric values |
| **Intra-well** anomaly table | `intervals/{alias}.json` | `wrci` column only (RQI optional — not currently shown) |
| **Corpus `ResultCard`** | Assistant `summary` keys `RQI`, `WRCI` | `SummaryGrid` when key matches |
| **Portfolio** | — | **No RQI/WRCI columns today** — skip unless added in Phase C |
| **DepthTracks** | Same interval JSON | **No change** — tracks keep gradient/risk-class colouring; add one legend bullet in Well Detail: *“Table RQI/WRCI colours use threshold tints; tracks use continuous/risk-class scales.”* |

### 1.6 `DataTable` column integration

Extend `DataTableColumn`:

```ts
metricTone?: 'rqi' | 'wrci' | 'none'  // default 'none'
```

When `metricTone` is set, `render` may return raw number; `DataTable` wraps with `MetricCell`. Alternatively pages pass `<MetricCell />` in `render` — **prefer explicit `MetricCell` in render** for clarity.

---

## 2. `DataTable` sticky first column (A4)

### 2.1 Behaviour

| Context | `stickyFirstColumn` | Scroll container |
|---------|---------------------|----------------|
| Well Detail interval table | `true` (default for interval tables) | `max-h-[70vh] overflow-auto` |
| Intra-well anomaly table | `true` | `max-h-[60vh] overflow-auto` |
| Portfolio well table | `true` — sticky **Well** on horizontal scroll | `overflow-x-auto` only (no max-height) |
| Short tables (<15 rows) | `false` acceptable | none |

### 2.2 Layout wireframe

```
┌─ Card: Interval table ─────────────────────────────────────────────┐
│ ┌─ .data-table-scroll (max-h-[70vh] overflow-auto) ────────────────┐ │
│ │ ┌──────────┬────────┬────────┬─────┬─────┬─────┐                 │ │
│ │ │ Depth MD │ mTVDss │ HAFWL  │ %SS │ ... │ WRCI│  ← thead sticky │ │
│ │ │ (STICKY) │        │        │     │     │     │     top: 0      │ │
│ │ ├──────────┼────────┼────────┼─────┼─────┼─────┤                 │ │
│ │ │ 2100 m   │ -1190  │  ...   │ 62% │ ... │ 71.2│                 │ │
│ │ │ (STICKY) │        │        │     │     │     │                 │ │
│ │ │ 2105 m   │ ...    │        │     │     │     │  ▲ vertical    │ │
│ │ └──────────┴────────┴────────┴─────┴─────┴─────┘  scroll          │ │
│ └──────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
         ▲
    horizontal scroll — label column stays fixed left
```

### 2.3 CSS specification

Apply to first `th` and `td` in each row when `stickyFirstColumn={true}`:

| Property | Value | Notes |
|----------|-------|-------|
| `position` | `sticky` | |
| `left` | `0` | |
| `z-index` | `2` (body cells), `3` (header corner `th`) | Header row `th` also `top: 0; z-index: 3` |
| `background` | `var(--surface-2)` on `th`; `var(--surface)` on `td` | Prevents bleed-through |
| `box-shadow` | `4px 0 8px -2px rgba(0, 0, 0, 0.45)` | Right-edge depth cue |
| `min-width` | `7.5rem` (depth) / `10rem` (well name) | Avoid collapse |
| `border-right` | `1px solid var(--border)` | Separator when shadow insufficient |

**Hover row:** sticky cell background → `color-mix(in srgb, var(--surface-2) 60%, var(--surface))` to match row hover.

**Wrapper structure:**

```html
<div class="data-table-scroll overflow-auto max-h-[70vh] rounded-card border border-border">
  <table>...</table>
</div>
```

Move outer `overflow-x-auto` from current `DataTable` root to this inner scroll container; outer retains border-radius.

### 2.4 Acceptance

Well Detail **JENA31** (~197 rows): depth column remains visible while scrolling to RQI/WRCI/Flags columns on 1280×800 and 375×667 (horizontal scroll).

---

## 3. `usePageState` key map (A3)

### 3.1 Hook API

```ts
// site/src/hooks/usePageState.ts

usePersistedState<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>]
useScrollRestore(routeKey?: string): void  // uses pathname when omitted
```

- Storage: `sessionStorage` only (matches `useWellSelection.ts`)
- Serialization: `JSON.stringify` / `parse` with try/catch fallback to default
- Prefix: `hr-page:` for route state; `hr-global:` for app chrome
- Write on: `visibilitychange` (hidden), `beforeunload`, component unmount
- Restore on: mount + `requestAnimationFrame` double-tick (layout settled)

### 3.2 Key map

| Route (`useLocation().pathname`) | Storage key | Type | Default | Notes |
|----------------------------------|-------------|------|---------|-------|
| `/` | `hr-page:/:scrollY` | `number` | `0` | Phase C may add `hr-page:/:execPanelA` etc. |
| `/well/:alias` | `hr-page:/well/:alias:scrollY` | `number` | `0` | Well alias: existing `hr-selected-well` via `useWellSelection` — **do not duplicate** |
| `/water-risk` | `hr-page:/water-risk:scrollY` | `number` | `0` | Wells: `hr-water-risk-left`, `hr-water-risk-right` — **keep existing keys** |
| `/compare` | `hr-page:/compare:scrollY` | `number` | `0` | |
| `/compare` | `hr-page:/compare:matrixMode` | `'feature' \| 'depth'` | `'feature'` | Jaccard matrix toggle |
| `/intra/:alias` | `hr-page:/intra/:alias:scrollY` | `number` | `0` | Well: `hr-selected-well` |
| `/methodology` | `hr-page:/methodology:scrollY` | `number` | `0` | |
| `/methodology` | `hr-page:/methodology:selectedMethod` | `MethodId` | `'method-2'` | See §4 — A5 accordion |
| **Global** | `hr-global:assistantOpen` | `boolean` | `false` | Optional — `AssistantWidget` |

**`MethodId` union:** `'method-2' | 'method-3' | 'method-4' | 'method-5'`

### 3.3 Scroll container targeting

| Page | Scroll root |
|------|-------------|
| Most pages | `window` / `document.documentElement` |
| Water-Risk | `window` (panel inner zones list keeps its own local scroll — do **not** persist inner `max-h-[32rem]` scroll; only page Y) |
| Well Detail | `window` (table has nested scroll — page scroll + table scroll independent; persist **page** `scrollY` only) |

### 3.4 Migration note

Existing keys in `useWellSelection.ts` remain unchanged. `usePageState` is additive.

---

## 4. Methodology §A5 — Methods 2–5 IA and wireframes

### 4.1 Information architecture

**Replace** the current 2×2 `FormulaBlock` grid under *“Other statistical methods”* with:

1. **Keep** WRCI (Method 1) in the existing top card — unchanged.
2. **New card:** *“Other statistical methods (2–5)”* with:
   - **`MethodSelector`** — vertical **single-select accordion** (recommended over `<select>` for long monospace content, equations, and keyboard clarity).
   - **`MethodDetailPanel`** — one expanded panel at a time.
3. Persist `selectedMethod` via `hr-page:/methodology:selectedMethod`.

**Why accordion over dropdown:** Methods include multi-section prose + equations; accordion keeps context visible in nav list, supports arrow-key navigation, and avoids clipping on mobile.

### 4.2 Page wireframe

```
┌─ Methodology ─────────────────────────────────────────────────────────┐
│ [Pipeline overview card]                                              │
│ [WRCI card — Method 1, unchanged]                                     │
│                                                                       │
│ ┌─ Other statistical methods (2–5) ─────────────────────────────────┐ │
│ │ Select one method for full detail. Constants from @/config.        │ │
│ │                                                                    │ │
│ │ ┌ MethodSelector (aria tablist / accordion) ───────────────────┐  │ │
│ │ │ ▼ Method 2 — Robust Z-Score Anomaly Detection    [expanded]  │  │ │
│ │ │   Method 3 — Spearman Rank-Correlation                       │  │ │
│ │ │   Method 4 — Jaccard Similarity on Binary Flag Sets          │  │ │
│ │ │   Method 5 — Clustering + Kolmogorov–Smirnov Significance    │  │ │
│ │ └──────────────────────────────────────────────────────────────┘  │ │
│ │                                                                    │ │
│ │ ┌─ MethodDetailPanel (method-2) ─────────────────────────────────┐ │ │
│ │ │ § Objective                                                     │ │ │
│ │ │ § Inputs / properties                                           │ │ │
│ │ │ § Equations (FormulaBlock)                                      │ │ │
│ │ │ § Outputs & JSON                                                │ │ │
│ │ │ § Site route                                                    │ │ │
│ │ │ § Water-risk mapping                                            │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ [Pay cutoffs card]                                                      │
│ [Data quality caveats card]                                             │
│                                                                       │
│ ┌─ NEW: Metric colour legend (A1/A2) ────────────────────────────────┐ │
│ │ RQI red = good rock · WRCI red = high score — see tooltips in tables│ │
│ └────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────┘
```

### 4.3 `MethodSelector` item labels

| `id` | Label |
|------|-------|
| `method-2` | Method 2 — Robust Z-Score Anomaly Detection |
| `method-3` | Method 3 — Spearman Rank-Correlation Matrix |
| `method-4` | Method 4 — Jaccard Similarity on Binary Flag Sets |
| `method-5` | Method 5 — Hierarchical Clustering + KS Significance |

Collapsed row: method number + short title. Expanded: full `MethodDetailPanel` below list (not inline accordion body — **single panel region** below selector for stable scroll height).

### 4.4 Panel section template (all methods)

Each `MethodDetailPanel` uses this **fixed section order**:

1. **Objective** — 1–2 sentences (prose, `text-sm text-text-muted`)
2. **Inputs / properties** — bullet list or table; pull arrays from `@/config`
3. **Equations** — `FormulaBlock` (existing component), monospace
4. **Outputs & JSON** — file paths, field names
5. **Site route** — link button to relevant page
6. **Water-risk mapping** — 1–2 sentences tying method to Jena / portfolio decisions

---

### 4.5 Method 2 — Robust Z-Score (`method-2`)

```
┌─ MethodDetailPanel: method-2 ────────────────────────────────────────┐
│ OBJECTIVE                                                               │
│ Find intervals statistically unusual within their own well — subtle     │
│ water-zone signatures beyond fixed WRCI thresholds.                     │
│ Type: Intra-well                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│ INPUTS / PROPERTIES                                                     │
│ • Metrics (ZSCORE_METRICS): avg_RES_DEEP, avg_GR, pct_ss, fluor,        │
│   grain_ordinal, gas                                                    │
│ • Per-well median + MAD across retained intervals                       │
├─────────────────────────────────────────────────────────────────────────┤
│ EQUATIONS — FormulaBlock                                                │
│   z = {MAD_SCALE} × (x − median(x)) / MAD(x)                            │
│   Flag when |z| > {ZSCORE_THRESHOLD}                                    │
├─────────────────────────────────────────────────────────────────────────┤
│ DIAGNOSTIC PATTERN                                                      │
│ Low RES_DEEP + high GR + high %SS → classic water-zone signature        │
│ (good rock without hydrocarbon charge).                                 │
├─────────────────────────────────────────────────────────────────────────┤
│ OUTPUTS & JSON                                                          │
│ • site/public/data/intervals/{ALIAS}.json                               │
│   - intervals[].z_scores{}                                              │
│   - intervals[].anomalies[]                                           │
├─────────────────────────────────────────────────────────────────────────┤
│ SITE ROUTE                                                              │
│ [ Open Intra-well Statistics → ]  /intra/{lastWell or JENA31}           │
├─────────────────────────────────────────────────────────────────────────┤
│ WATER-RISK MAPPING                                                      │
│ Surfaces intervals where petrophysics decouple within a well before     │
│ WRCI flags fire — useful for explaining “hidden” charge risk on Jena.    │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 4.6 Method 3 — Spearman (`method-3`)

```
┌─ MethodDetailPanel: method-3 ────────────────────────────────────────┐
│ OBJECTIVE                                                               │
│ Rank-based correlations between petrophysical variables within each     │
│ well (robust to non-linearity and text ordinals).                       │
│ Type: Intra-well                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│ INPUTS / PROPERTIES                                                     │
│ • Variables (SPEARMAN_VARS): pct_ss, grain_ordinal, avg_GR,           │
│   avg_RES_DEEP, fluor, gas                                              │
│ • n = retained interval count per well                                  │
├─────────────────────────────────────────────────────────────────────────┤
│ EQUATIONS — FormulaBlock                                                │
│   Spearman ρ for each pair; two-tailed p-value                          │
├─────────────────────────────────────────────────────────────────────────┤
│ INTERPRETATION TABLE                                                    │
│ ┌──────────────────────┬────────────────────────────────────────────┐    │
│ │ Pattern              │ Interpretation                          │    │
│ ├──────────────────────┼────────────────────────────────────────────┤    │
│ │ RQI ↔ RES_DEEP (+)   │ Rock quality tracks resistivity           │    │
│ │ RQI ↔ GR (−)         │ Cleaner sand vs higher gamma ray          │    │
│ │ RQI ↔ fluor (−/weak) │ Good rock without fluorescence            │    │
│ └──────────────────────┴────────────────────────────────────────────┘    │
│ Caveat callout: Small n → interpret p-values cautiously.                │
├─────────────────────────────────────────────────────────────────────────┤
│ OUTPUTS & JSON                                                          │
│ • site/public/data/stats/correlations.json → per-well 6×6 ρ + p       │
├─────────────────────────────────────────────────────────────────────────┤
│ SITE ROUTE                                                              │
│ [ Open Intra-well Statistics → ]  /intra/{alias}                        │
├─────────────────────────────────────────────────────────────────────────┤
│ WATER-RISK MAPPING                                                      │
│ Decoupling of permeability from hydrocarbon indicators suggests         │
│ water-prone zones — explains *why* Jena intervals are risky.              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 4.7 Method 4 — Jaccard (`method-4`)

```
┌─ MethodDetailPanel: method-4 ────────────────────────────────────────┐
│ OBJECTIVE                                                               │
│ Inter-well similarity of binary flag / geological feature sets,         │
│ independent of absolute depth.                                          │
│ Type: Inter-well                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│ INPUTS / PROPERTIES                                                     │
│ • Features (JACCARD_FEATURES): good_rock, lowres_over_good,             │
│   lowfluor_over_good, low_GR, ZOI, matching_pay, coarse_grain,        │
│   loose_hardness                                                        │
│ • Presence rule: ≥ {JACCARD_PRESENCE_PCT}% of well intervals           │
├─────────────────────────────────────────────────────────────────────────┤
│ EQUATIONS — FormulaBlock                                                │
│   J(A, B) = |A ∩ B| / |A ∪ B|   (0 … 1)                                │
│ Depth-binned variant: {JACCARD_DEPTH_BINS} normalized lateral bins    │
├─────────────────────────────────────────────────────────────────────────┤
│ OUTPUTS & JSON                                                          │
│ • site/public/data/stats/jaccard.json                                   │
│   - matrix, depth_binned_matrix, aliases                                │
│   - jena_analog_ranking{JENA31, JENA31DW1}[]                            │
├─────────────────────────────────────────────────────────────────────────┤
│ SITE ROUTE                                                              │
│ [ Open Inter-well Comparison → ]  /compare                              │
├─────────────────────────────────────────────────────────────────────────┤
│ WATER-RISK MAPPING                                                      │
│ Ranks analog wells whose known water behaviour may inform Jena risk     │
│ assessment (e.g. STIMPEE 7, BIALA 19 at J=1.0).                       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 4.8 Method 5 — Clustering + KS (`method-5`)

```
┌─ MethodDetailPanel: method-5 ────────────────────────────────────────┐
│ OBJECTIVE                                                               │
│ Group wells by aggregate petrophysical signature; test whether Jena     │
│ distributions are statistically distinguishable from analogs (KS).      │
│ Type: Inter-well                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│ INPUTS / PROPERTIES — Part A (clustering)                               │
│ • Feature vector (CLUSTER_FEATURES): mean_pct_ss, mean_grain_ordinal,   │
│   mean_avg_GR, mean_RES_DEEP, pay_pct, mean_WRCI, pct_high_risk,        │
│   pct_zoi                                                               │
│ • Standardise → cosine + Euclidean distances → Ward linkage             │
├─────────────────────────────────────────────────────────────────────────┤
│ INPUTS / PROPERTIES — Part B (KS)                                       │
│ • Properties (KS_PROPERTIES): pct_ss, grain_ordinal, avg_GR,            │
│   avg_RES_DEEP, fluor, WRCI                                             │
│ • Focus wells: KS_FOCUS_ALIASES (JENA31, JENA31DW1) vs each analog      │
├─────────────────────────────────────────────────────────────────────────┤
│ EQUATIONS — FormulaBlock                                                │
│   KS two-sample test → D-statistic + p-value per (focus, analog, prop)  │
│   Low p → distributions significantly different (less comparable)       │
├─────────────────────────────────────────────────────────────────────────┤
│ OUTPUTS & JSON                                                          │
│ • site/public/data/stats/clusters.json — dendrogram, cluster_id         │
│ • site/public/data/stats/ks.json — significance grid                    │
├─────────────────────────────────────────────────────────────────────────┤
│ SITE ROUTE                                                              │
│ [ Open Inter-well Comparison → ]  /compare                              │
├─────────────────────────────────────────────────────────────────────────┤
│ WATER-RISK MAPPING                                                      │
│ Confidence layer — quantifies which analogs are truly comparable for      │
│ transfer of water-risk insight to Jena wells.                           │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.9 Responsive behaviour (Methodology)

| Breakpoint | `MethodSelector` | `MethodDetailPanel` |
|------------|------------------|---------------------|
| `< 640px` | Full-width stacked buttons; 44px min height | Full width; equations `overflow-x-auto` |
| `≥ 640px` | Left rail 280px + panel fluid **or** stacked if simpler | Prefer stacked (single column) for v1 |
| `≥ 1024px` | Optional 30/70 split: selector left, detail right | Reduces vertical scroll |

---

## 5. Component inventory

| Component / module | New? | Responsibility |
|--------------------|------|----------------|
| `MetricCell` | **New** | Threshold tint + formatted value + tooltip |
| `MetricTooltip` | **New** (optional) | Accessible tooltip wrapper |
| `rqiWrciStyle.ts` | **New** | `rqiCellClass`, `wrciCellClass`, format helpers |
| `DataTable` | **Extend** | `stickyFirstColumn`, scroll wrapper, optional `metricTone` |
| `MethodSelector` | **New** | Single-select list; keyboard; `aria-pressed` / `aria-current` |
| `MethodDetailPanel` | **New** | Renders section template for Methods 2–5 |
| `MethodologyMethodsSection` | **New** (container) | Composes selector + panel; reads/writes `selectedMethod` |
| `usePageState.ts` | **New** | `usePersistedState`, `useScrollRestore` |
| `FormulaBlock` | Reuse | Equations in MethodDetailPanel |
| `Card` | Reuse | Section wrappers |
| `RiskBadge` | Reuse | Unchanged — distinct from MetricCell semantics |

---

## 6. Accessibility (A1, A2, A4, A5)

### 6.1 Coloured metrics — contrast

| Element | Foreground on tint | Minimum ratio | Mitigation |
|---------|-------------------|---------------|------------|
| RQI/WRCI value text | `#ef4444` / `#22c55e` on ~14% tint over `#131a22` | **4.5:1** required | If fail: darken text to `#fca5a5` (red) / `#86efac` (green) **or** increase font-weight to 600 |
| Tooltip body | `--text` on `--surface-2` | 4.5:1 | |
| Null state | `--text-muted` on `--surface` | 3:1 OK for secondary |

**Colour is not the only cue:** metric values remain numeric; tooltips explain semantics; Methodology legend card documents inversion for RQI.

### 6.2 `MethodSelector` keyboard

| Key | Action |
|-----|--------|
| `Tab` | Move focus between method buttons |
| `Enter` / `Space` | Select focused method; expand panel |
| `ArrowUp` / `ArrowDown` | Move selection (roving `tabIndex`) |
| `Home` / `End` | First / last method |

Markup pattern:

```html
<div role="tablist" aria-label="Statistical methods 2 through 5">
  <button role="tab" aria-selected="true" aria-controls="panel-method-2" id="tab-method-2">
  ...
</div>
<div role="tabpanel" id="panel-method-2" aria-labelledby="tab-method-2">
```

Focus management: on selection change, move focus to panel heading (`<h3 tabIndex={-1}>`) for screen reader announcement.

### 6.3 Sticky table

- Sticky cells must not trap focus — tab order stays row-major.
- `scope="col"` on headers; first column `scope="row"` **if** it contains row labels (depth).
- Announce scroll region: `tabIndex={0}` on scroll wrapper only if keyboard horizontal scroll needed — prefer native overflow.

### 6.4 Motion

Respect `prefers-reduced-motion: reduce` in `tokens.css` — no animated colour transitions on MetricCell.

### 6.5 Assistant widget (optional A3)

Persist `hr-global:assistantOpen`; ensure `aria-expanded` on toggle syncs from storage on load.

---

## 7. Design system alignment (UI/UX Pro Max)

| Recommendation | Application |
|----------------|-------------|
| Data-Dense Dashboard | Compact table padding (`px-3 py-2.5` kept); sticky labels; tooltips on hover |
| Status colours green/amber/red | Map to existing `--risk-*`; MetricCell uses red/green binary per spec |
| Row hover highlight | Keep `hover:bg-surface-2/60` |
| Anti-pattern: ornate design | No new gradients on Methodology panels |
| Pre-delivery | `cursor-pointer` on MethodSelector; 150ms border colour transition; focus rings via `:focus-visible` |

**Typography:** Keep Inter + JetBrains Mono (already configured) — do not switch to Fira for Phase A.

---

## 8. Site-wide design improvements catalogue

Implementation priority within Phase A marked **A**; follow-ups for later phases marked **B/C**.

| Page | Issue | Recommendation | Phase |
|------|-------|----------------|-------|
| **AppShell** | Sidebar shows **“17 horizontal wells”** | Update to **23**; dynamic count from `wells.json` optional | **A** |
| **AppShell** | Header subtitle static *“portfolio overview”* | Consider route-aware subtitle (low priority) | C |
| **Portfolio** | Legend says *“WRCI ≥ 66”* — config uses **60** | Fix copy to use `WRCI_HIGH_THRESHOLD` / `WRCI_ELEVATED_THRESHOLD` from config | **A** |
| **Portfolio** | No RQI/WRCI columns | Defer unless executive hub needs them | C |
| **Portfolio** | `DataTable` — sticky Well column | **A4** horizontal sticky | **A** |
| **Well Detail** | RQI/WRCI plain monospace | **MetricCell** on both columns | **A** |
| **Well Detail** | 197-row table — label scrolls away | **A4** sticky depth + `max-h-[70vh]` | **A** |
| **Well Detail** | No scroll restore | **A3** | **A** |
| **Well Detail** | DepthTracks vs table colour semantics | Add legend note (§1.5) | **A** |
| **Water-Risk** | ZoneCard WRCI/RQI uncoloured | **MetricCell** in `<dl>` | **A** |
| **Water-Risk** | Bar chart uses flat `--risk-elev` | Optional: bar fill by `wrciCellClass` threshold | B |
| **Water-Risk** | `showAll` zones not persisted | Optional `hr-page:/water-risk:showAll` — **skip v1** | — |
| **Water-Risk** | Scroll restore | **A3** page Y | **A** |
| **Compare** | `matrixMode` resets on navigation | **A3** persist | **A** |
| **Compare** | Matrix toggle is plain buttons | Add `role="tablist"` pattern (same as MethodSelector) | **A** |
| **Compare** | Scroll restore | **A3** | **A** |
| **Intra-well** | WRCI column uncoloured | **MetricCell** | **A** |
| **Intra-well** | Anomaly table depth scrolls away | **A4** sticky | **A** |
| **Intra-well** | No RQI in anomaly table | Optional RQI column — **skip v1** | — |
| **Intra-well** | Scroll restore | **A3** | **A** |
| **Methodology** | Methods 2–5 terse 2×2 grid | **A5** accordion + detail panels | **A** |
| **Methodology** | No metric colour legend | New card after WRCI (§4.2) | **A** |
| **Methodology** | `selectedMethod` not persisted | **A3** | **A** |
| **Corpus Assistant** | `ResultCard` SummaryGrid plain RQI/WRCI | Wrap numeric keys with **MetricCell** | **A** |
| **Corpus Assistant** | Toggle open state lost on route change | `hr-global:assistantOpen` optional | **A** |
| **Corpus Assistant** | Emoji `✦` on button | Replace with SVG icon (Phosphor `Sparkle` or similar) per UI skill | B |
| **Global** | `useWellSelection` keys undocumented in one place | Cross-link from `usePageState` docstring | **A** |

---

## 9. Implementation checklist (for implement agent)

- [ ] `site/src/styles/tokens.css` — metric aliases
- [ ] `site/src/lib/rqiWrciStyle.ts`
- [ ] `site/src/components/MetricCell.tsx`
- [ ] `site/src/components/DataTable.tsx` — sticky + scroll wrapper
- [ ] `site/src/hooks/usePageState.ts`
- [ ] Wire scroll + state on all routes in §3.2
- [ ] `MethodSelector`, `MethodDetailPanel`, `MethodologyMethodsSection`
- [ ] Refactor `Methodology.tsx` §A5; add colour legend card
- [ ] Apply `MetricCell` on surfaces in §1.5
- [ ] `AppShell` well count → 23
- [ ] Fix Portfolio legend threshold copy
- [ ] `npm test && npm run build` pass
- [ ] Manual a11y spot-check: contrast, keyboard method tabs, sticky table at 375px

---

## 10. What to expect (after implementation)

Users will see **red/green tinted RQI and WRCI values** across well tables and water-risk cards — with tooltips clarifying that **red RQI means good rock**, not bad data. Long interval tables keep the **depth column pinned** while scrolling. Navigating away and back **restores scroll position**, compare matrix mode, and the last-opened methodology method. The Methodology page gains **readable, selectable deep dives** for Methods 2–5 aligned with `New Statistical Methods.md` and `@/config` constants.

---

## Appendix — Design-system search output (abbreviated)

**Pattern:** Real-Time / Operations Landing (dark, status colours, data-dense)  
**Style:** Data-Dense Dashboard — KPI cards, tables, minimal padding, grid layout  
**Key effects:** Hover tooltips, row highlighting, smooth filter animations  
**Avoid:** Ornate design; missing filters on dense views  

Full command:

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "geoscience petrophysics dashboard data table methodology" \
  --design-system -p "McKinlay Water-Risk Review"
```
