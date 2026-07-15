# FROSTILLICUS 2 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-15 05:43 UTC  
**Well:** FROSTILLICUS 2 (FROSTILLICUS 2)  
**TD:** 3724 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `Frostillicus 2_Mudlog_Spud-3724m_TD_Field_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Frostillicus 2 Hz Section Samples Descriptions.xlsx` (Sheet1 (cols F=TG, G=%SS, H=%fluoro + col A descriptions)) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Frosti_2` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Frosti_2_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1614.15 | DC30.xlsx |
| McKinlay Member (shallowest) | 1614.73 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1614.73 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1757.04 m MD
- 2675.74 m MD
- 2806.48 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1721.08 | 1719.13 | 1.95 | 1757.04 | 36.0 |
| 2530.15 | 2527.08 | 3.07 | 2675.74 | 145.6 |
| 2776.54 | 2774.40 | 2.14 | 2806.48 | 29.9 |
| 3689.90 | 3688.49 | 1.41 | 3739.90 (assumed +50 m) | 50.0 |

**McKinlay Member analysis window:** 1614.7 – 3724.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1721–1757 m (overburden), 2530–2676 m (overburden), 2777–2806 m (overburden), 3690–3740 m (overburden)

**Samples in McKinlay Member:** 373 of 420 total
- Excluded pre-reservoir: 12
- Excluded overburden intervals: 35

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** FROSTILLICUS 2 → `FROSTILLICUS 2` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1617 m MD — Interval 1615.5 – 1618.5 m

**Sample Description (spreadsheet):** Sample 1617m: trace siderite in 60% Siltstone, minor siderite in 40% very fine to fine Sandstone, Trace pale to moderately bright FLUOR in SST. TG 7U

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 1.0% siderite in 60% Siltstone, minor siderite in 40% very fine to fine Sandstone, Trace pale to moderately bright |
| Total Gas | 7.0 U |
| mTVDss | -1220.30 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: off wh-lt gry,clr-trnsl,vf-f,tr med,mod wl srt,sbang-sbrnd,mod-wk sil cmt,com lt gry arg mtx,mnr carb lams,tr carb spks,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~1610m: med gry brn,med-dk gry,vf aren,tr arg,micmic i/p,mnr sandy lams,mod 1620 hd-frm,sbblky-sbfiss. SURVEY @ 1622.4m INC: 87.8° AZI: 217.1°G
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.2 | 20 |
| RES_DEEP (ohm.m) | 25.01 | 20 |
| RES_SHALLOW (ohm.m) | 17.05 | 20 |

---

### 1620 m MD — Interval 1618.5 – 1621.5 m

**Sample Description (spreadsheet):** Sample 1620m: minor siderite in 70% Siltstone, minor siderite in 30% very fine to fine Sandstone, trace pale to moderately bright FLUOR in SST. TG 7U

| Property | Value |
|----------|-------|
| % Sandstone | 30.000000000000004 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 1.0% pale to moderately bright |
| Total Gas | 7.0 U |
| mTVDss | -1220.43 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: off wh-lt gry,clr-trnsl,vf-f,tr med,mod wl srt,sbang-sbrnd,mod-wk sil cmt,com lt gry arg mtx,mnr carb lams,tr carb spks,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~1610m: med gry brn,med-dk gry,vf aren,tr arg,micmic i/p,mnr sandy lams,mod 1620 hd-frm,sbblky-sbfiss. SURVEY @ 1622.4m INC: 87.8° AZI: 217.1°G
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.4 | 19 |
| RES_DEEP (ohm.m) | 36.08 | 19 |
| RES_SHALLOW (ohm.m) | 23.46 | 19 |

---

### 1623 m MD — Interval 1621.5 – 1624.5 m

**Sample Description (spreadsheet):** Sample 1623m: minor siderite in 70% Siltstone, trace siderite in 30% very finefine to fine Sandstone, 10% pale to moderately bright FLUOR in SST. TG 5U

| Property | Value |
|----------|-------|
| % Sandstone | 30.000000000000004 |
| Grain Size | very finefine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 10.0% siderite in 30% very finefine to fine Sandstone, 10% pale to moderately bright |
| Total Gas | 5.0 U |
| mTVDss | -1220.55 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: off wh-lt gry,clr-trnsl,vf-f,tr med,mod wl srt,sbang-sbrnd,mod-wk sil cmt,com lt gry arg mtx,mnr carb lams,tr carb spks,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~1610m: med gry brn,med-dk gry,vf aren,tr arg,micmic i/p,mnr sandy lams,mod 1620 hd-frm,sbblky-sbfiss. SURVEY @ 1622.4m INC: 87.8° AZI: 217.1°G
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.4 | 20 |
| RES_DEEP (ohm.m) | 36.36 | 20 |
| RES_SHALLOW (ohm.m) | 24.11 | 20 |

---

### 1626 m MD — Interval 1624.5 – 1627.5 m

**Sample Description (spreadsheet):** Sample 1626m: trace siderite in 20% Siltstone, 80% very fine to medium, trace coarse to very coarse Sandstone, 80% moderately bright FLUOR in SST. TG 77U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% siderite in 20% Siltstone, 80% very fine to medium, trace coarse to very coarse Sandstone, 80% moderately bright |
| Total Gas | 77.0 U |
| mTVDss | -1220.66 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: off wh-lt gry,clr-trnsl,vf-f,tr med,mod wl srt,sbang-sbrnd,mod-wk sil cmt,com lt gry arg mtx,mnr carb lams,tr carb spks,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~1610m: med gry brn,med-dk gry,vf aren,tr arg,micmic i/p,mnr sandy lams,mod 1620 hd-frm,sbblky-sbfiss. SURVEY @ 1622.4m INC: 87.8° AZI: 217.1°G
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.4 | 20 |
| RES_DEEP (ohm.m) | 50.06 | 20 |
| RES_SHALLOW (ohm.m) | 36.17 | 20 |

---

### 1629 m MD — Interval 1627.5 – 1630.5 m

**Sample Description (spreadsheet):** Sample 1629m: 10% Siltstone, 90% fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 9.999999999999998 |
| Grain Size | fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 100.0 U |
| mTVDss | -1220.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: lt trnsl brn,tr off wh-lt gry, clr-trnsl,f-med,mnr crs-v crs,pr srt,sbrnd- sbang,mod sil cmt,mnr lt gry arg mtx,tr carb spks,mod hd,tr disagg grs,pr vis por, fr-gd inf por,fluor.
- **SANDSTONE** @ ~1630m: lt trnsl brn,clr-trnsl,f-crs, 80 / 6 / 4 / 5 / 5 104 U tr v crs,pr srt,sbang,occ sbrnd,wk sil cmt, mnr lt gry arg mtx,tr carb spks,fri,com disagg grs,pr vis por,fr-gd inf por,fluor. SURVEY @ 1641.3m
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.3 | 19 |
| RES_DEEP (ohm.m) | 43.91 | 19 |
| RES_SHALLOW (ohm.m) | 33.99 | 19 |

---

### 1632 m MD — Interval 1630.5 – 1633.5 m

**Sample Description (spreadsheet):** Sample 1632m: 5% Siltstone, 95% fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 5.000000000000004 |
| Grain Size | fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 94.0 U |
| mTVDss | -1220.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: lt trnsl brn,tr off wh-lt gry, clr-trnsl,f-med,mnr crs-v crs,pr srt,sbrnd- sbang,mod sil cmt,mnr lt gry arg mtx,tr carb spks,mod hd,tr disagg grs,pr vis por, fr-gd inf por,fluor.
- **SANDSTONE** @ ~1630m: lt trnsl brn,clr-trnsl,f-crs, 80 / 6 / 4 / 5 / 5 104 U tr v crs,pr srt,sbang,occ sbrnd,wk sil cmt, mnr lt gry arg mtx,tr carb spks,fri,com disagg grs,pr vis por,fr-gd inf por,fluor. SURVEY @ 1641.3m
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 20 |
| RES_DEEP (ohm.m) | 41.60 | 20 |
| RES_SHALLOW (ohm.m) | 38.57 | 20 |

---

### 1635 m MD — Interval 1633.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: 0% Siltstone, 100% fine to medium,trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 102U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium,trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 102.0 U |
| mTVDss | -1220.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: lt trnsl brn,tr off wh-lt gry, clr-trnsl,f-med,mnr crs-v crs,pr srt,sbrnd- sbang,mod sil cmt,mnr lt gry arg mtx,tr carb spks,mod hd,tr disagg grs,pr vis por, fr-gd inf por,fluor.
- **SANDSTONE** @ ~1630m: lt trnsl brn,clr-trnsl,f-crs, 80 / 6 / 4 / 5 / 5 104 U tr v crs,pr srt,sbang,occ sbrnd,wk sil cmt, mnr lt gry arg mtx,tr carb spks,fri,com disagg grs,pr vis por,fr-gd inf por,fluor. SURVEY @ 1641.3m
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.5 | 26 |
| RES_DEEP (ohm.m) | 38.27 | 26 |
| RES_SHALLOW (ohm.m) | 34.06 | 26 |

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 0% Siltstone, 100% fine to coarse, trace very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 100.0 U |
| mTVDss | -1221.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: lt trnsl brn,tr off wh-lt gry, clr-trnsl,f-med,mnr crs-v crs,pr srt,sbrnd- sbang,mod sil cmt,mnr lt gry arg mtx,tr carb spks,mod hd,tr disagg grs,pr vis por, fr-gd inf por,fluor.
- **SANDSTONE** @ ~1630m: lt trnsl brn,clr-trnsl,f-crs, 80 / 6 / 4 / 5 / 5 104 U tr v crs,pr srt,sbang,occ sbrnd,wk sil cmt, mnr lt gry arg mtx,tr carb spks,fri,com disagg grs,pr vis por,fr-gd inf por,fluor. SURVEY @ 1641.3m
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.3 | 33 |
| RES_DEEP (ohm.m) | 36.25 | 33 |
| RES_SHALLOW (ohm.m) | 25.44 | 33 |

---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% pale to moderately bright FLUOR in SST. TG 144U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% pale to moderately bright |
| Total Gas | 144.0 U |
| mTVDss | -1221.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: lt trnsl brn,tr off wh-lt gry, clr-trnsl,f-med,mnr crs-v crs,pr srt,sbrnd- sbang,mod sil cmt,mnr lt gry arg mtx,tr carb spks,mod hd,tr disagg grs,pr vis por, fr-gd inf por,fluor.
- **SANDSTONE** @ ~1630m: lt trnsl brn,clr-trnsl,f-crs, 80 / 6 / 4 / 5 / 5 104 U tr v crs,pr srt,sbang,occ sbrnd,wk sil cmt, mnr lt gry arg mtx,tr carb spks,fri,com disagg grs,pr vis por,fr-gd inf por,fluor. SURVEY @ 1641.3m
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 33.81 | 33 |
| RES_SHALLOW (ohm.m) | 22.54 | 33 |

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 20% Siltstone, 80% very fine to medium Sandstone, 90% pale to moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 70.0 U |
| mTVDss | -1221.36 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1650m: med gry,med brn gry,vf aren g/t vf SST,tr micmic,frm-mod hd,sbblky. 73 / 6 / 5 / 7 / 952 U
- **SANDSTONE** @ ~1650m: lt trnsl brn,off wh-lt gry, vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt, com lt gry arg mtx,tr carb lams & spks, fri,pr vis por,fluor. 25-10-2021
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.9 | 33 |
| RES_DEEP (ohm.m) | 30.80 | 33 |
| RES_SHALLOW (ohm.m) | 20.47 | 33 |

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 60% Siltstone, 40% very fine to fine Sandstone, 80% pale to moderately bright FLUOR in SST. TG 42U. Silt is grading to sand, gas is fairly stable around 42-45U

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 42.0 U |
| mTVDss | -1221.46 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1650m: med gry,med brn gry,vf aren g/t vf SST,tr micmic,frm-mod hd,sbblky. 73 / 6 / 5 / 7 / 952 U
- **SANDSTONE** @ ~1650m: lt trnsl brn,off wh-lt gry, vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt, com lt gry arg mtx,tr carb lams & spks, fri,pr vis por,fluor. 25-10-2021
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.8 | 32 |
| RES_DEEP (ohm.m) | 27.87 | 32 |
| RES_SHALLOW (ohm.m) | 20.26 | 32 |

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 70% Siltstone, 30% very fine to fine Sandstone, 80% moderately bright to pale FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 30.000000000000004 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 52.0 U |
| mTVDss | -1221.55 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1650m: med gry,med brn gry,vf aren g/t vf SST,tr micmic,frm-mod hd,sbblky. 73 / 6 / 5 / 7 / 952 U
- **SANDSTONE** @ ~1650m: lt trnsl brn,off wh-lt gry, vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt, com lt gry arg mtx,tr carb lams & spks, fri,pr vis por,fluor. 25-10-2021
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 33 |
| RES_DEEP (ohm.m) | 29.40 | 33 |
| RES_SHALLOW (ohm.m) | 25.00 | 33 |

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 50% Siltstone, 50% very fine to fine Sandstone, 80% moderately bright to pale FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 67.0 U |
| mTVDss | -1221.54 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1650m: med gry,med brn gry,vf aren g/t vf SST,tr micmic,frm-mod hd,sbblky. 73 / 6 / 5 / 7 / 952 U
- **SANDSTONE** @ ~1650m: lt trnsl brn,off wh-lt gry, vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt, com lt gry arg mtx,tr carb lams & spks, fri,pr vis por,fluor. 25-10-2021
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 31.18 | 33 |
| RES_SHALLOW (ohm.m) | 27.69 | 33 |

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 80% Siltstone, 20% very fine to fine, trace medium Sandstone, 90% moderately bright FLUOR in SST. TG 75U

| Property | Value |
|----------|-------|
| % Sandstone | 19.999999999999996 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% medium Sandstone, 90% moderately bright |
| Total Gas | 75.0 U |
| mTVDss | -1221.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt trnsl brn,clr-trnsl,vf-f, wl srt,sbang-sbrnd,mod-wk sil cmt,mnr lt gry arg mtx,tr carb spks,mod hd,tr disagg grs,pr vis por,pr-fr inf por,fluor. 77 / 6 / 4 / 6 / 7 102 U
- **SILTSTONE** @ ~1660m: med brn gry,med-dk gry i/p, vf aren,tr arg,tr micmic,tr carb spks,frm- mod hd,sbblky.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 33 |
| RES_DEEP (ohm.m) | 28.53 | 33 |
| RES_SHALLOW (ohm.m) | 26.59 | 33 |

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 10% Siltstone, 90% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 118.0 U |
| mTVDss | -1221.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt trnsl brn,clr-trnsl,vf-f, wl srt,sbang-sbrnd,mod-wk sil cmt,mnr lt gry arg mtx,tr carb spks,mod hd,tr disagg grs,pr vis por,pr-fr inf por,fluor. 77 / 6 / 4 / 6 / 7 102 U
- **SILTSTONE** @ ~1660m: med brn gry,med-dk gry i/p, vf aren,tr arg,tr micmic,tr carb spks,frm- mod hd,sbblky.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 33 |
| RES_DEEP (ohm.m) | 28.44 | 33 |
| RES_SHALLOW (ohm.m) | 25.64 | 33 |

---

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680m: 5% Siltstone, 95% very fine to medium, minor coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 121.0 U |
| mTVDss | -1221.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1670m: med gry brn,med-dk gry, vf aren,tr micmic,mod hd-hd,sbblky. 1680 SURVEY @ 1680.2m INC: 91.0° AZI: 216.6°G
- **SANDSTONE** @ ~1670m: lt trnsl brn,clr-trnsl,f-med, tr crs-v crs,pr-mod srt,sbrnd-sbang,mod sil cmt,mnr lt gry arg mtx,tr carb spks,mnr disagg grs,fri,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.1 | 33 |
| RES_DEEP (ohm.m) | 31.63 | 33 |
| RES_SHALLOW (ohm.m) | 27.48 | 33 |

---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 0% Siltstone, 100% fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 140.0 U |
| mTVDss | -1221.35 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1670m: med gry brn,med-dk gry, vf aren,tr micmic,mod hd-hd,sbblky. 1680 SURVEY @ 1680.2m INC: 91.0° AZI: 216.6°G
- **SANDSTONE** @ ~1670m: lt trnsl brn,clr-trnsl,f-med, tr crs-v crs,pr-mod srt,sbrnd-sbang,mod sil cmt,mnr lt gry arg mtx,tr carb spks,mnr disagg grs,fri,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 32 |
| RES_DEEP (ohm.m) | 32.32 | 32 |
| RES_SHALLOW (ohm.m) | 27.96 | 32 |

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 0% Siltstone, 100% fine to coarse, common very coarse Sandstone, 100% bright FLUOR in SST. TG 148U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, common very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 148.0 U |
| mTVDss | -1221.26 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.7 | 33 |
| RES_DEEP (ohm.m) | 34.74 | 33 |
| RES_SHALLOW (ohm.m) | 31.75 | 33 |

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 0% Siltstone, 100% fine to coarse, common very coarse Sandstone, 100% bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, common very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 203.0 U |
| mTVDss | -1221.17 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med gry brn,med-dk gry i/p, aren,tr micmic,tr carb spks,mod hd-frm, sbblky-blky.
- **SANDSTONE** @ ~1710m: lt gry-off wh,lt trnsl brn,clr- trnsl,vf-med,mnr crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt gry arg mtx,tr carb spks,com disagg grs,fri,pr vis por,fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 36.67 | 33 |
| RES_SHALLOW (ohm.m) | 33.68 | 33 |

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 0% Siltstone, 100% fine to coarse, trace very coarse Sandstone, 100% bright FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright |
| Total Gas | 209.0 U |
| mTVDss | -1221.09 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med gry brn,med-dk gry i/p, aren,tr micmic,tr carb spks,mod hd-frm, sbblky-blky.
- **SANDSTONE** @ ~1710m: lt gry-off wh,lt trnsl brn,clr- trnsl,vf-med,mnr crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt gry arg mtx,tr carb spks,com disagg grs,fri,pr vis por,fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 43.69 | 33 |
| RES_SHALLOW (ohm.m) | 39.95 | 33 |

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 0% Siltstone, 100% fine to medium, common coarse Sandstone, 100% bright FLUOR in SST. TG 239U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium, common coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 239.0 U |
| mTVDss | -1221.04 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med gry brn,med-dk gry i/p, aren,tr micmic,tr carb spks,mod hd-frm, sbblky-blky.
- **SANDSTONE** @ ~1710m: lt gry-off wh,lt trnsl brn,clr- trnsl,vf-med,mnr crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt gry arg mtx,tr carb spks,com disagg grs,fri,pr vis por,fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 33 |
| RES_DEEP (ohm.m) | 53.39 | 33 |
| RES_SHALLOW (ohm.m) | 38.57 | 33 |

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 0% Siltstone, 100% fine to coarse, trace very coarse Sandstone, 100% bright FLUOR in SST. TG 221U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright |
| Total Gas | 221.0 U |
| mTVDss | -1220.99 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med gry brn,med-dk gry i/p, aren,tr micmic,tr carb spks,mod hd-frm, sbblky-blky.
- **SANDSTONE** @ ~1710m: lt gry-off wh,lt trnsl brn,clr- trnsl,vf-med,mnr crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt gry arg mtx,tr carb spks,com disagg grs,fri,pr vis por,fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.5 | 32 |
| RES_DEEP (ohm.m) | 49.20 | 32 |
| RES_SHALLOW (ohm.m) | 33.39 | 32 |

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 10% Siltstone, 90% fine to coarse, minor very coarse Sandstone, 100% bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 199.0 U |
| mTVDss | -1220.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med gry brn,med-dk gry i/p, aren,tr micmic,tr carb spks,mod hd-frm, sbblky-blky.
- **SANDSTONE** @ ~1710m: lt gry-off wh,lt trnsl brn,clr- trnsl,vf-med,mnr crs,pr srt,sbang-sbrnd, mod sil cmt,mnr lt gry arg mtx,tr carb spks,com disagg grs,fri,pr vis por,fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.9 | 33 |
| RES_DEEP (ohm.m) | 37.62 | 33 |
| RES_SHALLOW (ohm.m) | 25.99 | 33 |

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 20% Siltstone, 80% very fine to coarse, trace very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright |
| Total Gas | 146.0 U |
| mTVDss | -1221.47 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med-dk gry,med gry brn,med brn,aren,rr sid,tr micmic,tr carb spks,mod hd-frm,hd i/p,sbblky-blky.
- **SANDSTONE** @ ~1770m: v lt gry-wh,pl brn,vf-crs, tr crs-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mod sil cmt,mnr wh arg mtx,tr carb spks,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.4 | 32 |
| RES_DEEP (ohm.m) | 64.39 | 32 |
| RES_SHALLOW (ohm.m) | 38.48 | 32 |

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 15% Siltstone, 85% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 214.0 U |
| mTVDss | -1221.64 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med-dk gry,med gry brn,med brn,aren,rr sid,tr micmic,tr carb spks,mod hd-frm,hd i/p,sbblky-blky.
- **SANDSTONE** @ ~1770m: v lt gry-wh,pl brn,vf-crs, tr crs-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mod sil cmt,mnr wh arg mtx,tr carb spks,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.1 | 33 |
| RES_DEEP (ohm.m) | 49.85 | 33 |
| RES_SHALLOW (ohm.m) | 33.99 | 33 |

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: rare siderite in 15% Siltstone, 85% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 242U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 242.0 U |
| mTVDss | -1221.82 m |
| FeCO₃ in Siltstone | rare |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med-dk gry,med gry brn,med brn,aren,rr sid,tr micmic,tr carb spks,mod hd-frm,hd i/p,sbblky-blky.
- **SANDSTONE** @ ~1770m: v lt gry-wh,pl brn,vf-crs, tr crs-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mod sil cmt,mnr wh arg mtx,tr carb spks,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.5 | 33 |
| RES_DEEP (ohm.m) | 40.83 | 33 |
| RES_SHALLOW (ohm.m) | 33.12 | 33 |

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: rare siderite in 10% Siltstone, 90% very fine to medium, trace coarse to very coarse Sandstone, 100% bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% bright |
| Total Gas | 235.0 U |
| mTVDss | -1221.99 m |
| FeCO₃ in Siltstone | rare |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med-dk gry,med gry brn,med brn,aren,rr sid,tr micmic,tr carb spks,mod hd-frm,hd i/p,sbblky-blky.
- **SANDSTONE** @ ~1770m: v lt gry-wh,pl brn,vf-crs, tr crs-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mod sil cmt,mnr wh arg mtx,tr carb spks,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 45.53 | 33 |
| RES_SHALLOW (ohm.m) | 39.21 | 33 |

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 10% Siltstone, 90% very fine to very coarse Sandstone, 100% bright FLUOR in SST. TG 288U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 288.0 U |
| mTVDss | -1222.19 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med-dk gry,med gry brn,med brn,aren,rr sid,tr micmic,tr carb spks,mod hd-frm,hd i/p,sbblky-blky.
- **SANDSTONE** @ ~1770m: v lt gry-wh,pl brn,vf-crs, tr crs-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mod sil cmt,mnr wh arg mtx,tr carb spks,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 33 |
| RES_DEEP (ohm.m) | 41.50 | 33 |
| RES_SHALLOW (ohm.m) | 40.06 | 33 |

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: rare siderite in 5% Siltstone, 95% very fine to medium, trace coarse to very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 253.0 U |
| mTVDss | -1222.40 m |
| FeCO₃ in Siltstone | rare |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med-dk gry,med gry brn,med brn,aren,rr sid,tr micmic,tr carb spks,mod hd-frm,hd i/p,sbblky-blky.
- **SANDSTONE** @ ~1770m: v lt gry-wh,pl brn,vf-crs, tr crs-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mod sil cmt,mnr wh arg mtx,tr carb spks,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 33 |
| RES_DEEP (ohm.m) | 33.26 | 33 |
| RES_SHALLOW (ohm.m) | 33.55 | 33 |

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: trace Siltstone, 100% very fine to fine, rare medium to coarse Sandstone, 100% bright FLUOR in SST. TG 262U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, rare medium to coarse Sandstone, 100% bright |
| Total Gas | 262.0 U |
| mTVDss | -1222.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: 55 SANDSTONE:v lt gry-wh,pl brn,vf-med, PV: 14 tr crs-v crs,mod-pr srt,sbang-sbrnd,tr YP: 17 ang,wk-mod sil cmt,mnr wh arg mtx,tr Gel: 6/8/9 carb spks,fri,mnr disagg,pr vis por,fr-gd WL: 4.8 inf por,fluor.
- **SANDSTONE** @ ~1780m: v lt gry-wh,pl brn-gry brn, clr,trnsl,vf-f,rr med-crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,mnr wh-gry arg mtx, tr carb spks,fri,tr mod hd,com disagg,pr vis por,pr-fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.5 | 32 |
| RES_DEEP (ohm.m) | 33.40 | 32 |
| RES_SHALLOW (ohm.m) | 30.88 | 32 |

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 100% very fine to medium, trace coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 242U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 242.0 U |
| mTVDss | -1222.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: 55 SANDSTONE:v lt gry-wh,pl brn,vf-med, PV: 14 tr crs-v crs,mod-pr srt,sbang-sbrnd,tr YP: 17 ang,wk-mod sil cmt,mnr wh arg mtx,tr Gel: 6/8/9 carb spks,fri,mnr disagg,pr vis por,fr-gd WL: 4.8 inf por,fluor.
- **SANDSTONE** @ ~1780m: v lt gry-wh,pl brn-gry brn, clr,trnsl,vf-f,rr med-crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,mnr wh-gry arg mtx, tr carb spks,fri,tr mod hd,com disagg,pr vis por,pr-fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 36.13 | 33 |
| RES_SHALLOW (ohm.m) | 30.35 | 33 |

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: rare siderite in 15% Siltstone, trace siderite in 85% very fine to fine, trace medium to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% siderite in 85% very fine to fine, trace medium to very coarse Sandstone, 90% moderately bright |
| Total Gas | 174.0 U |
| mTVDss | -1222.99 m |
| FeCO₃ in Siltstone | rare |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: pl-med brn,lt gry-gry brn, wh,clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, sbang-sbrnd,mod sil cmt,mnr sid cmt,mnr gry brn-wh arg mtx,tr carb spks,fri-mod hd,
- **SILTSTONE** @ ~1790m: med brn,med-dk gry brn,dk gry,aren,com sid,tr carb spks,mod hd-hd, frm i/p,sbblky-blky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 33 |
| RES_DEEP (ohm.m) | 34.77 | 33 |
| RES_SHALLOW (ohm.m) | 34.02 | 33 |

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: common siderite in 25% Siltstone, minor siderite in 75% very fine to medium, rare coarse to very coarse Sandstone, 75% moderately bright to bright FLUOR in SST. TG 211U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% nan |
| Total Gas | 211.0 U |
| mTVDss | -1223.16 m |
| FeCO₃ in Siltstone | common |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: pl-med brn,lt gry-gry brn, wh,clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, sbang-sbrnd,mod sil cmt,mnr sid cmt,mnr gry brn-wh arg mtx,tr carb spks,fri-mod hd,
- **SILTSTONE** @ ~1790m: med brn,med-dk gry brn,dk gry,aren,com sid,tr carb spks,mod hd-hd, frm i/p,sbblky-blky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 30.92 | 33 |
| RES_SHALLOW (ohm.m) | 27.23 | 33 |

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: minor siderite in 30% Siltstone, rare siderite in 70% very fine to fine, rare medium to coarse Sandstone, 60% moderately bright to bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 60.0% nan |
| Total Gas | 164.0 U |
| mTVDss | -1223.32 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 33 |
| RES_DEEP (ohm.m) | 25.84 | 33 |
| RES_SHALLOW (ohm.m) | 23.40 | 33 |

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: trace siderite in 10% Siltstone, 90% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 10% Siltstone, 90% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 240.0 U |
| mTVDss | -1223.48 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 32 |
| RES_DEEP (ohm.m) | 25.01 | 32 |
| RES_SHALLOW (ohm.m) | 23.00 | 32 |

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 299U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 299.0 U |
| mTVDss | -1223.53 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 24.54 | 33 |
| RES_SHALLOW (ohm.m) | 22.39 | 33 |

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 275.0 U |
| mTVDss | -1223.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,pl gry brn,v lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,tr med-crs, mod-pr srt,sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr slty lams & carb spks,fri,mnr mod hd,com disagg,v pr
- **SILTSTONE** @ ~1840m: med gry brn,med-lt gry,aren, g/t slty SST i/p,tr-loc com carb spks & micrlams,mnr brn lith spks,frm,mnr mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.4 | 33 |
| RES_DEEP (ohm.m) | 23.43 | 33 |
| RES_SHALLOW (ohm.m) | 17.96 | 33 |

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 100% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 293U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 293.0 U |
| mTVDss | -1223.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,pl gry brn,v lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,tr med-crs, mod-pr srt,sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr slty lams & carb spks,fri,mnr mod hd,com disagg,v pr
- **SILTSTONE** @ ~1840m: med gry brn,med-lt gry,aren, g/t slty SST i/p,tr-loc com carb spks & micrlams,mnr brn lith spks,frm,mnr mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.1 | 33 |
| RES_DEEP (ohm.m) | 24.03 | 33 |
| RES_SHALLOW (ohm.m) | 14.74 | 33 |

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: Trace Siltstone, 100% very fine to fine, rare medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, rare medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 80.0 U |
| mTVDss | -1223.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,pl gry brn,v lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,tr med-crs, mod-pr srt,sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr slty lams & carb spks,fri,mnr mod hd,com disagg,v pr
- **SILTSTONE** @ ~1840m: med gry brn,med-lt gry,aren, g/t slty SST i/p,tr-loc com carb spks & micrlams,mnr brn lith spks,frm,mnr mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.8 | 33 |
| RES_DEEP (ohm.m) | 23.61 | 33 |
| RES_SHALLOW (ohm.m) | 18.29 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% very fine to medium, trace coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 128.0 U |
| mTVDss | -1223.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,pl gry brn,v lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,tr med-crs, mod-pr srt,sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr slty lams & carb spks,fri,mnr mod hd,com disagg,v pr
- **SILTSTONE** @ ~1840m: med gry brn,med-lt gry,aren, g/t slty SST i/p,tr-loc com carb spks & micrlams,mnr brn lith spks,frm,mnr mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 32 |
| RES_DEEP (ohm.m) | 21.32 | 32 |
| RES_SHALLOW (ohm.m) | 18.28 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 25% Siltstone, 75% very fine to fine, trace medium to coarse Sandstone, 50% moderately bright FLUOR in SST. TG 61U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 50.0% medium to coarse Sandstone, 50% moderately bright |
| Total Gas | 61.0 U |
| mTVDss | -1223.57 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,pl gry brn,v lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,tr med-crs, mod-pr srt,sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr slty lams & carb spks,fri,mnr mod hd,com disagg,v pr
- **SILTSTONE** @ ~1840m: med gry brn,med-lt gry,aren, g/t slty SST i/p,tr-loc com carb spks & micrlams,mnr brn lith spks,frm,mnr mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.5 | 33 |
| RES_DEEP (ohm.m) | 21.64 | 33 |
| RES_SHALLOW (ohm.m) | 18.26 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 30% Siltstone, 70% very fine to fine, trace medium to coarse Sandstone, 45% moderately bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 45.0% medium to coarse Sandstone, 45% moderately bright |
| Total Gas | 60.0 U |
| mTVDss | -1223.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,pl gry brn,v lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,tr med-crs, mod-pr srt,sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr slty lams & carb spks,fri,mnr mod hd,com disagg,v pr
- **SILTSTONE** @ ~1840m: med gry brn,med-lt gry,aren, g/t slty SST i/p,tr-loc com carb spks & micrlams,mnr brn lith spks,frm,mnr mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 33 |
| RES_DEEP (ohm.m) | 22.37 | 33 |
| RES_SHALLOW (ohm.m) | 18.77 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 20% Siltstone, 80% very fine to fine, trace medium to coarse Sandstone, 60% moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 60.0% medium to coarse Sandstone, 60% moderately bright |
| Total Gas | 78.0 U |
| mTVDss | -1223.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,pl gry brn,v lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,tr med-crs, mod-pr srt,sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr slty lams & carb spks,fri,mnr mod hd,com disagg,v pr
- **SILTSTONE** @ ~1840m: med gry brn,med-lt gry,aren, g/t slty SST i/p,tr-loc com carb spks & micrlams,mnr brn lith spks,frm,mnr mod hd,sbblky.
- _(13 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 33 |
| RES_DEEP (ohm.m) | 23.02 | 33 |
| RES_SHALLOW (ohm.m) | 18.89 | 33 |

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 25% Siltstone, 75% very fine to fine Sandstone, 55% moderately bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 55.00000000000001% nan |
| Total Gas | 74.0 U |
| mTVDss | -1223.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: lt gry,lt gry brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-loc mod sil cmt,mnr-loc com gry slty-wh arg mtx,tr carb spks & flks,tr lith incls,fri,mnr mod hd,com disagg,pr-
- **SILTSTONE** @ ~1870m: med gry,med gry brn,med lt gry,g/t aren SST i/p,mnr carb spks & flks, tr brn lith incls,tr micmic,frm,mnr mod hd,sbblky. SURVEY @ 1873.7m
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 33 |
| RES_DEEP (ohm.m) | 22.54 | 33 |
| RES_SHALLOW (ohm.m) | 17.86 | 33 |

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 35% Siltstone, 65% very fine to fine Sandstone, 55% moderately bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 65.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 55.00000000000001% nan |
| Total Gas | 63.0 U |
| mTVDss | -1223.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: lt gry,lt gry brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-loc mod sil cmt,mnr-loc com gry slty-wh arg mtx,tr carb spks & flks,tr lith incls,fri,mnr mod hd,com disagg,pr-
- **SILTSTONE** @ ~1870m: med gry,med gry brn,med lt gry,g/t aren SST i/p,mnr carb spks & flks, tr brn lith incls,tr micmic,frm,mnr mod hd,sbblky. SURVEY @ 1873.7m
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 32 |
| RES_DEEP (ohm.m) | 23.54 | 32 |
| RES_SHALLOW (ohm.m) | 18.95 | 32 |

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 20% Siltstone, 80% very fine to medium, trace coarse Sandstone, 75% moderately bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% coarse Sandstone, 75% moderately bright |
| Total Gas | 95.0 U |
| mTVDss | -1223.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: lt gry,lt gry brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-loc mod sil cmt,mnr-loc com gry slty-wh arg mtx,tr carb spks & flks,tr lith incls,fri,mnr mod hd,com disagg,pr-
- **SILTSTONE** @ ~1870m: med gry,med gry brn,med lt gry,g/t aren SST i/p,mnr carb spks & flks, tr brn lith incls,tr micmic,frm,mnr mod hd,sbblky. SURVEY @ 1873.7m
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 33 |
| RES_DEEP (ohm.m) | 21.88 | 33 |
| RES_SHALLOW (ohm.m) | 17.92 | 33 |

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 20% Siltstone, 80% very fine to medium, trace coarse Sandstone, 75% moderately bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% coarse Sandstone, 75% moderately bright |
| Total Gas | 91.0 U |
| mTVDss | -1223.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: lt gry,lt gry brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-loc mod sil cmt,mnr-loc com gry slty-wh arg mtx,tr carb spks & flks,tr lith incls,fri,mnr mod hd,com disagg,pr-
- **SILTSTONE** @ ~1870m: med gry,med gry brn,med lt gry,g/t aren SST i/p,mnr carb spks & flks, tr brn lith incls,tr micmic,frm,mnr mod hd,sbblky. SURVEY @ 1873.7m
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 33 |
| RES_DEEP (ohm.m) | 21.08 | 33 |
| RES_SHALLOW (ohm.m) | 16.92 | 33 |

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 10% Siltstone, 90% very fine to medium, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 116U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 116.0 U |
| mTVDss | -1223.29 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1870m: med gry,med gry brn,med lt gry,g/t aren SST i/p,mnr carb spks & flks, tr brn lith incls,tr micmic,frm,mnr mod hd,sbblky. SURVEY @ 1873.7m
- **SANDSTONE** @ ~1870m: lt gry,med-lt gry,lt gry brn, wh,clr,trnsl,vf-med,rr crs,mod-pr srt, sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr carb spks,tr mic flks, fri,tr mod hd,com disagg,pr vis por,fr-
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 24.69 | 33 |
| RES_SHALLOW (ohm.m) | 20.14 | 33 |

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 15% Siltstone, 85% very fine to fine, minor medium Sandstone, 100% moderately bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 118.0 U |
| mTVDss | -1223.28 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1870m: med gry,med gry brn,med lt gry,g/t aren SST i/p,mnr carb spks & flks, tr brn lith incls,tr micmic,frm,mnr mod hd,sbblky. SURVEY @ 1873.7m
- **SANDSTONE** @ ~1870m: lt gry,med-lt gry,lt gry brn, wh,clr,trnsl,vf-med,rr crs,mod-pr srt, sbang-sbrnd,wk-loc mod sil cmt,mnr gry brn-wh arg mtx,tr carb spks,tr mic flks, fri,tr mod hd,com disagg,pr vis por,fr-
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 33 |
| RES_DEEP (ohm.m) | 25.84 | 33 |
| RES_SHALLOW (ohm.m) | 20.78 | 33 |

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 10% Siltstone, 90% very fine to fine, minor medium Sandstone, 100% moderately bright FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 119.0 U |
| mTVDss | -1223.27 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.6 | 32 |
| RES_DEEP (ohm.m) | 31.43 | 32 |
| RES_SHALLOW (ohm.m) | 23.53 | 32 |

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 10% Siltstone, 90% very fine to fine, rare medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 220.0 U |
| mTVDss | -1223.24 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 31.46 | 33 |
| RES_SHALLOW (ohm.m) | 23.69 | 33 |

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 10% Siltstone, 90% very fine to medium, rare coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 145.0 U |
| mTVDss | -1223.19 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.5 | 33 |
| RES_DEEP (ohm.m) | 43.08 | 33 |
| RES_SHALLOW (ohm.m) | 29.32 | 33 |

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 10% Siltstone, 90% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 163.0 U |
| mTVDss | -1223.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl brn,lt-med gry brn,lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,fri-mod hd,mnr disagg,v pr-pr vis por,fr inf por,
- **SILTSTONE** @ ~1920m: med gry-gry brn,med lt gry, aren,g/t slty SST i/p,tr-loc com sandy lams,mnr micmic,mnr carb spks,tr brn lith spks,frm,sbblky. 74 / 6 / 4 / 7 / 9 122 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 51.83 | 33 |
| RES_SHALLOW (ohm.m) | 37.53 | 33 |

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 201.0 U |
| mTVDss | -1223.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl brn,lt-med gry brn,lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,fri-mod hd,mnr disagg,v pr-pr vis por,fr inf por,
- **SILTSTONE** @ ~1920m: med gry-gry brn,med lt gry, aren,g/t slty SST i/p,tr-loc com sandy lams,mnr micmic,mnr carb spks,tr brn lith spks,frm,sbblky. 74 / 6 / 4 / 7 / 9 122 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.5 | 33 |
| RES_DEEP (ohm.m) | 52.22 | 33 |
| RES_SHALLOW (ohm.m) | 36.55 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 15% Siltstone, 85% very fine to fine, rare medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 203.0 U |
| mTVDss | -1223.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl brn,lt-med gry brn,lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,fri-mod hd,mnr disagg,v pr-pr vis por,fr inf por,
- **SILTSTONE** @ ~1920m: med gry-gry brn,med lt gry, aren,g/t slty SST i/p,tr-loc com sandy lams,mnr micmic,mnr carb spks,tr brn lith spks,frm,sbblky. 74 / 6 / 4 / 7 / 9 122 U
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.7 | 33 |
| RES_DEEP (ohm.m) | 40.86 | 33 |
| RES_SHALLOW (ohm.m) | 30.32 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 20% Siltstone, 80% very fine to fine, rare medium Sandstone, 80% moderately bright FLUOR in SST. TG 127U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 127.0 U |
| mTVDss | -1222.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl brn,lt-med gry brn,lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,fri-mod hd,mnr disagg,v pr-pr vis por,fr inf por,
- **SILTSTONE** @ ~1920m: med gry-gry brn,med lt gry, aren,g/t slty SST i/p,tr-loc com sandy lams,mnr micmic,mnr carb spks,tr brn lith spks,frm,sbblky. 74 / 6 / 4 / 7 / 9 122 U
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 32 |
| RES_DEEP (ohm.m) | 34.34 | 32 |
| RES_SHALLOW (ohm.m) | 26.60 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 25% Siltstone, 75% very fine to fine Sandstone, 75% moderately bright FLUOR in SST. TG 116U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% nan |
| Total Gas | 116.0 U |
| mTVDss | -1222.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl brn,lt-med gry brn,lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,fri-mod hd,mnr disagg,v pr-pr vis por,fr inf por,
- **SILTSTONE** @ ~1920m: med gry-gry brn,med lt gry, aren,g/t slty SST i/p,tr-loc com sandy lams,mnr micmic,mnr carb spks,tr brn lith spks,frm,sbblky. 74 / 6 / 4 / 7 / 9 122 U
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.0 | 33 |
| RES_DEEP (ohm.m) | 28.16 | 33 |
| RES_SHALLOW (ohm.m) | 21.74 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 30% Siltstone, 70% very fine to fine Sandstone, 75% moderately bright FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% nan |
| Total Gas | 121.0 U |
| mTVDss | -1222.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl brn,lt-med gry brn,lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,fri-mod hd,mnr disagg,v pr-pr vis por,fr inf por,
- **SILTSTONE** @ ~1920m: med gry-gry brn,med lt gry, aren,g/t slty SST i/p,tr-loc com sandy lams,mnr micmic,mnr carb spks,tr brn lith spks,frm,sbblky. 74 / 6 / 4 / 7 / 9 122 U
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 24.07 | 33 |
| RES_SHALLOW (ohm.m) | 19.47 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 40% Siltstone, 60% very fine to fine, g/t slty SST, trace medium to coarse Sandstone, 60% moderately bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine, g/t slty SST, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 60.0% medium to coarse Sandstone, 60% moderately bright |
| Total Gas | 130.0 U |
| mTVDss | -1222.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl brn,lt-med gry brn,lt gry, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,fri-mod hd,mnr disagg,v pr-pr vis por,fr inf por,
- **SILTSTONE** @ ~1920m: med gry-gry brn,med lt gry, aren,g/t slty SST i/p,tr-loc com sandy lams,mnr micmic,mnr carb spks,tr brn lith spks,frm,sbblky. 74 / 6 / 4 / 7 / 9 122 U
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 33 |
| RES_DEEP (ohm.m) | 23.25 | 33 |
| RES_SHALLOW (ohm.m) | 19.02 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 30% Siltstone, trace siderite in 70% very fine to fine, g/t slty SST Sandstone, 70% moderately bright FLUOR in SST. TG 117U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine, g/t slty SST (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% siderite in 70% very fine to fine, g/t slty SST Sandstone, 70% moderately bright |
| Total Gas | 117.0 U |
| mTVDss | -1222.59 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1930m: pl brn-med brn,lt-med gry brn,lt gry,clr,trnsl,vf-f,g/t aren SLTST i/p, wl srt,sbang-sbrnd,wk-mod sil cmt,tr sid cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,mod hd-fri,mnr hd,mnr disagg,v
- **SANDSTONE** @ ~1930m: lt gry brn,pl-lt brn,clr,trnsl, vf-crs,pr srt,sbrnd-sbang,wk-loc mod sil cmt,mnr gry brn slty mtx,tr-loc com slty 73 / 5 / 4 / 7 / 11 lams,tr carb & lith spks,fri-mod hd i/p, 1940 com disagg,pr vis por,fr-gd inf por,
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 33 |
| RES_DEEP (ohm.m) | 23.78 | 33 |
| RES_SHALLOW (ohm.m) | 19.77 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 20% Siltstone, 80% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 175.0 U |
| mTVDss | -1222.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1930m: pl brn-med brn,lt-med gry brn,lt gry,clr,trnsl,vf-f,g/t aren SLTST i/p, wl srt,sbang-sbrnd,wk-mod sil cmt,tr sid cmt,mnr gry brn arg mtx,tr carb spks,tr mic flks,mod hd-fri,mnr hd,mnr disagg,v
- **SANDSTONE** @ ~1930m: lt gry brn,pl-lt brn,clr,trnsl, vf-crs,pr srt,sbrnd-sbang,wk-loc mod sil cmt,mnr gry brn slty mtx,tr-loc com slty 73 / 5 / 4 / 7 / 11 lams,tr carb & lith spks,fri-mod hd i/p, 1940 com disagg,pr vis por,fr-gd inf por,
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 32 |
| RES_DEEP (ohm.m) | 28.25 | 32 |
| RES_SHALLOW (ohm.m) | 21.11 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 10% Siltstone, 90% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright |
| Total Gas | 206.0 U |
| mTVDss | -1222.35 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.9 | 33 |
| RES_DEEP (ohm.m) | 35.54 | 33 |
| RES_SHALLOW (ohm.m) | 27.29 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 242U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 242.0 U |
| mTVDss | -1222.25 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 33 |
| RES_DEEP (ohm.m) | 41.32 | 33 |
| RES_SHALLOW (ohm.m) | 35.17 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 100% very fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 217U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 217.0 U |
| mTVDss | -1222.15 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 33 |
| RES_DEEP (ohm.m) | 41.41 | 33 |
| RES_SHALLOW (ohm.m) | 39.89 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 231U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 231.0 U |
| mTVDss | -1222.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,mod- wk sil cmt,com lt gry brn slty mtx,tr carb lams & spks,mod hd-fri,tr disagg grs,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 33 |
| RES_DEEP (ohm.m) | 40.89 | 33 |
| RES_SHALLOW (ohm.m) | 39.35 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 0% Siltstone, 100% very fine to coarse, minor very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 242U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 242.0 U |
| mTVDss | -1221.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,mod- wk sil cmt,com lt gry brn slty mtx,tr carb lams & spks,mod hd-fri,tr disagg grs,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.4 | 32 |
| RES_DEEP (ohm.m) | 41.36 | 32 |
| RES_SHALLOW (ohm.m) | 38.08 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 0% Siltstone, 100% very fine to medium, minor coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 210.0 U |
| mTVDss | -1221.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,mod- wk sil cmt,com lt gry brn slty mtx,tr carb lams & spks,mod hd-fri,tr disagg grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~1990m: med gry brn,med-dk gry, aren,g/t SST i/p,tr arg,tr micmic,mnr carb spks,mod hd-hd,sbblky-blky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.8 | 33 |
| RES_DEEP (ohm.m) | 40.69 | 33 |
| RES_SHALLOW (ohm.m) | 38.83 | 33 |

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 0% Siltstone, 100% very fine to medium, common coarse to very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, common coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 179.0 U |
| mTVDss | -1221.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,mod- wk sil cmt,com lt gry brn slty mtx,tr carb lams & spks,mod hd-fri,tr disagg grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~1990m: med gry brn,med-dk gry, aren,g/t SST i/p,tr arg,tr micmic,mnr carb spks,mod hd-hd,sbblky-blky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 33 |
| RES_DEEP (ohm.m) | 45.27 | 33 |
| RES_SHALLOW (ohm.m) | 40.69 | 33 |

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 0% Siltstone, 100% very fine to coarse, minor very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 177.0 U |
| mTVDss | -1221.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,mod- wk sil cmt,com lt gry brn slty mtx,tr carb lams & spks,mod hd-fri,tr disagg grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~1990m: med gry brn,med-dk gry, aren,g/t SST i/p,tr arg,tr micmic,mnr carb spks,mod hd-hd,sbblky-blky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 42.37 | 33 |
| RES_SHALLOW (ohm.m) | 34.57 | 33 |

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 20% Siltstone, 80% very fine to coarse, trace very coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% very coarse Sandstone, 80% moderately bright to bright |
| Total Gas | 172.0 U |
| mTVDss | -1221.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,mod- wk sil cmt,com lt gry brn slty mtx,tr carb lams & spks,mod hd-fri,tr disagg grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~1990m: med gry brn,med-dk gry, aren,g/t SST i/p,tr arg,tr micmic,mnr carb spks,mod hd-hd,sbblky-blky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.3 | 33 |
| RES_DEEP (ohm.m) | 44.39 | 33 |
| RES_SHALLOW (ohm.m) | 36.81 | 33 |

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 20% Siltstone, 80% very fine to coarse, minor very coarse Sandstone, 90% moderately bright to bright FLUOR in SST. TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 183.0 U |
| mTVDss | -1221.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,mod- wk sil cmt,com lt gry brn slty mtx,tr carb lams & spks,mod hd-fri,tr disagg grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~1990m: med gry brn,med-dk gry, aren,g/t SST i/p,tr arg,tr micmic,mnr carb spks,mod hd-hd,sbblky-blky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 32 |
| RES_DEEP (ohm.m) | 45.83 | 32 |
| RES_SHALLOW (ohm.m) | 38.10 | 32 |

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 10% Siltstone, 90% very fine to coarse, trace very coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% very coarse Sandstone, 80% moderately bright to bright |
| Total Gas | 160.0 U |
| mTVDss | -1222.08 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1990m: med gry brn,med-dk gry, aren,g/t SST i/p,tr arg,tr micmic,mnr carb spks,mod hd-hd,sbblky-blky.
- **SANDSTONE** @ ~1990m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbrnd,occ sbang, mod sil cmt,mnr-com lt gry brn slty mtx, tr carb spks & lams,fri-mod hd,pr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 33 |
| RES_DEEP (ohm.m) | 43.84 | 33 |
| RES_SHALLOW (ohm.m) | 37.16 | 33 |

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 191U

Looks like we are back in the good sands.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 191.0 U |
| mTVDss | -1222.16 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1990m: med gry brn,med-dk gry, aren,g/t SST i/p,tr arg,tr micmic,mnr carb spks,mod hd-hd,sbblky-blky.
- **SANDSTONE** @ ~1990m: lt trnsl brn,lt gry,clr-trnsl, vf-crs,tr v crs,pr srt,sbrnd,occ sbang, mod sil cmt,mnr-com lt gry brn slty mtx, tr carb spks & lams,fri-mod hd,pr vis por, fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.4 | 33 |
| RES_DEEP (ohm.m) | 33.95 | 33 |
| RES_SHALLOW (ohm.m) | 31.01 | 33 |

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 0% Siltstone, 100% very fine to very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 188.0 U |
| mTVDss | -1222.26 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med-dk gry,med gry brn, aren,g/t SST i/p,tr micmic,tr carb spks, mod hd,blky-sbblky. ADD 1% STARGLIDE TO MUD.
- **SANDSTONE** @ ~2020m: lt brn gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs-v crs,pr srt,sbang- sbrnd,wk sil cmt,com lt brn gry arg mtx, tr carb spks & lams,fri,tr disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.2 | 33 |
| RES_DEEP (ohm.m) | 38.36 | 33 |
| RES_SHALLOW (ohm.m) | 33.69 | 33 |

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 0% Siltstone, 100% very fine to coarse, common very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, common very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 179.0 U |
| mTVDss | -1222.39 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med-dk gry,med gry brn, aren,g/t SST i/p,tr micmic,tr carb spks, mod hd,blky-sbblky. ADD 1% STARGLIDE TO MUD.
- **SANDSTONE** @ ~2020m: lt brn gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs-v crs,pr srt,sbang- sbrnd,wk sil cmt,com lt brn gry arg mtx, tr carb spks & lams,fri,tr disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 33 |
| RES_DEEP (ohm.m) | 38.31 | 33 |
| RES_SHALLOW (ohm.m) | 30.82 | 33 |

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 5% Siltstone, 95% very fine to coarse Sandstone, 80% moderately bright to pale FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 186.0 U |
| mTVDss | -1222.52 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med-dk gry,med gry brn, aren,g/t SST i/p,tr micmic,tr carb spks, mod hd,blky-sbblky. ADD 1% STARGLIDE TO MUD.
- **SANDSTONE** @ ~2020m: lt brn gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs-v crs,pr srt,sbang- sbrnd,wk sil cmt,com lt brn gry arg mtx, tr carb spks & lams,fri,tr disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 32 |
| RES_DEEP (ohm.m) | 37.42 | 32 |
| RES_SHALLOW (ohm.m) | 28.35 | 32 |

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 5% Siltstone, 95% very fine to medium, trace coarse to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% coarse to very coarse Sandstone, 90% moderately bright |
| Total Gas | 155.0 U |
| mTVDss | -1222.65 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med-dk gry,med gry brn, aren,g/t SST i/p,tr micmic,tr carb spks, mod hd,blky-sbblky. ADD 1% STARGLIDE TO MUD.
- **SANDSTONE** @ ~2020m: lt brn gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs-v crs,pr srt,sbang- sbrnd,wk sil cmt,com lt brn gry arg mtx, tr carb spks & lams,fri,tr disagg,pr vis por,fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.2 | 33 |
| RES_DEEP (ohm.m) | 35.11 | 33 |
| RES_SHALLOW (ohm.m) | 28.64 | 33 |

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 80% moderately bright to pale FLUOR in SST. TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% coarse Sandstone, 80% moderately bright to pale |
| Total Gas | 197.0 U |
| mTVDss | -1222.76 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med-dk gry,med gry brn, aren,g/t SST i/p,tr micmic,tr carb spks, mod hd,blky-sbblky. ADD 1% STARGLIDE TO MUD.
- **SANDSTONE** @ ~2020m: lt brn gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs-v crs,pr srt,sbang- sbrnd,wk sil cmt,com lt brn gry arg mtx, tr carb spks & lams,fri,tr disagg,pr vis por,fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 33 |
| RES_DEEP (ohm.m) | 32.44 | 33 |
| RES_SHALLOW (ohm.m) | 27.50 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 188.0 U |
| mTVDss | -1222.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med-dk gry,med gry brn, aren,g/t SST i/p,tr micmic,tr carb spks, mod hd,blky-sbblky. ADD 1% STARGLIDE TO MUD.
- **SANDSTONE** @ ~2020m: lt brn gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs-v crs,pr srt,sbang- sbrnd,wk sil cmt,com lt brn gry arg mtx, tr carb spks & lams,fri,tr disagg,pr vis por,fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 31.55 | 33 |
| RES_SHALLOW (ohm.m) | 28.68 | 33 |

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 186.0 U |
| mTVDss | -1222.86 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med-dk gry,aren, g/t SST i/p,micmic i/p,tr carb spks,frm- 73 / 6 / 5 / 7 / 9 232 U mod hd,sbblky-blky. SURVEY @ 2047.0m INC: 89.7° AZI: 221.0°G
- **SANDSTONE** @ ~2040m: lt trnsl brn,lt brn gry,tr clr- trnsl,vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt,com lt gry brn slty mtx,tr carb spks &
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.8 | 33 |
| RES_DEEP (ohm.m) | 38.07 | 33 |
| RES_SHALLOW (ohm.m) | 30.65 | 33 |

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 5% Siltstone, 95% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 230.0 U |
| mTVDss | -1222.92 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med-dk gry,aren, g/t SST i/p,micmic i/p,tr carb spks,frm- 73 / 6 / 5 / 7 / 9 232 U mod hd,sbblky-blky. SURVEY @ 2047.0m INC: 89.7° AZI: 221.0°G
- **SANDSTONE** @ ~2040m: lt trnsl brn,lt brn gry,tr clr- trnsl,vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt,com lt gry brn slty mtx,tr carb spks &
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 33 |
| RES_DEEP (ohm.m) | 44.50 | 33 |
| RES_SHALLOW (ohm.m) | 37.37 | 33 |

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 5% Siltstone, 95% very fine to fine Sandstone, 80% moderately bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 190.0 U |
| mTVDss | -1222.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med-dk gry,aren, g/t SST i/p,micmic i/p,tr carb spks,frm- 73 / 6 / 5 / 7 / 9 232 U mod hd,sbblky-blky. SURVEY @ 2047.0m INC: 89.7° AZI: 221.0°G
- **SANDSTONE** @ ~2040m: lt trnsl brn,lt brn gry,tr clr- trnsl,vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt,com lt gry brn slty mtx,tr carb spks &
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 32 |
| RES_DEEP (ohm.m) | 41.64 | 32 |
| RES_SHALLOW (ohm.m) | 36.28 | 32 |

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 5% Siltstone, 95% very fine to fine Sandstone, 90% moderately bright FLUOR in SST. TG 211U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | p-fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 211.0 U |
| mTVDss | -1222.97 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med-dk gry,aren, g/t SST i/p,micmic i/p,tr carb spks,frm- 73 / 6 / 5 / 7 / 9 232 U mod hd,sbblky-blky. SURVEY @ 2047.0m INC: 89.7° AZI: 221.0°G
- **SANDSTONE** @ ~2040m: lt trnsl brn,lt brn gry,tr clr- trnsl,vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt,com lt gry brn slty mtx,tr carb spks &
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 39.79 | 33 |
| RES_SHALLOW (ohm.m) | 35.59 | 33 |

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 10% Siltstone, 90% very fine to fine Sandstone, 90% moderately bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | p-fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 195.0 U |
| mTVDss | -1223.00 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med brn,med-dk gry brn, aren,g/t SST i/p,micmic i/p,tr carb spks, mod hd,sbblky-sbfiss. 73 / 6 / 5 / 7 / 9 208 U
- **SANDSTONE** @ ~2070m: lt brn gry,lt trnsl brn,clr- trnsl,vf-crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 51.21 | 33 |
| RES_SHALLOW (ohm.m) | 43.65 | 33 |

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 0% Siltstone, 100% very fine to medium, common coarse Sandstone, 100% moderately bright FLUOR in SST. TG 219U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, common coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 219.0 U |
| mTVDss | -1223.02 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med brn,med-dk gry brn, aren,g/t SST i/p,micmic i/p,tr carb spks, mod hd,sbblky-sbfiss. 73 / 6 / 5 / 7 / 9 208 U
- **SANDSTONE** @ ~2070m: lt brn gry,lt trnsl brn,clr- trnsl,vf-crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.2 | 33 |
| RES_DEEP (ohm.m) | 44.86 | 33 |
| RES_SHALLOW (ohm.m) | 39.59 | 33 |

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 10% Siltstone, 90% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 172.0 U |
| mTVDss | -1223.01 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med brn,med-dk gry brn, aren,g/t SST i/p,micmic i/p,tr carb spks, mod hd,sbblky-sbfiss. 73 / 6 / 5 / 7 / 9 208 U
- **SANDSTONE** @ ~2070m: lt brn gry,lt trnsl brn,clr- trnsl,vf-crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 41.80 | 33 |
| RES_SHALLOW (ohm.m) | 38.57 | 33 |

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 5% Siltstone, 95% very fine to medium, minor coarse Sandstone, 100% moderately bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 207.0 U |
| mTVDss | -1222.99 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med brn,med-dk gry brn, aren,g/t SST i/p,micmic i/p,tr carb spks, mod hd,sbblky-sbfiss. 73 / 6 / 5 / 7 / 9 208 U
- **SANDSTONE** @ ~2070m: lt brn gry,lt trnsl brn,clr- trnsl,vf-crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 32 |
| RES_DEEP (ohm.m) | 36.19 | 32 |
| RES_SHALLOW (ohm.m) | 32.05 | 32 |

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 198.0 U |
| mTVDss | -1222.98 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med brn,med-dk gry brn, aren,g/t SST i/p,micmic i/p,tr carb spks, mod hd,sbblky-sbfiss. 73 / 6 / 5 / 7 / 9 208 U
- **SANDSTONE** @ ~2070m: lt brn gry,lt trnsl brn,clr- trnsl,vf-crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 33 |
| RES_DEEP (ohm.m) | 36.41 | 33 |
| RES_SHALLOW (ohm.m) | 30.93 | 33 |

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 182U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 182.0 U |
| mTVDss | -1222.96 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med brn,med-dk gry brn, aren,g/t SST i/p,micmic i/p,tr carb spks, mod hd,sbblky-sbfiss. 73 / 6 / 5 / 7 / 9 208 U
- **SANDSTONE** @ ~2070m: lt brn gry,lt trnsl brn,clr- trnsl,vf-crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.5 | 33 |
| RES_DEEP (ohm.m) | 41.35 | 33 |
| RES_SHALLOW (ohm.m) | 33.99 | 33 |

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 0% Siltstone, 100% very fine to coarse, minor very coarse Sandstone, 90% moderately br to bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 192.0 U |
| mTVDss | -1222.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: lt brn gry,lt trnsl brn,clr- trnsl,vf-f,tr med-crs,mod srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.
- **SANDSTONE** @ ~2080m: lt trnsl brn,clr-trnsl,lt gry, vf-crs,mnr crs,pr srt,sbrnd-sbang,wk- 2090 mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri,mnr disagg grs,pr vis por, fr inf por,fluor.
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.3 | 33 |
| RES_DEEP (ohm.m) | 47.21 | 33 |
| RES_SHALLOW (ohm.m) | 42.60 | 33 |

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 184.0 U |
| mTVDss | -1222.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: lt brn gry,lt trnsl brn,clr- trnsl,vf-f,tr med-crs,mod srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri-mod hd,mnr disagg grs,pr vis por,fr-pr inf por,fluor.
- **SANDSTONE** @ ~2080m: lt trnsl brn,clr-trnsl,lt gry, vf-crs,mnr crs,pr srt,sbrnd-sbang,wk- 2090 mod sil cmt,com lt gry arg mtx,tr carb spks & lams,fri,mnr disagg grs,pr vis por, fr inf por,fluor.
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 33 |
| RES_DEEP (ohm.m) | 51.08 | 33 |
| RES_SHALLOW (ohm.m) | 50.37 | 33 |

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 0% Siltstone, 100% fine to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 212U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% nan |
| Total Gas | 212.0 U |
| mTVDss | -1222.89 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 32 |
| RES_DEEP (ohm.m) | 47.34 | 32 |
| RES_SHALLOW (ohm.m) | 41.09 | 32 |

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 0% Siltstone, 100% very fine to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% nan |
| Total Gas | 206.0 U |
| mTVDss | -1222.87 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 33 |
| RES_DEEP (ohm.m) | 45.79 | 33 |
| RES_SHALLOW (ohm.m) | 43.51 | 33 |

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Siltstone, 100% very fine to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 227U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% nan |
| Total Gas | 227.0 U |
| mTVDss | -1222.88 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.0 | 33 |
| RES_DEEP (ohm.m) | 50.34 | 33 |
| RES_SHALLOW (ohm.m) | 47.77 | 33 |

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 0% Siltstone, 100% very fine to medium, common coarse to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, common coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% nan |
| Total Gas | 195.0 U |
| mTVDss | -1222.89 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 33 |
| RES_DEEP (ohm.m) | 46.67 | 33 |
| RES_SHALLOW (ohm.m) | 40.01 | 33 |

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: 10% Siltstone, 90% very fine to coarse Sandstone, 90% moderately bright to pale FLUOR in SST. TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 90.0% nan |
| Total Gas | 197.0 U |
| mTVDss | -1222.91 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.4 | 33 |
| RES_DEEP (ohm.m) | 43.78 | 33 |
| RES_SHALLOW (ohm.m) | 39.20 | 33 |

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: 10% Siltstone, 90% very fine to verycoarse Sandstone, 90% moderately bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to verycoarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% nan |
| Total Gas | 199.0 U |
| mTVDss | -1222.93 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 32 |
| RES_DEEP (ohm.m) | 47.16 | 32 |
| RES_SHALLOW (ohm.m) | 44.56 | 32 |

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 5% Siltstone, 95% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 244U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 244.0 U |
| mTVDss | -1222.99 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 33 |
| RES_DEEP (ohm.m) | 39.71 | 33 |
| RES_SHALLOW (ohm.m) | 37.41 | 33 |

---

### 2135 m MD — Interval 2132.5 – 2137.0 m

**Sample Description (spreadsheet):** Sample 2135m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 220.0 U |
| mTVDss | -1223.05 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.2 | 30 |
| RES_DEEP (ohm.m) | 38.61 | 30 |
| RES_SHALLOW (ohm.m) | 31.29 | 30 |

---

### 2139 m MD — Interval 2137.0 – 2139.5 m

**Sample Description (spreadsheet):** Sample 2139m: 5% Siltstone, 95% very fine to fine, common medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, common medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 185.0 U |
| mTVDss | -1223.09 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.5 | 16 |
| RES_DEEP (ohm.m) | 40.28 | 16 |
| RES_SHALLOW (ohm.m) | 28.00 | 16 |

---

### 2140 m MD — Interval 2139.5 – 2142.5 m

**Sample Description (spreadsheet):** Spot Sample 2140m: 100% very fine to fine, rare medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 133U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 133.0 U |
| mTVDss | -1223.10 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 20 |
| RES_DEEP (ohm.m) | 37.22 | 20 |
| RES_SHALLOW (ohm.m) | 27.46 | 20 |

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 177.0 U |
| mTVDss | -1223.17 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 38.77 | 33 |
| RES_SHALLOW (ohm.m) | 30.36 | 33 |

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: 10% Siltstone, 90% very fine to fine, minor medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 179.0 U |
| mTVDss | -1223.24 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 33 |
| RES_DEEP (ohm.m) | 44.13 | 33 |
| RES_SHALLOW (ohm.m) | 35.20 | 33 |

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 20% Siltstone, 80% very fine to fine, minor medium to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 142U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, minor medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% nan |
| Total Gas | 142.0 U |
| mTVDss | -1223.31 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 32 |
| RES_DEEP (ohm.m) | 46.24 | 32 |
| RES_SHALLOW (ohm.m) | 33.83 | 32 |

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 25% Siltstone, 75% very fine to fine, trace medium to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 143U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine, trace medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% medium to very coarse Sandstone, 90% moderately bright |
| Total Gas | 143.0 U |
| mTVDss | -1223.39 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 33 |
| RES_DEEP (ohm.m) | 53.40 | 33 |
| RES_SHALLOW (ohm.m) | 38.68 | 33 |

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 25% Siltstone, 75% very fine to fine, trace medium to very coarse Sandstone, 85% moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine, trace medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 85.0% medium to very coarse Sandstone, 85% moderately bright |
| Total Gas | 151.0 U |
| mTVDss | -1223.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2180m: med lt gry-med gry,med gry brn,aren,mnr sandy lams,tr carb & lith spks,tr micmic,frm-mod hd,sbblky. SURVEY @ 2181.7m INC: 90.6° AZI: 221.2°G
- **SANDSTONE** @ ~2180m: clr,trnsl,pl brn,lt gry brn,vf- f,rr med-v crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr gry brn slty mtx,tr slty lams,tr carb spks,disagg,fri,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 33 |
| RES_DEEP (ohm.m) | 49.61 | 33 |
| RES_SHALLOW (ohm.m) | 37.64 | 33 |

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 25% Siltstone, 75% very fine to medium, trace coarse Sandstone, 80% moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% coarse Sandstone, 80% moderately bright |
| Total Gas | 146.0 U |
| mTVDss | -1223.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2180m: med lt gry-med gry,med gry brn,aren,mnr sandy lams,tr carb & lith spks,tr micmic,frm-mod hd,sbblky. SURVEY @ 2181.7m INC: 90.6° AZI: 221.2°G
- **SANDSTONE** @ ~2180m: clr,trnsl,pl brn,lt gry brn,vf- f,rr med-v crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr gry brn slty mtx,tr slty lams,tr carb spks,disagg,fri,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 44.38 | 33 |
| RES_SHALLOW (ohm.m) | 31.79 | 33 |

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 25% Siltstone, 75% very fine to medium, trace coarse to very coarse Sandstone, 85% moderately bright to bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 85.0% coarse to very coarse Sandstone, 85% moderately bright to bright |
| Total Gas | 150.0 U |
| mTVDss | -1223.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2180m: med lt gry-med gry,med gry brn,aren,mnr sandy lams,tr carb & lith spks,tr micmic,frm-mod hd,sbblky. SURVEY @ 2181.7m INC: 90.6° AZI: 221.2°G
- **SANDSTONE** @ ~2180m: clr,trnsl,pl brn,lt gry brn,vf- f,rr med-v crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr gry brn slty mtx,tr slty lams,tr carb spks,disagg,fri,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 44.53 | 33 |
| RES_SHALLOW (ohm.m) | 29.25 | 33 |

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 15% Siltstone, 85% very fine to medium, trace coarse Sandstone, 75% moderately bright to dull FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 75.0% coarse Sandstone, 75% moderately bright to dull |
| Total Gas | 125.0 U |
| mTVDss | -1223.45 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2180m: med lt gry-med gry,med gry brn,aren,mnr sandy lams,tr carb & lith spks,tr micmic,frm-mod hd,sbblky. SURVEY @ 2181.7m INC: 90.6° AZI: 221.2°G
- **SANDSTONE** @ ~2180m: clr,trnsl,pl brn,lt gry brn,vf- f,rr med-v crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr gry brn slty mtx,tr slty lams,tr carb spks,disagg,fri,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 32 |
| RES_DEEP (ohm.m) | 46.87 | 32 |
| RES_SHALLOW (ohm.m) | 37.30 | 32 |

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 10% Siltstone, 90% very fine to fine, trace medium to coarse Sandstone, 70% moderately bright to dull FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 70.0% medium to coarse Sandstone, 70% moderately bright to dull |
| Total Gas | 93.0 U |
| mTVDss | -1223.41 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2180m: med lt gry-med gry,med gry brn,aren,mnr sandy lams,tr carb & lith spks,tr micmic,frm-mod hd,sbblky. SURVEY @ 2181.7m INC: 90.6° AZI: 221.2°G
- **SANDSTONE** @ ~2180m: clr,trnsl,pl brn,lt gry brn,vf- f,rr med-v crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr gry brn slty mtx,tr slty lams,tr carb spks,disagg,fri,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 33 |
| RES_DEEP (ohm.m) | 42.77 | 33 |
| RES_SHALLOW (ohm.m) | 37.61 | 33 |

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 15% Siltstone, 85% very fine to fine, rare medium to very coarse Sandstone, 75% moderately bright to dull FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 75.0% nan |
| Total Gas | 103.0 U |
| mTVDss | -1223.36 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2180m: med lt gry-med gry,med gry brn,aren,mnr sandy lams,tr carb & lith spks,tr micmic,frm-mod hd,sbblky. SURVEY @ 2181.7m INC: 90.6° AZI: 221.2°G
- **SANDSTONE** @ ~2180m: clr,trnsl,pl brn,lt gry brn,vf- f,rr med-v crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr gry brn slty mtx,tr slty lams,tr carb spks,disagg,fri,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 33 |
| RES_DEEP (ohm.m) | 37.09 | 33 |
| RES_SHALLOW (ohm.m) | 33.88 | 33 |

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 20% Siltstone, 80% very fine to fine, trace medium to coarse Sandstone, 75% moderately bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 75.0% medium to coarse Sandstone, 75% moderately bright |
| Total Gas | 110.0 U |
| mTVDss | -1223.30 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2180m: med lt gry-med gry,med gry brn,aren,mnr sandy lams,tr carb & lith spks,tr micmic,frm-mod hd,sbblky. SURVEY @ 2181.7m INC: 90.6° AZI: 221.2°G
- **SANDSTONE** @ ~2180m: clr,trnsl,pl brn,lt gry brn,vf- f,rr med-v crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr gry brn slty mtx,tr slty lams,tr carb spks,disagg,fri,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 33 |
| RES_DEEP (ohm.m) | 38.09 | 33 |
| RES_SHALLOW (ohm.m) | 33.58 | 33 |

---

### 2200 m MD — Interval 2197.5 – 2202.5 m

**Sample Description (spreadsheet):** Sample 2200m: 30% Siltstone, 70% very fine to fine, trace medium Sandstone, 65% moderately bright to dull FLUOR in SST. TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 65.0% medium Sandstone, 65% moderately bright to dull |
| Total Gas | 113.0 U |
| mTVDss | -1223.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2200m: lt gry brn,pl-lt brn,clr,trnsl, vf-f,mnr med-v crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri,mnr mod hd,mnr-com disagg grs,pr vis por,fr inf
- **SILTSTONE** @ ~2200m: med-dk gry brn,med gry, aren,tr sandy lams,tr carb spks,tr micmic, frm-mod hd,sbblky. 77 / 6 / 4 / 6 / 7 124 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 40.34 | 33 |
| RES_SHALLOW (ohm.m) | 33.84 | 33 |

---

### 2205 m MD — Interval 2202.5 – 2207.5 m

**Sample Description (spreadsheet):** Sample 2205m: 25% Siltstone, 75% very fine to fine, rare medium to very coarse Sandstone, 75% moderately bright FLUOR in SST. TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine, rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% nan |
| Total Gas | 137.0 U |
| mTVDss | -1223.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2200m: lt gry brn,pl-lt brn,clr,trnsl, vf-f,mnr med-v crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri,mnr mod hd,mnr-com disagg grs,pr vis por,fr inf
- **SILTSTONE** @ ~2200m: med-dk gry brn,med gry, aren,tr sandy lams,tr carb spks,tr micmic, frm-mod hd,sbblky. 77 / 6 / 4 / 6 / 7 124 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 32 |
| RES_DEEP (ohm.m) | 41.06 | 32 |
| RES_SHALLOW (ohm.m) | 37.76 | 32 |

---

### 2210 m MD — Interval 2207.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 5% Siltstone, 95% very fine to fine, minor medium to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 123.0 U |
| mTVDss | -1223.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2200m: lt gry brn,pl-lt brn,clr,trnsl, vf-f,mnr med-v crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri,mnr mod hd,mnr-com disagg grs,pr vis por,fr inf
- **SILTSTONE** @ ~2200m: med-dk gry brn,med gry, aren,tr sandy lams,tr carb spks,tr micmic, frm-mod hd,sbblky. 77 / 6 / 4 / 6 / 7 124 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 33 |
| RES_DEEP (ohm.m) | 28.43 | 33 |
| RES_SHALLOW (ohm.m) | 23.39 | 33 |

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 10% Siltstone, 90% very fine to medium, minor coarse to very coarse Sandstone, 95% moderately bright FLUOR in SST. TG 124U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, minor coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 124.0 U |
| mTVDss | -1223.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2200m: lt gry brn,pl-lt brn,clr,trnsl, vf-f,mnr med-v crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri,mnr mod hd,mnr-com disagg grs,pr vis por,fr inf
- **SILTSTONE** @ ~2200m: med-dk gry brn,med gry, aren,tr sandy lams,tr carb spks,tr micmic, frm-mod hd,sbblky. 77 / 6 / 4 / 6 / 7 124 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 33 |
| RES_DEEP (ohm.m) | 23.25 | 33 |
| RES_SHALLOW (ohm.m) | 18.84 | 33 |

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 15% Siltstone, 85% very fine to medium, trace coarse Sandstone, 80% moderately bright FLUOR in SST. TG 106U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% coarse Sandstone, 80% moderately bright |
| Total Gas | 106.0 U |
| mTVDss | -1222.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med-crs,mod-pr srt, 73 / 6 / 5 / 8 / 8 147 U sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 34.71 | 33 |
| RES_SHALLOW (ohm.m) | 28.52 | 33 |

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 15% Siltstone, 85% very fine to medium, trace coarse to very coarse Sandstone, 75% moderately bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% coarse to very coarse Sandstone, 75% moderately bright |
| Total Gas | 95.0 U |
| mTVDss | -1222.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med-crs,mod-pr srt, 73 / 6 / 5 / 8 / 8 147 U sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.6 | 33 |
| RES_DEEP (ohm.m) | 40.68 | 33 |
| RES_SHALLOW (ohm.m) | 32.00 | 33 |

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 10% Siltstone, 90% very fine to medium, trace coarse to very coarse Sandstone, 95% moderately bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 95.0% coarse to very coarse Sandstone, 95% moderately bright |
| Total Gas | 145.0 U |
| mTVDss | -1222.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med-crs,mod-pr srt, 73 / 6 / 5 / 8 / 8 147 U sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 32 |
| RES_DEEP (ohm.m) | 40.27 | 32 |
| RES_SHALLOW (ohm.m) | 31.12 | 32 |

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 15% Siltstone, 85% very fine to fine, trace medium to coarse Sandstone, 95% moderately bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 95.0% medium to coarse Sandstone, 95% moderately bright |
| Total Gas | 149.0 U |
| mTVDss | -1222.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- **SANDSTONE** @ ~2220m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med-crs,mod-pr srt, 73 / 6 / 5 / 8 / 8 147 U sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks,fri, mnr mod hd,mnr-com disagg grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 33 |
| RES_DEEP (ohm.m) | 45.69 | 33 |
| RES_SHALLOW (ohm.m) | 32.47 | 33 |

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 15% Siltstone, 85% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 155.0 U |
| mTVDss | -1222.53 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2240m: med lt gry,med gry,aren,tr sandy lams,rr-loc com carb spks & brn liths,frm,mod hd,sbblky.
- **SANDSTONE** @ ~2240m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med,tr crs-v crs,mod-pr srt,sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks, fri,mnr mod hd,com disagg grs,pr vis por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.1 | 33 |
| RES_DEEP (ohm.m) | 46.90 | 33 |
| RES_SHALLOW (ohm.m) | 34.88 | 33 |

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 15% Siltstone, 85% very fine to medium, trace coarse to very coarse Sandstone, 95% moderately bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 95.0% coarse to very coarse Sandstone, 95% moderately bright |
| Total Gas | 160.0 U |
| mTVDss | -1222.42 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2240m: med lt gry,med gry,aren,tr sandy lams,rr-loc com carb spks & brn liths,frm,mod hd,sbblky.
- **SANDSTONE** @ ~2240m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med,tr crs-v crs,mod-pr srt,sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks, fri,mnr mod hd,com disagg grs,pr vis por,
- _(22 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 33 |
| RES_DEEP (ohm.m) | 48.79 | 33 |
| RES_SHALLOW (ohm.m) | 38.26 | 33 |

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 15% Siltstone, 85% very fine to fine, trace medium Sandstone, 80% moderately bright FLUOR in SST. TG 138U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% medium Sandstone, 80% moderately bright |
| Total Gas | 138.0 U |
| mTVDss | -1222.31 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2240m: med lt gry,med gry,aren,tr sandy lams,rr-loc com carb spks & brn liths,frm,mod hd,sbblky.
- **SANDSTONE** @ ~2240m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med,tr crs-v crs,mod-pr srt,sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks, fri,mnr mod hd,com disagg grs,pr vis por,
- _(22 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 33 |
| RES_DEEP (ohm.m) | 54.21 | 33 |
| RES_SHALLOW (ohm.m) | 43.30 | 33 |

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 20% Siltstone, 80% very fine to fine Sandstone, 80% moderately bright FLUOR in SST. TG 116U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 116.0 U |
| mTVDss | -1222.20 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2240m: med lt gry,med gry,aren,tr sandy lams,rr-loc com carb spks & brn liths,frm,mod hd,sbblky.
- **SANDSTONE** @ ~2240m: lt gry brn,lt brn,med lt gry, clr,trnsl,vf-f,tr med,tr crs-v crs,mod-pr srt,sbang-sbrnd,wk-mod sil cmt,tr-mnr gry brn slty mtx,rr slty lams,tr carb spks, fri,mnr mod hd,com disagg grs,pr vis por,
- _(22 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 32 |
| RES_DEEP (ohm.m) | 48.33 | 32 |
| RES_SHALLOW (ohm.m) | 38.10 | 32 |

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 20% Siltstone, 80% very fine to fine, rare medium to very coarse Sandstone, 80% moderately bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 149.0 U |
| mTVDss | -1222.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2260m: pl-lt brn,med lt gry-lt gry, clr,trnsl,vf-crs,rr v crs,v pr srt,sbang- sbrnd,wk-mod sil cmt,tr-loc com gry brn slty mtx,loc com slty lams,tr carb spks,fri, mnr mod hd,com disagg grs,pr vis por,fr-
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry brn,clr,trnsl, MW: 9.75 vf-f,tr med-v crs,mod-pr srt,sbang-sbrnd, FV: 50 wk-mod sil cmt,tr-loc com gry brn slty PV: 12 mtx,tr slty lams,tr carb spks,fri-mod YP: 21 hd,mnr disagg grs,pr vis por,fr inf inf por,
- _(18 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 33 |
| RES_DEEP (ohm.m) | 48.24 | 33 |
| RES_SHALLOW (ohm.m) | 37.77 | 33 |

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 10% Siltstone, 90% very fine to coarse, rare very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 2110

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 210.0 U |
| mTVDss | -1222.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2260m: pl-lt brn,med lt gry-lt gry, clr,trnsl,vf-crs,rr v crs,v pr srt,sbang- sbrnd,wk-mod sil cmt,tr-loc com gry brn slty mtx,loc com slty lams,tr carb spks,fri, mnr mod hd,com disagg grs,pr vis por,fr-
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry brn,clr,trnsl, MW: 9.75 vf-f,tr med-v crs,mod-pr srt,sbang-sbrnd, FV: 50 wk-mod sil cmt,tr-loc com gry brn slty PV: 12 mtx,tr slty lams,tr carb spks,fri-mod YP: 21 hd,mnr disagg grs,pr vis por,fr inf inf por,
- _(18 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.4 | 33 |
| RES_DEEP (ohm.m) | 48.88 | 33 |
| RES_SHALLOW (ohm.m) | 38.81 | 33 |

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 5% Siltstone, 95% very fine to fine, trace medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 188.0 U |
| mTVDss | -1221.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2260m: pl-lt brn,med lt gry-lt gry, clr,trnsl,vf-crs,rr v crs,v pr srt,sbang- sbrnd,wk-mod sil cmt,tr-loc com gry brn slty mtx,loc com slty lams,tr carb spks,fri, mnr mod hd,com disagg grs,pr vis por,fr-
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry brn,clr,trnsl, MW: 9.75 vf-f,tr med-v crs,mod-pr srt,sbang-sbrnd, FV: 50 wk-mod sil cmt,tr-loc com gry brn slty PV: 12 mtx,tr slty lams,tr carb spks,fri-mod YP: 21 hd,mnr disagg grs,pr vis por,fr inf inf por,
- _(18 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.7 | 33 |
| RES_DEEP (ohm.m) | 42.34 | 33 |
| RES_SHALLOW (ohm.m) | 34.10 | 33 |

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 170.0 U |
| mTVDss | -1221.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2260m: pl-lt brn,med lt gry-lt gry, clr,trnsl,vf-crs,rr v crs,v pr srt,sbang- sbrnd,wk-mod sil cmt,tr-loc com gry brn slty mtx,loc com slty lams,tr carb spks,fri, mnr mod hd,com disagg grs,pr vis por,fr-
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry brn,clr,trnsl, MW: 9.75 vf-f,tr med-v crs,mod-pr srt,sbang-sbrnd, FV: 50 wk-mod sil cmt,tr-loc com gry brn slty PV: 12 mtx,tr slty lams,tr carb spks,fri-mod YP: 21 hd,mnr disagg grs,pr vis por,fr inf inf por,
- _(18 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 33 |
| RES_DEEP (ohm.m) | 43.80 | 33 |
| RES_SHALLOW (ohm.m) | 35.98 | 33 |

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 100% very fine to fine, trace medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% medium to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 166.0 U |
| mTVDss | -1221.85 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.7 | 33 |
| RES_DEEP (ohm.m) | 46.16 | 33 |
| RES_SHALLOW (ohm.m) | 39.24 | 33 |

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 100% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 225U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 225.0 U |
| mTVDss | -1221.86 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.0 | 32 |
| RES_DEEP (ohm.m) | 46.80 | 32 |
| RES_SHALLOW (ohm.m) | 40.30 | 32 |

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 175U.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 175.0 U |
| mTVDss | -1221.87 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 46.06 | 33 |
| RES_SHALLOW (ohm.m) | 37.04 | 33 |

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 201.0 U |
| mTVDss | -1221.89 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.5 | 33 |
| RES_DEEP (ohm.m) | 45.32 | 33 |
| RES_SHALLOW (ohm.m) | 36.39 | 33 |

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 206.0 U |
| mTVDss | -1221.91 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.7 | 33 |
| RES_DEEP (ohm.m) | 46.53 | 33 |
| RES_SHALLOW (ohm.m) | 41.05 | 33 |

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 178.0 U |
| mTVDss | -1221.94 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.3 | 33 |
| RES_DEEP (ohm.m) | 45.83 | 33 |
| RES_SHALLOW (ohm.m) | 39.80 | 33 |

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 0% Siltstone, 100% very fine to fine,trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine,trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 166.0 U |
| mTVDss | -1221.97 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 32 |
| RES_DEEP (ohm.m) | 43.95 | 32 |
| RES_SHALLOW (ohm.m) | 36.02 | 32 |

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 0% Siltstone, 100% very fine to fine, minor medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 176.0 U |
| mTVDss | -1221.99 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 33 |
| RES_DEEP (ohm.m) | 37.37 | 33 |
| RES_SHALLOW (ohm.m) | 31.62 | 33 |

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 203.0 U |
| mTVDss | -1222.01 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.5 | 33 |
| RES_DEEP (ohm.m) | 40.28 | 33 |
| RES_SHALLOW (ohm.m) | 36.68 | 33 |

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 174.0 U |
| mTVDss | -1222.03 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 33 |
| RES_DEEP (ohm.m) | 39.06 | 33 |
| RES_SHALLOW (ohm.m) | 34.57 | 33 |

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 0% Siltstone, 100% very fine to fine, minor medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 176.0 U |
| mTVDss | -1222.04 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.9 | 33 |
| RES_DEEP (ohm.m) | 39.85 | 33 |
| RES_SHALLOW (ohm.m) | 33.56 | 33 |

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 175.0 U |
| mTVDss | -1222.06 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 32 |
| RES_DEEP (ohm.m) | 37.44 | 32 |
| RES_SHALLOW (ohm.m) | 32.57 | 32 |

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 199.0 U |
| mTVDss | -1222.08 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.7 | 33 |
| RES_DEEP (ohm.m) | 37.25 | 33 |
| RES_SHALLOW (ohm.m) | 31.74 | 33 |

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 193U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 197.0 U |
| mTVDss | -1222.09 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 33 |
| RES_DEEP (ohm.m) | 40.75 | 33 |
| RES_SHALLOW (ohm.m) | 34.05 | 33 |

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 197.0 U |
| mTVDss | -1222.11 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.8 | 33 |
| RES_DEEP (ohm.m) | 42.82 | 33 |
| RES_SHALLOW (ohm.m) | 35.62 | 33 |

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright |
| Total Gas | 206.0 U |
| mTVDss | -1222.13 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.4 | 33 |
| RES_DEEP (ohm.m) | 48.17 | 33 |
| RES_SHALLOW (ohm.m) | 41.90 | 33 |

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: 0% Siltstone, 100% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 243U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 243.0 U |
| mTVDss | -1222.16 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.1 | 32 |
| RES_DEEP (ohm.m) | 48.49 | 32 |
| RES_SHALLOW (ohm.m) | 43.96 | 32 |

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 230.0 U |
| mTVDss | -1222.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt trnsl brn,lt gry brn,clr- trnsl,vf-f,tr med-crs,mod-pr srt,sbang- sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,fri,com disagg, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2380m: clr-trnsl,lt trnsl brn, lt gry brn,vf-f,mnr med,mod srt,sbang- 74 / 6 / 5 / 7 / 8 sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,dom disagg, 2390 fri aggs,pr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 33 |
| RES_DEEP (ohm.m) | 47.79 | 33 |
| RES_SHALLOW (ohm.m) | 43.21 | 33 |

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 2370m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 229.0 U |
| mTVDss | -1222.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt trnsl brn,lt gry brn,clr- trnsl,vf-f,tr med-crs,mod-pr srt,sbang- sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,fri,com disagg, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2380m: clr-trnsl,lt trnsl brn, lt gry brn,vf-f,mnr med,mod srt,sbang- 74 / 6 / 5 / 7 / 8 sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,dom disagg, 2390 fri aggs,pr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 46.97 | 33 |
| RES_SHALLOW (ohm.m) | 39.03 | 33 |

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright |
| Total Gas | 172.0 U |
| mTVDss | -1222.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt trnsl brn,lt gry brn,clr- trnsl,vf-f,tr med-crs,mod-pr srt,sbang- sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,fri,com disagg, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2380m: clr-trnsl,lt trnsl brn, lt gry brn,vf-f,mnr med,mod srt,sbang- 74 / 6 / 5 / 7 / 8 sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,dom disagg, 2390 fri aggs,pr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.3 | 33 |
| RES_DEEP (ohm.m) | 44.66 | 33 |
| RES_SHALLOW (ohm.m) | 38.37 | 33 |

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 0% Siltstone, 100% very fine to fine,trace medium Sandstone, 100% bright FLUOR in SST. TG 224U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine,trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% bright |
| Total Gas | 224.0 U |
| mTVDss | -1222.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt trnsl brn,lt gry brn,clr- trnsl,vf-f,tr med-crs,mod-pr srt,sbang- sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,fri,com disagg, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2380m: clr-trnsl,lt trnsl brn, lt gry brn,vf-f,mnr med,mod srt,sbang- 74 / 6 / 5 / 7 / 8 sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,dom disagg, 2390 fri aggs,pr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.3 | 33 |
| RES_DEEP (ohm.m) | 44.38 | 33 |
| RES_SHALLOW (ohm.m) | 41.11 | 33 |

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 0% Siltstone, 100% very fine to coarse, minor very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 229.0 U |
| mTVDss | -1222.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt trnsl brn,lt gry brn,clr- trnsl,vf-f,tr med-crs,mod-pr srt,sbang- sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,fri,com disagg, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2380m: clr-trnsl,lt trnsl brn, lt gry brn,vf-f,mnr med,mod srt,sbang- 74 / 6 / 5 / 7 / 8 sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,dom disagg, 2390 fri aggs,pr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.3 | 33 |
| RES_DEEP (ohm.m) | 42.68 | 33 |
| RES_SHALLOW (ohm.m) | 36.41 | 33 |

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2390m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 227U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 227.0 U |
| mTVDss | -1222.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt trnsl brn,lt gry brn,clr- trnsl,vf-f,tr med-crs,mod-pr srt,sbang- sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,fri,com disagg, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2380m: clr-trnsl,lt trnsl brn, lt gry brn,vf-f,mnr med,mod srt,sbang- 74 / 6 / 5 / 7 / 8 sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,dom disagg, 2390 fri aggs,pr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.4 | 32 |
| RES_DEEP (ohm.m) | 43.45 | 32 |
| RES_SHALLOW (ohm.m) | 36.51 | 32 |

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** Sample 2395m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 233.0 U |
| mTVDss | -1222.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt trnsl brn,lt gry brn,clr- trnsl,vf-f,tr med-crs,mod-pr srt,sbang- sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,fri,com disagg, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2380m: clr-trnsl,lt trnsl brn, lt gry brn,vf-f,mnr med,mod srt,sbang- 74 / 6 / 5 / 7 / 8 sbrnd,mod sil cmt,com lt gry brn slty mtx,tr carb spks & lams,dom disagg, 2390 fri aggs,pr vis por,fr-gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.2 | 33 |
| RES_DEEP (ohm.m) | 41.10 | 33 |
| RES_SHALLOW (ohm.m) | 34.40 | 33 |

---

### 2400 m MD — Interval 2397.5 – 2402.5 m

**Sample Description (spreadsheet):** Sample 2400m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% bright FLUOR in SST. TG 226U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% medium Sandstone, 100% bright |
| Total Gas | 226.0 U |
| mTVDss | -1222.91 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.4 | 33 |
| RES_DEEP (ohm.m) | 41.91 | 33 |
| RES_SHALLOW (ohm.m) | 34.87 | 33 |

---

### 2405 m MD — Interval 2402.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2405m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |
| mTVDss | -1223.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr-trnsl,lt trnsl brn,lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, com lt gry brn slty mtx,tr carb spks & lams,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2420m: lt gry,clr-trnsl,tr lt trnsl brn,vf-f,mnr med,mod wl srt,sbang- sbrnd,wk sil cmt,com lt gry brn slty mtx, tr carb spks,fri,com disagg,pr vis por, 2430 fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 33 |
| RES_DEEP (ohm.m) | 38.69 | 33 |
| RES_SHALLOW (ohm.m) | 32.02 | 33 |

---

### 2410 m MD — Interval 2407.5 – 2412.5 m

**Sample Description (spreadsheet):** Sample 2410m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 218U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 218.0 U |
| mTVDss | -1223.20 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr-trnsl,lt trnsl brn,lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, com lt gry brn slty mtx,tr carb spks & lams,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2420m: lt gry,clr-trnsl,tr lt trnsl brn,vf-f,mnr med,mod wl srt,sbang- sbrnd,wk sil cmt,com lt gry brn slty mtx, tr carb spks,fri,com disagg,pr vis por, 2430 fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.7 | 33 |
| RES_DEEP (ohm.m) | 38.91 | 33 |
| RES_SHALLOW (ohm.m) | 31.87 | 33 |

---

### 2415 m MD — Interval 2412.5 – 2417.5 m

**Sample Description (spreadsheet):** Sample 2415m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright to moderately bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 141.0 U |
| mTVDss | -1223.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr-trnsl,lt trnsl brn,lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, com lt gry brn slty mtx,tr carb spks & lams,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2420m: lt gry,clr-trnsl,tr lt trnsl brn,vf-f,mnr med,mod wl srt,sbang- sbrnd,wk sil cmt,com lt gry brn slty mtx, tr carb spks,fri,com disagg,pr vis por, 2430 fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 32 |
| RES_DEEP (ohm.m) | 39.23 | 32 |
| RES_SHALLOW (ohm.m) | 31.84 | 32 |

---

### 2420 m MD — Interval 2417.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2420m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 198.0 U |
| mTVDss | -1223.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr-trnsl,lt trnsl brn,lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, com lt gry brn slty mtx,tr carb spks & lams,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2420m: lt gry,clr-trnsl,tr lt trnsl brn,vf-f,mnr med,mod wl srt,sbang- sbrnd,wk sil cmt,com lt gry brn slty mtx, tr carb spks,fri,com disagg,pr vis por, 2430 fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 32.41 | 33 |
| RES_SHALLOW (ohm.m) | 28.33 | 33 |

---

### 2425 m MD — Interval 2422.5 – 2427.5 m

**Sample Description (spreadsheet):** Sample 2425m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 199.0 U |
| mTVDss | -1223.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr-trnsl,lt trnsl brn,lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, com lt gry brn slty mtx,tr carb spks & lams,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2420m: lt gry,clr-trnsl,tr lt trnsl brn,vf-f,mnr med,mod wl srt,sbang- sbrnd,wk sil cmt,com lt gry brn slty mtx, tr carb spks,fri,com disagg,pr vis por, 2430 fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.7 | 33 |
| RES_DEEP (ohm.m) | 34.31 | 33 |
| RES_SHALLOW (ohm.m) | 26.76 | 33 |

---

### 2430 m MD — Interval 2427.5 – 2432.5 m

**Sample Description (spreadsheet):** Sample 2430m: 0% Siltstone, 100% very fine to fine, minor medium Sandstone, 100% moderately bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 220.0 U |
| mTVDss | -1223.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr-trnsl,lt trnsl brn,lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, com lt gry brn slty mtx,tr carb spks & lams,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2420m: lt gry,clr-trnsl,tr lt trnsl brn,vf-f,mnr med,mod wl srt,sbang- sbrnd,wk sil cmt,com lt gry brn slty mtx, tr carb spks,fri,com disagg,pr vis por, 2430 fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.7 | 33 |
| RES_DEEP (ohm.m) | 35.00 | 33 |
| RES_SHALLOW (ohm.m) | 26.55 | 33 |

---

### 2435 m MD — Interval 2432.5 – 2437.5 m

**Sample Description (spreadsheet):** Sample 2435m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 243U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 243.0 U |
| mTVDss | -1223.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr-trnsl,lt trnsl brn,lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, com lt gry brn slty mtx,tr carb spks & lams,fri,mnr disagg,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2420m: lt gry,clr-trnsl,tr lt trnsl brn,vf-f,mnr med,mod wl srt,sbang- sbrnd,wk sil cmt,com lt gry brn slty mtx, tr carb spks,fri,com disagg,pr vis por, 2430 fr inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.4 | 33 |
| RES_DEEP (ohm.m) | 32.45 | 33 |
| RES_SHALLOW (ohm.m) | 26.04 | 33 |

---

### 2440 m MD — Interval 2437.5 – 2442.5 m

**Sample Description (spreadsheet):** Sample 2440m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 236U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 236.0 U |
| mTVDss | -1223.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,tr lt trnsl brn, vf-f,tr med,mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,vf-f,tr med, mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks,fri,dom disagg, pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.8 | 32 |
| RES_DEEP (ohm.m) | 31.28 | 32 |
| RES_SHALLOW (ohm.m) | 24.75 | 32 |

---

### 2445 m MD — Interval 2442.5 – 2447.5 m

**Sample Description (spreadsheet):** Sample 2445m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 220.0 U |
| mTVDss | -1223.79 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,tr lt trnsl brn, vf-f,tr med,mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,vf-f,tr med, mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks,fri,dom disagg, pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.4 | 33 |
| RES_DEEP (ohm.m) | 34.40 | 33 |
| RES_SHALLOW (ohm.m) | 25.00 | 33 |

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 237U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 237.0 U |
| mTVDss | -1223.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,tr lt trnsl brn, vf-f,tr med,mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,vf-f,tr med, mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks,fri,dom disagg, pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 33 |
| RES_DEEP (ohm.m) | 37.42 | 33 |
| RES_SHALLOW (ohm.m) | 24.70 | 33 |

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 217U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 217.0 U |
| mTVDss | -1223.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,tr lt trnsl brn, vf-f,tr med,mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2440m: lt gry,clr-trnsl,vf-f,tr med, mod-wl srt,sbang-sbrnd,wk sil cmt,mnr lt gry brn slty mtx,tr carb spks,fri,dom disagg, pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.5 | 33 |
| RES_DEEP (ohm.m) | 34.79 | 33 |
| RES_SHALLOW (ohm.m) | 27.54 | 33 |

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 236U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 236.0 U |
| mTVDss | -1223.91 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 33 |
| RES_DEEP (ohm.m) | 33.02 | 33 |
| RES_SHALLOW (ohm.m) | 26.71 | 33 |

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 231U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 231.0 U |
| mTVDss | -1223.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr-trnsl,mnr lt gry,vf,occ f,v wl srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,dom disagg,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt gry,lt trnsl brn,clr-trnsl, vf-f,tr v crs,wl-pr srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,pred disagg,pr vis por,fr inf por,fluor. SURVEY @ 2488.7m
- _(25 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.1 | 32 |
| RES_DEEP (ohm.m) | 34.20 | 32 |
| RES_SHALLOW (ohm.m) | 29.96 | 32 |

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 247U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 247.0 U |
| mTVDss | -1223.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr-trnsl,mnr lt gry,vf,occ f,v wl srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,dom disagg,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt gry,lt trnsl brn,clr-trnsl, vf-f,tr v crs,wl-pr srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,pred disagg,pr vis por,fr inf por,fluor. SURVEY @ 2488.7m
- _(25 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 33 |
| RES_DEEP (ohm.m) | 33.62 | 33 |
| RES_SHALLOW (ohm.m) | 29.97 | 33 |

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright to moderately bright FLUOR in SST. TG 254U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 254.0 U |
| mTVDss | -1223.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr-trnsl,mnr lt gry,vf,occ f,v wl srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,dom disagg,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt gry,lt trnsl brn,clr-trnsl, vf-f,tr v crs,wl-pr srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,pred disagg,pr vis por,fr inf por,fluor. SURVEY @ 2488.7m
- _(25 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.6 | 33 |
| RES_DEEP (ohm.m) | 34.79 | 33 |
| RES_SHALLOW (ohm.m) | 33.54 | 33 |

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |
| mTVDss | -1223.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr-trnsl,mnr lt gry,vf,occ f,v wl srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,dom disagg,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt gry,lt trnsl brn,clr-trnsl, vf-f,tr v crs,wl-pr srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,pred disagg,pr vis por,fr inf por,fluor. SURVEY @ 2488.7m
- _(25 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.0 | 33 |
| RES_DEEP (ohm.m) | 36.77 | 33 |
| RES_SHALLOW (ohm.m) | 33.89 | 33 |

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 0% Siltstone, 100% very fine, occasional fine Sandstone, 100% bright to moderately bright FLUOR in SST. TG 238U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine, occasional fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 238.0 U |
| mTVDss | -1223.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr-trnsl,mnr lt gry,vf,occ f,v wl srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,dom disagg,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt gry,lt trnsl brn,clr-trnsl, vf-f,tr v crs,wl-pr srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,pred disagg,pr vis por,fr inf por,fluor. SURVEY @ 2488.7m
- _(25 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.0 | 33 |
| RES_DEEP (ohm.m) | 35.55 | 33 |
| RES_SHALLOW (ohm.m) | 32.91 | 33 |

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% very fine to fine, trace very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 251U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 251.0 U |
| mTVDss | -1223.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr-trnsl,mnr lt gry,vf,occ f,v wl srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,dom disagg,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt gry,lt trnsl brn,clr-trnsl, vf-f,tr v crs,wl-pr srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,pred disagg,pr vis por,fr inf por,fluor. SURVEY @ 2488.7m
- _(25 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.6 | 32 |
| RES_DEEP (ohm.m) | 35.76 | 32 |
| RES_SHALLOW (ohm.m) | 35.01 | 32 |

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 0% Siltstone, 100% very fine to fine, trace very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 295.0 U |
| mTVDss | -1223.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr-trnsl,mnr lt gry,vf,occ f,v wl srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,dom disagg,pr vis por, gd-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt gry,lt trnsl brn,clr-trnsl, vf-f,tr v crs,wl-pr srt,sbang-sbrnd,mnr wk sil cmt,tr lt gry arg mtx,fri,pred disagg,pr vis por,fr inf por,fluor. SURVEY @ 2488.7m
- _(25 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.4 | 33 |
| RES_DEEP (ohm.m) | 29.91 | 33 |
| RES_SHALLOW (ohm.m) | 33.15 | 33 |

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 282U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 282.0 U |
| mTVDss | -1224.00 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 33 |
| RES_DEEP (ohm.m) | 33.79 | 33 |
| RES_SHALLOW (ohm.m) | 32.07 | 33 |

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 0% Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |
| mTVDss | -1224.00 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.7 | 33 |
| RES_DEEP (ohm.m) | 36.24 | 33 |
| RES_SHALLOW (ohm.m) | 32.87 | 33 |

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: trace siderite in 10% Siltstone, trace siderite in 90% very fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 10% Siltstone, trace siderite in 90% very fine to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 232.0 U |
| mTVDss | -1224.00 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.6 | 33 |
| RES_DEEP (ohm.m) | 37.78 | 33 |
| RES_SHALLOW (ohm.m) | 33.87 | 33 |

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: trace siderite in 10% Siltstone, trace siderite in 90% very fine to coarse, rare very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 301U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 10% Siltstone, trace siderite in 90% very fine to coarse, rare very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 301.0 U |
| mTVDss | -1224.00 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 33 |
| RES_DEEP (ohm.m) | 43.27 | 33 |
| RES_SHALLOW (ohm.m) | 36.06 | 33 |

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: trace siderite in 10% Siltstone, trace siderite in 90% very fine to medium, trace coarse to very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 274U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 10% Siltstone, trace siderite in 90% very fine to medium, trace coarse to very coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 274.0 U |
| mTVDss | -1224.01 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.4 | 32 |
| RES_DEEP (ohm.m) | 51.42 | 32 |
| RES_SHALLOW (ohm.m) | 36.83 | 32 |

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: trace siderite in 15% Siltstone, trace siderite in 85% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 15% Siltstone, trace siderite in 85% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 203.0 U |
| mTVDss | -1224.01 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.4 | 33 |
| RES_DEEP (ohm.m) | 45.06 | 33 |
| RES_SHALLOW (ohm.m) | 31.45 | 33 |

---

### 2680 m MD — Interval 2677.5 – 2682.5 m

**Sample Description (spreadsheet):** Sample 2680m: rare siderite in 40% Siltstone, trace siderite in 60% very fine to fine, trace coarse to very coarse Sandstone, Trace FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 1.0% siderite in 60% very fine to fine, trace coarse to very coarse Sandstone, Trace |
| Total Gas | 45.0 U |
| mTVDss | -1224.63 m |
| FeCO₃ in Siltstone | rare |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med-dk gry brn,med-dk brn, med gry,aren,com sid,tr carb spks,micmic micmic i/p,mod hd-hd,sbblky-blky. MCKINLAY MEMBER (RE-ENTRY): 2675.7mMDRT (-1224.6mTVDSS)
- **SANDSTONE** @ ~2670m: v lt gry-wh,lt gry,med brn, clr,trnsl,vf-f,tr crs-v crs,mod-pr srt,sbang- sbrnd,tr ang,mod-wk sil cmt,tr sid cmt, mnr-loc com wh arg & gry-brn slty mtx, tr slty lams,tr carb spks,fri-mod hd,tr hd,
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 41.85 | 33 |
| RES_SHALLOW (ohm.m) | 25.43 | 33 |

---

### 2685 m MD — Interval 2682.5 – 2687.5 m

**Sample Description (spreadsheet):** Sample 2685m: common siderite in 60% Siltstone, minor siderite in 40% very fine to fine Sandstone, trace dull to moderately bright FLUOR in SST. TG 56U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 1.0% dull to moderately bright |
| Total Gas | 56.0 U |
| mTVDss | -1224.70 m |
| FeCO₃ in Siltstone | common |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med-dk gry brn,med-dk brn, med gry,aren,com sid,tr carb spks,micmic micmic i/p,mod hd-hd,sbblky-blky. MCKINLAY MEMBER (RE-ENTRY): 2675.7mMDRT (-1224.6mTVDSS)
- **SANDSTONE** @ ~2670m: v lt gry-wh,lt gry,med brn, clr,trnsl,vf-f,tr crs-v crs,mod-pr srt,sbang- sbrnd,tr ang,mod-wk sil cmt,tr sid cmt, mnr-loc com wh arg & gry-brn slty mtx, tr slty lams,tr carb spks,fri-mod hd,tr hd,
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.9 | 33 |
| RES_DEEP (ohm.m) | 52.35 | 33 |
| RES_SHALLOW (ohm.m) | 30.15 | 33 |

---

### 2690 m MD — Interval 2687.5 – 2692.5 m

**Sample Description (spreadsheet):** Sample 2690m: minor siderite in 30% Siltstone, trace siderite in 70% very fine to very coarse Sandstone, 75% moderately bright to dull FLUOR in SST. TG 111U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 75.0% siderite in 70% very fine to very coarse Sandstone, 75% moderately bright to dull |
| Total Gas | 111.0 U |
| mTVDss | -1224.76 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2680m: clr,trnsl,pl-med brn,lt gry brn,vf-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mnr mod sil cmt,tr sid cmt,tr brn-gry arg mtx,tr carb spks,pred disagg,fri-mod hd,hd i/p,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~2690m: med-dk brn,med-dk gry brn, med gry,aren,mnr sid,tr carb spks,micmic i/p,mod hd-hd,frm i/p,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.8 | 33 |
| RES_DEEP (ohm.m) | 51.59 | 33 |
| RES_SHALLOW (ohm.m) | 33.80 | 33 |

---

### 2695 m MD — Interval 2692.5 – 2697.5 m

**Sample Description (spreadsheet):** Sample 2695m: minor siderite in 20% Siltstone, trace siderite in 80% very fine to very coarse Sandstone, 80% moderately bright FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% siderite in 80% very fine to very coarse Sandstone, 80% moderately bright |
| Total Gas | 147.0 U |
| mTVDss | -1224.81 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2680m: clr,trnsl,pl-med brn,lt gry brn,vf-v crs,v pr srt,sbang-sbrnd,ang i/p, wk-mnr mod sil cmt,tr sid cmt,tr brn-gry arg mtx,tr carb spks,pred disagg,fri-mod hd,hd i/p,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~2690m: med-dk brn,med-dk gry brn, med gry,aren,mnr sid,tr carb spks,micmic i/p,mod hd-hd,frm i/p,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.7 | 33 |
| RES_DEEP (ohm.m) | 41.81 | 33 |
| RES_SHALLOW (ohm.m) | 31.99 | 33 |

---

### 2700 m MD — Interval 2697.5 – 2702.5 m

**Sample Description (spreadsheet):** Sample 2700m: minor siderite in 15% Siltstone, trace siderite in 85% very fine to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 193U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% siderite in 85% very fine to very coarse Sandstone, 90% moderately bright |
| Total Gas | 193.0 U |
| mTVDss | -1224.87 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2690m: med-dk brn,med-dk gry brn, med gry,aren,mnr sid,tr carb spks,micmic i/p,mod hd-hd,frm i/p,sbblky-blky.
- **SANDSTONE** @ ~2690m: clr,trnsl,pl-med brn,vf-v FROM 2694.5m-2700m crs,v pr srt,sbang-sbrnd,ang i/p,wk-mnr 79 / 6 / 4 / 6 / 5 193 U mod sil cmt,tr sid cmt,tr brn arg mtx,pred disagg,mnr fri-mod hd,tr hd,gd-fr inf por, pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.1 | 32 |
| RES_DEEP (ohm.m) | 39.21 | 32 |
| RES_SHALLOW (ohm.m) | 35.92 | 32 |

---

### 2705 m MD — Interval 2702.5 – 2707.5 m

**Sample Description (spreadsheet):** Sample 2705m: minor siderite in 15% Siltstone, trace siderite in 85% very fine to very coarse Sandstone, 90% bright to moderately bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% siderite in 85% very fine to very coarse Sandstone, 90% bright to moderately bright |
| Total Gas | 232.0 U |
| mTVDss | -1224.88 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2690m: med-dk brn,med-dk gry brn, med gry,aren,mnr sid,tr carb spks,micmic i/p,mod hd-hd,frm i/p,sbblky-blky.
- **SANDSTONE** @ ~2690m: clr,trnsl,pl-med brn,vf-v FROM 2694.5m-2700m crs,v pr srt,sbang-sbrnd,ang i/p,wk-mnr 79 / 6 / 4 / 6 / 5 193 U mod sil cmt,tr sid cmt,tr brn arg mtx,pred disagg,mnr fri-mod hd,tr hd,gd-fr inf por, pr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.4 | 33 |
| RES_DEEP (ohm.m) | 35.54 | 33 |
| RES_SHALLOW (ohm.m) | 31.21 | 33 |

---

### 2710 m MD — Interval 2707.5 – 2712.5 m

**Sample Description (spreadsheet):** Sample 2710m: minor siderite in 15% Siltstone, 85% very fine to fine, rare medium to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 175.0 U |
| mTVDss | -1224.88 m |
| FeCO₃ in Siltstone | minor |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: lt gry,lt trnsl brn,clr- FROM 2720m-2769m trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,med-dk gry, med brn,aren,mnr sid,tr carb spks, micmic i/p,mod hd-hd,frm i/p,sbblky- blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.8 | 33 |
| RES_DEEP (ohm.m) | 43.33 | 33 |
| RES_SHALLOW (ohm.m) | 34.47 | 33 |

---

### 2715 m MD — Interval 2712.5 – 2717.5 m

**Sample Description (spreadsheet):** Sample 2715m: trace siderite in 5% Siltstone, 95% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siderite in 5% Siltstone, 95% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 184.0 U |
| mTVDss | -1224.88 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: lt gry,lt trnsl brn,clr- FROM 2720m-2769m trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,med-dk gry, med brn,aren,mnr sid,tr carb spks, micmic i/p,mod hd-hd,frm i/p,sbblky- blky.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.6 | 33 |
| RES_DEEP (ohm.m) | 36.27 | 33 |
| RES_SHALLOW (ohm.m) | 27.39 | 33 |

---

### 2720 m MD — Interval 2717.5 – 2722.5 m

**Sample Description (spreadsheet):** Sample 2720m: 0% Siltstone, 100% very fine to fine, trace very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright |
| Total Gas | 178.0 U |
| mTVDss | -1224.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: lt gry,lt trnsl brn,clr- FROM 2720m-2769m trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,med-dk gry, med brn,aren,mnr sid,tr carb spks, micmic i/p,mod hd-hd,frm i/p,sbblky- blky.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 33 |
| RES_DEEP (ohm.m) | 33.62 | 33 |
| RES_SHALLOW (ohm.m) | 23.46 | 33 |

---

### 2725 m MD — Interval 2722.5 – 2727.5 m

**Sample Description (spreadsheet):** Sample 2725m: 10% Siltstone, 90% very fine to medium, trace coarse Sandstone, 90% moderately bright FLUOR in SST. TG 104U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% coarse Sandstone, 90% moderately bright |
| Total Gas | 104.0 U |
| mTVDss | -1224.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: lt gry,lt trnsl brn,clr- FROM 2720m-2769m trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,med-dk gry, med brn,aren,mnr sid,tr carb spks, micmic i/p,mod hd-hd,frm i/p,sbblky- blky.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 32 |
| RES_DEEP (ohm.m) | 46.97 | 32 |
| RES_SHALLOW (ohm.m) | 36.01 | 32 |

---

### 2730 m MD — Interval 2727.5 – 2732.5 m

**Sample Description (spreadsheet):** Sample 2730m: 20% Siltstone, 80% very fine to medium, minor coarse Sandstone, 80% moderately bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 107.0 U |
| mTVDss | -1224.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: lt gry,lt trnsl brn,clr- FROM 2720m-2769m trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,med-dk gry, med brn,aren,mnr sid,tr carb spks, micmic i/p,mod hd-hd,frm i/p,sbblky- blky.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 33 |
| RES_DEEP (ohm.m) | 56.35 | 33 |
| RES_SHALLOW (ohm.m) | 42.01 | 33 |

---

### 2735 m MD — Interval 2732.5 – 2737.5 m

**Sample Description (spreadsheet):** Sample 2735m: 5% Siltstone, 95% very fine to coarse Sandstone, 60% moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 60.0% nan |
| Total Gas | 90.0 U |
| mTVDss | -1224.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: lt gry,lt trnsl brn,clr- FROM 2720m-2769m trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,med-dk gry, med brn,aren,mnr sid,tr carb spks, micmic i/p,mod hd-hd,frm i/p,sbblky- blky.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 33 |
| RES_DEEP (ohm.m) | 40.33 | 33 |
| RES_SHALLOW (ohm.m) | 28.31 | 33 |

---

### 2740 m MD — Interval 2737.5 – 2742.5 m

**Sample Description (spreadsheet):** Sample 2740m: 10% Siltstone, 90% very fine to coarse Sandstone, 70% moderately bright FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% nan |
| Total Gas | 97.0 U |
| mTVDss | -1224.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2730m: lt gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,tr disagg,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2730m: lt gry,lt trnsl brn,clr-trnsl, vf-f,wl srt,sbrnd-sbang,mod sil cmt,com lt gry brn slty mtx,tr carb lams,mod hd-fri, tr disagg,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 33 |
| RES_DEEP (ohm.m) | 33.19 | 33 |
| RES_SHALLOW (ohm.m) | 22.66 | 33 |

---

### 2745 m MD — Interval 2742.5 – 2747.5 m

**Sample Description (spreadsheet):** Sample 2745m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 141U

Gas seems to be holding between 130-140U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 141.0 U |
| mTVDss | -1224.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2730m: lt gry,lt trnsl brn,clr- trnsl,vf-med,mnr crs,mod-pr srt,sbang- sbrnd,wk-mod sil cmt,com lt gry arg mtx,tr carb spks & lams,mod hd,tr disagg,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2730m: lt gry,lt trnsl brn,clr-trnsl, vf-f,wl srt,sbrnd-sbang,mod sil cmt,com lt gry brn slty mtx,tr carb lams,mod hd-fri, tr disagg,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 33.21 | 33 |
| RES_SHALLOW (ohm.m) | 23.98 | 33 |

---

### 2750 m MD — Interval 2747.5 – 2752.5 m

**Sample Description (spreadsheet):** Sample 2750m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright to moderately bright FLUOR in SST. TG 133U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 133.0 U |
| mTVDss | -1224.27 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 33 |
| RES_DEEP (ohm.m) | 35.18 | 33 |
| RES_SHALLOW (ohm.m) | 26.59 | 33 |

---

### 2755 m MD — Interval 2752.5 – 2757.5 m

**Sample Description (spreadsheet):** Sample 2755m: 0% Siltstone, 100% very fine to coarse, trace very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright |
| Total Gas | 125.0 U |
| mTVDss | -1224.13 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.4 | 32 |
| RES_DEEP (ohm.m) | 38.44 | 32 |
| RES_SHALLOW (ohm.m) | 29.80 | 32 |

---

### 2760 m MD — Interval 2757.5 – 2762.5 m

**Sample Description (spreadsheet):** Sample 2760m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 141.0 U |
| mTVDss | -1223.99 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 33 |
| RES_DEEP (ohm.m) | 36.98 | 33 |
| RES_SHALLOW (ohm.m) | 29.46 | 33 |

---

### 2765 m MD — Interval 2762.5 – 2767.5 m

**Sample Description (spreadsheet):** Sample 2765m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 143U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 143.0 U |
| mTVDss | -1223.87 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2780m: med-dk brn,med-dk gry, aren,tr micmic,mod hd-frm,sbblky-blky. CONTROL DRILL @ 15M/HR 73 / 6 / 5 / 8 / 8 153 U FROM 2782m-2894m Rmf: 0.05 ohm @ 75°F
- **SANDSTONE** @ ~2780m: clr-trnsl,lt gry,vf-crs,tr v crs,sbrnd-sbang,pr srt,tr wk sil cmt,tr lt gry slty mtx,tr carb spks,dom disagg,fri 2790 aggs,pr vis por,gd inf por,fluor. MURTA FORMATION (RE-ENTRY):
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.9 | 33 |
| RES_DEEP (ohm.m) | 39.99 | 33 |
| RES_SHALLOW (ohm.m) | 33.70 | 33 |

---

### 2770 m MD — Interval 2767.5 – 2772.5 m

**Sample Description (spreadsheet):** Sample 2770m: 0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 136.0 U |
| mTVDss | -1223.75 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2780m: med-dk brn,med-dk gry, aren,tr micmic,mod hd-frm,sbblky-blky. CONTROL DRILL @ 15M/HR 73 / 6 / 5 / 8 / 8 153 U FROM 2782m-2894m Rmf: 0.05 ohm @ 75°F
- **SANDSTONE** @ ~2780m: clr-trnsl,lt gry,vf-crs,tr v crs,sbrnd-sbang,pr srt,tr wk sil cmt,tr lt gry slty mtx,tr carb spks,dom disagg,fri 2790 aggs,pr vis por,gd inf por,fluor. MURTA FORMATION (RE-ENTRY):
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 41.66 | 33 |
| RES_SHALLOW (ohm.m) | 41.35 | 33 |

---

### 2810 m MD — Interval 2807.5 – 2812.5 m

**Sample Description (spreadsheet):** Sample 2810m: 20% Siltstone, trace siderite in 80% very fine to fine, trace coarse Sandstone, 60% pale to moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 60.0% siderite in 80% very fine to fine, trace coarse Sandstone, 60% pale to moderately bright |
| Total Gas | 146.0 U |
| mTVDss | -1223.47 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: lt gry,lt trnsl brn,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry slty mtx,fri-mod hd,mnr 2820 disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2810m: clr-trnsl,lt gry,vf-med,mod srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis por,fr inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 51.53 | 33 |
| RES_SHALLOW (ohm.m) | 35.07 | 33 |

---

### 2815 m MD — Interval 2812.5 – 2817.5 m

**Sample Description (spreadsheet):** Sample 2815m: 20% Siltstone, 80% very fine to coarse, trace very coarse Sandstone, 80% moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% very coarse Sandstone, 80% moderately bright |
| Total Gas | 151.0 U |
| mTVDss | -1223.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: lt gry,lt trnsl brn,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry slty mtx,fri-mod hd,mnr 2820 disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2810m: clr-trnsl,lt gry,vf-med,mod srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis por,fr inf por, fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 33 |
| RES_DEEP (ohm.m) | 55.83 | 33 |
| RES_SHALLOW (ohm.m) | 38.70 | 33 |

---

### 2820 m MD — Interval 2817.5 – 2822.5 m

**Sample Description (spreadsheet):** Sample 2820m: 10% Siltstone, 90% very fine to very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 154.0 U |
| mTVDss | -1223.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: lt gry,lt trnsl brn,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry slty mtx,fri-mod hd,mnr 2820 disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2810m: clr-trnsl,lt gry,vf-med,mod srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis por,fr inf por, fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.3 | 33 |
| RES_DEEP (ohm.m) | 49.29 | 33 |
| RES_SHALLOW (ohm.m) | 38.98 | 33 |

---

### 2825 m MD — Interval 2822.5 – 2827.5 m

**Sample Description (spreadsheet):** Sample 2825m: 5% Siltstone, 95% very fine to coarse Sandstone, 90% moderately bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 149.0 U |
| mTVDss | -1223.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: lt gry,lt trnsl brn,clr-trnsl, vf-crs,tr v crs,pr srt,sbang-sbrnd,wk-mod sil cmt,com lt gry slty mtx,fri-mod hd,mnr 2820 disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2810m: clr-trnsl,lt gry,vf-med,mod srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis por,fr inf por, fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 33 |
| RES_DEEP (ohm.m) | 44.67 | 33 |
| RES_SHALLOW (ohm.m) | 35.17 | 33 |

---

### 2830 m MD — Interval 2827.5 – 2832.5 m

**Sample Description (spreadsheet):** Sample 2830m: 0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 141.0 U |
| mTVDss | -1223.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis,por,fr inf por, fluor. SURVEY @ 2835.5m
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-med,tr crs, mod srt,sbrnd-sbang,tr wk sil cmt,tr lt gry slty mtx,dom disagg,com fri aggs,pr vis 75 / 6 / 5 / 7 / 7 157 U por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.8 | 32 |
| RES_DEEP (ohm.m) | 43.82 | 32 |
| RES_SHALLOW (ohm.m) | 35.52 | 32 |

---

### 2835 m MD — Interval 2832.5 – 2837.5 m

**Sample Description (spreadsheet):** Sample 2835m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 146.0 U |
| mTVDss | -1223.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis,por,fr inf por, fluor. SURVEY @ 2835.5m
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-med,tr crs, mod srt,sbrnd-sbang,tr wk sil cmt,tr lt gry slty mtx,dom disagg,com fri aggs,pr vis 75 / 6 / 5 / 7 / 7 157 U por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.6 | 33 |
| RES_DEEP (ohm.m) | 43.31 | 33 |
| RES_SHALLOW (ohm.m) | 32.20 | 33 |

---

### 2840 m MD — Interval 2837.5 – 2842.5 m

**Sample Description (spreadsheet):** Sample 2840m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 156.0 U |
| mTVDss | -1223.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis,por,fr inf por, fluor. SURVEY @ 2835.5m
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-med,tr crs, mod srt,sbrnd-sbang,tr wk sil cmt,tr lt gry slty mtx,dom disagg,com fri aggs,pr vis 75 / 6 / 5 / 7 / 7 157 U por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 33 |
| RES_DEEP (ohm.m) | 38.18 | 33 |
| RES_SHALLOW (ohm.m) | 29.77 | 33 |

---

### 2845 m MD — Interval 2842.5 – 2847.5 m

**Sample Description (spreadsheet):** Sample 2845m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 152U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 152.0 U |
| mTVDss | -1223.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,wk sil cmt,tr lt gry slty mtx, dom disagg,fri aggs,pr vis,por,fr inf por, fluor. SURVEY @ 2835.5m
- **SANDSTONE** @ ~2830m: clr-trnsl,lt gry,vf-med,tr crs, mod srt,sbrnd-sbang,tr wk sil cmt,tr lt gry slty mtx,dom disagg,com fri aggs,pr vis 75 / 6 / 5 / 7 / 7 157 U por,fr inf por,fluor.
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 38.27 | 33 |
| RES_SHALLOW (ohm.m) | 29.04 | 33 |

---

### 2850 m MD — Interval 2847.5 – 2852.5 m

**Sample Description (spreadsheet):** Sample 2850m: 0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 144U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 144.0 U |
| mTVDss | -1223.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.3 | 33 |
| RES_DEEP (ohm.m) | 43.13 | 33 |
| RES_SHALLOW (ohm.m) | 30.52 | 33 |

---

### 2855 m MD — Interval 2852.5 – 2857.5 m

**Sample Description (spreadsheet):** Sample 2855m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 157.0 U |
| mTVDss | -1223.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 33 |
| RES_DEEP (ohm.m) | 42.29 | 33 |
| RES_SHALLOW (ohm.m) | 32.31 | 33 |

---

### 2860 m MD — Interval 2857.5 – 2862.5 m

**Sample Description (spreadsheet):** Sample 2860m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 166.0 U |
| mTVDss | -1223.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 33 |
| RES_DEEP (ohm.m) | 41.82 | 33 |
| RES_SHALLOW (ohm.m) | 29.80 | 33 |

---

### 2865 m MD — Interval 2862.5 – 2867.5 m

**Sample Description (spreadsheet):** Sample 2865m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 151.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 33 |
| RES_DEEP (ohm.m) | 42.58 | 33 |
| RES_SHALLOW (ohm.m) | 29.53 | 33 |

---

### 2870 m MD — Interval 2867.5 – 2872.5 m

**Sample Description (spreadsheet):** Sample 2870m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright  FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 156.0 U |
| mTVDss | -1223.79 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 44.05 | 33 |
| RES_SHALLOW (ohm.m) | 30.37 | 33 |

---

### 2875 m MD — Interval 2872.5 – 2877.5 m

**Sample Description (spreadsheet):** Sample 2875m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright  FLUOR in SST. TG 173U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 173.0 U |
| mTVDss | -1223.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2860m: lt gry,pl-lt brn,v lt gry-wh, clr,trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn slty & wh arg mtx,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 33 |
| RES_DEEP (ohm.m) | 43.62 | 33 |
| RES_SHALLOW (ohm.m) | 31.17 | 33 |

---

### 2880 m MD — Interval 2877.5 – 2882.5 m

**Sample Description (spreadsheet):** Sample 2880m: trace Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% moderately bright  FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% moderately bright |
| Total Gas | 186.0 U |
| mTVDss | -1223.78 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 33 |
| RES_DEEP (ohm.m) | 41.97 | 33 |
| RES_SHALLOW (ohm.m) | 30.93 | 33 |

---

### 2885 m MD — Interval 2882.5 – 2887.5 m

**Sample Description (spreadsheet):** Sample 2885m: 0% Siltstone, 100% very fine to fine, rare medium Sandstone, 100% moderately bright  FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 161.0 U |
| mTVDss | -1223.80 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 32 |
| RES_DEEP (ohm.m) | 48.65 | 32 |
| RES_SHALLOW (ohm.m) | 33.48 | 32 |

---

### 2890 m MD — Interval 2887.5 – 2892.5 m

**Sample Description (spreadsheet):** Sample 2890m: 0% Siltstone, 100% very fine to fine, rare medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 147.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 33 |
| RES_DEEP (ohm.m) | 53.06 | 33 |
| RES_SHALLOW (ohm.m) | 36.94 | 33 |

---

### 2895 m MD — Interval 2892.5 – 2897.5 m

**Sample Description (spreadsheet):** Sample 2895m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 170.0 U |
| mTVDss | -1223.82 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.4 | 33 |
| RES_DEEP (ohm.m) | 52.34 | 33 |
| RES_SHALLOW (ohm.m) | 39.47 | 33 |

---

### 2900 m MD — Interval 2897.5 – 2902.5 m

**Sample Description (spreadsheet):** Sample 2900m: 0% Siltstone, 100% very fine to fine, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 235.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 33 |
| RES_DEEP (ohm.m) | 53.09 | 33 |
| RES_SHALLOW (ohm.m) | 40.53 | 33 |

---

### 2905 m MD — Interval 2902.5 – 2907.5 m

**Sample Description (spreadsheet):** Sample 2905m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 204U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 204.0 U |
| mTVDss | -1223.80 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 33 |
| RES_DEEP (ohm.m) | 49.49 | 33 |
| RES_SHALLOW (ohm.m) | 37.23 | 33 |

---

### 2910 m MD — Interval 2907.5 – 2912.5 m

**Sample Description (spreadsheet):** Sample 2910m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 212U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 212.0 U |
| mTVDss | -1223.79 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.4 | 32 |
| RES_DEEP (ohm.m) | 50.21 | 32 |
| RES_SHALLOW (ohm.m) | 38.25 | 32 |

---

### 2915 m MD — Interval 2912.5 – 2917.5 m

**Sample Description (spreadsheet):** Sample 2915m: 0% Siltstone, 100% very fine to fine, minor medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 195.0 U |
| mTVDss | -1223.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: pl-lt brn,lt gry,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt, mnr gry-brn slty mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,gd-fr inf por 78 / 6 / 4 / 6 / 6 236 U fluor.
- **SILTSTONE** @ ~2930m: med-dk gry,med gry brn, aren,tr carb spks,tr micmic,frm-mod hd, 2940 sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.4 | 33 |
| RES_DEEP (ohm.m) | 49.14 | 33 |
| RES_SHALLOW (ohm.m) | 39.15 | 33 |

---

### 2920 m MD — Interval 2917.5 – 2922.5 m

**Sample Description (spreadsheet):** Sample 2920m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 193U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 193.0 U |
| mTVDss | -1223.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: pl-lt brn,lt gry,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt, mnr gry-brn slty mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,gd-fr inf por 78 / 6 / 4 / 6 / 6 236 U fluor.
- **SILTSTONE** @ ~2930m: med-dk gry,med gry brn, aren,tr carb spks,tr micmic,frm-mod hd, 2940 sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 33 |
| RES_DEEP (ohm.m) | 48.61 | 33 |
| RES_SHALLOW (ohm.m) | 38.22 | 33 |

---

### 2925 m MD — Interval 2922.5 – 2927.5 m

**Sample Description (spreadsheet):** Sample 2925m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 195.0 U |
| mTVDss | -1223.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: pl-lt brn,lt gry,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt, mnr gry-brn slty mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,gd-fr inf por 78 / 6 / 4 / 6 / 6 236 U fluor.
- **SILTSTONE** @ ~2930m: med-dk gry,med gry brn, aren,tr carb spks,tr micmic,frm-mod hd, 2940 sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.5 | 33 |
| RES_DEEP (ohm.m) | 55.55 | 33 |
| RES_SHALLOW (ohm.m) | 40.00 | 33 |

---

### 2930 m MD — Interval 2927.5 – 2932.5 m

**Sample Description (spreadsheet):** Sample 2930m: 0% Siltstone, 100% very fine to coarse, trace very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 208U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 208.0 U |
| mTVDss | -1223.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: pl-lt brn,lt gry,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt, mnr gry-brn slty mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,gd-fr inf por 78 / 6 / 4 / 6 / 6 236 U fluor.
- **SILTSTONE** @ ~2930m: med-dk gry,med gry brn, aren,tr carb spks,tr micmic,frm-mod hd, 2940 sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 48.57 | 33 |
| RES_SHALLOW (ohm.m) | 33.54 | 33 |

---

### 2935 m MD — Interval 2932.5 – 2937.5 m

**Sample Description (spreadsheet):** Sample 2935m: Trace Siltstone, 100% very fine to medium, minor coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, minor coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 202.0 U |
| mTVDss | -1223.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: pl-lt brn,lt gry,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt, mnr gry-brn slty mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,gd-fr inf por 78 / 6 / 4 / 6 / 6 236 U fluor.
- **SILTSTONE** @ ~2930m: med-dk gry,med gry brn, aren,tr carb spks,tr micmic,frm-mod hd, 2940 sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 32 |
| RES_DEEP (ohm.m) | 51.83 | 32 |
| RES_SHALLOW (ohm.m) | 38.38 | 32 |

---

### 2940 m MD — Interval 2937.5 – 2942.5 m

**Sample Description (spreadsheet):** Sample 2940m: Trace Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 235.0 U |
| mTVDss | -1223.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: pl-lt brn,lt gry,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt, mnr gry-brn slty mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,gd-fr inf por 78 / 6 / 4 / 6 / 6 236 U fluor.
- **SILTSTONE** @ ~2930m: med-dk gry,med gry brn, aren,tr carb spks,tr micmic,frm-mod hd, 2940 sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 53.05 | 33 |
| RES_SHALLOW (ohm.m) | 39.53 | 33 |

---

### 2945 m MD — Interval 2942.5 – 2947.5 m

**Sample Description (spreadsheet):** Sample 2945m: 0% Siltstone, 100% very fine to coarse, trace very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 203.0 U |
| mTVDss | -1223.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: pl-lt brn,lt gry,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,tr ang,wk sil cmt, mnr gry-brn slty mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,gd-fr inf por 78 / 6 / 4 / 6 / 6 236 U fluor.
- **SILTSTONE** @ ~2930m: med-dk gry,med gry brn, aren,tr carb spks,tr micmic,frm-mod hd, 2940 sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 33 |
| RES_DEEP (ohm.m) | 52.21 | 33 |
| RES_SHALLOW (ohm.m) | 36.08 | 33 |

---

### 2950 m MD — Interval 2947.5 – 2952.5 m

**Sample Description (spreadsheet):** Sample 2950m: 0% Siltstone, 100% very fine to fine, minor medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 217U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 217.0 U |
| mTVDss | -1223.61 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 46.92 | 33 |
| RES_SHALLOW (ohm.m) | 33.20 | 33 |

---

### 2955 m MD — Interval 2952.5 – 2957.5 m

**Sample Description (spreadsheet):** Sample 2955m: 0% Siltstone, 100% very fine to fine, minor medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 207.0 U |
| mTVDss | -1223.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,pl-lt brn,lt gry,f-v crs,v pr srt,sbang-sbrnd,mnr ang,wk sil cmt,tr gry-brn slty mtx,pred disagg,mnr fri,v gd inf por,pr vis por,fluor. 77 / 6 / 5 / 6 / 6 209 U
- **SANDSTONE** @ ~2970m: pl-lt brn,lt gry,v lt gry-wh, clr,trnsl,vf-med,mnr crs-v crs,mod-pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr gry-brn slty & wh arg mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 33 |
| RES_DEEP (ohm.m) | 43.93 | 33 |
| RES_SHALLOW (ohm.m) | 32.45 | 33 |

---

### 2960 m MD — Interval 2957.5 – 2962.5 m

**Sample Description (spreadsheet):** Sample 2960m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 251U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 251.0 U |
| mTVDss | -1223.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,pl-lt brn,lt gry,f-v crs,v pr srt,sbang-sbrnd,mnr ang,wk sil cmt,tr gry-brn slty mtx,pred disagg,mnr fri,v gd inf por,pr vis por,fluor. 77 / 6 / 5 / 6 / 6 209 U
- **SANDSTONE** @ ~2970m: pl-lt brn,lt gry,v lt gry-wh, clr,trnsl,vf-med,mnr crs-v crs,mod-pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr gry-brn slty & wh arg mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.4 | 32 |
| RES_DEEP (ohm.m) | 47.81 | 32 |
| RES_SHALLOW (ohm.m) | 36.83 | 32 |

---

### 2965 m MD — Interval 2962.5 – 2967.5 m

**Sample Description (spreadsheet):** Sample 2965m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 209.0 U |
| mTVDss | -1223.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,pl-lt brn,lt gry,f-v crs,v pr srt,sbang-sbrnd,mnr ang,wk sil cmt,tr gry-brn slty mtx,pred disagg,mnr fri,v gd inf por,pr vis por,fluor. 77 / 6 / 5 / 6 / 6 209 U
- **SANDSTONE** @ ~2970m: pl-lt brn,lt gry,v lt gry-wh, clr,trnsl,vf-med,mnr crs-v crs,mod-pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr gry-brn slty & wh arg mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 33 |
| RES_DEEP (ohm.m) | 50.20 | 33 |
| RES_SHALLOW (ohm.m) | 39.28 | 33 |

---

### 2970 m MD — Interval 2967.5 – 2972.5 m

**Sample Description (spreadsheet):** Sample 2970m: 0% Siltstone, 100% very fine to very coarse Sandstone, 80% moderately bright to dull FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 154.0 U |
| mTVDss | -1223.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,pl-lt brn,lt gry,f-v crs,v pr srt,sbang-sbrnd,mnr ang,wk sil cmt,tr gry-brn slty mtx,pred disagg,mnr fri,v gd inf por,pr vis por,fluor. 77 / 6 / 5 / 6 / 6 209 U
- **SANDSTONE** @ ~2970m: pl-lt brn,lt gry,v lt gry-wh, clr,trnsl,vf-med,mnr crs-v crs,mod-pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr gry-brn slty & wh arg mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.6 | 33 |
| RES_DEEP (ohm.m) | 47.05 | 33 |
| RES_SHALLOW (ohm.m) | 40.65 | 33 |

---

### 2975 m MD — Interval 2972.5 – 2977.5 m

**Sample Description (spreadsheet):** Sample 2975m: 0% Siltstone, 100% fine to very coarse Sandstone, 90% dull to moderately bright FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 209.0 U |
| mTVDss | -1223.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,pl-lt brn,lt gry,f-v crs,v pr srt,sbang-sbrnd,mnr ang,wk sil cmt,tr gry-brn slty mtx,pred disagg,mnr fri,v gd inf por,pr vis por,fluor. 77 / 6 / 5 / 6 / 6 209 U
- **SANDSTONE** @ ~2970m: pl-lt brn,lt gry,v lt gry-wh, clr,trnsl,vf-med,mnr crs-v crs,mod-pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr gry-brn slty & wh arg mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.4 | 33 |
| RES_DEEP (ohm.m) | 51.93 | 33 |
| RES_SHALLOW (ohm.m) | 45.25 | 33 |

---

### 2980 m MD — Interval 2977.5 – 2982.5 m

**Sample Description (spreadsheet):** Sample 2980m: 0% Siltstone, 100% fine to very coarse Sandstone, 90% dull to moderately bright FLUOR in SST. TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 183.0 U |
| mTVDss | -1223.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,pl-lt brn,lt gry,f-v crs,v pr srt,sbang-sbrnd,mnr ang,wk sil cmt,tr gry-brn slty mtx,pred disagg,mnr fri,v gd inf por,pr vis por,fluor. 77 / 6 / 5 / 6 / 6 209 U
- **SANDSTONE** @ ~2970m: pl-lt brn,lt gry,v lt gry-wh, clr,trnsl,vf-med,mnr crs-v crs,mod-pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr gry-brn slty & wh arg mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.3 | 33 |
| RES_DEEP (ohm.m) | 58.04 | 33 |
| RES_SHALLOW (ohm.m) | 49.24 | 33 |

---

### 2985 m MD — Interval 2982.5 – 2987.5 m

**Sample Description (spreadsheet):** Sample 2985m: 0% Siltstone, 100% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |
| mTVDss | -1223.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,pl-lt brn,lt gry,f-v crs,v pr srt,sbang-sbrnd,mnr ang,wk sil cmt,tr gry-brn slty mtx,pred disagg,mnr fri,v gd inf por,pr vis por,fluor. 77 / 6 / 5 / 6 / 6 209 U
- **SANDSTONE** @ ~2970m: pl-lt brn,lt gry,v lt gry-wh, clr,trnsl,vf-med,mnr crs-v crs,mod-pr srt, sbang-sbrnd,tr ang,wk sil cmt,tr gry-brn slty & wh arg mtx,tr slty lams,tr carb spks,fri-disagg,pr vis por,fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.6 | 33 |
| RES_DEEP (ohm.m) | 56.52 | 33 |
| RES_SHALLOW (ohm.m) | 43.51 | 33 |

---

### 2990 m MD — Interval 2987.5 – 2992.5 m

**Sample Description (spreadsheet):** Sample 2990m: 0% Siltstone, 100% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 202.0 U |
| mTVDss | -1223.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- med,tr crs-v crs,mod-pr srt,sbang-sbrnd, tr ang,wk sil cmt,tr gry-brn slty mtx,tr carb spks,fri,com disagg,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- (1260) med,tr crs,mod-wl srt,sbang-sbrnd,wk sil cmt,tr-mnr gry-brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 32 |
| RES_DEEP (ohm.m) | 44.48 | 32 |
| RES_SHALLOW (ohm.m) | 35.99 | 32 |

---

### 2995 m MD — Interval 2992.5 – 2997.5 m

**Sample Description (spreadsheet):** Sample 2995m: 0% Siltstone, 100% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 236U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 236.0 U |
| mTVDss | -1223.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- med,tr crs-v crs,mod-pr srt,sbang-sbrnd, tr ang,wk sil cmt,tr gry-brn slty mtx,tr carb spks,fri,com disagg,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- (1260) med,tr crs,mod-wl srt,sbang-sbrnd,wk sil cmt,tr-mnr gry-brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.6 | 33 |
| RES_DEEP (ohm.m) | 45.13 | 33 |
| RES_SHALLOW (ohm.m) | 34.66 | 33 |

---

### 3000 m MD — Interval 2997.5 – 3002.5 m

**Sample Description (spreadsheet):** Sample 3000m: 0% Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 197.0 U |
| mTVDss | -1223.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- med,tr crs-v crs,mod-pr srt,sbang-sbrnd, tr ang,wk sil cmt,tr gry-brn slty mtx,tr carb spks,fri,com disagg,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- (1260) med,tr crs,mod-wl srt,sbang-sbrnd,wk sil cmt,tr-mnr gry-brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.5 | 33 |
| RES_DEEP (ohm.m) | 45.87 | 33 |
| RES_SHALLOW (ohm.m) | 34.29 | 33 |

---

### 3005 m MD — Interval 3002.5 – 3007.5 m

**Sample Description (spreadsheet):** Sample 3005m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 151.0 U |
| mTVDss | -1223.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- med,tr crs-v crs,mod-pr srt,sbang-sbrnd, tr ang,wk sil cmt,tr gry-brn slty mtx,tr carb spks,fri,com disagg,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2990m: pl-lt brn,lt gry,clr,trnsl,vf- (1260) med,tr crs,mod-wl srt,sbang-sbrnd,wk sil cmt,tr-mnr gry-brn slty mtx,tr carb spks, fri,com disagg,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.1 | 33 |
| RES_DEEP (ohm.m) | 42.37 | 33 |
| RES_SHALLOW (ohm.m) | 33.69 | 33 |

---

### 3010 m MD — Interval 3007.5 – 3012.5 m

**Sample Description (spreadsheet):** Sample 3010m: 0% Siltstone, 100% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 175.0 U |
| mTVDss | -1223.72 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 33 |
| RES_DEEP (ohm.m) | 45.63 | 33 |
| RES_SHALLOW (ohm.m) | 39.94 | 33 |

---

### 3015 m MD — Interval 3012.5 – 3017.5 m

**Sample Description (spreadsheet):** Sample 3015m: Trace Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 99.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 215.0 U |
| mTVDss | -1223.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3030m: med-dk gry,med-dk gry brn, v dk gry,aren,mnr arg,tr sandy lams,tr micmic,tr carb spks,frm-mod hd,hd i/p, sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-mnr mod sil cmt,mnr brn gry slty mtx,tr carb spks,tr slty lams,fri,com disagg,mnr mod hd,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 32 |
| RES_DEEP (ohm.m) | 48.59 | 32 |
| RES_SHALLOW (ohm.m) | 43.97 | 32 |

---

### 3020 m MD — Interval 3017.5 – 3022.5 m

**Sample Description (spreadsheet):** Sample 3020m: Trace Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 193U

| Property | Value |
|----------|-------|
| % Sandstone | 99.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 193.0 U |
| mTVDss | -1223.75 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3030m: med-dk gry,med-dk gry brn, v dk gry,aren,mnr arg,tr sandy lams,tr micmic,tr carb spks,frm-mod hd,hd i/p, sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-mnr mod sil cmt,mnr brn gry slty mtx,tr carb spks,tr slty lams,fri,com disagg,mnr mod hd,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 44.63 | 33 |
| RES_SHALLOW (ohm.m) | 39.59 | 33 |

---

### 3025 m MD — Interval 3022.5 – 3027.5 m

**Sample Description (spreadsheet):** Sample 3025m: Trace Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 99.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 185.0 U |
| mTVDss | -1223.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3030m: med-dk gry,med-dk gry brn, v dk gry,aren,mnr arg,tr sandy lams,tr micmic,tr carb spks,frm-mod hd,hd i/p, sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-mnr mod sil cmt,mnr brn gry slty mtx,tr carb spks,tr slty lams,fri,com disagg,mnr mod hd,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.3 | 33 |
| RES_DEEP (ohm.m) | 47.66 | 33 |
| RES_SHALLOW (ohm.m) | 39.85 | 33 |

---

### 3030 m MD — Interval 3027.5 – 3032.5 m

**Sample Description (spreadsheet):** Sample 3030m: Trace Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 99.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 175.0 U |
| mTVDss | -1223.78 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3030m: med-dk gry,med-dk gry brn, v dk gry,aren,mnr arg,tr sandy lams,tr micmic,tr carb spks,frm-mod hd,hd i/p, sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-mnr mod sil cmt,mnr brn gry slty mtx,tr carb spks,tr slty lams,fri,com disagg,mnr mod hd,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 33 |
| RES_DEEP (ohm.m) | 41.78 | 33 |
| RES_SHALLOW (ohm.m) | 35.44 | 33 |

---

### 3035 m MD — Interval 3032.5 – 3037.5 m

**Sample Description (spreadsheet):** Sample 3035m: 5% Siltstone, 95% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 173U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 173.0 U |
| mTVDss | -1223.79 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3030m: med-dk gry,med-dk gry brn, v dk gry,aren,mnr arg,tr sandy lams,tr micmic,tr carb spks,frm-mod hd,hd i/p, sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-mnr mod sil cmt,mnr brn gry slty mtx,tr carb spks,tr slty lams,fri,com disagg,mnr mod hd,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 33 |
| RES_DEEP (ohm.m) | 44.35 | 33 |
| RES_SHALLOW (ohm.m) | 38.98 | 33 |

---

### 3040 m MD — Interval 3037.5 – 3042.5 m

**Sample Description (spreadsheet):** Sample 3040m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 190.0 U |
| mTVDss | -1223.80 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3030m: med-dk gry,med-dk gry brn, v dk gry,aren,mnr arg,tr sandy lams,tr micmic,tr carb spks,frm-mod hd,hd i/p, sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-mnr mod sil cmt,mnr brn gry slty mtx,tr carb spks,tr slty lams,fri,com disagg,mnr mod hd,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 32 |
| RES_DEEP (ohm.m) | 37.33 | 32 |
| RES_SHALLOW (ohm.m) | 30.03 | 32 |

---

### 3045 m MD — Interval 3042.5 – 3047.5 m

**Sample Description (spreadsheet):** Sample 3045m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 198.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3030m: med-dk gry,med-dk gry brn, v dk gry,aren,mnr arg,tr sandy lams,tr micmic,tr carb spks,frm-mod hd,hd i/p, sbblky-sbfiss.
- **SANDSTONE** @ ~3030m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt,sbang- sbrnd,wk-mnr mod sil cmt,mnr brn gry slty mtx,tr carb spks,tr slty lams,fri,com disagg,mnr mod hd,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 33 |
| RES_DEEP (ohm.m) | 40.03 | 33 |
| RES_SHALLOW (ohm.m) | 31.25 | 33 |

---

### 3050 m MD — Interval 3047.5 – 3052.5 m

**Sample Description (spreadsheet):** Sample 3050m: 5% Siltstone, 95% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 187U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright |
| Total Gas | 187.0 U |
| mTVDss | -1223.83 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 33 |
| RES_DEEP (ohm.m) | 40.47 | 33 |
| RES_SHALLOW (ohm.m) | 34.97 | 33 |

---

### 3055 m MD — Interval 3052.5 – 3057.5 m

**Sample Description (spreadsheet):** Sample 3055m: 10% Siltstone, 90% very fine to coarse, rare very coarse Sandstone, 80% moderately bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 80.0% nan |
| Total Gas | 214.0 U |
| mTVDss | -1223.84 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 33 |
| RES_DEEP (ohm.m) | 37.48 | 33 |
| RES_SHALLOW (ohm.m) | 33.33 | 33 |

---

### 3060 m MD — Interval 3057.5 – 3062.5 m

**Sample Description (spreadsheet):** Sample 3060m: 5% Siltstone, 95% very fine to coarse, trace very coarse Sandstone, 90% moderately bright FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 90.0% very coarse Sandstone, 90% moderately bright |
| Total Gas | 178.0 U |
| mTVDss | -1223.85 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 38.67 | 33 |
| RES_SHALLOW (ohm.m) | 33.90 | 33 |

---

### 3065 m MD — Interval 3062.5 – 3067.5 m

**Sample Description (spreadsheet):** Sample 3065m: 10% Siltstone, 90% very fine to coarse, trace very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 155.0 U |
| mTVDss | -1223.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn, vf-med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg, pr vis por,fr inf por,fluor. SURVEY @ 3086.8m
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn,vf- med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 32 |
| RES_DEEP (ohm.m) | 36.67 | 32 |
| RES_SHALLOW (ohm.m) | 31.39 | 32 |

---

### 3070 m MD — Interval 3067.5 – 3072.5 m

**Sample Description (spreadsheet):** Sample 3070m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 204U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 204.0 U |
| mTVDss | -1223.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn, vf-med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg, pr vis por,fr inf por,fluor. SURVEY @ 3086.8m
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn,vf- med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 33 |
| RES_DEEP (ohm.m) | 35.04 | 33 |
| RES_SHALLOW (ohm.m) | 32.33 | 33 |

---

### 3075 m MD — Interval 3072.5 – 3077.5 m

**Sample Description (spreadsheet):** Sample 3075m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |
| mTVDss | -1223.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn, vf-med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg, pr vis por,fr inf por,fluor. SURVEY @ 3086.8m
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn,vf- med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 33.78 | 33 |
| RES_SHALLOW (ohm.m) | 30.69 | 33 |

---

### 3080 m MD — Interval 3077.5 – 3082.5 m

**Sample Description (spreadsheet):** Sample 3080m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 169U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright |
| Total Gas | 169.0 U |
| mTVDss | -1223.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn, vf-med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg, pr vis por,fr inf por,fluor. SURVEY @ 3086.8m
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn,vf- med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.6 | 33 |
| RES_DEEP (ohm.m) | 33.76 | 33 |
| RES_SHALLOW (ohm.m) | 28.18 | 33 |

---

### 3085 m MD — Interval 3082.5 – 3087.5 m

**Sample Description (spreadsheet):** Sample 3085m: 0% Siltstone, 100% very fine to fine, minor medium Sandstone, 100% moderately bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |
| mTVDss | -1223.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn, vf-med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg, pr vis por,fr inf por,fluor. SURVEY @ 3086.8m
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn,vf- med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.6 | 33 |
| RES_DEEP (ohm.m) | 33.61 | 33 |
| RES_SHALLOW (ohm.m) | 27.41 | 33 |

---

### 3090 m MD — Interval 3087.5 – 3092.5 m

**Sample Description (spreadsheet):** Sample 3090m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 187U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 187.0 U |
| mTVDss | -1223.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn, vf-med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg, pr vis por,fr inf por,fluor. SURVEY @ 3086.8m
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn,vf- med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 32 |
| RES_DEEP (ohm.m) | 35.68 | 32 |
| RES_SHALLOW (ohm.m) | 29.54 | 32 |

---

### 3095 m MD — Interval 3092.5 – 3097.5 m

**Sample Description (spreadsheet):** Sample 3095m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 205U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 205.0 U |
| mTVDss | -1223.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn, vf-med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg, pr vis por,fr inf por,fluor. SURVEY @ 3086.8m
- **SANDSTONE** @ ~3080m: clr-trnsl,lt gry,lt gry brn,vf- med,mod srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 33 |
| RES_DEEP (ohm.m) | 35.06 | 33 |
| RES_SHALLOW (ohm.m) | 29.54 | 33 |

---

### 3100 m MD — Interval 3097.5 – 3102.5 m

**Sample Description (spreadsheet):** Sample 3100m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 194U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 194.0 U |
| mTVDss | -1223.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por, fr inf por,fluor.
- **SANDSTONE** @ ~3090m: 2-6 klbs 3100 SANDSTONE:lt gry,lt gry brn,vf-f,tr med, FLW: 250-270 gpm pr vis por,fr inf por,fluor. SURVEY @ 3106.1m
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 34.67 | 33 |
| RES_SHALLOW (ohm.m) | 27.60 | 33 |

---

### 3105 m MD — Interval 3102.5 – 3107.5 m

**Sample Description (spreadsheet):** Sample 3105m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 183.0 U |
| mTVDss | -1223.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr lt gry slty mtx,fri,com disagg,pr vis por, fr inf por,fluor.
- **SANDSTONE** @ ~3090m: 2-6 klbs 3100 SANDSTONE:lt gry,lt gry brn,vf-f,tr med, FLW: 250-270 gpm pr vis por,fr inf por,fluor. SURVEY @ 3106.1m
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.0 | 33 |
| RES_DEEP (ohm.m) | 33.86 | 33 |
| RES_SHALLOW (ohm.m) | 26.93 | 33 |

---

### 3110 m MD — Interval 3107.5 – 3112.5 m

**Sample Description (spreadsheet):** Sample 3110m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 199.0 U |
| mTVDss | -1223.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: lt gry,lt gry brn,vf-f,wl srt, sbrnd-sbang,wk sil cmt,com lt gry slty mtx,tr carb spks,fri,tr disagg,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3110m: med brn,med-dk gry brn, aren,micmic i/p,frm-mod hd,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 33 |
| RES_DEEP (ohm.m) | 33.63 | 33 |
| RES_SHALLOW (ohm.m) | 27.82 | 33 |

---

### 3115 m MD — Interval 3112.5 – 3117.5 m

**Sample Description (spreadsheet):** Sample 3115m: 5% Siltstone, 95% very fine to fine Sandstone, 90% moderately bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 135.0 U |
| mTVDss | -1223.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: lt gry,lt gry brn,vf-f,wl srt, sbrnd-sbang,wk sil cmt,com lt gry slty mtx,tr carb spks,fri,tr disagg,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3110m: med brn,med-dk gry brn, aren,micmic i/p,frm-mod hd,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 35.05 | 33 |
| RES_SHALLOW (ohm.m) | 29.03 | 33 |

---

### 3120 m MD — Interval 3117.5 – 3122.5 m

**Sample Description (spreadsheet):** Sample 3120m: 5% Siltstone, 95% very fine, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 184.0 U |
| mTVDss | -1223.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: lt gry,lt gry brn,vf-f,wl srt, sbrnd-sbang,wk sil cmt,com lt gry slty mtx,tr carb spks,fri,tr disagg,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3110m: med brn,med-dk gry brn, aren,micmic i/p,frm-mod hd,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 32 |
| RES_DEEP (ohm.m) | 34.97 | 32 |
| RES_SHALLOW (ohm.m) | 28.07 | 32 |

---

### 3125 m MD — Interval 3122.5 – 3127.5 m

**Sample Description (spreadsheet):** Sample 3125m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 199.0 U |
| mTVDss | -1223.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: lt gry,lt gry brn,vf-f,wl srt, sbrnd-sbang,wk sil cmt,com lt gry slty mtx,tr carb spks,fri,tr disagg,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3110m: med brn,med-dk gry brn, aren,micmic i/p,frm-mod hd,sbblky-blky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 35.95 | 33 |
| RES_SHALLOW (ohm.m) | 30.18 | 33 |

---

### 3130 m MD — Interval 3127.5 – 3132.5 m

**Sample Description (spreadsheet):** Sample 3130m: trace Siltstone, 100% very fine to fine, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, trace coarse Sandstone, 100% moderately bright |
| Total Gas | 174.0 U |
| mTVDss | -1223.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: lt gry,lt gry brn,vf-f,wl srt, sbang-sbrnd,wk-mod sil cmt com lt gry brn slty mtx,tr carb spks,fri-mod hd,dom disagg,pr vis por,fr inf por,fluor. SURVEY @ 3125.2m
- **SANDSTONE** @ ~3120m: lt gry,lt gry brn,vf-f,tr crs grs,mod srt,sbang-sbrnd,wk-mod sil, com lt gry brn slty mtx,tr carb spks,fri- mod hd,disagg,pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 33 |
| RES_DEEP (ohm.m) | 34.65 | 33 |
| RES_SHALLOW (ohm.m) | 30.89 | 33 |

---

### 3135 m MD — Interval 3132.5 – 3137.5 m

**Sample Description (spreadsheet):** Sample 3135m: trace Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright |
| Total Gas | 158.0 U |
| mTVDss | -1223.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: lt gry,lt gry brn,vf-f,wl srt, sbang-sbrnd,wk-mod sil cmt com lt gry brn slty mtx,tr carb spks,fri-mod hd,dom disagg,pr vis por,fr inf por,fluor. SURVEY @ 3125.2m
- **SANDSTONE** @ ~3120m: lt gry,lt gry brn,vf-f,tr crs grs,mod srt,sbang-sbrnd,wk-mod sil, com lt gry brn slty mtx,tr carb spks,fri- mod hd,disagg,pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 32.45 | 33 |
| RES_SHALLOW (ohm.m) | 28.59 | 33 |

---

### 3140 m MD — Interval 3137.5 – 3142.5 m

**Sample Description (spreadsheet):** Sample 3140m: 0% Siltstone, 100% very fine to fine Sandstone, 80% moderately bright FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% nan |
| Total Gas | 121.0 U |
| mTVDss | -1223.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3130m: clr-trnsl,tr lt gry,vf-f,wl srt,sbrnd-sbang,mod-wk si cmt,com lt gry slty mtx,tr carb spks,dom disagg, fri aggs,pr vis por,pr-fr inf por,fluor. INCREASE STARGLIDE TO 1.5%
- **SANDSTONE** @ ~3140m: clr-trnsl,tr lt gry,vf-crs,pr srt,sbrnd-sbang,mod-wk si cmt,com lt gry slty mtx,tr carb spks,dom disagg,fri aggs,pr vis por,pr-fr inf por,fluor. SURVEY @ 3144.7m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 33 |
| RES_DEEP (ohm.m) | 33.31 | 33 |
| RES_SHALLOW (ohm.m) | 29.90 | 33 |

---

### 3145 m MD — Interval 3142.5 – 3147.5 m

**Sample Description (spreadsheet):** Sample 3145m: 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright FLUOR in SST. TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 113.0 U |
| mTVDss | -1223.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3130m: clr-trnsl,tr lt gry,vf-f,wl srt,sbrnd-sbang,mod-wk si cmt,com lt gry slty mtx,tr carb spks,dom disagg, fri aggs,pr vis por,pr-fr inf por,fluor. INCREASE STARGLIDE TO 1.5%
- **SANDSTONE** @ ~3140m: clr-trnsl,tr lt gry,vf-crs,pr srt,sbrnd-sbang,mod-wk si cmt,com lt gry slty mtx,tr carb spks,dom disagg,fri aggs,pr vis por,pr-fr inf por,fluor. SURVEY @ 3144.7m
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 32 |
| RES_DEEP (ohm.m) | 33.48 | 32 |
| RES_SHALLOW (ohm.m) | 30.04 | 32 |

---

### 3150 m MD — Interval 3147.5 – 3152.5 m

**Sample Description (spreadsheet):** Sample 3150m: 0% Siltstone, 100% very fine to coarse Sandstone, 90% moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 151.0 U |
| mTVDss | -1223.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3140m: clr-trnsl,tr lt gry,vf-crs,pr srt,sbrnd-sbang,mod-wk si cmt,com lt gry slty mtx,tr carb spks,dom disagg,fri aggs,pr vis por,pr-fr inf por,fluor. SURVEY @ 3144.7m
- **SANDSTONE** @ ~3140m: clr-trnsl,tr lt gry,vf-med,tr crs,pr srt,sbrnd-sbang,mod-wk sil cmt, com lt gry slty mtx,tr carb spks,dom disagg,fri aggs,pr vis por,pr-fr inf por, fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 33 |
| RES_DEEP (ohm.m) | 32.47 | 33 |
| RES_SHALLOW (ohm.m) | 29.27 | 33 |

---

### 3155 m MD — Interval 3152.5 – 3157.5 m

**Sample Description (spreadsheet):** Sample 3155m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 133U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 133.0 U |
| mTVDss | -1223.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3140m: clr-trnsl,tr lt gry,vf-crs,pr srt,sbrnd-sbang,mod-wk si cmt,com lt gry slty mtx,tr carb spks,dom disagg,fri aggs,pr vis por,pr-fr inf por,fluor. SURVEY @ 3144.7m
- **SANDSTONE** @ ~3140m: clr-trnsl,tr lt gry,vf-med,tr crs,pr srt,sbrnd-sbang,mod-wk sil cmt, com lt gry slty mtx,tr carb spks,dom disagg,fri aggs,pr vis por,pr-fr inf por, fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.7 | 33 |
| RES_DEEP (ohm.m) | 32.35 | 33 |
| RES_SHALLOW (ohm.m) | 28.44 | 33 |

---

### 3160 m MD — Interval 3157.5 – 3162.5 m

**Sample Description (spreadsheet):** Sample 3160m: 0% Siltstone, 100% very fine to fine, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 137.0 U |
| mTVDss | -1223.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-med,mnr crs,mod-pr srt,sbrnd-sbang, tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-f,tr crs,mod-wl srt,sbrnd-sbang,tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor. 3170 SURVEY @ 3171.2m
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 33.51 | 33 |
| RES_SHALLOW (ohm.m) | 28.13 | 33 |

---

### 3165 m MD — Interval 3162.5 – 3167.5 m

**Sample Description (spreadsheet):** Sample 3165m: 0% Siltstone, 100% very fine to medium, minor coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 119.0 U |
| mTVDss | -1223.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-med,mnr crs,mod-pr srt,sbrnd-sbang, tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-f,tr crs,mod-wl srt,sbrnd-sbang,tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor. 3170 SURVEY @ 3171.2m
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 34.36 | 33 |
| RES_SHALLOW (ohm.m) | 26.37 | 33 |

---

### 3170 m MD — Interval 3167.5 – 3172.5 m

**Sample Description (spreadsheet):** Sample 3170m: 0% Siltstone, 100% very fine to fine, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 147.0 U |
| mTVDss | -1222.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-med,mnr crs,mod-pr srt,sbrnd-sbang, tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-f,tr crs,mod-wl srt,sbrnd-sbang,tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor. 3170 SURVEY @ 3171.2m
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.1 | 32 |
| RES_DEEP (ohm.m) | 33.52 | 32 |
| RES_SHALLOW (ohm.m) | 26.49 | 32 |

---

### 3175 m MD — Interval 3172.5 – 3177.5 m

**Sample Description (spreadsheet):** Sample 3175m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |
| mTVDss | -1222.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-med,mnr crs,mod-pr srt,sbrnd-sbang, tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3160m: clr-trnsl,tr lt gry,lt brn gry, vf-f,tr crs,mod-wl srt,sbrnd-sbang,tr lt gry slty mtx,dom disagg,mnr fri aggs, pr vis por,fr inf por,fluor. 3170 SURVEY @ 3171.2m
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 33 |
| RES_DEEP (ohm.m) | 34.26 | 33 |
| RES_SHALLOW (ohm.m) | 26.37 | 33 |

---

### 3180 m MD — Interval 3177.5 – 3182.5 m

**Sample Description (spreadsheet):** Sample 3180m: 0% Siltstone, 100% very fine to fine, minor medium Sandstone, 100% moderately bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 191.0 U |
| mTVDss | -1222.73 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.1 | 33 |
| RES_DEEP (ohm.m) | 36.08 | 33 |
| RES_SHALLOW (ohm.m) | 26.72 | 33 |

---

### 3185 m MD — Interval 3182.5 – 3187.5 m

**Sample Description (spreadsheet):** Sample 3185m: 0% Siltstone, 100% very fine to coarse Sandstone, 100%  moderately bright to bright FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 157.0 U |
| mTVDss | -1222.62 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 33 |
| RES_DEEP (ohm.m) | 35.29 | 33 |
| RES_SHALLOW (ohm.m) | 24.36 | 33 |

---

### 3190 m MD — Interval 3187.5 – 3192.5 m

**Sample Description (spreadsheet):** Sample 3190m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 166.0 U |
| mTVDss | -1222.51 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.2 | 33 |
| RES_DEEP (ohm.m) | 33.43 | 33 |
| RES_SHALLOW (ohm.m) | 27.92 | 33 |

---

### 3195 m MD — Interval 3192.5 – 3197.5 m

**Sample Description (spreadsheet):** Sample 3195m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 145.0 U |
| mTVDss | -1222.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt, com lt gry slty mtx,tr carb spks,mod hd, com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt 78 / 6 / 4 / 6 / 6 171 U com lt gry slty mtx,tr carb spks mod hd,com disagg,pr vis por,fr inf 3220 por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.4 | 32 |
| RES_DEEP (ohm.m) | 44.26 | 32 |
| RES_SHALLOW (ohm.m) | 35.89 | 32 |

---

### 3200 m MD — Interval 3197.5 – 3202.5 m

**Sample Description (spreadsheet):** Sample 3200m: 0% Siltstone, 100% very fine to fine, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 159U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 159.0 U |
| mTVDss | -1222.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt, com lt gry slty mtx,tr carb spks,mod hd, com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt 78 / 6 / 4 / 6 / 6 171 U com lt gry slty mtx,tr carb spks mod hd,com disagg,pr vis por,fr inf 3220 por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 33 |
| RES_DEEP (ohm.m) | 44.69 | 33 |
| RES_SHALLOW (ohm.m) | 33.09 | 33 |

---

### 3205 m MD — Interval 3202.5 – 3207.5 m

**Sample Description (spreadsheet):** Sample 3205m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 134U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 134.0 U |
| mTVDss | -1222.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt, com lt gry slty mtx,tr carb spks,mod hd, com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt 78 / 6 / 4 / 6 / 6 171 U com lt gry slty mtx,tr carb spks mod hd,com disagg,pr vis por,fr inf 3220 por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.2 | 33 |
| RES_DEEP (ohm.m) | 47.16 | 33 |
| RES_SHALLOW (ohm.m) | 38.06 | 33 |

---

### 3210 m MD — Interval 3207.5 – 3212.5 m

**Sample Description (spreadsheet):** Sample 3210m: 0% Siltstone, 100% very fine to fine, minor coarse Sandstone, 100% moderately bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 170.0 U |
| mTVDss | -1222.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt, com lt gry slty mtx,tr carb spks,mod hd, com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt 78 / 6 / 4 / 6 / 6 171 U com lt gry slty mtx,tr carb spks mod hd,com disagg,pr vis por,fr inf 3220 por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 33 |
| RES_DEEP (ohm.m) | 48.10 | 33 |
| RES_SHALLOW (ohm.m) | 42.12 | 33 |

---

### 3215 m MD — Interval 3212.5 – 3217.5 m

**Sample Description (spreadsheet):** Sample 3215m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 175.0 U |
| mTVDss | -1222.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt, com lt gry slty mtx,tr carb spks,mod hd, com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt 78 / 6 / 4 / 6 / 6 171 U com lt gry slty mtx,tr carb spks mod hd,com disagg,pr vis por,fr inf 3220 por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 33 |
| RES_DEEP (ohm.m) | 37.49 | 33 |
| RES_SHALLOW (ohm.m) | 31.04 | 33 |

---

### 3220 m MD — Interval 3217.5 – 3222.5 m

**Sample Description (spreadsheet):** Sample 3220m: 0% Siltstone, 100% very fine to fine,trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine,trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 180.0 U |
| mTVDss | -1222.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt, com lt gry slty mtx,tr carb spks,mod hd, com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt 78 / 6 / 4 / 6 / 6 171 U com lt gry slty mtx,tr carb spks mod hd,com disagg,pr vis por,fr inf 3220 por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.5 | 33 |
| RES_DEEP (ohm.m) | 40.12 | 33 |
| RES_SHALLOW (ohm.m) | 34.81 | 33 |

---

### 3225 m MD — Interval 3222.5 – 3227.5 m

**Sample Description (spreadsheet):** Sample 3225m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 155.0 U |
| mTVDss | -1222.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt, com lt gry slty mtx,tr carb spks,mod hd, com disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3210m: clr-trnsl,lt gry,vf-f,mnr crs,mod srt,sbang-sbrnd,mod sil cmt 78 / 6 / 4 / 6 / 6 171 U com lt gry slty mtx,tr carb spks mod hd,com disagg,pr vis por,fr inf 3220 por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.0 | 32 |
| RES_DEEP (ohm.m) | 44.09 | 32 |
| RES_SHALLOW (ohm.m) | 37.64 | 32 |

---

### 3230 m MD — Interval 3227.5 – 3232.5 m

**Sample Description (spreadsheet):** Sample 3230m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 170.0 U |
| mTVDss | -1222.06 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.0 | 33 |
| RES_DEEP (ohm.m) | 45.65 | 33 |
| RES_SHALLOW (ohm.m) | 39.07 | 33 |

---

### 3235 m MD — Interval 3232.5 – 3237.5 m

**Sample Description (spreadsheet):** Sample 3235m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 137.0 U |
| mTVDss | -1222.02 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 33 |
| RES_DEEP (ohm.m) | 40.14 | 33 |
| RES_SHALLOW (ohm.m) | 35.93 | 33 |

---

### 3240 m MD — Interval 3237.5 – 3242.5 m

**Sample Description (spreadsheet):** Sample 3240m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright |
| Total Gas | 151.0 U |
| mTVDss | -1222.00 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.3 | 33 |
| RES_DEEP (ohm.m) | 39.32 | 33 |
| RES_SHALLOW (ohm.m) | 32.24 | 33 |

---

### 3245 m MD — Interval 3242.5 – 3247.5 m

**Sample Description (spreadsheet):** Sample 3245m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright to dull FLUOR in SST. TG 153U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to dull |
| Total Gas | 153.0 U |
| mTVDss | -1221.98 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3260m: dk gry-v dk gry,med gry-gry brn,aren,tr sandy lams,micmic i/p,tr carb spks,frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7 155 U SURVEY @ 3263.8m
- **SANDSTONE** @ ~3260m: clr,trnsl,pl-lt brn,lt gry,vf- crs,rr v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr brn-gry slty mtx,dom disagg, mnr fri aggs,tr slty lams,gd-fr inf por,pr vis por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.4 | 33 |
| RES_DEEP (ohm.m) | 39.43 | 33 |
| RES_SHALLOW (ohm.m) | 34.15 | 33 |

---

### 3250 m MD — Interval 3247.5 – 3252.5 m

**Sample Description (spreadsheet):** Sample 3250m: Trace Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright |
| Total Gas | 163.0 U |
| mTVDss | -1221.97 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3260m: dk gry-v dk gry,med gry-gry brn,aren,tr sandy lams,micmic i/p,tr carb spks,frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7 155 U SURVEY @ 3263.8m
- **SANDSTONE** @ ~3260m: clr,trnsl,pl-lt brn,lt gry,vf- crs,rr v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr brn-gry slty mtx,dom disagg, mnr fri aggs,tr slty lams,gd-fr inf por,pr vis por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 32 |
| RES_DEEP (ohm.m) | 42.03 | 32 |
| RES_SHALLOW (ohm.m) | 35.84 | 32 |

---

### 3255 m MD — Interval 3252.5 – 3257.5 m

**Sample Description (spreadsheet):** Sample 3255m: Trace Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 163.0 U |
| mTVDss | -1222.01 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3260m: dk gry-v dk gry,med gry-gry brn,aren,tr sandy lams,micmic i/p,tr carb spks,frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7 155 U SURVEY @ 3263.8m
- **SANDSTONE** @ ~3260m: clr,trnsl,pl-lt brn,lt gry,vf- crs,rr v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr brn-gry slty mtx,dom disagg, mnr fri aggs,tr slty lams,gd-fr inf por,pr vis por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.9 | 33 |
| RES_DEEP (ohm.m) | 46.06 | 33 |
| RES_SHALLOW (ohm.m) | 40.84 | 33 |

---

### 3260 m MD — Interval 3257.5 – 3262.5 m

**Sample Description (spreadsheet):** Sample 3260m: 5% Siltstone, 95% very fine to  to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to  to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 145.0 U |
| mTVDss | -1222.05 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3260m: dk gry-v dk gry,med gry-gry brn,aren,tr sandy lams,micmic i/p,tr carb spks,frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7 155 U SURVEY @ 3263.8m
- **SANDSTONE** @ ~3260m: clr,trnsl,pl-lt brn,lt gry,vf- crs,rr v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr brn-gry slty mtx,dom disagg, mnr fri aggs,tr slty lams,gd-fr inf por,pr vis por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.2 | 33 |
| RES_DEEP (ohm.m) | 45.10 | 33 |
| RES_SHALLOW (ohm.m) | 40.09 | 33 |

---

### 3265 m MD — Interval 3262.5 – 3267.5 m

**Sample Description (spreadsheet):** Sample 3265m: 10% Siltstone, 90% very fine to coarse, minor very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 154.0 U |
| mTVDss | -1222.11 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3260m: dk gry-v dk gry,med gry-gry brn,aren,tr sandy lams,micmic i/p,tr carb spks,frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7 155 U SURVEY @ 3263.8m
- **SANDSTONE** @ ~3260m: clr,trnsl,pl-lt brn,lt gry,vf- crs,rr v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr brn-gry slty mtx,dom disagg, mnr fri aggs,tr slty lams,gd-fr inf por,pr vis por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 33 |
| RES_DEEP (ohm.m) | 48.25 | 33 |
| RES_SHALLOW (ohm.m) | 45.23 | 33 |

---

### 3270 m MD — Interval 3267.5 – 3272.5 m

**Sample Description (spreadsheet):** Sample 3270m: 10% Siltstone, 90% very fine to coarse, rare very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 145.0 U |
| mTVDss | -1222.20 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3260m: dk gry-v dk gry,med gry-gry brn,aren,tr sandy lams,micmic i/p,tr carb spks,frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7 155 U SURVEY @ 3263.8m
- **SANDSTONE** @ ~3260m: clr,trnsl,pl-lt brn,lt gry,vf- crs,rr v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr brn-gry slty mtx,dom disagg, mnr fri aggs,tr slty lams,gd-fr inf por,pr vis por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.9 | 33 |
| RES_DEEP (ohm.m) | 40.19 | 33 |
| RES_SHALLOW (ohm.m) | 35.81 | 33 |

---

### 3275 m MD — Interval 3272.5 – 3277.5 m

**Sample Description (spreadsheet):** Sample 3275m: 5% Siltstone, 95% very fine to coarse, minor very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 151.0 U |
| mTVDss | -1222.29 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3260m: dk gry-v dk gry,med gry-gry brn,aren,tr sandy lams,micmic i/p,tr carb spks,frm-mod hd,sbblky-sbfiss. 77 / 6 / 4 / 6 / 7 155 U SURVEY @ 3263.8m
- **SANDSTONE** @ ~3260m: clr,trnsl,pl-lt brn,lt gry,vf- crs,rr v crs,v pr srt,sbang-sbrnd,tr ang,wk sil cmt,tr-mnr brn-gry slty mtx,dom disagg, mnr fri aggs,tr slty lams,gd-fr inf por,pr vis por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.1 | 32 |
| RES_DEEP (ohm.m) | 36.05 | 32 |
| RES_SHALLOW (ohm.m) | 28.96 | 32 |

---

### 3280 m MD — Interval 3277.5 – 3282.5 m

**Sample Description (spreadsheet):** Sample 3280m: 5% Siltstone, 95% very fine to coarse, minor very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 146.0 U |
| mTVDss | -1222.39 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 33 |
| RES_DEEP (ohm.m) | 31.03 | 33 |
| RES_SHALLOW (ohm.m) | 23.88 | 33 |

---

### 3285 m MD — Interval 3282.5 – 3287.5 m

**Sample Description (spreadsheet):** Sample 3285m: 5% Siltstone, 95% very fine to coarse, rare very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 143U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 143.0 U |
| mTVDss | -1222.49 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.3 | 33 |
| RES_DEEP (ohm.m) | 32.75 | 33 |
| RES_SHALLOW (ohm.m) | 27.45 | 33 |

---

### 3290 m MD — Interval 3287.5 – 3292.5 m

**Sample Description (spreadsheet):** Sample 3290m: 0% Siltstone, 100% very fine to coarse, trace very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright |
| Total Gas | 155.0 U |
| mTVDss | -1222.60 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.7 | 33 |
| RES_DEEP (ohm.m) | 34.99 | 33 |
| RES_SHALLOW (ohm.m) | 29.00 | 33 |

---

### 3295 m MD — Interval 3292.5 – 3297.5 m

**Sample Description (spreadsheet):** Sample 3295m: Trace Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright |
| Total Gas | 164.0 U |
| mTVDss | -1222.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,clr, trnsl,opq,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod sil cmt,mnr brn-tr gry slty mtx,tr slty lams,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,lt gry, clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, 3320 sbang-sbrnd,wk-mod sil cmt,mnr brn- gry slty mtx,tr slty lams,tr carb spks,fri- mod hd,mnr disagg,pr vis por,fr inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.8 | 33 |
| RES_DEEP (ohm.m) | 32.30 | 33 |
| RES_SHALLOW (ohm.m) | 27.64 | 33 |

---

### 3300 m MD — Interval 3297.5 – 3302.5 m

**Sample Description (spreadsheet):** Sample 3300m: 5% Siltstone, 95% very fine to coarse, minor very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 166.0 U |
| mTVDss | -1222.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,clr, trnsl,opq,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod sil cmt,mnr brn-tr gry slty mtx,tr slty lams,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,lt gry, clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, 3320 sbang-sbrnd,wk-mod sil cmt,mnr brn- gry slty mtx,tr slty lams,tr carb spks,fri- mod hd,mnr disagg,pr vis por,fr inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 32 |
| RES_DEEP (ohm.m) | 29.96 | 32 |
| RES_SHALLOW (ohm.m) | 27.23 | 32 |

---

### 3305 m MD — Interval 3302.5 – 3307.5 m

**Sample Description (spreadsheet):** Sample 3305m: 10% Siltstone, 90% very fine to medium, minor coarse Sandstone, 100% moderately bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 141.0 U |
| mTVDss | -1222.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,clr, trnsl,opq,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod sil cmt,mnr brn-tr gry slty mtx,tr slty lams,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,lt gry, clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, 3320 sbang-sbrnd,wk-mod sil cmt,mnr brn- gry slty mtx,tr slty lams,tr carb spks,fri- mod hd,mnr disagg,pr vis por,fr inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 29.06 | 33 |
| RES_SHALLOW (ohm.m) | 25.48 | 33 |

---

### 3310 m MD — Interval 3307.5 – 3312.5 m

**Sample Description (spreadsheet):** Sample 3310m: 5% Siltstone, 95% very fine to medium, minor coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 192.0 U |
| mTVDss | -1222.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,clr, trnsl,opq,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod sil cmt,mnr brn-tr gry slty mtx,tr slty lams,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,lt gry, clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, 3320 sbang-sbrnd,wk-mod sil cmt,mnr brn- gry slty mtx,tr slty lams,tr carb spks,fri- mod hd,mnr disagg,pr vis por,fr inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 28.10 | 33 |
| RES_SHALLOW (ohm.m) | 23.99 | 33 |

---

### 3315 m MD — Interval 3312.5 – 3317.5 m

**Sample Description (spreadsheet):** Sample 3315m: 5% Siltstone, 95% very fine to medium, trace coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 176.0 U |
| mTVDss | -1223.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,clr, trnsl,opq,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod sil cmt,mnr brn-tr gry slty mtx,tr slty lams,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,lt gry, clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, 3320 sbang-sbrnd,wk-mod sil cmt,mnr brn- gry slty mtx,tr slty lams,tr carb spks,fri- mod hd,mnr disagg,pr vis por,fr inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 33 |
| RES_DEEP (ohm.m) | 27.99 | 33 |
| RES_SHALLOW (ohm.m) | 24.34 | 33 |

---

### 3320 m MD — Interval 3317.5 – 3322.5 m

**Sample Description (spreadsheet):** Sample 3320m: Trace Siltstone, 100% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 202.0 U |
| mTVDss | -1223.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,clr, trnsl,opq,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod sil cmt,mnr brn-tr gry slty mtx,tr slty lams,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,lt gry, clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, 3320 sbang-sbrnd,wk-mod sil cmt,mnr brn- gry slty mtx,tr slty lams,tr carb spks,fri- mod hd,mnr disagg,pr vis por,fr inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 27.97 | 33 |
| RES_SHALLOW (ohm.m) | 23.43 | 33 |

---

### 3325 m MD — Interval 3322.5 – 3327.5 m

**Sample Description (spreadsheet):** Sample 3325m: Trace Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 101% moderately bright to bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 101% moderately bright to bright |
| Total Gas | 200.0 U |
| mTVDss | -1223.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,clr, trnsl,opq,vf-med,tr crs-v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod sil cmt,mnr brn-tr gry slty mtx,tr slty lams,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr
- **SANDSTONE** @ ~3310m: lt-med brn,lt gry brn,lt gry, clr,trnsl,vf-med,rr crs-v crs,mod-pr srt, 3320 sbang-sbrnd,wk-mod sil cmt,mnr brn- gry slty mtx,tr slty lams,tr carb spks,fri- mod hd,mnr disagg,pr vis por,fr inf por,
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.5 | 32 |
| RES_DEEP (ohm.m) | 36.14 | 32 |
| RES_SHALLOW (ohm.m) | 29.91 | 32 |

---

### 3330 m MD — Interval 3327.5 – 3332.5 m

**Sample Description (spreadsheet):** Sample 3330m: Trace Siltstone, 100% very fine to medium, minor coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, minor coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 196.0 U |
| mTVDss | -1223.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,rr med-crs,mod-wl srt,sbang-sbrnd, wk-mod sil cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,mnr med,tr crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,loc strg sil cmt, mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr vis por,fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 33 |
| RES_DEEP (ohm.m) | 32.96 | 33 |
| RES_SHALLOW (ohm.m) | 26.67 | 33 |

---

### 3335 m MD — Interval 3332.5 – 3337.5 m

**Sample Description (spreadsheet):** Sample 3335m: 0% Siltstone, 100% very fine to fine, minor medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |
| mTVDss | -1223.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,rr med-crs,mod-wl srt,sbang-sbrnd, wk-mod sil cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,mnr med,tr crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,loc strg sil cmt, mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr vis por,fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 29.43 | 33 |
| RES_SHALLOW (ohm.m) | 23.53 | 33 |

---

### 3340 m MD — Interval 3337.5 – 3342.5 m

**Sample Description (spreadsheet):** Sample 3340m: Trace Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright |
| Total Gas | 136.0 U |
| mTVDss | -1223.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,rr med-crs,mod-wl srt,sbang-sbrnd, wk-mod sil cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,mnr med,tr crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,loc strg sil cmt, mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr vis por,fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 23.23 | 33 |
| RES_SHALLOW (ohm.m) | 18.39 | 33 |

---

### 3345 m MD — Interval 3342.5 – 3347.5 m

**Sample Description (spreadsheet):** Sample 3345m: 0% Siltstone, 100% very fine to fine, rare medium to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 132U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% nan |
| Total Gas | 132.0 U |
| mTVDss | -1222.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,rr med-crs,mod-wl srt,sbang-sbrnd, wk-mod sil cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,mnr med,tr crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,loc strg sil cmt, mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr vis por,fr inf
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 33 |
| RES_DEEP (ohm.m) | 30.29 | 33 |
| RES_SHALLOW (ohm.m) | 25.36 | 33 |

---

### 3350 m MD — Interval 3347.5 – 3352.5 m

**Sample Description (spreadsheet):** Sample 3350m: 0% Siltstone, 100% very fine to fine, minor medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 175.0 U |
| mTVDss | -1222.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,rr med-crs,mod-wl srt,sbang-sbrnd, wk-mod sil cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,mnr med,tr crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,loc strg sil cmt, mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr vis por,fr inf
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 28.65 | 33 |
| RES_SHALLOW (ohm.m) | 24.11 | 33 |

---

### 3355 m MD — Interval 3352.5 – 3357.5 m

**Sample Description (spreadsheet):** Sample 3355m: 0% Siltstone, 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% nan |
| Total Gas | 162.0 U |
| mTVDss | -1222.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,rr med-crs,mod-wl srt,sbang-sbrnd, wk-mod sil cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3340m: pl-lt brn,lt gry brn,clr,trnsl, vf-f,mnr med,tr crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,loc strg sil cmt, mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr vis por,fr inf
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 32 |
| RES_DEEP (ohm.m) | 27.48 | 32 |
| RES_SHALLOW (ohm.m) | 24.01 | 32 |

---

### 3360 m MD — Interval 3357.5 – 3362.5 m

**Sample Description (spreadsheet):** Sample 3360m: 0% Siltstone, 100% very fine to coarse, trace very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright |
| Total Gas | 166.0 U |
| mTVDss | -1222.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-crs,tr v crs,mod-v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-med,mnr crs-v crs,pr-v pr srt, sbang-sbrnd,ang i/p,mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks & flks,fri-mod hd,hd i/p,mnr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.4 | 33 |
| RES_DEEP (ohm.m) | 28.20 | 33 |
| RES_SHALLOW (ohm.m) | 26.60 | 33 |

---

### 3365 m MD — Interval 3362.5 – 3367.5 m

**Sample Description (spreadsheet):** Sample 3365m: 0% Siltstone, trace siderite in 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% siderite in 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright |
| Total Gas | 174.0 U |
| mTVDss | -1222.70 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-crs,tr v crs,mod-v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-med,mnr crs-v crs,pr-v pr srt, sbang-sbrnd,ang i/p,mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks & flks,fri-mod hd,hd i/p,mnr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 33 |
| RES_DEEP (ohm.m) | 31.35 | 33 |
| RES_SHALLOW (ohm.m) | 27.00 | 33 |

---

### 3370 m MD — Interval 3367.5 – 3372.5 m

**Sample Description (spreadsheet):** Sample 3370m: 0% Siltstone, trace siderite in 100% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, minor coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% siderite in 100% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 195.0 U |
| mTVDss | -1222.63 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-crs,tr v crs,mod-v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-med,mnr crs-v crs,pr-v pr srt, sbang-sbrnd,ang i/p,mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks & flks,fri-mod hd,hd i/p,mnr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 30.36 | 33 |
| RES_SHALLOW (ohm.m) | 25.26 | 33 |

---

### 3375 m MD — Interval 3372.5 – 3377.5 m

**Sample Description (spreadsheet):** Sample 3375m: 0% Siltstone, rare siderite in 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% nan |
| Total Gas | 202.0 U |
| mTVDss | -1222.55 m |
| FeCO₃ in Siltstone | rare |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-crs,tr v crs,mod-v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,mnr disagg,pr-v pr
- **SANDSTONE** @ ~3360m: pl-lt brn,lt gry brn,med brn, clr,trnsl,vf-med,mnr crs-v crs,pr-v pr srt, sbang-sbrnd,ang i/p,mod sil cmt,loc strg sil cmt,tr sid cmt,mnr brn-gry slty mtx,tr carb spks & flks,fri-mod hd,hd i/p,mnr
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.7 | 33 |
| RES_DEEP (ohm.m) | 27.65 | 33 |
| RES_SHALLOW (ohm.m) | 22.05 | 33 |

---

### 3380 m MD — Interval 3377.5 – 3382.5 m

**Sample Description (spreadsheet):** Sample 3380m: 0% Siltstone, trace siderite in 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 159U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% siderite in 100% very fine to medium, rare coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 159.0 U |
| mTVDss | -1222.47 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3390m: pl-lt brn,lt-med gry brn,med brn,clr,trnsl,vf-v crs,v pr srt,sbang-sbrnd, ang i/p,mod-wk sil cmt,loc strg sil cmt,tr sid cmt,mnr-loc com brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,com disagg,
- **SANDSTONE** @ ~3390m: 5-18 klbs 3400 75 / 6 / 5 / 7 / 7 200 U SANDSTONE:pl-lt brn,lt-med gry brn,lt FLW: 247-270 gpm mtx,tr carb spks,tr slty lams,fri-mod hd, com disagg,pr vis por,fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 32 |
| RES_DEEP (ohm.m) | 28.06 | 32 |
| RES_SHALLOW (ohm.m) | 24.48 | 32 |

---

### 3385 m MD — Interval 3382.5 – 3387.5 m

**Sample Description (spreadsheet):** Sample 3385m: 10% Siltstone, trace siderite in 90% very fine to fine, rare medium to coarse Sandstone, 80% moderately bright FLUOR in SST. TG 148U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 80.0% siderite in 90% very fine to fine, rare medium to coarse Sandstone, 80% moderately bright |
| Total Gas | 148.0 U |
| mTVDss | -1222.39 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3390m: pl-lt brn,lt-med gry brn,med brn,clr,trnsl,vf-v crs,v pr srt,sbang-sbrnd, ang i/p,mod-wk sil cmt,loc strg sil cmt,tr sid cmt,mnr-loc com brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,com disagg,
- **SANDSTONE** @ ~3390m: 5-18 klbs 3400 75 / 6 / 5 / 7 / 7 200 U SANDSTONE:pl-lt brn,lt-med gry brn,lt FLW: 247-270 gpm mtx,tr carb spks,tr slty lams,fri-mod hd, com disagg,pr vis por,fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 33 |
| RES_DEEP (ohm.m) | 31.68 | 33 |
| RES_SHALLOW (ohm.m) | 27.98 | 33 |

---

### 3390 m MD — Interval 3387.5 – 3392.5 m

**Sample Description (spreadsheet):** Sample 3390m: 25% Siltstone, trace siderite in 75% very fine to medium, trace coarse Sandstone, 75% moderately bright FLUOR in SST. TG 127U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 75.0% siderite in 75% very fine to medium, trace coarse Sandstone, 75% moderately bright |
| Total Gas | 127.0 U |
| mTVDss | -1222.30 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3390m: pl-lt brn,lt-med gry brn,med brn,clr,trnsl,vf-v crs,v pr srt,sbang-sbrnd, ang i/p,mod-wk sil cmt,loc strg sil cmt,tr sid cmt,mnr-loc com brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,com disagg,
- **SANDSTONE** @ ~3390m: 5-18 klbs 3400 75 / 6 / 5 / 7 / 7 200 U SANDSTONE:pl-lt brn,lt-med gry brn,lt FLW: 247-270 gpm mtx,tr carb spks,tr slty lams,fri-mod hd, com disagg,pr vis por,fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.5 | 33 |
| RES_DEEP (ohm.m) | 35.07 | 33 |
| RES_SHALLOW (ohm.m) | 28.46 | 33 |

---

### 3395 m MD — Interval 3392.5 – 3397.5 m

**Sample Description (spreadsheet):** Sample 3395m: 15% Siltstone, trace siderite in 85% very fine to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 159U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% siderite in 85% very fine to very coarse Sandstone, 100% moderately bright |
| Total Gas | 159.0 U |
| mTVDss | -1222.20 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3390m: pl-lt brn,lt-med gry brn,med brn,clr,trnsl,vf-v crs,v pr srt,sbang-sbrnd, ang i/p,mod-wk sil cmt,loc strg sil cmt,tr sid cmt,mnr-loc com brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,com disagg,
- **SANDSTONE** @ ~3390m: 5-18 klbs 3400 75 / 6 / 5 / 7 / 7 200 U SANDSTONE:pl-lt brn,lt-med gry brn,lt FLW: 247-270 gpm mtx,tr carb spks,tr slty lams,fri-mod hd, com disagg,pr vis por,fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.4 | 33 |
| RES_DEEP (ohm.m) | 35.18 | 33 |
| RES_SHALLOW (ohm.m) | 27.07 | 33 |

---

### 3400 m MD — Interval 3397.5 – 3402.5 m

**Sample Description (spreadsheet):** Sample 3400m: 5% Siltstone, trace siderite in 95% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, minor coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% siderite in 95% very fine to medium, minor coarse to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 200.0 U |
| mTVDss | -1222.10 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3390m: pl-lt brn,lt-med gry brn,med brn,clr,trnsl,vf-v crs,v pr srt,sbang-sbrnd, ang i/p,mod-wk sil cmt,loc strg sil cmt,tr sid cmt,mnr-loc com brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,com disagg,
- **SANDSTONE** @ ~3390m: 5-18 klbs 3400 75 / 6 / 5 / 7 / 7 200 U SANDSTONE:pl-lt brn,lt-med gry brn,lt FLW: 247-270 gpm mtx,tr carb spks,tr slty lams,fri-mod hd, com disagg,pr vis por,fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 33 |
| RES_DEEP (ohm.m) | 35.11 | 33 |
| RES_SHALLOW (ohm.m) | 27.41 | 33 |

---

### 3405 m MD — Interval 3402.5 – 3407.5 m

**Sample Description (spreadsheet):** Sample 3405m: Trace Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 79.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% Siltstone, 100% very fine to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 197.0 U |
| mTVDss | -1221.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3390m: pl-lt brn,lt-med gry brn,med brn,clr,trnsl,vf-v crs,v pr srt,sbang-sbrnd, ang i/p,mod-wk sil cmt,loc strg sil cmt,tr sid cmt,mnr-loc com brn-gry slty mtx,tr carb spks,fri-mod hd,hd i/p,com disagg,
- **SANDSTONE** @ ~3390m: 5-18 klbs 3400 75 / 6 / 5 / 7 / 7 200 U SANDSTONE:pl-lt brn,lt-med gry brn,lt FLW: 247-270 gpm mtx,tr carb spks,tr slty lams,fri-mod hd, com disagg,pr vis por,fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.3 | 32 |
| RES_DEEP (ohm.m) | 33.63 | 32 |
| RES_SHALLOW (ohm.m) | 29.22 | 32 |

---

### 3410 m MD — Interval 3407.5 – 3412.5 m

**Sample Description (spreadsheet):** Sample 3410m: Trace Siltstone, 100% very fine to fine, rare medium to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 99.0 |
| Grain Size | very fine to fine, rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, rare medium to very coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 196.0 U |
| mTVDss | -1221.87 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.0 | 33 |
| RES_DEEP (ohm.m) | 35.22 | 33 |
| RES_SHALLOW (ohm.m) | 31.83 | 33 |

---

### 3415 m MD — Interval 3412.5 – 3417.5 m

**Sample Description (spreadsheet):** Sample 3415m: 0% Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 91.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 214.0 U |
| mTVDss | -1221.76 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3430m: med dk gry-dk gry,aren, carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3430m: pl-lt brn,lt-med gry brn,lt gry,clr,trnsl,vf-med,rr crs-v crs,v pr srt, sbang-sbrnd,ang i/p,mod-wk sil cmt, mnr brn-gry slty mtx,tr carb spks,tr slty lams,tr mic flks,fri-mod hd,com disagg,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.7 | 33 |
| RES_DEEP (ohm.m) | 39.10 | 33 |
| RES_SHALLOW (ohm.m) | 33.68 | 33 |

---

### 3420 m MD — Interval 3417.5 – 3422.5 m

**Sample Description (spreadsheet):** Sample 3420m: 10% Siltstone, 90% very fine to coarse, trace very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 81.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% moderately bright |
| Total Gas | 188.0 U |
| mTVDss | -1221.64 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3430m: med dk gry-dk gry,aren, carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3430m: pl-lt brn,lt-med gry brn,lt gry,clr,trnsl,vf-med,rr crs-v crs,v pr srt, sbang-sbrnd,ang i/p,mod-wk sil cmt, mnr brn-gry slty mtx,tr carb spks,tr slty lams,tr mic flks,fri-mod hd,com disagg,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.6 | 33 |
| RES_DEEP (ohm.m) | 40.49 | 33 |
| RES_SHALLOW (ohm.m) | 36.23 | 33 |

---

### 3425 m MD — Interval 3422.5 – 3427.5 m

**Sample Description (spreadsheet):** Sample 3425m: 20% Siltstone, 80% very fine to very coarse Sandstone, 95% moderately bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 71.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 95.0% nan |
| Total Gas | 172.0 U |
| mTVDss | -1221.53 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3430m: med dk gry-dk gry,aren, carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3430m: pl-lt brn,lt-med gry brn,lt gry,clr,trnsl,vf-med,rr crs-v crs,v pr srt, sbang-sbrnd,ang i/p,mod-wk sil cmt, mnr brn-gry slty mtx,tr carb spks,tr slty lams,tr mic flks,fri-mod hd,com disagg,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 33 |
| RES_DEEP (ohm.m) | 39.68 | 33 |
| RES_SHALLOW (ohm.m) | 34.73 | 33 |

---

### 3430 m MD — Interval 3427.5 – 3432.5 m

**Sample Description (spreadsheet):** Sample 3430m: 35% Siltstone, 65% very fine to coarse, rare very coarse Sandstone, 80% moderately bright FLUOR in SST. TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 65.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% nan |
| Total Gas | 137.0 U |
| mTVDss | -1221.49 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3430m: med dk gry-dk gry,aren, carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3430m: pl-lt brn,lt-med gry brn,lt gry,clr,trnsl,vf-med,rr crs-v crs,v pr srt, sbang-sbrnd,ang i/p,mod-wk sil cmt, mnr brn-gry slty mtx,tr carb spks,tr slty lams,tr mic flks,fri-mod hd,com disagg,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.3 | 32 |
| RES_DEEP (ohm.m) | 42.77 | 32 |
| RES_SHALLOW (ohm.m) | 31.59 | 32 |

---

### 3435 m MD — Interval 3432.5 – 3437.5 m

**Sample Description (spreadsheet):** Sample 3435m: 25% Siltstone, 75% very fine to medium, rare coarse to very coarse Sandstone, 95% moderately bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 95.0% nan |
| Total Gas | 174.0 U |
| mTVDss | -1221.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3430m: med dk gry-dk gry,aren, carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3430m: pl-lt brn,lt-med gry brn,lt gry,clr,trnsl,vf-med,rr crs-v crs,v pr srt, sbang-sbrnd,ang i/p,mod-wk sil cmt, mnr brn-gry slty mtx,tr carb spks,tr slty lams,tr mic flks,fri-mod hd,com disagg,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 44.17 | 33 |
| RES_SHALLOW (ohm.m) | 28.99 | 33 |

---

### 3440 m MD — Interval 3437.5 – 3442.5 m

**Sample Description (spreadsheet):** Sample 3440m: 30% Siltstone, 70% very fine to coarse, minor very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 135.0 U |
| mTVDss | -1221.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3430m: med dk gry-dk gry,aren, carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3430m: pl-lt brn,lt-med gry brn,lt gry,clr,trnsl,vf-med,rr crs-v crs,v pr srt, sbang-sbrnd,ang i/p,mod-wk sil cmt, mnr brn-gry slty mtx,tr carb spks,tr slty lams,tr mic flks,fri-mod hd,com disagg,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.2 | 33 |
| RES_DEEP (ohm.m) | 46.92 | 33 |
| RES_SHALLOW (ohm.m) | 28.76 | 33 |

---

### 3445 m MD — Interval 3442.5 – 3447.5 m

**Sample Description (spreadsheet):** Sample 3445m: 10% Siltstone, 90% very fine to medium Sandstone, 90% moderately bright FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% nan |
| Total Gas | 147.0 U |
| mTVDss | -1221.50 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3430m: med dk gry-dk gry,aren, carb spks,micmic,frm-mod hd,sbblky.
- **SANDSTONE** @ ~3430m: pl-lt brn,lt-med gry brn,lt gry,clr,trnsl,vf-med,rr crs-v crs,v pr srt, sbang-sbrnd,ang i/p,mod-wk sil cmt, mnr brn-gry slty mtx,tr carb spks,tr slty lams,tr mic flks,fri-mod hd,com disagg,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.1 | 33 |
| RES_DEEP (ohm.m) | 46.06 | 33 |
| RES_SHALLOW (ohm.m) | 28.65 | 33 |

---

### 3450 m MD — Interval 3447.5 – 3452.5 m

**Sample Description (spreadsheet):** Sample 3450m: 5% Siltstone, 95% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 114.0 U |
| mTVDss | -1221.56 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.4 | 33 |
| RES_DEEP (ohm.m) | 62.52 | 33 |
| RES_SHALLOW (ohm.m) | 35.19 | 33 |

---

### 3455 m MD — Interval 3452.5 – 3457.5 m

**Sample Description (spreadsheet):** Sample 3455m: 5% Siltstone, 95% very fine to fine, trace medium Sandstone, 100% moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright |
| Total Gas | 146.0 U |
| mTVDss | -1221.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.3 | 33 |
| RES_DEEP (ohm.m) | 63.09 | 33 |
| RES_SHALLOW (ohm.m) | 32.94 | 33 |

---

### 3460 m MD — Interval 3457.5 – 3462.5 m

**Sample Description (spreadsheet):** Sample 3460m: 0% Siltstone, 100% very fine to fine, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright |
| Total Gas | 119.0 U |
| mTVDss | -1221.75 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.5 | 32 |
| RES_DEEP (ohm.m) | 42.38 | 32 |
| RES_SHALLOW (ohm.m) | 27.28 | 32 |

---

### 3465 m MD — Interval 3462.5 – 3467.5 m

**Sample Description (spreadsheet):** Sample 3465m: 10% Siltstone, 90% very fine to very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 121.0 U |
| mTVDss | -1221.86 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.2 | 33 |
| RES_DEEP (ohm.m) | 52.72 | 33 |
| RES_SHALLOW (ohm.m) | 29.26 | 33 |

---

### 3470 m MD — Interval 3467.5 – 3472.5 m

**Sample Description (spreadsheet):** Sample 3470m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 134U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 134.0 U |
| mTVDss | -1221.99 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.1 | 33 |
| RES_DEEP (ohm.m) | 52.27 | 33 |
| RES_SHALLOW (ohm.m) | 29.87 | 33 |

---

### 3475 m MD — Interval 3472.5 – 3477.5 m

**Sample Description (spreadsheet):** Sample 3475m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 166.0 U |
| mTVDss | -1222.13 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3490m: med dk gry,med dk brn gry aren,micmic,mod hd,sbblky-blky. 75 / 6 / 5 / 7 / 7 150 U
- **SANDSTONE** @ ~3490m: clr-trnsl,lt brn,lt gry,vf-crs tr v crs,pr srt,sbang-sbrnd,mod sil cmt
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.3 | 33 |
| RES_DEEP (ohm.m) | 55.93 | 33 |
| RES_SHALLOW (ohm.m) | 35.31 | 33 |

---

### 3480 m MD — Interval 3477.5 – 3482.5 m

**Sample Description (spreadsheet):** Sample 3480m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% bright to moderately bright |
| Total Gas | 177.0 U |
| mTVDss | -1222.29 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3490m: med dk gry,med dk brn gry aren,micmic,mod hd,sbblky-blky. 75 / 6 / 5 / 7 / 7 150 U
- **SANDSTONE** @ ~3490m: clr-trnsl,lt brn,lt gry,vf-crs tr v crs,pr srt,sbang-sbrnd,mod sil cmt
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.5 | 33 |
| RES_DEEP (ohm.m) | 50.47 | 33 |
| RES_SHALLOW (ohm.m) | 35.77 | 33 |

---

### 3485 m MD — Interval 3482.5 – 3487.5 m

**Sample Description (spreadsheet):** Sample 3485m: 0% Siltstone, 100% very fine to fine, minor medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 135.0 U |
| mTVDss | -1222.48 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3490m: med dk gry,med dk brn gry aren,micmic,mod hd,sbblky-blky. 75 / 6 / 5 / 7 / 7 150 U
- **SANDSTONE** @ ~3490m: clr-trnsl,lt brn,lt gry,vf-crs tr v crs,pr srt,sbang-sbrnd,mod sil cmt
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 32 |
| RES_DEEP (ohm.m) | 48.07 | 32 |
| RES_SHALLOW (ohm.m) | 35.79 | 32 |

---

### 3490 m MD — Interval 3487.5 – 3492.5 m

**Sample Description (spreadsheet):** Sample 3490m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 136.0 U |
| mTVDss | -1222.68 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3490m: med dk gry,med dk brn gry aren,micmic,mod hd,sbblky-blky. 75 / 6 / 5 / 7 / 7 150 U
- **SANDSTONE** @ ~3490m: clr-trnsl,lt brn,lt gry,vf-crs tr v crs,pr srt,sbang-sbrnd,mod sil cmt
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.6 | 33 |
| RES_DEEP (ohm.m) | 44.61 | 33 |
| RES_SHALLOW (ohm.m) | 35.65 | 33 |

---

### 3495 m MD — Interval 3492.5 – 3497.5 m

**Sample Description (spreadsheet):** Sample 3495m: 10% Siltstone, 90% very fine to coarse, trace very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 123.0 U |
| mTVDss | -1222.88 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3490m: med dk gry,med dk brn gry aren,micmic,mod hd,sbblky-blky. 75 / 6 / 5 / 7 / 7 150 U
- **SANDSTONE** @ ~3490m: clr-trnsl,lt brn,lt gry,vf-crs tr v crs,pr srt,sbang-sbrnd,mod sil cmt
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.5 | 33 |
| RES_DEEP (ohm.m) | 35.84 | 33 |
| RES_SHALLOW (ohm.m) | 29.10 | 33 |

---

### 3500 m MD — Interval 3497.5 – 3502.5 m

**Sample Description (spreadsheet):** Sample 3500m: 5% Siltstone, 95% very fine to fine, trace medium to coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 153U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 153.0 U |
| mTVDss | -1223.09 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3490m: med dk gry,med dk brn gry aren,micmic,mod hd,sbblky-blky. 75 / 6 / 5 / 7 / 7 150 U
- **SANDSTONE** @ ~3490m: clr-trnsl,lt brn,lt gry,vf-crs tr v crs,pr srt,sbang-sbrnd,mod sil cmt
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.7 | 33 |
| RES_DEEP (ohm.m) | 34.16 | 33 |
| RES_SHALLOW (ohm.m) | 27.82 | 33 |

---

### 3505 m MD — Interval 3502.5 – 3507.5 m

**Sample Description (spreadsheet):** Sample 3505m: 0% Siltstone, 100% very fine to coarse, minor very coarse Sandstone, 100% bright FLUOR in SST. TG 173U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, minor very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 173.0 U |
| mTVDss | -1223.30 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3490m: med dk gry,med dk brn gry aren,micmic,mod hd,sbblky-blky. 75 / 6 / 5 / 7 / 7 150 U
- **SANDSTONE** @ ~3490m: clr-trnsl,lt brn,lt gry,vf-crs tr v crs,pr srt,sbang-sbrnd,mod sil cmt
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 33 |
| RES_DEEP (ohm.m) | 32.42 | 33 |
| RES_SHALLOW (ohm.m) | 26.23 | 33 |

---

### 3510 m MD — Interval 3507.5 – 3512.5 m

**Sample Description (spreadsheet):** Sample 3510m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |
| mTVDss | -1223.43 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.6 | 32 |
| RES_DEEP (ohm.m) | 31.84 | 32 |
| RES_SHALLOW (ohm.m) | 24.68 | 32 |

---

### 3515 m MD — Interval 3512.5 – 3517.5 m

**Sample Description (spreadsheet):** Sample 3515m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 167U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 167.0 U |
| mTVDss | -1223.56 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 34.05 | 33 |
| RES_SHALLOW (ohm.m) | 23.70 | 33 |

---

### 3520 m MD — Interval 3517.5 – 3522.5 m

**Sample Description (spreadsheet):** Sample 3520m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 174.0 U |
| mTVDss | -1223.67 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 33 |
| RES_DEEP (ohm.m) | 32.52 | 33 |
| RES_SHALLOW (ohm.m) | 23.08 | 33 |

---

### 3525 m MD — Interval 3522.5 – 3527.5 m

**Sample Description (spreadsheet):** Sample 3525m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 161.0 U |
| mTVDss | -1223.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs pr vis por,fr-gd inf por,fluor. 31-10-2021
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-f,tr med mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 35.06 | 33 |
| RES_SHALLOW (ohm.m) | 27.48 | 33 |

---

### 3530 m MD — Interval 3527.5 – 3532.5 m

**Sample Description (spreadsheet):** Sample 3530m: 0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 156.0 U |
| mTVDss | -1223.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs pr vis por,fr-gd inf por,fluor. 31-10-2021
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-f,tr med mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 36.21 | 33 |
| RES_SHALLOW (ohm.m) | 26.09 | 33 |

---

### 3535 m MD — Interval 3532.5 – 3537.5 m

**Sample Description (spreadsheet):** Sample 3535m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 188.0 U |
| mTVDss | -1223.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs pr vis por,fr-gd inf por,fluor. 31-10-2021
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-f,tr med mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 32 |
| RES_DEEP (ohm.m) | 36.11 | 32 |
| RES_SHALLOW (ohm.m) | 25.68 | 32 |

---

### 3540 m MD — Interval 3537.5 – 3542.5 m

**Sample Description (spreadsheet):** Sample 3540m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 196.0 U |
| mTVDss | -1223.79 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs pr vis por,fr-gd inf por,fluor. 31-10-2021
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-f,tr med mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.8 | 33 |
| RES_DEEP (ohm.m) | 36.08 | 33 |
| RES_SHALLOW (ohm.m) | 26.90 | 33 |

---

### 3545 m MD — Interval 3542.5 – 3547.5 m

**Sample Description (spreadsheet):** Sample 3545m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |
| mTVDss | -1223.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs pr vis por,fr-gd inf por,fluor. 31-10-2021
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-f,tr med mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.1 | 33 |
| RES_DEEP (ohm.m) | 42.15 | 33 |
| RES_SHALLOW (ohm.m) | 31.86 | 33 |

---

### 3550 m MD — Interval 3547.5 – 3552.5 m

**Sample Description (spreadsheet):** Sample 3550m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% bright to moderately bright |
| Total Gas | 191.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs pr vis por,fr-gd inf por,fluor. 31-10-2021
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-f,tr med mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 35.24 | 33 |
| RES_SHALLOW (ohm.m) | 28.09 | 33 |

---

### 3555 m MD — Interval 3552.5 – 3557.5 m

**Sample Description (spreadsheet):** Sample 3555m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 188.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-crs,pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs pr vis por,fr-gd inf por,fluor. 31-10-2021
- **SANDSTONE** @ ~3540m: clr-trnsl,lt gry,vf-f,tr med mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.4 | 33 |
| RES_DEEP (ohm.m) | 31.47 | 33 |
| RES_SHALLOW (ohm.m) | 26.33 | 33 |

---

### 3560 m MD — Interval 3557.5 – 3562.5 m

**Sample Description (spreadsheet):** Sample 3560m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright to moderately bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 206.0 U |
| mTVDss | -1223.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-f,tr med, mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-crs,mod- pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por, fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.3 | 32 |
| RES_DEEP (ohm.m) | 35.08 | 32 |
| RES_SHALLOW (ohm.m) | 27.66 | 32 |

---

### 3565 m MD — Interval 3562.5 – 3567.5 m

**Sample Description (spreadsheet):** Sample 3565m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% bright to moderately bright |
| Total Gas | 199.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-f,tr med, mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-crs,mod- pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por, fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.9 | 33 |
| RES_DEEP (ohm.m) | 34.32 | 33 |
| RES_SHALLOW (ohm.m) | 28.04 | 33 |

---

### 3570 m MD — Interval 3567.5 – 3572.5 m

**Sample Description (spreadsheet):** Sample 3570m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 208U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 208.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-f,tr med, mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-crs,mod- pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por, fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.2 | 33 |
| RES_DEEP (ohm.m) | 36.72 | 33 |
| RES_SHALLOW (ohm.m) | 31.10 | 33 |

---

### 3575 m MD — Interval 3572.5 – 3577.5 m

**Sample Description (spreadsheet):** Sample 3575m: 0% Siltstone, 100% very fine to fine, trace medium to coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 198.0 U |
| mTVDss | -1223.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-f,tr med, mod-wl srt,sbang-sbrnd,tr mod sil cmt tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3560m: clr-trnsl,lt gry,vf-crs,mod- pr srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por, fr-gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.0 | 33 |
| RES_DEEP (ohm.m) | 35.67 | 33 |
| RES_SHALLOW (ohm.m) | 31.02 | 33 |

---

### 3580 m MD — Interval 3577.5 – 3582.5 m

**Sample Description (spreadsheet):** Sample 3580m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright to moderately bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |
| mTVDss | -1223.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3570m: clr-trnsl,lt gry,vf-f,tr med- crs,mod-wl srt,sbang-sbrnd,tr mod sil cmt, tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3570m: clr-trnsl,lt gry,vf-med,mod- wl srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por, fr-gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.4 | 33 |
| RES_DEEP (ohm.m) | 36.99 | 33 |
| RES_SHALLOW (ohm.m) | 33.30 | 33 |

---

### 3585 m MD — Interval 3582.5 – 3587.5 m

**Sample Description (spreadsheet):** Sample 3585m: trace Siltstone, 100% very fine to coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 199.0 U |
| mTVDss | -1223.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3570m: clr-trnsl,lt gry,vf-f,tr med- crs,mod-wl srt,sbang-sbrnd,tr mod sil cmt, tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3570m: clr-trnsl,lt gry,vf-med,mod- wl srt,sbang-sbrnd,tr mod sil cmt,tr lt gry slty mtx,dom disagg,tr fri aggs,pr vis por, fr-gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.9 | 33 |
| RES_DEEP (ohm.m) | 37.42 | 33 |
| RES_SHALLOW (ohm.m) | 29.66 | 33 |

---

### 3590 m MD — Interval 3587.5 – 3592.5 m

**Sample Description (spreadsheet):** Sample 3590m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright to moderately bright FLUOR in SST. TG 194U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 194.0 U |
| mTVDss | -1223.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3580m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-crs,pr srt,sbang-sbrnd,mod sil cmt, mnr lt gry slty mtx,dom disagg,com fri aggs, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3590m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, mnr lt gry slty mtx,dom disagg,fri aggs, pr vis por,fr-gd inf por,fluor. 79 / 6 / 4 / 6 / 5 216 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.1 | 32 |
| RES_DEEP (ohm.m) | 40.61 | 32 |
| RES_SHALLOW (ohm.m) | 30.82 | 32 |

---

### 3595 m MD — Interval 3592.5 – 3597.5 m

**Sample Description (spreadsheet):** Sample 3595m: trace Siltstone, 100% very fine to fine Sandstone, 100% bright to moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine Sandstone, 100% bright to moderately bright |
| Total Gas | 180.0 U |
| mTVDss | -1223.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3580m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-crs,pr srt,sbang-sbrnd,mod sil cmt, mnr lt gry slty mtx,dom disagg,com fri aggs, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3590m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, mnr lt gry slty mtx,dom disagg,fri aggs, pr vis por,fr-gd inf por,fluor. 79 / 6 / 4 / 6 / 5 216 U
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.4 | 33 |
| RES_DEEP (ohm.m) | 39.38 | 33 |
| RES_SHALLOW (ohm.m) | 31.26 | 33 |

---

### 3600 m MD — Interval 3597.5 – 3602.5 m

**Sample Description (spreadsheet):** Sample 3600m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright to bright |
| Total Gas | 201.0 U |
| mTVDss | -1223.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3590m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, mnr lt gry slty mtx,dom disagg,fri aggs, pr vis por,fr-gd inf por,fluor. 79 / 6 / 4 / 6 / 5 216 U
- **SANDSTONE** @ ~3590m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,tr med,mod-wl srt,sbang-sbrnd, mod sil cmt,mnr lt gry slty mtx,dom disagg,com fri aggs,pr vis por,fr-gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.5 | 33 |
| RES_DEEP (ohm.m) | 37.45 | 33 |
| RES_SHALLOW (ohm.m) | 28.90 | 33 |

---

### 3605 m MD — Interval 3602.5 – 3607.5 m

**Sample Description (spreadsheet):** Sample 3605m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 207.0 U |
| mTVDss | -1223.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3590m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,wl srt,sbang-sbrnd,mod sil cmt, mnr lt gry slty mtx,dom disagg,fri aggs, pr vis por,fr-gd inf por,fluor. 79 / 6 / 4 / 6 / 5 216 U
- **SANDSTONE** @ ~3590m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,tr med,mod-wl srt,sbang-sbrnd, mod sil cmt,mnr lt gry slty mtx,dom disagg,com fri aggs,pr vis por,fr-gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.9 | 33 |
| RES_DEEP (ohm.m) | 37.07 | 33 |
| RES_SHALLOW (ohm.m) | 28.34 | 33 |

---

### 3610 m MD — Interval 3607.5 – 3612.5 m

**Sample Description (spreadsheet):** Sample 3610m: 0% Siltstone, 100% very fine to fine, trace medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 143U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium Sandstone, 100% moderately bright to bright |
| Total Gas | 143.0 U |
| mTVDss | -1223.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3610m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,mnr lt gry slty mtx, 77 / 6 / 4 / 6 / 7 182 U dom disagg,com fri aggs,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~3610m: med-dk gry,med-dk gry brn, aren,tr sandy lams,micmic i/p,frm-mod hd,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.4 | 33 |
| RES_DEEP (ohm.m) | 36.93 | 33 |
| RES_SHALLOW (ohm.m) | 29.64 | 33 |

---

### 3615 m MD — Interval 3612.5 – 3617.5 m

**Sample Description (spreadsheet):** Sample 3615m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 182U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 182.0 U |
| mTVDss | -1223.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3610m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,mnr lt gry slty mtx, 77 / 6 / 4 / 6 / 7 182 U dom disagg,com fri aggs,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~3610m: med-dk gry,med-dk gry brn, aren,tr sandy lams,micmic i/p,frm-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.2 | 32 |
| RES_DEEP (ohm.m) | 33.83 | 32 |
| RES_SHALLOW (ohm.m) | 28.51 | 32 |

---

### 3620 m MD — Interval 3617.5 – 3622.5 m

**Sample Description (spreadsheet):** Sample 3620m: 5% Siltstone, 95% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 176.0 U |
| mTVDss | -1223.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3610m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,mnr lt gry slty mtx, 77 / 6 / 4 / 6 / 7 182 U dom disagg,com fri aggs,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~3610m: med-dk gry,med-dk gry brn, aren,tr sandy lams,micmic i/p,frm-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 33.95 | 33 |
| RES_SHALLOW (ohm.m) | 27.87 | 33 |

---

### 3625 m MD — Interval 3622.5 – 3627.5 m

**Sample Description (spreadsheet):** Sample 3625m: 5% Siltstone, 95% very fine to fine, rare medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 209.0 U |
| mTVDss | -1223.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3610m: clr-trnsl,mnr lt gry,tr lt gry brn,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,mnr lt gry slty mtx, 77 / 6 / 4 / 6 / 7 182 U dom disagg,com fri aggs,pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~3610m: med-dk gry,med-dk gry brn, aren,tr sandy lams,micmic i/p,frm-mod hd,sbblky-blky.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 33 |
| RES_DEEP (ohm.m) | 34.58 | 33 |
| RES_SHALLOW (ohm.m) | 23.63 | 33 |

---

### 3630 m MD — Interval 3627.5 – 3632.5 m

**Sample Description (spreadsheet):** Sample 3630m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 175.0 U |
| mTVDss | -1223.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3630m: clr,trnsl,lt gry,lt gry brn,vf- f,mnr med,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr gry-brn slty mtx,pred disagg,mnr fri aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,mod sil cmt,mnr gry- brn slty mtx,pred disagg,com fri,mnr mod hd,aggs,pr vis por,fr inf por,fluor.
- _(14 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 33 |
| RES_DEEP (ohm.m) | 34.66 | 33 |
| RES_SHALLOW (ohm.m) | 24.07 | 33 |

---

### 3635 m MD — Interval 3632.5 – 3637.5 m

**Sample Description (spreadsheet):** Sample 3635m: 5% Siltstone, 95% very fine to fine, trace medium to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% medium to coarse Sandstone, 100% moderately bright to bright |
| Total Gas | 166.0 U |
| mTVDss | -1223.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3630m: clr,trnsl,lt gry,lt gry brn,vf- f,mnr med,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr gry-brn slty mtx,pred disagg,mnr fri aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,mod sil cmt,mnr gry- brn slty mtx,pred disagg,com fri,mnr mod hd,aggs,pr vis por,fr inf por,fluor.
- _(14 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 33 |
| RES_DEEP (ohm.m) | 35.57 | 33 |
| RES_SHALLOW (ohm.m) | 25.54 | 33 |

---

### 3640 m MD — Interval 3637.5 – 3642.5 m

**Sample Description (spreadsheet):** Sample 3640m: Trace Siltstone, 100% very fine to fine, minor medium Sandstone, 100% moderately bright FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, minor medium Sandstone, 100% moderately bright |
| Total Gas | 161.0 U |
| mTVDss | -1223.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3630m: clr,trnsl,lt gry,lt gry brn,vf- f,mnr med,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr gry-brn slty mtx,pred disagg,mnr fri aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,mod sil cmt,mnr gry- brn slty mtx,pred disagg,com fri,mnr mod hd,aggs,pr vis por,fr inf por,fluor.
- _(14 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 32 |
| RES_DEEP (ohm.m) | 34.87 | 32 |
| RES_SHALLOW (ohm.m) | 25.65 | 32 |

---

### 3645 m MD — Interval 3642.5 – 3647.5 m

**Sample Description (spreadsheet):** Sample 3645m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 163.0 U |
| mTVDss | -1223.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3630m: clr,trnsl,lt gry,lt gry brn,vf- f,mnr med,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr gry-brn slty mtx,pred disagg,mnr fri aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,mod sil cmt,mnr gry- brn slty mtx,pred disagg,com fri,mnr mod hd,aggs,pr vis por,fr inf por,fluor.
- _(14 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.5 | 33 |
| RES_DEEP (ohm.m) | 34.79 | 33 |
| RES_SHALLOW (ohm.m) | 24.92 | 33 |

---

### 3650 m MD — Interval 3647.5 – 3652.5 m

**Sample Description (spreadsheet):** Sample 3650m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 177.0 U |
| mTVDss | -1223.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,mod sil cmt,mnr gry- brn slty mtx,pred disagg,com fri,mnr mod hd,aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,wk-mod sil cmt,tr- mnr gry-brn slty mtx,pred disagg,mnr fri, mnr mod hd,aggs,pr vis por,fr inf por, fluor.
- _(13 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.8 | 33 |
| RES_DEEP (ohm.m) | 30.67 | 33 |
| RES_SHALLOW (ohm.m) | 23.96 | 33 |

---

### 3655 m MD — Interval 3652.5 – 3657.5 m

**Sample Description (spreadsheet):** Sample 3655m: Trace Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright FLUOR in SST. TG 159U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% moderately bright |
| Total Gas | 159.0 U |
| mTVDss | -1223.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,mod sil cmt,mnr gry- brn slty mtx,pred disagg,com fri,mnr mod hd,aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3640m: clr,trnsl,lt gry,lt gry brn,vf- f,wl srt,sbang-sbrnd,wk-mod sil cmt,tr- mnr gry-brn slty mtx,pred disagg,mnr fri, mnr mod hd,aggs,pr vis por,fr inf por, fluor.
- _(13 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.7 | 33 |
| RES_DEEP (ohm.m) | 36.10 | 33 |
| RES_SHALLOW (ohm.m) | 28.84 | 33 |

---

### 3660 m MD — Interval 3657.5 – 3662.5 m

**Sample Description (spreadsheet):** Sample 3660m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 210.0 U |
| mTVDss | -1223.87 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.0 | 33 |
| RES_DEEP (ohm.m) | 29.82 | 33 |
| RES_SHALLOW (ohm.m) | 27.12 | 33 |

---

### 3665 m MD — Interval 3662.5 – 3667.5 m

**Sample Description (spreadsheet):** Sample 3665m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 245U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 245.0 U |
| mTVDss | -1223.87 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.9 | 32 |
| RES_DEEP (ohm.m) | 38.74 | 32 |
| RES_SHALLOW (ohm.m) | 35.13 | 32 |

---

### 3670 m MD — Interval 3667.5 – 3672.5 m

**Sample Description (spreadsheet):** Sample 3670m: Trace Siltstone, 100% very fine to very coarse Sandstone, 100% bright to moderately bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone, 100% very fine to very coarse Sandstone, 100% bright to moderately bright |
| Total Gas | 250.0 U |
| mTVDss | -1223.88 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 42.97 | 33 |
| RES_SHALLOW (ohm.m) | 35.52 | 33 |

---

### 3675 m MD — Interval 3672.5 – 3677.5 m

**Sample Description (spreadsheet):** Sample 3675m: trace siderite in 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright |
| Total Gas | 235.0 U |
| mTVDss | -1223.89 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 42.93 | 33 |
| RES_SHALLOW (ohm.m) | 37.12 | 33 |

---

### 3680 m MD — Interval 3677.5 – 3682.5 m

**Sample Description (spreadsheet):** Sample 3680m: trace siderite in 20% Siltstone, 80% very fine to coarse, trace very coarse Sandstone, 100% moderately bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 20% Siltstone, 80% very fine to coarse, trace very coarse Sandstone, 100% moderately bright |
| Total Gas | 240.0 U |
| mTVDss | -1223.91 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.9 | 33 |
| RES_DEEP (ohm.m) | 40.58 | 33 |
| RES_SHALLOW (ohm.m) | 27.58 | 33 |

---

### 3685 m MD — Interval 3682.5 – 3687.5 m

**Sample Description (spreadsheet):** Sample 3685m: trace siderite in 15% Siltstone, 85% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% siderite in 15% Siltstone, 85% very fine to medium Sandstone, 100% moderately bright |
| Total Gas | 172.0 U |
| mTVDss | -1223.92 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.8 | 33 |
| RES_DEEP (ohm.m) | 38.26 | 33 |
| RES_SHALLOW (ohm.m) | 25.65 | 33 |

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 373 |
| Depth range | 1617 – 3685 m |
| Avg % Sandstone | 93.0% |
| Mudlog matches | 285 / 373 |
