# TERINGIE 6 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 04:53 UTC  
**Well:** TERINGIE 6 (TERINGIE 6)  
**TD:** 3444 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `TERINGIE 6_ML_Mudlog_Spud-3441.4_MD_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Teringie 6 Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Teringie_6` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1580.02 | DC30.xlsx |
| McKinlay Member (shallowest) | 1574.26 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1574.26 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2179.89 m MD
- 2318.27 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 2117.20 | 2119.17 | 1.97 | 2179.89 | 62.7 |
| 2288.00 | 2290.38 | 2.38 | 2318.27 | 30.3 |
| 2350.37 | 2350.56 | 0.19 | 2400.37 (assumed +50 m) | 50.0 | (2 entry pairs: 2350.37, 2775.14)

**McKinlay Member analysis window:** 1574.3 – 3444.4 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 2117–2180 m (overburden), 2288–2318 m (overburden), 2350–2400 m (overburden)

**Samples in McKinlay Member:** 167 of 184 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 17

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** TERINGIE 6 → `TERINGIE 6` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from the first Murta/McKinlay overburden entry in a sequence to the next lone McKinlay re-entry below (consecutive entry pairs are merged). If no re-entry is mapped, assume entry + 50 m MD. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1630 m MD — Interval 1630.0 – 1635.0 m

**Sample Description (spreadsheet):** Sample 1630m: 30 siderite in 60% Siltstone, 40% very fine to fine Sandstone, 90% dull  to  moderately bright FLUOR in SST. TG 10U

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90% dll - mod bri |
| Total Gas | 10.0 U |
| FeCO₃ in Siltstone | 30 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1620m: med-occ dk gry,vf aren-arg,tr micmic, vf SST lams,mod hd,sbblky-blky. 82 / 6 / 4 / 4 / 4
- **SANDSTONE** @ ~1624m: pl brn,off wh,trnsl,vf,sbang,wl srt, mod sil cmt,mnr-mod kaol mtx,mnr slty,fri aggs,v pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 13.6 | 33 |
| RES_DEEP (ohm.m) | 11.42 | 33 |
| RES_SHALLOW (ohm.m) | 11.78 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.36** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1640 m MD — Interval 1635.0 – 1645.0 m

**Sample Description (spreadsheet):** Sample 1640m: 20 siderite in 60% Siltstone, 40% very fine to fine Sandstone, 90% dull  to  moderately bright FLUOR in SST. TG 7U

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90% dll - mod bri |
| Total Gas | 7.0 U |
| FeCO₃ in Siltstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1620m: med-occ dk gry,vf aren-arg,tr micmic, vf SST lams,mod hd,sbblky-blky. 82 / 6 / 4 / 4 / 4
- **SANDSTONE** @ ~1624m: pl brn,off wh,trnsl,vf,sbang,wl srt, mod sil cmt,mnr-mod kaol mtx,mnr slty,fri aggs,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 12.8 | 65 |
| RES_DEEP (ohm.m) | 10.99 | 65 |
| RES_SHALLOW (ohm.m) | 11.21 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1650 m MD — Interval 1645.0 – 1655.0 m

**Sample Description (spreadsheet):** Sample 1650m: 5 siderite in 45% Siltstone, 55% very fine to fine Sandstone, 90% dull  to  moderately bright FLUOR in SST. TG 3U

| Property | Value |
|----------|-------|
| % Sandstone | 55.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90% dll - mod bri |
| Total Gas | 3.0 U |
| FeCO₃ in Siltstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1637m: lt-med gry,aren,arg i/p,micmic,com sndy lams,rr carb spks,mod hd,sbblky.
- **SANDSTONE** @ ~1637m: wh,off wh,vf-f,sbang,wl srt,sil cmt,rr sid cmt,com wh arg mtx,com slty lams,fri-mod hd,pr vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 12.7 | 66 |
| RES_DEEP (ohm.m) | 10.57 | 66 |
| RES_SHALLOW (ohm.m) | 10.93 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.37** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1660 m MD — Interval 1655.0 – 1665.0 m

**Sample Description (spreadsheet):** Sample 1660m: trace siderite in 45% Siltstone, 55% very fine to fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 2U

| Property | Value |
|----------|-------|
| % Sandstone | 55.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 2.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1652m: wh,off wh,vf-f,sbang,wl srt,sil cmt,rr sid cmt,com wh arg mtx,com slty lams,fri-mod hd,pr 1656 vis por,dll-occ mod bri fluor. 1256.9 82 / 6 / 5 / 0 / 7
- **SILTSTONE** @ ~1663m: lt-med gry,aren,arg i/p,micmic,com Change decanting tube & Gas line sndy lams,rr carb spks,mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 13.6 | 66 |
| RES_DEEP (ohm.m) | 11.12 | 66 |
| RES_SHALLOW (ohm.m) | 11.64 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.53** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1670 m MD — Interval 1665.0 – 1675.0 m

**Sample Description (spreadsheet):** Sample 1670m: trace siderite in 40% Siltstone, 60% very fine to fine Sandstone, 30% dull  to  moderately bright FLUOR in SST. TG 2U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 30% dll - mod bri |
| Total Gas | 2.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1652m: wh,off wh,vf-f,sbang,wl srt,sil cmt,rr sid cmt,com wh arg mtx,com slty lams,fri-mod hd,pr 1656 vis por,dll-occ mod bri fluor. 1256.9 82 / 6 / 5 / 0 / 7
- **SILTSTONE** @ ~1663m: lt-med gry,aren,arg i/p,micmic,com Change decanting tube & Gas line sndy lams,rr carb spks,mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 65 |
| RES_DEEP (ohm.m) | 14.58 | 65 |
| RES_SHALLOW (ohm.m) | 16.60 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1680 m MD — Interval 1675.0 – 1685.0 m

**Sample Description (spreadsheet):** Sample 1680m: 20 siderite in 55% Siltstone, 45% very fine to fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 10U

| Property | Value |
|----------|-------|
| % Sandstone | 45.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 10.0 U |
| FeCO₃ in Siltstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1663m: lt-med gry,aren,arg i/p,micmic,com Change decanting tube & Gas line sndy lams,rr carb spks,mod hd,sbblky.
- **LIMESTONE** @ ~1668m: lt-med gry brn,lt-med gry brn,micr,arg, 1257.6 aren i/p,sid,brit i/p,hd-v hd,ang,frac,blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 37.7 | 66 |
| RES_DEEP (ohm.m) | 24.19 | 66 |
| RES_SHALLOW (ohm.m) | 27.36 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.17** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1690 m MD — Interval 1685.0 – 1695.0 m

**Sample Description (spreadsheet):** Sample 1690m: 10 siderite in 50% Siltstone, 50% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 75U

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 75.0 U |
| FeCO₃ in Siltstone | 10 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: wh,off wh,vf-f,sbang,wl srt,sil cmt,sid cmt,com wh arg mtx,com sid frags,rr lths,fri-mod hd, 1684 pr-fr vis por,mod bri fluor. 1258.1 MCKINLAY MBR:
- **SANDSTONE** @ ~1690m: wh,off wh,lt gry,vf-f,sbang,wl srt,sil 1258.7 cmt,sid cmt,com wh arg mtx,com sid frags,rr lths, fri-mod hd,pr-fr vis por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 35.6 | 66 |
| RES_DEEP (ohm.m) | 29.13 | 66 |
| RES_SHALLOW (ohm.m) | 29.24 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1700 m MD — Interval 1695.0 – 1705.0 m

**Sample Description (spreadsheet):** Sample 1700m: 5 siderite in 15% Siltstone, 85% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 20U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 20.0 U |
| FeCO₃ in Siltstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: wh,off wh,vf-f,sbang,wl srt,sil cmt,sid cmt,com wh arg mtx,com sid frags,rr lths,fri-mod hd, 1684 pr-fr vis por,mod bri fluor. 1258.1 MCKINLAY MBR:
- **SANDSTONE** @ ~1690m: wh,off wh,lt gry,vf-f,sbang,wl srt,sil 1258.7 cmt,sid cmt,com wh arg mtx,com sid frags,rr lths, fri-mod hd,pr-fr vis por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 32.7 | 65 |
| RES_DEEP (ohm.m) | 26.12 | 65 |
| RES_SHALLOW (ohm.m) | 27.10 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1705.0 – 1715.0 m

**Sample Description (spreadsheet):** Sample 1710m: 5 siderite in 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 5U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 5.0 U |
| FeCO₃ in Siltstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1704m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1717m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr 17 12 2 5 0 9.8 srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.9 | 66 |
| RES_DEEP (ohm.m) | 23.93 | 66 |
| RES_SHALLOW (ohm.m) | 24.32 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1715.0 – 1725.0 m

**Sample Description (spreadsheet):** Sample 1720m: trace siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 4U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 4.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1704m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1717m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr 17 12 2 5 0 9.8 srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.4 | 65 |
| RES_DEEP (ohm.m) | 21.41 | 65 |
| RES_SHALLOW (ohm.m) | 21.68 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1725.0 – 1735.0 m

**Sample Description (spreadsheet):** Sample 1730m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 4U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 4.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1717m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr 17 12 2 5 0 9.8 srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1732m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.9 | 66 |
| RES_DEEP (ohm.m) | 19.25 | 66 |
| RES_SHALLOW (ohm.m) | 19.71 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.46** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1735.0 – 1745.0 m

**Sample Description (spreadsheet):** Sample 1740m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 5U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 5.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1732m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1740m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,tr mic,tr frstd qtz, 74 / 6 / 5 / 7 / 8 116U fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.1 | 66 |
| RES_DEEP (ohm.m) | 17.49 | 66 |
| RES_SHALLOW (ohm.m) | 18.22 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.72** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1745.0 – 1755.0 m

**Sample Description (spreadsheet):** Sample 1750m: trace siderite in 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 49.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1732m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,occ frstd qtz, fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1740m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,tr mic,tr frstd qtz, 74 / 6 / 5 / 7 / 8 116U fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.1 | 65 |
| RES_DEEP (ohm.m) | 17.71 | 65 |
| RES_SHALLOW (ohm.m) | 18.93 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1755.0 – 1765.0 m

**Sample Description (spreadsheet):** Sample 1760m: trace siderite in 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 138U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 138.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: wh,off wh,clr,trnsl,vf-f,occ crs grs,pr srt,sbang,sil cmt,com wh arg mtx,tr mic,tr frstd qtz, 74 / 6 / 5 / 7 / 8 116U fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1752m: off wh,vf-f,occ lse crs grs,pr srt, sbang-sbrnd,sil cmt,com wh arg mtx,occ frstd qtz grs,tr mic,tr sid frags,fri-mod hd,pr-fr vis por,mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.8 | 66 |
| RES_DEEP (ohm.m) | 18.18 | 66 |
| RES_SHALLOW (ohm.m) | 19.43 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.25** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1765.0 – 1775.0 m

**Sample Description (spreadsheet):** Sample 1770m: trace siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 141.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1752m: off wh,vf-f,occ lse crs grs,pr srt, sbang-sbrnd,sil cmt,com wh arg mtx,occ frstd qtz grs,tr mic,tr sid frags,fri-mod hd,pr-fr vis por,mod bri fluor.
- **SANDSTONE** @ ~1760m: off wh,vf-f,wl srt,sbang-sbrnd,sil cmt, com wh arg mtx,tr mic,tr sid frags,fri-mod hd,pr-fr vis por,com pipe scale,mod bri fluor
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.9 | 65 |
| RES_DEEP (ohm.m) | 18.05 | 65 |
| RES_SHALLOW (ohm.m) | 18.91 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.86** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1775.0 – 1785.0 m

**Sample Description (spreadsheet):** Sample 1780m: trace siderite in 5% Siltstone, 95% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 1U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 1.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: off wh,vf-f,wl srt,sbang-sbrnd,sil cmt, com wh arg mtx,tr mic,tr sid frags,fri-mod hd,pr-fr vis por,com pipe scale,mod bri fluor
- **SANDSTONE** @ ~1770m: 118k SANDSTONE:off wh,vf-f,wl srt,sbang,sil cmt,com 73 / 6 / 5 / 7 / 9 wh arg mtx,tr mic,tr sid frags,fri-mod hd,pr-fr vis por, com pipe scale,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 66 |
| RES_DEEP (ohm.m) | 18.84 | 66 |
| RES_SHALLOW (ohm.m) | 19.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1785.0 – 1795.0 m

**Sample Description (spreadsheet):** Sample 1790m: trace siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 25.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: off wh,vf-f,wl srt,sbang,sil cmt,com wh arg mtx,tr mic,tr sid frags,fri-mod hd,pr-fr vis por, com pipe scale,mod bri-bri fluor.
- **SANDSTONE** @ ~1792m: off wh,trnsl,clr,vf-f,pr srt,com crs lse grs,sbang,sil cmt,com wh arg mtx,com frstd qtz,tr mic,tr carb spks,fri-mod hd,pr-fr vis por,mod bri-bri fluor. 17 12 9 6 6 0.2 M VD D : : 1 1 7 2 9 6 6 0 . . 1 2 m m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.2 | 66 |
| RES_DEEP (ohm.m) | 20.45 | 66 |
| RES_SHALLOW (ohm.m) | 20.57 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.11** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1795.0 – 1805.0 m

**Sample Description (spreadsheet):** Sample 1800m: trace siderite in 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 126U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 126.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: off wh,vf-f,wl srt,sbang,sil cmt,com wh arg mtx,tr mic,tr sid frags,fri-mod hd,pr-fr vis por, com pipe scale,mod bri-bri fluor.
- **SANDSTONE** @ ~1792m: off wh,trnsl,clr,vf-f,pr srt,com crs lse grs,sbang,sil cmt,com wh arg mtx,com frstd qtz,tr mic,tr carb spks,fri-mod hd,pr-fr vis por,mod bri-bri fluor. 17 12 9 6 6 0.2 M VD D : : 1 1 7 2 9 6 6 0 . . 1 2 m m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.9 | 65 |
| RES_DEEP (ohm.m) | 23.83 | 65 |
| RES_SHALLOW (ohm.m) | 24.04 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.21** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1805.0 – 1815.0 m

**Sample Description (spreadsheet):** Sample 1810m: 5 siderite in 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 130.0 U |
| FeCO₃ in Siltstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1792m: off wh,trnsl,clr,vf-f,pr srt,com crs lse grs,sbang,sil cmt,com wh arg mtx,com frstd qtz,tr mic,tr carb spks,fri-mod hd,pr-fr vis por,mod bri-bri fluor. 17 12 9 6 6 0.2 M VD D : : 1 1 7 2 9 6 6 0 . . 1 2 m m
- **SANDSTONE** @ ~1812m: off wh,vf-f,wl srt,sbrnd-sbang,sil cmt, tr wh arg mtx,tr mic,rr slty lams,fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.9 | 66 |
| RES_DEEP (ohm.m) | 22.80 | 66 |
| RES_SHALLOW (ohm.m) | 24.48 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.68** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1815.0 – 1825.0 m

**Sample Description (spreadsheet):** Sample 1820m: trace siderite in 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 143U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 143.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1812m: off wh,vf-f,wl srt,sbrnd-sbang,sil cmt, tr wh arg mtx,tr mic,rr slty lams,fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1824m: off wh,trnsl,clr,vf-f,occ lse crs grs,pr srt,sbang-sbrnd,sil cmt,tr wh arg mtx,loc com frstd qtz grs,tr mic,fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.4 | 66 |
| RES_DEEP (ohm.m) | 20.88 | 66 |
| RES_SHALLOW (ohm.m) | 21.86 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1825.0 – 1835.0 m

