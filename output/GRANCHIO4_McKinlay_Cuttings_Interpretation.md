# GRANCHIO 4 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 02:30 UTC  
**Well:** GRANCHIO 4 (GRANCHIO 4)  
**TD:** 2825 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `Granchio 4_Mudlog_Spud-2825m_TD_Field Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Granchio 4 Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Granchio_4` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1678.34 | DC30.xlsx |
| McKinlay Member (shallowest) | 1678.10 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Target re-entry (McKinlay without paired Murta):**
- 1678.10 m MD
- 2089.00 m MD

**Overburden intersections (McKinlay ≈ Murta within 5 m):**
| McKinlay (m MD) | Murta (m MD) | Δ (m) |
|-----------------|-------------|-------|
| 1792.24 | 1793.72 | 1.48 |
| 2066.54 | 2068.00 | 1.46 |

**McKinlay Member analysis window:** 1678.1 – 2825.0 m MD

**Excluded zones (±10 m around overburden & target re-entry tops):** 1782–1802 (overburden), 2057–2077 (overburden), 1668–1688 (target_reentry), 2079–2099 (target_reentry)

**Samples in McKinlay Member:** 126 of 143 total
- Excluded pre-reservoir: 4
- Excluded overburden intersections: 8
- Excluded target re-entry tops: 5

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** GRANCHIO 4 → `GRANCHIO 4` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** use ±10 m around paired overburden tops AND McKinlay target re-entry tops without Murta pairs.
8. **Input Sheet only** — Calculations Sheet not used.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 0% Siltstone, 100% fine to coarse Sandstone, 40% bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 40% bri |
| Total Gas | 120 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1690m: clr-trnsl,f-crs,pred med, pr-fr srt,sbang-pred sbrnd,tr sil cmt, tr lt gry arg mtx,tr carb incl,pred lse, fri i/p,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 60.15 | 33 |
| RES_SHALLOW (ohm.m) | 49.29 | 33 |
| **Δ Res (Deep − Shallow)** | **10.86** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 10% Siltstone, 90% fine to coarse Sandstone, 80% bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80% bri |
| Total Gas | 170 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1690m: clr-trnsl,f-crs,pred med, pr-fr srt,sbang-pred sbrnd,tr sil cmt, tr lt gry arg mtx,tr carb incl,pred lse, fri i/p,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 57.35 | 33 |
| RES_SHALLOW (ohm.m) | 47.31 | 33 |
| **Δ Res (Deep − Shallow)** | **10.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 195 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1690m: clr-trnsl,f-crs,pred med, pr-fr srt,sbang-pred sbrnd,tr sil cmt, tr lt gry arg mtx,tr carb incl,pred lse, fri i/p,gd inf por,fluor.
- **SANDSTONE** @ ~1720m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaol mtx,fri-occ frm aggs,com lse, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 65.78 | 33 |
| RES_SHALLOW (ohm.m) | 54.42 | 33 |
| **Δ Res (Deep − Shallow)** | **11.36** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 0% Siltstone, 100% fine to coarse Sandstone, 90% bright FLUOR in SST. TG 310U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% bri |
| Total Gas | 310 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaol mtx,fri-occ frm aggs,com lse, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 32 |
| RES_DEEP (ohm.m) | 67.57 | 32 |
| RES_SHALLOW (ohm.m) | 57.09 | 32 |
| **Δ Res (Deep − Shallow)** | **10.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 230 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaol mtx,fri-occ frm aggs,com lse, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 33 |
| RES_DEEP (ohm.m) | 69.92 | 33 |
| RES_SHALLOW (ohm.m) | 59.44 | 33 |
| **Δ Res (Deep − Shallow)** | **10.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 250 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaol mtx,fri-occ frm aggs,com lse, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 72.93 | 33 |
| RES_SHALLOW (ohm.m) | 61.16 | 33 |
| **Δ Res (Deep − Shallow)** | **11.77** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 200 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaol mtx,fri-occ frm aggs,com lse, fr inf por,fluor.
- **SANDSTONE** @ ~1740m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaolmtxfrioccfrmaggscomlse kaol mtx,fri-occ frm aggs,com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 67.13 | 33 |
| RES_SHALLOW (ohm.m) | 55.79 | 33 |
| **Δ Res (Deep − Shallow)** | **11.34** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 186 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaol mtx,fri-occ frm aggs,com lse, fr inf por,fluor.
- **SANDSTONE** @ ~1740m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaolmtxfrioccfrmaggscomlse kaol mtx,fri-occ frm aggs,com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 33 |
| RES_DEEP (ohm.m) | 66.48 | 33 |
| RES_SHALLOW (ohm.m) | 56.12 | 33 |
| **Δ Res (Deep − Shallow)** | **10.37** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 0% Siltstone, 100% fine to coarse Sandstone, 90% bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% bri |
| Total Gas | 207 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaol mtx,fri-occ frm aggs,com lse, fr inf por,fluor.
- **SANDSTONE** @ ~1740m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaolmtxfrioccfrmaggscomlse kaol mtx,fri-occ frm aggs,com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 32 |
| RES_DEEP (ohm.m) | 65.52 | 32 |
| RES_SHALLOW (ohm.m) | 54.62 | 32 |
| **Δ Res (Deep − Shallow)** | **10.90** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 5% Siltstone, 95% very fine to fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 196 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaolmtxfrioccfrmaggscomlse kaol mtx,fri-occ frm aggs,com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 64.98 | 33 |
| RES_SHALLOW (ohm.m) | 53.67 | 33 |
| **Δ Res (Deep − Shallow)** | **11.31** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 5% Siltstone, 95% very fine to fine Sandstone, 95% moderately bright to bright FLUOR in SST. TG 219U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: M ) |
| Fluorescence | 95% mod bri-bri |
| Total Gas | 219 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaolmtxfrioccfrmaggscomlse kaol mtx,fri-occ frm aggs,com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 55.35 | 33 |
| RES_SHALLOW (ohm.m) | 45.62 | 33 |
| **Δ Res (Deep − Shallow)** | **9.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 325U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 325 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaolmtxfrioccfrmaggscomlse kaol mtx,fri-occ frm aggs,com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.8 | 33 |
| RES_DEEP (ohm.m) | 58.57 | 33 |
| RES_SHALLOW (ohm.m) | 49.73 | 33 |
| **Δ Res (Deep − Shallow)** | **8.84** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 5% Siltstone, 95% very fine to fine Sandstone, 95% moderately bright to bright FLUOR in SST. TG 257U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 95% mod bri-bri |
| Total Gas | 257 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr-trnsl,off wh,trnsl brn i/p,f-occ med,rr crs,sbrnd-occ sbang,mod wl srt,wk sil cmt,nil-rr kaolmtxfrioccfrmaggscomlse kaol mtx,fri-occ frm aggs,com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 63.34 | 33 |
| RES_SHALLOW (ohm.m) | 55.29 | 33 |
| **Δ Res (Deep − Shallow)** | **8.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 5% Siltstone, 95% fine to medium Sandstone, 95% moderately bright to bright FLUOR in SST. TG 274U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 95% mod bri-bri |
| Total Gas | 274 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 32 |
| RES_DEEP (ohm.m) | 66.79 | 32 |
| RES_SHALLOW (ohm.m) | 59.13 | 32 |
| **Δ Res (Deep − Shallow)** | **7.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 0% Siltstone, 100% medium to coarse Sandstone, 30% dim to occasional bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 30% dim-occ bri |
| Total Gas | 241 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.8 | 33 |
| RES_DEEP (ohm.m) | 66.28 | 33 |
| RES_SHALLOW (ohm.m) | 59.10 | 33 |
| **Δ Res (Deep − Shallow)** | **7.17** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 0% Siltstone, 100% very fine to fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 206 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 33 |
| RES_DEEP (ohm.m) | 64.01 | 33 |
| RES_SHALLOW (ohm.m) | 52.53 | 33 |
| **Δ Res (Deep − Shallow)** | **11.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 0% Siltstone, 100% very fine to fine Sandstone, 95% moderately bright to bright FLUOR in SST. TG 362U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 95% mod bri-bri |
| Total Gas | 362 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.8 | 33 |
| RES_DEEP (ohm.m) | 68.45 | 33 |
| RES_SHALLOW (ohm.m) | 55.26 | 33 |
| **Δ Res (Deep − Shallow)** | **13.18** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 35% Siltstone, 65% very fine to fine Sandstone, 60% moderately bright to bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 65 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 60% mod bri-bri |
| Total Gas | 192 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,trnsl-clr,vf-f,sbrnd- sbang,mod wl srt,wk-frm sil cmt,mnr-mod kaol mtx,slty mtx i/p,mnr cln lse f qtz, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.4 | 33 |
| RES_DEEP (ohm.m) | 57.86 | 33 |
| RES_SHALLOW (ohm.m) | 41.07 | 33 |
| **Δ Res (Deep − Shallow)** | **16.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 25% Siltstone, 75% very fine to fine Sandstone, 40% moderately bright to bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 75 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 40% mod bri-bri |
| Total Gas | 170 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,trnsl-clr,vf-f,sbrnd- sbang,mod wl srt,wk-frm sil cmt,mnr-mod kaol mtx,slty mtx i/p,mnr cln lse f qtz, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.9 | 33 |
| RES_DEEP (ohm.m) | 41.13 | 33 |
| RES_SHALLOW (ohm.m) | 31.43 | 33 |
| **Δ Res (Deep − Shallow)** | **9.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 60% Siltstone, 40% very fine to fine Sandstone, 40% moderately bright to bright FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 40% mod bri-bri |
| Total Gas | 147 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,trnsl-clr,vf-f,sbrnd- sbang,mod wl srt,wk-frm sil cmt,mnr-mod kaol mtx,slty mtx i/p,mnr cln lse f qtz, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.1 | 32 |
| RES_DEEP (ohm.m) | 33.83 | 32 |
| RES_SHALLOW (ohm.m) | 28.31 | 32 |
| **Δ Res (Deep − Shallow)** | **5.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 45% Siltstone, 55% very fine to fine Sandstone, 50% moderately bright to bright FLUOR in SST. TG 168U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% mod bri-bri |
| Total Gas | 168 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,trnsl-clr,vf-f,sbrnd- sbang,mod wl srt,wk-frm sil cmt,mnr-mod kaol mtx,slty mtx i/p,mnr cln lse f qtz, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 125.5 | 33 |
| RES_DEEP (ohm.m) | 46.87 | 33 |
| RES_SHALLOW (ohm.m) | 38.04 | 33 |
| **Δ Res (Deep − Shallow)** | **8.83** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 10% Siltstone, 90% very fine to fine Sandstone, 60% moderately bright to bright FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 60% mod bri-bri |
| Total Gas | 162 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,trnsl-clr,vf-f,sbrnd- sbang,mod wl srt,wk-frm sil cmt,mnr-mod kaol mtx,slty mtx i/p,mnr cln lse f qtz, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 127.0 | 33 |
| RES_DEEP (ohm.m) | 38.12 | 33 |
| RES_SHALLOW (ohm.m) | 31.41 | 33 |
| **Δ Res (Deep − Shallow)** | **6.71** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 15% Siltstone, 85% very fine to fine Sandstone, 50% moderately bright to bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-f (max: M ) |
| Fluorescence | 50% mod bri-bri |
| Total Gas | 201 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.4 | 33 |
| RES_DEEP (ohm.m) | 62.24 | 33 |
| RES_SHALLOW (ohm.m) | 47.52 | 33 |
| **Δ Res (Deep − Shallow)** | **14.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 10% Siltstone, 90% very fine to fine Sandstone, 60% moderately bright to bright FLUOR in SST. TG 332U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 60% mod bri-bri |
| Total Gas | 332 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1850m: 1-7 klbs SANDSTONE:pl brn-v pl brn,trnsl,occ FLW: 255-270gpm

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 33 |
| RES_DEEP (ohm.m) | 69.63 | 33 |
| RES_SHALLOW (ohm.m) | 52.97 | 33 |
| **Δ Res (Deep − Shallow)** | **16.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 0% Siltstone, 100% very fine Sandstone, 100% bright FLUOR in SST. TG 289U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 289 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1850m: 1-7 klbs SANDSTONE:pl brn-v pl brn,trnsl,occ FLW: 255-270gpm

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 32 |
| RES_DEEP (ohm.m) | 86.42 | 32 |
| RES_SHALLOW (ohm.m) | 64.76 | 32 |
| **Δ Res (Deep − Shallow)** | **21.66** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 0% Siltstone, 100% very fine Sandstone, 100% bright FLUOR in SST. TG 308U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 308 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1850m: 1-7 klbs SANDSTONE:pl brn-v pl brn,trnsl,occ FLW: 255-270gpm

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 33 |
| RES_DEEP (ohm.m) | 71.55 | 33 |
| RES_SHALLOW (ohm.m) | 57.72 | 33 |
| **Δ Res (Deep − Shallow)** | **13.83** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 0% Siltstone, 100% very fine Sandstone, 100% bright FLUOR in SST. TG 303U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 303 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1850m: 1-7 klbs SANDSTONE:pl brn-v pl brn,trnsl,occ FLW: 255-270gpm

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 58.91 | 33 |
| RES_SHALLOW (ohm.m) | 51.75 | 33 |
| **Δ Res (Deep − Shallow)** | **7.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 0% Siltstone, 100% very fine Sandstone, 100% bright FLUOR in SST. TG 321U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 321 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1850m: 1-7 klbs SANDSTONE:pl brn-v pl brn,trnsl,occ FLW: 255-270gpm
- **SANDSTONE** @ ~1870m: clr-trnsl,v pl brn,pred vf pl brn aggs,occ lse f-med qtz ,sbang- sbrnd,mod srt,wk sil cmt,mnr kaol mtx in vf aggs,fri aggs,com lse qtz,pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 33 |
| RES_DEEP (ohm.m) | 48.97 | 33 |
| RES_SHALLOW (ohm.m) | 45.76 | 33 |
| **Δ Res (Deep − Shallow)** | **3.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 0% Siltstone, 100% very fine Sandstone, 100% bright FLUOR in SST. TG 405U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 405 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1850m: 1-7 klbs SANDSTONE:pl brn-v pl brn,trnsl,occ FLW: 255-270gpm
- **SANDSTONE** @ ~1870m: clr-trnsl,v pl brn,pred vf pl brn aggs,occ lse f-med qtz ,sbang- sbrnd,mod srt,wk sil cmt,mnr kaol mtx in vf aggs,fri aggs,com lse qtz,pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.4 | 33 |
| RES_DEEP (ohm.m) | 47.91 | 33 |
| RES_SHALLOW (ohm.m) | 43.84 | 33 |
| **Δ Res (Deep − Shallow)** | **4.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 0% Siltstone, 100% very fine Sandstone, 100% bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 203 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1850m: 1-7 klbs SANDSTONE:pl brn-v pl brn,trnsl,occ FLW: 255-270gpm
- **SANDSTONE** @ ~1870m: clr-trnsl,v pl brn,pred vf pl brn aggs,occ lse f-med qtz ,sbang- sbrnd,mod srt,wk sil cmt,mnr kaol mtx in vf aggs,fri aggs,com lse qtz,pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.1 | 32 |
| RES_DEEP (ohm.m) | 51.95 | 32 |
| RES_SHALLOW (ohm.m) | 46.66 | 32 |
| **Δ Res (Deep − Shallow)** | **5.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 0% Siltstone, 100% fine to medium Sandstone, 80% bright FLUOR in SST. TG 259U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% bri |
| Total Gas | 259 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: clr-trnsl,v pl brn,pred vf pl brn aggs,occ lse f-med qtz ,sbang- sbrnd,mod srt,wk sil cmt,mnr kaol mtx in vf aggs,fri aggs,com lse qtz,pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 33 |
| RES_DEEP (ohm.m) | 50.06 | 33 |
| RES_SHALLOW (ohm.m) | 45.80 | 33 |
| **Δ Res (Deep − Shallow)** | **4.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 0% Siltstone, 100% fine to medium Sandstone, 90% bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% bri |
| Total Gas | 250 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: clr-trnsl,v pl brn,pred vf pl brn aggs,occ lse f-med qtz ,sbang- sbrnd,mod srt,wk sil cmt,mnr kaol mtx in vf aggs,fri aggs,com lse qtz,pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~1890m: trnsl,clr,v lt brn,f-med, sbang-pred sbrnd,mod wl srt,wk sil cmt, com lt brn/off wh arg mtx,fri aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 33 |
| RES_DEEP (ohm.m) | 48.50 | 33 |
| RES_SHALLOW (ohm.m) | 44.14 | 33 |
| **Δ Res (Deep − Shallow)** | **4.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 0% Siltstone, 100% very fine to fine Sandstone, 90% bright FLUOR in SST. TG 280U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 90% bri |
| Total Gas | 280 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: clr-trnsl,v pl brn,pred vf pl brn aggs,occ lse f-med qtz ,sbang- sbrnd,mod srt,wk sil cmt,mnr kaol mtx in vf aggs,fri aggs,com lse qtz,pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~1890m: trnsl,clr,v lt brn,f-med, sbang-pred sbrnd,mod wl srt,wk sil cmt, com lt brn/off wh arg mtx,fri aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 33 |
| RES_DEEP (ohm.m) | 44.54 | 33 |
| RES_SHALLOW (ohm.m) | 39.78 | 33 |
| **Δ Res (Deep − Shallow)** | **4.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 275 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: clr-trnsl,v pl brn,pred vf pl brn aggs,occ lse f-med qtz ,sbang- sbrnd,mod srt,wk sil cmt,mnr kaol mtx in vf aggs,fri aggs,com lse qtz,pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~1890m: trnsl,clr,v lt brn,f-med, sbang-pred sbrnd,mod wl srt,wk sil cmt, com lt brn/off wh arg mtx,fri aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.3 | 33 |
| RES_DEEP (ohm.m) | 47.72 | 33 |
| RES_SHALLOW (ohm.m) | 41.45 | 33 |
| **Δ Res (Deep − Shallow)** | **6.27** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 275 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: trnsl,clr,v lt brn,f-med, sbang-pred sbrnd,mod wl srt,wk sil cmt, com lt brn/off wh arg mtx,fri aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 32 |
| RES_DEEP (ohm.m) | 48.51 | 32 |
| RES_SHALLOW (ohm.m) | 43.04 | 32 |
| **Δ Res (Deep − Shallow)** | **5.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri  |
| Total Gas | 250 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: trnsl,clr,v lt brn,f-med, sbang-pred sbrnd,mod wl srt,wk sil cmt, com lt brn/off wh arg mtx,fri aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 33 |
| RES_DEEP (ohm.m) | 41.89 | 33 |
| RES_SHALLOW (ohm.m) | 36.90 | 33 |
| **Δ Res (Deep − Shallow)** | **5.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 260U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 260 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: trnsl,clr,v lt brn,f-med, sbang-pred sbrnd,mod wl srt,wk sil cmt, com lt brn/off wh arg mtx,fri aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 42.08 | 33 |
| RES_SHALLOW (ohm.m) | 36.43 | 33 |
| **Δ Res (Deep − Shallow)** | **5.65** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 285U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri  |
| Total Gas | 285 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: trnsl,clr,v lt brn,f-med, sbang-pred sbrnd,mod wl srt,wk sil cmt, com lt brn/off wh arg mtx,fri aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.7 | 33 |
| RES_DEEP (ohm.m) | 42.00 | 33 |
| RES_SHALLOW (ohm.m) | 38.86 | 33 |
| **Δ Res (Deep − Shallow)** | **3.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1907.5 – 1915.0 m

