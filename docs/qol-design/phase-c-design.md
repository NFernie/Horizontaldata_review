# Phase C Design Specification — Executive Analog Concern Hub

**Project:** McKinlay Water-Risk Review  
**Phase:** C — Executive Summary on Portfolio (`/`)  
**Date:** 2026-07-14  
**Status:** Design complete — ready for implementation  
**Source plan:** `QoL-Updates-2026-07-13.md` §4  
**Prerequisite:** `docs/qol-design/phase-a-design.md` (tokens, `usePageState`, `MetricCell`, `StatTile`)  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md`  
**Design-system search:** `executive dashboard comparison analytics oil gas risk` → **Comparison Table + CTA** pattern + **Data-Dense Dashboard** style

> **Token policy:** Same as Phase A — retain dark geoscience tokens in `site/src/styles/tokens.css`. Map UI/UX Pro Max recommendations to existing `--risk-*`, `--accent`, `--surface*` vars. Keep Inter + JetBrains Mono.

---

## 0. Scope summary

| Goal | Answer for the user |
|------|---------------------|
| Where are concern zones? | Dual MD concern tracks per panel (Elevated + High intervals) |
| Which wells are similar? | Jaccard-ranked analog vs focus well (independent panels A & B) |
| Isolated vs open? | Isolation MD bands + isolated/non-isolated concern glyphs |

**Routing:** Option **B** — hero `ExecutiveSummary` section **above** existing portfolio table on `/` (no new route).

**Out of scope:** Phase B intersection viewer; flag-composition mini-bars (optional v2); production React in this document.

---

## 1. Full page wireframe — dual panels + portfolio strip + collapsed table

### 1.1 Desktop (≥ 1024px)

```
┌─ Portfolio Dashboard (/) ─────────────────────────────────────────────────────────────┐
│                                                                                      │
│ ┌─ Executive Summary (NEW — graphic-first hero) ──────────────────────────────────┐ │
│ │                                                                                  │ │
│ │  Executive Summary                                                               │ │
│ │  McKinlay Member — concern zones vs Jaccard analog wells (23 active wells)       │ │
│ │                                                                                  │ │
│ │ ┌─ ComparisonPanel A ─────────────────────────────────────────────────────────┐ │ │
│ │ │ Panel A   Focus [JENA 31 ▼]   Analog [STIMPEE 7 ▼]   Jaccard 1.00  [badge] │ │ │
│ │ │ ┌─ auto bullets (max 2) ───────────────────────────────────────────────────┐ │ │ │
│ │ │ │ • JENA 31: 32 elevated; 1 high; no mechanical isolation on file.         │ │ │ │
│ │ │ │ • vs STIMPEE 7 (J=1.00): 18 elevated; 0 high; no isolation bands.        │ │ │ │
│ │ │ └──────────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │ ┌─ Focus concern track ────────┐ ┌─ Analog concern track ──────────────────┐ │ │ │
│ │ │ │ MD ▶──────────────────────── │ │ MD ▶────────────────────────────────── │ │ │ │
│ │ │ │ ░░ isolation hatch (if any)  │ │ ░░ isolation hatch                     │ │ │ │
│ │ │ │ ○ ○ ● ○  (markers)           │ │ ○ ○ ○                                │ │ │ │
│ │ │ └──────────────────────────────┘ └───────────────────────────────────────┘ │ │ │
│ │ │ [Elevated 32] [High 1] [Isol. concerns 0] [Open concerns 33]  ← StatTiles   │ │ │
│ │ └──────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                  │ │
│ │ ┌─ ComparisonPanel B (independent — NOT paired with A) ────────────────────────┐ │ │
│ │ │ Panel B   Focus [JENA 31DW1 ▼]   Analog [BIALA 19 ▼]   Jaccard 0.80        │ │ │
│ │ │ (same internal layout as Panel A)                                            │ │ │
│ │ └──────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                  │ │
│ │ ┌─ PortfolioElevatedStrip ─────────────────────────────────────────────────────┐ │ │
│ │ │ Portfolio context — elevated intervals (all wells, sorted desc)              │ │ │
│ │ │ BIALA19 ████████████ 92   JENA31 ████ 32  …  [focus/analog highlighted]      │ │ │
│ │ └──────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                  │ │
│ │ ┌─ Legend (concern track) ─────────────────────────────────────────────────────┐ │ │
│ │ │ ■ Elevated  ■ High  ░ Isolation band  ● isolated concern  ○ open concern     │ │ │
│ │ └──────────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                                  │ │
│ │ [ Open Water-Risk Explorer ]    [ Full portfolio table ▼ ]                         │ │
│ └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                      │
│ ┌─ Existing PortfolioDashboard (below fold) ──────────────────────────────────────┐ │
│ │  Portfolio Dashboard  (h2 — demoted; same stat tiles + well table)               │ │
│ │  ▼ Full portfolio table  ← expanded when user opens accordion                    │ │
│ │  [DataTable — existing columns]                                                  │ │
│ └──────────────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Tablet (768–1023px)

