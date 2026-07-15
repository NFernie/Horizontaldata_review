# Phase G Design Specification — Interaction & Readability QoL

**Date:** 2026-07-15  
**Status:** Approved for implementation (Phase 1)  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md`  
**Deferred:** Light mode → Phase G2 (separate PR)

---

## 1. Scope

| ID | Feature | Route / component | Phase |
|----|---------|-------------------|-------|
| G1 | Histogram descriptive stats | `/` → `DistributionHistogramPanel` | **1** |
| G2 | Well log track click → interval table | `/well/:alias` → `DepthTracks` + `DataTable` | **1** |
| G3 | Compare — Jaccard expandable rankings + depth-binned sync | `/compare` | **1** |
| G4 | Compare — clustering expandable analog cards | `/compare` → `ClusterAnalogCards` | **1** |
| G5 | Methodology body prose +10% | `/methodology` | **1** |
| G6 | Light mode (geoscience palette) | App-wide `tokens.css` | **2** |

**Out of scope:** `JENA31_DUAL` Jaccard ranking card; cluster assignment table expansion; pipeline changes.

---

## 2. G1 — Histogram descriptive stats

### Layout

Small table **below** the bar chart, **above** the existing `n=` footer line.

| Statistic | Well A | Well B |
|-----------|--------|--------|
| Mean | … | … |
| Median | … | … |
| Mode | … | … |
| Std Dev | … | … |

### Computation (client-side from loaded interval values)

| Stat | Rule |
|------|------|
| Mean | Arithmetic mean of finite values |
| Median | Standard median |
| Mode | Midpoint of histogram bin with highest count **for that well**; **rounded** to fixed decimals |
| Std Dev | Population σ (divide by *n*) |
| Empty | `—` when *n* = 0 |

### Formatting

- **Fixed 3 decimal places** for all numeric stats (all properties).
- Recompute when Well A, Well B, or Property changes.

### Accessibility

- `<table>` with `<caption class="sr-only">` summarising wells and property.
- `tabular-nums` on numeric cells.

---

## 3. G2 — Log track click → interval table

### Interaction

1. **Hover** — unchanged (depth axis MD/TVDss; track cells show property popup).
2. **Click** on **any log track cell** or **depth axis** → scroll interval table to nearest interval row at that MD; **brief highlight** (~2 s).

### Behaviour

- Nearest interval: minimise `|mid(MD) − clickMD|` where `mid = (top + bot) / 2`.
- `DataTable` gains optional `highlightRowKey` + internal `scrollIntoView({ block: "nearest" })`.
- Row highlight: `bg-accent/15 ring-1 ring-accent/40` for 2 s, then clear.
- Footer hint updated: “Click a track cell to jump to that depth in the interval table.”

### Accessibility

- Track rects: `role="button"` + `aria-label` e.g. “GR at 1245 m MD — jump to interval”.
- Depth axis click area: same pattern.

---

## 4. G3 — Compare Jaccard rankings

### Ranking source (synced with heatmap)

Single **Feature sets / Depth-binned (20 bins)** tab control at **page level** (above ranking cards). Same `matrixMode` persisted key (`hr-page:/compare:matrixMode`) drives:

- Top-analog ranking cards
- Jaccard heatmap matrix (`matrix` vs `depth_binned_matrix`)

### Cards

- **Focus wells:** `JENA31`, `JENA31DW1` only (`KS_FOCUS_ALIASES`). **Exclude** `JENA31_DUAL`.
- Rankings computed at runtime via `rankJaccardAnalogs` / `rankDepthBinnedJaccardAnalogs` (not capped `jena_analog_ranking` top-5).
- Display names from `wells.json`.

### Expand pattern

- Default: top **5** rows visible.
- **“Show all rankings”** / **“Show top 5”** toggle per card (`aria-expanded`).
- Description text reflects active mode (feature presence vs depth-binned).

---

## 5. G4 — Clustering expandable analog cards

- Target: `ClusterAnalogCards` top-5 cosine lists only (not `ClusterAssignmentTable`).
- Same expand/collapse pattern as G3.
- Show `cos={value}` for **all** ranks when expanded.
- Focus aliases unchanged: `JENA31`, `JENA31DW1`, `JENA31_DUAL`.

---

## 6. G5 — Methodology body prose +10%

| Element | Before | After | Include? |
|---------|--------|-------|----------|
| Page title (`h1`) | `text-xl sm:text-2xl` | unchanged | No |
| Body prose (`p`, `li`, `ol`) | `text-sm` (14px) | **15.4px** (`text-[15.4px]`) | **Yes** |
| Section headings (`text-xs uppercase`) | 12px | unchanged | No |
| `FormulaBlock` / equations | `text-xs` mono | unchanged | No |
| JSON paths / `code` in method panels | `text-xs` mono | unchanged | No |
| Route link buttons | `text-sm` | unchanged | No |

Apply via wrapper class `methodology-prose` on `Methodology.tsx` root content (cards inherit).

---

## 7. Phase G2 — Light mode (G6)

### Behaviour

| Setting | Value |
|---------|-------|
| **Default** | Dark on first visit |
| **Toggle** | Header (≥ sm) + sidebar footer — replaces static “Dark theme” badge |
| **Persistence** | `localStorage` key `hr-theme:mode` (`dark` \| `light`) |
| **FOUC guard** | Inline script in `index.html` sets `data-theme` before React mount |

### Token architecture

- `[data-theme="dark"]` and `[data-theme="light"]` on `<html>`
- Semantic tokens (`--bg`, `--surface`, `--accent`, risk colours, etc.) swap per theme
- Shared derived tokens: `--scrim`, `--overburden-zone-fill`, `--track-fluor`, `--sticky-col-shadow`, `--metric-bg-alpha`
- `color-scheme` set per theme for native controls

### Light geoscience palette

Muted blue-grey surfaces (`#e9eef3` bg, white cards), slate text (`#1a2332`), sky accent (`#0369a1`), readable risk reds/ambers/greens. Chart/track hardcoded rgba replaced with theme tokens where needed.