**Sample Description (spreadsheet):** Sample 1910m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 278U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 278 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 49 |
| RES_DEEP (ohm.m) | 38.30 | 49 |
| RES_SHALLOW (ohm.m) | 35.99 | 49 |
| **Δ Res (Deep − Shallow)** | **2.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1915.0 – 1925.0 m

**Sample Description (spreadsheet):** Sample 1920m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 356U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 100% bri |
| Total Gas | 356 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 66 |
| RES_DEEP (ohm.m) | 36.25 | 66 |
| RES_SHALLOW (ohm.m) | 34.37 | 66 |
| **Δ Res (Deep − Shallow)** | **1.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1925.0 – 1935.0 m

**Sample Description (spreadsheet):** Sample 1930m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 344U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 344 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.9 | 65 |
| RES_DEEP (ohm.m) | 39.61 | 65 |
| RES_SHALLOW (ohm.m) | 36.14 | 65 |
| **Δ Res (Deep − Shallow)** | **3.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1935.0 – 1945.0 m

**Sample Description (spreadsheet):** Sample 1940m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 346U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 100% mod bri |
| Total Gas | 346 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.1 | 66 |
| RES_DEEP (ohm.m) | 43.46 | 66 |
| RES_SHALLOW (ohm.m) | 38.94 | 66 |
| **Δ Res (Deep − Shallow)** | **4.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1945.0 – 1955.0 m

