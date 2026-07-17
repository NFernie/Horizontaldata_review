# Phase H Design Specification — Data Relationships

**Date:** 2026-07-17  
**Status:** Approved for implementation  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md`  
**Design-system search:** `oil gas geoscience scatter plot correlation histogram multi-well analytics dashboard` → **Data-Dense Dashboard**

---

## 1. Scope

| ID | Feature | Route / component |
|----|---------|-------------------|
| H1 | Dedicated **Data Relationships** page | `/#/data-relationships` → `DataRelationshipsPage` |
| H2 | Move distribution histogram off Portfolio | Remove from `ExecutiveSummary`; mount on H page |
| H3 | Multi-well toggle (shared) | `WellToggleList` — same selection drives histogram + scatter |
| H4 | Scatter plot + Pearson regression | `ScatterPlotPanel` — pooled OLS line, R², r, equation |
| H5 | Interval filters | Risk class, pay-only, flag filters (shared) |
| H6 | Session persistence | `usePersistedState` under `/data-relationships` |

**Out of scope:** Pipeline re-run; per-well regression lines; Spearman on this page.

**Nav placement:** Below **Compare**, above **Methodology**.

---

## 2. Page layout

```
┌─ Data Relationships ───────────────────────────────────────────────────────┐
│  Explore interval-level property distributions and correlations across     │
│  the McKinlay portfolio.                                                   │
├────────────────────────────────────────────────────────────────────────────┤
│  FILTERS (card)                                                            │
│  Risk: [✓ High] [✓ Elevated] [✓ Low]   Pay only [ ]                        │
│  Flags: [lowres] [lowfluor] [low_GR] [ZOI] [owc_high] [owc_elevated]       │
├──────────────────────────────┬─────────────────────────────────────────────┤
│  WELLS (card, sticky on lg)  │  SCATTER (card)                             │
│  [Select all] [Clear all]    │  X [Gr ▼]  Y [Deep Res ▼]  [Swap ↔]         │
│  ┌ color ● JENA 31      [✓] │  ┌ scatter + pooled regression line ─────┐  │
│  │ color ● JENA 31DW1   [✓] │  │  · · ·  (opacity 0.35, colour/well)   │  │
│  │ … (24 rows)              │  └───────────────────────────────────────┘  │
│  └ highlight on hover        │  Stats: r, R², y = mx + b, n pairs          │
├──────────────────────────────┴─────────────────────────────────────────────┤
│  HISTOGRAM (collapsible card)                                              │
│  Property [RQI ▼]                                                          │
│  Overlaid semi-transparent bars per enabled well                           │
│  Per-well descriptive stats table (scroll-x)                               │
└────────────────────────────────────────────────────────────────────────────┘
```

| Breakpoint | Layout |
|------------|--------|
| `< lg` | Stacked: filters → wells → scatter → histogram |
| `≥ lg` | `grid lg:grid-cols-[280px_1fr]` — wells left, scatter right; histogram full width below |

---

## 3. Properties

| Label | Key | Interval field | Unit hint |
|-------|-----|----------------|-----------|
| Gr | `avg_GR` | `log.avg_GR` | gAPI |
| Deep Res | `avg_RES_DEEP` | `log.avg_RES_DEEP` | Ω·m |
| HAFWL | `hafwl_m` | `hafwl_m` | m |
| RQI | `RQI` | `RQI` | 0–1 |
| WRCI | `WRCI` | `WRCI` | 0–100 |
| Flour % | `fluor` | `fluor` | % |
| SS% | `pct_ss` | `pct_ss` | % |
| Grain | `grain_ordinal` | `grain_ordinal` | ordinal |
| TGas | `gas` | `gas` | — |

Config: `DATA_RELATIONSHIP_PROPERTIES` + `DATA_RELATIONSHIP_PROPERTY_LABELS` in `site/src/config.ts`.

---

## 4. Well toggle (`WellToggleList`)

| Rule | Spec |
|------|------|
| Wells | `useWells({ includeDualLateral: true })` — 24 entries |
| Default | **All enabled** |
| Colour | Deterministic HSL per sorted alias index (`getWellColor`) |
| Row | Colour swatch + display name + filtered *n* + checkbox |
| Actions | **Select all** / **Clear all** |
| Hover sync | Scatter point hover → highlight row; row hover → boost point opacity |
| a11y | `aria-pressed` on toggles; list `role="list"` |