- Comparison panels **stacked** (A above B), full width.
- Dual concern tracks remain **side-by-side within each panel** (50/50).
- Portfolio strip: horizontal scroll `overflow-x-auto`, min bar width 48px.

### 1.3 Mobile (< 768px) — see §7

- Focus track **above** analog track (stacked vertically per panel).
- Dropdowns full width.

### 1.4 Section hierarchy & spacing

| Region | Spacing token | Notes |
|--------|---------------|-------|
| Executive block bottom margin | `space-y-8` (32px) | Separates from legacy portfolio header |
| Between Panel A and B | `space-y-6` (24px) | |
| Inside panel | `p-4 sm:p-5` | `Card` wrapper |
| Concern tracks gap | `gap-3` | |
| Stat tiles | `grid grid-cols-2 gap-3` | 2×2 on mobile; `lg:grid-cols-4` on desktop |

### 1.5 Collapsed portfolio table behaviour

| State | UI |
|-------|-----|
| **Default (collapsed)** | Only executive hero + compact CTA row visible; portfolio stat tiles + table hidden behind `<details>` or accordion |
| **Expanded** | Reveals existing `PortfolioDashboard` stat grid + `DataTable` + data gaps + risk legend unchanged |
| **Trigger** | Button *“Full portfolio table ▼”* / *“Hide portfolio table ▲”* |
| **Persist** | `hr-page:/:portfolioTableExpanded` (§8) |
| **Deep link** | Optional hash `#portfolio-table` auto-expands on load |

**Implement pattern:** Extract table block into collapsible region; keep page title *“Portfolio Dashboard”* once at top (executive uses *“Executive Summary”* subheading).

---

## 2. WellSelect / AnalogSelect interaction spec

### 2.1 Components

| Control | Component | Base |
|---------|-----------|------|
| Focus well | `WellSelect` (reuse) | All active wells (`!data_missing`) |
| Analog well | **`AnalogSelect`** (new) | All active wells **except** current focus |

### 2.2 Panel defaults (first visit — no sessionStorage)

| Panel | Focus default | Analog default | Rationale |
|-------|---------------|----------------|-----------|
| **A** | `JENA31` | Top Jaccard rank for focus | QoL stakeholder narrative uses STIMPEE 7 among J=1.0 ties |
| **B** | `JENA31DW1` | Top Jaccard rank for focus | QoL narrative uses BIALA 19 when not tied at 1.0 |

**Analog resolution algorithm** (`getAnalogRanking(focus, jaccardPayload)`):

1. Build ranked list from `jaccard.matrix` + `aliases` (generalise beyond `jena_analog_ranking` precompute).
2. Sort by `jaccard` **descending**, then `display` name ascending.
3. Exclude `focus` alias.
4. **Tie-break at max Jaccard:** if `PREFERRED_ANALOG[focus]` is among ties, select it:
   ```ts
   PREFERRED_ANALOG = { JENA31: "STIMPEE7", JENA31DW1: "BIALA19" }
   ```
