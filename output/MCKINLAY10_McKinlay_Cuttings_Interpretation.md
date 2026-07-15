# MCKINLAY 10 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-15 03:32 UTC  
**Well:** MCKINLAY 10 (MCKINLAY 10)  
**TD:** 2111 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 10_Mudlog_Spud-6936'.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `McKINLAY_10_LITHO_100-6935'.ASC`, `McKINLAY_10_DRILL_GAS_6936'.ASC` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_10` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_10_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1579.69 | DC30.xlsx |
| McKinlay Member (shallowest) | 1581.45 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1581.45 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1911.71 m MD
- 2015.34 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1881.53 | 1880.91 | 0.62 | 1911.71 | 30.2 |
| 2003.15 | 2001.78 | 1.37 | 2015.34 | 12.2 |

**McKinlay Member analysis window:** 1581.5 – 2111.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1882–1912 m (overburden), 2003–2015 m (overburden)

**Samples in McKinlay Member:** 96 of 106 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 10

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 10 → `MCKINLAY 10` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes. **Fluorescence %** from mudlog PDF graphics bar track only (raw fill, full McKinlay MD window). Text block % values are not used; brightness descriptions from text where matched.
9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1585 m MD — Interval 1582.5 – 1587.5 m

**Sample Description (spreadsheet):** Sample 1585m: 100% Sandstone (litho ASCII aggregate) TG 465.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 64.0% dll 11-01-2016 grn flm res |
| Total Gas | 465.28125 U |
| mTVDss | -1192.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1570m: off wh,pl gry,clr-trnsl, 54 U tr mlky wh,dom vf,v wl srt,sbang- sbrnd,mod strg sil cmt,com wh arg mtx, rr liths,fri-mod hd aggs,pr vis por, fluor.
- **SANDSTONE** @ ~1576m: clr-trnsl,off wh,dom vf, occ f-med,gen wl srt,sbang-sbrnd,tr ang,wk-mod strg sil cmt,occ wh arg 101 U mtx,mnr liths,occ qtz ovgths,dom fri 85 / 6 / 3 / 3 / 3 f gr aggs,com cln lse glassy qtz grs,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 37.73 | 33 |
| RES_SHALLOW (ohm.m) | 25.67 | 33 |

---

### 1590 m MD — Interval 1587.5 – 1592.5 m

**Sample Description (spreadsheet):** Sample 1590m: 100% Sandstone (litho ASCII aggregate) TG 536.8U (drill-gas ASCII)

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
| Fluorescence | 85.75% dll 11-01-2016 grn flm res |
| Total Gas | 536.80625 U |
| mTVDss | -1192.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1576m: clr-trnsl,off wh,dom vf, occ f-med,gen wl srt,sbang-sbrnd,tr ang,wk-mod strg sil cmt,occ wh arg 101 U mtx,mnr liths,occ qtz ovgths,dom fri 85 / 6 / 3 / 3 / 3 f gr aggs,com cln lse glassy qtz grs,
- **SANDSTONE** @ ~1582m: clr,trnsl,off wh,pl gry, mlky wh i/p,dom f-med,occ vf-crs,gen 5200 82 / 6 / 4 / 4 / 4 663366 UU w si l l s c r m t, t s , b o a c n c g o - f s f b w rn h d -w ,o h c c a r a g n m g, t w x, k m -m nr o d ca s r t b rg spks,com qtz ovgths,fri f gr aggs,com cln lse f-med qtz grs,pr vis por,fr inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 33 |
| RES_DEEP (ohm.m) | 32.83 | 33 |
| RES_SHALLOW (ohm.m) | 26.37 | 33 |

---

### 1595 m MD — Interval 1592.5 – 1597.5 m

**Sample Description (spreadsheet):** Sample 1595m: 100% Sandstone (litho ASCII aggregate) TG 602.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | hd (0.20) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% dll 11-01-2016 grn flm res |
| Total Gas | 601.9882352941177 U |
| mTVDss | -1192.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1582m: clr,trnsl,off wh,pl gry, mlky wh i/p,dom f-med,occ vf-crs,gen 5200 82 / 6 / 4 / 4 / 4 663366 UU w si l l s c r m t, t s , b o a c n c g o - f s f b w rn h d -w ,o h c c a r a g n m g, t w x, k m -m nr o d ca s r t b rg spks,com qtz ovgths,fri f gr aggs,com cln lse f-med qtz grs,pr vis por,fr inf
- **SANDSTONE** @ ~1588m: clr,trnsl,mlky wh,glassy, 616 U off wh,crm i/p,dom vf,com med-occ v crs,gen wl srt,sbang-sbrnd,occ rnd,tr ang,wk-mod strg sil cmt,occ off wh arg mtx,com qtz ovgths,rr carb spks,fri vf
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 33 |
| RES_DEEP (ohm.m) | 31.32 | 33 |
| RES_SHALLOW (ohm.m) | 26.78 | 33 |

---

### 1600 m MD — Interval 1597.5 – 1602.5 m

**Sample Description (spreadsheet):** Sample 1600m: 100% Sandstone (litho ASCII aggregate) TG 626.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | hd (0.20) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 626.36875 U |
| mTVDss | -1192.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1588m: clr,trnsl,mlky wh,glassy, 616 U off wh,crm i/p,dom vf,com med-occ v crs,gen wl srt,sbang-sbrnd,occ rnd,tr ang,wk-mod strg sil cmt,occ off wh arg mtx,com qtz ovgths,rr carb spks,fri vf
- **SANDSTONE** @ ~1594m: clr,trnsl,mlky wh,glassy, off wh,dom vf aggs,abdt f-v crs grs, (4085) 5240 pr srt,sbang-ang,occ sbrnd-rnd,wk-mod sil cmt,occ off wh arg mtx,abdt qtz
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 28.14 | 33 |
| RES_SHALLOW (ohm.m) | 24.72 | 33 |

---

### 1605 m MD — Interval 1602.5 – 1607.5 m

**Sample Description (spreadsheet):** Sample 1605m: 100% Sandstone (litho ASCII aggregate) TG 503.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | hd (0.20) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 502.95625 U |
| mTVDss | -1193.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1588m: clr,trnsl,mlky wh,glassy, 616 U off wh,crm i/p,dom vf,com med-occ v crs,gen wl srt,sbang-sbrnd,occ rnd,tr ang,wk-mod strg sil cmt,occ off wh arg mtx,com qtz ovgths,rr carb spks,fri vf
- **SANDSTONE** @ ~1594m: clr,trnsl,mlky wh,glassy, off wh,dom vf aggs,abdt f-v crs grs, (4085) 5240 pr srt,sbang-ang,occ sbrnd-rnd,wk-mod sil cmt,occ off wh arg mtx,abdt qtz
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 32 |
| RES_DEEP (ohm.m) | 31.05 | 32 |
| RES_SHALLOW (ohm.m) | 22.91 | 32 |

---

### 1610 m MD — Interval 1607.5 – 1612.5 m

**Sample Description (spreadsheet):** Sample 1610m: 100% Sandstone (litho ASCII aggregate) TG 466.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | hd (0.20) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 466.7352941176471 U |
| mTVDss | -1193.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1594m: clr,trnsl,mlky wh,glassy, off wh,dom vf aggs,abdt f-v crs grs, (4085) 5240 pr srt,sbang-ang,occ sbrnd-rnd,wk-mod sil cmt,occ off wh arg mtx,abdt qtz
- **SANDSTONE** @ ~1596m: clr,trnsl,mlky wh,glassy, 5260 80 / 7 / 4 / 4 / 5 off wh,dom vf aggs,abdt f-v crs grs, pr srt,sbang-ang,occ sbrnd-rnd,wk-mod sil cmt,occ off wh arg mtx,abdt qtz ovgths,fri vf aggs,abdt lse med-v crs
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.8 | 33 |
| RES_DEEP (ohm.m) | 28.28 | 33 |
| RES_SHALLOW (ohm.m) | 20.34 | 33 |

---

### 1615 m MD — Interval 1612.5 – 1617.5 m

**Sample Description (spreadsheet):** Sample 1615m: 100% Sandstone (litho ASCII aggregate) TG 210.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | hd (0.20) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 210.09999999999997 U |
| mTVDss | -1193.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1606m: clr-trnsl,mlky wh,off wh, dom vf,com f-v crs,gen wl srt,occ pr srt,sbang-sbrnd,occ rnd,mod strg sil cmt,occ off wh arg mtx,com qtz ovgths, 5280 80 / 7 / 4 / 4 / 5 511 U mnr carb spks,fri vf gr aggs,abdt cln
- **SILTSTONE** @ ~1609m: lt-med gry,lt brn,med brn i/p,dom aren,mnr liths,poss sid,mod 5290 hd-hd,occ v hd,sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.1 | 33 |
| RES_DEEP (ohm.m) | 28.83 | 33 |
| RES_SHALLOW (ohm.m) | 19.71 | 33 |

---

### 1620 m MD — Interval 1617.5 – 1622.5 m

**Sample Description (spreadsheet):** Sample 1620m: 100% Sandstone (litho ASCII aggregate) TG 319.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | hd (0.20) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 319.0235294117647 U |
| mTVDss | -1193.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1606m: clr-trnsl,mlky wh,off wh, dom vf,com f-v crs,gen wl srt,occ pr srt,sbang-sbrnd,occ rnd,mod strg sil cmt,occ off wh arg mtx,com qtz ovgths, 5280 80 / 7 / 4 / 4 / 5 511 U mnr carb spks,fri vf gr aggs,abdt cln
- **SILTSTONE** @ ~1609m: lt-med gry,lt brn,med brn i/p,dom aren,mnr liths,poss sid,mod 5290 hd-hd,occ v hd,sbblky-sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.9 | 33 |
| RES_DEEP (ohm.m) | 27.92 | 33 |
| RES_SHALLOW (ohm.m) | 19.09 | 33 |

