# BIALA 21 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-13 02:05 UTC  
**Well:** BIALA 21 (BIALA 21)  
**TD:** 3278 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `BIALA 21_ML_Mudlog_Spud-3278_MD_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Biala 21 Hz Section Samples Descriptions_Rev3-fernc.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Biala_21` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Biala_21_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1920.57 | DC30.xlsx |
| McKinlay Member (shallowest) | 1922.00 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1922.00 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2213.53 m MD
- 2558.26 m MD
- 2894.77 m MD
- 3183.68 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 2178.53 | 2180.02 | 1.49 | 2213.53 | 35.0 |
| 2490.42 | 2487.45 | 2.97 | 2558.26 | 67.8 |
| 2857.27 | 2855.78 | 1.49 | 2894.77 | 37.5 |
| 3111.23 | 3111.23 | 0.00 | 3183.68 | 72.4 |

**McKinlay Member analysis window:** 1922.0 – 3278.1 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 2179–2214 m (overburden), 2490–2558 m (overburden), 2857–2895 m (overburden), 3111–3184 m (overburden)

**Samples in McKinlay Member:** 134 of 168 total
- Excluded pre-reservoir: 9
- Excluded overburden intervals: 25

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** BIALA 21 → `BIALA 21` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 10% Siltstone, trace siderite in 90% very fine  to  coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 33.0 U |
| mTVDss | -1196.35 m |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1916m: lt-med gry,lt gry brn,aren,grd to vf SST,
- **SILTSTONE** @ ~1916m: lt-med gry,lt gry brn,aren,grd to vf SST, micmic,occ carb spks,frm,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.8 | 33 |
| RES_DEEP (ohm.m) | 35.20 | 33 |
| RES_SHALLOW (ohm.m) | 33.68 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 20% Siltstone, 80% very fine  to  coarse, pred fine to medium Sandstone, 80% bright FLUOR in SST. TG 36U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% bri |
| Total Gas | 36.0 U |
| mTVDss | -1196.56 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1916m: lt-med gry,lt gry brn,aren,grd to vf SST,
- **SILTSTONE** @ ~1916m: lt-med gry,lt gry brn,aren,grd to vf SST, micmic,occ carb spks,frm,sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.7 | 33 |
| RES_DEEP (ohm.m) | 30.93 | 33 |
| RES_SHALLOW (ohm.m) | 29.96 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 10% Siltstone, 90% very fine  to  coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 40.0 U |
| mTVDss | -1196.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: clr,trnsl,pl brn,lt gry,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk-mod sil cmt,tr sid cmt,com off wh arg mtx,mod hd-fri aggs,com lse qtz grs,pr 19 12 2 3 4 3.9 vis por,fr inf por,fluor. 80 / 7 / 5 / 5 / 5
- **SANDSTONE** @ ~1932m: clr,trnsl,pl brn,off wh,vf-crs,pred f-med,pr srt,sbang-sbrnd,mod sil cmt,com off wh arg mtx,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.5 | 33 |
| RES_DEEP (ohm.m) | 28.95 | 33 |
| RES_SHALLOW (ohm.m) | 27.03 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 10% Siltstone, 90% very fine  to  coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 51.0 U |
| mTVDss | -1196.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: clr,trnsl,pl brn,off wh,vf-crs,pred f-med,pr srt,sbang-sbrnd,mod sil cmt,com off wh arg mtx,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~1936m: lt-med gry,lt gry brn,aren,grd to vf SST, micmic,occ carb spks,frm-occ mod hd,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.0 | 33 |
| RES_DEEP (ohm.m) | 26.57 | 33 |
| RES_SHALLOW (ohm.m) | 24.84 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 30% Siltstone, 70% very fine  to  coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 36U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 36.0 U |
| mTVDss | -1196.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: clr,trnsl,pl brn,off wh,vf-crs,pred f-med,pr srt,sbang-sbrnd,mod sil cmt,com off wh arg mtx,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~1936m: lt-med gry,lt gry brn,aren,grd to vf SST, micmic,occ carb spks,frm-occ mod hd,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.7 | 32 |
| RES_DEEP (ohm.m) | 24.40 | 32 |
| RES_SHALLOW (ohm.m) | 21.82 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 20% Siltstone, 80% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 25.0 U |
| mTVDss | -1197.10 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1936m: lt-med gry,lt gry brn,aren,grd to vf SST, micmic,occ carb spks,frm-occ mod hd,sbblky.
- **SANDSTONE** @ ~1940m: clr,trnsl,pl brn,off wh,vf-crs,pred f-med,pr srt,sbang-sbrnd,mod sil cmt,com off wh arg mtx,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 21.47 | 33 |
| RES_SHALLOW (ohm.m) | 19.17 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 20% Siltstone, 80% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 19U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 19.0 U |
| mTVDss | -1197.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: clr,trnsl,pl brn,off wh,vf-crs,pred f-med,pr srt,sbang-sbrnd,mod sil cmt,com off wh arg mtx,fri-mod hd aggs,com lse,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~1944m: clr,trnsl,frstd,lt gry,pl brn,vf-f aggs, med-v crs lse,v pr srt,ang-sbrnd,wk-mod strg sil cmt,off wh arg mtx,tr carb spks,fri-occ mod hd aggs, 78 / 7 / 5 / 5 / 5 dom cln lse qtz grs,pr-v pr vis por,fr-gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 19.80 | 33 |
| RES_SHALLOW (ohm.m) | 17.88 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 10% Siltstone, 90% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG 16U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 16.0 U |
| mTVDss | -1197.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1944m: clr,trnsl,frstd,lt gry,pl brn,vf-f aggs, med-v crs lse,v pr srt,ang-sbrnd,wk-mod strg sil cmt,off wh arg mtx,tr carb spks,fri-occ mod hd aggs, 78 / 7 / 5 / 5 / 5 dom cln lse qtz grs,pr-v pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~1952m: med-dk grysh brn,med-dk gry,aren, grd to vf SST,com carb spks,micmic,frm-occ mod hd,sbblky. 1956 MD:1955.9 m 1234.9 VD :1234.9 m
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 19.12 | 33 |
| RES_SHALLOW (ohm.m) | 17.71 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 10% Siltstone, 90% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG 19U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 19.0 U |
| mTVDss | -1197.20 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1952m: med-dk grysh brn,med-dk gry,aren, grd to vf SST,com carb spks,micmic,frm-occ mod hd,sbblky. 1956 MD:1955.9 m 1234.9 VD :1234.9 m
- **SANDSTONE** @ ~1956m: clr,trnsl,lt brn,frstd,vf-f aggs,occ med-crs lse,pr srt,sbang-sbrnd,occ ang,wk sil cmt, 19 12 6 3 0 4.9 com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr-fr inf por,fluor. 77 / 7 / 5 / 6 / 5
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 18.53 | 33 |
| RES_SHALLOW (ohm.m) | 17.07 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 10% Siltstone, 90% very fine to medium Sandstone, 70% moderately bright FLUOR in SST. TG 14U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri |
| Total Gas | 14.0 U |
| mTVDss | -1197.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1956m: clr,trnsl,lt brn,frstd,vf-f aggs,occ med-crs lse,pr srt,sbang-sbrnd,occ ang,wk sil cmt, 19 12 6 3 0 4.9 com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr-fr inf por,fluor. 77 / 7 / 5 / 6 / 5
- **SANDSTONE** @ ~1968m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 32 |
| RES_DEEP (ohm.m) | 18.01 | 32 |
| RES_SHALLOW (ohm.m) | 16.13 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1975.0 m

**Sample Description (spreadsheet):** Sample 1975m: 0% Siltstone, 100% very fine to medium Sandstone, 60% moderately bright FLUOR in SST. TG 11U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri |
| Total Gas | 13.0 U |
| mTVDss | -1197.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1968m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~1972m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med 19 12 7 3 6 4.8 lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor. 11-12-2024
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 17 |
| RES_DEEP (ohm.m) | 17.89 | 17 |
| RES_SHALLOW (ohm.m) | 16.11 | 17 |

---

### 1975 m MD — Interval 1975.0 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 0% Siltstone, 100% very fine to medium Sandstone, 60% moderately bright FLUOR in SST. TG 11U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 60.0% mod bri |
| Total Gas | 11.0 U |
| mTVDss | -1197.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1968m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~1972m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med 19 12 7 3 6 4.8 lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor. 11-12-2024
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 16 |
| RES_DEEP (ohm.m) | 17.58 | 16 |
| RES_SHALLOW (ohm.m) | 16.21 | 16 |

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 0% Siltstone, 100% very fine to medium Sandstone, 60% moderately bright FLUOR in SST. TG 12U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 60.0% mod bri |
| Total Gas | 12.0 U |
| mTVDss | -1197.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1968m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~1972m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med 19 12 7 3 6 4.8 lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor. 11-12-2024
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 33 |
| RES_DEEP (ohm.m) | 18.20 | 33 |
| RES_SHALLOW (ohm.m) | 16.46 | 33 |

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 0% Siltstone, 100% very fine to medium Sandstone, 60% moderately bright FLUOR in SST. TG 14U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 60.0% mod bri |
| Total Gas | 14.0 U |
| mTVDss | -1196.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1968m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~1972m: clr,trnsl,lt brn,frstd,vf-f aggs,tr f-med 19 12 7 3 6 4.8 lse,mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com lse grs,v pr vis por,pr inf por,fluor. 11-12-2024
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 33 |
| RES_DEEP (ohm.m) | 19.54 | 33 |
| RES_SHALLOW (ohm.m) | 17.42 | 33 |

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 0% Siltstone, 100% very fine to medium Sandstone, 60% moderately bright FLUOR in SST. TG 16U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 60.0% mod bri |
| Total Gas | 16.0 U |
| mTVDss | -1196.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: clr,trnsl,pl brn,vf-f,tr med,mod wl srt, 12-12-2024 sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, com carb spks,fri,occ lse grs,v pr vis & inf por,fluor.
- **SANDSTONE** @ ~1988m: clr,trnsl,frstd,lt brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,occ ang,wk sil cmt,occ off wh-pl brn arg mtx,rr carb spks,dom cln lse qtz grs,occ fri, v pr vis por,pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 21.23 | 33 |
| RES_SHALLOW (ohm.m) | 19.10 | 33 |

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 0% Siltstone, 100% very fine  to  coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 29U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 29.0 U |
| mTVDss | -1196.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: clr,trnsl,pl brn,vf-f,tr med,mod wl srt, 12-12-2024 sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, com carb spks,fri,occ lse grs,v pr vis & inf por,fluor.
- **SANDSTONE** @ ~1988m: clr,trnsl,frstd,lt brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,occ ang,wk sil cmt,occ off wh-pl brn arg mtx,rr carb spks,dom cln lse qtz grs,occ fri, v pr vis por,pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.0 | 32 |
| RES_DEEP (ohm.m) | 21.87 | 32 |
| RES_SHALLOW (ohm.m) | 19.79 | 32 |

---

### 2000 m MD — Interval 1997.5 – 2005.0 m

**Sample Description (spreadsheet):** Sample 2000m: 0% Siltstone, 100% very fine  to  coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 35U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 35.0 U |
| mTVDss | -1196.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1988m: clr,trnsl,frstd,lt brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,occ ang,wk sil cmt,occ off wh-pl brn arg mtx,rr carb spks,dom cln lse qtz grs,occ fri, v pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~1992m: dk gry brn,med-dk gry,aren,grd to vf 80 / 7 / 5 / 4 / 4 35U SST,com carb spks,micmic,frm,sbblky. 20 12
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.7 | 50 |
| RES_DEEP (ohm.m) | 23.07 | 50 |
| RES_SHALLOW (ohm.m) | 22.16 | 50 |

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: 10% Siltstone, 90% very fine  to  coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 61U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf - crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 61.0 U |
| mTVDss | -1196.13 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1992m: dk gry brn,med-dk gry,aren,grd to vf 80 / 7 / 5 / 4 / 4 35U SST,com carb spks,micmic,frm,sbblky. 20 12
- **SANDSTONE** @ ~2004m: clr,trnsl,frstd,lt brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,occ ang,wk sil cmt,occ off wh-pl brn arg mtx,rr carb spks,dom cln lse qtz grs,occ fri, 2008 v pr vis por,pr inf por,fluor. 1233.9
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.4 | 65 |
| RES_DEEP (ohm.m) | 24.46 | 65 |
| RES_SHALLOW (ohm.m) | 24.17 | 65 |

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 60.0 U |
| mTVDss | -1195.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2004m: clr,trnsl,frstd,lt brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,occ ang,wk sil cmt,occ off wh-pl brn arg mtx,rr carb spks,dom cln lse qtz grs,occ fri, 2008 v pr vis por,pr inf por,fluor. 1233.9
- **SANDSTONE** @ ~2016m: clr,trnsl,frstd,pl trnsl brn,vf-med,tr crs, pr srt,bang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com cln lse qtz grs,v pr vis por, 2020 pr-fr inf por,fluor. 1233.3
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.4 | 66 |
| RES_DEEP (ohm.m) | 27.28 | 66 |
| RES_SHALLOW (ohm.m) | 27.24 | 66 |

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: 5% Siltstone, trace siderite in 95% very fine to medium, trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med, tr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 72.0 U |
| mTVDss | -1195.38 m |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2016m: clr,trnsl,frstd,pl trnsl brn,vf-med,tr crs, pr srt,bang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com cln lse qtz grs,v pr vis por, 2020 pr-fr inf por,fluor. 1233.3
- **SANDSTONE** @ ~2024m: clr,trnsl,frstd,pl trnsl brn,vf-med,tr crs, pr srt,bang-sbrnd,wk sil cmt,tr sid cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com cln lse qtz brn-off wh arg mtx,tr carb spks,fri,com cln lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.8 | 66 |
| RES_DEEP (ohm.m) | 31.25 | 66 |
| RES_SHALLOW (ohm.m) | 29.19 | 66 |