**Sample Description (spreadsheet):** Sample 1950m: 10% Siltstone, 90% very fine to fine Sandstone, 90% moderately bright  FLUOR in SST. TG 395U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 90% mod bri  |
| Total Gas | 395 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.5 | 66 |
| RES_DEEP (ohm.m) | 34.75 | 66 |
| RES_SHALLOW (ohm.m) | 31.02 | 66 |
| **Δ Res (Deep − Shallow)** | **3.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1955.0 – 1965.0 m

**Sample Description (spreadsheet):** Sample 1960m: 10% Siltstone, 90% very fine to fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 389U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 389 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.9 | 65 |
| RES_DEEP (ohm.m) | 33.44 | 65 |
| RES_SHALLOW (ohm.m) | 31.12 | 65 |
| **Δ Res (Deep − Shallow)** | **2.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1965.0 – 1975.0 m

**Sample Description (spreadsheet):** Sample 1970m: 0% Siltstone, trace siderite in 100% medium to coarse Sandstone, 100% bright FLUOR in SST. TG 310U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 310 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v lt brn,trnsl,clr,vf-med, 71 / 5 / 4 / 8 / 12 tr crs,fr srt,sbang-sbrnd,mod strg sil cmt,com lt brn arg mtx,fri-mod hd,pr vis por,fluor. SURVEY @ 1996.7m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.7 | 66 |
| RES_DEEP (ohm.m) | 26.92 | 66 |
| RES_SHALLOW (ohm.m) | 24.09 | 66 |
| **Δ Res (Deep − Shallow)** | **2.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1975.0 – 1985.0 m