---

### 1625 m MD — Interval 1622.5 – 1627.5 m

**Sample Description (spreadsheet):** Sample 1625m: 100% Sandstone (litho ASCII aggregate) TG 289.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | hd (0.20) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 289.82500000000005 U |
| mTVDss | -1193.40 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1609m: lt-med gry,lt brn,med brn i/p,dom aren,mnr liths,poss sid,mod 5290 hd-hd,occ v hd,sbblky-sbfiss.
- **SANDSTONE** @ ~1612m: clr-trnsl,off wh,lt gry, pl brn,dom vf,occ med-crs,gen wl srt, sbang-sbrnd,mod strg sil cmt,occ off 5300 69 / 7 / 6 / 8 / 10 wh arg mtx,com carb spks,rr qtz ovgths, fri-mod hd aggs,rr cln lse med-crs qtz
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 28.48 | 33 |
| RES_SHALLOW (ohm.m) | 20.24 | 33 |

---

### 1630 m MD — Interval 1627.5 – 1632.5 m

**Sample Description (spreadsheet):** Sample 1630m: 100% Sandstone (litho ASCII aggregate) TG 491.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 491.41249999999997 U |
| mTVDss | -1193.38 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1615m: lt-med gry,med brn i/p, rr dk gry,dom aren,occ grd to vf SST, 5310 rr carb spks,frm-mod hd,occ v hd,sbblky- sbfiss.
- **SANDSTONE** @ ~1618m: clr-trnsl,off wh,crm i/p, 369 U dom vf,rr med-crs,gen v wl srt,sbang- 5320 sbrnd,wk sil cmt,com off wh arg mtx, occ carb spks & micrlams,rr qtz ovgths, POOR GAMMA SIGNAL RESPONSE 73 / 7 / 5 / 7 / 8
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.8 | 32 |
| RES_DEEP (ohm.m) | 32.77 | 32 |
| RES_SHALLOW (ohm.m) | 23.20 | 32 |

---

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: 100% Sandstone (litho ASCII aggregate) TG 514.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 514.5117647058823 U |
| mTVDss | -1193.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1618m: clr-trnsl,off wh,crm i/p, 369 U dom vf,rr med-crs,gen v wl srt,sbang- 5320 sbrnd,wk sil cmt,com off wh arg mtx, occ carb spks & micrlams,rr qtz ovgths, POOR GAMMA SIGNAL RESPONSE 73 / 7 / 5 / 7 / 8
- **SANDSTONE** @ ~1628m: off wh,clr,trnsl,mlky wh i/p,dom vf,occ med-crs,gen wl srt, sbang-sbrnd,occ ang,wk-occ mod strg sil 5350 cmt,off wh-lt brn arg mtx,mnr liths,rr qtz ovgths,fri vf aggs,rr lse med-crs
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.3 | 33 |
| RES_DEEP (ohm.m) | 35.52 | 33 |
| RES_SHALLOW (ohm.m) | 24.41 | 33 |

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 100% Sandstone (litho ASCII aggregate) TG 459.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 459.45333333333326 U |
| mTVDss | -1193.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1628m: off wh,clr,trnsl,mlky wh i/p,dom vf,occ med-crs,gen wl srt, sbang-sbrnd,occ ang,wk-occ mod strg sil 5350 cmt,off wh-lt brn arg mtx,mnr liths,rr qtz ovgths,fri vf aggs,rr lse med-crs
- **SILTSTONE** @ ~1634m: med-lt gry,dk gry i/p, 655 U dom aren,rr liths,mnr carb spks,frm, sbblky-occ sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.2 | 33 |
| RES_DEEP (ohm.m) | 37.18 | 33 |
| RES_SHALLOW (ohm.m) | 26.67 | 33 |

---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 100% Sandstone (litho ASCII aggregate) TG 460.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 460.2176470588235 U |
| mTVDss | -1193.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1628m: off wh,clr,trnsl,mlky wh i/p,dom vf,occ med-crs,gen wl srt, sbang-sbrnd,occ ang,wk-occ mod strg sil 5350 cmt,off wh-lt brn arg mtx,mnr liths,rr qtz ovgths,fri vf aggs,rr lse med-crs
- **SILTSTONE** @ ~1634m: med-lt gry,dk gry i/p, 655 U dom aren,rr liths,mnr carb spks,frm, sbblky-occ sbfiss.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 33 |
| RES_DEEP (ohm.m) | 42.07 | 33 |
| RES_SHALLOW (ohm.m) | 30.94 | 33 |

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 100% Sandstone (litho ASCII aggregate) TG 495.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 494.9625000000001 U |
| mTVDss | -1193.30 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1634m: med-lt gry,dk gry i/p, 655 U dom aren,rr liths,mnr carb spks,frm, sbblky-occ sbfiss.
- **SANDSTONE** @ ~1634m: off wh,clr,trnsl,crm,pl
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 33 |
| RES_DEEP (ohm.m) | 41.28 | 33 |
| RES_SHALLOW (ohm.m) | 30.07 | 33 |

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 100% Sandstone (litho ASCII aggregate) TG 480.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 480.2125 U |
| mTVDss | -1193.20 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1640m: lt-med gry,rr dk gry,mnr med brn,dom aren,rr carb spks,gen frm-mod hd i/p,rr v hd,sbblky. 5390 73 / 7 / 5 / 7 / 8
- **SANDSTONE** @ ~1643m: off wh,clr,trnsl,crm,pl
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.7 | 32 |
| RES_DEEP (ohm.m) | 41.05 | 32 |
| RES_SHALLOW (ohm.m) | 29.93 | 32 |

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 100% Sandstone (litho ASCII aggregate) TG 309.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 309.48823529411766 U |
| mTVDss | -1193.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1643m: off wh,clr,trnsl,crm,pl
- **SANDSTONE** @ ~1643m: clr-trnsl,off wh,pl brn, 5410 dom vf,v wl srt,sbang-sbrnd,wk sil cmt,mnr-occ off wh-lt brn arg mtx, mnr liths,fri aggs,pr-fr vis por,fluor. 5420 76 / 7 / 4 / 6 / 7 526 U SURVEY @ 5415.94'
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.9 | 33 |
| RES_DEEP (ohm.m) | 42.32 | 33 |
| RES_SHALLOW (ohm.m) | 29.91 | 33 |

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 100% Sandstone (litho ASCII aggregate) TG 447.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 447.36 U |
| mTVDss | -1192.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1652m: off wh,pl brn,clr-trnsl, 5430 76 / 7 / 4 / 6 / 7 crm i/p,dom vf,v wl srt,sbang-sbrnd, wk-occ mod strg sil cmt,occ off wh-lt brn arg mtx,mnr liths,fri aggs,pr-fr vis por,fluor.
- **SILTSTONE** @ ~1658m: lt-med gry,dk gry i/p,dom aren,rr carb spks & micrlams,frm,sbblky- sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.6 | 33 |
| RES_DEEP (ohm.m) | 40.84 | 33 |
| RES_SHALLOW (ohm.m) | 27.93 | 33 |

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 100% Sandstone (litho ASCII aggregate) TG 486.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 486.2375 U |
| mTVDss | -1192.86 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1658m: lt-med gry,dk gry i/p,dom aren,rr carb spks & micrlams,frm,sbblky- sbfiss.
- **SANDSTONE** @ ~1658m: off wh,pl brn,clr-trnsl, 5450 crm i/p,dom vf,v wl srt,sbang-sbrnd, wk-occ mod strg sil cmt,occ off wh-lt brn arg mtx,mnr liths,fri aggs,pr-fr 76 / 7 / 4 / 6 / 7 vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 38.88 | 33 |
| RES_SHALLOW (ohm.m) | 28.49 | 33 |

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 100% Sandstone (litho ASCII aggregate) TG 662.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 662.71875 U |
| mTVDss | -1192.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1658m: lt-med gry,dk gry i/p,dom aren,rr carb spks & micrlams,frm,sbblky- sbfiss.
- **SANDSTONE** @ ~1658m: off wh,pl brn,clr-trnsl, 5450 crm i/p,dom vf,v wl srt,sbang-sbrnd, wk-occ mod strg sil cmt,occ off wh-lt brn arg mtx,mnr liths,fri aggs,pr-fr 76 / 7 / 4 / 6 / 7 vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 38.41 | 33 |
| RES_SHALLOW (ohm.m) | 27.99 | 33 |

---

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680m: 100% Sandstone (litho ASCII aggregate) TG 670.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 670.1058823529411 U |
| mTVDss | -1192.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1664m: off wh,crm,pl brn,lt gry, clr-trnsl,dom vf,v wl srt,sbang-sbrnd, wk-occ mod strg sil cmt,occ off wh arg mtx,com carb spks & micrlams,fri aggs, 531 U pr vis por,fluor.
- **SILTSTONE** @ ~1667m: lt-med gry,tr dk gry,dom aren,mnr liths,frm-mod hd i/p,sbblky- sbfiss,mnr fiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 37.52 | 33 |
| RES_SHALLOW (ohm.m) | 26.83 | 33 |