**Sample Description (spreadsheet):** Sample 1830m: trace siderite in 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 100.0 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1812m: off wh,vf-f,wl srt,sbrnd-sbang,sil cmt, tr wh arg mtx,tr mic,rr slty lams,fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1824m: off wh,trnsl,clr,vf-f,occ lse crs grs,pr srt,sbang-sbrnd,sil cmt,tr wh arg mtx,loc com frstd qtz grs,tr mic,fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.0 | 65 |
| RES_DEEP (ohm.m) | 20.73 | 65 |
| RES_SHALLOW (ohm.m) | 21.04 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.31** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1835.0 – 1845.0 m

**Sample Description (spreadsheet):** Sample 1840m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 122U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 122.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1824m: off wh,trnsl,clr,vf-f,occ lse crs grs,pr srt,sbang-sbrnd,sil cmt,tr wh arg mtx,loc com frstd qtz grs,tr mic,fri-mod hd,pr-fr vis por,mod bri-bri fluor.
- **SANDSTONE** @ ~1823m: clr,trnsl,off wh,vf-crs,pr srt, sbang-sbrnd,sil cmt,tr wh arg mtx,rr slty lams,rr mic, rr liths,lse-mod hd,fr-gd vis & inf por,dll-mod bri 1836 fluor. 1259.6
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.1 | 66 |
| RES_DEEP (ohm.m) | 22.05 | 66 |
| RES_SHALLOW (ohm.m) | 22.25 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1845.0 – 1855.0 m

**Sample Description (spreadsheet):** Sample 1850m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 98U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-v crs (max: C) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 98.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1844m: clr,trnsl,off wh,wh,vf-v crs,pr srt, sbang-sbrnd,sil cmt,tr wh arg mtx,qtz ovrgths,com frstd qtz,tr mic,lse-mod hd aggs,gd vis & inf por, dll-mod bri fluor.
- **SANDSTONE** @ ~1852m: clr,trnsl,off wh,wh,vf-v crs,pr srt, sbrnd-sbang,sil cmt,tr wh arg mtx,qtz ovrgths,frstd qtz grs,rr mic,rr liths,lse-mod hd aggs,gd vis & inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.8 | 65 |
| RES_DEEP (ohm.m) | 22.14 | 65 |
| RES_SHALLOW (ohm.m) | 22.12 | 65 |
| **Δ Res (Deep − Shallow)** | **0.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-v crs (max: C) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 60.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1844m: clr,trnsl,off wh,wh,vf-v crs,pr srt, sbang-sbrnd,sil cmt,tr wh arg mtx,qtz ovrgths,com frstd qtz,tr mic,lse-mod hd aggs,gd vis & inf por, dll-mod bri fluor.
- **SANDSTONE** @ ~1852m: clr,trnsl,off wh,wh,vf-v crs,pr srt, sbrnd-sbang,sil cmt,tr wh arg mtx,qtz ovrgths,frstd qtz grs,rr mic,rr liths,lse-mod hd aggs,gd vis & inf por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.0 | 66 |
| RES_DEEP (ohm.m) | 20.43 | 66 |
| RES_SHALLOW (ohm.m) | 20.49 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.07** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 99.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1852m: clr,trnsl,off wh,wh,vf-v crs,pr srt, sbrnd-sbang,sil cmt,tr wh arg mtx,qtz ovrgths,frstd qtz grs,rr mic,rr liths,lse-mod hd aggs,gd vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~1860m: trnsl,off wh,wh,lt gry,vf-v,rr crs,mod srt,sbrnd-sbang,sil cmt,tr wh arg mtx,frstd qtz,tr mic, 1864 rr slty lams,fri-mod hd,pr-fr vis por,mod bri-bri fluor. 1259.9
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.1 | 66 |
| RES_DEEP (ohm.m) | 20.35 | 66 |
| RES_SHALLOW (ohm.m) | 20.52 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.17** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1875.0 – 1885.0 m

**Sample Description (spreadsheet):** Sample 1880m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 107.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: trnsl,off wh,wh,lt gry,vf-v,rr crs,mod srt,sbrnd-sbang,sil cmt,tr wh arg mtx,frstd qtz,tr mic, 1864 rr slty lams,fri-mod hd,pr-fr vis por,mod bri-bri fluor. 1259.9
- **SANDSTONE** @ ~1868m: off wh,lt gry,vf-f,wl srt qtz, 1260.0 sbrnd-sbang,sil cmt,tr wh arg mtx,tr mic,rr slty lams, fri-mod hd,pr-fr vis por,mod bri-bri fluor. 60 / 6 / 6 / 11 / 17 116U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.1 | 65 |
| RES_DEEP (ohm.m) | 20.14 | 65 |
| RES_SHALLOW (ohm.m) | 20.40 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1885.0 – 1895.0 m

**Sample Description (spreadsheet):** Sample 1890m: 0% Siltstone, 100% fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: off wh,lt gry,vf-f,wl srt qtz, 1884 sbrnd-sbang,sil cmt,tr wh arg mtx,rr mic,occ slty 1260.3 lams,fri-mod hd,pr-fr vis por,dll-mod br fluor. FLUOR: 1880.0-1920.0m; 100% of SST; dll-bri yel grn evn fluor,slw-occ fst bldg ct,
- **SANDSTONE** @ ~1892m: off wh,lt gry,clr,trnsl,f grs,wl srt,rr lse crs grs,sbang-sbrnd,sil cmt,tr wh arg mtx,rr mic,tr slty lams,tr sid frags,tr frstd qtz,rr liths,fri-mod hd, pr-fr vis por,mod br fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.0 | 66 |
| RES_DEEP (ohm.m) | 19.67 | 66 |
| RES_SHALLOW (ohm.m) | 20.13 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.46** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1895.0 – 1905.0 m

**Sample Description (spreadsheet):** Sample 1900m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 113.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: off wh,lt gry,vf-f,wl srt qtz, 1884 sbrnd-sbang,sil cmt,tr wh arg mtx,rr mic,occ slty 1260.3 lams,fri-mod hd,pr-fr vis por,dll-mod br fluor. FLUOR: 1880.0-1920.0m; 100% of SST; dll-bri yel grn evn fluor,slw-occ fst bldg ct,
- **SANDSTONE** @ ~1892m: off wh,lt gry,clr,trnsl,f grs,wl srt,rr lse crs grs,sbang-sbrnd,sil cmt,tr wh arg mtx,rr mic,tr slty lams,tr sid frags,tr frstd qtz,rr liths,fri-mod hd, pr-fr vis por,mod br fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.4 | 66 |
| RES_DEEP (ohm.m) | 19.89 | 66 |
| RES_SHALLOW (ohm.m) | 20.52 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.63** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1905.0 – 1915.0 m

**Sample Description (spreadsheet):** Sample 1910m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 98U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 98.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1892m: off wh,lt gry,clr,trnsl,f grs,wl srt,rr lse crs grs,sbang-sbrnd,sil cmt,tr wh arg mtx,rr mic,tr slty lams,tr sid frags,tr frstd qtz,rr liths,fri-mod hd, pr-fr vis por,mod br fluor.
- **SANDSTONE** @ ~1904m: off wh,v pl gry,pl brn i/p,clr-trnsl,pred vf,rr med/crs lse qtz,gen wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,tr slty lams,frm-fri aggs,pr vis por, mod bri fluor. 1908 81 / 6 / 5 / 4 / 4 138U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.4 | 66 |
| RES_DEEP (ohm.m) | 19.13 | 66 |
| RES_SHALLOW (ohm.m) | 19.69 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.57** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1915.0 – 1925.0 m

**Sample Description (spreadsheet):** Sample 1920m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 139U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 139.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1904m: off wh,v pl gry,pl brn i/p,clr-trnsl,pred vf,rr med/crs lse qtz,gen wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,tr slty lams,frm-fri aggs,pr vis por, mod bri fluor. 1908 81 / 6 / 5 / 4 / 4 138U
- **SANDSTONE** @ ~1912m: off wh,v pl gry,pl brn i/p,clr-trnsl,pred vf,rr med/crs lse qtz,gen wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,tr slty lams,frm-fri aggs,pr vis por, 19 12 1 6 6 0.7 mod bri fluor. 62 / 6 / 6 / 10 / 16
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.8 | 66 |
| RES_DEEP (ohm.m) | 18.23 | 66 |
| RES_SHALLOW (ohm.m) | 18.50 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1925.0 – 1935.0 m

**Sample Description (spreadsheet):** Sample 1930m: 0% Siltstone, 100% fine to coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 240.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1912m: off wh,v pl gry,pl brn i/p,clr-trnsl,pred vf,rr med/crs lse qtz,gen wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,tr slty lams,frm-fri aggs,pr vis por, 19 12 1 6 6 0.7 mod bri fluor. 62 / 6 / 6 / 10 / 16
- **SANDSTONE** @ ~1932m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.4 | 65 |
| RES_DEEP (ohm.m) | 17.90 | 65 |
| RES_SHALLOW (ohm.m) | 17.60 | 65 |
| **Δ Res (Deep − Shallow)** | **0.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1935.0 – 1945.0 m

**Sample Description (spreadsheet):** Sample 1940m: 0% Siltstone, 100% very fine to fine Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 229.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~1944m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor. 76 / 6 / 4 / 6 / 8
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.7 | 66 |
| RES_DEEP (ohm.m) | 21.13 | 66 |
| RES_SHALLOW (ohm.m) | 20.05 | 66 |
| **Δ Res (Deep − Shallow)** | **1.08** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1945.0 – 1955.0 m

**Sample Description (spreadsheet):** Sample 1950m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1932m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~1944m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor. 76 / 6 / 4 / 6 / 8
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.1 | 66 |
| RES_DEEP (ohm.m) | 21.07 | 66 |
| RES_SHALLOW (ohm.m) | 20.34 | 66 |
| **Δ Res (Deep − Shallow)** | **0.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1955.0 – 1965.0 m

**Sample Description (spreadsheet):** Sample 1960m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1944m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor. 76 / 6 / 4 / 6 / 8
- **SANDSTONE** @ ~1952m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor. 19 12 5 6 6 1.2 M VD D : : 1 1 9 2 5 6 6 1 . . 1 2 m m 75 / 6 / 5 / 6 / 8 231U azi :44.4 inc:89.2
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.5 | 65 |
| RES_DEEP (ohm.m) | 19.27 | 65 |
| RES_SHALLOW (ohm.m) | 19.45 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.17** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1965.0 – 1975.0 m

**Sample Description (spreadsheet):** Sample 1970m: 0% Siltstone, 100% very fine to coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% dll - mod bri |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1952m: off wh,pl brn,clr-trnsl,vf-mnr f,rr crs lse qtz,sbang-sbrnd,gen wl srt,wk-mod sil cmt,tr kaol mtx,frm-fri aggs,pr vis por,dll-mod bri fluor. 19 12 5 6 6 1.2 M VD D : : 1 1 9 2 5 6 6 1 . . 1 2 m m 75 / 6 / 5 / 6 / 8 231U azi :44.4 inc:89.2
- **SANDSTONE** @ ~1964m: off wh, pl brn,trnsl-clr,vf-f aggs,com lse med-crs,sbang-sbrnd,mod srt,wk-mod sil cmt,tr kaol mtx,com cln,frm-mod hd vf aggs,com lse med-crs qtz,pr vis-fr inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.4 | 66 |
| RES_DEEP (ohm.m) | 18.27 | 66 |
| RES_SHALLOW (ohm.m) | 19.00 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.73** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1975.0 – 1985.0 m

**Sample Description (spreadsheet):** Sample 1980m: 0% Siltstone, 100% fine to coarse Sandstone, 40% dull FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 40% dll |
| Total Gas | 155.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1964m: off wh, pl brn,trnsl-clr,vf-f aggs,com lse med-crs,sbang-sbrnd,mod srt,wk-mod sil cmt,tr kaol mtx,com cln,frm-mod hd vf aggs,com lse med-crs qtz,pr vis-fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~1968m: clr-trnsl,off wh,pred f-med,mnr crs, sbang-sbrnd,mod srt,wk sil cmt,pred cln,com lse f-med,fr inf por,dll fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.2 | 65 |
| RES_DEEP (ohm.m) | 19.24 | 65 |
| RES_SHALLOW (ohm.m) | 19.80 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.56** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1985.0 – 1995.0 m

**Sample Description (spreadsheet):** Sample 1990m: 0% Siltstone, 100% fine to coarse Sandstone, 30% dull  FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 30% dll  |
| Total Gas | 166.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1983m: 9.7 SANDSTONE:clr-trnsl,off wh,pred f-med,mnr crs, Ck: 1/2 sbang-sbrnd,mod srt,wk sil cmt,pred cln,com lse Cl: 120k f-med,fr inf por,dll fluor.
- **SANDSTONE** @ ~1992m: clr-trnsl,off wh,pred vf-f,occ med, sbang-sbrnd,mod wl srt,wk sil cmt,gen cln,com lse f qtz,pr-mod inf por,dll fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.1 | 66 |
| RES_DEEP (ohm.m) | 17.55 | 66 |
| RES_SHALLOW (ohm.m) | 18.06 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1995.0 – 2005.0 m

**Sample Description (spreadsheet):** Sample 2000m: 0% Siltstone, 100% very fine to medium Sandstone, 10% dull  FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 10% dll  |
| Total Gas | 175.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1983m: 9.7 SANDSTONE:clr-trnsl,off wh,pred f-med,mnr crs, Ck: 1/2 sbang-sbrnd,mod srt,wk sil cmt,pred cln,com lse Cl: 120k f-med,fr inf por,dll fluor.
- **SANDSTONE** @ ~1992m: clr-trnsl,off wh,pred vf-f,occ med, sbang-sbrnd,mod wl srt,wk sil cmt,gen cln,com lse f qtz,pr-mod inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.9 | 66 |
| RES_DEEP (ohm.m) | 17.64 | 66 |
| RES_SHALLOW (ohm.m) | 17.99 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.35** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: 0% Siltstone, 100% very fine to medium Sandstone, 30% dull to moderately bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 30% dll-mod bri |
| Total Gas | 192.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1992m: clr-trnsl,off wh,pred vf-f,occ med, sbang-sbrnd,mod wl srt,wk sil cmt,gen cln,com lse f qtz,pr-mod inf por,dll fluor.
- **SANDSTONE** @ ~2004m: clr-trnsl,off wh,pred vf-f,occ med, sbang-sbrnd,mod wl srt,wk sil cmt,gen cln,com lse f qtz,pr-mod inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.8 | 65 |
| RES_DEEP (ohm.m) | 18.42 | 65 |
| RES_SHALLOW (ohm.m) | 18.74 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: 0% Siltstone, 100% very fine to fine Sandstone, 60% dull to moderately bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 60% dll-mod bri |
| Total Gas | 170.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2004m: clr-trnsl,off wh,pred vf-f,occ med, sbang-sbrnd,mod wl srt,wk sil cmt,gen cln,com lse f qtz,pr-mod inf por,dll fluor.
- **SANDSTONE** @ ~2012m: pl brn,off wh,trnsl-clr,pred vf aggs, mnr f-med lse qtz,sbang-sbrnd,gen wl srt,frm-mod 73 / 6 / 5 / 7 / 9 198U strg sil cmt,tr kaol mtx,frm aggs,pr vis por,dll-mod 2016 bri fluor. 1261.6
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.5 | 66 |
| RES_DEEP (ohm.m) | 18.48 | 66 |
| RES_SHALLOW (ohm.m) | 19.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.59** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: 0% Siltstone, 100% very fine to fine Sandstone, 30% dull to moderately bright FLUOR in SST. TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 30% dll-mod bri |
| Total Gas | 137.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2012m: pl brn,off wh,trnsl-clr,pred vf aggs, mnr f-med lse qtz,sbang-sbrnd,gen wl srt,frm-mod 73 / 6 / 5 / 7 / 9 198U strg sil cmt,tr kaol mtx,frm aggs,pr vis por,dll-mod 2016 bri fluor. 1261.6
- **SANDSTONE** @ ~2024m: pl brn,off wh,trnsl-clr,pred vf aggs, mnr f-med lse qtz,sbang-sbrnd,gen wl srt,frm-mod strg sil cmt,tr kaol mtx,frm aggs,pr vis por,dll-mod bri fluor. 20 12 2 6 8 1.5 7 2 / 6 / 5 / 7 / 10 178U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.9 | 66 |
| RES_DEEP (ohm.m) | 19.07 | 66 |
| RES_SHALLOW (ohm.m) | 19.37 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2035.0 – 2045.0 m