---

## 5. Filters (`RelationshipFilterBar`)

| Filter | Behaviour |
|--------|-----------|
| Risk class | Multi-checkbox: High, Elevated, Low — **default all on**; empty selection = show none |
| Pay only | When checked, `matching_pay === true` |
| Flags | Multi-checkbox from `FLAG_LABELS`; when any selected, interval must have **≥1** matching flag in `flags[]` |

Filters apply to **both** histogram and scatter.

---

## 6. Scatter plot (`ScatterPlotPanel`)

| Item | Spec |
|------|------|
| Points | One per interval; drop if either axis null |
| Chart | Recharts `ScatterChart` + `Scatter` per enabled well |
| Opacity | `0.35` default; `0.9` when row/point hovered |
| Regression | **One pooled** OLS line across all visible points (Pearson) |
| Stats | Pearson **r**, **R²**, equation `y = {m}x + {b}` with axis labels |
| Controls | X select, Y select, **Swap axes** button, **min/max sliders** per axis, **Reset zoom** |
| Tooltip | Well display name, X/Y formatted values, MD depth |
| Height | `h-80` (320px) |
| Empty | “No data points match current filters.” |

---

## 7. Histogram (`DistributionHistogramPanel` — refactored)

| Item | Spec |
|------|------|
| Controls | Property select only (wells from shared toggle) |
| Bins | 16 equal-width; domain presets for RQI `[0,1]`, WRCI `[0,100]` |
| Chart | Overlaid `Bar` per enabled well, `fillOpacity={0.45}` |
| Stats table | Per enabled well: Mean, Median, Mode, Std Dev |
| Default property | **RQI** |
| Height | `h-56` |

---

## 7.1 Persistence keys (`/data-relationships`)

| Key suffix | Type | Default |
|------------|------|---------|
| `enabledWells` | `string[]` | all aliases |
| `histProperty` | property key | `RQI` |
| `scatterX` | property key | `avg_GR` |
| `scatterY` | property key | `avg_RES_DEEP` |
| `riskClasses` | `RiskClass[]` | all three |
| `payOnly` | boolean | `false` |
| `selectedFlags` | `string[]` | `[]` |
| `histExpanded` | boolean | `true` |
| `scatterExpanded` | boolean | `true` |

---

## 8. Tokens & accessibility

| Token | Use |
|-------|-----|
| `var(--surface)`, `var(--surface-2)`, `var(--border)` | Cards |
| `var(--text)`, `var(--text-muted)` | Labels |
| `var(--accent)` | Swap button, focus |
| Well colours | Generated HSL — not theme tokens |

- Min touch target 44px on toggles/selects  
- `prefers-reduced-motion`: no point animations  
- Keyboard: tab through filters, wells, controls  

---

## 9. Data bindings

| Asset | Path |
|-------|------|
| Wells | `data/wells.json` |
| Intervals | `data/intervals/{alias}.json` |
| Regression | **Client-side** from filtered interval points |

**No pipeline re-run required.**

---

## 10. Files

| File | Action |
|------|--------|
| `site/src/pages/DataRelationshipsPage.tsx` | **New** |
| `site/src/components/data-relationships/WellToggleList.tsx` | **New** |
| `site/src/components/data-relationships/RelationshipFilterBar.tsx` | **New** |
| `site/src/components/data-relationships/ScatterPlotPanel.tsx` | **New** |
| `site/src/lib/dataRelationships.ts` | **New** |
| `site/src/lib/dataRelationships.test.ts` | **New** |
| `site/src/components/executive/DistributionHistogramPanel.tsx` | **Refactor** multi-well |
| `site/src/lib/histogram.ts` | **Extend** multi-well bins + accessors |
| `site/src/config.ts` | **Extend** properties |
| `site/src/components/executive/ExecutiveSummary.tsx` | **Remove** histogram |
| `site/src/App.tsx`, `AppShell.tsx` | Route + nav |

---

## 11. Acceptance

- [ ] `/#/data-relationships` loads; nav between Compare and Methodology  
- [ ] Histogram removed from Portfolio `/`  
- [ ] All 9 properties on histogram + scatter axes  
- [ ] Well toggles, filters, hover sync, pooled regression stats  
- [ ] State persists in sessionStorage  
- [ ] `npm test && npm run build` pass  
