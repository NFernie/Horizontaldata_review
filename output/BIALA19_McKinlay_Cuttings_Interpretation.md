# BIALA 19 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 02:21 UTC  
**Well:** BIALA 19 (BIALA 19)  
**TD:** 3730 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `BIALA 19_ML_Mudlog_Spud-3730_MD_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Biala 19 Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Biala_19` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1730.36 | DC30.xlsx |
| McKinlay Member (shallowest) | 1735.00 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Target re-entry (McKinlay without paired Murta):**
- 1735.00 m MD
- 2030.06 m MD
- 2078.18 m MD
- 2172.63 m MD
- 2329.47 m MD
- 2427.49 m MD
- 2742.95 m MD
- 3227.71 m MD
- 3432.67 m MD

**Overburden intersections (McKinlay ≈ Murta within 5 m):**
| McKinlay (m MD) | Murta (m MD) | Δ (m) |
|-----------------|-------------|-------|
| 2138.77 | 2138.77 | 0.00 |
| 2648.49 | 2644.93 | 3.56 |
| 3174.25 | 3176.03 | 1.78 |
| 3420.20 | 3421.98 | 1.78 |

**McKinlay Member analysis window:** 1735.0 – 3730.0 m MD

**Excluded zones (±10 m around overburden & target re-entry tops):** 2129–2149 (overburden), 2638–2658 (overburden), 3164–3184 (overburden), 3410–3430 (overburden), 1725–1745 (target_reentry), 2020–2040 (target_reentry), 2068–2088 (target_reentry), 2163–2183 (target_reentry), 2319–2339 (target_reentry), 2417–2437 (target_reentry), 2733–2753 (target_reentry), 3218–3238 (target_reentry), 3423–3443 (target_reentry)

**Samples in McKinlay Member:** 219 of 277 total
- Excluded pre-reservoir: 17
- Excluded overburden intersections: 12
- Excluded target re-entry tops: 29

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** BIALA 19 → `BIALA 19` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** use ±10 m around paired overburden tops AND McKinlay target re-entry tops without Murta pairs.
8. **Input Sheet only** — Calculations Sheet not used.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 30% Siltstone, trace to nil siderite in 70% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 42.0 U |
| FeCO₃ in Sandstone | tr-nil |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1736m: clr,trnsl,trnsl pl brn,off wh,vf-crs,pred f-med,mod pr srt,sbang-sbrnd,mod sil cmt, 83 / 6 / 4 / 4 / 3 occ-com off wh-pl brn gry arg mtx,com-pred lse qtz grs,mod hd-fri aggs,pr vis por,gd inf por,fluor. FLUOR:1735-1770m;80-100% of SST;
- **SANDSTONE** @ ~1740m: clr,trnsl,v pl brn-off wh,vf-crs,pred f-med,mod pr srt,sbang-sbrnd,mod sil cmt,mnr off wh-lt brn arg mtx,pred lse disagg qtz grs,tr mod hd-fri agg,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 46.23 | 33 |
| RES_SHALLOW (ohm.m) | 67.97 | 33 |
| **Δ Res (Deep − Shallow)** | **-21.75** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 20% Siltstone, trace to nil siderite in 80% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 44.0 U |
| FeCO₃ in Sandstone | tr-nil |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr,trnsl,v pl brn-off wh,vf-crs,pred f-med,mod pr srt,sbang-sbrnd,mod sil cmt,mnr off wh-lt brn arg mtx,pred lse disagg qtz grs,tr mod hd-fri agg,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~1744m: med-lt gry,med brn gry,v aren,grd to SST,tr carb spks & micmic,mnr sndy lams,mod hd-frm,sbblky. 1748 82 / 6 / 4 / 4 / 4 1236.7
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.4 | 33 |
| RES_DEEP (ohm.m) | 46.99 | 33 |
| RES_SHALLOW (ohm.m) | 56.78 | 33 |
| **Δ Res (Deep − Shallow)** | **-9.79** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1757.5 – 1765.0 m

**Sample Description (spreadsheet):** Sample 1760m: 20% Siltstone, trace to nil siderite in 80% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |
| FeCO₃ in Sandstone | tr-nil |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1744m: med-lt gry,med brn gry,v aren,grd to SST,tr carb spks & micmic,mnr sndy lams,mod hd-frm,sbblky. 1748 82 / 6 / 4 / 4 / 4 1236.7
- **SANDSTONE** @ ~1756m: clr,trnsl,pl brn-off wh,vf-crs,pred f-med,mod pr srt,sbang-sbrnd,mod sil cmt,com off wh-lt brn arg mtx,mnr slty lams,com-occ lse,com mod hd-fri aggs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.1 | 49 |
| RES_DEEP (ohm.m) | 32.55 | 49 |
| RES_SHALLOW (ohm.m) | 40.22 | 49 |
| **Δ Res (Deep − Shallow)** | **-7.67** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1765.0 – 1775.0 m

**Sample Description (spreadsheet):** Sample 1770m: 5% Siltstone, 95% very fine to coarse, pred coarse Sandstone, 100% bright FLUOR in SST. TG 32U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 32.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1756m: clr,trnsl,pl brn-off wh,vf-crs,pred f-med,mod pr srt,sbang-sbrnd,mod sil cmt,com off wh-lt brn arg mtx,mnr slty lams,com-occ lse,com mod hd-fri aggs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1764m: clr,trnsl,pl brn-off wh,vf-crs,pred crs, mod pr srt,sbang-sbrnd,mod sil cmt,occ-mnr wh-lt brn arg mtx,mnr slty lams,pred lse qtz grs,com mod 1768 hd-fri aggs,pr vis por,gd inf por,fluor. 1237.5
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 65 |
| RES_DEEP (ohm.m) | 29.28 | 65 |
| RES_SHALLOW (ohm.m) | 35.92 | 65 |
| **Δ Res (Deep − Shallow)** | **-6.64** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1775.0 – 1785.0 m

**Sample Description (spreadsheet):** Sample 1780m: 0% Siltstone, 100% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 38.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1764m: clr,trnsl,pl brn-off wh,vf-crs,pred crs, mod pr srt,sbang-sbrnd,mod sil cmt,occ-mnr wh-lt brn arg mtx,mnr slty lams,pred lse qtz grs,com mod 1768 hd-fri aggs,pr vis por,gd inf por,fluor. 1237.5
- **SANDSTONE** @ ~1772m: clr,trnsl,pl brn gry-off wh,vf-crs,pred 17 12 7 3 6 7.6 f-med,mod pr srt,sbang-sbrnd,mod sil cmt,com off wh-lt brn arg mtx,com-occ lse,tr-qtz ovgths,com mod hd-fri aggs,pr vis por,pr-fr inf por,fluor. 81 / 6 / 4 / 5 / 4
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 66 |
| RES_DEEP (ohm.m) | 26.54 | 66 |
| RES_SHALLOW (ohm.m) | 30.81 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1785.0 – 1795.0 m