**Sample Description (spreadsheet):** Sample 2040m: 0% Siltstone, 100% fine Sandstone, 30% dull to moderately bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 30% dll-mod bri |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2024m: pl brn,off wh,trnsl-clr,pred vf aggs, mnr f-med lse qtz,sbang-sbrnd,gen wl srt,frm-mod strg sil cmt,tr kaol mtx,frm aggs,pr vis por,dll-mod bri fluor. 20 12 2 6 8 1.5 7 2 / 6 / 5 / 7 / 10 178U
- **SANDSTONE** @ ~2044m: clr-trnsl,mnr pl brn,gen f,mnr vf aggs, mnr med,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln, com fri-lse f qtz,pr-fr inf por,dll-occ mod fluor. 73 / 6 / 5 / 7 / 9 194U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 65 |
| RES_DEEP (ohm.m) | 18.58 | 65 |
| RES_SHALLOW (ohm.m) | 19.16 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.58** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: 0% Siltstone, 100% fine Sandstone, 30% dull to moderately bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 30% dll-mod bri |
| Total Gas | 170.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2044m: clr-trnsl,mnr pl brn,gen f,mnr vf aggs, mnr med,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln, com fri-lse f qtz,pr-fr inf por,dll-occ mod fluor. 73 / 6 / 5 / 7 / 9 194U
- **SANDSTONE** @ ~2052m: clr-trnsl,mnr pl brn,gen f,mnr vf aggs, mnr med,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln, com fri-lse f qtz,pr-fr inf por,dll-occ mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.5 | 66 |
| RES_DEEP (ohm.m) | 18.36 | 66 |
| RES_SHALLOW (ohm.m) | 18.97 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.61** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: 0% Siltstone, 100% fine Sandstone, 10% dull to moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 10% dll-mod bri |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2044m: clr-trnsl,mnr pl brn,gen f,mnr vf aggs, mnr med,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln, com fri-lse f qtz,pr-fr inf por,dll-occ mod fluor. 73 / 6 / 5 / 7 / 9 194U
- **SANDSTONE** @ ~2052m: clr-trnsl,mnr pl brn,gen f,mnr vf aggs, mnr med,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln, com fri-lse f qtz,pr-fr inf por,dll-occ mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.9 | 65 |
| RES_DEEP (ohm.m) | 18.04 | 65 |
| RES_SHALLOW (ohm.m) | 18.45 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.41** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: 0% Siltstone, 100% fine Sandstone, 40% dull to moderately bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 40% dll-mod bri |
| Total Gas | 163.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2052m: clr-trnsl,mnr pl brn,gen f,mnr vf aggs, mnr med,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln, com fri-lse f qtz,pr-fr inf por,dll-occ mod bri fluor.
- **SANDSTONE** @ ~2064m: clr-trnsl,occ off wh,mnr pl brn,pred vf-f,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln,com lse f qtz,pr vis-fr por,fluor. 73 / 6 / 5 / 7 / 9 207U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.7 | 66 |
| RES_DEEP (ohm.m) | 18.94 | 66 |
| RES_SHALLOW (ohm.m) | 19.23 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.29** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 0% Siltstone, 100% fine Sandstone, 20% dull to moderately bright FLUOR in SST. TG 225U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 20% dll-mod bri |
| Total Gas | 225.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2064m: clr-trnsl,occ off wh,mnr pl brn,pred vf-f,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln,com lse f qtz,pr vis-fr por,fluor. 73 / 6 / 5 / 7 / 9 207U
- **SANDSTONE** @ ~2072m: clr-trnsl,occ off wh,mnr pl brn,pred vf-f,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln,com lse f qtz,pr vis-fr por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.9 | 66 |
| RES_DEEP (ohm.m) | 20.13 | 66 |
| RES_SHALLOW (ohm.m) | 20.90 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.77** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: 0% Siltstone, 100% very fine Sandstone, 60% dull to moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: VF) |
| Fluorescence | 60% dll-mod bri |
| Total Gas | 175.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2072m: clr-trnsl,occ off wh,mnr pl brn,pred vf-f,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln,com lse f qtz,pr vis-fr por,fluor.
- **SANDSTONE** @ ~2076m: pl brn,off wh,trnsl-clr,gen vf aggs, vf-mnr f,sbang-sbrnd,wl srt,mod strg sil cmt, mnr-occ mod kaol mtx,tr liths,frm-mod hd aggs,pr vis por,dll-mod bri fluor. 2084 FLUOR: 2080.0-2130.0m; 30-80% of SST;
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.6 | 65 |
| RES_DEEP (ohm.m) | 21.22 | 65 |
| RES_SHALLOW (ohm.m) | 22.12 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.90** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 0% Siltstone, 100% very fine to fine Sandstone, 40% dull to moderately bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 40% dll-mod bri |
| Total Gas | 202.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2092m: clr-trnsl,occ off wh,mnr pl brn,pred vf-f,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln,com lse f qtz,pr vis-fr por,fluor.
- **SANDSTONE** @ ~2104m: clr-trnsl,off wh,pl brn i/p,vf aggs,gen f-occ med lse qtz,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx,gen cln,fri aggs,com lse f-occ med qtz,pr vis-fr inf por,dim-occ mod bri fluor. 76 / 6 / 4 / 6 / 8 283U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.2 | 66 |
| RES_DEEP (ohm.m) | 19.37 | 66 |
| RES_SHALLOW (ohm.m) | 19.59 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Siltstone, 100% very fine to medium Sandstone, 30% dull to moderately bright FLUOR in SST. TG 221U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 30% dll-mod bri |
| Total Gas | 221.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2092m: clr-trnsl,occ off wh,mnr pl brn,pred vf-f,sbang-sbrnd,gen wl srt,wk sil cmt,gen cln,com lse f qtz,pr vis-fr por,fluor.
- **SANDSTONE** @ ~2104m: clr-trnsl,off wh,pl brn i/p,vf aggs,gen f-occ med lse qtz,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx,gen cln,fri aggs,com lse f-occ med qtz,pr vis-fr inf por,dim-occ mod bri fluor. 76 / 6 / 4 / 6 / 8 283U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 33.2 | 65 |
| RES_DEEP (ohm.m) | 29.59 | 65 |
| RES_SHALLOW (ohm.m) | 28.99 | 65 |
| **Δ Res (Deep − Shallow)** | **0.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 0% Siltstone, 100% very fine to medium Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 70% dll - mod bri |
| Total Gas | 155.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2172m: pl brn,pl gry,trnsl-clr i/p,com vf aggs, occ f-med lse qtz,sbang-sbrnd,mod wl srt,mod sil cmt i/p,mnr kaol mtx in aggs,com lse f-occ med qtz, 2176 fri-mod hd aggs,pr vis por,fr inf por i/p,dll-occ mod 1259.7 bri fluor.
- **SANDSTONE** @ ~2184m: pl brn,pl gry,trnsl-clr i/p,com vf aggs, occ f-med lse qtz,sbang-sbrnd,mod wl srt,mod sil cmt i/p,mnr kaol mtx in aggs,com lse f-occ med qtz, fri-mod hd aggs,pr vis por,fr inf por i/p,dll-occ mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.4 | 65 |
| RES_DEEP (ohm.m) | 19.86 | 65 |
| RES_SHALLOW (ohm.m) | 19.87 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.01** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 0% Siltstone, 100% very fine to medium Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 210.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2184m: pl brn,pl gry,trnsl-clr i/p,com vf aggs, occ f-med lse qtz,sbang-sbrnd,mod wl srt,mod sil cmt i/p,mnr kaol mtx in aggs,com lse f-occ med qtz, fri-mod hd aggs,pr vis por,fr inf por i/p,dll-occ mod bri fluor.
- **SANDSTONE** @ ~2192m: pl brn,pl gry,trnsl-clr i/p,com vf aggs, occ f-med lse qtz,sbang-sbrnd,mod wl srt,mod sil cmt i/p,mnr kaol mtx in aggs,com lse f-occ med qtz, fri-mod hd aggs,pr vis por,fr inf por i/p,dll-occ mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.1 | 66 |
| RES_DEEP (ohm.m) | 22.85 | 66 |
| RES_SHALLOW (ohm.m) | 22.62 | 66 |
| **Δ Res (Deep − Shallow)** | **0.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 0% Siltstone, 100% very fine to coarse Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 264U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 264.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2192m: pl brn,pl gry,trnsl-clr i/p,com vf aggs, occ f-med lse qtz,sbang-sbrnd,mod wl srt,mod sil cmt i/p,mnr kaol mtx in aggs,com lse f-occ med qtz, fri-mod hd aggs,pr vis por,fr inf por i/p,dll-occ mod bri fluor.
- **SANDSTONE** @ ~2204m: pl brn,clr-trnsl,off wh,gen vf aggs,occ lse f-med,mnr lse crs,sbang-sbrnd,mod wl srt,wk sil cmt,mnr kaol mtx in aggs,cln i/p,com lse f-occ med, rr crs qtz,pr vis-fr inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.7 | 66 |
| RES_DEEP (ohm.m) | 25.21 | 66 |
| RES_SHALLOW (ohm.m) | 25.22 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.01** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 0% Siltstone, 100% very fine to coarse Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2204m: pl brn,clr-trnsl,off wh,gen vf aggs,occ lse f-med,mnr lse crs,sbang-sbrnd,mod wl srt,wk sil cmt,mnr kaol mtx in aggs,cln i/p,com lse f-occ med, rr crs qtz,pr vis-fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2212m: pl brn,clr-trnsl,off wh,gen vf aggs,occ lse f-med,mnr lse crs,sbang-sbrnd,mod wl srt,wk sil cmt,mnr kaol mtx in aggs,cln i/p,com lse f-occ med, rr crs qtz,pr vis-fr inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 29.5 | 65 |
| RES_DEEP (ohm.m) | 24.72 | 65 |
| RES_SHALLOW (ohm.m) | 25.35 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.64** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2212m: pl brn,clr-trnsl,off wh,gen vf aggs,occ lse f-med,mnr lse crs,sbang-sbrnd,mod wl srt,wk sil cmt,mnr kaol mtx in aggs,cln i/p,com lse f-occ med, rr crs qtz,pr vis-fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2224m: clr-trnsl,off wh,f-crs,dom f, sbang-sbrnd,mod wl srt, sil cmt,tr wh agg mtx,tr mic, lse-mod hd aggs,fr vis & inf por,mod bri-bri fluor. 27-12-2024
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 31.7 | 66 |
| RES_DEEP (ohm.m) | 23.51 | 66 |
| RES_SHALLOW (ohm.m) | 25.79 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.29** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 145.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2224m: clr-trnsl,off wh,f-crs,dom f, sbang-sbrnd,mod wl srt, sil cmt,tr wh agg mtx,tr mic, lse-mod hd aggs,fr vis & inf por,mod bri-bri fluor. 27-12-2024
- **SANDSTONE** @ ~2232m: clr-trnsl,f-med,rr crs,sbrnd-sbang, mod srt,wk sil cmt,nil vis mtx,cln & lse,tr mic,fr vis & inf por,mod bri-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.2 | 65 |
| RES_DEEP (ohm.m) | 19.24 | 65 |
| RES_SHALLOW (ohm.m) | 19.84 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.60** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 0% Siltstone, 100% fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2232m: clr-trnsl,f-med,rr crs,sbrnd-sbang, mod srt,wk sil cmt,nil vis mtx,cln & lse,tr mic,fr vis & inf por,mod bri-bri fluor.
- **SANDSTONE** @ ~2244m: clr,trnsl,f-med,rr crs,sbrnd-sbang, mod srt,wk sil cmt,nil vis mtx,cln & lse,tr mic,fr vis & inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.1 | 66 |
| RES_DEEP (ohm.m) | 17.92 | 66 |
| RES_SHALLOW (ohm.m) | 18.42 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.50** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 233.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2244m: clr,trnsl,f-med,rr crs,sbrnd-sbang, mod srt,wk sil cmt,nil vis mtx,cln & lse,tr mic,fr vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2252m: clr,trnsl,f-occ med,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,cln & lse,tr mic,fr vis & inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.3 | 66 |
| RES_DEEP (ohm.m) | 20.43 | 66 |
| RES_SHALLOW (ohm.m) | 20.56 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 170.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2252m: clr,trnsl,f-occ med,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,cln & lse,tr mic,fr vis & inf por,mod bri fluor.
- **SANDSTONE** @ ~2264m: clr,trnsl,f-crs,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,cln & lse,rr mic,fr inf por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.7 | 65 |
| RES_DEEP (ohm.m) | 20.86 | 65 |
| RES_SHALLOW (ohm.m) | 20.84 | 65 |
| **Δ Res (Deep − Shallow)** | **0.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2275.0 – 2285.0 m