**Sample Description (spreadsheet):** Sample 1980m: 0% Siltstone, trace siderite in 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 326U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 326 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v lt brn,trnsl,clr,vf-med, 71 / 5 / 4 / 8 / 12 tr crs,fr srt,sbang-sbrnd,mod strg sil cmt,com lt brn arg mtx,fri-mod hd,pr vis por,fluor. SURVEY @ 1996.7m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.7 | 65 |
| RES_DEEP (ohm.m) | 24.20 | 65 |
| RES_SHALLOW (ohm.m) | 21.72 | 65 |
| **Δ Res (Deep − Shallow)** | **2.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1985.0 – 1995.0 m

**Sample Description (spreadsheet):** Sample 1990m: 60% Siltstone, 40% very fine to medium Sandstone, 60% moderately bright to bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 60% mod bri-bri |
| Total Gas | 195 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v lt brn,trnsl,clr,vf-med, 71 / 5 / 4 / 8 / 12 tr crs,fr srt,sbang-sbrnd,mod strg sil cmt,com lt brn arg mtx,fri-mod hd,pr vis por,fluor. SURVEY @ 1996.7m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 66 |
| RES_DEEP (ohm.m) | 24.05 | 66 |
| RES_SHALLOW (ohm.m) | 21.47 | 66 |
| **Δ Res (Deep − Shallow)** | **2.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1995.0 – 2005.0 m

**Sample Description (spreadsheet):** Sample 2000m: 20% Siltstone, 80% very fine to fine Sandstone, 80% moderately bright to bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 230 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v lt brn,trnsl,clr,vf-med, 71 / 5 / 4 / 8 / 12 tr crs,fr srt,sbang-sbrnd,mod strg sil cmt,com lt brn arg mtx,fri-mod hd,pr vis por,fluor. SURVEY @ 1996.7m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 66 |
| RES_DEEP (ohm.m) | 22.60 | 66 |
| RES_SHALLOW (ohm.m) | 20.71 | 66 |
| **Δ Res (Deep − Shallow)** | **1.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: 10% Siltstone, 90% very fine to fine Sandstone, 70% bright  FLUOR in SST. TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 70% bri  |
| Total Gas | 196 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v lt brn,trnsl,clr,vf-med, 71 / 5 / 4 / 8 / 12 tr crs,fr srt,sbang-sbrnd,mod strg sil cmt,com lt brn arg mtx,fri-mod hd,pr vis por,fluor. SURVEY @ 1996.7m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.4 | 65 |
| RES_DEEP (ohm.m) | 21.85 | 65 |
| RES_SHALLOW (ohm.m) | 20.60 | 65 |
| **Δ Res (Deep − Shallow)** | **1.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: 50% Siltstone, 50% very fine to fine Sandstone, 60% moderately bright FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 60% mod bri |
| Total Gas | 178 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 66 |
| RES_DEEP (ohm.m) | 21.37 | 66 |
| RES_SHALLOW (ohm.m) | 20.34 | 66 |
| **Δ Res (Deep − Shallow)** | **1.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: 10% Siltstone, 90% fine Sandstone, 70% moderately bright to bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f (max: F) |
| Fluorescence | 70% mod bri-bri |
| Total Gas | 207 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 66 |
| RES_DEEP (ohm.m) | 21.78 | 66 |
| RES_SHALLOW (ohm.m) | 20.60 | 66 |
| **Δ Res (Deep − Shallow)** | **1.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2035.0 – 2045.0 m

**Sample Description (spreadsheet):** Sample 2040m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 188 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 65 |
| RES_DEEP (ohm.m) | 29.17 | 65 |
| RES_SHALLOW (ohm.m) | 26.57 | 65 |
| **Δ Res (Deep − Shallow)** | **2.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright  FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri  |
| Total Gas | 267 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 66 |
| RES_DEEP (ohm.m) | 35.13 | 66 |
| RES_SHALLOW (ohm.m) | 33.12 | 66 |
| **Δ Res (Deep − Shallow)** | **2.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 392U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 392 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2090m: v lt grn,gry brn,trnsl, vf-f,wl srt,sbang-sbrnd,mod strg sil cmt,com off wh-lt brn arg mtx, fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~2110m: pl brn,trnsl,vf-f,sbang-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 65 |
| RES_DEEP (ohm.m) | 37.69 | 65 |
| RES_SHALLOW (ohm.m) | 34.71 | 65 |
| **Δ Res (Deep − Shallow)** | **2.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 347U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 347 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: pl brn,trnsl,vf-f,sbang-
- **SILTSTONE** @ ~2140m: pl gry-gry,vf aren,arg i/p,tr micmic,tr carb spks,frm, sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 66 |
| RES_DEEP (ohm.m) | 29.80 | 66 |
| RES_SHALLOW (ohm.m) | 26.36 | 66 |
| **Δ Res (Deep − Shallow)** | **3.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2125.0 – 2135.0 m

**Sample Description (spreadsheet):** Sample 2130m: 0% Siltstone, 100% very fine to fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 205U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 205 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: pl brn,trnsl,vf-f,sbang-
- **SILTSTONE** @ ~2140m: pl gry-gry,vf aren,arg i/p,tr micmic,tr carb spks,frm, sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 66 |
| RES_DEEP (ohm.m) | 21.34 | 66 |
| RES_SHALLOW (ohm.m) | 18.85 | 66 |
| **Δ Res (Deep − Shallow)** | **2.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2135.0 – 2145.0 m

**Sample Description (spreadsheet):** Sample 2140m: 10% Siltstone, 90% very fine to fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 180 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2140m: pl gry-gry,vf aren,arg i/p,tr micmic,tr carb spks,frm, sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 65 |
| RES_DEEP (ohm.m) | 17.12 | 65 |
| RES_SHALLOW (ohm.m) | 16.33 | 65 |
| **Δ Res (Deep − Shallow)** | **0.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2145.0 – 2155.0 m

**Sample Description (spreadsheet):** Sample 2150m: 10% Siltstone, 90% very fine to fine Sandstone, 80% moderately bright to bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 180 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2140m: pl gry-gry,vf aren,arg i/p,tr micmic,tr carb spks,frm, sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 66 |
| RES_DEEP (ohm.m) | 16.26 | 66 |
| RES_SHALLOW (ohm.m) | 15.87 | 66 |
| **Δ Res (Deep − Shallow)** | **0.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2155.0 – 2165.0 m

**Sample Description (spreadsheet):** Sample 2160m: 10% Siltstone, 90% very fine to fine Sandstone, 70% moderately bright to bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 70% mod bri-bri |
| Total Gas | 140 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2140m: pl gry-gry,vf aren,arg i/p,tr micmic,tr carb spks,frm, sbblky.
- **SANDSTONE** @ ~2180m: pl brn,occ pl gry,trnsl, vf-f,tr med,sbrnd,wl srt,mod sil cmt 76 / 5 / 4 / 6 / 9 mnr kaol mtx,fri-mod hd aggs,lse qtz, pr-v pr vis por,fluor. 2190 SURVEY @ 2189.1m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 66 |
| RES_DEEP (ohm.m) | 15.53 | 66 |
| RES_SHALLOW (ohm.m) | 15.00 | 66 |
| **Δ Res (Deep − Shallow)** | **0.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2165.0 – 2175.0 m