5. Else use `ranked[0].alias`.

**Live data note (2026-07-13 export):** `jena_analog_ranking.JENA31[0]` is `HOBBES5` (J=1.0); `JENA31DW1[0]` is `HOBBES6` (J=1.0). Tie-break yields **STIMPEE7** for Panel A; Panel B falls through to **HOBBES6** unless stakeholder reorders — document in UI that B default follows algorithm (implement agent: use tie-break map only where alias is in tie set; for JENA31DW1 prefer **BIALA19** only when user explicitly picks from dropdown, not as forced default over HOBBES6). **Design decision:** Panel B default analog = `HOBBES6` per rank[0] **or** allow product owner to set `PREFERRED_ANALOG.JENA31DW1 = "BIALA19"` only when J≥0.8 and in top 5 — **simpler: always rank[0] after tie-break prefs on max-J ties only.**

| Panel | Resolved default (with tie-break) |
|-------|-----------------------------------|
| A | `STIMPEE7` (among J=1.0 ties for JENA31) |
| B | `HOBBES6` (rank[0] at J=1.0) — *stakeholder copy examples may cite BIALA 19 (J=0.8)* |

### 2.3 Focus well change — reset rules

```
ON focusWell CHANGE:
  analogWell ← getAnalogRanking(newFocus)[0]   // full reset to top analog
  CLEAR any panel-local cached interval payloads for old pair
  RE-FETCH intervals/{focus}.json, intervals/{analog}.json
  UPDATE Jaccard badge from matrix[focus][analog]
  PERSIST sessionStorage keys for this panel
```

- User **never** sees self-comparison (analog options exclude focus).
- Changing Panel A focus does **not** affect Panel B (independent state).

### 2.4 AnalogSelect option labels

```
{display} — J = {jaccard.toFixed(2)}
```

Examples:

- `STIMPEE 7 — J = 1.00`
- `BIALA 19 — J = 0.80`

Sort options same as ranking (desc J, asc name). Current selection always valid; if focus change invalidates analog, apply reset rule.

### 2.5 Jaccard similarity badge (header)

Pill next to dropdowns:

```
┌─────────────────────┐
│ Jaccard 1.00        │  border-accent/40 bg-accent/10 text-accent font-mono text-xs
└─────────────────────┘
```

Optional subtitle (tooltip or `title`): shared features from `jaccard.feature_sets[focus] ∩ feature_sets[analog]` — e.g. *"Shared: good_rock, matching_pay, loose_hardness"*.

### 2.6 Data sources

| Field | JSON path |
|-------|-----------|
| Active wells | `wells.json` → `wells[]` where `!data_missing` |
| Jaccard matrix | `stats/jaccard.json` → `matrix`, `aliases` |
| Precomputed ranks (fallback) | `stats/jaccard.json` → `jena_analog_ranking` |
| Feature sets | `stats/jaccard.json` → `feature_sets.{alias}` |
| Interval concerns | `intervals/{alias}.json` → `intervals[]`, `isolation_depths[]` |

### 2.7 Auto bullets (max 2 per panel)

Template-driven, no LLM:

**Bullet 1 — focus well**

> `{display}: {elevatedCount} elevated intervals; {highCount} high; {isolationCopy}.`

| `isolationCopy` | Condition |
|-----------------|-----------|
| `no mechanical isolation on file` | `isolation_depths.length === 0` |
| `{n} isolation band(s) on file` | `n = isolation_depths.length` |

**Bullet 2 — analog comparison**

> `vs {analogDisplay} (J={jaccard}): {elevatedCount} elevated; {isolatedConcernCount} isolated concern zones{mdRange}.`

| `mdRange` | Condition |
|-----------|-----------|
| empty | no isolated concerns |
| ` at {top}–{bot} m MD` | span of isolated concern intervals (min top – max bot) |

Use live counts from interval aggregation (§4), not stale `wells.json` alone.

---