**Sample Description (spreadsheet):** Sample 2280m: 5% Siltstone, 95% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2264m: clr,trnsl,f-crs,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,cln & lse,rr mic,fr inf por,mod bri fluor.
- **SANDSTONE** @ ~2280m: clr,trnsl,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,cln & lse,rr mic,fr inf por,mod bri 22 12 8 5 4 9.7 fluor. 2288 77 / 6 / 4 / 6 / 7 269U 1259.7
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.0 | 66 |
| RES_DEEP (ohm.m) | 21.16 | 66 |
| RES_SHALLOW (ohm.m) | 20.50 | 66 |
| **Δ Res (Deep − Shallow)** | **0.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 185.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2312m: clr,trnsl,off wh,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,lse-fri aggs,tr mic, 2316 tr frstd qtz,fr vis & inf por,mod bri-bri fluor. 1260.2 2320 FLUOR: 2320.0-2359.0m; 100% of SST;
- **SANDSTONE** @ ~2324m: clr,trnsl,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.6 | 66 |
| RES_DEEP (ohm.m) | 20.57 | 66 |
| RES_SHALLOW (ohm.m) | 20.73 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: 5% Siltstone, 95% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 149.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2324m: clr,trnsl,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr inf por,mod bri fluor.
- **SANDSTONE** @ ~2332m: clr,trnsl,off wh,f-crs,pr srt,sbang,wk sil cmt,tr wh arg mtx,rr slty lams,fri-lse,tr mic,fr vis 2336 inf por,mod bri-bri fluor. 1260.6
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.4 | 66 |
| RES_DEEP (ohm.m) | 21.29 | 66 |
| RES_SHALLOW (ohm.m) | 21.55 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: 50% Siltstone, 50% fine to medium Sandstone, tr% dull FLUOR in SST. TG 87U

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | tr% dll |
| Total Gas | 87.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2392m: trnsl,wh,off wh,lt gry,vf-crs,dom f,pr srt,sbrnd-sbang,sil cmt,tr wh arg mtx,com slty lams, fri-lse,tr mic,tr liths,pr vis por,dim fluor.
- **SILTSTONE** @ ~2404m: lt-med gry,lt brn gry,aren,grd to vf SST, rr arg,micmic,tr liths,tr carb spks,mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.8 | 66 |
| RES_DEEP (ohm.m) | 16.11 | 66 |
| RES_SHALLOW (ohm.m) | 17.09 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 5% Siltstone, 95% fine to coarse Sandstone, 90% dull FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% dll |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2404m: lt-med gry,lt brn gry,aren,grd to vf SST, rr arg,micmic,tr liths,tr carb spks,mod hd,sbblky.
- **SANDSTONE** @ ~2412m: clr,trnsl,lt gry,f-crs,dom mod,mod srt, sbrnd-sbang,sil cmt,rr wh arg mtx,fri-lse aggs,tr mic, fr vis & inf por,dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 66 |
| RES_DEEP (ohm.m) | 17.66 | 66 |
| RES_SHALLOW (ohm.m) | 18.81 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.15** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 5% Siltstone, 95% fine to coarse Sandstone, 100% dull FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2412m: clr,trnsl,lt gry,f-crs,dom mod,mod srt, sbrnd-sbang,sil cmt,rr wh arg mtx,fri-lse aggs,tr mic, fr vis & inf por,dim fluor.
- **SANDSTONE** @ ~2420m: clr,trnsl,off wh,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,occ slty lams, fri-lse,tr mic,fr vis & inf por,dll fluor. 2424 79 / 6 / 4 / 5 / 6 156U 1261.3
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.7 | 65 |
| RES_DEEP (ohm.m) | 18.26 | 65 |
| RES_SHALLOW (ohm.m) | 19.01 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.75** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 10% Siltstone, 90% fine to coarse Sandstone, 90% dull FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% dll |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,off wh,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,occ slty lams, fri-lse,tr mic,fr vis & inf por,dll fluor. 2424 79 / 6 / 4 / 5 / 6 156U 1261.3
- **SILTSTONE** @ ~2432m: dk gry,aren,arg i/p,micmic,carb,mod 78 / 6 / 4 / 5 / 7 145U hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.3 | 66 |
| RES_DEEP (ohm.m) | 21.18 | 66 |
| RES_SHALLOW (ohm.m) | 21.56 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 5% Siltstone, 95% fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 165.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2432m: dk gry,aren,arg i/p,micmic,carb,mod 78 / 6 / 4 / 5 / 7 145U hd,sbblky.
- **SANDSTONE** @ ~2444m: clr,trnsl,off wh,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,occ slty lams, fri-lse,tr mic,fr vis & inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.5 | 65 |
| RES_DEEP (ohm.m) | 21.15 | 65 |
| RES_SHALLOW (ohm.m) | 21.67 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.52** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 5% Siltstone, 95% fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 149.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2444m: clr,trnsl,off wh,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr wh arg mtx,occ slty lams, fri-lse,tr mic,fr vis & inf por,dll fluor.
- **SANDSTONE** @ ~2452m: trnsl,off wh,f gr,occ med-crs,mod srt, sbrnd-sbang,sil cmt,tr wh arg mtx,tr slty lams,fri-occ lse,fr vis & inf por,dll-mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.4 | 66 |
| RES_DEEP (ohm.m) | 20.43 | 66 |
| RES_SHALLOW (ohm.m) | 20.30 | 66 |
| **Δ Res (Deep − Shallow)** | **0.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 154.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2452m: trnsl,off wh,f gr,occ med-crs,mod srt, sbrnd-sbang,sil cmt,tr wh arg mtx,tr slty lams,fri-occ lse,fr vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2464m: clr,trnsl,f-med,rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr inf por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.3 | 66 |
| RES_DEEP (ohm.m) | 20.61 | 66 |
| RES_SHALLOW (ohm.m) | 20.26 | 66 |
| **Δ Res (Deep − Shallow)** | **0.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 161.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2464m: clr,trnsl,f-med,rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2472m: clr,trnsl,f-med,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.9 | 65 |
| RES_DEEP (ohm.m) | 20.89 | 65 |
| RES_SHALLOW (ohm.m) | 20.67 | 65 |
| **Δ Res (Deep − Shallow)** | **0.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 188.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2472m: clr,trnsl,f-med,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr
- **SANDSTONE** @ ~2480m: clr,trnsl,f-med,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.7 | 66 |
| RES_DEEP (ohm.m) | 21.45 | 66 |
| RES_SHALLOW (ohm.m) | 21.41 | 66 |
| **Δ Res (Deep − Shallow)** | **0.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 155.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: clr,trnsl,f-med,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr inf por,mod bri fluor.
- **SANDSTONE** @ ~2492m: clr,trnsl,f-med,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr 2496 inf por,mod bri fluor. 1260.4
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.9 | 66 |
| RES_DEEP (ohm.m) | 21.49 | 66 |
| RES_SHALLOW (ohm.m) | 21.45 | 66 |
| **Δ Res (Deep − Shallow)** | **0.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2492m: clr,trnsl,f-med,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,fr 2496 inf por,mod bri fluor. 1260.4
- **SANDSTONE** @ ~2504m: clr-trnsl,v pl brn i/p,vf-f,rr med, 77 / 6 / 4 / 6 / 7 227U sbang-sbrnd,wl srt,wk sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.7 | 65 |
| RES_DEEP (ohm.m) | 20.82 | 65 |
| RES_SHALLOW (ohm.m) | 20.52 | 65 |
| **Δ Res (Deep − Shallow)** | **0.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2515.0 – 2525.0 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% f-med Sandstone, 100% mod bri FLUOR, TG 230.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2504m: clr-trnsl,v pl brn i/p,vf-f,rr med, 77 / 6 / 4 / 6 / 7 227U sbang-sbrnd,wl srt,wk sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2513m: clr-trnsl,v pl brn i/p,vf-f,rr med, sbang-sbrnd,wl srt,wk sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.1 | 66 |
| RES_DEEP (ohm.m) | 21.70 | 66 |
| RES_SHALLOW (ohm.m) | 21.60 | 66 |
| **Δ Res (Deep − Shallow)** | **0.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2525.0 – 2535.0 m

**Sample Description (spreadsheet):** Sample 2530m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% dll - mod bri |
| Total Gas | 225.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2513m: clr-trnsl,v pl brn i/p,vf-f,rr med, sbang-sbrnd,wl srt,wk sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2513m: pl brn,off wh,trnsl-clr,vf-f aggs,mnr med lse,sbang-sbrnd,wk-frm sil cmt,tr kaol mtx,fri aggs,pr vis por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.3 | 65 |
| RES_DEEP (ohm.m) | 21.14 | 65 |
| RES_SHALLOW (ohm.m) | 20.87 | 65 |
| **Δ Res (Deep − Shallow)** | **0.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2535.0 – 2545.0 m

**Sample Description (spreadsheet):** Sample 2540m: 0% Siltstone, 100% very fine to medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 225U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% dll - mod bri |
| Total Gas | 191.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2532m: pl brn,off wh,trnsl-clr,vf-f aggs,mnr med lse,sbang-sbrnd,wk-frm sil cmt,tr kaol mtx,fri aggs,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2544m: pl brn,off wh,trnsl-clr,vf-f aggs,mnr med lse,sbang-sbrnd,wk-frm sil cmt,tr kaol mtx,fri aggs,pr vis por,dll-mod bri fluor. CONTROL DRILLING FOR FORMATION
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.8 | 66 |
| RES_DEEP (ohm.m) | 19.33 | 66 |
| RES_SHALLOW (ohm.m) | 18.89 | 66 |
| **Δ Res (Deep − Shallow)** | **0.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2545.0 – 2555.0 m

**Sample Description (spreadsheet):** Sample 2550m: 0% Siltstone, 100% very fine to medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% dll - mod bri |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2532m: pl brn,off wh,trnsl-clr,vf-f aggs,mnr med lse,sbang-sbrnd,wk-frm sil cmt,tr kaol mtx,fri aggs,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2544m: pl brn,off wh,trnsl-clr,vf-f aggs,mnr med lse,sbang-sbrnd,wk-frm sil cmt,tr kaol mtx,fri aggs,pr vis por,dll-mod bri fluor. CONTROL DRILLING FOR FORMATION
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.4 | 66 |
| RES_DEEP (ohm.m) | 20.41 | 66 |
| RES_SHALLOW (ohm.m) | 20.14 | 66 |
| **Δ Res (Deep − Shallow)** | **0.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2555.0 – 2565.0 m

**Sample Description (spreadsheet):** Sample 2560m: 0% Siltstone, 100% very fine to medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 70% dll - mod bri |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2544m: pl brn,off wh,trnsl-clr,vf-f aggs,mnr med lse,sbang-sbrnd,wk-frm sil cmt,tr kaol mtx,fri aggs,pr vis por,dll-mod bri fluor. CONTROL DRILLING FOR FORMATION
- **SANDSTONE** @ ~2552m: clr-trnsl,off wh,pl brn i/p,vf-f aggs, 78 / 6 / 4 / 5 / 7 201U mnr med,rr crs,sbang-sbrnd,frm sil cmt,tr kaol mtx, com cln,fri-mod hd aggs,some lse med-rr crs qtz,pr 2556 vis por-fr inf por i/p,dll-mod bri fluor. 1260.4
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.1 | 65 |
| RES_DEEP (ohm.m) | 20.69 | 65 |
| RES_SHALLOW (ohm.m) | 20.32 | 65 |
| **Δ Res (Deep − Shallow)** | **0.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2565.0 – 2575.0 m

**Sample Description (spreadsheet):** Sample 2570m: 0% Siltstone, 100% very fine to medium Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2552m: clr-trnsl,off wh,pl brn i/p,vf-f aggs, 78 / 6 / 4 / 5 / 7 201U mnr med,rr crs,sbang-sbrnd,frm sil cmt,tr kaol mtx, com cln,fri-mod hd aggs,some lse med-rr crs qtz,pr 2556 vis por-fr inf por i/p,dll-mod bri fluor. 1260.4
- **SANDSTONE** @ ~2564m: clr-trnsl,off wh,pl brn i/p,vf-f aggs, mnr med,rr crs,sbang-sbrnd,frm sil cmt,tr kaol mtx, com cln,fri-mod hd aggs,some lse med-rr crs qtz,pr vis por-fr inf por i/p,dll-mod bri fluor. 7 5 / 7 / 5 / 6 / 7 198U MD:2566.6 m
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.7 | 66 |
| RES_DEEP (ohm.m) | 18.47 | 66 |
| RES_SHALLOW (ohm.m) | 18.86 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2575.0 – 2585.0 m

**Sample Description (spreadsheet):** Sample 2580m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2564m: clr-trnsl,off wh,pl brn i/p,vf-f aggs, mnr med,rr crs,sbang-sbrnd,frm sil cmt,tr kaol mtx, com cln,fri-mod hd aggs,some lse med-rr crs qtz,pr vis por-fr inf por i/p,dll-mod bri fluor. 7 5 / 7 / 5 / 6 / 7 198U MD:2566.6 m
- **SANDSTONE** @ ~2572m: pl brn,pff wh,trnsl-occ clr,pred vf-f aggs,rr med,sbng-sbrnd,gen wl srt,wk sil cmt,tr-nil kaol mtx,fri-frm aggs,pr vis por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.5 | 65 |
| RES_DEEP (ohm.m) | 17.80 | 65 |
| RES_SHALLOW (ohm.m) | 18.54 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.74** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2585.0 – 2595.0 m

**Sample Description (spreadsheet):** Sample 2590m: 0.659722222222222 siderite in 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2572m: pl brn,pff wh,trnsl-occ clr,pred vf-f aggs,rr med,sbng-sbrnd,gen wl srt,wk sil cmt,tr-nil kaol mtx,fri-frm aggs,pr vis por,mod bri fluor.
- **SANDSTONE** @ ~2588m: clr-trnsl,mnr pl brn,pred med-mnr 1261.0 crs,occ f,ang-sbrnd,mod wl srt,wk sil cmt,gen cln, com lse med-occ crs qtz,fr inf por,dll-mod bri fluor. FLUOR: 2590.0-2620.0m; 60-70% of SST; dll-mod bri yel/grn evn fluor,inst diff-slw bldg ct,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.1 | 65 |
| RES_DEEP (ohm.m) | 18.20 | 65 |
| RES_SHALLOW (ohm.m) | 18.97 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.77** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2600 m MD — Interval 2595.0 – 2605.0 m

**Sample Description (spreadsheet):** Sample 2600m: 0.670138888888889 siderite in 0% Siltstone, 100% fine to  to coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 127U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f--crs (max: C) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 127.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: clr-trnsl,mnr pl brn,pred med-mnr 1261.0 crs,occ f,ang-sbrnd,mod wl srt,wk sil cmt,gen cln, com lse med-occ crs qtz,fr inf por,dll-mod bri fluor. FLUOR: 2590.0-2620.0m; 60-70% of SST; dll-mod bri yel/grn evn fluor,inst diff-slw bldg ct,
- **SANDSTONE** @ ~2612m: clr-trnsl,mnr pl brn,pred med-mnr crs,occ f,ang-sbrnd,mod wl srt,wk sil cmt,gen cln, com lse med-occ crs qtz,fr inf por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.3 | 66 |
| RES_DEEP (ohm.m) | 19.56 | 66 |
| RES_SHALLOW (ohm.m) | 20.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2605.0 – 2615.0 m

**Sample Description (spreadsheet):** Sample 2610m: 0.694444444444444 siderite in 0% Siltstone, 100% fine to  to coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f--crs (max: C) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr-trnsl,mnr pl brn,pred med-mnr crs,occ f,ang-sbrnd,mod wl srt,wk sil cmt,gen cln, com lse med-occ crs qtz,fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2620m: pl brn,off wh,clr-trnsl,com vf-f aggs, occ med-rr crs lse qtz,f lse grs,sbang-sbrnd,mod wl srt,wk-occ frm sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.7 | 65 |
| RES_DEEP (ohm.m) | 19.88 | 65 |
| RES_SHALLOW (ohm.m) | 20.34 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.46** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2615.0 – 2625.0 m

**Sample Description (spreadsheet):** Sample 2620m: 0.711805555555556 siderite in 0% Siltstone, 100% fine to  to coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f--crs (max: C) |
| Fluorescence | 70% dll - mod bri |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr-trnsl,mnr pl brn,pred med-mnr crs,occ f,ang-sbrnd,mod wl srt,wk sil cmt,gen cln, com lse med-occ crs qtz,fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2620m: pl brn,off wh,clr-trnsl,com vf-f aggs, occ med-rr crs lse qtz,f lse grs,sbang-sbrnd,mod wl srt,wk-occ frm sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,fr inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 66 |
| RES_DEEP (ohm.m) | 18.73 | 66 |
| RES_SHALLOW (ohm.m) | 19.47 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.74** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2625.0 – 2635.0 m