**Sample Description (spreadsheet):** Sample 2170m: 10% Siltstone, 90% very fine to fine Sandstone, 80% moderately bright to bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 150 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl brn,occ pl gry,trnsl, vf-f,tr med,sbrnd,wl srt,mod sil cmt 76 / 5 / 4 / 6 / 9 mnr kaol mtx,fri-mod hd aggs,lse qtz, pr-v pr vis por,fluor. 2190 SURVEY @ 2189.1m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 65 |
| RES_DEEP (ohm.m) | 15.69 | 65 |
| RES_SHALLOW (ohm.m) | 14.56 | 65 |
| **Δ Res (Deep − Shallow)** | **1.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2175.0 – 2185.0 m

**Sample Description (spreadsheet):** Sample 2180m: 10% Siltstone, 90% very fine to fine Sandstone, 70% moderately bright to bright FLUOR in SST. TG 139U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 70% mod bri-bri |
| Total Gas | 139 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl brn,occ pl gry,trnsl, vf-f,tr med,sbrnd,wl srt,mod sil cmt 76 / 5 / 4 / 6 / 9 mnr kaol mtx,fri-mod hd aggs,lse qtz, pr-v pr vis por,fluor. 2190 SURVEY @ 2189.1m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.0 | 66 |
| RES_DEEP (ohm.m) | 23.74 | 66 |
| RES_SHALLOW (ohm.m) | 20.40 | 66 |
| **Δ Res (Deep − Shallow)** | **3.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 5% Siltstone, 95% very fine to fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 220 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl brn,occ pl gry,trnsl, vf-f,tr med,sbrnd,wl srt,mod sil cmt 76 / 5 / 4 / 6 / 9 mnr kaol mtx,fri-mod hd aggs,lse qtz, pr-v pr vis por,fluor. 2190 SURVEY @ 2189.1m
- **SANDSTONE** @ ~2210m: v pl brn,pl gry,trnsl,clr vf-occ f,sbrnd,wl srt,mod sil cmt,mnr kaol mtx,frm aggs,10% clr,med-rr crs lse qtz,pr vis por in vf aggs,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 65 |
| RES_DEEP (ohm.m) | 32.35 | 65 |
| RES_SHALLOW (ohm.m) | 27.80 | 65 |
| **Δ Res (Deep − Shallow)** | **4.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 353U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 353 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl brn,occ pl gry,trnsl, vf-f,tr med,sbrnd,wl srt,mod sil cmt 76 / 5 / 4 / 6 / 9 mnr kaol mtx,fri-mod hd aggs,lse qtz, pr-v pr vis por,fluor. 2190 SURVEY @ 2189.1m
- **SANDSTONE** @ ~2210m: v pl brn,pl gry,trnsl,clr vf-occ f,sbrnd,wl srt,mod sil cmt,mnr kaol mtx,frm aggs,10% clr,med-rr crs lse qtz,pr vis por in vf aggs,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 66 |
| RES_DEEP (ohm.m) | 31.54 | 66 |
| RES_SHALLOW (ohm.m) | 28.23 | 66 |
| **Δ Res (Deep − Shallow)** | **3.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 250 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: v pl brn,pl gry,trnsl,clr vf-occ f,sbrnd,wl srt,mod sil cmt,mnr kaol mtx,frm aggs,10% clr,med-rr crs lse qtz,pr vis por in vf aggs,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 66 |
| RES_DEEP (ohm.m) | 30.41 | 66 |
| RES_SHALLOW (ohm.m) | 26.82 | 66 |
| **Δ Res (Deep − Shallow)** | **3.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 302U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 302 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: v pl brn,pl gry,trnsl,clr vf-occ f,sbrnd,wl srt,mod sil cmt,mnr kaol mtx,frm aggs,10% clr,med-rr crs lse qtz,pr vis por in vf aggs,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.7 | 65 |
| RES_DEEP (ohm.m) | 30.94 | 65 |
| RES_SHALLOW (ohm.m) | 26.27 | 65 |
| **Δ Res (Deep − Shallow)** | **4.67** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 400U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 400 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: v pl brn,pl gry,trnsl,clr vf-occ f,sbrnd,wl srt,mod sil cmt,mnr kaol mtx,frm aggs,10% clr,med-rr crs lse qtz,pr vis por in vf aggs,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 66 |
| RES_DEEP (ohm.m) | 34.35 | 66 |
| RES_SHALLOW (ohm.m) | 28.65 | 66 |
| **Δ Res (Deep − Shallow)** | **5.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 335U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 335 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 65 |
| RES_DEEP (ohm.m) | 36.12 | 65 |
| RES_SHALLOW (ohm.m) | 30.43 | 65 |
| **Δ Res (Deep − Shallow)** | **5.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 449U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 449 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.8 | 66 |
| RES_DEEP (ohm.m) | 39.44 | 66 |
| RES_SHALLOW (ohm.m) | 33.43 | 66 |
| **Δ Res (Deep − Shallow)** | **6.01** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 385U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 385 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 66 |
| RES_DEEP (ohm.m) | 43.68 | 66 |
| RES_SHALLOW (ohm.m) | 36.62 | 66 |
| **Δ Res (Deep − Shallow)** | **7.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 274U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 274 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr,trnsl,pred f,rr med- crs,sbang-sbrnd,wl srt,wk sil cmt,cln, com lse f qtz,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 65 |
| RES_DEEP (ohm.m) | 84.46 | 65 |
| RES_SHALLOW (ohm.m) | 77.79 | 65 |
| **Δ Res (Deep − Shallow)** | **6.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2275.0 – 2285.0 m

**Sample Description (spreadsheet):** Sample 2280m: 0% Siltstone, 100% fine to occasional medium Sandstone, 100% dim to moderately bright FLUOR in SST. TG 255U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-occ med (max: M) |
| Fluorescence | 100% dim-mod bri |
| Total Gas | 255 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr,trnsl,pred f,rr med- crs,sbang-sbrnd,wl srt,wk sil cmt,cln, com lse f qtz,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.1 | 66 |
| RES_DEEP (ohm.m) | 75.89 | 66 |
| RES_SHALLOW (ohm.m) | 72.46 | 66 |
| **Δ Res (Deep − Shallow)** | **3.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2285.0 – 2295.0 m

**Sample Description (spreadsheet):** Sample 2290m: 0% Siltstone, 100% fine to medium Sandstone, 100% dim to moderately bright FLUOR in SST. TG 300U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dim-mod bri |
| Total Gas | 300 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr,trnsl,pred f,rr med- crs,sbang-sbrnd,wl srt,wk sil cmt,cln, com lse f qtz,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.4 | 66 |
| RES_DEEP (ohm.m) | 71.39 | 66 |
| RES_SHALLOW (ohm.m) | 69.85 | 66 |
| **Δ Res (Deep − Shallow)** | **1.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2295.0 – 2305.0 m

**Sample Description (spreadsheet):** Sample 2300m: 0% Siltstone, 100% fine to occasional medium Sandstone, 100% dim to moderately bright FLUOR in SST. TG 245U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-occ med (max: M) |
| Fluorescence | 100% dim-mod bri |
| Total Gas | 245 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr,trnsl,pred f,rr med- crs,sbang-sbrnd,wl srt,wk sil cmt,cln, com lse f qtz,fr inf por,fluor.
- **SANDSTONE** @ ~2320m: clr,trnsl,f-occ med,sbang sbrnd,wk-nil sil cmt,cln,lse,f-med qtz grs,gd inf por,fluor. 0 0.5 1 4 14 2330 1 10 100 1K 14 18 28 1K 10K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.1 | 65 |
| RES_DEEP (ohm.m) | 66.86 | 65 |
| RES_SHALLOW (ohm.m) | 64.74 | 65 |
| **Δ Res (Deep − Shallow)** | **2.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2305.0 – 2315.0 m

