# MCKINLAY 11 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-15 03:33 UTC  
**Well:** MCKINLAY 11 (MCKINLAY 11)  
**TD:** 2068 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 11_Mudlog Spud-6800'_Final.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `McKinlay 11_Litho ASCII_90-6786'.ASC`, `McKinlay 11_Drill-Gas ASCII_Spud-6786'.ASC` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_11` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_11_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1600.20 | DC30.xlsx |
| McKinlay Member (shallowest) | 1603.25 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1603.25 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1930.69 m MD
- 2028.44 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1876.81 | 1875.35 | 1.46 | 1930.69 | 53.9 |
| 1978.76 | 1977.29 | 1.47 | 2028.44 | 49.7 |

**McKinlay Member analysis window:** 1603.2 – 2068.2 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1877–1931 m (overburden), 1979–2028 m (overburden)

**Samples in McKinlay Member:** 70 of 93 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 23

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 11 → `MCKINLAY 11` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes. **Fluorescence %** from mudlog PDF graphics bar track only (raw fill, full McKinlay MD window). Text block % values are not used; brightness descriptions from text where matched.
9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1605 m MD — Interval 1602.5 – 1607.5 m

**Sample Description (spreadsheet):** Sample 1605m: 100% Sandstone (litho ASCII aggregate) TG 183.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 82.46153846153847% mod bri blu/grn ptchy, 5220 v slw diff grn c/c,v thk blu grn r/r |
| Total Gas | 183.6625 U |
| mTVDss | -1196.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1591m: off wh-pl gry,vf-f, 87 / 6 / 3 / 2 / 2 mnr med,mod wl srt,mod-strg sil cmt, com off wh arg-slty mtx,tr carb spks, 5230 rr qtz ovgths,fri-mod hd,rr lse,pr- tr fr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~1594m: med gry,mnr lt gry, (4071) rr gry brn,dom aren,arg,tr grd to 5240 vf SST,rr carb spks & frags, frm-mod hd,sbblky,mnr sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.7 | 32 |
| RES_DEEP (ohm.m) | 62.94 | 32 |

---

### 1610 m MD — Interval 1607.5 – 1612.5 m

**Sample Description (spreadsheet):** Sample 1610m: 100% Sandstone (litho ASCII aggregate) TG 172.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 94.3529411764706% mod bri-bri blu ptchy fluor, v slw strmng blu wh c/c,v 5290 thn blu grn flm res |
| Total Gas | 172.8764705882353 U |
| mTVDss | -1196.50 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1594m: med gry,mnr lt gry, (4071) rr gry brn,dom aren,arg,tr grd to 5240 vf SST,rr carb spks & frags, frm-mod hd,sbblky,mnr sbfiss.
- **SANDSTONE** @ ~1603m: pl yel-crm,opq- 85 / 7 / 3 / 3 / 2 trnsl,mnr off wh,f-med,occ crs, 5270 rr v crs,pr srt,sbrnd-sbang, 297U mod strg sil cmt,com pl brn slty mtx,com qtz ovgths,rr
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 33 |
| RES_DEEP (ohm.m) | 58.03 | 33 |

---

### 1615 m MD — Interval 1612.5 – 1617.5 m

**Sample Description (spreadsheet):** Sample 1615m: 100% Sandstone (litho ASCII aggregate) TG 217.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 96.25% mod bri-bri blu ptchy fluor, v slw strmng blu wh c/c,v 5290 thn blu grn flm res |
| Total Gas | 217.85625 U |
| mTVDss | -1196.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1603m: pl yel-crm,opq- 85 / 7 / 3 / 3 / 2 trnsl,mnr off wh,f-med,occ crs, 5270 rr v crs,pr srt,sbrnd-sbang, 297U mod strg sil cmt,com pl brn slty mtx,com qtz ovgths,rr
- **SILTSTONE** @ ~1612m: med-dk gry,mnr lt brn,aren,grd to vf SST i/p,micmic & mic flks,com carb spks & micrlams, frm-mod hd,sbblky-rr sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 45.33 | 33 |

---

### 1620 m MD — Interval 1617.5 – 1622.5 m

**Sample Description (spreadsheet):** Sample 1620m: 100% Sandstone (litho ASCII aggregate) TG 253.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 96.47058823529412% mod bri-bri blu ptchy fluor, v slw strmng blu wh c/c,v 5290 thn blu grn flm res |
| Total Gas | 253.73529411764707 U |
| mTVDss | -1197.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1603m: pl yel-crm,opq- 85 / 7 / 3 / 3 / 2 trnsl,mnr off wh,f-med,occ crs, 5270 rr v crs,pr srt,sbrnd-sbang, 297U mod strg sil cmt,com pl brn slty mtx,com qtz ovgths,rr
- **SILTSTONE** @ ~1612m: med-dk gry,mnr lt brn,aren,grd to vf SST i/p,micmic & mic flks,com carb spks & micrlams, frm-mod hd,sbblky-rr sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.9 | 33 |
| RES_DEEP (ohm.m) | 37.46 | 33 |

---

### 1625 m MD — Interval 1622.5 – 1627.5 m

**Sample Description (spreadsheet):** Sample 1625m: 100% Sandstone (litho ASCII aggregate) TG 309.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri blu ptchy fluor, v slw strmng blu wh c/c,v 5290 thn blu grn flm res |
| Total Gas | 309.1 U |
| mTVDss | -1197.25 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1612m: med-dk gry,mnr lt brn,aren,grd to vf SST i/p,micmic & mic flks,com carb spks & micrlams, frm-mod hd,sbblky-rr sbfiss.
- **SANDSTONE** @ ~1615m: frstd,com pl yel, 84 / 7 / 4 / 3 / 2 290U f-crs,rr vf,v crs i/p,v pr srt,dom sbrnd,occ sbang,mod sil cmt,loc com pl brn arg mtx,occ qtz ovgths, 5310 occ carb spks,dom lse,occ fri-mod
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.5 | 33 |
| RES_DEEP (ohm.m) | 39.15 | 33 |

---

### 1630 m MD — Interval 1627.5 – 1632.5 m