**Sample Description (spreadsheet):** Sample 2630m: 0.732638888888889 siderite in 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% mod bri |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr-trnsl,mnr pl brn,pred med-mnr crs,occ f,ang-sbrnd,mod wl srt,wk sil cmt,gen cln, com lse med-occ crs qtz,fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2620m: pl brn,off wh,clr-trnsl,com vf-f aggs, occ med-rr crs lse qtz,f lse grs,sbang-sbrnd,mod wl srt,wk-occ frm sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,fr inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.1 | 66 |
| RES_DEEP (ohm.m) | 17.93 | 66 |
| RES_SHALLOW (ohm.m) | 18.79 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.86** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2640 m MD — Interval 2635.0 – 2645.0 m

**Sample Description (spreadsheet):** Sample 2640m: 0.739583333333333 siderite in 0% Siltstone, 100% very fine to medium Sandstone, 90% moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90% mod bri |
| Total Gas | 175.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2620m: pl brn,off wh,clr-trnsl,com vf-f aggs, occ med-rr crs lse qtz,f lse grs,sbang-sbrnd,mod wl srt,wk-occ frm sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,fr inf por,mod bri fluor.
- **SANDSTONE** @ ~2636m: pl brn,off wh,clr-trnsl,com vf-f aggs, occ med-rr crs lse qtz,f lse grs,sbang-sbrnd,mod wl srt,wk-occ frm sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,fr inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 65 |
| RES_DEEP (ohm.m) | 19.14 | 65 |
| RES_SHALLOW (ohm.m) | 19.57 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2650 m MD — Interval 2645.0 – 2655.0 m

**Sample Description (spreadsheet):** Sample 2650m: 0% Siltstone, 100% medium to coarse Sandstone, 10% dull  to  moderately bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 10% dll - mod bri |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2636m: pl brn,off wh,clr-trnsl,com vf-f aggs, occ med-rr crs lse qtz,f lse grs,sbang-sbrnd,mod wl srt,wk-occ frm sil cmt,tr kaol mtx,gen cln,fri aggs,pr vis por,fr inf por,mod bri fluor.
- **SANDSTONE** @ ~2640m: clr-trnsl,off wh i/p,pred crs,mnr med, sbang-sbrnd,mod wl srt,lse qtz,cln,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 66 |
| RES_DEEP (ohm.m) | 18.53 | 66 |
| RES_SHALLOW (ohm.m) | 19.43 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.90** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2660 m MD — Interval 2655.0 – 2665.0 m

**Sample Description (spreadsheet):** Sample 2660m: 0% Siltstone, 100% fine to coarse Sandstone, 30% dull  to  moderately bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 30% dll - mod bri |
| Total Gas | 135.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2640m: clr-trnsl,off wh i/p,pred crs,mnr med, sbang-sbrnd,mod wl srt,lse qtz,cln,gd inf por,fluor.
- **SANDSTONE** @ ~2652m: off wh,trnsl-clr,mnr pl brn,pred crs-occ med,occ vf-f aggs,mod srt,sbang-sbrnd, pred lse crs qtz,nil cmt,cln,occ fri vf-f aggs,pr vis-com gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.8 | 65 |
| RES_DEEP (ohm.m) | 20.36 | 65 |
| RES_SHALLOW (ohm.m) | 20.66 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2665.0 – 2675.0 m

**Sample Description (spreadsheet):** Sample 2670m: 0% Siltstone, 100% fine to coarse Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2652m: off wh,trnsl-clr,mnr pl brn,pred crs-occ med,occ vf-f aggs,mod srt,sbang-sbrnd, pred lse crs qtz,nil cmt,cln,occ fri vf-f aggs,pr vis-com gd inf por,fluor.
- **SANDSTONE** @ ~2664m: off wh,trnsl-clr,mnr pl brn,pred 74 / 6 / 4 / 6 / 10 crs-occ med,occ vf-f aggs,mod srt,sbang-sbrnd, pred lse crs qtz,nil cmt,cln,occ fri vf-f aggs,pr vis-com gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.0 | 66 |
| RES_DEEP (ohm.m) | 21.38 | 66 |
| RES_SHALLOW (ohm.m) | 21.71 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 0% Siltstone, 100% very fine to medium Sandstone, 80% moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80% mod bri |
| Total Gas | 155.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2664m: off wh,trnsl-clr,mnr pl brn,pred 74 / 6 / 4 / 6 / 10 crs-occ med,occ vf-f aggs,mod srt,sbang-sbrnd, pred lse crs qtz,nil cmt,cln,occ fri vf-f aggs,pr vis-com gd inf por,fluor.
- **SANDSTONE** @ ~2676m: pl brn,trnsl-clr,off wh,pred vf-f aggs,occ lse med,sbang-sbrnd,mod wl srt,wk- frm sil cmt,tr-loc kaol mtx in aggs,lse med i/p, fri aggs,pr vis por,fluor. 77 / 6 / 4 / 5 / 8
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.5 | 66 |
| RES_DEEP (ohm.m) | 21.61 | 66 |
| RES_SHALLOW (ohm.m) | 22.03 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.41** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, 100% very fine to fine Sandstone, 10% dull  to  moderately bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 10% dll - mod bri |
| Total Gas | 165.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2676m: pl brn,trnsl-clr,off wh,pred vf-f aggs,occ lse med,sbang-sbrnd,mod wl srt,wk- frm sil cmt,tr-loc kaol mtx in aggs,lse med i/p, fri aggs,pr vis por,fluor. 77 / 6 / 4 / 5 / 8
- **SANDSTONE** @ ~2684m: trnsl-clr,vf-f,sbang-sbrnd,wl srt, wk sil cmt,cln,pred lse f qtz,fr-pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.4 | 65 |
| RES_DEEP (ohm.m) | 21.77 | 65 |
| RES_SHALLOW (ohm.m) | 21.92 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.15** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 0% Siltstone, 100% very fine to medium Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2684m: trnsl-clr,vf-f,sbang-sbrnd,wl srt, wk sil cmt,cln,pred lse f qtz,fr-pr inf por,fluor.
- **SANDSTONE** @ ~2692m: pl brn,trnsl-clr,off wh,pred vf-f aggs,occ lse med,sbang-sbrnd,mod wl srt,wk- frm sil cmt,tr-loc kaol mtx in aggs,lse med i/p, fri aggs,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.4 | 66 |
| RES_DEEP (ohm.m) | 20.67 | 66 |
| RES_SHALLOW (ohm.m) | 20.96 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.29** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 0% Siltstone, 100% very fine to fine Sandstone, 20% dull  to  moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 20% dll - mod bri |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2692m: pl brn,trnsl-clr,off wh,pred vf-f aggs,occ lse med,sbang-sbrnd,mod wl srt,wk- frm sil cmt,tr-loc kaol mtx in aggs,lse med i/p, fri aggs,pr vis por,fluor.
- **SANDSTONE** @ ~2712m: clr-trnsl,f-pred med,rr crs, sbang-sbrnd,mod wl srt,wk-nil sil cmt,cln,lse med qtz grs,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.8 | 65 |
| RES_DEEP (ohm.m) | 20.44 | 65 |
| RES_SHALLOW (ohm.m) | 20.65 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.21** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 0% Siltstone, 100% fine to coarse Sandstone, 10% dull FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 10% dll |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2712m: clr-trnsl,f-pred med,rr crs, sbang-sbrnd,mod wl srt,wk-nil sil cmt,cln,lse med qtz grs,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2732m: clr-trnsl,frstd i/p,glassy,crs-occ med, ang-sbang,sbrnd i/p,mod srt,nil sil cmt,lse crs qtz grs,fr inf por,tr fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.8 | 66 |
| RES_DEEP (ohm.m) | 21.61 | 66 |
| RES_SHALLOW (ohm.m) | 21.63 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.01** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 0% Siltstone, 100% medium to coarse Sandstone, 5% dull FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 5% dll |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2712m: clr-trnsl,f-pred med,rr crs, sbang-sbrnd,mod wl srt,wk-nil sil cmt,cln,lse med qtz grs,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2732m: clr-trnsl,frstd i/p,glassy,crs-occ med, ang-sbang,sbrnd i/p,mod srt,nil sil cmt,lse crs qtz grs,fr inf por,tr fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.9 | 66 |
| RES_DEEP (ohm.m) | 22.31 | 66 |
| RES_SHALLOW (ohm.m) | 22.54 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 0% Siltstone, 100% medium to coarse Sandstone, 10% dull FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 10% dll |
| Total Gas | 155.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2732m: clr-trnsl,frstd i/p,glassy,crs-occ med, ang-sbang,sbrnd i/p,mod srt,nil sil cmt,lse crs qtz grs,fr inf por,tr fluor.
- **SANDSTONE** @ ~2744m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr med,sbang-sbrnd,mod wl srt,wk sil cmt,tr-mnr kaol mtx,fri aggs,com lse vf-f qtz,pr vis por,dll-mod bri fluor. 81 / 6 / 3 / 4 / 6 176U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.3 | 65 |
| RES_DEEP (ohm.m) | 23.94 | 65 |
| RES_SHALLOW (ohm.m) | 25.02 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 0% Siltstone, 100% very fine to fine Sandstone, 30% dull  to  moderately bright FLUOR in SST. TG 146U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 30% dll - mod bri |
| Total Gas | 146.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2732m: clr-trnsl,frstd i/p,glassy,crs-occ med, ang-sbang,sbrnd i/p,mod srt,nil sil cmt,lse crs qtz grs,fr inf por,tr fluor.
- **SANDSTONE** @ ~2744m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr med,sbang-sbrnd,mod wl srt,wk sil cmt,tr-mnr kaol mtx,fri aggs,com lse vf-f qtz,pr vis por,dll-mod bri fluor. 81 / 6 / 3 / 4 / 6 176U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.1 | 66 |
| RES_DEEP (ohm.m) | 24.22 | 66 |
| RES_SHALLOW (ohm.m) | 24.85 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.63** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 0% Siltstone, 100% very fine to fine Sandstone, 30% dull  to  moderately bright FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 30% dll - mod bri |
| Total Gas | 177.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2744m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr med,sbang-sbrnd,mod wl srt,wk sil cmt,tr-mnr kaol mtx,fri aggs,com lse vf-f qtz,pr vis por,dll-mod bri fluor. 81 / 6 / 3 / 4 / 6 176U
- **SANDSTONE** @ ~2752m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.7 | 66 |
| RES_DEEP (ohm.m) | 22.52 | 66 |
| RES_SHALLOW (ohm.m) | 22.78 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 0% Siltstone, 100% very fine to fine Sandstone, 90% moderately bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90% mod bri |
| Total Gas | 207.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2752m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr
- **SANDSTONE** @ ~2752m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr med,sbang-sbrnd,mod wl srt,wk sil cmt,tr-mnr kaol mtx,fri aggs,com lse vf-f qtz,pr vis por,dll-mod bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.8 | 65 |
| RES_DEEP (ohm.m) | 23.12 | 65 |
| RES_SHALLOW (ohm.m) | 23.88 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.76** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 179.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2764m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr med,sbang-sbrnd,mod wl srt,wk sil cmt,tr-mnr kaol mtx,fri aggs,com lse vf-f qtz,pr vis por,dll-mod bri fluor. 2768 MD:2767.9 m
- **SANDSTONE** @ ~2772m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr med,sbang-sbrnd,mod wl srt,wk sil cmt,tr-mnr kaol mtx,fri aggs,com lse vf-f qtz,pr vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.6 | 66 |
| RES_DEEP (ohm.m) | 22.21 | 66 |
| RES_SHALLOW (ohm.m) | 22.78 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.57** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 5% Siltstone, 95% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 106U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 106.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2772m: trnsl,pl brn,occ clr,off wh,pred vf-f,tr med,sbang-sbrnd,mod wl srt,wk sil cmt,tr-mnr kaol mtx,fri aggs,com lse vf-f qtz,pr vis por,dll-mod bri fluor.
- **SILTSTONE** @ ~2780m: med gry,aren,micmic,tr carb spks,tr liths,tr sid frags,mod hd,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 29.3 | 65 |
| RES_DEEP (ohm.m) | 22.46 | 65 |
| RES_SHALLOW (ohm.m) | 24.17 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.71** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 15% Siltstone, 85% fine to coarse Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 114.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2780m: med gry,aren,micmic,tr carb spks,tr liths,tr sid frags,mod hd,sbblky.
- **SANDSTONE** @ ~2795m: 230-270 gpm SANDSTONE:clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dim-dll fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.8 | 66 |
| RES_DEEP (ohm.m) | 21.40 | 66 |
| RES_SHALLOW (ohm.m) | 24.39 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.00** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 5% Siltstone, 95% fine to coarse Sandstone, 90% dull FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% dll |
| Total Gas | 96.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2795m: 230-270 gpm SANDSTONE:clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dim-dll fluor.
- **SANDSTONE** @ ~2812m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 27.4 | 66 |
| RES_DEEP (ohm.m) | 20.86 | 66 |
| RES_SHALLOW (ohm.m) | 22.72 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.86** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2815.0 – 2825.0 m

**Sample Description (spreadsheet):** Sample 2820m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 147.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2824m: trnsl,wh,off wh,f-med,wl srt, 80 / 6 / 4 / 4 / 6 192U sbang-sbrnd,sil cmt,tr wh arg mtx,tr mic,tr slty lams, fri-occ lse,fr vis & inf por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.9 | 65 |
| RES_DEEP (ohm.m) | 21.97 | 65 |
| RES_SHALLOW (ohm.m) | 21.39 | 65 |
| **Δ Res (Deep − Shallow)** | **0.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2825.0 – 2835.0 m

**Sample Description (spreadsheet):** Sample 2830m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2824m: trnsl,wh,off wh,f-med,wl srt, 80 / 6 / 4 / 4 / 6 192U sbang-sbrnd,sil cmt,tr wh arg mtx,tr mic,tr slty lams, fri-occ lse,fr vis & inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.8 | 66 |
| RES_DEEP (ohm.m) | 20.16 | 66 |
| RES_SHALLOW (ohm.m) | 20.55 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2840 m MD — Interval 2835.0 – 2845.0 m

**Sample Description (spreadsheet):** Sample 2840m: 0% Siltstone, 100% fine to coarse Sandstone, 100% dull FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2824m: trnsl,wh,off wh,f-med,wl srt, 80 / 6 / 4 / 4 / 6 192U sbang-sbrnd,sil cmt,tr wh arg mtx,tr mic,tr slty lams, fri-occ lse,fr vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2832m: trnsl,clr,off wh,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,tr wh arg mtx,cln i/p,tr mic, lse-occ fri aggs,fr vis & inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.6 | 65 |
| RES_DEEP (ohm.m) | 16.84 | 65 |
| RES_SHALLOW (ohm.m) | 17.91 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.07** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2850 m MD — Interval 2845.0 – 2855.0 m

**Sample Description (spreadsheet):** Sample 2850m: 0% Siltstone, 100% fine to coarse Sandstone, 90% dull FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% dll |
| Total Gas | 103.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2832m: trnsl,clr,off wh,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,tr wh arg mtx,cln i/p,tr mic, lse-occ fri aggs,fr vis & inf por,dll fluor.
- **SANDSTONE** @ ~2844m: trnsl,clr,off wh,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,tr wh arg mtx,cln i/p,tr mic, lse-occ fri aggs,fr vis & inf por,dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 66 |
| RES_DEEP (ohm.m) | 15.89 | 66 |
| RES_SHALLOW (ohm.m) | 16.81 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.92** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2860 m MD — Interval 2855.0 – 2865.0 m