**Sample Description (spreadsheet):** Sample 2310m: 0% Siltstone, 100% fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 234 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr,trnsl,pred f,rr med- crs,sbang-sbrnd,wl srt,wk sil cmt,cln, com lse f qtz,fr inf por,fluor.
- **SANDSTONE** @ ~2320m: clr,trnsl,f-occ med,sbang sbrnd,wk-nil sil cmt,cln,lse,f-med qtz grs,gd inf por,fluor. 0 0.5 1 4 14 2330 1 10 100 1K 14 18 28 1K 10K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.7 | 66 |
| RES_DEEP (ohm.m) | 66.64 | 66 |
| RES_SHALLOW (ohm.m) | 63.65 | 66 |
| **Δ Res (Deep − Shallow)** | **3.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 0% Siltstone, 100% fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 202 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,f-occ med,sbang sbrnd,wk-nil sil cmt,cln,lse,f-med qtz grs,gd inf por,fluor. 0 0.5 1 4 14 2330 1 10 100 1K 14 18 28 1K 10K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 43.1 | 65 |
| RES_DEEP (ohm.m) | 80.11 | 65 |
| RES_SHALLOW (ohm.m) | 76.69 | 65 |
| **Δ Res (Deep − Shallow)** | **3.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 240 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,f-occ med,sbang sbrnd,wk-nil sil cmt,cln,lse,f-med qtz grs,gd inf por,fluor. 0 0.5 1 4 14 2330 1 10 100 1K 14 18 28 1K 10K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 45.6 | 66 |
| RES_DEEP (ohm.m) | 77.62 | 66 |
| RES_SHALLOW (ohm.m) | 73.34 | 66 |
| **Δ Res (Deep − Shallow)** | **4.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 220 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,f-occ med,sbang sbrnd,wk-nil sil cmt,cln,lse,f-med qtz grs,gd inf por,fluor. 0 0.5 1 4 14 2330 1 10 100 1K 14 18 28 1K 10K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 50.7 | 66 |
| RES_DEEP (ohm.m) | 72.87 | 66 |
| RES_SHALLOW (ohm.m) | 71.05 | 66 |
| **Δ Res (Deep − Shallow)** | **1.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2345.0 – 2355.0 m

**Sample Description (spreadsheet):** Sample 2350m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 288U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 288 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 58.5 | 65 |
| RES_DEEP (ohm.m) | 69.46 | 65 |
| RES_SHALLOW (ohm.m) | 68.67 | 65 |
| **Δ Res (Deep − Shallow)** | **0.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2355.0 – 2365.0 m

**Sample Description (spreadsheet):** Sample 2360m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 231U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 231 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.4 | 66 |
| RES_DEEP (ohm.m) | 70.31 | 66 |
| RES_SHALLOW (ohm.m) | 68.51 | 66 |
| **Δ Res (Deep − Shallow)** | **1.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2365.0 – 2375.0 m

**Sample Description (spreadsheet):** Sample 2370m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 241 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~2390m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.0 | 65 |
| RES_DEEP (ohm.m) | 70.20 | 65 |
| RES_SHALLOW (ohm.m) | 67.94 | 65 |
| **Δ Res (Deep − Shallow)** | **2.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2380 m MD — Interval 2375.0 – 2385.0 m

**Sample Description (spreadsheet):** Sample 2380m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 244U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 244 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~2390m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.5 | 66 |
| RES_DEEP (ohm.m) | 70.38 | 66 |
| RES_SHALLOW (ohm.m) | 67.26 | 66 |
| **Δ Res (Deep − Shallow)** | **3.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2390 m MD — Interval 2385.0 – 2395.0 m

**Sample Description (spreadsheet):** Sample 2390m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 250 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~2390m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.4 | 66 |
| RES_DEEP (ohm.m) | 71.20 | 66 |
| RES_SHALLOW (ohm.m) | 66.06 | 66 |
| **Δ Res (Deep − Shallow)** | **5.14** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2395.0 – 2405.0 m

**Sample Description (spreadsheet):** Sample 2400m: 0% Siltstone, trace siderite in 100% fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 279U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 279 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2390m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.0 | 65 |
| RES_DEEP (ohm.m) | 73.79 | 65 |
| RES_SHALLOW (ohm.m) | 68.43 | 65 |
| **Δ Res (Deep − Shallow)** | **5.36** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 267 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2390m: trnsl,clr,f-pred med,mod wl srt,sbang-sbrnd,nil vis cmt & mtx, lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.9 | 66 |
| RES_DEEP (ohm.m) | 71.17 | 66 |
| RES_SHALLOW (ohm.m) | 65.28 | 66 |
| **Δ Res (Deep − Shallow)** | **5.89** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 298U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 298 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.8 | 66 |
| RES_DEEP (ohm.m) | 68.09 | 66 |
| RES_SHALLOW (ohm.m) | 61.45 | 66 |
| **Δ Res (Deep − Shallow)** | **6.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright  FLUOR in SST. TG 287U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 100% bri  |
| Total Gas | 287 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.9 | 65 |
| RES_DEEP (ohm.m) | 57.59 | 65 |
| RES_SHALLOW (ohm.m) | 51.81 | 65 |
| **Δ Res (Deep − Shallow)** | **5.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 329U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri  |
| Total Gas | 329 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: trnsl,clr,vf-f,mod wl srt, sbang-sbrnd,nil vis cmt & mtx,lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 66 |
| RES_DEEP (ohm.m) | 52.66 | 66 |
| RES_SHALLOW (ohm.m) | 47.13 | 66 |
| **Δ Res (Deep − Shallow)** | **5.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri  |
| Total Gas | 203 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: trnsl,clr,vf-f,mod wl srt, sbang-sbrnd,nil vis cmt & mtx,lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 65 |
| RES_DEEP (ohm.m) | 52.71 | 65 |
| RES_SHALLOW (ohm.m) | 46.07 | 65 |
| **Δ Res (Deep − Shallow)** | **6.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright  FLUOR in SST. TG 228U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri  |
| Total Gas | 228 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: trnsl,clr,vf-f,mod wl srt, sbang-sbrnd,nil vis cmt & mtx,lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.7 | 66 |
| RES_DEEP (ohm.m) | 47.54 | 66 |
| RES_SHALLOW (ohm.m) | 43.43 | 66 |
| **Δ Res (Deep − Shallow)** | **4.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 221U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 221 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: trnsl,clr,vf-f,mod wl srt, sbang-sbrnd,nil vis cmt & mtx,lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.7 | 66 |
| RES_DEEP (ohm.m) | 48.14 | 66 |
| RES_SHALLOW (ohm.m) | 44.45 | 66 |
| **Δ Res (Deep − Shallow)** | **3.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 194U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 194 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: trnsl,clr,vf-f,mod wl srt, sbang-sbrnd,nil vis cmt & mtx,lse cln qtz grs,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.5 | 65 |
| RES_DEEP (ohm.m) | 49.47 | 65 |
| RES_SHALLOW (ohm.m) | 46.73 | 65 |
| **Δ Res (Deep − Shallow)** | **2.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 180 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 66 |
| RES_DEEP (ohm.m) | 55.75 | 66 |
| RES_SHALLOW (ohm.m) | 53.83 | 66 |
| **Δ Res (Deep − Shallow)** | **1.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 231U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 231 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.3 | 66 |
| RES_DEEP (ohm.m) | 55.77 | 66 |
| RES_SHALLOW (ohm.m) | 54.05 | 66 |
| **Δ Res (Deep − Shallow)** | **1.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 208U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 208 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.0 | 65 |
| RES_DEEP (ohm.m) | 54.67 | 65 |
| RES_SHALLOW (ohm.m) | 52.28 | 65 |
| **Δ Res (Deep − Shallow)** | **2.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2515.0 – 2525.0 m

