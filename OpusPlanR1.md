# OpusPlanR1 — Statistical Well Comparison & Water-Risk Static Site

**Author:** Opus (planning pass R1)
**Repo:** `NFernie/Horizontaldata_review`
**Primary objective:** Identify **high-risk water zones** in **Jena 31** and **Jena 31DW1**, and provide inter-well / intra-well statistical comparison across all 17 McKinlay-Member horizontal wells.
**Deliverable of this doc:** An execution-ready plan that **Composer** can implement end-to-end (data pipeline + statistics + React/Tailwind static site deployed to GitHub Pages).

> **Scope note for the executor (Composer):** This plan is self-contained. Every phase lists concrete file paths, commands, and acceptance criteria. Do not invent new formation logic — reuse the existing `classify_tops` / `exclusion_zones` from `scripts/process_mckinlay_wells.py`. Overburden-excluded intervals must be excluded from every statistic below.

---

## 0. Context: what the data gives us

The Python pipeline already produces, per retained McKinlay interval (`results` items in `process_mckinlay_wells.py`):

| Field | Meaning | Water-risk relevance |
|-------|---------|----------------------|
| `depth`, `top`, `bot` | Interval MD (m) | Zonation |
| `pct_ss` | % Sandstone | Rock quality (higher = better) |
| `pct_slt` | % Siltstone (`100 − pct_ss`) | Inverse rock quality |
| `grain`, `max_grain` | Grain-size text (`vf`, `f`, `m`, `c`, `vc`) | Coarser = better reservoir |
| `fluor` | % Fluorescence | Low over good rock = **red flag #3** |
| `bright` | Fluorescence brightness | Hydrocarbon indicator |
| `gas` | Total gas (units) | Show quality |
| `fec03_slt`, `fec03_sst` | Siderite | Cementation |
| `long_desc` | Full cuttings description text | Source for **loose grains**, **porosity (fr-gd)** parsing |
| `log.avg_GR` | Mean gamma ray (gAPI) | Low GR = cleaner sand (**red flag #1**) |
| `log.avg_RES_DEEP` | Mean deep resistivity | `< 20 ohm.m` over good rock = **red flag #2** |
| `log.avg_RES_SHALLOW` | Mean shallow resistivity | Used for separation |
| `log.res_sep` | `RES_DEEP − RES_SHALLOW` | **Permeability proxy** (large = high perm, **red flag #1**) |
| `perm` | Qualitative perm label | Human-readable proxy |

**Two known data-quality issues the plan must fix first (Phase 1):**

1. **LAS curve-order fragility.** `parse_las()` assumes a fixed column order `[DEPT, GR, RES_DEEP, RES_MED, RES_SHALLOW]`. Several files (`Biala_20`, `Biala_21`, and all `*_GOLD` variants: `Biala_19`, `Frosti_2`, `Hobbes_5`, `Hobbes_6`, `Jena_31DW1`, `Stimpee_6`, `Teringie_6`) have **different curve orders**. This silently mis-maps GR/RES and would corrupt every resistivity-based statistic — **must be fixed before statistics are trusted**, and Jena 31DW1 is directly affected.
2. **No structured export.** Scripts emit Markdown only. The site needs JSON.

---

## 1. Five statistical methods for well comparison

Each method below states: **type** (intra/inter), **inputs**, **formula/method**, **output**, and **how it maps to the water-risk objective**. All operate only on non-excluded McKinlay intervals.

### 1.1 Water-Risk Composite Index (WRCI) — *intra-well, per-interval*

The foundational scoring layer. Encodes the three red-flag families into a continuous 0–100 index plus categorical flags.

**Step A — Rock Quality Index (RQI), 0–1 per interval** (blend of "good quality rock" signals):

```
RQI = w1·norm(pct_ss)            # high sandstone
    + w2·norm(grain_ordinal)     # coarse grain (vf=1…vc=5, use max_grain when present)
    + w3·norm(1 − GR_scaled)     # low GR (clean sand)
    + w4·porosity_score          # fr-gd+ parsed from long_desc  (poor=0, p-fr=.33, fr=.5, fr-gd=.75, gd=1)
    + w5·loose_grain_flag        # "lse grn"/"loose grain" present in text → 1
```
Default weights `w = [0.30, 0.25, 0.20, 0.15, 0.10]` (documented + configurable). `norm()` is min–max within the well (robust: clip to P5–P95).

**Step B — Red-flag booleans (only meaningful where RQI ≥ 0.6, i.e. "good rock"):**

| Flag | Condition | Red flag # |
|------|-----------|-----------|
| `flag_highperm` | `res_sep ≥ P75(res_sep)` (well-relative) AND RQI ≥ 0.6 | 1 |
| `flag_lowres` | `avg_RES_DEEP < 20` AND RQI ≥ 0.6 | 2 |
| `flag_lowfluor` | `fluor < 75` AND RQI ≥ 0.6 | 3 |

**Step C — WRCI (0–100):**
```
WRCI = 100 · ( a·RQI + b·highperm_norm + c·lowres_severity + d·lowfluor_severity )
where lowres_severity  = clamp((20 − RES_DEEP)/20, 0, 1)
      lowfluor_severity = clamp((75 − fluor)/75, 0, 1)
      highperm_norm     = norm(res_sep)
      a,b,c,d default 0.4,0.2,0.2,0.2
```
A zone is **High water risk** when WRCI ≥ 66 and ≥2 flags set; **Elevated** when WRCI 40–66 or 1 flag; else **Low**.

**Output:** per-interval `{RQI, res_sep, flags[], WRCI, risk_class}`.
**Objective mapping:** This is the primary Jena 31 / 31DW1 deliverable — a depth-ordered list of flagged water-risk zones with the reasoning (which flags fired).

---

### 1.2 Robust Z-score anomaly detection — *intra-well*

Find intervals that are statistically anomalous **within their own well** for each key measurement.

**Method:** For each metric `m ∈ {res_sep, avg_RES_DEEP, avg_GR, pct_ss, fluor, grain_ordinal}` compute the **modified z-score** using median & MAD (robust to outliers):
```
z_i = 0.6745 · (x_i − median(x)) / MAD(x)
```
Flag `|z| > 3.5` as anomalies. Cross-tabulate: an interval that is **anomalously high res_sep + anomalously low RES_DEEP + high pct_ss** is a textbook water-zone signature.

**Output:** anomaly table per well; per-interval z-vector for the depth-track heat shading.
**Objective mapping:** Surfaces subtle zones the fixed WRCI thresholds miss; complements 1.1.

---

### 1.3 Spearman rank-correlation matrix — *intra-well*

Quantify relationships between petrophysical variables within each well (rank-based; robust to non-linearity & text-derived ordinals).

**Method:** Spearman ρ over interval-level vectors of `{pct_ss, grain_ordinal, avg_GR, res_sep, avg_RES_DEEP, fluor, gas}`. Report ρ and p-value (n = interval count).

**Key diagnostic:** A **positive** RQI↔res_sep correlation but **negative/weak** res_sep↔RES_DEEP (or RQI↔fluor) indicates **good, permeable rock that is not hydrocarbon-charged** → water. Validates whether the `res_sep` perm proxy behaves as expected per well.

**Output:** 7×7 correlation heatmap per well + a "decoupling score" (RQI–resistivity correlation) used to rank wells.
**Objective mapping:** Explains *why* Jena zones are risky (perm decoupled from charge).

---

### 1.4 Jaccard similarity on binary flag sets — *inter-well* *(user-requested)*

Measure how similar two wells are in terms of the *character* of their flagged zones, independent of depth.

**Method:** For each well build binary sets over a common feature vocabulary, e.g.:
`{good_rock, highperm, lowres_over_good, lowfluor_over_good, matching_pay, coarse_grain, low_GR, loose_grains}`.
Represent each well as the set of features that are "present" (≥ X% of its intervals fire the feature; default X = 10%). Then:
```
J(A,B) = |A ∩ B| / |A ∪ B|
```
Also compute a **depth-binned Jaccard** variant: resample both wells onto normalized lateral position (0–1, 20 bins) and compute Jaccard on the per-bin water-risk-flag vector — this compares *architecture* of risk along the lateral.

**Output:** 17×17 Jaccard similarity matrix (heatmap) + ranked "most similar analog wells to Jena 31 / 31DW1".
**Objective mapping:** Finds analog wells whose (known) water behaviour informs Jena risk.

---

### 1.5 Feature-vector cosine similarity + hierarchical clustering (with KS significance) — *inter-well*

Group wells by their aggregate petrophysical signature and test whether Jena wells' distributions differ from analogs.

**Method:**
1. Build a per-well feature vector of standardized aggregates: `[mean pct_ss, mean grain_ordinal, mean avg_GR, mean res_sep, mean RES_DEEP, pay%, mean WRCI, %high-risk intervals]`.
2. **Cosine similarity** + **Euclidean** pairwise → **agglomerative hierarchical clustering** (Ward). Render a dendrogram + cluster assignment.
3. **Kolmogorov–Smirnov two-sample test:** for each property distribution, test Jena 31 / 31DW1 vs each candidate analog (and vs portfolio). Report D-statistic + p-value to confirm whether "similar" wells are statistically indistinguishable.

**Output:** dendrogram, cluster table, KS significance grid.
**Objective mapping:** Confidence layer — quantifies which analogs are truly comparable to Jena.

**Summary of the five:**

| # | Method | Type | Primary output |
|---|--------|------|----------------|
| 1 | Water-Risk Composite Index (WRCI) | Intra | Per-interval risk classes/flags |
| 2 | Robust Z-score anomalies | Intra | Anomalous zones |
| 3 | Spearman correlation matrix | Intra | Variable relationships / decoupling |
| 4 | Jaccard similarity (flag sets) | Inter | Well similarity matrix / analogs |
| 5 | Cosine + hierarchical clustering + KS | Inter | Well clusters + significance |

---

## 2. Data pipeline (Phase 1–2)

### Phase 1 — Fix & harden the extractor
**Files:** `scripts/process_mckinlay_wells.py`

1. **`parse_las()` — read `~Curve` mnemonics** instead of fixed positions. Map any of `GR|GR_GOLD`, `RES_DEEP|RES_DEEP_GOLD|RD`, `RES_SHALLOW|RES_SHALLOW_GOLD|RS`, `RES_MED|RES_MEDIUM_GOLD` to canonical names by **name**, not index. Keep NULL `-999.25` handling.
2. **Text descriptor parsers** (new helpers): `parse_porosity(text) → {none,poor,p-fr,fr,fr-gd,gd}` and `parse_loose_grains(text) → bool`, scanning `long_desc` first then matched mudlog text. Add `grain_ordinal(grain,max_grain) → int 0..5`.
3. Add these derived fields to each `results` item: `poro_class`, `loose_grains`, `grain_ordinal`.

**Acceptance:** `python3 scripts/process_mckinlay_wells.py` runs clean; a spot-check of `Jena_31DW1` and `Biala_21` shows GR/RES within physically sane ranges (GR 0–250 gAPI, RES 0.1–2000 ohm.m).

### Phase 2 — Statistics + JSON export
**New file:** `scripts/export_web_data.py` (imports from the two existing scripts; **no duplication** of geology logic).

Computes methods 1.1–1.5 and writes:

```
site/public/data/
├── wells.json              # index: alias, display, tops_name, dc30, td, lateral, counts, cluster id
├── intervals/{ALIAS}.json  # per-interval full record incl. WRCI, flags, z-scores
├── zones/{ALIAS}.json      # overburden exclusion zones (from zone_details)
├── stats/correlations.json # per-well Spearman matrices + p-values
├── stats/jaccard.json      # 17x17 matrix + depth-binned variant
├── stats/clusters.json     # cosine/euclidean, dendrogram linkage, cluster ids
├── stats/ks.json           # KS D + p-values (Jena vs analogs)
└── water_risk/{ALIAS}.json # ranked flagged zones (focus: JENA31, JENA31DW1)
```

**Dependencies:** add `scipy` (KS, hierarchical clustering, spearman) and `scikit-learn` (optional, for scaling) to a new `requirements.txt`. Pin versions installed via pip.

**Acceptance:** all JSON files valid (`python3 -c "import json,glob; [json.load(open(f)) for f in glob.glob('site/public/data/**/*.json',recursive=True)]"`); `water_risk/JENA31DW1.json` lists ≥1 High-risk zone with contributing flags.

**CLI:**
```bash
pip install -r requirements.txt
python3 scripts/process_mckinlay_wells.py
python3 scripts/export_web_data.py
```

---

## 3. Static site (Phase 3–5)

### 3.1 Stack
- **Vite + React 18 + TypeScript**
- **Tailwind CSS** (v3) + **shadcn/ui**-style primitives
- **Recharts** (bar/scatter/heatmap-via-cells) + lightweight **custom SVG** depth tracks (well logs) + **visx** optional for the dendrogram
- **React Router** with **`HashRouter`** (safest for GitHub Pages; no server rewrites)
- Data loaded as static JSON from `import.meta.env.BASE_URL + 'data/...'`

Directory: everything under `site/`.

### 3.2 Design system — "UI/UX Pro Max"
> **Executor note:** If the **UI/UX Pro Max** Claude skill is available in the environment, load and follow it for tokens, spacing, and component composition. It was **not present** in the planning environment, so the following **inline design system is the fallback contract** and must be honored either way.

**Theme:** professional geoscience dark UI, high legibility for depth data.

**Design tokens** (`site/src/styles/tokens.css` + Tailwind theme extension):

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#0B0F14` | App background |
| `--surface` | `#131A22` | Cards |
| `--surface-2` | `#1B2530` | Elevated |
| `--border` | `#26313D` | Hairlines |
| `--text` | `#E6EDF3` / `--text-muted` `#93A1B0` | Copy |
| `--accent` | `#38BDF8` (sky) | Primary actions/links |
| Risk scale | `--risk-high #EF4444`, `--risk-elev #F59E0B`, `--risk-low #22C55E` | WRCI classes |
| Rock quality | sequential teal→amber ramp | RQI shading |
| Resistivity | log-scaled blue→red | RES tracks |

**Typography:** Inter (UI) + JetBrains Mono (numbers/depths). Scale 12/14/16/20/28/40.
**Spacing:** 4px base grid; card radius 12px; soft shadow `0 1px 3px rgba(0,0,0,.4)`.
**Components:** `AppShell` (sidebar + topbar), `Card`, `StatTile`, `RiskBadge`, `Heatmap`, `DepthTrack`, `CorrelationMatrix`, `WellSelect`, `DataTable`, `Legend`, `MethodologyCallout`. All keyboard-accessible, responsive (≥360px), respects `prefers-reduced-motion`.

### 3.3 Routes / views
| Route | View | Content |
|-------|------|---------|
| `/` | **Portfolio Dashboard** | 17-well table + StatTiles (pay%, high-risk count), portfolio map of risk |
| `/well/:alias` | **Well Detail** | Depth tracks: GR • RES_DEEP+SHALLOW (log) • %SS • fluor • grain ordinal • res_sep • **WRCI risk track**; overburden zones shaded; interval table |
| `/water-risk` | **Water-Risk Explorer** | Default-focused on **Jena 31 & 31DW1**; ranked flagged zones with flag chips + evidence; side-by-side Jena31 vs Jena31DW1 |
| `/compare` | **Inter-well Comparison** | Jaccard heatmap (§1.4), dendrogram + clusters (§1.5), KS grid, analog ranking for Jena |
| `/intra/:alias` | **Intra-well Stats** | Spearman matrix (§1.3), z-score anomaly list (§1.2) |
| `/methodology` | **Methodology** | Renders the definitions from this plan (formulas, cutoffs, caveats) |

### 3.4 Deployment — GitHub Pages (`*.github.io`)
- **`.github/workflows/deploy.yml`**: on push to `main` → setup Node → `npm ci` in `site/` → `npm run build` → upload `site/dist` via `actions/upload-pages-artifact` → `actions/deploy-pages`.
- **Git LFS:** workflow must `lfs: true` on checkout (xlsx/pdf are LFS). Data JSON is generated by a **preceding Python step** (setup-python → `pip install -r requirements.txt` → run both scripts) so the site always builds from fresh data.
- **Vite `base`:** set to `/Horizontaldata_review/` (project pages path). `HashRouter` avoids 404 on deep links.
- Site URL: `https://nfernie.github.io/Horizontaldata_review/`.

**Acceptance:** `npm run build` succeeds locally; Action publishes; landing page loads with all 17 wells and no console errors; `/water-risk` shows Jena zones.

---

## 4. Execution phases & acceptance (for Composer)

| Phase | Deliverable | Key files | Acceptance gate |
|-------|-------------|-----------|-----------------|
| **P1** | LAS-by-mnemonic + text parsers | `scripts/process_mckinlay_wells.py`, `requirements.txt` | Scripts run; Jena31DW1 GR/RES sane |
| **P2** | Stats + JSON export | `scripts/export_web_data.py`, `site/public/data/**` | All JSON valid; Jena high-risk zones present |
| **P3** | Site scaffold + design system | `site/` (Vite/React/TS/Tailwind), tokens, `AppShell` | `npm run dev` renders shell + Portfolio |
| **P4** | Core views | Well Detail, Water-Risk Explorer, Intra-well | Depth tracks + risk track render for Jena31DW1 |
| **P5** | Comparison + methodology + deploy | `/compare`, `/methodology`, `.github/workflows/deploy.yml` | Pages build published; live URL works |

**Global constraints:**
- Reuse `classify_tops`/`exclusion_zones`; exclude overburden intervals from every statistic.
- Keep all weights/cutoffs in one config block (`scripts/config.py` + mirrored `site/src/config.ts`) so they are tunable and shown on `/methodology`.
- HOBBES 4 = data-absent placeholder (not in stats).
- No secrets required; fully static.

---

## 5. Commands (happy path)

```bash
# data
pip install -r requirements.txt
python3 scripts/process_mckinlay_wells.py
python3 scripts/export_web_data.py

# site
cd site
npm install
npm run dev          # local
npm run build        # production -> site/dist
```

---

## 6. Risks & mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| LAS curve order varies (incl. Jena31DW1) | Corrupt resistivity stats | **P1 mnemonic-based parsing** before any stats |
| Porosity/loose-grain only in free text | Missing red-flag inputs | Regex parsers + graceful nulls; show data-coverage % on site |
| Legacy Excel wells lack grain/fluor detail | Weaker RQI for McKinlay 20–24 / Frostillicus 2 | Confidence badge per interval; exclude missing from norms |
| Small n per well for KS/Spearman | Weak significance | Report n + p-values; annotate low-confidence |
| GitHub Pages base-path/LFS pitfalls | Broken deploy | `HashRouter`, explicit `base`, `lfs:true` in CI |
| "UI/UX Pro Max" skill absent | Design drift | Inline token contract in §3.2 is binding fallback |

---

## 7. Out of scope (R1)
- Re-picking formation tops or changing pay cutoffs (owned by existing workflow).
- TVD/true-vertical conversions (laterals reported in MD).
- Authentication, back-end, or database (site is fully static).
