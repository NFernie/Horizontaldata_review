# Compare KS Matrix — Design Specification

**Date:** 2026-07-16  
**Route:** `/compare` (Method 5 Part B — Kolmogorov–Smirnov significance)  
**UI skill:** `.cursor/skills/ui-ux-pro-max/SKILL.md`  
**Design-system search:** `data table drawer panel analytics geoscience dashboard` → **McKinlay Compare KS** (data-dense dashboard, status heatmap cells, drawer pattern)

---

## 1. Scope

| In scope | Out of scope |
|----------|--------------|
| KS significance grids on `/compare` | Pipeline / `ks.json` regeneration |
| Client-side analog ranking from existing `ks.json` | Jaccard / clustering sections |
| Three focus-well cards + top-8 grid + drawer for ranks 9..N | Portfolio column in drawer |

**No pipeline changes.** Ranking is computed in `lib/ksRanking.ts` at runtime.

---

## 2. Stakeholder decisions (locked)

| # | Decision | Spec |
|---|----------|------|
| 1.a | Ranking metric | `mean_p = mean(p_value)` across `KS_PROPERTIES` present per analog |
| 2.a | Sort order | Descending `mean_p` — **higher p = more similar** = best match left |
| 3 | Analog pool | All keys in `vs_analogs`, **excluding** `JENA31`, `JENA31DW1`, `JENA31_DUAL` |
| 4.a | Portfolio column | Always visible on **main grid** (column 9); not part of top-8 ranking |
| 5.a | Overflow UI | Right-side slide-out drawer for ranks 9..N |
| 6.b | Focus wells | Three cards: `JENA31`, `JENA31DW1`, `JENA31_DUAL` |
| 7 | Column headers | Rank + display name, e.g. `#1 HOBBES 5` |

### Tie-breakers

1. Higher `mean_p` wins  
2. If tied, **lower** `mean_d` (mean D across properties used)  
3. If still tied, alphabetical `alias` ascending  

### `sigCount`

Count of properties (among those used in `mean_p`) where `p_value < 0.05` — shown in header tooltip only; not used for sorting.

---

## 3. Ranking algorithm

```ts
rankKsAnalogs(data, focusAlias, excludeAliases): RankedAnalog[]

interface RankedAnalog {
  alias: string;
  rank: number;      // 1-based after sort
  meanP: number;
  meanD: number;
  sigCount: number;
}
```

For each analog in `data[focusAlias].vs_analogs`:

- Skip if `alias === focusAlias` or `alias ∈ excludeAliases`
- Collect `p_value` and `D` for each `KS_PROPERTIES` entry present in the cell map
- Skip analog if zero properties present
- `meanP` = arithmetic mean of p-values; `meanD` = arithmetic mean of D values
- Sort descending `meanP`, then ascending `meanD`, then `alias`
- Assign `rank` 1..N

### Expected top-1 (live `ks.json`, Jul 2026)

| Focus | #1 analog | mean_p (approx) |
|-------|-----------|-----------------|
| JENA31 | HOBBES5 | 0.184 |
| JENA31DW1 | FROSTILLICUS2 | 0.248 |
| JENA31_DUAL | STIMPEE6 | 0.216 |

---

## 4. Layout — main grid (per focus card)

```
┌─ KS significance — JENA 31 ─────────────────────────────────────────────┐
│ Ranked by mean KS p-value (higher = more similar distributions)          │
│                                                                          │
│  Property   │ #1 HOBBES 5 │ #2 BIALA 20 │ … │ #8 MCK 14 │ Portfolio   │
│  ───────────┼─────────────┼─────────────┼───┼───────────┼─────────────│
│  pct_ss     │  D / p      │  D / p      │   │  D / p    │  D / p      │
│  …          │             │             │   │           │             │
│                                                                          │
│  [ All analogs (13) ]  ← drawer trigger (hidden if ≤8 analogs total)     │
│                                                                          │
│  Kolmogorov–Smirnov two-sample test … Warm cells = p < 0.05              │
└──────────────────────────────────────────────────────────────────────────┘
```