**Sample Description (spreadsheet):** Sample 2520m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 312U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 312 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,vf-crs,ped med, pr srt,sbang-sbrnd,nil vis cmt & mtx, cln qtz grs,gd inf por,fluor. 2550 FLUORESCENCE:2550m-2590m (1257) 70%-100% of SST,bri-bri yel/grn

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.5 | 66 |
| RES_DEEP (ohm.m) | 54.07 | 66 |
| RES_SHALLOW (ohm.m) | 51.81 | 66 |
| **Δ Res (Deep − Shallow)** | **2.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2525.0 – 2535.0 m

**Sample Description (spreadsheet):** Sample 2530m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 240 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,vf-crs,ped med, pr srt,sbang-sbrnd,nil vis cmt & mtx, cln qtz grs,gd inf por,fluor. 2550 FLUORESCENCE:2550m-2590m (1257) 70%-100% of SST,bri-bri yel/grn

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.6 | 65 |
| RES_DEEP (ohm.m) | 50.90 | 65 |
| RES_SHALLOW (ohm.m) | 47.69 | 65 |
| **Δ Res (Deep − Shallow)** | **3.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2535.0 – 2545.0 m

**Sample Description (spreadsheet):** Sample 2540m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 243U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri  |
| Total Gas | 243 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,vf-crs,ped med, pr srt,sbang-sbrnd,nil vis cmt & mtx, cln qtz grs,gd inf por,fluor. 2550 FLUORESCENCE:2550m-2590m (1257) 70%-100% of SST,bri-bri yel/grn

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 66 |
| RES_DEEP (ohm.m) | 49.87 | 66 |
| RES_SHALLOW (ohm.m) | 45.98 | 66 |
| **Δ Res (Deep − Shallow)** | **3.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2545.0 – 2555.0 m

**Sample Description (spreadsheet):** Sample 2550m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri  |
| Total Gas | 230 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,vf-crs,ped med, pr srt,sbang-sbrnd,nil vis cmt & mtx, cln qtz grs,gd inf por,fluor. 2550 FLUORESCENCE:2550m-2590m (1257) 70%-100% of SST,bri-bri yel/grn
- **SILTSTONE** @ ~2570m: med dk gry,v dk gry blk, calc i/p,tr micmic,mod hd,sbblky- sbfiss. SURVEY @ 2572.7m INC: 89.3° AZI: 144.7°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.8 | 66 |
| RES_DEEP (ohm.m) | 47.84 | 66 |
| RES_SHALLOW (ohm.m) | 44.32 | 66 |
| **Δ Res (Deep − Shallow)** | **3.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2555.0 – 2565.0 m

**Sample Description (spreadsheet):** Sample 2560m: 10% Siltstone, 90% very fine to fine Sandstone, 100% bright  FLUOR in SST. TG 221U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri  |
| Total Gas | 221 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,vf-crs,ped med, pr srt,sbang-sbrnd,nil vis cmt & mtx, cln qtz grs,gd inf por,fluor. 2550 FLUORESCENCE:2550m-2590m (1257) 70%-100% of SST,bri-bri yel/grn
- **SILTSTONE** @ ~2570m: med dk gry,v dk gry blk, calc i/p,tr micmic,mod hd,sbblky- sbfiss. SURVEY @ 2572.7m INC: 89.3° AZI: 144.7°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.4 | 65 |
| RES_DEEP (ohm.m) | 45.40 | 65 |
| RES_SHALLOW (ohm.m) | 41.49 | 65 |
| **Δ Res (Deep − Shallow)** | **3.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2565.0 – 2575.0 m

**Sample Description (spreadsheet):** Sample 2570m: 20% Siltstone, 80% fine to coarse Sandstone, 70% moderately bright to bright FLUOR in SST. TG 228U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 70% mod bri-bri |
| Total Gas | 228 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: med dk gry,v dk gry blk, calc i/p,tr micmic,mod hd,sbblky- sbfiss. SURVEY @ 2572.7m INC: 89.3° AZI: 144.7°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 66 |
| RES_DEEP (ohm.m) | 43.58 | 66 |
| RES_SHALLOW (ohm.m) | 38.45 | 66 |
| **Δ Res (Deep − Shallow)** | **5.13** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2575.0 – 2585.0 m

**Sample Description (spreadsheet):** Sample 2580m: 20% Siltstone, 80% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri  |
| Total Gas | 156 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: med dk gry,v dk gry blk, calc i/p,tr micmic,mod hd,sbblky- sbfiss. SURVEY @ 2572.7m INC: 89.3° AZI: 144.7°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.5 | 65 |
| RES_DEEP (ohm.m) | 42.37 | 65 |
| RES_SHALLOW (ohm.m) | 36.71 | 65 |
| **Δ Res (Deep − Shallow)** | **5.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2585.0 – 2595.0 m

**Sample Description (spreadsheet):** Sample 2590m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright  FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri  |
| Total Gas | 270 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: med dk gry,v dk gry blk, calc i/p,tr micmic,mod hd,sbblky- sbfiss. SURVEY @ 2572.7m INC: 89.3° AZI: 144.7°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 66 |
| RES_DEEP (ohm.m) | 41.34 | 66 |
| RES_SHALLOW (ohm.m) | 37.25 | 66 |
| **Δ Res (Deep − Shallow)** | **4.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2600 m MD — Interval 2595.0 – 2605.0 m

**Sample Description (spreadsheet):** Sample 2600m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 207 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 66 |
| RES_DEEP (ohm.m) | 41.07 | 66 |
| RES_SHALLOW (ohm.m) | 39.72 | 66 |
| **Δ Res (Deep − Shallow)** | **1.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2605.0 – 2615.0 m

**Sample Description (spreadsheet):** Sample 2610m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 135 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 65 |
| RES_DEEP (ohm.m) | 39.58 | 65 |
| RES_SHALLOW (ohm.m) | 38.25 | 65 |
| **Δ Res (Deep − Shallow)** | **1.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2615.0 – 2625.0 m

**Sample Description (spreadsheet):** Sample 2620m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 193U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 193 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.6 | 66 |
| RES_DEEP (ohm.m) | 35.19 | 66 |
| RES_SHALLOW (ohm.m) | 34.20 | 66 |
| **Δ Res (Deep − Shallow)** | **0.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2625.0 – 2635.0 m

**Sample Description (spreadsheet):** Sample 2630m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 150 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.9 | 66 |
| RES_DEEP (ohm.m) | 33.53 | 66 |
| RES_SHALLOW (ohm.m) | 32.14 | 66 |
| **Δ Res (Deep − Shallow)** | **1.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2640 m MD — Interval 2635.0 – 2645.0 m

**Sample Description (spreadsheet):** Sample 2640m: 0% Siltstone, 100% very fine to medium Sandstone, 90% bright FLUOR in SST. TG 182U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90% bri |
| Total Gas | 182 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.1 | 65 |
| RES_DEEP (ohm.m) | 33.87 | 65 |
| RES_SHALLOW (ohm.m) | 32.90 | 65 |
| **Δ Res (Deep − Shallow)** | **0.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2650 m MD — Interval 2645.0 – 2655.0 m

**Sample Description (spreadsheet):** Sample 2650m: 0% Siltstone, 100% very fine to medium Sandstone, 90% bright FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90% bri |
| Total Gas | 186 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: v pl brn,off wh,trnsl,clr, pred vf aggs,occ lse med-rr crs qtz, sbang-sbrnd,mod srt,mod strg sil cmt, mnr kaol mtx in vf aggs,cln,mod hd, lse med-occ crs,v pr vis por,mod inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.2 | 66 |
| RES_DEEP (ohm.m) | 37.59 | 66 |
| RES_SHALLOW (ohm.m) | 36.48 | 66 |
| **Δ Res (Deep − Shallow)** | **1.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2660 m MD — Interval 2655.0 – 2665.0 m