## 3. MD concern track visual design

### 3.1 Component: `ConcernMdTrack`

New lightweight **horizontal** SVG (not full `DepthTracks` vertical plot). One track per well column inside a comparison panel.

**Dimensions**

| Prop | Desktop | Mobile |
|------|---------|--------|
| Track width | `100%` of column (min 280px) | 100% |
| Track height | 56px plot + 24px MD axis | same |
| Marker hit area | 12×12px min | 16×16px touch |

### 3.2 X-axis — normalized lateral MD

Use **normalized lateral position** so focus and analog are comparable by shape:

```
normMd = (intervalMidMd - dc30) / (td - dc30)   // clamp 0..1
x = padding + normMd * plotWidth
```

`dc30` / `td` from `wells.json` for each well. Axis ticks: `0%`, `25%`, `50%`, `75%`, `100%` lateral. Tooltip shows **absolute MD** and `display`.

> **Alternative (v2):** absolute MD axis per well with independent scales — defer; normalized preferred for analog comparison.

### 3.3 Concern markers

Filter intervals: `risk_class === 'Elevated' || risk_class === 'High'`.

| Risk class | Marker | Size | Fill / stroke |
|------------|--------|------|----------------|
| **Elevated** | Circle | r=5px | `fill: var(--risk-elev)`; `stroke: var(--surface)` 1.5px |
| **High** | Circle | r=6px | `fill: var(--risk-high)`; `stroke: var(--surface)` 1.5px |

**Isolated vs open concern** (glyph overlay on same marker):

| State | Glyph | SVG |
|-------|-------|-----|
| **Isolated concern** | Filled disc + inner dot | `isolated === true` → add `circle r=2 fill=var(--text)` centered |
| **Open concern** | Hollow ring | `isolated === false` → `fill=none`; `stroke` = risk colour; `stroke-width=2` |

Legend symbols: **●** isolated concern, **○** open concern (matches Well Detail isolation copy).

### 3.4 Isolation band hatching

Render **behind** markers from `intervals/{alias}.json` → `isolation_depths[]`:

| Property | Value |
|----------|-------|
| Geometry | `rect` from `normMd(top_md)` to `normMd(bot_md)` full track height |
| Fill | `repeating-linear-gradient( -45deg, transparent, transparent 3px, rgba(147,161,176,0.25) 3px, rgba(147,161,176,0.25) 6px )` |
| Base wash | `rgba(147,161,176,0.12)` — aligns with overburden grey in `DepthTracks` legend |
| Border | `1px solid rgba(147,161,176,0.35)` left/right edges |
| z-index | Bottom layer (markers z=2) |

**Reference well:** `MCKINLAY10` — band `1650–1700 m MD`; several intervals `isolated: true` inside band.

**No isolation:** omit hatch layer; optional faint baseline `var(--border)` only.

### 3.5 Hover / focus tooltip

On marker hover or keyboard focus:

```
{depth} m MD · {risk_class} · WRCI {wrci} · {isolated ? "Isolated" : "Open"}
Flags: {flags.join(", ") || "—"}
```

`role="img"` on SVG with `aria-label` summary: *"{display}: {n} concern zones along lateral"*.

### 3.6 Track chrome

```
┌─ Focus — JENA 31 ────────────────────────────────┐
│ ░░░░ isolation 1650–1700 m MD (hatch)              │
│    ○    ●    ○         ○              ← markers   │
│ 0%───────────50%───────────100% lateral           │
└────────────────────────────────────────────────────┘
```

Header: well `display` + small alias mono muted.

### 3.7 Dual-track layout within panel

```
┌──────────────────────┬──────────────────────┐
│   Focus track        │   Analog track       │
│   (selected focus)   │   (selected analog)  │
└──────────────────────┴──────────────────────┘
```

Shared legend below **both** panels (executive level), not per panel.

---

## 4. Stat tile definitions (4 per panel)

Reuse `StatTile` from `site/src/components/StatTile.tsx`. Aggregate from `intervals/{alias}.json` for **focus well only** (analog metrics appear in bullets + track, not duplicate tiles).

