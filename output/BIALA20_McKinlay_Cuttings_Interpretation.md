# BIALA 20 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 05:36 UTC  
**Well:** BIALA 20 (BIALA 20)  
**TD:** 3315 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `BIALA 20_ML_Mudlog_Spud-3315_MD_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Biala 20 Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Biala_20` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1583.42 | DC30.xlsx |
| McKinlay Member (shallowest) | 1580.00 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1580.00 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2050.75 m MD
- 2189.76 m MD
- 2305.25 m MD
- 2598.25 m MD
- 3008.87 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1926.70 | 1926.70 | 0.00 | 2050.75 | 124.0 |
| 2093.52 | 2093.86 | 0.34 | 2189.76 | 96.2 |
| 2241.09 | 2240.90 | 0.19 | 2305.25 | 64.2 |
| 2519.12 | 2520.11 | 0.99 | 2598.25 | 79.1 |
| 2966.10 | 2968.64 | 2.54 | 3008.87 | 42.8 |
| 3269.79 | 3271.62 | 1.83 | 3319.79 (assumed +50 m) | 50.0 |

**McKinlay Member analysis window:** 1580.0 – 3315.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1927–2051 m (overburden), 2094–2190 m (overburden), 2241–2305 m (overburden), 2519–2598 m (overburden), 2966–3009 m (overburden), 3270–3320 m (overburden)

**Samples in McKinlay Member:** 156 of 213 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 57

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** BIALA 20 → `BIALA 20` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1585 m MD — Interval 1585.0 – 1587.5 m

**Sample Description (spreadsheet):** Sample 1585m: 100% Siltstone, 0%  Sandstone, NO FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 0.0% nan |
| Total Gas | 40.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1588m: off wh,trnsl,yel-wh,f-rr med,mod srt, sbang-sbrnd,calc cmt,tr wh arg mtx,tr carb spks,fri, fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1596m: pl yel brn,trnsl,clr,vf-crs,dom f,pr srt, sbrnd-sbang,calc cmt,tr wh arg mtx,rr carb spks,rr mica,fri,fr vis por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.5 | 16 |
| RES_DEEP (ohm.m) | 67.10 | 16 |
| RES_SHALLOW (ohm.m) | 33.28 | 16 |
| **Δ Res (Deep − Shallow)** | **33.82** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1590 m MD — Interval 1587.5 – 1595.0 m

**Sample Description (spreadsheet):** Sample 1590m: 0% Siltstone, 100% fine, rare medium Sandstone, 100% moderately bright FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 49.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1588m: off wh,trnsl,yel-wh,f-rr med,mod srt, sbang-sbrnd,calc cmt,tr wh arg mtx,tr carb spks,fri, fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1596m: pl yel brn,trnsl,clr,vf-crs,dom f,pr srt, sbrnd-sbang,calc cmt,tr wh arg mtx,rr carb spks,rr mica,fri,fr vis por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.6 | 49 |
| RES_DEEP (ohm.m) | 77.32 | 49 |
| RES_SHALLOW (ohm.m) | 32.02 | 49 |
| **Δ Res (Deep − Shallow)** | **45.30** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1600 m MD — Interval 1595.0 – 1605.0 m

**Sample Description (spreadsheet):** Sample 1600m: 5% Siltstone, 95% very fine to fine, rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f, rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 50.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1588m: off wh,trnsl,yel-wh,f-rr med,mod srt, sbang-sbrnd,calc cmt,tr wh arg mtx,tr carb spks,fri, fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1596m: pl yel brn,trnsl,clr,vf-crs,dom f,pr srt, sbrnd-sbang,calc cmt,tr wh arg mtx,rr carb spks,rr mica,fri,fr vis por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.3 | 66 |
| RES_DEEP (ohm.m) | 95.46 | 66 |
| RES_SHALLOW (ohm.m) | 30.94 | 66 |
| **Δ Res (Deep − Shallow)** | **64.52** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1610 m MD — Interval 1605.0 – 1615.0 m

**Sample Description (spreadsheet):** Sample 1610m: 0% Siltstone, 100% fine, rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1596m: pl yel brn,trnsl,clr,vf-crs,dom f,pr srt, sbrnd-sbang,calc cmt,tr wh arg mtx,rr carb spks,rr mica,fri,fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1604m: 48 SANDSTONE:pl brn,trnsl,clr,f gr,rr med-crs,pr srt, PV: 10 1608 sbrnd-sbang,calc cmt,tr wh arg mtx,rr carb spks,rr YP: 18 1235.6 mica,fri,fr vis por,mod bri fluor. Gel: 6/10/11 WL: 5.0
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.5 | 66 |
| RES_DEEP (ohm.m) | 95.60 | 66 |
| RES_SHALLOW (ohm.m) | 30.19 | 66 |
| **Δ Res (Deep − Shallow)** | **65.41** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1620 m MD — Interval 1615.0 – 1625.0 m

**Sample Description (spreadsheet):** Sample 1620m: 5% Siltstone, 95% fine, rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 64U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 64.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1604m: 48 SANDSTONE:pl brn,trnsl,clr,f gr,rr med-crs,pr srt, PV: 10 1608 sbrnd-sbang,calc cmt,tr wh arg mtx,rr carb spks,rr YP: 18 1235.6 mica,fri,fr vis por,mod bri fluor. Gel: 6/10/11 WL: 5.0
- **SILTSTONE** @ ~1616m: med-dk gry,aren i/p,arg i/p,sli micmic, tr carb spks,tr liths,mod hd-hd,sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.0 | 65 |
| RES_DEEP (ohm.m) | 93.70 | 65 |
| RES_SHALLOW (ohm.m) | 30.70 | 65 |
| **Δ Res (Deep − Shallow)** | **63.00** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1630 m MD — Interval 1625.0 – 1632.5 m

**Sample Description (spreadsheet):** Sample 1630m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% moderately bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1616m: med-dk gry,aren i/p,arg i/p,sli micmic, tr carb spks,tr liths,mod hd-hd,sbblky.
- **SANDSTONE** @ ~1628m: pl yel,lt gry brn,trnsl,wh,vf-dom f,rr med,mod wl srt,sbang-sbrnd,wk calc cmt,sil i/p,tr wh arg mtx,rr carb spks,rr liths,fri,fr vis por,mod bri fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.6 | 49 |
| RES_DEEP (ohm.m) | 94.24 | 49 |
| RES_SHALLOW (ohm.m) | 29.09 | 49 |
| **Δ Res (Deep − Shallow)** | **65.15** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: 10% Siltstone, 90% fine, rare medium Sandstone, 100% moderately bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1628m: pl yel,lt gry brn,trnsl,wh,vf-dom f,rr med,mod wl srt,sbang-sbrnd,wk calc cmt,sil i/p,tr wh arg mtx,rr carb spks,rr liths,fri,fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1632m: pl yel,lt gry brn,trnsl,wh,vf-dom f,rr med,mod wl srt,sbang-sbrnd,wk calc cmt,sil i/p,tr wh arg mtx,rr carb spks,rr liths,fri,fr vis por,mod bri fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.4 | 33 |
| RES_DEEP (ohm.m) | 82.72 | 33 |
| RES_SHALLOW (ohm.m) | 27.67 | 33 |
| **Δ Res (Deep − Shallow)** | **55.04** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% moderately bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 42.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1628m: pl yel,lt gry brn,trnsl,wh,vf-dom f,rr med,mod wl srt,sbang-sbrnd,wk calc cmt,sil i/p,tr wh arg mtx,rr carb spks,rr liths,fri,fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1632m: pl yel,lt gry brn,trnsl,wh,vf-dom f,rr med,mod wl srt,sbang-sbrnd,wk calc cmt,sil i/p,tr wh arg mtx,rr carb spks,rr liths,fri,fr vis por,mod bri fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.9 | 33 |
| RES_DEEP (ohm.m) | 78.05 | 33 |
| RES_SHALLOW (ohm.m) | 27.64 | 33 |
| **Δ Res (Deep − Shallow)** | **50.41** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 0% Siltstone, 100% fine, rare medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 37.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1628m: pl yel,lt gry brn,trnsl,wh,vf-dom f,rr med,mod wl srt,sbang-sbrnd,wk calc cmt,sil i/p,tr wh arg mtx,rr carb spks,rr liths,fri,fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1632m: pl yel,lt gry brn,trnsl,wh,vf-dom f,rr med,mod wl srt,sbang-sbrnd,wk calc cmt,sil i/p,tr wh arg mtx,rr carb spks,rr liths,fri,fr vis por,mod bri fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.5 | 33 |
| RES_DEEP (ohm.m) | 80.12 | 33 |
| RES_SHALLOW (ohm.m) | 28.03 | 33 |
| **Δ Res (Deep − Shallow)** | **52.08** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1636m: lt gry,aren,grd to vf SST,micmic,com 1640 carb spks,tr liths,mod hd,sbblky. 1235.9 FLUOR:1630-1680m; 100% of SST; dll-mod bri yel/grn,evn,mod rapid cut,
- **SANDSTONE** @ ~1644m: clr,trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,dom cln,rr carb spks,rr mica,rr liths,fri-lse,fr vis & inf por,dll-occ mod bri fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.7 | 33 |
| RES_DEEP (ohm.m) | 90.77 | 33 |
| RES_SHALLOW (ohm.m) | 28.79 | 33 |
| **Δ Res (Deep − Shallow)** | **61.98** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 10% Siltstone, 90% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 41.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1644m: clr,trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,dom cln,rr carb spks,rr mica,rr liths,fri-lse,fr vis & inf por,dll-occ mod bri fluor.
- **SANDSTONE** @ ~1648m: lt gry brn,occ pl yel,trnsl,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,cln i/p,loc
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 29.5 | 32 |
| RES_DEEP (ohm.m) | 96.17 | 32 |
| RES_SHALLOW (ohm.m) | 30.32 | 32 |
| **Δ Res (Deep − Shallow)** | **65.85** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 45.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1644m: clr,trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,dom cln,rr carb spks,rr mica,rr liths,fri-lse,fr vis & inf por,dll-occ mod bri fluor.
- **SANDSTONE** @ ~1648m: lt gry brn,occ pl yel,trnsl,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,cln i/p,loc
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.9 | 33 |
| RES_DEEP (ohm.m) | 101.58 | 33 |
| RES_SHALLOW (ohm.m) | 33.08 | 33 |
| **Δ Res (Deep − Shallow)** | **68.50** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 0% Siltstone, 100% fine, rare medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 57.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1648m: lt gry brn,occ pl yel,trnsl,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,cln i/p,loc
- **SILTSTONE** @ ~1652m: lt gry,aren,grd to vf SST,micmic,com carb spks,tr liths,mod hd-fri,sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.1 | 33 |
| RES_DEEP (ohm.m) | 96.15 | 33 |
| RES_SHALLOW (ohm.m) | 34.23 | 33 |
| **Δ Res (Deep − Shallow)** | **61.92** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 0% Siltstone, 100% fine, rare medium to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 56U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 56.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1656m: lt gry brn,occ pl yel,trnsl,f-med,wl srt, sbrnd-sbang,wk sil cmt,rr wh arg mtx,cln i/p,loc com carb spks,tr liths,rr mic,fri-mod hd,pr-fr vis por, 1660 74 / 7 / 5 / 6 / 8 dll-mod bri fluor. 1235.8
- **SANDSTONE** @ ~1668m: lt gry brn,pl yel,trnsl,clr,f gr,rr med-crs,mod srt,sbang-sbrnd,wk sil cmt,rr wh arg mtx,dom cln,loc com liths & carb spks,rr mic, fri-mod hd,fr vis por,mod bri-bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.7 | 33 |
| RES_DEEP (ohm.m) | 94.73 | 33 |
| RES_SHALLOW (ohm.m) | 34.82 | 33 |
| **Δ Res (Deep − Shallow)** | **59.91** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 69U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 69.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1668m: lt gry brn,pl yel,trnsl,clr,f gr,rr med-crs,mod srt,sbang-sbrnd,wk sil cmt,rr wh arg mtx,dom cln,loc com liths & carb spks,rr mic, fri-mod hd,fr vis por,mod bri-bri fluor.
- **SILTSTONE** @ ~1672m: lt gry,aren,grd to vf SST,micmic,loc com liths & carb spks,mod hd,blky-sbblky. 76 / 6 / 5 / 6 / 7 70 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.3 | 33 |
| RES_DEEP (ohm.m) | 86.04 | 33 |
| RES_SHALLOW (ohm.m) | 32.24 | 33 |
| **Δ Res (Deep − Shallow)** | **53.81** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680m: 5% Siltstone, 95% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1668m: lt gry brn,pl yel,trnsl,clr,f gr,rr med-crs,mod srt,sbang-sbrnd,wk sil cmt,rr wh arg mtx,dom cln,loc com liths & carb spks,rr mic, fri-mod hd,fr vis por,mod bri-bri fluor.
- **SILTSTONE** @ ~1672m: lt gry,aren,grd to vf SST,micmic,loc com liths & carb spks,mod hd,blky-sbblky. 76 / 6 / 5 / 6 / 7 70 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.6 | 33 |
| RES_DEEP (ohm.m) | 79.88 | 33 |
| RES_SHALLOW (ohm.m) | 33.40 | 33 |
| **Δ Res (Deep − Shallow)** | **46.48** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 71.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1668m: lt gry brn,pl yel,trnsl,clr,f gr,rr med-crs,mod srt,sbang-sbrnd,wk sil cmt,rr wh arg mtx,dom cln,loc com liths & carb spks,rr mic, fri-mod hd,fr vis por,mod bri-bri fluor.
- **SILTSTONE** @ ~1672m: lt gry,aren,grd to vf SST,micmic,loc com liths & carb spks,mod hd,blky-sbblky. 76 / 6 / 5 / 6 / 7 70 U
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.4 | 32 |
| RES_DEEP (ohm.m) | 78.69 | 32 |
| RES_SHALLOW (ohm.m) | 36.59 | 32 |
| **Δ Res (Deep − Shallow)** | **42.11** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 5% Siltstone, 95% fine, rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 74.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1676m: pl yel,lt gry brn,trnsl,f-med,wl srt, sbrnd-sbang,sil cmt,tr wh arg mtx,rr carb spks, fri-mod hd,fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1680m: pl yel,lt gry brn,trnsl,f-med,rr crs,mod srt,sbang-sbrnd,sil cmt,rr wh arg mtx,dom clr,rr slty lams,rr carb spks,rr mic,fri-mod hd,fr vis por,mod bri-bri fluor
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 29.6 | 33 |
| RES_DEEP (ohm.m) | 75.33 | 33 |
| RES_SHALLOW (ohm.m) | 36.62 | 33 |
| **Δ Res (Deep − Shallow)** | **38.71** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: pl yel,lt gry brn,trnsl,f-med,rr crs,mod srt,sbang-sbrnd,sil cmt,rr wh arg mtx,dom clr,rr slty lams,rr carb spks,rr mic,fri-mod hd,fr vis por,mod bri-bri fluor
- **SANDSTONE** @ ~1692m: pl yel,lt gry brn,f gr,rr med,wl srt, sbang-sbrnd,sil cmt,rr calc,rr wh arg mtx,dom cln,rr carb spks,rr liths,fri-mod hd,fr vis por,bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.0 | 33 |
| RES_DEEP (ohm.m) | 77.06 | 33 |
| RES_SHALLOW (ohm.m) | 31.07 | 33 |
| **Δ Res (Deep − Shallow)** | **46.00** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1692m: pl yel,lt gry brn,f gr,rr med,wl srt, sbang-sbrnd,sil cmt,rr calc,rr wh arg mtx,dom cln,rr carb spks,rr liths,fri-mod hd,fr vis por,bri fluor.
- **SANDSTONE** @ ~1696m: pl trnsl brn,lt gry brn,clr,pred f,rr
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.5 | 33 |
| RES_DEEP (ohm.m) | 76.36 | 33 |
| RES_SHALLOW (ohm.m) | 32.17 | 33 |
| **Δ Res (Deep − Shallow)** | **44.19** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 20% Siltstone, 80% fine, rare medium to coarse Sandstone, 100% bright FLUOR in SST. TG 69U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 69.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1692m: pl yel,lt gry brn,f gr,rr med,wl srt, sbang-sbrnd,sil cmt,rr calc,rr wh arg mtx,dom cln,rr carb spks,rr liths,fri-mod hd,fr vis por,bri fluor.
- **SANDSTONE** @ ~1696m: pl trnsl brn,lt gry brn,clr,pred f,rr
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.0 | 33 |
| RES_DEEP (ohm.m) | 75.54 | 33 |
| RES_SHALLOW (ohm.m) | 36.64 | 33 |
| **Δ Res (Deep − Shallow)** | **38.90** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 10% Siltstone, 90% fine, rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 88.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1696m: pl trnsl brn,lt gry brn,clr,pred f,rr
- **SILTSTONE** @ ~1700m: lt gry,brnsh brn,aren,grd to vf SST i/p, micmic,occ carb spks,mod hd-occ hd,sbfiss.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 33.9 | 32 |
| RES_DEEP (ohm.m) | 65.98 | 32 |
| RES_SHALLOW (ohm.m) | 36.30 | 32 |
| **Δ Res (Deep − Shallow)** | **29.68** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 5% Siltstone, 95% fine, rare medium,trace coarse Sandstone, 100% bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med,tr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1700m: lt gry,brnsh brn,aren,grd to vf SST i/p, micmic,occ carb spks,mod hd-occ hd,sbfiss.
- **SANDSTONE** @ ~1704m: pl trnsl brn,lt grysh brn,clr,off wh,f,rr med-crs,sbang-sbrnd,wl-mod wl srt,wk-mod strg sil cmt,mnr lt grysh brn-rr off wh arg mtx,rr liths,rr slty 1708 lams,rr carb spks,fri-mod hd aggs,fr vis por,mod bri 1235.2 fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.2 | 33 |
| RES_DEEP (ohm.m) | 67.79 | 33 |
| RES_SHALLOW (ohm.m) | 36.42 | 33 |
| **Δ Res (Deep − Shallow)** | **31.37** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% moderately bright FLUOR in SST. TG 86U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 86.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1704m: pl trnsl brn,lt grysh brn,clr,off wh,f,rr med-crs,sbang-sbrnd,wl-mod wl srt,wk-mod strg sil cmt,mnr lt grysh brn-rr off wh arg mtx,rr liths,rr slty 1708 lams,rr carb spks,fri-mod hd aggs,fr vis por,mod bri 1235.2 fluor.
- **SANDSTONE** @ ~1716m: pl trnsl brn,lt grysh brn,clr,off wh,f-rr med,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr lt grysh brn-off wh arg mtx,rr liths & carb spks,rr slty lams, fri-mod hd aggs,fr vis por,mod bri fluor. 1720 FLUOR:1715-1760m;100 % of SST;
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.1 | 33 |
| RES_DEEP (ohm.m) | 73.32 | 33 |
| RES_SHALLOW (ohm.m) | 36.55 | 33 |
| **Δ Res (Deep − Shallow)** | **36.77** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 10% Siltstone, 90% fine, rare medium Sandstone, 100% moderately bright FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 103.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1716m: pl trnsl brn,lt grysh brn,clr,off wh,f-rr med,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr lt grysh brn-off wh arg mtx,rr liths & carb spks,rr slty lams, fri-mod hd aggs,fr vis por,mod bri fluor. 1720 FLUOR:1715-1760m;100 % of SST;
- **SILTSTONE** @ ~1716m: lt gry,brnsh brn,aren,grd to vf SST i/p, micmic,occ carb spks,mod hd-occ hd,sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.7 | 33 |
| RES_DEEP (ohm.m) | 73.27 | 33 |
| RES_SHALLOW (ohm.m) | 38.90 | 33 |
| **Δ Res (Deep − Shallow)** | **34.37** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1735.0 m