**Sample Description (spreadsheet):** Sample 2660m: 0% Siltstone, 100% very fine to medium Sandstone, 90% bright FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90% bri |
| Total Gas | 154 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: v pl brn,off wh,trnsl,clr, pred vf aggs,occ lse med-rr crs qtz, sbang-sbrnd,mod srt,mod strg sil cmt, mnr kaol mtx in vf aggs,cln,mod hd, lse med-occ crs,v pr vis por,mod inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 65 |
| RES_DEEP (ohm.m) | 40.24 | 65 |
| RES_SHALLOW (ohm.m) | 39.25 | 65 |
| **Δ Res (Deep − Shallow)** | **0.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2665.0 – 2675.0 m

**Sample Description (spreadsheet):** Sample 2670m: 0% Siltstone, 100% medium to coarse Sandstone, 80% bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 80% bri |
| Total Gas | 172 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: v pl brn,off wh,trnsl,clr, pred vf aggs,occ lse med-rr crs qtz, sbang-sbrnd,mod srt,mod strg sil cmt, mnr kaol mtx in vf aggs,cln,mod hd, lse med-occ crs,v pr vis por,mod inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 66 |
| RES_DEEP (ohm.m) | 39.80 | 66 |
| RES_SHALLOW (ohm.m) | 38.68 | 66 |
| **Δ Res (Deep − Shallow)** | **1.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 190 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: v pl brn,off wh,trnsl,clr, pred vf aggs,occ lse med-rr crs qtz, sbang-sbrnd,mod srt,mod strg sil cmt, mnr kaol mtx in vf aggs,cln,mod hd, lse med-occ crs,v pr vis por,mod inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.3 | 66 |
| RES_DEEP (ohm.m) | 33.61 | 66 |
| RES_SHALLOW (ohm.m) | 30.93 | 66 |
| **Δ Res (Deep − Shallow)** | **2.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 142U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 142 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: v pl brn,off wh,trnsl,clr, pred vf aggs,occ lse med-rr crs qtz, sbang-sbrnd,mod srt,mod strg sil cmt, mnr kaol mtx in vf aggs,cln,mod hd, lse med-occ crs,v pr vis por,mod inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.5 | 65 |
| RES_DEEP (ohm.m) | 32.63 | 65 |
| RES_SHALLOW (ohm.m) | 29.97 | 65 |
| **Δ Res (Deep − Shallow)** | **2.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 213U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 213 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.6 | 66 |
| RES_DEEP (ohm.m) | 30.76 | 66 |
| RES_SHALLOW (ohm.m) | 29.28 | 66 |
| **Δ Res (Deep − Shallow)** | **1.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 240 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 65 |
| RES_DEEP (ohm.m) | 32.01 | 65 |
| RES_SHALLOW (ohm.m) | 31.27 | 65 |
| **Δ Res (Deep − Shallow)** | **0.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 0% Siltstone, 100% very fine to  to medium Sandstone, 100% bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf--med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 201 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 66 |
| RES_DEEP (ohm.m) | 30.33 | 66 |
| RES_SHALLOW (ohm.m) | 29.71 | 66 |
| **Δ Res (Deep − Shallow)** | **0.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 183 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 66 |
| RES_DEEP (ohm.m) | 28.75 | 66 |
| RES_SHALLOW (ohm.m) | 27.52 | 66 |
| **Δ Res (Deep − Shallow)** | **1.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 0% Siltstone, 100% fine to medium Sandstone, 80% bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% bri |
| Total Gas | 185 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.4 | 65 |
| RES_DEEP (ohm.m) | 27.90 | 65 |
| RES_SHALLOW (ohm.m) | 25.86 | 65 |
| **Δ Res (Deep − Shallow)** | **2.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 0% Siltstone, 100% fine to medium Sandstone, 90% bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% bri |
| Total Gas | 220 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2770m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med 2780 qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 66 |
| RES_DEEP (ohm.m) | 27.27 | 66 |
| RES_SHALLOW (ohm.m) | 24.50 | 66 |
| **Δ Res (Deep − Shallow)** | **2.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 0% Siltstone, 100% very fine to medium Sandstone, 90% moderately bright to bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 160 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2770m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med 2780 qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.1 | 66 |
| RES_DEEP (ohm.m) | 26.08 | 66 |
| RES_SHALLOW (ohm.m) | 23.09 | 66 |
| **Δ Res (Deep − Shallow)** | **2.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 152U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 152 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2770m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med 2780 qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.
- **SANDSTONE** @ ~2790m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr 84 / 5 / 3 / 3 / 5 kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.2 | 65 |
| RES_DEEP (ohm.m) | 24.46 | 65 |
| RES_SHALLOW (ohm.m) | 22.04 | 65 |
| **Δ Res (Deep − Shallow)** | **2.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 172 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2770m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med 2780 qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.
- **SANDSTONE** @ ~2790m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr 84 / 5 / 3 / 3 / 5 kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 66 |
| RES_DEEP (ohm.m) | 23.98 | 66 |
| RES_SHALLOW (ohm.m) | 21.70 | 66 |
| **Δ Res (Deep − Shallow)** | **2.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 190 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2770m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med 2780 qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.
- **SANDSTONE** @ ~2790m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr 84 / 5 / 3 / 3 / 5 kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 65 |
| RES_DEEP (ohm.m) | 23.82 | 65 |
| RES_SHALLOW (ohm.m) | 21.55 | 65 |
| **Δ Res (Deep − Shallow)** | **2.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 192 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2790m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr 84 / 5 / 3 / 3 / 5 kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.
- **SANDSTONE** @ ~2810m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 66 |
| RES_DEEP (ohm.m) | 24.06 | 66 |
| RES_SHALLOW (ohm.m) | 21.72 | 66 |
| **Δ Res (Deep − Shallow)** | **2.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 0% Siltstone, 100% very fine to medium Sandstone, 90% moderately bright to bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 195 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2790m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr 84 / 5 / 3 / 3 / 5 kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.
- **SANDSTONE** @ ~2810m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 53 |
| RES_DEEP (ohm.m) | 25.74 | 66 |
| RES_SHALLOW (ohm.m) | 23.35 | 66 |
| **Δ Res (Deep − Shallow)** | **2.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2815.0 – 2822.5 m

**Sample Description (spreadsheet):** Sample 2820m: 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 154 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 27.73 | 5 |
| RES_SHALLOW (ohm.m) | 25.33 | 5 |
| **Δ Res (Deep − Shallow)** | **2.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2825 m MD — Interval 2822.5 – 2827.5 m

**Sample Description (spreadsheet):** Sample 2825m: 0% Siltstone, 100% very fine to medium Sandstone, 90% moderately bright to bright FLUOR in SST. TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 183 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: v pl brn,trnsl,off wh-clr, 30-80% vf aggs,occ com-lse f-mnr med qtz,sbang-sbrnd,mod srt,mod sil cmt,mnr kaol-slty mtx,cln i/p,pr vis-mod inf por, fluor.

**Wireline Log Averages:** _No log data in interval_

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 126 |
| Depth range | 1695 – 2825 m |
| Avg % Sandstone | 95.9% |
| Avg Δ Res (Deep−Shallow) | 4.83 ohm.m |
| Max Δ Res | 21.66 ohm.m |
| Min Δ Res | 0.39 ohm.m |
| Mudlog matches | 93 / 126 |
