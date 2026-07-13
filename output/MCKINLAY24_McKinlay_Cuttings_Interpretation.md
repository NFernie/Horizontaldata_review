# MCKINLAY 24 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-13 02:07 UTC  
**Well:** MCKINLAY 24 (MCKINLAY 24)  
**TD:** 2598 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 24_Mudlog_Spud-2598m_TD_Field Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `McKinlay 24 Hz Section Samples Descriptions.xlsx` (Sheet1 (cols F=TG, G=%SS, H=%fluoro + col A descriptions)) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_24` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_24_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1633.50 | DC30.xlsx |
| McKinlay Member (shallowest) | 1628.60 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1628.60 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1837.10 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1770.60 | 1768.35 | 2.25 | 1837.10 | 66.5 |
| 2522.40 | 2524.35 | 1.95 | 2572.40 (assumed +50 m) | 50.0 |

**McKinlay Member analysis window:** 1628.6 – 2598.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1771–1837 m (overburden), 2522–2572 m (overburden)

**Samples in McKinlay Member:** 164 of 204 total
- Excluded pre-reservoir: 16
- Excluded overburden intervals: 24

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 24 → `MCKINLAY 24` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
9. **McKinlay legacy spreadsheet:** Sheet1 columns F (TG), G (%SS), H (%fluoro) used directly; column A description text parsed for grain size, fluorescence brightness, and siderite.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1630 m MD — Interval 1627.5 – 1632.5 m

**Sample Description (spreadsheet):** Sample 1630: 40% siltstone. 60% very fine to fine sandstone. TG: 13U. Trace bright pinpoint fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 1.0% siltstone. 60% very fine to fine sandstone. TG: 13U. Trace bright pinpoint |
| Total Gas | 13.0 U |
| mTVDss | -1195.57 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: off wh-pl gry,v pl brn gry, clr,trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com pl gry-wh arg mtx,tr carb spks, mod hd-hd,rr fri,pr vis por,fluor. 103 U
- **SANDSTONE** @ ~1630m: v pl gry brn,pl gry-off wh, clr,trnsl,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod strg sil cmt,com pl gry- wh arg/slty mtx,mnr-occ disagg qtz grs, gd vis por,pr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.9 | 32 |
| RES_DEEP (ohm.m) | 24.64 | 32 |
| RES_SHALLOW (ohm.m) | 19.41 | 32 |

---

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635: 20% siltstone. 80% very fine to fine, minor med disagg sandstone. TG: 102U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, minor med disagg (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 80% very fine to fine, minor med disagg sandstone. TG: 102U. 100% bright |
| Total Gas | 102.0 U |
| mTVDss | -1195.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: off wh-pl gry,v pl brn gry, clr,trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com pl gry-wh arg mtx,tr carb spks, mod hd-hd,rr fri,pr vis por,fluor. 103 U
- **SANDSTONE** @ ~1630m: v pl gry brn,pl gry-off wh, clr,trnsl,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod strg sil cmt,com pl gry- wh arg/slty mtx,mnr-occ disagg qtz grs, gd vis por,pr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 33 |
| RES_DEEP (ohm.m) | 27.04 | 33 |
| RES_SHALLOW (ohm.m) | 22.06 | 33 |

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640: 10% siltstone. 90% very fine to fine, minor med- crs disagg sandstone. TG: 150U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor med- crs disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, minor med- crs disagg sandstone. TG: 150U. 100% bright |
| Total Gas | 150.0 U |
| mTVDss | -1196.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: off wh-pl gry,v pl brn gry, clr,trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com pl gry-wh arg mtx,tr carb spks, mod hd-hd,rr fri,pr vis por,fluor. 103 U
- **SANDSTONE** @ ~1630m: v pl gry brn,pl gry-off wh, clr,trnsl,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod strg sil cmt,com pl gry- wh arg/slty mtx,mnr-occ disagg qtz grs, gd vis por,pr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.4 | 33 |
| RES_DEEP (ohm.m) | 22.14 | 33 |
| RES_SHALLOW (ohm.m) | 20.80 | 33 |

---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645: 5% siltstone. 95% very fine to fine, minor med- crs disagg sandstone. TG: 160U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor med- crs disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, minor med- crs disagg sandstone. TG: 160U. 100% bright |
| Total Gas | 160.0 U |
| mTVDss | -1196.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1630m: off wh-pl gry,v pl brn gry, clr,trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com pl gry-wh arg mtx,tr carb spks, mod hd-hd,rr fri,pr vis por,fluor. 103 U
- **SANDSTONE** @ ~1630m: v pl gry brn,pl gry-off wh, clr,trnsl,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod strg sil cmt,com pl gry- wh arg/slty mtx,mnr-occ disagg qtz grs, gd vis por,pr inf por,fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 33 |
| RES_DEEP (ohm.m) | 20.66 | 33 |
| RES_SHALLOW (ohm.m) | 19.47 | 33 |

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650: 5% siltstone. 95% very fine to fine, trace med- crs disagg sandstone. TG: 110U. 80% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace med- crs disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% siltstone. 95% very fine to fine, trace med- crs disagg sandstone. TG: 110U. 80% bright |
| Total Gas | 110.0 U |
| mTVDss | -1197.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: v pl gry brn-off wh,pl gry, clr,trnsl,vf,v wl srt,g/t aren SLTST i/p, mod strg sil cmt,abdt off wh-pl gry arg mtx,occ-com carb spks,mod hd-hd,v pr-fr inf por,fluor.
- **SILTSTONE** @ ~1660m: med gry brn,lt-med gry brn, 1670 82 / 6 / 3 / 4 / 5 54 U com g/t slty SST,mnr micmic,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 21.15 | 33 |
| RES_SHALLOW (ohm.m) | 18.42 | 33 |

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655: 10% siltstone. 90% very fine to fine, trace med- crs disagg sandstone. TG: 66U. 80% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace med- crs disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% siltstone. 90% very fine to fine, trace med- crs disagg sandstone. TG: 66U. 80% bright |
| Total Gas | 66.0 U |
| mTVDss | -1197.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: v pl gry brn-off wh,pl gry, clr,trnsl,vf,v wl srt,g/t aren SLTST i/p, mod strg sil cmt,abdt off wh-pl gry arg mtx,occ-com carb spks,mod hd-hd,v pr-fr inf por,fluor.
- **SILTSTONE** @ ~1660m: med gry brn,lt-med gry brn, 1670 82 / 6 / 3 / 4 / 5 54 U com g/t slty SST,mnr micmic,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 32 |
| RES_DEEP (ohm.m) | 20.79 | 32 |
| RES_SHALLOW (ohm.m) | 17.94 | 32 |

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660: 15% siltstone. 85% very fine sandstone. TG: 43U. 70% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% siltstone. 85% very fine sandstone. TG: 43U. 70% bright |
| Total Gas | 43.0 U |
| mTVDss | -1197.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: v pl gry brn-off wh,pl gry, clr,trnsl,vf,v wl srt,g/t aren SLTST i/p, mod strg sil cmt,abdt off wh-pl gry arg mtx,occ-com carb spks,mod hd-hd,v pr-fr inf por,fluor.
- **SILTSTONE** @ ~1660m: med gry brn,lt-med gry brn, 1670 82 / 6 / 3 / 4 / 5 54 U com g/t slty SST,mnr micmic,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.6 | 33 |
| RES_DEEP (ohm.m) | 18.07 | 33 |
| RES_SHALLOW (ohm.m) | 15.24 | 33 |

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665: 10% siltstone. 90% very fine sandstone. TG: 54U. 70% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% siltstone. 90% very fine sandstone. TG: 54U. 70% bright |
| Total Gas | 54.0 U |
| mTVDss | -1197.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: v pl gry brn-off wh,pl gry, clr,trnsl,vf,v wl srt,g/t aren SLTST i/p, mod strg sil cmt,abdt off wh-pl gry arg mtx,occ-com carb spks,mod hd-hd,v pr-fr inf por,fluor.
- **SILTSTONE** @ ~1660m: med gry brn,lt-med gry brn, 1670 82 / 6 / 3 / 4 / 5 54 U com g/t slty SST,mnr micmic,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.7 | 33 |
| RES_DEEP (ohm.m) | 17.31 | 33 |
| RES_SHALLOW (ohm.m) | 14.63 | 33 |

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670: 10% siltstone. 90% very fine sandstone. TG: 53U. 80% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% siltstone. 90% very fine sandstone. TG: 53U. 80% bright |
| Total Gas | 53.0 U |
| mTVDss | -1197.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: v pl gry brn-off wh,pl gry, clr,trnsl,vf,v wl srt,g/t aren SLTST i/p, mod strg sil cmt,abdt off wh-pl gry arg mtx,occ-com carb spks,mod hd-hd,v pr-fr inf por,fluor.
- **SILTSTONE** @ ~1660m: med gry brn,lt-med gry brn, 1670 82 / 6 / 3 / 4 / 5 54 U com g/t slty SST,mnr micmic,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 16.52 | 33 |
| RES_SHALLOW (ohm.m) | 14.37 | 33 |

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675: 20% siltstone. 80% very fine sandstone. TG: 52U. 80% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% siltstone. 80% very fine sandstone. TG: 52U. 80% bright |
| Total Gas | 52.0 U |
| mTVDss | -1197.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: v pl gry brn-off wh,pl gry, clr,trnsl,vf,v wl srt,g/t aren SLTST i/p, mod strg sil cmt,abdt off wh-pl gry arg mtx,occ-com carb spks,mod hd-hd,v pr-fr inf por,fluor.
- **SILTSTONE** @ ~1660m: med gry brn,lt-med gry brn, 1670 82 / 6 / 3 / 4 / 5 54 U com g/t slty SST,mnr micmic,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.2 | 33 |
| RES_DEEP (ohm.m) | 16.95 | 33 |
| RES_SHALLOW (ohm.m) | 14.60 | 33 |

---

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680: 20% siltstone. 80% very fine sandstone. TG: 43U. 80% bright to moderately bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Fluorescence | 80.0% siltstone. 80% very fine sandstone. TG: 43U. 80% bright to moderately bright |
| Total Gas | 43.0 U |
| mTVDss | -1197.79 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.9 | 33 |
| RES_DEEP (ohm.m) | 18.12 | 33 |
| RES_SHALLOW (ohm.m) | 15.01 | 33 |

---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685: 15% siltstone. 85% very fine sandstone. TG: 48U. 70% bright to moderately bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | sil cmt (0.68) |
| Fluorescence | 70.0% siltstone. 85% very fine sandstone. TG: 48U. 70% bright to moderately bright |
| Total Gas | 48.0 U |
| mTVDss | -1197.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1700m: pl brn gry,pl gry-off wh,clr, trnsl,vf-f,v wl srt,mod sil cmt,abdt off wh- pl gry arg mtx,mnr carb spks,occ slty lams, mod hd-hd,rr fri,pr-fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 32 |
| RES_DEEP (ohm.m) | 18.33 | 32 |
| RES_SHALLOW (ohm.m) | 15.49 | 32 |

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690: 20% siltstone. 80% very fine sandstone. TG: 42U. 80% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% siltstone. 80% very fine sandstone. TG: 42U. 80% bright |
| Total Gas | 42.0 U |
| mTVDss | -1197.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1700m: pl brn gry,pl gry-off wh,clr, trnsl,vf-f,v wl srt,mod sil cmt,abdt off wh- pl gry arg mtx,mnr carb spks,occ slty lams, mod hd-hd,rr fri,pr-fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 18.30 | 33 |
| RES_SHALLOW (ohm.m) | 15.51 | 33 |

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695: 20% siltstone. 80% very fine sandstone. TG: 43U. 80% mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% siltstone. 80% very fine sandstone. TG: 43U. 80% mod bright |
| Total Gas | 43.0 U |
| mTVDss | -1197.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1700m: pl brn gry,pl gry-off wh,clr, trnsl,vf-f,v wl srt,mod sil cmt,abdt off wh- pl gry arg mtx,mnr carb spks,occ slty lams, mod hd-hd,rr fri,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1710m: pl gry-off wh,v pl brn gry, vf-f,v wl srt,sbang-sbrnd,strg sil cmt, com pl brn gry-off wh arg mtx,occ carb spks,mnr slty lams,mod hd-hd,fr vis por, MW: 9.75 fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 19.24 | 33 |
| RES_SHALLOW (ohm.m) | 15.99 | 33 |

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700: 25% siltstone. 75% very fine sandstone. TG: 46U. 80% mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 75% very fine sandstone. TG: 46U. 80% mod bright |
| Total Gas | 46.0 U |
| mTVDss | -1197.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1700m: pl brn gry,pl gry-off wh,clr, trnsl,vf-f,v wl srt,mod sil cmt,abdt off wh- pl gry arg mtx,mnr carb spks,occ slty lams, mod hd-hd,rr fri,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1710m: pl gry-off wh,v pl brn gry, vf-f,v wl srt,sbang-sbrnd,strg sil cmt, com pl brn gry-off wh arg mtx,occ carb spks,mnr slty lams,mod hd-hd,fr vis por, MW: 9.75 fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.2 | 33 |
| RES_DEEP (ohm.m) | 18.94 | 33 |
| RES_SHALLOW (ohm.m) | 15.85 | 33 |

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705: 30% siltstone. 70% very fine sandstone. TG: 56U. 85% mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% siltstone. 70% very fine sandstone. TG: 56U. 85% mod bright |
| Total Gas | 56.0 U |
| mTVDss | -1197.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1700m: pl brn gry,pl gry-off wh,clr, trnsl,vf-f,v wl srt,mod sil cmt,abdt off wh- pl gry arg mtx,mnr carb spks,occ slty lams, mod hd-hd,rr fri,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1710m: pl gry-off wh,v pl brn gry, vf-f,v wl srt,sbang-sbrnd,strg sil cmt, com pl brn gry-off wh arg mtx,occ carb spks,mnr slty lams,mod hd-hd,fr vis por, MW: 9.75 fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 33 |
| RES_DEEP (ohm.m) | 18.82 | 33 |
| RES_SHALLOW (ohm.m) | 15.94 | 33 |

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710: 30% siltstone. 70% very fine sandstone. TG: 45U. 80% mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 85.0% siltstone. 70% very fine sandstone. TG: 45U. 80% mod bright |
| Total Gas | 45.0 U |
| mTVDss | -1197.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1700m: pl brn gry,pl gry-off wh,clr, trnsl,vf-f,v wl srt,mod sil cmt,abdt off wh- pl gry arg mtx,mnr carb spks,occ slty lams, mod hd-hd,rr fri,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1710m: pl gry-off wh,v pl brn gry, vf-f,v wl srt,sbang-sbrnd,strg sil cmt, com pl brn gry-off wh arg mtx,occ carb spks,mnr slty lams,mod hd-hd,fr vis por, MW: 9.75 fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 32 |
| RES_DEEP (ohm.m) | 19.97 | 32 |
| RES_SHALLOW (ohm.m) | 16.68 | 32 |

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715: 20% siltstone. 80% very fine to fine sandstone. TG: 43U. 80% mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% siltstone. 80% very fine to fine sandstone. TG: 43U. 80% mod bright |
| Total Gas | 43.0 U |
| mTVDss | -1197.46 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1700m: pl brn gry,pl gry-off wh,clr, trnsl,vf-f,v wl srt,mod sil cmt,abdt off wh- pl gry arg mtx,mnr carb spks,occ slty lams, mod hd-hd,rr fri,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1710m: pl gry-off wh,v pl brn gry, vf-f,v wl srt,sbang-sbrnd,strg sil cmt, com pl brn gry-off wh arg mtx,occ carb spks,mnr slty lams,mod hd-hd,fr vis por, MW: 9.75 fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.9 | 33 |
| RES_DEEP (ohm.m) | 19.66 | 33 |
| RES_SHALLOW (ohm.m) | 16.56 | 33 |

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720: 15% siltstone. 85% very fine to fine sandstone. TG: 42U. 75% mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 75.0% siltstone. 85% very fine to fine sandstone. TG: 42U. 75% mod bright |
| Total Gas | 42.0 U |
| mTVDss | -1197.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: pl gry-off wh,v pl brn gry, vf-f,v wl srt,sbang-sbrnd,strg sil cmt, com pl brn gry-off wh arg mtx,occ carb spks,mnr slty lams,mod hd-hd,fr vis por, MW: 9.75 fluor.
- **SANDSTONE** @ ~1710m: 10 SANDSTONE:clr,trnsl,off wh-v pl brn pH: 9.7 gry,vf-f,tr med-crs,mod sil cmt,com pl Ck: 1/2 gry-off wh arg mtx,mnr carb spks,mnr- Cl: 117k 84 / 5 / 3 / 4 / 4 147 U occ med disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.9 | 33 |
| RES_DEEP (ohm.m) | 23.07 | 33 |
| RES_SHALLOW (ohm.m) | 21.58 | 33 |

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725: 30% siltstone. 70% very fine sandstone. TG: 52U. 50% mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 50.0% siltstone. 70% very fine sandstone. TG: 52U. 50% mod bright |
| Total Gas | 52.0 U |
| mTVDss | -1197.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: pl gry-off wh,v pl brn gry, vf-f,v wl srt,sbang-sbrnd,strg sil cmt, com pl brn gry-off wh arg mtx,occ carb spks,mnr slty lams,mod hd-hd,fr vis por, MW: 9.75 fluor.
- **SANDSTONE** @ ~1710m: 10 SANDSTONE:clr,trnsl,off wh-v pl brn pH: 9.7 gry,vf-f,tr med-crs,mod sil cmt,com pl Ck: 1/2 gry-off wh arg mtx,mnr carb spks,mnr- Cl: 117k 84 / 5 / 3 / 4 / 4 147 U occ med disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.0 | 33 |
| RES_DEEP (ohm.m) | 21.19 | 33 |
| RES_SHALLOW (ohm.m) | 20.12 | 33 |

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730: 30% siltstone. 70% very fine to fine sandstone. TG: 87U. 90% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 90.0% siltstone. 70% very fine to fine sandstone. TG: 87U. 90% bright |
| Total Gas | 87.0 U |
| mTVDss | -1197.29 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 20.41 | 33 |
| RES_SHALLOW (ohm.m) | 19.20 | 33 |

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735: 20% siltstone. 80% very fine to fine agg, trace mdeium to coarse disagg sandstone. TG: 147U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine agg, trace mdeium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone. 80% very fine to fine agg, trace mdeium to coarse disagg sandstone. TG: 147U. 100% bright |
| Total Gas | 147.0 U |
| mTVDss | -1197.24 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.8 | 32 |
| RES_DEEP (ohm.m) | 18.53 | 32 |
| RES_SHALLOW (ohm.m) | 18.34 | 32 |

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740: 15% siltstone. 85% very fine to fine agg, common medium to coarse disagg sandstone. TG: 140U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine agg, common medium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone. 85% very fine to fine agg, common medium to coarse disagg sandstone. TG: 140U. 100% bright |
| Total Gas | 140.0 U |
| mTVDss | -1197.19 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.4 | 33 |
| RES_DEEP (ohm.m) | 18.34 | 33 |
| RES_SHALLOW (ohm.m) | 19.32 | 33 |

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745: 15% siltstone. 85% very fine to fine agg, occasional to common medium to coarse disagg sandstone. TG: 200U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine agg, occasional to common medium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 85% very fine to fine agg, occasional to common medium to coarse disagg sandstone. TG: 200U. 100% bright |
| Total Gas | 200.0 U |
| mTVDss | -1197.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-med brn gry,med brn,v lt gry-wh,clr,trnsl,vf-f,tr med-crs,mod wl srt,sbang-sbrnd,mod-strg sil cmt,mnr sid 74 / 5 / 4 / 7 / 10 63 U cmt,com brn-gry slty mtx,loc com wh arg mtx,tr med-crs disagg qtz grs,v pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.4 | 33 |
| RES_DEEP (ohm.m) | 19.79 | 33 |
| RES_SHALLOW (ohm.m) | 20.37 | 33 |

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750: 5% siltstone. 95% very fine to fine, trace medium to coarse disagg sandstone. TG: 238U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, trace medium to coarse disagg sandstone. TG: 238U. 100% bright |
| Total Gas | 238.0 U |
| mTVDss | -1197.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-med brn gry,med brn,v lt gry-wh,clr,trnsl,vf-f,tr med-crs,mod wl srt,sbang-sbrnd,mod-strg sil cmt,mnr sid 74 / 5 / 4 / 7 / 10 63 U cmt,com brn-gry slty mtx,loc com wh arg mtx,tr med-crs disagg qtz grs,v pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.7 | 33 |
| RES_DEEP (ohm.m) | 24.92 | 33 |
| RES_SHALLOW (ohm.m) | 22.69 | 33 |

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755: 10% siltstone. 90% very fine to fine agg, com medium to coarse disagg sandstone. TG: 230U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine agg, com medium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 90% very fine to fine agg, com medium to coarse disagg sandstone. TG: 230U. 100% bright |
| Total Gas | 230.0 U |
| mTVDss | -1197.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-med brn gry,med brn,v lt gry-wh,clr,trnsl,vf-f,tr med-crs,mod wl srt,sbang-sbrnd,mod-strg sil cmt,mnr sid 74 / 5 / 4 / 7 / 10 63 U cmt,com brn-gry slty mtx,loc com wh arg mtx,tr med-crs disagg qtz grs,v pr vis
- **SILTSTONE** @ ~1770m: med gry-med dk gry,med gry brn,aren,tr sid,tr carb spks,mnr micmic, mod hd-frm,mnr hd,sbblky-sbfiss. Trace of SST,mod bri-bri ppt grn/yel
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.7 | 33 |
| RES_DEEP (ohm.m) | 27.92 | 33 |
| RES_SHALLOW (ohm.m) | 21.63 | 33 |

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760: 15% siltstone. 95% very fine to fine agg, com medium to coarse disagg sandstone. TG: 250U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine agg, com medium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% siltstone. 95% very fine to fine agg, com medium to coarse disagg sandstone. TG: 250U. 100% bright |
| Total Gas | 250.0 U |
| mTVDss | -1197.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-med brn gry,med brn,v lt gry-wh,clr,trnsl,vf-f,tr med-crs,mod wl srt,sbang-sbrnd,mod-strg sil cmt,mnr sid 74 / 5 / 4 / 7 / 10 63 U cmt,com brn-gry slty mtx,loc com wh arg mtx,tr med-crs disagg qtz grs,v pr vis
- **SILTSTONE** @ ~1770m: med gry-med dk gry,med gry brn,aren,tr sid,tr carb spks,mnr micmic, mod hd-frm,mnr hd,sbblky-sbfiss. Trace of SST,mod bri-bri ppt grn/yel
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.3 | 32 |
| RES_DEEP (ohm.m) | 24.03 | 32 |
| RES_SHALLOW (ohm.m) | 18.93 | 32 |

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765: 60% siltstone. 40% very fine to fine agg, occ medium to coarse disagg sandstone. TG: 60U. 30% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to fine agg, occ medium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 30.0% siltstone. 40% very fine to fine agg, occ medium to coarse disagg sandstone. TG: 60U. 30% bright |
| Total Gas | 60.0 U |
| mTVDss | -1196.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-med brn gry,med brn,v lt gry-wh,clr,trnsl,vf-f,tr med-crs,mod wl srt,sbang-sbrnd,mod-strg sil cmt,mnr sid 74 / 5 / 4 / 7 / 10 63 U cmt,com brn-gry slty mtx,loc com wh arg mtx,tr med-crs disagg qtz grs,v pr vis
- **SILTSTONE** @ ~1770m: med gry-med dk gry,med gry brn,aren,tr sid,tr carb spks,mnr micmic, mod hd-frm,mnr hd,sbblky-sbfiss. Trace of SST,mod bri-bri ppt grn/yel
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.9 | 33 |
| RES_DEEP (ohm.m) | 21.23 | 33 |
| RES_SHALLOW (ohm.m) | 16.67 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 25% siltstone. 75% very fine to fine aggregates, trace medium disagg sandstone. TG: 16U. no fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine aggregates, trace medium disagg (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Hardness | v hd (0.10) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 0.0% none |
| Total Gas | 16.0 U |
| mTVDss | -1198.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: med gry brn-brn,v lt gry-wh, clr,trnsl,vf-f,rr med-crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr-loc com sid cmt,com wh-gry brn arg mtx,tr-loc com slty lams,rr med-crs disagg qtz grs,mod
- **SILTSTONE** @ ~1830m: med gry-med lt gry,med gry brn-brn,aren,loc com sndy lams,loc com sid,tr carb spks,tr micmic,mod hd-frm, 1840 hd-v hd i/p,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 32 |
| RES_DEEP (ohm.m) | 20.12 | 32 |
| RES_SHALLOW (ohm.m) | 16.03 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 30% siltstone. 70% very fine to fine aggregates, minor medium to coarse disagg sandstone. TG: 22U. 10% mod bri-bri FLUOR.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine aggregates, minor medium to coarse disagg (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | p-fr |
| Hardness | v hd (0.10) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 10.0% siltstone. 70% very fine to fine aggregates, minor medium to coarse disagg sandstone. TG: 22U. 10% mod bri-bri |
| Total Gas | 22.0 U |
| mTVDss | -1198.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: med gry brn-brn,v lt gry-wh, clr,trnsl,vf-f,rr med-crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr-loc com sid cmt,com wh-gry brn arg mtx,tr-loc com slty lams,rr med-crs disagg qtz grs,mod
- **SILTSTONE** @ ~1830m: med gry-med lt gry,med gry brn-brn,aren,loc com sndy lams,loc com sid,tr carb spks,tr micmic,mod hd-frm, 1840 hd-v hd i/p,sbblky-sbfiss.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.0 | 33 |
| RES_DEEP (ohm.m) | 23.77 | 33 |
| RES_SHALLOW (ohm.m) | 18.51 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 30% siltstone. 70% very fine to fine aggregates, common fine to medium & trace coarse to very coarse disagg sandstone. TG: 95U. 30% bri-mod bri FLUOR.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine aggregates, common fine to medium & trace coarse to very coarse disagg (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | p-fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 30.0% siltstone. 70% very fine to fine aggregates, common fine to medium & trace coarse to very coarse disagg sandstone. TG: 95U. 30% bri-mod bri |
| Total Gas | 95.0 U |
| mTVDss | -1198.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,tr v crs,mnr vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,tr sid cmt,mnr gry-brn arg mtx,pred f-crs & tr v crs disagg qtz grs,mnr fri,tr hd,gd-v gd inf por,fr-pr vis
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,mnr v crs,com vf-med aggs,v pr srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-brn arg mtx,pred f-crs & mnr v crs disagg qtz 1870 grs,com fri,mnr mod hd,gd-v gd inf por,fr-
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 33 |
| RES_DEEP (ohm.m) | 26.64 | 33 |
| RES_SHALLOW (ohm.m) | 20.33 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 30% siltstone. 70% very fine to fine aggregates, common fine to coarse & trace very coarse disagg sandstone. TG: 98U. 80% bri-mod bri FLUOR.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine aggregates, common fine to coarse & trace very coarse disagg (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | p-fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% siltstone. 70% very fine to fine aggregates, common fine to coarse & trace very coarse disagg sandstone. TG: 98U. 80% bri-mod bri |
| Total Gas | 98.0 U |
| mTVDss | -1198.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,tr v crs,mnr vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,tr sid cmt,mnr gry-brn arg mtx,pred f-crs & tr v crs disagg qtz grs,mnr fri,tr hd,gd-v gd inf por,fr-pr vis
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,mnr v crs,com vf-med aggs,v pr srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-brn arg mtx,pred f-crs & mnr v crs disagg qtz 1870 grs,com fri,mnr mod hd,gd-v gd inf por,fr-
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.6 | 33 |
| RES_DEEP (ohm.m) | 26.78 | 33 |
| RES_SHALLOW (ohm.m) | 22.88 | 33 |

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 10% siltstone. 90% very fine to fine aggregates, common fine to medium, mnr coarse & trace very coarse disagg sandstone. TG: 139U. 100% bri-mod bri FLUOR.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates, common fine to medium, mnr coarse & trace very coarse disagg (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | p-fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggregates, common fine to medium, mnr coarse & trace very coarse disagg sandstone. TG: 139U. 100% bri-mod bri |
| Total Gas | 139.0 U |
| mTVDss | -1198.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,tr v crs,mnr vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,tr sid cmt,mnr gry-brn arg mtx,pred f-crs & tr v crs disagg qtz grs,mnr fri,tr hd,gd-v gd inf por,fr-pr vis
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,mnr v crs,com vf-med aggs,v pr srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-brn arg mtx,pred f-crs & mnr v crs disagg qtz 1870 grs,com fri,mnr mod hd,gd-v gd inf por,fr-
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.1 | 33 |
| RES_DEEP (ohm.m) | 22.73 | 33 |
| RES_SHALLOW (ohm.m) | 22.97 | 33 |

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 5% siltstone. 95% fine to coarse, trace very coarse disaggregated (minor very fine to fine aggs) sandstone. TG: 143U. 100% bri-mod bri FLUOR.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine to coarse, trace very coarse disaggregated (minor very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone. 95% fine to coarse, trace very coarse disaggregated (minor very fine to fine aggs) sandstone. TG: 143U. 100% bri-mod bri |
| Total Gas | 143.0 U |
| mTVDss | -1198.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,tr v crs,mnr vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,tr sid cmt,mnr gry-brn arg mtx,pred f-crs & tr v crs disagg qtz grs,mnr fri,tr hd,gd-v gd inf por,fr-pr vis
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,mnr v crs,com vf-med aggs,v pr srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-brn arg mtx,pred f-crs & mnr v crs disagg qtz 1870 grs,com fri,mnr mod hd,gd-v gd inf por,fr-
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 49.4 | 32 |
| RES_DEEP (ohm.m) | 23.59 | 32 |
| RES_SHALLOW (ohm.m) | 23.26 | 32 |

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: trace siltstone. 100% fine to coarse, trace very coarse disaggregated (minor very fine to fine aggs) sandstone. TG: 85U. 80% mod bri FLUOR.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, trace very coarse disaggregated (minor very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 80.0% fine to coarse, trace very coarse disaggregated (minor very fine to fine aggs) sandstone. TG: 85U. 80% mod bri |
| Total Gas | 85.0 U |
| mTVDss | -1198.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,tr v crs,mnr vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,tr sid cmt,mnr gry-brn arg mtx,pred f-crs & tr v crs disagg qtz grs,mnr fri,tr hd,gd-v gd inf por,fr-pr vis
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,mnr v crs,com vf-med aggs,v pr srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-brn arg mtx,pred f-crs & mnr v crs disagg qtz 1870 grs,com fri,mnr mod hd,gd-v gd inf por,fr-
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.7 | 33 |
| RES_DEEP (ohm.m) | 25.93 | 33 |
| RES_SHALLOW (ohm.m) | 22.85 | 33 |

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 15% siltstone. 85% fine to coarse, minor very coarse disaggregated (common very fine to medium aggs) sandstone. TG: 94U. 100% mod bri to bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | fine to coarse, minor very coarse disaggregated (common very fine to medium aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone. 85% fine to coarse, minor very coarse disaggregated (common very fine to medium aggs) sandstone. TG: 94U. 100% mod bri to bright |
| Total Gas | 94.0 U |
| mTVDss | -1198.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,tr v crs,mnr vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,tr sid cmt,mnr gry-brn arg mtx,pred f-crs & tr v crs disagg qtz grs,mnr fri,tr hd,gd-v gd inf por,fr-pr vis
- **SANDSTONE** @ ~1860m: clr,trnsl,pl-lt brn,lt gry,vf- crs,mnr v crs,com vf-med aggs,v pr srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-brn arg mtx,pred f-crs & mnr v crs disagg qtz 1870 grs,com fri,mnr mod hd,gd-v gd inf por,fr-
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 25.74 | 33 |
| RES_SHALLOW (ohm.m) | 24.90 | 33 |

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 5% siltstone. 95% very fine to fine aggregates (minor fine to coarse & trace very coarse loose) sandstone. TG: 122U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (minor fine to coarse & trace very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregates (minor fine to coarse & trace very coarse loose) sandstone. TG: 122U. 100% bright |
| Total Gas | 122.0 U |
| mTVDss | -1198.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: pl-lt brn,med brn,wh-v lt gry,clr,trnsl,vf-med,pred vf-f aggs,mod-wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry brn-wh arg mtx,tr slty lams,fri-mod hd,tr disagg f-med qtz grs,fr-pr vis por,gd inf
- **SILTSTONE** @ ~1880m: med gry,med-dk gry brn,aren, sid i/p,tr carb spks,frm-mod hd,v hd i/p, 1890 sbblky-blky. SURVEY @ 1893.9m INC: 90.14° AZI: 28.02°G
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 33 |
| RES_DEEP (ohm.m) | 27.41 | 33 |
| RES_SHALLOW (ohm.m) | 24.70 | 33 |

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: trace siltstone. 100% very fine to fine aggregates (trace fine to very coarse loose) sandstone. TG: 138U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (trace fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine aggregates (trace fine to very coarse loose) sandstone. TG: 138U. 100% bright |
| Total Gas | 138.0 U |
| mTVDss | -1199.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: pl-lt brn,med brn,wh-v lt gry,clr,trnsl,vf-med,pred vf-f aggs,mod-wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry brn-wh arg mtx,tr slty lams,fri-mod hd,tr disagg f-med qtz grs,fr-pr vis por,gd inf
- **SILTSTONE** @ ~1880m: med gry,med-dk gry brn,aren, sid i/p,tr carb spks,frm-mod hd,v hd i/p, 1890 sbblky-blky. SURVEY @ 1893.9m INC: 90.14° AZI: 28.02°G
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 33 |
| RES_DEEP (ohm.m) | 27.22 | 33 |
| RES_SHALLOW (ohm.m) | 23.85 | 33 |

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: trace siltstone. 100% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 148U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 148U. 100% bright |
| Total Gas | 148.0 U |
| mTVDss | -1199.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: pl-lt brn,med brn,wh-v lt gry,clr,trnsl,vf-med,pred vf-f aggs,mod-wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry brn-wh arg mtx,tr slty lams,fri-mod hd,tr disagg f-med qtz grs,fr-pr vis por,gd inf
- **SILTSTONE** @ ~1880m: med gry,med-dk gry brn,aren, sid i/p,tr carb spks,frm-mod hd,v hd i/p, 1890 sbblky-blky. SURVEY @ 1893.9m INC: 90.14° AZI: 28.02°G
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 32 |
| RES_DEEP (ohm.m) | 27.17 | 32 |
| RES_SHALLOW (ohm.m) | 24.11 | 32 |

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 5% siltstone. 95% very fine to fine aggregates (trace fine to v coarse loose) sandstone. TG: 122U. 100% bright to moderately bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (trace fine to v coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregates (trace fine to v coarse loose) sandstone. TG: 122U. 100% bright to moderately bright |
| Total Gas | 122.0 U |
| mTVDss | -1199.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: pl-lt brn,med brn,wh-v lt gry,clr,trnsl,vf-med,pred vf-f aggs,mod-wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry brn-wh arg mtx,tr slty lams,fri-mod hd,tr disagg f-med qtz grs,fr-pr vis por,gd inf
- **SILTSTONE** @ ~1880m: med gry,med-dk gry brn,aren, sid i/p,tr carb spks,frm-mod hd,v hd i/p, 1890 sbblky-blky. SURVEY @ 1893.9m INC: 90.14° AZI: 28.02°G
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 33 |
| RES_DEEP (ohm.m) | 25.57 | 33 |
| RES_SHALLOW (ohm.m) | 24.32 | 33 |

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: trace siltstone. 100% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 106U. 100% moderately bright to bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 106U. 100% moderately bright to bright |
| Total Gas | 106.0 U |
| mTVDss | -1198.99 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 25.30 | 33 |
| RES_SHALLOW (ohm.m) | 24.06 | 33 |

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 100% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 91U. 100% moderately bright to bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 91U. 100% moderately bright to bright |
| Total Gas | 91.0 U |
| mTVDss | -1198.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-f, pred vf-f aggs,v wl srt,sbang-sbrnd,mod- wk sil cmt,mnr gry-brn arg mtx,tr carb & 77 / 6 / 4 / 6 / 7 258 U lith spks,tr micmic,mod hd-fri,tr f disagg qtz grs,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-med, pred vf-f aggs,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,tr carb & lith spks,tr carb lams,tr micmic,mod hd-fri, 1930 mnr f disagg qtz grs,fr-pr vis por,fr-gd inf
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 24.63 | 33 |
| RES_SHALLOW (ohm.m) | 23.02 | 33 |

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 100% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 222U. 100% moderately bright to bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 222U. 100% moderately bright to bright |
| Total Gas | 222.0 U |
| mTVDss | -1198.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-f, pred vf-f aggs,v wl srt,sbang-sbrnd,mod- wk sil cmt,mnr gry-brn arg mtx,tr carb & 77 / 6 / 4 / 6 / 7 258 U lith spks,tr micmic,mod hd-fri,tr f disagg qtz grs,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-med, pred vf-f aggs,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,tr carb & lith spks,tr carb lams,tr micmic,mod hd-fri, 1930 mnr f disagg qtz grs,fr-pr vis por,fr-gd inf
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 22.52 | 33 |
| RES_SHALLOW (ohm.m) | 20.70 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 100% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 360U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% very fine to fine aggregates (trace fine to medium loose) sandstone. TG: 360U. 100% bright |
| Total Gas | 360.0 U |
| mTVDss | -1198.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-f, pred vf-f aggs,v wl srt,sbang-sbrnd,mod- wk sil cmt,mnr gry-brn arg mtx,tr carb & 77 / 6 / 4 / 6 / 7 258 U lith spks,tr micmic,mod hd-fri,tr f disagg qtz grs,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-med, pred vf-f aggs,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,tr carb & lith spks,tr carb lams,tr micmic,mod hd-fri, 1930 mnr f disagg qtz grs,fr-pr vis por,fr-gd inf
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 20.95 | 33 |
| RES_SHALLOW (ohm.m) | 19.46 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 100% very fine to fine aggregates (rare fine loose) sandstone. TG: 268U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (rare fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% very fine to fine aggregates (rare fine loose) sandstone. TG: 268U. 100% bright |
| Total Gas | 268.0 U |
| mTVDss | -1198.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-f, pred vf-f aggs,v wl srt,sbang-sbrnd,mod- wk sil cmt,mnr gry-brn arg mtx,tr carb & 77 / 6 / 4 / 6 / 7 258 U lith spks,tr micmic,mod hd-fri,tr f disagg qtz grs,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-med, pred vf-f aggs,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,tr carb & lith spks,tr carb lams,tr micmic,mod hd-fri, 1930 mnr f disagg qtz grs,fr-pr vis por,fr-gd inf
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 32 |
| RES_DEEP (ohm.m) | 19.78 | 32 |
| RES_SHALLOW (ohm.m) | 18.20 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 100% very fine to fine aggregates (rare fine loose) sandstone. TG: 258U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (rare fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% very fine to fine aggregates (rare fine loose) sandstone. TG: 258U. 100% bright |
| Total Gas | 258.0 U |
| mTVDss | -1198.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-f, pred vf-f aggs,v wl srt,sbang-sbrnd,mod- wk sil cmt,mnr gry-brn arg mtx,tr carb & 77 / 6 / 4 / 6 / 7 258 U lith spks,tr micmic,mod hd-fri,tr f disagg qtz grs,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-med, pred vf-f aggs,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,tr carb & lith spks,tr carb lams,tr micmic,mod hd-fri, 1930 mnr f disagg qtz grs,fr-pr vis por,fr-gd inf
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 33 |
| RES_DEEP (ohm.m) | 19.42 | 33 |
| RES_SHALLOW (ohm.m) | 17.98 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 100% very fine to fine aggregates (rare fine loose) sandstone. TG: 254U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (rare fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% very fine to fine aggregates (rare fine loose) sandstone. TG: 254U. 100% bright |
| Total Gas | 254.0 U |
| mTVDss | -1198.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-f, pred vf-f aggs,v wl srt,sbang-sbrnd,mod- wk sil cmt,mnr gry-brn arg mtx,tr carb & 77 / 6 / 4 / 6 / 7 258 U lith spks,tr micmic,mod hd-fri,tr f disagg qtz grs,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-med, pred vf-f aggs,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,tr carb & lith spks,tr carb lams,tr micmic,mod hd-fri, 1930 mnr f disagg qtz grs,fr-pr vis por,fr-gd inf
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.8 | 33 |
| RES_DEEP (ohm.m) | 20.41 | 33 |
| RES_SHALLOW (ohm.m) | 19.67 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 100% very fine to fine aggregates (mnr fine loose) sandstone. TG: 273U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% very fine to fine aggregates (mnr fine loose) sandstone. TG: 273U. 100% bright |
| Total Gas | 273.0 U |
| mTVDss | -1198.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-f, pred vf-f aggs,v wl srt,sbang-sbrnd,mod- wk sil cmt,mnr gry-brn arg mtx,tr carb & 77 / 6 / 4 / 6 / 7 258 U lith spks,tr micmic,mod hd-fri,tr f disagg qtz grs,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1920m: pl-lt gry brn,pl-lt brn,vf-med, pred vf-f aggs,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,tr carb & lith spks,tr carb lams,tr micmic,mod hd-fri, 1930 mnr f disagg qtz grs,fr-pr vis por,fr-gd inf
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 33 |
| RES_DEEP (ohm.m) | 20.10 | 33 |
| RES_SHALLOW (ohm.m) | 19.23 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 100% very fine to fine aggregates (mnr fine loose) sandstone. TG: 266U. 100% bright to mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggregates (mnr fine loose) sandstone. TG: 266U. 100% bright to mod bright |
| Total Gas | 266.0 U |
| mTVDss | -1198.57 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 21.26 | 33 |
| RES_SHALLOW (ohm.m) | 19.90 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 100% very fine to fine aggregates (mnr fine loose) sandstone. TG: 250U. 100% bright to mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggregates (mnr fine loose) sandstone. TG: 250U. 100% bright to mod bright |
| Total Gas | 250.0 U |
| mTVDss | -1198.55 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 32 |
| RES_DEEP (ohm.m) | 21.56 | 32 |
| RES_SHALLOW (ohm.m) | 18.69 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 20% Siltstone. 80% very fine to fine aggregates (mnr fine loose) sandstone. TG: 170U. 80% bright to mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregates (mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 80.0% Siltstone. 80% very fine to fine aggregates (mnr fine loose) sandstone. TG: 170U. 80% bright to mod bright |
| Total Gas | 170.0 U |
| mTVDss | -1198.53 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 21.95 | 33 |
| RES_SHALLOW (ohm.m) | 18.52 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 10% Siltstone. 90% very fine to fine aggregates (mnr fine to rare coarse loose) sandstone. TG: 400U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (mnr fine to rare coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine aggregates (mnr fine to rare coarse loose) sandstone. TG: 400U. 100% bright |
| Total Gas | 400.0 U |
| mTVDss | -1198.53 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 29.31 | 33 |
| RES_SHALLOW (ohm.m) | 26.65 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 100% very fine to fine aggregates (occ fine loose) sandstone. TG: 383U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (occ fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggregates (occ fine loose) sandstone. TG: 383U. 100% bright |
| Total Gas | 383.0 U |
| mTVDss | -1198.53 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 33 |
| RES_DEEP (ohm.m) | 26.56 | 33 |
| RES_SHALLOW (ohm.m) | 26.10 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 10% Siltstone. 90% very fine to fine aggregates (com - abdt fine loose) sandstone. TG: 283U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (com - abdt fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine aggregates (com - abdt fine loose) sandstone. TG: 283U. 100% bright |
| Total Gas | 283.0 U |
| mTVDss | -1198.55 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 133.2 | 33 |
| RES_DEEP (ohm.m) | 23.43 | 33 |
| RES_SHALLOW (ohm.m) | 22.65 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 20% Siltstone. 80% very fine to fine aggregates (occ - com fine loose) sandstone. TG: 295U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregates (occ - com fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine aggregates (occ - com fine loose) sandstone. TG: 295U. 100% bright |
| Total Gas | 283.0 U |
| mTVDss | -1198.57 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 32 |
| RES_DEEP (ohm.m) | 23.03 | 32 |
| RES_SHALLOW (ohm.m) | 22.68 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 15% Siltstone. 85% very fine to fine aggregates (occ - com med - coarse loose) sandstone. TG: 350U. 100% bright fluor

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregates (occ - com med - coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine aggregates (occ - com med - coarse loose) sandstone. TG: 350U. 100% bright |
| Total Gas | 295.0 U |
| mTVDss | -1198.61 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 33 |
| RES_DEEP (ohm.m) | 23.08 | 33 |
| RES_SHALLOW (ohm.m) | 24.38 | 33 |

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 15% Siltstone. 85% very fine to fine aggregates (occ - com med - coarse loose) sandstone. TG: 280U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregates (occ - com med - coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine aggregates (occ - com med - coarse loose) sandstone. TG: 280U. 100% bright |
| Total Gas | 280.0 U |
| mTVDss | -1198.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.7 | 33 |
| RES_DEEP (ohm.m) | 23.78 | 33 |
| RES_SHALLOW (ohm.m) | 23.84 | 33 |

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 100% very fine to fine aggregates (com fine - coarse loose) sandstone. TG: 290U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (com fine - coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregates (com fine - coarse loose) sandstone. TG: 290U. 100% bright |
| Total Gas | 290.0 U |
| mTVDss | -1198.71 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2000m: med lt gry,,ed lt gry brn,aren, com g/t slty SST,com carb spks,mnr sndy lams,mod hd-hd,frm,mnr hd,sbblky-sbfiss. 80-100% of SST,bri yel/grn evn
- **SANDSTONE** @ ~2000m: pl gry-off wh,v pl brn gry, clr-trnsl,vf-tr med,mod wl srt,sbang- sbrnd,mod sil cmt,occ pl brn gry arg mtx, tr carb spks,mod hd,pr vis por,fluor. SURVEY @ 2009.3m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.0 | 33 |
| RES_DEEP (ohm.m) | 22.11 | 33 |
| RES_SHALLOW (ohm.m) | 19.96 | 33 |

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 30% Siltstone. 70% very fine to fine aggregates sandstone. TG: 120U. 30% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine aggregates (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 30.0% Siltstone. 70% very fine to fine aggregates sandstone. TG: 120U. 30% bright |
| Total Gas | 120.0 U |
| mTVDss | -1198.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2000m: med lt gry,,ed lt gry brn,aren, com g/t slty SST,com carb spks,mnr sndy lams,mod hd-hd,frm,mnr hd,sbblky-sbfiss. 80-100% of SST,bri yel/grn evn
- **SANDSTONE** @ ~2000m: pl gry-off wh,v pl brn gry, clr-trnsl,vf-tr med,mod wl srt,sbang- sbrnd,mod sil cmt,occ pl brn gry arg mtx, tr carb spks,mod hd,pr vis por,fluor. SURVEY @ 2009.3m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 33 |
| RES_DEEP (ohm.m) | 18.59 | 33 |
| RES_SHALLOW (ohm.m) | 16.47 | 33 |

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 40% Siltstone. 60% very fine sandstone. TG: 130U. 20% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 20.0% Siltstone. 60% very fine sandstone. TG: 130U. 20% bright |
| Total Gas | 130.0 U |
| mTVDss | -1198.80 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2000m: med lt gry,,ed lt gry brn,aren, com g/t slty SST,com carb spks,mnr sndy lams,mod hd-hd,frm,mnr hd,sbblky-sbfiss. 80-100% of SST,bri yel/grn evn
- **SANDSTONE** @ ~2000m: pl gry-off wh,v pl brn gry, clr-trnsl,vf-tr med,mod wl srt,sbang- sbrnd,mod sil cmt,occ pl brn gry arg mtx, tr carb spks,mod hd,pr vis por,fluor. SURVEY @ 2009.3m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 32 |
| RES_DEEP (ohm.m) | 17.51 | 32 |
| RES_SHALLOW (ohm.m) | 15.29 | 32 |

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 50% Siltstone. 50% very fine sandstone. TG: 110U. 20% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 20.0% Siltstone. 50% very fine sandstone. TG: 110U. 20% bright |
| Total Gas | 110.0 U |
| mTVDss | -1198.84 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2000m: med lt gry,,ed lt gry brn,aren, com g/t slty SST,com carb spks,mnr sndy lams,mod hd-hd,frm,mnr hd,sbblky-sbfiss. 80-100% of SST,bri yel/grn evn
- **SANDSTONE** @ ~2000m: pl gry-off wh,v pl brn gry, clr-trnsl,vf-tr med,mod wl srt,sbang- sbrnd,mod sil cmt,occ pl brn gry arg mtx, tr carb spks,mod hd,pr vis por,fluor. SURVEY @ 2009.3m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 17.20 | 33 |
| RES_SHALLOW (ohm.m) | 15.04 | 33 |

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 60% Siltstone. 40% very fine sandstone. TG: 75U. 30% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 30.0% Siltstone. 40% very fine sandstone. TG: 75U. 30% bright |
| Total Gas | 75.0 U |
| mTVDss | -1198.83 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2000m: med lt gry,,ed lt gry brn,aren, com g/t slty SST,com carb spks,mnr sndy lams,mod hd-hd,frm,mnr hd,sbblky-sbfiss. 80-100% of SST,bri yel/grn evn
- **SANDSTONE** @ ~2000m: pl gry-off wh,v pl brn gry, clr-trnsl,vf-tr med,mod wl srt,sbang- sbrnd,mod sil cmt,occ pl brn gry arg mtx, tr carb spks,mod hd,pr vis por,fluor. SURVEY @ 2009.3m
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 17.67 | 33 |
| RES_SHALLOW (ohm.m) | 16.25 | 33 |

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 40% Siltstone. 60% very fine - trace medium sandstone. TG: 130U. 80% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine - trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% Siltstone. 60% very fine - trace medium sandstone. TG: 130U. 80% bright |
| Total Gas | 130.0 U |
| mTVDss | -1198.82 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2000m: med lt gry,,ed lt gry brn,aren, com g/t slty SST,com carb spks,mnr sndy lams,mod hd-hd,frm,mnr hd,sbblky-sbfiss. 80-100% of SST,bri yel/grn evn
- **SANDSTONE** @ ~2000m: pl gry-off wh,v pl brn gry, clr-trnsl,vf-tr med,mod wl srt,sbang- sbrnd,mod sil cmt,occ pl brn gry arg mtx, tr carb spks,mod hd,pr vis por,fluor. SURVEY @ 2009.3m
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 33 |
| RES_DEEP (ohm.m) | 19.61 | 33 |
| RES_SHALLOW (ohm.m) | 18.31 | 33 |

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 20% Siltstone. 80% very fine - trace medium (occ fine loose) sandstone. TG: 210U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine - trace medium (occ fine loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 80% very fine - trace medium (occ fine loose) sandstone. TG: 210U. 100% bright |
| Total Gas | 210.0 U |
| mTVDss | -1198.78 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2000m: med lt gry,,ed lt gry brn,aren, com g/t slty SST,com carb spks,mnr sndy lams,mod hd-hd,frm,mnr hd,sbblky-sbfiss. 80-100% of SST,bri yel/grn evn
- **SANDSTONE** @ ~2000m: pl gry-off wh,v pl brn gry, clr-trnsl,vf-tr med,mod wl srt,sbang- sbrnd,mod sil cmt,occ pl brn gry arg mtx, tr carb spks,mod hd,pr vis por,fluor. SURVEY @ 2009.3m
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.8 | 33 |
| RES_DEEP (ohm.m) | 20.95 | 33 |
| RES_SHALLOW (ohm.m) | 19.23 | 33 |

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 10% Siltstone. 90% very fine - fine (occ fine loose) sandstone. TG: 150U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine - fine (occ fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.40) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 90% very fine - fine (occ fine loose) sandstone. TG: 150U. 100% bright |
| Total Gas | 150.0 U |
| mTVDss | -1198.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry,med gry brn,aren, occ micmic,mnr carb spks,frm-mod hd,rr hd,sbblky-sbfiss. SURVEY @ 2028.31m INC: 90.76° AZI: 28.74°G
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr-occ f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.9 | 32 |
| RES_DEEP (ohm.m) | 21.85 | 32 |
| RES_SHALLOW (ohm.m) | 20.15 | 32 |

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 5% Siltstone. 95% very fine - fine (occ very fine loose) sandstone. TG: 220U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine - fine (occ very fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 95% very fine - fine (occ very fine loose) sandstone. TG: 220U. 100% bright |
| Total Gas | 220.0 U |
| mTVDss | -1198.68 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry,med gry brn,aren, occ micmic,mnr carb spks,frm-mod hd,rr hd,sbblky-sbfiss. SURVEY @ 2028.31m INC: 90.76° AZI: 28.74°G
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr-occ f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.2 | 33 |
| RES_DEEP (ohm.m) | 20.08 | 33 |
| RES_SHALLOW (ohm.m) | 18.49 | 33 |

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 10% Siltstone. 90% very fine - fine (occ fine loose) sandstone. TG: 225U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine - fine (occ fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 90% very fine - fine (occ fine loose) sandstone. TG: 225U. 100% bright |
| Total Gas | 225.0 U |
| mTVDss | -1198.62 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry,med gry brn,aren, occ micmic,mnr carb spks,frm-mod hd,rr hd,sbblky-sbfiss. SURVEY @ 2028.31m INC: 90.76° AZI: 28.74°G
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr-occ f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 19.08 | 33 |
| RES_SHALLOW (ohm.m) | 18.48 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% very fine - fine (occ - mnr fine loose) sandstone. TG: 227U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine - fine (occ - mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine - fine (occ - mnr fine loose) sandstone. TG: 227U. 100% bright |
| Total Gas | 227.0 U |
| mTVDss | -1198.56 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry,med gry brn,aren, occ micmic,mnr carb spks,frm-mod hd,rr hd,sbblky-sbfiss. SURVEY @ 2028.31m INC: 90.76° AZI: 28.74°G
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr-occ f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 19.59 | 33 |
| RES_SHALLOW (ohm.m) | 18.31 | 33 |

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% very fine - fine (occ - mnr fine loose) sandstone. TG: 280U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine - fine (occ - mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine - fine (occ - mnr fine loose) sandstone. TG: 280U. 100% bright |
| Total Gas | 280.0 U |
| mTVDss | -1198.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr-occ f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 19.26 | 33 |
| RES_SHALLOW (ohm.m) | 17.75 | 33 |

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% very fine - fine (mnr fine loose) sandstone. TG: 126U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine - fine (mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine - fine (mnr fine loose) sandstone. TG: 126U. 100% bright |
| Total Gas | 126.0 U |
| mTVDss | -1198.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr-occ f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2030m: off wh,pl gry,v pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,mod sil cmt, occ off wh-pl gry brn arg mtx,mnr carb lams,tr-mnr carb spks,mnr f disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 33 |
| RES_DEEP (ohm.m) | 19.09 | 33 |
| RES_SHALLOW (ohm.m) | 17.79 | 33 |

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 5% Siltstone. 95% very fine (mnr very fine loose) sandstone. TG: 193U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine (mnr very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 95% very fine (mnr very fine loose) sandstone. TG: 193U. 100% bright |
| Total Gas | 193.0 U |
| mTVDss | -1198.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: pl gry-off wh,v pl brn gry, clr,trnsl,vf,v wl srt,sbang-sbrnd,mod sil cmt,occ pl gry brn-off wh arg mtx,com
- **SILTSTONE** @ ~2040m: med gry brn,med lt brn,med dk brn,mnr carb spks & micmic,mod hd- hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 32 |
| RES_DEEP (ohm.m) | 19.04 | 32 |
| RES_SHALLOW (ohm.m) | 17.34 | 32 |

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 5% Siltstone. 95% very fine (mnr very fine loose) sandstone. TG: 240U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine (mnr very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 95% very fine (mnr very fine loose) sandstone. TG: 240U. 100% bright |
| Total Gas | 240.0 U |
| mTVDss | -1198.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: pl gry-off wh,v pl brn gry, clr,trnsl,vf,v wl srt,sbang-sbrnd,mod sil cmt,occ pl gry brn-off wh arg mtx,com
- **SILTSTONE** @ ~2040m: med gry brn,med lt brn,med dk brn,mnr carb spks & micmic,mod hd- hd,sbblky-sbfiss.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 33 |
| RES_DEEP (ohm.m) | 18.69 | 33 |
| RES_SHALLOW (ohm.m) | 16.71 | 33 |

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 100% very fine (mnr very fine loose) sandstone. TG: 185U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine (mnr very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine (mnr very fine loose) sandstone. TG: 185U. 100% bright |
| Total Gas | 185.0 U |
| mTVDss | -1198.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: pl gry,off wh-wh,pl brn gry, vf-f,v wl srt,sbang-sbrnd,mod sil cmt, occ-com pl gry brn-off wh arg mtx,com carb spks,occ slty lams,mnr f disagg qtz grs,mod hd-hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2070m: med gry,med brn,med lt gry, 203 U aren,com micmic,mnr carb spks,mod hd- hd,rr v hd,sbblky-blky. 2080 FLUORESCENCE:2085m-2140m 100% of SST,bri grn/yel evn fluor,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.9 | 33 |
| RES_DEEP (ohm.m) | 18.29 | 33 |
| RES_SHALLOW (ohm.m) | 16.31 | 33 |

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 100% very fine (mnr very fine loose) sandstone. TG: 205U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine (mnr very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine (mnr very fine loose) sandstone. TG: 205U. 100% bright |
| Total Gas | 205.0 U |
| mTVDss | -1198.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: pl gry,off wh-wh,pl brn gry, vf-f,v wl srt,sbang-sbrnd,mod sil cmt, occ-com pl gry brn-off wh arg mtx,com carb spks,occ slty lams,mnr f disagg qtz grs,mod hd-hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2070m: med gry,med brn,med lt gry, 203 U aren,com micmic,mnr carb spks,mod hd- hd,rr v hd,sbblky-blky. 2080 FLUORESCENCE:2085m-2140m 100% of SST,bri grn/yel evn fluor,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 17.69 | 33 |
| RES_SHALLOW (ohm.m) | 15.95 | 33 |

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 100% very fine (mnr very fine loose) sandstone. TG: 160U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine (mnr very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine (mnr very fine loose) sandstone. TG: 160U. 100% bright |
| Total Gas | 160.0 U |
| mTVDss | -1198.12 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: pl gry,off wh-wh,pl brn gry, vf-f,v wl srt,sbang-sbrnd,mod sil cmt, occ-com pl gry brn-off wh arg mtx,com carb spks,occ slty lams,mnr f disagg qtz grs,mod hd-hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2070m: med gry,med brn,med lt gry, 203 U aren,com micmic,mnr carb spks,mod hd- hd,rr v hd,sbblky-blky. 2080 FLUORESCENCE:2085m-2140m 100% of SST,bri grn/yel evn fluor,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.1 | 33 |
| RES_DEEP (ohm.m) | 17.07 | 33 |
| RES_SHALLOW (ohm.m) | 16.54 | 33 |

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 10% Siltstone. 90% very fine (mnr very fine loose) sandstone. TG: 150U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (mnr very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 90% very fine (mnr very fine loose) sandstone. TG: 150U. 100% bright |
| Total Gas | 150.0 U |
| mTVDss | -1198.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: pl gry,off wh-wh,pl brn gry, vf-f,v wl srt,sbang-sbrnd,mod sil cmt, occ-com pl gry brn-off wh arg mtx,com carb spks,occ slty lams,mnr f disagg qtz grs,mod hd-hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2070m: med gry,med brn,med lt gry, 203 U aren,com micmic,mnr carb spks,mod hd- hd,rr v hd,sbblky-blky. 2080 FLUORESCENCE:2085m-2140m 100% of SST,bri grn/yel evn fluor,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 32 |
| RES_DEEP (ohm.m) | 17.43 | 32 |
| RES_SHALLOW (ohm.m) | 17.08 | 32 |

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 10% Siltstone. 90% very fine (mnr very fine loose) sandstone. TG: 206U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (mnr very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 90% very fine (mnr very fine loose) sandstone. TG: 206U. 100% bright |
| Total Gas | 206.0 U |
| mTVDss | -1197.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: pl gry,off wh-wh,pl brn gry, vf-f,v wl srt,sbang-sbrnd,mod sil cmt, occ-com pl gry brn-off wh arg mtx,com carb spks,occ slty lams,mnr f disagg qtz grs,mod hd-hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2070m: med gry,med brn,med lt gry, 203 U aren,com micmic,mnr carb spks,mod hd- hd,rr v hd,sbblky-blky. 2080 FLUORESCENCE:2085m-2140m 100% of SST,bri grn/yel evn fluor,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.1 | 33 |
| RES_DEEP (ohm.m) | 16.89 | 33 |
| RES_SHALLOW (ohm.m) | 16.75 | 33 |

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 5% Siltstone. 95% very fine to fine (occ to com fine loose) sandstone. TG: 250U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (occ to com fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine (occ to com fine loose) sandstone. TG: 250U. 100% bright |
| Total Gas | 250.0 U |
| mTVDss | -1197.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: pl gry,off wh-wh,pl brn gry, vf-f,v wl srt,sbang-sbrnd,mod sil cmt, occ-com pl gry brn-off wh arg mtx,com carb spks,occ slty lams,mnr f disagg qtz grs,mod hd-hd,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2070m: med gry,med brn,med lt gry, 203 U aren,com micmic,mnr carb spks,mod hd- hd,rr v hd,sbblky-blky. 2080 FLUORESCENCE:2085m-2140m 100% of SST,bri grn/yel evn fluor,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.1 | 33 |
| RES_DEEP (ohm.m) | 17.05 | 33 |
| RES_SHALLOW (ohm.m) | 16.71 | 33 |

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 100% very fine to fine (predominantly fine loose) sandstone. TG: 290U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (predominantly fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine (predominantly fine loose) sandstone. TG: 290U. 100% bright |
| Total Gas | 290.0 U |
| mTVDss | -1197.85 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.9 | 33 |
| RES_DEEP (ohm.m) | 17.60 | 33 |
| RES_SHALLOW (ohm.m) | 17.27 | 33 |

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 100% very fine to fine (predominantly fine loose) sandstone. TG: 260U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (predominantly fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine (predominantly fine loose) sandstone. TG: 260U. 100% bright |
| Total Gas | 260.0 U |
| mTVDss | -1197.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, occ-mnr pl brn arg mtx,mnr carb spks, com f disagg qtz grs,mod hd-hd,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.2 | 33 |
| RES_DEEP (ohm.m) | 17.57 | 33 |
| RES_SHALLOW (ohm.m) | 16.83 | 33 |

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 100% very fine to fine (predominantly fine loose) sandstone. TG: 280U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (predominantly fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine (predominantly fine loose) sandstone. TG: 280U. 100% bright |
| Total Gas | 280.0 U |
| mTVDss | -1197.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, occ-mnr pl brn arg mtx,mnr carb spks, com f disagg qtz grs,mod hd-hd,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.5 | 32 |
| RES_DEEP (ohm.m) | 17.63 | 32 |
| RES_SHALLOW (ohm.m) | 16.53 | 32 |

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 100% very fine to fine (predominantly fine loose) sandstone. TG: 286U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (predominantly fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine (predominantly fine loose) sandstone. TG: 286U. 100% bright |
| Total Gas | 286.0 U |
| mTVDss | -1197.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, occ-mnr pl brn arg mtx,mnr carb spks, com f disagg qtz grs,mod hd-hd,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.9 | 33 |
| RES_DEEP (ohm.m) | 18.18 | 33 |
| RES_SHALLOW (ohm.m) | 17.37 | 33 |

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 100% very fine to fine (com - abdt fine loose) sandstone. TG: 260U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (com - abdt fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine (com - abdt fine loose) sandstone. TG: 260U. 100% bright |
| Total Gas | 260.0 U |
| mTVDss | -1197.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, occ-mnr pl brn arg mtx,mnr carb spks, com f disagg qtz grs,mod hd-hd,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.8 | 33 |
| RES_DEEP (ohm.m) | 18.95 | 33 |
| RES_SHALLOW (ohm.m) | 18.75 | 33 |

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 100% very fine to fine (com - abdt fine loose) sandstone. TG: 212U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (com - abdt fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine (com - abdt fine loose) sandstone. TG: 212U. 100% bright |
| Total Gas | 212.0 U |
| mTVDss | -1197.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, occ-mnr pl brn arg mtx,mnr carb spks, com f disagg qtz grs,mod hd-hd,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, mnr pl brn arg mtx,mnr carb spks,pred vf-f disagg qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 33 |
| RES_DEEP (ohm.m) | 18.25 | 33 |
| RES_SHALLOW (ohm.m) | 17.76 | 33 |

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: 100% very fine to fine (com fine loose) sandstone. TG: 205U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (com fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine (com fine loose) sandstone. TG: 205U. 100% bright |
| Total Gas | 205.0 U |
| mTVDss | -1197.46 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, occ-mnr pl brn arg mtx,mnr carb spks, com f disagg qtz grs,mod hd-hd,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, mnr pl brn arg mtx,mnr carb spks,pred vf-f disagg qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.7 | 33 |
| RES_DEEP (ohm.m) | 18.36 | 33 |
| RES_SHALLOW (ohm.m) | 17.58 | 33 |

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: 100% very fine to fine, minor medium (com fine loose) sandstone. TG: 210U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (com fine loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine, minor medium (com fine loose) sandstone. TG: 210U. 100% bright |
| Total Gas | 210.0 U |
| mTVDss | -1197.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, occ-mnr pl brn arg mtx,mnr carb spks, com f disagg qtz grs,mod hd-hd,pr vis por, gd inf por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, mnr pl brn arg mtx,mnr carb spks,pred vf-f disagg qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.7 | 32 |
| RES_DEEP (ohm.m) | 18.29 | 32 |
| RES_SHALLOW (ohm.m) | 17.64 | 32 |

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 100% very fine to fine, minor medium (com fine loose) sandstone. TG: 264U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (com fine loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine, minor medium (com fine loose) sandstone. TG: 264U. 100% bright |
| Total Gas | 264.0 U |
| mTVDss | -1197.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, mnr pl brn arg mtx,mnr carb spks,pred vf-f disagg qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl gry brn,pl gry, vf-f,wl srt,sbang-sbrnd,mod sil cmt,occ pl gry brn arg mtx,abdt f disagg qtz grs, mod hd aggs,pr vis por,gd inf por, fluor. 71 / 5 / 4 / 8 / 12 149 U
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.3 | 33 |
| RES_DEEP (ohm.m) | 18.07 | 33 |
| RES_SHALLOW (ohm.m) | 17.78 | 33 |

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2135m: 100% very fine to fine, minor medium (com fine loose) sandstone. TG: 250U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (com fine loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine, minor medium (com fine loose) sandstone. TG: 250U. 100% bright |
| Total Gas | 250.0 U |
| mTVDss | -1197.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, mnr pl brn arg mtx,mnr carb spks,pred vf-f disagg qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl gry brn,pl gry, vf-f,wl srt,sbang-sbrnd,mod sil cmt,occ pl gry brn arg mtx,abdt f disagg qtz grs, mod hd aggs,pr vis por,gd inf por, fluor. 71 / 5 / 4 / 8 / 12 149 U
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.5 | 33 |
| RES_DEEP (ohm.m) | 18.08 | 33 |
| RES_SHALLOW (ohm.m) | 17.40 | 33 |

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** Sample 2140m: 100% very fine to fine, minor medium (com fine loose) sandstone. TG: 190U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (com fine loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine, minor medium (com fine loose) sandstone. TG: 190U. 100% bright |
| Total Gas | 190.0 U |
| mTVDss | -1197.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, mnr pl brn arg mtx,mnr carb spks,pred vf-f disagg qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl gry brn,pl gry, vf-f,wl srt,sbang-sbrnd,mod sil cmt,occ pl gry brn arg mtx,abdt f disagg qtz grs, mod hd aggs,pr vis por,gd inf por, fluor. 71 / 5 / 4 / 8 / 12 149 U
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.4 | 33 |
| RES_DEEP (ohm.m) | 18.04 | 33 |
| RES_SHALLOW (ohm.m) | 17.26 | 33 |

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 5% Siltstone. 95% very fine to fine, (abdt fine loose) sandstone. TG: 200U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, (abdt fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine, (abdt fine loose) sandstone. TG: 200U. 100% bright |
| Total Gas | 200.0 U |
| mTVDss | -1196.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn gry,vf-f,mnr med,v wl srt,sbang-sbrnd,mod sil cmt, mnr pl brn arg mtx,mnr carb spks,pred vf-f disagg qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl gry brn,pl gry, vf-f,wl srt,sbang-sbrnd,mod sil cmt,occ pl gry brn arg mtx,abdt f disagg qtz grs, mod hd aggs,pr vis por,gd inf por, fluor. 71 / 5 / 4 / 8 / 12 149 U
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 18.38 | 33 |
| RES_SHALLOW (ohm.m) | 17.72 | 33 |

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: 5% Siltstone. 95% very fine to fine, (occasional fine loose) sandstone. TG: 150U. 80% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, (occasional fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 80.0% Siltstone. 95% very fine to fine, (occasional fine loose) sandstone. TG: 150U. 80% bright |
| Total Gas | 150.0 U |
| mTVDss | -1196.75 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 18.90 | 33 |
| RES_SHALLOW (ohm.m) | 17.75 | 33 |

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 10% Siltstone. 90% very fine to fine sandstone. TG: 160U. 90% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 90.0% Siltstone. 90% very fine to fine sandstone. TG: 160U. 90% bright |
| Total Gas | 160.0 U |
| mTVDss | -1196.61 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 32 |
| RES_DEEP (ohm.m) | 19.89 | 32 |
| RES_SHALLOW (ohm.m) | 17.83 | 32 |

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 10% Siltstone. 90% very fine to fine sandstone. TG: 220U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine sandstone. TG: 220U. 100% bright |
| Total Gas | 220.0 U |
| mTVDss | -1196.49 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 20.50 | 33 |
| RES_SHALLOW (ohm.m) | 17.84 | 33 |

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 10% Siltstone. 90% very fine to fine sandstone. TG: 222U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine sandstone. TG: 222U. 100% bright |
| Total Gas | 222.0 U |
| mTVDss | -1196.37 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 33 |
| RES_DEEP (ohm.m) | 21.98 | 33 |
| RES_SHALLOW (ohm.m) | 19.87 | 33 |

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 5% Siltstone. 95% very fine to fine sandstone. TG: 250U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine sandstone. TG: 250U. 100% bright |
| Total Gas | 250.0 U |
| mTVDss | -1196.27 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 22.79 | 33 |
| RES_SHALLOW (ohm.m) | 21.15 | 33 |

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: trace Siltstone. 100% very fine to fine sandstone. TG: 273U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine sandstone. TG: 273U. 100% bright |
| Total Gas | 273.0 U |
| mTVDss | -1196.16 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2190m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, tr carb lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2190m: clr,trnsl,pl brn,lt gry-lt gry FLW: 228-259 gpm brn,f-v crs,com vf-f aggs,v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.2 | 33 |
| RES_DEEP (ohm.m) | 25.16 | 33 |
| RES_SHALLOW (ohm.m) | 22.60 | 33 |

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 100% very fine to fine aggregated (common very fine to fine loose) sandstone . TG: 326U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (common very fine to fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (common very fine to fine loose) sandstone . TG: 326U. 100% bright |
| Total Gas | 326.0 U |
| mTVDss | -1196.07 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2190m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, tr carb lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2190m: clr,trnsl,pl brn,lt gry-lt gry FLW: 228-259 gpm brn,f-v crs,com vf-f aggs,v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.3 | 32 |
| RES_DEEP (ohm.m) | 28.73 | 32 |
| RES_SHALLOW (ohm.m) | 25.77 | 32 |

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: trace siltstone, 100% very fine to fine aggregated (minor very fine to fine loose) sandstone . TG: 355U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (minor very fine to fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (minor very fine to fine loose) sandstone . TG: 355U. 100% bright |
| Total Gas | 355.0 U |
| mTVDss | -1195.98 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2190m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, tr carb lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2190m: clr,trnsl,pl brn,lt gry-lt gry FLW: 228-259 gpm brn,f-v crs,com vf-f aggs,v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 33 |
| RES_DEEP (ohm.m) | 30.30 | 33 |
| RES_SHALLOW (ohm.m) | 29.70 | 33 |

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 5% siltstone, 95% very fine to fine aggregated (minor very fine to fine loose) sandstone . TG: 412U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor very fine to fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor very fine to fine loose) sandstone . TG: 412U. 100% bright |
| Total Gas | 412.0 U |
| mTVDss | -1195.89 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2190m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, tr carb lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2190m: clr,trnsl,pl brn,lt gry-lt gry FLW: 228-259 gpm brn,f-v crs,com vf-f aggs,v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 33 |
| RES_DEEP (ohm.m) | 32.38 | 33 |
| RES_SHALLOW (ohm.m) | 31.77 | 33 |

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 5% siltstone, 95% very fine to fine aggregates (trace fine to very coarse loose grains) sandstone. TG: 309U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (trace fine to very coarse loose grains (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregates (trace fine to very coarse loose grains) sandstone. TG: 309U. 100% bright |
| Total Gas | 309.0 U |
| mTVDss | -1195.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2190m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, tr carb lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2190m: clr,trnsl,pl brn,lt gry-lt gry FLW: 228-259 gpm brn,f-v crs,com vf-f aggs,v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 33 |
| RES_DEEP (ohm.m) | 34.98 | 33 |
| RES_SHALLOW (ohm.m) | 33.86 | 33 |

---

### 2200 m MD — Interval 2197.5 – 2202.5 m

**Sample Description (spreadsheet):** Sample 2200m: 10% siltstone, 90% very fine to fine aggregates (trace fine to very coarse loose grains) sandstone. TG: 315U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (trace fine to very coarse loose grains (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregates (trace fine to very coarse loose grains) sandstone. TG: 315U. 100% bright |
| Total Gas | 315.0 U |
| mTVDss | -1195.73 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2190m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, tr carb lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2190m: clr,trnsl,pl brn,lt gry-lt gry FLW: 228-259 gpm brn,f-v crs,com vf-f aggs,v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.1 | 33 |
| RES_DEEP (ohm.m) | 37.78 | 33 |
| RES_SHALLOW (ohm.m) | 34.86 | 33 |

---

### 2205 m MD — Interval 2202.5 – 2207.5 m

**Sample Description (spreadsheet):** Sample 2205m: 10% siltstone, 90% fine to very coarse loose (common very fine to fine aggregates) sandstone. TG: 405U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | fine to very coarse loose (common very fine to fine aggregates (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% fine to very coarse loose (common very fine to fine aggregates) sandstone. TG: 405U. 100% bright |
| Total Gas | 405.0 U |
| mTVDss | -1195.67 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2190m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, tr carb lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2190m: clr,trnsl,pl brn,lt gry-lt gry FLW: 228-259 gpm brn,f-v crs,com vf-f aggs,v pr srt,sbang- sbrnd,tr ang,wk-mod sil cmt,loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 32 |
| RES_DEEP (ohm.m) | 38.61 | 32 |
| RES_SHALLOW (ohm.m) | 32.65 | 32 |

---

### 2210 m MD — Interval 2207.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 15% siltstone, 85% fine to very coarse loose (common very fine to fine aggregates) sandstone. TG: 274U. 100% bright to moderately bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | fine to very coarse loose (common very fine to fine aggregates (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% siltstone, 85% fine to very coarse loose (common very fine to fine aggregates) sandstone. TG: 274U. 100% bright to moderately bright |
| Total Gas | 274.0 U |
| mTVDss | -1195.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: pl-lt brn,lt gry brn-lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt, sbang- sbrnd,mod-wk sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr-loc mnr carb spks,tr carb lams,tr micmic,mod hd-fri,
- **SILTSTONE** @ ~2220m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, frm-mod hd,sbblky-sbfiss. 79 / 6 / 4 / 5 / 6 368 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 35.25 | 33 |
| RES_SHALLOW (ohm.m) | 31.26 | 33 |

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 10% siltstone, 90% very fine to fine aggregates (fine to very coarse loose) sandstone. TG: 309U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregates (fine to very coarse loose) sandstone. TG: 309U. 100% bright |
| Total Gas | 309.0 U |
| mTVDss | -1195.57 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: pl-lt brn,lt gry brn-lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt, sbang- sbrnd,mod-wk sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr-loc mnr carb spks,tr carb lams,tr micmic,mod hd-fri,
- **SILTSTONE** @ ~2220m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, frm-mod hd,sbblky-sbfiss. 79 / 6 / 4 / 5 / 6 368 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.8 | 33 |
| RES_DEEP (ohm.m) | 34.12 | 33 |
| RES_SHALLOW (ohm.m) | 31.91 | 33 |

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 10% siltstone, 90% very fine to medium aggregates sandstone. TG: 331U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium aggregates (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to medium aggregates sandstone. TG: 331U. 100% bright |
| Total Gas | 331.0 U |
| mTVDss | -1195.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: pl-lt brn,lt gry brn-lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt, sbang- sbrnd,mod-wk sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr-loc mnr carb spks,tr carb lams,tr micmic,mod hd-fri,
- **SILTSTONE** @ ~2220m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, frm-mod hd,sbblky-sbfiss. 79 / 6 / 4 / 5 / 6 368 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 34.70 | 33 |
| RES_SHALLOW (ohm.m) | 32.82 | 33 |

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 5% siltstone, 95% very fine to medium, trace coarse aggregated (minor loose) sandstone. TG: 364U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse aggregated (minor loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to medium, trace coarse aggregated (minor loose) sandstone. TG: 364U. 100% bright |
| Total Gas | 364.0 U |
| mTVDss | -1195.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: pl-lt brn,lt gry brn-lt gry,clr, trnsl,vf-med,tr crs,mod-wl srt, sbang- sbrnd,mod-wk sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr-loc mnr carb spks,tr carb lams,tr micmic,mod hd-fri,
- **SILTSTONE** @ ~2220m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, frm-mod hd,sbblky-sbfiss. 79 / 6 / 4 / 5 / 6 368 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 33 |
| RES_DEEP (ohm.m) | 33.23 | 33 |
| RES_SHALLOW (ohm.m) | 31.66 | 33 |

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 5% siltstone, 95% very fine to fine aggregated (minor fine to coarse loose) sandstone. TG: 267U. 100% bright to mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to coarse loose) sandstone. TG: 267U. 100% bright to mod bright |
| Total Gas | 267.0 U |
| mTVDss | -1195.50 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2220m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, frm-mod hd,sbblky-sbfiss. 79 / 6 / 4 / 5 / 6 368 U
- **SANDSTONE** @ ~2220m: pl-lt brn,lt gry brn-lt gry,clr, trnsl,vf-f,tr med-crs,mod-wl srt, sbang- sbrnd,mod-wk sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr-loc mnr carb spks,tr carb lams,tr micmic,mod hd-fri,mnr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.3 | 32 |
| RES_DEEP (ohm.m) | 34.65 | 32 |
| RES_SHALLOW (ohm.m) | 32.04 | 32 |

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 5% siltstone, 95% very fine to fine aggregated (trace medium to coarse loose) sandstone. TG: 265U. 100% bright to mod bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (trace medium to coarse loose) sandstone. TG: 265U. 100% bright to mod bright |
| Total Gas | 265.0 U |
| mTVDss | -1195.49 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2220m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams,mnr-com carb spks,com micmic, frm-mod hd,sbblky-sbfiss. 79 / 6 / 4 / 5 / 6 368 U
- **SANDSTONE** @ ~2220m: pl-lt brn,lt gry brn-lt gry,clr, trnsl,vf-f,tr med-crs,mod-wl srt, sbang- sbrnd,mod-wk sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr-loc mnr carb spks,tr carb lams,tr micmic,mod hd-fri,mnr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 33 |
| RES_DEEP (ohm.m) | 34.67 | 33 |
| RES_SHALLOW (ohm.m) | 32.72 | 33 |

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: trace siltstone, 100% very fine to fine aggregated (minor loose) sandstone. TG: 293U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (minor loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (minor loose) sandstone. TG: 293U. 100% bright |
| Total Gas | 293.0 U |
| mTVDss | -1195.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2230m: pl-lt brn,lt gry-lt gry brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri- mod hd,com disagg,pr vis por,fr inf por,
- **SANDSTONE** @ ~2240m: pl-lt brn,lt gry-lt gry brn,clr, trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk- mod sil cmt,com brn-gry arg mtx,mnr- 80 / 6 / 4 / 5 / 5 482 U loc com slty lams,tr carb spks & flks,tr
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.9 | 33 |
| RES_DEEP (ohm.m) | 37.82 | 33 |
| RES_SHALLOW (ohm.m) | 36.32 | 33 |

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: trace siltstone, 100% very fine to fine, trace medium aggregated (minor loose) sandstone. TG: 481U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium aggregated (minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine, trace medium aggregated (minor loose) sandstone. TG: 481U. 100% bright |
| Total Gas | 481.0 U |
| mTVDss | -1195.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2230m: pl-lt brn,lt gry-lt gry brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk-mod sil cmt,com brn-gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri- mod hd,com disagg,pr vis por,fr inf por,
- **SANDSTONE** @ ~2240m: pl-lt brn,lt gry-lt gry brn,clr, trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk- mod sil cmt,com brn-gry arg mtx,mnr- 80 / 6 / 4 / 5 / 5 482 U loc com slty lams,tr carb spks & flks,tr
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.5 | 33 |
| RES_DEEP (ohm.m) | 38.38 | 33 |
| RES_SHALLOW (ohm.m) | 35.77 | 33 |

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 100% very fine to fine aggregated (minor loose) sandstone. TG: 372U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (minor loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (minor loose) sandstone. TG: 372U. 100% bright |
| Total Gas | 372.0 U |
| mTVDss | -1195.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl-lt brn,lt gry-lt gry brn,clr, trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk- mod sil cmt,com brn-gry arg mtx,mnr- 80 / 6 / 4 / 5 / 5 482 U loc com slty lams,tr carb spks & flks,tr
- **SANDSTONE** @ ~2240m: 3-8 klbs 2250 SANDSTONE:pl-lt brn,lt gry-lt gry brn,clr, FLW: 231-259 gpm carb spks & flks,tr micmic,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 33 |
| RES_DEEP (ohm.m) | 34.18 | 33 |
| RES_SHALLOW (ohm.m) | 31.91 | 33 |

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 100% very fine to fine aggregated (minor loose) sandstone. TG: 288U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (minor loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (minor loose) sandstone. TG: 288U. 100% bright |
| Total Gas | 288.0 U |
| mTVDss | -1195.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl-lt brn,lt gry-lt gry brn,clr, trnsl,vf-f,tr med,wl srt,sbang-sbrnd,wk- mod sil cmt,com brn-gry arg mtx,mnr- 80 / 6 / 4 / 5 / 5 482 U loc com slty lams,tr carb spks & flks,tr
- **SANDSTONE** @ ~2240m: 3-8 klbs 2250 SANDSTONE:pl-lt brn,lt gry-lt gry brn,clr, FLW: 231-259 gpm carb spks & flks,tr micmic,fri-mod hd,mnr disagg,pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 32 |
| RES_DEEP (ohm.m) | 30.61 | 32 |
| RES_SHALLOW (ohm.m) | 27.04 | 32 |

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 100% very fine to fine aggregated (common loose) sandstone. TG: 360U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (common loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (common loose) sandstone. TG: 360U. 100% bright |
| Total Gas | 360.0 U |
| mTVDss | -1195.47 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2260m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams, mnr-loc com carb spks,micmic i/p,frm- mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,tr med,g/t aren SLTST i/p,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr brn- gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri-mod hd,com
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 31.02 | 33 |
| RES_SHALLOW (ohm.m) | 28.72 | 33 |

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: trace siltstone, 100% very fine to fine aggregated (minor loose) sandstone. TG: 494U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (minor loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (minor loose) sandstone. TG: 494U. 100% bright |
| Total Gas | 494.0 U |
| mTVDss | -1195.46 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2260m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams, mnr-loc com carb spks,micmic i/p,frm- mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,tr med,g/t aren SLTST i/p,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr brn- gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri-mod hd,com
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 34.53 | 33 |
| RES_SHALLOW (ohm.m) | 33.91 | 33 |

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 5% siltstone, 95% very fine to fine aggregated (minor loose)\ sandstone. TG: 341U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor loose)\ (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor loose)\ sandstone. TG: 341U. 100% bright |
| Total Gas | 341.0 U |
| mTVDss | -1195.46 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2260m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams, mnr-loc com carb spks,micmic i/p,frm- mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,tr med,g/t aren SLTST i/p,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr brn- gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri-mod hd,com
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 33 |
| RES_DEEP (ohm.m) | 38.82 | 33 |
| RES_SHALLOW (ohm.m) | 39.15 | 33 |

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 10% siltstone, 90% very fine to fine, trace medium aggregated (minor loose) sandstone. TG: 349U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium aggregated (minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine, trace medium aggregated (minor loose) sandstone. TG: 349U. 100% bright |
| Total Gas | 349.0 U |
| mTVDss | -1195.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2260m: med gry-med lt gry,med dk gry,aren,com g/t slty SST,com sndy lams, mnr-loc com carb spks,micmic i/p,frm- mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2260m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,tr med,g/t aren SLTST i/p,wl srt,sbang-sbrnd,wk-mod sil cmt,mnr brn- gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri-mod hd,com
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 33 |
| RES_DEEP (ohm.m) | 37.70 | 33 |
| RES_SHALLOW (ohm.m) | 36.64 | 33 |

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 10% siltstone, 90% very fine to fine aggregated (minor loose) sandstone. TG: 285U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (minor loose) sandstone. TG: 285U. 100% bright |
| Total Gas | 285.0 U |
| mTVDss | -1195.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr brn-gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri-mod hd,com disagg
- **SILTSTONE** @ ~2280m: med gry-med lt gry,med dk gry,aren,g/t slty SST i/p,mnr sndy lams, com carb spks,micmic i/p,frm-mod hd, 80 / 6 / 4 / 5 / 5 410 U sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 36.69 | 33 |
| RES_SHALLOW (ohm.m) | 36.78 | 33 |

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 10% siltstone, 90% very fine to fine, rare medium aggregated (minor loose) sandstone. TG: 405U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium aggregated (minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine, rare medium aggregated (minor loose) sandstone. TG: 405U. 100% bright |
| Total Gas | 405.0 U |
| mTVDss | -1195.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,g/t aren SLTST i/p,wl srt, sbang-sbrnd,wk-mod sil cmt,mnr brn-gry arg mtx,tr-loc com slty lams,tr carb spks & flks,tr micmic,fri-mod hd,com disagg
- **SILTSTONE** @ ~2280m: med gry-med lt gry,med dk gry,aren,g/t slty SST i/p,mnr sndy lams, com carb spks,micmic i/p,frm-mod hd, 80 / 6 / 4 / 5 / 5 410 U sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 32 |
| RES_DEEP (ohm.m) | 38.75 | 32 |
| RES_SHALLOW (ohm.m) | 38.52 | 32 |

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 5% siltstone, 95% very fine to coarse, trace very coarse loose (minor vf-f aggs) sandstone. TG: 271U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, trace very coarse loose (minor vf-f aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to coarse, trace very coarse loose (minor vf-f aggs) sandstone. TG: 271U. 100% bright |
| Total Gas | 271.0 U |
| mTVDss | -1195.38 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2280m: med gry-med lt gry,med dk gry,aren,g/t slty SST i/p,mnr sndy lams, com carb spks,micmic i/p,frm-mod hd, 80 / 6 / 4 / 5 / 5 410 U sbblky-sbfiss.
- **SANDSTONE** @ ~2280m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,tr ang,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr-loc mnr slty lams,tr carb spks & flks,tr micmic,fri-mod hd,rr disagg
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.8 | 33 |
| RES_DEEP (ohm.m) | 38.59 | 33 |
| RES_SHALLOW (ohm.m) | 36.08 | 33 |

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 5% siltstone, 95% very fine to fine aggregated (minor fine to very coarse loose) sandstone. TG: 286U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to very coarse loose) sandstone. TG: 286U. 100% bright |
| Total Gas | 286.0 U |
| mTVDss | -1195.36 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2280m: med gry-med lt gry,med dk gry,aren,g/t slty SST i/p,mnr sndy lams, com carb spks,micmic i/p,frm-mod hd, 80 / 6 / 4 / 5 / 5 410 U sbblky-sbfiss.
- **SANDSTONE** @ ~2280m: pl-lt brn,lt gry-lt gry brn, clr,trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,tr ang,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr-loc mnr slty lams,tr carb spks & flks,tr micmic,fri-mod hd,rr disagg
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.2 | 33 |
| RES_DEEP (ohm.m) | 37.90 | 33 |
| RES_SHALLOW (ohm.m) | 30.27 | 33 |

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 100% very fine to fine aggregated (rare fine to coarse coarse loose) sandstone. TG: 424U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (rare fine to coarse coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (rare fine to coarse coarse loose) sandstone. TG: 424U. 100% bright |
| Total Gas | 424.0 U |
| mTVDss | -1195.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: clr,trnsl,pl brn,lt gry brn,vf -crs,tr v crs,com vf-f aggs,pr srt,sbang- sbrnd,wk-mod sil cmt,mnr-loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr micmic,pred f-crs disagg qtz grs,fri-mnr
- **SILTSTONE** @ ~2310m: med dk gry-dk gry,med gry, aren,com sndy lams,com micmic,tr-loc com carb spks,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 36.13 | 33 |
| RES_SHALLOW (ohm.m) | 30.58 | 33 |

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 100% very fine to fine aggregated (trace fine to very coarse loose) sandstone. TG: 350U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine to very coarse loose) sandstone. TG: 350U. 100% bright |
| Total Gas | 350.0 U |
| mTVDss | -1195.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: clr,trnsl,pl brn,lt gry brn,vf -crs,tr v crs,com vf-f aggs,pr srt,sbang- sbrnd,wk-mod sil cmt,mnr-loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr micmic,pred f-crs disagg qtz grs,fri-mnr
- **SILTSTONE** @ ~2310m: med dk gry-dk gry,med gry, aren,com sndy lams,com micmic,tr-loc com carb spks,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.5 | 33 |
| RES_DEEP (ohm.m) | 40.54 | 33 |
| RES_SHALLOW (ohm.m) | 31.39 | 33 |

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: trace siltstone, 100% very fine to medium, trace coarse aggregated (minor loose) sandstone. TG: 257U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse aggregated (minor loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to medium, trace coarse aggregated (minor loose) sandstone. TG: 257U. 100% bright |
| Total Gas | 257.0 U |
| mTVDss | -1195.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: clr,trnsl,pl brn,lt gry brn,vf -crs,tr v crs,com vf-f aggs,pr srt,sbang- sbrnd,wk-mod sil cmt,mnr-loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr micmic,pred f-crs disagg qtz grs,fri-mnr
- **SILTSTONE** @ ~2310m: med dk gry-dk gry,med gry, aren,com sndy lams,com micmic,tr-loc com carb spks,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.4 | 32 |
| RES_DEEP (ohm.m) | 37.05 | 32 |
| RES_SHALLOW (ohm.m) | 27.58 | 32 |

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: trace siltstone, 100% very fine to medium, trace coarse disaggregated (minor very fine to fine aggregates) sandstone. TG: 212U. 100% bright to moderately bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse disaggregated (minor very fine to fine aggregates (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to medium, trace coarse disaggregated (minor very fine to fine aggregates) sandstone. TG: 212U. 100% bright to moderately bright |
| Total Gas | 212.0 U |
| mTVDss | -1195.46 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: clr,trnsl,pl brn,lt gry brn,vf -crs,tr v crs,com vf-f aggs,pr srt,sbang- sbrnd,wk-mod sil cmt,mnr-loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr micmic,pred f-crs disagg qtz grs,fri-mnr
- **SILTSTONE** @ ~2310m: med dk gry-dk gry,med gry, aren,com sndy lams,com micmic,tr-loc com carb spks,frm-mod hd,sbblky-sbfiss.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 37.36 | 33 |
| RES_SHALLOW (ohm.m) | 32.85 | 33 |

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: trace siltstone, 100% very fine to coarse, trace very coarse disaggregated (common very fine to fine aggregates) sandstone. TG: 445U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse disaggregated (common very fine to fine aggregates (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to coarse, trace very coarse disaggregated (common very fine to fine aggregates) sandstone. TG: 445U. 100% bright |
| Total Gas | 445.0 U |
| mTVDss | -1195.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: clr,trnsl,pl brn,lt gry brn,vf -crs,tr v crs,com vf-f aggs,pr srt,sbang- sbrnd,wk-mod sil cmt,mnr-loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr micmic,pred f-crs disagg qtz grs,fri-mnr
- **SILTSTONE** @ ~2310m: med dk gry-dk gry,med gry, aren,com sndy lams,com micmic,tr-loc com carb spks,frm-mod hd,sbblky-sbfiss.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.7 | 33 |
| RES_DEEP (ohm.m) | 43.74 | 33 |
| RES_SHALLOW (ohm.m) | 41.07 | 33 |

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: trace siltstone, 100% very fine to coarse, trace very coarse disaggregated (common very fine to fine aggregates) sandstone. TG: 310U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, trace very coarse disaggregated (common very fine to fine aggregates (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to coarse, trace very coarse disaggregated (common very fine to fine aggregates) sandstone. TG: 310U. 100% bright |
| Total Gas | 310.0 U |
| mTVDss | -1195.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: clr,trnsl,pl brn,lt gry brn,vf -crs,tr v crs,com vf-f aggs,pr srt,sbang- sbrnd,wk-mod sil cmt,mnr-loc com gry- brn arg mtx,tr carb spks,tr slty lams,tr micmic,pred f-crs disagg qtz grs,fri-mnr
- **SILTSTONE** @ ~2310m: med dk gry-dk gry,med gry, aren,com sndy lams,com micmic,tr-loc com carb spks,frm-mod hd,sbblky-sbfiss.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 40.85 | 33 |
| RES_SHALLOW (ohm.m) | 38.19 | 33 |

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 10% siltstone, 90% very fine to fine aggregated (minor medium to very coarse disaggregated) sandstone. TG: 294U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor medium to very coarse disaggregated (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (minor medium to very coarse disaggregated) sandstone. TG: 294U. 100% bright |
| Total Gas | 294.0 U |
| mTVDss | -1195.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr, trnsl,opq,vf-f,mnr f-v crs,vf-f aggs,mod- pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,mnr slty lams,tr carb spks,tr micmic,fri-mod hd,
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr,trnsl, opq,vf-f,tr med-crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,tr carb spks,tr micmic,fri-mod hd,mnr disagg qtz
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.4 | 33 |
| RES_DEEP (ohm.m) | 37.53 | 33 |
| RES_SHALLOW (ohm.m) | 36.59 | 33 |

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 10% siltstone, 90% very fine to fine aggregated (minor fine to very coarse disaggregated) sandstone. TG: 350U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor fine to very coarse disaggregated (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (minor fine to very coarse disaggregated) sandstone. TG: 350U. 100% bright |
| Total Gas | 350.0 U |
| mTVDss | -1195.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr, trnsl,opq,vf-f,mnr f-v crs,vf-f aggs,mod- pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,mnr slty lams,tr carb spks,tr micmic,fri-mod hd,
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr,trnsl, opq,vf-f,tr med-crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,tr carb spks,tr micmic,fri-mod hd,mnr disagg qtz
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 32 |
| RES_DEEP (ohm.m) | 39.14 | 32 |
| RES_SHALLOW (ohm.m) | 39.17 | 32 |

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 5% siltstone, 95% very fine to fine aggregated (minor fine to coarse disaggregated) sandstone. TG: 383U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to coarse disaggregated) sandstone. TG: 383U. 100% bright |
| Total Gas | 383.0 U |
| mTVDss | -1195.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr, trnsl,opq,vf-f,mnr f-v crs,vf-f aggs,mod- pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,mnr slty lams,tr carb spks,tr micmic,fri-mod hd,
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr,trnsl, opq,vf-f,tr med-crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,tr carb spks,tr micmic,fri-mod hd,mnr disagg qtz
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 33 |
| RES_DEEP (ohm.m) | 37.81 | 33 |
| RES_SHALLOW (ohm.m) | 38.79 | 33 |

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 5% siltstone, 95% very fine to fine aggregated (minor fine to coarse disaggregated) sandstone. TG: 295U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to coarse disaggregated) sandstone. TG: 295U. 100% bright |
| Total Gas | 295.0 U |
| mTVDss | -1195.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr, trnsl,opq,vf-f,mnr f-v crs,vf-f aggs,mod- pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,mnr slty lams,tr carb spks,tr micmic,fri-mod hd,
- **SANDSTONE** @ ~2330m: pl-lt brn,lt gry brn,clr,trnsl, opq,vf-f,tr med-crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,tr carb spks,tr micmic,fri-mod hd,mnr disagg qtz
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 35.26 | 33 |
| RES_SHALLOW (ohm.m) | 34.39 | 33 |

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 5% siltstone, 95% very fine to fine aggregated (minor fine to coarse disaggregated) sandstone. TG: 294U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to coarse disaggregated) sandstone. TG: 294U. 100% bright |
| Total Gas | 294.0 U |
| mTVDss | -1195.84 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 35.25 | 33 |
| RES_SHALLOW (ohm.m) | 34.49 | 33 |

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: trace siltstone, 100% very fine to fine aggregated (trace fine to medium disaggregated) sandstone. TG: 315U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine to medium disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine to medium disaggregated) sandstone. TG: 315U. 100% bright |
| Total Gas | 315.0 U |
| mTVDss | -1195.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-f,mnr med,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg 77 / 6 / 4 / 6 / 7 321 U mtx,tr slty lams,tr carb spks,tr micmic, fri-mod hd,mnr f-med disagg qtz qtz grs,
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, 2380 trnsl,vf-med,tr crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr carb spks,tr micmic,fri-mod hd,com f-med,tr crs
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.4 | 33 |
| RES_DEEP (ohm.m) | 33.95 | 33 |
| RES_SHALLOW (ohm.m) | 33.23 | 33 |

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: trace siltstone, 100% very fine to fine aggregated (trace fine to medium disaggregated) sandstone. TG: 479U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine to medium disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine to medium disaggregated) sandstone. TG: 479U. 100% bright |
| Total Gas | 479.0 U |
| mTVDss | -1195.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-f,mnr med,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg 77 / 6 / 4 / 6 / 7 321 U mtx,tr slty lams,tr carb spks,tr micmic, fri-mod hd,mnr f-med disagg qtz qtz grs,
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, 2380 trnsl,vf-med,tr crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr carb spks,tr micmic,fri-mod hd,com f-med,tr crs
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 32 |
| RES_DEEP (ohm.m) | 36.38 | 32 |
| RES_SHALLOW (ohm.m) | 36.03 | 32 |

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 100% very fine to fine aggregated (trace fine to fine disaggregated) sandstone. TG: 329U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine to fine disaggregated (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine to fine disaggregated) sandstone. TG: 329U. 100% bright |
| Total Gas | 329.0 U |
| mTVDss | -1195.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-f,mnr med,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg 77 / 6 / 4 / 6 / 7 321 U mtx,tr slty lams,tr carb spks,tr micmic, fri-mod hd,mnr f-med disagg qtz qtz grs,
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, 2380 trnsl,vf-med,tr crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr carb spks,tr micmic,fri-mod hd,com f-med,tr crs
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 33 |
| RES_DEEP (ohm.m) | 33.84 | 33 |
| RES_SHALLOW (ohm.m) | 31.16 | 33 |

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 2370m: 5% siltstone, 95% very fine to fine aggregated (minor fine to medium disaggregated) sandstone. TG: 331U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to medium disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to medium disaggregated) sandstone. TG: 331U. 100% bright |
| Total Gas | 331.0 U |
| mTVDss | -1195.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-f,mnr med,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg 77 / 6 / 4 / 6 / 7 321 U mtx,tr slty lams,tr carb spks,tr micmic, fri-mod hd,mnr f-med disagg qtz qtz grs,
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, 2380 trnsl,vf-med,tr crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr carb spks,tr micmic,fri-mod hd,com f-med,tr crs
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 33 |
| RES_DEEP (ohm.m) | 37.73 | 33 |
| RES_SHALLOW (ohm.m) | 35.04 | 33 |

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 5% siltstone, 95% very fine to fine aggregated (minor fine to medium disaggregated) sandstone. TG: 293U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to medium disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to medium disaggregated) sandstone. TG: 293U. 100% bright |
| Total Gas | 293.0 U |
| mTVDss | -1195.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-f,mnr med,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg 77 / 6 / 4 / 6 / 7 321 U mtx,tr slty lams,tr carb spks,tr micmic, fri-mod hd,mnr f-med disagg qtz qtz grs,
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, 2380 trnsl,vf-med,tr crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr carb spks,tr micmic,fri-mod hd,com f-med,tr crs
- _(13 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 33 |
| RES_DEEP (ohm.m) | 34.59 | 33 |
| RES_SHALLOW (ohm.m) | 32.52 | 33 |

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 5% siltstone, 95% very fine to fine aggregated (minor fine to medium & trace coarse disaggregated) sandstone. TG: 329U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (minor fine to medium & trace coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (minor fine to medium & trace coarse disaggregated) sandstone. TG: 329U. 100% bright |
| Total Gas | 329.0 U |
| mTVDss | -1195.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-f,mnr med,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg 77 / 6 / 4 / 6 / 7 321 U mtx,tr slty lams,tr carb spks,tr micmic, fri-mod hd,mnr f-med disagg qtz qtz grs,
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, 2380 trnsl,vf-med,tr crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr carb spks,tr micmic,fri-mod hd,com f-med,tr crs
- _(13 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 35.25 | 33 |
| RES_SHALLOW (ohm.m) | 35.05 | 33 |

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 5% siltstone, 95% very fine to fine aggregated (common fine to medium & trace coarse disaggregated) sandstone. TG: 327U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (common fine to medium & trace coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (common fine to medium & trace coarse disaggregated) sandstone. TG: 327U. 100% bright |
| Total Gas | 327.0 U |
| mTVDss | -1195.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, trnsl,vf-f,mnr med,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg 77 / 6 / 4 / 6 / 7 321 U mtx,tr slty lams,tr carb spks,tr micmic, fri-mod hd,mnr f-med disagg qtz qtz grs,
- **SANDSTONE** @ ~2370m: pl-lt brn,lt gry brn,lt gry,clr, 2380 trnsl,vf-med,tr crs,vf-f aggs,mod-wl srt, sbang-sbrnd,wk-mod sil cmt,mnr-loc com brn-gry arg mtx,tr carb spks,tr micmic,fri-mod hd,com f-med,tr crs
- _(13 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.4 | 33 |
| RES_DEEP (ohm.m) | 31.65 | 33 |
| RES_SHALLOW (ohm.m) | 30.76 | 33 |

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2390m: 10% siltstone, 90% very fine to fine aggregated (common fine to medium & trace coarse disaggregated) sandstone. TG: 320U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (common fine to medium & trace coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (common fine to medium & trace coarse disaggregated) sandstone. TG: 320U. 100% bright |
| Total Gas | 320.0 U |
| mTVDss | -1195.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2390m: clr,trnsl,pl gry brn,vf-occ med,mnr crs,pr srt,sbang-sbrnd,mod-wk sil cmt,mnr brn gry arg mtx,tr carb spks & micmic,med-mnr crs abdt disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2390m: clr,trnsl,pl brn gry,vf-occ crs,pr srt,sbang-sbrnd,wk sil cmt,tr pl brn-gry arg mtx,tr carb spks & micmic,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.1 | 32 |
| RES_DEEP (ohm.m) | 33.47 | 32 |
| RES_SHALLOW (ohm.m) | 29.97 | 32 |

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** Sample 2395m: 10% siltstone, 90% very fine to fine aggregated (abundant medium & minor coarse disaggregated) sandstone. TG: 330U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (abundant medium & minor coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (abundant medium & minor coarse disaggregated) sandstone. TG: 330U. 100% bright |
| Total Gas | 330.0 U |
| mTVDss | -1195.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2390m: clr,trnsl,pl gry brn,vf-occ med,mnr crs,pr srt,sbang-sbrnd,mod-wk sil cmt,mnr brn gry arg mtx,tr carb spks & micmic,med-mnr crs abdt disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2390m: clr,trnsl,pl brn gry,vf-occ crs,pr srt,sbang-sbrnd,wk sil cmt,tr pl brn-gry arg mtx,tr carb spks & micmic,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 34.56 | 33 |
| RES_SHALLOW (ohm.m) | 34.15 | 33 |

---

### 2400 m MD — Interval 2397.5 – 2403.0 m

**Sample Description (spreadsheet):** Sample 2400m: 100% very fine to fine aggregated (predominantly medium & coarse disaggregated) sandstone. TG: 430U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (predominantly medium & coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregated (predominantly medium & coarse disaggregated) sandstone. TG: 430U. 100% bright |
| Total Gas | 430.0 U |
| mTVDss | -1195.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2390m: clr,trnsl,pl gry brn,vf-occ med,mnr crs,pr srt,sbang-sbrnd,mod-wk sil cmt,mnr brn gry arg mtx,tr carb spks & micmic,med-mnr crs abdt disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2390m: clr,trnsl,pl brn gry,vf-occ crs,pr srt,sbang-sbrnd,wk sil cmt,tr pl brn-gry arg mtx,tr carb spks & micmic,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.6 | 36 |
| RES_DEEP (ohm.m) | 33.60 | 36 |
| RES_SHALLOW (ohm.m) | 32.87 | 36 |

---

### 2406 m MD — Interval 2403.0 – 2409.0 m

**Sample Description (spreadsheet):** Sample 2406m: 100% trace very fine to fine aggregated (predominantly medium & coarse disaggregated) sandstone. TG: 305U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | trace very fine to fine aggregated (predominantly medium & coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% trace very fine to fine aggregated (predominantly medium & coarse disaggregated) sandstone. TG: 305U. 100% bright |
| Total Gas | 305.0 U |
| mTVDss | -1195.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2390m: clr,trnsl,pl gry brn,vf-occ med,mnr crs,pr srt,sbang-sbrnd,mod-wk sil cmt,mnr brn gry arg mtx,tr carb spks & micmic,med-mnr crs abdt disagg qtz grs,mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2390m: clr,trnsl,pl brn gry,vf-occ crs,pr srt,sbang-sbrnd,wk sil cmt,tr pl brn-gry arg mtx,tr carb spks & micmic,
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.1 | 40 |
| RES_DEEP (ohm.m) | 35.02 | 40 |
| RES_SHALLOW (ohm.m) | 30.75 | 40 |

---

### 2412 m MD — Interval 2409.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample: 2412: 5% Siltstone. 95% very fine to fine aggregated(common medium to coarse disaggregated) sandstone. TG: 320U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated(common medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggregated(common medium to coarse disaggregated) sandstone. TG: 320U. 100% bright |
| Total Gas | 320.0 U |
| mTVDss | -1195.67 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.5 | 39 |
| RES_DEEP (ohm.m) | 33.02 | 39 |
| RES_SHALLOW (ohm.m) | 27.36 | 39 |

---

### 2418 m MD — Interval 2415.0 – 2421.0 m

**Sample Description (spreadsheet):** Sample: 2418: 5% Siltstone. 95% very fine to fine aggregated(common to occasionally medium to coarse disaggregated) sandstone. TG: 400U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated(common to occasionally medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggregated(common to occasionally medium to coarse disaggregated) sandstone. TG: 400U. 100% bright |
| Total Gas | 400.0 U |
| mTVDss | -1195.66 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 39 |
| RES_DEEP (ohm.m) | 37.92 | 39 |
| RES_SHALLOW (ohm.m) | 28.15 | 39 |

---

### 2424 m MD — Interval 2421.0 – 2427.0 m

**Sample Description (spreadsheet):** Sample: 2424: 20% Siltstone. 80% very fine to fine aggregated(common to occasionally medium to coarse disaggregated) sandstone. TG: 290U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregated(common to occasionally medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine aggregated(common to occasionally medium to coarse disaggregated) sandstone. TG: 290U. 100% bright |
| Total Gas | 290.0 U |
| mTVDss | -1195.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 40 |
| RES_DEEP (ohm.m) | 40.13 | 40 |
| RES_SHALLOW (ohm.m) | 25.69 | 40 |

---

### 2430 m MD — Interval 2427.0 – 2433.0 m

**Sample Description (spreadsheet):** Sample: 2430: 30% Siltstone. 70% very fine to fine aggregated(common medium to coarse disaggregated) sandstone. TG: 275U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine aggregated(common medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone. 70% very fine to fine aggregated(common medium to coarse disaggregated) sandstone. TG: 275U. 100% bright |
| Total Gas | 275.0 U |
| mTVDss | -1195.64 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.2 | 39 |
| RES_DEEP (ohm.m) | 26.74 | 39 |
| RES_SHALLOW (ohm.m) | 18.47 | 39 |

---

### 2436 m MD — Interval 2433.0 – 2439.0 m

**Sample Description (spreadsheet):** Sample: 2436: 40% Siltstone. 60% very fine to fine aggregated(common medium to coarse disaggregated) sandstone. TG: 215U. 90% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine aggregated(common medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 90.0% Siltstone. 60% very fine to fine aggregated(common medium to coarse disaggregated) sandstone. TG: 215U. 90% bright |
| Total Gas | 215.0 U |
| mTVDss | -1195.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.4 | 39 |
| RES_DEEP (ohm.m) | 35.24 | 39 |
| RES_SHALLOW (ohm.m) | 23.17 | 39 |

---

### 2442 m MD — Interval 2439.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample: 2442: 20% Siltstone. 80% very fine to fine aggregated(predominantly medium disaggregated) sandstone. TG: 250U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregated(predominantly medium disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine aggregated(predominantly medium disaggregated) sandstone. TG: 250U. 100% bright |
| Total Gas | 250.0 U |
| mTVDss | -1195.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,vf-crs,pred vf-f, mod pr srt,sbang-sbrnd,mod-wk sil cmt, occ pl brn gry arg mtx,com-abdt f-med disagg qtz grs,fri-mod hd,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 40 |
| RES_DEEP (ohm.m) | 41.02 | 40 |
| RES_SHALLOW (ohm.m) | 26.03 | 40 |

---

### 2448 m MD — Interval 2445.0 – 2451.0 m

**Sample Description (spreadsheet):** Sample: 2448: 100% very fine to fine aggregated(predominantly disaggregated) sandstone. TG: 335U. 100% bright fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated(predominantly disaggregated (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine aggregated(predominantly disaggregated) sandstone. TG: 335U. 100% bright |
| Total Gas | 335.0 U |
| mTVDss | -1195.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,vf-crs,pred vf-f, mod pr srt,sbang-sbrnd,mod-wk sil cmt, occ pl brn gry arg mtx,com-abdt f-med disagg qtz grs,fri-mod hd,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 39 |
| RES_DEEP (ohm.m) | 44.09 | 39 |
| RES_SHALLOW (ohm.m) | 28.52 | 39 |

---

### 2454 m MD — Interval 2451.0 – 2457.0 m

**Sample Description (spreadsheet):** Sample 2454m: 5% Siltstone. 95% very fine to coarse disaggregated (predominantly very fine to fine) sandstone. TG: 370U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse disaggregated (predominantly very fine to fine (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 95% very fine to coarse disaggregated (predominantly very fine to fine) sandstone. TG: 370U. 100% |
| Total Gas | 370.0 U |
| mTVDss | -1195.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,vf-crs,pred vf-f, mod pr srt,sbang-sbrnd,mod-wk sil cmt, occ pl brn gry arg mtx,com-abdt f-med disagg qtz grs,fri-mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2470m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,occ pl brn gry arg mtx,com med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 40 |
| RES_DEEP (ohm.m) | 44.23 | 40 |
| RES_SHALLOW (ohm.m) | 35.64 | 40 |

---

### 2460 m MD — Interval 2457.0 – 2463.0 m

**Sample Description (spreadsheet):** Sample 2460m: 5% Siltstone. 95% very fine to fine aggregates (common medium to minor coarse disaggregated) sandstone. TG: 406U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (common medium to minor coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggregates (common medium to minor coarse disaggregated) sandstone. TG: 406U. 100% |
| Total Gas | 406.0 U |
| mTVDss | -1196.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,vf-crs,pred vf-f, mod pr srt,sbang-sbrnd,mod-wk sil cmt, occ pl brn gry arg mtx,com-abdt f-med disagg qtz grs,fri-mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2470m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,occ pl brn gry arg mtx,com med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 39 |
| RES_DEEP (ohm.m) | 38.48 | 39 |
| RES_SHALLOW (ohm.m) | 33.49 | 39 |

---

### 2466 m MD — Interval 2463.0 – 2469.0 m

**Sample Description (spreadsheet):** Sample 2466m: 100% very fine to medium (common to abundant disaggregated) sandstone. TG: 307U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (common to abundant disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to medium (common to abundant disaggregated) sandstone. TG: 307U. 100% |
| Total Gas | 307.0 U |
| mTVDss | -1196.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,vf-crs,pred vf-f, mod pr srt,sbang-sbrnd,mod-wk sil cmt, occ pl brn gry arg mtx,com-abdt f-med disagg qtz grs,fri-mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2470m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,occ pl brn gry arg mtx,com med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 39 |
| RES_DEEP (ohm.m) | 38.60 | 39 |
| RES_SHALLOW (ohm.m) | 35.91 | 39 |

---

### 2472 m MD — Interval 2469.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2472m: 100% very fine to fine aggregates (common medium to coarse disaggregated) sandstone. TG: 300U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (common medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregates (common medium to coarse disaggregated) sandstone. TG: 300U. 100% |
| Total Gas | 300.0 U |
| mTVDss | -1196.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,vf-crs,pred vf-f, mod pr srt,sbang-sbrnd,mod-wk sil cmt, occ pl brn gry arg mtx,com-abdt f-med disagg qtz grs,fri-mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2470m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,occ pl brn gry arg mtx,com med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.7 | 40 |
| RES_DEEP (ohm.m) | 33.83 | 40 |
| RES_SHALLOW (ohm.m) | 30.64 | 40 |

---

### 2478 m MD — Interval 2475.0 – 2481.0 m

**Sample Description (spreadsheet):** Sample 2478m: 100% very fine to fine aggregates (predominantly medium to coarse disaggregated) sandstone. TG: 395U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (predominantly medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregates (predominantly medium to coarse disaggregated) sandstone. TG: 395U. 100% |
| Total Gas | 395.0 U |
| mTVDss | -1196.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,vf-crs,pred vf-f, mod pr srt,sbang-sbrnd,mod-wk sil cmt, occ pl brn gry arg mtx,com-abdt f-med disagg qtz grs,fri-mod hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2470m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,occ pl brn gry arg mtx,com med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.0 | 39 |
| RES_DEEP (ohm.m) | 29.46 | 39 |
| RES_SHALLOW (ohm.m) | 27.62 | 39 |

---

### 2484 m MD — Interval 2481.0 – 2487.0 m

**Sample Description (spreadsheet):** Sample 2484m: 100% very fine to fine aggregates (predominantly medium to coarse disaggregated) sandstone. TG: 330U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (predominantly medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregates (predominantly medium to coarse disaggregated) sandstone. TG: 330U. 100% |
| Total Gas | 330.0 U |
| mTVDss | -1196.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,occ pl brn gry arg mtx,com med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~2470m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,occ pl brn gry arg mtx,pred med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 39 |
| RES_DEEP (ohm.m) | 27.71 | 39 |
| RES_SHALLOW (ohm.m) | 25.80 | 39 |

---

### 2490 m MD — Interval 2487.0 – 2493.0 m

**Sample Description (spreadsheet):** Sample 2490m: 100% very fine to fine aggregates (predominantly medium to coarse disaggregated) sandstone. TG: 335U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (predominantly medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregates (predominantly medium to coarse disaggregated) sandstone. TG: 335U. 100% |
| Total Gas | 335.0 U |
| mTVDss | -1196.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,wk-mod sil cmt,tr pl brn gry arg mtx,pred med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~2480m: clr,trnsl,pl brn gry,vf-crs, pr srt,sbang-sbrnd,wk sil cmt,tr pl gry brn arg mtx,pred med-crs disagg qtz grs, fri-mod hd aggs,pr vis por,gd inf por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 40 |
| RES_DEEP (ohm.m) | 24.67 | 40 |
| RES_SHALLOW (ohm.m) | 23.86 | 40 |

---

### 2496 m MD — Interval 2493.0 – 2499.0 m

**Sample Description (spreadsheet):** Sample 2496m: 100% very fine to fine aggregates (predominantly coarse to medium disaggregated) sandstone. TG: 300U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (predominantly coarse to medium disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggregates (predominantly coarse to medium disaggregated) sandstone. TG: 300U. 100% |
| Total Gas | 300.0 U |
| mTVDss | -1196.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr,trnsl,vf-crs,vf aggs,pr srt,sbang-sbrnd,wk-mod sil cmt,tr pl brn gry arg mtx,pred med-crs disagg qtz grs,fri-mod hd,pr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~2480m: clr,trnsl,pl brn gry,vf-crs, pr srt,sbang-sbrnd,wk sil cmt,tr pl gry brn arg mtx,pred med-crs disagg qtz grs, fri-mod hd aggs,pr vis por,gd inf por, fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.4 | 39 |
| RES_DEEP (ohm.m) | 23.29 | 39 |
| RES_SHALLOW (ohm.m) | 22.06 | 39 |

---

### 2502 m MD — Interval 2499.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2502m: 5% Siltstone. 95% very fine to fine aggregate (predominantly medium to coarse disaggregated) sandstone. TG: 345U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregate (predominantly medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggregate (predominantly medium to coarse disaggregated) sandstone. TG: 345U. 100% |
| Total Gas | 345.0 U |
| mTVDss | -1196.41 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: med lt gry,med gry,aren,com micmic,occ carb spks,mnr sndy lams,sft- frm,sbblky-blky. 30-100% of SST,bri-mod bri yel/grn
- **SANDSTONE** @ ~2510m: clr,trnsl,pl gry brn,vf-f, wl srt,sbang-sbrnd,mod wk sil cmt,mnr- occ arg mtx,tr carb spks & micmic,mnr crs disagg qtz grs,fri-mod hd,pr vis por, fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.4 | 40 |
| RES_DEEP (ohm.m) | 29.03 | 40 |
| RES_SHALLOW (ohm.m) | 24.06 | 40 |

---

### 2508 m MD — Interval 2505.0 – 2511.0 m

**Sample Description (spreadsheet):** Sample 2508m: 100% very fine to fine aggregates (com medium to minor coarse disaggregated) sandstone. TG: 390U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (com medium to minor coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine aggregates (com medium to minor coarse disaggregated) sandstone. TG: 390U. 100% |
| Total Gas | 390.0 U |
| mTVDss | -1196.39 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: med lt gry,med gry,aren,com micmic,occ carb spks,mnr sndy lams,sft- frm,sbblky-blky. 30-100% of SST,bri-mod bri yel/grn
- **SANDSTONE** @ ~2510m: clr,trnsl,pl gry brn,vf-f, wl srt,sbang-sbrnd,mod wk sil cmt,mnr- occ arg mtx,tr carb spks & micmic,mnr crs disagg qtz grs,fri-mod hd,pr vis por, fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 39 |
| RES_DEEP (ohm.m) | 25.83 | 39 |
| RES_SHALLOW (ohm.m) | 21.31 | 39 |

---

### 2514 m MD — Interval 2511.0 – 2517.0 m

**Sample Description (spreadsheet):** Sample 2514m: 5% Siltstone. 95% very fine to fine aggregates (com medium to coarse disaggregated) sandstone. TG: 310U. 100% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (com medium to coarse disaggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggregates (com medium to coarse disaggregated) sandstone. TG: 310U. 100% |
| Total Gas | 310.0 U |
| mTVDss | -1196.36 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: med lt gry,med gry,aren,com micmic,occ carb spks,mnr sndy lams,sft- frm,sbblky-blky. 30-100% of SST,bri-mod bri yel/grn
- **SANDSTONE** @ ~2510m: clr,trnsl,pl gry brn,vf-f, wl srt,sbang-sbrnd,mod wk sil cmt,mnr- occ arg mtx,tr carb spks & micmic,mnr crs disagg qtz grs,fri-mod hd,pr vis por, fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.6 | 39 |
| RES_DEEP (ohm.m) | 24.40 | 39 |
| RES_SHALLOW (ohm.m) | 21.95 | 39 |

---

### 2580 m MD — Interval 2577.0 – 2583.0 m

**Sample Description (spreadsheet):** Sample 2574m: 40% Siltstone. 60% very fine to fine aggregates (trace disaggregated) sandstone. TG: 90U. 30% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine aggregates (trace disaggregated (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 30.0% Siltstone. 60% very fine to fine aggregates (trace disaggregated) sandstone. TG: 90U. 30% |
| Total Gas | 90.0 U |
| mTVDss | -1197.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2590m: pl brn gry,off wh-wh,clr, trnsl,vf-f aggs,tr med-crs,mod wl srt,wk sil cmt,com pl gry-off wh arg mtx,occ micmic,rr sndy lams,tr disagg qtz grs,fri, pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.1 | 39 |
| RES_DEEP (ohm.m) | 10.84 | 39 |
| RES_SHALLOW (ohm.m) | 10.06 | 39 |

---

### 2586 m MD — Interval 2583.0 – 2589.0 m

**Sample Description (spreadsheet):** Sample 2580m: 50% Siltstone. 50% very fine to fine aggregates (trace disaggregated) sandstone. TG: 88U. 10% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to fine aggregates (trace disaggregated (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% Siltstone. 50% very fine to fine aggregates (trace disaggregated) sandstone. TG: 88U. 10% |
| Total Gas | 88.0 U |
| mTVDss | -1197.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2590m: pl brn gry,off wh-wh,clr, trnsl,vf-f aggs,tr med-crs,mod wl srt,wk sil cmt,com pl gry-off wh arg mtx,occ micmic,rr sndy lams,tr disagg qtz grs,fri, pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.4 | 17 |
| RES_DEEP (ohm.m) | 10.43 | 37 |
| RES_SHALLOW (ohm.m) | 9.74 | 37 |

---

### 2592 m MD — Interval 2589.0 – 2595.0 m

**Sample Description (spreadsheet):** Sample 2586m: 40% Siltstone. 60% very fine to fine aggregates (trace medium disaggregated) sandstone. TG: 80U. 5% fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine aggregates (trace medium disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 5.0% Siltstone. 60% very fine to fine aggregates (trace medium disaggregated) sandstone. TG: 80U. 5% |
| Total Gas | 80.0 U |
| mTVDss | -1198.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2590m: pl brn gry,off wh-wh,clr, trnsl,vf-f aggs,tr med-crs,mod wl srt,wk sil cmt,com pl gry-off wh arg mtx,occ micmic,rr sndy lams,tr disagg qtz grs,fri, pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

### 2598 m MD — Interval 2595.0 – 2600.5 m

**Sample Description (spreadsheet):** Sample 2592m: 45% Siltstone. 55% very fine to fine aggregates (trace medium disaggregated) sandstone. TG: 68U. trace fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 55.00000000000001 |
| Grain Size | very fine to fine aggregates (trace medium disaggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 0.0% Siltstone. 55% very fine to fine aggregates (trace medium disaggregated) sandstone. TG: 68U. trace |
| Total Gas | 68.0 U |
| mTVDss | -1198.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2590m: pl brn gry,off wh-wh,clr, trnsl,vf-f aggs,tr med-crs,mod wl srt,wk sil cmt,com pl gry-off wh arg mtx,occ micmic,rr sndy lams,tr disagg qtz grs,fri, pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 164 |
| Depth range | 1630 – 2598 m |
| Avg % Sandstone | 90.0% |
| Mudlog matches | 138 / 164 |