- **Columns 1–8:** top 8 ranked analogs (#1 leftmost)
- **Column 9:** Portfolio (`vs_portfolio`) — always last
- **Rows:** `KS_PROPERTIES` (unchanged)
- **Cells:** D (3 dp) + p (scientific notation); heatmap via existing `significanceColor`

### Column header format

```
#{rank} {displayName}
```

- Display name from `wells.json`; fallback to alias
- Abbreviate `MCKINLAY` → `MCK` in header label (space)
- `title` tooltip: `mean p=0.184 · 2 sig. diffs` (meanP 3 dp, sigCount)

---

## 5. Slide-out drawer

| Aspect | Spec |
|--------|------|
| Trigger | Button `All analogs (N)` where N = count of analogs ranked 9..N |
| Visibility | Show trigger only when `totalAnalogs > 8` |
| Pattern | Right overlay panel (mirror `AssistantPanel`); **not** a centred modal |
| Scrim | `var(--scrim)`; click closes |
| Width | `max-w-4xl` (wider than assistant — table-heavy) |
| Content | Same `KsGrid` structure for analogs ranked 9..N; **no Portfolio column** |
| Close | X button, Escape, scrim click |
| Mobile | Full-width drawer (`w-full`) |
| Animation | `translate-x` 200ms; `motion-reduce:transition-none` |
| Focus | Focus close button on open; Tab cycles within drawer (focus trap) |
| State | **Default closed**; no sessionStorage persistence |

### Drawer wireframe (open)

```
[ scrim ] │ ┌─ Analogs 9–21 — JENA 31 ───────────── [×] ┐
          │ │ Same property rows, columns = rank 9..N    │
          │ │ (no Portfolio)                           │
          │ └──────────────────────────────────────────┘
```

**Decision:** Portfolio appears **only** on the main grid to avoid duplication.

---

## 6. Component plan

| File | Action |
|------|--------|
| `site/src/lib/ksRanking.ts` | **New** — `rankKsAnalogs`, `formatKsColumnHeader` |
| `site/src/lib/ksRanking.test.ts` | **New** — fixture + live ordering checks |
| `site/src/components/KsGrid.tsx` | **Modify** — ranked analog list, rank headers, optional portfolio |
| `site/src/components/KsRankedAnalogPanel.tsx` | **New** — Card wrapper + drawer per focus well |
| `site/src/pages/CompareInterWell.tsx` | **Modify** — three KS panels; remove `jaccard` analog slice hack |
| `docs/qol-design/README.md` | Index entry |

### `KsGrid` props (updated)

```ts
interface KsGridProps {
  data: KsPayload;
  focusAlias: string;
  rankedAnalogs: RankedAnalog[];
  displayNames?: Record<string, string>;
  showPortfolio?: boolean;        // default true
  showRankInHeader?: boolean;     // default true
  className?: string;
}
```

### `KsRankedAnalogPanel` props

```ts
interface KsRankedAnalogPanelProps {
  focusAlias: string;
  focusTitle: string;
  data: KsPayload;
  displayNames: Record<string, string>;
  excludeAliases: readonly string[];
}
```

---

## 7. Data bindings

| Source | Use |
|--------|-----|
| `site/public/data/stats/ks.json` | `vs_analogs`, `vs_portfolio` per focus |
| `site/public/data/wells.json` | Display names |
| `site/src/config.ts` | `KS_PROPERTIES`, `JENA31_DUAL_ALIAS`, `KS_FOCUS_ALIASES` |

### Focus wells constant (page-level)

```ts
const KS_FOCUS_WELLS = [...KS_FOCUS_ALIASES, JENA31_DUAL_ALIAS] as const;
const KS_EXCLUDE_ANALOGS = [...KS_FOCUS_ALIASES, JENA31_DUAL_ALIAS] as const;
```

---

## 8. Accessibility

| Element | Requirement |
|---------|-------------|
| Drawer trigger | `aria-expanded`, `aria-controls={drawerId}` |
| Drawer panel | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Close button | `aria-label="Close analog list"` |
| Table | `scope="col"` / `scope="row"`; header `title` for mean p |
| Motion | Respect `prefers-reduced-motion` on drawer slide |

---

## 9. Visual tokens (UI/UX Pro Max)

- Reuse `site/src/styles/tokens.css` semantic colours
- Table: `text-xs` cells (Phase E); header `text-text-muted`
- Significance heatmap: unchanged thresholds (`p < 0.01` high, `p < 0.05` elevated)
- Drawer: `bg-bg`, `border-border`, `shadow-card` — match `AssistantPanel`
- Trigger button: `text-sm font-medium text-accent` link-style or bordered button consistent with Compare expand controls

---

## 10. Acceptance checklist

- [ ] Three KS cards: JENA31, JENA31DW1, JENA31_DUAL
- [ ] JENA31 #1 = HOBBES5 (not any Jena well)
- [ ] JENA31DW1 top-8 ≠ JENA31 top-8 (e.g. FROSTILLICUS2 #1 on DW1)
- [ ] Portfolio column on all three main grids
- [ ] Drawer lists ranks 9..N in same order; no Portfolio in drawer
- [ ] No Jena well as analog column on any card
- [ ] `npm test && npm run build` pass
- [ ] Jaccard section unchanged
