# MCKINLAY 13 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-13 00:56 UTC  
**Well:** MCKINLAY 13 (MCKINLAY 13)  
**TD:** 3229 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 13_Mudlog_Spud-10593ft_Final Field.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `McKinlay 13_Litho_Spud-10593ft.ASC`, `McKinlay 13_Drill-Gas_Spud-10593ft.ASC` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_13` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_13_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1831.54 | DC30.xlsx |
| McKinlay Member (shallowest) | 1831.54 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1831.54 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2412.75 m MD
- 2658.86 m MD
- 2891.86 m MD
- 3033.11 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 2390.91 | 2389.45 | 1.46 | 2412.75 | 21.8 |
| 2602.06 | 2599.15 | 2.91 | 2658.86 | 56.8 |
| 2872.93 | 2874.38 | 1.45 | 2891.86 | 18.9 |
| 2993.80 | 2993.80 | 0.00 | 3033.11 | 39.3 |

**McKinlay Member analysis window:** 1831.5 – 3228.7 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 2391–2413 m (overburden), 2602–2659 m (overburden), 2873–2892 m (overburden), 2994–3033 m (overburden)

**Samples in McKinlay Member:** 247 of 279 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 32

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 13 → `MCKINLAY 13` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes. **Fluorescence %** from mudlog PDF text blocks (`FLUOR:` / `FLUORESCENCE:` ranges, ft→m); upper bound of each range used (e.g. 60–90% → 90%), not the midpoint. Gaps ≤55 m between consecutive `FLUOR:` blocks are bridged; intervals outside all blocks/zones are set to 0%.
9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 345.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 345.64375 U |
| mTVDss | -1194.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1832m: 78-103 SANDSTONE:off wh,clr,trnsl, FLW:501-503 gpm 6020 srt,sbang-sbrnd,mod strg sil cmt, 79 / 6 / 4 / 5 / 6 449 U mnr off wh arg mtx,occ mic flks, pred cln lse grs,mnr f grn aggs,
- **SANDSTONE** @ ~1841m: clr,trnsl,opq, 6050 off wh,med-crs,pr srt,sbang-sbrnd, tr wk-mod strg sil cmt,mnr off wh arg mtx,occ mic flks,pred cln lse qtz grs,fri-mod hd aggs,gd-fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 33 |
| RES_DEEP (ohm.m) | 36.32 | 33 |
| RES_SHALLOW (ohm.m) | 25.96 | 33 |
| **Δ Res (Deep − Shallow)** | **10.36** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% Sandstone (litho ASCII aggregate) TG 175.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 175.35625 U |
| mTVDss | -1195.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1832m: 78-103 SANDSTONE:off wh,clr,trnsl, FLW:501-503 gpm 6020 srt,sbang-sbrnd,mod strg sil cmt, 79 / 6 / 4 / 5 / 6 449 U mnr off wh arg mtx,occ mic flks, pred cln lse grs,mnr f grn aggs,
- **SANDSTONE** @ ~1841m: clr,trnsl,opq, 6050 off wh,med-crs,pr srt,sbang-sbrnd, tr wk-mod strg sil cmt,mnr off wh arg mtx,occ mic flks,pred cln lse qtz grs,fri-mod hd aggs,gd-fr vis
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 32 |
| RES_DEEP (ohm.m) | 35.57 | 32 |
| RES_SHALLOW (ohm.m) | 24.25 | 32 |
| **Δ Res (Deep − Shallow)** | **11.32** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 100% Sandstone (litho ASCII aggregate) TG 151.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 151.70000000000002 U |
| mTVDss | -1195.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1832m: 78-103 SANDSTONE:off wh,clr,trnsl, FLW:501-503 gpm 6020 srt,sbang-sbrnd,mod strg sil cmt, 79 / 6 / 4 / 5 / 6 449 U mnr off wh arg mtx,occ mic flks, pred cln lse grs,mnr f grn aggs,
- **SANDSTONE** @ ~1841m: clr,trnsl,opq, 6050 off wh,med-crs,pr srt,sbang-sbrnd, tr wk-mod strg sil cmt,mnr off wh arg mtx,occ mic flks,pred cln lse qtz grs,fri-mod hd aggs,gd-fr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 33 |
| RES_DEEP (ohm.m) | 34.07 | 33 |
| RES_SHALLOW (ohm.m) | 27.19 | 33 |
| **Δ Res (Deep − Shallow)** | **6.88** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 100% Sandstone (litho ASCII aggregate) TG 139.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri-bri yel grn evn fluor |
| Total Gas | 139.375 U |
| mTVDss | -1195.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1841m: clr,trnsl,opq, 6050 off wh,med-crs,pr srt,sbang-sbrnd, tr wk-mod strg sil cmt,mnr off wh arg mtx,occ mic flks,pred cln lse qtz grs,fri-mod hd aggs,gd-fr vis
- **SANDSTONE** @ ~1853m: clr-trnsl,lt trnsl brn,rr off wh,f-med,occ crs-v crs, pr srt,ang-occ sbrnd,wk-mod strg sil cmt,occ off wh arg mtx,mnr pyr nods,rr qtz ovgths,mnr slty lams,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 30.99 | 33 |
| RES_SHALLOW (ohm.m) | 21.65 | 33 |
| **Δ Res (Deep − Shallow)** | **9.33** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 100% Sandstone (litho ASCII aggregate) TG 85.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 85.31176470588235 U |
| mTVDss | -1195.19 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1841m: clr,trnsl,opq, 6050 off wh,med-crs,pr srt,sbang-sbrnd, tr wk-mod strg sil cmt,mnr off wh arg mtx,occ mic flks,pred cln lse qtz grs,fri-mod hd aggs,gd-fr vis
- **SANDSTONE** @ ~1853m: clr-trnsl,lt trnsl brn,rr off wh,f-med,occ crs-v crs, pr srt,ang-occ sbrnd,wk-mod strg sil cmt,occ off wh arg mtx,mnr pyr nods,rr qtz ovgths,mnr slty lams,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 29.53 | 33 |
| RES_SHALLOW (ohm.m) | 20.68 | 33 |
| **Δ Res (Deep − Shallow)** | **8.85** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 100% Sandstone (litho ASCII aggregate) TG 62.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 62.849999999999994 U |
| mTVDss | -1195.19 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1853m: clr-trnsl,lt trnsl brn,rr off wh,f-med,occ crs-v crs, pr srt,ang-occ sbrnd,wk-mod strg sil cmt,occ off wh arg mtx,mnr pyr nods,rr qtz ovgths,mnr slty lams,
- **SANDSTONE** @ ~1859m: clr-trnsl,lt trnsl brn,rr off wh,f-med,rr crs,pr srt, ang-occ sbrnd,wk-mod strg sil cmt, occ off wh arg mtx,mnr pyr nods, 6110 72 / 6 / 5 / 7 / 10 82 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.9 | 33 |
| RES_DEEP (ohm.m) | 26.50 | 33 |
| RES_SHALLOW (ohm.m) | 19.89 | 33 |
| **Δ Res (Deep − Shallow)** | **6.61** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 100% Sandstone (litho ASCII aggregate) TG 85.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri-bri yel grn evn fluor |
| Total Gas | 85.35 U |
| mTVDss | -1195.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1853m: clr-trnsl,lt trnsl brn,rr off wh,f-med,occ crs-v crs, pr srt,ang-occ sbrnd,wk-mod strg sil cmt,occ off wh arg mtx,mnr pyr nods,rr qtz ovgths,mnr slty lams,
- **SANDSTONE** @ ~1859m: clr-trnsl,lt trnsl brn,rr off wh,f-med,rr crs,pr srt, ang-occ sbrnd,wk-mod strg sil cmt, occ off wh arg mtx,mnr pyr nods, 6110 72 / 6 / 5 / 7 / 10 82 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.7 | 32 |
| RES_DEEP (ohm.m) | 17.99 | 32 |
| RES_SHALLOW (ohm.m) | 13.96 | 32 |
| **Δ Res (Deep − Shallow)** | **4.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 100% Sandstone (litho ASCII aggregate) TG 204.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri-bri yel grn evn fluor |
| Total Gas | 204.31764705882352 U |
| mTVDss | -1195.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1853m: clr-trnsl,lt trnsl brn,rr off wh,f-med,occ crs-v crs, pr srt,ang-occ sbrnd,wk-mod strg sil cmt,occ off wh arg mtx,mnr pyr nods,rr qtz ovgths,mnr slty lams,
- **SANDSTONE** @ ~1859m: clr-trnsl,lt trnsl brn,rr off wh,f-med,rr crs,pr srt, ang-occ sbrnd,wk-mod strg sil cmt, occ off wh arg mtx,mnr pyr nods, 6110 72 / 6 / 5 / 7 / 10 82 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.2 | 33 |
| RES_DEEP (ohm.m) | 16.58 | 33 |
| RES_SHALLOW (ohm.m) | 13.70 | 33 |
| **Δ Res (Deep − Shallow)** | **2.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 100% Sandstone (litho ASCII aggregate) TG 228.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri grn yel sptd-ptchy fluor |
| Total Gas | 228.8235294117647 U |
| mTVDss | -1195.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1859m: clr-trnsl,lt trnsl brn,rr off wh,f-med,rr crs,pr srt, ang-occ sbrnd,wk-mod strg sil cmt, occ off wh arg mtx,mnr pyr nods, 6110 72 / 6 / 5 / 7 / 10 82 U
- **SILTSTONE** @ ~1868m: med-lt brn,med brn gry,com arg,occ sil,micmic i/p,hd- occ v hd,sbblky,mnr blky-sbfiss. (4071)
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.6 | 33 |
| RES_DEEP (ohm.m) | 17.72 | 33 |
| RES_SHALLOW (ohm.m) | 13.96 | 33 |
| **Δ Res (Deep − Shallow)** | **3.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 100% Sandstone (litho ASCII aggregate) TG 267.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 60.0% mod bri grn yel sptd-ptchy fluor |
| Total Gas | 267.85 U |
| mTVDss | -1194.96 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1868m: med-lt brn,med brn gry,com arg,occ sil,micmic i/p,hd- occ v hd,sbblky,mnr blky-sbfiss. (4071)
- **SANDSTONE** @ ~1871m: lt trnsl brn,clr- trnsl i/p,f-med,rr crs,mod srt, sbang,occ ang-sbrnd,mod sil cmt, occ off wh-lt brn gry arg mtx,occ mic flks,fri-mod hd,rr lse,pr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.8 | 33 |
| RES_DEEP (ohm.m) | 17.56 | 33 |
| RES_SHALLOW (ohm.m) | 14.52 | 33 |
| **Δ Res (Deep − Shallow)** | **3.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 100% Sandstone (litho ASCII aggregate) TG 262.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 60.0% mod bri grn yel sptd-ptchy fluor |
| Total Gas | 262.31875 U |
| mTVDss | -1194.90 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1868m: med-lt brn,med brn gry,com arg,occ sil,micmic i/p,hd- occ v hd,sbblky,mnr blky-sbfiss. (4071)
- **SANDSTONE** @ ~1871m: lt trnsl brn,clr- trnsl i/p,f-med,rr crs,mod srt, sbang,occ ang-sbrnd,mod sil cmt, occ off wh-lt brn gry arg mtx,occ mic flks,fri-mod hd,rr lse,pr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 33 |
| RES_DEEP (ohm.m) | 16.65 | 33 |
| RES_SHALLOW (ohm.m) | 14.15 | 33 |
| **Δ Res (Deep − Shallow)** | **2.50** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 100% Sandstone (litho ASCII aggregate) TG 266.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 60.0% mod bri grn yel sptd-ptchy fluor |
| Total Gas | 266.03125 U |
| mTVDss | -1194.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1878m: med brn,occ lt- dk brn,med brn gry,arg,rr aren, micmic,hd,sbblky,occ blky. 73 / 6 / 5 / 7 / 9 310 U
- **SANDSTONE** @ ~1881m: lt trnsl brn,clr- trnsl i/p,f-med,rr crs,mod srt, 6180 sbang,occ ang-sbrnd,mod sil cmt, occ off wh-lt brn gry arg mtx,occ mic flks,fri-mod hd,rr lse,pr vis
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.4 | 32 |
| RES_DEEP (ohm.m) | 16.95 | 32 |
| RES_SHALLOW (ohm.m) | 14.18 | 32 |
| **Δ Res (Deep − Shallow)** | **2.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 100% Sandstone (litho ASCII aggregate) TG 202.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 60.0% mod bri grn yel sptd-ptchy fluor |
| Total Gas | 202.31176470588235 U |
| mTVDss | -1194.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1878m: med brn,occ lt- dk brn,med brn gry,arg,rr aren, micmic,hd,sbblky,occ blky. 73 / 6 / 5 / 7 / 9 310 U
- **SANDSTONE** @ ~1881m: lt trnsl brn,clr- trnsl i/p,f-med,rr crs,mod srt, 6180 sbang,occ ang-sbrnd,mod sil cmt, occ off wh-lt brn gry arg mtx,occ mic flks,fri-mod hd,rr lse,pr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.0 | 33 |
| RES_DEEP (ohm.m) | 17.84 | 33 |
| RES_SHALLOW (ohm.m) | 14.37 | 33 |
| **Δ Res (Deep − Shallow)** | **3.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 100% Sandstone (litho ASCII aggregate) TG 128.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 60.0% mod bri grn yel sptd-ptchy fluor |
| Total Gas | 128.86249999999998 U |
| mTVDss | -1194.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1887m: lt-med gry,med brn- 14 18 28 brn gry,arg-occ aren,tr carb spks, micmic,mod hd-hd,sbblky-blky.
- **SANDSTONE** @ ~1896m: lt trnsl brn,clr- trnsl,f-occ vf,wl srt,sbang-sbrnd, wk-mod sil cmt,occ lt brn arg mtx, occ mic flks,fri,lse,pr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 20.06 | 33 |
| RES_SHALLOW (ohm.m) | 16.13 | 33 |
| **Δ Res (Deep − Shallow)** | **3.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 100% Sandstone (litho ASCII aggregate) TG 152.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 60.0% mod bri yel grn evn fluor |
| Total Gas | 152.79999999999998 U |
| mTVDss | -1194.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1896m: lt trnsl brn,clr- trnsl,f-occ vf,wl srt,sbang-sbrnd, wk-mod sil cmt,occ lt brn arg mtx, occ mic flks,fri,lse,pr vis & inf por,fluor.
- **SILTSTONE** @ ~1905m: lt-med brnsh gry, lt-med gry,arg,aren i/p,mnr micmic, tr carb spks,mod hd-hd,sbblky-blky. 6260 73 / 6 / 5 / 8 / 8 307 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 33 |
| RES_DEEP (ohm.m) | 25.54 | 33 |
| RES_SHALLOW (ohm.m) | 19.46 | 33 |
| **Δ Res (Deep − Shallow)** | **6.08** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 100% Sandstone (litho ASCII aggregate) TG 233.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 233.21875 U |
| mTVDss | -1194.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1896m: lt trnsl brn,clr- trnsl,f-occ vf,wl srt,sbang-sbrnd, wk-mod sil cmt,occ lt brn arg mtx, occ mic flks,fri,lse,pr vis & inf por,fluor.
- **SILTSTONE** @ ~1905m: lt-med brnsh gry, lt-med gry,arg,aren i/p,mnr micmic, tr carb spks,mod hd-hd,sbblky-blky. 6260 73 / 6 / 5 / 8 / 8 307 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 30.65 | 33 |
| RES_SHALLOW (ohm.m) | 22.19 | 33 |
| **Δ Res (Deep − Shallow)** | **8.45** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 100% Sandstone (litho ASCII aggregate) TG 277.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 277.1941176470588 U |
| mTVDss | -1193.92 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1905m: lt-med brnsh gry, lt-med gry,arg,aren i/p,mnr micmic, tr carb spks,mod hd-hd,sbblky-blky. 6260 73 / 6 / 5 / 8 / 8 307 U
- **SANDSTONE** @ ~1911m: lt trnsl brn, clr,trnsl,f-occ vf,wl srt,sbang- sbrnd,wk-mod strg sil cmt,mnr lt brn arg mtx,rr mic flks,tr carb spks,fri,lse i/p,pr vis & inf por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 33 |
| RES_DEEP (ohm.m) | 32.43 | 33 |
| RES_SHALLOW (ohm.m) | 25.52 | 33 |
| **Δ Res (Deep − Shallow)** | **6.92** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 100% Sandstone (litho ASCII aggregate) TG 306.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 306.08125 U |
| mTVDss | -1193.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1905m: lt-med brnsh gry, lt-med gry,arg,aren i/p,mnr micmic, tr carb spks,mod hd-hd,sbblky-blky. 6260 73 / 6 / 5 / 8 / 8 307 U
- **SANDSTONE** @ ~1911m: lt trnsl brn, clr,trnsl,f-occ vf,wl srt,sbang- sbrnd,wk-mod strg sil cmt,mnr lt brn arg mtx,rr mic flks,tr carb spks,fri,lse i/p,pr vis & inf por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 32 |
| RES_DEEP (ohm.m) | 35.49 | 32 |
| RES_SHALLOW (ohm.m) | 27.66 | 32 |
| **Δ Res (Deep − Shallow)** | **7.84** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 100% Sandstone (litho ASCII aggregate) TG 294.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 294.33750000000003 U |
| mTVDss | -1193.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1911m: lt trnsl brn, clr,trnsl,f-occ vf,wl srt,sbang- sbrnd,wk-mod strg sil cmt,mnr lt brn arg mtx,rr mic flks,tr carb spks,fri,lse i/p,pr vis & inf por,
- **SANDSTONE** @ ~1917m: clr-trnsl,lt trnsl brn,f,rr med,v wl srt,ang-occ sbrnd, wk sil cmt,tr lt brn arg mtx,lse cln grs,fri i/p,fr inf por,pr-fr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 36.42 | 33 |
| RES_SHALLOW (ohm.m) | 25.82 | 33 |
| **Δ Res (Deep − Shallow)** | **10.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 100% Sandstone (litho ASCII aggregate) TG 266.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 266.52352941176474 U |
| mTVDss | -1193.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1917m: clr-trnsl,lt trnsl brn,f,rr med,v wl srt,ang-occ sbrnd, wk sil cmt,tr lt brn arg mtx,lse cln grs,fri i/p,fr inf por,pr-fr vis
- **SILTSTONE** @ ~1923m: med-occ dk gry, med gry brn i/p,micmic,mnr carb spks,mod hd,sbblky-sbfiss. 6320 Rmf @ 6320'MDRT: 0.048ohmm @ 75°F
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.9 | 33 |
| RES_DEEP (ohm.m) | 33.90 | 33 |
| RES_SHALLOW (ohm.m) | 23.59 | 33 |
| **Δ Res (Deep − Shallow)** | **10.31** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 100% Sandstone (litho ASCII aggregate) TG 191.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 191.77500000000003 U |
| mTVDss | -1193.20 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1923m: med-occ dk gry, med gry brn i/p,micmic,mnr carb spks,mod hd,sbblky-sbfiss. 6320 Rmf @ 6320'MDRT: 0.048ohmm @ 75°F
- **SANDSTONE** @ ~1926m: lt trnsl brn, clr-trnsl,f-med,occ crs,pr srt, sbang,occ ang,rr sbrnd,mod sil
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.1 | 33 |
| RES_DEEP (ohm.m) | 31.34 | 33 |
| RES_SHALLOW (ohm.m) | 23.77 | 33 |
| **Δ Res (Deep − Shallow)** | **7.57** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 100% Sandstone (litho ASCII aggregate) TG 219.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 219.91764705882352 U |
| mTVDss | -1193.01 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1923m: med-occ dk gry, med gry brn i/p,micmic,mnr carb spks,mod hd,sbblky-sbfiss. 6320 Rmf @ 6320'MDRT: 0.048ohmm @ 75°F
- **SANDSTONE** @ ~1926m: lt trnsl brn, clr-trnsl,f-med,occ crs,pr srt, sbang,occ ang,rr sbrnd,mod sil
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 33.89 | 33 |
| RES_SHALLOW (ohm.m) | 28.74 | 33 |
| **Δ Res (Deep − Shallow)** | **5.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 100% Sandstone (litho ASCII aggregate) TG 144.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 144.2625 U |
| mTVDss | -1192.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg 6350 mtx,tr mic flks,fri,occ lse,pr- fr inf & vis por,fluor.
- **SILTSTONE** @ ~1939m: med gry-med gry brn,mnr arg-aren,com micmic,occ carb spks & mnr frags,frm-mod hd i/p,sbfiss-occ sbblky. 74 / 6 / 4 / 7 / 9 252 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 32 |
| RES_DEEP (ohm.m) | 37.79 | 32 |
| RES_SHALLOW (ohm.m) | 31.08 | 32 |
| **Δ Res (Deep − Shallow)** | **6.72** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 100% Sandstone (litho ASCII aggregate) TG 246.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 246.35 U |
| mTVDss | -1192.72 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1939m: med gry-med gry brn,mnr arg-aren,com micmic,occ carb spks & mnr frags,frm-mod hd i/p,sbfiss-occ sbblky. 74 / 6 / 4 / 7 / 9 252 U
- **SANDSTONE** @ ~1945m: clr-trnsl,lt trnsl 6380 brn,med-crs,occ f,pr srt,sbang-occ ang,wk-mod sil cmt,rr lt brn arg mtx,occ mic flks,mnr qtz ovgths, lse,fri,fr-gd inf por,pr-fr vis por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 39.88 | 33 |
| RES_SHALLOW (ohm.m) | 32.12 | 33 |
| **Δ Res (Deep − Shallow)** | **7.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 100% Sandstone (litho ASCII aggregate) TG 145.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 145.70000000000002 U |
| mTVDss | -1192.61 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1939m: med gry-med gry brn,mnr arg-aren,com micmic,occ carb spks & mnr frags,frm-mod hd i/p,sbfiss-occ sbblky. 74 / 6 / 4 / 7 / 9 252 U
- **SANDSTONE** @ ~1945m: clr-trnsl,lt trnsl 6380 brn,med-crs,occ f,pr srt,sbang-occ ang,wk-mod sil cmt,rr lt brn arg mtx,occ mic flks,mnr qtz ovgths, lse,fri,fr-gd inf por,pr-fr vis por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 33 |
| RES_DEEP (ohm.m) | 46.18 | 33 |
| RES_SHALLOW (ohm.m) | 33.32 | 33 |
| **Δ Res (Deep − Shallow)** | **12.86** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 100% Sandstone (litho ASCII aggregate) TG 120.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 120.225 U |
| mTVDss | -1192.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1945m: clr-trnsl,lt trnsl 6380 brn,med-crs,occ f,pr srt,sbang-occ ang,wk-mod sil cmt,rr lt brn arg mtx,occ mic flks,mnr qtz ovgths, lse,fri,fr-gd inf por,pr-fr vis por,
- **SANDSTONE** @ ~1948m: lt trnsl brn,clr- 14 18 28 72 / 6 / 5 / 7 / 10 423 U trnsl,f-crs,pr srt,ang-sbang,wk- mod sil cmt,rr lt brn arg mtx,occ mic flks,lse,fri-mod hd,fr-gd inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 33 |
| RES_DEEP (ohm.m) | 50.40 | 33 |
| RES_SHALLOW (ohm.m) | 34.58 | 33 |
| **Δ Res (Deep − Shallow)** | **15.82** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 100% Sandstone (litho ASCII aggregate) TG 207.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 207.2058823529412 U |
| mTVDss | -1192.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1948m: lt trnsl brn,clr- 14 18 28 72 / 6 / 5 / 7 / 10 423 U trnsl,f-crs,pr srt,ang-sbang,wk- mod sil cmt,rr lt brn arg mtx,occ mic flks,lse,fri-mod hd,fr-gd inf
- **SILTSTONE** @ ~1954m: med-dk gry,dk gry brn, aren i/p,occ micmic,frm-mod hd, 6420 sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 125 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.0 | 33 |
| RES_DEEP (ohm.m) | 51.04 | 33 |
| RES_SHALLOW (ohm.m) | 33.13 | 33 |
| **Δ Res (Deep − Shallow)** | **17.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 100% Sandstone (litho ASCII aggregate) TG 363.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 363.775 U |
| mTVDss | -1192.27 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1954m: med-dk gry,dk gry brn, aren i/p,occ micmic,frm-mod hd, 6420 sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 125 U
- **SANDSTONE** @ ~1957m: lt trnsl brn,rr clr-trnsl, 6430 f,rr med-crs,wl-mod srt,sbang,occ ang,mod-wk sil cmt,tr lt brn arg mtx,mnr mic flks,fri,occ lse,pr- fr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.9 | 32 |
| RES_DEEP (ohm.m) | 52.52 | 32 |
| RES_SHALLOW (ohm.m) | 33.45 | 32 |
| **Δ Res (Deep − Shallow)** | **19.07** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 100% Sandstone (litho ASCII aggregate) TG 247.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 247.05624999999998 U |
| mTVDss | -1192.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1963m: 55-103 SANDSTONE:lt trnsl brn,lt trnsl FLW:448-523 gpm GAS PEAKS DUE TO MUD occ ang,mod sil cmt,mnr lt brn arg LEVEL FLUCTUATION, mtx,occ mic flks,rr liths,fri,
- **SANDSTONE** @ ~1975m: lt trnsl brn,f,rr med,wl srt,sbang-ang i/p,mod sil cmt,mnr lt brn arg mtx,occ mic flks,fri, 74 / 6 / 4 / 7 / 9 353 U pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.8 | 33 |
| RES_DEEP (ohm.m) | 48.74 | 33 |
| RES_SHALLOW (ohm.m) | 35.25 | 33 |
| **Δ Res (Deep − Shallow)** | **13.49** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 100% Sandstone (litho ASCII aggregate) TG 195.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 195.6294117647059 U |
| mTVDss | -1192.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1963m: 55-103 SANDSTONE:lt trnsl brn,lt trnsl FLW:448-523 gpm GAS PEAKS DUE TO MUD occ ang,mod sil cmt,mnr lt brn arg LEVEL FLUCTUATION, mtx,occ mic flks,rr liths,fri,
- **SANDSTONE** @ ~1975m: lt trnsl brn,f,rr med,wl srt,sbang-ang i/p,mod sil cmt,mnr lt brn arg mtx,occ mic flks,fri, 74 / 6 / 4 / 7 / 9 353 U pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 33 |
| RES_DEEP (ohm.m) | 47.58 | 33 |
| RES_SHALLOW (ohm.m) | 34.19 | 33 |
| **Δ Res (Deep − Shallow)** | **13.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 100% Sandstone (litho ASCII aggregate) TG 142.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 142.95 U |
| mTVDss | -1192.12 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1975m: lt trnsl brn,f,rr med,wl srt,sbang-ang i/p,mod sil cmt,mnr lt brn arg mtx,occ mic flks,fri, 74 / 6 / 4 / 7 / 9 353 U pr vis por,fluor.
- **SILTSTONE** @ ~1981m: med-dk gry,med gry brn,mnr aren,micmic,occ carb spks, mod hd-occ hd,frm i/p,sbblky- 6510 blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 45.06 | 33 |
| RES_SHALLOW (ohm.m) | 30.21 | 33 |
| **Δ Res (Deep − Shallow)** | **14.85** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 100% Sandstone (litho ASCII aggregate) TG 160.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 160.08823529411765 U |
| mTVDss | -1192.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1975m: lt trnsl brn,f,rr med,wl srt,sbang-ang i/p,mod sil cmt,mnr lt brn arg mtx,occ mic flks,fri, 74 / 6 / 4 / 7 / 9 353 U pr vis por,fluor.
- **SILTSTONE** @ ~1981m: med-dk gry,med gry brn,mnr aren,micmic,occ carb spks, mod hd-occ hd,frm i/p,sbblky- 6510 blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 33 |
| RES_DEEP (ohm.m) | 41.34 | 33 |
| RES_SHALLOW (ohm.m) | 29.90 | 33 |
| **Δ Res (Deep − Shallow)** | **11.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 100% Sandstone (litho ASCII aggregate) TG 152.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 152.14375 U |
| mTVDss | -1192.07 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1981m: med-dk gry,med gry brn,mnr aren,micmic,occ carb spks, mod hd-occ hd,frm i/p,sbblky- 6510 blky.
- **SANDSTONE** @ ~1987m: lt trnsl brn,f,rr med,wl srt,sbang-occ ang,mod sil cmt, rr-mnr lt brn arg mtx,mnr mic flks, fri-occ mod hd,pr vis por,fluor. 73 / 6 / 4 / 7 / 10 173 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 32 |
| RES_DEEP (ohm.m) | 44.53 | 32 |
| RES_SHALLOW (ohm.m) | 34.46 | 32 |
| **Δ Res (Deep − Shallow)** | **10.07** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 100% Sandstone (litho ASCII aggregate) TG 144.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 144.575 U |
| mTVDss | -1192.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1987m: lt trnsl brn,f,rr med,wl srt,sbang-occ ang,mod sil cmt, rr-mnr lt brn arg mtx,mnr mic flks, fri-occ mod hd,pr vis por,fluor. 73 / 6 / 4 / 7 / 10 173 U
- **SANDSTONE** @ ~1993m: lt trnsl brn,occ clr- trnsl,f-occ med,mod wl srt,sbang-occ sbrnd,mod strg sil cmt,mnr lt brn arg mtx,rr mic flks,fri,com lse,pr-occ fr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 33 |
| RES_DEEP (ohm.m) | 38.04 | 33 |
| RES_SHALLOW (ohm.m) | 29.27 | 33 |
| **Δ Res (Deep − Shallow)** | **8.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 100% Sandstone (litho ASCII aggregate) TG 180.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 180.05882352941177 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1993m: lt trnsl brn,occ clr- trnsl,f-occ med,mod wl srt,sbang-occ sbrnd,mod strg sil cmt,mnr lt brn arg mtx,rr mic flks,fri,com lse,pr-occ fr vis & inf por,fluor.
- **SANDSTONE** @ ~1996m: clr-trnsl,lt trnsl 6560 brn-med,crs i/p,pr srt,ang-sbang, 72 / 6 / 4 / 7 / 11 150 U wk sil cmt,rr lt brn arg mtx,occ qtz ovgths,lse,fri,fr inf por,pr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 33 |
| RES_DEEP (ohm.m) | 33.58 | 33 |
| RES_SHALLOW (ohm.m) | 25.33 | 33 |
| **Δ Res (Deep − Shallow)** | **8.25** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 100% Sandstone (litho ASCII aggregate) TG 185.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn fluor |
| Total Gas | 185.9 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1993m: lt trnsl brn,occ clr- trnsl,f-occ med,mod wl srt,sbang-occ sbrnd,mod strg sil cmt,mnr lt brn arg mtx,rr mic flks,fri,com lse,pr-occ fr vis & inf por,fluor.
- **SANDSTONE** @ ~1996m: clr-trnsl,lt trnsl 6560 brn-med,crs i/p,pr srt,ang-sbang, 72 / 6 / 4 / 7 / 11 150 U wk sil cmt,rr lt brn arg mtx,occ qtz ovgths,lse,fri,fr inf por,pr
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 33 |
| RES_DEEP (ohm.m) | 27.60 | 33 |
| RES_SHALLOW (ohm.m) | 20.05 | 33 |
| **Δ Res (Deep − Shallow)** | **7.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 100% Sandstone (litho ASCII aggregate) TG 230.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 230.41764705882352 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2006m: med-dk brn gry, dk gry,arg,rr aren,micmic,mnr carb spks,frm-mod hd,occ hd,sbblky-blky. 72 / 5 / 4 / 8 / 11 299 U
- **SANDSTONE** @ ~2009m: lt trnsl brn,f,mnr 14 18 28 med,wl srt,sbang,occ ang-sbrnd, mod-wk sil cmt,occ lt brn arg mtx, tr liths,fri-mod hd,pr vis por,fluor. 64 / 6 / 5 / 10 / 15 363 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.8 | 33 |
| RES_DEEP (ohm.m) | 26.08 | 33 |
| RES_SHALLOW (ohm.m) | 19.07 | 33 |
| **Δ Res (Deep − Shallow)** | **7.01** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 100% Sandstone (litho ASCII aggregate) TG 105.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 105.25625000000001 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2006m: med-dk brn gry, dk gry,arg,rr aren,micmic,mnr carb spks,frm-mod hd,occ hd,sbblky-blky. 72 / 5 / 4 / 8 / 11 299 U
- **SANDSTONE** @ ~2009m: lt trnsl brn,f,mnr 14 18 28 med,wl srt,sbang,occ ang-sbrnd, mod-wk sil cmt,occ lt brn arg mtx, tr liths,fri-mod hd,pr vis por,fluor. 64 / 6 / 5 / 10 / 15 363 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.2 | 32 |
| RES_DEEP (ohm.m) | 22.81 | 32 |
| RES_SHALLOW (ohm.m) | 17.41 | 32 |
| **Δ Res (Deep − Shallow)** | **5.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 100% Sandstone (litho ASCII aggregate) TG 119.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 119.4375 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2009m: lt trnsl brn,f,mnr 14 18 28 med,wl srt,sbang,occ ang-sbrnd, mod-wk sil cmt,occ lt brn arg mtx, tr liths,fri-mod hd,pr vis por,fluor. 64 / 6 / 5 / 10 / 15 363 U
- **SILTSTONE** @ ~2018m: med-com dk gry, med gry brn,micmic,occ carb spks, mod hd-occ frm,sbblky-mnr blky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.3 | 33 |
| RES_DEEP (ohm.m) | 22.87 | 33 |
| RES_SHALLOW (ohm.m) | 17.27 | 33 |
| **Δ Res (Deep − Shallow)** | **5.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 100% Sandstone (litho ASCII aggregate) TG 121.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 121.08235294117645 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2018m: med-com dk gry, med gry brn,micmic,occ carb spks, mod hd-occ frm,sbblky-mnr blky.
- **SANDSTONE** @ ~2021m: lt trnsl brn,lt brn gry i/p,f,occ med,wl srt,sbang- (4061) 68 / 5 / 5 / 9 / 13 139 U sbrnd,mod-wk sil cmt,mnr lt brn gry 6640 arg mtx,mnr carb spks,fri-occ mod hd,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.5 | 33 |
| RES_DEEP (ohm.m) | 22.52 | 33 |
| RES_SHALLOW (ohm.m) | 17.60 | 33 |
| **Δ Res (Deep − Shallow)** | **4.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 155.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 155.33749999999998 U |
| mTVDss | -1192.00 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2018m: med-com dk gry, med gry brn,micmic,occ carb spks, mod hd-occ frm,sbblky-mnr blky.
- **SANDSTONE** @ ~2021m: lt trnsl brn,lt brn gry i/p,f,occ med,wl srt,sbang- (4061) 68 / 5 / 5 / 9 / 13 139 U sbrnd,mod-wk sil cmt,mnr lt brn gry 6640 arg mtx,mnr carb spks,fri-occ mod hd,pr vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.2 | 33 |
| RES_DEEP (ohm.m) | 25.91 | 33 |
| RES_SHALLOW (ohm.m) | 19.79 | 33 |
| **Δ Res (Deep − Shallow)** | **6.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% Sandstone (litho ASCII aggregate) TG 114.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 113.98823529411764 U |
| mTVDss | -1191.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2027m: med-occ dk gry, occ lt brn,arg-aren,micmic i/p, occ-com carb spks,frm-mod hd, sbblky-occ blky,mnr sbfiss.
- **SANDSTONE** @ ~2033m: lt trnsl brn,f-rr 6680 64 / 5 / 5 / 10 / 16 228 U med,wl srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg mtx,tr liths, fri,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 33 |
| RES_DEEP (ohm.m) | 28.83 | 33 |
| RES_SHALLOW (ohm.m) | 22.86 | 33 |
| **Δ Res (Deep − Shallow)** | **5.97** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% Sandstone (litho ASCII aggregate) TG 112.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 112.10625 U |
| mTVDss | -1191.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2033m: lt trnsl brn,f-rr 6680 64 / 5 / 5 / 10 / 16 228 U med,wl srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg mtx,tr liths, fri,pr vis por,fluor.
- **SILTSTONE** @ ~2039m: lt brn-brn gry,med gry i/p,com aren,micmic,mnr carb spks, hd,occ mod hd-rr frm,sbblky,occ blky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 31.91 | 33 |
| RES_SHALLOW (ohm.m) | 24.01 | 33 |
| **Δ Res (Deep − Shallow)** | **7.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 100% Sandstone (litho ASCII aggregate) TG 102.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 102.58749999999999 U |
| mTVDss | -1191.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2033m: lt trnsl brn,f-rr 6680 64 / 5 / 5 / 10 / 16 228 U med,wl srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg mtx,tr liths, fri,pr vis por,fluor.
- **SILTSTONE** @ ~2039m: lt brn-brn gry,med gry i/p,com aren,micmic,mnr carb spks, hd,occ mod hd-rr frm,sbblky,occ blky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 32 |
| RES_DEEP (ohm.m) | 33.64 | 32 |
| RES_SHALLOW (ohm.m) | 23.73 | 32 |
| **Δ Res (Deep − Shallow)** | **9.90** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 100% Sandstone (litho ASCII aggregate) TG 115.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 115.77058823529411 U |
| mTVDss | -1191.82 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2039m: lt brn-brn gry,med gry i/p,com aren,micmic,mnr carb spks, hd,occ mod hd-rr frm,sbblky,occ blky-sbfiss.
- **SANDSTONE** @ ~2042m: lt trnsl brn,rr lt trnsl gry,f,rr med,wl srt,sbang-ang,wk sil
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 33 |
| RES_DEEP (ohm.m) | 43.92 | 33 |
| RES_SHALLOW (ohm.m) | 29.40 | 33 |
| **Δ Res (Deep − Shallow)** | **14.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 100% Sandstone (litho ASCII aggregate) TG 106.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 106.35625 U |
| mTVDss | -1191.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2051m: lt trnsl brn,rr clr-trnsl, f,occ med,wl srt,sbang-occ ang,mod- wk sil cmt,mnr lt brn arg mtx,tr mic flks,fri-mod hd,pr vis por,fluor. (64704600)
- **SANDSTONE** @ ~2051m: lt trnsl brn,clr-trnsl, FLW:416-524 gpm vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 33 |
| RES_DEEP (ohm.m) | 44.85 | 33 |
| RES_SHALLOW (ohm.m) | 30.19 | 33 |
| **Δ Res (Deep − Shallow)** | **14.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 100% Sandstone (litho ASCII aggregate) TG 190.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 190.5588235294118 U |
| mTVDss | -1191.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2051m: lt trnsl brn,rr clr-trnsl, f,occ med,wl srt,sbang-occ ang,mod- wk sil cmt,mnr lt brn arg mtx,tr mic flks,fri-mod hd,pr vis por,fluor. (64704600)
- **SANDSTONE** @ ~2051m: lt trnsl brn,clr-trnsl, FLW:416-524 gpm vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 33 |
| RES_DEEP (ohm.m) | 37.96 | 33 |
| RES_SHALLOW (ohm.m) | 27.30 | 33 |
| **Δ Res (Deep − Shallow)** | **10.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 100% Sandstone (litho ASCII aggregate) TG 195.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 195.3875 U |
| mTVDss | -1191.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2063m: lt brn,occ med brn-brn gry,occ arg-aren,micmic,mnr carb spks,frm-mod hd,sbblky-sbfiss. 71 / 6 / 4 / 8 / 11 368 U
- **SANDSTONE** @ ~2070m: lt trnsl brn,occ trnsl- clr,f-occ med,mod wl srt,sbang-occ 6810 sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,tr carb spks,fri-occ mod hd,occ lse,pr-fr inf por,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 33 |
| RES_DEEP (ohm.m) | 39.51 | 33 |
| RES_SHALLOW (ohm.m) | 28.30 | 33 |
| **Δ Res (Deep − Shallow)** | **11.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 100% Sandstone (litho ASCII aggregate) TG 286.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 286.13125 U |
| mTVDss | -1191.51 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2063m: lt brn,occ med brn-brn gry,occ arg-aren,micmic,mnr carb spks,frm-mod hd,sbblky-sbfiss. 71 / 6 / 4 / 8 / 11 368 U
- **SANDSTONE** @ ~2070m: lt trnsl brn,occ trnsl- clr,f-occ med,mod wl srt,sbang-occ 6810 sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,tr carb spks,fri-occ mod hd,occ lse,pr-fr inf por,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.8 | 32 |
| RES_DEEP (ohm.m) | 41.62 | 32 |
| RES_SHALLOW (ohm.m) | 28.93 | 32 |
| **Δ Res (Deep − Shallow)** | **12.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 100% Sandstone (litho ASCII aggregate) TG 147.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 147.93529411764706 U |
| mTVDss | -1191.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2063m: lt brn,occ med brn-brn gry,occ arg-aren,micmic,mnr carb spks,frm-mod hd,sbblky-sbfiss. 71 / 6 / 4 / 8 / 11 368 U
- **SANDSTONE** @ ~2070m: lt trnsl brn,occ trnsl- clr,f-occ med,mod wl srt,sbang-occ 6810 sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,tr carb spks,fri-occ mod hd,occ lse,pr-fr inf por,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 33 |
| RES_DEEP (ohm.m) | 41.71 | 33 |
| RES_SHALLOW (ohm.m) | 28.91 | 33 |
| **Δ Res (Deep − Shallow)** | **12.80** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 100% Sandstone (litho ASCII aggregate) TG 269.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 269.575 U |
| mTVDss | -1191.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt trnsl brn,occ trnsl- clr,f-occ med,mod wl srt,sbang-occ 6810 sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,tr carb spks,fri-occ mod hd,occ lse,pr-fr inf por,pr vis por,fluor.
- **SILTSTONE** @ ~2079m: lt brn,lt-med gry,med brn gry i/p,arg-aren,micmic,tr loc 6830 carb spks,frm-occ mod hd,sbblky- occ sbfiss. (64804509)
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.2 | 33 |
| RES_DEEP (ohm.m) | 40.43 | 33 |
| RES_SHALLOW (ohm.m) | 28.57 | 33 |
| **Δ Res (Deep − Shallow)** | **11.87** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 100% Sandstone (litho ASCII aggregate) TG 241.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 241.55294117647057 U |
| mTVDss | -1191.25 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2079m: lt brn,lt-med gry,med brn gry i/p,arg-aren,micmic,tr loc 6830 carb spks,frm-occ mod hd,sbblky- occ sbfiss. (64804509)
- **SANDSTONE** @ ~2082m: lt trnsl brn,occ trnsl- clr,f,rr med,wl srt,sbang-occ ang, 6850 mod-wk sil cmt,rr lt brn arg mtx, tr liths,rr carb spks,fri,pr vis por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 35.59 | 33 |
| RES_SHALLOW (ohm.m) | 27.32 | 33 |
| **Δ Res (Deep − Shallow)** | **8.27** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 100% Sandstone (litho ASCII aggregate) TG 183.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 183.25625 U |
| mTVDss | -1191.14 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2079m: lt brn,lt-med gry,med brn gry i/p,arg-aren,micmic,tr loc 6830 carb spks,frm-occ mod hd,sbblky- occ sbfiss. (64804509)
- **SANDSTONE** @ ~2082m: lt trnsl brn,occ trnsl- clr,f,rr med,wl srt,sbang-occ ang, 6850 mod-wk sil cmt,rr lt brn arg mtx, tr liths,rr carb spks,fri,pr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 33 |
| RES_DEEP (ohm.m) | 33.46 | 33 |
| RES_SHALLOW (ohm.m) | 24.77 | 33 |
| **Δ Res (Deep − Shallow)** | **8.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 100% Sandstone (litho ASCII aggregate) TG 189.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 189.7625 U |
| mTVDss | -1191.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2094m: lt trnsl brn,rr clr- trnsl,f,rr med,wl srt,sbang,wk- mod sil cmt,occ lt brn-off wh arg mtx,tr carb spks & mic flks,fri- 6880 occ mod hd,pr-occ fr vis por,fluor.
- **SILTSTONE** @ ~2100m: med gry brn,mnr lt brn, aren,occ grd to vf SST,loc com carb spks,fri-mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 32 |
| RES_DEEP (ohm.m) | 30.89 | 32 |
| RES_SHALLOW (ohm.m) | 22.84 | 32 |
| **Δ Res (Deep − Shallow)** | **8.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 100% Sandstone (litho ASCII aggregate) TG 137.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 137.4 U |
| mTVDss | -1190.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2094m: lt trnsl brn,rr clr- trnsl,f,rr med,wl srt,sbang,wk- mod sil cmt,occ lt brn-off wh arg mtx,tr carb spks & mic flks,fri- 6880 occ mod hd,pr-occ fr vis por,fluor.
- **SILTSTONE** @ ~2100m: med gry brn,mnr lt brn, aren,occ grd to vf SST,loc com carb spks,fri-mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.4 | 33 |
| RES_DEEP (ohm.m) | 29.98 | 33 |
| RES_SHALLOW (ohm.m) | 21.61 | 33 |
| **Δ Res (Deep − Shallow)** | **8.37** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 100% Sandstone (litho ASCII aggregate) TG 133.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 133.93125 U |
| mTVDss | -1190.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2094m: lt trnsl brn,rr clr- trnsl,f,rr med,wl srt,sbang,wk- mod sil cmt,occ lt brn-off wh arg mtx,tr carb spks & mic flks,fri- 6880 occ mod hd,pr-occ fr vis por,fluor.
- **SILTSTONE** @ ~2100m: med gry brn,mnr lt brn, aren,occ grd to vf SST,loc com carb spks,fri-mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 26.69 | 33 |
| RES_SHALLOW (ohm.m) | 20.59 | 33 |
| **Δ Res (Deep − Shallow)** | **6.11** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 100% Sandstone (litho ASCII aggregate) TG 120.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 120.56470588235294 U |
| mTVDss | -1190.72 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2100m: med gry brn,mnr lt brn, aren,occ grd to vf SST,loc com carb spks,fri-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2103m: lt trnsl brn,lt trnsl brn gry,f,rr med,wl srt,ang-sbang, 6910 wk-mod sil cmt,rr lt brn arg mtx,tr liths,fri,occ mod hd,pr-occ fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 33 |
| RES_DEEP (ohm.m) | 26.83 | 33 |
| RES_SHALLOW (ohm.m) | 20.14 | 33 |
| **Δ Res (Deep − Shallow)** | **6.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: 100% Sandstone (litho ASCII aggregate) TG 205.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 205.68125 U |
| mTVDss | -1190.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2103m: lt trnsl brn,lt trnsl brn gry,f,rr med,wl srt,ang-sbang, 6910 wk-mod sil cmt,rr lt brn arg mtx,tr liths,fri,occ mod hd,pr-occ fr inf por,fluor.
- **SANDSTONE** @ ~2109m: lt trnsl brn,clr-trnsl, f,wl srt,sbang-ang,wk-mod sil cmt, rr lt brn arg mtx,rr carb spks,fri- 6930 mod hd,pr-occ fr vis por,fluor. SURVEY @ 6947.46'MDRT
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 32.03 | 33 |
| RES_SHALLOW (ohm.m) | 23.82 | 33 |
| **Δ Res (Deep − Shallow)** | **8.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: 100% Sandstone (litho ASCII aggregate) TG 152.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 152.64375 U |
| mTVDss | -1190.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2109m: lt trnsl brn,clr-trnsl, f,wl srt,sbang-ang,wk-mod sil cmt, rr lt brn arg mtx,rr carb spks,fri- 6930 mod hd,pr-occ fr vis por,fluor. SURVEY @ 6947.46'MDRT
- **SANDSTONE** @ ~2118m: clr-trnsl,mnr lt trnsl brn,f-rr med,wl srt,ang-sbang,mod- 6960 wk sil cmt,tr lt brn arg mtx,fri- occ lse,pr-fr vis por,fr inf por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 32 |
| RES_DEEP (ohm.m) | 37.73 | 32 |
| RES_SHALLOW (ohm.m) | 26.94 | 32 |
| **Δ Res (Deep − Shallow)** | **10.79** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 100% Sandstone (litho ASCII aggregate) TG 165.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 165.7 U |
| mTVDss | -1190.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2118m: clr-trnsl,mnr lt trnsl brn,f-rr med,wl srt,ang-sbang,mod- 6960 wk sil cmt,tr lt brn arg mtx,fri- occ lse,pr-fr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2128m: lt trnsl brn,clr-trnsl i/p, 6990 f-occ med,mod wl-wl srt,sbang-ang, mod-wk sil cmt,tr lt brn arg mtx, tr carb spks,fri,pr-fr vis por,fluor. 0 0.5 1 4 14 7000
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 47.02 | 33 |
| RES_SHALLOW (ohm.m) | 30.57 | 33 |
| **Δ Res (Deep − Shallow)** | **16.45** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2135m: 100% Sandstone (litho ASCII aggregate) TG 142.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 142.025 U |
| mTVDss | -1190.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2118m: clr-trnsl,mnr lt trnsl brn,f-rr med,wl srt,ang-sbang,mod- 6960 wk sil cmt,tr lt brn arg mtx,fri- occ lse,pr-fr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2128m: lt trnsl brn,clr-trnsl i/p, 6990 f-occ med,mod wl-wl srt,sbang-ang, mod-wk sil cmt,tr lt brn arg mtx, tr carb spks,fri,pr-fr vis por,fluor. 0 0.5 1 4 14 7000
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.4 | 33 |
| RES_DEEP (ohm.m) | 47.98 | 33 |
| RES_SHALLOW (ohm.m) | 31.91 | 33 |
| **Δ Res (Deep − Shallow)** | **16.07** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** Sample 2140m: 100% Sandstone (litho ASCII aggregate) TG 284.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 284.21764705882345 U |
| mTVDss | -1190.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2128m: lt trnsl brn,clr-trnsl i/p, 6990 f-occ med,mod wl-wl srt,sbang-ang, mod-wk sil cmt,tr lt brn arg mtx, tr carb spks,fri,pr-fr vis por,fluor. 0 0.5 1 4 14 7000
- **SILTSTONE** @ ~2131m: med-dk gry brn,med gry, 7010 com aren,micmic,occ carb spks,mod MW:9.85 hd,sbblky-sbfiss. FV:38 73 / 6 / 4 / 7 / 10 PV:11
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 52.14 | 33 |
| RES_SHALLOW (ohm.m) | 35.87 | 33 |
| **Δ Res (Deep − Shallow)** | **16.26** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 100% Sandstone (litho ASCII aggregate) TG 248.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 248.025 U |
| mTVDss | -1189.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2128m: lt trnsl brn,clr-trnsl i/p, 6990 f-occ med,mod wl-wl srt,sbang-ang, mod-wk sil cmt,tr lt brn arg mtx, tr carb spks,fri,pr-fr vis por,fluor. 0 0.5 1 4 14 7000
- **SILTSTONE** @ ~2131m: med-dk gry brn,med gry, 7010 com aren,micmic,occ carb spks,mod MW:9.85 hd,sbblky-sbfiss. FV:38 73 / 6 / 4 / 7 / 10 PV:11
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 41.28 | 33 |
| RES_SHALLOW (ohm.m) | 30.72 | 33 |
| **Δ Res (Deep − Shallow)** | **10.56** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: 100% Sandstone (litho ASCII aggregate) TG 240.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 240.6705882352941 U |
| mTVDss | -1189.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2137m: 120k 7030 SANDSTONE:lt trnsl brn,clr-trnsl, 75 / 6 / 4 / 6 / 9 548 U f-rr med,mod wl srt,sbang-ang,mod- wk sil cmt,rr lt brn arg mtx,mnr carb spks,fri-mod hd,pr-occ fr vis por,fluor.
- **SANDSTONE** @ ~2149m: lt trnsl brn,f-rr med, wl srt,sbang-ang,wk sil cmt,tr lt brn arg mtx,rr mic flks,fri-mod hd, 7060 pr-occ fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 41.39 | 33 |
| RES_SHALLOW (ohm.m) | 31.18 | 33 |
| **Δ Res (Deep − Shallow)** | **10.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 100% Sandstone (litho ASCII aggregate) TG 141.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 141.8125 U |
| mTVDss | -1189.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2149m: lt trnsl brn,f-rr med, wl srt,sbang-ang,wk sil cmt,tr lt brn arg mtx,rr mic flks,fri-mod hd, 7060 pr-occ fr vis por,fluor.
- **SILTSTONE** @ ~2152m: dk-med brn,dk brn gry,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 32 |
| RES_DEEP (ohm.m) | 40.05 | 32 |
| RES_SHALLOW (ohm.m) | 30.15 | 32 |
| **Δ Res (Deep − Shallow)** | **9.90** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 100% Sandstone (litho ASCII aggregate) TG 146.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 146.29375 U |
| mTVDss | -1189.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2149m: lt trnsl brn,f-rr med, wl srt,sbang-ang,wk sil cmt,tr lt brn arg mtx,rr mic flks,fri-mod hd, 7060 pr-occ fr vis por,fluor.
- **SILTSTONE** @ ~2152m: dk-med brn,dk brn gry,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 33 |
| RES_DEEP (ohm.m) | 41.04 | 33 |
| RES_SHALLOW (ohm.m) | 30.22 | 33 |
| **Δ Res (Deep − Shallow)** | **10.82** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 100% Sandstone (litho ASCII aggregate) TG 177.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn-ptchy fluor |
| Total Gas | 176.9764705882353 U |
| mTVDss | -1189.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2149m: lt trnsl brn,f-rr med, wl srt,sbang-ang,wk sil cmt,tr lt brn arg mtx,rr mic flks,fri-mod hd, 7060 pr-occ fr vis por,fluor.
- **SILTSTONE** @ ~2152m: dk-med brn,dk brn gry,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 40.38 | 33 |
| RES_SHALLOW (ohm.m) | 30.83 | 33 |
| **Δ Res (Deep − Shallow)** | **9.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 100% Sandstone (litho ASCII aggregate) TG 213.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 213.49411764705883 U |
| mTVDss | -1189.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2158m: lt trnsl brn,mnr trnsl- clr,f-occ med,wl srt,sbang-com ang, 7090 wk sil cmt,tr lt brn arg mtx,rr carb spks,fri-mod hd i/p,pr-fr vis por, fluor.
- **SANDSTONE** @ ~2164m: clr-trnsl,lt trnsl brn, 7110 f-crs,pr srt,ang-sbang,wk sil cmt, tr lt brn arg mtx,occ qtz ovgths, lse,fri,fr-gd inf por,pr-fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.5 | 33 |
| RES_DEEP (ohm.m) | 46.45 | 33 |
| RES_SHALLOW (ohm.m) | 37.42 | 33 |
| **Δ Res (Deep − Shallow)** | **9.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 100% Sandstone (litho ASCII aggregate) TG 407.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 407.88235294117646 U |
| mTVDss | -1189.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2158m: lt trnsl brn,mnr trnsl- clr,f-occ med,wl srt,sbang-com ang, 7090 wk sil cmt,tr lt brn arg mtx,rr carb spks,fri-mod hd i/p,pr-fr vis por, fluor.
- **SANDSTONE** @ ~2164m: clr-trnsl,lt trnsl brn, 7110 f-crs,pr srt,ang-sbang,wk sil cmt, tr lt brn arg mtx,occ qtz ovgths, lse,fri,fr-gd inf por,pr-fr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 33 |
| RES_DEEP (ohm.m) | 47.64 | 33 |
| RES_SHALLOW (ohm.m) | 37.83 | 33 |
| **Δ Res (Deep − Shallow)** | **9.81** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 100% Sandstone (litho ASCII aggregate) TG 78.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 78.53125 U |
| mTVDss | -1189.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2164m: clr-trnsl,lt trnsl brn, 7110 f-crs,pr srt,ang-sbang,wk sil cmt, tr lt brn arg mtx,occ qtz ovgths, lse,fri,fr-gd inf por,pr-fr vis por,fluor.
- **SANDSTONE** @ ~2170m: clr-trnsl,lt trnsl brn, occ mlky wh,f-crs,pr srt,sbang- sbrnd,occ ang,wk sil cmt,mnr lt 7130 73 / 6 / 5 / 7 / 9 672 U brn arg mtx,occ qtz ovgths,lse,fri, pr-fr vis por,fr-gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.4 | 32 |
| RES_DEEP (ohm.m) | 46.71 | 32 |
| RES_SHALLOW (ohm.m) | 29.88 | 32 |
| **Δ Res (Deep − Shallow)** | **16.83** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 100% Sandstone (litho ASCII aggregate) TG 62.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 62.65625 U |
| mTVDss | -1189.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr-trnsl,lt trnsl brn, occ mlky wh,f-crs,pr srt,sbang- sbrnd,occ ang,wk sil cmt,mnr lt 7130 73 / 6 / 5 / 7 / 9 672 U brn arg mtx,occ qtz ovgths,lse,fri, pr-fr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~2179m: med-dk gry brn,med gry, 7160 arg-aren i/p,occ micmic,occ-com carb spks,frm-mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 49.13 | 33 |
| RES_SHALLOW (ohm.m) | 21.63 | 33 |
| **Δ Res (Deep − Shallow)** | **27.50** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 100% Sandstone (litho ASCII aggregate) TG 147.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 147.09411764705882 U |
| mTVDss | -1189.35 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2179m: med-dk gry brn,med gry, 7160 arg-aren i/p,occ micmic,occ-com carb spks,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2185m: trnsl brn,occ clr-trnsl, dom f,occ med-crs,mod-pr srt,sbang- 73 / 6 / 5 / 7 / 9 occ sbrnd,wk sil cmt,rr lt brn arg mtx,occ carb spks,fri,occ lse,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 52.75 | 33 |
| RES_SHALLOW (ohm.m) | 30.87 | 33 |
| **Δ Res (Deep − Shallow)** | **21.88** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 100% Sandstone (litho ASCII aggregate) TG 213.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 213.6625 U |
| mTVDss | -1189.32 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2179m: med-dk gry brn,med gry, 7160 arg-aren i/p,occ micmic,occ-com carb spks,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2185m: trnsl brn,occ clr-trnsl, dom f,occ med-crs,mod-pr srt,sbang- 73 / 6 / 5 / 7 / 9 occ sbrnd,wk sil cmt,rr lt brn arg mtx,occ carb spks,fri,occ lse,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.3 | 33 |
| RES_DEEP (ohm.m) | 57.51 | 33 |
| RES_SHALLOW (ohm.m) | 36.24 | 33 |
| **Δ Res (Deep − Shallow)** | **21.26** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2197.5 – 2202.5 m

**Sample Description (spreadsheet):** Sample 2200m: 100% Sandstone (litho ASCII aggregate) TG 187.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 187.8941176470588 U |
| mTVDss | -1189.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2185m: trnsl brn,occ clr-trnsl, dom f,occ med-crs,mod-pr srt,sbang- 73 / 6 / 5 / 7 / 9 occ sbrnd,wk sil cmt,rr lt brn arg mtx,occ carb spks,fri,occ lse,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2188m: trnsl brn,clr-trnsl,tr
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 33 |
| RES_DEEP (ohm.m) | 54.84 | 33 |
| RES_SHALLOW (ohm.m) | 39.16 | 33 |
| **Δ Res (Deep − Shallow)** | **15.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2205 m MD — Interval 2202.5 – 2207.5 m

**Sample Description (spreadsheet):** Sample 2205m: 100% Sandstone (litho ASCII aggregate) TG 221.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.40) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 221.93125 U |
| mTVDss | -1189.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2188m: trnsl brn,clr-trnsl,tr
- **SANDSTONE** @ ~2192m: clr-trnsl,trnsl brn, 7210 dom f,mnr vf-med,pr-mod srt,sbang-
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 32 |
| RES_DEEP (ohm.m) | 53.93 | 32 |
| RES_SHALLOW (ohm.m) | 38.79 | 32 |
| **Δ Res (Deep − Shallow)** | **15.14** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2207.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 100% Sandstone (litho ASCII aggregate) TG 263.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.40) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 263.80625 U |
| mTVDss | -1189.27 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2204m: med gry,med brn gry, arg-aren i/p,micmic,occ carb spks, frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7
- **SILTSTONE** @ ~2216m: med gry,med-dk brn gry, 79 / 6 / 4 / 5 / 6 arg-aren,loc com mic,tr carb spks, frm-occ mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.7 | 33 |
| RES_DEEP (ohm.m) | 50.65 | 33 |
| RES_SHALLOW (ohm.m) | 32.90 | 33 |
| **Δ Res (Deep − Shallow)** | **17.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 100% Sandstone (litho ASCII aggregate) TG 222.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.40) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 222.14705882352942 U |
| mTVDss | -1189.27 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2204m: med gry,med brn gry, arg-aren i/p,micmic,occ carb spks, frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7
- **SILTSTONE** @ ~2216m: med gry,med-dk brn gry, 79 / 6 / 4 / 5 / 6 arg-aren,loc com mic,tr carb spks, frm-occ mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 33 |
| RES_DEEP (ohm.m) | 52.47 | 33 |
| RES_SHALLOW (ohm.m) | 29.90 | 33 |
| **Δ Res (Deep − Shallow)** | **22.57** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 100% Sandstone (litho ASCII aggregate) TG 192.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 192.35 U |
| mTVDss | -1189.27 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2204m: med gry,med brn gry, arg-aren i/p,micmic,occ carb spks, frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7
- **SILTSTONE** @ ~2216m: med gry,med-dk brn gry, 79 / 6 / 4 / 5 / 6 arg-aren,loc com mic,tr carb spks, frm-occ mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 33 |
| RES_DEEP (ohm.m) | 43.85 | 33 |
| RES_SHALLOW (ohm.m) | 30.49 | 33 |
| **Δ Res (Deep − Shallow)** | **13.36** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 100% Sandstone (litho ASCII aggregate) TG 244.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 244.47647058823532 U |
| mTVDss | -1189.27 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2216m: med gry,med-dk brn gry, 79 / 6 / 4 / 5 / 6 arg-aren,loc com mic,tr carb spks, frm-occ mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2222m: trnsl brn,clr-trnsl, tr frstd,dom f,rr med-crs,pr-mod srt,sbrnd-rnd,occ sbang,wk sil cmt,tr lt brn arg mtx,tr mic, tr carb spks,pr vis & pr-fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 33 |
| RES_DEEP (ohm.m) | 45.45 | 33 |
| RES_SHALLOW (ohm.m) | 35.06 | 33 |
| **Δ Res (Deep − Shallow)** | **10.39** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 100% Sandstone (litho ASCII aggregate) TG 257.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 257.725 U |
| mTVDss | -1189.28 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2216m: med gry,med-dk brn gry, 79 / 6 / 4 / 5 / 6 arg-aren,loc com mic,tr carb spks, frm-occ mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2222m: trnsl brn,clr-trnsl, tr frstd,dom f,rr med-crs,pr-mod srt,sbrnd-rnd,occ sbang,wk sil cmt,tr lt brn arg mtx,tr mic, tr carb spks,pr vis & pr-fr inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 32 |
| RES_DEEP (ohm.m) | 44.43 | 32 |
| RES_SHALLOW (ohm.m) | 33.26 | 32 |
| **Δ Res (Deep − Shallow)** | **11.17** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 100% Sandstone (litho ASCII aggregate) TG 307.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 307.6 U |
| mTVDss | -1189.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2222m: trnsl brn,clr-trnsl, tr frstd,dom f,rr med-crs,pr-mod srt,sbrnd-rnd,occ sbang,wk sil cmt,tr lt brn arg mtx,tr mic, tr carb spks,pr vis & pr-fr inf
- **SANDSTONE** @ ~2225m: trnsl brn,clr- 7310 trnsl,tr frstd,dom f,rr med-crs, pr-mod srt,sbrnd-rnd,occ sbang, wk sil cmt,tr lt brn arg mtx,tr mic,tr carb spks,pr vis & pr-fr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 33 |
| RES_DEEP (ohm.m) | 42.27 | 33 |
| RES_SHALLOW (ohm.m) | 30.70 | 33 |
| **Δ Res (Deep − Shallow)** | **11.57** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 100% Sandstone (litho ASCII aggregate) TG 265.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 265.29411764705884 U |
| mTVDss | -1189.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2225m: trnsl brn,clr- 7310 trnsl,tr frstd,dom f,rr med-crs, pr-mod srt,sbrnd-rnd,occ sbang, wk sil cmt,tr lt brn arg mtx,tr mic,tr carb spks,pr vis & pr-fr
- **SANDSTONE** @ ~2237m: lt trnsl brn, FLW:469-472 gpm flks,tr carb flks,fri aggs,lse i/p,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 33 |
| RES_DEEP (ohm.m) | 43.93 | 33 |
| RES_SHALLOW (ohm.m) | 30.82 | 33 |
| **Δ Res (Deep − Shallow)** | **13.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 100% Sandstone (litho ASCII aggregate) TG 284.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 284.66875 U |
| mTVDss | -1189.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2237m: lt trnsl brn, FLW:469-472 gpm flks,tr carb flks,fri aggs,lse i/p,
- **SANDSTONE** @ ~2243m: lt trnsl brn,clr, trnsl,tr opq,f-occ med,rr crs,mod wl-wl srt,sbrnd-sbang,wk sil cmt, mnr lt brn arg mtx,occ mic flks, 30-12-2017 tr carb flks,fri aggs,lse i/p,pr
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 33 |
| RES_DEEP (ohm.m) | 42.58 | 33 |
| RES_SHALLOW (ohm.m) | 28.55 | 33 |
| **Δ Res (Deep − Shallow)** | **14.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 100% Sandstone (litho ASCII aggregate) TG 266.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 266.67647058823536 U |
| mTVDss | -1189.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2237m: lt trnsl brn, FLW:469-472 gpm flks,tr carb flks,fri aggs,lse i/p,
- **SANDSTONE** @ ~2243m: lt trnsl brn,clr, trnsl,tr opq,f-occ med,rr crs,mod wl-wl srt,sbrnd-sbang,wk sil cmt, mnr lt brn arg mtx,occ mic flks, 30-12-2017 tr carb flks,fri aggs,lse i/p,pr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 43.24 | 33 |
| RES_SHALLOW (ohm.m) | 27.23 | 33 |
| **Δ Res (Deep − Shallow)** | **16.01** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 100% Sandstone (litho ASCII aggregate) TG 332.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 332.70625 U |
| mTVDss | -1189.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2243m: lt trnsl brn,clr, trnsl,tr opq,f-occ med,rr crs,mod wl-wl srt,sbrnd-sbang,wk sil cmt, mnr lt brn arg mtx,occ mic flks, 30-12-2017 tr carb flks,fri aggs,lse i/p,pr
- **SILTSTONE** @ ~2249m: (Tr) med gry,med brnsh gry,arg,com micmic,mnr carb spks,rr aren lams,frm-occ mod hd, sbfiss-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 32 |
| RES_DEEP (ohm.m) | 41.84 | 32 |
| RES_SHALLOW (ohm.m) | 28.07 | 32 |
| **Δ Res (Deep − Shallow)** | **13.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 100% Sandstone (litho ASCII aggregate) TG 307.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 307.59375 U |
| mTVDss | -1189.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2243m: lt trnsl brn,clr, trnsl,tr opq,f-occ med,rr crs,mod wl-wl srt,sbrnd-sbang,wk sil cmt, mnr lt brn arg mtx,occ mic flks, 30-12-2017 tr carb flks,fri aggs,lse i/p,pr
- **SILTSTONE** @ ~2249m: (Tr) med gry,med brnsh gry,arg,com micmic,mnr carb spks,rr aren lams,frm-occ mod hd, sbfiss-sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 33 |
| RES_DEEP (ohm.m) | 44.44 | 33 |
| RES_SHALLOW (ohm.m) | 27.44 | 33 |
| **Δ Res (Deep − Shallow)** | **17.00** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 100% Sandstone (litho ASCII aggregate) TG 342.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 342.1411764705882 U |
| mTVDss | -1189.49 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2249m: (Tr) med gry,med brnsh gry,arg,com micmic,mnr carb spks,rr aren lams,frm-occ mod hd, sbfiss-sbblky.
- **SANDSTONE** @ ~2252m: lt trnsl brn,clr, 14 18 28 trnsl,rr opq,f-med,mnr crs,mod wl-pr srt,wk sil cmt,mnr lt brn arg mtx,com mic flks,rr carb flks & frags,fri aggs,lse i/p,pr-fr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 33 |
| RES_DEEP (ohm.m) | 48.07 | 33 |
| RES_SHALLOW (ohm.m) | 33.05 | 33 |
| **Δ Res (Deep − Shallow)** | **15.03** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 100% Sandstone (litho ASCII aggregate) TG 310.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 310.81875 U |
| mTVDss | -1189.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2262m: lt trnsl brn,clr, trnsl,opq,f-med,occ crs lse grs, wl-mod wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,occ mic 7430 flks,tr carb flks,fri aggs,lse i/p,
- **SILTSTONE** @ ~2265m: (Tr)med gry,med 7440 brnsh gry,rr dk gry,arg,micmic,occ carb spks,mod hd-frm,sbblky-sbfiss. (4053)
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 33 |
| RES_DEEP (ohm.m) | 52.31 | 33 |
| RES_SHALLOW (ohm.m) | 36.75 | 33 |
| **Δ Res (Deep − Shallow)** | **15.56** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 100% Sandstone (litho ASCII aggregate) TG 328.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 328.5235294117647 U |
| mTVDss | -1189.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2262m: lt trnsl brn,clr, trnsl,opq,f-med,occ crs lse grs, wl-mod wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,occ mic 7430 flks,tr carb flks,fri aggs,lse i/p,
- **SILTSTONE** @ ~2265m: (Tr)med gry,med 7440 brnsh gry,rr dk gry,arg,micmic,occ carb spks,mod hd-frm,sbblky-sbfiss. (4053)
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 33 |
| RES_DEEP (ohm.m) | 47.70 | 33 |
| RES_SHALLOW (ohm.m) | 33.95 | 33 |
| **Δ Res (Deep − Shallow)** | **13.75** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 100% Sandstone (litho ASCII aggregate) TG 354.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 353.96875 U |
| mTVDss | -1189.70 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2265m: (Tr)med gry,med 7440 brnsh gry,rr dk gry,arg,micmic,occ carb spks,mod hd-frm,sbblky-sbfiss. (4053)
- **SANDSTONE** @ ~2271m: lt trnsl brn,clr, trnsl,opq,pred med-f,com crs lse grs,mod wl-pr srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,com mic flks,mnr carb flks,fri aggs,lse
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.7 | 33 |
| RES_DEEP (ohm.m) | 43.73 | 33 |
| RES_SHALLOW (ohm.m) | 33.05 | 33 |
| **Δ Res (Deep − Shallow)** | **10.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 100% Sandstone (litho ASCII aggregate) TG 370.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 370.66875000000005 U |
| mTVDss | -1189.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2271m: lt trnsl brn,clr, trnsl,opq,pred med-f,com crs lse grs,mod wl-pr srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,com mic flks,mnr carb flks,fri aggs,lse
- **SANDSTONE** @ ~2277m: lt trnsl brn,clr, opq,f-med,occ crs lse grs,mod wl- wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,occ mic flks,rr carb flks,fri aggs,lse i/p,pr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 32 |
| RES_DEEP (ohm.m) | 41.92 | 32 |
| RES_SHALLOW (ohm.m) | 33.35 | 32 |
| **Δ Res (Deep − Shallow)** | **8.57** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 100% Sandstone (litho ASCII aggregate) TG 416.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 416.5764705882352 U |
| mTVDss | -1189.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2277m: lt trnsl brn,clr, opq,f-med,occ crs lse grs,mod wl- wl srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,occ mic flks,rr carb flks,fri aggs,lse i/p,pr vis
- **SANDSTONE** @ ~2283m: lt trnsl brn,occ clr-trnsl,f-crs,dom f,pr srt,sbang- occ sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ mic flks,rr qtz ovgths, fri-mod hd,lse,pr-fr vis por,fr inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 33 |
| RES_DEEP (ohm.m) | 43.98 | 33 |
| RES_SHALLOW (ohm.m) | 33.97 | 33 |
| **Δ Res (Deep − Shallow)** | **10.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 100% Sandstone (litho ASCII aggregate) TG 398.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 398.54999999999995 U |
| mTVDss | -1189.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2283m: lt trnsl brn,occ clr-trnsl,f-crs,dom f,pr srt,sbang- occ sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ mic flks,rr qtz ovgths, fri-mod hd,lse,pr-fr vis por,fr inf
- **SANDSTONE** @ ~2289m: lt trnsl brn,clr- trnsl i/p,f-med,occ crs,pr srt,sbang- mnr sbrnd,wk-mod sil cmt,mnr lt brn 7520 arg mtx,occ mic flks,lse,fri,fr-gd inf por,pr-fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.8 | 33 |
| RES_DEEP (ohm.m) | 44.41 | 33 |
| RES_SHALLOW (ohm.m) | 33.50 | 33 |
| **Δ Res (Deep − Shallow)** | **10.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 100% Sandstone (litho ASCII aggregate) TG 393.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 393.67647058823536 U |
| mTVDss | -1190.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2283m: lt trnsl brn,occ clr-trnsl,f-crs,dom f,pr srt,sbang- occ sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ mic flks,rr qtz ovgths, fri-mod hd,lse,pr-fr vis por,fr inf
- **SANDSTONE** @ ~2289m: lt trnsl brn,clr- trnsl i/p,f-med,occ crs,pr srt,sbang- mnr sbrnd,wk-mod sil cmt,mnr lt brn 7520 arg mtx,occ mic flks,lse,fri,fr-gd inf por,pr-fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 33 |
| RES_DEEP (ohm.m) | 44.29 | 33 |
| RES_SHALLOW (ohm.m) | 32.79 | 33 |
| **Δ Res (Deep − Shallow)** | **11.50** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 100% Sandstone (litho ASCII aggregate) TG 376.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 376.7 U |
| mTVDss | -1190.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2289m: lt trnsl brn,clr- trnsl i/p,f-med,occ crs,pr srt,sbang- mnr sbrnd,wk-mod sil cmt,mnr lt brn 7520 arg mtx,occ mic flks,lse,fri,fr-gd inf por,pr-fr vis por,fluor.
- **SILTSTONE** @ ~2295m: (Tr)dk-med gry, arg-rr aren,occ micmic,loc com mic flks,occ carb spks,mod hd, sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 42.07 | 33 |
| RES_SHALLOW (ohm.m) | 31.82 | 33 |
| **Δ Res (Deep − Shallow)** | **10.25** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 100% Sandstone (litho ASCII aggregate) TG 389.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 389.3 U |
| mTVDss | -1190.17 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2295m: (Tr)dk-med gry, arg-rr aren,occ micmic,loc com mic flks,occ carb spks,mod hd, sbblky-sbfiss.
- **SANDSTONE** @ ~2298m: lt trnsl brn,clr- (4054) trnsl,f-med,occ crs,pr srt,sbang- occ sbrnd,mod sil cmt,mnr lt brn 7550 arg mtx,occ mic flks,fri,lse i/p,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 32 |
| RES_DEEP (ohm.m) | 42.11 | 32 |
| RES_SHALLOW (ohm.m) | 33.37 | 32 |
| **Δ Res (Deep − Shallow)** | **8.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 100% Sandstone (litho ASCII aggregate) TG 454.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 453.99411764705883 U |
| mTVDss | -1190.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2298m: lt trnsl brn,clr- (4054) trnsl,f-med,occ crs,pr srt,sbang- occ sbrnd,mod sil cmt,mnr lt brn 7550 arg mtx,occ mic flks,fri,lse i/p,
- **SANDSTONE** @ ~2304m: clr-trnsl,lt trnsl brn,f-dom med,rr crs,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr lt brn arg mtx,occ mic flks, 7570 fri lse,pr-fr vis por,fr inf por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 42.18 | 33 |
| RES_SHALLOW (ohm.m) | 34.38 | 33 |
| **Δ Res (Deep − Shallow)** | **7.80** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 100% Sandstone (litho ASCII aggregate) TG 435.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 435.42499999999995 U |
| mTVDss | -1190.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: clr-trnsl,lt trnsl brn,f-dom med,rr crs,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr lt brn arg mtx,occ mic flks, 7570 fri lse,pr-fr vis por,fr inf por,
- **SANDSTONE** @ ~2310m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-sbrnd,wk sil cmt,mnr lt brn arg mtx,occ 7590 70 / 6 / 6 / 9 / 9 481 U mic flks,lse,fri i/p,fr-gd inf por, pr-fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 33 |
| RES_DEEP (ohm.m) | 41.21 | 33 |
| RES_SHALLOW (ohm.m) | 31.92 | 33 |
| **Δ Res (Deep − Shallow)** | **9.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 100% Sandstone (litho ASCII aggregate) TG 376.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 376.7176470588235 U |
| mTVDss | -1190.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-sbrnd,wk sil cmt,mnr lt brn arg mtx,occ 7590 70 / 6 / 6 / 9 / 9 481 U mic flks,lse,fri i/p,fr-gd inf por, pr-fr vis por,fluor.
- **SANDSTONE** @ ~2320m: clr-trnsl,lt trnsl brn i/p,f-med,occ crs,pr srt,sbrnd- sbang,wk sil cmt,rr lt brn arg mtx, rr mic flks,dom lse cln grs,occ fri, fr-gd inf por,pr-fr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 33 |
| RES_DEEP (ohm.m) | 41.35 | 33 |
| RES_SHALLOW (ohm.m) | 32.59 | 33 |
| **Δ Res (Deep − Shallow)** | **8.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 100% Sandstone (litho ASCII aggregate) TG 372.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 372.1 U |
| mTVDss | -1190.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr-trnsl,lt trnsl brn i/p,f-med,occ crs,pr srt,sbrnd- sbang,wk sil cmt,rr lt brn arg mtx, rr mic flks,dom lse cln grs,occ fri, fr-gd inf por,pr-fr vis por,fluor.
- **SANDSTONE** @ ~2323m: clr-trnsl,occ lt trnsl brn,f-med,mod wl srt,sbang- sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ mic flks,lse cln grs, 7630 mnr fri,fr-gd inf por,occ pr-fr
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 33 |
| RES_DEEP (ohm.m) | 40.84 | 33 |
| RES_SHALLOW (ohm.m) | 30.29 | 33 |
| **Δ Res (Deep − Shallow)** | **10.54** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 100% Sandstone (litho ASCII aggregate) TG 381.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 381.08125 U |
| mTVDss | -1190.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr-trnsl,lt trnsl brn i/p,f-med,occ crs,pr srt,sbrnd- sbang,wk sil cmt,rr lt brn arg mtx, rr mic flks,dom lse cln grs,occ fri, fr-gd inf por,pr-fr vis por,fluor.
- **SANDSTONE** @ ~2323m: clr-trnsl,occ lt trnsl brn,f-med,mod wl srt,sbang- sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ mic flks,lse cln grs, 7630 mnr fri,fr-gd inf por,occ pr-fr
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 32 |
| RES_DEEP (ohm.m) | 38.41 | 32 |
| RES_SHALLOW (ohm.m) | 28.79 | 32 |
| **Δ Res (Deep − Shallow)** | **9.62** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 100% Sandstone (litho ASCII aggregate) TG 387.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 387.27058823529416 U |
| mTVDss | -1190.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2323m: clr-trnsl,occ lt trnsl brn,f-med,mod wl srt,sbang- sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ mic flks,lse cln grs, 7630 mnr fri,fr-gd inf por,occ pr-fr
- **SANDSTONE** @ ~2329m: lt trnsl brn,clr- trnsl,f-med,rr crs,pr-mod srt,sbang- dom sbrnd,wk-mod sil cmt,occ lt brn (4056) arg mtx,mnr mic flks,fri,lse,pr-fr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.9 | 33 |
| RES_DEEP (ohm.m) | 41.35 | 33 |
| RES_SHALLOW (ohm.m) | 28.20 | 33 |
| **Δ Res (Deep − Shallow)** | **13.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 100% Sandstone (litho ASCII aggregate) TG 368.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 368.90625 U |
| mTVDss | -1190.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2329m: lt trnsl brn,clr- trnsl,f-med,rr crs,pr-mod srt,sbang- dom sbrnd,wk-mod sil cmt,occ lt brn (4056) arg mtx,mnr mic flks,fri,lse,pr-fr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2335m: clr-trnsl,lt trnsl brn,med-crs,occ f,pr srt,ang-sbang, wk sil cmt,occ lt brn arg mtx,occ qtz ovgths,lse cln grs,occ fri,fr-gd inf por,pr-fr vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 33 |
| RES_DEEP (ohm.m) | 43.48 | 33 |
| RES_SHALLOW (ohm.m) | 30.27 | 33 |
| **Δ Res (Deep − Shallow)** | **13.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 100% Sandstone (litho ASCII aggregate) TG 410.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 410.8941176470588 U |
| mTVDss | -1190.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2335m: clr-trnsl,lt trnsl brn,med-crs,occ f,pr srt,ang-sbang, wk sil cmt,occ lt brn arg mtx,occ qtz ovgths,lse cln grs,occ fri,fr-gd inf por,pr-fr vis por,fluor.
- **SILTSTONE** @ ~2338m: (Tr)med-dk gry, occ med gry brn,aren-occ arg,mnr carb spks,micmic,mod hd,sbfiss- sbblky. 7680 65 / 7 / 6 / 11 / 11 467 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 33 |
| RES_DEEP (ohm.m) | 53.80 | 33 |
| RES_SHALLOW (ohm.m) | 26.40 | 33 |
| **Δ Res (Deep − Shallow)** | **27.41** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: 100% Sandstone (litho ASCII aggregate) TG 389.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 389.46875 U |
| mTVDss | -1190.84 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2338m: (Tr)med-dk gry, occ med gry brn,aren-occ arg,mnr carb spks,micmic,mod hd,sbfiss- sbblky. 7680 65 / 7 / 6 / 11 / 11 467 U
- **SANDSTONE** @ ~2341m: lt trnsl brn, clr-trnsl i/p,med-f,crs i/p,pr srt, sbang-occ ang,wk-mod sil cmt, 7690 rr lt brn arg mtx,occ mic flks, lse,fri,fr-gd inf por,pr-fr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 47.39 | 33 |
| RES_SHALLOW (ohm.m) | 21.76 | 33 |
| **Δ Res (Deep − Shallow)** | **25.63** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: 100% Sandstone (litho ASCII aggregate) TG 240.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 240.26875 U |
| mTVDss | -1190.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2347m: clr-trnsl,lt trnsl brn,med,f-crs i/p,pr srt,sbang, 7710 mnr ang,wk sil cmt,mnr lt brn arg mtx,rr qtz ovgths,occ mic flks, lse cln grs,mnr fri,fr-gd inf por,
- **SANDSTONE** @ ~2353m: clr-trnsl,lt trnsl brn,occ mlky,f-crs,dom med,pr srt,sbang-occ ang,wk sil cmt,rr lt brn arg mtx,occ mic flks,lse cln grs,mnr fri,fr-gd inf por,pr-fr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 32 |
| RES_DEEP (ohm.m) | 48.11 | 32 |
| RES_SHALLOW (ohm.m) | 24.72 | 32 |
| **Δ Res (Deep − Shallow)** | **23.39** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 100% Sandstone (litho ASCII aggregate) TG 291.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 291.67058823529413 U |
| mTVDss | -1191.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2353m: clr-trnsl,lt trnsl brn,occ mlky,f-crs,dom med,pr srt,sbang-occ ang,wk sil cmt,rr lt brn arg mtx,occ mic flks,lse cln grs,mnr fri,fr-gd inf por,pr-fr vis
- **SILTSTONE** @ ~2359m: med-dk gry,med (4057) gry brn,com micmic,com carb spks,frm-mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 54.87 | 33 |
| RES_SHALLOW (ohm.m) | 28.87 | 33 |
| **Δ Res (Deep − Shallow)** | **26.00** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 2370m: 100% Sandstone (litho ASCII aggregate) TG 399.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 399.14375 U |
| mTVDss | -1191.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2353m: clr-trnsl,lt trnsl brn,occ mlky,f-crs,dom med,pr srt,sbang-occ ang,wk sil cmt,rr lt brn arg mtx,occ mic flks,lse cln grs,mnr fri,fr-gd inf por,pr-fr vis
- **SILTSTONE** @ ~2359m: med-dk gry,med (4057) gry brn,com micmic,com carb spks,frm-mod hd,sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 33 |
| RES_DEEP (ohm.m) | 51.46 | 33 |
| RES_SHALLOW (ohm.m) | 27.81 | 33 |
| **Δ Res (Deep − Shallow)** | **23.65** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 100% Sandstone (litho ASCII aggregate) TG 438.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 438.60588235294114 U |
| mTVDss | -1191.24 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2359m: med-dk gry,med (4057) gry brn,com micmic,com carb spks,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2362m: lt trnsl brn, clr-trnsl,med,occ f-crs,mod wl- 7760 pr srt,sbang-sbrnd,wk sil cmt, rr lt brn arg mtx,rr qtz ovgths, lse cln grs,fri,fr-gd inf por,pr-
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 33 |
| RES_DEEP (ohm.m) | 49.23 | 33 |
| RES_SHALLOW (ohm.m) | 25.57 | 33 |
| **Δ Res (Deep − Shallow)** | **23.65** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 100% Sandstone (litho ASCII aggregate) TG 401.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 401.38125 U |
| mTVDss | -1191.41 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2368m: med-dk gry brn, med gry,aren i/p,micmic,occ carb 7780 74 / 7 / 5 / 7 / 7 547 U spks,frm-mod hd,sbfiss,occ sbblky.
- **SANDSTONE** @ ~2376m: lt trnsl brn,clr- 14 18 28 trnsl,f-crs,pr srt,sbang-occ sbrnd, wk-mod sil cmt,mnr lt brn arg mtx, occ carb spks,fri,lse,fr-gd inf por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 45.15 | 33 |
| RES_SHALLOW (ohm.m) | 25.09 | 33 |
| **Δ Res (Deep − Shallow)** | **20.06** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 100% Sandstone (litho ASCII aggregate) TG 417.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn evn fluor |
| Total Gas | 417.94705882352946 U |
| mTVDss | -1191.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2368m: med-dk gry brn, med gry,aren i/p,micmic,occ carb 7780 74 / 7 / 5 / 7 / 7 547 U spks,frm-mod hd,sbfiss,occ sbblky.
- **SANDSTONE** @ ~2376m: lt trnsl brn,clr- 14 18 28 trnsl,f-crs,pr srt,sbang-occ sbrnd, wk-mod sil cmt,mnr lt brn arg mtx, occ carb spks,fri,lse,fr-gd inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 33 |
| RES_DEEP (ohm.m) | 51.43 | 33 |
| RES_SHALLOW (ohm.m) | 25.85 | 33 |
| **Δ Res (Deep − Shallow)** | **25.58** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2417.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2420m: 100% Sandstone (litho ASCII aggregate) TG 404.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 404.86875000000003 U |
| mTVDss | -1193.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2408m: lt trnsl brn, vf-occ med,mod srt,sbang-occ sbrnd,wk-mod sil cmt,occ lt brn arg mtx,tr liths,fri-mod hd,lse i/p, pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2414m: med-dk gry,occ med gry brn,arg-occ aren,micmic, occ carb spks,frm-mod hd,sbfiss- sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.4 | 33 |
| RES_DEEP (ohm.m) | 38.63 | 33 |
| RES_SHALLOW (ohm.m) | 25.59 | 33 |
| **Δ Res (Deep − Shallow)** | **13.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2425 m MD — Interval 2422.5 – 2427.5 m

**Sample Description (spreadsheet):** Sample 2425m: 100% Sandstone (litho ASCII aggregate) TG 363.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 363.0777777777778 U |
| mTVDss | -1193.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2408m: lt trnsl brn, vf-occ med,mod srt,sbang-occ sbrnd,wk-mod sil cmt,occ lt brn arg mtx,tr liths,fri-mod hd,lse i/p, pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2414m: med-dk gry,occ med gry brn,arg-occ aren,micmic, occ carb spks,frm-mod hd,sbfiss- sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 33 |
| RES_DEEP (ohm.m) | 37.04 | 33 |
| RES_SHALLOW (ohm.m) | 29.62 | 33 |
| **Δ Res (Deep − Shallow)** | **7.42** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2427.5 – 2432.5 m

**Sample Description (spreadsheet):** Sample 2430m: 100% Sandstone (litho ASCII aggregate) TG 357.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 357.51874999999995 U |
| mTVDss | -1193.51 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2414m: med-dk gry,occ med gry brn,arg-occ aren,micmic, occ carb spks,frm-mod hd,sbfiss- sbblky.
- **SANDSTONE** @ ~2417m: clr-trnsl,lt trnsl brn,med,occ f-crs,mod srt,sbang- 7940 79 / 6 / 4 / 5 / 6 423 U occ sbrnd,wk sil cmt,mnr lt brn arg mtx,mnr qtz ovgths,lse cln grs,occ
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 32.50 | 33 |
| RES_SHALLOW (ohm.m) | 26.41 | 33 |
| **Δ Res (Deep − Shallow)** | **6.09** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2435 m MD — Interval 2432.5 – 2437.5 m

**Sample Description (spreadsheet):** Sample 2435m: 100% Sandstone (litho ASCII aggregate) TG 347.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 347.50588235294117 U |
| mTVDss | -1193.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2426m: lt trnsl brn, f-crs,pr srt,sbang-occ ang,wk- mod sil cmt,rr lt brn arg mtx,occ 74 / 6 / 5 / 8 / 7 434 U qtz ovgths,lse cln grs,fri i/p,
- **SILTSTONE** @ ~2429m: med brn,occ med brn gry,mnr dk gry,arg-occ aren, micmic,occ carb spks,mod hd- occ hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 30.45 | 33 |
| RES_SHALLOW (ohm.m) | 22.03 | 33 |
| **Δ Res (Deep − Shallow)** | **8.42** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2437.5 – 2442.5 m

**Sample Description (spreadsheet):** Sample 2440m: 100% Sandstone (litho ASCII aggregate) TG 259.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 259.19375 U |
| mTVDss | -1193.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2426m: lt trnsl brn, f-crs,pr srt,sbang-occ ang,wk- mod sil cmt,rr lt brn arg mtx,occ 74 / 6 / 5 / 8 / 7 434 U qtz ovgths,lse cln grs,fri i/p,
- **SILTSTONE** @ ~2429m: med brn,occ med brn gry,mnr dk gry,arg-occ aren, micmic,occ carb spks,mod hd- occ hd,sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.3 | 32 |
| RES_DEEP (ohm.m) | 24.70 | 32 |
| RES_SHALLOW (ohm.m) | 17.74 | 32 |
| **Δ Res (Deep − Shallow)** | **6.97** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2445 m MD — Interval 2442.5 – 2447.5 m

**Sample Description (spreadsheet):** Sample 2445m: 100% Sandstone (litho ASCII aggregate) TG 229.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 229.95 U |
| mTVDss | -1194.09 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2429m: med brn,occ med brn gry,mnr dk gry,arg-occ aren, micmic,occ carb spks,mod hd- occ hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2435m: clr-trnsl,lt trnsl 14 18 28 brn,med-crs,f i/p,pr srt,sbang-sbrnd, mod-wk sil cmt,occ qtz ovgths,lse cln grs,fri i/p,fr-gd inf por,pr-fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.5 | 33 |
| RES_DEEP (ohm.m) | 23.58 | 33 |
| RES_SHALLOW (ohm.m) | 17.55 | 33 |
| **Δ Res (Deep − Shallow)** | **6.03** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: 100% Sandstone (litho ASCII aggregate) TG 250.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 250.37058823529412 U |
| mTVDss | -1194.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2435m: clr-trnsl,lt trnsl 14 18 28 brn,med-crs,f i/p,pr srt,sbang-sbrnd, mod-wk sil cmt,occ qtz ovgths,lse cln grs,fri i/p,fr-gd inf por,pr-fr vis por,fluor.
- **SANDSTONE** @ ~2444m: lt trnsl brn, clr-trnsl,occ mlky wh,f-crs,pr srt, sbang-ang,wk-mod sil cmt,rr-tr lt brn arg mtx,occ qtz ovgths,lse, fri-mod hd i/p,pr-fr vis por,fr-gd
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.1 | 33 |
| RES_DEEP (ohm.m) | 19.74 | 33 |
| RES_SHALLOW (ohm.m) | 15.47 | 33 |
| **Δ Res (Deep − Shallow)** | **4.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: 100% Sandstone (litho ASCII aggregate) TG 226.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% of SST, |
| Total Gas | 226.1125 U |
| mTVDss | -1194.46 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2444m: lt trnsl brn, clr-trnsl,occ mlky wh,f-crs,pr srt, sbang-ang,wk-mod sil cmt,rr-tr lt brn arg mtx,occ qtz ovgths,lse, fri-mod hd i/p,pr-fr vis por,fr-gd
- **SILTSTONE** @ ~2451m: med-dk gry brn, med gry,arg-occ aren,occ carb spks, 272 U micmic,mod hd,sbblky-sbfiss. (4068)
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 33 |
| RES_DEEP (ohm.m) | 19.01 | 33 |
| RES_SHALLOW (ohm.m) | 15.14 | 33 |
| **Δ Res (Deep − Shallow)** | **3.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 100% Sandstone (litho ASCII aggregate) TG 218.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 218.30588235294118 U |
| mTVDss | -1194.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2444m: lt trnsl brn, clr-trnsl,occ mlky wh,f-crs,pr srt, sbang-ang,wk-mod sil cmt,rr-tr lt brn arg mtx,occ qtz ovgths,lse, fri-mod hd i/p,pr-fr vis por,fr-gd
- **SILTSTONE** @ ~2451m: med-dk gry brn, med gry,arg-occ aren,occ carb spks, 272 U micmic,mod hd,sbblky-sbfiss. (4068)
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.7 | 33 |
| RES_DEEP (ohm.m) | 18.27 | 33 |
| RES_SHALLOW (ohm.m) | 14.95 | 33 |
| **Δ Res (Deep − Shallow)** | **3.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: 100% Sandstone (litho ASCII aggregate) TG 160.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 160.36249999999998 U |
| mTVDss | -1194.73 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2451m: med-dk gry brn, med gry,arg-occ aren,occ carb spks, 272 U micmic,mod hd,sbblky-sbfiss. (4068)
- **SANDSTONE** @ ~2457m: lt trnsl brn, f-occ med,wl srt,sbang-occ sbrnd, 73 / 5 / 4 / 7 / 11 318 U wk-mod sil cmt,occ-loc com lt brn arg mtx,rr carb spks,fri-mod hd,pr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.7 | 32 |
| RES_DEEP (ohm.m) | 17.85 | 32 |
| RES_SHALLOW (ohm.m) | 14.62 | 32 |
| **Δ Res (Deep − Shallow)** | **3.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: 100% Sandstone (litho ASCII aggregate) TG 145.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 145.53125 U |
| mTVDss | -1194.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2457m: lt trnsl brn, f-occ med,wl srt,sbang-occ sbrnd, 73 / 5 / 4 / 7 / 11 318 U wk-mod sil cmt,occ-loc com lt brn arg mtx,rr carb spks,fri-mod hd,pr
- **SILTSTONE** @ ~2463m: lt-occ med brn, com aren,micmic,occ carb spks, frm-mod hd,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.2 | 33 |
| RES_DEEP (ohm.m) | 17.96 | 33 |
| RES_SHALLOW (ohm.m) | 14.73 | 33 |
| **Δ Res (Deep − Shallow)** | **3.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 100% Sandstone (litho ASCII aggregate) TG 125.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 125.84705882352942 U |
| mTVDss | -1194.83 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2463m: lt-occ med brn, com aren,micmic,occ carb spks, frm-mod hd,sbblky.
- **SANDSTONE** @ ~2466m: 12-18 klbs 8100 SANDSTONE:lt trnsl brn, FLW:432-509 gpm arg mtx,mnr mic flks,fri,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 33 |
| RES_DEEP (ohm.m) | 19.94 | 33 |
| RES_SHALLOW (ohm.m) | 14.91 | 33 |
| **Δ Res (Deep − Shallow)** | **5.03** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 100% Sandstone (litho ASCII aggregate) TG 166.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 166.25 U |
| mTVDss | -1194.88 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2463m: lt-occ med brn, com aren,micmic,occ carb spks, frm-mod hd,sbblky.
- **SANDSTONE** @ ~2466m: 12-18 klbs 8100 SANDSTONE:lt trnsl brn, FLW:432-509 gpm arg mtx,mnr mic flks,fri,pr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.4 | 33 |
| RES_DEEP (ohm.m) | 17.47 | 33 |
| RES_SHALLOW (ohm.m) | 13.49 | 33 |
| **Δ Res (Deep − Shallow)** | **3.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 100% Sandstone (litho ASCII aggregate) TG 126.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 126.15294117647058 U |
| mTVDss | -1194.93 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2475m: lt brn-lt brn gry,aren,com grd to vf SST,com micmic,occ-com carb spks,mod hd,sbblky.
- **SANDSTONE** @ ~2478m: lt-med trnsl 75 / 5 / 3 / 6 / 11 206 U brn,f-vf grd to aren SLTST i/p, sbang-sbrnd,wk-mod sil cmt,occ-
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.6 | 33 |
| RES_DEEP (ohm.m) | 18.61 | 33 |
| RES_SHALLOW (ohm.m) | 13.88 | 33 |
| **Δ Res (Deep − Shallow)** | **4.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 100% Sandstone (litho ASCII aggregate) TG 120.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 120.58125 U |
| mTVDss | -1194.98 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2475m: lt brn-lt brn gry,aren,com grd to vf SST,com micmic,occ-com carb spks,mod hd,sbblky.
- **SANDSTONE** @ ~2478m: lt-med trnsl 75 / 5 / 3 / 6 / 11 206 U brn,f-vf grd to aren SLTST i/p, sbang-sbrnd,wk-mod sil cmt,occ-
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.9 | 32 |
| RES_DEEP (ohm.m) | 25.81 | 32 |
| RES_SHALLOW (ohm.m) | 18.26 | 32 |
| **Δ Res (Deep − Shallow)** | **7.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 100% Sandstone (litho ASCII aggregate) TG 137.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 137.52499999999998 U |
| mTVDss | -1194.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2478m: lt-med trnsl 75 / 5 / 3 / 6 / 11 206 U brn,f-vf grd to aren SLTST i/p, sbang-sbrnd,wk-mod sil cmt,occ-
- **SANDSTONE** @ ~2484m: lt-med trnsl brn, vf-f,wl srt,sbang-sbrnd,mod sil cmt, 8160 occ lt brn arg mtx,occ mic flks, occ carb spks,mod hd-fri,v pr-pr 73 / 5 / 3 / 6 / 13 114 U vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 33 |
| RES_DEEP (ohm.m) | 23.84 | 33 |
| RES_SHALLOW (ohm.m) | 17.90 | 33 |
| **Δ Res (Deep − Shallow)** | **5.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: 100% Sandstone (litho ASCII aggregate) TG 145.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 144.95882352941175 U |
| mTVDss | -1194.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2484m: lt-med trnsl brn, vf-f,wl srt,sbang-sbrnd,mod sil cmt, 8160 occ lt brn arg mtx,occ mic flks, occ carb spks,mod hd-fri,v pr-pr 73 / 5 / 3 / 6 / 13 114 U vis por,fluor.
- **SILTSTONE** @ ~2493m: lt brn,occ lt brn gry,aren grd to vf SST i/p, gy, g p, occ carb spks,micmic,mod hd, sbblky-mnr blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.2 | 33 |
| RES_DEEP (ohm.m) | 21.12 | 33 |
| RES_SHALLOW (ohm.m) | 16.41 | 33 |
| **Δ Res (Deep − Shallow)** | **4.71** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 100% Sandstone (litho ASCII aggregate) TG 116.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 116.84375 U |
| mTVDss | -1194.91 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2493m: lt brn,occ lt brn gry,aren grd to vf SST i/p, gy, g p, occ carb spks,micmic,mod hd, sbblky-mnr blky.
- **SANDSTONE** @ ~2496m: lt trnsl brn,f,rr med, 0 0.5 1 4 14 8200 wl srt,sbang-occ ang,mod sil cmt, 14 18 28 rr lt brn arg mtx,rr carb spks, fri-mod hd,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 33 |
| RES_DEEP (ohm.m) | 23.87 | 33 |
| RES_SHALLOW (ohm.m) | 18.06 | 33 |
| **Δ Res (Deep − Shallow)** | **5.80** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: 100% Sandstone (litho ASCII aggregate) TG 116.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 116.83529411764705 U |
| mTVDss | -1194.88 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2493m: lt brn,occ lt brn gry,aren grd to vf SST i/p, gy, g p, occ carb spks,micmic,mod hd, sbblky-mnr blky.
- **SANDSTONE** @ ~2496m: lt trnsl brn,f,rr med, 0 0.5 1 4 14 8200 wl srt,sbang-occ ang,mod sil cmt, 14 18 28 rr lt brn arg mtx,rr carb spks, fri-mod hd,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 27.29 | 33 |
| RES_SHALLOW (ohm.m) | 20.11 | 33 |
| **Δ Res (Deep − Shallow)** | **7.17** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: 100% Sandstone (litho ASCII aggregate) TG 140.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 140.8875 U |
| mTVDss | -1194.85 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2502m: lt brn gry,lt brn,occ med gry,dom aren,occ grd to vf SST,micmic,occ carb spks,mod hd,sbblky-occ blky.
- **SANDSTONE** @ ~2505m: lt trnsl brn,occ trnsl- 8230 clr,f-occ med,mod wl srt,sbang- occ ang,mod sil cmt,mnr lt brn arg mtx,occ mic flks,fri-occ mod hd, pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.2 | 33 |
| RES_DEEP (ohm.m) | 28.05 | 33 |
| RES_SHALLOW (ohm.m) | 22.91 | 33 |
| **Δ Res (Deep − Shallow)** | **5.14** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 100% Sandstone (litho ASCII aggregate) TG 158.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 157.9625 U |
| mTVDss | -1194.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2505m: lt trnsl brn,occ trnsl- 8230 clr,f-occ med,mod wl srt,sbang- occ ang,mod sil cmt,mnr lt brn arg mtx,occ mic flks,fri-occ mod hd, pr vis por,fluor.
- **SILTSTONE** @ ~2521m: lt brn-brn gry,lt-occ med gry,arg-dom aren,micmic,occ carb spks,mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.1 | 32 |
| RES_DEEP (ohm.m) | 29.43 | 32 |
| RES_SHALLOW (ohm.m) | 22.10 | 32 |
| **Δ Res (Deep − Shallow)** | **7.33** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: 100% Sandstone (litho ASCII aggregate) TG 170.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 170.0529411764706 U |
| mTVDss | -1194.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2521m: lt brn-brn gry,lt-occ med gry,arg-dom aren,micmic,occ carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2527m: lt trnsl brn,mnr clr- trnsl,f-occ med,wl srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg mtx,fri-occ mod hd,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.7 | 33 |
| RES_DEEP (ohm.m) | 28.38 | 33 |
| RES_SHALLOW (ohm.m) | 19.44 | 33 |
| **Δ Res (Deep − Shallow)** | **8.94** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2527.5 – 2532.5 m

**Sample Description (spreadsheet):** Sample 2530m: 100% Sandstone (litho ASCII aggregate) TG 186.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 186.64375 U |
| mTVDss | -1194.67 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2521m: lt brn-brn gry,lt-occ med gry,arg-dom aren,micmic,occ carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2527m: lt trnsl brn,mnr clr- trnsl,f-occ med,wl srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg mtx,fri-occ mod hd,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.7 | 33 |
| RES_DEEP (ohm.m) | 31.96 | 33 |
| RES_SHALLOW (ohm.m) | 21.60 | 33 |
| **Δ Res (Deep − Shallow)** | **10.36** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2535 m MD — Interval 2532.5 – 2537.5 m

**Sample Description (spreadsheet):** Sample 2535m: 100% Sandstone (litho ASCII aggregate) TG 186.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 186.1 U |
| mTVDss | -1194.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2521m: lt brn-brn gry,lt-occ med gry,arg-dom aren,micmic,occ carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2527m: lt trnsl brn,mnr clr- trnsl,f-occ med,wl srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg mtx,fri-occ mod hd,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 33 |
| RES_DEEP (ohm.m) | 35.96 | 33 |
| RES_SHALLOW (ohm.m) | 27.25 | 33 |
| **Δ Res (Deep − Shallow)** | **8.71** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2537.5 – 2542.5 m

**Sample Description (spreadsheet):** Sample 2540m: 100% Sandstone (litho ASCII aggregate) TG 219.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 219.11875 U |
| mTVDss | -1194.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2527m: lt trnsl brn,mnr clr- trnsl,f-occ med,wl srt,sbang-occ ang,wk-mod sil cmt,mnr lt brn arg mtx,fri-occ mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~2533m: lt brn-lt brn gry,com aren,grd to vf SST i/p,micmic,occ carb spks,mod hd,sbblky-occ blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.2 | 33 |
| RES_DEEP (ohm.m) | 36.41 | 33 |
| RES_SHALLOW (ohm.m) | 26.27 | 33 |
| **Δ Res (Deep − Shallow)** | **10.13** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2545 m MD — Interval 2542.5 – 2547.5 m

**Sample Description (spreadsheet):** Sample 2545m: 100% Sandstone (litho ASCII aggregate) TG 208.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 208.13125 U |
| mTVDss | -1194.46 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2533m: lt brn-lt brn gry,com aren,grd to vf SST i/p,micmic,occ carb spks,mod hd,sbblky-occ blky.
- **SANDSTONE** @ ~2536m: lt trnsl brn,occ clr- 8330 trnsl,f-occ med,mod wl srt,sbang- ang,mod sil cmt,mnr lt brn arg mtx, occ mic flks,fri-mod hd,pr vis por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 32 |
| RES_DEEP (ohm.m) | 33.28 | 32 |
| RES_SHALLOW (ohm.m) | 23.91 | 32 |
| **Δ Res (Deep − Shallow)** | **9.37** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2547.5 – 2552.5 m

**Sample Description (spreadsheet):** Sample 2550m: 100% Sandstone (litho ASCII aggregate) TG 159.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn fluor |
| Total Gas | 159.2705882352941 U |
| mTVDss | -1194.39 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2533m: lt brn-lt brn gry,com aren,grd to vf SST i/p,micmic,occ carb spks,mod hd,sbblky-occ blky.
- **SANDSTONE** @ ~2536m: lt trnsl brn,occ clr- 8330 trnsl,f-occ med,mod wl srt,sbang- ang,mod sil cmt,mnr lt brn arg mtx, occ mic flks,fri-mod hd,pr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.8 | 33 |
| RES_DEEP (ohm.m) | 32.59 | 33 |
| RES_SHALLOW (ohm.m) | 22.98 | 33 |
| **Δ Res (Deep − Shallow)** | **9.62** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2555 m MD — Interval 2552.5 – 2557.5 m

**Sample Description (spreadsheet):** Sample 2555m: 100% Sandstone (litho ASCII aggregate) TG 117.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 117.675 U |
| mTVDss | -1194.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2551m: lt trnsl brn,f-occ med, wl srt,sbang-occ ang,mod sil cmt, mnr lt brn arg mtx,mnr slty lams, occ mic flks,mod hd,pr vis por, 8380 fluor.
- **SILTSTONE** @ ~2554m: 7-13 klbs 8390 SILTSTONE:med-lt brn gry,lt brn FLW:496-512 gpm 71 / 5 / 3 / 6 / 15
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.3 | 33 |
| RES_DEEP (ohm.m) | 25.31 | 33 |
| RES_SHALLOW (ohm.m) | 17.52 | 33 |
| **Δ Res (Deep − Shallow)** | **7.79** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2557.5 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 100% Sandstone (litho ASCII aggregate) TG 128.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 128.25294117647059 U |
| mTVDss | -1194.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2551m: lt trnsl brn,f-occ med, wl srt,sbang-occ ang,mod sil cmt, mnr lt brn arg mtx,mnr slty lams, occ mic flks,mod hd,pr vis por, 8380 fluor.
- **SILTSTONE** @ ~2554m: 7-13 klbs 8390 SILTSTONE:med-lt brn gry,lt brn FLW:496-512 gpm 71 / 5 / 3 / 6 / 15
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.1 | 33 |
| RES_DEEP (ohm.m) | 23.26 | 33 |
| RES_SHALLOW (ohm.m) | 17.73 | 33 |
| **Δ Res (Deep − Shallow)** | **5.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 100% Sandstone (litho ASCII aggregate) TG 187.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 187.49374999999998 U |
| mTVDss | -1194.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2551m: lt trnsl brn,f-occ med, wl srt,sbang-occ ang,mod sil cmt, mnr lt brn arg mtx,mnr slty lams, occ mic flks,mod hd,pr vis por, 8380 fluor.
- **SILTSTONE** @ ~2554m: 7-13 klbs 8390 SILTSTONE:med-lt brn gry,lt brn FLW:496-512 gpm 71 / 5 / 3 / 6 / 15
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 33 |
| RES_DEEP (ohm.m) | 25.10 | 33 |
| RES_SHALLOW (ohm.m) | 17.58 | 33 |
| **Δ Res (Deep − Shallow)** | **7.52** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 100% Sandstone (litho ASCII aggregate) TG 223.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 223.35 U |
| mTVDss | -1194.09 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2554m: 7-13 klbs 8390 SILTSTONE:med-lt brn gry,lt brn FLW:496-512 gpm 71 / 5 / 3 / 6 / 15
- **SANDSTONE** @ ~2554m: lt gry,lt trnsl brn,vf-f, 8410 occ med,com grd to aren SLTST,mod srt,sbang-sbrnd,mod sil cmt,occ-loc com lt brn-lt gry arg mtx,occ carb spks,com slty lams,fri-mod hd,pr-v
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 32 |
| RES_DEEP (ohm.m) | 27.96 | 32 |
| RES_SHALLOW (ohm.m) | 22.38 | 32 |
| **Δ Res (Deep − Shallow)** | **5.58** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 100% Sandstone (litho ASCII aggregate) TG 256.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 256.58235294117645 U |
| mTVDss | -1194.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2566m: lt trnsl brn,lt gry,f, occ vf-med,mod wl srt,sbang-occ 8430 sbrnd,sil cmt,mnr lt brn arg mtx, occ carb spks & mic flks,fri,pr vis por,fluor.
- **SILTSTONE** @ ~2576m: med gry-gry brn,occ lt brn,arg-aren,occ carb spks,micmic, mod hd,sbblky-blky. 8460 SURVEY @ 8456.74'MDRT INC:90.89° AZI:50.58°G
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 28.86 | 33 |
| RES_SHALLOW (ohm.m) | 24.96 | 33 |
| **Δ Res (Deep − Shallow)** | **3.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 100% Sandstone (litho ASCII aggregate) TG 225.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 225.225 U |
| mTVDss | -1193.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2566m: lt trnsl brn,lt gry,f, occ vf-med,mod wl srt,sbang-occ 8430 sbrnd,sil cmt,mnr lt brn arg mtx, occ carb spks & mic flks,fri,pr vis por,fluor.
- **SILTSTONE** @ ~2576m: med gry-gry brn,occ lt brn,arg-aren,occ carb spks,micmic, mod hd,sbblky-blky. 8460 SURVEY @ 8456.74'MDRT INC:90.89° AZI:50.58°G
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 33 |
| RES_DEEP (ohm.m) | 28.02 | 33 |
| RES_SHALLOW (ohm.m) | 23.99 | 33 |
| **Δ Res (Deep − Shallow)** | **4.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 100% Sandstone (litho ASCII aggregate) TG 263.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 263.364705882353 U |
| mTVDss | -1193.96 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2576m: med gry-gry brn,occ lt brn,arg-aren,occ carb spks,micmic, mod hd,sbblky-blky. 8460 SURVEY @ 8456.74'MDRT INC:90.89° AZI:50.58°G
- **SANDSTONE** @ ~2582m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-occ sbrnd,mod sil cmt,occ-mnr lt brn arg mtx,occ mic 81 / 6 / 4 / 4 / 5 flks,mod hd,fri,pr vis por,fr inf por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 33 |
| RES_DEEP (ohm.m) | 28.57 | 33 |
| RES_SHALLOW (ohm.m) | 22.97 | 33 |
| **Δ Res (Deep − Shallow)** | **5.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 100% Sandstone (litho ASCII aggregate) TG 293.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 293.01875 U |
| mTVDss | -1193.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2576m: med gry-gry brn,occ lt brn,arg-aren,occ carb spks,micmic, mod hd,sbblky-blky. 8460 SURVEY @ 8456.74'MDRT INC:90.89° AZI:50.58°G
- **SANDSTONE** @ ~2582m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-occ sbrnd,mod sil cmt,occ-mnr lt brn arg mtx,occ mic 81 / 6 / 4 / 4 / 5 flks,mod hd,fri,pr vis por,fr inf por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 32.42 | 33 |
| RES_SHALLOW (ohm.m) | 22.72 | 33 |
| **Δ Res (Deep − Shallow)** | **9.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 100% Sandstone (litho ASCII aggregate) TG 243.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 243.125 U |
| mTVDss | -1193.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2582m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-occ sbrnd,mod sil cmt,occ-mnr lt brn arg mtx,occ mic 81 / 6 / 4 / 4 / 5 flks,mod hd,fri,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2585m: clr-trnsl,lt trnsl brn, 8490 f-crs,pr srt,sbang-sbrnd,mod sil cmt,rr-tr lt brn arg mtx,rr mic flks, 81 / 6 / 4 / 4 / 5 319 U fri-occ mod hd,lse,pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.4 | 32 |
| RES_DEEP (ohm.m) | 31.22 | 32 |
| RES_SHALLOW (ohm.m) | 20.07 | 32 |
| **Δ Res (Deep − Shallow)** | **11.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2665 m MD — Interval 2662.5 – 2667.5 m

**Sample Description (spreadsheet):** Sample 2665m: 100% Sandstone (litho ASCII aggregate) TG 117.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 117.81875 U |
| mTVDss | -1195.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2649m: 1227-1888 psi SANDSTONE:off wh,occ lt gry,vf-f, FLW:398-507 gpm wl srt,sbang-sbrnd,mod sil cmt,occ- 8700 com off wh arg mtx,micmic i/p,mod hd-hd,pr-v pr vis por,fluor.
- **SILTSTONE** @ ~2655m: med-occ dk gry,lt-dk brn, arg-occ aren,sil i/p,loc sid,micmic, hd-v hd,mod hd i/p,sbblky,occ blky- sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 33 |
| RES_DEEP (ohm.m) | 23.09 | 33 |
| RES_SHALLOW (ohm.m) | 19.69 | 33 |
| **Δ Res (Deep − Shallow)** | **3.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2667.5 – 2672.5 m

**Sample Description (spreadsheet):** Sample 2670m: 100% Sandstone (litho ASCII aggregate) TG 134.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | v hd (0.10) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 134.43529411764706 U |
| mTVDss | -1195.40 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2655m: med-occ dk gry,lt-dk brn, arg-occ aren,sil i/p,loc sid,micmic, hd-v hd,mod hd i/p,sbblky,occ blky- sbfiss.
- **SANDSTONE** @ ~2661m: clr-trnsl,mnr lt trnsl brn,occ off wh,med-crs,occ f,pr 81 / 6 / 4 / 4 / 5 259 U srt,ang-sbang,occ sbrnd,wk-mod sil cmt,mnr off wh-lt brn arg mtx, 8740 tr liths,lse cln grs,mod hd,fr-gd
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.2 | 33 |
| RES_DEEP (ohm.m) | 21.80 | 33 |
| RES_SHALLOW (ohm.m) | 18.11 | 33 |
| **Δ Res (Deep − Shallow)** | **3.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2675 m MD — Interval 2672.5 – 2677.5 m

**Sample Description (spreadsheet):** Sample 2675m: 100% Sandstone (litho ASCII aggregate) TG 110.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 110.65625 U |
| mTVDss | -1195.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2661m: clr-trnsl,mnr lt trnsl brn,occ off wh,med-crs,occ f,pr 81 / 6 / 4 / 4 / 5 259 U srt,ang-sbang,occ sbrnd,wk-mod sil cmt,mnr off wh-lt brn arg mtx, 8740 tr liths,lse cln grs,mod hd,fr-gd
- **SANDSTONE** @ ~2664m: clr-trnsl,off wh, 8760 med-crs,f i/p,pr srt,sbang-occ ang, sbrnd,wk-mod sil cmt,mnr loc lt 81 / 6 / 4 / 4 / 5 brn arg mtx,mnr mic flks,lse,fri i/p,fr-gd inf por,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.0 | 32 |
| RES_DEEP (ohm.m) | 17.41 | 32 |
| RES_SHALLOW (ohm.m) | 13.88 | 32 |
| **Δ Res (Deep − Shallow)** | **3.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2677.5 – 2682.5 m

**Sample Description (spreadsheet):** Sample 2680m: 100% Sandstone (litho ASCII aggregate) TG 112.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 112.85625 U |
| mTVDss | -1195.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2664m: clr-trnsl,off wh, 8760 med-crs,f i/p,pr srt,sbang-occ ang, sbrnd,wk-mod sil cmt,mnr loc lt 81 / 6 / 4 / 4 / 5 brn arg mtx,mnr mic flks,lse,fri i/p,fr-gd inf por,pr vis por,fluor.
- **SILTSTONE** @ ~2673m: med brn,occ med gry, arg,rr aren,occ sil,micmic,rr carb spks i/p,sid i/p,mod hd-hd,occ v hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.6 | 33 |
| RES_DEEP (ohm.m) | 16.01 | 33 |
| RES_SHALLOW (ohm.m) | 13.52 | 33 |
| **Δ Res (Deep − Shallow)** | **2.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2685 m MD — Interval 2682.5 – 2687.5 m

**Sample Description (spreadsheet):** Sample 2685m: 100% Sandstone (litho ASCII aggregate) TG 163.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 163.94117647058823 U |
| mTVDss | -1195.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2673m: med brn,occ med gry, arg,rr aren,occ sil,micmic,rr carb spks i/p,sid i/p,mod hd-hd,occ v hd,sbblky-blky.
- **SANDSTONE** @ ~2679m: clr-trnsl,trnsl brn,off wh,tr frstd,f-med,tr crs-v crs,pr srt,sbang-ang,sbrnd i/p,wk-mod sil cmt,rr lt brn arg mtx i/p,tr mic flks,lse cln grs,fri,fr inf & pr vis por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.5 | 33 |
| RES_DEEP (ohm.m) | 16.51 | 33 |
| RES_SHALLOW (ohm.m) | 14.48 | 33 |
| **Δ Res (Deep − Shallow)** | **2.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2687.5 – 2692.5 m

**Sample Description (spreadsheet):** Sample 2690m: 100% Sandstone (litho ASCII aggregate) TG 206.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 206.05 U |
| mTVDss | -1195.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2673m: med brn,occ med gry, arg,rr aren,occ sil,micmic,rr carb spks i/p,sid i/p,mod hd-hd,occ v hd,sbblky-blky.
- **SANDSTONE** @ ~2679m: clr-trnsl,trnsl brn,off wh,tr frstd,f-med,tr crs-v crs,pr srt,sbang-ang,sbrnd i/p,wk-mod sil cmt,rr lt brn arg mtx i/p,tr mic flks,lse cln grs,fri,fr inf & pr vis por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.9 | 33 |
| RES_DEEP (ohm.m) | 16.44 | 33 |
| RES_SHALLOW (ohm.m) | 15.34 | 33 |
| **Δ Res (Deep − Shallow)** | **1.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2695 m MD — Interval 2692.5 – 2697.5 m

**Sample Description (spreadsheet):** Sample 2695m: 100% Sandstone (litho ASCII aggregate) TG 283.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 283.1764705882353 U |
| mTVDss | -1196.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2679m: clr-trnsl,trnsl brn,off wh,tr frstd,f-med,tr crs-v crs,pr srt,sbang-ang,sbrnd i/p,wk-mod sil cmt,rr lt brn arg mtx i/p,tr mic flks,lse cln grs,fri,fr inf & pr vis por,
- **SILTSTONE** @ ~2685m: med brn,med gry,med brn gry,arg-tr aren,micmic,rr carb spks, sid,mod hd-occ hd,tr v hd,sbblky- 8820 sbfiss. SURVEY @ 8834.16'MDRT
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.3 | 33 |
| RES_DEEP (ohm.m) | 16.90 | 33 |
| RES_SHALLOW (ohm.m) | 15.22 | 33 |
| **Δ Res (Deep − Shallow)** | **1.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2697.5 – 2702.5 m

**Sample Description (spreadsheet):** Sample 2700m: 100% Sandstone (litho ASCII aggregate) TG 224.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 224.78125 U |
| mTVDss | -1195.99 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2685m: med brn,med gry,med brn gry,arg-tr aren,micmic,rr carb spks, sid,mod hd-occ hd,tr v hd,sbblky- 8820 sbfiss. SURVEY @ 8834.16'MDRT
- **SANDSTONE** @ ~2691m: clr-trnsl,off wh,trnsl brn,vf-f,tr crs,pr-mod srt,sbrnd- 8840 sbang,wk sil cmt,tr lt brn arg mtx,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.9 | 32 |
| RES_DEEP (ohm.m) | 17.32 | 32 |
| RES_SHALLOW (ohm.m) | 15.17 | 32 |
| **Δ Res (Deep − Shallow)** | **2.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2705 m MD — Interval 2702.5 – 2707.5 m

**Sample Description (spreadsheet):** Sample 2705m: 100% Sandstone (litho ASCII aggregate) TG 231.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 231.425 U |
| mTVDss | -1195.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2691m: clr-trnsl,off wh,trnsl brn,vf-f,tr crs,pr-mod srt,sbrnd- 8840 sbang,wk sil cmt,tr lt brn arg mtx,
- **SANDSTONE** @ ~2694m: trnsl brn,clr-trnsl,off wh,dom vf-f,tr crs,mod-pr srt,sbrnd- 8860 sbang,wk sil cmt,tr lt brn arg mtx, tr mic flks,tr slty lams,fri-mod hd, mnr lse grs,pr vis & fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.7 | 33 |
| RES_DEEP (ohm.m) | 17.67 | 33 |
| RES_SHALLOW (ohm.m) | 15.79 | 33 |
| **Δ Res (Deep − Shallow)** | **1.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2707.5 – 2712.5 m

**Sample Description (spreadsheet):** Sample 2710m: 100% Sandstone (litho ASCII aggregate) TG 219.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 219.3705882352941 U |
| mTVDss | -1195.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2694m: trnsl brn,clr-trnsl,off wh,dom vf-f,tr crs,mod-pr srt,sbrnd- 8860 sbang,wk sil cmt,tr lt brn arg mtx, tr mic flks,tr slty lams,fri-mod hd, mnr lse grs,pr vis & fr inf por,fluor.
- **SILTSTONE** @ ~2707m: med gry,med brn gry, arg-aren,micmic,tr carb spks,tr sid,frm-mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.2 | 33 |
| RES_DEEP (ohm.m) | 18.24 | 33 |
| RES_SHALLOW (ohm.m) | 15.58 | 33 |
| **Δ Res (Deep − Shallow)** | **2.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2715 m MD — Interval 2712.5 – 2717.5 m

**Sample Description (spreadsheet):** Sample 2715m: 100% Sandstone (litho ASCII aggregate) TG 241.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 241.35000000000002 U |
| mTVDss | -1195.93 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2707m: med gry,med brn gry, arg-aren,micmic,tr carb spks,tr sid,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2710m: clr-trnsl,off wh,trnsl 8900 brn,tr frstd,pred f-vf,tr crs,mod srt,sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr mic flks,tr slty lams,fri-mod hd,tr lse,pr vis &
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.8 | 33 |
| RES_DEEP (ohm.m) | 19.01 | 33 |
| RES_SHALLOW (ohm.m) | 17.09 | 33 |
| **Δ Res (Deep − Shallow)** | **1.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2717.5 – 2722.5 m

**Sample Description (spreadsheet):** Sample 2720m: 100% Sandstone (litho ASCII aggregate) TG 236.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 236.11176470588236 U |
| mTVDss | -1195.91 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2707m: med gry,med brn gry, arg-aren,micmic,tr carb spks,tr sid,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2710m: clr-trnsl,off wh,trnsl 8900 brn,tr frstd,pred f-vf,tr crs,mod srt,sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr mic flks,tr slty lams,fri-mod hd,tr lse,pr vis &
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.3 | 33 |
| RES_DEEP (ohm.m) | 18.96 | 33 |
| RES_SHALLOW (ohm.m) | 16.23 | 33 |
| **Δ Res (Deep − Shallow)** | **2.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2725 m MD — Interval 2722.5 – 2727.5 m

**Sample Description (spreadsheet):** Sample 2725m: 100% Sandstone (litho ASCII aggregate) TG 241.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 241.03125 U |
| mTVDss | -1195.79 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2710m: clr-trnsl,off wh,trnsl 8900 brn,tr frstd,pred f-vf,tr crs,mod srt,sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr mic flks,tr slty lams,fri-mod hd,tr lse,pr vis &
- **SILTSTONE** @ ~2719m: med gry,med brn gry, arg-aren,micmic,tr carb spks,tr sid,frm-mod hd,sbblky-sbfiss. SURVEY @ 8928.14'MDRT 8930 INC:91.55° AZI:54.18°G
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.2 | 32 |
| RES_DEEP (ohm.m) | 19.03 | 32 |
| RES_SHALLOW (ohm.m) | 16.48 | 32 |
| **Δ Res (Deep − Shallow)** | **2.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2727.5 – 2732.5 m

**Sample Description (spreadsheet):** Sample 2730m: 100% Sandstone (litho ASCII aggregate) TG 332.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 332.59999999999997 U |
| mTVDss | -1195.63 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2719m: med gry,med brn gry, arg-aren,micmic,tr carb spks,tr sid,frm-mod hd,sbblky-sbfiss. SURVEY @ 8928.14'MDRT 8930 INC:91.55° AZI:54.18°G
- **SANDSTONE** @ ~2725m: clr-trnsl,off wh,trnsl brn,vf-f,wl srt,sbrnd-sbang,wk-mod 79 / 6 / 4 / 5 / 6 sil cmt,rr lt brn arg mtx i/p,tr mic flks,tr slty lams,fri-mod hd,tr lse, pr vis & pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 19.88 | 33 |
| RES_SHALLOW (ohm.m) | 16.76 | 33 |
| **Δ Res (Deep − Shallow)** | **3.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2735 m MD — Interval 2732.5 – 2737.5 m

**Sample Description (spreadsheet):** Sample 2735m: 100% Sandstone (litho ASCII aggregate) TG 456.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 456.8647058823529 U |
| mTVDss | -1195.46 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2719m: med gry,med brn gry, arg-aren,micmic,tr carb spks,tr sid,frm-mod hd,sbblky-sbfiss. SURVEY @ 8928.14'MDRT 8930 INC:91.55° AZI:54.18°G
- **SANDSTONE** @ ~2725m: clr-trnsl,off wh,trnsl brn,vf-f,wl srt,sbrnd-sbang,wk-mod 79 / 6 / 4 / 5 / 6 sil cmt,rr lt brn arg mtx i/p,tr mic flks,tr slty lams,fri-mod hd,tr lse, pr vis & pr-fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 33 |
| RES_DEEP (ohm.m) | 21.38 | 33 |
| RES_SHALLOW (ohm.m) | 17.55 | 33 |
| **Δ Res (Deep − Shallow)** | **3.84** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2737.5 – 2742.5 m

**Sample Description (spreadsheet):** Sample 2740m: 100% Sandstone (litho ASCII aggregate) TG 398.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 398.15 U |
| mTVDss | -1195.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2725m: clr-trnsl,off wh,trnsl brn,vf-f,wl srt,sbrnd-sbang,wk-mod 79 / 6 / 4 / 5 / 6 sil cmt,rr lt brn arg mtx i/p,tr mic flks,tr slty lams,fri-mod hd,tr lse, pr vis & pr-fr inf por,fluor.
- **SILTSTONE** @ ~2731m: med gry,med brn gry, arg-aren,micmic,tr vf SST lams, frm-mod hd,sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 25.01 | 33 |
| RES_SHALLOW (ohm.m) | 20.80 | 33 |
| **Δ Res (Deep − Shallow)** | **4.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2745 m MD — Interval 2742.5 – 2747.5 m

**Sample Description (spreadsheet):** Sample 2745m: 100% Sandstone (litho ASCII aggregate) TG 388.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 388.1882352941177 U |
| mTVDss | -1195.14 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2731m: med gry,med brn gry, arg-aren,micmic,tr vf SST lams, frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2737m: clr-trnsl,off wh,trnsl brn,vf-f,wl srt,sbang-sbrnd,wk-mod
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.3 | 33 |
| RES_DEEP (ohm.m) | 23.96 | 33 |
| RES_SHALLOW (ohm.m) | 19.60 | 33 |
| **Δ Res (Deep − Shallow)** | **4.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2747.5 – 2752.5 m

**Sample Description (spreadsheet):** Sample 2750m: 100% Sandstone (litho ASCII aggregate) TG 376.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 376.51874999999995 U |
| mTVDss | -1194.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2737m: clr-trnsl,off wh,trnsl brn,vf-f,wl srt,sbang-sbrnd,wk-mod
- **SILTSTONE** @ ~2737m: med-lt gry,med brn gry,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.6 | 33 |
| RES_DEEP (ohm.m) | 23.23 | 33 |
| RES_SHALLOW (ohm.m) | 19.89 | 33 |
| **Δ Res (Deep − Shallow)** | **3.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2755 m MD — Interval 2752.5 – 2757.5 m

**Sample Description (spreadsheet):** Sample 2755m: 100% Sandstone (litho ASCII aggregate) TG 220.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 220.90625 U |
| mTVDss | -1194.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2750m: clr-trnsl,trnsl brn,vf-
- **SILTSTONE** @ ~2755m: med-lt gry,med brn, med brn gry,arg-aren,tr aren lams, tr mic flks,frm-mod hd,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.4 | 32 |
| RES_DEEP (ohm.m) | 22.59 | 32 |
| RES_SHALLOW (ohm.m) | 19.22 | 32 |
| **Δ Res (Deep − Shallow)** | **3.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2757.5 – 2762.5 m

**Sample Description (spreadsheet):** Sample 2760m: 100% Sandstone (litho ASCII aggregate) TG 248.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 248.09411764705885 U |
| mTVDss | -1194.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2750m: clr-trnsl,trnsl brn,vf-
- **SILTSTONE** @ ~2755m: med-lt gry,med brn, med brn gry,arg-aren,tr aren lams, tr mic flks,frm-mod hd,sbblky- sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.4 | 33 |
| RES_DEEP (ohm.m) | 23.15 | 33 |
| RES_SHALLOW (ohm.m) | 19.09 | 33 |
| **Δ Res (Deep − Shallow)** | **4.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2765 m MD — Interval 2762.5 – 2767.5 m

**Sample Description (spreadsheet):** Sample 2765m: 100% Sandstone (litho ASCII aggregate) TG 294.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 294.16875 U |
| mTVDss | -1194.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2750m: clr-trnsl,trnsl brn,vf-
- **SILTSTONE** @ ~2755m: med-lt gry,med brn, med brn gry,arg-aren,tr aren lams, tr mic flks,frm-mod hd,sbblky- sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 33 |
| RES_DEEP (ohm.m) | 21.50 | 33 |
| RES_SHALLOW (ohm.m) | 17.66 | 33 |
| **Δ Res (Deep − Shallow)** | **3.84** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2767.5 – 2772.5 m

**Sample Description (spreadsheet):** Sample 2770m: 100% Sandstone (litho ASCII aggregate) TG 259.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 259.1058823529412 U |
| mTVDss | -1194.21 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2755m: med-lt gry,med brn, med brn gry,arg-aren,tr aren lams, tr mic flks,frm-mod hd,sbblky- sbfiss.
- **SILTSTONE** @ ~2774m: lt-med brnsh gry, rr med-dk gry,aren grd to vf SST i/p,rr arg,micmic,rr aren lams, mod hd,sbblky-occ sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.7 | 33 |
| RES_DEEP (ohm.m) | 19.59 | 33 |
| RES_SHALLOW (ohm.m) | 16.49 | 33 |
| **Δ Res (Deep − Shallow)** | **3.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2775 m MD — Interval 2772.5 – 2777.5 m

**Sample Description (spreadsheet):** Sample 2775m: 100% Sandstone (litho ASCII aggregate) TG 266.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 266.55625000000003 U |
| mTVDss | -1194.02 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2774m: lt-med brnsh gry, rr med-dk gry,aren grd to vf SST i/p,rr arg,micmic,rr aren lams, mod hd,sbblky-occ sbfiss.
- **SANDSTONE** @ ~2780m: lt trnsl brn, 31-12-2017 clr,trnsl,vf-f grd to aren SLTST i/p,wl srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg 01-01-2018 9130 mtx,occ mic flks,occ carb spks
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.9 | 33 |
| RES_DEEP (ohm.m) | 18.76 | 33 |
| RES_SHALLOW (ohm.m) | 15.75 | 33 |
| **Δ Res (Deep − Shallow)** | **3.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2777.5 – 2782.5 m

**Sample Description (spreadsheet):** Sample 2780m: 100% Sandstone (litho ASCII aggregate) TG 287.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 287.2875 U |
| mTVDss | -1193.83 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2774m: lt-med brnsh gry, rr med-dk gry,aren grd to vf SST i/p,rr arg,micmic,rr aren lams, mod hd,sbblky-occ sbfiss.
- **SANDSTONE** @ ~2780m: lt trnsl brn, 31-12-2017 clr,trnsl,vf-f grd to aren SLTST i/p,wl srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg 01-01-2018 9130 mtx,occ mic flks,occ carb spks
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.6 | 32 |
| RES_DEEP (ohm.m) | 21.24 | 32 |
| RES_SHALLOW (ohm.m) | 17.03 | 32 |
| **Δ Res (Deep − Shallow)** | **4.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2785 m MD — Interval 2782.5 – 2787.5 m

**Sample Description (spreadsheet):** Sample 2785m: 100% Sandstone (litho ASCII aggregate) TG 350.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 350.364705882353 U |
| mTVDss | -1193.63 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2774m: lt-med brnsh gry, rr med-dk gry,aren grd to vf SST i/p,rr arg,micmic,rr aren lams, mod hd,sbblky-occ sbfiss.
- **SANDSTONE** @ ~2780m: lt trnsl brn, 31-12-2017 clr,trnsl,vf-f grd to aren SLTST i/p,wl srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg 01-01-2018 9130 mtx,occ mic flks,occ carb spks
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.9 | 33 |
| RES_DEEP (ohm.m) | 24.64 | 33 |
| RES_SHALLOW (ohm.m) | 18.89 | 33 |
| **Δ Res (Deep − Shallow)** | **5.75** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2787.5 – 2792.5 m

**Sample Description (spreadsheet):** Sample 2790m: 100% Sandstone (litho ASCII aggregate) TG 381.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 381.3625 U |
| mTVDss | -1193.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2774m: lt-med brnsh gry, rr med-dk gry,aren grd to vf SST i/p,rr arg,micmic,rr aren lams, mod hd,sbblky-occ sbfiss.
- **SANDSTONE** @ ~2780m: lt trnsl brn, 31-12-2017 clr,trnsl,vf-f grd to aren SLTST i/p,wl srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg 01-01-2018 9130 mtx,occ mic flks,occ carb spks
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.6 | 33 |
| RES_DEEP (ohm.m) | 27.50 | 33 |
| RES_SHALLOW (ohm.m) | 20.40 | 33 |
| **Δ Res (Deep − Shallow)** | **7.10** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2795 m MD — Interval 2792.5 – 2797.5 m

**Sample Description (spreadsheet):** Sample 2795m: 100% Sandstone (litho ASCII aggregate) TG 390.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 390.2117647058824 U |
| mTVDss | -1193.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: lt trnsl brn, 31-12-2017 clr,trnsl,vf-f grd to aren SLTST i/p,wl srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg 01-01-2018 9130 mtx,occ mic flks,occ carb spks
- **SANDSTONE** @ ~2786m: lt trnsl brn, clr,trnsl,f-vf,rr med-crs,wl-mod wl srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,mnr carb spks,fri-occ
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.1 | 33 |
| RES_DEEP (ohm.m) | 30.03 | 33 |
| RES_SHALLOW (ohm.m) | 21.76 | 33 |
| **Δ Res (Deep − Shallow)** | **8.27** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2797.5 – 2802.5 m

**Sample Description (spreadsheet):** Sample 2800m: 100% Sandstone (litho ASCII aggregate) TG 407.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 407.78749999999997 U |
| mTVDss | -1193.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2786m: lt trnsl brn, clr,trnsl,f-vf,rr med-crs,wl-mod wl srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,mnr carb spks,fri-occ
- **SILTSTONE** @ ~2792m: lt-med brnsh gry, aren grd to vf SST i/p,rr arg, micmic,occ carb spks,occ aren lams,mod hd-hd,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 31.06 | 33 |
| RES_SHALLOW (ohm.m) | 21.51 | 33 |
| **Δ Res (Deep − Shallow)** | **9.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2805 m MD — Interval 2802.5 – 2807.5 m

**Sample Description (spreadsheet):** Sample 2805m: 100% Sandstone (litho ASCII aggregate) TG 571.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 571.125 U |
| mTVDss | -1192.85 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2792m: lt-med brnsh gry, aren grd to vf SST i/p,rr arg, micmic,occ carb spks,occ aren lams,mod hd-hd,sbblky.
- **SANDSTONE** @ ~2795m: v lt trnsl brn, clr,trnsl,off wh,f-vf,wl srt,sbang- 9180 sbrnd,wk-occ mod strg sil cmt,mnr v lt brn arg mtx,tr off wh arg mtx, com mic flks,rr carb spks,rr slty
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.7 | 32 |
| RES_DEEP (ohm.m) | 35.47 | 32 |
| RES_SHALLOW (ohm.m) | 25.90 | 32 |
| **Δ Res (Deep − Shallow)** | **9.57** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2807.5 – 2812.5 m

**Sample Description (spreadsheet):** Sample 2810m: 100% Sandstone (litho ASCII aggregate) TG 638.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 638.6833333333333 U |
| mTVDss | -1192.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2795m: v lt trnsl brn, clr,trnsl,off wh,f-vf,wl srt,sbang- 9180 sbrnd,wk-occ mod strg sil cmt,mnr v lt brn arg mtx,tr off wh arg mtx, com mic flks,rr carb spks,rr slty
- **SANDSTONE** @ ~2801m: lt trnsl brn,clr, trnsl,tr opq,pred f-vf,mnr med, tr crs,wl-mod srt,sbang-sbrnd,wk- occ mod strg sil cmt,mnr lt brn arg 0 0.5 1 4 14 9200 mtx,occ mic flks,rr slty lams,mnr
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.0 | 33 |
| RES_DEEP (ohm.m) | 33.64 | 33 |
| RES_SHALLOW (ohm.m) | 24.95 | 33 |
| **Δ Res (Deep − Shallow)** | **8.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2815 m MD — Interval 2812.5 – 2817.5 m

**Sample Description (spreadsheet):** Sample 2815m: 100% Sandstone (litho ASCII aggregate) TG 507.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 507.43125 U |
| mTVDss | -1192.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2801m: lt trnsl brn,clr, trnsl,tr opq,pred f-vf,mnr med, tr crs,wl-mod srt,sbang-sbrnd,wk- occ mod strg sil cmt,mnr lt brn arg 0 0.5 1 4 14 9200 mtx,occ mic flks,rr slty lams,mnr
- **SANDSTONE** @ ~2810m: lt trnsl brn,clr, trnsl,pred f-vf,mnr med,tr crs,wl- 75 / 7 / 5 / 6 / 7 700 U mod srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,occ carb spks & flks,fri-
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.6 | 33 |
| RES_DEEP (ohm.m) | 31.24 | 33 |
| RES_SHALLOW (ohm.m) | 22.66 | 33 |
| **Δ Res (Deep − Shallow)** | **8.57** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2817.5 – 2822.5 m

**Sample Description (spreadsheet):** Sample 2820m: 100% Sandstone (litho ASCII aggregate) TG 668.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 668.7882352941177 U |
| mTVDss | -1192.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: lt trnsl brn,clr, trnsl,pred f-vf,mnr med,tr crs,wl- 75 / 7 / 5 / 6 / 7 700 U mod srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,occ carb spks & flks,fri-
- **SANDSTONE** @ ~2816m: lt trnsl brn, clr,trnsl,pred f-vf,occ med,mnr crs,wl-mod srt,sbang-sbrnd,wk- occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,mnr carb
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 31.21 | 33 |
| RES_SHALLOW (ohm.m) | 20.53 | 33 |
| **Δ Res (Deep − Shallow)** | **10.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2825 m MD — Interval 2822.5 – 2827.5 m

**Sample Description (spreadsheet):** Sample 2825m: 100% Sandstone (litho ASCII aggregate) TG 518.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 518.5625 U |
| mTVDss | -1192.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: lt trnsl brn,clr, trnsl,pred f-vf,mnr med,tr crs,wl- 75 / 7 / 5 / 6 / 7 700 U mod srt,sbang-sbrnd,wk-occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,occ carb spks & flks,fri-
- **SANDSTONE** @ ~2816m: lt trnsl brn, clr,trnsl,pred f-vf,occ med,mnr crs,wl-mod srt,sbang-sbrnd,wk- occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,mnr carb
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 34.56 | 33 |
| RES_SHALLOW (ohm.m) | 20.06 | 33 |
| **Δ Res (Deep − Shallow)** | **14.51** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2827.5 – 2832.5 m

**Sample Description (spreadsheet):** Sample 2830m: 100% Sandstone (litho ASCII aggregate) TG 564.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 564.45625 U |
| mTVDss | -1192.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2816m: lt trnsl brn, clr,trnsl,pred f-vf,occ med,mnr crs,wl-mod srt,sbang-sbrnd,wk- occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,mnr carb
- **SILTSTONE** @ ~2822m: lt-med brnsh gry, med gry,aren grd to vf SST i/p, rr arg,micmic,occ carb spks & 9270 micrlams,mnr aren lams,mod hd-occ hd,sbblky-occ sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 32 |
| RES_DEEP (ohm.m) | 39.19 | 32 |
| RES_SHALLOW (ohm.m) | 23.72 | 32 |
| **Δ Res (Deep − Shallow)** | **15.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2835 m MD — Interval 2832.5 – 2837.5 m

**Sample Description (spreadsheet):** Sample 2835m: 100% Sandstone (litho ASCII aggregate) TG 551.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 551.1647058823529 U |
| mTVDss | -1192.02 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2822m: lt-med brnsh gry, med gry,aren grd to vf SST i/p, rr arg,micmic,occ carb spks & 9270 micrlams,mnr aren lams,mod hd-occ hd,sbblky-occ sbfiss.
- **SANDSTONE** @ ~2829m: lt trnsl brn,occ clr-trnsl,f-crs,pr srt,ang-sbang, wk-mod sil cmt,lt brn arg mtx, occ mic flks,rr qtz ovgths,lse, 74 / 7 / 5 / 7 / 7 629 U fri-mod hd,pr-fr vis por,fr-gd
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 33 |
| RES_DEEP (ohm.m) | 37.84 | 33 |
| RES_SHALLOW (ohm.m) | 26.89 | 33 |
| **Δ Res (Deep − Shallow)** | **10.95** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2840 m MD — Interval 2837.5 – 2842.5 m

**Sample Description (spreadsheet):** Sample 2840m: 100% Sandstone (litho ASCII aggregate) TG 529.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 529.9 U |
| mTVDss | -1191.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2829m: lt trnsl brn,occ clr-trnsl,f-crs,pr srt,ang-sbang, wk-mod sil cmt,lt brn arg mtx, occ mic flks,rr qtz ovgths,lse, 74 / 7 / 5 / 7 / 7 629 U fri-mod hd,pr-fr vis por,fr-gd
- **SILTSTONE** @ ~2838m: med gry-gry brn, arg-aren,occ micmic,mnr carb spks, mod hd-occ hd,sbblky-blky,rr sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 35.77 | 33 |
| RES_SHALLOW (ohm.m) | 27.39 | 33 |
| **Δ Res (Deep − Shallow)** | **8.38** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2845 m MD — Interval 2842.5 – 2847.5 m

**Sample Description (spreadsheet):** Sample 2845m: 100% Sandstone (litho ASCII aggregate) TG 604.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 604.0882352941177 U |
| mTVDss | -1191.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2829m: lt trnsl brn,occ clr-trnsl,f-crs,pr srt,ang-sbang, wk-mod sil cmt,lt brn arg mtx, occ mic flks,rr qtz ovgths,lse, 74 / 7 / 5 / 7 / 7 629 U fri-mod hd,pr-fr vis por,fr-gd
- **SILTSTONE** @ ~2838m: med gry-gry brn, arg-aren,occ micmic,mnr carb spks, mod hd-occ hd,sbblky-blky,rr sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 33 |
| RES_DEEP (ohm.m) | 36.72 | 33 |
| RES_SHALLOW (ohm.m) | 29.66 | 33 |
| **Δ Res (Deep − Shallow)** | **7.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2850 m MD — Interval 2847.5 – 2852.5 m

**Sample Description (spreadsheet):** Sample 2850m: 100% Sandstone (litho ASCII aggregate) TG 464.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 464.13125 U |
| mTVDss | -1191.84 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2838m: med gry-gry brn, arg-aren,occ micmic,mnr carb spks, mod hd-occ hd,sbblky-blky,rr sbfiss.
- **SANDSTONE** @ ~2841m: clr-trnsl,trnsl lt brn,f-crs,rr v crs,pr srt,sbang- occ ang,wk-mod sil cmt,mnr lt brn 75 / 7 / 5 / 6 / 7 588 U arg mtx,occ qtz ovgths,lse,fri-mod hd,pr-fr vis por,fr-gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 33 |
| RES_DEEP (ohm.m) | 39.87 | 33 |
| RES_SHALLOW (ohm.m) | 29.45 | 33 |
| **Δ Res (Deep − Shallow)** | **10.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2855 m MD — Interval 2852.5 – 2857.5 m

**Sample Description (spreadsheet):** Sample 2855m: 100% Sandstone (litho ASCII aggregate) TG 325.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 325.2 U |
| mTVDss | -1191.78 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2838m: med gry-gry brn, arg-aren,occ micmic,mnr carb spks, mod hd-occ hd,sbblky-blky,rr sbfiss.
- **SANDSTONE** @ ~2841m: clr-trnsl,trnsl lt brn,f-crs,rr v crs,pr srt,sbang- occ ang,wk-mod sil cmt,mnr lt brn 75 / 7 / 5 / 6 / 7 588 U arg mtx,occ qtz ovgths,lse,fri-mod hd,pr-fr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 33 |
| RES_DEEP (ohm.m) | 38.37 | 33 |
| RES_SHALLOW (ohm.m) | 28.75 | 33 |
| **Δ Res (Deep − Shallow)** | **9.62** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2860 m MD — Interval 2857.5 – 2862.5 m

**Sample Description (spreadsheet):** Sample 2860m: 100% Sandstone (litho ASCII aggregate) TG 308.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 308.75882352941176 U |
| mTVDss | -1191.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2847m: clr-trnsl,lt trnsl brn,med-crs,f i/p,pr srt,sbang, occ ang-sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,mnr mic flks,occ qtz ovgths,lse cln grs,fri i/p,fr-gd
- **SANDSTONE** @ ~2853m: clr-trnsl,lt trnsl brn,f-crs,dom med,pr srt, sbang-occ ang,mod-wk sil cmt, tr lt brn arg mtx,occ qtz ovgths w/liths,rr mic flks,lse cln grs,
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 33 |
| RES_DEEP (ohm.m) | 41.09 | 33 |
| RES_SHALLOW (ohm.m) | 29.59 | 33 |
| **Δ Res (Deep − Shallow)** | **11.51** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2865 m MD — Interval 2862.5 – 2867.5 m

**Sample Description (spreadsheet):** Sample 2865m: 100% Sandstone (litho ASCII aggregate) TG 324.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 324.6 U |
| mTVDss | -1191.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2853m: clr-trnsl,lt trnsl brn,f-crs,dom med,pr srt, sbang-occ ang,mod-wk sil cmt, tr lt brn arg mtx,occ qtz ovgths w/liths,rr mic flks,lse cln grs,
- **SILTSTONE** @ ~2856m: med-dk gry,med gry brn,arg-aren,micmic,occ carb spks,mod hd-occ hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.1 | 33 |
| RES_DEEP (ohm.m) | 40.68 | 33 |
| RES_SHALLOW (ohm.m) | 26.90 | 33 |
| **Δ Res (Deep − Shallow)** | **13.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2867.5 – 2872.5 m

**Sample Description (spreadsheet):** Sample 2870m: 100% Sandstone (litho ASCII aggregate) TG 338.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 338.7411764705882 U |
| mTVDss | -1191.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2853m: clr-trnsl,lt trnsl brn,f-crs,dom med,pr srt, sbang-occ ang,mod-wk sil cmt, tr lt brn arg mtx,occ qtz ovgths w/liths,rr mic flks,lse cln grs,
- **SILTSTONE** @ ~2856m: med-dk gry,med gry brn,arg-aren,micmic,occ carb spks,mod hd-occ hd,sbblky-blky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 33 |
| RES_DEEP (ohm.m) | 35.98 | 33 |
| RES_SHALLOW (ohm.m) | 22.25 | 33 |
| **Δ Res (Deep − Shallow)** | **13.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2895 m MD — Interval 2892.5 – 2897.5 m

**Sample Description (spreadsheet):** Sample 2895m: 100% Sandstone (litho ASCII aggregate) TG 410.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 410.135294117647 U |
| mTVDss | -1191.57 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2883m: off wh,clr,trnsl, lt trnsl brn,vf-crs,pr srt,sbang- occ sbrnd,wk-mod sil cmt,occ off wh arg mtx,mod hd-fri,lse,pr-v pr 9470 68 / 6 / 5 / 9 / 12 282 U vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2886m: clr,trnsl,opq, lt trnsl brn,pred med-crs,mnr f, pr srt,wk-occ mod strg sil cmt, 9480 mnr lt brn arg mtx,occ mic flks, pred med-crs cln lse grs,fri-occ
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.6 | 33 |
| RES_DEEP (ohm.m) | 40.16 | 33 |
| RES_SHALLOW (ohm.m) | 24.55 | 33 |
| **Δ Res (Deep − Shallow)** | **15.61** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2897.5 – 2902.5 m

**Sample Description (spreadsheet):** Sample 2900m: 100% Sandstone (litho ASCII aggregate) TG 539.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 539.7625 U |
| mTVDss | -1191.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2883m: off wh,clr,trnsl, lt trnsl brn,vf-crs,pr srt,sbang- occ sbrnd,wk-mod sil cmt,occ off wh arg mtx,mod hd-fri,lse,pr-v pr 9470 68 / 6 / 5 / 9 / 12 282 U vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2886m: clr,trnsl,opq, lt trnsl brn,pred med-crs,mnr f, pr srt,wk-occ mod strg sil cmt, 9480 mnr lt brn arg mtx,occ mic flks, pred med-crs cln lse grs,fri-occ
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.8 | 33 |
| RES_DEEP (ohm.m) | 36.53 | 33 |
| RES_SHALLOW (ohm.m) | 25.05 | 33 |
| **Δ Res (Deep − Shallow)** | **11.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2905 m MD — Interval 2902.5 – 2907.5 m

**Sample Description (spreadsheet):** Sample 2905m: 100% Sandstone (litho ASCII aggregate) TG 420.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 420.8176470588236 U |
| mTVDss | -1191.59 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2896m: med-dk gry, gy med gry brn,arg,rr aren,occ carb spks,micmic i/p,mod hd-frm, sbfiss-sbblky.
- **SANDSTONE** @ ~2902m: clr-trnsl,lt trnsl brn,f-crs,occ v crs,pr srt, sbang-sbrnd,mod-wk sil cmt,occ lt brn-off wh arg mtx,occ qtz ovgths, lse,fri-mod hd,pr vis por,fr-gd inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 33 |
| RES_DEEP (ohm.m) | 30.36 | 33 |
| RES_SHALLOW (ohm.m) | 23.96 | 33 |
| **Δ Res (Deep − Shallow)** | **6.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2907.5 – 2912.5 m

**Sample Description (spreadsheet):** Sample 2910m: 100% Sandstone (litho ASCII aggregate) TG 333.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy fluor |
| Total Gas | 333.52941176470586 U |
| mTVDss | -1191.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2896m: med-dk gry, gy med gry brn,arg,rr aren,occ carb spks,micmic i/p,mod hd-frm, sbfiss-sbblky.
- **SANDSTONE** @ ~2902m: clr-trnsl,lt trnsl brn,f-crs,occ v crs,pr srt, sbang-sbrnd,mod-wk sil cmt,occ lt brn-off wh arg mtx,occ qtz ovgths, lse,fri-mod hd,pr vis por,fr-gd inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 32 |
| RES_DEEP (ohm.m) | 25.72 | 32 |
| RES_SHALLOW (ohm.m) | 20.72 | 32 |
| **Δ Res (Deep − Shallow)** | **5.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2915 m MD — Interval 2912.5 – 2917.5 m

**Sample Description (spreadsheet):** Sample 2915m: 100% Sandstone (litho ASCII aggregate) TG 371.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 371.4625 U |
| mTVDss | -1191.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2902m: clr-trnsl,lt trnsl brn,f-crs,occ v crs,pr srt, sbang-sbrnd,mod-wk sil cmt,occ lt brn-off wh arg mtx,occ qtz ovgths, lse,fri-mod hd,pr vis por,fr-gd inf
- **SANDSTONE** @ ~2908m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-mnr sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths,lse,fri, fr-gd inf por,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 27.83 | 33 |
| RES_SHALLOW (ohm.m) | 22.59 | 33 |
| **Δ Res (Deep − Shallow)** | **5.24** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2917.5 – 2922.5 m

**Sample Description (spreadsheet):** Sample 2920m: 100% Sandstone (litho ASCII aggregate) TG 379.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 379.09411764705885 U |
| mTVDss | -1191.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2908m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-mnr sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths,lse,fri, fr-gd inf por,pr vis por,fluor.
- **SILTSTONE** @ ~2914m: med-occ dk gry, med gry brn,arg,micmic,occ carb spks,hd-mod hd,sbblky,occ blky- sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 33 |
| RES_DEEP (ohm.m) | 27.40 | 33 |
| RES_SHALLOW (ohm.m) | 21.28 | 33 |
| **Δ Res (Deep − Shallow)** | **6.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2925 m MD — Interval 2922.5 – 2927.5 m

**Sample Description (spreadsheet):** Sample 2925m: 100% Sandstone (litho ASCII aggregate) TG 283.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 283.28749999999997 U |
| mTVDss | -1191.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2908m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-mnr sbrnd,wk-mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths,lse,fri, fr-gd inf por,pr vis por,fluor.
- **SILTSTONE** @ ~2914m: med-occ dk gry, med gry brn,arg,micmic,occ carb spks,hd-mod hd,sbblky,occ blky- sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 27.77 | 33 |
| RES_SHALLOW (ohm.m) | 21.41 | 33 |
| **Δ Res (Deep − Shallow)** | **6.36** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2930 m MD — Interval 2927.5 – 2932.5 m

**Sample Description (spreadsheet):** Sample 2930m: 100% Sandstone (litho ASCII aggregate) TG 297.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 297.38235294117646 U |
| mTVDss | -1191.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2914m: med-occ dk gry, med gry brn,arg,micmic,occ carb spks,hd-mod hd,sbblky,occ blky- sbfiss.
- **SANDSTONE** @ ~2917m: lt trnsl brn, 74 / 7 / 5 / 7 / 7 387 U clr-trnsl,f,occ med-crs,pr srt, sbang-occ ang,mnr sbrnd,wk- mod sil cmt,mnr lt brn arg mtx, occ mic flks,fri,occ lse,pr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.1 | 33 |
| RES_DEEP (ohm.m) | 26.99 | 33 |
| RES_SHALLOW (ohm.m) | 20.22 | 33 |
| **Δ Res (Deep − Shallow)** | **6.77** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2935 m MD — Interval 2932.5 – 2937.5 m

**Sample Description (spreadsheet):** Sample 2935m: 100% Sandstone (litho ASCII aggregate) TG 320.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 319.98749999999995 U |
| mTVDss | -1191.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2923m: lt trnsl brn, 14 18 28 clr-trnsl,rr opq,pred f,occ med-crs, pr srt,wk-occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,rr slty lams,fri-occ mod hd aggs,occ med-
- **SILTSTONE** @ ~2932m: med-lt brnsh gry, med gry,arg,com micmic,mod hd, sbblky-rr sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.6 | 32 |
| RES_DEEP (ohm.m) | 30.01 | 32 |
| RES_SHALLOW (ohm.m) | 21.29 | 32 |
| **Δ Res (Deep − Shallow)** | **8.72** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2940 m MD — Interval 2937.5 – 2942.5 m

**Sample Description (spreadsheet):** Sample 2940m: 100% Sandstone (litho ASCII aggregate) TG 415.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 415.58125000000007 U |
| mTVDss | -1191.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2923m: lt trnsl brn, 14 18 28 clr-trnsl,rr opq,pred f,occ med-crs, pr srt,wk-occ mod strg sil cmt,mnr lt brn arg mtx,occ mic flks,rr slty lams,fri-occ mod hd aggs,occ med-
- **SILTSTONE** @ ~2932m: med-lt brnsh gry, med gry,arg,com micmic,mod hd, sbblky-rr sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.0 | 33 |
| RES_DEEP (ohm.m) | 34.34 | 33 |
| RES_SHALLOW (ohm.m) | 22.69 | 33 |
| **Δ Res (Deep − Shallow)** | **11.65** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2945 m MD — Interval 2942.5 – 2947.5 m

**Sample Description (spreadsheet):** Sample 2945m: 100% Sandstone (litho ASCII aggregate) TG 276.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 276.6235294117647 U |
| mTVDss | -1191.51 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2932m: med-lt brnsh gry, med gry,arg,com micmic,mod hd, sbblky-rr sbfiss.
- **SANDSTONE** @ ~2935m: lt trnsl brn, clr-trnsl,mnr mlky wh,f,occ med- 9640 crs,pr srt,sbang-sbrnd,wk-mod sil mnr lt brn arg mtx,fri-occ mod hd, 75 / 6 / 5 / 6 / 8 503 U pr vis por,occ fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.5 | 33 |
| RES_DEEP (ohm.m) | 34.50 | 33 |
| RES_SHALLOW (ohm.m) | 25.35 | 33 |
| **Δ Res (Deep − Shallow)** | **9.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2947.5 – 2952.5 m

**Sample Description (spreadsheet):** Sample 2950m: 100% Sandstone (litho ASCII aggregate) TG 275.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 275.4235294117647 U |
| mTVDss | -1191.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2935m: lt trnsl brn, clr-trnsl,mnr mlky wh,f,occ med- 9640 crs,pr srt,sbang-sbrnd,wk-mod sil mnr lt brn arg mtx,fri-occ mod hd, 75 / 6 / 5 / 6 / 8 503 U pr vis por,occ fr-gd inf por,fluor.
- **SANDSTONE** @ ~2944m: lt-occ med trnsl brn,clr-trnsl,f,occ med-crs,pr srt,ang-sbang,ang i/p,mod sil cmt, mnr lt brn arg mtx,occ mic flks, fri-mod hd,lse,pr vis por,fr-gd
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.4 | 33 |
| RES_DEEP (ohm.m) | 33.96 | 33 |
| RES_SHALLOW (ohm.m) | 24.51 | 33 |
| **Δ Res (Deep − Shallow)** | **9.45** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2955 m MD — Interval 2952.5 – 2957.5 m

**Sample Description (spreadsheet):** Sample 2955m: 100% Sandstone (litho ASCII aggregate) TG 260.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 260.3764705882353 U |
| mTVDss | -1191.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2944m: lt-occ med trnsl brn,clr-trnsl,f,occ med-crs,pr srt,ang-sbang,ang i/p,mod sil cmt, mnr lt brn arg mtx,occ mic flks, fri-mod hd,lse,pr vis por,fr-gd
- **SILTSTONE** @ ~2950m: med gry-gry brn, occ dk gry,arg,micmic,occ carb
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.2 | 33 |
| RES_DEEP (ohm.m) | 35.69 | 33 |
| RES_SHALLOW (ohm.m) | 25.77 | 33 |
| **Δ Res (Deep − Shallow)** | **9.92** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2957.5 – 2962.5 m

**Sample Description (spreadsheet):** Sample 2960m: 100% Sandstone (litho ASCII aggregate) TG 282.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 282.55 U |
| mTVDss | -1191.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2944m: lt-occ med trnsl brn,clr-trnsl,f,occ med-crs,pr srt,ang-sbang,ang i/p,mod sil cmt, mnr lt brn arg mtx,occ mic flks, fri-mod hd,lse,pr vis por,fr-gd
- **SILTSTONE** @ ~2950m: med gry-gry brn, occ dk gry,arg,micmic,occ carb
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.5 | 32 |
| RES_DEEP (ohm.m) | 37.71 | 32 |
| RES_SHALLOW (ohm.m) | 28.52 | 32 |
| **Δ Res (Deep − Shallow)** | **9.19** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2965 m MD — Interval 2962.5 – 2967.5 m

**Sample Description (spreadsheet):** Sample 2965m: 100% Sandstone (litho ASCII aggregate) TG 292.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 292.85625000000005 U |
| mTVDss | -1191.42 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2950m: med gry-gry brn, occ dk gry,arg,micmic,occ carb
- **SANDSTONE** @ ~2957m: lt trnsl brn,rr clr-trnsl,dom f,mnr med-crs,pr srt,sbang-sbrnd,wk sil cmt,occ lt brn arg mtx,mnr mic flks, fri-mod hd,mnr lse,pr vis por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 33 |
| RES_DEEP (ohm.m) | 37.93 | 33 |
| RES_SHALLOW (ohm.m) | 30.08 | 33 |
| **Δ Res (Deep − Shallow)** | **7.85** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2970 m MD — Interval 2967.5 – 2972.5 m

**Sample Description (spreadsheet):** Sample 2970m: 100% Sandstone (litho ASCII aggregate) TG 282.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 282.1411764705882 U |
| mTVDss | -1191.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2957m: lt trnsl brn,rr clr-trnsl,dom f,mnr med-crs,pr srt,sbang-sbrnd,wk sil cmt,occ lt brn arg mtx,mnr mic flks, fri-mod hd,mnr lse,pr vis por,
- **SANDSTONE** @ ~2963m: lttrnslbrn,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 33 |
| RES_DEEP (ohm.m) | 37.43 | 33 |
| RES_SHALLOW (ohm.m) | 29.65 | 33 |
| **Δ Res (Deep − Shallow)** | **7.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2975 m MD — Interval 2972.5 – 2977.5 m

**Sample Description (spreadsheet):** Sample 2975m: 100% Sandstone (litho ASCII aggregate) TG 273.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 273.25 U |
| mTVDss | -1191.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2963m: lttrnslbrn,
- **SANDSTONE** @ ~2963m: lt trnsl brn, f-occ med,mod srt,sbang-sbrnd, mod sil cmt,mnr lt brn arg mtx,occ mic flks,mod hd-hd,pr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 33 |
| RES_DEEP (ohm.m) | 36.50 | 33 |
| RES_SHALLOW (ohm.m) | 29.58 | 33 |
| **Δ Res (Deep − Shallow)** | **6.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2980 m MD — Interval 2977.5 – 2982.5 m

**Sample Description (spreadsheet):** Sample 2980m: 100% Sandstone (litho ASCII aggregate) TG 275.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% ptchy-evn fluor |
| Total Gas | 275.2470588235294 U |
| mTVDss | -1191.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2963m: lttrnslbrn,
- **SANDSTONE** @ ~2963m: lt trnsl brn, f-occ med,mod srt,sbang-sbrnd, mod sil cmt,mnr lt brn arg mtx,occ mic flks,mod hd-hd,pr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 38.07 | 33 |
| RES_SHALLOW (ohm.m) | 28.52 | 33 |
| **Δ Res (Deep − Shallow)** | **9.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2985 m MD — Interval 2982.5 – 2987.5 m

**Sample Description (spreadsheet):** Sample 2985m: 100% Sandstone (litho ASCII aggregate) TG 298.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 298.1625 U |
| mTVDss | -1191.42 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2969m: med-dk gry,arg, rr aren,micmic,mod hd,occ frm, sbblky-occ blky.
- **SANDSTONE** @ ~2981m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-ang, wk-mod sil cmt,mnr lt brn arg mtx, mnr carb spks,occ qtz ovgths,lse, 77 / 7 / 5 / 6 / 5 468 U fri-mod hd,pr vis por,fr-gd inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 33 |
| RES_DEEP (ohm.m) | 36.90 | 33 |
| RES_SHALLOW (ohm.m) | 24.28 | 33 |
| **Δ Res (Deep − Shallow)** | **12.62** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2990 m MD — Interval 2987.5 – 2992.5 m

**Sample Description (spreadsheet):** Sample 2990m: 100% Sandstone (litho ASCII aggregate) TG 215.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 215.55625 U |
| mTVDss | -1191.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2981m: clr-trnsl,lt trnsl brn,f-crs,pr srt,sbang-ang, wk-mod sil cmt,mnr lt brn arg mtx, mnr carb spks,occ qtz ovgths,lse, 77 / 7 / 5 / 6 / 5 468 U fri-mod hd,pr vis por,fr-gd inf por,
- **SILTSTONE** @ ~2984m: lt-med brn gry, lt brn,med gry,arg-occ aren,micmic, 0 0.5 1 4 14 9800 loc com carb spks,mod hd,sbblky- 14 18 28
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.9 | 32 |
| RES_DEEP (ohm.m) | 35.92 | 32 |
| RES_SHALLOW (ohm.m) | 19.83 | 32 |
| **Δ Res (Deep − Shallow)** | **16.08** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3040 m MD — Interval 3037.5 – 3042.5 m

**Sample Description (spreadsheet):** Sample 3040m: 100% Sandstone (litho ASCII aggregate) TG 238.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri yel grn ptchy-evn fluor |
| Total Gas | 238.78750000000002 U |
| mTVDss | -1192.76 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3027m: med-dk gry,med gry brn, arg-occ aren,micmic,occ carb spks, mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: off wh,occ lt trnsl brn, 9950 vf-f,wl srt,sbang-sbrnd,mod sil cmt, (4062) occ off wh arg mtx,rr slty lams,mod hd,pr-v pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 32 |
| RES_DEEP (ohm.m) | 30.89 | 32 |
| RES_SHALLOW (ohm.m) | 22.48 | 32 |
| **Δ Res (Deep − Shallow)** | **8.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3045 m MD — Interval 3042.5 – 3047.5 m

**Sample Description (spreadsheet):** Sample 3045m: 100% Sandstone (litho ASCII aggregate) TG 248.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 248.83529411764704 U |
| mTVDss | -1192.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3030m: off wh,occ lt trnsl brn, 9950 vf-f,wl srt,sbang-sbrnd,mod sil cmt, (4062) occ off wh arg mtx,rr slty lams,mod hd,pr-v pr vis por,fluor.
- **SILTSTONE** @ ~3039m: med gry,occ lt-dk gry, mnr gry brn,lt brn i/p,mnr arg-aren, micmic,mnr carb spks,mod hd, sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 29.09 | 33 |
| RES_SHALLOW (ohm.m) | 22.19 | 33 |
| **Δ Res (Deep − Shallow)** | **6.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3050 m MD — Interval 3047.5 – 3052.5 m

**Sample Description (spreadsheet):** Sample 3050m: 100% Sandstone (litho ASCII aggregate) TG 262.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 262.38125 U |
| mTVDss | -1193.13 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3039m: med gry,occ lt-dk gry, mnr gry brn,lt brn i/p,mnr arg-aren, micmic,mnr carb spks,mod hd, sbblky-sbfiss.
- **SANDSTONE** @ ~3042m: lt trnsl brn,clr-trnsl, off wh,f-occ crs,pr srt,sbang-occ 9990 ang,mod sil cmt,rr lt brn arg mtx, fri-occ lse,pr vis por,occ fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.0 | 33 |
| RES_DEEP (ohm.m) | 29.36 | 33 |
| RES_SHALLOW (ohm.m) | 22.44 | 33 |
| **Δ Res (Deep − Shallow)** | **6.92** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3055 m MD — Interval 3052.5 – 3057.5 m

**Sample Description (spreadsheet):** Sample 3055m: 100% Sandstone (litho ASCII aggregate) TG 199.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 199.29999999999995 U |
| mTVDss | -1193.31 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3039m: med gry,occ lt-dk gry, mnr gry brn,lt brn i/p,mnr arg-aren, micmic,mnr carb spks,mod hd, sbblky-sbfiss.
- **SANDSTONE** @ ~3042m: lt trnsl brn,clr-trnsl, off wh,f-occ crs,pr srt,sbang-occ 9990 ang,mod sil cmt,rr lt brn arg mtx, fri-occ lse,pr vis por,occ fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 29.80 | 33 |
| RES_SHALLOW (ohm.m) | 24.81 | 33 |
| **Δ Res (Deep − Shallow)** | **4.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3060 m MD — Interval 3057.5 – 3062.5 m

**Sample Description (spreadsheet):** Sample 3060m: 100% Sandstone (litho ASCII aggregate) TG 196.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbang (0.25) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 195.95624999999998 U |
| mTVDss | -1193.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3051m: lt trnsl brn,occ off wh,mnr clr-trnsl,f-crs,pr srt,sbang- 10020 occ ang,mod-occ wk sil cmt,mnr lt brn arg mtx,occ qtz ovgths,lse,fri- mod hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~3057m: med gry,occ med gry 74 / 6 / 4 / 7 / 9 brn,arg,micmic,mnr carb spks,frm- mod hd,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 25.16 | 33 |
| RES_SHALLOW (ohm.m) | 21.16 | 33 |
| **Δ Res (Deep − Shallow)** | **4.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3065 m MD — Interval 3062.5 – 3067.5 m

**Sample Description (spreadsheet):** Sample 3065m: 100% Sandstone (litho ASCII aggregate) TG 196.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 196.26875 U |
| mTVDss | -1193.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3051m: lt trnsl brn,occ off wh,mnr clr-trnsl,f-crs,pr srt,sbang- 10020 occ ang,mod-occ wk sil cmt,mnr lt brn arg mtx,occ qtz ovgths,lse,fri- mod hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~3057m: med gry,occ med gry 74 / 6 / 4 / 7 / 9 brn,arg,micmic,mnr carb spks,frm- mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 32 |
| RES_DEEP (ohm.m) | 20.95 | 32 |
| RES_SHALLOW (ohm.m) | 16.84 | 32 |
| **Δ Res (Deep − Shallow)** | **4.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3070 m MD — Interval 3067.5 – 3072.5 m

**Sample Description (spreadsheet):** Sample 3070m: 100% Sandstone (litho ASCII aggregate) TG 169.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 169.13529411764705 U |
| mTVDss | -1193.79 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3057m: med gry,occ med gry 74 / 6 / 4 / 7 / 9 brn,arg,micmic,mnr carb spks,frm- mod hd,sbblky-blky.
- **SANDSTONE** @ ~3060m: 393-524 gpm SANDSTONE:lt trnsl brn,clr-trnsl, 10050 f-occ crs,pr srt,ang-sbang,mod sil (4066) cmt,mnr lt brn arg mtx,occ mic flks, mod hd,pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 17.20 | 33 |
| RES_SHALLOW (ohm.m) | 13.92 | 33 |
| **Δ Res (Deep − Shallow)** | **3.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3075 m MD — Interval 3072.5 – 3077.5 m

**Sample Description (spreadsheet):** Sample 3075m: 100% Sandstone (litho ASCII aggregate) TG 134.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 134.25625000000002 U |
| mTVDss | -1193.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: 393-524 gpm SANDSTONE:lt trnsl brn,clr-trnsl, 10050 f-occ crs,pr srt,ang-sbang,mod sil (4066) cmt,mnr lt brn arg mtx,occ mic flks, mod hd,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3069m: lt trnsl brn,mnr trnsl- clr,f,occ med-crs,pr srt,sbang-occ ang,mod sil cmt,occ lt brn arg mtx, 69 / 5 / 5 / 8 / 13 171 U mnr mic flks,fri-mod hd,pr vis por, fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.5 | 33 |
| RES_DEEP (ohm.m) | 15.21 | 33 |
| RES_SHALLOW (ohm.m) | 12.92 | 33 |
| **Δ Res (Deep − Shallow)** | **2.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3080 m MD — Interval 3077.5 – 3082.5 m

**Sample Description (spreadsheet):** Sample 3080m: 100% Sandstone (litho ASCII aggregate) TG 154.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 154.37777777777777 U |
| mTVDss | -1193.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3069m: lt trnsl brn,mnr trnsl- clr,f,occ med-crs,pr srt,sbang-occ ang,mod sil cmt,occ lt brn arg mtx, 69 / 5 / 5 / 8 / 13 171 U mnr mic flks,fri-mod hd,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3072m: med gry,occ med gry brn,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.3 | 33 |
| RES_DEEP (ohm.m) | 14.49 | 33 |
| RES_SHALLOW (ohm.m) | 12.85 | 33 |
| **Δ Res (Deep − Shallow)** | **1.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3085 m MD — Interval 3082.5 – 3087.5 m

**Sample Description (spreadsheet):** Sample 3085m: 100% Sandstone (litho ASCII aggregate) TG 176.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 176.4 U |
| mTVDss | -1194.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3069m: lt trnsl brn,mnr trnsl- clr,f,occ med-crs,pr srt,sbang-occ ang,mod sil cmt,occ lt brn arg mtx, 69 / 5 / 5 / 8 / 13 171 U mnr mic flks,fri-mod hd,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3072m: med gry,occ med gry brn,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.7 | 33 |
| RES_DEEP (ohm.m) | 14.33 | 33 |
| RES_SHALLOW (ohm.m) | 12.91 | 33 |
| **Δ Res (Deep − Shallow)** | **1.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3090 m MD — Interval 3087.5 – 3092.5 m

**Sample Description (spreadsheet):** Sample 3090m: 100% Sandstone (litho ASCII aggregate) TG 177.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 177.625 U |
| mTVDss | -1194.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3078m: lt trnsl brn,occ trnsl- clr,f-occ crs,mod-pr srt,sbang,occ ang-sbrnd,wk-mod sil cmt,mnr lt brn 10110 arg mtx,tr mic flks,fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~3085m: lt trnsl brn,f-rr med, wl srt,sbang-sbrnd i/p,mod sil cmt, mnr lt brn arg mtx,rr carb spks,fri- 10130 mod hd,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.0 | 32 |
| RES_DEEP (ohm.m) | 14.44 | 32 |
| RES_SHALLOW (ohm.m) | 13.09 | 32 |
| **Δ Res (Deep − Shallow)** | **1.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3095 m MD — Interval 3092.5 – 3097.5 m

**Sample Description (spreadsheet):** Sample 3095m: 100% Sandstone (litho ASCII aggregate) TG 163.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 163.9 U |
| mTVDss | -1194.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3078m: lt trnsl brn,occ trnsl- clr,f-occ crs,mod-pr srt,sbang,occ ang-sbrnd,wk-mod sil cmt,mnr lt brn 10110 arg mtx,tr mic flks,fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~3085m: lt trnsl brn,f-rr med, wl srt,sbang-sbrnd i/p,mod sil cmt, mnr lt brn arg mtx,rr carb spks,fri- 10130 mod hd,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.7 | 33 |
| RES_DEEP (ohm.m) | 14.66 | 33 |
| RES_SHALLOW (ohm.m) | 13.28 | 33 |
| **Δ Res (Deep − Shallow)** | **1.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3100 m MD — Interval 3097.5 – 3102.5 m

**Sample Description (spreadsheet):** Sample 3100m: 100% Sandstone (litho ASCII aggregate) TG 182.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 182.56875 U |
| mTVDss | -1194.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3085m: lt trnsl brn,f-rr med, wl srt,sbang-sbrnd i/p,mod sil cmt, mnr lt brn arg mtx,rr carb spks,fri- 10130 mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~3091m: 10 SILTSTONE:med-lt gry,arg,mnr aren YP:23 lams,occ micmic,mnr carb spks,mod G W e L l : : 5 9 . / 9 13/15 1 (4 0 0 1 6 5 8 0 ) hd,occ hd,sbblky-blky,occ sbfiss. Sol:7 pH:9.5
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.0 | 33 |
| RES_DEEP (ohm.m) | 15.00 | 33 |
| RES_SHALLOW (ohm.m) | 13.54 | 33 |
| **Δ Res (Deep − Shallow)** | **1.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3105 m MD — Interval 3102.5 – 3107.5 m

**Sample Description (spreadsheet):** Sample 3105m: 100% Sandstone (litho ASCII aggregate) TG 200.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 200.5176470588235 U |
| mTVDss | -1194.18 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3091m: 10 SILTSTONE:med-lt gry,arg,mnr aren YP:23 lams,occ micmic,mnr carb spks,mod G W e L l : : 5 9 . / 9 13/15 1 (4 0 0 1 6 5 8 0 ) hd,occ hd,sbblky-blky,occ sbfiss. Sol:7 pH:9.5
- **SANDSTONE** @ ~3097m: lt trnsl brn,rr off wh, 10170 f,mnr med,wl srt,sbang-sbrnd i/p, mod sil cmt,occ lt brn arg mtx,occ mic flks,mnr slty lams,fri-mod hd, pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.9 | 33 |
| RES_DEEP (ohm.m) | 15.55 | 33 |
| RES_SHALLOW (ohm.m) | 13.81 | 33 |
| **Δ Res (Deep − Shallow)** | **1.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3110 m MD — Interval 3107.5 – 3112.5 m

**Sample Description (spreadsheet):** Sample 3110m: 100% Sandstone (litho ASCII aggregate) TG 193.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 193.0125 U |
| mTVDss | -1194.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3097m: lt trnsl brn,rr off wh, 10170 f,mnr med,wl srt,sbang-sbrnd i/p, mod sil cmt,occ lt brn arg mtx,occ mic flks,mnr slty lams,fri-mod hd, pr vis por,fluor.
- **SILTSTONE** @ ~3103m: lt-occ med brn,lt- 10190 med brn gry,med gry i/p,arg,rr aren, occ carb spks,frm-mod hd,sbblky- blky. 0 0.5 1 4 14 10200
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.5 | 33 |
| RES_DEEP (ohm.m) | 16.03 | 33 |
| RES_SHALLOW (ohm.m) | 13.72 | 33 |
| **Δ Res (Deep − Shallow)** | **2.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3115 m MD — Interval 3112.5 – 3117.5 m

**Sample Description (spreadsheet):** Sample 3115m: 100% Sandstone (litho ASCII aggregate) TG 204.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 204.03529411764708 U |
| mTVDss | -1194.09 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3103m: lt-occ med brn,lt- 10190 med brn gry,med gry i/p,arg,rr aren, occ carb spks,frm-mod hd,sbblky- blky. 0 0.5 1 4 14 10200
- **SANDSTONE** @ ~3106m: lt trnsl brn,mnr off wh, 10210 f-occ vf,occ grd to aren SLTST,wl
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 33 |
| RES_DEEP (ohm.m) | 18.42 | 33 |
| RES_SHALLOW (ohm.m) | 14.66 | 33 |
| **Δ Res (Deep − Shallow)** | **3.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3120 m MD — Interval 3117.5 – 3122.5 m

**Sample Description (spreadsheet):** Sample 3120m: 100% Sandstone (litho ASCII aggregate) TG 185.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 185.35 U |
| mTVDss | -1194.05 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3103m: lt-occ med brn,lt- 10190 med brn gry,med gry i/p,arg,rr aren, occ carb spks,frm-mod hd,sbblky- blky. 0 0.5 1 4 14 10200
- **SANDSTONE** @ ~3106m: lt trnsl brn,mnr off wh, 10210 f-occ vf,occ grd to aren SLTST,wl
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 32 |
| RES_DEEP (ohm.m) | 22.73 | 32 |
| RES_SHALLOW (ohm.m) | 16.58 | 32 |
| **Δ Res (Deep − Shallow)** | **6.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3125 m MD — Interval 3122.5 – 3127.5 m

**Sample Description (spreadsheet):** Sample 3125m: 100% Sandstone (litho ASCII aggregate) TG 217.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 217.0 U |
| mTVDss | -1193.97 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3118m: lt-med gry,lt brn-brn gry, med grn brn,arg-rr aren,micmic,mnr carb spks,mod hd-hd,sbblky-blky. 10240 SURVEY @ 10240.35'MDRT INC:91.20° AZI:50.04°G
- **SANDSTONE** @ ~3124m: lt-med trnsl brn,vf-f, (4067) rr med,mod srt,sbang-occ ang,mod sil cmt,mnr-occ lt brn arg mtx,mnr carb spks,mic flks,mod hd,fri,pr- occ v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.4 | 33 |
| RES_DEEP (ohm.m) | 28.50 | 33 |
| RES_SHALLOW (ohm.m) | 18.99 | 33 |
| **Δ Res (Deep − Shallow)** | **9.51** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3130 m MD — Interval 3127.5 – 3132.5 m

**Sample Description (spreadsheet):** Sample 3130m: 100% Sandstone (litho ASCII aggregate) TG 307.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 307.10588235294114 U |
| mTVDss | -1193.87 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3118m: lt-med gry,lt brn-brn gry, med grn brn,arg-rr aren,micmic,mnr carb spks,mod hd-hd,sbblky-blky. 10240 SURVEY @ 10240.35'MDRT INC:91.20° AZI:50.04°G
- **SANDSTONE** @ ~3124m: lt-med trnsl brn,vf-f, (4067) rr med,mod srt,sbang-occ ang,mod sil cmt,mnr-occ lt brn arg mtx,mnr carb spks,mic flks,mod hd,fri,pr- occ v pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.6 | 33 |
| RES_DEEP (ohm.m) | 29.15 | 33 |
| RES_SHALLOW (ohm.m) | 20.35 | 33 |
| **Δ Res (Deep − Shallow)** | **8.80** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3135 m MD — Interval 3132.5 – 3137.5 m

**Sample Description (spreadsheet):** Sample 3135m: 100% Sandstone (litho ASCII aggregate) TG 332.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 332.75625 U |
| mTVDss | -1193.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3118m: lt-med gry,lt brn-brn gry, med grn brn,arg-rr aren,micmic,mnr carb spks,mod hd-hd,sbblky-blky. 10240 SURVEY @ 10240.35'MDRT INC:91.20° AZI:50.04°G
- **SANDSTONE** @ ~3124m: lt-med trnsl brn,vf-f, (4067) rr med,mod srt,sbang-occ ang,mod sil cmt,mnr-occ lt brn arg mtx,mnr carb spks,mic flks,mod hd,fri,pr- occ v pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 29.45 | 33 |
| RES_SHALLOW (ohm.m) | 20.04 | 33 |
| **Δ Res (Deep − Shallow)** | **9.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3140 m MD — Interval 3137.5 – 3142.5 m

**Sample Description (spreadsheet):** Sample 3140m: 100% Sandstone (litho ASCII aggregate) TG 344.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 344.37058823529406 U |
| mTVDss | -1193.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3124m: lt-med trnsl brn,vf-f, (4067) rr med,mod srt,sbang-occ ang,mod sil cmt,mnr-occ lt brn arg mtx,mnr carb spks,mic flks,mod hd,fri,pr- occ v pr vis por,fluor.
- **SILTSTONE** @ ~3130m: lt brn,occ med brn-brn gry,arg-aren,mnr carb spks,micmic, mod hd,sbblky-occ blky. 10280 SURVEY @ 10280.99'MDRT INC:91.06° AZI:49.95°G
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.0 | 33 |
| RES_DEEP (ohm.m) | 32.65 | 33 |
| RES_SHALLOW (ohm.m) | 20.49 | 33 |
| **Δ Res (Deep − Shallow)** | **12.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3145 m MD — Interval 3142.5 – 3147.5 m

**Sample Description (spreadsheet):** Sample 3145m: 100% Sandstone (litho ASCII aggregate) TG 276.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% ptchy-evn fluor |
| Total Gas | 276.69411764705876 U |
| mTVDss | -1193.59 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3130m: lt brn,occ med brn-brn gry,arg-aren,mnr carb spks,micmic, mod hd,sbblky-occ blky. 10280 SURVEY @ 10280.99'MDRT INC:91.06° AZI:49.95°G
- **SANDSTONE** @ ~3136m: lt brn-trnsl brn,vf-f, occ grd to aren SLTST,wl srt,sbang- sbrnd,mod sil cmt,occ-com lt brn arg-occ slty mtx,mnr carb spks & mic flks,mod hd,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 32 |
| RES_DEEP (ohm.m) | 33.24 | 32 |
| RES_SHALLOW (ohm.m) | 21.79 | 32 |
| **Δ Res (Deep − Shallow)** | **11.45** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3150 m MD — Interval 3147.5 – 3152.5 m

**Sample Description (spreadsheet):** Sample 3150m: 100% Sandstone (litho ASCII aggregate) TG 235.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 235.625 U |
| mTVDss | -1193.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3136m: lt brn-trnsl brn,vf-f, occ grd to aren SLTST,wl srt,sbang- sbrnd,mod sil cmt,occ-com lt brn arg-occ slty mtx,mnr carb spks & mic flks,mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~3142m: lt trnsl brn,f,wl srt, sbang-occ ang,mod sil cmt,occ lt brn arg mtx,loc carb spks,mnr mic flks,fri-mod hd,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.2 | 33 |
| RES_DEEP (ohm.m) | 33.08 | 33 |
| RES_SHALLOW (ohm.m) | 24.15 | 33 |
| **Δ Res (Deep − Shallow)** | **8.94** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3155 m MD — Interval 3152.5 – 3157.5 m

**Sample Description (spreadsheet):** Sample 3155m: 100% Sandstone (litho ASCII aggregate) TG 332.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 332.2117647058824 U |
| mTVDss | -1193.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3142m: lt trnsl brn,f,wl srt, sbang-occ ang,mod sil cmt,occ lt brn arg mtx,loc carb spks,mnr mic flks,fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~3146m: clr-trnsl,lt trnsl brn, 10330 f-med,occ crs,pr srt,sbang-sbrnd, mod-wk sil cmt,mnr lt brn arg mtx, occ qtz ovgths,lse,fri,fr-gd inf por,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 33.42 | 33 |
| RES_SHALLOW (ohm.m) | 23.74 | 33 |
| **Δ Res (Deep − Shallow)** | **9.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3160 m MD — Interval 3157.5 – 3162.5 m

**Sample Description (spreadsheet):** Sample 3160m: 100% Sandstone (litho ASCII aggregate) TG 368.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 368.43125 U |
| mTVDss | -1193.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3146m: clr-trnsl,lt trnsl brn, 10330 f-med,occ crs,pr srt,sbang-sbrnd, mod-wk sil cmt,mnr lt brn arg mtx, occ qtz ovgths,lse,fri,fr-gd inf por,pr vis por,fluor.
- **SANDSTONE** @ ~3158m: clr-trnsl,lt trnsl brn, 76 / 6 / 5 / 6 / 7 407 U f-crs,pr srt,sbang-mnr ang,mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths, 10370 lse,mod hd,fr-gd inf por,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 31.73 | 33 |
| RES_SHALLOW (ohm.m) | 24.68 | 33 |
| **Δ Res (Deep − Shallow)** | **7.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3165 m MD — Interval 3162.5 – 3167.5 m

**Sample Description (spreadsheet):** Sample 3165m: 100% Sandstone (litho ASCII aggregate) TG 337.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 337.20000000000005 U |
| mTVDss | -1193.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3158m: clr-trnsl,lt trnsl brn, 76 / 6 / 5 / 6 / 7 407 U f-crs,pr srt,sbang-mnr ang,mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths, 10370 lse,mod hd,fr-gd inf por,pr-fr vis por,fluor.
- **SANDSTONE** @ ~3167m: clr-trnsl,lt trnsl brn- off wh i/p,f-crs,pr srt,ang-sbang, 0 0.5 1 4 14 10400 mod sil cmt,rr lt brn arg mtx,occ 14 18 28 qtz ovgths,mod hd-fri,fr-gd inf por, pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 33 |
| RES_DEEP (ohm.m) | 32.28 | 33 |
| RES_SHALLOW (ohm.m) | 23.52 | 33 |
| **Δ Res (Deep − Shallow)** | **8.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3170 m MD — Interval 3167.5 – 3172.5 m

**Sample Description (spreadsheet):** Sample 3170m: 100% Sandstone (litho ASCII aggregate) TG 308.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 308.89374999999995 U |
| mTVDss | -1193.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3158m: clr-trnsl,lt trnsl brn, 76 / 6 / 5 / 6 / 7 407 U f-crs,pr srt,sbang-mnr ang,mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths, 10370 lse,mod hd,fr-gd inf por,pr-fr vis por,fluor.
- **SANDSTONE** @ ~3167m: clr-trnsl,lt trnsl brn- off wh i/p,f-crs,pr srt,ang-sbang, 0 0.5 1 4 14 10400 mod sil cmt,rr lt brn arg mtx,occ 14 18 28 qtz ovgths,mod hd-fri,fr-gd inf por, pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 32 |
| RES_DEEP (ohm.m) | 30.10 | 32 |
| RES_SHALLOW (ohm.m) | 23.41 | 32 |
| **Δ Res (Deep − Shallow)** | **6.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3175 m MD — Interval 3172.5 – 3177.5 m

**Sample Description (spreadsheet):** Sample 3175m: 100% Sandstone (litho ASCII aggregate) TG 305.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 305.8875 U |
| mTVDss | -1193.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3158m: clr-trnsl,lt trnsl brn, 76 / 6 / 5 / 6 / 7 407 U f-crs,pr srt,sbang-mnr ang,mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths, 10370 lse,mod hd,fr-gd inf por,pr-fr vis por,fluor.
- **SANDSTONE** @ ~3167m: clr-trnsl,lt trnsl brn- off wh i/p,f-crs,pr srt,ang-sbang, 0 0.5 1 4 14 10400 mod sil cmt,rr lt brn arg mtx,occ 14 18 28 qtz ovgths,mod hd-fri,fr-gd inf por, pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 33 |
| RES_DEEP (ohm.m) | 27.78 | 33 |
| RES_SHALLOW (ohm.m) | 21.49 | 33 |
| **Δ Res (Deep − Shallow)** | **6.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3180 m MD — Interval 3177.5 – 3182.5 m

**Sample Description (spreadsheet):** Sample 3180m: 100% Sandstone (litho ASCII aggregate) TG 307.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 307.1764705882353 U |
| mTVDss | -1192.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3167m: clr-trnsl,lt trnsl brn- off wh i/p,f-crs,pr srt,ang-sbang, 0 0.5 1 4 14 10400 mod sil cmt,rr lt brn arg mtx,occ 14 18 28 qtz ovgths,mod hd-fri,fr-gd inf por, pr-fr vis por,fluor.
- **SANDSTONE** @ ~3176m: lt trnsl brn,clr-trnsl, f-med,occ crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths,mod hd,lse i/p,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 27.81 | 33 |
| RES_SHALLOW (ohm.m) | 22.04 | 33 |
| **Δ Res (Deep − Shallow)** | **5.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3185 m MD — Interval 3182.5 – 3187.5 m

**Sample Description (spreadsheet):** Sample 3185m: 100% Sandstone (litho ASCII aggregate) TG 329.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 329.65 U |
| mTVDss | -1192.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3176m: lt trnsl brn,clr-trnsl, f-med,occ crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths,mod hd,lse i/p,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~3179m: med-occ dk gry,occ lt brn,arg-rr aren,micmic,mnr carb spks, mod hd-hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.4 | 33 |
| RES_DEEP (ohm.m) | 30.13 | 33 |
| RES_SHALLOW (ohm.m) | 21.44 | 33 |
| **Δ Res (Deep − Shallow)** | **8.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3190 m MD — Interval 3187.5 – 3192.5 m

**Sample Description (spreadsheet):** Sample 3190m: 100% Sandstone (litho ASCII aggregate) TG 365.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 365.34117647058827 U |
| mTVDss | -1192.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3176m: lt trnsl brn,clr-trnsl, f-med,occ crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt brn arg mtx,occ qtz ovgths,mod hd,lse i/p,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~3179m: med-occ dk gry,occ lt brn,arg-rr aren,micmic,mnr carb spks, mod hd-hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 33 |
| RES_DEEP (ohm.m) | 29.91 | 33 |
| RES_SHALLOW (ohm.m) | 22.27 | 33 |
| **Δ Res (Deep − Shallow)** | **7.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3195 m MD — Interval 3192.5 – 3197.5 m

**Sample Description (spreadsheet):** Sample 3195m: 100% Sandstone (litho ASCII aggregate) TG 459.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | pr (0.20) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 459.23125000000005 U |
| mTVDss | -1192.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3179m: med-occ dk gry,occ lt brn,arg-rr aren,micmic,mnr carb spks, mod hd-hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3194m: lt trnsl brn,clr-trnsl, f-med,rr crs,mod-pr srt,ang-sbang, mod sil cmt,rr lt brn arg mtx,mnr mic flks,rr slty lams,fri-mod hd, 74 / 6 / 5 / 7 / 8 484 U lse i/p,pr vis por,fr-gd inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 32 |
| RES_DEEP (ohm.m) | 29.96 | 32 |
| RES_SHALLOW (ohm.m) | 24.29 | 32 |
| **Δ Res (Deep − Shallow)** | **5.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3200 m MD — Interval 3197.5 – 3202.5 m

**Sample Description (spreadsheet):** Sample 3200m: 100% Sandstone (litho ASCII aggregate) TG 439.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 439.44375 U |
| mTVDss | -1192.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3194m: lt trnsl brn,clr-trnsl, f-med,rr crs,mod-pr srt,ang-sbang, mod sil cmt,rr lt brn arg mtx,mnr mic flks,rr slty lams,fri-mod hd, 74 / 6 / 5 / 7 / 8 484 U lse i/p,pr vis por,fr-gd inf por,
- **SANDSTONE** @ ~3203m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-ang,mod sil cmt, mnr lt brn arg mtx,fri-mod hd,lse, pr vis por,fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 33 |
| RES_DEEP (ohm.m) | 29.97 | 33 |
| RES_SHALLOW (ohm.m) | 25.33 | 33 |
| **Δ Res (Deep − Shallow)** | **4.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3205 m MD — Interval 3202.5 – 3207.5 m

**Sample Description (spreadsheet):** Sample 3205m: 100% Sandstone (litho ASCII aggregate) TG 440.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 440.5705882352941 U |
| mTVDss | -1192.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3194m: lt trnsl brn,clr-trnsl, f-med,rr crs,mod-pr srt,ang-sbang, mod sil cmt,rr lt brn arg mtx,mnr mic flks,rr slty lams,fri-mod hd, 74 / 6 / 5 / 7 / 8 484 U lse i/p,pr vis por,fr-gd inf por,
- **SANDSTONE** @ ~3203m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-ang,mod sil cmt, mnr lt brn arg mtx,fri-mod hd,lse, pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 30.98 | 33 |
| RES_SHALLOW (ohm.m) | 24.59 | 33 |
| **Δ Res (Deep − Shallow)** | **6.39** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3210 m MD — Interval 3207.5 – 3212.5 m

**Sample Description (spreadsheet):** Sample 3210m: 100% Sandstone (litho ASCII aggregate) TG 434.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 434.925 U |
| mTVDss | -1192.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3194m: lt trnsl brn,clr-trnsl, f-med,rr crs,mod-pr srt,ang-sbang, mod sil cmt,rr lt brn arg mtx,mnr mic flks,rr slty lams,fri-mod hd, 74 / 6 / 5 / 7 / 8 484 U lse i/p,pr vis por,fr-gd inf por,
- **SANDSTONE** @ ~3203m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-ang,mod sil cmt, mnr lt brn arg mtx,fri-mod hd,lse, pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 34.45 | 33 |
| RES_SHALLOW (ohm.m) | 27.94 | 33 |
| **Δ Res (Deep − Shallow)** | **6.51** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3215 m MD — Interval 3212.5 – 3217.5 m

**Sample Description (spreadsheet):** Sample 3215m: 100% Sandstone (litho ASCII aggregate) TG 238.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 238.10588235294117 U |
| mTVDss | -1192.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3203m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-ang,mod sil cmt, mnr lt brn arg mtx,fri-mod hd,lse, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3213m: lt trnsl brn,occ trnsl- clr,f-med,occ crs,pr srt,sbang,ang- sbrnd i/p,mod sil cmt,occ lt brn 10550 arg mtx,occ mic flks,rr qtz ovgths, (4061)
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 33 |
| RES_DEEP (ohm.m) | 32.68 | 33 |
| RES_SHALLOW (ohm.m) | 24.56 | 33 |
| **Δ Res (Deep − Shallow)** | **8.11** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3220 m MD — Interval 3217.5 – 3222.5 m

**Sample Description (spreadsheet):** Sample 3220m: 100% Sandstone (litho ASCII aggregate) TG 189.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 189.46249999999998 U |
| mTVDss | -1192.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3203m: lt trnsl brn,clr-trnsl, f-crs,pr srt,sbang-ang,mod sil cmt, mnr lt brn arg mtx,fri-mod hd,lse, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3213m: lt trnsl brn,occ trnsl- clr,f-med,occ crs,pr srt,sbang,ang- sbrnd i/p,mod sil cmt,occ lt brn 10550 arg mtx,occ mic flks,rr qtz ovgths, (4061)
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.0 | 26 |
| RES_DEEP (ohm.m) | 31.61 | 13 |
| RES_SHALLOW (ohm.m) | 23.38 | 13 |
| **Δ Res (Deep − Shallow)** | **8.23** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3225 m MD — Interval 3222.5 – 3227.5 m

**Sample Description (spreadsheet):** Sample 3225m: 100% Sandstone (litho ASCII aggregate) TG 183.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% of SST, |
| Total Gas | 183.8625 U |
| mTVDss | -1192.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3213m: lt trnsl brn,occ trnsl- clr,f-med,occ crs,pr srt,sbang,ang- sbrnd i/p,mod sil cmt,occ lt brn 10550 arg mtx,occ mic flks,rr qtz ovgths, (4061)
- **SILTSTONE** @ ~3219m: med-occ dk gry,med gry brn i/p,arg,rr aren,micmic,rr carb 10570 spks,frm-mod hd,sbblky-dom sbfiss. 5.5" LINER 10580 SET @ 10583'MDRT.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 247 |
| Depth range | 1835 – 3225 m |
| Avg % Sandstone | 100.0% |
| Avg Δ Res (Deep−Shallow) | 8.94 ohm.m |
| Max Δ Res | 27.50 ohm.m |
| Min Δ Res | 1.10 ohm.m |
| Mudlog matches | 247 / 247 |