**Sample Description (spreadsheet):** Sample 1790m: 5% Siltstone, 95% very fine to fine, minor coarse Sandstone, 100% bright FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, mnr coarse (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 33.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1772m: clr,trnsl,pl brn gry-off wh,vf-crs,pred 17 12 7 3 6 7.6 f-med,mod pr srt,sbang-sbrnd,mod sil cmt,com off wh-lt brn arg mtx,com-occ lse,tr-qtz ovgths,com mod hd-fri aggs,pr vis por,pr-fr inf por,fluor. 81 / 6 / 4 / 5 / 4
- **SILTSTONE** @ ~1784m: lt-med gry brn,v aren,g/t SST,occ micmic,mnr carb spks,frm-sft,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 66 |
| RES_DEEP (ohm.m) | 25.55 | 66 |
| RES_SHALLOW (ohm.m) | 29.25 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.70** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1795.0 – 1805.0 m

**Sample Description (spreadsheet):** Sample 1800m: 0% Siltstone, 100% very fine to coarse, occasional to common coarse Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, occ-com crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1784m: lt-med gry brn,v aren,g/t SST,occ micmic,mnr carb spks,frm-sft,sbblky.
- **SANDSTONE** @ ~1792m: clr,trnsl,pl gry brn-off wh,vf-med, med-crs lse grs,pr srt,sbang-sbrnd,wk sil cmt, 1796 com-occ wh-lt gry arg mtx,rr carb vns,com lse qtz 1237.6 grs,com fri aggs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 65 |
| RES_DEEP (ohm.m) | 25.43 | 65 |
| RES_SHALLOW (ohm.m) | 30.10 | 65 |
| **Δ Res (Deep − Shallow)** | **-4.67** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1805.0 – 1815.0 m

**Sample Description (spreadsheet):** Sample 1810m: 0% Siltstone, 100% very fine to coarse, common medium to coarse Sandstone, 100% bright FLUOR in SST. TG 31U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, com med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 31.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1792m: clr,trnsl,pl gry brn-off wh,vf-med, med-crs lse grs,pr srt,sbang-sbrnd,wk sil cmt, 1796 com-occ wh-lt gry arg mtx,rr carb vns,com lse qtz 1237.6 grs,com fri aggs,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~1812m: med gry brn,aren,g/t SST,micmic,mnr 1237.2 carb spks,sft-frm i/p,sbblky. 80 / 6 / 4 / 5 / 5 43 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 66 |
| RES_DEEP (ohm.m) | 24.86 | 66 |
| RES_SHALLOW (ohm.m) | 31.17 | 66 |
| **Δ Res (Deep − Shallow)** | **-6.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1815.0 – 1825.0 m

**Sample Description (spreadsheet):** Sample 1820m: 5% Siltstone, 95% very fine to fine, common medium to coarse Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, com med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1812m: med gry brn,aren,g/t SST,micmic,mnr 1237.2 carb spks,sft-frm i/p,sbblky. 80 / 6 / 4 / 5 / 5 43 U
- **SANDSTONE** @ ~1824m: clr,trnsl,pl trnsl brn,vf-med,occ-com med-crs,mod-pr srt,sbang-sbrnd,wk sil cmt, occ-com pl brn-off wh arg mtx,tr slty lams,fri aggs, com-occ lse qtz grs,pr vis por,pr-fr inf por,fluor. 80 / 6 / 4 / 5 / 5 47 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.2 | 66 |
| RES_DEEP (ohm.m) | 29.91 | 66 |
| RES_SHALLOW (ohm.m) | 33.73 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.82** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1825.0 – 1835.0 m

**Sample Description (spreadsheet):** Sample 1830m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1812m: med gry brn,aren,g/t SST,micmic,mnr 1237.2 carb spks,sft-frm i/p,sbblky. 80 / 6 / 4 / 5 / 5 43 U
- **SANDSTONE** @ ~1824m: clr,trnsl,pl trnsl brn,vf-med,occ-com med-crs,mod-pr srt,sbang-sbrnd,wk sil cmt, occ-com pl brn-off wh arg mtx,tr slty lams,fri aggs, com-occ lse qtz grs,pr vis por,pr-fr inf por,fluor. 80 / 6 / 4 / 5 / 5 47 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.8 | 65 |
| RES_DEEP (ohm.m) | 32.44 | 65 |
| RES_SHALLOW (ohm.m) | 35.74 | 65 |
| **Δ Res (Deep − Shallow)** | **-3.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1835.0 – 1845.0 m

**Sample Description (spreadsheet):** Sample 1840m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1824m: clr,trnsl,pl trnsl brn,vf-med,occ-com med-crs,mod-pr srt,sbang-sbrnd,wk sil cmt, occ-com pl brn-off wh arg mtx,tr slty lams,fri aggs, com-occ lse qtz grs,pr vis por,pr-fr inf por,fluor. 80 / 6 / 4 / 5 / 5 47 U
- **SANDSTONE** @ ~1832m: clr,trnsl,pl trnsl brn,vf-med,occ-com med-crs,mod-pr srt,sbang-sbrnd,wk sil cmt, occ-com pl brn-off wh arg mtx,tr slty lams,fri aggs, com-occ lse qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.9 | 66 |
| RES_DEEP (ohm.m) | 31.10 | 66 |
| RES_SHALLOW (ohm.m) | 33.64 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.54** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1845.0 – 1855.0 m

**Sample Description (spreadsheet):** Sample 1850m: 5% Siltstone, 95% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, occ med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1832m: clr,trnsl,pl trnsl brn,vf-med,occ-com med-crs,mod-pr srt,sbang-sbrnd,wk sil cmt, occ-com pl brn-off wh arg mtx,tr slty lams,fri aggs, com-occ lse qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1844m: clr,trnsl,pl trnsl brn,vf-f,occ med-crs, mod-pr srt,sbang-sbrnd,wk sil cmt,occ-com pl brn-off wh arg mtx,tr slty lams,fri aggs,com-occ lse qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.2 | 65 |
| RES_DEEP (ohm.m) | 31.62 | 65 |
| RES_SHALLOW (ohm.m) | 33.86 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: 5% Siltstone, 95% very fine to fine, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 58U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 58.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1844m: clr,trnsl,pl trnsl brn,vf-f,occ med-crs, mod-pr srt,sbang-sbrnd,wk sil cmt,occ-com pl brn-off wh arg mtx,tr slty lams,fri aggs,com-occ lse qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1856m: clr,trnsl brn,vf-f aggs,occ med-crs lse grs,sbang-sbrnd,mod-wk sil cmt,occ off wh arg mtx,fri aggs,occ lse qtz grs,pr vis por,pr-fr inf por, 55 U fluor. MW: 9.8 78 / 6 / 5 / 6 / 5
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.6 | 66 |
| RES_DEEP (ohm.m) | 36.30 | 66 |
| RES_SHALLOW (ohm.m) | 38.96 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.66** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: 5% Siltstone, Tr siderite in 95% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 62U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, occ med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 62.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1856m: clr,trnsl brn,vf-f aggs,occ med-crs lse grs,sbang-sbrnd,mod-wk sil cmt,occ off wh arg mtx,fri aggs,occ lse qtz grs,pr vis por,pr-fr inf por, 55 U fluor. MW: 9.8 78 / 6 / 5 / 6 / 5
- **SILTSTONE** @ ~1864m: med gry brn,aren,g/t SST,micmic,mnr carb spks,frm i/p,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.9 | 66 |
| RES_DEEP (ohm.m) | 33.23 | 66 |
| RES_SHALLOW (ohm.m) | 36.25 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1875.0 – 1885.0 m

**Sample Description (spreadsheet):** Sample 1880m: 5% Siltstone, 95% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, occ med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 40.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1864m: med gry brn,aren,g/t SST,micmic,mnr carb spks,frm i/p,sbblky-sbfiss.
- **SANDSTONE** @ ~1872m: clr,trnsl,pl brn,lt trnsl brn,vf-f aggs, occ med-crs lse,mod wl srt,sbang-sbrnd,wk sil cmt, occ off wh arg mtx,fri aggs,occ lse grs,v pr vis por, 1876 pr-fr inf por,fluor. 1236.9
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 65 |
| RES_DEEP (ohm.m) | 29.59 | 65 |
| RES_SHALLOW (ohm.m) | 30.76 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.17** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1885.0 – 1895.0 m

**Sample Description (spreadsheet):** Sample 1890m: 10% Siltstone, Tr siderite in 90% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, occ med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1872m: clr,trnsl,pl brn,lt trnsl brn,vf-f aggs, occ med-crs lse,mod wl srt,sbang-sbrnd,wk sil cmt, occ off wh arg mtx,fri aggs,occ lse grs,v pr vis por, 1876 pr-fr inf por,fluor. 1236.9
- **SILTSTONE** @ ~1884m: med-occ dk gry,aren,g/t vf SST,tr carb spks,tr sandy lams,frm,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.5 | 66 |
| RES_DEEP (ohm.m) | 26.27 | 66 |
| RES_SHALLOW (ohm.m) | 29.85 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.58** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1895.0 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 10% Siltstone, Tr siderite in 90% very fine to medium,occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med,occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 34.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1884m: med-occ dk gry,aren,g/t vf SST,tr carb spks,tr sandy lams,frm,sbblky-sbfiss.
- **SANDSTONE** @ ~1892m: clr,trnsl,lt trnsl brn,vf-occ med,dom f, 1896 tr crs grs,mod srt,sbang-sbrnd,wk sil cmt,tr sid cmt, 1237.1 fri aggs,occ lse qtz grs,v pr vis por,pr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.6 | 49 |
| RES_DEEP (ohm.m) | 27.40 | 49 |
| RES_SHALLOW (ohm.m) | 28.34 | 49 |
| **Δ Res (Deep − Shallow)** | **-0.94** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 10% Siltstone, 90% very fine to medium,occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med,occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 45.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1892m: clr,trnsl,lt trnsl brn,vf-occ med,dom f, 1896 tr crs grs,mod srt,sbang-sbrnd,wk sil cmt,tr sid cmt, 1237.1 fri aggs,occ lse qtz grs,v pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~1900m: 1590-2025 psi SILTSTONE:med gry,occ dk gry,aren,occ g/t vf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.7 | 33 |
| RES_DEEP (ohm.m) | 25.26 | 33 |
| RES_SHALLOW (ohm.m) | 25.23 | 33 |
| **Δ Res (Deep − Shallow)** | **0.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 5% Siltstone, Tr siderite in 95% very fine to medium,occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 35U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med,occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 35.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1900m: 1590-2025 psi SILTSTONE:med gry,occ dk gry,aren,occ g/t vf
- **SANDSTONE** @ ~1908m: clr,lt trnsl brn,frstd,vf-med,tr crs qtz grs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid stns,tr off wh-pl brn arg mtx,fri aggs,com lse grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.5 | 33 |
| RES_DEEP (ohm.m) | 26.39 | 33 |
| RES_SHALLOW (ohm.m) | 25.67 | 33 |
| **Δ Res (Deep − Shallow)** | **0.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 10% Siltstone, Tr siderite in 90% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 37.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1900m: 1590-2025 psi SILTSTONE:med gry,occ dk gry,aren,occ g/t vf
- **SANDSTONE** @ ~1908m: clr,lt trnsl brn,frstd,vf-med,tr crs qtz grs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid stns,tr off wh-pl brn arg mtx,fri aggs,com lse grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.0 | 33 |
| RES_DEEP (ohm.m) | 26.13 | 33 |
| RES_SHALLOW (ohm.m) | 26.34 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 49.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1908m: clr,lt trnsl brn,frstd,vf-med,tr crs qtz grs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid stns,tr off wh-pl brn arg mtx,fri aggs,com lse grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1916m: clr,lt trnsl brn,frstd,vf-med,tr crs qtz grs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid stns,tr off wh-pl brn arg mtx,fri aggs,com lse grs,pr 77 / 5 / 4 / 6 / 8 vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.8 | 32 |
| RES_DEEP (ohm.m) | 25.88 | 32 |
| RES_SHALLOW (ohm.m) | 27.07 | 32 |
| **Δ Res (Deep − Shallow)** | **-1.19** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1908m: clr,lt trnsl brn,frstd,vf-med,tr crs qtz grs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid stns,tr off wh-pl brn arg mtx,fri aggs,com lse grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1916m: clr,lt trnsl brn,frstd,vf-med,tr crs qtz grs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid stns,tr off wh-pl brn arg mtx,fri aggs,com lse grs,pr 77 / 5 / 4 / 6 / 8 vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.2 | 33 |
| RES_DEEP (ohm.m) | 25.34 | 33 |
| RES_SHALLOW (ohm.m) | 27.90 | 33 |
| **Δ Res (Deep − Shallow)** | **-2.55** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1916m: clr,lt trnsl brn,frstd,vf-med,tr crs qtz grs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid stns,tr off wh-pl brn arg mtx,fri aggs,com lse grs,pr 77 / 5 / 4 / 6 / 8 vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1920m: clr,trnsl brn,vf-f.tr med,wl srt, 1924 79 / 5 / 4 / 6 / 6 64 U sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,occ 1237.7 lse grs,v pr vis & inf por,fluor. FLUOR:1920-1970m;100% of SST; bri-mod bri yel/wh evn fluor,mod diff ct,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.0 | 33 |
| RES_DEEP (ohm.m) | 26.38 | 33 |
| RES_SHALLOW (ohm.m) | 28.17 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.79** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 41.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: clr,trnsl brn,vf-f.tr med,wl srt, 1924 79 / 5 / 4 / 6 / 6 64 U sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,occ 1237.7 lse grs,v pr vis & inf por,fluor. FLUOR:1920-1970m;100% of SST; bri-mod bri yel/wh evn fluor,mod diff ct,
- **SANDSTONE** @ ~1932m: clr,lt trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,fri aggs,com lse qtz grs,v pr vis por,pr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.6 | 33 |
| RES_DEEP (ohm.m) | 25.70 | 33 |
| RES_SHALLOW (ohm.m) | 27.46 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.76** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 15% Siltstone, 85% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 47U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 47.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: clr,lt trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,fri aggs,com lse qtz grs,v pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~1936m: dk-med gry,arg,micmic,frm-brit, sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.9 | 33 |
| RES_DEEP (ohm.m) | 24.80 | 33 |
| RES_SHALLOW (ohm.m) | 26.21 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.41** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 37.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: clr,lt trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,fri aggs,com lse qtz grs,v pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~1936m: dk-med gry,arg,micmic,frm-brit, sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 32 |
| RES_DEEP (ohm.m) | 23.57 | 32 |
| RES_SHALLOW (ohm.m) | 25.43 | 32 |
| **Δ Res (Deep − Shallow)** | **-1.86** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 10% Siltstone, Tr siderite in 90% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 44.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1936m: dk-med gry,arg,micmic,frm-brit, sbblky-sbfiss.
- **SANDSTONE** @ ~1943m: clr.trnsl,pl brn,wh,vf-f aggs,med-crs 1238.1 lse,mod-pr srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,tr calc grs,fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.2 | 33 |
| RES_DEEP (ohm.m) | 24.86 | 33 |
| RES_SHALLOW (ohm.m) | 26.06 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 5% Siltstone, 95% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med-crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 42.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1943m: clr.trnsl,pl brn,wh,vf-f aggs,med-crs 1238.1 lse,mod-pr srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,tr calc grs,fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1943m: clr.trnsl,pl brn,wh,vf-f aggs,med-crs lse,mod-pr srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,tr sid stns,tr calc grs,fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.5 | 33 |
| RES_DEEP (ohm.m) | 24.84 | 33 |
| RES_SHALLOW (ohm.m) | 26.17 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.33** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 5% Siltstone, 95% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med-crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1943m: clr.trnsl,pl brn,wh,vf-f aggs,med-crs 1238.1 lse,mod-pr srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,tr calc grs,fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1943m: clr.trnsl,pl brn,wh,vf-f aggs,med-crs lse,mod-pr srt,sbang-sbrnd,wk sil cmt,occ off wh arg mtx,tr sid stns,tr calc grs,fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.2 | 33 |
| RES_DEEP (ohm.m) | 25.79 | 33 |
| RES_SHALLOW (ohm.m) | 26.50 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.71** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 5% Siltstone, 95% very fine to medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 38.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1952m: clr,trnsl,pl brn,vf-f,tr med-crs,mod-wl srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,fri,com lse grs,v pr vis & inf por,fluor.
- **SILTSTONE** @ ~1956m: med-dk gry,arg,aren i/p,com micmic, frm,sbfiss-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.8 | 33 |
| RES_DEEP (ohm.m) | 26.43 | 33 |
| RES_SHALLOW (ohm.m) | 27.25 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.81** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 5% Siltstone, 95% very fine to medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1956m: med-dk gry,arg,aren i/p,com micmic, frm,sbfiss-sbblky.
- **SANDSTONE** @ ~1970m: clr,trnsl,wh,pl brn,vf-med,occ crs, dom f,sbang-sbrnd,wk sil cmt,com off wh arg mtx, 19 12 7 3 2 8.5 fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por, fluor. FLUOR:1970-2020m;100% of SST;
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.7 | 32 |
| RES_DEEP (ohm.m) | 25.77 | 32 |
| RES_SHALLOW (ohm.m) | 27.31 | 32 |
| **Δ Res (Deep − Shallow)** | **-1.54** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 5% Siltstone, 95% very fine to medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 39.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: clr,trnsl,wh,pl brn,vf-med,occ crs, dom f,sbang-sbrnd,wk sil cmt,com off wh arg mtx, 19 12 7 3 2 8.5 fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por, fluor. FLUOR:1970-2020m;100% of SST;
- **SILTSTONE** @ ~1970m: dk gry,dk brnsh gry,arg,com micmic, 1980 frm-sft,sbblky. 1238.7
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.3 | 33 |
| RES_DEEP (ohm.m) | 25.70 | 33 |
| RES_SHALLOW (ohm.m) | 26.89 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.19** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1977.5 – 1985.0 m

**Sample Description (spreadsheet):** Sample 1980m: 5% Siltstone, 95% very fine to medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 36U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 36.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: clr,trnsl,wh,pl brn,vf-med,occ crs, dom f,sbang-sbrnd,wk sil cmt,com off wh arg mtx, 19 12 7 3 2 8.5 fri aggs,com lse qtz grs,v pr vis por,pr-fr inf por, fluor. FLUOR:1970-2020m;100% of SST;
- **SILTSTONE** @ ~1970m: dk gry,dk brnsh gry,arg,com micmic, 1980 frm-sft,sbblky. 1238.7
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.3 | 49 |
| RES_DEEP (ohm.m) | 24.74 | 49 |
| RES_SHALLOW (ohm.m) | 26.72 | 49 |
| **Δ Res (Deep − Shallow)** | **-1.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1985.0 – 1995.0 m

**Sample Description (spreadsheet):** Sample 1990m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 34.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1984m: clr,trnsl,wh,pl brn,vf-f,tr med,wl srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri aggs, com lse qtz grs,v pr vis por,fluor. 79 / 5 / 4 / 6 / 6
- **SILTSTONE** @ ~1988m: dk gry,dk brnsh gry,arg,com micmic, frm-sft,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.4 | 66 |
| RES_DEEP (ohm.m) | 22.92 | 66 |
| RES_SHALLOW (ohm.m) | 25.27 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.35** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1995.0 – 2005.0 m

**Sample Description (spreadsheet):** Sample 2000m: 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 36U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 36.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1984m: clr,trnsl,wh,pl brn,vf-f,tr med,wl srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri aggs, com lse qtz grs,v pr vis por,fluor. 79 / 5 / 4 / 6 / 6
- **SILTSTONE** @ ~1988m: dk gry,dk brnsh gry,arg,com micmic, frm-sft,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.8 | 66 |
| RES_DEEP (ohm.m) | 24.80 | 66 |
| RES_SHALLOW (ohm.m) | 26.91 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.10** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: 10% Siltstone, 90% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 39.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1992m: clr,trnsl,wh,pl brn,vf-f,tr med,wl srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri aggs, com lse qtz grs,v pr vis por,fluor.
- **SANDSTONE** @ ~2004m: pl brn,clr,trnsl,vf-med,tr crs,mod wl srt,sbang-sbrnd,occ ang,wk sil cmt,tr off wh-lt gry arg mtx,fri,com lse grs,v pr vis por,pr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 65 |
| RES_DEEP (ohm.m) | 24.58 | 65 |
| RES_SHALLOW (ohm.m) | 26.64 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 28U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 28.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2032m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,tr ang,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,dom cln lse grs,pr vis & inf por,fluor. MW: 9.9 2036 F P V V : : 4 11 5 1239.5 Rmf: 0.057 ohmm @ 75° F
- **SANDSTONE** @ ~2044m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,tr ang,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,dom cln lse grs,pr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 66 |
| RES_DEEP (ohm.m) | 17.12 | 66 |
| RES_SHALLOW (ohm.m) | 19.72 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.60** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: 0% Siltstone, 100% very fine to medium, dominantly fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 28U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, dom f (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 28.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2044m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,tr ang,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,dom cln lse grs,pr vis & inf por,fluor.
- **SANDSTONE** @ ~2052m: clr,trnsl,lt brn,vf-med,dom f,mod srt, sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri, dom cln lse grs,pr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 65 |
| RES_DEEP (ohm.m) | 18.10 | 65 |
| RES_SHALLOW (ohm.m) | 20.58 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.48** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 0% Siltstone, 100% very fine to medium,dominantly fine, rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 35U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med,dom f, rr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 35.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: clr-trnsl,pl brn gry,vf-med,pred f,occ crs,mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse qtz grs,pr vis 2084 por,fr inf por,fluor. 1239.8
- **SANDSTONE** @ ~2092m: clr-trnsl,pl brn gry,vf-med,pred f,occ crs,mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com-abdt lse qtz grs,pr 2096 vis por,gd inf por,fluor. 1239.7
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 66 |
| RES_DEEP (ohm.m) | 32.62 | 66 |
| RES_SHALLOW (ohm.m) | 38.40 | 66 |
| **Δ Res (Deep − Shallow)** | **-5.78** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Siltstone, 100% very fine to medium,dominantly fine, rare coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med,dom f, rr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 37.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2092m: clr-trnsl,pl brn gry,vf-med,pred f,occ crs,mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com-abdt lse qtz grs,pr 2096 vis por,gd inf por,fluor. 1239.7
- **SANDSTONE** @ ~2104m: clr,trnsl,pl trnsl brn,vf-med,dom f,rr crs,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,pred lse disagg qtz grs,mnr fri aggs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 65 |
| RES_DEEP (ohm.m) | 34.94 | 65 |
| RES_SHALLOW (ohm.m) | 43.00 | 65 |
| **Δ Res (Deep − Shallow)** | **-8.07** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 0% Siltstone, 100% very fine to medium,dominantly fine Sandstone, 100% moderately bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med,dom f (max: med) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 37.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2104m: clr,trnsl,pl trnsl brn,vf-med,dom f,rr crs,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,pred lse disagg qtz grs,mnr fri aggs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2108m: clr,trnsl,pl trnsl brn,vf-med,dom f, 21 12 1 3 2 9.6 mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,pred lse disagg qtz grs,mnr fri aggs,pr vis por,gd inf por,fluor. 2116 FLUOR:2110-2140m;100% of SST;
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 66 |
| RES_DEEP (ohm.m) | 43.69 | 66 |
| RES_SHALLOW (ohm.m) | 57.54 | 66 |
| **Δ Res (Deep − Shallow)** | **-13.86** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 10% Siltstone, 90% very fine to coarse, common coarse, dominantly fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, com crs, dom f (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 37.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2172m: clr,trnsl,pl brn gry,vf-crs,vf-f aggs, com crs,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse disagg qtz grs,pr vis por,gd inf por, fluor. FLUOR:2170-2190m;100% of SST;
- **SANDSTONE** @ ~2181m: clr,trnsl,pl brn gry,vf-crs,vf-f aggs, com crs,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse disagg qtz grs,pr vis por,gd inf por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.7 | 65 |
| RES_DEEP (ohm.m) | 26.61 | 65 |
| RES_SHALLOW (ohm.m) | 28.96 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.35** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 5% Siltstone, 95% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2181m: clr,trnsl,pl brn gry,vf-crs,vf-f aggs, com crs,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse disagg qtz grs,pr vis por,gd inf por, fluor.
- **SILTSTONE** @ ~2184m: med lt gry brn,aren,g/t SST i/p,mnr 21 12 8 3 8 7.4 micmic,sft-fri,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.5 | 66 |
| RES_DEEP (ohm.m) | 27.59 | 66 |
| RES_SHALLOW (ohm.m) | 30.74 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 5% Siltstone, 95% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2192m: clr,trnsl,v pl trnsl brn,vf-med,occ crs, 1237.2 mod srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh
- **SANDSTONE** @ ~2212m: clr,trnsl,pl brn,vf-f,mnr med-crs,mod 22 12 1 3 6 7.0 w m l t x s , r o t, c s c b a b n lk g l - i s th b s r , n c d o , m wk f r s i i a l g cm gs t , , c o o c m c c l o s m e q p tz l b g r r n s , a p r r g vis por,gd inf por,fluor. 77 / 5 / 5 / 7 / 6
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.8 | 66 |
| RES_DEEP (ohm.m) | 26.29 | 66 |
| RES_SHALLOW (ohm.m) | 29.69 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.40** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 5% Siltstone, 95% very fine to fine, minor medium to coarse Sandstone, 100% bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, mnr med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 42.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2212m: clr,trnsl,pl brn,vf-f,mnr med-crs,mod 22 12 1 3 6 7.0 w m l t x s , r o t, c s c b a b n lk g l - i s th b s r , n c d o , m wk f r s i i a l g cm gs t , , c o o c m c c l o s m e q p tz l b g r r n s , a p r r g vis por,gd inf por,fluor. 77 / 5 / 5 / 7 / 6
- **SANDSTONE** @ ~2220m: clr,trnsl,pl trnsl brn,vf-crs,pred f-med, 1237.0 mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse qtz grs,pr vis por, gd inf por,fluor. 77 / 5 / 5 / 7 / 6 47 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.6 | 65 |
| RES_DEEP (ohm.m) | 26.24 | 65 |
| RES_SHALLOW (ohm.m) | 28.68 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.44** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 0% Siltstone, 100% very fine to coarse, dominantly fine to medium Sandstone, 100% bright FLUOR in SST. TG 47U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, dom f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 47.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2212m: clr,trnsl,pl brn,vf-f,mnr med-crs,mod 22 12 1 3 6 7.0 w m l t x s , r o t, c s c b a b n lk g l - i s th b s r , n c d o , m wk f r s i i a l g cm gs t , , c o o c m c c l o s m e q p tz l b g r r n s , a p r r g vis por,gd inf por,fluor. 77 / 5 / 5 / 7 / 6
- **SANDSTONE** @ ~2220m: clr,trnsl,pl trnsl brn,vf-crs,pred f-med, 1237.0 mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse qtz grs,pr vis por, gd inf por,fluor. 77 / 5 / 5 / 7 / 6 47 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.6 | 66 |
| RES_DEEP (ohm.m) | 26.64 | 66 |
| RES_SHALLOW (ohm.m) | 28.15 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 0% Siltstone, 100% very fine to coarse, dominantly fine to medium Sandstone, 100% bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, dom f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: clr,trnsl,pl trnsl brn,vf-crs,pred f-med, 1237.0 mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse qtz grs,pr vis por, gd inf por,fluor. 77 / 5 / 5 / 7 / 6 47 U
- **SANDSTONE** @ ~2232m: clr,trnsl,pl trnsl brn,vf-crs,pred f-med, mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse qtz grs,pr vis por, gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.7 | 65 |
| RES_DEEP (ohm.m) | 26.00 | 65 |
| RES_SHALLOW (ohm.m) | 28.40 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 42.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2232m: clr,trnsl,pl trnsl brn,vf-crs,pred f-med, mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,com lse qtz grs,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~2240m: clr,trnsl,v pl trnsl brn,vf-med,occ crs, mod srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.9 | 66 |
| RES_DEEP (ohm.m) | 27.88 | 66 |
| RES_SHALLOW (ohm.m) | 31.15 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.28** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: 0% Siltstone, 100% very fine to coarse, dominantly medium to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, dom med-crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: clr,trnsl,v pl trnsl brn,vf-med,occ crs, mod srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2252m: clr,trnsl,frstd,lt trnsl brn,vf-f aggs, f-crs aggs,pr srt,ang-sbrnd,wk sil cmt,tr pl brn-off wh arg mtx,fri aggs,dom cln lse qtz grs,pr vis por, gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 66 |
| RES_DEEP (ohm.m) | 26.91 | 66 |
| RES_SHALLOW (ohm.m) | 29.30 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: 0% Siltstone, 100% very fine to coarse, dominantly medium to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 35U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, dom med-crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 35.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2252m: clr,trnsl,frstd,lt trnsl brn,vf-f aggs, f-crs aggs,pr srt,ang-sbrnd,wk sil cmt,tr pl brn-off wh arg mtx,fri aggs,dom cln lse qtz grs,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~2264m: clr,trnsl,frstd,lt trnsl brn,vf-f aggs, f-crs aggs,pr srt,ang-sbrnd,wk sil cmt,tr pl brn-off wh arg mtx,fri aggs,dom cln lse qtz grs,pr vis por, gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 65 |
| RES_DEEP (ohm.m) | 25.22 | 65 |
| RES_SHALLOW (ohm.m) | 26.77 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.55** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2275.0 – 2285.0 m

**Sample Description (spreadsheet):** Sample 2280m: 0% Siltstone, 100% very fine to coarse, dominantly medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, dom med (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2264m: clr,trnsl,frstd,lt trnsl brn,vf-f aggs, f-crs aggs,pr srt,ang-sbrnd,wk sil cmt,tr pl brn-off wh arg mtx,fri aggs,dom cln lse qtz grs,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~2284m: clr,trnsl,frstd,trnsl brn,vf-crs,dom med,pr-mod srt,sbrnd-sbang,wk sil cmt,tr lt brn-off wh arg mtx,tr fri aggs,cln lse grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 66 |
| RES_DEEP (ohm.m) | 23.42 | 66 |
| RES_SHALLOW (ohm.m) | 24.45 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2285.0 – 2295.0 m

**Sample Description (spreadsheet):** Sample 2290m: 0% Siltstone, 100% very fine to coarse, dominantly medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, dom med (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 41.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2284m: clr,trnsl,frstd,trnsl brn,vf-crs,dom med,pr-mod srt,sbrnd-sbang,wk sil cmt,tr lt brn-off wh arg mtx,tr fri aggs,cln lse grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2292m: clr,pl brn,lt trnsl brn,vf-med,tr crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr off wh-lt 22 12 9 3 6 7.1 brn arg mtx,fri,com lse grs,v pr vis por,pr-fr inf por, fluor. 77 / 5 / 5 / 7 / 6 47 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 66 |
| RES_DEEP (ohm.m) | 23.42 | 66 |
| RES_SHALLOW (ohm.m) | 24.83 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.40** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2295.0 – 2305.0 m

**Sample Description (spreadsheet):** Sample 2300m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 26U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 26.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2284m: clr,trnsl,frstd,trnsl brn,vf-crs,dom med,pr-mod srt,sbrnd-sbang,wk sil cmt,tr lt brn-off wh arg mtx,tr fri aggs,cln lse grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2292m: clr,pl brn,lt trnsl brn,vf-med,tr crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr off wh-lt 22 12 9 3 6 7.1 brn arg mtx,fri,com lse grs,v pr vis por,pr-fr inf por, fluor. 77 / 5 / 5 / 7 / 6 47 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 65 |
| RES_DEEP (ohm.m) | 21.85 | 65 |
| RES_SHALLOW (ohm.m) | 25.00 | 65 |
| **Δ Res (Deep − Shallow)** | **-3.14** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2305.0 – 2315.0 m

**Sample Description (spreadsheet):** Sample 2310m: 5% Siltstone, 95% very fine to medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 26U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 26.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2292m: clr,pl brn,lt trnsl brn,vf-med,tr crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,tr off wh-lt 22 12 9 3 6 7.1 brn arg mtx,fri,com lse grs,v pr vis por,pr-fr inf por, fluor. 77 / 5 / 5 / 7 / 6 47 U
- **SILTSTONE** @ ~2308m: med-dk gry,aren,grd to vf SST,com micmic,tr carb spks,frm-mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.8 | 66 |
| RES_DEEP (ohm.m) | 22.79 | 66 |
| RES_SHALLOW (ohm.m) | 24.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.29** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2345.0 – 2355.0 m

**Sample Description (spreadsheet):** Sample 2350m: 10% Siltstone, Tr siderite in 90% very fine to medium,occasional coarse, trace very coarse Sandstone, 100% dull FLUOR in SST. TG 30U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med,occ crs, tr v crs (max: v crs) |
| Fluorescence | 100.0% dll |
| Total Gas | 30.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2340m: dk-med gry,aren,grd to vf SST,micmic, tr sndy lams,frm,sbblky.
- **SANDSTONE** @ ~2344m: trnsl,clr,trnsl brn,vf-med,occ crs,tr v crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid strs, com off wh arg mtx,fri,com cln lse grs,pr vis por, pr-fr inf por,fluor.
- _(16 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.8 | 65 |
| RES_DEEP (ohm.m) | 13.04 | 65 |
| RES_SHALLOW (ohm.m) | 14.29 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.25** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2355.0 – 2363.5 m

**Sample Description (spreadsheet):** Sample 2360m: 20% Siltstone, Tr siderite in 80% very fine to medium, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 25.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2340m: dk-med gry,aren,grd to vf SST,micmic, tr sndy lams,frm,sbblky.
- **SANDSTONE** @ ~2344m: trnsl,clr,trnsl brn,vf-med,occ crs,tr v crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid strs, com off wh arg mtx,fri,com cln lse grs,pr vis por, pr-fr inf por,fluor.
- _(18 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.3 | 56 |
| RES_DEEP (ohm.m) | 12.90 | 56 |
| RES_SHALLOW (ohm.m) | 13.89 | 56 |
| **Δ Res (Deep − Shallow)** | **-0.99** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2367 m MD — Interval 2363.5 – 2368.5 m

**Sample Description (spreadsheet):** Sample 2367m: 15% Siltstone, Tr siderite in 85% very fine to medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 25.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2352m: clr,trnsl,pl brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,tr sid cmt,com off wh arg mtx,fri,com cln lse grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2360m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor. 59 / 5 / 7 / 14 / 15
- _(15 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.4 | 33 |
| RES_DEEP (ohm.m) | 11.60 | 33 |
| RES_SHALLOW (ohm.m) | 12.68 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2368.5 – 2371.5 m

**Sample Description (spreadsheet):** Sample 2370m: 10% Siltstone, Tr siderite in 90% very fine to medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 25.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor. 59 / 5 / 7 / 14 / 15
- **SANDSTONE** @ ~2368m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor.
- _(15 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.0 | 20 |
| RES_DEEP (ohm.m) | 11.66 | 20 |
| RES_SHALLOW (ohm.m) | 12.96 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2373 m MD — Interval 2371.5 – 2374.5 m

**Sample Description (spreadsheet):** Sample 2373m: 10% Siltstone, Tr siderite in 90% very fine to medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 20U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 20.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor. 59 / 5 / 7 / 14 / 15
- **SANDSTONE** @ ~2368m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor.
- _(15 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.1 | 19 |
| RES_DEEP (ohm.m) | 12.76 | 19 |
| RES_SHALLOW (ohm.m) | 13.83 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2376 m MD — Interval 2374.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2376m: 15% Siltstone, Occ siderite in 85% very fine to medium, trace coarse Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 15U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 50.0% dll - mod bri |
| Total Gas | 15.0 U |
| FeCO₃ in Sandstone | Occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor. 59 / 5 / 7 / 14 / 15
- **SANDSTONE** @ ~2368m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor.
- _(15 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.0 | 20 |
| RES_DEEP (ohm.m) | 12.46 | 20 |
| RES_SHALLOW (ohm.m) | 13.54 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2379 m MD — Interval 2377.5 – 2380.5 m

**Sample Description (spreadsheet):** Sample 2379m: 0.570833333333333 siderite in 20% Siltstone, Occ siderite in 80% very fine to medium, trace coarse Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 16U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 50.0% dll - mod bri |
| Total Gas | 16.0 U |
| FeCO₃ in Sandstone | Occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2368m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor.
- **SANDSTONE** @ ~2372m: lt brn,clr,trnsl,vf-med,tr crs, sbang-sbrnd,wk sil cmt,occ sid cmt,com off wh-lt brn arg mtx,fri,com lse grs,v pr vis por,pr inf por, fluor.
- _(14 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.8 | 20 |
| RES_DEEP (ohm.m) | 13.19 | 20 |
| RES_SHALLOW (ohm.m) | 14.41 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2382 m MD — Interval 2380.5 – 2383.5 m

**Sample Description (spreadsheet):** Sample 2382m: 0.579166666666667 siderite in 20% Siltstone, Com siderite in 80% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 15U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 15.0 U |
| FeCO₃ in Sandstone | Com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2368m: clr,trnsl,lt-med trnsl gry,pl brn,vf-med, mod wl srt,sbang-sbrnd,tr rnd,wk sil cmt,tr sid cmt, com lt brn-off wh arg mtx,fri,cln lse grs,v pr vis por, fr inf por,fluor.
- **SANDSTONE** @ ~2372m: lt brn,clr,trnsl,vf-med,tr crs, sbang-sbrnd,wk sil cmt,occ sid cmt,com off wh-lt brn arg mtx,fri,com lse grs,v pr vis por,pr inf por, fluor.
- _(14 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.3 | 19 |
| RES_DEEP (ohm.m) | 12.30 | 19 |
| RES_SHALLOW (ohm.m) | 13.43 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2385 m MD — Interval 2383.5 – 2386.5 m

**Sample Description (spreadsheet):** Sample 2385m: 0.586111111111111 siderite in 15% Siltstone, Occ siderite in 85% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 16U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 16.0 U |
| FeCO₃ in Sandstone | Occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2372m: lt brn,clr,trnsl,vf-med,tr crs, sbang-sbrnd,wk sil cmt,occ sid cmt,com off wh-lt brn arg mtx,fri,com lse grs,v pr vis por,pr inf por, fluor.
- **SILTSTONE** @ ~2376m: lt-dk gry,aren,grd to vf SST i/p,com 55 / 4 / 8 / 15 / 18 micmic,tr sndy lams,frm,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.6 | 20 |
| RES_DEEP (ohm.m) | 12.69 | 20 |
| RES_SHALLOW (ohm.m) | 13.87 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.19** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2388 m MD — Interval 2386.5 – 2389.5 m

**Sample Description (spreadsheet):** Sample 2388m: 0.604861111111111 siderite in 15% Siltstone, Occ siderite in 85% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 17U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 17.0 U |
| FeCO₃ in Sandstone | Occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2372m: lt brn,clr,trnsl,vf-med,tr crs, sbang-sbrnd,wk sil cmt,occ sid cmt,com off wh-lt brn arg mtx,fri,com lse grs,v pr vis por,pr inf por, fluor.
- **SILTSTONE** @ ~2376m: lt-dk gry,aren,grd to vf SST i/p,com 55 / 4 / 8 / 15 / 18 micmic,tr sndy lams,frm,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.9 | 20 |
| RES_DEEP (ohm.m) | 12.35 | 20 |
| RES_SHALLOW (ohm.m) | 13.40 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2391 m MD — Interval 2389.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2391m: 0.609027777777778 siderite in 10% Siltstone, Occ siderite in 90% very fine to medium, trace coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 18U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 18.0 U |
| FeCO₃ in Sandstone | Occ |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2376m: lt-dk gry,aren,grd to vf SST i/p,com 55 / 4 / 8 / 15 / 18 micmic,tr sndy lams,frm,sbblky.
- **SANDSTONE** @ ~2384m: clr,trnsl,lt gry,pl brn,vf-med,tr crs, mod srt,sbang-sbrnd,wk-mod sil cmt,occ sid cmt,fri, v pr vis por,pr-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.6 | 19 |
| RES_DEEP (ohm.m) | 12.16 | 19 |
| RES_SHALLOW (ohm.m) | 12.99 | 19 |
| **Δ Res (Deep − Shallow)** | **-0.83** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2394 m MD — Interval 2392.5 – 2395.5 m

**Sample Description (spreadsheet):** Sample 2394m: 0.614583333333333 siderite in 15% Siltstone, Occ siderite in 85% very fine to medium, trace coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 22U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 22.0 U |
| FeCO₃ in Sandstone | Occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2384m: clr,trnsl,lt gry,pl brn,vf-med,tr crs, mod srt,sbang-sbrnd,wk-mod sil cmt,occ sid cmt,fri, v pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.2 | 20 |
| RES_DEEP (ohm.m) | 12.59 | 20 |
| RES_SHALLOW (ohm.m) | 13.64 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2397 m MD — Interval 2395.5 – 2398.5 m

**Sample Description (spreadsheet):** Sample 2397m: 0.626388888888889 siderite in 15% Siltstone, Occ siderite in 85% very fine to medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 25.0 U |
| FeCO₃ in Sandstone | Occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2384m: clr,trnsl,lt gry,pl brn,vf-med,tr crs, mod srt,sbang-sbrnd,wk-mod sil cmt,occ sid cmt,fri, v pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.7 | 20 |
| RES_DEEP (ohm.m) | 12.56 | 20 |
| RES_SHALLOW (ohm.m) | 13.48 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.92** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2398.5 – 2401.5 m

**Sample Description (spreadsheet):** Sample 2400m: 15% Siltstone, Tr siderite in 85% very fine to medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 21U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 21.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2384m: clr,trnsl,lt gry,pl brn,vf-med,tr crs, mod srt,sbang-sbrnd,wk-mod sil cmt,occ sid cmt,fri, v pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.8 | 19 |
| RES_DEEP (ohm.m) | 12.02 | 19 |
| RES_SHALLOW (ohm.m) | 12.92 | 19 |
| **Δ Res (Deep − Shallow)** | **-0.90** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2403 m MD — Interval 2401.5 – 2404.5 m

**Sample Description (spreadsheet):** Sample 2403m: 10% Siltstone, Tr siderite in 90% very fine to medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 13U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 13.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.
- **SANDSTONE** @ ~2412m: clr,trnsl,lt brn gry,vf-f,mnr med-crs, mod srt,sbang-sbrnd,mod wk sil cmt,occ off wh arg mtx,occ slty lams,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.7 | 20 |
| RES_DEEP (ohm.m) | 12.36 | 20 |
| RES_SHALLOW (ohm.m) | 13.06 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.70** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2406 m MD — Interval 2404.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2406m: 10% Siltstone, Tr siderite in 90% very fine to fine, trace medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 17U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 17.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.
- **SANDSTONE** @ ~2412m: clr,trnsl,lt brn gry,vf-f,mnr med-crs, mod srt,sbang-sbrnd,mod wk sil cmt,occ off wh arg mtx,occ slty lams,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.1 | 20 |
| RES_DEEP (ohm.m) | 12.08 | 20 |
| RES_SHALLOW (ohm.m) | 12.88 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.80** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2409 m MD — Interval 2407.5 – 2410.5 m

**Sample Description (spreadsheet):** Sample 2409m: 20% Siltstone, Tr siderite in 80% very fine to fine, trace medium Sandstone, 90% dull  to  moderately bright FLUOR in SST. TG 18U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 90.0% dll - mod bri |
| Total Gas | 18.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.
- **SANDSTONE** @ ~2412m: clr,trnsl,lt brn gry,vf-f,mnr med-crs, mod srt,sbang-sbrnd,mod wk sil cmt,occ off wh arg mtx,occ slty lams,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.5 | 19 |
| RES_DEEP (ohm.m) | 11.61 | 19 |
| RES_SHALLOW (ohm.m) | 12.51 | 19 |
| **Δ Res (Deep − Shallow)** | **-0.90** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2412 m MD — Interval 2410.5 – 2413.5 m

**Sample Description (spreadsheet):** Sample 2412m: 10% Siltstone, Tr siderite in 90% very fine to fine, trace medium Sandstone, 90% dull  to  moderately bright FLUOR in SST. TG 21U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 90.0% dll - mod bri |
| Total Gas | 21.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.
- **SANDSTONE** @ ~2412m: clr,trnsl,lt brn gry,vf-f,mnr med-crs, mod srt,sbang-sbrnd,mod wk sil cmt,occ off wh arg mtx,occ slty lams,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.1 | 20 |
| RES_DEEP (ohm.m) | 11.19 | 20 |
| RES_SHALLOW (ohm.m) | 12.11 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.92** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2415 m MD — Interval 2413.5 – 2416.5 m

**Sample Description (spreadsheet):** Sample 2415m: 20% Siltstone, Tr siderite in 80% very fine to fine, trace medium to coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 19U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f, tr med-crs (max: crs) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 19.0 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2408m: dk-med gry,aren,com micmic,mod hd-frm,sbblky.
- **SANDSTONE** @ ~2412m: clr,trnsl,lt brn gry,vf-f,mnr med-crs, mod srt,sbang-sbrnd,mod wk sil cmt,occ off wh arg mtx,occ slty lams,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.8 | 20 |
| RES_DEEP (ohm.m) | 11.70 | 20 |
| RES_SHALLOW (ohm.m) | 12.67 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2439 m MD — Interval 2437.5 – 2440.5 m

**Sample Description (spreadsheet):** Sample 2439m: 5% Siltstone, common siderite in 95% very fine to medium, occasional coarse Sandstone, 10% dull FLUOR in SST. TG 20U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 10.0% dll |
| Total Gas | 20.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2436m: clr,trnsl,pl gry brn,vf-med,occ crs,pr srt,sbang-sbrnd,mod wk sil cmt,occ sid cmt, occ-com pl gry-off wh arg mtx,mnr slty lams,fri- mod hd,com-abdt lse grs,pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.8 | 19 |
| RES_DEEP (ohm.m) | 27.27 | 19 |
| RES_SHALLOW (ohm.m) | 38.46 | 19 |
| **Δ Res (Deep − Shallow)** | **-11.19** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2442 m MD — Interval 2440.5 – 2443.5 m

**Sample Description (spreadsheet):** Sample 2442m: 20% Siltstone, common siderite in 80% very fine to medium, occasional coarse Sandstone, 80% moderately bright FLUOR in SST. TG 24U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 24.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2436m: clr,trnsl,pl gry brn,vf-med,occ crs,pr srt,sbang-sbrnd,mod wk sil cmt,occ sid cmt, occ-com pl gry-off wh arg mtx,mnr slty lams,fri- mod hd,com-abdt lse grs,pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 20 |
| RES_DEEP (ohm.m) | 28.20 | 20 |
| RES_SHALLOW (ohm.m) | 33.55 | 20 |
| **Δ Res (Deep − Shallow)** | **-5.35** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2445 m MD — Interval 2443.5 – 2446.5 m

**Sample Description (spreadsheet):** Sample 2445m: 10% Siltstone, common siderite in 90% fine to medium,occasional coarse Sandstone, 90% bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med,occ crs (max: crs) |
| Fluorescence | 90.0% bri |
| Total Gas | 34.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2436m: clr,trnsl,pl gry brn,vf-med,occ crs,pr srt,sbang-sbrnd,mod wk sil cmt,occ sid cmt, occ-com pl gry-off wh arg mtx,mnr slty lams,fri- mod hd,com-abdt lse grs,pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.6 | 20 |
| RES_DEEP (ohm.m) | 30.49 | 20 |
| RES_SHALLOW (ohm.m) | 31.77 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2448 m MD — Interval 2446.5 – 2449.5 m

**Sample Description (spreadsheet):** Sample 2448m: 5% Siltstone, common siderite in 95% fine to medium,occasional coarse Sandstone, 100% bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med,occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 27.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2436m: clr,trnsl,pl gry brn,vf-med,occ crs,pr srt,sbang-sbrnd,mod wk sil cmt,occ sid cmt, occ-com pl gry-off wh arg mtx,mnr slty lams,fri- mod hd,com-abdt lse grs,pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.4 | 19 |
| RES_DEEP (ohm.m) | 27.18 | 19 |
| RES_SHALLOW (ohm.m) | 32.14 | 19 |
| **Δ Res (Deep − Shallow)** | **-4.95** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2451 m MD — Interval 2449.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2451m: 0% Siltstone, occasional siderite in 100% fine to medium,occasional coarse Sandstone, 100% bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med,occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 34.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2436m: clr,trnsl,pl gry brn,vf-med,occ crs,pr srt,sbang-sbrnd,mod wk sil cmt,occ sid cmt, occ-com pl gry-off wh arg mtx,mnr slty lams,fri- mod hd,com-abdt lse grs,pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 20 |
| RES_DEEP (ohm.m) | 25.82 | 20 |
| RES_SHALLOW (ohm.m) | 29.68 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.86** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2454 m MD — Interval 2452.5 – 2455.5 m

**Sample Description (spreadsheet):** Sample 2454m: 0% Siltstone, occasional siderite in 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 34.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- **SANDSTONE** @ ~2448m: clr,trnsl,v pl brn,f-med,occ crs,pr srt, sbang-sbrnd,wh sil cmt,mnr sid cmt,com off wh-lt brn arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 20 |
| RES_DEEP (ohm.m) | 29.93 | 20 |
| RES_SHALLOW (ohm.m) | 31.93 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.00** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2457 m MD — Interval 2455.5 – 2458.5 m

**Sample Description (spreadsheet):** Sample 2457m: 0% Siltstone, trace siderite in 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 33.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- **SANDSTONE** @ ~2448m: clr,trnsl,v pl brn,f-med,occ crs,pr srt, sbang-sbrnd,wh sil cmt,mnr sid cmt,com off wh-lt brn arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 19 |
| RES_DEEP (ohm.m) | 26.88 | 19 |
| RES_SHALLOW (ohm.m) | 28.86 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2458.5 – 2461.5 m

**Sample Description (spreadsheet):** Sample 2460m: 0% Siltstone, trace siderite in 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 36U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 33.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- **SANDSTONE** @ ~2448m: clr,trnsl,v pl brn,f-med,occ crs,pr srt, sbang-sbrnd,wh sil cmt,mnr sid cmt,com off wh-lt brn arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 20 |
| RES_DEEP (ohm.m) | 28.23 | 20 |
| RES_SHALLOW (ohm.m) | 29.40 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2463 m MD — Interval 2461.5 – 2464.5 m

**Sample Description (spreadsheet):** Sample 2463m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 36.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2448m: 1851-2349 psi SANDSTONE:clr,trnsl,v pl brn,f-med,occ crs,pr srt, 2452 inf por,fluor. 1242.8
- **SANDSTONE** @ ~2448m: clr,trnsl,v pl brn,f-med,occ crs,pr srt, sbang-sbrnd,wh sil cmt,mnr sid cmt,com off wh-lt brn arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.9 | 20 |
| RES_DEEP (ohm.m) | 26.38 | 20 |
| RES_SHALLOW (ohm.m) | 28.86 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.49** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2466 m MD — Interval 2464.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2466m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 30U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 34.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,v pl brn,f-med,mnr crs,pr srt, sbang-sbrnd,wk sil cmt,com lt brn-off wh arg mtx,fri 81 / 5 / 4 / 5 / 5 aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2464m: med gry brn,aren,grd to SST,com micmic,mod hd-frm,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 19 |
| RES_DEEP (ohm.m) | 27.29 | 19 |
| RES_SHALLOW (ohm.m) | 30.27 | 19 |
| **Δ Res (Deep − Shallow)** | **-2.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2469 m MD — Interval 2467.5 – 2470.5 m

**Sample Description (spreadsheet):** Sample 2469m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 30.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,v pl brn,f-med,mnr crs,pr srt, sbang-sbrnd,wk sil cmt,com lt brn-off wh arg mtx,fri 81 / 5 / 4 / 5 / 5 aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2464m: med gry brn,aren,grd to SST,com micmic,mod hd-frm,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 20 |
| RES_DEEP (ohm.m) | 27.68 | 20 |
| RES_SHALLOW (ohm.m) | 30.25 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.57** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2472 m MD — Interval 2470.5 – 2476.0 m

**Sample Description (spreadsheet):** Sample 2472m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 37.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,v pl brn,f-med,mnr crs,pr srt, sbang-sbrnd,wk sil cmt,com lt brn-off wh arg mtx,fri 81 / 5 / 4 / 5 / 5 aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2464m: med gry brn,aren,grd to SST,com micmic,mod hd-frm,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.0 | 36 |
| RES_DEEP (ohm.m) | 26.14 | 36 |
| RES_SHALLOW (ohm.m) | 29.60 | 36 |
| **Δ Res (Deep − Shallow)** | **-3.46** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2476.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2464m: med gry brn,aren,grd to SST,com micmic,mod hd-frm,sbblky.
- **SANDSTONE** @ ~2468m: clr,trnsl,pl trnsl brn,vf-med,occ crs,pr srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,tr slty lams,com fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.1 | 59 |
| RES_DEEP (ohm.m) | 23.67 | 59 |
| RES_SHALLOW (ohm.m) | 26.61 | 59 |
| **Δ Res (Deep − Shallow)** | **-2.94** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 73.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2476m: clr,trnsl,pl trnsl brn,vf-med,occ crs,pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx,com fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor. FLUOR:2472-2520m;100% of SST;
- **SANDSTONE** @ ~2480m: clr,trnsl,pl trnsl brn,vf-med,occ crs,pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx,com fri aggs,com lse qtz grs,tr slty lams,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 66 |
| RES_DEEP (ohm.m) | 22.84 | 66 |
| RES_SHALLOW (ohm.m) | 25.94 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.10** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 0% Siltstone, 100% very fine to veryrs, common coarse Sandstone, 100% bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-vrs, com crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 54.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr,trnsl,pl trnsl brn,vf-med,occ crs,pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx,com fri aggs,com lse qtz grs,tr slty lams,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2492m: clr,trnsl,vf-crs,com crs,pr srt, sbang-sbrnd,mod wk sil cmt,com-occ pl brn-off wh arg mtx,occ-com fri aggs,com-abdt lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 66 |
| RES_DEEP (ohm.m) | 22.72 | 66 |
| RES_SHALLOW (ohm.m) | 25.56 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.84** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 10% Siltstone, 90% very fine to veryrs, common coarse Sandstone, 100% bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-vrs, com crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 54.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2492m: clr,trnsl,vf-crs,com crs,pr srt, sbang-sbrnd,mod wk sil cmt,com-occ pl brn-off wh arg mtx,occ-com fri aggs,com-abdt lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2502m: med dk gry,aren,grd to SST,micmic, 2504 com carb spks,sft-frm i/p,sbblky. 1243.3
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.1 | 65 |
| RES_DEEP (ohm.m) | 22.41 | 65 |
| RES_SHALLOW (ohm.m) | 25.64 | 65 |
| **Δ Res (Deep − Shallow)** | **-3.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2515.0 – 2525.0 m

**Sample Description (spreadsheet):** Sample 2520m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 60.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2502m: med dk gry,aren,grd to SST,micmic, 2504 com carb spks,sft-frm i/p,sbblky. 1243.3
- **SANDSTONE** @ ~2512m: clr,trnsl,vf-crs,pred f-med,pr srt, sbang-sbrnd,mod wk sil cmt,com lt brn-wh arg mtx, tr slty lams,com mod hd-fri aggs,com lse qtz grs,pr 2516 vis por,gd inf por,fluor. 1243.3
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 66 |
| RES_DEEP (ohm.m) | 22.06 | 66 |
| RES_SHALLOW (ohm.m) | 26.18 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2525.0 – 2535.0 m

**Sample Description (spreadsheet):** Sample 2530m: 10% Siltstone, 90% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 62U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 62.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2512m: clr,trnsl,vf-crs,pred f-med,pr srt, sbang-sbrnd,mod wk sil cmt,com lt brn-wh arg mtx, tr slty lams,com mod hd-fri aggs,com lse qtz grs,pr 2516 vis por,gd inf por,fluor. 1243.3
- **SANDSTONE** @ ~2524m: clr,trnsl,vf-crs,pred f-med,pr srt, sbang-sbrnd,wk sil cmt,com lt brn-wh arg mtx,tr slty lams,com fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor. 2528 MD:2528.1 m
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.4 | 65 |
| RES_DEEP (ohm.m) | 22.90 | 65 |
| RES_SHALLOW (ohm.m) | 27.47 | 65 |
| **Δ Res (Deep − Shallow)** | **-4.57** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2535.0 – 2545.0 m

**Sample Description (spreadsheet):** Sample 2540m: 10% Siltstone, 90% very fine to fine, rare medium to coarse Sandstone, 100% bright FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, rr med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 67.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2524m: clr,trnsl,vf-crs,pred f-med,pr srt, sbang-sbrnd,wk sil cmt,com lt brn-wh arg mtx,tr slty lams,com fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor. 2528 MD:2528.1 m
- **SANDSTONE** @ ~2528m: clr,trnsl,pl trnsl brn,vf-f,rr med-crs, mod wl srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,fri aggs,mnr lse,pr vis por,pr-fr inf por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 66 |
| RES_DEEP (ohm.m) | 23.03 | 66 |
| RES_SHALLOW (ohm.m) | 26.57 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.53** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2545.0 – 2555.0 m

**Sample Description (spreadsheet):** Sample 2550m: 5% Siltstone, trace siderite in 95% very fine to fine, rare medium to coarse Sandstone, 100% bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, rr med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 88.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,pl trnsl brn,vf-f,rr med-crs, 1243.1 mod wl srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,com off wh-lt brn arg mtx,fri aggs,com lse qtz grs,pr vis 81 / 5 / 4 / 5 / 5 90 U por,gd inf por,fluor.
- **SANDSTONE** @ ~2560m: clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, wl srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,com off 82 / 5 / 4 / 5 / 4 126 U wh-lt brn arg mtx,occ-com fri aggs,pred lse qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.5 | 66 |
| RES_DEEP (ohm.m) | 25.39 | 66 |
| RES_SHALLOW (ohm.m) | 30.24 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.85** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2555.0 – 2565.0 m

**Sample Description (spreadsheet):** Sample 2560m: 10% Siltstone, 90% very fine to fine, rare medium to coarse Sandstone, 100% bright FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, rr med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 103.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,pl trnsl brn,vf-f,rr med-crs, 1243.1 mod wl srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,com off wh-lt brn arg mtx,fri aggs,com lse qtz grs,pr vis 81 / 5 / 4 / 5 / 5 90 U por,gd inf por,fluor.
- **SANDSTONE** @ ~2560m: clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, wl srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,com off 82 / 5 / 4 / 5 / 4 126 U wh-lt brn arg mtx,occ-com fri aggs,pred lse qtz grs, pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.3 | 65 |
| RES_DEEP (ohm.m) | 25.86 | 65 |
| RES_SHALLOW (ohm.m) | 31.32 | 65 |
| **Δ Res (Deep − Shallow)** | **-5.46** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2565.0 – 2575.0 m

**Sample Description (spreadsheet):** Sample 2570m: 5% Siltstone, trace siderite in 95% very fine to fine, rare medium to coarse Sandstone, 100% bright FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, rr med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 125.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, wl srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,com off 82 / 5 / 4 / 5 / 4 126 U wh-lt brn arg mtx,occ-com fri aggs,pred lse qtz grs, pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2572m: clr-trnsl,pl trnsl brn,vf-f,pred crs,pr srt,sbang-sbrnd,wk sil cmt,com sid cmt,occ-com off wh-lt brn arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 66 |
| RES_DEEP (ohm.m) | 28.09 | 66 |
| RES_SHALLOW (ohm.m) | 32.24 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.15** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2575.0 – 2585.0 m

**Sample Description (spreadsheet):** Sample 2580m: 0% Siltstone, common siderite in 100% very fine to fine, pred coarse Sandstone, 100% bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, pred crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 120.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, wl srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,com off 82 / 5 / 4 / 5 / 4 126 U wh-lt brn arg mtx,occ-com fri aggs,pred lse qtz grs, pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2572m: clr-trnsl,pl trnsl brn,vf-f,pred crs,pr srt,sbang-sbrnd,wk sil cmt,com sid cmt,occ-com off wh-lt brn arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.5 | 65 |
| RES_DEEP (ohm.m) | 26.29 | 65 |
| RES_SHALLOW (ohm.m) | 30.81 | 65 |
| **Δ Res (Deep − Shallow)** | **-4.52** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2585.0 – 2595.0 m

**Sample Description (spreadsheet):** Sample 2590m: 0% Siltstone, trace siderite in 100% very fine to fine, pred coarse Sandstone, 100% bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, pred crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 110.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2572m: clr-trnsl,pl trnsl brn,vf-f,pred crs,pr srt,sbang-sbrnd,wk sil cmt,com sid cmt,occ-com off wh-lt brn arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2581m: clr-trnsl,pl trnsl brn,vf-f,pred crs,pr srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,occ-com off wh-lt brn arg mtx,occ fri aggs,pred lse qtz grs,pr vis 2584 por,gd inf por,fluor. 1242.8
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 66 |
| RES_DEEP (ohm.m) | 26.56 | 66 |
| RES_SHALLOW (ohm.m) | 31.22 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.67** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2600 m MD — Interval 2595.0 – 2605.0 m

**Sample Description (spreadsheet):** Sample 2600m: 0% Siltstone, 100% very fine to verycoarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-vcrs, pred med-crs (max: v crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 119.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2581m: clr-trnsl,pl trnsl brn,vf-f,pred crs,pr srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,occ-com off wh-lt brn arg mtx,occ fri aggs,pred lse qtz grs,pr vis 2584 por,gd inf por,fluor. 1242.8
- **SANDSTONE** @ ~2592m: clr,trnsl,pl trnsl brn,vf-v crs,pred med-crs,pr srt,sbang-sbrnd,wk sil cmt,occ com lt brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 66 |
| RES_DEEP (ohm.m) | 28.26 | 66 |
| RES_SHALLOW (ohm.m) | 30.89 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.63** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2605.0 – 2615.0 m

**Sample Description (spreadsheet):** Sample 2610m: 0% Siltstone, 100% very fine to verycoarse, pred very coarse Sandstone, 100% bright FLUOR in SST. TG 134U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-vcrs, pred v crs (max: v crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 134.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2592m: clr,trnsl,pl trnsl brn,vf-v crs,pred med-crs,pr srt,sbang-sbrnd,wk sil cmt,occ com lt brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2604m: clr,trnsl,pl trnsl brn,vf-v crs,pred v crs,pr srt,sbang-sbrnd,wk sil cmt,occ com lt brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor. 26 12 0 4 8 2.4 M VD D : : 2 1 6 2 0 4 8 2 . . 1 4 m m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 65 |
| RES_DEEP (ohm.m) | 27.64 | 65 |
| RES_SHALLOW (ohm.m) | 32.16 | 65 |
| **Δ Res (Deep − Shallow)** | **-4.52** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2615.0 – 2625.0 m

**Sample Description (spreadsheet):** Sample 2620m: 0% Siltstone, 100% very fine  to  coarse pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 129U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf - crs pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 129.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2604m: clr,trnsl,pl trnsl brn,vf-v crs,pred v crs,pr srt,sbang-sbrnd,wk sil cmt,occ com lt brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor. 26 12 0 4 8 2.4 M VD D : : 2 1 6 2 0 4 8 2 . . 1 4 m m
- **SANDSTONE** @ ~2624m: clr,trnsl,pl trnsl brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk sil cmt,occ pl brn-wh arg mtx, fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.3 | 66 |
| RES_DEEP (ohm.m) | 34.00 | 66 |
| RES_SHALLOW (ohm.m) | 39.11 | 66 |
| **Δ Res (Deep − Shallow)** | **-5.11** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2625.0 – 2635.0 m

**Sample Description (spreadsheet):** Sample 2630m: 0% Siltstone, 100% very fine  to  coarse pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf - crs pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 114.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2624m: clr,trnsl,pl trnsl brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk sil cmt,occ pl brn-wh arg mtx, fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2628m: clr,trnsl,pl trnsl brn,vf-crs,tr v crs, 1241.9 pred f-med,pr srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.7 | 66 |
| RES_DEEP (ohm.m) | 45.98 | 66 |
| RES_SHALLOW (ohm.m) | 48.58 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.61** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2665.0 – 2675.0 m

**Sample Description (spreadsheet):** Sample 2670m: 10% Siltstone, common siderite in 90% very fine to coarse, pred fine to medium Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 47U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 60.0% dll - mod bri |
| Total Gas | 47.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2664m: clr,trnsl,lt brn,lt-med trnsl gry,vf-crs, pred f-med,pr srt,sbang-sbrnd,tr ang,wk sil cmt, com sid cmt,occ off wh ang mtx,fri,com lse qtz grs, v pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2672m: clr,trnsl,pl brn,vf-med,tr crs,pr srt, sbang-sbrnd,tr ang,wk sil cmt,com sid cmt,com off wh arg mtx,fri aggs,com lse grs,v pr vis por, pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 120.7 | 66 |
| RES_DEEP (ohm.m) | 13.20 | 66 |
| RES_SHALLOW (ohm.m) | 14.54 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.34** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 15% Siltstone, common siderite in 85% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 45.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2664m: clr,trnsl,lt brn,lt-med trnsl gry,vf-crs, pred f-med,pr srt,sbang-sbrnd,tr ang,wk sil cmt, com sid cmt,occ off wh ang mtx,fri,com lse qtz grs, v pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2672m: clr,trnsl,pl brn,vf-med,tr crs,pr srt, sbang-sbrnd,tr ang,wk sil cmt,com sid cmt,com off wh arg mtx,fri aggs,com lse grs,v pr vis por, pr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.2 | 66 |
| RES_DEEP (ohm.m) | 12.42 | 66 |
| RES_SHALLOW (ohm.m) | 13.56 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 15% Siltstone, common siderite in 85% very fine to medium, trace coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 46.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2672m: clr,trnsl,pl brn,vf-med,tr crs,pr srt, sbang-sbrnd,tr ang,wk sil cmt,com sid cmt,com off wh arg mtx,fri aggs,com lse grs,v pr vis por, pr inf por,fluor.
- **SILTSTONE** @ ~2676m: dk-med gry,dk brnsh gry,aren,g/t vf SST i/p,com carb spks,micmic,frm,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.7 | 65 |
| RES_DEEP (ohm.m) | 11.88 | 65 |
| RES_SHALLOW (ohm.m) | 12.93 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 10% Siltstone, trace siderite in 90% very fine to coarse, trace very coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, tr v crs (max: v crs) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 46.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2680m: clr,trnsl,pl brn,vf-med,tr crs,pr srt, 2684 sbang-sbrnd,tr ang,wk sil cmt,com sid cmt,com 1241.7 63 / 6 / 7 / 12 / 12 off wh arg mtx,fri aggs,com lse grs,v pr vis por, pr inf por,fluor. 2688 MD:2687.9 m
- **SANDSTONE** @ ~2692m: clr,trnsl,pl brn,vf-med,tr crs-v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt,com off 2696 wh arg mtx,fri aggs,com lse grs,v pr vis por,pr inf 1242.0 por,fluor. 64 / 6 / 7 / 12 / 11
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.6 | 66 |
| RES_DEEP (ohm.m) | 11.46 | 66 |
| RES_SHALLOW (ohm.m) | 12.41 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.96** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 10% Siltstone, trace siderite in 90% very fine to medium, trace coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 48.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2692m: clr,trnsl,pl brn,vf-med,tr crs-v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt,com off 2696 wh arg mtx,fri aggs,com lse grs,v pr vis por,pr inf 1242.0 por,fluor. 64 / 6 / 7 / 12 / 11
- **SANDSTONE** @ ~2704m: clr,trnsl,pl brn,vf-med,tr crs,pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt,com off wh arg mtx,fri aggs,com lse grs,v pr vis por,pr inf por, fluor. FLUOR:2700-2750m;80% of SST;
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 122.0 | 65 |
| RES_DEEP (ohm.m) | 12.36 | 65 |
| RES_SHALLOW (ohm.m) | 13.50 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.14** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 10% Siltstone, trace siderite in 90% very fine to medium, trace coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 27U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 27.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2704m: clr,trnsl,pl brn,vf-med,tr crs,pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt,com off wh arg mtx,fri aggs,com lse grs,v pr vis por,pr inf por, fluor. FLUOR:2700-2750m;80% of SST;
- **SANDSTONE** @ ~2716m: clr,trnsl,pl brn,vf-med,tr crs,pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt,com off wh arg mtx,fri aggs,com lse grs,v pr vis por,pr inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.4 | 66 |
| RES_DEEP (ohm.m) | 13.82 | 66 |
| RES_SHALLOW (ohm.m) | 15.56 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.74** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 10% Siltstone, occasional siderite in 90% very fine to coarse, pred medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred med (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 39.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2740m: med-dk gry,aren,mnr micmic,frm, sbblky.
- **SANDSTONE** @ ~2752m: clr,trnsl,lt brn,vf-crs,pred med, mod-pr srt,wk sil cmt,tr sid cmt,com off wh arg mtx, fri,com lse qtz grs,v pr vis por,pr inf por,fluor. 2756 FLUOR:2750-2800m;100% of SST; 1243.7 mod br-brii yel/grn ptchy fluor,slw diff ct,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 66 |
| RES_DEEP (ohm.m) | 19.25 | 66 |
| RES_SHALLOW (ohm.m) | 20.68 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 10% Siltstone, trace siderite in 90% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 44.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2752m: clr,trnsl,lt brn,vf-crs,pred med, mod-pr srt,wk sil cmt,tr sid cmt,com off wh arg mtx, fri,com lse qtz grs,v pr vis por,pr inf por,fluor. 2756 FLUOR:2750-2800m;100% of SST; 1243.7 mod br-brii yel/grn ptchy fluor,slw diff ct,
- **SANDSTONE** @ ~2760m: pl brn,clr,trnsl,vf-med,tr crs,mod-pr srt,sbang,sbrnd,tr ang,wk sil cmt,tr sid cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,v pr vis por, pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.1 | 65 |
| RES_DEEP (ohm.m) | 20.78 | 65 |
| RES_SHALLOW (ohm.m) | 20.96 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.18** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 10% Siltstone, trace siderite in 90% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 44.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: pl brn,clr,trnsl,vf-med,tr crs,mod-pr srt,sbang,sbrnd,tr ang,wk sil cmt,tr sid cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,v pr vis por, pr-fr inf por,fluor.
- **SILTSTONE** @ ~2764m: med-dk gry,aren,mnr micmic,frm, sbblky. 27 12 6 4 8 3.8 M V az D D i : : : 1 2 1 6 7 2 . 6 4 8 7 3 i . n . 8 8 c m : m 8 9.4 81 / 5 / 4 / 5 / 5 45 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.3 | 66 |
| RES_DEEP (ohm.m) | 20.16 | 66 |
| RES_SHALLOW (ohm.m) | 20.53 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.37** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 5% Siltstone, trace siderite in 95% very fine to fine, trace coarse Sandstone, 100% bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 41.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2772m: pl brn,clr,trnsl,vf-crs,mod-pr srt, sbang,sbrnd,tr ang,wk sil cmt,tr sid cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,v pr vis por, pr-fr inf por,fluor.
- **SANDSTONE** @ ~2780m: clr,trnsl,pl trnsl brn,vf-f,tr crs,mod wl 2784 srt,sbang-sbrnd,mnr wk sil cmt,tr sid cmt,occ pl 1244.0 brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 65 |
| RES_DEEP (ohm.m) | 20.52 | 65 |
| RES_SHALLOW (ohm.m) | 21.16 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.65** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 5% Siltstone, common to occasional siderite in 95% very fine to fine, trace coarse Sandstone, 100% bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 41.0 U |
| FeCO₃ in Sandstone | com-occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: clr,trnsl,pl trnsl brn,vf-f,tr crs,mod wl 2784 srt,sbang-sbrnd,mnr wk sil cmt,tr sid cmt,occ pl 1244.0 brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2793m: clr,trnsl,pl trnsl brn,vf-med,tr crs,mod 28 12 0 4 4 4.2 wl-pr srt,wk sil cmt,occ sid cmt,mnr pl brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor. FLUOR:2800-2830m;100% of SST;
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 66 |
| RES_DEEP (ohm.m) | 20.03 | 66 |
| RES_SHALLOW (ohm.m) | 21.34 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.31** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 0% Siltstone, occasional siderite in 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 38.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2793m: clr,trnsl,pl trnsl brn,vf-med,tr crs,mod 28 12 0 4 4 4.2 wl-pr srt,wk sil cmt,occ sid cmt,mnr pl brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor. FLUOR:2800-2830m;100% of SST;
- **SANDSTONE** @ ~2812m: clr,trnsl,pl trnsl brn,vf-med,occ crs, mod wl-pr srt,wk sil cmt,tr sid cmt,mnr pl brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 66 |
| RES_DEEP (ohm.m) | 19.63 | 66 |
| RES_SHALLOW (ohm.m) | 21.43 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.80** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2815.0 – 2825.0 m

**Sample Description (spreadsheet):** Sample 2820m: 0% Siltstone, trace siderite in 100% very fine to medium, occasional coarse Sandstone, 100% moderately bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 34.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: clr,trnsl,pl trnsl brn,vf-med,occ crs, mod wl-pr srt,wk sil cmt,tr sid cmt,mnr pl brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2824m: clr,trnsl,vf-crs,pred f,mod srt, sbang-sbrnd,wk sil cmt,mnr off wh-pl brn arg mtx,rr fri frags,lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.4 | 65 |
| RES_DEEP (ohm.m) | 18.14 | 65 |
| RES_SHALLOW (ohm.m) | 20.73 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.59** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2825.0 – 2835.0 m

**Sample Description (spreadsheet):** Sample 2830m: 0% Siltstone, 100% very fine to coarse, pred fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 30U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred f (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 30.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: clr,trnsl,pl trnsl brn,vf-med,occ crs, mod wl-pr srt,wk sil cmt,tr sid cmt,mnr pl brn-off wh arg mtx,fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2824m: clr,trnsl,vf-crs,pred f,mod srt, sbang-sbrnd,wk sil cmt,mnr off wh-pl brn arg mtx,rr fri frags,lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.6 | 66 |
| RES_DEEP (ohm.m) | 17.29 | 66 |
| RES_SHALLOW (ohm.m) | 19.56 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2840 m MD — Interval 2835.0 – 2845.0 m

**Sample Description (spreadsheet):** Sample 2840m: 0% Siltstone, 100% very fine to fine, rare coarse Sandstone, 100% dull FLUOR in SST. TG 27U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, rr crs (max: crs) |
| Fluorescence | 100.0% dll |
| Total Gas | 27.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2824m: clr,trnsl,vf-crs,pred f,mod srt, sbang-sbrnd,wk sil cmt,mnr off wh-pl brn arg mtx,rr fri frags,lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2828m: clr,trnsl,vf-f,tr crs,mod pr srt, 1244.0 sbang-sbrnd,nil cmt & mtx,lse cln qtz grs,gd inf por, fluor. FLUOR:2830-2870m;100% of SST; 2836 dll ptchy-evn yel/grn fluor,v slw diff ct,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.1 | 65 |
| RES_DEEP (ohm.m) | 17.75 | 65 |
| RES_SHALLOW (ohm.m) | 20.47 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.73** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2850 m MD — Interval 2845.0 – 2855.0 m

**Sample Description (spreadsheet):** Sample 2850m: 0% Siltstone, 100% very fine to fine, rare coarse Sandstone, 100% dull FLUOR in SST. TG 26U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, rr crs (max: crs) |
| Fluorescence | 100.0% dll |
| Total Gas | 26.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2840m: clr,trnsl,vf-f,tr crs,mod pr srt, 28 12 4 4 4 3.8 sbang-sbrnd,nil cmt & mtx,lse cln qtz grs,gd inf por, fluor.
- **SANDSTONE** @ ~2852m: clr,trnsl,vf-f,occ crs,mod pr srt, sbang-sbrnd,nil cmt & mtx,lse cln qtz grs,gd inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 66 |
| RES_DEEP (ohm.m) | 17.36 | 66 |
| RES_SHALLOW (ohm.m) | 20.32 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.95** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2860 m MD — Interval 2855.0 – 2865.0 m

**Sample Description (spreadsheet):** Sample 2860m: 0% Siltstone, 100% very fine to fine, occasional coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, occ crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2840m: clr,trnsl,vf-f,tr crs,mod pr srt, 28 12 4 4 4 3.8 sbang-sbrnd,nil cmt & mtx,lse cln qtz grs,gd inf por, fluor.
- **SANDSTONE** @ ~2852m: clr,trnsl,vf-f,occ crs,mod pr srt, sbang-sbrnd,nil cmt & mtx,lse cln qtz grs,gd inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.3 | 66 |
| RES_DEEP (ohm.m) | 22.40 | 66 |
| RES_SHALLOW (ohm.m) | 23.48 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2865.0 – 2875.0 m

**Sample Description (spreadsheet):** Sample 2870m: 0% Siltstone, 100% very fine to coarse, pred fine Sandstone, 100% moderately bright FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred f (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 40.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2852m: clr,trnsl,vf-f,occ crs,mod pr srt, sbang-sbrnd,nil cmt & mtx,lse cln qtz grs,gd inf por, fluor.
- **SANDSTONE** @ ~2860m: clr,trnsl,v pl trnsl brn,vf-crs,pred f,pr srt,sbang-sbrnd,wk sil cmt,mnr pl brn-off wh arg mtx,pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 65 |
| RES_DEEP (ohm.m) | 21.29 | 65 |
| RES_SHALLOW (ohm.m) | 24.06 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.77** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2880 m MD — Interval 2875.0 – 2885.0 m

**Sample Description (spreadsheet):** Sample 2880m: 0% Siltstone, 100% very fine to coarse, pred coarse Sandstone, 100% moderately bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2860m: clr,trnsl,v pl trnsl brn,vf-crs,pred f,pr srt,sbang-sbrnd,wk sil cmt,mnr pl brn-off wh arg mtx,pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2868m: clr,trnsl,v pl trnsl brn,vf-crs,pred 28 12 7 4 2 3.1 m wh e d a - r c g r s m ,p tx r , s p r r t e ,s d b l a s n e g q -s tz b r g n r d s , , w pr k v s is il p cm or, t g ,tr d p in l f b p rn o - r o , ff fluor. 81 / 5 / 4 / 5 / 5 46 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 66 |
| RES_DEEP (ohm.m) | 23.94 | 66 |
| RES_SHALLOW (ohm.m) | 27.50 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.56** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2890 m MD — Interval 2885.0 – 2895.0 m

**Sample Description (spreadsheet):** Sample 2890m: 0% Siltstone, 100% very fine to coarse, pred fine Sandstone, 100% moderately bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred f (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2884m: clr,trnsl,v pl trnsl brn,vf-crs,pred f,pr srt,sbang-sbrnd,wk sil cmt,tr pl brn-off wh arg mtx, pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2892m: med dk gry-dk gry,aren,com micmic,tr 1242.2 carb spks,frm-sft,sbblky. 86 / 5 / 3 / 3 / 3
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 66 |
| RES_DEEP (ohm.m) | 30.55 | 66 |
| RES_SHALLOW (ohm.m) | 39.88 | 66 |
| **Δ Res (Deep − Shallow)** | **-9.33** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2895.0 – 2905.0 m

**Sample Description (spreadsheet):** Sample 2900m: 5% Siltstone, 95% very fine to coarse, pred fine Sandstone, 100% moderately bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 54.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2884m: clr,trnsl,v pl trnsl brn,vf-crs,pred f,pr srt,sbang-sbrnd,wk sil cmt,tr pl brn-off wh arg mtx, pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2892m: med dk gry-dk gry,aren,com micmic,tr 1242.2 carb spks,frm-sft,sbblky. 86 / 5 / 3 / 3 / 3
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 65 |
| RES_DEEP (ohm.m) | 35.74 | 65 |
| RES_SHALLOW (ohm.m) | 46.50 | 65 |
| **Δ Res (Deep − Shallow)** | **-10.76** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2905.0 – 2915.0 m

**Sample Description (spreadsheet):** Sample 2910m: 5% Siltstone, 95% very fine to fine,minor coarse Sandstone, 100% bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f,mnr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2892m: med dk gry-dk gry,aren,com micmic,tr 1242.2 carb spks,frm-sft,sbblky. 86 / 5 / 3 / 3 / 3
- **SANDSTONE** @ ~2904m: clr,trnsl,v pl trnsl brn,vf-f,rr crs,mod pr srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg 05-11-2024 mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.3 | 66 |
| RES_DEEP (ohm.m) | 34.06 | 66 |
| RES_SHALLOW (ohm.m) | 48.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-14.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2915.0 – 2925.0 m

**Sample Description (spreadsheet):** Sample 2920m: 5% Siltstone, 95% very fine to fine,rare coarse Sandstone, 100% bright FLUOR in SST. TG 86U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f,rr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 86.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2904m: clr,trnsl,v pl trnsl brn,vf-f,rr crs,mod pr srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg 05-11-2024 mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2912m: clr,trnsl,v pl trnsl brn,vf-f,rr crs,mod MW: 9.8 pr srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg FV: 45 mtx,fri aggs,com lse,pr vis por,gd inf por,fluor. PV: 10 2916 YP: 20 1241.6
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 65 |
| RES_DEEP (ohm.m) | 40.70 | 65 |
| RES_SHALLOW (ohm.m) | 56.75 | 65 |
| **Δ Res (Deep − Shallow)** | **-16.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2930 m MD — Interval 2925.0 – 2935.0 m

**Sample Description (spreadsheet):** Sample 2930m: 5% Siltstone, 95% very fine to fine,occasional medium to  coarse Sandstone, 100% bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f,occ med- crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 73.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: clr,trnsl,v pl trnsl brn,vf-f,rr crs,mod MW: 9.8 pr srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg FV: 45 mtx,fri aggs,com lse,pr vis por,gd inf por,fluor. PV: 10 2916 YP: 20 1241.6
- **SANDSTONE** @ ~2924m: clr,trnsl,v pl trnsl brn,vf-f,occ med-crs,pr srt,sbang-sbrnd,wk sil cmt,com-occ lt brn-off wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.2 | 66 |
| RES_DEEP (ohm.m) | 50.91 | 66 |
| RES_SHALLOW (ohm.m) | 60.45 | 66 |
| **Δ Res (Deep − Shallow)** | **-9.54** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2940 m MD — Interval 2935.0 – 2945.0 m

**Sample Description (spreadsheet):** Sample 2940m: 5% Siltstone, 95% very fine to fine,occasional medium to  coarse Sandstone, 100% bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f,occ med- crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 57.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2924m: clr,trnsl,v pl trnsl brn,vf-f,occ med-crs,pr srt,sbang-sbrnd,wk sil cmt,com-occ lt brn-off wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2927m: clr,trnsl,v pl trnsl brn,vf-f,occ 1241.2 med-crs,pr srt,sbang-sbrnd,wk sil cmt,com-occ lt brn-off wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.5 | 66 |
| RES_DEEP (ohm.m) | 53.19 | 66 |
| RES_SHALLOW (ohm.m) | 60.45 | 66 |
| **Δ Res (Deep − Shallow)** | **-7.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2945.0 – 2955.0 m

**Sample Description (spreadsheet):** Sample 2950m: 5% Siltstone, trace siderite in 95% very fine to medium, trace coarse to very coarse Sandstone, 100% bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs-v crs (max: v crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 79.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2936m: med-dk gry,aren,micmic,occ sndy lams,frm-mod hd,sbblky.
- **SILTSTONE** @ ~2956m: med-dk gry,aren,micmic,tr carb spks, occ sndy lams,frm-mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.7 | 65 |
| RES_DEEP (ohm.m) | 50.54 | 65 |
| RES_SHALLOW (ohm.m) | 58.42 | 65 |
| **Δ Res (Deep − Shallow)** | **-7.88** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2955.0 – 2965.0 m

**Sample Description (spreadsheet):** Sample 2960m: 10% Siltstone, trace siderite in 90% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 87U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 87.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2956m: med-dk gry,aren,micmic,tr carb spks, occ sndy lams,frm-mod hd,sbblky.
- **SANDSTONE** @ ~2964m: clr,trnsl,pl trnsl brn,vf-med,tr crs,pr srt,sbang-sbrnd,wk sil cmt,tr sid cmt,com pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,fr inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 66 |
| RES_DEEP (ohm.m) | 37.39 | 66 |
| RES_SHALLOW (ohm.m) | 58.69 | 66 |
| **Δ Res (Deep − Shallow)** | **-21.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2970 m MD — Interval 2965.0 – 2975.0 m

**Sample Description (spreadsheet):** Sample 2970m: 10% Siltstone, trace siderite in 90% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 68.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2956m: med-dk gry,aren,micmic,tr carb spks, occ sndy lams,frm-mod hd,sbblky.
- **SANDSTONE** @ ~2964m: clr,trnsl,pl trnsl brn,vf-med,tr crs,pr srt,sbang-sbrnd,wk sil cmt,tr sid cmt,com pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,fr inf por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 65 |
| RES_DEEP (ohm.m) | 42.09 | 65 |
| RES_SHALLOW (ohm.m) | 67.34 | 65 |
| **Δ Res (Deep − Shallow)** | **-25.25** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2980 m MD — Interval 2975.0 – 2985.0 m

**Sample Description (spreadsheet):** Sample 2980m: 5% Siltstone, occasional siderite in 95% very fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 74.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2964m: clr,trnsl,pl trnsl brn,vf-med,tr crs,pr srt,sbang-sbrnd,wk sil cmt,tr sid cmt,com pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2968m: clr-trnsl,pl-lt trnsl brn,vf-med,mod wl 29 12 7 4 2 0.7 srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por,pr inf por,fluor. 84 / 5 / 4 / 4 / 3 79 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 66 |
| RES_DEEP (ohm.m) | 36.98 | 66 |
| RES_SHALLOW (ohm.m) | 56.24 | 66 |
| **Δ Res (Deep − Shallow)** | **-19.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2990 m MD — Interval 2985.0 – 2995.0 m

**Sample Description (spreadsheet):** Sample 2990m: 5% Siltstone, occasional siderite in 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 72.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2981m: clr-trnsl,pl-lt trnsl brn,vf-med,tr crs, mod wl srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por, pr inf por,fluor.
- **SANDSTONE** @ ~2992m: clr-trnsl,pl-lt trnsl brn,vf-med,tr crs, mod wl srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por, pr inf por,fluor. 84 / 5 / 3 / 4 / 4 89 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 66 |
| RES_DEEP (ohm.m) | 35.63 | 66 |
| RES_SHALLOW (ohm.m) | 48.26 | 66 |
| **Δ Res (Deep − Shallow)** | **-12.62** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3000 m MD — Interval 2995.0 – 3005.0 m

**Sample Description (spreadsheet):** Sample 3000m: 5% Siltstone, occasional siderite in 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 40.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2981m: clr-trnsl,pl-lt trnsl brn,vf-med,tr crs, mod wl srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por, pr inf por,fluor.
- **SANDSTONE** @ ~2992m: clr-trnsl,pl-lt trnsl brn,vf-med,tr crs, mod wl srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por, pr inf por,fluor. 84 / 5 / 3 / 4 / 4 89 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.9 | 65 |
| RES_DEEP (ohm.m) | 35.58 | 65 |
| RES_SHALLOW (ohm.m) | 37.42 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.84** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3010 m MD — Interval 3005.0 – 3015.0 m

**Sample Description (spreadsheet):** Sample 3010m: 0% Siltstone, 100% very fine to medium, pred fine Sandstone, 100% bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, pred f (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 71.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2992m: clr-trnsl,pl-lt trnsl brn,vf-med,tr crs, mod wl srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por, pr inf por,fluor. 84 / 5 / 3 / 4 / 4 89 U
- **SANDSTONE** @ ~3012m: clr,trnsl,v pl trnsl brn,wh,vf-med,occ crs,wl srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por,fr-gd inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.9 | 66 |
| RES_DEEP (ohm.m) | 28.52 | 66 |
| RES_SHALLOW (ohm.m) | 31.79 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3020 m MD — Interval 3015.0 – 3025.0 m

**Sample Description (spreadsheet):** Sample 3020m: 0% Siltstone, 100% very fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 70.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3012m: clr,trnsl,v pl trnsl brn,wh,vf-med,occ crs,wl srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~3020m: clr,trnsl,occ pl trnsl brn,vf-crs,pred f-med,mod wl srt,sbang-sbrnd,tr ang,wk sil cmt,occ 3024 off wh arg mtx,fri,pred cln lse qtz,pr vis por,fr inf 1241.4 por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 66 |
| RES_DEEP (ohm.m) | 23.83 | 66 |
| RES_SHALLOW (ohm.m) | 26.52 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.69** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3030 m MD — Interval 3025.0 – 3035.0 m

**Sample Description (spreadsheet):** Sample 3030m: 0% Siltstone, 100% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3012m: clr,trnsl,v pl trnsl brn,wh,vf-med,occ crs,wl srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri,com lse qtz grs,v pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~3020m: clr,trnsl,occ pl trnsl brn,vf-crs,pred f-med,mod wl srt,sbang-sbrnd,tr ang,wk sil cmt,occ 3024 off wh arg mtx,fri,pred cln lse qtz,pr vis por,fr inf 1241.4 por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.4 | 65 |
| RES_DEEP (ohm.m) | 29.18 | 65 |
| RES_SHALLOW (ohm.m) | 31.49 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3040 m MD — Interval 3035.0 – 3044.0 m

**Sample Description (spreadsheet):** Sample 3040m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3020m: clr,trnsl,occ pl trnsl brn,vf-crs,pred f-med,mod wl srt,sbang-sbrnd,tr ang,wk sil cmt,occ 3024 off wh arg mtx,fri,pred cln lse qtz,pr vis por,fr inf 1241.4 por,fluor.
- **SANDSTONE** @ ~3028m: trnsl,clr,lt-pl brn,vf-med,tr crs,mod srt,sbang-sbrnd,wk-mod sil cmt,com lt brn arg mtx, 30 12 3 4 2 1.5 fri-mod hd aggs,com lse qtz grs,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 42.4 | 59 |
| RES_DEEP (ohm.m) | 40.91 | 59 |
| RES_SHALLOW (ohm.m) | 46.99 | 59 |
| **Δ Res (Deep − Shallow)** | **-6.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3048 m MD — Interval 3044.0 – 3049.5 m

**Sample Description (spreadsheet):** Sample 3048m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 73.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3034m: clr,trnsl,lt brn,lt trnsl brn,vf-crs,tr v crs,pr srt,sbang-sbrnd,tr ang,wk-strg sil cmt,com pl brn-off wh arg mtx,fri-mod hd,tr hd,com lse qtz grs, v pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3034m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, FR/ 3050.0m TO 3144.0m sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom cln lse grs,v pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 50.8 | 36 |
| RES_DEEP (ohm.m) | 36.62 | 36 |
| RES_SHALLOW (ohm.m) | 43.02 | 36 |
| **Δ Res (Deep − Shallow)** | **-6.40** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3051 m MD — Interval 3049.5 – 3052.5 m

**Sample Description (spreadsheet):** Sample 3051m: 0% Siltstone, 100% very fine to coarse, trace very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, tr v crs (max: v crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 63.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 47.0 | 20 |
| RES_DEEP (ohm.m) | 36.12 | 20 |
| RES_SHALLOW (ohm.m) | 42.79 | 20 |
| **Δ Res (Deep − Shallow)** | **-6.68** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3054 m MD — Interval 3052.5 – 3055.5 m

**Sample Description (spreadsheet):** Sample 3054m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 47U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 47.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 45.9 | 20 |
| RES_DEEP (ohm.m) | 32.91 | 20 |
| RES_SHALLOW (ohm.m) | 37.25 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.33** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3057 m MD — Interval 3055.5 – 3058.5 m

**Sample Description (spreadsheet):** Sample 3057m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 52.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 50.9 | 19 |
| RES_DEEP (ohm.m) | 28.03 | 19 |
| RES_SHALLOW (ohm.m) | 31.93 | 19 |
| **Δ Res (Deep − Shallow)** | **-3.90** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3060 m MD — Interval 3058.5 – 3061.5 m

**Sample Description (spreadsheet):** Sample 3060m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 49.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 56.8 | 20 |
| RES_DEEP (ohm.m) | 27.17 | 20 |
| RES_SHALLOW (ohm.m) | 31.87 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.70** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3063 m MD — Interval 3061.5 – 3064.5 m

**Sample Description (spreadsheet):** Sample 3063m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 47U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 47.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.7 | 20 |
| RES_DEEP (ohm.m) | 29.85 | 20 |
| RES_SHALLOW (ohm.m) | 34.67 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.82** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3066 m MD — Interval 3064.5 – 3067.5 m

**Sample Description (spreadsheet):** Sample 3066m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 19 |
| RES_DEEP (ohm.m) | 28.32 | 19 |
| RES_SHALLOW (ohm.m) | 31.07 | 19 |
| **Δ Res (Deep − Shallow)** | **-2.74** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3069 m MD — Interval 3067.5 – 3070.5 m

**Sample Description (spreadsheet):** Sample 3069m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.2 | 20 |
| RES_DEEP (ohm.m) | 25.31 | 20 |
| RES_SHALLOW (ohm.m) | 28.18 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.87** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3072 m MD — Interval 3070.5 – 3073.5 m

**Sample Description (spreadsheet):** Sample 3072m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,lt brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,dom 79 / 5 / 4 / 6 / 6 cln lse grs,v pr vis por,fr inf por,fluor. 30 12 6 4 0 1.4 M VD D : : 3 1 0 2 6 4 0 1 . . 1 4 m m
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 20 |
| RES_DEEP (ohm.m) | 23.67 | 20 |
| RES_SHALLOW (ohm.m) | 27.26 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.59** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3075 m MD — Interval 3073.5 – 3076.5 m

**Sample Description (spreadsheet):** Sample 3075m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 45.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3068m: clr,trnsl,lt trnsl brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,dom cln lse qtz grs,v pr vis por,fr-pr inf por, fluor. 79 / 5 / 4 / 6 / 6 55 U
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.7 | 20 |
| RES_DEEP (ohm.m) | 24.25 | 20 |
| RES_SHALLOW (ohm.m) | 27.70 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.45** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3078 m MD — Interval 3076.5 – 3079.5 m

**Sample Description (spreadsheet):** Sample 3078m: 0.595138888888889 siderite in 0% Siltstone, 100% very fine to fine,occasional medium, trace coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f,occ med, tr crs (max: crs) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3064m: clr,trnsl,lt brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri, dom cln lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3068m: clr,trnsl,lt trnsl brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,dom cln lse qtz grs,v pr vis por,fr-pr inf por, fluor. 79 / 5 / 4 / 6 / 6 55 U
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 19 |
| RES_DEEP (ohm.m) | 24.62 | 19 |
| RES_SHALLOW (ohm.m) | 29.35 | 19 |
| **Δ Res (Deep − Shallow)** | **-4.73** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3081 m MD — Interval 3079.5 – 3082.5 m

**Sample Description (spreadsheet):** Sample 3081m: 0.609027777777778 siderite in 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 40.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3068m: clr,trnsl,lt trnsl brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,dom cln lse qtz grs,v pr vis por,fr-pr inf por, fluor. 79 / 5 / 4 / 6 / 6 55 U
- **SILTSTONE** @ ~3084m: dk gry,aren,micmic,tr sndy lams, frm-occ mod hd,sbblky. 79 / 5 / 4 / 6 / 6
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 20 |
| RES_DEEP (ohm.m) | 23.48 | 20 |
| RES_SHALLOW (ohm.m) | 27.57 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3084 m MD — Interval 3082.5 – 3085.5 m

**Sample Description (spreadsheet):** Sample 3084m: 0.615277777777778 siderite in 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 60.0% mod bri - bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3068m: clr,trnsl,lt trnsl brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,dom cln lse qtz grs,v pr vis por,fr-pr inf por, fluor. 79 / 5 / 4 / 6 / 6 55 U
- **SILTSTONE** @ ~3084m: dk gry,aren,micmic,tr sndy lams, frm-occ mod hd,sbblky. 79 / 5 / 4 / 6 / 6
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.6 | 20 |
| RES_DEEP (ohm.m) | 23.58 | 20 |
| RES_SHALLOW (ohm.m) | 27.29 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.71** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3087 m MD — Interval 3085.5 – 3088.5 m

**Sample Description (spreadsheet):** Sample 3087m: 0.61875 siderite in 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 60.0% mod bri - bri |
| Total Gas | 51.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3084m: dk gry,aren,micmic,tr sndy lams, frm-occ mod hd,sbblky. 79 / 5 / 4 / 6 / 6
- **SANDSTONE** @ ~3088m: clr,trnsl,lt trnsl brn,vf-f,tr med,mod wl srt,sbrnd-sbang,wk sil cmt,com lt brn-off wh arg mtx,fri,pred lse grs,v pr vis por,pr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 19 |
| RES_DEEP (ohm.m) | 25.87 | 19 |
| RES_SHALLOW (ohm.m) | 29.45 | 19 |
| **Δ Res (Deep − Shallow)** | **-3.58** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3090 m MD — Interval 3088.5 – 3091.5 m

**Sample Description (spreadsheet):** Sample 3090m: 0.624305555555556 siderite in 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 50% moderately bright  to  bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 50.0% mod bri - bri |
| Total Gas | 45.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3084m: dk gry,aren,micmic,tr sndy lams, frm-occ mod hd,sbblky. 79 / 5 / 4 / 6 / 6
- **SANDSTONE** @ ~3088m: clr,trnsl,lt trnsl brn,vf-f,tr med,mod wl srt,sbrnd-sbang,wk sil cmt,com lt brn-off wh arg mtx,fri,pred lse grs,v pr vis por,pr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 20 |
| RES_DEEP (ohm.m) | 31.71 | 20 |
| RES_SHALLOW (ohm.m) | 36.30 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.58** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3093 m MD — Interval 3091.5 – 3094.5 m

**Sample Description (spreadsheet):** Sample 3093m: 0.6375 siderite in 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 49.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3084m: dk gry,aren,micmic,tr sndy lams, frm-occ mod hd,sbblky. 79 / 5 / 4 / 6 / 6
- **SANDSTONE** @ ~3088m: clr,trnsl,lt trnsl brn,vf-f,tr med,mod wl srt,sbrnd-sbang,wk sil cmt,com lt brn-off wh arg mtx,fri,pred lse grs,v pr vis por,pr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.5 | 20 |
| RES_DEEP (ohm.m) | 36.87 | 20 |
| RES_SHALLOW (ohm.m) | 41.24 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.38** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3096 m MD — Interval 3094.5 – 3097.5 m

**Sample Description (spreadsheet):** Sample 3096m: 0.643055555555556 siderite in 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3084m: dk gry,aren,micmic,tr sndy lams, frm-occ mod hd,sbblky. 79 / 5 / 4 / 6 / 6
- **SANDSTONE** @ ~3088m: clr,trnsl,lt trnsl brn,vf-f,tr med,mod wl srt,sbrnd-sbang,wk sil cmt,com lt brn-off wh arg mtx,fri,pred lse grs,v pr vis por,pr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.0 | 19 |
| RES_DEEP (ohm.m) | 31.87 | 19 |
| RES_SHALLOW (ohm.m) | 35.82 | 19 |
| **Δ Res (Deep − Shallow)** | **-3.95** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3099 m MD — Interval 3097.5 – 3100.5 m

**Sample Description (spreadsheet):** Sample 3099m: 0.647916666666667 siderite in 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 50.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3084m: dk gry,aren,micmic,tr sndy lams, frm-occ mod hd,sbblky. 79 / 5 / 4 / 6 / 6
- **SANDSTONE** @ ~3088m: clr,trnsl,lt trnsl brn,vf-f,tr med,mod wl srt,sbrnd-sbang,wk sil cmt,com lt brn-off wh arg mtx,fri,pred lse grs,v pr vis por,pr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.6 | 20 |
| RES_DEEP (ohm.m) | 28.73 | 20 |
| RES_SHALLOW (ohm.m) | 32.09 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.36** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3102 m MD — Interval 3100.5 – 3103.5 m

**Sample Description (spreadsheet):** Sample 3102m: 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3088m: clr,trnsl,lt trnsl brn,vf-f,tr med,mod wl srt,sbrnd-sbang,wk sil cmt,com lt brn-off wh arg mtx,fri,pred lse grs,v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~3087m: clr,trnsl,pl brn,vf-f,tr med,mod wl srt, 1240.5 sbang-sbrnd,wk sil cmt,occ off wh arg mtx,fri,com lse qtz grs,pr vis por,pr-fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.0 | 20 |
| RES_DEEP (ohm.m) | 28.22 | 20 |
| RES_SHALLOW (ohm.m) | 32.73 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3105 m MD — Interval 3103.5 – 3106.5 m

**Sample Description (spreadsheet):** Sample 3105m: 15% Siltstone, 85% very fine to medium, trace coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 41.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 19 |
| RES_DEEP (ohm.m) | 28.00 | 19 |
| RES_SHALLOW (ohm.m) | 31.97 | 19 |
| **Δ Res (Deep − Shallow)** | **-3.97** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3108 m MD — Interval 3106.5 – 3109.5 m

**Sample Description (spreadsheet):** Sample 3108m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 31U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 31.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 20 |
| RES_DEEP (ohm.m) | 27.63 | 20 |
| RES_SHALLOW (ohm.m) | 33.01 | 20 |
| **Δ Res (Deep − Shallow)** | **-5.38** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3111 m MD — Interval 3109.5 – 3112.5 m

**Sample Description (spreadsheet):** Sample 3111m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 38.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 20 |
| RES_DEEP (ohm.m) | 27.75 | 20 |
| RES_SHALLOW (ohm.m) | 35.33 | 20 |
| **Δ Res (Deep − Shallow)** | **-7.58** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3114 m MD — Interval 3112.5 – 3115.5 m

**Sample Description (spreadsheet):** Sample 3114m: 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med (max: med) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 19 |
| RES_DEEP (ohm.m) | 27.48 | 19 |
| RES_SHALLOW (ohm.m) | 36.51 | 19 |
| **Δ Res (Deep − Shallow)** | **-9.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3117 m MD — Interval 3115.5 – 3118.5 m

**Sample Description (spreadsheet):** Sample 3117m: 5% Siltstone, 95% very fine to medium, pred fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, pred f (max: med) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 51.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 20 |
| RES_DEEP (ohm.m) | 31.35 | 20 |
| RES_SHALLOW (ohm.m) | 41.16 | 20 |
| **Δ Res (Deep − Shallow)** | **-9.80** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3120 m MD — Interval 3118.5 – 3121.5 m

**Sample Description (spreadsheet):** Sample 3120m: 5% Siltstone, 95% very fine to medium, pred fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 26U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, pred f (max: med) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 26.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 20 |
| RES_DEEP (ohm.m) | 36.09 | 20 |
| RES_SHALLOW (ohm.m) | 50.46 | 20 |
| **Δ Res (Deep − Shallow)** | **-14.36** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3123 m MD — Interval 3121.5 – 3124.5 m

**Sample Description (spreadsheet):** Sample 3123m: 5% Siltstone, 95% very fine to medium, pred fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, pred f (max: med) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 39.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.9 | 19 |
| RES_DEEP (ohm.m) | 37.11 | 19 |
| RES_SHALLOW (ohm.m) | 55.04 | 19 |
| **Δ Res (Deep − Shallow)** | **-17.93** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3126 m MD — Interval 3124.5 – 3127.5 m

**Sample Description (spreadsheet):** Sample 3126m: 5% Siltstone, 95% very fine to medium, pred fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, pred f (max: med) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 57.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 20 |
| RES_DEEP (ohm.m) | 40.32 | 20 |
| RES_SHALLOW (ohm.m) | 54.18 | 20 |
| **Δ Res (Deep − Shallow)** | **-13.85** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3129 m MD — Interval 3127.5 – 3130.5 m

**Sample Description (spreadsheet):** Sample 3129m: 0% Siltstone, 100% very fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 50.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 20 |
| RES_DEEP (ohm.m) | 45.81 | 20 |
| RES_SHALLOW (ohm.m) | 54.60 | 20 |
| **Δ Res (Deep − Shallow)** | **-8.79** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3132 m MD — Interval 3130.5 – 3133.5 m

**Sample Description (spreadsheet):** Sample 3132m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 54.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.6 | 20 |
| RES_DEEP (ohm.m) | 58.74 | 20 |
| RES_SHALLOW (ohm.m) | 61.90 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3135 m MD — Interval 3133.5 – 3136.5 m

**Sample Description (spreadsheet):** Sample 3135m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 54.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3120m: dk-med gry,aren,grd to vf SST,tr micmic,com carb spks,tr sndy lams,frm,sbblky.
- **SANDSTONE** @ ~3124m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor. 81 / 5 / 4 / 5 / 5
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.5 | 19 |
| RES_DEEP (ohm.m) | 61.18 | 19 |
| RES_SHALLOW (ohm.m) | 62.20 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3138 m MD — Interval 3136.5 – 3139.5 m

**Sample Description (spreadsheet):** Sample 3138m: 0% Siltstone, 100% very fine to medium, trace to occasional coarse Sandstone, 100% moderately bright FLUOR in SST. TG 64U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr-occ crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 64.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3124m: clr,trnsl,lt trnsl brn,vf-med,pred f,wl srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri,pr vis & inf por,fluor. 81 / 5 / 4 / 5 / 5
- **SANDSTONE** @ ~3132m: clr,trnsl,occ lt-med trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,tr off wh-pl brn arg mtx,fri,dom cln lse qtz grs,pr vis por,fr-gd inf por,fluor. FLUOR:3135-3144m;100% of SST;
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.6 | 20 |
| RES_DEEP (ohm.m) | 64.33 | 20 |
| RES_SHALLOW (ohm.m) | 70.12 | 20 |
| **Δ Res (Deep − Shallow)** | **-5.79** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3141 m MD — Interval 3139.5 – 3142.5 m

**Sample Description (spreadsheet):** Sample 3141m: 0% Siltstone, 100% very fine to fine, minor medium to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, mnr med- crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 60.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3132m: clr,trnsl,occ lt-med trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,tr off wh-pl brn arg mtx,fri,dom cln lse qtz grs,pr vis por,fr-gd inf por,fluor. FLUOR:3135-3144m;100% of SST;
- **SANDSTONE** @ ~3139m: clr,trnsl,v pl trnsl brn,vf-med,pred f, occ-rr crs,pr srt,sbang-sbrnd,wk sil cmt,tr off wh-pl brn arg mtx,fri,pred lse grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 20 |
| RES_DEEP (ohm.m) | 67.18 | 20 |
| RES_SHALLOW (ohm.m) | 72.87 | 20 |
| **Δ Res (Deep − Shallow)** | **-5.69** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3144 m MD — Interval 3142.5 – 3147.0 m

**Sample Description (spreadsheet):** Sample 3144m: 0% Siltstone, 100% very fine to fine, minor medium to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, mnr med- crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 57.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3132m: clr,trnsl,occ lt-med trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,tr off wh-pl brn arg mtx,fri,dom cln lse qtz grs,pr vis por,fr-gd inf por,fluor. FLUOR:3135-3144m;100% of SST;
- **SANDSTONE** @ ~3139m: clr,trnsl,v pl trnsl brn,vf-med,pred f, occ-rr crs,pr srt,sbang-sbrnd,wk sil cmt,tr off wh-pl brn arg mtx,fri,pred lse grs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.2 | 29 |
| RES_DEEP (ohm.m) | 61.95 | 29 |
| RES_SHALLOW (ohm.m) | 76.64 | 29 |
| **Δ Res (Deep − Shallow)** | **-14.69** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3150 m MD — Interval 3147.0 – 3155.0 m

**Sample Description (spreadsheet):** Sample 3150m: 0% Siltstone, trace siderite in 100% very fine to medium, occasional medium to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, occ med-crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 51.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3132m: clr,trnsl,occ lt-med trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,tr off wh-pl brn arg mtx,fri,dom cln lse qtz grs,pr vis por,fr-gd inf por,fluor. FLUOR:3135-3144m;100% of SST;
- **SANDSTONE** @ ~3139m: clr,trnsl,v pl trnsl brn,vf-med,pred f, occ-rr crs,pr srt,sbang-sbrnd,wk sil cmt,tr off wh-pl brn arg mtx,fri,pred lse grs,pr vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.4 | 53 |
| RES_DEEP (ohm.m) | 55.75 | 53 |
| RES_SHALLOW (ohm.m) | 79.05 | 53 |
| **Δ Res (Deep − Shallow)** | **-23.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3190 m MD — Interval 3185.0 – 3195.0 m

**Sample Description (spreadsheet):** Sample 3190m: 20% Siltstone,  siderite in 80% very fine to fine Sandstone, 40% dull FLUOR in SST. TG 27U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f (max: f) |
| Fluorescence | 40.0% dll |
| Total Gas | 27.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3176m: med-lt gry brn,aren,grd to SST,micmic, frm-sft,sbblky-blky.
- **SANDSTONE** @ ~3184m: clr,trnsl,vf pl trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,abdt sid cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por, gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 127.6 | 66 |
| RES_DEEP (ohm.m) | 17.27 | 66 |
| RES_SHALLOW (ohm.m) | 23.94 | 66 |
| **Δ Res (Deep − Shallow)** | **-6.67** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3200 m MD — Interval 3195.0 – 3205.0 m

**Sample Description (spreadsheet):** Sample 3200m: 10% Siltstone, occasional  to  common siderite in 90% very fine to fine, minor medium Sandstone, 60% dull FLUOR in SST. TG 24U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, mnr med (max: med) |
| Fluorescence | 60.0% dll |
| Total Gas | 24.0 U |
| FeCO₃ in Sandstone | occ - com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3184m: clr,trnsl,vf pl trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,abdt sid cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~3193m: clr,trnsl,vf-f,mnr med,mod pr srt, 3196 70 / 5 / 6 / 9 / 10 sbang-sbrnd,wk sil cmt,com sid cmt,com pl brn-off 1236.2 wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 123.5 | 66 |
| RES_DEEP (ohm.m) | 15.63 | 66 |
| RES_SHALLOW (ohm.m) | 20.72 | 66 |
| **Δ Res (Deep − Shallow)** | **-5.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3210 m MD — Interval 3205.0 – 3215.0 m

**Sample Description (spreadsheet):** Sample 3210m: 10% Siltstone, occasional siderite in 90% very fine to fine, minor medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 24U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, mnr med (max: med) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 24.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3193m: clr,trnsl,vf-f,mnr med,mod pr srt, 3196 70 / 5 / 6 / 9 / 10 sbang-sbrnd,wk sil cmt,com sid cmt,com pl brn-off 1236.2 wh arg mtx,fri aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~3204m: med-lt gry brn,aren,grd to SST,micmic, frm-sft,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 128.7 | 65 |
| RES_DEEP (ohm.m) | 17.74 | 65 |
| RES_SHALLOW (ohm.m) | 25.50 | 65 |
| **Δ Res (Deep − Shallow)** | **-7.76** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3250 m MD — Interval 3245.0 – 3255.0 m

**Sample Description (spreadsheet):** Sample 3250m: 10% Siltstone, common siderite in 90% very fine to coarse, pred fine Sandstone, 100% moderately bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 73.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3232m: clr,trnsl,vf-crs,pred f,pr srt, 73 / 5 / 5 / 8 / 9 44 U sbang-sbrnd,wk sil cmt,com sid cmt,com pl brn-off 32 12 3 3 6 6.3 w po h r , a fl r u g o m r. tx,com fri aggs,com lse,pr vis por,gd inf
- **SANDSTONE** @ ~3240m: clr,trnsl,vf-crs,pred f,pr srt, sbang-sbrnd,wk sil cmt,com sid cmt,com pl brn-off wh arg mtx,com fri aggs,com lse,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 66 |
| RES_DEEP (ohm.m) | 52.54 | 66 |
| RES_SHALLOW (ohm.m) | 99.00 | 66 |
| **Δ Res (Deep − Shallow)** | **-46.45** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3260 m MD — Interval 3255.0 – 3265.0 m

**Sample Description (spreadsheet):** Sample 3260m: 0% Siltstone, common siderite in 100% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, rr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 71.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3240m: clr,trnsl,vf-crs,pred f,pr srt, sbang-sbrnd,wk sil cmt,com sid cmt,com pl brn-off wh arg mtx,com fri aggs,com lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3260m: clr,trnsl,pl trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,mod wk sil cmt,com sid cmt,com pl brn-off wh arg mtx,fri-mnr mod hd aggs, pred lse qtz grs,pr vis por,gd inf por,fluor. 06-11-2024 3264
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 65 |
| RES_DEEP (ohm.m) | 55.36 | 65 |
| RES_SHALLOW (ohm.m) | 74.51 | 65 |
| **Δ Res (Deep − Shallow)** | **-19.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3270 m MD — Interval 3265.0 – 3273.0 m

**Sample Description (spreadsheet):** Sample 3270m: 0% Siltstone, common siderite in 100% very fine to coarse, pred medium Sandstone, 100% bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 71.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3260m: clr,trnsl,pl trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,mod wk sil cmt,com sid cmt,com pl brn-off wh arg mtx,fri-mnr mod hd aggs, pred lse qtz grs,pr vis por,gd inf por,fluor. 06-11-2024 3264
- **SANDSTONE** @ ~3272m: 1/- SANDSTONE:clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, Cl: 88k mod srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor. Rmf: 0.057 ohmm @ 75° F
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 53 |
| RES_DEEP (ohm.m) | 40.70 | 53 |
| RES_SHALLOW (ohm.m) | 68.64 | 53 |
| **Δ Res (Deep − Shallow)** | **-27.94** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3276 m MD — Interval 3273.0 – 3278.0 m

**Sample Description (spreadsheet):** Sample 3276m: 0% Siltstone, occasional siderite in 100% very fine to fine, minor medium to coarse Sandstone, 100% bright FLUOR in SST. TG 81U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, mnr med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 81.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3260m: clr,trnsl,pl trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,mod wk sil cmt,com sid cmt,com pl brn-off wh arg mtx,fri-mnr mod hd aggs, pred lse qtz grs,pr vis por,gd inf por,fluor. 06-11-2024 3264
- **SANDSTONE** @ ~3272m: 1/- SANDSTONE:clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, Cl: 88k mod srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor. Rmf: 0.057 ohmm @ 75° F
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 33 |
| RES_DEEP (ohm.m) | 40.01 | 33 |
| RES_SHALLOW (ohm.m) | 70.73 | 33 |
| **Δ Res (Deep − Shallow)** | **-30.72** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3280 m MD — Interval 3278.0 – 3285.0 m

**Sample Description (spreadsheet):** Sample 3280m: 0% Siltstone, occasional siderite in 100% very fine to fine, minor medium to coarse Sandstone, 100% bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, mnr med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 44.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3272m: 1/- SANDSTONE:clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, Cl: 88k mod srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor. Rmf: 0.057 ohmm @ 75° F
- **SANDSTONE** @ ~3280m: clr,trnsl,pl-lt trnsl brn,vf-med,tr crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,occ sid cmt, com pl brn-off wh ang mtx,fri,com lse qtz grs,pr vis por,gd-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.7 | 46 |
| RES_DEEP (ohm.m) | 50.09 | 46 |
| RES_SHALLOW (ohm.m) | 63.87 | 46 |
| **Δ Res (Deep − Shallow)** | **-13.77** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3290 m MD — Interval 3285.0 – 3295.0 m

**Sample Description (spreadsheet):** Sample 3290m: 0% Siltstone, occasional siderite in 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 71.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3272m: 1/- SANDSTONE:clr,trnsl,pl trnsl brn,vf-f,mnr med-crs, Cl: 88k mod srt,sbang-sbrnd,wk sil cmt,occ sid cmt,com pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor. Rmf: 0.057 ohmm @ 75° F
- **SANDSTONE** @ ~3280m: clr,trnsl,pl-lt trnsl brn,vf-med,tr crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,occ sid cmt, com pl brn-off wh ang mtx,fri,com lse qtz grs,pr vis por,gd-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 65 |
| RES_DEEP (ohm.m) | 51.44 | 65 |
| RES_SHALLOW (ohm.m) | 75.76 | 65 |
| **Δ Res (Deep − Shallow)** | **-24.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3300 m MD — Interval 3295.0 – 3305.0 m

**Sample Description (spreadsheet):** Sample 3300m: 0% Siltstone, common siderite in 100% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 60.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3280m: clr,trnsl,pl-lt trnsl brn,vf-med,tr crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,occ sid cmt, com pl brn-off wh ang mtx,fri,com lse qtz grs,pr vis por,gd-fr inf por,fluor.
- **SANDSTONE** @ ~3298m: clr,trnsl,lt trnsl brn,vf-med,tr crs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,com sid cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por, fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.8 | 66 |
| RES_DEEP (ohm.m) | 54.15 | 66 |
| RES_SHALLOW (ohm.m) | 78.30 | 66 |
| **Δ Res (Deep − Shallow)** | **-24.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3310 m MD — Interval 3305.0 – 3315.0 m

**Sample Description (spreadsheet):** Sample 3310m: 0% Siltstone, common siderite in 100% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 73.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3298m: clr,trnsl,lt trnsl brn,vf-med,tr crs,mod srt,sbang-sbrnd,tr ang,wk sil cmt,com sid cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por, fr-gd inf por,fluor.
- **SANDSTONE** @ ~3312m: clr,trnsl,lt trnsl brn,vf-f,occ med-crs, mod wl srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt, com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 65 |
| RES_DEEP (ohm.m) | 63.80 | 65 |
| RES_SHALLOW (ohm.m) | 73.57 | 65 |
| **Δ Res (Deep − Shallow)** | **-9.78** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3320 m MD — Interval 3315.0 – 3325.0 m

**Sample Description (spreadsheet):** Sample 3320m: 0% Siltstone, trace siderite in 100% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 59U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, occ med-crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 59.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3312m: clr,trnsl,lt trnsl brn,vf-f,occ med-crs, mod wl srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt, com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3320m: clr,trnsl,frstd,pl brn,vf-med,tr crs, mod srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor. 86 / 5 / 3 / 3 / 3 79 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.3 | 66 |
| RES_DEEP (ohm.m) | 62.78 | 66 |
| RES_SHALLOW (ohm.m) | 70.65 | 66 |
| **Δ Res (Deep − Shallow)** | **-7.87** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3330 m MD — Interval 3325.0 – 3335.0 m

**Sample Description (spreadsheet):** Sample 3330m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 78.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3312m: clr,trnsl,lt trnsl brn,vf-f,occ med-crs, mod wl srt,sbang-sbrnd,tr ang,wk sil cmt,tr sid cmt, com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3320m: clr,trnsl,frstd,pl brn,vf-med,tr crs, mod srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor. 86 / 5 / 3 / 3 / 3 79 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 66 |
| RES_DEEP (ohm.m) | 67.25 | 66 |
| RES_SHALLOW (ohm.m) | 70.14 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.89** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3340 m MD — Interval 3335.0 – 3345.0 m

**Sample Description (spreadsheet):** Sample 3340m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3320m: clr,trnsl,frstd,pl brn,vf-med,tr crs, mod srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor. 86 / 5 / 3 / 3 / 3 79 U
- **SANDSTONE** @ ~3328m: clr,trnsl,frstd,pl brn,vf-med,tr crs, 3332 mod srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn 1236.9 arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.8 | 65 |
| RES_DEEP (ohm.m) | 54.69 | 65 |
| RES_SHALLOW (ohm.m) | 60.23 | 65 |
| **Δ Res (Deep − Shallow)** | **-5.54** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3350 m MD — Interval 3345.0 – 3355.0 m

**Sample Description (spreadsheet):** Sample 3350m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 77U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 77.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: clr,trnsl,pl brn,vf-med,mod srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri, com lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3350m: clr,trnsl,pl brn,vf-med,mod srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri, 3356 com lse qtz grs,pr vis por,fr inf por,fluor. 1237.1
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 66 |
| RES_DEEP (ohm.m) | 58.76 | 66 |
| RES_SHALLOW (ohm.m) | 64.64 | 66 |
| **Δ Res (Deep − Shallow)** | **-5.89** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3360 m MD — Interval 3355.0 – 3365.0 m

**Sample Description (spreadsheet):** Sample 3360m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 95.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: clr,trnsl,pl brn,vf-med,mod srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri, com lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3350m: clr,trnsl,pl brn,vf-med,mod srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri, 3356 com lse qtz grs,pr vis por,fr inf por,fluor. 1237.1
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.8 | 66 |
| RES_DEEP (ohm.m) | 51.99 | 66 |
| RES_SHALLOW (ohm.m) | 56.96 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.97** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3370 m MD — Interval 3365.0 – 3375.0 m

**Sample Description (spreadsheet):** Sample 3370m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 94.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3350m: clr,trnsl,pl brn,vf-med,mod srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri, 3356 com lse qtz grs,pr vis por,fr inf por,fluor. 1237.1
- **SANDSTONE** @ ~3350m: clr,trnsl,pl brn,vf-med,occ crs,mod srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, fri,com lse qtz grs,pr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.4 | 65 |
| RES_DEEP (ohm.m) | 54.05 | 65 |
| RES_SHALLOW (ohm.m) | 60.23 | 65 |
| **Δ Res (Deep − Shallow)** | **-6.17** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3380 m MD — Interval 3375.0 – 3385.0 m

**Sample Description (spreadsheet):** Sample 3380m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3372m: clr,trnsl,pl brn,vf-med,occ crs,mod srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, 33 12 7 3 6 7.2 fri,com lse qtz grs,,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3384m: clr,trnsl,pl brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com lt brn arg mtx,fri,com cln lse qtz grs,pr vis por,pr-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 66 |
| RES_DEEP (ohm.m) | 60.20 | 66 |
| RES_SHALLOW (ohm.m) | 62.71 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3390 m MD — Interval 3385.0 – 3395.0 m

**Sample Description (spreadsheet):** Sample 3390m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 90.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3372m: clr,trnsl,pl brn,vf-med,occ crs,mod srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, 33 12 7 3 6 7.2 fri,com lse qtz grs,,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3384m: clr,trnsl,pl brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com lt brn arg mtx,fri,com cln lse qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.2 | 65 |
| RES_DEEP (ohm.m) | 57.04 | 65 |
| RES_SHALLOW (ohm.m) | 62.79 | 65 |
| **Δ Res (Deep − Shallow)** | **-5.75** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3400 m MD — Interval 3395.0 – 3405.0 m

**Sample Description (spreadsheet):** Sample 3400m: 0.580555555555556 siderite in 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 98U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 98.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3384m: clr,trnsl,pl brn,vf-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,com lt brn arg mtx,fri,com cln lse qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3388m: clr,trnsl,pl brn,vf-med,tr crs,mod srt, 1237.1 sbang-sbrnd,wk sil cmt,com lt brn arg mtx,fri,com cln lse qtz grs,pr vis por,pr-fr inf por,fluor. 84 / 5 / 3 / 4 / 4 99 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 66 |
| RES_DEEP (ohm.m) | 54.41 | 66 |
| RES_SHALLOW (ohm.m) | 63.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-8.66** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3450 m MD — Interval 3445.0 – 3455.0 m

**Sample Description (spreadsheet):** Sample 3450m: 0% Siltstone, occasional siderite in 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 48.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3432m: clr,trnsl,pl trnsl brn,vf-crs,pred f,pr srt, sbang-sbrnd,wk sil cmt,abdt sid cmt,occ lt brn-off wh arg mtx,fri-mod hd aggs,com lse qtz grs,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3440m: clr,trnsl,v pl trnsl brn,vf-med,mod srt, sbang-sbrnd,wk sil cmt,mnr-occ sid cmt,occ lt 81 / 5 / 4 / 5 / 5 brn-off wh arg,mtx,fri aggs,abdt lse qtz grs,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.7 | 66 |
| RES_DEEP (ohm.m) | 52.00 | 66 |
| RES_SHALLOW (ohm.m) | 71.13 | 66 |
| **Δ Res (Deep − Shallow)** | **-19.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3460 m MD — Interval 3455.0 – 3465.0 m

**Sample Description (spreadsheet):** Sample 3460m: 0% Siltstone, trace siderite in 100% very fine to medium,trace coarse Sandstone, 100% bright FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med,tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 65.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3440m: clr,trnsl,v pl trnsl brn,vf-med,mod srt, sbang-sbrnd,wk sil cmt,mnr-occ sid cmt,occ lt 81 / 5 / 4 / 5 / 5 brn-off wh arg,mtx,fri aggs,abdt lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3464m: clr,trnsl,v pl brn trnsl,vf-med,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 66 |
| RES_DEEP (ohm.m) | 59.42 | 66 |
| RES_SHALLOW (ohm.m) | 62.45 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.03** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3470 m MD — Interval 3465.0 – 3475.0 m

**Sample Description (spreadsheet):** Sample 3470m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 63.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3464m: clr,trnsl,v pl brn trnsl,vf-med,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3472m: clr,trnsl,v pl brn trnsl,vf-med,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.6 | 65 |
| RES_DEEP (ohm.m) | 49.00 | 65 |
| RES_SHALLOW (ohm.m) | 54.12 | 65 |
| **Δ Res (Deep − Shallow)** | **-5.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3480 m MD — Interval 3475.0 – 3485.0 m

**Sample Description (spreadsheet):** Sample 3480m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 59U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 59.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3464m: clr,trnsl,v pl brn trnsl,vf-med,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3472m: clr,trnsl,v pl brn trnsl,vf-med,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.6 | 66 |
| RES_DEEP (ohm.m) | 34.52 | 66 |
| RES_SHALLOW (ohm.m) | 45.05 | 66 |
| **Δ Res (Deep − Shallow)** | **-10.54** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3490 m MD — Interval 3485.0 – 3495.0 m

**Sample Description (spreadsheet):** Sample 3490m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 58U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 58.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3472m: clr,trnsl,v pl brn trnsl,vf-med,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri aggs,com lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3484m: clr,trnsl,pl trnsl brn,vf-med,mod srt, 7 7 / 5 / 5 / 6 / 7 s a b g a g n s g ,a - b s d b t r n ls d e ,w q k tz s g il r c s m ,p t r , o v c is c p p o l r b ,g rn d - o in ff f w po h r , a fl r u g o m r. tx,fri
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 66 |
| RES_DEEP (ohm.m) | 27.56 | 66 |
| RES_SHALLOW (ohm.m) | 36.88 | 66 |
| **Δ Res (Deep − Shallow)** | **-9.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3500 m MD — Interval 3495.0 – 3505.0 m

**Sample Description (spreadsheet):** Sample 3500m: 0% Siltstone, occasional to minor siderite in 100% very fine to coarse, moderately medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, mod med-crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 42.0 U |
| FeCO₃ in Sandstone | occ-mnr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3484m: clr,trnsl,pl trnsl brn,vf-med,mod srt, 7 7 / 5 / 5 / 6 / 7 s a b g a g n s g ,a - b s d b t r n ls d e ,w q k tz s g il r c s m ,p t r , o v c is c p p o l r b ,g rn d - o in ff f w po h r , a fl r u g o m r. tx,fri
- **SANDSTONE** @ ~3492m: clr,trnsl,pl trnsl brn,vf-crs,occ med-crs,pr srt,sbang-sbrnd,wk sil cmt,occ sid cmt, occ-mnr lt brn-off wh arg mtx,fri aggs,pred lse,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 65 |
| RES_DEEP (ohm.m) | 24.97 | 65 |
| RES_SHALLOW (ohm.m) | 33.33 | 65 |
| **Δ Res (Deep − Shallow)** | **-8.36** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3510 m MD — Interval 3505.0 – 3515.0 m

**Sample Description (spreadsheet):** Sample 3510m: 5% Siltstone, minor siderite in 95% very fine to coarse, moderately medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, mod med-crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 41.0 U |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3492m: clr,trnsl,pl trnsl brn,vf-crs,occ med-crs,pr srt,sbang-sbrnd,wk sil cmt,occ sid cmt, occ-mnr lt brn-off wh arg mtx,fri aggs,pred lse,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~3500m: 2231-2834 psi SILTSTONE:med gry brn,aren,grd to SST,com
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.1 | 66 |
| RES_DEEP (ohm.m) | 23.19 | 66 |
| RES_SHALLOW (ohm.m) | 28.60 | 66 |
| **Δ Res (Deep − Shallow)** | **-5.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3520 m MD — Interval 3515.0 – 3525.0 m

**Sample Description (spreadsheet):** Sample 3520m: 5% Siltstone, trace siderite in 95% very fine to medium, occasional coarse Sandstone, 100% moderately bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, occ crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 43.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3500m: 2231-2834 psi SILTSTONE:med gry brn,aren,grd to SST,com
- **SANDSTONE** @ ~3512m: clr,trnsl,pl trnsl brn,vf-med,mnr crs, mod srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,occ off wh-lt brn arg mtx,fri aggs,com-pred lse qtz grs,pr vis por gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 65 |
| RES_DEEP (ohm.m) | 22.64 | 65 |
| RES_SHALLOW (ohm.m) | 26.76 | 65 |
| **Δ Res (Deep − Shallow)** | **-4.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3530 m MD — Interval 3525.0 – 3535.0 m

**Sample Description (spreadsheet):** Sample 3530m: 0% Siltstone, common siderite in 100% very fine to fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: fine) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 34.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3512m: clr,trnsl,pl trnsl brn,vf-med,mnr crs, mod srt,sbang-sbrnd,wk sil cmt,mnr sid cmt,occ off wh-lt brn arg mtx,fri aggs,com-pred lse qtz grs,pr vis por gd inf por,fluor.
- **SANDSTONE** @ ~3520m: clr,trnsl,pl trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,abdt sid cmt,occ off wh-lt brn arg mtx,fri-mod hd aggs,pred lse,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 66 |
| RES_DEEP (ohm.m) | 21.81 | 66 |
| RES_SHALLOW (ohm.m) | 25.40 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.59** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3540 m MD — Interval 3535.0 – 3545.0 m

**Sample Description (spreadsheet):** Sample 3540m: 0% Siltstone, trace siderite in 100% very fine to coarse, pred medium Sandstone, 100% bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 45.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3520m: clr,trnsl,pl trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,abdt sid cmt,occ off wh-lt brn arg mtx,fri-mod hd aggs,pred lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3528m: clr,trnsl,occ trnsl brn,vf-crs,pred med, 35 12 3 3 2 8.8 mod pr srt,sbang-sbrnd,wk sil cmt,occ sid cmt,occ pl brn-off wh arg mtx,fri-mod hd i/p aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 66 |
| RES_DEEP (ohm.m) | 21.98 | 66 |
| RES_SHALLOW (ohm.m) | 27.37 | 66 |
| **Δ Res (Deep − Shallow)** | **-5.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3550 m MD — Interval 3545.0 – 3555.0 m

**Sample Description (spreadsheet):** Sample 3550m: 0% Siltstone, trace siderite in 100% very fine to coarse, pred medium Sandstone, 100% bright FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 49.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3544m: clr,trnsl,occ trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,wk sil cmt,occ sid cmt,occ pl brn-off wh arg mtx,fri-mod hd i/p aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3552m: clr,trnsl,occ trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri-mod hd i/p aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.7 | 65 |
| RES_DEEP (ohm.m) | 21.24 | 65 |
| RES_SHALLOW (ohm.m) | 26.52 | 65 |
| **Δ Res (Deep − Shallow)** | **-5.28** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3560 m MD — Interval 3555.0 – 3565.0 m

**Sample Description (spreadsheet):** Sample 3560m: 5% Siltstone, 95% very fine to coarse, pred medium Sandstone, 100% bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 50.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3544m: clr,trnsl,occ trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,wk sil cmt,occ sid cmt,occ pl brn-off wh arg mtx,fri-mod hd i/p aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3552m: clr,trnsl,occ trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri-mod hd i/p aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 66 |
| RES_DEEP (ohm.m) | 19.26 | 66 |
| RES_SHALLOW (ohm.m) | 23.92 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.65** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3570 m MD — Interval 3565.0 – 3575.0 m

**Sample Description (spreadsheet):** Sample 3570m: 5% Siltstone, 95% very fine to coarse, pred medium Sandstone, 100% bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3552m: clr,trnsl,occ trnsl brn,vf-crs,pred med, mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri-mod hd i/p aggs,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~3564m: med dk gry,aren,grd to SST,micmic,tr carb spks,frm-sft,sbblky. 82 / 5 / 3 / 5 / 5
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 66 |
| RES_DEEP (ohm.m) | 19.56 | 66 |
| RES_SHALLOW (ohm.m) | 23.45 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.89** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3580 m MD — Interval 3575.0 – 3585.0 m

**Sample Description (spreadsheet):** Sample 3580m: 0% Siltstone, 100% very fine to fine, occasional medium Sandstone, 100% bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, occ med (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3564m: med dk gry,aren,grd to SST,micmic,tr carb spks,frm-sft,sbblky. 82 / 5 / 3 / 5 / 5
- **SANDSTONE** @ ~3572m: clr,trnsl,lt trnsl brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.3 | 65 |
| RES_DEEP (ohm.m) | 19.26 | 65 |
| RES_SHALLOW (ohm.m) | 22.20 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.94** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3590 m MD — Interval 3585.0 – 3595.0 m

**Sample Description (spreadsheet):** Sample 3590m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 45.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3572m: clr,trnsl,lt trnsl brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3580m: clr,trnsl,lt trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 66 |
| RES_DEEP (ohm.m) | 21.76 | 66 |
| RES_SHALLOW (ohm.m) | 25.56 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.80** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3600 m MD — Interval 3595.0 – 3605.0 m

**Sample Description (spreadsheet):** Sample 3600m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 50.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3580m: clr,trnsl,lt trnsl brn,vf-med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3588m: clr,trnsl,lt trnsl brn,vf-med,tr crs,mod 3592 84 / 5 / 3 / 4 / 4 51 U wl srt,sbang-sbrnd,wk sil cmt,occ pl brn-off wh arg 1238.7 mtx,fri,com lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 21.84 | 65 |
| RES_SHALLOW (ohm.m) | 25.30 | 65 |
| **Δ Res (Deep − Shallow)** | **-3.46** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3610 m MD — Interval 3605.0 – 3615.0 m

**Sample Description (spreadsheet):** Sample 3610m: 0% Siltstone, 100% very fine to medium, pred fine Sandstone, 100% bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, pred f (max: med) |
| Fluorescence | 100.0% bri |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3600m: clr,trnsl,lt trnsl brn,vf-med,pred f, mod wl srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~3612m: med-dk gry,aren,micmic,com sndy lams,frm,sbblky. CHANGE SHAKER SCREENS
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 66 |
| RES_DEEP (ohm.m) | 21.60 | 66 |
| RES_SHALLOW (ohm.m) | 25.30 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.70** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3620 m MD — Interval 3615.0 – 3625.0 m

**Sample Description (spreadsheet):** Sample 3620m: 5% Siltstone, 95% very fine to coarse, pred fine Sandstone, 100% bright FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 40.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3600m: clr,trnsl,lt trnsl brn,vf-med,pred f, mod wl srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~3612m: med-dk gry,aren,micmic,com sndy lams,frm,sbblky. CHANGE SHAKER SCREENS
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 66 |
| RES_DEEP (ohm.m) | 22.74 | 66 |
| RES_SHALLOW (ohm.m) | 25.72 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3630 m MD — Interval 3625.0 – 3635.0 m

**Sample Description (spreadsheet):** Sample 3630m: 5% Siltstone, 95% very fine to coarse, pred fine Sandstone, 100% bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3612m: med-dk gry,aren,micmic,com sndy lams,frm,sbblky. CHANGE SHAKER SCREENS
- **SANDSTONE** @ ~3621m: trnsl,clr,pl brn,vf-crs,pred f,pr srt, sbang-sbrnd,wk sil cmt,pl brn-off wh arg mtx,fri,occ mod hd aggs,com lse grs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 65 |
| RES_DEEP (ohm.m) | 21.65 | 65 |
| RES_SHALLOW (ohm.m) | 24.71 | 65 |
| **Δ Res (Deep − Shallow)** | **-3.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3640 m MD — Interval 3635.0 – 3645.0 m

**Sample Description (spreadsheet):** Sample 3640m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 54.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3621m: trnsl,clr,pl brn,vf-crs,pred f,pr srt, sbang-sbrnd,wk sil cmt,pl brn-off wh arg mtx,fri,occ mod hd aggs,com lse grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3628m: clr,trnsl,lt brn,vf-crs,pred f-med,pr srt, sbang-sbrnd,wk -occ mod sil cmt,com pl brn-off wh arg mtx,fri-occ mod hd,com lse qtz grs,pr vis por,gd 3632 inf por,fluor. 1238.5
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 66 |
| RES_DEEP (ohm.m) | 20.64 | 66 |
| RES_SHALLOW (ohm.m) | 23.85 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.21** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3650 m MD — Interval 3645.0 – 3655.0 m

**Sample Description (spreadsheet):** Sample 3650m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3640m: clr,trnsl,lt brn,vf-crs,pred f-med,pr srt, sbang-sbrnd,wk -occ mod sil cmt,com pl brn-off wh arg mtx,fri-occ mod hd,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3648m: 221-255 gpm SANDSTONE:clr,trnsl,lt brn,vf-crs,pred f-med,pr srt, 3652 sbang-sbrnd,tr ang,wk -occ mod sil cmt,com pl 1238.6 brn-off wh arg mtx,fri-occ mod hd,com lse qtz grs, pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 65 |
| RES_DEEP (ohm.m) | 20.79 | 65 |
| RES_SHALLOW (ohm.m) | 23.89 | 65 |
| **Δ Res (Deep − Shallow)** | **-3.11** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3660 m MD — Interval 3655.0 – 3665.0 m

**Sample Description (spreadsheet):** Sample 3660m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3640m: clr,trnsl,lt brn,vf-crs,pred f-med,pr srt, sbang-sbrnd,wk -occ mod sil cmt,com pl brn-off wh arg mtx,fri-occ mod hd,com lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3648m: 221-255 gpm SANDSTONE:clr,trnsl,lt brn,vf-crs,pred f-med,pr srt, 3652 sbang-sbrnd,tr ang,wk -occ mod sil cmt,com pl 1238.6 brn-off wh arg mtx,fri-occ mod hd,com lse qtz grs, pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.1 | 66 |
| RES_DEEP (ohm.m) | 19.66 | 66 |
| RES_SHALLOW (ohm.m) | 21.92 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3670 m MD — Interval 3665.0 – 3675.0 m

**Sample Description (spreadsheet):** Sample 3670m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 40.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3660m: clr trnsl,lt trnsl brn,vf-med,occ crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por,fr-gd 3664 inf por,fluor. 1238.7
- **SANDSTONE** @ ~3668m: clr trnsl,lt trnsl brn,vf-med,occ crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por,fr-gd 3672 inf por,fluor. 1238.8
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 66 |
| RES_DEEP (ohm.m) | 20.75 | 66 |
| RES_SHALLOW (ohm.m) | 25.27 | 66 |
| **Δ Res (Deep − Shallow)** | **-4.52** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3680 m MD — Interval 3675.0 – 3685.0 m

**Sample Description (spreadsheet):** Sample 3680m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 42.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3660m: clr trnsl,lt trnsl brn,vf-med,occ crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por,fr-gd 3664 inf por,fluor. 1238.7
- **SANDSTONE** @ ~3668m: clr trnsl,lt trnsl brn,vf-med,occ crs, mod srt,sbang-sbrnd,tr ang,wk sil cmt,com off wh-pl brn arg mtx,fri,com lse qtz grs,pr vis por,fr-gd 3672 inf por,fluor. 1238.8
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.2 | 65 |
| RES_DEEP (ohm.m) | 18.99 | 65 |
| RES_SHALLOW (ohm.m) | 23.20 | 65 |
| **Δ Res (Deep − Shallow)** | **-4.21** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3690 m MD — Interval 3685.0 – 3695.0 m

**Sample Description (spreadsheet):** Sample 3690m: 5% Siltstone, 95% very fine to fine, trace medium to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 35U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, tr med-crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 35.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3675m: 2.73 SANDSTONE:clr,trnsl,lt trnsl brn,vf-f,tr med-crs, pH: 9.7 mod srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn Ck: 1/2 arg mtx,fri,com lse qtz grs,pr vis por,fr inf por,fluor. Cl: 78k
- **SANDSTONE** @ ~3692m: clr,trnsl,lt trnsl brn,vf-med,tr crs, mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,com pl brn-off wh arg mtx,fri,com cln lse qtz grs,pr vis por, fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 66 |
| RES_DEEP (ohm.m) | 18.70 | 66 |
| RES_SHALLOW (ohm.m) | 22.63 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.93** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3700 m MD — Interval 3695.0 – 3705.0 m

**Sample Description (spreadsheet):** Sample 3700m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 35U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 35.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3692m: clr,trnsl,lt trnsl brn,vf-med,tr crs, mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,com pl brn-off wh arg mtx,fri,com cln lse qtz grs,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3702m: dk-med gry,aren,com micmic,tr carb spks & micrlams,frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 66 |
| RES_DEEP (ohm.m) | 22.74 | 66 |
| RES_SHALLOW (ohm.m) | 25.89 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.15** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3710 m MD — Interval 3705.0 – 3715.0 m

**Sample Description (spreadsheet):** Sample 3710m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 39.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3692m: clr,trnsl,lt trnsl brn,vf-med,tr crs, mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,com pl brn-off wh arg mtx,fri,com cln lse qtz grs,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3702m: dk-med gry,aren,com micmic,tr carb spks & micrlams,frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 65 |
| RES_DEEP (ohm.m) | 19.06 | 65 |
| RES_SHALLOW (ohm.m) | 21.49 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3720 m MD — Interval 3715.0 – 3725.0 m

**Sample Description (spreadsheet):** Sample 3720m: 0% Siltstone, 100% very fine to fine, occasional medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f, occ med (max: med) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3702m: dk-med gry,aren,com micmic,tr carb spks & micrlams,frm,sbblky.
- **SANDSTONE** @ ~3702m: clr,trnsl,occ lt trnsl brn,vf-f,occ med, mod wl srt,sbang-sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,fri,dom cln lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 17 |
| RES_DEEP (ohm.m) | 19.85 | 36 |
| RES_SHALLOW (ohm.m) | 23.29 | 36 |
| **Δ Res (Deep − Shallow)** | **-3.45** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3730 m MD — Interval 3725.0 – 3732.5 m

**Sample Description (spreadsheet):** Sample 3730m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs (max: crs) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 219 |
| Depth range | 1750 – 3730 m |
| Avg % Sandstone | 95.2% |
| Avg Δ Res (Deep−Shallow) | -5.18 ohm.m |
| Max Δ Res | 0.72 ohm.m |
| Min Δ Res | -46.45 ohm.m |
| Mudlog matches | 218 / 219 |