**Sample Description (spreadsheet):** Sample 2860m: 0% Siltstone, 100% fine to medium Sandstone, 90% dull FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% dll |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: trnsl,clr,off wh,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,tr wh arg mtx,cln i/p,tr mic, lse-occ fri aggs,fr vis & inf por,dim fluor.
- **SANDSTONE** @ ~2852m: trnsl,clr,off wh,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,tr wh arg mtx,cln i/p,tr mic,tr coaly frags,lse-occ fri aggs,fr vis & inf por,dim fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.2 | 66 |
| RES_DEEP (ohm.m) | 16.98 | 66 |
| RES_SHALLOW (ohm.m) | 18.13 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.15** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2865.0 – 2875.0 m

**Sample Description (spreadsheet):** Sample 2870m: 10% Siltstone, 90% fine to medium Sandstone, 90% dull FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% dll |
| Total Gas | 73.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2852m: trnsl,clr,off wh,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,tr wh arg mtx,cln i/p,tr mic,tr coaly frags,lse-occ fri aggs,fr vis & inf por,dim fluor.
- **SILTSTONE** @ ~2860m: lt-dk gry,aren,micmic,loc com coaly frags,tr liths,mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.3 | 65 |
| RES_DEEP (ohm.m) | 18.71 | 65 |
| RES_SHALLOW (ohm.m) | 19.44 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.74** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2880 m MD — Interval 2875.0 – 2885.0 m

**Sample Description (spreadsheet):** Sample 2880m: 0% Siltstone, 100% fine to medium Sandstone, 50% dull FLUOR in SST. TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 50% dll |
| Total Gas | 52.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2860m: lt-dk gry,aren,micmic,loc com coaly frags,tr liths,mod hd,sbblky.
- **SILTSTONE** @ ~2880m: lt-med gry,lt brn gry,aren,micmic,tr liths,tr carb spks,tr coaly frags,mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.8 | 66 |
| RES_DEEP (ohm.m) | 14.12 | 66 |
| RES_SHALLOW (ohm.m) | 15.20 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2890 m MD — Interval 2885.0 – 2895.0 m

**Sample Description (spreadsheet):** Sample 2890m: 30% Siltstone, 70% fine to medium Sandstone, 50% dull FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 50% dll |
| Total Gas | 50.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2880m: lt-med gry,lt brn gry,aren,micmic,tr liths,tr carb spks,tr coaly frags,mod hd,sbblky.
- **SANDSTONE** @ ~2884m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,tr coaly frags,fr inf por,dim fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.0 | 66 |
| RES_DEEP (ohm.m) | 16.56 | 66 |
| RES_SHALLOW (ohm.m) | 17.34 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.77** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2895.0 – 2905.0 m

**Sample Description (spreadsheet):** Sample 2900m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll |
| Total Gas | 119.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2880m: lt-med gry,lt brn gry,aren,micmic,tr liths,tr carb spks,tr coaly frags,mod hd,sbblky.
- **SANDSTONE** @ ~2884m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,tr coaly frags,fr inf por,dim fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.7 | 65 |
| RES_DEEP (ohm.m) | 21.42 | 65 |
| RES_SHALLOW (ohm.m) | 21.32 | 65 |
| **Δ Res (Deep − Shallow)** | **0.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2905.0 – 2915.0 m

**Sample Description (spreadsheet):** Sample 2910m: 5% Siltstone, 95% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2892m: clr,trnsl,f-med,rr crs,wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,tr mic,tr coaly frags,fr inf por,dll fluor. 81 / 6 / 4 / 4 / 5 130U
- **SANDSTONE** @ ~2904m: off wh,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,nil-tr vis mtx,tr mic,tr slty lams,tr liths,fri-lse,fr vis & inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.4 | 66 |
| RES_DEEP (ohm.m) | 22.77 | 66 |
| RES_SHALLOW (ohm.m) | 22.27 | 66 |
| **Δ Res (Deep − Shallow)** | **0.50** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2915.0 – 2925.0 m

**Sample Description (spreadsheet):** Sample 2920m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull  to  moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll - mod bri |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2904m: off wh,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,sil cmt,nil-tr vis mtx,tr mic,tr slty lams,tr liths,fri-lse,fr vis & inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2912m: off wh,trnsl,f-med,rr crs,mod srt,cln & lse,sbang-sbrnd,sil cmt,nil-tr vis mtx,tr mic,tr liths, fri-lse,fr inf por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.7 | 65 |
| RES_DEEP (ohm.m) | 20.81 | 65 |
| RES_SHALLOW (ohm.m) | 20.69 | 65 |
| **Δ Res (Deep − Shallow)** | **0.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2930 m MD — Interval 2925.0 – 2935.0 m

**Sample Description (spreadsheet):** Sample 2930m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: off wh,trnsl,f-med,rr crs,mod srt,cln & lse,sbang-sbrnd,sil cmt,nil-tr vis mtx,tr mic,tr liths, fri-lse,fr inf por,dll-mod bri fluor.
- **SANDSTONE** @ ~2920m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk 1259.9 sil cmt,nil vis mtx,tr mic,rr liths,cln & lse,rr fri aggs,fr inf por,dll fluor. 29 12 2 5 8 9.9 M VD D : : 2 1 9 2 2 5 8 9 . . 0 9 m m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.0 | 66 |
| RES_DEEP (ohm.m) | 21.07 | 66 |
| RES_SHALLOW (ohm.m) | 21.00 | 66 |
| **Δ Res (Deep − Shallow)** | **0.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2940 m MD — Interval 2935.0 – 2945.0 m

**Sample Description (spreadsheet):** Sample 2940m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2920m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk 1259.9 sil cmt,nil vis mtx,tr mic,rr liths,cln & lse,rr fri aggs,fr inf por,dll fluor. 29 12 2 5 8 9.9 M VD D : : 2 1 9 2 2 5 8 9 . . 0 9 m m
- **SANDSTONE** @ ~2932m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,rr liths,cln & lse,rr fri aggs,fr inf por,dll fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.9 | 66 |
| RES_DEEP (ohm.m) | 19.92 | 66 |
| RES_SHALLOW (ohm.m) | 19.99 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.07** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2945.0 – 2955.0 m

**Sample Description (spreadsheet):** Sample 2950m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2932m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,rr liths,cln & lse,rr fri aggs,fr inf por,dll fluor.
- **SANDSTONE** @ ~2956m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk 75 / 6 / 5 / 6 / 8 103U sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dim fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.1 | 65 |
| RES_DEEP (ohm.m) | 18.67 | 65 |
| RES_SHALLOW (ohm.m) | 19.04 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.37** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2955.0 – 2965.0 m

**Sample Description (spreadsheet):** Sample 2960m: 0% Siltstone, 100% fine to medium Sandstone, 90% dull FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% dll |
| Total Gas | 99.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2956m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk 75 / 6 / 5 / 6 / 8 103U sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dim fluor.
- **SANDSTONE** @ ~2964m: clr,trnsl,f-occ med,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por, v dim fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.6 | 66 |
| RES_DEEP (ohm.m) | 16.29 | 66 |
| RES_SHALLOW (ohm.m) | 16.72 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2970 m MD — Interval 2965.0 – 2975.0 m

**Sample Description (spreadsheet):** Sample 2970m: 0% Siltstone, 100% fine to medium Sandstone, 80% dull FLUOR in SST. TG 81U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% dll |
| Total Gas | 81.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2956m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk 75 / 6 / 5 / 6 / 8 103U sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dim fluor.
- **SANDSTONE** @ ~2964m: clr,trnsl,f-occ med,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por, v dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 16.3 | 65 |
| RES_DEEP (ohm.m) | 14.59 | 65 |
| RES_SHALLOW (ohm.m) | 14.90 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.31** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2980 m MD — Interval 2975.0 – 2985.0 m

**Sample Description (spreadsheet):** Sample 2980m: 0% Siltstone, 100% fine Sandstone, 70% dull FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 70% dll |
| Total Gas | 97.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2964m: clr,trnsl,f-occ med,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por, v dim fluor.
- **SANDSTONE** @ ~2972m: clr,f gr,wl srt,sbang-sbrnd,wk sil cmt, nil vis mtx,lse & cln,tr liths,fr inf por, v dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 15.7 | 66 |
| RES_DEEP (ohm.m) | 14.30 | 66 |
| RES_SHALLOW (ohm.m) | 14.47 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2990 m MD — Interval 2985.0 – 2995.0 m

**Sample Description (spreadsheet):** Sample 2990m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll |
| Total Gas | 65.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2972m: clr,f gr,wl srt,sbang-sbrnd,wk sil cmt, nil vis mtx,lse & cln,tr liths,fr inf por, v dim fluor.
- **SANDSTONE** @ ~2984m: clr,trnsl,f-med,wl srt,sbang-sbrnd,sil cmt,nil vis mtx,lse & cln,rr liths,rr fri aggs,fr inf & vis por,dim fluor. FLUOR: 2980.0-3030.0m; 70-100% of SST; dim-dll yel/grn evn fluor,v slw bldg ct,pl blu/wh
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 15.7 | 66 |
| RES_DEEP (ohm.m) | 14.75 | 66 |
| RES_SHALLOW (ohm.m) | 14.64 | 66 |
| **Δ Res (Deep − Shallow)** | **0.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3000 m MD — Interval 2995.0 – 3005.0 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% vf-med Sandstone, 100% dll FLUOR, TG 76.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% dll |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2984m: clr,trnsl,f-med,wl srt,sbang-sbrnd,sil cmt,nil vis mtx,lse & cln,rr liths,rr fri aggs,fr inf & vis por,dim fluor. FLUOR: 2980.0-3030.0m; 70-100% of SST; dim-dll yel/grn evn fluor,v slw bldg ct,pl blu/wh
- **SANDSTONE** @ ~2992m: trnsl,off wh,vf-med,dom f,wl srt, 74 / 6 / 5 / 6 / 9 94U sbang-sbrnd,sil cmt,tr wh arg mtx,tr mic,fri-lse,rr liths,fr vis & inf por,dim fluor. 29 12
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 16.1 | 65 |
| RES_DEEP (ohm.m) | 14.69 | 65 |
| RES_SHALLOW (ohm.m) | 14.71 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3010 m MD — Interval 3005.0 – 3015.0 m

**Sample Description (spreadsheet):** Sample 3010m: 0% Siltstone, 100% fine to medium Sandstone, 100% dull FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% dll |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2992m: trnsl,off wh,vf-med,dom f,wl srt, 74 / 6 / 5 / 6 / 9 94U sbang-sbrnd,sil cmt,tr wh arg mtx,tr mic,fri-lse,rr liths,fr vis & inf por,dim fluor. 29 12
- **SANDSTONE** @ ~3004m: trnsl,clr,f-med,wl srt,sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf por,dim fluor. 84 / 6 / 3 / 3 / 4 125U 30 12 0 6 8 0.7 M VD D : : 3 1 0 2 0 6 8 0 . . 2 7 m m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.5 | 66 |
| RES_DEEP (ohm.m) | 15.21 | 66 |
| RES_SHALLOW (ohm.m) | 15.62 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.41** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3020 m MD — Interval 3015.0 – 3025.0 m

**Sample Description (spreadsheet):** Sample 3020m: 0% Siltstone, 100% fine Sandstone, 100% dull FLUOR in SST. TG 89U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 100% dll |
| Total Gas | 89.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3004m: trnsl,clr,f-med,wl srt,sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf por,dim fluor. 84 / 6 / 3 / 3 / 4 125U 30 12 0 6 8 0.7 M VD D : : 3 1 0 2 0 6 8 0 . . 2 7 m m
- **SANDSTONE** @ ~3012m: trnsl,clr,f gr,wl srt,sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf por,dim fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.2 | 66 |
| RES_DEEP (ohm.m) | 17.43 | 66 |
| RES_SHALLOW (ohm.m) | 18.40 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.97** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3030 m MD — Interval 3025.0 – 3035.0 m

**Sample Description (spreadsheet):** Sample 3030m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 88.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3012m: trnsl,clr,f gr,wl srt,sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf por,dim fluor.
- **SANDSTONE** @ ~3020m: trnsl,clr,f-occ med,wl srt, sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf 30 12 2 6 4 0.7 por,dll-mod fluor. 61 / 6 / 6 / 10 / 17 115U 30
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.6 | 65 |
| RES_DEEP (ohm.m) | 19.33 | 65 |
| RES_SHALLOW (ohm.m) | 19.91 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.58** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3040 m MD — Interval 3035.0 – 3045.0 m

**Sample Description (spreadsheet):** Sample 3040m: 0% Siltstone, 100% fine to medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% dll - mod bri |
| Total Gas | 100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3020m: trnsl,clr,f-occ med,wl srt, sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf 30 12 2 6 4 0.7 por,dll-mod fluor. 61 / 6 / 6 / 10 / 17 115U 30
- **SANDSTONE** @ ~3032m: trnsl,clr,f-occ med,wl srt, sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf por,dll-mod fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 66 |
| RES_DEEP (ohm.m) | 18.78 | 66 |
| RES_SHALLOW (ohm.m) | 19.21 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3050 m MD — Interval 3045.0 – 3055.0 m

**Sample Description (spreadsheet):** Sample 3050m: 0% Siltstone, 100% very fine to medium Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3032m: trnsl,clr,f-occ med,wl srt, sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf sbrnd-sbang,wk sil cmt,nis vis mtx,lse & cln,fr inf por,dll-mod fluor.
- **SANDSTONE** @ ~3044m: clr-trnsl,off wh,mnr pl brn,pred vf-f aggs,mnr med,sbang-sbrnd,mod wl srt,wk-frm sil cmt,mnr kaol-occ slty mtx,fri-frm aggs,pr vis por, dll-occ mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.9 | 65 |
| RES_DEEP (ohm.m) | 15.86 | 65 |
| RES_SHALLOW (ohm.m) | 16.64 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.78** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3060 m MD — Interval 3055.0 – 3065.0 m

**Sample Description (spreadsheet):** Sample 3060m: 0% Siltstone, 100% very fine to medium Sandstone, 30% dull  to  moderately bright FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 30% dll - mod bri |
| Total Gas | 94.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3044m: clr-trnsl,off wh,mnr pl brn,pred vf-f aggs,mnr med,sbang-sbrnd,mod wl srt,wk-frm sil cmt,mnr kaol-occ slty mtx,fri-frm aggs,pr vis por, dll-occ mod bri fluor.
- **SANDSTONE** @ ~3052m: clr-trnsl,off wh,mnr pl brn,pred vf-f aggs,mnr med,sbang-sbrnd,mod wl srt,wk-frm sil cmt,mnr kaol-occ slty mtx,fri-frm aggs,pr vis por, 3056 dll-occ mod bri fluor. 1260.4
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.2 | 66 |
| RES_DEEP (ohm.m) | 16.33 | 66 |
| RES_SHALLOW (ohm.m) | 17.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.74** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3070 m MD — Interval 3065.0 – 3075.0 m

**Sample Description (spreadsheet):** Sample 3070m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 90.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3052m: clr-trnsl,off wh,mnr pl brn,pred vf-f aggs,mnr med,sbang-sbrnd,mod wl srt,wk-frm sil cmt,mnr kaol-occ slty mtx,fri-frm aggs,pr vis por, 3056 dll-occ mod bri fluor. 1260.4
- **SANDSTONE** @ ~3064m: trnsl-clr,pl brn i/p,vf-f aggs,occ med, rr crs,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx i/p, fri-frm aggs,pr vis por-occ fr inf por,mod bri fluor. 79 / 6 / 4 / 5 / 6 111U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.9 | 66 |
| RES_DEEP (ohm.m) | 16.52 | 66 |
| RES_SHALLOW (ohm.m) | 16.94 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3080 m MD — Interval 3075.0 – 3085.0 m