**Sample Description (spreadsheet):** Sample 1730m: 5% Siltstone, 95% fine, rare medium Sandstone, 100% moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f, rr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 151.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1716m: pl trnsl brn,lt grysh brn,clr,off wh,f-rr med,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr lt grysh brn-off wh arg mtx,rr liths & carb spks,rr slty lams, fri-mod hd aggs,fr vis por,mod bri fluor. 1720 FLUOR:1715-1760m;100 % of SST;
- **SILTSTONE** @ ~1716m: lt gry,brnsh brn,aren,grd to vf SST i/p, micmic,occ carb spks,mod hd-occ hd,sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 37.6 | 49 |
| RES_DEEP (ohm.m) | 98.25 | 49 |
| RES_SHALLOW (ohm.m) | 40.58 | 49 |
| **Δ Res (Deep − Shallow)** | **57.67** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1735.0 – 1745.0 m

**Sample Description (spreadsheet):** Sample 1740m: 15% Siltstone, 85% fine to very fine Sandstone, 100% moderately bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f-vf (max: F) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1724m: lt grysh brn,clr,off wh,pl trnsl brn,f-rr med,sbang-sbrnd,wl srt,wk-mod sil cmt,com lt grysh brn-mnr off wh arg mtx,rr carb spks & lith incl, 17 12 2 3 8 5.0 tr mica flks,rr slty lams,fri-mod hd aggs,fr vis por, fluor.
- **SANDSTONE** @ ~1732m: lt grysh brn,lt brn,off wh,clr,trnsl,f-vf, sbrnd-sbang,wl srt,wk-mod sil cmt,com lt grysh brn-lt brn arg mtx,rr off wh arg mtx,rr carb spks & liths,tr slty lams,tr sid,fri-mod hd aggs,pr-fr vis por, mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 38.5 | 66 |
| RES_DEEP (ohm.m) | 100.93 | 66 |
| RES_SHALLOW (ohm.m) | 40.88 | 66 |
| **Δ Res (Deep − Shallow)** | **60.05** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1745.0 – 1755.0 m

**Sample Description (spreadsheet):** Sample 1750m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 156.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1732m: lt grysh brn,lt brn,off wh,clr,trnsl,f-vf, sbrnd-sbang,wl srt,wk-mod sil cmt,com lt grysh brn-lt brn arg mtx,rr off wh arg mtx,rr carb spks & liths,tr slty lams,tr sid,fri-mod hd aggs,pr-fr vis por, mod bri fluor.
- **SANDSTONE** @ ~1752m: lt grysh brn,lt brn,off wh,clr,trnsl,f-vf, sbrnd-sbang,wl srt,wk-mod sil cmt,com lt grysh brn-lt brn arg mtx,rr off wh arg mtx,rr carb spks & liths,tr slty lams,tr sid,fri-mod hd aggs,pr-fr vis por, mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 45.8 | 65 |
| RES_DEEP (ohm.m) | 79.68 | 65 |
| RES_SHALLOW (ohm.m) | 54.93 | 65 |
| **Δ Res (Deep − Shallow)** | **24.75** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1755.0 – 1765.0 m

**Sample Description (spreadsheet):** Sample 1760m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 153U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 153.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1752m: lt grysh brn,lt brn,off wh,clr,trnsl,f-vf, sbrnd-sbang,wl srt,wk-mod sil cmt,com lt grysh brn-lt brn arg mtx,rr off wh arg mtx,rr carb spks & liths,tr slty lams,tr sid,fri-mod hd aggs,pr-fr vis por, mod bri fluor.
- **SANDSTONE** @ ~1772m: lt brn,off wh,clr,trnsl,opq,pred f-med, occ crs,mod wl-mod srt,sbrnd-sbang,wk-mod strg sil cmt,occ lt brn-off wh arg mtx,rr carb spks,rr mica 1776 flks,rr slty lams,fri-mod hd aggs,lse i/p,fr vis por, 1234.8 fr-gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 40.3 | 66 |
| RES_DEEP (ohm.m) | 77.48 | 66 |
| RES_SHALLOW (ohm.m) | 48.52 | 66 |
| **Δ Res (Deep − Shallow)** | **28.96** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1765.0 – 1775.0 m

**Sample Description (spreadsheet):** Sample 1770m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 171U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 171.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1752m: lt grysh brn,lt brn,off wh,clr,trnsl,f-vf, sbrnd-sbang,wl srt,wk-mod sil cmt,com lt grysh brn-lt brn arg mtx,rr off wh arg mtx,rr carb spks & liths,tr slty lams,tr sid,fri-mod hd aggs,pr-fr vis por, mod bri fluor.
- **SANDSTONE** @ ~1772m: lt brn,off wh,clr,trnsl,opq,pred f-med, occ crs,mod wl-mod srt,sbrnd-sbang,wk-mod strg sil cmt,occ lt brn-off wh arg mtx,rr carb spks,rr mica 1776 flks,rr slty lams,fri-mod hd aggs,lse i/p,fr vis por, 1234.8 fr-gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 41.0 | 65 |
| RES_DEEP (ohm.m) | 77.84 | 65 |
| RES_SHALLOW (ohm.m) | 46.91 | 65 |
| **Δ Res (Deep − Shallow)** | **30.94** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1775.0 – 1785.0 m

**Sample Description (spreadsheet):** Sample 1780m: 0% Siltstone, 100% fine to medium, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, occ crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 175.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1772m: lt brn,off wh,clr,trnsl,opq,pred f-med, occ crs,mod wl-mod srt,sbrnd-sbang,wk-mod strg sil cmt,occ lt brn-off wh arg mtx,rr carb spks,rr mica 1776 flks,rr slty lams,fri-mod hd aggs,lse i/p,fr vis por, 1234.8 fr-gd inf por,bri fluor.
- **SANDSTONE** @ ~1784m: off wh,clr,trnsl,lt brn,lt brnsh gry, med-f,occ crs,sbang-sbrnd,mod srt,wk-mod sil cmt, mnr lt brn-lt brnsh gry arg mtx,rr carb spks & liths, pred lse disagg qtz grs,fri-mod hd aggs,fr vis por, fr-gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 38.3 | 66 |
| RES_DEEP (ohm.m) | 93.45 | 66 |
| RES_SHALLOW (ohm.m) | 43.70 | 66 |
| **Δ Res (Deep − Shallow)** | **49.75** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1785.0 – 1795.0 m

**Sample Description (spreadsheet):** Sample 1790m: 0% Siltstone, 100% medium to fine,occasional coarse Sandstone, 100% bright FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f,occ crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 161.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1772m: lt brn,off wh,clr,trnsl,opq,pred f-med, occ crs,mod wl-mod srt,sbrnd-sbang,wk-mod strg sil cmt,occ lt brn-off wh arg mtx,rr carb spks,rr mica 1776 flks,rr slty lams,fri-mod hd aggs,lse i/p,fr vis por, 1234.8 fr-gd inf por,bri fluor.
- **SANDSTONE** @ ~1784m: off wh,clr,trnsl,lt brn,lt brnsh gry, med-f,occ crs,sbang-sbrnd,mod srt,wk-mod sil cmt, mnr lt brn-lt brnsh gry arg mtx,rr carb spks & liths, pred lse disagg qtz grs,fri-mod hd aggs,fr vis por, fr-gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 38.6 | 66 |
| RES_DEEP (ohm.m) | 98.25 | 66 |
| RES_SHALLOW (ohm.m) | 44.56 | 66 |
| **Δ Res (Deep − Shallow)** | **53.68** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1795.0 – 1805.0 m

**Sample Description (spreadsheet):** Sample 1800m: 0% Siltstone, 100% fine to very fine,rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 194U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-vf,rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 194.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1784m: off wh,clr,trnsl,lt brn,lt brnsh gry, med-f,occ crs,sbang-sbrnd,mod srt,wk-mod sil cmt, mnr lt brn-lt brnsh gry arg mtx,rr carb spks & liths, pred lse disagg qtz grs,fri-mod hd aggs,fr vis por, fr-gd inf por,bri fluor.
- **SANDSTONE** @ ~1782m: lt brn,lt grysh brn,clr,trnsl,f-vf,rr med, tr crs,mod srt,sbrnd-sbang,wk-mod strg sil cmt,occ lt brn-lt grysh brn arg mtx,rr carb spks & liths,rr slty 1804 lams,fri-mod hd aggs,fr vis por,mod bri fluor. 1234.5
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 36.0 | 65 |
| RES_DEEP (ohm.m) | 100.69 | 65 |
| RES_SHALLOW (ohm.m) | 42.47 | 65 |
| **Δ Res (Deep − Shallow)** | **58.22** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1805.0 – 1815.0 m

**Sample Description (spreadsheet):** Sample 1810m: 0% Siltstone, 100% very to very fine,minor medium Sandstone, 100% moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | v-vf,mnr med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 166.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1812m: lt brn,lt brnsh gry,clr,trnsl,f-mnr med, rr crs,wl srt,sbrnd-sbang,wk-mod strg il cmt,mnr lt brn-lt brnsh gry arg mtx,rr carb spks & micrlams,rr 1816 mica flks,rr slty lams,fri-mod hd aggs,fr-pr vis por, 1234.2 mod bri fluor.
- **SANDSTONE** @ ~1820m: lt brn,lt brnsh gry,off wh,clr,trnsl,pl 18 12 2 3 4 4.0 trnsl yel,f,rr med-crs,mod wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn-lt brnsh gry arg mtx,rr off wh arg mtx, rr carb spks & micrlams,rr mica flks,rr slty lams, fri-mod hd aggs,fr vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.7 | 66 |
| RES_DEEP (ohm.m) | 99.73 | 66 |
| RES_SHALLOW (ohm.m) | 33.65 | 66 |
| **Δ Res (Deep − Shallow)** | **66.08** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1815.0 – 1825.0 m

**Sample Description (spreadsheet):** Sample 1820m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 179.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1812m: lt brn,lt brnsh gry,clr,trnsl,f-mnr med, rr crs,wl srt,sbrnd-sbang,wk-mod strg il cmt,mnr lt brn-lt brnsh gry arg mtx,rr carb spks & micrlams,rr 1816 mica flks,rr slty lams,fri-mod hd aggs,fr-pr vis por, 1234.2 mod bri fluor.
- **SANDSTONE** @ ~1820m: lt brn,lt brnsh gry,off wh,clr,trnsl,pl 18 12 2 3 4 4.0 trnsl yel,f,rr med-crs,mod wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn-lt brnsh gry arg mtx,rr off wh arg mtx, rr carb spks & micrlams,rr mica flks,rr slty lams, fri-mod hd aggs,fr vis por,bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.3 | 66 |
| RES_DEEP (ohm.m) | 98.73 | 66 |
| RES_SHALLOW (ohm.m) | 39.18 | 66 |
| **Δ Res (Deep − Shallow)** | **59.55** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1825.0 – 1835.0 m

**Sample Description (spreadsheet):** Sample 1830m: 0% Siltstone, 100% fine, rare medium to coarse Sandstone, 100% bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 179.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1812m: lt brn,lt brnsh gry,clr,trnsl,f-mnr med, rr crs,wl srt,sbrnd-sbang,wk-mod strg il cmt,mnr lt brn-lt brnsh gry arg mtx,rr carb spks & micrlams,rr 1816 mica flks,rr slty lams,fri-mod hd aggs,fr-pr vis por, 1234.2 mod bri fluor.
- **SANDSTONE** @ ~1820m: lt brn,lt brnsh gry,off wh,clr,trnsl,pl 18 12 2 3 4 4.0 trnsl yel,f,rr med-crs,mod wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn-lt brnsh gry arg mtx,rr off wh arg mtx, rr carb spks & micrlams,rr mica flks,rr slty lams, fri-mod hd aggs,fr vis por,bri fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 40.5 | 65 |
| RES_DEEP (ohm.m) | 87.18 | 65 |
| RES_SHALLOW (ohm.m) | 45.50 | 65 |
| **Δ Res (Deep − Shallow)** | **41.68** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1835.0 – 1845.0 m