| # | Label | Value | Variant | Aggregation |
|---|-------|-------|---------|-------------|
| 1 | **Elevated** | count | `risk` | `intervals.filter(i => i.risk_class === 'Elevated').length` |
| 2 | **High** | count | `risk` | `intervals.filter(i => i.risk_class === 'High').length` |
| 3 | **Isolated concerns** | count | `accent` | concern zones (`Elevated` \| `High`) where `isolated === true` |
| 4 | **Open concerns** | count | `default` | concern zones where `isolated === false` |

**Hints (optional, below value):**

| Tile | Hint text |
|------|-----------|
| Elevated | `risk_class Elevated` |
| High | `risk_class High` |
| Isolated concerns | `Mechanically isolated` |
| Open concerns | `Not behind isolation` |

**Example — JENA31 (live export):** Elevated 32, High 1, Isolated concerns 0, Open concerns 33 (verify at build time).

**Example — MCKINLAY10:** Isolated concerns > 0 inside `1650–1700 m` band.

Grid: `grid grid-cols-2 lg:grid-cols-4 gap-3` below tracks.

---

## 5. Colour legend and portfolio strip highlight rules

### 5.1 Executive concern legend

Reuse `Legend` component. Items:

| Swatch | Label | Token / style |
|--------|-------|----------------|
| ● filled amber | Elevated concern | `var(--risk-elev)` |
| ● filled red | High concern | `var(--risk-high)` |
| ░ hatched grey | Isolation MD band | hatch §3.4 |
| ● with center dot | Isolated concern | marker §3.3 |
| ○ ring | Open concern | hollow marker §3.3 |
| Accent outline | Selected focus/analog on strip | `var(--accent)` |

### 5.2 `PortfolioElevatedStrip`

Horizontal ranked bar chart — **all 23 active wells** by `elevated_risk_count` descending (ties: `display` asc).

**Bar**

| Property | Value |
|----------|-------|
| Height | 20px (sm: 16px) |
| Fill (default) | `color-mix(in srgb, var(--risk-elev) 55%, var(--surface-2))` |
| Fill (highlight) | `color-mix(in srgb, var(--accent) 70%, var(--surface-2))` |
| Border (highlight) | `2px solid var(--accent)` |
| Border (default) | `1px solid var(--border)` |
| Width | proportional to `elevated_risk_count / maxCount` min 4px |

**Highlight set** (union across both panels):

```
highlightAliases = { panelA.focus, panelA.analog, panelB.focus, panelB.analog }
```

| Role | Example aliases |
|------|-----------------|
| Panel A focus | `JENA31` |
| Panel A analog | `STIMPEE7` |
| Panel B focus | `JENA31DW1` |
| Panel B analog | `HOBBES6` (or user selection) |

**Label:** well `display` below bar (rotated 0°; truncate with `title` tooltip). Count at end: mono `32`.

**Row header:** *Portfolio context — elevated intervals by well*

**Click (optional v2):** click bar → set nearest panel focus to that well — **skip v1**.

### 5.3 CTA styling

| Button | Style | Action |
|--------|-------|--------|
| Open Water-Risk Explorer | `border-accent bg-accent/10 text-accent` (primary) | `writeStoredWaterRiskLeft(panelA.focus)`; `writeStoredWell(panelA.focus)`; navigate `/water-risk` |
| Full portfolio table | ghost border | toggle accordion §1.5 |

---

## 6. Empty states

### 6.1 No concern zones (focus or analog)

When `concernIntervals.length === 0` for a track:

```
┌─ Focus — JENA 31 ─────────────────────────────────────┐
│  (empty track — dashed border var(--border))            │
│         No elevated or high-risk intervals              │
│         text-sm text-text-muted centered                │
└─────────────────────────────────────────────────────────┘
```

- Stat tiles all **0** with hints unchanged.
- Bullet still renders: *"0 elevated; 0 high; …"*
- Analog side may have concerns while focus empty — panels independent.