**Sample Description (spreadsheet):** Sample 3080m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 103.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3064m: trnsl-clr,pl brn i/p,vf-f aggs,occ med, rr crs,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx i/p, fri-frm aggs,pr vis por-occ fr inf por,mod bri fluor. 79 / 6 / 4 / 5 / 6 111U
- **SANDSTONE** @ ~3072m: trnsl-clr,pl brn i/p,vf-f aggs,occ med, rr crs,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx i/p, fri-frm aggs,pr vis por-occ fr inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.6 | 65 |
| RES_DEEP (ohm.m) | 16.81 | 65 |
| RES_SHALLOW (ohm.m) | 16.85 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3090 m MD — Interval 3085.0 – 3095.0 m

**Sample Description (spreadsheet):** Sample 3090m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 131U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 131.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3072m: trnsl-clr,pl brn i/p,vf-f aggs,occ med, rr crs,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx i/p, fri-frm aggs,pr vis por-occ fr inf por,mod bri fluor.
- **SANDSTONE** @ ~3084m: trnsl-clr,pl brn i/p,vf-f aggs,occ med, rr crs,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx i/p, fri-frm aggs,pr vis por-occ fr inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.5 | 66 |
| RES_DEEP (ohm.m) | 17.83 | 66 |
| RES_SHALLOW (ohm.m) | 17.71 | 66 |
| **Δ Res (Deep − Shallow)** | **0.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3100 m MD — Interval 3095.0 – 3105.0 m

**Sample Description (spreadsheet):** Sample 3100m: 0% Siltstone, 100% fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80% mod bri |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3084m: trnsl-clr,pl brn i/p,vf-f aggs,occ med, rr crs,sbang-sbrnd,mod srt,wk sil cmt,tr kaol mtx i/p, fri-frm aggs,pr vis por-occ fr inf por,mod bri fluor.
- **SANDSTONE** @ ~3088m: clr-trnsl,mnr pl brn,pred med-crs, 1260.3 sbang-sbrnd,mod srt,wk sil cmt,gen cln,tr kaol mtx in f aggs,com lse med-crs qtz,fr-gd inf por,fluor. 88 / 3 / 3 / 3 / 3 135U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.5 | 66 |
| RES_DEEP (ohm.m) | 17.50 | 66 |
| RES_SHALLOW (ohm.m) | 17.51 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3110 m MD — Interval 3105.0 – 3115.0 m

**Sample Description (spreadsheet):** Sample 3110m: 0% Siltstone, 100% fine to coarse Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3104m: clr-trnsl,mnr pl brn,med-pred crs, 7 8 / 6 / 4 / 5 / 7 135U s in b f a n a g g - g s s b ,c rn o d m ,m ls o e d m sr e t, d w -c k r s s i q l c tz m ,f t r , - g g e d n i n c f l n p , o tr r , k f a lu o o l r m . tx
- **SANDSTONE** @ ~3116m: clr-trnsl,mnr pl brn,med-crs, sbang-sbrnd,mod srt,wk sil cmt,gen cln,tr kaol mtx in f aggs,com lse med-crs qtz,fr-gd inf por,fluor. 79 / 6 / 4 / 5 / 6 149U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.6 | 65 |
| RES_DEEP (ohm.m) | 18.60 | 65 |
| RES_SHALLOW (ohm.m) | 18.50 | 65 |
| **Δ Res (Deep − Shallow)** | **0.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3120 m MD — Interval 3115.0 – 3125.0 m

**Sample Description (spreadsheet):** Sample 3120m: 0% Siltstone, 100% fine to coarse Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3104m: clr-trnsl,mnr pl brn,med-pred crs, 7 8 / 6 / 4 / 5 / 7 135U s in b f a n a g g - g s s b ,c rn o d m ,m ls o e d m sr e t, d w -c k r s s i q l c tz m ,f t r , - g g e d n i n c f l n p , o tr r , k f a lu o o l r m . tx
- **SANDSTONE** @ ~3116m: clr-trnsl,mnr pl brn,med-crs, sbang-sbrnd,mod srt,wk sil cmt,gen cln,tr kaol mtx in f aggs,com lse med-crs qtz,fr-gd inf por,fluor. 79 / 6 / 4 / 5 / 6 149U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.6 | 66 |
| RES_DEEP (ohm.m) | 17.56 | 66 |
| RES_SHALLOW (ohm.m) | 17.08 | 66 |
| **Δ Res (Deep − Shallow)** | **0.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3130 m MD — Interval 3125.0 – 3135.0 m

**Sample Description (spreadsheet):** Sample 3130m: 0% Siltstone, 100% fine to coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80% dll - mod bri |
| Total Gas | 155.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr-trnsl,mnr pl brn,med-crs, sbang-sbrnd,mod srt,wk sil cmt,gen cln,tr kaol mtx in f aggs,com lse med-crs qtz,fr-gd inf por,fluor. 79 / 6 / 4 / 5 / 6 149U
- **SANDSTONE** @ ~3124m: clr-trnsl,occ pl brn,vf-f aggs,com lse med-occ crs,sbang-occ sbrnd,mod srt,wk sil cmt,tr kaol mtx,gen cln,com lse med qtz,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.0 | 65 |
| RES_DEEP (ohm.m) | 18.93 | 65 |
| RES_SHALLOW (ohm.m) | 18.42 | 65 |
| **Δ Res (Deep − Shallow)** | **0.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3140 m MD — Interval 3135.0 – 3145.0 m

**Sample Description (spreadsheet):** Sample 3140m: 0% Siltstone, 100% fine to coarse Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80% dll - mod bri |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3124m: clr-trnsl,occ pl brn,vf-f aggs,com lse med-occ crs,sbang-occ sbrnd,mod srt,wk sil cmt,tr kaol mtx,gen cln,com lse med qtz,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3144m: clr-trnsl,occ v pl brn,med-com crs, 75 / 6 / 4 / 6 / 9 mnr vf aggs,sbang,sbrnd,mod-occ pr srt,wk sil cmt, fri vf aggs,com lse crs,pr vis por,mod inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.4 | 66 |
| RES_DEEP (ohm.m) | 16.20 | 66 |
| RES_SHALLOW (ohm.m) | 15.94 | 66 |
| **Δ Res (Deep − Shallow)** | **0.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3150 m MD — Interval 3145.0 – 3155.0 m

**Sample Description (spreadsheet):** Sample 3150m: 0% Siltstone, 100% fine to coarse Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3144m: clr-trnsl,occ v pl brn,med-com crs, 75 / 6 / 4 / 6 / 9 mnr vf aggs,sbang,sbrnd,mod-occ pr srt,wk sil cmt, fri vf aggs,com lse crs,pr vis por,mod inf por,fluor.
- **SANDSTONE** @ ~3152m: clr-trnsl,occ v pl brn,med-com crs, mnr vf aggs,sbang,sbrnd,mod-occ pr srt,wk sil cmt, 3156 fri vf aggs,com lse crs,pr vis por,mod inf por,fluor. 1260.7 74 / 6 / 5 / 6 / 9
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.3 | 66 |
| RES_DEEP (ohm.m) | 16.50 | 66 |
| RES_SHALLOW (ohm.m) | 16.54 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.04** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3160 m MD — Interval 3155.0 – 3165.0 m

**Sample Description (spreadsheet):** Sample 3160m: 0% Siltstone, 100% fine to coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 92U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 92.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3144m: clr-trnsl,occ v pl brn,med-com crs, 75 / 6 / 4 / 6 / 9 mnr vf aggs,sbang,sbrnd,mod-occ pr srt,wk sil cmt, fri vf aggs,com lse crs,pr vis por,mod inf por,fluor.
- **SANDSTONE** @ ~3152m: clr-trnsl,occ v pl brn,med-com crs, mnr vf aggs,sbang,sbrnd,mod-occ pr srt,wk sil cmt, 3156 fri vf aggs,com lse crs,pr vis por,mod inf por,fluor. 1260.7 74 / 6 / 5 / 6 / 9
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.3 | 65 |
| RES_DEEP (ohm.m) | 18.73 | 65 |
| RES_SHALLOW (ohm.m) | 19.20 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.47** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3170 m MD — Interval 3165.0 – 3175.0 m

**Sample Description (spreadsheet):** Sample 3170m: 0% Siltstone, 100% fine to coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 70% dll - mod bri |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3152m: clr-trnsl,occ v pl brn,med-com crs, mnr vf aggs,sbang,sbrnd,mod-occ pr srt,wk sil cmt, 3156 fri vf aggs,com lse crs,pr vis por,mod inf por,fluor. 1260.7 74 / 6 / 5 / 6 / 9
- **SANDSTONE** @ ~3160m: clr-trnsl,occ v pl brn,vf-f aggs,com med-crs lse qtz,sbang-sbrnd,mod wl srt,wk sil cmt, 3164 gen cln,tr kaol mtx in f aggs,com lse med-crs qtz,pr 1260.7 vis-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.5 | 66 |
| RES_DEEP (ohm.m) | 20.80 | 66 |
| RES_SHALLOW (ohm.m) | 20.57 | 66 |
| **Δ Res (Deep − Shallow)** | **0.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3180 m MD — Interval 3175.0 – 3185.0 m

**Sample Description (spreadsheet):** Sample 3180m: 0% Siltstone, 100% fine to coarse Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 70% dll - mod bri |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3160m: clr-trnsl,occ v pl brn,vf-f aggs,com med-crs lse qtz,sbang-sbrnd,mod wl srt,wk sil cmt, 3164 gen cln,tr kaol mtx in f aggs,com lse med-crs qtz,pr 1260.7 vis-fr inf por,fluor.
- **SANDSTONE** @ ~3167m: clr-trnsl,occ v pl brn,vf-f aggs,com med-crs lse qtz,sbang-sbrnd,mod wl srt,wk sil cmt, gen cln,tr kaol mtx in f aggs,com lse med-crs qtz,pr 3176 vis-fr inf por,fluor. 1260.6
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 65 |
| RES_DEEP (ohm.m) | 20.45 | 65 |
| RES_SHALLOW (ohm.m) | 19.98 | 65 |
| **Δ Res (Deep − Shallow)** | **0.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3190 m MD — Interval 3185.0 – 3195.0 m

**Sample Description (spreadsheet):** Sample 3190m: 0% Siltstone, 100% fine to medium Sandstone, 90% moderately bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% mod bri |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3184m: trnsl-clr,pl brn,com vf-f aggs,occ med-rr lse crs,sbang-sbrnd,occ ang,mod wl srt, 81 / 6 / 4 / 4 / 5 173U wk-frm sil cmt,tr kaol mtx,fri-frm aggs,pr vis por, fluor.
- **SANDSTONE** @ ~3194m: trnsl-clr,pl brn,com vf-f aggs,occ 1260.5 med-rr lse crs,sbang-sbrnd,occ ang,mod wl srt, wk-frm sil cmt,tr kaol mtx,fri-frm aggs,pr vis por, fluor. 80 / 6 / 4 / 4 / 6 163U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.2 | 66 |
| RES_DEEP (ohm.m) | 19.76 | 66 |
| RES_SHALLOW (ohm.m) | 20.07 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.31** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3200 m MD — Interval 3195.0 – 3205.0 m

**Sample Description (spreadsheet):** Sample 3200m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3184m: trnsl-clr,pl brn,com vf-f aggs,occ med-rr lse crs,sbang-sbrnd,occ ang,mod wl srt, 81 / 6 / 4 / 4 / 5 173U wk-frm sil cmt,tr kaol mtx,fri-frm aggs,pr vis por, fluor.
- **SANDSTONE** @ ~3194m: trnsl-clr,pl brn,com vf-f aggs,occ 1260.5 med-rr lse crs,sbang-sbrnd,occ ang,mod wl srt, wk-frm sil cmt,tr kaol mtx,fri-frm aggs,pr vis por, fluor. 80 / 6 / 4 / 4 / 6 163U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.4 | 66 |
| RES_DEEP (ohm.m) | 17.97 | 66 |
| RES_SHALLOW (ohm.m) | 18.74 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.77** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3210 m MD — Interval 3205.0 – 3215.0 m

**Sample Description (spreadsheet):** Sample 3210m: 0% Siltstone, 100% fine to medium Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3194m: trnsl-clr,pl brn,com vf-f aggs,occ 1260.5 med-rr lse crs,sbang-sbrnd,occ ang,mod wl srt, wk-frm sil cmt,tr kaol mtx,fri-frm aggs,pr vis por, fluor. 80 / 6 / 4 / 4 / 6 163U
- **SANDSTONE** @ ~3204m: trnsl-clr,pl brn,com vf-f aggs,mnr med,sbang-sbrnd,occ ang,mod wl srt,wk-frm sil cmt,tr kaol mtx,fri-frm aggs,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.9 | 65 |
| RES_DEEP (ohm.m) | 16.38 | 65 |
| RES_SHALLOW (ohm.m) | 17.23 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.86** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3220 m MD — Interval 3215.0 – 3225.0 m

**Sample Description (spreadsheet):** Sample 3220m: 0% Siltstone, 100% very fine to fine Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3204m: trnsl-clr,pl brn,com vf-f aggs,mnr med,sbang-sbrnd,occ ang,mod wl srt,wk-frm sil cmt,tr kaol mtx,fri-frm aggs,pr vis por,fluor.
- **SANDSTONE** @ ~3212m: clr-trnsl,off wh,vf-pred f,lse qtz, sbang-sbrnd,gen wl srt,wk-nil sil cmt,cln,sucr,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.9 | 66 |
| RES_DEEP (ohm.m) | 16.88 | 66 |
| RES_SHALLOW (ohm.m) | 17.92 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.04** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3230 m MD — Interval 3225.0 – 3235.0 m

**Sample Description (spreadsheet):** Sample 3230m: 0% Siltstone, 100% very fine to fine Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3212m: clr-trnsl,off wh,vf-pred f,lse qtz, sbang-sbrnd,gen wl srt,wk-nil sil cmt,cln,sucr,fr inf por,fluor.
- **SANDSTONE** @ ~3224m: clr-trnsl,off wh,vf-pred f,lse qtz, sbang-sbrnd,gen wl srt,wk-nil sil cmt,cln,sucr,fr inf por,fluor. 81 / 6 / 4 / 4 / 5 209U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 66 |
| RES_DEEP (ohm.m) | 18.45 | 66 |
| RES_SHALLOW (ohm.m) | 19.01 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.56** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3240 m MD — Interval 3235.0 – 3245.0 m

**Sample Description (spreadsheet):** Sample 3240m: 0% Siltstone, 100% very fine to fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 90.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3224m: clr-trnsl,off wh,vf-pred f,lse qtz, sbang-sbrnd,gen wl srt,wk-nil sil cmt,cln,sucr,fr inf por,fluor. 81 / 6 / 4 / 4 / 5 209U
- **SANDSTONE** @ ~3232m: clr-trnsl,off wh,vf-pred f,lse qtz, sbang-sbrnd,gen wl srt,wk-nil sil cmt,cln,sucr,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 65 |
| RES_DEEP (ohm.m) | 18.61 | 65 |
| RES_SHALLOW (ohm.m) | 19.02 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3250 m MD — Interval 3245.0 – 3255.0 m