**Sample Description (spreadsheet):** Sample 1840m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 165.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: lt brn,lt brnsh gry,off wh,clr,trnsl,pl 18 12 2 3 4 4.0 trnsl yel,f,rr med-crs,mod wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn-lt brnsh gry arg mtx,rr off wh arg mtx, rr carb spks & micrlams,rr mica flks,rr slty lams, fri-mod hd aggs,fr vis por,bri fluor.
- **SILTSTONE** @ ~1828m: med gry,brnsh gry,aren,grd to vf SST 1233.7 i/p,mnr arg,micmic,mod hd,sbfiss-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 44.2 | 66 |
| RES_DEEP (ohm.m) | 78.06 | 66 |
| RES_SHALLOW (ohm.m) | 50.76 | 66 |
| **Δ Res (Deep − Shallow)** | **27.30** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1845.0 – 1855.0 m

**Sample Description (spreadsheet):** Sample 1850m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 173U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 173.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1836m: lt brn,lt brnsh gry,pl trnsl yel,clr, f-med,rr crs,sbang-sbrnd,mod wl srt,wk-mod strg sil cmt,mnr lt brn-lt brnsh gry arg mtx,occ carb spks & micrlams,rr dk liths,fri-mod hd aggs,mnr lse,fr vis 18 12 4 3 0 3.5 por,fr-gd inf por,mod bri fluor.
- **SANDSTONE** @ ~1844m: lt brn,lt brnsh gry,clr,trnsl,f-occ med, rr crs,wl-mod wl srt,sbrnd-sbang,wk-mod sil cmt, mnr lt brn-lt brnsh gry arg mtx,rr mica flks,rr carb spks,fri-mod hd aggs,fr vis por,mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 54.8 | 65 |
| RES_DEEP (ohm.m) | 72.84 | 65 |
| RES_SHALLOW (ohm.m) | 64.58 | 65 |
| **Δ Res (Deep − Shallow)** | **8.26** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: 30% Siltstone, 10 siderite in 70% fine, rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | f, rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 195.0 U |
| FeCO₃ in Sandstone | 10 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1844m: lt brn,lt brnsh gry,clr,trnsl,f-occ med, rr crs,wl-mod wl srt,sbrnd-sbang,wk-mod sil cmt, mnr lt brn-lt brnsh gry arg mtx,rr mica flks,rr carb spks,fri-mod hd aggs,fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1864m: pl yel,lt gry,f-med,rr crs,mod srt, 1232.7 sbang-sbrnd,sil cmt,tr wh arg mtx,rr liths,rr sid fags, rr mic,lse-fri,fr vis & inf por,bri fluor. FLUOR:1856-1900m;90-100% of SST: dll-bri mostly mod bri,yel-grn,evn,slw
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 54.3 | 66 |
| RES_DEEP (ohm.m) | 99.82 | 66 |
| RES_SHALLOW (ohm.m) | 80.76 | 66 |
| **Δ Res (Deep − Shallow)** | **19.07** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 140.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1864m: pl yel,lt gry,f-med,rr crs,mod srt, 1232.7 sbang-sbrnd,sil cmt,tr wh arg mtx,rr liths,rr sid fags, rr mic,lse-fri,fr vis & inf por,bri fluor. FLUOR:1856-1900m;90-100% of SST: dll-bri mostly mod bri,yel-grn,evn,slw
- **SANDSTONE** @ ~1876m: pl yel,lt gry,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,rr liths,rr sid fags, rr mic,lse-fri,fr vis & inf por,dll-bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 49.0 | 66 |
| RES_DEEP (ohm.m) | 104.77 | 66 |
| RES_SHALLOW (ohm.m) | 85.21 | 66 |
| **Δ Res (Deep − Shallow)** | **19.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1875.0 – 1885.0 m

**Sample Description (spreadsheet):** Sample 1880m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 131U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 131.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1864m: pl yel,lt gry,f-med,rr crs,mod srt, 1232.7 sbang-sbrnd,sil cmt,tr wh arg mtx,rr liths,rr sid fags, rr mic,lse-fri,fr vis & inf por,bri fluor. FLUOR:1856-1900m;90-100% of SST: dll-bri mostly mod bri,yel-grn,evn,slw
- **SANDSTONE** @ ~1876m: pl yel,lt gry,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,rr liths,rr sid fags, rr mic,lse-fri,fr vis & inf por,dll-bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 52.6 | 65 |
| RES_DEEP (ohm.m) | 104.84 | 65 |
| RES_SHALLOW (ohm.m) | 88.13 | 65 |
| **Δ Res (Deep − Shallow)** | **16.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1885.0 – 1893.5 m

**Sample Description (spreadsheet):** Sample 1890m: 20% Siltstone, 15 siderite in 80% fine to medium, rare coarse Sandstone, 90% dull  to  moderately bright FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 90.0% dll - mod bri |
| Total Gas | 115.0 U |
| FeCO₃ in Sandstone | 15 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1876m: pl yel,lt gry,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,rr liths,rr sid fags, rr mic,lse-fri,fr vis & inf por,dll-bri fluor.
- **LIMESTONE** @ ~1880m: med gry,brn,micr,arg,sid,v hd ang frac, 22-11-2024 76 / 6 / 4 / 6 / 8 128 U blky. 18 12 8
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 43.7 | 56 |
| RES_DEEP (ohm.m) | 98.70 | 56 |
| RES_SHALLOW (ohm.m) | 69.10 | 56 |
| **Δ Res (Deep − Shallow)** | **29.60** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1897 m MD — Interval 1893.5 – 1898.5 m

**Sample Description (spreadsheet):** Sample 1897m: 25% Siltstone, 5 siderite in 75% fine to medium Sandstone, 90% moderately bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90.0% mod bri |
| Total Gas | 82.0 U |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE** @ ~1880m: med gry,brn,micr,arg,sid,v hd ang frac, 22-11-2024 76 / 6 / 4 / 6 / 8 128 U blky. 18 12 8
- **SANDSTONE** @ ~1896m: pl yel,clr,trnsl,f-crs,dom f,pr srt, sbang-sbrnd,sil cmt,nil-rr wh arg mtx,dom cln,com slty lams,com sid frags,fri-lse,fr-gd vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 42.4 | 33 |
| RES_DEEP (ohm.m) | 107.36 | 33 |
| RES_SHALLOW (ohm.m) | 73.27 | 33 |
| **Δ Res (Deep − Shallow)** | **34.09** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1898.5 – 1903.5 m

**Sample Description (spreadsheet):** Sample 1900m: 25% Siltstone, 5 siderite in 75% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 84U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 84.0 U |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1896m: pl yel,clr,trnsl,f-crs,dom f,pr srt, sbang-sbrnd,sil cmt,nil-rr wh arg mtx,dom cln,com slty lams,com sid frags,fri-lse,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~1908m: pl yel,v lt gry,f-med,wl srt, sbrnd-sbang,sil cmt,nil-rr wh arg mtx,com sid frags, com slty lams,rr carb spks,rr mic,fri,fr vis por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 41.6 | 33 |
| RES_DEEP (ohm.m) | 119.01 | 33 |
| RES_SHALLOW (ohm.m) | 88.70 | 33 |
| **Δ Res (Deep − Shallow)** | **30.30** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1907 m MD — Interval 1903.5 – 1908.5 m

**Sample Description (spreadsheet):** Sample 1907m: 5% Siltstone, common siderite in 95% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 128.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1896m: pl yel,clr,trnsl,f-crs,dom f,pr srt, sbang-sbrnd,sil cmt,nil-rr wh arg mtx,dom cln,com slty lams,com sid frags,fri-lse,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~1908m: pl yel,v lt gry,f-med,wl srt, sbrnd-sbang,sil cmt,nil-rr wh arg mtx,com sid frags, com slty lams,rr carb spks,rr mic,fri,fr vis por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 49.1 | 32 |
| RES_DEEP (ohm.m) | 117.87 | 32 |
| RES_SHALLOW (ohm.m) | 112.18 | 32 |
| **Δ Res (Deep − Shallow)** | **5.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1908.5 – 1915.0 m

**Sample Description (spreadsheet):** Sample 1910m: 10% Siltstone, common siderite in 90% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 128.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1896m: pl yel,clr,trnsl,f-crs,dom f,pr srt, sbang-sbrnd,sil cmt,nil-rr wh arg mtx,dom cln,com slty lams,com sid frags,fri-lse,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~1908m: pl yel,v lt gry,f-med,wl srt, sbrnd-sbang,sil cmt,nil-rr wh arg mtx,com sid frags, com slty lams,rr carb spks,rr mic,fri,fr vis por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.2 | 43 |
| RES_DEEP (ohm.m) | 119.48 | 43 |
| RES_SHALLOW (ohm.m) | 123.49 | 43 |
| **Δ Res (Deep − Shallow)** | **-4.01** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1915.0 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 5% Siltstone, common siderite in 95% fine to coarse Sandstone, 100% dull  to  bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% dll - bri |
| Total Gas | 91.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1908m: pl yel,v lt gry,f-med,wl srt, sbrnd-sbang,sil cmt,nil-rr wh arg mtx,com sid frags, com slty lams,rr carb spks,rr mic,fri,fr vis por,mod bri fluor.
- **LIMESTONE** @ ~1920m: med gry brn,med brn,micr,arg,sid,v hd,ang frac,blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 41.9 | 49 |
| RES_DEEP (ohm.m) | 111.66 | 49 |
| RES_SHALLOW (ohm.m) | 86.30 | 49 |
| **Δ Res (Deep − Shallow)** | **25.36** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: 40% Siltstone, common siderite in 60% fine to very fine,rare medium to coarse Sandstone, 95% dull  to  moderately bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | f-vf,rr med-crs (max: C) |
| Fluorescence | 95.0% dll - mod bri |
| Total Gas | 63.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2048m: 9-15 klbs SANDSTONE:off wh,wh,lt gry,vf-f,rr crs grs,pr srt,
- **SANDSTONE** @ ~2056m: off wh,lt gry,v lt brn,f-vf,rr crs,pr srt, sbrnd-sbang,wk-mod sil cmt,mnr off wh-lt gry arg mtx,occ slty lams,occ sid frags,fri-mod hd aggs,pr vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 45.3 | 65 |
| RES_DEEP (ohm.m) | 83.23 | 65 |
| RES_SHALLOW (ohm.m) | 55.06 | 65 |
| **Δ Res (Deep − Shallow)** | **28.17** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: 15% Siltstone, occasional siderite in 85% fine to very fine,rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f-vf,rr med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 73.0 U |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2056m: off wh,lt gry,v lt brn,f-vf,rr crs,pr srt, sbrnd-sbang,wk-mod sil cmt,mnr off wh-lt gry arg mtx,occ slty lams,occ sid frags,fri-mod hd aggs,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2060m: off wh,lt brn,lt grysh brn,f-vf,rr 20 12 6 3 4 2.1 m cm o t d ,m -c n rs r , m off o w d h w - l l - t m br o n d a s r r g t, s m b t r x n , d o - c s c b s a i n d g f , r w ag k- s m ,m o n d r sil mica flks,mnr carb spks & liths,fri-mod hd aggs,lse 8 1 / 5 / 4 / 5 / 5 97 U i/p,fr vis & inf por,mod bri fluor. 20 12 6 3 8 2.2 S i/p IL ,m TS n T r O ar N g E ,m :m ic o m d i c g , r m y, n b r r n c s a h rb g s ry p ,a ks re ,m n, o g d rd h t d o , vf SST
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 29.5 | 66 |
| RES_DEEP (ohm.m) | 83.92 | 66 |
| RES_SHALLOW (ohm.m) | 36.28 | 66 |
| **Δ Res (Deep − Shallow)** | **47.64** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 10% Siltstone, 90% fine to very fine,minor medium,rare coarse Sandstone, 95% moderately bright FLUOR in SST. TG 77U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-vf,mnr med,rr crs (max: C) |
| Fluorescence | 95.0% mod bri |
| Total Gas | 77.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2060m: off wh,lt brn,lt grysh brn,f-vf,rr 20 12 6 3 4 2.1 m cm o t d ,m -c n rs r , m off o w d h w - l l - t m br o n d a s r r g t, s m b t r x n , d o - c s c b s a i n d g f , r w ag k- s m ,m o n d r sil mica flks,mnr carb spks & liths,fri-mod hd aggs,lse 8 1 / 5 / 4 / 5 / 5 97 U i/p,fr vis & inf por,mod bri fluor. 20 12 6 3 8 2.2 S i/p IL ,m TS n T r O ar N g E ,m :m ic o m d i c g , r m y, n b r r n c s a h rb g s ry p ,a ks re ,m n, o g d rd h t d o , vf SST
- **SANDSTONE** @ ~2080m: off wh,lt gry brn,clr,trnsl,f-med,rr crs, wl-mod wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr off wh-lt gry brn arg mtx,occ mica flks,mnr carb spks & dk lith incl,fri-mod hd aggs,pr-fr vis por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.3 | 66 |
| RES_DEEP (ohm.m) | 99.62 | 66 |
| RES_SHALLOW (ohm.m) | 26.52 | 66 |
| **Δ Res (Deep − Shallow)** | **73.10** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 80% Siltstone, 20% very fine to fine Sandstone, 20% dull FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 20.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 20.0% dll |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2188m: lt-med brn gry,aren,grd to vf SST, micmic,com liths,com carb spks,com sandy lams, mod hd,sbblky.
- **SANDSTONE** @ ~2196m: lt gry,lt brn gry,vf-f,wl srt,sbang-sbrnd, sil cmt,com wh arg mtx,com slty lams,tr liths,tr mic, fri-mod hd,pr-ti vis por,tr dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 31.0 | 66 |
| RES_DEEP (ohm.m) | 84.75 | 66 |
| RES_SHALLOW (ohm.m) | 43.10 | 66 |
| **Δ Res (Deep − Shallow)** | **41.66** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 20% Siltstone, 80% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2196m: lt gry,lt brn gry,vf-f,wl srt,sbang-sbrnd, sil cmt,com wh arg mtx,com slty lams,tr liths,tr mic, fri-mod hd,pr-ti vis por,tr dim fluor.
- **SANDSTONE** @ ~2208m: clr,trnsl,wh,lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,rr liths,rr mic, 80 / 6 / 4 / 5 / 5 94 U fri-lse,fr-gd vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 41.9 | 66 |
| RES_DEEP (ohm.m) | 72.05 | 66 |
| RES_SHALLOW (ohm.m) | 51.64 | 66 |
| **Δ Res (Deep − Shallow)** | **20.40** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 10% Siltstone, 90% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 70.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2208m: clr,trnsl,wh,lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,rr liths,rr mic, 80 / 6 / 4 / 5 / 5 94 U fri-lse,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2216m: clr,trnsl,wh,lt gry,f-crs,mod srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,rr liths,rr mic, fri-lse,fr-gd vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.3 | 65 |
| RES_DEEP (ohm.m) | 79.64 | 65 |
| RES_SHALLOW (ohm.m) | 71.09 | 65 |
| **Δ Res (Deep − Shallow)** | **8.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 10% Siltstone, 90% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 97.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2216m: clr,trnsl,wh,lt gry,f-crs,mod srt, sbang-sbrnd,wk sil cmt,rr wh arg mtx,rr liths,rr mic, fri-lse,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2224m: clr,trnsl,pl yel,lt gry,f-crs,mod srt, 80 / 6 / 4 / 5 / 5 81 U sbang-sbrnd,wk sil cmt,rr wh arg mtx,rr liths,rr mic, fri-lse,fr-gd vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.6 | 66 |
| RES_DEEP (ohm.m) | 68.84 | 66 |
| RES_SHALLOW (ohm.m) | 70.72 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.88** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 5% Siltstone, common siderite in 95% fine to medium, rare coarse Sandstone, 90% dull  to  moderately bright FLUOR in SST. TG 98U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 90.0% dll - mod bri |
| Total Gas | 98.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: clr,trnsl,wh,off wh,f-crs,pr srt, sbrnd-sbang,wk sil cmt,nil mtx,dom lse & cln,com sid frags,gd vis & inf por,dll fluor.
- **SANDSTONE** @ ~2316m: clr,trnsl,pl yel,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cm,nil mtx,com LMST frags,rr 79 / 6 / 4 / 5 / 6 99 U liths,gd inf por,dll-mod bri fluor. 23 12
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 65 |
| RES_DEEP (ohm.m) | 59.88 | 65 |
| RES_SHALLOW (ohm.m) | 68.81 | 65 |
| **Δ Res (Deep − Shallow)** | **-8.92** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 5% Siltstone, trace siderite in 95% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 111U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 111.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2316m: clr,trnsl,pl yel,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cm,nil mtx,com LMST frags,rr 79 / 6 / 4 / 5 / 6 99 U liths,gd inf por,dll-mod bri fluor. 23 12
- **SANDSTONE** @ ~2324m: clr,trnsl,pl yel,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cm,nil mtx,tr sid,rr liths,gd inf por, mod bri fluor. 23 12 2 3 8 8.0 7 8 / 6 / 4 / 6 / 6 112 U M V az D D i : : : 3 2 1 0 3 2 4 2 3 . 7 8 2 . . 8 0 in m m c: 86.3 MW: 9.8
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.2 | 66 |
| RES_DEEP (ohm.m) | 76.70 | 66 |
| RES_SHALLOW (ohm.m) | 59.92 | 66 |
| **Δ Res (Deep − Shallow)** | **16.77** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: 10% Siltstone, common siderite in 90% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 83U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 83.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2324m: clr,trnsl,pl yel,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cm,nil mtx,tr sid,rr liths,gd inf por, mod bri fluor. 23 12 2 3 8 8.0 7 8 / 6 / 4 / 6 / 6 112 U M V az D D i : : : 3 2 1 0 3 2 4 2 3 . 7 8 2 . . 8 0 in m m c: 86.3 MW: 9.8
- **SANDSTONE** @ ~2336m: clr,trnsl,lt gry,off wh,f-crs,pr srt, sbrnd-sbang-wk sil cmt,tr wh arg mtx,com sid frags, rr liths,lse-fri aggs,gd vis & inf por,mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 49.8 | 66 |
| RES_DEEP (ohm.m) | 79.67 | 66 |
| RES_SHALLOW (ohm.m) | 55.51 | 66 |
| **Δ Res (Deep − Shallow)** | **24.16** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2345.0 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 5% Siltstone, common siderite in 95% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 91.0 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2336m: clr,trnsl,lt gry,off wh,f-crs,pr srt, sbrnd-sbang-wk sil cmt,tr wh arg mtx,com sid frags, rr liths,lse-fri aggs,gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2344m: clr,trnsl,off wh,f-med,rr crs,pr srt, 1239.1 sbrnd-sbang-wk sil cmt,tr wh arg mtx,com sid frags, rr liths,lse-fri aggs,gd vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 44.8 | 49 |
| RES_DEEP (ohm.m) | 75.96 | 49 |
| RES_SHALLOW (ohm.m) | 48.63 | 49 |
| **Δ Res (Deep − Shallow)** | **27.34** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2355 m MD — Interval 2352.5 – 2356.5 m