**Sample Description (spreadsheet):** Sample 1630m: 100% Sandstone (litho ASCII aggregate) TG 355.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri blu ptchy fluor, v slw strmng blu wh c/c,v 5290 thn blu grn flm res |
| Total Gas | 355.69375 U |
| mTVDss | -1197.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1615m: frstd,com pl yel, 84 / 7 / 4 / 3 / 2 290U f-crs,rr vf,v crs i/p,v pr srt,dom sbrnd,occ sbang,mod sil cmt,loc com pl brn arg mtx,occ qtz ovgths, 5310 occ carb spks,dom lse,occ fri-mod
- **SANDSTONE** @ ~1618m: pl yel,mnr trnsl,dom f,com vf-med,rr crs,mod pr srt, 5320 sbang-sbrnd,mod strg sil cmt,abdt off wh-pl brn arg mtx,rr carb spks, tr micrlams,fri-mod hd,mnr lse,v pr-
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 32 |
| RES_DEEP (ohm.m) | 41.27 | 32 |

---

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: 100% Sandstone (litho ASCII aggregate) TG 239.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 89.41176470588235% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 239.8764705882353 U |
| mTVDss | -1197.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1618m: pl yel,mnr trnsl,dom f,com vf-med,rr crs,mod pr srt, 5320 sbang-sbrnd,mod strg sil cmt,abdt off wh-pl brn arg mtx,rr carb spks, tr micrlams,fri-mod hd,mnr lse,v pr-
- **SILTSTONE** @ ~1625m: med brn,aren,grd to vf SST,occ carb spks & lams,frm- ( 5 4 3 0 4 7 0 6) mod hd,sbblky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 39.75 | 33 |

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 100% Sandstone (litho ASCII aggregate) TG 265.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 265.20624999999995 U |
| mTVDss | -1197.49 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1625m: med brn,aren,grd to vf SST,occ carb spks & lams,frm- ( 5 4 3 0 4 7 0 6) mod hd,sbblky.
- **SANDSTONE** @ ~1625m: pl brn-off wh,f-med, rr vf,mod wl srt,dom sbrnd,occ sbang,mod sil cmt,com pl brn arg 5350 mtx,rr carb spks,tr mic flks,fri- mod hd aggs,rr lse,pr-mnr fr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 40.28 | 33 |

---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 100% Sandstone (litho ASCII aggregate) TG 192.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 192.65294117647062 U |
| mTVDss | -1197.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1634m: off wh-v pl brn,dom f,mnr vf-med,mod wl srt,sbang- 5370 sbrnd,mod sil cmt,mnr off wh arg mtx,rr carb spks,fri-mod hd,occ 85 / 7 / 3 / 3 / 2 360U lse,pr-fr vis & inf por,fluor.
- **SILTSTONE** @ ~1637m: med brn,mnr gry brn, 5380 aren,occ micrlams,rr carb spks, frm-mod hd,sbblky-rr sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 33 |
| RES_DEEP (ohm.m) | 35.69 | 33 |

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 100% Sandstone (litho ASCII aggregate) TG 286.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 95.5% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 285.98125 U |
| mTVDss | -1197.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1634m: off wh-v pl brn,dom f,mnr vf-med,mod wl srt,sbang- 5370 sbrnd,mod sil cmt,mnr off wh arg mtx,rr carb spks,fri-mod hd,occ 85 / 7 / 3 / 3 / 2 360U lse,pr-fr vis & inf por,fluor.
- **SILTSTONE** @ ~1637m: med brn,mnr gry brn, 5380 aren,occ micrlams,rr carb spks, frm-mod hd,sbblky-rr sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.0 | 33 |
| RES_DEEP (ohm.m) | 29.85 | 33 |

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 100% Sandstone (litho ASCII aggregate) TG 269.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 95.5% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 269.01874999999995 U |
| mTVDss | -1197.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1640m: pl yel brn,rr off wh, f,occ vf-med,mod wl srt,sbang- 5390 sbrnd,mod sil cmt,mnr off wh arg
- **SANDSTONE** @ ~1646m: pl yel brn,rr off wh, f,occ vf-med,mod wl srt,sbang- sbrnd,mod sil cmt,mnr off wh arg mtx,rr carb spks & micrlams,fri- 5410 mod hd aggs,occ lse,pr vis por,pr-
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 32 |
| RES_DEEP (ohm.m) | 28.21 | 32 |

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 100% Sandstone (litho ASCII aggregate) TG 236.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 236.0176470588235 U |
| mTVDss | -1197.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1646m: pl yel brn,rr off wh, f,occ vf-med,mod wl srt,sbang- sbrnd,mod sil cmt,mnr off wh arg mtx,rr carb spks & micrlams,fri- 5410 mod hd aggs,occ lse,pr vis por,pr-
- **SANDSTONE** @ ~1652m: pl yel brn,rr off wh, f,occ vf-med,mod wl srt,sbang-
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.0 | 33 |
| RES_DEEP (ohm.m) | 26.92 | 33 |

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 100% Sandstone (litho ASCII aggregate) TG 209.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 209.01250000000002 U |
| mTVDss | -1197.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1652m: pl yel brn,rr off wh, f,occ vf-med,mod wl srt,sbang-
- **SILTSTONE** @ ~1658m: pl gry brn,tr dk brn,aren,carb micrlams i/p,frm- mod hd,sbblky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 33 |
| RES_DEEP (ohm.m) | 27.88 | 33 |

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 100% Sandstone (litho ASCII aggregate) TG 116.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 116.0470588235294 U |
| mTVDss | -1197.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1658m: pl gry brn,tr dk brn,aren,carb micrlams i/p,frm- mod hd,sbblky.
- **SANDSTONE** @ ~1661m: pl yel brn,rr off wh, f,occ vf-med,mod wl srt,sbang- sbrnd,mod sil cmt,mnr off wh arg mtx,rr carb spks & micrlams,fri- 5460 mod hd aggs,occ lse,pr vis por,pr-
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.2 | 33 |
| RES_DEEP (ohm.m) | 29.29 | 33 |

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 100% Sandstone (litho ASCII aggregate) TG 169.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.0% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 169.925 U |
| mTVDss | -1197.55 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1658m: pl gry brn,tr dk brn,aren,carb micrlams i/p,frm- mod hd,sbblky.
- **SANDSTONE** @ ~1661m: pl yel brn,rr off wh, f,occ vf-med,mod wl srt,sbang- sbrnd,mod sil cmt,mnr off wh arg mtx,rr carb spks & micrlams,fri- 5460 mod hd aggs,occ lse,pr vis por,pr-
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 33 |
| RES_DEEP (ohm.m) | 30.94 | 33 |