### 6.2 No isolation on file

When `isolation_depths.length === 0`:

- No hatch layer on track.
- Inline muted caption under track header: *"No mechanical isolation on file"* (matches JENA31).
- Do **not** show empty hatch placeholder.

### 6.3 Isolation bands but no isolated concerns

Possible (e.g. open concerns only outside bands): show hatch; isolated-concern tile = 0; open-concern tile > 0.

### 6.4 Missing interval JSON / load error

Card-level error inside panel:

> Unable to load interval data for **{display}**.  
> `text-risk-high` message; retry button optional.

### 6.5 No analog available

Impossible with ≥2 active wells; if only one well, hide executive section entirely (fallback to legacy portfolio).

---

## 7. Mobile layout (< 768px)

| Element | Behaviour |
|---------|-----------|
| Panel order | A → B stacked |
| Dropdowns | `w-full` — Focus and Analog stack vertically `gap-3` |
| Concern tracks | **Stack focus above analog** (`flex-col gap-4`), each track full width |
| Stat tiles | `grid-cols-2` (2×2) |
| Portfolio strip | `overflow-x-auto` with `snap-x`; bars min-width 56px |
| Jaccard badge | Below dropdowns, left-aligned |
| Auto bullets | Full width, `text-sm` |
| CTA row | Stack buttons `w-full`; primary first |
| Touch targets | Dropdowns ≥44px height; markers §3.2 16px hit area |
| Legend | Wrap items; 2 columns |

```
┌─ Panel A (mobile) ──────────────┐
│ Focus [ JENA 31          ▼ ]    │
│ Analog [ STIMPEE 7       ▼ ]    │
│ Jaccard 1.00                    │
│ • bullets…                      │
│ ┌─ Focus track ───────────────┐ │
│ └─────────────────────────────┘ │
│ ┌─ Analog track ──────────────┐ │
│ └─────────────────────────────┘ │
│ [Elevated] [High]               │
│ [Isol.]    [Open]               │
└─────────────────────────────────┘
```

---

## 8. sessionStorage keys (panel focus / analog)

Extend Phase A `usePageState` / `usePersistedState` on route `/`:

| Key | Type | Default | Purpose |
|-----|------|---------|---------|
| `hr-page:/:execPanelA:focus` | `string` (alias) | `JENA31` | Panel A focus well |
| `hr-page:/:execPanelA:analog` | `string` (alias) | `STIMPEE7`* | Panel A analog well |
| `hr-page:/:execPanelB:focus` | `string` (alias) | `JENA31DW1` | Panel B focus well |
| `hr-page:/:execPanelB:analog` | `string` (alias) | rank[0]** | Panel B analog well |
| `hr-page:/:portfolioTableExpanded` | `boolean` | `false` | Accordion state |
| `hr-page:/:scrollY` | `number` | `0` | Page scroll (Phase A) |

\* After tie-break among J=1.0 analogs for JENA31.  
\** `getAnalogRanking(JENA31DW1)[0]` → `HOBBES6` in current export.

**Validation on load:** If stored alias missing or `data_missing`, fall back to defaults. If stored analog === focus, reset analog via §2.3.

**Water-Risk CTA integration** (existing keys — do not rename):

| Key | Set on CTA click |
|-----|------------------|
| `hr-water-risk-left` | Panel A focus (or last interacted panel — **use Panel A focus**) |
| `hr-selected-well` | Same alias |
| `hr-water-risk-right` | Panel A analog (optional: second CTA *"Compare in Water-Risk"* — **v1: left only**) |

---

## 9. Component inventory