**Sample Description (spreadsheet):** Sample 2355m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2344m: clr,trnsl,off wh,f-med,rr crs,pr srt, 1239.1 sbrnd-sbang-wk sil cmt,tr wh arg mtx,com sid frags, rr liths,lse-fri aggs,gd vis & inf por,mod bri fluor.
- **SILTSTONE** @ ~2355m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 37.1 | 26 |
| RES_DEEP (ohm.m) | 70.98 | 26 |
| RES_SHALLOW (ohm.m) | 41.86 | 26 |
| **Δ Res (Deep − Shallow)** | **29.12** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2358 m MD — Interval 2356.5 – 2359.5 m

**Sample Description (spreadsheet):** Sample 2358m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2344m: clr,trnsl,off wh,f-med,rr crs,pr srt, 1239.1 sbrnd-sbang-wk sil cmt,tr wh arg mtx,com sid frags, rr liths,lse-fri aggs,gd vis & inf por,mod bri fluor.
- **SILTSTONE** @ ~2355m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.6 | 20 |
| RES_DEEP (ohm.m) | 70.44 | 20 |
| RES_SHALLOW (ohm.m) | 37.19 | 20 |
| **Δ Res (Deep − Shallow)** | **33.24** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2361 m MD — Interval 2359.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2361m: 0.438194444444444 siderite in 0% Siltstone, trace siderite in 100% medium, rare fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 81U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 81.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2355m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- **SANDSTONE** @ ~2355m: clr,trnsl,off wh,med,occ f,crs grs, mod wl srt,sbang-sbrnd,wk sil cmt,nil mtx,lse & cln, tr sid,rr mic,rr liths,fri-dom lse,gd inf por,dll-mod bri 23 12 6 3 8 9.7 fluor. 68 / 6 / 6 / 9 / 11 75 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.3 | 19 |
| RES_DEEP (ohm.m) | 76.41 | 19 |
| RES_SHALLOW (ohm.m) | 32.80 | 19 |
| **Δ Res (Deep − Shallow)** | **43.61** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2364 m MD — Interval 2362.5 – 2365.5 m

**Sample Description (spreadsheet):** Sample 2364m: 0.445833333333333 siderite in 0% Siltstone, trace siderite in 100% medium, rare fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 91.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2355m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- **SANDSTONE** @ ~2355m: clr,trnsl,off wh,med,occ f,crs grs, mod wl srt,sbang-sbrnd,wk sil cmt,nil mtx,lse & cln, tr sid,rr mic,rr liths,fri-dom lse,gd inf por,dll-mod bri 23 12 6 3 8 9.7 fluor. 68 / 6 / 6 / 9 / 11 75 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.0 | 20 |
| RES_DEEP (ohm.m) | 85.74 | 20 |
| RES_SHALLOW (ohm.m) | 35.27 | 20 |
| **Δ Res (Deep − Shallow)** | **50.47** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2367 m MD — Interval 2365.5 – 2368.5 m

**Sample Description (spreadsheet):** Sample 2367m: 0.454861111111111 siderite in 10% Siltstone, 90% medium, rare fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 69U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 69.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2355m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- **SANDSTONE** @ ~2355m: clr,trnsl,off wh,med,occ f,crs grs, mod wl srt,sbang-sbrnd,wk sil cmt,nil mtx,lse & cln, tr sid,rr mic,rr liths,fri-dom lse,gd inf por,dll-mod bri 23 12 6 3 8 9.7 fluor. 68 / 6 / 6 / 9 / 11 75 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.9 | 20 |
| RES_DEEP (ohm.m) | 74.48 | 20 |
| RES_SHALLOW (ohm.m) | 29.50 | 20 |
| **Δ Res (Deep − Shallow)** | **44.99** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2368.5 – 2371.5 m

**Sample Description (spreadsheet):** Sample 2370m: 0.461111111111111 siderite in 0% Siltstone, 100% medium Sandstone, 100% dull FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 74.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2355m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- **SANDSTONE** @ ~2355m: clr,trnsl,off wh,med,occ f,crs grs, mod wl srt,sbang-sbrnd,wk sil cmt,nil mtx,lse & cln, tr sid,rr mic,rr liths,fri-dom lse,gd inf por,dll-mod bri 23 12 6 3 8 9.7 fluor. 68 / 6 / 6 / 9 / 11 75 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.7 | 20 |
| RES_DEEP (ohm.m) | 73.45 | 20 |
| RES_SHALLOW (ohm.m) | 27.24 | 20 |
| **Δ Res (Deep − Shallow)** | **46.21** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2373 m MD — Interval 2371.5 – 2374.5 m

**Sample Description (spreadsheet):** Sample 2373m: 0.468055555555556 siderite in 0% Siltstone, 100% medium Sandstone, 100% dull FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2376m: clr,trnsl,f-crs,dom med,mod srt, sbrnd-sbang,wk sil cmt,nil mtx,com sid frags,tr liths, rr aggs,gd vis & inf por,dim-dll fluor.
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.0 | 19 |
| RES_DEEP (ohm.m) | 71.95 | 19 |
| RES_SHALLOW (ohm.m) | 26.39 | 19 |
| **Δ Res (Deep − Shallow)** | **45.56** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2376 m MD — Interval 2374.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2376m: 0.48125 siderite in 5% Siltstone, 95% medium Sandstone, 100% dull FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2376m: clr,trnsl,f-crs,dom med,mod srt, sbrnd-sbang,wk sil cmt,nil mtx,com sid frags,tr liths, rr aggs,gd vis & inf por,dim-dll fluor.
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.1 | 20 |
| RES_DEEP (ohm.m) | 64.84 | 20 |
| RES_SHALLOW (ohm.m) | 27.51 | 20 |
| **Δ Res (Deep − Shallow)** | **37.34** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2379 m MD — Interval 2377.5 – 2380.5 m