---

### 2040 m MD — Interval 2035.0 – 2045.0 m

**Sample Description (spreadsheet):** Sample 2040m: 5% Siltstone, 95% very fine to coarse, prefine fine to medium Sandstone, 100% bright FLUOR in SST. TG 131U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pref f-med (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 131.0 U |
| mTVDss | -1195.12 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2024m: clr,trnsl,frstd,pl trnsl brn,vf-med,tr crs, pr srt,bang-sbrnd,wk sil cmt,tr sid cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com cln lse qtz brn-off wh arg mtx,tr carb spks,fri,com cln lse qtz grs,v pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2024m: clr,trnsl,frstd,pl trnsl brn,f-occ crs,tr crs,pr srt,bang-sbrnd,wk sil cmt,tr sid cmt,com pl brn-off wh arg mtx,tr carb spks,fri,com cln lse qtz 2040 80 / 6 / 4 / 5 / 5 135U grs,v pr vis por,pr inf por,fluor. 1232.7
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.3 | 65 |
| RES_DEEP (ohm.m) | 48.38 | 65 |
| RES_SHALLOW (ohm.m) | 36.77 | 65 |

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: 10% Siltstone, 90% very fine to coarse, prefine fine to medium Sandstone, 100% bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pref f-med (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 120.0 U |
| mTVDss | -1195.00 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2044m: med-dk brnsh gry,aren,grd to vf SST, com carb spks,frm,sbblky.
- **SANDSTONE** @ ~2048m: pl brn,trnsl,clr,vf-med,tr crs,mod-pr srt,sbang-sbrnd,wk-mod sil cmt,com off wh-lt brn arg mtx,tr carb spks,fri-mod hd,occ lse,v pr-pr vis por,pr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 66 |
| RES_DEEP (ohm.m) | 68.25 | 66 |
| RES_SHALLOW (ohm.m) | 46.55 | 66 |

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: 10% Siltstone, 90% very fine to coarse, prefine fine to medium Sandstone, 100% bright FLUOR in SST. TG 144U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pref f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 144.0 U |
| mTVDss | -1194.88 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2044m: med-dk brnsh gry,aren,grd to vf SST, com carb spks,frm,sbblky.
- **SANDSTONE** @ ~2048m: pl brn,trnsl,clr,vf-med,tr crs,mod-pr srt,sbang-sbrnd,wk-mod sil cmt,com off wh-lt brn arg mtx,tr carb spks,fri-mod hd,occ lse,v pr-pr vis por,pr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 65 |
| RES_DEEP (ohm.m) | 48.84 | 65 |
| RES_SHALLOW (ohm.m) | 45.60 | 65 |

---

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: 10% Siltstone, 90% very fine to coarse, prefine fine to medium Sandstone, 100% bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pref f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 155.0 U |
| mTVDss | -1194.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2062m: pl brn,trnsl,clr,vf-med,tr crs-v crs, mod-pr srt,sbang-sbrnd,wk-mod sil cmt,com off wh-lt brn arg mtx,tr carb spks,fri-mod hd,occ lse,v 20 12 6 3 8 2.5 pr-pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2076m: clr,trnsl,v pl brn,vf-crs,pred med-crs, pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg 81 / 7 / 4 / 4 / 4 85U mtx,tr carb flks,fri-mod hd,com lse,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.2 | 66 |
| RES_DEEP (ohm.m) | 41.89 | 66 |
| RES_SHALLOW (ohm.m) | 34.46 | 66 |

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 20% Siltstone, 80% very fine to coarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred med-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 115.0 U |
| mTVDss | -1194.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2062m: pl brn,trnsl,clr,vf-med,tr crs-v crs, mod-pr srt,sbang-sbrnd,wk-mod sil cmt,com off wh-lt brn arg mtx,tr carb spks,fri-mod hd,occ lse,v 20 12 6 3 8 2.5 pr-pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2076m: clr,trnsl,v pl brn,vf-crs,pred med-crs, pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg 81 / 7 / 4 / 4 / 4 85U mtx,tr carb flks,fri-mod hd,com lse,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 66 |
| RES_DEEP (ohm.m) | 28.33 | 66 |
| RES_SHALLOW (ohm.m) | 22.70 | 66 |

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: 10% Siltstone, 90% very fine to coarse, pred fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 54.0 U |
| mTVDss | -1194.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2076m: clr,trnsl,v pl brn,vf-crs,pred med-crs, pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg 81 / 7 / 4 / 4 / 4 85U mtx,tr carb flks,fri-mod hd,com lse,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2080m: clr,trnsl,v pl brn,vf-crs,pred med-f,pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg 78 / 7 / 5 / 5 / 5 55U mtx,tr carb flks,fri-mod hd,pred lse,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 65 |
| RES_DEEP (ohm.m) | 20.29 | 65 |
| RES_SHALLOW (ohm.m) | 17.46 | 65 |

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 0% Siltstone, 100% very fine to very coarse, pred fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-v crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 51.0 U |
| mTVDss | -1194.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: clr,trnsl,v pl brn,vf-crs,pred med-f,pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg 78 / 7 / 5 / 5 / 5 55U mtx,tr carb flks,fri-mod hd,pred lse,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2092m: clr,trnsl,v pl brn,vf-crs,pred vf-f,occ v crs,pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx,tr carb flks,fri-mod hd,pred lse,pr vis por, 20 12 9 3 6 2.5 fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 66 |
| RES_DEEP (ohm.m) | 21.00 | 66 |
| RES_SHALLOW (ohm.m) | 18.07 | 66 |

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 20% Siltstone, 80% very fine to fine, trace coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f, tr crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 43.0 U |
| mTVDss | -1194.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2092m: clr,trnsl,v pl brn,vf-crs,pred vf-f,occ v crs,pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx,tr carb flks,fri-mod hd,pred lse,pr vis por, 20 12 9 3 6 2.5 fr-gd inf por,fluor.
- **SILTSTONE** @ ~2104m: med-lt gry brn,aren,grd to slty SST, 1232.2 mnr carb spks,occ sandy lams,frm-sft,sbblky-blky. dll-mod bri grn/yel ptchy fluor,mod diff cut,bri thn blu/wh r/r.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 65 |
| RES_DEEP (ohm.m) | 23.31 | 65 |
| RES_SHALLOW (ohm.m) | 19.35 | 65 |

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 70.0 U |
| mTVDss | -1193.98 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2104m: med-lt gry brn,aren,grd to slty SST, 1232.2 mnr carb spks,occ sandy lams,frm-sft,sbblky-blky. dll-mod bri grn/yel ptchy fluor,mod diff cut,bri thn blu/wh r/r.
- **SANDSTONE** @ ~2115m: clr,trnsl,pl brn gry,vf-v crs,pred med-crs,pr srt,sbang-sbrnd,mod wk sil cmt,com lt gry brn-off wh arg mtx,mnr carb flks,fri-mod hd,com lse,pr vis & inf por,fluor. 2120 81 / 6 / 4 / 4 / 5 76U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 66 |
| RES_DEEP (ohm.m) | 24.67 | 66 |
| RES_SHALLOW (ohm.m) | 21.32 | 66 |

---

### 2130 m MD — Interval 2125.0 – 2135.0 m

**Sample Description (spreadsheet):** Sample 2130m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 67.0 U |
| mTVDss | -1193.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2115m: clr,trnsl,pl brn gry,vf-v crs,pred med-crs,pr srt,sbang-sbrnd,mod wk sil cmt,com lt gry brn-off wh arg mtx,mnr carb flks,fri-mod hd,com lse,pr vis & inf por,fluor. 2120 81 / 6 / 4 / 4 / 5 76U
- **SANDSTONE** @ ~2115m: clr,trnsl,opq,pl brn-off wh,vf-crs,pred 1231.2 off wh-lt brn arg mtx,mnr carb flks,mnr slty lams, fri-mod hd,com lse,pr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.9 | 66 |
| RES_DEEP (ohm.m) | 24.12 | 66 |
| RES_SHALLOW (ohm.m) | 22.37 | 66 |

---

### 2140 m MD — Interval 2135.0 – 2145.0 m

**Sample Description (spreadsheet):** Sample 2140m: 20% Siltstone, 80% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 87U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 87.0 U |
| mTVDss | -1193.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2136m: clr,trnsl,opq,v pl brn,off wh,vf-crs, pred f,mod pr srt,sbang-sbrnd,mod wk sil cmt,com pl brn-off wh arg mtx,tr slty lams,fri-mod hd,com lse, pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2148m: med-lt gry,aren,occ grd to slty SST, occ carb spks,micmic,sft-frm,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 54.3 | 65 |
| RES_DEEP (ohm.m) | 25.30 | 65 |
| RES_SHALLOW (ohm.m) | 25.91 | 65 |

---

### 2150 m MD — Interval 2145.0 – 2155.0 m

**Sample Description (spreadsheet):** Sample 2150m: 10% Siltstone, 90% very fine to coarse,pred fine Sandstone, 100% bright FLUOR in SST. TG 108U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs,pred f (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 108.0 U |
| mTVDss | -1192.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2136m: clr,trnsl,opq,v pl brn,off wh,vf-crs, pred f,mod pr srt,sbang-sbrnd,mod wk sil cmt,com pl brn-off wh arg mtx,tr slty lams,fri-mod hd,com lse, pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2148m: med-lt gry,aren,occ grd to slty SST, occ carb spks,micmic,sft-frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.4 | 66 |
| RES_DEEP (ohm.m) | 29.77 | 66 |
| RES_SHALLOW (ohm.m) | 28.20 | 66 |

---

### 2160 m MD — Interval 2155.0 – 2165.0 m

**Sample Description (spreadsheet):** Sample 2160m: 5% Siltstone, 95% very fine to coarse,pred fine Sandstone, 100% bright FLUOR in SST. TG 129U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs,pred f (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 129.0 U |
| mTVDss | -1192.66 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2148m: med-lt gry,aren,occ grd to slty SST, occ carb spks,micmic,sft-frm,sbblky.
- **SANDSTONE** @ ~2156m: clr,trnsl,opq,pl brn-off wh,vf-crs,pred f,mod srt,sbang-sbrnd,mod wk sil cmt,occ-com pl brn-off wh arg mtx,occ mica flks,rr slty lams,mod hd-fri,abdt lse qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 66 |
| RES_DEEP (ohm.m) | 30.05 | 66 |
| RES_SHALLOW (ohm.m) | 27.11 | 66 |

---

### 2170 m MD — Interval 2165.0 – 2175.0 m

**Sample Description (spreadsheet):** Sample 2170m: 30% Siltstone, 70% very fine to coarse,pred fine Sandstone, 100% bright FLUOR in SST. TG 58U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-crs,pred f (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 58.0 U |
| mTVDss | -1192.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2156m: clr,trnsl,opq,pl brn-off wh,vf-crs,pred f,mod srt,sbang-sbrnd,mod wk sil cmt,occ-com pl brn-off wh arg mtx,occ mica flks,rr slty lams,mod hd-fri,abdt lse qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2164m: med-lt gry,aren,occ grd to slty SST, occ carb spks,micmic,sft-frm,sbblky-sbfiss. 72 / 7 / 6 / 7 / 8 60U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 65 |
| RES_DEEP (ohm.m) | 31.45 | 65 |
| RES_SHALLOW (ohm.m) | 25.55 | 65 |

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 30% Siltstone, 70% very fine to minor coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-mnr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 50.0 U |
| mTVDss | -1193.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2204m: pl brn-off wh,clr,trnsl,vf-f,wl srt, sbang-sbrnd,mod wk sil cmt,com off wh-lt brn arg mtx,com sid,fri-mod hd,fri-mod hd i/p,pr vis por, 22 12 0 3 8 0.6 fluor. McKINLAY MBR RE-ENTRY:
- **SANDSTONE** @ ~2212m: lt brn-off wh,clr,trnsl,vf-f,mnr crs,mod srt,sbang-sbrnd,wk sil cmt,com lt brn-off wh arg mtx,tr carb flks,mod hd-fri,com lse,pr vis & inf por, fluor
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 65 |
| RES_DEEP (ohm.m) | 34.30 | 65 |
| RES_SHALLOW (ohm.m) | 29.15 | 65 |

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 20% Siltstone, 80% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 63.0 U |
| mTVDss | -1193.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2212m: lt brn-off wh,clr,trnsl,vf-f,mnr crs,mod srt,sbang-sbrnd,wk sil cmt,com lt brn-off wh arg mtx,tr carb flks,mod hd-fri,com lse,pr vis & inf por, fluor
- **SILTSTONE** @ ~2224m: med-lt gry brn,aren,grd to SST i/p,occ micmic & carb spks,frm-sft,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.7 | 66 |
| RES_DEEP (ohm.m) | 30.12 | 66 |
| RES_SHALLOW (ohm.m) | 28.54 | 66 |

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 59U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 59.0 U |
| mTVDss | -1194.01 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2224m: med-lt gry brn,aren,grd to SST i/p,occ micmic & carb spks,frm-sft,sbblky.
- **SANDSTONE** @ ~2232m: clr,trnsl,opq,off wh-lt brn,vf-crs,pred f-med,mod srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri-mod hd i/p,com-abdt lse,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 53.4 | 65 |
| RES_DEEP (ohm.m) | 26.88 | 65 |
| RES_SHALLOW (ohm.m) | 27.89 | 65 |

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 10% Siltstone, occasional to common siderite in 90% very fine to fine,occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f,occ med-crs (max: C) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 52.0 U |
| mTVDss | -1194.33 m |
| FeCO₃ in Sandstone | occ-com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2232m: clr,trnsl,opq,off wh-lt brn,vf-crs,pred f-med,mod srt,sbang-sbrnd,wk sil cmt,com off wh arg mtx,fri-mod hd i/p,com-abdt lse,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2240m: clr,trnsl,pl brn gry-off wh,vf-f,occ med-crs,mod srt,sbang-sbrnd,mod wk sil cmt,com off wh-lt brn gry arg mtx,mnr carb spks,occ-com sid,fri-mod hd,com-abdt lse,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.5 | 66 |
| RES_DEEP (ohm.m) | 26.13 | 66 |
| RES_SHALLOW (ohm.m) | 26.11 | 66 |

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: 5% Siltstone, common siderite in 95% very fine to medium,minor coarse Sandstone, 100% bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med,mnr crs (max: C) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 53.0 U |
| mTVDss | -1194.55 m |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: clr,trnsl,pl brn gry-off wh,vf-f,occ med-crs,mod srt,sbang-sbrnd,mod wk sil cmt,com off wh-lt brn gry arg mtx,mnr carb spks,occ-com sid,fri-mod hd,com-abdt lse,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2252m: clr,trnsl,opq,pl brn,vf-med,mnr crs, mod pr srt,sbang-sbrnd,wk sil cmt,occ-com off wh-lt brn arg mtx,com sid,fri-mod hd i/p aggs,pred lse,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.9 | 66 |
| RES_DEEP (ohm.m) | 24.33 | 66 |
| RES_SHALLOW (ohm.m) | 23.32 | 66 |

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: 5% Siltstone, 95% very fine to coarse,pred fine Sandstone, 100% bright FLUOR in SST. TG 61U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs,pred f (max: C) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 61.0 U |
| mTVDss | -1194.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2252m: clr,trnsl,opq,pl brn,vf-med,mnr crs, mod pr srt,sbang-sbrnd,wk sil cmt,occ-com off wh-lt brn arg mtx,com sid,fri-mod hd i/p aggs,pred lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2260m: clr,trmsl,opq,v pl trnsl brn,vf-crs,pred f,mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri,com lse,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.2 | 65 |
| RES_DEEP (ohm.m) | 22.86 | 65 |
| RES_SHALLOW (ohm.m) | 20.74 | 65 |

---

### 2280 m MD — Interval 2275.0 – 2285.0 m

**Sample Description (spreadsheet):** Sample 2280m: 5% Siltstone, 95% very fine to coarse,pred fine Sandstone, 100% bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs,pred f (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 55.0 U |
| mTVDss | -1194.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2260m: clr,trmsl,opq,v pl trnsl brn,vf-crs,pred f,mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri,com lse,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2264m: med lt brn gry,aren,grd to SST,com 1232.5 micmic,mnr carb spks,sft-frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.0 | 66 |
| RES_DEEP (ohm.m) | 24.52 | 66 |
| RES_SHALLOW (ohm.m) | 22.62 | 66 |

---

### 2290 m MD — Interval 2285.0 – 2295.0 m

**Sample Description (spreadsheet):** Sample 2290m: 5% Siltstone, 95% very fine to coarse,pred fine Sandstone, 100% bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs,pred f (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 50.0 U |
| mTVDss | -1195.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2284m: clr,trmsl,opq,v pl trnsl brn,vf-crs,pred f,mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri,com lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2292m: clr,trnsl,opq,pl trnsl brn,vf-crs,pred f, mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,occ slty lams,mnr mica flks,fri,occ lse,pr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.4 | 66 |
| RES_DEEP (ohm.m) | 28.40 | 66 |
| RES_SHALLOW (ohm.m) | 26.58 | 66 |

---

### 2300 m MD — Interval 2295.0 – 2305.0 m

**Sample Description (spreadsheet):** Sample 2300m: 5% Siltstone, 95% very fine to coarse,pred fine Sandstone, 100% bright FLUOR in SST. TG 96U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs,pred f (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 96.0 U |
| mTVDss | -1195.20 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2284m: clr,trmsl,opq,v pl trnsl brn,vf-crs,pred f,mod pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri,com lse,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2292m: clr,trnsl,opq,pl trnsl brn,vf-crs,pred f, mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,occ slty lams,mnr mica flks,fri,occ lse,pr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.4 | 65 |
| RES_DEEP (ohm.m) | 39.50 | 65 |
| RES_SHALLOW (ohm.m) | 35.29 | 65 |

---

### 2310 m MD — Interval 2305.0 – 2315.0 m

**Sample Description (spreadsheet):** Sample 2310m: 5% Siltstone, 95% very fine to coarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 134U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred med-crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 134.0 U |
| mTVDss | -1195.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2292m: clr,trnsl,opq,pl trnsl brn,vf-crs,pred f, mod wl srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,occ slty lams,mnr mica flks,fri,occ lse,pr vis & inf por,fluor.
- **SANDSTONE** @ ~2304m: clr,trnsl,opq,pl trnsl brn,vf-crs,pred med-crs,wk sil cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 66 |
| RES_DEEP (ohm.m) | 39.44 | 66 |
| RES_SHALLOW (ohm.m) | 35.44 | 66 |

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 20% Siltstone, 80% very fine to coarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 122U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred med-crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 122.0 U |
| mTVDss | -1195.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: clr,trnsl,opq,pl trnsl brn,vf-crs,pred med-crs,wk sil cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2312m: med gry,med-lt gry brn,aren,occ micmic,tr carb spks,sft-frm,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 65 |
| RES_DEEP (ohm.m) | 39.22 | 65 |
| RES_SHALLOW (ohm.m) | 34.67 | 65 |

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 10% Siltstone, 90% very fine to very coarse, pred coarse Sandstone, 100% bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-v crs, pred crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 95.0 U |
| mTVDss | -1195.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2312m: med gry,med-lt gry brn,aren,occ micmic,tr carb spks,sft-frm,sbblky-sbfiss.
- **SANDSTONE** @ ~2324m: clr,trnsl,opq,pl brn,vf-v crs,pred crs, pr srt,sbang-sbrnd,mnr ang i/p,wk sil cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor. CHANGE SHAKER SCREENS/
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.3 | 66 |
| RES_DEEP (ohm.m) | 50.69 | 66 |
| RES_SHALLOW (ohm.m) | 47.77 | 66 |

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 54.0 U |
| mTVDss | -1195.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2324m: clr,trnsl,opq,pl brn,vf-v crs,pred crs, pr srt,sbang-sbrnd,mnr ang i/p,wk sil cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor. CHANGE SHAKER SCREENS/
- **SANDSTONE** @ ~2332m: clr,trnsl,frstd,opq,pl brn,vf-crs,pred 23 12 3 3 6 3.1 f b - r m n- e o d f , f p w r h s r a t, r s g b m an t g x, - o s c b c rn f d ri , o a c g c g s a , n p g re ,w d k l s s e il q c t m z t g ,o rs c , c p r pl vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 66 |
| RES_DEEP (ohm.m) | 53.41 | 66 |
| RES_SHALLOW (ohm.m) | 47.56 | 66 |

---

### 2350 m MD — Interval 2345.0 – 2355.0 m

**Sample Description (spreadsheet):** Sample 2350m: 5% Siltstone, 95% very fine to very coarse, pred coarse Sandstone, 100% bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-v crs, pred crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 60.0 U |
| mTVDss | -1195.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2332m: clr,trnsl,frstd,opq,pl brn,vf-crs,pred 23 12 3 3 6 3.1 f b - r m n- e o d f , f p w r h s r a t, r s g b m an t g x, - o s c b c rn f d ri , o a c g c g s a , n p g re ,w d k l s s e il q c t m z t g ,o rs c , c p r pl vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2344m: clr,trnsl,opq,pl brn,vf-v crs,pred crs, pr srt,sbang-sbrnd,mnr ang i/p,wk sil cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 65 |
| RES_DEEP (ohm.m) | 57.72 | 65 |
| RES_SHALLOW (ohm.m) | 47.77 | 65 |

---

### 2360 m MD — Interval 2355.0 – 2365.0 m

**Sample Description (spreadsheet):** Sample 2360m: 10% Siltstone, 90% very fine to very coarse, pred coarse Sandstone, 100% bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-v crs, pred crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 72.0 U |
| mTVDss | -1195.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2344m: clr,trnsl,opq,pl brn,vf-v crs,pred crs, pr srt,sbang-sbrnd,mnr ang i/p,wk sil cmt,occ pl brn-off wh arg mtx,occ fri aggs,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2352m: dk gry brn,med-dk gry,aren,grd to vf SST i/p,com micmic,frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 66 |
| RES_DEEP (ohm.m) | 48.26 | 66 |
| RES_SHALLOW (ohm.m) | 39.25 | 66 |

---

### 2370 m MD — Interval 2365.0 – 2375.0 m

**Sample Description (spreadsheet):** Sample 2370m: 10% Siltstone, 90% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 79.0 U |
| mTVDss | -1195.34 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2352m: dk gry brn,med-dk gry,aren,grd to vf SST i/p,com micmic,frm,sbblky.
- **SANDSTONE** @ ~2360m: clr,trnsl,opq,lt trnsl brn,pl brn,vf-v crs, pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ off wh -pl brn arg mtx,fri aggs,pred lse qtz grs,pr vis por, 23 12 6 3 4 3.0 - g p d l i b n r f n p a o r r g ,f l m uo tx r. ,fri aggs,pred lse qtz grs,pr vis por, 82 / 6 / 4 / 4 / 4 80U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 65 |
| RES_DEEP (ohm.m) | 54.80 | 65 |
| RES_SHALLOW (ohm.m) | 45.26 | 65 |

---

### 2380 m MD — Interval 2375.0 – 2385.0 m

**Sample Description (spreadsheet):** Sample 2380m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 76.0 U |
| mTVDss | -1195.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: clr,trnsl,opq,lt trnsl brn,pl brn,vf-v crs, pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ off wh -pl brn arg mtx,fri aggs,pred lse qtz grs,pr vis por, 23 12 6 3 4 3.0 - g p d l i b n r f n p a o r r g ,f l m uo tx r. ,fri aggs,pred lse qtz grs,pr vis por, 82 / 6 / 4 / 4 / 4 80U
- **SILTSTONE** @ ~2360m: dk gry brn,med-dk gry,aren,grd to vf 2372 SST i/p,com micmic,com carb spks,frm,sbblky. 1233.0
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.6 | 66 |
| RES_DEEP (ohm.m) | 49.11 | 66 |
| RES_SHALLOW (ohm.m) | 45.15 | 66 |

---

### 2390 m MD — Interval 2385.0 – 2395.0 m

**Sample Description (spreadsheet):** Sample 2390m: 10% Siltstone, 90% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 90.0 U |
| mTVDss | -1195.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2382m: clr,trnsl,frstd,lt trnsl brn,vf-v crs,pred 23 12 8 3 4 2.9 f tr - m ca e r d b , p s r p s k r s t, , a fr n i, g c - o s m br l n s d e , w qt k z s g il r s c , m pr t , v o i c s c p p o l r , b fr r n in a f r p g o m r, tx, fluor.
- **SILTSTONE** @ ~2392m: med-dk brnsh gry,aren,tr carb spks, micmic,frm,sbblky. 81 / 6 / 4 / 4 / 5 72U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 66 |
| RES_DEEP (ohm.m) | 41.86 | 66 |
| RES_SHALLOW (ohm.m) | 38.12 | 66 |

---

### 2400 m MD — Interval 2395.0 – 2405.0 m

**Sample Description (spreadsheet):** Sample 2400m: 20% Siltstone, 80% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 72.0 U |
| mTVDss | -1195.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2382m: clr,trnsl,frstd,lt trnsl brn,vf-v crs,pred 23 12 8 3 4 2.9 f tr - m ca e r d b , p s r p s k r s t, , a fr n i, g c - o s m br l n s d e , w qt k z s g il r s c , m pr t , v o i c s c p p o l r , b fr r n in a f r p g o m r, tx, fluor.
- **SILTSTONE** @ ~2392m: med-dk brnsh gry,aren,tr carb spks, micmic,frm,sbblky. 81 / 6 / 4 / 4 / 5 72U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.7 | 65 |
| RES_DEEP (ohm.m) | 56.48 | 65 |
| RES_SHALLOW (ohm.m) | 52.31 | 65 |

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: 10% Siltstone, 90% fine to very coarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-v crs, pred med-crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 93.0 U |
| mTVDss | -1195.23 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2392m: med-dk brnsh gry,aren,tr carb spks, micmic,frm,sbblky. 81 / 6 / 4 / 4 / 5 72U
- **SANDSTONE** @ ~2400m: clr,trnsl,frstd,lt trnsl brn,vf-occ crs, pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ pl brn arg mtx,tr carb spks,fri,com lse qtz grs,pr vis por,fr 2404 inf por,fluor. 1232.9
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.9 | 66 |
| RES_DEEP (ohm.m) | 57.50 | 66 |
| RES_SHALLOW (ohm.m) | 46.81 | 66 |

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 0% Siltstone, 100% fine to very coarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-v crs, pred med-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 78.0 U |
| mTVDss | -1195.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2400m: clr,trnsl,frstd,lt trnsl brn,vf-occ crs, pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ pl brn arg mtx,tr carb spks,fri,com lse qtz grs,pr vis por,fr 2404 inf por,fluor. 1232.9
- **SANDSTONE** @ ~2424m: clr,trnsl,opq,lt trnsl brn,pl brn,vf-v crs, pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ off wh -pl brn arg mtx,fri aggs,pred lse qtz grs,pr vis por, 2428 gd inf por,fluor. 1232.8
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.4 | 66 |
| RES_DEEP (ohm.m) | 65.36 | 66 |
| RES_SHALLOW (ohm.m) | 49.18 | 66 |

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 0% Siltstone, 100% fine to very coarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 106U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-v crs, pred med-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 106.0 U |
| mTVDss | -1195.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2424m: clr,trnsl,opq,lt trnsl brn,pl brn,vf-v crs, pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ off wh -pl brn arg mtx,fri aggs,pred lse qtz grs,pr vis por, 2428 gd inf por,fluor. 1232.8
- **SANDSTONE** @ ~2436m: clr,trnsl,pl brn,vf-crs,pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ pl brn arg mtx,fri aggs, com cln lse qtz grs,pr vis por,fr-gd inf por,fluor. 76 / 6 / 5 / 6 / 7 95U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.8 | 65 |
| RES_DEEP (ohm.m) | 58.18 | 65 |
| RES_SHALLOW (ohm.m) | 44.44 | 65 |

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 0% Siltstone, 100% very fine to very coarse, pred coarse to very coarse Sandstone, 100% bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-v crs, pred crs-v crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 90.0 U |
| mTVDss | -1194.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2424m: clr,trnsl,opq,lt trnsl brn,pl brn,vf-v crs, pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ off wh -pl brn arg mtx,fri aggs,pred lse qtz grs,pr vis por, 2428 gd inf por,fluor. 1232.8
- **SANDSTONE** @ ~2436m: clr,trnsl,pl brn,vf-crs,pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ pl brn arg mtx,fri aggs, com cln lse qtz grs,pr vis por,fr-gd inf por,fluor. 76 / 6 / 5 / 6 / 7 95U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.6 | 66 |
| RES_DEEP (ohm.m) | 49.06 | 66 |
| RES_SHALLOW (ohm.m) | 39.45 | 66 |

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 5% Siltstone, 95% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 80.0 U |
| mTVDss | -1194.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2436m: clr,trnsl,pl brn,vf-crs,pred f-med,pr srt,ang-sbrnd,wk sil cmt,occ pl brn arg mtx,fri aggs, com cln lse qtz grs,pr vis por,fr-gd inf por,fluor. 76 / 6 / 5 / 6 / 7 95U
- **SILTSTONE** @ ~2444m: dk-med gry,aren,com micmic,tr carb spks,frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.5 | 65 |
| RES_DEEP (ohm.m) | 44.89 | 65 |
| RES_SHALLOW (ohm.m) | 41.33 | 65 |

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 10% Siltstone, 90% very fine to very coarse Sandstone, 100% bright FLUOR in SST. TG 112U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-v crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 112.0 U |
| mTVDss | -1194.56 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2444m: dk-med gry,aren,com micmic,tr carb spks,frm,sbblky.
- **SANDSTONE** @ ~2448m: trnsl,clr,opq,pl brn,vf-v crs,v pr srt, sbang-sbrnd,occ ang,wk sil cmt,pl brn-off wh arg mtx,fri aggs,com lse cln grs,pr vis por,gd inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 66 |
| RES_DEEP (ohm.m) | 54.07 | 66 |
| RES_SHALLOW (ohm.m) | 46.34 | 66 |

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 91.0 U |
| mTVDss | -1194.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2464m: trnsl,clr,opq,pl brn,vf-crs,pred f-med, v pr srt,sbang-sbrnd,occ ang,wk sil cmt,pl brn-off wh arg mtx,fri aggs,com lse cln grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2476m: trnsl,clr,opq,pl brn,vf-crs,pred f-med, v pr srt,sbang-sbrnd,occ ang,wk sil cmt,pl brn-off wh arg mtx,fri aggs,com lse cln grs,pr vis por,gd inf 2480 por,fluor. 1231.9
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.5 | 66 |
| RES_DEEP (ohm.m) | 59.92 | 66 |
| RES_SHALLOW (ohm.m) | 56.29 | 66 |

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 101.0 U |
| mTVDss | -1194.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2464m: trnsl,clr,opq,pl brn,vf-crs,pred f-med, v pr srt,sbang-sbrnd,occ ang,wk sil cmt,pl brn-off wh arg mtx,fri aggs,com lse cln grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2476m: trnsl,clr,opq,pl brn,vf-crs,pred f-med, v pr srt,sbang-sbrnd,occ ang,wk sil cmt,pl brn-off wh arg mtx,fri aggs,com lse cln grs,pr vis por,gd inf 2480 por,fluor. 1231.9
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.8 | 65 |
| RES_DEEP (ohm.m) | 75.17 | 65 |
| RES_SHALLOW (ohm.m) | 53.08 | 65 |

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 30% Siltstone, minor siderite in 70% very fine to fine,occasional medium to coarse Sandstone, 70% moderately bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-f,occ med-crs (max: C) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri |
| Total Gas | 41.0 U |
| mTVDss | -1195.79 m |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2548m: 80-130 SANDSTONE:pl brn,clr,trnsl,vf-f,occ med-crs,mod 25 12 5 3 2 2.8 wh-pl brn arg mtx,com slty lams,fri-mod hd,com lse, v pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~2548m: med-lt brnsh gry,aren,grd to vf SST,tr carb spks,occ micmic,frm,sbblky. 25 12 5 3 6 3.0 SWAP TO SHAKER 1 2560 McKINLAY MEMBER RE-ENTRY: 1233.2 2560.0mMDRT (-1195.6mTVDSS)
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.2 | 33 |
| RES_DEEP (ohm.m) | 46.35 | 33 |
| RES_SHALLOW (ohm.m) | 29.92 | 33 |

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 30% Siltstone, minor siderite in 70% very fine to fine,occasional medium to coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-f,occ med-crs (max: C) |
| Porosity Class | gd |
| Hardness | mod hd (0.45) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 38.0 U |
| mTVDss | -1196.04 m |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2568m: med -lt brnsh gry,aren,grd to vf SST,tr carb spks,occ micmic,frm,sbblky.
- **SANDSTONE** @ ~2572m: clr,trnsl,opq,pl brn,vf-f,occ med-crs, mod-pr srt,sbang-sbrnd,wk sil cmt,mnr strg sid cmt, occ off wh-pl brn arg mtx,fri-hd,,com lse grs,v pr vis por,pr inf por,fluor. 83 / 6 / 3 / 3 / 5 70U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 32 |
| RES_DEEP (ohm.m) | 40.37 | 32 |
| RES_SHALLOW (ohm.m) | 28.73 | 32 |

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 20% Siltstone, minor siderite in 80% very fine to fine,occasional medium to coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f,occ med-crs (max: C) |
| Porosity Class | gd |
| Hardness | mod hd (0.45) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 70.0 U |
| mTVDss | -1196.31 m |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2568m: med -lt brnsh gry,aren,grd to vf SST,tr carb spks,occ micmic,frm,sbblky.
- **SANDSTONE** @ ~2572m: clr,trnsl,opq,pl brn,vf-f,occ med-crs, mod-pr srt,sbang-sbrnd,wk sil cmt,mnr strg sid cmt, occ off wh-pl brn arg mtx,fri-hd,,com lse grs,v pr vis por,pr inf por,fluor. 83 / 6 / 3 / 3 / 5 70U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 33 |
| RES_DEEP (ohm.m) | 41.22 | 33 |
| RES_SHALLOW (ohm.m) | 33.96 | 33 |

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 10% Siltstone, trace siderite in 90% very fine to coarse, pred fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 61U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | gd |
| Hardness | mod hd (0.45) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 61.0 U |
| mTVDss | -1196.59 m |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2568m: med -lt brnsh gry,aren,grd to vf SST,tr carb spks,occ micmic,frm,sbblky.
- **SANDSTONE** @ ~2572m: clr,trnsl,opq,pl brn,vf-f,occ med-crs, mod-pr srt,sbang-sbrnd,wk sil cmt,mnr strg sid cmt, occ off wh-pl brn arg mtx,fri-hd,,com lse grs,v pr vis por,pr inf por,fluor. 83 / 6 / 3 / 3 / 5 70U
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 33 |
| RES_DEEP (ohm.m) | 35.00 | 33 |
| RES_SHALLOW (ohm.m) | 31.23 | 33 |

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 10% Siltstone, 90% very fine to coarse, pred fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | gd |
| Hardness | mod hd (0.45) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 63.0 U |
| mTVDss | -1196.87 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2568m: med -lt brnsh gry,aren,grd to vf SST,tr carb spks,occ micmic,frm,sbblky.
- **SANDSTONE** @ ~2572m: clr,trnsl,opq,pl brn,vf-f,occ med-crs, mod-pr srt,sbang-sbrnd,wk sil cmt,mnr strg sid cmt, occ off wh-pl brn arg mtx,fri-hd,,com lse grs,v pr vis por,pr inf por,fluor. 83 / 6 / 3 / 3 / 5 70U
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.0 | 33 |
| RES_DEEP (ohm.m) | 35.07 | 33 |
| RES_SHALLOW (ohm.m) | 32.32 | 33 |

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 10% Siltstone, 90% very fine to medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med, occ crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 70.0 U |
| mTVDss | -1197.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2576m: clr,pl brn,vf-crs,pred f-med,pr srt, sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, fri,pred lse grs,v pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2580m: trnsl,clr,opq,pl brn,vf-crs,pred f-med, v pr srt,sbang-sbrnd,occ ang,wk sil cmt,pl brn-off 2584 wh arg mtx,fri aggs,com lse cln grs,pr vis por,gd inf 1234.5 por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.8 | 33 |
| RES_DEEP (ohm.m) | 30.72 | 33 |
| RES_SHALLOW (ohm.m) | 27.28 | 33 |

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 5% Siltstone, 95% very fine to coarse, pred medium Sandstone, 100% moderately bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs, pred med (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 55.0 U |
| mTVDss | -1197.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: trnsl,clr,opq,pl brn,vf-crs,pred f-med, v pr srt,sbang-sbrnd,occ ang,wk sil cmt,pl brn-off 2584 wh arg mtx,fri aggs,com lse cln grs,pr vis por,gd inf 1234.5 por,fluor.
- **SILTSTONE** @ ~2588m: med-dk gry,dk brnsh gry,aren,grd to vf 84 / 6 / 3 / 3 / 4 71U SST i/p,micmic,frm,sbblky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.1 | 32 |
| RES_DEEP (ohm.m) | 24.56 | 32 |
| RES_SHALLOW (ohm.m) | 21.50 | 32 |

---

### 2600 m MD — Interval 2597.5 – 2602.5 m

**Sample Description (spreadsheet):** Sample 2600m: 10% Siltstone, occasional siderite in 90% very fine to coarse, pred medium Sandstone, 100% moderately bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred med (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 50.0 U |
| mTVDss | -1197.66 m |
| FeCO₃ in Sandstone | occ |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2588m: med-dk gry,dk brnsh gry,aren,grd to vf 84 / 6 / 3 / 3 / 4 71U SST i/p,micmic,frm,sbblky.
- **SANDSTONE** @ ~2588m: clr,trnsl,opq,vf-med,occ crs,pr srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, fri,pred cln lse grs,v pr vis por,pr-fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 33 |
| RES_DEEP (ohm.m) | 20.19 | 33 |
| RES_SHALLOW (ohm.m) | 17.78 | 33 |

---

### 2605 m MD — Interval 2602.5 – 2607.5 m

**Sample Description (spreadsheet):** Sample 2605m: 10% Siltstone, minor siderite in 90% very fine to coarse, pred medium Sandstone, 100% moderately bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs, pred med (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 51.0 U |
| mTVDss | -1197.90 m |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2588m: med-dk gry,dk brnsh gry,aren,grd to vf 84 / 6 / 3 / 3 / 4 71U SST i/p,micmic,frm,sbblky.
- **SANDSTONE** @ ~2588m: clr,trnsl,opq,vf-med,occ crs,pr srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, fri,pred cln lse grs,v pr vis por,pr-fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 33 |
| RES_DEEP (ohm.m) | 17.40 | 33 |
| RES_SHALLOW (ohm.m) | 16.45 | 33 |

---

### 2610 m MD — Interval 2607.5 – 2612.5 m

**Sample Description (spreadsheet):** Sample 2610m: 10% Siltstone, 90% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 45.0 U |
| mTVDss | -1198.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2594m: clr,trnsl,opq,vf-crs,pred med,mod srt, sbang-sbrnd,wh sil cmt,occ pl brn-off wh arg mtx, fri,pred lse qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2596m: clr,trnsl,opq,vf-crs,pred med,mod srt, sbang-sbrnd,wh sil cmt,occ pl brn-off wh arg mtx, occ sid,fri,pred lse qtz grs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 16.92 | 33 |
| RES_SHALLOW (ohm.m) | 15.79 | 33 |

---

### 2615 m MD — Interval 2612.5 – 2617.5 m

**Sample Description (spreadsheet):** Sample 2615m: 20% Siltstone, 80% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 42.0 U |
| mTVDss | -1198.38 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2600m: med-lt gry,med grysh brn,aren,grd to 1235.6 SST,com micmic,frm-sft,sbblky.
- **SANDSTONE** @ ~2600m: clr,trnsl,opq,vf-f,wl srt,sbang-sbrnd, wh sil cmt,occ pl brn-off wh arg mtx,occ mica flks, fri,pred lse,pr vis por,gd inf por,fluor
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 16.52 | 33 |
| RES_SHALLOW (ohm.m) | 15.88 | 33 |

---

### 2620 m MD — Interval 2617.5 – 2622.5 m

**Sample Description (spreadsheet):** Sample 2620m: 10% Siltstone, 90% very fine to fine, trace coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, tr crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 39.0 U |
| mTVDss | -1198.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr,trnsl,opq,vf-f,wl srt,sbang-sbrnd, wh sil cmt,com pl brn-off wh arg mtx,occ mica flks, fri,com-abdt lse grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2620m: clr,trnsl,opq,vf-f,mod wl srt, sbang-sbrnd,wh sil cmt,mnr pl brn-off wh arg mtx, pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.7 | 33 |
| RES_DEEP (ohm.m) | 16.29 | 33 |
| RES_SHALLOW (ohm.m) | 15.55 | 33 |

---

### 2625 m MD — Interval 2622.5 – 2627.5 m

**Sample Description (spreadsheet):** Sample 2625m: 0.328472222222222 siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 39.0 U |
| mTVDss | -1198.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr,trnsl,opq,vf-f,wl srt,sbang-sbrnd, wh sil cmt,com pl brn-off wh arg mtx,occ mica flks, fri,com-abdt lse grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2620m: clr,trnsl,opq,vf-f,mod wl srt, sbang-sbrnd,wh sil cmt,mnr pl brn-off wh arg mtx, pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 58.0 | 32 |
| RES_DEEP (ohm.m) | 16.19 | 32 |
| RES_SHALLOW (ohm.m) | 15.66 | 32 |

---

### 2630 m MD — Interval 2627.5 – 2632.5 m

**Sample Description (spreadsheet):** Sample 2630m: 0.34375 siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: f) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll - mod bri |
| Total Gas | 44.0 U |
| mTVDss | -1198.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2620m: clr,trnsl,opq,vf-f,mod wl srt, sbang-sbrnd,wh sil cmt,mnr pl brn-off wh arg mtx, pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2628m: clr,trnsl,opq,vf-f,mod wl srt, sbang-sbrnd,wh sil cmt,mnr pl brn-off wh arg mtx, pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.5 | 33 |
| RES_DEEP (ohm.m) | 16.35 | 33 |
| RES_SHALLOW (ohm.m) | 15.69 | 33 |

---

### 2635 m MD — Interval 2632.5 – 2637.5 m

**Sample Description (spreadsheet):** Sample 2635m: 0.355555555555556 siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll |
| Total Gas | 39.0 U |
| mTVDss | -1198.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2620m: clr,trnsl,opq,vf-f,mod wl srt, sbang-sbrnd,wh sil cmt,mnr pl brn-off wh arg mtx, pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2628m: clr,trnsl,opq,vf-f,mod wl srt, sbang-sbrnd,wh sil cmt,mnr pl brn-off wh arg mtx, pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 33 |
| RES_DEEP (ohm.m) | 16.53 | 33 |
| RES_SHALLOW (ohm.m) | 16.00 | 33 |

---

### 2640 m MD — Interval 2637.5 – 2645.0 m

**Sample Description (spreadsheet):** Sample 2640m: 0.374305555555556 siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll |
| Total Gas | 41.0 U |
| mTVDss | -1199.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2628m: clr,trnsl,opq,vf-f,mod wl srt, sbang-sbrnd,wh sil cmt,mnr pl brn-off wh arg mtx, pred lse cln qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2636m: clr,trnsl,opq,vf-f,v wl srt,sbang-sbrnd, nil cmt,nil mtx,lse cln qtz grs,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.7 | 49 |
| RES_DEEP (ohm.m) | 16.27 | 49 |
| RES_SHALLOW (ohm.m) | 15.76 | 49 |

---

### 2650 m MD — Interval 2645.0 – 2655.0 m

**Sample Description (spreadsheet):** Sample 2650m: 0.399305555555556 siderite in 5% Siltstone, 95% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% dll |
| Total Gas | 37.0 U |
| mTVDss | -1199.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2636m: clr,trnsl,opq,vf-f,v wl srt,sbang-sbrnd, nil cmt,nil mtx,lse cln qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~2644m: clr,trnsl,opq,v pl trnsl brn,vf-f,wl srt, 26 12 4 3 8 7.0 s m b t a x n ,o g c - c s b fr r i n a d g ,m gs o , d p r w ed k s ls il e c c m ln t , q m tz n r g o rs ff , p w r h v - i l s t b p r o n r , a g r d g inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 66 |
| RES_DEEP (ohm.m) | 15.24 | 66 |
| RES_SHALLOW (ohm.m) | 14.70 | 66 |

---

### 2660 m MD — Interval 2655.0 – 2665.0 m

**Sample Description (spreadsheet):** Sample 2660m: 0.415972222222222 siderite in 20% Siltstone, 80% very fine to fine, trace coarse Sandstone, 100% dull FLUOR in SST. TG 36U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f, tr crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% dll |
| Total Gas | 36.0 U |
| mTVDss | -1198.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2644m: clr,trnsl,opq,v pl trnsl brn,vf-f,wl srt, 26 12 4 3 8 7.0 s m b t a x n ,o g c - c s b fr r i n a d g ,m gs o , d p r w ed k s ls il e c c m ln t , q m tz n r g o rs ff , p w r h v - i l s t b p r o n r , a g r d g inf por,fluor.
- **SANDSTONE** @ ~2652m: clr,trnsl,opq,lt trnsl brn,vf-f,rr crs,mod 26 12 5 3 6 7.1 srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, occ-com fri aggs,pred lse qtz grs,pr vis por,fr-gd inf por,fluor. 2660 84 / 5 / 3 / 4 / 4 40U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 65 |
| RES_DEEP (ohm.m) | 14.95 | 65 |
| RES_SHALLOW (ohm.m) | 14.49 | 65 |

---

### 2670 m MD — Interval 2665.0 – 2675.0 m

**Sample Description (spreadsheet):** Sample 2670m: 0.433333333333333 siderite in 30% Siltstone, 70% very fine to fine Sandstone, 60% dull FLUOR in SST. TG 32U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 60.0% dll |
| Total Gas | 32.0 U |
| mTVDss | -1198.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2652m: clr,trnsl,opq,lt trnsl brn,vf-f,rr crs,mod 26 12 5 3 6 7.1 srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, occ-com fri aggs,pred lse qtz grs,pr vis por,fr-gd inf por,fluor. 2660 84 / 5 / 3 / 4 / 4 40U
- **SILTSTONE** @ ~2652m: med-lt brn gry,aren,grd to SST,micmic, 2668 tr carb spks,sft-frm,sbblky. 1237.2
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 66 |
| RES_DEEP (ohm.m) | 15.36 | 66 |
| RES_SHALLOW (ohm.m) | 15.05 | 66 |

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 20% Siltstone, 80% very fine to fine Sandstone, 70% dull FLUOR in SST. TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% dll |
| Total Gas | 44.0 U |
| mTVDss | -1198.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2676m: clr,trnsl,opq,pl trnsl brn,vf-f, wl srt,sbang-sbrnd,wk sil cmt,occ-com lt brn- off wh arg mtx,com fri aggs,com lse grs,pr vis & inf por,fluor.
- **SILTSTONE** @ ~2688m: med lt brn gry,aren,grd to SST,com micmic,mnr carb spks,sft,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 66 |
| RES_DEEP (ohm.m) | 15.73 | 66 |
| RES_SHALLOW (ohm.m) | 15.64 | 66 |

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, 100% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 40U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% dll |
| Total Gas | 40.0 U |
| mTVDss | -1198.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2676m: clr,trnsl,opq,pl trnsl brn,vf-f, wl srt,sbang-sbrnd,wk sil cmt,occ-com lt brn- off wh arg mtx,com fri aggs,com lse grs,pr vis & inf por,fluor.
- **SILTSTONE** @ ~2688m: med lt brn gry,aren,grd to SST,com micmic,mnr carb spks,sft,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 65 |
| RES_DEEP (ohm.m) | 15.01 | 65 |
| RES_SHALLOW (ohm.m) | 14.90 | 65 |

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 5% Siltstone, 95% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 36U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% dll |
| Total Gas | 36.0 U |
| mTVDss | -1198.11 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2688m: med lt brn gry,aren,grd to SST,com micmic,mnr carb spks,sft,sbblky.
- **SANDSTONE** @ ~2696m: clr,trnsl,opq,pl trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, mnr fri aggs,pred lse grs,pr vis por,gd inf por,fluor. 85 / 6 / 3 / 3 / 3 37U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 66 |
| RES_DEEP (ohm.m) | 14.92 | 66 |
| RES_SHALLOW (ohm.m) | 14.65 | 66 |

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 0% Siltstone, 100% very fine to fine Sandstone, 40% dull FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 40.0% dll |
| Total Gas | 33.0 U |
| mTVDss | -1197.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2696m: clr,trnsl,opq,pl trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, mnr fri aggs,pred lse grs,pr vis por,gd inf por,fluor. 85 / 6 / 3 / 3 / 3 37U
- **SANDSTONE** @ ~2704m: clr,trnsl,pl trnsl brn,vf-f,wl srt, sbang-sbrnd,nil cmt,nil mtx,lse qtz grs,gd inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 65 |
| RES_DEEP (ohm.m) | 15.23 | 65 |
| RES_SHALLOW (ohm.m) | 13.90 | 65 |

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 40% Siltstone, 60% very fine Sandstone, 30% dull FLUOR in SST. TG 24U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 30.0% dll |
| Total Gas | 24.0 U |
| mTVDss | -1197.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2704m: clr,trnsl,pl trnsl brn,vf-f,wl srt, sbang-sbrnd,nil cmt,nil mtx,lse qtz grs,gd inf por, fluor.
- **SANDSTONE** @ ~2712m: clr,trnsl,pl brn-lt gry,vf,v wl srt, sbang-sbrnd,wk sil cmt,com pl brn gry-off wh arg mtx,mnr carb flks,fri,v pr vis por,fluor. dll grn/yel ppt fluor,v slw diff cut,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 66 |
| RES_DEEP (ohm.m) | 16.64 | 66 |
| RES_SHALLOW (ohm.m) | 14.24 | 66 |

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 60% Siltstone, 40% very fine Sandstone, 20% dull FLUOR in SST. TG 21U

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 20.0% dll |
| Total Gas | 21.0 U |
| mTVDss | -1197.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2712m: clr,trnsl,pl brn-lt gry,vf,v wl srt, sbang-sbrnd,wk sil cmt,com pl brn gry-off wh arg mtx,mnr carb flks,fri,v pr vis por,fluor. dll grn/yel ppt fluor,v slw diff cut,
- **SILTSTONE** @ ~2720m: lt-med gry brn,occ dk gry,aren,grd to SST,com micmic,mnr carb spks,sft,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 66 |
| RES_DEEP (ohm.m) | 19.24 | 66 |
| RES_SHALLOW (ohm.m) | 15.48 | 66 |

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 70% Siltstone, 30% very fine Sandstone, 10% dull FLUOR in SST. TG 19U

| Property | Value |
|----------|-------|
| % Sandstone | 30.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% dll |
| Total Gas | 19.0 U |
| mTVDss | -1196.86 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2720m: lt-med gry brn,occ dk gry,aren,grd to SST,com micmic,mnr carb spks,sft,sbblky.
- **SANDSTONE** @ ~2732m: clr,trnsl,pl brn-lt gry,vf,v wl srt, sbang-sbrnd,wk sil cmt,com pl brn gry-off wh arg mtx,mnr carb flks,fri,v pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 65 |
| RES_DEEP (ohm.m) | 21.32 | 65 |
| RES_SHALLOW (ohm.m) | 16.48 | 65 |

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 70% Siltstone, 30% very fine Sandstone, 10% dull FLUOR in SST. TG 15U

| Property | Value |
|----------|-------|
| % Sandstone | 30.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% dll |
| Total Gas | 15.0 U |
| mTVDss | -1196.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2732m: clr,trnsl,pl brn-lt gry,vf,v wl srt, sbang-sbrnd,wk sil cmt,com pl brn gry-off wh arg mtx,mnr carb flks,fri,v pr vis por,fluor.
- **SILTSTONE** @ ~2744m: lt-med gry brn,occ dk gry,aren,grd to SST,com micmic,mnr carb spks,sft,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 66 |
| RES_DEEP (ohm.m) | 19.19 | 66 |
| RES_SHALLOW (ohm.m) | 15.18 | 66 |

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 75% Siltstone, 25% very fine Sandstone, 10% dull FLUOR in SST. TG 16U

| Property | Value |
|----------|-------|
| % Sandstone | 25.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% dll |
| Total Gas | 16.0 U |
| mTVDss | -1196.34 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2744m: lt-med gry brn,occ dk gry,aren,grd to SST,com micmic,mnr carb spks,sft,sbblky.
- **SILTSTONE** @ ~2764m: med brn gry,dk gry i/p,aren, grd to SST i/p,mnr micmic & carb flks,sft-frm,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.2 | 66 |
| RES_DEEP (ohm.m) | 18.18 | 66 |
| RES_SHALLOW (ohm.m) | 14.99 | 66 |

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 90% Siltstone, 10% very fine Sandstone, 0.1% dull FLUOR in SST. TG 15U

| Property | Value |
|----------|-------|
| % Sandstone | 10.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 0.1% dll |
| Total Gas | 15.0 U |
| mTVDss | -1196.06 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2764m: med brn gry,dk gry i/p,aren, grd to SST i/p,mnr micmic & carb flks,sft-frm,sbblky-blky.
- **SANDSTONE** @ ~2772m: clr,trnsl,pl brn-off wh,vf,v wl srt, 1234.4 sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, fri,v pr vis por,fluor. 2780 89 / 5 / 3 / 1 / 2 1234.2
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 65 |
| RES_DEEP (ohm.m) | 20.76 | 65 |
| RES_SHALLOW (ohm.m) | 16.69 | 65 |

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 90% Siltstone, 10% very fine Sandstone, 0.1% dull FLUOR in SST. TG 15U

| Property | Value |
|----------|-------|
| % Sandstone | 10.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 0.1% dll |
| Total Gas | 15.0 U |
| mTVDss | -1195.78 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2764m: med brn gry,dk gry i/p,aren, grd to SST i/p,mnr micmic & carb flks,sft-frm,sbblky-blky.
- **SANDSTONE** @ ~2772m: clr,trnsl,pl brn-off wh,vf,v wl srt, 1234.4 sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, fri,v pr vis por,fluor. 2780 89 / 5 / 3 / 1 / 2 1234.2
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 66 |
| RES_DEEP (ohm.m) | 25.45 | 66 |
| RES_SHALLOW (ohm.m) | 20.33 | 66 |

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 95% Siltstone, 5% very fine Sandstone, 0.1% dull FLUOR in SST. TG 14U

| Property | Value |
|----------|-------|
| % Sandstone | 5.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 0.1% dll |
| Total Gas | 14.0 U |
| mTVDss | -1195.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2772m: clr,trnsl,pl brn-off wh,vf,v wl srt, 1234.4 sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, fri,v pr vis por,fluor. 2780 89 / 5 / 3 / 1 / 2 1234.2
- **SILTSTONE** @ ~2784m: 9.8 SILTSTONE:med brn gry,dk gry i/p,aren, grd to FV: 44 SST i/p,mnr micmic & carb flks,sft-frm,sbblky-blky. PV: 10 YP: 20 2788 Gel: 8/12/14 1233.9
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 65 |
| RES_DEEP (ohm.m) | 31.85 | 65 |
| RES_SHALLOW (ohm.m) | 23.45 | 65 |

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 95% Siltstone, 5% very fine Sandstone, 0.1% dull FLUOR in SST. TG 13U

| Property | Value |
|----------|-------|
| % Sandstone | 5.0 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 0.1% dll |
| Total Gas | 13.0 U |
| mTVDss | -1194.88 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2784m: 9.8 SILTSTONE:med brn gry,dk gry i/p,aren, grd to FV: 44 SST i/p,mnr micmic & carb flks,sft-frm,sbblky-blky. PV: 10 YP: 20 2788 Gel: 8/12/14 1233.9
- **SANDSTONE** @ ~2792m: clr,trnsl,pl brn-off wh,vf,v wl srt, sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, fri,v pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 66 |
| RES_DEEP (ohm.m) | 37.97 | 66 |
| RES_SHALLOW (ohm.m) | 29.48 | 66 |

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 90% Siltstone, 10% very fine to fine Sandstone, 0.1% moderately bright  to  bright FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 10.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 0.1% mod bri - bri |
| Total Gas | 41.0 U |
| mTVDss | -1194.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2792m: clr,trnsl,pl brn-off wh,vf,v wl srt, sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx, fri,v pr vis por,fluor.
- **SANDSTONE** @ ~2804m: clr,trnsl,opq,vf-f,wl srt,sbang-sbrnd, wk sil cmt,com off wh-pl brn arg mtx,fri,pr vis por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.8 | 66 |
| RES_DEEP (ohm.m) | 44.85 | 66 |
| RES_SHALLOW (ohm.m) | 37.88 | 66 |

---

### 2820 m MD — Interval 2815.0 – 2825.0 m

**Sample Description (spreadsheet):** Sample 2820m: 60% Siltstone, 40% very fine to fine,occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 56U

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | vf-f,occ med-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 56.0 U |
| mTVDss | -1194.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2804m: clr,trnsl,opq,vf-f,wl srt,sbang-sbrnd, wk sil cmt,com off wh-pl brn arg mtx,fri,pr vis por, fluor.
- **SANDSTONE** @ ~2812m: clr,trnsl,opq,pl brn-off wh,vf-crs,pred med,pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,occ-com lse grs,pr vis & 28 12 1 3 6 2.6 inf por,fluor. 84 / 6 / 4 / 3 / 3 61U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 65 |
| RES_DEEP (ohm.m) | 52.78 | 65 |
| RES_SHALLOW (ohm.m) | 52.55 | 65 |

---

### 2830 m MD — Interval 2825.0 – 2835.0 m

**Sample Description (spreadsheet):** Sample 2830m: 30% Siltstone, 70% very fine to coarse,pred medium Sandstone, 100% bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-crs,pred med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 60.0 U |
| mTVDss | -1193.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: clr,trnsl,opq,pl brn-off wh,vf-crs,pred med,pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,com fri aggs,occ-com lse grs,pr vis & 28 12 1 3 6 2.6 inf por,fluor. 84 / 6 / 4 / 3 / 3 61U
- **SANDSTONE** @ ~2824m: clr,trnsl,opq,vf-f,wl srt,sbang-sbrnd, wk sil cmt,com off wh-pl brn arg mtx,fri,pr vis por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 66 |
| RES_DEEP (ohm.m) | 57.82 | 66 |
| RES_SHALLOW (ohm.m) | 49.97 | 66 |

---

### 2840 m MD — Interval 2835.0 – 2845.0 m

**Sample Description (spreadsheet):** Sample 2840m: 40% Siltstone, 60% very fine to coarse,pred medium Sandstone, 100% bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf-crs,pred med (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 32.0 U |
| mTVDss | -1193.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2824m: clr,trnsl,opq,vf-f,wl srt,sbang-sbrnd, wk sil cmt,com off wh-pl brn arg mtx,fri,pr vis por, fluor.
- **SILTSTONE** @ ~2836m: dk brnsh gry,dk gry,aren,grd to vf SST i/p,mnr micmic,tr carb spks,frm,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 65 |
| RES_DEEP (ohm.m) | 56.82 | 65 |
| RES_SHALLOW (ohm.m) | 42.33 | 65 |

---

### 2850 m MD — Interval 2845.0 – 2855.0 m

**Sample Description (spreadsheet):** Sample 2850m: 30% Siltstone, 70% very fine to coarse, pred medium to coarse Sandstone, 100% bright FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-crs, pred med-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 53.0 U |
| mTVDss | -1193.13 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2836m: dk brnsh gry,dk gry,aren,grd to vf SST i/p,mnr micmic,tr carb spks,frm,sbblky.
- **SANDSTONE** @ ~2844m: clr,trnsl,opq,pl brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx,com fri aggs,com lse grs,pr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 66 |
| RES_DEEP (ohm.m) | 66.47 | 66 |
| RES_SHALLOW (ohm.m) | 36.87 | 66 |

---

### 2900 m MD — Interval 2895.0 – 2905.0 m

**Sample Description (spreadsheet):** Sample 2900m: 30% Siltstone, 70% very fine to medium,occasional coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-med,occ crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 44.0 U |
| mTVDss | -1192.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2884m: clr,trnsl,pl brn,vf-med,occ crs, mod-pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri,pred cln lse qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2896m: lt-med gry,lt-med brnsh gry,aren,grd to vf SST,micmic,tr carb spks,frm,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 65 |
| RES_DEEP (ohm.m) | 89.67 | 65 |
| RES_SHALLOW (ohm.m) | 49.76 | 65 |

---

### 2910 m MD — Interval 2905.0 – 2915.0 m

**Sample Description (spreadsheet):** Sample 2910m: 20% Siltstone, 80% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 90.0 U |
| mTVDss | -1192.62 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2896m: lt-med gry,lt-med brnsh gry,aren,grd to vf SST,micmic,tr carb spks,frm,sbblky.
- **SANDSTONE** @ ~2904m: clr,trnsl,pl brn,vf-med,occ crs-v crs,v 29 12 0 3 8 1.0 p m r t x s , r f t r , i s ,p b r a e n d g - c s ln b r l n s d e , w qt k z s g i r l s c , m pr t , v c i o s m p o p r l , f b r- r g n d -o i f n f f w p h o r a , rg fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 66 |
| RES_DEEP (ohm.m) | 76.65 | 66 |
| RES_SHALLOW (ohm.m) | 51.93 | 66 |

---

### 2920 m MD — Interval 2915.0 – 2925.0 m

**Sample Description (spreadsheet):** Sample 2920m: 20% Siltstone, 80% very fine to coarse, pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 101.0 U |
| mTVDss | -1192.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2904m: clr,trnsl,pl brn,vf-med,occ crs-v crs,v 29 12 0 3 8 1.0 p m r t x s , r f t r , i s ,p b r a e n d g - c s ln b r l n s d e , w qt k z s g i r l s c , m pr t , v c i o s m p o p r l , f b r- r g n d -o i f n f f w p h o r a , rg fluor.
- **SANDSTONE** @ ~2914m: clr,trnsl,pl brn,vf-med,occ crs-v crs,v 29 12 1 3 6 1.1 pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri,pred cln lse qtz grs,pr vis por,fr-gd inf por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 57.6 | 65 |
| RES_DEEP (ohm.m) | 61.99 | 65 |
| RES_SHALLOW (ohm.m) | 59.45 | 65 |

---

### 2930 m MD — Interval 2925.0 – 2935.0 m

**Sample Description (spreadsheet):** Sample 2930m: 20% Siltstone, 80% very fine to coarse,pred fine to medium Sandstone, 100% bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs,pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 91.0 U |
| mTVDss | -1192.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2914m: clr,trnsl,pl brn,vf-med,occ crs-v crs,v 29 12 1 3 6 1.1 pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,fri,pred cln lse qtz grs,pr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2920m: clr,trnsl,pl brn,frstd,vf-crs,pred f-med,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.5 | 66 |
| RES_DEEP (ohm.m) | 55.15 | 66 |
| RES_SHALLOW (ohm.m) | 59.99 | 66 |

---

### 2940 m MD — Interval 2935.0 – 2945.0 m

**Sample Description (spreadsheet):** Sample 2940m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 88.0 U |
| mTVDss | -1193.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2920m: clr,trnsl,pl brn,frstd,vf-crs,pred f-med,
- **SANDSTONE** @ ~2920m: clr,trnsl,pl brn,frstd,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk sil cmt,com off wh-pl brn arg mtx,fri,com cln lse qtz grs,pr vis por,fr-gd inf por, fluor. 85 / 6 / 3 / 3 / 3 91U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 66 |
| RES_DEEP (ohm.m) | 50.71 | 66 |
| RES_SHALLOW (ohm.m) | 41.52 | 66 |

---

### 2950 m MD — Interval 2945.0 – 2955.0 m

**Sample Description (spreadsheet):** Sample 2950m: 0% Siltstone, 100% very fine to very coarse,pred coarse to medium Sandstone, 100% bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-v crs,pred crs-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 50.0 U |
| mTVDss | -1193.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2936m: clr,trnsl,pl brn,frstd,vf-med,tr crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt,com off wh-pl brn arg mtx,fri,com cln lse qtz grs,pr vis por,fr-gd inf por,fluor. 2940 MD:2940.0 m
- **SANDSTONE** @ ~2948m: clr,trnsl,frstd,opq,tr trnsl brn,vf-v crs, pred crs-med,pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom cln lse qtz grs,tr fri aggs,pr vis por, gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 65 |
| RES_DEEP (ohm.m) | 46.43 | 65 |
| RES_SHALLOW (ohm.m) | 34.29 | 65 |

---

### 2960 m MD — Interval 2955.0 – 2965.0 m

**Sample Description (spreadsheet):** Sample 2960m: 0% Siltstone, 100% very fine  to  very coarse, pred fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf - v crs, pred f-med (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 46.0 U |
| mTVDss | -1193.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2948m: clr,trnsl,frstd,opq,tr trnsl brn,vf-v crs, pred crs-med,pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom cln lse qtz grs,tr fri aggs,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~2956m: clr,trnsl,frstd,opq,tr trnsl brn,vf-crs, pred f-med,pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom cln lse qtz grs,tr fri aggs,pr vis por,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 66 |
| RES_DEEP (ohm.m) | 39.08 | 66 |
| RES_SHALLOW (ohm.m) | 31.10 | 66 |

---

### 2970 m MD — Interval 2965.0 – 2975.0 m

**Sample Description (spreadsheet):** Sample 2970m: 0% Siltstone, 100% very fine  to  very coarse, pred fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf - v crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 50.0 U |
| mTVDss | -1193.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2956m: clr,trnsl,frstd,opq,tr trnsl brn,vf-crs, pred f-med,pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom cln lse qtz grs,tr fri aggs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2968m: clr,trnsl,frstd,opq,tr trnsl brn,vf-crs, pred f-med,pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom cln lse qtz grs,tr fri aggs,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 65 |
| RES_DEEP (ohm.m) | 54.42 | 65 |
| RES_SHALLOW (ohm.m) | 38.53 | 65 |

---

### 2980 m MD — Interval 2975.0 – 2985.0 m

**Sample Description (spreadsheet):** Sample 2980m: 0% Siltstone, 100% very fine to coarse, pred fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 28U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, pred f-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 28.0 U |
| mTVDss | -1192.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2968m: clr,trnsl,frstd,opq,tr trnsl brn,vf-crs, pred f-med,pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom cln lse qtz grs,tr fri aggs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2976m: clr,trnsl,tr trnsl brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.8 | 66 |
| RES_DEEP (ohm.m) | 43.85 | 66 |
| RES_SHALLOW (ohm.m) | 32.25 | 66 |

---

### 2990 m MD — Interval 2985.0 – 2995.0 m

**Sample Description (spreadsheet):** Sample 2990m: 20% Siltstone, 80% very fine to coarse,trace very coarse Sandstone, 80% moderately bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs,tr v crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 46.0 U |
| mTVDss | -1192.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2976m: clr,trnsl,tr trnsl brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom
- **SANDSTONE** @ ~2976m: clr,trnsl,tr trnsl brn,vf-crs,pred f-med, pr srt,sbang-sbrnd,wk sil cmt,tr off wh arg mtx,dom cln lse qtz grs,tr fri aggs,pr vis por,gd inf por,fluor. 14-12-2024
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.0 | 66 |
| RES_DEEP (ohm.m) | 45.90 | 66 |
| RES_SHALLOW (ohm.m) | 33.13 | 66 |

---

### 3000 m MD — Interval 2995.0 – 3005.0 m

**Sample Description (spreadsheet):** Sample 3000m: 0% Siltstone, 100% very fine to very coarse,pred coarse to medium Sandstone, 100% bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-v crs,pred crs-med (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 90.0 U |
| mTVDss | -1192.83 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2984m: med-dk gry,med brnsh gry,aren,grd to vf SST i/p,micmic,tr carb spks,frm,sbblky.
- **SANDSTONE** @ ~2988m: clr,trnsl,lt trnsl brn,vf-crs,tr v crs,pr srt,sbrnd-sbang,wk sil cmt,occ pl brn-off wh arg mtx,tr carb spks & stns,fri aggs,pred cln lse qtz grs, pr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.5 | 65 |
| RES_DEEP (ohm.m) | 45.69 | 65 |
| RES_SHALLOW (ohm.m) | 36.17 | 65 |

---

### 3010 m MD — Interval 3005.0 – 3015.0 m

**Sample Description (spreadsheet):** Sample 3010m: 0% Siltstone, 100% very fine to very coarse,pred coarse to medium Sandstone, 100% bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-v crs,pred crs-med (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 90.0 U |
| mTVDss | -1192.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2993m: clr,trnsl,frstd,off wh,vf-v crs,pred 3000 crs-med,pr srt,sbang-sbrnd,wk sil cmt,occ pl brn-off
- **SANDSTONE** @ ~3004m: clr,trnsl,frstd,off wh,vf-v crs,pred crs-med,pr srt,ang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,dom cln lse grs,occ fri aggs,pr vis por, gd-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.3 | 66 |
| RES_DEEP (ohm.m) | 53.02 | 66 |
| RES_SHALLOW (ohm.m) | 33.83 | 66 |

---

### 3020 m MD — Interval 3015.0 – 3025.0 m

**Sample Description (spreadsheet):** Sample 3020m: 0% Siltstone, 100% very fine to coarse,occasional very coarse Sandstone, 100% bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs,occ v crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 88.0 U |
| mTVDss | -1192.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3004m: clr,trnsl,frstd,off wh,vf-v crs,pred crs-med,pr srt,ang-sbrnd,wk sil cmt,occ pl brn-off wh arg mtx,dom cln lse grs,occ fri aggs,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~3012m: clr,trnsl,lt trnsl brn,frstd,vf-crs,occ v crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt,occ pl brn-off wh arg mtx,dom cln lse grs,occ fri aggs,pr vis por,gd inf por,fluor. 30 12 2 3 0 1.3 M V az D D i : : : 5 3 1 6 0 2 . 1 3 0 9 1 i . n . 9 3 c m : m 9 0.0
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.7 | 66 |
| RES_DEEP (ohm.m) | 53.83 | 66 |
| RES_SHALLOW (ohm.m) | 36.75 | 66 |

---

### 3030 m MD — Interval 3025.0 – 3035.0 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% vf-crs,occ v crs Sandstone, 100% bri FLUOR, TG 80.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs,occ v crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 80.0 U |
| mTVDss | -1192.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3012m: clr,trnsl,lt trnsl brn,frstd,vf-crs,occ v crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt,occ pl brn-off wh arg mtx,dom cln lse grs,occ fri aggs,pr vis por,gd inf por,fluor. 30 12 2 3 0 1.3 M V az D D i : : : 5 3 1 6 0 2 . 1 3 0 9 1 i . n . 9 3 c m : m 9 0.0
- **SANDSTONE** @ ~3024m: clr,trnsl,lt trnsl brn,frstd,vf-crs,occ v crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt,occ pl 3028 brn-off wh arg mtx,dom cln lse grs,occ fri aggs,pr 1231.2 vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.2 | 65 |
| RES_DEEP (ohm.m) | 64.00 | 65 |
| RES_SHALLOW (ohm.m) | 52.69 | 65 |

---

### 3040 m MD — Interval 3035.0 – 3045.0 m

**Sample Description (spreadsheet):** Sample 3040m: 10% Siltstone, 90% very fine to coarse,occasional very coarse Sandstone, 100% bright FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs,occ v crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 94.0 U |
| mTVDss | -1192.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3024m: clr,trnsl,lt trnsl brn,frstd,vf-crs,occ v crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt,occ pl 3028 brn-off wh arg mtx,dom cln lse grs,occ fri aggs,pr 1231.2 vis por,gd inf por,fluor.
- **SILTSTONE** @ ~3036m: lt-med gry,aren,grd to vf SST,com carb spks,micmic,frm-mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 66 |
| RES_DEEP (ohm.m) | 60.57 | 66 |
| RES_SHALLOW (ohm.m) | 45.31 | 66 |

---

### 3050 m MD — Interval 3045.0 – 3055.0 m

**Sample Description (spreadsheet):** Sample 3050m: 5% Siltstone, 95% very fine to medium,occasional coarse Sandstone, 100% bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med,occ crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 95.0 U |
| mTVDss | -1192.49 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3036m: lt-med gry,aren,grd to vf SST,com carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3048m: clr,trnsl,pl brn,vf-med,occ crs,pr srt, sbang-sbrnd,wk sil cmt,occ off wh-pl brn arg mtx,tr carb spks,dom cln lse grs,occ fri aggs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 65 |
| RES_DEEP (ohm.m) | 58.85 | 65 |
| RES_SHALLOW (ohm.m) | 40.62 | 65 |

---

### 3060 m MD — Interval 3055.0 – 3065.0 m

**Sample Description (spreadsheet):** Sample 3060m: 20% Siltstone, 80% very fine to coarse,trace very coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 47U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-crs,tr v crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 47.0 U |
| mTVDss | -1192.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3048m: clr,trnsl,pl brn,vf-med,occ crs,pr srt, sbang-sbrnd,wk sil cmt,occ off wh-pl brn arg mtx,tr carb spks,dom cln lse grs,occ fri aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3056m: clr,pl brn,lt trnsl gry,vf-crs,tr v crs,pr srt,sbang-sbrnd,wk sil cmt,com pl brn arg mtx,fri aggs,pred cln lse grs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 66 |
| RES_DEEP (ohm.m) | 60.75 | 66 |
| RES_SHALLOW (ohm.m) | 45.15 | 66 |

---

### 3070 m MD — Interval 3065.0 – 3075.0 m

**Sample Description (spreadsheet):** Sample 3070m: 10% Siltstone, 90% very fine to coarse,trace very coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs,tr v crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 76.0 U |
| mTVDss | -1192.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,pl brn,lt trnsl gry,vf-crs,tr v crs,pr srt,sbang-sbrnd,wk sil cmt,com pl brn arg mtx,fri aggs,pred cln lse grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~3064m: med brn gry,lt-med gry,aren,grd to vf SST,tr carb spks,com micmic,frm-mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 66 |
| RES_DEEP (ohm.m) | 58.66 | 66 |
| RES_SHALLOW (ohm.m) | 48.39 | 66 |

---

### 3080 m MD — Interval 3075.0 – 3085.0 m

**Sample Description (spreadsheet):** Sample 3080m: 5% Siltstone, 95% very fine to coarse,trace very coarse Sandstone, 100% bright FLUOR in SST. TG 86U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs,tr v crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 86.0 U |
| mTVDss | -1191.93 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3064m: med brn gry,lt-med gry,aren,grd to vf SST,tr carb spks,com micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3068m: clr,pl brn,lt trnsl gry,vf-crs,tr v crs,pr srt,sbang-sbrnd,wk sil cmt,com pl brn arg mtx,fri aggs,pred cln lse grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.3 | 65 |
| RES_DEEP (ohm.m) | 59.64 | 65 |
| RES_SHALLOW (ohm.m) | 53.24 | 65 |

---

### 3090 m MD — Interval 3085.0 – 3095.0 m

**Sample Description (spreadsheet):** Sample 3090m: 5% Siltstone, 95% very fine to coarse,trace very coarse Sandstone, 100% bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs,tr v crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 91.0 U |
| mTVDss | -1191.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3076m: clr,trnsl gry,lt trnsl brn,pl brn,vf-crs,tr v crs,pr srt,sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx,mod cln lse grs,occ fri aggs,pr vis por,fr 3080 inf por,fluor. 1230.4
- **SANDSTONE** @ ~3096m: clr,trnsl,opq,occ trnsl brn,vf-crs,pr srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, pred lse cln qtz grs,occ fri aggs,pr vis por,gd inf por, fluor. 3100 FLUOR: 3090.0-3110.0m; 100% of SST;
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.8 | 66 |
| RES_DEEP (ohm.m) | 68.00 | 66 |
| RES_SHALLOW (ohm.m) | 65.03 | 66 |

---

### 3100 m MD — Interval 3095.0 – 3105.0 m

**Sample Description (spreadsheet):** Sample 3100m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 107.0 U |
| mTVDss | -1191.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3096m: clr,trnsl,opq,occ trnsl brn,vf-crs,pr srt, sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx, pred lse cln qtz grs,occ fri aggs,pr vis por,gd inf por, fluor. 3100 FLUOR: 3090.0-3110.0m; 100% of SST;
- **SANDSTONE** @ ~3104m: clr,trnsl,opq,occ trnsl brn,vf-crs,com 1230.3 f,pr srt,sbang-sbrnd,wk sil cmt,occ lt brn-off wh arg mtx,pred lse cln qtz grs,occ fri aggs,pr vis por,gd MW: 9.8 inf por,fluor. FV: 45
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.4 | 66 |
| RES_DEEP (ohm.m) | 69.52 | 66 |
| RES_SHALLOW (ohm.m) | 68.74 | 66 |

---

### 3190 m MD — Interval 3185.0 – 3195.0 m

**Sample Description (spreadsheet):** Sample 3190m: 15% Siltstone, trace siderite in 85% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 37.0 U |
| mTVDss | -1195.37 m |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3176m: med-lt gry brn,med-lt gry,aren,grd to vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky.
- **SANDSTONE** @ ~3180m: clr,trnsl,brn,vf-f,wl srt,sbang-sbrnd, mod wk sil cmt,com lt brn-off wh arg mtx,tr sid, fri-mod hd i/p,com lse,pr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.9 | 66 |
| RES_DEEP (ohm.m) | 43.41 | 66 |
| RES_SHALLOW (ohm.m) | 31.33 | 66 |

---

### 3200 m MD — Interval 3195.0 – 3202.5 m

**Sample Description (spreadsheet):** Sample 3200m: 15% Siltstone, 85% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 65.0 U |
| mTVDss | -1196.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3180m: clr,trnsl,brn,vf-f,wl srt,sbang-sbrnd, mod wk sil cmt,com lt brn-off wh arg mtx,tr sid, fri-mod hd i/p,com lse,pr vis & inf por,fluor.
- **SANDSTONE** @ ~3192m: clr,trnsl,lt brn-off wh,vf-f,wl srt, 3196 sbang-sbrnd,mod wk sil cmt,com pl brn-off wh arg 1234.7 mtx,fri-mod hd,occ-com lse,pr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.4 | 49 |
| RES_DEEP (ohm.m) | 29.21 | 49 |
| RES_SHALLOW (ohm.m) | 28.79 | 49 |

---

### 3205 m MD — Interval 3202.5 – 3207.5 m

**Sample Description (spreadsheet):** Sample 3205m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 38.0 U |
| mTVDss | -1196.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3192m: clr,trnsl,lt brn-off wh,vf-f,wl srt, 3196 sbang-sbrnd,mod wk sil cmt,com pl brn-off wh arg 1234.7 mtx,fri-mod hd,occ-com lse,pr vis & inf por,fluor.
- **SANDSTONE** @ ~3200m: clr,trnsl,lt brn-off wh,vf-f,wl srt, 32 12 0 3 4 5.3 s m b t a x n ,f g ri - - s m b o rn d d h ,m d, o a d b d w t k ls s e i l q c tz m g t, r c s o ,p m r p vi l s b & rn i - n o f f f p w or h ,f l a u r o g r.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 54.2 | 33 |
| RES_DEEP (ohm.m) | 24.11 | 33 |
| RES_SHALLOW (ohm.m) | 24.39 | 33 |

---

### 3210 m MD — Interval 3207.5 – 3212.5 m

**Sample Description (spreadsheet):** Sample 3210m: 5% Siltstone, 95% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 39.0 U |
| mTVDss | -1196.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3200m: clr,trnsl,lt brn-off wh,vf-f,wl srt, 32 12 0 3 4 5.3 s m b t a x n ,f g ri - - s m b o rn d d h ,m d, o a d b d w t k ls s e i l q c tz m g t, r c s o ,p m r p vi l s b & rn i - n o f f f p w or h ,f l a u r o g r.
- **SILTSTONE** @ ~3200m: med-lt gry brn,med-lt gry,aren,grd to 1235.6 vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky. 81 / 6 / 4 / 4 / 5 32 12 1 3 2 5.8 S m A o N d D w S l T sr O t, N sb E a :c n l g r, - t s rn b s rn l, d o , p w q k ,o s ff il w cm h- t p ,c l o b m rn , o v f f f - f w ,r h r c a r r s g , mtx,fri aggs,occ lse,pr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.5 | 33 |
| RES_DEEP (ohm.m) | 22.83 | 33 |
| RES_SHALLOW (ohm.m) | 21.84 | 33 |

---

### 3215 m MD — Interval 3212.5 – 3217.5 m

**Sample Description (spreadsheet):** Sample 3215m: 10% Siltstone, 90% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 38.0 U |
| mTVDss | -1197.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3200m: clr,trnsl,lt brn-off wh,vf-f,wl srt, 32 12 0 3 4 5.3 s m b t a x n ,f g ri - - s m b o rn d d h ,m d, o a d b d w t k ls s e i l q c tz m g t, r c s o ,p m r p vi l s b & rn i - n o f f f p w or h ,f l a u r o g r.
- **SILTSTONE** @ ~3200m: med-lt gry brn,med-lt gry,aren,grd to 1235.6 vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky. 81 / 6 / 4 / 4 / 5 32 12 1 3 2 5.8 S m A o N d D w S l T sr O t, N sb E a :c n l g r, - t s rn b s rn l, d o , p w q k ,o s ff il w cm h- t p ,c l o b m rn , o v f f f - f w ,r h r c a r r s g , mtx,fri aggs,occ lse,pr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.0 | 33 |
| RES_DEEP (ohm.m) | 20.76 | 33 |
| RES_SHALLOW (ohm.m) | 20.18 | 33 |

---

### 3220 m MD — Interval 3217.5 – 3222.5 m

**Sample Description (spreadsheet):** Sample 3220m: 20% Siltstone, 80% very fine to fine Sandstone, 90% moderately bright FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri |
| Total Gas | 33.0 U |
| mTVDss | -1197.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3216m: clr,trnsp,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, fri aggs,occ lse,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3224m: med-lt gry brn,med-lt gry,aren,grd to vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.8 | 33 |
| RES_DEEP (ohm.m) | 18.69 | 33 |
| RES_SHALLOW (ohm.m) | 17.90 | 33 |

---

### 3225 m MD — Interval 3222.5 – 3227.5 m

**Sample Description (spreadsheet):** Sample 3225m: 10% Siltstone, 90% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 30U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 30.0 U |
| mTVDss | -1197.57 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3216m: clr,trnsp,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, fri aggs,occ lse,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3224m: med-lt gry brn,med-lt gry,aren,grd to vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 58.7 | 32 |
| RES_DEEP (ohm.m) | 17.44 | 32 |
| RES_SHALLOW (ohm.m) | 16.99 | 32 |

---

### 3230 m MD — Interval 3227.5 – 3232.5 m

**Sample Description (spreadsheet):** Sample 3230m: 10% Siltstone, 90% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 27U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 27.0 U |
| mTVDss | -1197.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3216m: clr,trnsp,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, fri aggs,occ lse,pr vis & inf por,fluor.
- **SILTSTONE** @ ~3224m: med-lt gry brn,med-lt gry,aren,grd to vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.0 | 33 |
| RES_DEEP (ohm.m) | 17.11 | 33 |
| RES_SHALLOW (ohm.m) | 16.19 | 33 |

---

### 3235 m MD — Interval 3232.5 – 3237.5 m

**Sample Description (spreadsheet):** Sample 3235m: 10% Siltstone, 90% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 28U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 28.0 U |
| mTVDss | -1198.00 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3224m: med-lt gry brn,med-lt gry,aren,grd to vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky.
- **SANDSTONE** @ ~3228m: clr,trnsp,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, 3232 fri aggs,occ-com lse,pr vis & pr-fr inf por,fluor. 1236.7
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.5 | 33 |
| RES_DEEP (ohm.m) | 16.54 | 33 |
| RES_SHALLOW (ohm.m) | 15.62 | 33 |

---

### 3240 m MD — Interval 3237.5 – 3242.5 m

**Sample Description (spreadsheet):** Sample 3240m: 10% Siltstone, 90% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 31U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 31.0 U |
| mTVDss | -1198.22 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3224m: med-lt gry brn,med-lt gry,aren,grd to vf SST,mnr micmic & crb spks,sft-frm,sbblky-blky.
- **SANDSTONE** @ ~3228m: clr,trnsp,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, 3232 fri aggs,occ-com lse,pr vis & pr-fr inf por,fluor. 1236.7
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.9 | 33 |
| RES_DEEP (ohm.m) | 16.38 | 33 |
| RES_SHALLOW (ohm.m) | 15.65 | 33 |

---

### 3245 m MD — Interval 3242.5 – 3247.5 m

**Sample Description (spreadsheet):** Sample 3245m: 5% Siltstone, 95% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 24U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 24.0 U |
| mTVDss | -1198.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3228m: clr,trnsp,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com pl brn-off wh arg mtx, 3232 fri aggs,occ-com lse,pr vis & pr-fr inf por,fluor. 1236.7
- **SANDSTONE** @ ~3236m: clr,trnsl,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,fri aggs,occ lse,pr vis & inf por,fluor. MW: 9.8 FV: 44
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.4 | 33 |
| RES_DEEP (ohm.m) | 15.91 | 33 |
| RES_SHALLOW (ohm.m) | 15.23 | 33 |

---

### 3250 m MD — Interval 3247.5 – 3255.0 m

**Sample Description (spreadsheet):** Sample 3250m: 10% Siltstone, 90% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 24U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 24.0 U |
| mTVDss | -1198.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3236m: clr,trnsl,opq,trnsl brn,vf-f,wl srt, sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,fri aggs,occ lse,pr vis & inf por,fluor. MW: 9.8 FV: 44
- **SILTSTONE** @ ~3246m: med gry,med lt gry brn,arengrd to 32 12 4 3 8 7.4 SST,com micmic,tr carb flks,frm-sft,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.3 | 49 |
| RES_DEEP (ohm.m) | 16.13 | 49 |
| RES_SHALLOW (ohm.m) | 15.42 | 49 |

---

### 3260 m MD — Interval 3255.0 – 3265.0 m

**Sample Description (spreadsheet):** Sample 3260m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 25.0 U |
| mTVDss | -1199.03 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3246m: med gry,med lt gry brn,arengrd to 32 12 4 3 8 7.4 SST,com micmic,tr carb flks,frm-sft,sbblky-blky.
- **SANDSTONE** @ ~3252m: clr,trnsl,opq,pl trnsl brn,vf-f in aggs, lse crs-v crs grs,pr srt,sbang-sbrnd,wk sil cmt, occ-com pl brn-off wh arg mtx,occ fri aggs,abdt lse qtz grs,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.8 | 65 |
| RES_DEEP (ohm.m) | 15.02 | 65 |
| RES_SHALLOW (ohm.m) | 14.18 | 65 |

---

### 3270 m MD — Interval 3265.0 – 3274.0 m

**Sample Description (spreadsheet):** Sample 3270m: 5% Siltstone, 95% medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 27U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 27.0 U |
| mTVDss | -1199.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3252m: clr,trnsl,opq,pl trnsl brn,vf-f in aggs, lse crs-v crs grs,pr srt,sbang-sbrnd,wk sil cmt, occ-com pl brn-off wh arg mtx,occ fri aggs,abdt lse qtz grs,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.3 | 7 |
| RES_DEEP (ohm.m) | 15.10 | 7 |
| RES_SHALLOW (ohm.m) | 14.04 | 26 |

---

### 3278 m MD — Interval 3274.0 – 3280.5 m

**Sample Description (spreadsheet):** Sample 3278m: 5% Siltstone, 95% medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 28U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | med-crs (max: C) |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri |
| Total Gas | 28.0 U |
| mTVDss | -1199.74 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 134 |
| Depth range | 1925 – 3278 m |
| Avg % Sandstone | 84.5% |
| Mudlog matches | 133 / 134 |
