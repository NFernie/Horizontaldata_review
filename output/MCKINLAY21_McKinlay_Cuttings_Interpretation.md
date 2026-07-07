# MCKINLAY 21 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 02:31 UTC  
**Well:** MCKINLAY 21 (MCKINLAY 21)  
**TD:** 2417 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 21_Mudlog_Spud-2417m_TD.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `McKinlay 21 Hz Section Samples Descriptions.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_21` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1769.69 | DC30.xlsx |
| McKinlay Member (shallowest) | 1770.10 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Target re-entry (McKinlay without paired Murta):**
- 1770.10 m MD
- 2227.60 m MD

**Overburden intersections (McKinlay ≈ Murta within 5 m):**
| McKinlay (m MD) | Murta (m MD) | Δ (m) |
|-----------------|-------------|-------|
| 2212.00 | 2210.33 | 1.67 |

**McKinlay Member analysis window:** 1770.1 – 2417.0 m MD

**Excluded zones (±10 m around overburden & target re-entry tops):** 2202–2222 (overburden), 1760–1780 (target_reentry), 2218–2238 (target_reentry)

**Samples in McKinlay Member:** 118 of 148 total
- Excluded pre-reservoir: 19
- Excluded overburden intersections: 5
- Excluded target re-entry tops: 6

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 21 → `MCKINLAY 21` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** use ±10 m around paired overburden tops AND McKinlay target re-entry tops without Murta pairs.
8. **Input Sheet only** — Calculations Sheet not used.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 30% Siltstone. 70% very fine to fine aggs, fine to coarse loose, common medium Sandstone. TG: 96U. 80% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 96.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.7 | 33 |
| RES_DEEP (ohm.m) | 23.09 | 33 |
| RES_SHALLOW (ohm.m) | 21.55 | 33 |
| **Δ Res (Deep − Shallow)** | **1.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 100% nan FLUOR, TG 84.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 84.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 32 |
| RES_DEEP (ohm.m) | 24.97 | 32 |
| RES_SHALLOW (ohm.m) | 23.35 | 32 |
| **Δ Res (Deep − Shallow)** | **1.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 100% nan FLUOR, TG 87.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 87.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 22.68 | 33 |
| RES_SHALLOW (ohm.m) | 20.65 | 33 |
| **Δ Res (Deep − Shallow)** | **2.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% nan Sandstone, 100% nan FLUOR, TG 82.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 82.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.5 | 33 |
| RES_DEEP (ohm.m) | 21.01 | 33 |
| RES_SHALLOW (ohm.m) | 20.00 | 33 |
| **Δ Res (Deep − Shallow)** | **1.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 90% nan FLUOR, TG 74.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 74.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 33 |
| RES_DEEP (ohm.m) | 20.11 | 33 |
| RES_SHALLOW (ohm.m) | 18.89 | 33 |
| **Δ Res (Deep − Shallow)** | **1.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 90% nan FLUOR, TG 87.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 87.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 33 |
| RES_DEEP (ohm.m) | 19.63 | 33 |
| RES_SHALLOW (ohm.m) | 18.52 | 33 |
| **Δ Res (Deep − Shallow)** | **1.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 95% nan FLUOR, TG 91.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 95.0% nan |
| Total Gas | 91.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.9 | 32 |
| RES_DEEP (ohm.m) | 19.57 | 32 |
| RES_SHALLOW (ohm.m) | 18.62 | 32 |
| **Δ Res (Deep − Shallow)** | **0.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 100% nan FLUOR, TG 112.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 112.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 19.31 | 33 |
| RES_SHALLOW (ohm.m) | 18.55 | 33 |
| **Δ Res (Deep − Shallow)** | **0.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** 25% Siltstone, 75% nan Sandstone, 100% nan FLUOR, TG 89.0U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 89.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 19.12 | 33 |
| RES_SHALLOW (ohm.m) | 18.35 | 33 |
| **Δ Res (Deep − Shallow)** | **0.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 100% nan FLUOR, TG 85.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 33 |
| RES_DEEP (ohm.m) | 19.47 | 33 |
| RES_SHALLOW (ohm.m) | 18.63 | 33 |
| **Δ Res (Deep − Shallow)** | **0.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 95% nan FLUOR, TG 120.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 95.0% nan |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 21.38 | 33 |
| RES_SHALLOW (ohm.m) | 20.60 | 33 |
| **Δ Res (Deep − Shallow)** | **0.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 100% nan FLUOR, TG 103.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 103.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 32 |
| RES_DEEP (ohm.m) | 23.47 | 32 |
| RES_SHALLOW (ohm.m) | 22.45 | 32 |
| **Δ Res (Deep − Shallow)** | **1.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% nan Sandstone, 100% nan FLUOR, TG 100.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 22.99 | 33 |
| RES_SHALLOW (ohm.m) | 21.40 | 33 |
| **Δ Res (Deep − Shallow)** | **1.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** 30% Siltstone, 70% nan Sandstone, 100% nan FLUOR, TG 130.0U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 25.21 | 33 |
| RES_SHALLOW (ohm.m) | 22.98 | 33 |
| **Δ Res (Deep − Shallow)** | **2.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** 25% Siltstone, 75% nan Sandstone, 100% nan FLUOR, TG 161.0U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 161.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 27.68 | 33 |
| RES_SHALLOW (ohm.m) | 25.59 | 33 |
| **Δ Res (Deep − Shallow)** | **2.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 80% nan FLUOR, TG 152.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 152.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 33 |
| RES_DEEP (ohm.m) | 28.75 | 33 |
| RES_SHALLOW (ohm.m) | 25.86 | 33 |
| **Δ Res (Deep − Shallow)** | **2.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 90% nan FLUOR, TG 135.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 135.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 32 |
| RES_DEEP (ohm.m) | 27.66 | 32 |
| RES_SHALLOW (ohm.m) | 24.64 | 32 |
| **Δ Res (Deep − Shallow)** | **3.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% nan Sandstone, 90% nan FLUOR, TG 212.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 212.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 33 |
| RES_DEEP (ohm.m) | 27.17 | 33 |
| RES_SHALLOW (ohm.m) | 24.83 | 33 |
| **Δ Res (Deep − Shallow)** | **2.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 100% nan FLUOR, TG 355.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 355.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.3 | 33 |
| RES_DEEP (ohm.m) | 27.77 | 33 |
| RES_SHALLOW (ohm.m) | 25.44 | 33 |
| **Δ Res (Deep − Shallow)** | **2.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 100% nan FLUOR, TG 270.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 270.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 27.92 | 33 |
| RES_SHALLOW (ohm.m) | 25.17 | 33 |
| **Δ Res (Deep − Shallow)** | **2.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% nan Sandstone, 100% nan FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 28.83 | 33 |
| RES_SHALLOW (ohm.m) | 25.99 | 33 |
| **Δ Res (Deep − Shallow)** | **2.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 100% nan FLUOR, TG 146.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 146.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 32 |
| RES_DEEP (ohm.m) | 29.86 | 32 |
| RES_SHALLOW (ohm.m) | 28.11 | 32 |
| **Δ Res (Deep − Shallow)** | **1.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 100% nan FLUOR, TG 145.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 145.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 33 |
| RES_DEEP (ohm.m) | 31.86 | 33 |
| RES_SHALLOW (ohm.m) | 30.60 | 33 |
| **Δ Res (Deep − Shallow)** | **1.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 90% nan FLUOR, TG 115.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.8 | 33 |
| RES_DEEP (ohm.m) | 31.50 | 33 |
| RES_SHALLOW (ohm.m) | 29.84 | 33 |
| **Δ Res (Deep − Shallow)** | **1.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% nan Sandstone, 100% nan FLUOR, TG 130.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 33 |
| RES_DEEP (ohm.m) | 31.37 | 33 |
| RES_SHALLOW (ohm.m) | 29.32 | 33 |
| **Δ Res (Deep − Shallow)** | **2.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% nan Sandstone, 100% nan FLUOR, TG 94.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 94.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.5 | 33 |
| RES_DEEP (ohm.m) | 29.29 | 33 |
| RES_SHALLOW (ohm.m) | 27.41 | 33 |
| **Δ Res (Deep − Shallow)** | **1.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 90% nan FLUOR, TG 260.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 260.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 26.57 | 33 |
| RES_SHALLOW (ohm.m) | 25.49 | 33 |
| **Δ Res (Deep − Shallow)** | **1.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 100% nan FLUOR, TG 195.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 32 |
| RES_DEEP (ohm.m) | 27.16 | 32 |
| RES_SHALLOW (ohm.m) | 26.15 | 32 |
| **Δ Res (Deep − Shallow)** | **1.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 100% nan FLUOR, TG 167.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 167.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 28.64 | 33 |
| RES_SHALLOW (ohm.m) | 27.46 | 33 |
| **Δ Res (Deep − Shallow)** | **1.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 100% nan FLUOR, TG 192.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 192.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 33 |
| RES_DEEP (ohm.m) | 31.75 | 33 |
| RES_SHALLOW (ohm.m) | 30.87 | 33 |
| **Δ Res (Deep − Shallow)** | **0.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 100% nan FLUOR, TG 240.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 240.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 32.74 | 33 |
| RES_SHALLOW (ohm.m) | 31.85 | 33 |
| **Δ Res (Deep − Shallow)** | **0.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 100% nan FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.8 | 33 |
| RES_DEEP (ohm.m) | 36.77 | 33 |
| RES_SHALLOW (ohm.m) | 35.20 | 33 |
| **Δ Res (Deep − Shallow)** | **1.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 100% nan FLUOR, TG 234.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 234.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.3 | 32 |
| RES_DEEP (ohm.m) | 33.91 | 32 |
| RES_SHALLOW (ohm.m) | 31.52 | 32 |
| **Δ Res (Deep − Shallow)** | **2.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 288.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 288.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.8 | 33 |
| RES_DEEP (ohm.m) | 32.57 | 33 |
| RES_SHALLOW (ohm.m) | 29.50 | 33 |
| **Δ Res (Deep − Shallow)** | **3.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 300.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 300.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.1 | 33 |
| RES_DEEP (ohm.m) | 30.09 | 33 |
| RES_SHALLOW (ohm.m) | 27.44 | 33 |
| **Δ Res (Deep − Shallow)** | **2.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 320.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 320.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 33 |
| RES_DEEP (ohm.m) | 31.99 | 33 |
| RES_SHALLOW (ohm.m) | 28.51 | 33 |
| **Δ Res (Deep − Shallow)** | **3.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 280.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 280.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.9 | 33 |
| RES_DEEP (ohm.m) | 32.00 | 33 |
| RES_SHALLOW (ohm.m) | 28.48 | 33 |
| **Δ Res (Deep − Shallow)** | **3.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 32 |
| RES_DEEP (ohm.m) | 32.22 | 32 |
| RES_SHALLOW (ohm.m) | 29.27 | 32 |
| **Δ Res (Deep − Shallow)** | **2.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 220.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 220.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.7 | 33 |
| RES_DEEP (ohm.m) | 32.13 | 33 |
| RES_SHALLOW (ohm.m) | 29.78 | 33 |
| **Δ Res (Deep − Shallow)** | **2.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.2 | 33 |
| RES_DEEP (ohm.m) | 29.85 | 33 |
| RES_SHALLOW (ohm.m) | 27.60 | 33 |
| **Δ Res (Deep − Shallow)** | **2.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 33 |
| RES_DEEP (ohm.m) | 26.93 | 33 |
| RES_SHALLOW (ohm.m) | 24.87 | 33 |
| **Δ Res (Deep − Shallow)** | **2.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.7 | 33 |
| RES_DEEP (ohm.m) | 27.12 | 33 |
| RES_SHALLOW (ohm.m) | 26.47 | 33 |
| **Δ Res (Deep − Shallow)** | **0.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 32 |
| RES_DEEP (ohm.m) | 27.14 | 32 |
| RES_SHALLOW (ohm.m) | 26.24 | 32 |
| **Δ Res (Deep − Shallow)** | **0.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 24.73 | 33 |
| RES_SHALLOW (ohm.m) | 23.53 | 33 |
| **Δ Res (Deep − Shallow)** | **1.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 160.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.6 | 33 |
| RES_DEEP (ohm.m) | 23.41 | 33 |
| RES_SHALLOW (ohm.m) | 21.22 | 33 |
| **Δ Res (Deep − Shallow)** | **2.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 80% nan FLUOR, TG 200.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 26.92 | 33 |
| RES_SHALLOW (ohm.m) | 24.07 | 33 |
| **Δ Res (Deep − Shallow)** | **2.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 90% nan FLUOR, TG 196.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 196.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 27.99 | 33 |
| RES_SHALLOW (ohm.m) | 25.25 | 33 |
| **Δ Res (Deep − Shallow)** | **2.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 85% nan FLUOR, TG 200.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 85.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.5 | 32 |
| RES_DEEP (ohm.m) | 32.43 | 32 |
| RES_SHALLOW (ohm.m) | 29.19 | 32 |
| **Δ Res (Deep − Shallow)** | **3.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 90% nan FLUOR, TG 200.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.2 | 33 |
| RES_DEEP (ohm.m) | 35.62 | 33 |
| RES_SHALLOW (ohm.m) | 31.89 | 33 |
| **Δ Res (Deep − Shallow)** | **3.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 80% nan FLUOR, TG 195.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 33 |
| RES_DEEP (ohm.m) | 37.72 | 33 |
| RES_SHALLOW (ohm.m) | 34.34 | 33 |
| **Δ Res (Deep − Shallow)** | **3.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 80% nan FLUOR, TG 185.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 185.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 37.13 | 33 |
| RES_SHALLOW (ohm.m) | 34.18 | 33 |
| **Δ Res (Deep − Shallow)** | **2.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 90% nan FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 37.11 | 33 |
| RES_SHALLOW (ohm.m) | 34.16 | 33 |
| **Δ Res (Deep − Shallow)** | **2.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 80% nan FLUOR, TG 250.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 250.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 33 |
| RES_DEEP (ohm.m) | 34.06 | 33 |
| RES_SHALLOW (ohm.m) | 30.95 | 33 |
| **Δ Res (Deep − Shallow)** | **3.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 95% nan FLUOR, TG 242.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 95.0% nan |
| Total Gas | 242.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 32 |
| RES_DEEP (ohm.m) | 32.18 | 32 |
| RES_SHALLOW (ohm.m) | 29.18 | 32 |
| **Δ Res (Deep − Shallow)** | **3.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 95% nan FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 95.0% nan |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.4 | 33 |
| RES_DEEP (ohm.m) | 32.64 | 33 |
| RES_SHALLOW (ohm.m) | 29.73 | 33 |
| **Δ Res (Deep − Shallow)** | **2.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 90% nan FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 186.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 30.85 | 33 |
| RES_SHALLOW (ohm.m) | 27.47 | 33 |
| **Δ Res (Deep − Shallow)** | **3.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 90% nan FLUOR, TG 150.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 28.56 | 33 |
| RES_SHALLOW (ohm.m) | 25.49 | 33 |
| **Δ Res (Deep − Shallow)** | **3.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 90% nan FLUOR, TG 156.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 156.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 33 |
| RES_DEEP (ohm.m) | 29.06 | 33 |
| RES_SHALLOW (ohm.m) | 26.26 | 33 |
| **Δ Res (Deep − Shallow)** | **2.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 90% nan FLUOR, TG 162.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 162.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 32 |
| RES_DEEP (ohm.m) | 29.00 | 32 |
| RES_SHALLOW (ohm.m) | 26.52 | 32 |
| **Δ Res (Deep − Shallow)** | **2.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 70% nan FLUOR, TG 164.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 164.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 30.93 | 33 |
| RES_SHALLOW (ohm.m) | 28.27 | 33 |
| **Δ Res (Deep − Shallow)** | **2.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 70% nan FLUOR, TG 168.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 168.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.2 | 33 |
| RES_DEEP (ohm.m) | 29.87 | 33 |
| RES_SHALLOW (ohm.m) | 27.36 | 33 |
| **Δ Res (Deep − Shallow)** | **2.50** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 60% nan FLUOR, TG 158.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 158.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 28.08 | 33 |
| RES_SHALLOW (ohm.m) | 25.30 | 33 |
| **Δ Res (Deep − Shallow)** | **2.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 60% nan FLUOR, TG 160.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 33 |
| RES_DEEP (ohm.m) | 26.82 | 33 |
| RES_SHALLOW (ohm.m) | 24.58 | 33 |
| **Δ Res (Deep − Shallow)** | **2.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 60% nan FLUOR, TG 160.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 32 |
| RES_DEEP (ohm.m) | 26.18 | 32 |
| RES_SHALLOW (ohm.m) | 23.92 | 32 |
| **Δ Res (Deep − Shallow)** | **2.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 60% nan FLUOR, TG 150.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 33 |
| RES_DEEP (ohm.m) | 25.95 | 33 |
| RES_SHALLOW (ohm.m) | 23.90 | 33 |
| **Δ Res (Deep − Shallow)** | **2.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 60% nan FLUOR, TG 170.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 170.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 27.70 | 33 |
| RES_SHALLOW (ohm.m) | 25.03 | 33 |
| **Δ Res (Deep − Shallow)** | **2.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 75% nan FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 186.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 33 |
| RES_DEEP (ohm.m) | 26.12 | 33 |
| RES_SHALLOW (ohm.m) | 23.76 | 33 |
| **Δ Res (Deep − Shallow)** | **2.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 85% nan FLUOR, TG 179.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 85.0% nan |
| Total Gas | 179.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 25.10 | 33 |
| RES_SHALLOW (ohm.m) | 22.60 | 33 |
| **Δ Res (Deep − Shallow)** | **2.50** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 85% nan FLUOR, TG 188.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 85.0% nan |
| Total Gas | 188.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.2 | 32 |
| RES_DEEP (ohm.m) | 27.64 | 32 |
| RES_SHALLOW (ohm.m) | 25.73 | 32 |
| **Δ Res (Deep − Shallow)** | **1.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 80% nan FLUOR, TG 145.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 145.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 33 |
| RES_DEEP (ohm.m) | 26.80 | 33 |
| RES_SHALLOW (ohm.m) | 24.96 | 33 |
| **Δ Res (Deep − Shallow)** | **1.84** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 80% nan FLUOR, TG 145.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 145.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 26.74 | 33 |
| RES_SHALLOW (ohm.m) | 24.47 | 33 |
| **Δ Res (Deep − Shallow)** | **2.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 95% nan FLUOR, TG 205.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 95.0% nan |
| Total Gas | 205.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 26.91 | 33 |
| RES_SHALLOW (ohm.m) | 24.70 | 33 |
| **Δ Res (Deep − Shallow)** | **2.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 186.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 25.18 | 33 |
| RES_SHALLOW (ohm.m) | 23.86 | 33 |
| **Δ Res (Deep − Shallow)** | **1.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 186.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.8 | 33 |
| RES_DEEP (ohm.m) | 25.70 | 33 |
| RES_SHALLOW (ohm.m) | 24.95 | 33 |
| **Δ Res (Deep − Shallow)** | **0.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 5% Siltstone. 95% fine to medium, common loose Sandstone. TG: 182U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 182.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.1 | 32 |
| RES_DEEP (ohm.m) | 26.37 | 32 |
| RES_SHALLOW (ohm.m) | 25.26 | 32 |
| **Δ Res (Deep − Shallow)** | **1.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 10% Siltstone. 90% very fine to fine, rare medium to coarse Sandstone. TG: 185U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 185.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.4 | 33 |
| RES_DEEP (ohm.m) | 25.58 | 33 |
| RES_SHALLOW (ohm.m) | 24.30 | 33 |
| **Δ Res (Deep − Shallow)** | **1.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 10% Siltstone. 90% very fine to fine, rare medium to coarse Sandstone. TG: 243U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 243.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 33 |
| RES_DEEP (ohm.m) | 28.90 | 33 |
| RES_SHALLOW (ohm.m) | 26.86 | 33 |
| **Δ Res (Deep − Shallow)** | **2.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 10% Siltstone. 90% very fine to fine, occasional to common medium to coarse Sandstone. TG: 221U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 221.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 33.62 | 33 |
| RES_SHALLOW (ohm.m) | 29.69 | 33 |
| **Δ Res (Deep − Shallow)** | **3.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 10% Siltstone. 90% very fine to fine, occasional to common medium to coarse Sandstone. TG: 200U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 33 |
| RES_DEEP (ohm.m) | 31.76 | 33 |
| RES_SHALLOW (ohm.m) | 27.75 | 33 |
| **Δ Res (Deep − Shallow)** | **4.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 20% Siltstone. 80% very fine to fine, occasional to common medium to coarse Sandstone. TG: 195U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 32 |
| RES_DEEP (ohm.m) | 35.31 | 32 |
| RES_SHALLOW (ohm.m) | 29.71 | 32 |
| **Δ Res (Deep − Shallow)** | **5.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 15% Siltstone. 85% very fine to coarse, abundant medium to coarse loose Sandstone. TG: 160U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 33 |
| RES_DEEP (ohm.m) | 32.59 | 33 |
| RES_SHALLOW (ohm.m) | 27.32 | 33 |
| **Δ Res (Deep − Shallow)** | **5.27** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 20% Siltstone. 80% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 120U. 60% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 33 |
| RES_DEEP (ohm.m) | 37.66 | 33 |
| RES_SHALLOW (ohm.m) | 30.67 | 33 |
| **Δ Res (Deep − Shallow)** | **6.99** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 60% Siltstone. 40% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 97U. 50% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 97.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2210m: med brn,med brn gry,lt-med gry,aren,loc mnr sndy lams,mnr sid,hd- 03-09-2021 mod hd,occ v hd,sbblky-blky. 04-09-2021

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.5 | 33 |
| RES_DEEP (ohm.m) | 35.41 | 33 |
| RES_SHALLOW (ohm.m) | 29.13 | 33 |
| **Δ Res (Deep − Shallow)** | **6.27** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 50% Siltstone. 50% very fine to fine aggregates , common to occasional medium to coarse loose Sandstone. TG: 190U. 70% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 26.58 | 33 |
| RES_SHALLOW (ohm.m) | 24.44 | 33 |
| **Δ Res (Deep − Shallow)** | **2.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 20% Siltstone80% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 195U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.8 | 33 |
| RES_DEEP (ohm.m) | 21.79 | 33 |
| RES_SHALLOW (ohm.m) | 21.25 | 33 |
| **Δ Res (Deep − Shallow)** | **0.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 15% Siltstone 85% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 158U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 158.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 32 |
| RES_DEEP (ohm.m) | 20.31 | 32 |
| RES_SHALLOW (ohm.m) | 19.33 | 32 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 20% Siltstone 80% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 156U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 156.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 33 |
| RES_DEEP (ohm.m) | 18.79 | 33 |
| RES_SHALLOW (ohm.m) | 17.25 | 33 |
| **Δ Res (Deep − Shallow)** | **1.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 30% Siltstone 70% very fine, minor loose Sandstone. TG: 132U. 80% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 132.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.4 | 33 |
| RES_DEEP (ohm.m) | 17.90 | 33 |
| RES_SHALLOW (ohm.m) | 16.21 | 33 |
| **Δ Res (Deep − Shallow)** | **1.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 40% Siltstone 60% very fine, minor loose Sandstone. TG: 118U. 40% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 40.0% nan |
| Total Gas | 118.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.3 | 33 |
| RES_DEEP (ohm.m) | 18.60 | 33 |
| RES_SHALLOW (ohm.m) | 17.16 | 33 |
| **Δ Res (Deep − Shallow)** | **1.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 60% Siltstone 40% very fine Sandstone. TG: 115U. 70% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 19.36 | 33 |
| RES_SHALLOW (ohm.m) | 18.19 | 33 |
| **Δ Res (Deep − Shallow)** | **1.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 30% Siltstone 70% very fine to fine Sandstone. TG: 250U. 80% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 250.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 33 |
| RES_DEEP (ohm.m) | 19.70 | 33 |
| RES_SHALLOW (ohm.m) | 18.79 | 33 |
| **Δ Res (Deep − Shallow)** | **0.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 10% Siltstone 90% very fine to fine, common loose Sandstone. TG: 230U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.3 | 32 |
| RES_DEEP (ohm.m) | 20.26 | 32 |
| RES_SHALLOW (ohm.m) | 19.52 | 32 |
| **Δ Res (Deep − Shallow)** | **0.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 100% very fine to fine, abundant loose Sandstone. TG: 154U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 154.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 20.08 | 33 |
| RES_SHALLOW (ohm.m) | 19.59 | 33 |
| **Δ Res (Deep − Shallow)** | **0.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 10% Siltstone. 90% very fine to fine, minor loose Sandstone. TG: 116U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 116.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 33 |
| RES_DEEP (ohm.m) | 21.09 | 33 |
| RES_SHALLOW (ohm.m) | 20.30 | 33 |
| **Δ Res (Deep − Shallow)** | **0.78** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 20% Siltstone. 80% very fine to fine Sandstone. TG: 138U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 138.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 22.90 | 33 |
| RES_SHALLOW (ohm.m) | 21.52 | 33 |
| **Δ Res (Deep − Shallow)** | **1.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 15% Siltstone. 85% very fine to fine Sandstone. TG: 128U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 128.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 23.23 | 33 |
| RES_SHALLOW (ohm.m) | 21.83 | 33 |
| **Δ Res (Deep − Shallow)** | **1.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 20% Siltstone. 80% very fine to fine Sandstone. TG: 145U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 145.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 32 |
| RES_DEEP (ohm.m) | 22.12 | 32 |
| RES_SHALLOW (ohm.m) | 20.96 | 32 |
| **Δ Res (Deep − Shallow)** | **1.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 10% Siltstone. 90% very fine to fine Sandstone. TG: 185U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 185.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 21.81 | 33 |
| RES_SHALLOW (ohm.m) | 20.64 | 33 |
| **Δ Res (Deep − Shallow)** | **1.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 100% very fine to fine Sandstone. TG: 195U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 22.16 | 33 |
| RES_SHALLOW (ohm.m) | 20.97 | 33 |
| **Δ Res (Deep − Shallow)** | **1.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 100% very fine to fine Sandstone. TG: 185U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 185.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 21.49 | 33 |
| RES_SHALLOW (ohm.m) | 20.50 | 33 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 100% very fine to fine Sandstone. TG: 160U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 19.88 | 33 |
| RES_SHALLOW (ohm.m) | 18.90 | 33 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 100% very fine to fine Sandstone. TG: 147U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 147.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.6 | 32 |
| RES_DEEP (ohm.m) | 18.00 | 32 |
| RES_SHALLOW (ohm.m) | 17.08 | 32 |
| **Δ Res (Deep − Shallow)** | **0.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 100% very fine to fine Sandstone, occasional to common loose. TG: 146U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 146.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.4 | 33 |
| RES_DEEP (ohm.m) | 18.93 | 33 |
| RES_SHALLOW (ohm.m) | 17.99 | 33 |
| **Δ Res (Deep − Shallow)** | **0.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 135.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 135.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 33 |
| RES_DEEP (ohm.m) | 19.45 | 33 |
| RES_SHALLOW (ohm.m) | 18.49 | 33 |
| **Δ Res (Deep − Shallow)** | **0.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% nan Sandstone, 100% nan FLUOR, TG 120.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.8 | 33 |
| RES_DEEP (ohm.m) | 19.55 | 33 |
| RES_SHALLOW (ohm.m) | 18.52 | 33 |
| **Δ Res (Deep − Shallow)** | **1.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 80% nan FLUOR, TG 116.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 116.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 33 |
| RES_DEEP (ohm.m) | 22.24 | 33 |
| RES_SHALLOW (ohm.m) | 20.66 | 33 |
| **Δ Res (Deep − Shallow)** | **1.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 40% nan FLUOR, TG 100.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 40.0% nan |
| Total Gas | 100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 32 |
| RES_DEEP (ohm.m) | 21.12 | 32 |
| RES_SHALLOW (ohm.m) | 19.84 | 32 |
| **Δ Res (Deep − Shallow)** | **1.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 80% nan FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 33 |
| RES_DEEP (ohm.m) | 19.19 | 33 |
| RES_SHALLOW (ohm.m) | 18.05 | 33 |
| **Δ Res (Deep − Shallow)** | **1.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 40% nan FLUOR, TG 90.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 40.0% nan |
| Total Gas | 90.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 33 |
| RES_DEEP (ohm.m) | 20.41 | 33 |
| RES_SHALLOW (ohm.m) | 18.96 | 33 |
| **Δ Res (Deep − Shallow)** | **1.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** 25% Siltstone, 75% nan Sandstone, 50% nan FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 19.91 | 33 |
| RES_SHALLOW (ohm.m) | 18.74 | 33 |
| **Δ Res (Deep − Shallow)** | **1.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 30% nan FLUOR, TG 80.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 30.0% nan |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 17.91 | 33 |
| RES_SHALLOW (ohm.m) | 16.95 | 33 |
| **Δ Res (Deep − Shallow)** | **0.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 30% nan FLUOR, TG 115.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 30.0% nan |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 17.69 | 33 |
| RES_SHALLOW (ohm.m) | 16.61 | 33 |
| **Δ Res (Deep − Shallow)** | **1.08** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 50% nan FLUOR, TG 85.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.9 | 32 |
| RES_DEEP (ohm.m) | 18.71 | 32 |
| RES_SHALLOW (ohm.m) | 17.55 | 32 |
| **Δ Res (Deep − Shallow)** | **1.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 20% nan FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 20.0% nan |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 18.73 | 33 |
| RES_SHALLOW (ohm.m) | 17.89 | 33 |
| **Δ Res (Deep − Shallow)** | **0.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2397.5 – 2402.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 30% nan FLUOR, TG 115.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 30.0% nan |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 20 |
| RES_DEEP (ohm.m) | 18.79 | 33 |
| RES_SHALLOW (ohm.m) | 17.91 | 33 |
| **Δ Res (Deep − Shallow)** | **0.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2405 m MD — Interval 2402.5 – 2407.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% nan Sandstone, 30% nan FLUOR, TG 125.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 30.0% nan |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 19.15 | 33 |
| RES_SHALLOW (ohm.m) | 18.18 | 33 |
| **Δ Res (Deep − Shallow)** | **0.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2410 m MD — Interval 2407.5 – 2412.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% nan Sandstone, 70% nan FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 18.53 | 10 |
| RES_SHALLOW (ohm.m) | 17.75 | 10 |
| **Δ Res (Deep − Shallow)** | **0.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2415 m MD — Interval 2412.5 – 2416.0 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% nan Sandstone, 50% nan FLUOR, TG 130.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 118 |
| Depth range | 1785 – 2415 m |
| Avg % Sandstone | 89.3% |
| Avg Δ Res (Deep−Shallow) | 1.96 ohm.m |
| Max Δ Res | 6.99 ohm.m |
| Min Δ Res | 0.49 ohm.m |
| Mudlog matches | 81 / 118 |