**Sample Description (spreadsheet):** Sample 2379m: 0.4875 siderite in 0% Siltstone, trace siderite in 100% fine to coarse, dominantly medium Sandstone, 100% dull FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, dom med (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 82.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2376m: clr,trnsl,f-crs,dom med,mod srt, sbrnd-sbang,wk sil cmt,nil mtx,com sid frags,tr liths, rr aggs,gd vis & inf por,dim-dll fluor.
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.9 | 20 |
| RES_DEEP (ohm.m) | 61.39 | 20 |
| RES_SHALLOW (ohm.m) | 28.21 | 20 |
| **Δ Res (Deep − Shallow)** | **33.18** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2382 m MD — Interval 2380.5 – 2383.5 m

**Sample Description (spreadsheet):** Sample 2382m: 0% Siltstone, trace siderite in 100% fine,occasional medium Sandstone, 100% dull FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f,occ med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 70.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2376m: clr,trnsl,f-crs,dom med,mod srt, sbrnd-sbang,wk sil cmt,nil mtx,com sid frags,tr liths, rr aggs,gd vis & inf por,dim-dll fluor.
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.1 | 19 |
| RES_DEEP (ohm.m) | 74.40 | 19 |
| RES_SHALLOW (ohm.m) | 28.18 | 19 |
| **Δ Res (Deep − Shallow)** | **46.22** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2385 m MD — Interval 2383.5 – 2386.5 m

**Sample Description (spreadsheet):** Sample 2385m: 0% Siltstone, trace siderite in 100% fine,occasional medium Sandstone, 100% dull FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f,occ med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 78.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2376m: clr,trnsl,f-crs,dom med,mod srt, sbrnd-sbang,wk sil cmt,nil mtx,com sid frags,tr liths, rr aggs,gd vis & inf por,dim-dll fluor.
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.5 | 20 |
| RES_DEEP (ohm.m) | 74.50 | 20 |
| RES_SHALLOW (ohm.m) | 26.63 | 20 |
| **Δ Res (Deep − Shallow)** | **47.87** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2388 m MD — Interval 2386.5 – 2389.5 m

**Sample Description (spreadsheet):** Sample 2388m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 77U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 77.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2376m: clr,trnsl,f-crs,dom med,mod srt, sbrnd-sbang,wk sil cmt,nil mtx,com sid frags,tr liths, rr aggs,gd vis & inf por,dim-dll fluor.
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.4 | 20 |
| RES_DEEP (ohm.m) | 76.54 | 20 |
| RES_SHALLOW (ohm.m) | 29.56 | 20 |
| **Δ Res (Deep − Shallow)** | **46.98** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2391 m MD — Interval 2389.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2391m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 84U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 84.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2376m: clr,trnsl,f-crs,dom med,mod srt, sbrnd-sbang,wk sil cmt,nil mtx,com sid frags,tr liths, rr aggs,gd vis & inf por,dim-dll fluor.
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.8 | 19 |
| RES_DEEP (ohm.m) | 83.31 | 19 |
| RES_SHALLOW (ohm.m) | 28.10 | 19 |
| **Δ Res (Deep − Shallow)** | **55.22** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2394 m MD — Interval 2392.5 – 2395.5 m

**Sample Description (spreadsheet):** Sample 2394m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- **SILTSTONE** @ ~2381m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.9 | 20 |
| RES_DEEP (ohm.m) | 82.43 | 20 |
| RES_SHALLOW (ohm.m) | 22.64 | 20 |
| **Δ Res (Deep − Shallow)** | **59.79** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2397 m MD — Interval 2395.5 – 2398.5 m

**Sample Description (spreadsheet):** Sample 2397m: 0% Siltstone, 100% fine to medium, trace coarse Sandstone, 100% dull FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, tr crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 94.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2381m: clr,trnsl,pred f-occ med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr sid frags, occ mica flks,tr liths,pred cln lse disaggs,qtz grs,rr 2384 fri aggs,fr-gd vis & inf por,dll-dim fluor. 1240.1
- **SILTSTONE** @ ~2381m: lt-med gry,med gry brn,aren,rr arg, micmic,com liths,tr sid frags,tr carb spks,mod hd, sbblky.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.1 | 20 |
| RES_DEEP (ohm.m) | 85.90 | 20 |
| RES_SHALLOW (ohm.m) | 21.16 | 20 |
| **Δ Res (Deep − Shallow)** | **64.74** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2398.5 – 2401.5 m

**Sample Description (spreadsheet):** Sample 2400m: 5% Siltstone, 95% medium to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2388m: clr,pl trnsl brn,med-f,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,com mica flks, tr liths,fri aggs,com disaggs,qtz grs,fr-gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2392m: clr,trnsl,pred med-f,tr crs,wl-mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,occ mica flks,mnr lams,pred cln lse-disaggs qtz grs,fri aggs, fr vis por,fr-gd inf por,dll fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.1 | 19 |
| RES_DEEP (ohm.m) | 102.14 | 19 |
| RES_SHALLOW (ohm.m) | 20.81 | 19 |
| **Δ Res (Deep − Shallow)** | **81.33** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2403 m MD — Interval 2401.5 – 2404.5 m

**Sample Description (spreadsheet):** Sample 2403m: 0% Siltstone, 100% medium to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 87U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 87.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2388m: clr,pl trnsl brn,med-f,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,com mica flks, tr liths,fri aggs,com disaggs,qtz grs,fr-gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2392m: clr,trnsl,pred med-f,tr crs,wl-mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,occ mica flks,mnr lams,pred cln lse-disaggs qtz grs,fri aggs, fr vis por,fr-gd inf por,dll fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.4 | 20 |
| RES_DEEP (ohm.m) | 84.54 | 20 |
| RES_SHALLOW (ohm.m) | 21.31 | 20 |
| **Δ Res (Deep − Shallow)** | **63.22** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2406 m MD — Interval 2404.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2406m: 5% Siltstone, 95% fine to medium,minor very fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 96U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med,mnr vf (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 96.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2392m: clr,trnsl,pred med-f,tr crs,wl-mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,occ mica flks,mnr lams,pred cln lse-disaggs qtz grs,fri aggs, fr vis por,fr-gd inf por,dll fluor.
- **SANDSTONE** @ ~2396m: clr,trnsl,med-occ f,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica flks, mnr liths,pred lse disaggs qtz grs,fri aggs,fr vis & inf por,dll-mod bri fluor. W S R P P O P M B : : : 1 1 4 7 2 - 8 0 1 6 0 - 2 k 3 lb 6 s 3 psi 24 12 0 4 0 0.4 6 3 / 6 / 7 / 11 / 13 F d b l l L l u - U m w O o h R d c : b 2 /c r 4 , i t 0 y h 0 e n - l 2 p g 4 t r c 2 n h 4 e y m v r ; n / r 1 . f 0 lu 0 o % r, s o lw f S b S ld T n ; g cut,
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.3 | 20 |
| RES_DEEP (ohm.m) | 80.86 | 20 |
| RES_SHALLOW (ohm.m) | 21.85 | 20 |
| **Δ Res (Deep − Shallow)** | **59.01** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2409 m MD — Interval 2407.5 – 2410.5 m

**Sample Description (spreadsheet):** Sample 2409m: 0% Siltstone, 100% fine to medium,minor very fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 84U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med,mnr vf (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 84.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2396m: clr,trnsl,med-occ f,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica flks, mnr liths,pred lse disaggs qtz grs,fri aggs,fr vis & inf por,dll-mod bri fluor. W S R P P O P M B : : : 1 1 4 7 2 - 8 0 1 6 0 - 2 k 3 lb 6 s 3 psi 24 12 0 4 0 0.4 6 3 / 6 / 7 / 11 / 13 F d b l l L l u - U m w O o h R d c : b 2 /c r 4 , i t 0 y h 0 e n - l 2 p g 4 t r c 2 n h 4 e y m v r ; n / r 1 . f 0 lu 0 o % r, s o lw f S b S ld T n ; g cut,
- **SANDSTONE** @ ~2404m: clr,trnsl,pl trnsl brn,pred f-med,mnr vf,wl srt,sbrnd-sbang,tr-mnr wk sil cmt,nil vis mtx, mnr mica flks,rr liths,fri aggs,com lse disaggs qtz grs,fr vis por,fr-gd inf por,dll fluor in lse,mod bri fluor in aggs.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.7 | 19 |
| RES_DEEP (ohm.m) | 84.83 | 19 |
| RES_SHALLOW (ohm.m) | 22.75 | 19 |
| **Δ Res (Deep − Shallow)** | **62.08** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2412 m MD — Interval 2410.5 – 2413.5 m

**Sample Description (spreadsheet):** Sample 2412m: 5% Siltstone, 95% medium to fine,occasional very fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f,occ vf (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2396m: clr,trnsl,med-occ f,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica flks, mnr liths,pred lse disaggs qtz grs,fri aggs,fr vis & inf por,dll-mod bri fluor. W S R P P O P M B : : : 1 1 4 7 2 - 8 0 1 6 0 - 2 k 3 lb 6 s 3 psi 24 12 0 4 0 0.4 6 3 / 6 / 7 / 11 / 13 F d b l l L l u - U m w O o h R d c : b 2 /c r 4 , i t 0 y h 0 e n - l 2 p g 4 t r c 2 n h 4 e y m v r ; n / r 1 . f 0 lu 0 o % r, s o lw f S b S ld T n ; g cut,
- **SANDSTONE** @ ~2404m: clr,trnsl,pl trnsl brn,pred f-med,mnr vf,wl srt,sbrnd-sbang,tr-mnr wk sil cmt,nil vis mtx, mnr mica flks,rr liths,fri aggs,com lse disaggs qtz grs,fr vis por,fr-gd inf por,dll fluor in lse,mod bri fluor in aggs.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.5 | 20 |
| RES_DEEP (ohm.m) | 69.65 | 20 |
| RES_SHALLOW (ohm.m) | 22.94 | 20 |
| **Δ Res (Deep − Shallow)** | **46.72** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2415 m MD — Interval 2413.5 – 2416.5 m

**Sample Description (spreadsheet):** Sample 2415m: 5% Siltstone, 95% medium to fine,occasional very fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f,occ vf (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 94.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2404m: clr,trnsl,pl trnsl brn,pred f-med,mnr vf,wl srt,sbrnd-sbang,tr-mnr wk sil cmt,nil vis mtx, mnr mica flks,rr liths,fri aggs,com lse disaggs qtz grs,fr vis por,fr-gd inf por,dll fluor in lse,mod bri fluor in aggs.
- **SANDSTONE** @ ~2408m: clr,trnsl,pl trnsl brn,med-f,occ vf,wl srt,sbrnd-sbang,mnr wk sil cmt,nil vis mtx,mnr mica flks,rr liths,fri aggs,lse i/p,fr-gd inf & vis por,dll-mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.6 | 20 |
| RES_DEEP (ohm.m) | 81.75 | 20 |
| RES_SHALLOW (ohm.m) | 23.04 | 20 |
| **Δ Res (Deep − Shallow)** | **58.72** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2418 m MD — Interval 2416.5 – 2419.5 m

**Sample Description (spreadsheet):** Sample 2418m: 5% Siltstone, 95% medium to fine,occasional very fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 87U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f,occ vf (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 87.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2404m: clr,trnsl,pl trnsl brn,pred f-med,mnr vf,wl srt,sbrnd-sbang,tr-mnr wk sil cmt,nil vis mtx, mnr mica flks,rr liths,fri aggs,com lse disaggs qtz grs,fr vis por,fr-gd inf por,dll fluor in lse,mod bri fluor in aggs.
- **SANDSTONE** @ ~2408m: clr,trnsl,pl trnsl brn,med-f,occ vf,wl srt,sbrnd-sbang,mnr wk sil cmt,nil vis mtx,mnr mica flks,rr liths,fri aggs,lse i/p,fr-gd inf & vis por,dll-mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.6 | 19 |
| RES_DEEP (ohm.m) | 81.30 | 19 |
| RES_SHALLOW (ohm.m) | 22.89 | 19 |
| **Δ Res (Deep − Shallow)** | **58.41** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2421 m MD — Interval 2419.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2421m: 5% Siltstone, 95% medium to fine,occasional very fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f,occ vf (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 71.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2408m: clr,trnsl,pl trnsl brn,med-f,occ vf,wl srt,sbrnd-sbang,mnr wk sil cmt,nil vis mtx,mnr mica flks,rr liths,fri aggs,lse i/p,fr-gd inf & vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2412m: clr,trnsl,pl trnsl brn,med-f,occ vf,wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica 2416 flks,rr liths,pred lse disaggs qtz grs,fri aggs,fr-gd vis 1240.4 & inf por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.5 | 20 |
| RES_DEEP (ohm.m) | 74.24 | 20 |
| RES_SHALLOW (ohm.m) | 23.60 | 20 |
| **Δ Res (Deep − Shallow)** | **50.64** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2424 m MD — Interval 2422.5 – 2427.0 m

**Sample Description (spreadsheet):** Sample 2424m: 0% Siltstone, 100% medium to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 84U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 84.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2408m: clr,trnsl,pl trnsl brn,med-f,occ vf,wl srt,sbrnd-sbang,mnr wk sil cmt,nil vis mtx,mnr mica flks,rr liths,fri aggs,lse i/p,fr-gd inf & vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2412m: clr,trnsl,pl trnsl brn,med-f,occ vf,wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica 2416 flks,rr liths,pred lse disaggs qtz grs,fri aggs,fr-gd vis 1240.4 & inf por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.5 | 30 |
| RES_DEEP (ohm.m) | 70.63 | 30 |
| RES_SHALLOW (ohm.m) | 23.94 | 30 |
| **Δ Res (Deep − Shallow)** | **46.70** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2427.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 10% Siltstone, 90% medium to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | med-f (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 90.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2412m: clr,trnsl,pl trnsl brn,med-f,occ vf,wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica 2416 flks,rr liths,pred lse disaggs qtz grs,fri aggs,fr-gd vis 1240.4 & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2424m: clr,pl trnsl brn,off wh,med-f,wl srt, sbrnd-sbang,wk sil cmt,rr off wh arg mtx,mnr mica flks,rr carb spks & liths,fri aggs,com lse disaggs qtz, fr vis por,fr-gd inf por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.0 | 52 |
| RES_DEEP (ohm.m) | 69.11 | 52 |
| RES_SHALLOW (ohm.m) | 24.18 | 52 |
| **Δ Res (Deep − Shallow)** | **44.92** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 10% Siltstone, 90% medium to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 89U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | med-f (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2424m: clr,pl trnsl brn,off wh,med-f,wl srt, sbrnd-sbang,wk sil cmt,rr off wh arg mtx,mnr mica flks,rr carb spks & liths,fri aggs,com lse disaggs qtz, fr vis por,fr-gd inf por,dll-mod bri fluor.
- **SILTSTONE** @ ~2444m: brnsh gry,lt-med gry,vf aren,grd to SST i/p,mnr arg,micmic,occ carb spks,rr sandy lams,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.8 | 66 |
| RES_DEEP (ohm.m) | 78.57 | 66 |
| RES_SHALLOW (ohm.m) | 24.97 | 66 |
| **Δ Res (Deep − Shallow)** | **53.60** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 5% Siltstone, 95% medium to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 89U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 89.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2444m: brnsh gry,lt-med gry,vf aren,grd to SST i/p,mnr arg,micmic,occ carb spks,rr sandy lams,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2452m: clr,trnsl,pl trnsl brn,med-f,wl srt, sbrnd-sbang,mnr wk sil cmt,nil vis mtx,mnr mica flks,rr carb spks & liths,fri aggs,mnr lse,fr vis & inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.6 | 65 |
| RES_DEEP (ohm.m) | 75.04 | 65 |
| RES_SHALLOW (ohm.m) | 24.90 | 65 |
| **Δ Res (Deep − Shallow)** | **50.14** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 5% Siltstone, 95% medium to fine Sandstone, 100% moderately bright FLUOR in SST. TG 108U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 89.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2444m: brnsh gry,lt-med gry,vf aren,grd to SST i/p,mnr arg,micmic,occ carb spks,rr sandy lams,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2452m: clr,trnsl,pl trnsl brn,med-f,wl srt, sbrnd-sbang,mnr wk sil cmt,nil vis mtx,mnr mica flks,rr carb spks & liths,fri aggs,mnr lse,fr vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.4 | 66 |
| RES_DEEP (ohm.m) | 78.53 | 66 |
| RES_SHALLOW (ohm.m) | 23.34 | 66 |
| **Δ Res (Deep − Shallow)** | **55.19** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 5% Siltstone, 95% medium to fine,occasional very fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 87U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-f,occ vf (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 108.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2452m: clr,trnsl,pl trnsl brn,med-f,wl srt, sbrnd-sbang,mnr wk sil cmt,nil vis mtx,mnr mica flks,rr carb spks & liths,fri aggs,mnr lse,fr vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2476m: clr,trnsl,pl trnsl brn,f-med,occ vf,wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica flks,pred cln lse disagg qtz grs,fri aggs,fr-gd vis & inf por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 66 |
| RES_DEEP (ohm.m) | 77.46 | 66 |
| RES_SHALLOW (ohm.m) | 22.34 | 66 |
| **Δ Res (Deep − Shallow)** | **55.12** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 0% Siltstone, 100% fine to medium,occasional very fine Sandstone, 100% moderately bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med,occ vf (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 87.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2476m: clr,trnsl,pl trnsl brn,f-med,occ vf,wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica flks,pred cln lse disagg qtz grs,fri aggs,fr-gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2480m: clr,trnsl,pl trnsl brn,med-f,rr crs,mod 1239.2 wl srt,sbang-sbrnd,tr wk sil cmt,nil vis mtx,rr mica flks,tr pnk felds incl,pred cln lse disagg qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.7 | 65 |
| RES_DEEP (ohm.m) | 65.37 | 65 |
| RES_SHALLOW (ohm.m) | 21.90 | 65 |
| **Δ Res (Deep − Shallow)** | **43.47** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% medium to fine,rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 86U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f,rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2476m: clr,trnsl,pl trnsl brn,f-med,occ vf,wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,mnr mica flks,pred cln lse disagg qtz grs,fri aggs,fr-gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2480m: clr,trnsl,pl trnsl brn,med-f,rr crs,mod 1239.2 wl srt,sbang-sbrnd,tr wk sil cmt,nil vis mtx,rr mica flks,tr pnk felds incl,pred cln lse disagg qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.0 | 66 |
| RES_DEEP (ohm.m) | 76.17 | 66 |
| RES_SHALLOW (ohm.m) | 24.56 | 66 |
| **Δ Res (Deep − Shallow)** | **51.61** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 0% Siltstone, 100% medium to fine,occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f,occ crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 86.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr,trnsl,pl trnsl brn,med-f,rr crs,mod 1239.2 wl srt,sbang-sbrnd,tr wk sil cmt,nil vis mtx,rr mica flks,tr pnk felds incl,pred cln lse disagg qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2488m: clr,trnsl,v lt brn,med-f,occ crs,mod 79 / 5 / 4 / 6 / 6 86 U wl-mod srt,sbang-sbrnd,wk sil cmt,nil vis mtx,occ mica flks,rr dk lith incl,fri aggs,com lse,gd vis & inf 24 12 9 3 2 8.9 por,mod bri-bri fluor. FLUOR:2490-2517.5m;100% of SST;
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.4 | 66 |
| RES_DEEP (ohm.m) | 75.93 | 66 |
| RES_SHALLOW (ohm.m) | 27.96 | 66 |
| **Δ Res (Deep − Shallow)** | **47.98** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 5% Siltstone, 95% fine to medium,minor very fine,rare coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med,mnr vf,rr crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 103.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2504m: pl trnsl brn,clr,f-med,mnr vf,rr crs,pr srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mica flks,fri aggs,mnr lse,fr-gd vis & inf por,mod bri-bri fluor.
- **SILTSTONE** @ ~2508m: med gry,brnsh gry,arg,vf aren i/p, micmic,mnr carb spks,mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 41.1 | 65 |
| RES_DEEP (ohm.m) | 69.48 | 65 |
| RES_SHALLOW (ohm.m) | 42.81 | 65 |
| **Δ Res (Deep − Shallow)** | **26.67** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2605.0 – 2615.0 m

**Sample Description (spreadsheet):** Sample 2610m: 10% Siltstone, 90% medium to coarse Sandstone, 100% dull FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE** @ ~2596m: med brn,med gry brn,micr,arg,tr liths, v hd,ang frac,blky.
- **SANDSTONE** @ ~2608m: clr,trnsl,med-crs,mod wl srt,sbrnd-rr sbang,wk sil cmt,lse & cln,rr liths,rr mic,gd inf por, dll fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.5 | 65 |
| RES_DEEP (ohm.m) | 70.46 | 65 |
| RES_SHALLOW (ohm.m) | 73.05 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.59** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2615.0 – 2625.0 m

**Sample Description (spreadsheet):** Sample 2620m: 0% Siltstone, trace siderite in 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 158.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: clr,trnsl,med-crs,mod wl srt,sbrnd-rr sbang,wk sil cmt,lse & cln,rr liths,rr mic,gd inf por, dll fluor.
- **SANDSTONE** @ ~2616m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse & cln,tr sid frags, rr carb spks,gd inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.4 | 66 |
| RES_DEEP (ohm.m) | 76.79 | 66 |
| RES_SHALLOW (ohm.m) | 70.23 | 66 |
| **Δ Res (Deep − Shallow)** | **6.57** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2625.0 – 2635.0 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% f-med, rr crs Sandstone, 100% mod bri FLUOR, TG 101.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 101.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2616m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse & cln,tr sid frags, rr carb spks,gd inf por,mod bri fluor.
- **SANDSTONE** @ ~2628m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse & cln,tr sid frags, rr carb spks,gd inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 47.1 | 66 |
| RES_DEEP (ohm.m) | 73.52 | 66 |
| RES_SHALLOW (ohm.m) | 52.68 | 66 |
| **Δ Res (Deep − Shallow)** | **20.84** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2640 m MD — Interval 2635.0 – 2645.0 m

**Sample Description (spreadsheet):** Sample 2640m: 0% Siltstone, trace siderite in 100% medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 78.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2628m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse & cln,tr sid frags, rr carb spks,gd inf por,mod bri fluor.
- **SANDSTONE** @ ~2636m: clr,trnsl,med-crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil mtx,tr frstd qtz grs,tr mic, tr sid,tr blu-gry liths,lse & cln,gd ing por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 32.4 | 65 |
| RES_DEEP (ohm.m) | 77.84 | 65 |
| RES_SHALLOW (ohm.m) | 37.24 | 65 |
| **Δ Res (Deep − Shallow)** | **40.60** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2650 m MD — Interval 2645.0 – 2655.0 m

**Sample Description (spreadsheet):** Sample 2650m: 0% Siltstone, 100% medium to rare coarse Sandstone, 100% dull FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-rr crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2636m: clr,trnsl,med-crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil mtx,tr frstd qtz grs,tr mic, tr sid,tr blu-gry liths,lse & cln,gd ing por,mod bri fluor.
- **SANDSTONE** @ ~2648m: clr,trnsl,med-rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil mtx,tr mic,tr blu-gry liths, lse & cln,gd ing por,dll fluor. 77 / 5 / 4 / 7 / 7 72 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.1 | 66 |
| RES_DEEP (ohm.m) | 76.58 | 66 |
| RES_SHALLOW (ohm.m) | 31.08 | 66 |
| **Δ Res (Deep − Shallow)** | **45.50** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2660 m MD — Interval 2655.0 – 2665.0 m

**Sample Description (spreadsheet):** Sample 2660m: 0% Siltstone, trace siderite in 100% medium, rare fine to coarse Sandstone, 100% dull FLUOR in SST. TG 87U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 87.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2648m: clr,trnsl,med-rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil mtx,tr mic,tr blu-gry liths, lse & cln,gd ing por,dll fluor. 77 / 5 / 4 / 7 / 7 72 U
- **SANDSTONE** @ ~2656m: clr,trnsl,med grs,rr f & crs,mod wl srt, sbrnd-sbang,wk sil cmt,nil mtx,tr sid,tr liths,rr mic, lse & cln,gd inf por,dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.5 | 65 |
| RES_DEEP (ohm.m) | 82.34 | 65 |
| RES_SHALLOW (ohm.m) | 29.79 | 65 |
| **Δ Res (Deep − Shallow)** | **52.55** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2665.0 – 2675.0 m

**Sample Description (spreadsheet):** Sample 2670m: 0% Siltstone, 100% fine to rare medium Sandstone, 100% dull FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-rr med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 60.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2656m: clr,trnsl,med grs,rr f & crs,mod wl srt, sbrnd-sbang,wk sil cmt,nil mtx,tr sid,tr liths,rr mic, lse & cln,gd inf por,dim fluor.
- **SANDSTONE** @ ~2664m: clr,trnsl,f grs,wl srt,sbrnd-sbang,wk sil cmt,nil mtx,lse & cln,gd inf por,v dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.0 | 66 |
| RES_DEEP (ohm.m) | 87.87 | 66 |
| RES_SHALLOW (ohm.m) | 27.36 | 66 |
| **Δ Res (Deep − Shallow)** | **60.51** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 0% Siltstone, trace siderite in 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 59U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 59.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2664m: clr,trnsl,f grs,wl srt,sbrnd-sbang,wk sil cmt,nil mtx,lse & cln,gd inf por,v dim fluor.
- **SANDSTONE** @ ~2676m: clr,trnsl,f-med,wl srt,sbang-sbrnd, wk sil cmt,nil vis mtx,rr sid,lse & cln,gd inf por, dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.5 | 66 |
| RES_DEEP (ohm.m) | 88.24 | 66 |
| RES_SHALLOW (ohm.m) | 28.10 | 66 |
| **Δ Res (Deep − Shallow)** | **60.14** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, trace siderite in 100% medium to coarse Sandstone, 100% dull FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 65.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2676m: clr,trnsl,f-med,wl srt,sbang-sbrnd, wk sil cmt,nil vis mtx,rr sid,lse & cln,gd inf por, dim fluor.
- **SANDSTONE** @ ~2688m: clr,trnsl,md crs,wl srt,sbang-sbrnd, wk sil cmt,nil vis mtx,tr sid,tr gry liths,lse & cln,gd inf por,dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.7 | 65 |
| RES_DEEP (ohm.m) | 88.99 | 65 |
| RES_SHALLOW (ohm.m) | 38.44 | 65 |
| **Δ Res (Deep − Shallow)** | **50.55** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 0% Siltstone, 100% medium to coarse Sandstone, 100% dull FLUOR in SST. TG 92U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 92.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2688m: clr,trnsl,md crs,wl srt,sbang-sbrnd, wk sil cmt,nil vis mtx,tr sid,tr gry liths,lse & cln,gd inf por,dim fluor.
- **SANDSTONE** @ ~2696m: clr,trnsl,md crs,wl srt,sbang-sbrnd, wk sil cmt,nil vis mtx,tr mic,lse & cln,gd inf por,dim fluor. 2700 81 / 5 / 4 / 5 / 5 106 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 32.7 | 66 |
| RES_DEEP (ohm.m) | 80.39 | 66 |
| RES_SHALLOW (ohm.m) | 42.46 | 66 |
| **Δ Res (Deep − Shallow)** | **37.93** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll |
| Total Gas | 99.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2696m: clr,trnsl,md crs,wl srt,sbang-sbrnd, wk sil cmt,nil vis mtx,tr mic,lse & cln,gd inf por,dim fluor. 2700 81 / 5 / 4 / 5 / 5 106 U
- **SANDSTONE** @ ~2708m: clr,trnsl,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por, dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 36.4 | 65 |
| RES_DEEP (ohm.m) | 70.44 | 65 |
| RES_SHALLOW (ohm.m) | 44.83 | 65 |
| **Δ Res (Deep − Shallow)** | **25.61** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 101.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2708m: clr,trnsl,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por, dim fluor.
- **SANDSTONE** @ ~2716m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 38.6 | 66 |
| RES_DEEP (ohm.m) | 68.48 | 66 |
| RES_SHALLOW (ohm.m) | 45.47 | 66 |
| **Δ Res (Deep − Shallow)** | **23.00** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 112U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 112.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2716m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2713m: 22 SANDSTONE:clr,trnsl,f-med,rr crs,mod srt, Gel: 8/12/15 80 / 5 / 4 / 5 / 6 121 U sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr WL: 4.8 liths,gd inf por,mod bri fluor. Sol: 2.61 pH: 10.0
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 36.0 | 66 |
| RES_DEEP (ohm.m) | 69.44 | 66 |
| RES_SHALLOW (ohm.m) | 46.82 | 66 |
| **Δ Res (Deep − Shallow)** | **22.62** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 117U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 117.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2736m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por,dll-mod bri fluor. 2740 MD:2740.0 m 1238.9 VD :1238.9 m
- **SANDSTONE** @ ~2748m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por,dll fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 35.4 | 65 |
| RES_DEEP (ohm.m) | 70.05 | 65 |
| RES_SHALLOW (ohm.m) | 42.16 | 65 |
| **Δ Res (Deep − Shallow)** | **27.89** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% dull FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2736m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por,dll-mod bri fluor. 2740 MD:2740.0 m 1238.9 VD :1238.9 m
- **SANDSTONE** @ ~2748m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por,dll fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 37.7 | 66 |
| RES_DEEP (ohm.m) | 67.60 | 66 |
| RES_SHALLOW (ohm.m) | 42.75 | 66 |
| **Δ Res (Deep − Shallow)** | **24.85** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 0% Siltstone, 100% medium to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 102U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 102.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2748m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,lse & cln,rr mic,rr liths,gd inf por,dll fluor.
- **SANDSTONE** @ ~2756m: clr,trnsl,med-crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr rck flour,tr gry liths,rr mic,lse & cln,gd inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 41.4 | 66 |
| RES_DEEP (ohm.m) | 67.43 | 66 |
| RES_SHALLOW (ohm.m) | 45.06 | 66 |
| **Δ Res (Deep − Shallow)** | **22.37** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 0% Siltstone, 100% medium to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 153U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-v crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 153.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2756m: clr,trnsl,med-crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr rck flour,tr gry liths,rr mic,lse & cln,gd inf por,dll fluor.
- **SANDSTONE** @ ~2768m: clr,trnsl,med-v crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr gry & rd liths,tr 78 / 5 / 4 / 6 / 7 155 U mic,tr frstd qtz grs,lse & cln,gd inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 52.8 | 65 |
| RES_DEEP (ohm.m) | 72.45 | 65 |
| RES_SHALLOW (ohm.m) | 53.15 | 65 |
| **Δ Res (Deep − Shallow)** | **19.30** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 126U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 126.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2768m: clr,trnsl,med-v crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr gry & rd liths,tr 78 / 5 / 4 / 6 / 7 155 U mic,tr frstd qtz grs,lse & cln,gd inf por,mod bri fluor.
- **SANDSTONE** @ ~2776m: clr,trnsl,pl yel,f-crs,pr srt, sbang-sbrnd,sil cmt,rr wh arg mtx,rr liths,rr mic, fri-lse,gd inf por,mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 51.2 | 66 |
| RES_DEEP (ohm.m) | 78.62 | 66 |
| RES_SHALLOW (ohm.m) | 54.16 | 66 |
| **Δ Res (Deep − Shallow)** | **24.46** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 5% Siltstone, 95% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2776m: clr,trnsl,pl yel,f-crs,pr srt, sbang-sbrnd,sil cmt,rr wh arg mtx,rr liths,rr mic, fri-lse,gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2780m: med gry,brnsh gry,vf,aren,mnr arg, com micmic,rr carb spks,mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 48.1 | 65 |
| RES_DEEP (ohm.m) | 76.53 | 65 |
| RES_SHALLOW (ohm.m) | 53.07 | 65 |
| **Δ Res (Deep − Shallow)** | **23.46** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 5% Siltstone, 95% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 143U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 143.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2780m: med gry,brnsh gry,vf,aren,mnr arg, com micmic,rr carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2784m: clr,trnsl,pl yelsh brn,f-crs,pr srt, 2788 sbang-sbrnd,wk sil cmt,nil vis mtx,mnr mica flks,rr 1238.8 lith incl,fri aggs,com lse,fr-gd vis por,gd inf por,mod bri fluor. 77 / 5 / 5 / 6 / 7 145 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.5 | 66 |
| RES_DEEP (ohm.m) | 72.41 | 66 |
| RES_SHALLOW (ohm.m) | 40.87 | 66 |
| **Δ Res (Deep − Shallow)** | **31.54** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 146.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2793m: clr,trnsl,pl yel brn,off wh,f-crs,pr srt, 27 12 9 3 6 8.8 sbang-sbrnd,mnr wk sil cmt,tr off wh arg mtx,rr micrflks,mnr carb spks,rr lith incl,fri aggs,com lse, fr-gd vis por,gd inf por,mod bri fluor.
- **SANDSTONE** @ ~2800m: 130 SANDSTONE:clr,trnsl,pl trnsl yel brn,f-crs,pr srt, lith incl,pred cln lse disaggs qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.3 | 66 |
| RES_DEEP (ohm.m) | 67.79 | 66 |
| RES_SHALLOW (ohm.m) | 34.51 | 66 |
| **Δ Res (Deep − Shallow)** | **33.28** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2815.0 – 2825.0 m

**Sample Description (spreadsheet):** Sample 2820m: 0% Siltstone, 100% fine to medium, occasional coarse Sandstone, 100% moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, occ crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 146.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2800m: 130 SANDSTONE:clr,trnsl,pl trnsl yel brn,f-crs,pr srt, lith incl,pred cln lse disaggs qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2812m: pl trnsl brn,clr,f-med,occ crs,mod wl-pr srt,sbrnd-sbang,mnr wk sil cmt,nil vis mtx,rr mica flks,rr dk lith incl,fri aggs,com lse,fr-gd vis por, gd inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.2 | 65 |
| RES_DEEP (ohm.m) | 72.68 | 65 |
| RES_SHALLOW (ohm.m) | 34.12 | 65 |
| **Δ Res (Deep − Shallow)** | **38.56** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2825.0 – 2835.0 m

**Sample Description (spreadsheet):** Sample 2830m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 95.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: pl trnsl brn,clr,f-med,occ crs,mod wl-pr srt,sbrnd-sbang,mnr wk sil cmt,nil vis mtx,rr mica flks,rr dk lith incl,fri aggs,com lse,fr-gd vis por, gd inf por,mod bri fluor.
- **SANDSTONE** @ ~2820m: pl trnsl brn,clr,opq,f-crs,mod-pr srt, 2824 sbang-sbrnd,rr wk sil cmt,nil vis mtx,rr mica flks,rr 1238.7 dll lith incl,pred lse disaggs qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.6 | 66 |
| RES_DEEP (ohm.m) | 80.55 | 66 |
| RES_SHALLOW (ohm.m) | 33.36 | 66 |
| **Δ Res (Deep − Shallow)** | **47.19** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2840 m MD — Interval 2835.0 – 2845.0 m

**Sample Description (spreadsheet):** Sample 2840m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 86U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 86.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2820m: pl trnsl brn,clr,opq,f-crs,mod-pr srt, 2824 sbang-sbrnd,rr wk sil cmt,nil vis mtx,rr mica flks,rr 1238.7 dll lith incl,pred lse disaggs qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2820m: pl trnsl brn,clr,opq,f-crs,mod-pr srt, 1238.5 sbang-sbrnd,rr wk sil cmt,nil vis mtx,rr mica flks,rr dll lith incl,pred lse disaggs qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.0 | 65 |
| RES_DEEP (ohm.m) | 91.88 | 65 |
| RES_SHALLOW (ohm.m) | 32.91 | 65 |
| **Δ Res (Deep − Shallow)** | **58.97** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2850 m MD — Interval 2845.0 – 2855.0 m

**Sample Description (spreadsheet):** Sample 2850m: 0% Siltstone, 100% medium to fine,occasional coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 133U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f,occ crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 133.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: clr,pl trnsl yel brn,med-f,occ crs, mod-mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx, rr mica flks,rr dk lith incl,pred cln lse disaggs qtz grs, fri aggs,fr-gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2852m: off wh,clr,pl trnsl yel brn,f-med,rr crs, wk-mod sil cmt,mnr off wh arg mtx,rr mica flks,rr dk lith incl,fri-mod hd aggs,lse i/p,fr vis & fr-gd inf por, dll-mod bri fluor. FLUOR:2850-2880m;100% of SST;
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.6 | 66 |
| RES_DEEP (ohm.m) | 87.97 | 66 |
| RES_SHALLOW (ohm.m) | 29.18 | 66 |
| **Δ Res (Deep − Shallow)** | **58.79** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2860 m MD — Interval 2855.0 – 2865.0 m

**Sample Description (spreadsheet):** Sample 2860m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 168U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 168.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: clr,pl trnsl yel brn,med-f,occ crs, mod-mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx, rr mica flks,rr dk lith incl,pred cln lse disaggs qtz grs, fri aggs,fr-gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2852m: off wh,clr,pl trnsl yel brn,f-med,rr crs, wk-mod sil cmt,mnr off wh arg mtx,rr mica flks,rr dk lith incl,fri-mod hd aggs,lse i/p,fr vis & fr-gd inf por, dll-mod bri fluor. FLUOR:2850-2880m;100% of SST;
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.3 | 66 |
| RES_DEEP (ohm.m) | 88.12 | 66 |
| RES_SHALLOW (ohm.m) | 27.55 | 66 |
| **Δ Res (Deep − Shallow)** | **60.57** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2865.0 – 2875.0 m

**Sample Description (spreadsheet):** Sample 2870m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 148U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 148.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2852m: off wh,clr,pl trnsl yel brn,f-med,rr crs, wk-mod sil cmt,mnr off wh arg mtx,rr mica flks,rr dk lith incl,fri-mod hd aggs,lse i/p,fr vis & fr-gd inf por, dll-mod bri fluor. FLUOR:2850-2880m;100% of SST;
- **SANDSTONE** @ ~2873m: clr,pl trnsl brn,off wh,med-f,rr crs, 28 12 7 3 6 7.8 sbrnd-sbang,rr wk sil cmt,rr off wh arg mtx,rr mica flks,rr dk lith incl,fri aggs,com lse disagg qtz grs, fr-gd vis & inf por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.5 | 65 |
| RES_DEEP (ohm.m) | 85.32 | 65 |
| RES_SHALLOW (ohm.m) | 31.39 | 65 |
| **Δ Res (Deep − Shallow)** | **53.93** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2880 m MD — Interval 2875.0 – 2885.0 m

**Sample Description (spreadsheet):** Sample 2880m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 151.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2873m: clr,pl trnsl brn,off wh,med-f,rr crs, 28 12 7 3 6 7.8 sbrnd-sbang,rr wk sil cmt,rr off wh arg mtx,rr mica flks,rr dk lith incl,fri aggs,com lse disagg qtz grs, fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2880m: clr,trnsl,pl trnsl brn,f-med,wl srt, sbrnd-occ sbang,tr wk sil cmt,nil vis mtx,rr mica flks, pred lse disagg qtz grs,rr fri aggs,fr-gd vis & inf por, dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.0 | 66 |
| RES_DEEP (ohm.m) | 91.98 | 66 |
| RES_SHALLOW (ohm.m) | 39.12 | 66 |
| **Δ Res (Deep − Shallow)** | **52.86** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2890 m MD — Interval 2885.0 – 2895.0 m

**Sample Description (spreadsheet):** Sample 2890m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 163.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2873m: clr,pl trnsl brn,off wh,med-f,rr crs, 28 12 7 3 6 7.8 sbrnd-sbang,rr wk sil cmt,rr off wh arg mtx,rr mica flks,rr dk lith incl,fri aggs,com lse disagg qtz grs, fr-gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2880m: clr,trnsl,pl trnsl brn,f-med,wl srt, sbrnd-occ sbang,tr wk sil cmt,nil vis mtx,rr mica flks, pred lse disagg qtz grs,rr fri aggs,fr-gd vis & inf por, dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 35.4 | 66 |
| RES_DEEP (ohm.m) | 90.76 | 66 |
| RES_SHALLOW (ohm.m) | 43.25 | 66 |
| **Δ Res (Deep − Shallow)** | **47.51** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2895.0 – 2905.0 m

**Sample Description (spreadsheet):** Sample 2900m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 189.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2880m: clr,trnsl,pl trnsl brn,f-med,wl srt, sbrnd-occ sbang,tr wk sil cmt,nil vis mtx,rr mica flks, pred lse disagg qtz grs,rr fri aggs,fr-gd vis & inf por, dll-mod bri fluor.
- **SANDSTONE** @ ~2892m: clr,trnsl,pl trnsl brn,off wh,f-med,wl srt,sbrnd-occ sbang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred lse disagg qtz grs,rr fri aggs,fr-gd vis & inf por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.2 | 65 |
| RES_DEEP (ohm.m) | 88.57 | 65 |
| RES_SHALLOW (ohm.m) | 40.56 | 65 |
| **Δ Res (Deep − Shallow)** | **48.01** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2905.0 – 2915.0 m

**Sample Description (spreadsheet):** Sample 2910m: 0% Siltstone, 100% medium to fine, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 162.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2892m: clr,trnsl,pl trnsl brn,off wh,f-med,wl srt,sbrnd-occ sbang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred lse disagg qtz grs,rr fri aggs,fr-gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2900m: clr,trnsl,off wh,pred med,mnr f,rr crs, 2904 mod srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx, 1237.3 rr mica flks,pred lse disagg qtz grs,fri aggs,fr-gd vis & inf por,mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 31.5 | 66 |
| RES_DEEP (ohm.m) | 88.50 | 66 |
| RES_SHALLOW (ohm.m) | 38.22 | 66 |
| **Δ Res (Deep − Shallow)** | **50.27** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2915.0 – 2922.5 m

**Sample Description (spreadsheet):** Sample 2920m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 139U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 139.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: clr,trnsl,pl trnsl brn,f-med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks,fri 2916 aggs,com lse,fr vis & inf por,mod bri fluor. 1237.1 73 / 6 / 5 / 7 / 9 158 U
- **SANDSTONE** @ ~2928m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr 29 12 3 3 2 6.9 m ag ic g a s , f f l r k v s i , s rr & d k in l f i t p h o in r, c m l, o p d re b d r i c f l l n u o ls r e . disagg qtz grs,fri 74 / 6 / 5 / 7 / 8 162 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 32.9 | 49 |
| RES_DEEP (ohm.m) | 91.98 | 49 |
| RES_SHALLOW (ohm.m) | 42.85 | 49 |
| **Δ Res (Deep − Shallow)** | **49.13** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2925 m MD — Interval 2922.5 – 2927.5 m

**Sample Description (spreadsheet):** Sample 2925m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: clr,trnsl,pl trnsl brn,f-med,wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks,fri 2916 aggs,com lse,fr vis & inf por,mod bri fluor. 1237.1 73 / 6 / 5 / 7 / 9 158 U
- **SANDSTONE** @ ~2928m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr 29 12 3 3 2 6.9 m ag ic g a s , f f l r k v s i , s rr & d k in l f i t p h o in r, c m l, o p d re b d r i c f l l n u o ls r e . disagg qtz grs,fri 74 / 6 / 5 / 7 / 8 162 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 34.3 | 33 |
| RES_DEEP (ohm.m) | 76.27 | 33 |
| RES_SHALLOW (ohm.m) | 47.27 | 33 |
| **Δ Res (Deep − Shallow)** | **29.00** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2930 m MD — Interval 2927.5 – 2932.5 m

**Sample Description (spreadsheet):** Sample 2930m: 0% Siltstone, 100% fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, tr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 166.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2928m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr 29 12 3 3 2 6.9 m ag ic g a s , f f l r k v s i , s rr & d k in l f i t p h o in r, c m l, o p d re b d r i c f l l n u o ls r e . disagg qtz grs,fri 74 / 6 / 5 / 7 / 8 162 U
- **SANDSTONE** @ ~2936m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,rr dk lith incl,pred cln lse disagg qtz grs,fri aggs,fr vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 36.6 | 33 |
| RES_DEEP (ohm.m) | 70.85 | 33 |
| RES_SHALLOW (ohm.m) | 45.58 | 33 |
| **Δ Res (Deep − Shallow)** | **25.27** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2935 m MD — Interval 2932.5 – 2937.5 m

**Sample Description (spreadsheet):** Sample 2935m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 157.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2928m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr 29 12 3 3 2 6.9 m ag ic g a s , f f l r k v s i , s rr & d k in l f i t p h o in r, c m l, o p d re b d r i c f l l n u o ls r e . disagg qtz grs,fri 74 / 6 / 5 / 7 / 8 162 U
- **SANDSTONE** @ ~2936m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,rr dk lith incl,pred cln lse disagg qtz grs,fri aggs,fr vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 38.0 | 32 |
| RES_DEEP (ohm.m) | 64.55 | 32 |
| RES_SHALLOW (ohm.m) | 43.68 | 32 |
| **Δ Res (Deep − Shallow)** | **20.87** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2940 m MD — Interval 2937.5 – 2942.5 m

**Sample Description (spreadsheet):** Sample 2940m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 156.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2928m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr 29 12 3 3 2 6.9 m ag ic g a s , f f l r k v s i , s rr & d k in l f i t p h o in r, c m l, o p d re b d r i c f l l n u o ls r e . disagg qtz grs,fri 74 / 6 / 5 / 7 / 8 162 U
- **SANDSTONE** @ ~2936m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,rr dk lith incl,pred cln lse disagg qtz grs,fri aggs,fr vis & inf por,mod bri fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 36.6 | 33 |
| RES_DEEP (ohm.m) | 74.81 | 33 |
| RES_SHALLOW (ohm.m) | 41.93 | 33 |
| **Δ Res (Deep − Shallow)** | **32.88** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2945 m MD — Interval 2942.5 – 2947.5 m

**Sample Description (spreadsheet):** Sample 2945m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 156.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2928m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr 29 12 3 3 2 6.9 m ag ic g a s , f f l r k v s i , s rr & d k in l f i t p h o in r, c m l, o p d re b d r i c f l l n u o ls r e . disagg qtz grs,fri 74 / 6 / 5 / 7 / 8 162 U
- **SANDSTONE** @ ~2936m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,rr dk lith incl,pred cln lse disagg qtz grs,fri aggs,fr vis & inf por,mod bri fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 50.5 | 33 |
| RES_DEEP (ohm.m) | 76.21 | 33 |
| RES_SHALLOW (ohm.m) | 52.91 | 33 |
| **Δ Res (Deep − Shallow)** | **23.30** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2947.5 – 2952.5 m

**Sample Description (spreadsheet):** Sample 2950m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 152U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 152.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2936m: clr,trnsl,pl trnsl yel brn,off wh,f-med, wl srt,sbrnd-sbang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,rr dk lith incl,pred cln lse disagg qtz grs,fri aggs,fr vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2944m: clr,trnsl,wh,pl yel,vf-crs,pr srt, sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr mic,rr slty 2948 lams,fri-lse,gd vis & inf por,mod bri fluor. 1236.7 75 / 6 / 5 / 7 / 7 175 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.5 | 33 |
| RES_DEEP (ohm.m) | 69.99 | 33 |
| RES_SHALLOW (ohm.m) | 62.14 | 33 |
| **Δ Res (Deep − Shallow)** | **7.85** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2955 m MD — Interval 2952.5 – 2957.5 m

**Sample Description (spreadsheet):** Sample 2955m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 161.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2944m: clr,trnsl,wh,pl yel,vf-crs,pr srt, sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr mic,rr slty 2948 lams,fri-lse,gd vis & inf por,mod bri fluor. 1236.7 75 / 6 / 5 / 7 / 7 175 U
- **SANDSTONE** @ ~2956m: clr,trnsl,wh,pl yel,vf-dom med,rr crs, mod wl srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr mic,rr slty lams,lse,gd inf por,mod bri fluor. 26-11-2024 27-11-2024 2960
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 57.7 | 33 |
| RES_DEEP (ohm.m) | 70.40 | 33 |
| RES_SHALLOW (ohm.m) | 63.51 | 33 |
| **Δ Res (Deep − Shallow)** | **6.89** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2957.5 – 2962.5 m

**Sample Description (spreadsheet):** Sample 2960m: 5% Siltstone, 95% medium, rare fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 151.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2944m: clr,trnsl,wh,pl yel,vf-crs,pr srt, sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr mic,rr slty 2948 lams,fri-lse,gd vis & inf por,mod bri fluor. 1236.7 75 / 6 / 5 / 7 / 7 175 U
- **SANDSTONE** @ ~2956m: clr,trnsl,wh,pl yel,vf-dom med,rr crs, mod wl srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr mic,rr slty lams,lse,gd inf por,mod bri fluor. 26-11-2024 27-11-2024 2960
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 57.9 | 32 |
| RES_DEEP (ohm.m) | 70.40 | 32 |
| RES_SHALLOW (ohm.m) | 67.52 | 32 |
| **Δ Res (Deep − Shallow)** | **2.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3020 m MD — Interval 3015.0 – 3025.0 m

**Sample Description (spreadsheet):** Sample 3020m: 40% Siltstone, 60% very fine to medium, rare coarse Sandstone, 100% dull FLUOR in SST. TG 132U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 132.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3006m: lt-med gry,aren,micmic,tr liths,rr carb 1238.2 spks,tr sid frags,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3016m: clr,trnsl,wh,vf-f,rr crs,mod drt, sbang-sbrnd,wk sil cmt,tr wh arg mtx,com slty lamsfri-lse,gd vis & inf por,dll fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 48.2 | 66 |
| RES_DEEP (ohm.m) | 93.70 | 66 |
| RES_SHALLOW (ohm.m) | 81.03 | 66 |
| **Δ Res (Deep − Shallow)** | **12.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3030 m MD — Interval 3025.0 – 3035.0 m

**Sample Description (spreadsheet):** Sample 3030m: 20% Siltstone, 80% very fine to medium, rare coarse Sandstone, 100% dull FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 179.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3016m: clr,trnsl,wh,vf-f,rr crs,mod drt, sbang-sbrnd,wk sil cmt,tr wh arg mtx,com slty lamsfri-lse,gd vis & inf por,dll fluor.
- **LIMESTONE** @ ~3024m: lt-med gry brn,med brn,micr,arg,sid,v 3028 hd,ang frac,blky 1239.2
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.4 | 65 |
| RES_DEEP (ohm.m) | 64.54 | 65 |
| RES_SHALLOW (ohm.m) | 63.84 | 65 |
| **Δ Res (Deep − Shallow)** | **0.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3040 m MD — Interval 3035.0 – 3045.0 m

**Sample Description (spreadsheet):** Sample 3040m: 5% Siltstone, 95% fine to very coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-v crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 176.0 U |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE** @ ~3024m: lt-med gry brn,med brn,micr,arg,sid,v 3028 hd,ang frac,blky 1239.2
- **SANDSTONE** @ ~3036m: clr,trnsl,off wh,f-v crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr liths,rr mic, fri-lse,fr vis & inf por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 38.6 | 66 |
| RES_DEEP (ohm.m) | 70.45 | 66 |
| RES_SHALLOW (ohm.m) | 44.45 | 66 |
| **Δ Res (Deep − Shallow)** | **26.00** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3050 m MD — Interval 3045.0 – 3055.0 m

**Sample Description (spreadsheet):** Sample 3050m: 0% Siltstone, 100% medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 177.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3036m: clr,trnsl,off wh,f-v crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr liths,rr mic, fri-lse,fr vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~3048m: clr,trnsl,off wh,med-crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr liths,rr mic,gd inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.4 | 65 |
| RES_DEEP (ohm.m) | 73.64 | 65 |
| RES_SHALLOW (ohm.m) | 35.05 | 65 |
| **Δ Res (Deep − Shallow)** | **38.59** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3060 m MD — Interval 3055.0 – 3065.0 m

**Sample Description (spreadsheet):** Sample 3060m: 0% Siltstone, 100% medium to rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 136.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3048m: clr,trnsl,off wh,med-crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr liths,rr mic,gd inf por,mod bri fluor.
- **SILTSTONE** @ ~3064m: lt-med gry,aren,micmic,tr liths,rr carb spks,tr sid frags,mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 66 |
| RES_DEEP (ohm.m) | 89.52 | 66 |
| RES_SHALLOW (ohm.m) | 33.01 | 66 |
| **Δ Res (Deep − Shallow)** | **56.51** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3070 m MD — Interval 3065.0 – 3075.0 m

**Sample Description (spreadsheet):** Sample 3070m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 166.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3064m: lt-med gry,aren,micmic,tr liths,rr carb spks,tr sid frags,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3068m: clr,trnsl,wh,off wh,f-med,rr crs,mod wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr liths,rr mic,rr slty lams,fri-lse,fr vis & inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.5 | 66 |
| RES_DEEP (ohm.m) | 74.78 | 66 |
| RES_SHALLOW (ohm.m) | 40.63 | 66 |
| **Δ Res (Deep − Shallow)** | **34.15** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3080 m MD — Interval 3075.0 – 3085.0 m

**Sample Description (spreadsheet):** Sample 3080m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 140.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3064m: lt-med gry,aren,micmic,tr liths,rr carb spks,tr sid frags,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3068m: clr,trnsl,wh,off wh,f-med,rr crs,mod wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr liths,rr mic,rr slty lams,fri-lse,fr vis & inf por,dll-mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.6 | 65 |
| RES_DEEP (ohm.m) | 67.51 | 65 |
| RES_SHALLOW (ohm.m) | 27.79 | 65 |
| **Δ Res (Deep − Shallow)** | **39.72** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3090 m MD — Interval 3085.0 – 3095.0 m

**Sample Description (spreadsheet):** Sample 3090m: 0% Siltstone, 100% fine to coarse Sandstone, 100% dull FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 147.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3076m: trnsl,clr,off wh,f-crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr liths,rr mic,rr slty lams,fri-lse,fr vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~3086m: trnsl,clr,off wh,f-crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr liths,rr 3088 mic,rr slty lams,fri-lse,fr vis & inf por,dll fluor. 1239.6
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.9 | 66 |
| RES_DEEP (ohm.m) | 76.78 | 66 |
| RES_SHALLOW (ohm.m) | 27.19 | 66 |
| **Δ Res (Deep − Shallow)** | **49.59** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3100 m MD — Interval 3095.0 – 3105.0 m

**Sample Description (spreadsheet):** Sample 3100m: 0% Siltstone, 100% medium to coarse, rare fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs, rr f (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 158.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3086m: trnsl,clr,off wh,f-crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,rr liths,rr 3088 mic,rr slty lams,fri-lse,fr vis & inf por,dll fluor. 1239.6
- **SANDSTONE** @ ~3096m: clr,trnsl,pl yel,off wh,med-crs,occ f, mod srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr sid frags,dom cln,gd inf & vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.6 | 66 |
| RES_DEEP (ohm.m) | 75.16 | 66 |
| RES_SHALLOW (ohm.m) | 27.61 | 66 |
| **Δ Res (Deep − Shallow)** | **47.55** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3110 m MD — Interval 3105.0 – 3115.0 m

**Sample Description (spreadsheet):** Sample 3110m: 5% Siltstone, 95% medium to coarse, rare fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 144U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-crs, rr f (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 144.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3096m: clr,trnsl,pl yel,off wh,med-crs,occ f, mod srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr sid frags,dom cln,gd inf & vis por,dll-mod bri fluor.
- **SILTSTONE** @ ~3100m: 2671-2759 psi SILTSTONE:lt-med gry,aren,micmic,tr liths,rr carb
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.9 | 65 |
| RES_DEEP (ohm.m) | 79.91 | 65 |
| RES_SHALLOW (ohm.m) | 25.90 | 65 |
| **Δ Res (Deep − Shallow)** | **54.01** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3120 m MD — Interval 3115.0 – 3125.0 m

**Sample Description (spreadsheet):** Sample 3120m: 0% Siltstone, 100% medium, rare coarse Sandstone, 100% dull FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med, rr crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3100m: 2671-2759 psi SILTSTONE:lt-med gry,aren,micmic,tr liths,rr carb
- **SANDSTONE** @ ~3104m: clr,trnsl,pl yel,off wh,med-crs,occ f, 1239.4 mod srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr sid frags,dom cln,gd inf & vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.6 | 66 |
| RES_DEEP (ohm.m) | 72.28 | 66 |
| RES_SHALLOW (ohm.m) | 26.36 | 66 |
| **Δ Res (Deep − Shallow)** | **45.92** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3130 m MD — Interval 3125.0 – 3135.0 m

**Sample Description (spreadsheet):** Sample 3130m: 0% Siltstone, 100% medium to coarse, rare fine Sandstone, 100% dull FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs, rr f (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 161.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,med gr,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil mtx,tr sid frags,cln & lse, gd inf por,dll fluor.
- **SANDSTONE** @ ~3124m: clr,trnsl,med-crs,rr f,mod wl srt, sbng-sbrnd,wk sil cmt,nil vis mtx,cln & lse,tr mic,gd 31 12 2 3 8 9.3 inf por,dll fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.0 | 65 |
| RES_DEEP (ohm.m) | 70.05 | 65 |
| RES_SHALLOW (ohm.m) | 23.40 | 65 |
| **Δ Res (Deep − Shallow)** | **46.65** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3140 m MD — Interval 3135.0 – 3145.0 m

**Sample Description (spreadsheet):** Sample 3140m: 0.475694444444444 siderite in 0% Siltstone, 100% medium, rare fine to coarse Sandstone, 100% dull FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 157.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3124m: clr,trnsl,med-crs,rr f,mod wl srt, sbng-sbrnd,wk sil cmt,nil vis mtx,cln & lse,tr mic,gd 31 12 2 3 8 9.3 inf por,dll fluor.
- **SANDSTONE** @ ~3136m: clr,trnsl,med-crs,rr f,mod wl srt, sbng-sbrnd,wk sil cmt,nil vis mtx,cln & lse,tr mic,gd inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.0 | 66 |
| RES_DEEP (ohm.m) | 68.52 | 66 |
| RES_SHALLOW (ohm.m) | 28.03 | 66 |
| **Δ Res (Deep − Shallow)** | **40.49** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3150 m MD — Interval 3145.0 – 3155.0 m

**Sample Description (spreadsheet):** Sample 3150m: 0.498611111111111 siderite in 0% Siltstone, 100% medium, rare fine to coarse Sandstone, 100% dull FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3136m: clr,trnsl,med-crs,rr f,mod wl srt, sbng-sbrnd,wk sil cmt,nil vis mtx,cln & lse,tr mic,gd inf por,dll fluor.
- **SANDSTONE** @ ~3148m: clr,trnsl,f-crs,dom med,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse & cln,rr mic,gd inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.7 | 66 |
| RES_DEEP (ohm.m) | 68.32 | 66 |
| RES_SHALLOW (ohm.m) | 28.56 | 66 |
| **Δ Res (Deep − Shallow)** | **39.75** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3160 m MD — Interval 3155.0 – 3165.0 m

**Sample Description (spreadsheet):** Sample 3160m: 0.527777777777778 siderite in 0% Siltstone, 100% fine to coarse,rare very fine Sandstone, 100% moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs,rr vf (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3148m: clr,trnsl,f-crs,dom med,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse & cln,rr mic,gd inf por,dll fluor.
- **SANDSTONE** @ ~3152m: clr,trnsl,pl trnsl brn,f-crs,rr vf,pr srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mic flks,pred 3156 cln lse disagg qtz grs,fri aggs,gd vis & inf por,mod 1239.2 bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.3 | 65 |
| RES_DEEP (ohm.m) | 76.18 | 65 |
| RES_SHALLOW (ohm.m) | 27.69 | 65 |
| **Δ Res (Deep − Shallow)** | **48.49** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3170 m MD — Interval 3165.0 – 3175.0 m

**Sample Description (spreadsheet):** Sample 3170m: 0.5375 siderite in 0% Siltstone, 100% medium, rare fine to coarse Sandstone, 100% dull FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med, rr f-crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 178.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3152m: clr,trnsl,pl trnsl brn,f-crs,rr vf,pr srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mic flks,pred 3156 cln lse disagg qtz grs,fri aggs,gd vis & inf por,mod 1239.2 bri fluor.
- **SANDSTONE** @ ~3160m: clr,trnsl,pl trnsl brn,f-crs,rr vf,pr srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mic flks,pred cln lse disagg qtz grs,fri aggs,gd vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.4 | 66 |
| RES_DEEP (ohm.m) | 62.22 | 66 |
| RES_SHALLOW (ohm.m) | 26.62 | 66 |
| **Δ Res (Deep − Shallow)** | **35.59** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3180 m MD — Interval 3175.0 – 3185.0 m

**Sample Description (spreadsheet):** Sample 3180m: 0.561805555555556 siderite in 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 172.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3160m: clr,trnsl,pl trnsl brn,f-crs,rr vf,pr srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mic flks,pred cln lse disagg qtz grs,fri aggs,gd vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~3172m: clr,trnsl,pr trnsl brn,f-crs,pr srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks, pred cln lse disagg qtz grs,rr fri aggs,gd inf & vis por, mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.0 | 65 |
| RES_DEEP (ohm.m) | 64.30 | 65 |
| RES_SHALLOW (ohm.m) | 25.78 | 65 |
| **Δ Res (Deep − Shallow)** | **38.52** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3190 m MD — Interval 3185.0 – 3195.0 m

**Sample Description (spreadsheet):** Sample 3190m: 0.584027777777778 siderite in 0% Siltstone, 100% very fine to medium,occasional coarse Sandstone, 100% dull FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med,occ crs (max: C) |
| Fluorescence | 100.0% dll |
| Total Gas | 157.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3172m: clr,trnsl,pr trnsl brn,f-crs,pr srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks, pred cln lse disagg qtz grs,rr fri aggs,gd inf & vis por, mod bri fluor.
- **SANDSTONE** @ ~3180m: clr,pl trnsl brn,trnsl f-vf,com med,occ 1239.3 crs,pr srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks,fri aggs,com lse,fr-gd vis & inf por,dll fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 29.1 | 66 |
| RES_DEEP (ohm.m) | 70.11 | 66 |
| RES_SHALLOW (ohm.m) | 28.24 | 66 |
| **Δ Res (Deep − Shallow)** | **41.87** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3200 m MD — Interval 3195.0 – 3205.0 m

**Sample Description (spreadsheet):** Sample 3200m: 0.606944444444444 siderite in 0% Siltstone, 100% fine to very fine,minor medium,rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-vf,mnr med,rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 123.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3180m: clr,pl trnsl brn,trnsl f-vf,com med,occ 1239.3 crs,pr srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks,fri aggs,com lse,fr-gd vis & inf por,dll fluor.
- **SANDSTONE** @ ~3204m: clr,trnsl,f-med,rr crs,wl-mod wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr micrspks, pred cln lse disagg qtz grs,rr fri aggs,fr vis & inf por, occ-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.1 | 66 |
| RES_DEEP (ohm.m) | 67.03 | 66 |
| RES_SHALLOW (ohm.m) | 28.82 | 66 |
| **Δ Res (Deep − Shallow)** | **38.21** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3210 m MD — Interval 3205.0 – 3215.0 m

**Sample Description (spreadsheet):** Sample 3210m: 0.619444444444444 siderite in 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 164.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3204m: clr,trnsl,f-med,rr crs,wl-mod wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr micrspks, pred cln lse disagg qtz grs,rr fri aggs,fr vis & inf por, occ-mod bri fluor.
- **SANDSTONE** @ ~3212m: clr,trnsl,f-med,wl srt,sbang-sbrnd,tr wk sil cmt,nil vis mtx,pred lse disagg qtz grs,rr fri aggs,pr-fr vis & inf por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.6 | 65 |
| RES_DEEP (ohm.m) | 62.96 | 65 |
| RES_SHALLOW (ohm.m) | 27.95 | 65 |
| **Δ Res (Deep − Shallow)** | **35.01** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3220 m MD — Interval 3215.0 – 3225.0 m

**Sample Description (spreadsheet):** Sample 3220m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 172.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3204m: clr,trnsl,f-med,rr crs,wl-mod wl srt, sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr micrspks, pred cln lse disagg qtz grs,rr fri aggs,fr vis & inf por, occ-mod bri fluor.
- **SANDSTONE** @ ~3212m: clr,trnsl,f-med,wl srt,sbang-sbrnd,tr wk sil cmt,nil vis mtx,pred lse disagg qtz grs,rr fri aggs,pr-fr vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.4 | 66 |
| RES_DEEP (ohm.m) | 61.83 | 66 |
| RES_SHALLOW (ohm.m) | 26.97 | 66 |
| **Δ Res (Deep − Shallow)** | **34.86** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3230 m MD — Interval 3225.0 – 3235.0 m

**Sample Description (spreadsheet):** Sample 3230m: 0% Siltstone, 100% fine to very fine,occasional medium,rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-vf,occ med,rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 162.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3212m: clr,trnsl,f-med,wl srt,sbang-sbrnd,tr wk sil cmt,nil vis mtx,pred lse disagg qtz grs,rr fri aggs,pr-fr vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~3224m: clr,trnsl,f-vf,occ med,rr crs,mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks, rr dk lith incls,pred lse,fri aggs,fr-gd vis por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.1 | 66 |
| RES_DEEP (ohm.m) | 66.36 | 66 |
| RES_SHALLOW (ohm.m) | 25.95 | 66 |
| **Δ Res (Deep − Shallow)** | **40.41** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3240 m MD — Interval 3235.0 – 3245.0 m

**Sample Description (spreadsheet):** Sample 3240m: 0% Siltstone, 100% fine to very fine,occasional medium,rare coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-vf,occ med,rr crs (max: C) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 151.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3224m: clr,trnsl,f-vf,occ med,rr crs,mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks, rr dk lith incls,pred lse,fri aggs,fr-gd vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~3232m: clr,trnsl,f-vf,occ med,rr crs,mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks, rr dk lith incls,pred lse,fri aggs,fr-gd vis por,dll-mod 3236 bri fluor. 1239.4
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.6 | 65 |
| RES_DEEP (ohm.m) | 60.49 | 65 |
| RES_SHALLOW (ohm.m) | 27.78 | 65 |
| **Δ Res (Deep − Shallow)** | **32.71** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3250 m MD — Interval 3245.0 – 3255.0 m

**Sample Description (spreadsheet):** Sample 3250m: 0% Siltstone, 100% medium to fine,rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 181U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-f,rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 181.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3232m: clr,trnsl,f-vf,occ med,rr crs,mod wl srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx,rr mica flks, rr dk lith incls,pred lse,fri aggs,fr-gd vis por,dll-mod 3236 bri fluor. 1239.4
- **SANDSTONE** @ ~3240m: clr,trnsl,pl trnsl brn,f-med,occ vf,rr crs,mod-pr srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx, rr mica flks,rr carb frags & dk lith incls,pred cln lse disagg qtz grs,mnr fri aggs,fr-gd vis por,mod bri 7 1 / 6 / 6 / 9 / 8 201 U fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.6 | 66 |
| RES_DEEP (ohm.m) | 67.08 | 66 |
| RES_SHALLOW (ohm.m) | 30.05 | 66 |
| **Δ Res (Deep − Shallow)** | **37.03** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3260 m MD — Interval 3255.0 – 3265.0 m

**Sample Description (spreadsheet):** Sample 3260m: 0% Siltstone, 100% fine to medium,occasional very fine,rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med,occ vf,rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 202.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3240m: clr,trnsl,pl trnsl brn,f-med,occ vf,rr crs,mod-pr srt,sbrnd-sbang,tr wk sil cmt,nil vis mtx, rr mica flks,rr carb frags & dk lith incls,pred cln lse disagg qtz grs,mnr fri aggs,fr-gd vis por,mod bri 7 1 / 6 / 6 / 9 / 8 201 U fluor.
- **SANDSTONE** @ ~3252m: pl trnsl brn,clr,off wh,f-med,occ vf,rr crs,mod-pr srt,sbrnd-sbang,rr wk sil cmt,rr off wh arg mtx,rr mica flks,rr carb frags & dk lith incls,fri aggs,com lse,fr-gd vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.8 | 65 |
| RES_DEEP (ohm.m) | 81.86 | 65 |
| RES_SHALLOW (ohm.m) | 30.50 | 65 |
| **Δ Res (Deep − Shallow)** | **51.36** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 156 |
| Depth range | 1585 – 3260 m |
| Avg % Sandstone | 94.7% |
| Avg Δ Res (Deep−Shallow) | 40.05 ohm.m |
| Max Δ Res | 81.33 ohm.m |
| Min Δ Res | -8.92 ohm.m |
| Mudlog matches | 156 / 156 |