---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 100% Sandstone (litho ASCII aggregate) TG 607.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 607.0875000000001 U |
| mTVDss | -1192.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1670m: clr-trnsl,off wh,mlky wh i/p,pl brn,dom vf,v wl srt,sbang- sbrnd,occ ang,wk sil cmt,mnr off wh arg mtx,occ carb spks,rr qtz ovgths, 5490 dom cln lse grs,occ fri aggs,pr-fr vis
- **SILTSTONE** @ ~1673m: med-lt gry,lt brn i/p,dom 5500 76 / 7 / 4 / 6 / 7 aren,occ carb spks & lams,frm-occ mod hd,sbblky-sbfiss. 679 U SURVEY @ 5505.01'
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 32 |
| RES_DEEP (ohm.m) | 33.80 | 32 |
| RES_SHALLOW (ohm.m) | 24.39 | 32 |

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 100% Sandstone (litho ASCII aggregate) TG 462.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 462.4125 U |
| mTVDss | -1192.29 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1673m: med-lt gry,lt brn i/p,dom 5500 76 / 7 / 4 / 6 / 7 aren,occ carb spks & lams,frm-occ mod hd,sbblky-sbfiss. 679 U SURVEY @ 5505.01'
- **SANDSTONE** @ ~1682m: off wh,clr-trnsl,vf-mnr f,sbang-occ sbrnd,pred wl srt,frm 75 / 7 / 5 / 6 / 7 sil cmt,tr kaol mtx,occ slty lams, frm-mnr fri aggs,pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 33 |
| RES_DEEP (ohm.m) | 33.80 | 33 |
| RES_SHALLOW (ohm.m) | 24.04 | 33 |

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 100% Sandstone (litho ASCII aggregate) TG 520.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 519.9666666666667 U |
| mTVDss | -1192.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1682m: off wh,clr-trnsl,vf-mnr f,sbang-occ sbrnd,pred wl srt,frm 75 / 7 / 5 / 6 / 7 sil cmt,tr kaol mtx,occ slty lams, frm-mnr fri aggs,pr vis por,fluor.
- **SILTSTONE** @ ~1686m: med gry,occ dk gry,arg- com vf aren,micmic,com carb lams/ (4084) 74 / 7 / 5 / 6 / 8 flks,frm-mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 33 |
| RES_DEEP (ohm.m) | 33.78 | 33 |
| RES_SHALLOW (ohm.m) | 23.63 | 33 |

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 100% Sandstone (litho ASCII aggregate) TG 561.2U (drill-gas ASCII)

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
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 561.23125 U |
| mTVDss | -1191.97 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1686m: med gry,occ dk gry,arg- com vf aren,micmic,com carb lams/ (4084) 74 / 7 / 5 / 6 / 8 flks,frm-mod hd,sbblky-sbfiss.
- **SILTSTONE** @ ~1695m: med gry,occ brn,dk gry, 5570 565 U arg-com vf aren,micmic,carb spks/ lams,frm-mod hd,sbfiss-sbblky. 5580 72 / 7 / 5 / 7 / 9
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.2 | 33 |
| RES_DEEP (ohm.m) | 33.54 | 33 |
| RES_SHALLOW (ohm.m) | 23.65 | 33 |

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 100% Sandstone (litho ASCII aggregate) TG 531.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 531.564705882353 U |
| mTVDss | -1191.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1695m: med gry,occ brn,dk gry, 5570 565 U arg-com vf aren,micmic,carb spks/ lams,frm-mod hd,sbfiss-sbblky. 5580 72 / 7 / 5 / 7 / 9
- **SANDSTONE** @ ~1701m: off wh,trnsl-clr,v pl gry i/p,vf-rr f,sbang-sbrnd,wl srt, frm-mod strg sil cmt,tr-mnr kaol mtx, 5590 slty lams i/p,frm-mod hd aggs,v pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.9 | 33 |
| RES_DEEP (ohm.m) | 33.18 | 33 |
| RES_SHALLOW (ohm.m) | 22.93 | 33 |

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 100% Sandstone (litho ASCII aggregate) TG 476.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 476.7 U |
| mTVDss | -1191.63 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1695m: med gry,occ brn,dk gry, 5570 565 U arg-com vf aren,micmic,carb spks/ lams,frm-mod hd,sbfiss-sbblky. 5580 72 / 7 / 5 / 7 / 9
- **SANDSTONE** @ ~1701m: off wh,trnsl-clr,v pl gry i/p,vf-rr f,sbang-sbrnd,wl srt, frm-mod strg sil cmt,tr-mnr kaol mtx, 5590 slty lams i/p,frm-mod hd aggs,v pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.6 | 32 |
| RES_DEEP (ohm.m) | 34.32 | 32 |
| RES_SHALLOW (ohm.m) | 23.51 | 32 |

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 100% Sandstone (litho ASCII aggregate) TG 284.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 284.94375 U |
| mTVDss | -1191.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1701m: off wh,trnsl-clr,v pl gry i/p,vf-rr f,sbang-sbrnd,wl srt, frm-mod strg sil cmt,tr-mnr kaol mtx, 5590 slty lams i/p,frm-mod hd aggs,v pr vis por,fluor.
- **SILTSTONE** @ ~1707m: pl-med gry,occ dk gry, vf aren,arg i/p,com micmic,carb 5610 74 / 7 / 5 / 6 / 8 520 U spks/lams,sbblky,frm-mod hd.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.2 | 33 |
| RES_DEEP (ohm.m) | 32.85 | 33 |
| RES_SHALLOW (ohm.m) | 23.39 | 33 |

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 100% Sandstone (litho ASCII aggregate) TG 259.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 259.9294117647059 U |
| mTVDss | -1191.27 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1707m: pl-med gry,occ dk gry, vf aren,arg i/p,com micmic,carb 5610 74 / 7 / 5 / 6 / 8 520 U spks/lams,sbblky,frm-mod hd.
- **SANDSTONE** @ ~1713m: off wh,v pl brn,trnsl- clr,vf aggs,rr lse crs,sbang-sbrnd, wl srt,v frm sil cmt,tr-mnr kaol mtx,slty lams i/p,fri-mod hd aggs, v pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.5 | 33 |
| RES_DEEP (ohm.m) | 32.88 | 33 |
| RES_SHALLOW (ohm.m) | 22.35 | 33 |

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 100% Sandstone (litho ASCII aggregate) TG 361.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ v bri yell/grn even 5230 81 / 7 / 4 / 4 / 4 616 U fluor |
| Total Gas | 361.1125 U |
| mTVDss | -1191.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1713m: off wh,v pl brn,trnsl- clr,vf aggs,rr lse crs,sbang-sbrnd, wl srt,v frm sil cmt,tr-mnr kaol mtx,slty lams i/p,fri-mod hd aggs, v pr vis por,fluor.
- **SANDSTONE** @ ~1716m: off wh,clr-trnsl,v pl (4081) gry i/p,vf-occ f,mnr med-rr crs, 5640 73 / 7 / 5 / 7 / 8 sbang-sbrnd,mod wl srt,frm-mod strg sil cmt,tr-v mnr kaol mtx,slty lams 317 U i/p,tr liths,v frm-mod hd aggs,v pr-
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 35.78 | 33 |
| RES_SHALLOW (ohm.m) | 23.45 | 33 |

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 60% Sandstone (litho ASCII aggregate) TG 382.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% None |
| Total Gas | 382.29411764705884 U |
| mTVDss | -1190.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1713m: off wh,v pl brn,trnsl- clr,vf aggs,rr lse crs,sbang-sbrnd, wl srt,v frm sil cmt,tr-mnr kaol mtx,slty lams i/p,fri-mod hd aggs, v pr vis por,fluor.
- **SANDSTONE** @ ~1716m: off wh,clr-trnsl,v pl (4081) gry i/p,vf-occ f,mnr med-rr crs, 5640 73 / 7 / 5 / 7 / 8 sbang-sbrnd,mod wl srt,frm-mod strg sil cmt,tr-v mnr kaol mtx,slty lams 317 U i/p,tr liths,v frm-mod hd aggs,v pr-
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 41.87 | 33 |
| RES_SHALLOW (ohm.m) | 29.24 | 33 |

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 27% Sandstone (litho ASCII aggregate) TG 692.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 26.666666666666668 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% None |
| Total Gas | 692.0999999999999 U |
| mTVDss | -1190.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1722m: clr-trnsl,f-crs,pred med,sbang-sbrnd,mod srt,wk sil cmt, 433 U cln,occ lse,crs-v crs,mod-gd inf por, MW:9.2 5660 74 / 7 / 5 / 6 / 8 fluor. FV:44
- **SANDSTONE** @ ~1734m: clr-trnsl,occ mlky,med- crs,sbang-sbrnd,mod srt,wk inf sil
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.2 | 32 |
| RES_DEEP (ohm.m) | 54.47 | 32 |
| RES_SHALLOW (ohm.m) | 37.18 | 32 |

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 0% Sandstone (litho ASCII aggregate) TG 540.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% None |
| Total Gas | 540.79375 U |
| mTVDss | -1190.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1734m: clr-trnsl,occ mlky,med- crs,sbang-sbrnd,mod srt,wk inf sil
- **SANDSTONE** @ ~1734m: clr-trnsl,occ mlky,med- crs,sbang-sbrnd,mod srt,wk inf sil cmt,cln,lse med-crs qtz,fr-gd inf 5710 65 / 7 / 6 / 9 / 13 por,fluor. 450 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.2 | 33 |
| RES_DEEP (ohm.m) | 43.29 | 33 |
| RES_SHALLOW (ohm.m) | 32.66 | 33 |

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 6% Sandstone (litho ASCII aggregate) TG 254.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 5.882352941176471 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% None |
| Total Gas | 254.60625 U |
| mTVDss | -1190.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1734m: clr-trnsl,occ mlky,med- crs,sbang-sbrnd,mod srt,wk inf sil
- **SANDSTONE** @ ~1734m: clr-trnsl,occ mlky,med- crs,sbang-sbrnd,mod srt,wk inf sil cmt,cln,lse med-crs qtz,fr-gd inf 5710 65 / 7 / 6 / 9 / 13 por,fluor. 450 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 33 |
| RES_DEEP (ohm.m) | 42.45 | 33 |
| RES_SHALLOW (ohm.m) | 31.92 | 33 |

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 0% Sandstone (litho ASCII aggregate) TG 365.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% None |
| Total Gas | 365.125 U |
| mTVDss | -1190.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1734m: clr-trnsl,occ mlky,med- crs,sbang-sbrnd,mod srt,wk inf sil
- **SANDSTONE** @ ~1734m: clr-trnsl,occ mlky,med- crs,sbang-sbrnd,mod srt,wk inf sil cmt,cln,lse med-crs qtz,fr-gd inf 5710 65 / 7 / 6 / 9 / 13 por,fluor. 450 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 33 |
| RES_DEEP (ohm.m) | 37.03 | 33 |
| RES_SHALLOW (ohm.m) | 27.37 | 33 |

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 0% Sandstone (litho ASCII aggregate) TG 641.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 641.5294117647059 U |
| mTVDss | -1190.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1743m: clr-trnsl,occ wh,pred crs, mnr med,occ v crs,sbrnd-sbang,wl srt, wk inf sil cmt,cln,lse crs qtz grs,gd 71 / 7 / 5 / 7 / 10 inf por,fluor.
- **SANDSTONE** @ ~1750m: clr-trnsl,med-pred crs, sbang-sbrnd,mod wl srt,wk sil cmt, cln lse med-crs qtz,fr-gd inf por,fluor. 5750 72 / 7 / 5 / 7 / 9 679 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.6 | 33 |
| RES_DEEP (ohm.m) | 40.09 | 33 |
| RES_SHALLOW (ohm.m) | 29.59 | 33 |

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 8% Sandstone (litho ASCII aggregate) TG 306.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 7.6923076923076925 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 305.9625 U |
| mTVDss | -1190.20 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1743m: clr-trnsl,occ wh,pred crs, mnr med,occ v crs,sbrnd-sbang,wl srt, wk inf sil cmt,cln,lse crs qtz grs,gd 71 / 7 / 5 / 7 / 10 inf por,fluor.
- **SANDSTONE** @ ~1750m: clr-trnsl,med-pred crs, sbang-sbrnd,mod wl srt,wk sil cmt, cln lse med-crs qtz,fr-gd inf por,fluor. 5750 72 / 7 / 5 / 7 / 9 679 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 32 |
| RES_DEEP (ohm.m) | 39.29 | 32 |
| RES_SHALLOW (ohm.m) | 28.31 | 32 |

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 47% Sandstone (litho ASCII aggregate) TG 217.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 46.666666666666664 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 217.16875 U |
| mTVDss | -1190.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1750m: clr-trnsl,med-pred crs, sbang-sbrnd,mod wl srt,wk sil cmt, cln lse med-crs qtz,fr-gd inf por,fluor. 5750 72 / 7 / 5 / 7 / 9 679 U
- **SANDSTONE** @ ~1753m: clr-trnsl,med-pred crs, 72 / 7 / 5 / 7 / 9 sbang-sbrnd,mod wl srt,wk sil cmt,cln, 5760 lse med-crs qtz,fr-gd inf por,fluor. POOR GAMMA SIGNAL RESPONSE IDOCIDE ADDED TO MUD SURVEY @ 5774.11'
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 33 |
| RES_DEEP (ohm.m) | 41.25 | 33 |
| RES_SHALLOW (ohm.m) | 27.29 | 33 |

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 0% Sandstone (litho ASCII aggregate) TG 282.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 282.74705882352947 U |
| mTVDss | -1190.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1753m: clr-trnsl,med-pred crs, 72 / 7 / 5 / 7 / 9 sbang-sbrnd,mod wl srt,wk sil cmt,cln, 5760 lse med-crs qtz,fr-gd inf por,fluor. POOR GAMMA SIGNAL RESPONSE IDOCIDE ADDED TO MUD SURVEY @ 5774.11'
- **SANDSTONE** @ ~1762m: off wh-v pl brn,pl gry, trnsl,vf,wl srt,sbang,mod strg sil cmt, mnr kaol mtx,slty lams,v frm-mod hd 5790 aggs,v pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 45.94 | 33 |
| RES_SHALLOW (ohm.m) | 29.50 | 33 |

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 0% Sandstone (litho ASCII aggregate) TG 246.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 246.8375 U |
| mTVDss | -1190.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1762m: off wh-v pl brn,pl gry, trnsl,vf,wl srt,sbang,mod strg sil cmt, mnr kaol mtx,slty lams,v frm-mod hd 5790 aggs,v pr vis por,fluor.
- **SANDSTONE** @ ~1771m: clr-trnsl,frstd i/p,med- crs,mnr crs,mod srt,sbang-sbrnd, 5820 wk sil cmt,cln,com lse,mnr f-med aggs,fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 33 |
| RES_DEEP (ohm.m) | 38.72 | 33 |
| RES_SHALLOW (ohm.m) | 24.43 | 33 |

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 75% Sandstone (litho ASCII aggregate) TG 287.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 287.6823529411765 U |
| mTVDss | -1190.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1771m: clr-trnsl,frstd i/p,med- crs,mnr crs,mod srt,sbang-sbrnd, 5820 wk sil cmt,cln,com lse,mnr f-med aggs,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1780m: v pl brn,off wh,clr- trnsl,pred vf,occ f-med,rr crs,mod srt, sbang-sbrnd,wk-mod strg sil cmt,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 44.30 | 33 |
| RES_SHALLOW (ohm.m) | 28.93 | 33 |

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 50% Sandstone (litho ASCII aggregate) TG 153.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 153.85625 U |
| mTVDss | -1189.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1771m: clr-trnsl,frstd i/p,med- crs,mnr crs,mod srt,sbang-sbrnd, 5820 wk sil cmt,cln,com lse,mnr f-med aggs,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1780m: v pl brn,off wh,clr- trnsl,pred vf,occ f-med,rr crs,mod srt, sbang-sbrnd,wk-mod strg sil cmt,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 42.51 | 33 |
| RES_SHALLOW (ohm.m) | 28.08 | 33 |

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 14% Sandstone (litho ASCII aggregate) TG 160.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 14.285714285714286 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 160.81875000000002 U |
| mTVDss | -1189.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: v pl brn,off wh,clr- trnsl,pred vf,occ f-med,rr crs,mod srt, sbang-sbrnd,wk-mod strg sil cmt,
- **SANDSTONE** @ ~1795m: v pl brn,clr-trnsl,vf aggs-occ med-crs lse grns,sbang- sbrnd,mod wl srt,rr pr srt,mod strg sil 74 / 7 / 5 / 6 / 8 cmt in vf aggs,tr kaol mtx,com cln & 171U lse med-crs qtz,v pr vis-occ fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 32 |
| RES_DEEP (ohm.m) | 48.34 | 32 |
| RES_SHALLOW (ohm.m) | 31.95 | 32 |

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 15% Sandstone (litho ASCII aggregate) TG 146.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 15.384615384615385 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-occ bri yell/grn |
| Total Gas | 146.5470588235294 U |
| mTVDss | -1189.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: v pl brn,off wh,clr- trnsl,pred vf,occ f-med,rr crs,mod srt, sbang-sbrnd,wk-mod strg sil cmt,
- **SANDSTONE** @ ~1795m: v pl brn,clr-trnsl,vf aggs-occ med-crs lse grns,sbang- sbrnd,mod wl srt,rr pr srt,mod strg sil 74 / 7 / 5 / 6 / 8 cmt in vf aggs,tr kaol mtx,com cln & 171U lse med-crs qtz,v pr vis-occ fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 52.18 | 33 |
| RES_SHALLOW (ohm.m) | 31.92 | 33 |

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 100% Sandstone (litho ASCII aggregate) TG 138.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yell/grn even-sptd fluor |
| Total Gas | 138.8125 U |
| mTVDss | -1189.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1795m: v pl brn,clr-trnsl,vf aggs-occ med-crs lse grns,sbang- sbrnd,mod wl srt,rr pr srt,mod strg sil 74 / 7 / 5 / 6 / 8 cmt in vf aggs,tr kaol mtx,com cln & 171U lse med-crs qtz,v pr vis-occ fr inf
- **SANDSTONE** @ ~1801m: v pl brn,clr-trnsl, 75 / 7 / 5 / 6 / 7 pred vf-occ f aggs,mnr med-rr crs,mod 5920 wl srt,sbang-sbrnd,v frm-wk sil cmt, tr kaol mtx,gen cln,fri-mod hd vf aggs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 33 |
| RES_DEEP (ohm.m) | 55.02 | 33 |
| RES_SHALLOW (ohm.m) | 33.06 | 33 |

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 100% Sandstone (litho ASCII aggregate) TG 140.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yell/grn even-sptd fluor |
| Total Gas | 140.18823529411767 U |
| mTVDss | -1189.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1795m: v pl brn,clr-trnsl,vf aggs-occ med-crs lse grns,sbang- sbrnd,mod wl srt,rr pr srt,mod strg sil 74 / 7 / 5 / 6 / 8 cmt in vf aggs,tr kaol mtx,com cln & 171U lse med-crs qtz,v pr vis-occ fr inf
- **SANDSTONE** @ ~1801m: v pl brn,clr-trnsl, 75 / 7 / 5 / 6 / 7 pred vf-occ f aggs,mnr med-rr crs,mod 5920 wl srt,sbang-sbrnd,v frm-wk sil cmt, tr kaol mtx,gen cln,fri-mod hd vf aggs,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.6 | 33 |
| RES_DEEP (ohm.m) | 65.98 | 33 |
| RES_SHALLOW (ohm.m) | 34.82 | 33 |

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 0% Sandstone (litho ASCII aggregate) TG 93.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yell/grn even-sptd fluor |
| Total Gas | 93.84375 U |
| mTVDss | -1189.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1795m: v pl brn,clr-trnsl,vf aggs-occ med-crs lse grns,sbang- sbrnd,mod wl srt,rr pr srt,mod strg sil 74 / 7 / 5 / 6 / 8 cmt in vf aggs,tr kaol mtx,com cln & 171U lse med-crs qtz,v pr vis-occ fr inf
- **SANDSTONE** @ ~1801m: v pl brn,clr-trnsl, 75 / 7 / 5 / 6 / 7 pred vf-occ f aggs,mnr med-rr crs,mod 5920 wl srt,sbang-sbrnd,v frm-wk sil cmt, tr kaol mtx,gen cln,fri-mod hd vf aggs,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.1 | 33 |
| RES_DEEP (ohm.m) | 61.09 | 33 |
| RES_SHALLOW (ohm.m) | 35.46 | 33 |

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 4% Sandstone (litho ASCII aggregate) TG 115.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 3.5714285714285716 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yell/grn even-sptd fluor |
| Total Gas | 115.1625 U |
| mTVDss | -1189.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1801m: v pl brn,clr-trnsl, 75 / 7 / 5 / 6 / 7 pred vf-occ f aggs,mnr med-rr crs,mod 5920 wl srt,sbang-sbrnd,v frm-wk sil cmt, tr kaol mtx,gen cln,fri-mod hd vf aggs,
- **SANDSTONE** @ ~1807m: clr-trnsl,f-pred med, sbang-sbrnd,wl srt,wk-mnr frm sil cmt, (4076) cln,lse med qtz,fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.8 | 32 |
| RES_DEEP (ohm.m) | 55.95 | 32 |
| RES_SHALLOW (ohm.m) | 37.49 | 32 |

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 57% Sandstone (litho ASCII aggregate) TG 140.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 57.142857142857146 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-occ bri yel/grn even fluor |
| Total Gas | 140.6058823529412 U |
| mTVDss | -1189.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1807m: clr-trnsl,f-pred med, sbang-sbrnd,wl srt,wk-mnr frm sil cmt, (4076) cln,lse med qtz,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1820m: v pl brn,occ clr,vf aggs,sbang,wl srt,v frm sil cmt,tr kaol mtx,ri-mod hd aggs,occ lse med-rr qtz, 5980 tr lithics,v pr vis por,fluor. 74 / 7 / 5 / 6 / 8
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.2 | 33 |
| RES_DEEP (ohm.m) | 53.22 | 33 |
| RES_SHALLOW (ohm.m) | 39.01 | 33 |

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 67% Sandstone (litho ASCII aggregate) TG 174.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 66.66666666666667 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-occ bri yel/grn even fluor |
| Total Gas | 174.61875 U |
| mTVDss | -1189.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: v pl brn,occ clr,vf aggs,sbang,wl srt,v frm sil cmt,tr kaol mtx,ri-mod hd aggs,occ lse med-rr qtz, 5980 tr lithics,v pr vis por,fluor. 74 / 7 / 5 / 6 / 8
- **SANDSTONE** @ ~1826m: 465-513 gpm SANDSTONE:pl brn,clr-trnsl i/p, tr mlky,wh,lt gry,dom vf-f aggs,v wl srt,sbang-sbrnd,wk sil cmt,rr off wh- 76 / 7 / 4 / 6 / 7 150U lt brn arg mtx,occ mic flks,rr qtz 6010 ovgths,fri aggs,occ cln lse qtz
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 33 |
| RES_DEEP (ohm.m) | 50.32 | 33 |
| RES_SHALLOW (ohm.m) | 32.68 | 33 |

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 85% Sandstone (litho ASCII aggregate) TG 142.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 84.61538461538461 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-occ bri yel/grn even fluor |
| Total Gas | 142.45294117647057 U |
| mTVDss | -1189.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: v pl brn,occ clr,vf aggs,sbang,wl srt,v frm sil cmt,tr kaol mtx,ri-mod hd aggs,occ lse med-rr qtz, 5980 tr lithics,v pr vis por,fluor. 74 / 7 / 5 / 6 / 8
- **SANDSTONE** @ ~1826m: 465-513 gpm SANDSTONE:pl brn,clr-trnsl i/p, tr mlky,wh,lt gry,dom vf-f aggs,v wl srt,sbang-sbrnd,wk sil cmt,rr off wh- 76 / 7 / 4 / 6 / 7 150U lt brn arg mtx,occ mic flks,rr qtz 6010 ovgths,fri aggs,occ cln lse qtz
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.6 | 33 |
| RES_DEEP (ohm.m) | 49.79 | 33 |
| RES_SHALLOW (ohm.m) | 29.48 | 33 |

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 123.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-occ bri yel/grn even fluor |
| Total Gas | 123.01764705882354 U |
| mTVDss | -1189.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: v pl brn,occ clr,vf aggs,sbang,wl srt,v frm sil cmt,tr kaol mtx,ri-mod hd aggs,occ lse med-rr qtz, 5980 tr lithics,v pr vis por,fluor. 74 / 7 / 5 / 6 / 8
- **SANDSTONE** @ ~1826m: 465-513 gpm SANDSTONE:pl brn,clr-trnsl i/p, tr mlky,wh,lt gry,dom vf-f aggs,v wl srt,sbang-sbrnd,wk sil cmt,rr off wh- 76 / 7 / 4 / 6 / 7 150U lt brn arg mtx,occ mic flks,rr qtz 6010 ovgths,fri aggs,occ cln lse qtz
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 56.04 | 33 |
| RES_SHALLOW (ohm.m) | 31.13 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% Sandstone (litho ASCII aggregate) TG 115.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri-occ bri yel/grn even fluor |
| Total Gas | 115.18125 U |
| mTVDss | -1189.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1826m: 465-513 gpm SANDSTONE:pl brn,clr-trnsl i/p, tr mlky,wh,lt gry,dom vf-f aggs,v wl srt,sbang-sbrnd,wk sil cmt,rr off wh- 76 / 7 / 4 / 6 / 7 150U lt brn arg mtx,occ mic flks,rr qtz 6010 ovgths,fri aggs,occ cln lse qtz
- **SILTSTONE** @ ~1838m: dk-med gry,occ lt gry,dom aren,occ carb spks,frm, ( 6 4 0 0 4 7 0 5) sbblky-sbfiss,occ fiss SURVEY @ 6042.28' INC:90.00° AZ:312.20°T
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 32 |
| RES_DEEP (ohm.m) | 69.15 | 32 |
| RES_SHALLOW (ohm.m) | 34.59 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 77% Sandstone (litho ASCII aggregate) TG 124.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 76.92307692307692 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 124.75294117647057 U |
| mTVDss | -1189.64 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1838m: dk-med gry,occ lt gry,dom aren,occ carb spks,frm, ( 6 4 0 0 4 7 0 5) sbblky-sbfiss,occ fiss SURVEY @ 6042.28' INC:90.00° AZ:312.20°T
- **SANDSTONE** @ ~1844m: pl brn,off wh,clr, trnsl,mlky,wh i/p,dom f gr aggs,occ
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 33 |
| RES_DEEP (ohm.m) | 54.72 | 33 |
| RES_SHALLOW (ohm.m) | 30.81 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 79% Sandstone (litho ASCII aggregate) TG 123.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 78.57142857142857 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 123.03125 U |
| mTVDss | -1189.68 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1838m: dk-med gry,occ lt gry,dom aren,occ carb spks,frm, ( 6 4 0 0 4 7 0 5) sbblky-sbfiss,occ fiss SURVEY @ 6042.28' INC:90.00° AZ:312.20°T
- **SANDSTONE** @ ~1844m: pl brn,off wh,clr, trnsl,mlky,wh i/p,dom f gr aggs,occ
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 33 |
| RES_DEEP (ohm.m) | 56.06 | 33 |
| RES_SHALLOW (ohm.m) | 29.22 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 33% Sandstone (litho ASCII aggregate) TG 123.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 33.333333333333336 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 123.16470588235295 U |
| mTVDss | -1189.71 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1838m: dk-med gry,occ lt gry,dom aren,occ carb spks,frm, ( 6 4 0 0 4 7 0 5) sbblky-sbfiss,occ fiss SURVEY @ 6042.28' INC:90.00° AZ:312.20°T
- **SANDSTONE** @ ~1844m: pl brn,off wh,clr, trnsl,mlky,wh i/p,dom f gr aggs,occ
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 51.85 | 33 |
| RES_SHALLOW (ohm.m) | 28.42 | 33 |

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 92% Sandstone (litho ASCII aggregate) TG 120.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 92.3076923076923 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 120.6 U |
| mTVDss | -1189.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1844m: pl brn,off wh,clr, trnsl,mlky,wh i/p,dom f gr aggs,occ
- **SILTSTONE** @ ~1847m: dk-med gry,occ lt 73 / 7 / 5 / 7 / 8 145U gry,dom aren,mnr liths,sli micmic, frm,sbblky-sbfiss,occ fiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 41.75 | 33 |
| RES_SHALLOW (ohm.m) | 25.66 | 33 |

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 92% Sandstone (litho ASCII aggregate) TG 135.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 92.3076923076923 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 135.19375000000002 U |
| mTVDss | -1189.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1859m: trnsl,glassy,mlky,wh, 163U pl brn,dom vf-f aggs,com med-v crs, 63 / 7 / 7 / 11 / 12 gen wl srt,sbang-sbrnd,mnr ang,wk- mod strg sil cmt,mnr off wh-lt brn
- **SILTSTONE** @ ~1865m: 1295-1541 psi 6130 SILTSTONE:dk-med gry,occ lt frm,sbblky-sbfiss,occ fiss. (4076)
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 32 |
| RES_DEEP (ohm.m) | 49.84 | 32 |
| RES_SHALLOW (ohm.m) | 28.54 | 32 |

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 38% Sandstone (litho ASCII aggregate) TG 119.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 38.46153846153846 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 119.74705882352941 U |
| mTVDss | -1189.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1859m: trnsl,glassy,mlky,wh, 163U pl brn,dom vf-f aggs,com med-v crs, 63 / 7 / 7 / 11 / 12 gen wl srt,sbang-sbrnd,mnr ang,wk- mod strg sil cmt,mnr off wh-lt brn
- **SILTSTONE** @ ~1865m: 1295-1541 psi 6130 SILTSTONE:dk-med gry,occ lt frm,sbblky-sbfiss,occ fiss. (4076)
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.4 | 33 |
| RES_DEEP (ohm.m) | 57.25 | 33 |
| RES_SHALLOW (ohm.m) | 30.69 | 33 |

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 47% Sandstone (litho ASCII aggregate) TG 120.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 46.666666666666664 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 120.80625 U |
| mTVDss | -1189.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1859m: trnsl,glassy,mlky,wh, 163U pl brn,dom vf-f aggs,com med-v crs, 63 / 7 / 7 / 11 / 12 gen wl srt,sbang-sbrnd,mnr ang,wk- mod strg sil cmt,mnr off wh-lt brn
- **SILTSTONE** @ ~1865m: 1295-1541 psi 6130 SILTSTONE:dk-med gry,occ lt frm,sbblky-sbfiss,occ fiss. (4076)
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.6 | 33 |
| RES_DEEP (ohm.m) | 43.93 | 33 |
| RES_SHALLOW (ohm.m) | 27.07 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 100% Sandstone (litho ASCII aggregate) TG 122.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 122.19411764705883 U |
| mTVDss | -1191.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1899m: clr-trnsl,pl brn,dom f, (4079) occ med-crs,wl srt,sbrnd-occ sbang,tr 6240 arg,wk sil cmt,mnr off wh arg mtx,rr qtz ovgths,lse med-crs grs,pr vis por, pr-fr inf por,fluor.
- **SILTSTONE** @ ~1905m: lt-med gry,lt-med gry 6260 brn,dom aren,occ carb spks,mnr liths, frm,sbblky-sbfiss. 109U 75 / 7 / 5 / 6 / 7
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 53.34 | 33 |
| RES_SHALLOW (ohm.m) | 30.37 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 83% Sandstone (litho ASCII aggregate) TG 128.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 83.33333333333333 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 128.275 U |
| mTVDss | -1191.42 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1905m: lt-med gry,lt-med gry 6260 brn,dom aren,occ carb spks,mnr liths, frm,sbblky-sbfiss. 109U 75 / 7 / 5 / 6 / 7
- **SANDSTONE** @ ~1911m: clr-trnsl,glassy,mlky, wh i/p,pl brn,dom f,com med-rr crs, mod srt,sbang-sbrnd,wk sil cmt,rr off 6280 wh arg mtx,occ qtz ovgths,fri aggs, com lse med qtz grs,pr vis & inf por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 32 |
| RES_DEEP (ohm.m) | 40.65 | 32 |
| RES_SHALLOW (ohm.m) | 27.76 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 33% Sandstone (litho ASCII aggregate) TG 118.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 33.333333333333336 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 118.51875 U |
| mTVDss | -1191.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1911m: clr-trnsl,glassy,mlky, wh i/p,pl brn,dom f,com med-rr crs, mod srt,sbang-sbrnd,wk sil cmt,rr off 6280 wh arg mtx,occ qtz ovgths,fri aggs, com lse med qtz grs,pr vis & inf por,
- **SANDSTONE** @ ~1920m: 50-138 SANDSTONE:clr-trnsl,glassy,mlky, 77 / 7 / 4 / 6 / 6 135U com lse med qtz grs,pr vis & inf por, fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 33 |
| RES_DEEP (ohm.m) | 37.53 | 33 |
| RES_SHALLOW (ohm.m) | 29.16 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 29% Sandstone (litho ASCII aggregate) TG 110.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 28.571428571428573 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 110.40588235294118 U |
| mTVDss | -1191.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: 50-138 SANDSTONE:clr-trnsl,glassy,mlky, 77 / 7 / 4 / 6 / 6 135U com lse med qtz grs,pr vis & inf por, fluor.
- **SANDSTONE** @ ~1926m: clr-trnsl,glassy,mlky, wh i/p,pl brn,dom f,abdt med-crs, mod srt,sbang-sbrnd,wk sil cmt,rr off 6330 wh arg mtx,abdt qtz ovgths,fri aggs, com lse med-crs qtz grs,pr vis & inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 37.75 | 33 |
| RES_SHALLOW (ohm.m) | 29.56 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 25% Sandstone (litho ASCII aggregate) TG 90.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 25.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 90.07647058823531 U |
| mTVDss | -1192.12 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: 50-138 SANDSTONE:clr-trnsl,glassy,mlky, 77 / 7 / 4 / 6 / 6 135U com lse med qtz grs,pr vis & inf por, fluor.
- **SANDSTONE** @ ~1926m: clr-trnsl,glassy,mlky, wh i/p,pl brn,dom f,abdt med-crs, mod srt,sbang-sbrnd,wk sil cmt,rr off 6330 wh arg mtx,abdt qtz ovgths,fri aggs, com lse med-crs qtz grs,pr vis & inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 33 |
| RES_DEEP (ohm.m) | 37.03 | 33 |
| RES_SHALLOW (ohm.m) | 28.73 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 67% Sandstone (litho ASCII aggregate) TG 76.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 66.66666666666667 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 76.74117647058823 U |
| mTVDss | -1192.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1926m: clr-trnsl,glassy,mlky, wh i/p,pl brn,dom f,abdt med-crs, mod srt,sbang-sbrnd,wk sil cmt,rr off 6330 wh arg mtx,abdt qtz ovgths,fri aggs, com lse med-crs qtz grs,pr vis & inf
- **SANDSTONE** @ ~1932m: clr,trnsl,glassy,mlky wh,pl brn,dom vf-f aggs,abdt med- occ v crs grs,mod srt,sbang-ang, 6350 occ sbrnd,wk sil cmt,tr off wh arg mtx,com qtz ovgths,fri aggs,abdt cln
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 33 |
| RES_DEEP (ohm.m) | 32.86 | 33 |
| RES_SHALLOW (ohm.m) | 24.90 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 32% Sandstone (litho ASCII aggregate) TG 107.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 32.142857142857146 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 107.88749999999999 U |
| mTVDss | -1192.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: clr,trnsl,glassy,mlky wh,pl brn,dom vf-f aggs,abdt med- occ v crs grs,mod srt,sbang-ang, 6350 occ sbrnd,wk sil cmt,tr off wh arg mtx,com qtz ovgths,fri aggs,abdt cln
- **SILTSTONE** @ ~1935m: dk-med gry,med gry brn,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.6 | 32 |
| RES_DEEP (ohm.m) | 29.97 | 32 |
| RES_SHALLOW (ohm.m) | 22.73 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 69% Sandstone (litho ASCII aggregate) TG 101.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 69.23076923076923 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 87.25% mod bri grn |
| Total Gas | 101.275 U |
| mTVDss | -1192.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1935m: dk-med gry,med gry brn,
- **SANDSTONE** @ ~1942m: pl brn,off wh,clr,trnsl, occ mlky wh,dom vf-f,occ-mnr med- 12-01-2016 crs grs,gen v wl srt,sbang-sbrnd, 150U wk sil cmt,mnr off wh arg mtx,occ slty lams,mnr carb spks,dom fri aggs,
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.3 | 33 |
| RES_DEEP (ohm.m) | 27.87 | 33 |
| RES_SHALLOW (ohm.m) | 20.94 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 50% Sandstone (litho ASCII aggregate) TG 95.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 66.11764705882354% mod bri grn |
| Total Gas | 95.45882352941175 U |
| mTVDss | -1192.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1942m: pl brn,off wh,clr,trnsl, occ mlky wh,dom vf-f,occ-mnr med- 12-01-2016 crs grs,gen v wl srt,sbang-sbrnd, 150U wk sil cmt,mnr off wh arg mtx,occ slty lams,mnr carb spks,dom fri aggs,
- **SILTSTONE** @ ~1942m: med-lt gry,med gry brn 6390 71 / 7 / 5 / 8 / 9 i/p,dom aren,com liths,frm,sbblky- sbfiss,occ fiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 26.23 | 33 |
| RES_SHALLOW (ohm.m) | 21.62 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 44% Sandstone (litho ASCII aggregate) TG 107.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 43.75 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 84.25% mod bri grn |
| Total Gas | 107.7375 U |
| mTVDss | -1193.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1957m: plbrnoffwhcrmi/p
- **SANDSTONE** @ ~1957m: pl brn,off wh,crm i/p, lt gry,clr-trnsl,dom vf-f,rr med- 6430 114U crs,gen wl srt,sbang-sbrnd,wk sil 73 / 7 / 5 / 7 / 8 cmt,rr lt brn arg mtx,mnr liths,fri aggs,occ lse f-crs grs,pr vis & inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.4 | 33 |
| RES_DEEP (ohm.m) | 26.14 | 33 |
| RES_SHALLOW (ohm.m) | 21.03 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 47% Sandstone (litho ASCII aggregate) TG 92.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 47.05882352941177 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 88.0% mod bri grn |
| Total Gas | 92.71176470588235 U |
| mTVDss | -1193.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1957m: plbrnoffwhcrmi/p
- **SANDSTONE** @ ~1957m: pl brn,off wh,crm i/p, lt gry,clr-trnsl,dom vf-f,rr med- 6430 114U crs,gen wl srt,sbang-sbrnd,wk sil 73 / 7 / 5 / 7 / 8 cmt,rr lt brn arg mtx,mnr liths,fri aggs,occ lse f-crs grs,pr vis & inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.4 | 33 |
| RES_DEEP (ohm.m) | 24.94 | 33 |
| RES_SHALLOW (ohm.m) | 20.78 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 61% Sandstone (litho ASCII aggregate) TG 125.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 60.714285714285715 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 95.5% mod bri grn |
| Total Gas | 125.90625 U |
| mTVDss | -1193.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1957m: plbrnoffwhcrmi/p
- **SANDSTONE** @ ~1957m: pl brn,off wh,crm i/p, lt gry,clr-trnsl,dom vf-f,rr med- 6430 114U crs,gen wl srt,sbang-sbrnd,wk sil 73 / 7 / 5 / 7 / 8 cmt,rr lt brn arg mtx,mnr liths,fri aggs,occ lse f-crs grs,pr vis & inf
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 32 |
| RES_DEEP (ohm.m) | 24.82 | 32 |
| RES_SHALLOW (ohm.m) | 20.92 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 33% Sandstone (litho ASCII aggregate) TG 112.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 33.333333333333336 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri grn |
| Total Gas | 112.23750000000001 U |
| mTVDss | -1193.61 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1963m: lt-med gry,lt brn i/p, dom aren grd to vf SST i/p,occ carb spks & lams,frm,sbblky-sbfiss.
- **SANDSTONE** @ ~1963m: 474-509 gpm 6450 74 / 7 / 5 / 6 / 8 SANDSTONE:pl brn,off wh,crm i/p, lt gry,clr-trnsl,dom vf-f,rr med- crs,gen wl srt,sbang-sbrnd,wk sil cmt,rr lt brn arg mtx,mnr liths,fri aggs,occ lse f-crs grs,pr vis & inf
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.0 | 33 |
| RES_DEEP (ohm.m) | 24.91 | 33 |
| RES_SHALLOW (ohm.m) | 21.03 | 33 |

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 11% Sandstone (litho ASCII aggregate) TG 107.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 10.714285714285714 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri grn |
| Total Gas | 107.74117647058823 U |
| mTVDss | -1193.72 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1963m: lt-med gry,lt brn i/p, dom aren grd to vf SST i/p,occ carb spks & lams,frm,sbblky-sbfiss.
- **SANDSTONE** @ ~1963m: 474-509 gpm 6450 74 / 7 / 5 / 6 / 8 SANDSTONE:pl brn,off wh,crm i/p, lt gry,clr-trnsl,dom vf-f,rr med- crs,gen wl srt,sbang-sbrnd,wk sil cmt,rr lt brn arg mtx,mnr liths,fri aggs,occ lse f-crs grs,pr vis & inf
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 26.16 | 33 |
| RES_SHALLOW (ohm.m) | 21.72 | 33 |

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 53% Sandstone (litho ASCII aggregate) TG 114.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 53.333333333333336 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri grn |
| Total Gas | 113.98124999999999 U |
| mTVDss | -1193.79 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1969m: lt-med gry,med gry brn, dom aren,com carb spks & lams,rr 6470 73 / 7 / 5 / 7 / 8 poss sid,gen frm,tr hd,sbblky-sbfiss. SURVEY @ 6487.14' 6480 INC:88.82° AZ:314.03°T
- **SANDSTONE** @ ~1981m: pl brn,off wh,clr i/p,pl gry,dom vf-f,v wl srt,sbang-sbrnd, wk-occ mod strg sil cmt,mnr off wh arg mtx,occ liths,mnr slty lams,fri- 6510 mod hd aggs,pr-v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 33 |
| RES_DEEP (ohm.m) | 32.66 | 33 |
| RES_SHALLOW (ohm.m) | 24.29 | 33 |

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 29% Sandstone (litho ASCII aggregate) TG 97.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 29.41176470588235 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri grn |
| Total Gas | 97.76470588235293 U |
| mTVDss | -1193.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1981m: pl brn,off wh,clr i/p,pl gry,dom vf-f,v wl srt,sbang-sbrnd, wk-occ mod strg sil cmt,mnr off wh arg mtx,occ liths,mnr slty lams,fri- 6510 mod hd aggs,pr-v pr vis por,fluor.
- **SILTSTONE** @ ~1984m: med-lt gry,lt gry brn, 6520 dom aren,com carb spks,frm,sbblky- sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 33 |
| RES_DEEP (ohm.m) | 37.18 | 33 |
| RES_SHALLOW (ohm.m) | 27.85 | 33 |

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 50% Sandstone (litho ASCII aggregate) TG 96.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 98.5% mod bri grn |
| Total Gas | 96.83125 U |
| mTVDss | -1193.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1981m: pl brn,off wh,clr i/p,pl gry,dom vf-f,v wl srt,sbang-sbrnd, wk-occ mod strg sil cmt,mnr off wh arg mtx,occ liths,mnr slty lams,fri- 6510 mod hd aggs,pr-v pr vis por,fluor.
- **SILTSTONE** @ ~1984m: med-lt gry,lt gry brn, 6520 dom aren,com carb spks,frm,sbblky- sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 32 |
| RES_DEEP (ohm.m) | 33.35 | 32 |
| RES_SHALLOW (ohm.m) | 22.64 | 32 |

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 31% Sandstone (litho ASCII aggregate) TG 115.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 31.25 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 88.0% mod bri grn |
| Total Gas | 115.7875 U |
| mTVDss | -1194.00 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1984m: med-lt gry,lt gry brn, 6520 dom aren,com carb spks,frm,sbblky- sbfiss.
- **SANDSTONE** @ ~1987m: pl brn,off wh,trnsl gry, 6530 72 / 7 / 5 / 8 / 8 clr,dom vf-f,v wl srt,sbang-sbrnd, wk sil cmt,mnr off wh arg mtx,occ carb spks,com slty micrlams,fri aggs, pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.3 | 33 |
| RES_DEEP (ohm.m) | 35.95 | 33 |
| RES_SHALLOW (ohm.m) | 24.46 | 33 |

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 100% Sandstone (litho ASCII aggregate) TG 142.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri grn |
| Total Gas | 142.60625 U |
| mTVDss | -1194.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2006m: pl brn,lt gry,clr,trnsl, dom vf-f,v wl srt,sbang-sbrnd,wk sil 6590 cmt,occ-mnr lt brn-off wh arg mtx,com slty lams,fri aggs,pr vis por,fluor.
- **SILTSTONE** @ ~2009m: med-lt gry,lt gry brn, dom aren,occ carb spks & lams,frm, 239U sbblky-sbfiss. 76 / 7 / 4 / 6 / 7
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 32 |
| RES_DEEP (ohm.m) | 41.58 | 32 |
| RES_SHALLOW (ohm.m) | 27.86 | 32 |

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 100% Sandstone (litho ASCII aggregate) TG 174.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri grn |
| Total Gas | 174.26875 U |
| mTVDss | -1194.25 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2009m: med-lt gry,lt gry brn, dom aren,occ carb spks & lams,frm, 239U sbblky-sbfiss. 76 / 7 / 4 / 6 / 7
- **SANDSTONE** @ ~2018m: pl brn,off wh,clr,trnsl, dom vf-f,mnr med grs,gen wl srt,sbang- sbrnd,wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks,tr qtz ovgths,dom fri aggs,rr cln lse grs,pr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.9 | 33 |
| RES_DEEP (ohm.m) | 37.68 | 33 |
| RES_SHALLOW (ohm.m) | 26.73 | 33 |

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 100% Sandstone (litho ASCII aggregate) TG 173.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Total Gas | 173.54117647058823 U |
| mTVDss | -1194.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2018m: pl brn,off wh,clr,trnsl, dom vf-f,mnr med grs,gen wl srt,sbang- sbrnd,wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks,tr qtz ovgths,dom fri aggs,rr cln lse grs,pr vis & inf por,fluor.
- **SILTSTONE** @ ~2027m: lt-med gry,lt gry brn i/p,dom aren,occ carb spks,coaly frags,frm,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 38.81 | 33 |
| RES_SHALLOW (ohm.m) | 28.89 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 183.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Total Gas | 183.14375 U |
| mTVDss | -1194.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2018m: pl brn,off wh,clr,trnsl, dom vf-f,mnr med grs,gen wl srt,sbang- sbrnd,wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks,tr qtz ovgths,dom fri aggs,rr cln lse grs,pr vis & inf por,fluor.
- **SILTSTONE** @ ~2027m: lt-med gry,lt gry brn i/p,dom aren,occ carb spks,coaly frags,frm,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 33 |
| RES_DEEP (ohm.m) | 40.27 | 33 |
| RES_SHALLOW (ohm.m) | 30.22 | 33 |

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% Sandstone (litho ASCII aggregate) TG 223.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Total Gas | 223.4 U |
| mTVDss | -1194.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2027m: lt-med gry,lt gry brn i/p,dom aren,occ carb spks,coaly frags,frm,sbblky-sbfiss.
- **SANDSTONE** @ ~2036m: clr,trnsl,pl brn i/p, dom f,gen v wl srt,sbang-sbrnd,wk sil cmt,nil-tr arg mtx,com qtz ovgths, dom lse qtz grs,fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 33 |
| RES_DEEP (ohm.m) | 35.89 | 33 |
| RES_SHALLOW (ohm.m) | 26.89 | 33 |

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% Sandstone (litho ASCII aggregate) TG 136.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Total Gas | 136.82941176470587 U |
| mTVDss | -1194.51 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2036m: clr,trnsl,pl brn i/p, dom f,gen v wl srt,sbang-sbrnd,wk sil cmt,nil-tr arg mtx,com qtz ovgths, dom lse qtz grs,fr vis por,fluor.
- **SANDSTONE** @ ~2039m: clr,trnsl,pl brn i/p,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 34.48 | 33 |
| RES_SHALLOW (ohm.m) | 26.88 | 33 |

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 100% Sandstone (litho ASCII aggregate) TG 165.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Total Gas | 165.90625 U |
| mTVDss | -1194.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2036m: clr,trnsl,pl brn i/p, dom f,gen v wl srt,sbang-sbrnd,wk sil cmt,nil-tr arg mtx,com qtz ovgths, dom lse qtz grs,fr vis por,fluor.
- **SANDSTONE** @ ~2039m: clr,trnsl,pl brn i/p,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 32 |
| RES_DEEP (ohm.m) | 35.42 | 32 |
| RES_SHALLOW (ohm.m) | 27.53 | 32 |

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 100% Sandstone (litho ASCII aggregate) TG 164.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Total Gas | 164.22941176470587 U |
| mTVDss | -1194.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2039m: clr,trnsl,pl brn i/p,
- **SANDSTONE** @ ~2045m: clr,trnsl,pl brn,dom vf-f,rr med grs,wl srt,sbang-sbrnd,wk sil cmt,nil-tr off wh arg mtx,occ
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 33 |
| RES_DEEP (ohm.m) | 41.77 | 33 |
| RES_SHALLOW (ohm.m) | 33.27 | 33 |

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 100% Sandstone (litho ASCII aggregate) TG 147.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Total Gas | 147.075 U |
| mTVDss | -1194.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2045m: clr,trnsl,pl brn,dom vf-f,rr med grs,wl srt,sbang-sbrnd,wk sil cmt,nil-tr off wh arg mtx,occ
- **SANDSTONE** @ ~2057m: v pl brn,trnsl-clr,pred 6760 78 / 7 / 4 / 5 / 6 vf,occ f,mnr med,sbang-sbrnd,pred wl srt,wk-frm sil cmt,cln-tr kaol mtx,tr slty lams,fri-frm aggs,v pr- pr vis por,mnr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.4 | 33 |
| RES_DEEP (ohm.m) | 35.32 | 33 |
| RES_SHALLOW (ohm.m) | 28.20 | 33 |

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 100% Sandstone (litho ASCII aggregate) TG 166.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Total Gas | 166.77647058823527 U |
| mTVDss | -1194.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2057m: v pl brn,trnsl-clr,pred 6760 78 / 7 / 4 / 5 / 6 vf,occ f,mnr med,sbang-sbrnd,pred wl srt,wk-frm sil cmt,cln-tr kaol mtx,tr slty lams,fri-frm aggs,v pr- pr vis por,mnr-fr inf por,fluor.
- **SANDSTONE** @ ~2067m: v pl brn,v pl gry,trnsl- clr,pred vf,mnr lse med,sbang-sbrnd, pred wl srt,frm sil cmt,tr-mnr kaol mtx,slty i/p,fri-v frm aggs,v pr vis 6790 por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.1 | 33 |
| RES_DEEP (ohm.m) | 33.76 | 33 |
| RES_SHALLOW (ohm.m) | 26.16 | 33 |

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 100% Sandstone (litho ASCII aggregate) TG 168.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Total Gas | 168.24375 U |
| mTVDss | -1194.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2057m: v pl brn,trnsl-clr,pred 6760 78 / 7 / 4 / 5 / 6 vf,occ f,mnr med,sbang-sbrnd,pred wl srt,wk-frm sil cmt,cln-tr kaol mtx,tr slty lams,fri-frm aggs,v pr- pr vis por,mnr-fr inf por,fluor.
- **SANDSTONE** @ ~2067m: v pl brn,v pl gry,trnsl- clr,pred vf,mnr lse med,sbang-sbrnd, pred wl srt,frm sil cmt,tr-mnr kaol mtx,slty i/p,fri-v frm aggs,v pr vis 6790 por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 33 |
| RES_DEEP (ohm.m) | 29.61 | 33 |
| RES_SHALLOW (ohm.m) | 22.71 | 33 |

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 100% Sandstone (litho ASCII aggregate) TG 144.2U (drill-gas ASCII)

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
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 144.2375 U |
| mTVDss | -1194.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2067m: v pl brn,v pl gry,trnsl- clr,pred vf,mnr lse med,sbang-sbrnd, pred wl srt,frm sil cmt,tr-mnr kaol mtx,slty i/p,fri-v frm aggs,v pr vis 6790 por,fluor.
- **SILTSTONE** @ ~2070m: 44 6800 78 / 7 / 4 / 5 / 6 SILTSTONE:med gry,occ brn/gry, PV:12 arg-vf aren lams,micmic & carb spks, YP:21 frm,sbblky-occ sbfiss. GEL:10/19/21 WL:5.4
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 32 |
| RES_DEEP (ohm.m) | 32.87 | 32 |
| RES_SHALLOW (ohm.m) | 25.40 | 32 |

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 100% Sandstone (litho ASCII aggregate) TG 117.0U (drill-gas ASCII)

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
| Fluorescence | 100.0% mod bri-bri grn |
| Total Gas | 117.02352941176473 U |
| mTVDss | -1195.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2067m: v pl brn,v pl gry,trnsl- clr,pred vf,mnr lse med,sbang-sbrnd, pred wl srt,frm sil cmt,tr-mnr kaol mtx,slty i/p,fri-v frm aggs,v pr vis 6790 por,fluor.
- **SILTSTONE** @ ~2070m: 44 6800 78 / 7 / 4 / 5 / 6 SILTSTONE:med gry,occ brn/gry, PV:12 arg-vf aren lams,micmic & carb spks, YP:21 frm,sbblky-occ sbfiss. GEL:10/19/21 WL:5.4
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 45.09 | 33 |
| RES_SHALLOW (ohm.m) | 30.63 | 33 |

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 69% Sandstone (litho ASCII aggregate) TG 116.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 69.23076923076923 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 116.48125 U |
| mTVDss | -1195.09 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: 44 6800 78 / 7 / 4 / 5 / 6 SILTSTONE:med gry,occ brn/gry, PV:12 arg-vf aren lams,micmic & carb spks, YP:21 frm,sbblky-occ sbfiss. GEL:10/19/21 WL:5.4
- **SANDSTONE** @ ~2070m: 60k SANDSTONE:v pl brn-v pl gry,trnsl, vf aggs,20% med-occ crs clr lse qtz, 6820 sbang-sbrnd,gen wl srt,wk-frm sil cmt, mnr kaol mtx in vf aggs,tr slty lams, fri-frm aggs,v pr vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.0 | 33 |
| RES_DEEP (ohm.m) | 59.67 | 33 |
| RES_SHALLOW (ohm.m) | 33.70 | 33 |

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 21% Sandstone (litho ASCII aggregate) TG 116.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 21.428571428571427 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yell/grn |
| Total Gas | 116.64117647058822 U |
| mTVDss | -1195.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2082m: v pl brn,off wh,trnsl,vf, sbang,wl srt,frm sil cmt,tr-mnr kaol mtx,slty i/p,fri-frm aggs,v pr vis por. (64804903) SURVEY @ 6843.22' INC:88.97° AZ:315.23°T
- **SANDSTONE** @ ~2086m: clr-trnsl,pred med,mnr 6850 75 / 7 / 5 / 6 / 7 f-occ crs,sbrnd-sbang,mod srt,wk sil cmt,cln lse grs,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.3 | 33 |
| RES_DEEP (ohm.m) | 83.05 | 33 |
| RES_SHALLOW (ohm.m) | 36.17 | 33 |

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 44% Sandstone (litho ASCII aggregate) TG 108.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 43.75 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 97.75% mod bri yell/grn |
| Total Gas | 108.075 U |
| mTVDss | -1195.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2082m: v pl brn,off wh,trnsl,vf, sbang,wl srt,frm sil cmt,tr-mnr kaol mtx,slty i/p,fri-frm aggs,v pr vis por. (64804903) SURVEY @ 6843.22' INC:88.97° AZ:315.23°T
- **SANDSTONE** @ ~2086m: clr-trnsl,pred med,mnr 6850 75 / 7 / 5 / 6 / 7 f-occ crs,sbrnd-sbang,mod srt,wk sil cmt,cln lse grs,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 57.5 | 33 |
| RES_DEEP (ohm.m) | 70.50 | 33 |
| RES_SHALLOW (ohm.m) | 38.43 | 33 |

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 6% Sandstone (litho ASCII aggregate) TG 72.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 6.25 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 55.0% mod bri yell/grn |
| Total Gas | 72.68125 U |
| mTVDss | -1195.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2086m: clr-trnsl,pred med,mnr 6850 75 / 7 / 5 / 6 / 7 f-occ crs,sbrnd-sbang,mod srt,wk sil cmt,cln lse grs,fr inf por,fluor.
- **SANDSTONE** @ ~2088m: v pl brn-pl gry,trnsl, 6860 off wh,vf-f,sbang,mod wl srt,frm,sil cmt,tr kaol mtx,slty lams,fri-v frm aggsvprprvisporfluor aggs,v pr-pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.7 | 32 |
| RES_DEEP (ohm.m) | 43.25 | 32 |
| RES_SHALLOW (ohm.m) | 28.87 | 32 |

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 10% Sandstone (litho ASCII aggregate) TG 80.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 10.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 40.0% mod bri yell/grn |
| Total Gas | 80.10588235294117 U |
| mTVDss | -1195.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2088m: v pl brn-pl gry,trnsl, 6860 off wh,vf-f,sbang,mod wl srt,frm,sil cmt,tr kaol mtx,slty lams,fri-v frm aggsvprprvisporfluor aggs,v pr-pr vis por,fluor.
- **SANDSTONE** @ ~2097m: clr-trnsl,med-crs,sbang- sbrnd,occ ang,mod srt,wk sil cmt,cln, lse,med-crs qtz,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 40.15 | 33 |
| RES_SHALLOW (ohm.m) | 27.93 | 33 |

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Sandstone (litho ASCII aggregate) TG 98.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Grain Ordinal | 0 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 50.0% mod bri yell/grn |
| Total Gas | 98.36875 U |
| mTVDss | -1195.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2097m: clr-trnsl,med-crs,sbang- sbrnd,occ ang,mod srt,wk sil cmt,cln, lse,med-crs qtz,fr inf por,fluor.
- **SANDSTONE** @ ~2100m: clr,trnsl,mnr off wh, pred med-occ crs,sbrnd-sbang,wl srt, cln,lse med-crs qtz,fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 23 |
| RES_DEEP (ohm.m) | 41.03 | 24 |
| RES_SHALLOW (ohm.m) | 28.55 | 24 |

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 96 |
| Depth range | 1585 – 2110 m |
| Avg % Sandstone | 68.4% |
| Mudlog matches | 96 / 96 |