**Sample Description (spreadsheet):** Sample 3250m: 0% Siltstone, 100% very fine to fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 135.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3232m: clr-trnsl,off wh,vf-pred f,lse qtz, sbang-sbrnd,gen wl srt,wk-nil sil cmt,cln,sucr,fr inf por,fluor.
- **SANDSTONE** @ ~3240m: clr-trnsl,mnr pl brn,vf-pred f, sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,pred 32 12 4 5 4 9.8 lse f grs,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.5 | 66 |
| RES_DEEP (ohm.m) | 18.08 | 66 |
| RES_SHALLOW (ohm.m) | 18.74 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.66** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3260 m MD — Interval 3255.0 – 3265.0 m

**Sample Description (spreadsheet):** Sample 3260m: 0% Siltstone, 100% very fine to medium Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 40% dll - mod bri |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3240m: clr-trnsl,mnr pl brn,vf-pred f, sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,pred 32 12 4 5 4 9.8 lse f grs,fr inf por,fluor.
- **SANDSTONE** @ ~3252m: clr-trnsl,mnr pl brn,vf-pred f,occ med-rr crs lse qtz,sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,pred lse f grs,fr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.3 | 65 |
| RES_DEEP (ohm.m) | 17.99 | 65 |
| RES_SHALLOW (ohm.m) | 18.56 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.57** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3270 m MD — Interval 3265.0 – 3275.0 m

**Sample Description (spreadsheet):** Sample 3270m: 0% Siltstone, 100% very fine to fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 140.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3252m: clr-trnsl,mnr pl brn,vf-pred f,occ med-rr crs lse qtz,sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,pred lse f grs,fr inf por,fluor.
- **SANDSTONE** @ ~3264m: clr-trnsl,mnr pl brn,vf-pred f, 80 / 6 / 4 / 4 / 6 156U sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,pred lse f grs,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.7 | 66 |
| RES_DEEP (ohm.m) | 18.74 | 66 |
| RES_SHALLOW (ohm.m) | 19.59 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.85** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3280 m MD — Interval 3275.0 – 3285.0 m

**Sample Description (spreadsheet):** Sample 3280m: 0% Siltstone, 100% very fine to fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3264m: clr-trnsl,mnr pl brn,vf-pred f, 80 / 6 / 4 / 4 / 6 156U sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,pred lse f grs,fr inf por,fluor.
- **SANDSTONE** @ ~3273m: trnsl-clr,v pl brn i/p,vf-pred f, 1259.4 sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,lse f 79 / 6 / 4 / 5 / 6 170U qtz,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.5 | 66 |
| RES_DEEP (ohm.m) | 20.17 | 66 |
| RES_SHALLOW (ohm.m) | 20.61 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.44** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3290 m MD — Interval 3285.0 – 3295.0 m

**Sample Description (spreadsheet):** Sample 3290m: 0% Siltstone, 100% very fine to fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 165.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3273m: trnsl-clr,v pl brn i/p,vf-pred f, 1259.4 sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,lse f 79 / 6 / 4 / 5 / 6 170U qtz,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3273m: trnsl-clr,v pl brn i/p,vf-pred f, 1259.3 sbang-sbrnd,wl srt,sucr i/p,wk sil cmt,gen cln,lse f qtz,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.2 | 65 |
| RES_DEEP (ohm.m) | 22.20 | 65 |
| RES_SHALLOW (ohm.m) | 22.36 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.17** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3300 m MD — Interval 3295.0 – 3305.0 m

**Sample Description (spreadsheet):** Sample 3300m: 0% Siltstone, 100% very fine to fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% dll - mod bri |
| Total Gas | 165.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3312m: clr,trnsl,f gr,rr med-crs,sbang-sbrnd, wl srt,wk sil cmt,nil vis mtx,tr mic,fri-lse,fr vis & inf por,mod bri fluor. 3316 83 / 6 / 3 / 4 / 4 258U 1258.9

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.1 | 66 |
| RES_DEEP (ohm.m) | 22.31 | 66 |
| RES_SHALLOW (ohm.m) | 22.37 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3310 m MD — Interval 3305.0 – 3315.0 m

**Sample Description (spreadsheet):** Sample 3310m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 150.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3312m: clr,trnsl,f gr,rr med-crs,sbang-sbrnd, wl srt,wk sil cmt,nil vis mtx,tr mic,fri-lse,fr vis & inf por,mod bri fluor. 3316 83 / 6 / 3 / 4 / 4 258U 1258.9
- **SANDSTONE** @ ~3324m: clr,trnsl,f gr,sbrnd-sbang,wl srt,wk sil cmt,nil vis mtx,loc com coaly frags,tr mic,fri-lse,fr inf por,dll fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.1 | 65 |
| RES_DEEP (ohm.m) | 21.93 | 65 |
| RES_SHALLOW (ohm.m) | 21.67 | 65 |
| **Δ Res (Deep − Shallow)** | **0.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3320 m MD — Interval 3315.0 – 3325.0 m

**Sample Description (spreadsheet):** Sample 3320m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3312m: clr,trnsl,f gr,rr med-crs,sbang-sbrnd, wl srt,wk sil cmt,nil vis mtx,tr mic,fri-lse,fr vis & inf por,mod bri fluor. 3316 83 / 6 / 3 / 4 / 4 258U 1258.9
- **SANDSTONE** @ ~3324m: clr,trnsl,f gr,sbrnd-sbang,wl srt,wk sil cmt,nil vis mtx,loc com coaly frags,tr mic,fri-lse,fr inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.9 | 66 |
| RES_DEEP (ohm.m) | 21.86 | 66 |
| RES_SHALLOW (ohm.m) | 22.13 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3330 m MD — Interval 3325.0 – 3335.0 m

**Sample Description (spreadsheet):** Sample 3330m: 0% Siltstone, 100% fine Sandstone, 100% dull FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 100% dll |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3312m: clr,trnsl,f gr,rr med-crs,sbang-sbrnd, wl srt,wk sil cmt,nil vis mtx,tr mic,fri-lse,fr vis & inf por,mod bri fluor. 3316 83 / 6 / 3 / 4 / 4 258U 1258.9
- **SANDSTONE** @ ~3324m: clr,trnsl,f gr,sbrnd-sbang,wl srt,wk sil cmt,nil vis mtx,loc com coaly frags,tr mic,fri-lse,fr inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.3 | 66 |
| RES_DEEP (ohm.m) | 19.58 | 66 |
| RES_SHALLOW (ohm.m) | 20.35 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.76** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3340 m MD — Interval 3335.0 – 3345.0 m

**Sample Description (spreadsheet):** Sample 3340m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 178.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3324m: clr,trnsl,f gr,sbrnd-sbang,wl srt,wk sil cmt,nil vis mtx,loc com coaly frags,tr mic,fri-lse,fr inf por,dll fluor.
- **SANDSTONE** @ ~3332m: clr,trnsl,off wh,f-rr med crs, sbrnd-sbang,wl srt,wk sil cmt,nil-tr wh arg mtx,tr mic, fri-lse,fr vis & inf por,mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.4 | 65 |
| RES_DEEP (ohm.m) | 17.17 | 65 |
| RES_SHALLOW (ohm.m) | 18.23 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3350 m MD — Interval 3345.0 – 3355.0 m

**Sample Description (spreadsheet):** Sample 3350m: 5% Siltstone, 95% fine to coarse Sandstone, 100% dull FLUOR in SST. TG 106U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll |
| Total Gas | 106.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3332m: clr,trnsl,off wh,f-rr med crs, sbrnd-sbang,wl srt,wk sil cmt,nil-tr wh arg mtx,tr mic, fri-lse,fr vis & inf por,mod bri fluor.
- **SILTSTONE** @ ~3340m: lt gry,lt brn gry,aren,micmic,tr liths,tr carb spks,mod hd,sbblky. 3344 FLUOR: 3341.0-3390.0m; 50-100% of SST; 1258.6 v dim-dll yel/grn ptchy-evn fluor,slw bldg ct, pl blu-wh c/ct,thn yel/wh r/r.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.7 | 66 |
| RES_DEEP (ohm.m) | 15.26 | 66 |
| RES_SHALLOW (ohm.m) | 16.06 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.80** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3360 m MD — Interval 3355.0 – 3365.0 m

**Sample Description (spreadsheet):** Sample 3360m: 0% Siltstone, 100% fine Sandstone, 50% dull FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 50% dll |
| Total Gas | 97.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3340m: lt gry,lt brn gry,aren,micmic,tr liths,tr carb spks,mod hd,sbblky. 3344 FLUOR: 3341.0-3390.0m; 50-100% of SST; 1258.6 v dim-dll yel/grn ptchy-evn fluor,slw bldg ct, pl blu-wh c/ct,thn yel/wh r/r.
- **SANDSTONE** @ ~3354m: clr,f gr,sbang-sbrnd,wl srt,wk sil cmt, 33 12 5 5 6 8.4 nil vis mtx,com sid frags,tr mic,lse & cln,fr inf por,v dim fluor. 72 / 6 / 5 / 7 / 10 115U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.4 | 66 |
| RES_DEEP (ohm.m) | 14.69 | 66 |
| RES_SHALLOW (ohm.m) | 15.27 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.58** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3370 m MD — Interval 3365.0 – 3373.5 m

**Sample Description (spreadsheet):** Sample 3370m: 20% Siltstone, 80% fine Sandstone, 50% dull FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f (max: F) |
| Fluorescence | 50% dll |
| Total Gas | 114.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3354m: clr,f gr,sbang-sbrnd,wl srt,wk sil cmt, 33 12 5 5 6 8.4 nil vis mtx,com sid frags,tr mic,lse & cln,fr inf por,v dim fluor. 72 / 6 / 5 / 7 / 10 115U
- **SILTSTONE** @ ~3364m: lt gry,lt brn gry,aren,micmic,tr liths,tr coaly frags,tr carb spks,mod hd,sbblky. 73 / 6 / 5 / 6 / 10 112U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.6 | 55 |
| RES_DEEP (ohm.m) | 14.88 | 55 |
| RES_SHALLOW (ohm.m) | 15.50 | 55 |
| **Δ Res (Deep − Shallow)** | **-0.61** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3377 m MD — Interval 3373.5 – 3378.5 m

**Sample Description (spreadsheet):** Sample 3377m: 0% Siltstone, 100% fine to coarse Sandstone, 50% dull FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 50% dll |
| Total Gas | 123.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3364m: lt gry,lt brn gry,aren,micmic,tr liths,tr coaly frags,tr carb spks,mod hd,sbblky. 73 / 6 / 5 / 6 / 10 112U
- **SANDSTONE** @ ~3372m: clr,trnsl,f-med,rr crs,mod wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,v dim fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.2 | 33 |
| RES_DEEP (ohm.m) | 13.80 | 33 |
| RES_SHALLOW (ohm.m) | 14.80 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.00** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3380 m MD — Interval 3378.5 – 3385.0 m

**Sample Description (spreadsheet):** Sample 3380m: 0% Siltstone, 100% fine to coarse Sandstone, 100% dull FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll |
| Total Gas | 114.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3364m: lt gry,lt brn gry,aren,micmic,tr liths,tr coaly frags,tr carb spks,mod hd,sbblky. 73 / 6 / 5 / 6 / 10 112U
- **SANDSTONE** @ ~3372m: clr,trnsl,f-med,rr crs,mod wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,v dim fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.3 | 43 |
| RES_DEEP (ohm.m) | 15.24 | 43 |
| RES_SHALLOW (ohm.m) | 15.44 | 43 |
| **Δ Res (Deep − Shallow)** | **-0.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3390 m MD — Interval 3385.0 – 3395.0 m

**Sample Description (spreadsheet):** Sample 3390m: 0% Siltstone, 100% fine Sandstone, 90% dull FLUOR in SST. TG 112U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 90% dll |
| Total Gas | 112.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3372m: clr,trnsl,f-med,rr crs,mod wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,v dim fluor.
- **SANDSTONE** @ ~3384m: trnsl,clr,f gr,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,tr sid frags,lse & cln,fr inf por,dim fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.3 | 65 |
| RES_DEEP (ohm.m) | 21.14 | 65 |
| RES_SHALLOW (ohm.m) | 21.40 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3400 m MD — Interval 3395.0 – 3405.0 m

**Sample Description (spreadsheet):** Sample 3400m: 0% Siltstone, 100% fine to coarse Sandstone, 90% dull FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% dll |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3384m: trnsl,clr,f gr,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,tr sid frags,lse & cln,fr inf por,dim fluor.
- **SANDSTONE** @ ~3380m: trnsl,clr,f,rr med-crs grs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr mic,lse & cln,fr inf por,dll fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.4 | 66 |
| RES_DEEP (ohm.m) | 21.08 | 66 |
| RES_SHALLOW (ohm.m) | 21.52 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.44** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3410 m MD — Interval 3405.0 – 3415.0 m

**Sample Description (spreadsheet):** Sample 3410m: 0% Siltstone, 100% fine Sandstone, 90% dull FLUOR in SST. TG 139U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 90% dll |
| Total Gas | 139.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3412m: lt gry,lt brn gry,aren,micmic,tr liths,tr carb spks,loc com coaly frags,mod hd,sbblky.
- **SANDSTONE** @ ~3424m: clr,trnsl,f gr,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,tr mic,tr sid frags,tr liths,lse & cln,fr inf por,dim fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 66 |
| RES_DEEP (ohm.m) | 18.31 | 66 |
| RES_SHALLOW (ohm.m) | 18.87 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.56** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3420 m MD — Interval 3415.0 – 3425.0 m

**Sample Description (spreadsheet):** Sample 3420m: 5% Siltstone, 95% fine to coarse Sandstone, 100% dull FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% dll |
| Total Gas | 121.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3412m: lt gry,lt brn gry,aren,micmic,tr liths,tr carb spks,loc com coaly frags,mod hd,sbblky.
- **SANDSTONE** @ ~3424m: clr,trnsl,f gr,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,tr mic,tr sid frags,tr liths,lse & cln,fr inf por,dim fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.0 | 65 |
| RES_DEEP (ohm.m) | 16.29 | 65 |
| RES_SHALLOW (ohm.m) | 16.71 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3430 m MD — Interval 3425.0 – 3435.0 m

**Sample Description (spreadsheet):** Sample 3430m: 0% Siltstone, 100% fine Sandstone, 90% dull FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 90% dll |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3412m: lt gry,lt brn gry,aren,micmic,tr liths,tr carb spks,loc com coaly frags,mod hd,sbblky.
- **SANDSTONE** @ ~3424m: clr,trnsl,f gr,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,tr mic,tr sid frags,tr liths,lse & cln,fr inf por,dim fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.7 | 44 |
| RES_DEEP (ohm.m) | 17.09 | 44 |
| RES_SHALLOW (ohm.m) | 18.30 | 44 |
| **Δ Res (Deep − Shallow)** | **-1.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3440 m MD — Interval 3435.0 – 3440.5 m

**Sample Description (spreadsheet):** Sample 3440m: 0% Siltstone, 100% fine Sandstone, 100% dull FLUOR in SST. TG 225U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 100% dll |
| Total Gas | 225.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3424m: clr,trnsl,f gr,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,tr mic,tr sid frags,tr liths,lse & cln,fr inf por,dim fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

### 3441 m MD — Interval 3440.5 – 3443.5 m

**Sample Description (spreadsheet):** Sample 3441m: 0% Siltstone, 100% fine Sandstone, 100% dull FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f (max: F) |
| Fluorescence | 100% dll |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 167 |
| Depth range | 1630 – 3441 m |
| Avg % Sandstone | 96.5% |
| Avg Δ Res (Deep−Shallow) | -0.42 ohm.m |
| Max Δ Res | 1.08 ohm.m |
| Min Δ Res | -3.17 ohm.m |
| Mudlog matches | 166 / 167 |