| Component | New? | Responsibility |
|-----------|------|----------------|
| `ExecutiveSummary` | **New** | Hero wrapper; fetches jaccard + wells; composes panels + strip |
| `ComparisonPanel` | **New** | Panel A/B shell: dropdowns, badge, bullets, tracks, tiles |
| `AnalogSelect` | **New** | Well select with Jaccard scores; excludes focus |
| `ConcernMdTrack` | **New** | Horizontal SVG concern + isolation viz |
| `PortfolioElevatedStrip` | **New** | Ranked elevated-count bars + highlights |
| `getAnalogRanking()` | **New** `lib/jaccardRanking.ts` | Matrix-based rank for any focus |
| `aggregateConcernStats()` | **New** `lib/concernZones.ts` | Tile + bullet aggregations |
| `WellSelect` | Reuse | Focus well |
| `StatTile` | Reuse | Four tiles per panel |
| `Legend` | Reuse | Executive + existing portfolio legend |
| `Card` | Reuse | Panel chrome |
| `PortfolioDashboard` | **Extend** | Mount `ExecutiveSummary` above; collapsible table |

---

## 10. Accessibility

| Area | Requirement |
|------|-------------|
| Dropdowns | Native `<select>` or listbox with `aria-label` *"Panel A focus well"* |
| Concern track | SVG `role="img"` + descriptive `aria-label`; markers focusable (`tabIndex={0}`) |
| Colour | Risk distinction uses **size + fill pattern** (solid vs ring), not colour alone |
| Contrast | Marker fills on `--surface` — `--risk-elev` / `--risk-high` already WCAG-tested in Phase A |
| Motion | No animated bar transitions when `prefers-reduced-motion` |
| Strip | Highlight uses border + fill shift, not colour alone |

---

## 11. Implementation checklist

- [ ] `lib/jaccardRanking.ts` — generalised ranking + tie-break
- [ ] `lib/concernZones.ts` — filters + aggregations
- [ ] `ConcernMdTrack.tsx` — SVG + tooltips
- [ ] `AnalogSelect.tsx`
- [ ] `ComparisonPanel.tsx`
- [ ] `PortfolioElevatedStrip.tsx`
- [ ] `ExecutiveSummary.tsx`
- [ ] Integrate into `PortfolioDashboard.tsx` with collapsible table
- [ ] Wire `usePersistedState` keys §8
- [ ] Water-Risk CTA writes `useWellSelection` keys
- [ ] `npm test && npm run build`
- [ ] Verify MCKINLAY10 isolation hatch + JENA31 empty isolation

---

## 12. What to expect (after implementation)

Opening the portfolio page shows a **graphic executive summary** first: two independent Jena-focused comparisons against Jaccard analogs, with **side-by-side concern tracks** along the lateral, **isolation hatching** where on file, and **four stat tiles** per panel. A **portfolio strip** ranks all wells by elevated count and highlights your current selections. The full well table stays **one click away**, collapsed by default. Choices persist in **sessionStorage** when you navigate away and return.

---

## Appendix A — Live data reference (2026-07-13 export)

| Well | `elevated_risk_count` | `high_risk_count` | `isolation_depths` |
|------|----------------------|-------------------|---------------------|
| JENA31 | 32 | 1 | `[]` |
| JENA31DW1 | 17 | 1 | `[]` |
| STIMPEE7 | (see intervals) | — | — |
| BIALA19 | 92 | 3 | — |
| MCKINLAY10 | — | — | `[{top_md:1650, bot_md:1700}]` |

| Focus | Top analogs (Jaccard) |
|-------|----------------------|
| JENA31 | HOBBES5 1.0, STIMPEE7 1.0, MCKINLAY10–12 1.0 |
| JENA31DW1 | HOBBES6 1.0, MCKINLAY21 1.0, STIMPEE6 1.0, BIALA19 0.8 |

---

## Appendix B — Design-system search (abbreviated)

**Pattern:** Comparison Table + CTA — comparison to show value; highlight selected row; CTA below table.  
**Style:** Data-Dense Dashboard — KPI cards, minimal padding, grid layout.  
**Effects:** Hover tooltips, row highlighting, smooth filter animations.  
**Avoid:** Ornate design; missing filtering.

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "executive dashboard comparison analytics oil gas risk" \
  --design-system -p "McKinlay Executive Summary"
```