### Files (Phase G2)

| File | Change |
|------|--------|
| `site/src/styles/tokens.css` | Light + dark token sets |
| `site/src/lib/theme.ts` | Storage + apply helpers |
| `site/src/hooks/useTheme.ts` | React hook |
| `site/src/components/ThemeToggle.tsx` | Sun/moon toggle button |
| `site/src/components/AppShell.tsx` | Toggle in header + sidebar |
| `site/index.html` | Early theme init script |
| `site/src/main.tsx` | `initTheme()` |
| `site/src/index.css` | Sticky shadow token |
| `site/tailwind.config.js` | `shadow-card` → CSS var |

---

## 8. Files to touch (Phase 1)

| File | Change |
|------|--------|
| `site/src/lib/histogram.ts` | Stats helpers + mode from bins |
| `site/src/lib/histogram.test.ts` | **New** unit tests |
| `site/src/lib/jaccardRanking.ts` | `rankDepthBinnedJaccardAnalogs` |
| `site/src/components/executive/DistributionHistogramPanel.tsx` | Stats table |
| `site/src/components/DepthTracks.tsx` | Click handler + `onDepthSelect` |
| `site/src/components/DataTable.tsx` | Highlight + scroll |
| `site/src/pages/WellDetail.tsx` | Wire depth select |
| `site/src/pages/CompareInterWell.tsx` | Synced mode + expandable Jaccard |
| `site/src/components/ClusterAnalogCards.tsx` | Expandable lists |
| `site/src/components/ExpandableRankingList.tsx` | **New** shared UI |
| `site/src/pages/Methodology.tsx` | `methodology-prose` class |
| `docs/qol-design/README.md` | Index entry |

---

## 9. Acceptance checklist

### Phase 1
- [ ] Histogram stats table updates on well/property change; `—` when empty.
- [ ] Log track click scrolls + highlights nearest interval row.
- [ ] Compare ranking mode syncs cards + heatmap; Jaccard expand shows all wells.
- [ ] Cluster cards expand to full cosine-ranked list.
- [ ] Methodology body prose ~15.4px; title and equations unchanged.
- [ ] `npm test && npm run build` pass.

### Phase G2 (light mode)

- [ ] Default theme is dark on first visit.
- [ ] Toggle switches light ↔ dark; choice persists across reloads.
- [ ] No flash of wrong theme on initial load (inline script).
- [ ] Primary text readable in both themes (contrast ≥ 4.5:1).
- [ ] Depth tracks, heatmaps, tables, assistant scrim use semantic tokens.
- [ ] `npm test && npm run build` pass.