---

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680m: 100% Sandstone (litho ASCII aggregate) TG 245.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.0% pl-mod bri blu grn evn,v slw bldng cut,mod thn blu flm res |
| Total Gas | 245.18823529411765 U |
| mTVDss | -1197.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1664m: pl yel brn,mnr off 5470 wh,vf-f,rr med,wl srt,sbang-sbrnd, mod sil cmt,com off wh arg-slty mtx,rr carb spks,qtz ovgths i/p,fri- mod hd aggs,rr lse,v pr-pr vis por,
- **SANDSTONE** @ ~1670m: off wh,crm,dom f,occ vf-med,mod wl srt,sbrnd-sbang,mod 82 / 6 / 3 / 4 / 5 sil cmt,com off wh arg mtx,occ carb 5490 spks,fri-mod hd aggs,com lse,pr vis & inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 33 |
| RES_DEEP (ohm.m) | 28.17 | 33 |

---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 100% Sandstone (litho ASCII aggregate) TG 276.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 276.70625 U |
| mTVDss | -1197.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1670m: off wh,crm,dom f,occ vf-med,mod wl srt,sbrnd-sbang,mod 82 / 6 / 3 / 4 / 5 sil cmt,com off wh arg mtx,occ carb 5490 spks,fri-mod hd aggs,com lse,pr vis & inf por,fluor.
- **SILTSTONE** @ ~1673m: pl gry-med brn,aren, grd to vf SST,occ micrlams,frm- 5500 mod hd,sbblky. SURVEY @ 5516.5' INC:90.06° AZ:43.72°T
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 32 |
| RES_DEEP (ohm.m) | 32.24 | 32 |

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 100% Sandstone (litho ASCII aggregate) TG 241.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 76.75% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 240.95625 U |
| mTVDss | -1197.40 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1673m: pl gry-med brn,aren, grd to vf SST,occ micrlams,frm- 5500 mod hd,sbblky. SURVEY @ 5516.5' INC:90.06° AZ:43.72°T
- **SANDSTONE** @ ~1679m: off wh,crm,dom f,occ vf-med,mod wl srt,sbrnd-sbang,mod 84 / 7 / 3 / 3 / 3 sil cmt,com off wh arg mtx,occ carb spks,fri-mod hd aggs,com lse,pr vis 5520 & inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.6 | 33 |
| RES_DEEP (ohm.m) | 31.39 | 33 |

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 100% Sandstone (litho ASCII aggregate) TG 100.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 64.0% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 100.27058823529413 U |
| mTVDss | -1197.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1679m: off wh,crm,dom f,occ vf-med,mod wl srt,sbrnd-sbang,mod 84 / 7 / 3 / 3 / 3 sil cmt,com off wh arg mtx,occ carb spks,fri-mod hd aggs,com lse,pr vis 5520 & inf por,fluor.
- **SANDSTONE** @ ~1682m: pl yel brn,vf-f,wl srt,dom sbrnd,occ sbang,mod sil cmt,com off wh-pl brn arg mtx, 5530 rr carb spks,fri-mod hd,abdt lse, pr-fr vis & inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 31.37 | 33 |

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 100% Sandstone (litho ASCII aggregate) TG 190.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 85.0% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 190.14375 U |
| mTVDss | -1197.26 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1689m: medgrybrnarengrd
- **SILTSTONE** @ ~1689m: 1192-1641 psi SILTSTONE:med gry brn,aren,grd 5550 micrlams,tr micmic,frm-mod hd,sbblky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 37.28 | 33 |

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 100% Sandstone (litho ASCII aggregate) TG 351.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.70588235294117% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 351.6470588235294 U |
| mTVDss | -1197.19 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1689m: medgrybrnarengrd
- **SILTSTONE** @ ~1689m: 1192-1641 psi SILTSTONE:med gry brn,aren,grd 5550 micrlams,tr micmic,frm-mod hd,sbblky.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 41.06 | 33 |

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 100% Sandstone (litho ASCII aggregate) TG 324.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 324.08125 U |
| mTVDss | -1197.12 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1698m: pl-med brn,aren,mnr arg, com carb spks,frm-mod hd,sbblky. 85 / 6 / 3 / 3 / 3
- **SANDSTONE** @ ~1698m: off wh-v pl yel brn, 5580 vf-f,wl srt,dom sbrnd,occ sbang, mod strg sil cmt,com off wh arg mtx,occ carb spks,fri-mod hd,com lse,pr-fr vis & inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 32 |
| RES_DEEP (ohm.m) | 39.92 | 32 |

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 100% Sandstone (litho ASCII aggregate) TG 318.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 318.34375 U |
| mTVDss | -1197.06 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1698m: pl-med brn,aren,mnr arg, com carb spks,frm-mod hd,sbblky. 85 / 6 / 3 / 3 / 3
- **SANDSTONE** @ ~1698m: off wh-v pl yel brn, 5580 vf-f,wl srt,dom sbrnd,occ sbang, mod strg sil cmt,com off wh arg mtx,occ carb spks,fri-mod hd,com lse,pr-fr vis & inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 41.22 | 33 |

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 100% Sandstone (litho ASCII aggregate) TG 258.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 258.65882352941173 U |
| mTVDss | -1197.00 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1704m: med brn gry,mnr v pl gry,dom aren,occ carb spks & loc com micrlams,frm-mod hd,sbblky. 84 / 7 / 3 / 3 / 3 370U
- **SANDSTONE** @ ~1707m: off wh-trnsl,v pl brn i/p,vf-f,sbang,wl srt,wk-frm sil 5610 cmt,mnr kaol mtx,tr liths spks,carb spks,fri-frm aggs,v pr-pr vis por,fluor. 84 / 7 / 3 / 3 / 3
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 33 |
| RES_DEEP (ohm.m) | 34.59 | 33 |

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 100% Sandstone (litho ASCII aggregate) TG 253.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 252.97499999999997 U |
| mTVDss | -1196.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1713m: off wh-trnsl,v pl brn i/p,vf-f,sbang,wl srt,wk-frm sil cmt,
- **SANDSTONE** @ ~1719m: off wh-v pl brn,trnsl, vf-occ f,sbang,wl srt,frm sil cmt, mnr-com kaol mtx,occ liths/carb spks,fri-frm aggs,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 33 |
| RES_DEEP (ohm.m) | 38.17 | 33 |

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 100% Sandstone (litho ASCII aggregate) TG 168.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.70588235294117% mod bri-bri blu/grn ptchy,v slw blu/wh strmng c/c,blu/wh thk r/r |
| Total Gas | 168.04117647058825 U |
| mTVDss | -1196.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1713m: off wh-trnsl,v pl brn i/p,vf-f,sbang,wl srt,wk-frm sil cmt,
- **SANDSTONE** @ ~1719m: off wh-v pl brn,trnsl, vf-occ f,sbang,wl srt,frm sil cmt, mnr-com kaol mtx,occ liths/carb spks,fri-frm aggs,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.7 | 33 |
| RES_DEEP (ohm.m) | 42.15 | 33 |

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 100% Sandstone (litho ASCII aggregate) TG 62.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 62.16470588235294 U |
| mTVDss | -1196.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1719m: off wh-v pl brn,trnsl, vf-occ f,sbang,wl srt,frm sil cmt, mnr-com kaol mtx,occ liths/carb spks,fri-frm aggs,v pr vis por,fluor.
- **SILTSTONE** @ ~1722m: pl-med gry,arg-vf aren,micmic,carb spks,frm,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.8 | 32 |
| RES_DEEP (ohm.m) | 40.19 | 32 |

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 100% Sandstone (litho ASCII aggregate) TG 63.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 63.85625 U |
| mTVDss | -1196.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1728m: off wh-trnsl,v pl brn i/p,vf,sbang,wl srt,wk-frm sil cmt, 263U mnr kaol mtx,tr carb spks,fri aggs, v pr vis por,fluor.
- **SILTSTONE** @ ~1737m: gry,vf aren,mnr arg, micmic,mnr carb spks,frm-mod hd, sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 39.13 | 33 |

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 100% Sandstone (litho ASCII aggregate) TG 64.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 64.54705882352943 U |
| mTVDss | -1196.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1728m: off wh-trnsl,v pl brn i/p,vf,sbang,wl srt,wk-frm sil cmt, 263U mnr kaol mtx,tr carb spks,fri aggs, v pr vis por,fluor.
- **SILTSTONE** @ ~1737m: gry,vf aren,mnr arg, micmic,mnr carb spks,frm-mod hd, sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 36.01 | 33 |

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 100% Sandstone (litho ASCII aggregate) TG 85.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 85.19999999999999 U |
| mTVDss | -1196.71 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1737m: gry,vf aren,mnr arg, micmic,mnr carb spks,frm-mod hd, sbblky.
- **SANDSTONE** @ ~1750m: off wh-trnsl,pl brn, vf-pred f aggs,occ lse,mod-rr lse crs,sbang-sbrnd,mod wl srt,frm sil cmt,mnr kaol mtx,fri-v frm aggs, 5750 mnr lse,v pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 35.86 | 33 |

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 100% Sandstone (litho ASCII aggregate) TG 91.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 91.04117647058824 U |
| mTVDss | -1196.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1750m: off wh-trnsl,pl brn, vf-pred f aggs,occ lse,mod-rr lse crs,sbang-sbrnd,mod wl srt,frm sil cmt,mnr kaol mtx,fri-v frm aggs, 5750 mnr lse,v pr vis por,fluor.
- **SANDSTONE** @ ~1759m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5780 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,v
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.1 | 33 |
| RES_DEEP (ohm.m) | 37.49 | 33 |

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 100% Sandstone (litho ASCII aggregate) TG 86.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 86.8 U |
| mTVDss | -1196.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1750m: off wh-trnsl,pl brn, vf-pred f aggs,occ lse,mod-rr lse crs,sbang-sbrnd,mod wl srt,frm sil cmt,mnr kaol mtx,fri-v frm aggs, 5750 mnr lse,v pr vis por,fluor.
- **SANDSTONE** @ ~1759m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5780 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,v
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 32 |
| RES_DEEP (ohm.m) | 39.37 | 32 |

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 100% Sandstone (litho ASCII aggregate) TG 78.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 78.93125 U |
| mTVDss | -1196.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1750m: off wh-trnsl,pl brn, vf-pred f aggs,occ lse,mod-rr lse crs,sbang-sbrnd,mod wl srt,frm sil cmt,mnr kaol mtx,fri-v frm aggs, 5750 mnr lse,v pr vis por,fluor.
- **SANDSTONE** @ ~1759m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5780 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,v
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 35.86 | 33 |

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 100% Sandstone (litho ASCII aggregate) TG 75.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn, 82 / 6 / 4 / 4 / 4 evn-ptchy,slw diff c/c,mod- thk blu/wh flm res |
| Total Gas | 75.35882352941178 U |
| mTVDss | -1196.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1759m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5780 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,v
- **SANDSTONE** @ ~1771m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5820 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,occ
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.4 | 33 |
| RES_DEEP (ohm.m) | 33.60 | 33 |

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 100% Sandstone (litho ASCII aggregate) TG 70.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 70.80625 U |
| mTVDss | -1196.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1759m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5780 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,v
- **SANDSTONE** @ ~1771m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5820 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,occ
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 30.46 | 33 |

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 100% Sandstone (litho ASCII aggregate) TG 59.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 78.11764705882354% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 59.53529411764707 U |
| mTVDss | -1196.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1771m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5820 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,occ
- **SILTSTONE** @ ~1777m: pl-med gry,vf aren, arg i/p,com micmic,carb spks,frm, (4073) 5840 sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 33 |
| RES_DEEP (ohm.m) | 30.14 | 33 |

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 100% Sandstone (litho ASCII aggregate) TG 58.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 68.5% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 58.6375 U |
| mTVDss | -1196.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1771m: clr-trnsl,off wh, v pl brn,mnr pl gry,pred vf aggs, mnr f,rr med lse grs,mod wl srt, 5820 frm-mod sil cmt,mnr kaol mtx,tr liths/carb spks,fri-v frm aggs,occ
- **SILTSTONE** @ ~1777m: pl-med gry,vf aren, arg i/p,com micmic,carb spks,frm, (4073) 5840 sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 33 |
| RES_DEEP (ohm.m) | 30.57 | 33 |

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 100% Sandstone (litho ASCII aggregate) TG 65.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 65.25 U |
| mTVDss | -1196.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1777m: pl-med gry,vf aren, arg i/p,com micmic,carb spks,frm, (4073) 5840 sbblky-sbfiss.
- **SANDSTONE** @ ~1780m: off wh,trnsl- clr,v pl gry-v pl brn i/p,vf-occ f, sbang-sbrnd,pred wl srt,wk-frm MW:9.7 5860 sil cmt,mnr-loc com kaol mtx,tr carb spks,fri-mod hd aggs,v pr vis
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 32 |
| RES_DEEP (ohm.m) | 31.18 | 32 |

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 100% Sandstone (litho ASCII aggregate) TG 62.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 62.48235294117647 U |
| mTVDss | -1196.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: off wh,trnsl- clr,v pl gry-v pl brn i/p,vf-occ f, sbang-sbrnd,pred wl srt,wk-frm MW:9.7 5860 sil cmt,mnr-loc com kaol mtx,tr carb spks,fri-mod hd aggs,v pr vis
- **SANDSTONE** @ ~1780m: 07/13/17 SANDSTONE:off wh,trnsl,v pl brn, WL:5.8 5870 vf,sbang,wl srt,frm sil cmt,mnr-com Sol:10.6 kaol mtx,occ carb spks,occ mic pH:10.0 flks,fri-mod hd aggs,v pr vis por, Ck:1 fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 31.45 | 33 |

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 100% Sandstone (litho ASCII aggregate) TG 81.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 81.54375 U |
| mTVDss | -1196.31 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1791m: pl-med gry,arg-com 5890 vf aren,micmic & carb spks,occ 82 / 6 / 4 / 4 / 4 liths,frm,sbblky-occ sbfiss.
- **SANDSTONE** @ ~1798m: off wh,pl gry,trnsl- opq,v pl brn i/p,pred vf-occ f, mnr med,sbang-sbrnd,mod wl srt, 5910 wk-frm sil cmt,mnr kaol mtx,occ slty lams,tr carb spks/flks,fri-
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 33 |
| RES_DEEP (ohm.m) | 30.52 | 33 |

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 100% Sandstone (litho ASCII aggregate) TG 106.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 106.11764705882354 U |
| mTVDss | -1196.24 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1791m: pl-med gry,arg-com 5890 vf aren,micmic & carb spks,occ 82 / 6 / 4 / 4 / 4 liths,frm,sbblky-occ sbfiss.
- **SANDSTONE** @ ~1798m: off wh,pl gry,trnsl- opq,v pl brn i/p,pred vf-occ f, mnr med,sbang-sbrnd,mod wl srt, 5910 wk-frm sil cmt,mnr kaol mtx,occ slty lams,tr carb spks/flks,fri-
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.4 | 33 |
| RES_DEEP (ohm.m) | 31.75 | 33 |

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 100% Sandstone (litho ASCII aggregate) TG 93.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 93.6 U |
| mTVDss | -1196.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1798m: off wh,pl gry,trnsl- opq,v pl brn i/p,pred vf-occ f, mnr med,sbang-sbrnd,mod wl srt, 5910 wk-frm sil cmt,mnr kaol mtx,occ slty lams,tr carb spks/flks,fri-
- **SANDSTONE** @ ~1804m: v pl brn,off wh-v pl 5930 gry,trnsl-opq,pred vf-mnr f,rr lse med,sbang-sbrnd,wl srt,mod sil cmt,mnr kaol mtx-occ gry slty mtx,tr micmic,carb lams,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.8 | 33 |
| RES_DEEP (ohm.m) | 36.64 | 33 |

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 100% Sandstone (litho ASCII aggregate) TG 88.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-mnr bri yel/grn SPP:1196-1696 psi evn ptchy,slw diff-v slw bldg FLOW:434-533 gpm 5850 cut,mod blu/wh ptchy flm r |
| Total Gas | 88.11250000000001 U |
| mTVDss | -1196.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1798m: off wh,pl gry,trnsl- opq,v pl brn i/p,pred vf-occ f, mnr med,sbang-sbrnd,mod wl srt, 5910 wk-frm sil cmt,mnr kaol mtx,occ slty lams,tr carb spks/flks,fri-
- **SANDSTONE** @ ~1804m: v pl brn,off wh-v pl 5930 gry,trnsl-opq,pred vf-mnr f,rr lse med,sbang-sbrnd,wl srt,mod sil cmt,mnr kaol mtx-occ gry slty mtx,tr micmic,carb lams,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.8 | 32 |
| RES_DEEP (ohm.m) | 36.83 | 32 |

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 100% Sandstone (litho ASCII aggregate) TG 86.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 86.92941176470588 U |
| mTVDss | -1196.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1804m: v pl brn,off wh-v pl 5930 gry,trnsl-opq,pred vf-mnr f,rr lse med,sbang-sbrnd,wl srt,mod sil cmt,mnr kaol mtx-occ gry slty mtx,tr micmic,carb lams,
- **SILTSTONE** @ ~1811m: pl-med gry,occ dk gry,arg-vf aren,com micmic,carb 84 / 7 / 3 / 3 / 3 lams,tr liths,sbfiss-sbblky, frm-mod hd.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 33 |
| RES_DEEP (ohm.m) | 34.05 | 33 |

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 100% Sandstone (litho ASCII aggregate) TG 77.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 77.18125 U |
| mTVDss | -1195.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1811m: pl-med gry,occ dk gry,arg-vf aren,com micmic,carb 84 / 7 / 3 / 3 / 3 lams,tr liths,sbfiss-sbblky, frm-mod hd.
- **SANDSTONE** @ ~1817m: v pl brn,off wh,pl gry i/p,vf sbang,wl srt,mod sil cmt, 5970 mnr-loc com kaol mtx,carb spks & lams,fri-mod hd aggs,v pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 35.21 | 33 |

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 100% Sandstone (litho ASCII aggregate) TG 77.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 77.15294117647059 U |
| mTVDss | -1195.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1817m: v pl brn,off wh,pl gry i/p,vf sbang,wl srt,mod sil cmt, 5970 mnr-loc com kaol mtx,carb spks & lams,fri-mod hd aggs,v pr vis por,fluor.
- **SANDSTONE** @ ~1829m: v pl brn,off wh, occ pl gry,trnsl-opq,vf,rr f,sbang, wl srt,mod sil cmt,mnr-loc 85 / 6 / 3 / 3 / 3 kaol mtx,tr carb spks,fri- mod hd aggs,v pr vis por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 33 |
| RES_DEEP (ohm.m) | 37.20 | 33 |

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 64.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 64.51875 U |
| mTVDss | -1195.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1829m: v pl brn,off wh, occ pl gry,trnsl-opq,vf,rr f,sbang, wl srt,mod sil cmt,mnr-loc 85 / 6 / 3 / 3 / 3 kaol mtx,tr carb spks,fri- mod hd aggs,v pr vis por,
- **SANDSTONE** @ ~1835m: v pl brn,trnsl,off wh-
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 33 |
| RES_DEEP (ohm.m) | 40.56 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% Sandstone (litho ASCII aggregate) TG 77.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 77.275 U |
| mTVDss | -1195.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1829m: v pl brn,off wh, occ pl gry,trnsl-opq,vf,rr f,sbang, wl srt,mod sil cmt,mnr-loc 85 / 6 / 3 / 3 / 3 kaol mtx,tr carb spks,fri- mod hd aggs,v pr vis por,
- **SANDSTONE** @ ~1835m: v pl brn,trnsl,off wh-
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.9 | 32 |
| RES_DEEP (ohm.m) | 38.97 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 100% Sandstone (litho ASCII aggregate) TG 68.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 88.70588235294117% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 68.28823529411763 U |
| mTVDss | -1195.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1829m: v pl brn,off wh, occ pl gry,trnsl-opq,vf,rr f,sbang, wl srt,mod sil cmt,mnr-loc 85 / 6 / 3 / 3 / 3 kaol mtx,tr carb spks,fri- mod hd aggs,v pr vis por,
- **SANDSTONE** @ ~1835m: v pl brn,trnsl,off wh-
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 40.51 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 100% Sandstone (litho ASCII aggregate) TG 66.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 66.45 U |
| mTVDss | -1195.46 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1835m: v pl brn,trnsl,off wh-
- **SILTSTONE** @ ~1844m: med gry,brnsh gry, vf aren-arg i/p,com micmic,carb spks & lams,fri-mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 33 |
| RES_DEEP (ohm.m) | 41.28 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 100% Sandstone (litho ASCII aggregate) TG 73.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 73.86470588235295 U |
| mTVDss | -1195.34 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1844m: med gry,brnsh gry, vf aren-arg i/p,com micmic,carb spks & lams,fri-mod hd,sbblky.
- **SANDSTONE** @ ~1853m: v pl brn,off wh, 6090 trnsl,occ v pl gry,vf aggs,rr f,sbang- 84 / 7 / 3 / 3 / 3 sbrnd,wl srt,mod-wk sil cmt, mnr kaol mtx,tr slty lams,fri aggs,v pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 33 |
| RES_DEEP (ohm.m) | 43.33 | 33 |

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 100% Sandstone (litho ASCII aggregate) TG 79.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 79.30625 U |
| mTVDss | -1195.23 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1844m: med gry,brnsh gry, vf aren-arg i/p,com micmic,carb spks & lams,fri-mod hd,sbblky.
- **SANDSTONE** @ ~1853m: v pl brn,off wh, 6090 trnsl,occ v pl gry,vf aggs,rr f,sbang- 84 / 7 / 3 / 3 / 3 sbrnd,wl srt,mod-wk sil cmt, mnr kaol mtx,tr slty lams,fri aggs,v pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 41.21 | 33 |

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 100% Sandstone (litho ASCII aggregate) TG 75.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 75.8125 U |
| mTVDss | -1195.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1853m: v pl brn,off wh, 6090 trnsl,occ v pl gry,vf aggs,rr f,sbang- 84 / 7 / 3 / 3 / 3 sbrnd,wl srt,mod-wk sil cmt, mnr kaol mtx,tr slty lams,fri aggs,v pr vis por,fluor.
- **SILTSTONE** @ ~1862m: 19 SILTSTONE:med gry,occ dk gry, GEL:09/14/18 6120 arg-vf aren,com micmic,carb lams, WL:5.7 lithics,frm-mod hd,sbfiss-sbblky. Sol:10.6 pH:10.0
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 32 |
| RES_DEEP (ohm.m) | 39.80 | 32 |

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 100% Sandstone (litho ASCII aggregate) TG 72.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 88.0% mod bri-occ bri yel/grn evn,slw bldg-occ slw strmng 81 / 7 / 4 / 4 / 4 118U cut,mod blu/wh flm res |
| Total Gas | 72.47058823529413 U |
| mTVDss | -1194.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1853m: v pl brn,off wh, 6090 trnsl,occ v pl gry,vf aggs,rr f,sbang- 84 / 7 / 3 / 3 / 3 sbrnd,wl srt,mod-wk sil cmt, mnr kaol mtx,tr slty lams,fri aggs,v pr vis por,fluor.
- **SILTSTONE** @ ~1862m: 19 SILTSTONE:med gry,occ dk gry, GEL:09/14/18 6120 arg-vf aren,com micmic,carb lams, WL:5.7 lithics,frm-mod hd,sbfiss-sbblky. Sol:10.6 pH:10.0
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.5 | 33 |
| RES_DEEP (ohm.m) | 37.03 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 100% Sandstone (litho ASCII aggregate) TG 44.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-rr bri blu/grn evn,v slw strmng cut,thk blu flm res |
| Total Gas | 44.3875 U |
| mTVDss | -1192.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1923m: off wh,v pl gry- 6320 pl gry,occ pl brn,trnsl-opq,vf, com slty,sbang,wl srt,wk-frm sil cmt,mnr-com kaol mtx,slty lams,com carb spks,micmic
- **SANDSTONE** @ ~1932m: pl brn,off wh,med brn gry,vf,occ f,grd to aren SLTST,mod wk-mod sil cmt,occ-com wh arg 6350 mtx,occ carb spks & micrlams,rr liths,tr mic flks,fri-mod hd,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.1 | 33 |
| RES_DEEP (ohm.m) | 24.38 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 100% Sandstone (litho ASCII aggregate) TG 68.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.70588235294117% mod bri-rr bri blu/grn evn,v slw strmng cut,thk blu flm res |
| Total Gas | 68.23529411764704 U |
| mTVDss | -1192.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1923m: off wh,v pl gry- 6320 pl gry,occ pl brn,trnsl-opq,vf, com slty,sbang,wl srt,wk-frm sil cmt,mnr-com kaol mtx,slty lams,com carb spks,micmic
- **SANDSTONE** @ ~1932m: pl brn,off wh,med brn gry,vf,occ f,grd to aren SLTST,mod wk-mod sil cmt,occ-com wh arg 6350 mtx,occ carb spks & micrlams,rr liths,tr mic flks,fri-mod hd,
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.5 | 33 |
| RES_DEEP (ohm.m) | 31.32 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 100% Sandstone (litho ASCII aggregate) TG 77.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-rr bri blu/grn evn,v slw strmng cut,thk blu flm res |
| Total Gas | 77.19375 U |
| mTVDss | -1192.51 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: pl brn,off wh,med brn gry,vf,occ f,grd to aren SLTST,mod wk-mod sil cmt,occ-com wh arg 6350 mtx,occ carb spks & micrlams,rr liths,tr mic flks,fri-mod hd,
- **SILTSTONE** @ ~1942m: med gry,gry brn,mnr mott,aren,grd to vf SST,occ-loc com carb spks & frags,micmic, sft-mod hd,sbblky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 32 |
| RES_DEEP (ohm.m) | 32.77 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 100% Sandstone (litho ASCII aggregate) TG 85.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-rr bri blu/grn evn,v slw strmng cut,thk blu flm res |
| Total Gas | 85.70588235294117 U |
| mTVDss | -1192.30 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1942m: med gry,gry brn,mnr mott,aren,grd to vf SST,occ-loc com carb spks & frags,micmic, sft-mod hd,sbblky.
- **SANDSTONE** @ ~1945m: off wh-v pl brn,opq, rr v pl yel,dom vf,com med rr vf- 6390 crs,pr srt,sbrnd-sbang,mod- mod strg sil cmt,occ-com wh arg mtx,rr carb spks,fri-mod
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 33 |
| RES_DEEP (ohm.m) | 36.34 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 100% Sandstone (litho ASCII aggregate) TG 95.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-rr bri blu/grn evn,v slw strmng cut,thk blu flm res |
| Total Gas | 95.50588235294117 U |
| mTVDss | -1192.08 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1942m: med gry,gry brn,mnr mott,aren,grd to vf SST,occ-loc com carb spks & frags,micmic, sft-mod hd,sbblky.
- **SANDSTONE** @ ~1945m: off wh-v pl brn,opq, rr v pl yel,dom vf,com med rr vf- 6390 crs,pr srt,sbrnd-sbang,mod- mod strg sil cmt,occ-com wh arg mtx,rr carb spks,fri-mod
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.7 | 33 |
| RES_DEEP (ohm.m) | 44.08 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 100% Sandstone (litho ASCII aggregate) TG 87.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.75% mod bri-rr bri blu/grn evn,v slw strmng cut,thk blu flm res |
| Total Gas | 87.11875 U |
| mTVDss | -1191.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1945m: off wh-v pl brn,opq, rr v pl yel,dom vf,com med rr vf- 6390 crs,pr srt,sbrnd-sbang,mod- mod strg sil cmt,occ-com wh arg mtx,rr carb spks,fri-mod
- **SANDSTONE** @ ~1951m: pl brn-v pl yel,opq, occ off wh,vf-f,wl srt,sbang-sbrnd, mod-mod wk sil cmt,com wh 6410 arg mtx,rr carb spks & micrlams, tr liths,fri,com lse,pr-fr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 33 |
| RES_DEEP (ohm.m) | 46.52 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 29% Sandstone (litho ASCII aggregate) TG 103.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 28.571428571428573 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 88.0% mod bri-rr bri blu/grn evn,v slw strmng cut,thk blu flm res |
| Total Gas | 103.58823529411765 U |
| mTVDss | -1191.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1951m: pl brn-v pl yel,opq, occ off wh,vf-f,wl srt,sbang-sbrnd, mod-mod wk sil cmt,com wh 6410 arg mtx,rr carb spks & micrlams, tr liths,fri,com lse,pr-fr vis
- **SILTSTONE** @ ~1957m: medbrngryaren
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.3 | 33 |
| RES_DEEP (ohm.m) | 47.11 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 21% Sandstone (litho ASCII aggregate) TG 106.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 21.428571428571427 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.75% dll-mod bri blu/wh ptchy- Cl:139k 81 / 7 / 4 / 4 / 4 176U e p v tc n h ,v y s b l r w i g b r l n u f s lm trm re n s g |
| Total Gas | 106.725 U |
| mTVDss | -1191.48 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1957m: medbrngryaren
- **SILTSTONE** @ ~1957m: med brn gry,aren, 86 / 6 / 3 / 3 / 3 com carb spks & micrlams,frm-mod hd,sbblky.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 32 |
| RES_DEEP (ohm.m) | 47.73 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 43% Sandstone (litho ASCII aggregate) TG 123.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 43.214285714285715 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.0% dll-mod bri blu/wh ptchy- Cl:139k 81 / 7 / 4 / 4 / 4 176U e p v tc n h ,v y s b l r w i g b r l n u f s lm trm re n s g |
| Total Gas | 123.26875 U |
| mTVDss | -1191.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: off wh-pl brn,mnr pl yel,opq,rr trnsl,f-med,crs- v crs i/p,pr srt,dom sbrnd,occ (4058) sbang,ang i/p,mod-mod strg sil
- **SANDSTONE** @ ~1963m: trnsl,frstd,pl brn yel, MW:9.7 f-med,rr vf-crs,mod pr srt,sbang- FV:46 6460 sbrnd,mod-mod strg sil cmt,occ PV:11 wh arg mtx,rr qtz ovgths,tr carb YP:19 spks,tr mic,dom lse,occ fri
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.7 | 33 |
| RES_DEEP (ohm.m) | 59.87 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 149.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.0% dll-mod bri blu grn ptchy- WOB:9-18 klbs evn,v slw blu wh bldng cut,thk RPM:66-100 |
| Total Gas | 149.50625000000002 U |
| mTVDss | -1191.34 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2024m: med-dk gry,med brn, aren,mnr arg,micmic,com carb spks 6650 & frags,sbblky-amorph. 84 / 7 / 3 / 3 / 3
- **SANDSTONE** @ ~2027m: frstd-opq,pl-med brn, 6660 vf,med,mod wl srt,dom sbang,sbrnd, mod wk-mod sil cmt,mnr wh arg mtx, com qtz ovgths,rr carb spks,fri aggs, pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.4 | 33 |
| RES_DEEP (ohm.m) | 45.10 | 33 |

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% Sandstone (litho ASCII aggregate) TG 151.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 88.0% dll-mod bri blu grn ptchy- WOB:9-18 klbs evn,v slw blu wh bldng cut,thk RPM:66-100 |
| Total Gas | 151.01764705882354 U |
| mTVDss | -1191.55 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2024m: med-dk gry,med brn, aren,mnr arg,micmic,com carb spks 6650 & frags,sbblky-amorph. 84 / 7 / 3 / 3 / 3
- **SANDSTONE** @ ~2027m: frstd-opq,pl-med brn, 6660 vf,med,mod wl srt,dom sbang,sbrnd, mod wk-mod sil cmt,mnr wh arg mtx, com qtz ovgths,rr carb spks,fri aggs, pr vis por,pr-fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 44.28 | 33 |

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% Sandstone (litho ASCII aggregate) TG 128.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 88.0% dll-mod bri blu grn ptchy- WOB:9-18 klbs evn,v slw blu wh bldng cut,thk RPM:66-100 |
| Total Gas | 128.01875 U |
| mTVDss | -1191.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2036m: pl brn yel,frstd-opq, vf-f,med v crs i/p,pr srt,sbang-sbrnd, 6690 mod-mod strg sil cmt,com wk arg mtx,mnr qtz ovgths,rr carb spks,fri- mod hd aggs,abdt lse,pr-fr vis & inf
- **SILTSTONE** @ ~2042m: med-dk gry,med brn, aren,rr arg,micmic,occ-loc com
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 33 |
| RES_DEEP (ohm.m) | 40.55 | 33 |

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 100% Sandstone (litho ASCII aggregate) TG 110.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 85.0% dll-mod bri blu grn ptchy- WOB:9-18 klbs evn,v slw blu wh bldng cut,thk RPM:66-100 |
| Total Gas | 109.9875 U |
| mTVDss | -1191.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2036m: pl brn yel,frstd-opq, vf-f,med v crs i/p,pr srt,sbang-sbrnd, 6690 mod-mod strg sil cmt,com wk arg mtx,mnr qtz ovgths,rr carb spks,fri- mod hd aggs,abdt lse,pr-fr vis & inf
- **SILTSTONE** @ ~2042m: med-dk gry,med brn, aren,rr arg,micmic,occ-loc com
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 32 |
| RES_DEEP (ohm.m) | 31.30 | 32 |

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 100% Sandstone (litho ASCII aggregate) TG 97.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 64.0% dll-mod bri blu grn ptchy- WOB:9-18 klbs evn,v slw blu wh bldng cut,thk RPM:66-100 |
| Total Gas | 97.42941176470588 U |
| mTVDss | -1192.23 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2042m: med-dk gry,med brn, aren,rr arg,micmic,occ-loc com
- **SANDSTONE** @ ~2050m: pl brn,off wh-v pl yel,opq,dom f,mnr vf-med mod wl srt,sbang-sbrnd,mod wk sil cmt, 02-02-2016 com wh arg mtx,rr carb spks,rr
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 26.09 | 33 |

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 100% Sandstone (litho ASCII aggregate) TG 93.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 64.0% None |
| Total Gas | 93.1875 U |
| mTVDss | -1192.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2050m: pl brn,off wh-v pl yel,opq,dom f,mnr vf-med mod wl srt,sbang-sbrnd,mod wk sil cmt, 02-02-2016 com wh arg mtx,rr carb spks,rr
- **SANDSTONE** @ ~2057m: off wh-pl brn,occ trnsl, vf-f,occ med,mod wl srt,dom sbrnd- 6760 sbang,mod sil cmt,com wh arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 20 |
| RES_DEEP (ohm.m) | 22.60 | 6 |

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 100% Sandstone (litho ASCII aggregate) TG 106.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 64.0% None |
| Total Gas | 106.15294117647058 U |
| mTVDss | -1192.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2050m: pl brn,off wh-v pl yel,opq,dom f,mnr vf-med mod wl srt,sbang-sbrnd,mod wk sil cmt, 02-02-2016 com wh arg mtx,rr carb spks,rr
- **SANDSTONE** @ ~2057m: off wh-pl brn,occ trnsl, vf-f,occ med,mod wl srt,dom sbrnd- 6760 sbang,mod sil cmt,com wh arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 70 |
| Depth range | 1605 – 2065 m |
| Avg % Sandstone | 97.0% |
| Mudlog matches | 70 / 70 |
