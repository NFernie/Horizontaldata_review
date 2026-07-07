# MCKINLAY 20 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 07:24 UTC  
**Well:** MCKINLAY 20 (MCKINLAY 20)  
**TD:** 3000 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 20_Mudlog_Spud-3000m_TD_Field Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `McKinlay 20 Hz Section samples descriptions.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_20` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1633.24 | DC30.xlsx |
| McKinlay Member (shallowest) | 1633.50 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1633.50 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2375.37 m MD
- 2741.00 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 2342.56 | 2342.56 | 0.00 | 2375.37 | 32.8 |
| 2693.23 | 2692.20 | 1.03 | 2741.00 | 47.8 |

**McKinlay Member analysis window:** 1633.5 – 3000.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 2343–2375 m (overburden), 2693–2741 m (overburden)

**Samples in McKinlay Member:** 275 of 328 total
- Excluded pre-reservoir: 28
- Excluded overburden intervals: 25

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 20 → `MCKINLAY 20` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
9. **McKinlay legacy spreadsheet:** Sheet1 columns F (TG), G (%SS), H (%fluoro) used directly; column A description text parsed for grain size, fluorescence brightness, and siderite.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1635 m MD — Interval 1633.5 – 1636.5 m

**Sample Description (spreadsheet):** Sample 1635m: 45% siltstone. 55% very fine to fine, (trace medium to coarse) sandstone. TG: 15U, 5% dull to mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 55.00000000000001 |
| Grain Size | very fine to fine, (trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 5.0% dull to mod bri |
| Total Gas | 15.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 20 |
| RES_DEEP (ohm.m) | 19.67 | 20 |
| RES_SHALLOW (ohm.m) | 15.85 | 20 |
| **Δ Res (Deep − Shallow)** | **3.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1638 m MD — Interval 1636.5 – 1639.0 m

**Sample Description (spreadsheet):** Sample 1638m: 35% siltstone. 65% very fine to fine, (trace medium to coarse) sandstone. TG: 22U, 10% dull to mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 65.0 |
| Grain Size | very fine to fine, (trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 10.0% dull to mod bri |
| Total Gas | 22.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.8 | 16 |
| RES_DEEP (ohm.m) | 21.20 | 16 |
| RES_SHALLOW (ohm.m) | 17.91 | 16 |
| **Δ Res (Deep − Shallow)** | **3.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1640 m MD — Interval 1639.0 – 1640.5 m

**Sample Description (spreadsheet):** 30% Siltstone, 70% very fine to fine, minor medium Sandstone, 100% mod bri to bri FLUOR, TG 512.0U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | — |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri to bri |
| Total Gas | 512.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.5 | 10 |
| RES_DEEP (ohm.m) | 23.67 | 10 |
| RES_SHALLOW (ohm.m) | 20.28 | 10 |
| **Δ Res (Deep − Shallow)** | **3.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1641 m MD — Interval 1640.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1641m: 40% siltstone. 60% very fine to fine (minor medium to coarse) sandstone. TG: 512U (peak), 60% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine (minor medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 60.0% mod bri |
| Total Gas | 512.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 13 |
| RES_DEEP (ohm.m) | 24.59 | 13 |
| RES_SHALLOW (ohm.m) | 20.14 | 13 |
| **Δ Res (Deep − Shallow)** | **4.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1644 m MD — Interval 1642.5 – 1645.5 m

**Sample Description (spreadsheet):** Sample 1644m: 30% siltstone. 70% very fine to coarse, trace very coarse sandstone. TG: 775U (peak), 90% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri-bri |
| Total Gas | 774.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 20 |
| RES_DEEP (ohm.m) | 23.53 | 20 |
| RES_SHALLOW (ohm.m) | 19.32 | 20 |
| **Δ Res (Deep − Shallow)** | **4.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1647 m MD — Interval 1645.5 – 1648.5 m

**Sample Description (spreadsheet):** Sample 1647m: 25% siltstone. 75% very fine to coarse, trace very coarse sandstone. TG: 468U, 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% bri-mod bri |
| Total Gas | 468.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.7 | 19 |
| RES_DEEP (ohm.m) | 22.53 | 19 |
| RES_SHALLOW (ohm.m) | 21.58 | 19 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1650 m MD — Interval 1648.5 – 1651.5 m

**Sample Description (spreadsheet):** Sample 1650m: 20% siltstone. 80% very fine to very coarse sandstone. TG: 518U, 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% bri-mod bri |
| Total Gas | 518.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.8 | 20 |
| RES_DEEP (ohm.m) | 23.47 | 20 |
| RES_SHALLOW (ohm.m) | 21.92 | 20 |
| **Δ Res (Deep − Shallow)** | **1.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1653 m MD — Interval 1651.5 – 1654.5 m

**Sample Description (spreadsheet):** Sample 1653m: 10% siltstone. 90% very fine to very coarse sandstone. TG: 436U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 436.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.8 | 20 |
| RES_DEEP (ohm.m) | 23.46 | 20 |
| RES_SHALLOW (ohm.m) | 22.52 | 20 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1656 m MD — Interval 1654.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1656m: 15% siltstone. 85% very fine to fine, (rare medium to very coarse) sandstone. TG: 444U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, (rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 444.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 19 |
| RES_DEEP (ohm.m) | 24.24 | 19 |
| RES_SHALLOW (ohm.m) | 22.44 | 19 |
| **Δ Res (Deep − Shallow)** | **1.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1659 m MD — Interval 1657.5 – 1660.5 m

**Sample Description (spreadsheet):** Sample 1659m: 20% siltstone. 80% very fine to fine, (rare medium to very coarse) sandstone. TG: 484U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, (rare medium to very coarse (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 484.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 20 |
| RES_DEEP (ohm.m) | 23.41 | 20 |
| RES_SHALLOW (ohm.m) | 20.34 | 20 |
| **Δ Res (Deep − Shallow)** | **3.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1662 m MD — Interval 1660.5 – 1663.5 m

**Sample Description (spreadsheet):** Sample 1662m: 15% siltstone. 85% very fine to medium, (trace coarse) sandstone. TG: 556U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, (trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 556.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 20 |
| RES_DEEP (ohm.m) | 23.32 | 20 |
| RES_SHALLOW (ohm.m) | 20.85 | 20 |
| **Δ Res (Deep − Shallow)** | **2.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1665 m MD — Interval 1663.5 – 1668.0 m

**Sample Description (spreadsheet):** Sample 1665m: 20% siltstone. 80% very fine to very coarse (very fine to fine aggregates) sandstone. TG: 512U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to very coarse (very fine to fine aggregates (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 512.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 29 |
| RES_DEEP (ohm.m) | 23.61 | 29 |
| RES_SHALLOW (ohm.m) | 21.35 | 29 |
| **Δ Res (Deep − Shallow)** | **2.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1671 m MD — Interval 1668.0 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1671m: 25% siltstone. 75% very fine to fine, trace medium to coarse sandstone. TG: 443U, 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri |
| Total Gas | 443.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 30 |
| RES_DEEP (ohm.m) | 23.04 | 30 |
| RES_SHALLOW (ohm.m) | 20.13 | 30 |
| **Δ Res (Deep − Shallow)** | **2.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1674 m MD — Interval 1672.5 – 1675.5 m

**Sample Description (spreadsheet):** Sample 1674m: 25% siltstone. 75% very fine to fine, trace medium to coarse sandstone. TG: 473U, 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine, trace medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri |
| Total Gas | 473.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,lt gry brn,med brn, clr,trnsl,vf-v crs,vf-f in aggs,mod srt, sbang-sbrnd,wk-mod sil cmt,mnr gry-wh arg mtx,fri-mod hd,com disagg qtz grs,tr loc mic flks,v pr vis por,gd-v gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 20 |
| RES_DEEP (ohm.m) | 23.82 | 20 |
| RES_SHALLOW (ohm.m) | 21.00 | 20 |
| **Δ Res (Deep − Shallow)** | **2.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1677 m MD — Interval 1675.5 – 1678.5 m

**Sample Description (spreadsheet):** Sample 1677m: 20% siltstone. 80% very fine to fine, minor medium, trace coarse sandstone. TG: 553U, 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, minor medium, trace coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri |
| Total Gas | 553.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 19 |
| RES_DEEP (ohm.m) | 24.98 | 19 |
| RES_SHALLOW (ohm.m) | 21.74 | 19 |
| **Δ Res (Deep − Shallow)** | **3.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1680 m MD — Interval 1678.5 – 1681.5 m

**Sample Description (spreadsheet):** Sample 1680m: 15% siltstone. 85% very fine to fine, trace medium, sandstone. TG: 600U, 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri |
| Total Gas | 600.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 20 |
| RES_DEEP (ohm.m) | 22.53 | 20 |
| RES_SHALLOW (ohm.m) | 20.37 | 20 |
| **Δ Res (Deep − Shallow)** | **2.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1683 m MD — Interval 1681.5 – 1684.5 m

**Sample Description (spreadsheet):** Sample 1683m: 20% siltstone. 80% very fine to fine, minor medium sandstone. TG: 550U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 550.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 20 |
| RES_DEEP (ohm.m) | 21.63 | 20 |
| RES_SHALLOW (ohm.m) | 20.16 | 20 |
| **Δ Res (Deep − Shallow)** | **1.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1686 m MD — Interval 1684.5 – 1688.0 m

**Sample Description (spreadsheet):** Sample 1686m: 15% siltstone. 85% very fine to medium sandstone. TG: 534U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 534.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 23 |
| RES_DEEP (ohm.m) | 22.16 | 23 |
| RES_SHALLOW (ohm.m) | 20.91 | 23 |
| **Δ Res (Deep − Shallow)** | **1.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1690 m MD — Interval 1688.0 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 15% siltstone. 85% very fine to fine, trace medium sandstone. TG: 611U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 611.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 29 |
| RES_DEEP (ohm.m) | 23.06 | 29 |
| RES_SHALLOW (ohm.m) | 21.30 | 29 |
| **Δ Res (Deep − Shallow)** | **1.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 10% siltstone. 90% very fine to fine sandstone. TG: 1035U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 1035.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,lt-med gry brn,clr, trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,mod-wk sil cmt,mnr brn-gry arg mtx,mnr slty lams,tr carb spks,fri-mod hd,mnr disagg qtz grs,v pr-pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 33 |
| RES_DEEP (ohm.m) | 24.37 | 33 |
| RES_SHALLOW (ohm.m) | 22.92 | 33 |
| **Δ Res (Deep − Shallow)** | **1.45** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 5% siltstone. 95% very fine to fine sandstone. TG: 1033U, 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% bri |
| Total Gas | 1033.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,lt-med gry brn,clr, trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,mod-wk sil cmt,mnr brn-gry arg mtx,mnr slty lams,tr carb spks,fri-mod hd,mnr disagg qtz grs,v pr-pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 33 |
| RES_DEEP (ohm.m) | 26.00 | 33 |
| RES_SHALLOW (ohm.m) | 24.70 | 33 |
| **Δ Res (Deep − Shallow)** | **1.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 10% siltstone. 90% very fine to fine (tr medium) sandstone. TG: 1148U, 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (tr medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% bri |
| Total Gas | 1148.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,lt-med gry brn,clr, trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,mod-wk sil cmt,mnr brn-gry arg mtx,mnr slty lams,tr carb spks,fri-mod hd,mnr disagg qtz grs,v pr-pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 25.26 | 33 |
| RES_SHALLOW (ohm.m) | 24.57 | 33 |
| **Δ Res (Deep − Shallow)** | **0.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 10% siltstone. 90% very fine to fine sandstone. TG: 996U, 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% bri |
| Total Gas | 996.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,lt-med gry brn,clr, trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,mod-wk sil cmt,mnr brn-gry arg mtx,mnr slty lams,tr carb spks,fri-mod hd,mnr disagg qtz grs,v pr-pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 32 |
| RES_DEEP (ohm.m) | 26.24 | 32 |
| RES_SHALLOW (ohm.m) | 24.10 | 32 |
| **Δ Res (Deep − Shallow)** | **2.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 10% siltstone. 90% very fine to fine sandstone. TG: 1043U, 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% bri-mod bri |
| Total Gas | 1043.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,lt-med gry brn,clr, trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,mod-wk sil cmt,mnr brn-gry arg mtx,mnr slty lams,tr carb spks,fri-mod hd,mnr disagg qtz grs,v pr-pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 26.33 | 33 |
| RES_SHALLOW (ohm.m) | 24.54 | 33 |
| **Δ Res (Deep − Shallow)** | **1.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 15% siltstone. 85% very fine to fine (trace med-crs) sandstone. TG: 1047U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (trace med-crs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 1047.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,lt-med gry brn,clr, trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,mod-wk sil cmt,mnr brn-gry arg mtx,mnr slty lams,tr carb spks,fri-mod hd,mnr disagg qtz grs,v pr-pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 33 |
| RES_DEEP (ohm.m) | 25.55 | 33 |
| RES_SHALLOW (ohm.m) | 23.22 | 33 |
| **Δ Res (Deep − Shallow)** | **2.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 10% siltstone. 90% very fine to fine sandstone. TG: 1050U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 1050.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,lt-med gry brn,clr, trnsl,vf-f,tr med-crs,mod-wl srt,sbang- sbrnd,mod-wk sil cmt,mnr brn-gry arg mtx,mnr slty lams,tr carb spks,fri-mod hd,mnr disagg qtz grs,v pr-pr vis por,
- **SANDSTONE** @ ~1740m: clr,trnsl,pl brn,lt gry brn,lt gry-off wh,vf-f,wl srt,sbang-sbrnd,mod sil cmt,com pl gry brn-off wh arg mtx,occ carb spks,occ slty lams,mnr disagg f qtz grs, mod hd-fri,mnr hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 33 |
| RES_DEEP (ohm.m) | 24.73 | 33 |
| RES_SHALLOW (ohm.m) | 22.44 | 33 |
| **Δ Res (Deep − Shallow)** | **2.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 5% siltstone. 95% very fine to fine, occasionally medium. occasionally to common loose sandstone. TG: 1100U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | siltstone. 95% very fine to fine, occasionally medium. occasionally to common loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 1100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr,trnsl,pl brn,lt gry brn,lt gry-off wh,vf-f,wl srt,sbang-sbrnd,mod sil cmt,com pl gry brn-off wh arg mtx,occ carb spks,occ slty lams,mnr disagg f qtz grs, mod hd-fri,mnr hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.4 | 33 |
| RES_DEEP (ohm.m) | 24.14 | 33 |
| RES_SHALLOW (ohm.m) | 21.38 | 33 |
| **Δ Res (Deep − Shallow)** | **2.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 10% siltstone. 90% very fine to fine, occasionally medium. occasionally to common dissag sandstone. TG: 1090U, 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone. 90% very fine to fine, occasionally medium. occasionally to common dissag (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 1090.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr,trnsl,pl brn,lt gry brn,lt gry-off wh,vf-f,wl srt,sbang-sbrnd,mod sil cmt,com pl gry brn-off wh arg mtx,occ carb spks,occ slty lams,mnr disagg f qtz grs, mod hd-fri,mnr hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 32 |
| RES_DEEP (ohm.m) | 23.20 | 32 |
| RES_SHALLOW (ohm.m) | 19.97 | 32 |
| **Δ Res (Deep − Shallow)** | **3.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 5% siltstone. 95% very fine to fine, sandstone. TG: 1092U, 90% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri-bri |
| Total Gas | 1092.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr,trnsl,pl brn,lt gry brn,lt gry-off wh,vf-f,wl srt,sbang-sbrnd,mod sil cmt,com pl gry brn-off wh arg mtx,occ carb spks,occ slty lams,mnr disagg f qtz grs, mod hd-fri,mnr hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.1 | 33 |
| RES_DEEP (ohm.m) | 21.31 | 33 |
| RES_SHALLOW (ohm.m) | 18.95 | 33 |
| **Δ Res (Deep − Shallow)** | **2.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 5% siltstone. 95% very fine to fine, minor dissag sandstone. TG: 970U, 90% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor dissag (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri-bri |
| Total Gas | 970.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr,trnsl,pl brn,lt gry brn,lt gry-off wh,vf-f,wl srt,sbang-sbrnd,mod sil cmt,com pl gry brn-off wh arg mtx,occ carb spks,occ slty lams,mnr disagg f qtz grs, mod hd-fri,mnr hd,pr vis por,fluor.
- **SANDSTONE** @ ~1760m: clr,trnsl,pl brn,off wh-lt gry,vf-f,tr med,wl srt,sbang-sbrnd,str sil cmt,com off wh-pl gry arg mtx,occ carb spks,mnr-occ slty lams,mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 20.60 | 33 |
| RES_SHALLOW (ohm.m) | 18.38 | 33 |
| **Δ Res (Deep − Shallow)** | **2.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 10% siltstone. 90% very fine to fine, minor dissag sandstone. TG: 611U, 90% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor dissag (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri-bri |
| Total Gas | 611.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr,trnsl,pl brn,lt gry brn,lt gry-off wh,vf-f,wl srt,sbang-sbrnd,mod sil cmt,com pl gry brn-off wh arg mtx,occ carb spks,occ slty lams,mnr disagg f qtz grs, mod hd-fri,mnr hd,pr vis por,fluor.
- **SANDSTONE** @ ~1760m: clr,trnsl,pl brn,off wh-lt gry,vf-f,tr med,wl srt,sbang-sbrnd,str sil cmt,com off wh-pl gry arg mtx,occ carb spks,mnr-occ slty lams,mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 33 |
| RES_DEEP (ohm.m) | 20.48 | 33 |
| RES_SHALLOW (ohm.m) | 17.67 | 33 |
| **Δ Res (Deep − Shallow)** | **2.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 10% siltstone. 90% very fine to fine, minor dissag sandstone. TG: 755U, 85% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor dissag (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 85.0% mod bri-bri |
| Total Gas | 755.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: clr,trnsl,pl brn,lt gry brn,lt gry-off wh,vf-f,wl srt,sbang-sbrnd,mod sil cmt,com pl gry brn-off wh arg mtx,occ carb spks,occ slty lams,mnr disagg f qtz grs, mod hd-fri,mnr hd,pr vis por,fluor.
- **SANDSTONE** @ ~1760m: clr,trnsl,pl brn,off wh-lt gry,vf-f,tr med,wl srt,sbang-sbrnd,str sil cmt,com off wh-pl gry arg mtx,occ carb spks,mnr-occ slty lams,mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 19.77 | 33 |
| RES_SHALLOW (ohm.m) | 17.09 | 33 |
| **Δ Res (Deep − Shallow)** | **2.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 15% siltstone. 85% very fine to fine, minor dissag sandstone. TG: 850U, 90% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, minor dissag (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri-bri |
| Total Gas | 850.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: clr,trnsl,pl brn,off wh-lt gry,vf-f,tr med,wl srt,sbang-sbrnd,str sil cmt,com off wh-pl gry arg mtx,occ carb spks,mnr-occ slty lams,mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 32 |
| RES_DEEP (ohm.m) | 19.98 | 32 |
| RES_SHALLOW (ohm.m) | 17.67 | 32 |
| **Δ Res (Deep − Shallow)** | **2.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 15% siltstone. 85% very fine to fine, rare medium sandstone. TG: 845U, 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri |
| Total Gas | 845.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: clr,trnsl,pl brn,off wh-lt gry,vf-f,tr med,wl srt,sbang-sbrnd,str sil cmt,com off wh-pl gry arg mtx,occ carb spks,mnr-occ slty lams,mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.3 | 33 |
| RES_DEEP (ohm.m) | 20.75 | 33 |
| RES_SHALLOW (ohm.m) | 18.46 | 33 |
| **Δ Res (Deep − Shallow)** | **2.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 10% siltstone. 90% very fine to fine, rare medium sandstone. TG: 840U, 95% mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 95.0% mod bri |
| Total Gas | 840.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: clr,trnsl,pl brn,off wh-lt gry,vf-f,tr med,wl srt,sbang-sbrnd,str sil cmt,com off wh-pl gry arg mtx,occ carb spks,mnr-occ slty lams,mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 33 |
| RES_DEEP (ohm.m) | 20.90 | 33 |
| RES_SHALLOW (ohm.m) | 18.77 | 33 |
| **Δ Res (Deep − Shallow)** | **2.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 10% siltstone. 90% very fine to fine, rare medium sandstone. TG: 840U, 95% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 95.0% mod bri |
| Total Gas | 840.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: clr,trnsl,pl brn,off wh-lt gry,vf-f,tr med,wl srt,sbang-sbrnd,str sil cmt,com off wh-pl gry arg mtx,occ carb spks,mnr-occ slty lams,mod hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 22.01 | 33 |
| RES_SHALLOW (ohm.m) | 19.17 | 33 |
| **Δ Res (Deep − Shallow)** | **2.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 5% siltstone. 95% very fine to fine, rare medium sandstone. TG: 865U, 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri |
| Total Gas | 865.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 33 |
| RES_DEEP (ohm.m) | 22.98 | 33 |
| RES_SHALLOW (ohm.m) | 20.32 | 33 |
| **Δ Res (Deep − Shallow)** | **2.67** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 5% siltstone. 95% very fine to fine, rare medium sandstone. TG: 900U, 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri |
| Total Gas | 900.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 23.98 | 33 |
| RES_SHALLOW (ohm.m) | 20.51 | 33 |
| **Δ Res (Deep − Shallow)** | **3.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 10% siltstone. 90% very fine to fine, minor medium sandstone. TG: 875U, 100% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri to bri |
| Total Gas | 875.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 32 |
| RES_DEEP (ohm.m) | 24.85 | 32 |
| RES_SHALLOW (ohm.m) | 21.67 | 32 |
| **Δ Res (Deep − Shallow)** | **3.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 10% siltstone. 90% very fine to fine, minor medium, trace coarse, minor to occasional dissag sandstone. TG: 895U, 100% bri to mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium, trace coarse, minor to occasional dissag (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% bri to mod bri |
| Total Gas | 895.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,mnr med,tr crs,mod wl srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,mnr-occ dissag qtz grs,occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 26.40 | 33 |
| RES_SHALLOW (ohm.m) | 22.80 | 33 |
| **Δ Res (Deep − Shallow)** | **3.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 10% siltstone. 90% very fine to fine, occasionally medium to coarse, occasional to common loose sandstone. TG: 1100U, 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasionally medium to coarse, occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% bri |
| Total Gas | 1100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,mnr med,tr crs,mod wl srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,mnr-occ dissag qtz grs,occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 33 |
| RES_DEEP (ohm.m) | 27.38 | 33 |
| RES_SHALLOW (ohm.m) | 25.24 | 33 |
| **Δ Res (Deep − Shallow)** | **2.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 5% siltstone. 95% very to fine, occasionally medium to coarse, occasionally to common loose sandstone. TG: 1260U, 100% v bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | siltstone. 95% very to fine, occasionally medium to coarse, occasionally to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% v bri |
| Total Gas | 1260.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,mnr med,tr crs,mod wl srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,mnr-occ dissag qtz grs,occ
- **SANDSTONE** @ ~1820m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,occ qtz ovgths/shrds,occ-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 33 |
| RES_DEEP (ohm.m) | 27.50 | 33 |
| RES_SHALLOW (ohm.m) | 25.37 | 33 |
| **Δ Res (Deep − Shallow)** | **2.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 100% very fine to fine, occasionally medium to coarse. occasional to common loose sandstone. TG: 1215U, 100% v bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasionally medium to coarse. occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% v bri |
| Total Gas | 1215.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,mnr med,tr crs,mod wl srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,mnr-occ dissag qtz grs,occ
- **SANDSTONE** @ ~1820m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,occ qtz ovgths/shrds,occ-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 33 |
| RES_DEEP (ohm.m) | 31.54 | 33 |
| RES_SHALLOW (ohm.m) | 27.49 | 33 |
| **Δ Res (Deep − Shallow)** | **4.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 100% very fine to fine, occasionally medium to coarse. common loose sandstone. TG: 1270U, 100% v bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasionally medium to coarse. common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% v bri |
| Total Gas | 1270.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,mnr med,tr crs,mod wl srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,mnr-occ dissag qtz grs,occ
- **SANDSTONE** @ ~1820m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,occ qtz ovgths/shrds,occ-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 32 |
| RES_DEEP (ohm.m) | 35.62 | 32 |
| RES_SHALLOW (ohm.m) | 31.82 | 32 |
| **Δ Res (Deep − Shallow)** | **3.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 100% very fine to fine, occasionally medium to coarse. Occasional to common loose sandstone. TG: 1280U, 100% v bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasionally medium to coarse. Occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% v bri |
| Total Gas | 1280.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,mnr med,tr crs,mod wl srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,mnr-occ dissag qtz grs,occ
- **SANDSTONE** @ ~1820m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,occ qtz ovgths/shrds,occ-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.8 | 33 |
| RES_DEEP (ohm.m) | 47.11 | 33 |
| RES_SHALLOW (ohm.m) | 36.63 | 33 |
| **Δ Res (Deep − Shallow)** | **10.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 100% very fine to fine, occasionally medium to coarse. Occasional to common loose sandstone. TG: 1290U, 100% v bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasionally medium to coarse. Occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% v bri |
| Total Gas | 1290.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,mnr med,tr crs,mod wl srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,mnr-occ dissag qtz grs,occ
- **SANDSTONE** @ ~1820m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,occ qtz ovgths/shrds,occ-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 40.24 | 33 |
| RES_SHALLOW (ohm.m) | 30.95 | 33 |
| **Δ Res (Deep − Shallow)** | **9.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 10% siltstone. 90% very fine to fine, occasionally medium to coarse. Occasional to common loose sandstone. TG: 1285U, 100% v bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone. 90% very fine to fine, occasionally medium to coarse. Occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% v bri |
| Total Gas | 1285.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,occ qtz ovgths/shrds,occ-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 33 |
| RES_DEEP (ohm.m) | 39.79 | 33 |
| RES_SHALLOW (ohm.m) | 29.58 | 33 |
| **Δ Res (Deep − Shallow)** | **10.20** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1835 m MD — Interval 1832.5 – 1837.0 m

**Sample Description (spreadsheet):** Sample 1835m: 10% siltstone. 90% very fine to coarse, predominantly loose Sandstone. TG:1270U. 90% mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to coarse, predominantly loose Sandstone. TG:1270U. 90% mod bri |
| Total Gas | 1270.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl.pl gry,pl brn,pl gry-off wh,vf-f,occ med-crs,mod pr srt, sbang-sbrnd,mod sil cmt,com off wh-pl gry arg mtx,tr slty lams,occ carb spks, mnr micmic,occ qtz ovgths/shrds,occ-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.2 | 29 |
| RES_DEEP (ohm.m) | 37.46 | 29 |
| RES_SHALLOW (ohm.m) | 28.38 | 29 |
| **Δ Res (Deep − Shallow)** | **9.09** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1839 m MD — Interval 1837.0 – 1840.5 m

**Sample Description (spreadsheet):** Sample 1839m: 50% siltstone. 50% very fine to coarse, occasional loose Sandstone. TG:790U. 70% mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to coarse, occasional loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 70.0% siltstone. 50% very fine to coarse, occasional loose Sandstone. TG:790U. 70% mod bri |
| Total Gas | 790.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.2 | 23 |
| RES_DEEP (ohm.m) | 39.14 | 23 |
| RES_SHALLOW (ohm.m) | 28.23 | 23 |
| **Δ Res (Deep − Shallow)** | **10.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1842 m MD — Interval 1840.5 – 1843.5 m

**Sample Description (spreadsheet):** Sample 1842m: 45% siltstone. 55% very fine to coarse, common loose Sandstone. TG:742U. 70% mod bri - dll fluor

| Property | Value |
|----------|-------|
| % Sandstone | 55.00000000000001 |
| Grain Size | very fine to coarse, common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 70.0% siltstone. 55% very fine to coarse, common loose Sandstone. TG:742U. 70% mod bri - dll |
| Total Gas | 742.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.5 | 20 |
| RES_DEEP (ohm.m) | 47.12 | 20 |
| RES_SHALLOW (ohm.m) | 29.60 | 20 |
| **Δ Res (Deep − Shallow)** | **17.52** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1845 m MD — Interval 1843.5 – 1846.5 m

**Sample Description (spreadsheet):** Sample 1845m: 45% siltstone. 55% very fine to coarse, common loose Sandstone. TG:730U. 70% mod bri - dll fluo

| Property | Value |
|----------|-------|
| % Sandstone | 55.00000000000001 |
| Grain Size | very fine to coarse, common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 70.0% nan |
| Total Gas | 730.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.9 | 20 |
| RES_DEEP (ohm.m) | 37.42 | 20 |
| RES_SHALLOW (ohm.m) | 26.40 | 20 |
| **Δ Res (Deep − Shallow)** | **11.03** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1848 m MD — Interval 1846.5 – 1849.5 m

**Sample Description (spreadsheet):** Sample 1848m: 40% siltstone. 60% very fine to coarse, predominantly loose Sandstone. TG:780U. 70% mod bri - dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 70.0% siltstone. 60% very fine to coarse, predominantly loose Sandstone. TG:780U. 70% mod bri - dll |
| Total Gas | 780.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 19 |
| RES_DEEP (ohm.m) | 35.40 | 19 |
| RES_SHALLOW (ohm.m) | 27.04 | 19 |
| **Δ Res (Deep − Shallow)** | **8.36** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1851 m MD — Interval 1849.5 – 1853.0 m

**Sample Description (spreadsheet):** Sample 1851m: 20% siltstone. 80% very fine to coarse, predominantly loose Sandstone. TG:925U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 80% very fine to coarse, predominantly loose Sandstone. TG:925U. 90% mod bri |
| Total Gas | 925.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 23 |
| RES_DEEP (ohm.m) | 42.86 | 23 |
| RES_SHALLOW (ohm.m) | 30.36 | 23 |
| **Δ Res (Deep − Shallow)** | **12.50** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1855 m MD — Interval 1853.0 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 20% siltstone. 80% very fine to coarse, common loose Sandstone. TG: 1390U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 80% very fine to coarse, common loose Sandstone. TG: 1390U. 100% bri |
| Total Gas | 1390.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 30 |
| RES_DEEP (ohm.m) | 32.94 | 30 |
| RES_SHALLOW (ohm.m) | 27.90 | 30 |
| **Δ Res (Deep − Shallow)** | **5.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 10% siltstone. 90% very fine to coarse, common loose Sandstone. TG: 1420U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to coarse, common loose Sandstone. TG: 1420U. 100% bri |
| Total Gas | 1420.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.8 | 33 |
| RES_DEEP (ohm.m) | 29.38 | 33 |
| RES_SHALLOW (ohm.m) | 26.82 | 33 |
| **Δ Res (Deep − Shallow)** | **2.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 5% siltstone. 95% very fine to coarse, common loose Sandstone. TG: 1370U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to coarse, common loose Sandstone. TG: 1370U. 100% bri |
| Total Gas | 1370.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 32 |
| RES_DEEP (ohm.m) | 27.40 | 32 |
| RES_SHALLOW (ohm.m) | 26.99 | 32 |
| **Δ Res (Deep − Shallow)** | **0.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 100% very fine to coarse, occasional to common loose Sandstone. TG: 1495U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to coarse, occasional to common loose Sandstone. TG: 1495U. 100% bri |
| Total Gas | 1495.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.7 | 33 |
| RES_DEEP (ohm.m) | 27.33 | 33 |
| RES_SHALLOW (ohm.m) | 27.16 | 33 |
| **Δ Res (Deep − Shallow)** | **0.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 100% very fine to coarse, common loose Sandstone. TG: 1600TU. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to coarse, common loose Sandstone. TG: 1600TU. 100% bri |
| Total Gas | 1600.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 27.26 | 33 |
| RES_SHALLOW (ohm.m) | 26.75 | 33 |
| **Δ Res (Deep − Shallow)** | **0.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 5% siltstone. 95% very fine to fine common medium to coarse, occasional to common loose Sandstone. TG: 1275U. 90% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine common medium to coarse, occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 95% very fine to fine common medium to coarse, occasional to common loose Sandstone. TG: 1275U. 90% bri |
| Total Gas | 1275.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 33 |
| RES_DEEP (ohm.m) | 28.49 | 33 |
| RES_SHALLOW (ohm.m) | 28.14 | 33 |
| **Δ Res (Deep − Shallow)** | **0.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 5% siltstone. 95% very fine to fine common medium to coarse, occasional to common loose Sandstone. TG: 1060U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine common medium to coarse, occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine common medium to coarse, occasional to common loose Sandstone. TG: 1060U. 100% bri |
| Total Gas | 1060.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: clr-trnsl,v pl brn,vf-f, mnr med,wl srt,sbang-sbrnd,mod sil cmt, com brn-wh arg mtx,rr slty lams,mod hd- fri,mnr dissag,pr-fr vis por,gd inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 32.42 | 33 |
| RES_SHALLOW (ohm.m) | 27.95 | 33 |
| **Δ Res (Deep − Shallow)** | **4.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 10% siltstone. 90% very fine to fine, occasional medium to coarse, minor loose Sandstone. TG: 1323U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium to coarse, minor loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, occasional medium to coarse, minor loose Sandstone. TG: 1323U. 100% bri |
| Total Gas | 1323.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: clr-trnsl,v pl brn,vf-f, mnr med,wl srt,sbang-sbrnd,mod sil cmt, com brn-wh arg mtx,rr slty lams,mod hd- fri,mnr dissag,pr-fr vis por,gd inf por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.9 | 32 |
| RES_DEEP (ohm.m) | 28.23 | 32 |
| RES_SHALLOW (ohm.m) | 23.89 | 32 |
| **Δ Res (Deep − Shallow)** | **4.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 10% siltstone. 90% very fine to fine, minor medium Sandstone. TG: 1043U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, minor medium Sandstone. TG: 1043U. 100% bri |
| Total Gas | 1043.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: clr-trnsl,v pl brn,vf-f, mnr med,wl srt,sbang-sbrnd,mod sil cmt, com brn-wh arg mtx,rr slty lams,mod hd- fri,mnr dissag,pr-fr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~1910m: clr,trnsl,v pl brn,pl-lt gry brn,vf-f,tr med,wl srt,sbang-sbrnd,mod- wk sil cmt,mnr-loc com brn-gry arg mtx, rr slty lams,mod hd-fri,com dissag, 76 / 6 / 4 / 6 / 8 pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 33 |
| RES_DEEP (ohm.m) | 29.38 | 33 |
| RES_SHALLOW (ohm.m) | 26.77 | 33 |
| **Δ Res (Deep − Shallow)** | **2.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 5% siltstone. 95% very fine to fine, minor medium Sandstone. TG: 1097U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, minor medium Sandstone. TG: 1097U. 100% mod bri |
| Total Gas | 1097.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: clr-trnsl,v pl brn,vf-f, mnr med,wl srt,sbang-sbrnd,mod sil cmt, com brn-wh arg mtx,rr slty lams,mod hd- fri,mnr dissag,pr-fr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~1910m: clr,trnsl,v pl brn,pl-lt gry brn,vf-f,tr med,wl srt,sbang-sbrnd,mod- wk sil cmt,mnr-loc com brn-gry arg mtx, rr slty lams,mod hd-fri,com dissag, 76 / 6 / 4 / 6 / 8 pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 33 |
| RES_DEEP (ohm.m) | 27.98 | 33 |
| RES_SHALLOW (ohm.m) | 25.58 | 33 |
| **Δ Res (Deep − Shallow)** | **2.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 5% siltstone. 95% very fine to fine, minor medium, common loose Sandstone. TG: 1060U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium, common loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, minor medium, common loose Sandstone. TG: 1060U. 100% mod bri |
| Total Gas | 1060.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: clr-trnsl,v pl brn,vf-f, mnr med,wl srt,sbang-sbrnd,mod sil cmt, com brn-wh arg mtx,rr slty lams,mod hd- fri,mnr dissag,pr-fr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~1910m: clr,trnsl,v pl brn,pl-lt gry brn,vf-f,tr med,wl srt,sbang-sbrnd,mod- wk sil cmt,mnr-loc com brn-gry arg mtx, rr slty lams,mod hd-fri,com dissag, 76 / 6 / 4 / 6 / 8 pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 33 |
| RES_DEEP (ohm.m) | 26.85 | 33 |
| RES_SHALLOW (ohm.m) | 24.14 | 33 |
| **Δ Res (Deep − Shallow)** | **2.71** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 5% siltstone. 95% very fine to fine, minor medium, minor loose Sandstone. TG: 1112U. 100% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, minor medium, minor loose Sandstone. TG: 1112U. 100% mod bri to bri |
| Total Gas | 1112.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: clr-trnsl,v pl brn,vf-f, mnr med,wl srt,sbang-sbrnd,mod sil cmt, com brn-wh arg mtx,rr slty lams,mod hd- fri,mnr dissag,pr-fr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~1910m: clr,trnsl,v pl brn,pl-lt gry brn,vf-f,tr med,wl srt,sbang-sbrnd,mod- wk sil cmt,mnr-loc com brn-gry arg mtx, rr slty lams,mod hd-fri,com dissag, 76 / 6 / 4 / 6 / 8 pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 33 |
| RES_DEEP (ohm.m) | 26.05 | 33 |
| RES_SHALLOW (ohm.m) | 23.41 | 33 |
| **Δ Res (Deep − Shallow)** | **2.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 5% siltstone. 95% very fine to fine, trace medium, trace loose Sandstone. TG: 1026U. 100% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium, trace loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, trace medium, trace loose Sandstone. TG: 1026U. 100% mod bri to bri |
| Total Gas | 1026.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: clr-trnsl,v pl brn,vf-f, mnr med,wl srt,sbang-sbrnd,mod sil cmt, com brn-wh arg mtx,rr slty lams,mod hd- fri,mnr dissag,pr-fr vis por,gd inf por, fluor.
- **SANDSTONE** @ ~1910m: clr,trnsl,v pl brn,pl-lt gry brn,vf-f,tr med,wl srt,sbang-sbrnd,mod- wk sil cmt,mnr-loc com brn-gry arg mtx, rr slty lams,mod hd-fri,com dissag, 76 / 6 / 4 / 6 / 8 pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 33 |
| RES_DEEP (ohm.m) | 24.30 | 33 |
| RES_SHALLOW (ohm.m) | 22.72 | 33 |
| **Δ Res (Deep − Shallow)** | **1.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 5% siltstone. 95% very fine to fine, trace medium, common loose Sandstone. TG: 998U. 80% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium, common loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 95% very fine to fine, trace medium, common loose Sandstone. TG: 998U. 80% mod bri to bri |
| Total Gas | 998.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: clr,trnsl,v pl brn,pl-lt gry brn,vf-f,tr med,wl srt,sbang-sbrnd,mod- wk sil cmt,mnr-loc com brn-gry arg mtx, rr slty lams,mod hd-fri,com dissag, 76 / 6 / 4 / 6 / 8 pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 32 |
| RES_DEEP (ohm.m) | 23.77 | 32 |
| RES_SHALLOW (ohm.m) | 22.17 | 32 |
| **Δ Res (Deep − Shallow)** | **1.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 5% siltstone. 95% very fine to fine, trace medium, rare loose Sandstone. TG: 1015U. 100% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium, rare loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, trace medium, rare loose Sandstone. TG: 1015U. 100% mod bri to bri |
| Total Gas | 1015.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: clr,trnsl,v pl brn,pl-lt gry brn,vf-f,tr med,wl srt,sbang-sbrnd,mod- wk sil cmt,mnr-loc com brn-gry arg mtx, rr slty lams,mod hd-fri,com dissag, 76 / 6 / 4 / 6 / 8 pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~1940m: v pl brn,pl-med gry brn, FLW: 240-268 gpm v pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.3 | 33 |
| RES_DEEP (ohm.m) | 24.15 | 33 |
| RES_SHALLOW (ohm.m) | 23.11 | 33 |
| **Δ Res (Deep − Shallow)** | **1.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 5% siltstone. 95% very fine to fine, trace loose Sandstone. TG: 1136U. 100% bri to mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, trace loose Sandstone. TG: 1136U. 100% bri to mod bri |
| Total Gas | 1136.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v pl brn,pl-med gry brn, FLW: 240-268 gpm v pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.3 | 33 |
| RES_DEEP (ohm.m) | 25.79 | 33 |
| RES_SHALLOW (ohm.m) | 24.73 | 33 |
| **Δ Res (Deep − Shallow)** | **1.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 10% siltstone. 90% very fine to fine, trace loose Sandstone. TG: 1185U. 100% bri to mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, trace loose Sandstone. TG: 1185U. 100% bri to mod bri |
| Total Gas | 1185.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v pl brn,pl-med gry brn, FLW: 240-268 gpm v pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 33 |
| RES_DEEP (ohm.m) | 25.61 | 33 |
| RES_SHALLOW (ohm.m) | 24.41 | 33 |
| **Δ Res (Deep − Shallow)** | **1.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 10% siltstone. 90% very fine to fine, rare loose Sandstone. TG: 1015U. 100% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, rare loose Sandstone. TG: 1015U. 100% mod bri to bri |
| Total Gas | 1015.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v pl brn,pl-med gry brn, FLW: 240-268 gpm v pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 33 |
| RES_DEEP (ohm.m) | 25.59 | 33 |
| RES_SHALLOW (ohm.m) | 23.86 | 33 |
| **Δ Res (Deep − Shallow)** | **1.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 15% siltstone. 85% very fine to fine, rare loose Sandstone. TG: 892U. 100% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, rare loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to fine, rare loose Sandstone. TG: 892U. 100% mod bri to bri |
| Total Gas | 892.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v pl brn,pl-med gry brn, FLW: 240-268 gpm v pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~1960m: pl brn,pl-med gry brn, med brn,clr,trnsl,vf-f,tr med-crs,vf-f in aggs,mod-pr srt,sbang-sbrnd,mod-wk sil cmt,tr str sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,tr hd,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.8 | 32 |
| RES_DEEP (ohm.m) | 25.60 | 32 |
| RES_SHALLOW (ohm.m) | 21.68 | 32 |
| **Δ Res (Deep − Shallow)** | **3.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 20% siltstone. 80% very fine to fine, rare loose Sandstone. TG: 1023U. 100% mod bri to bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, rare loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 80% very fine to fine, rare loose Sandstone. TG: 1023U. 100% mod bri to bri |
| Total Gas | 1023.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v pl brn,pl-med gry brn, FLW: 240-268 gpm v pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~1960m: pl brn,pl-med gry brn, med brn,clr,trnsl,vf-f,tr med-crs,vf-f in aggs,mod-pr srt,sbang-sbrnd,mod-wk sil cmt,tr str sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,tr hd,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.1 | 33 |
| RES_DEEP (ohm.m) | 24.35 | 33 |
| RES_SHALLOW (ohm.m) | 21.16 | 33 |
| **Δ Res (Deep − Shallow)** | **3.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 15% siltstone. 85% very fine to medium, trace coarse, common loose Sandstone. TG: 929U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse, common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to medium, trace coarse, common loose Sandstone. TG: 929U. 100% mod bri |
| Total Gas | 929.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v pl brn,pl-med gry brn, FLW: 240-268 gpm v pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~1960m: pl brn,pl-med gry brn, med brn,clr,trnsl,vf-f,tr med-crs,vf-f in aggs,mod-pr srt,sbang-sbrnd,mod-wk sil cmt,tr str sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,tr hd,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.6 | 33 |
| RES_DEEP (ohm.m) | 25.32 | 33 |
| RES_SHALLOW (ohm.m) | 22.83 | 33 |
| **Δ Res (Deep − Shallow)** | **2.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 10% siltstone. 90% very fine to medium, trace coarse, minor loose Sandstone. TG: 1105U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse, minor loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to medium, trace coarse, minor loose Sandstone. TG: 1105U. 100% mod bri |
| Total Gas | 1105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl brn,pl-med gry brn, med brn,clr,trnsl,vf-f,tr med-crs,vf-f in aggs,mod-pr srt,sbang-sbrnd,mod-wk sil cmt,tr str sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,tr hd,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 33 |
| RES_DEEP (ohm.m) | 23.26 | 33 |
| RES_SHALLOW (ohm.m) | 22.46 | 33 |
| **Δ Res (Deep − Shallow)** | **0.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 10% siltstone. 90% very fine to medium, minor loose Sandstone. TG: 1164U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to medium, minor loose Sandstone. TG: 1164U. 100% mod bri-bri |
| Total Gas | 1164.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl brn,pl-med gry brn, med brn,clr,trnsl,vf-f,tr med-crs,vf-f in aggs,mod-pr srt,sbang-sbrnd,mod-wk sil cmt,tr str sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,tr hd,tr
- **SANDSTONE** @ ~1980m: pl brn,lt gry brn,med brn, clr,trnsl,vf-f,mnr med-v crs,vf-f in aggs, pr srt,sbang-sbrnd,mnr ang crs,mod- wk sil cmt,tr loc str sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 25.49 | 33 |
| RES_SHALLOW (ohm.m) | 24.77 | 33 |
| **Δ Res (Deep − Shallow)** | **0.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 10% siltstone. 90% very fine to fine, trace medium to coarse, minor loose Sandstone. TG: 1310U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace medium to coarse, minor loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, trace medium to coarse, minor loose Sandstone. TG: 1310U. 100% bri |
| Total Gas | 1310.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl brn,pl-med gry brn, med brn,clr,trnsl,vf-f,tr med-crs,vf-f in aggs,mod-pr srt,sbang-sbrnd,mod-wk sil cmt,tr str sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,tr hd,tr
- **SANDSTONE** @ ~1980m: pl brn,lt gry brn,med brn, clr,trnsl,vf-f,mnr med-v crs,vf-f in aggs, pr srt,sbang-sbrnd,mnr ang crs,mod- wk sil cmt,tr loc str sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.8 | 32 |
| RES_DEEP (ohm.m) | 27.87 | 32 |
| RES_SHALLOW (ohm.m) | 26.34 | 32 |
| **Δ Res (Deep − Shallow)** | **1.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 10% siltstone. 90% very fine to fine, minor medium to very coarse, minor loose Sandstone. TG: 1449U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium to very coarse, minor loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, minor medium to very coarse, minor loose Sandstone. TG: 1449U. 100% bri |
| Total Gas | 1449.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl brn,pl-med gry brn, med brn,clr,trnsl,vf-f,tr med-crs,vf-f in aggs,mod-pr srt,sbang-sbrnd,mod-wk sil cmt,tr str sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,tr hd,tr
- **SANDSTONE** @ ~1980m: pl brn,lt gry brn,med brn, clr,trnsl,vf-f,mnr med-v crs,vf-f in aggs, pr srt,sbang-sbrnd,mnr ang crs,mod- wk sil cmt,tr loc str sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.9 | 33 |
| RES_DEEP (ohm.m) | 26.63 | 33 |
| RES_SHALLOW (ohm.m) | 25.96 | 33 |
| **Δ Res (Deep − Shallow)** | **0.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 5% siltstone. 95% very fine to very coarse, (very fine to fine aggs) common loose Sandstone. TG: 1280U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to very coarse, (very fine to fine aggs) common loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to very coarse, (very fine to fine aggs) common loose Sandstone. TG: 1280U. 100% bri |
| Total Gas | 1280.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: pl brn,lt gry brn,med brn, clr,trnsl,vf-f,mnr med-v crs,vf-f in aggs, pr srt,sbang-sbrnd,mnr ang crs,mod- wk sil cmt,tr loc str sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.7 | 33 |
| RES_DEEP (ohm.m) | 28.23 | 33 |
| RES_SHALLOW (ohm.m) | 28.09 | 33 |
| **Δ Res (Deep − Shallow)** | **0.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 5% siltstone. 95% very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1220U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1220U. 100% bri |
| Total Gas | 1220.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: pl brn,lt gry brn,med brn, clr,trnsl,vf-f,mnr med-v crs,vf-f in aggs, pr srt,sbang-sbrnd,mnr ang crs,mod- wk sil cmt,tr loc str sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.2 | 33 |
| RES_DEEP (ohm.m) | 24.38 | 33 |
| RES_SHALLOW (ohm.m) | 23.79 | 33 |
| **Δ Res (Deep − Shallow)** | **0.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 10% siltstone. 90% very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1121U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, minor medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1121U. 100% bri |
| Total Gas | 1121.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: pl brn,lt gry brn,med brn, clr,trnsl,vf-f,mnr med-v crs,vf-f in aggs, pr srt,sbang-sbrnd,mnr ang crs,mod- wk sil cmt,tr loc str sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 33 |
| RES_DEEP (ohm.m) | 25.09 | 33 |
| RES_SHALLOW (ohm.m) | 23.98 | 33 |
| **Δ Res (Deep − Shallow)** | **1.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 10% siltstone. 90% very fine to fine aggs, minor fine to very coarse loose Sandstone. TG: 1193U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, minor fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggs, minor fine to very coarse loose Sandstone. TG: 1193U. 100% bri |
| Total Gas | 1193.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: pl brn,lt gry brn,med brn, clr,trnsl,vf-f,mnr med-v crs,vf-f in aggs, pr srt,sbang-sbrnd,mnr ang crs,mod- wk sil cmt,tr loc str sil cmt,mnr-loc com brn-gry arg mtx,tr slty lams,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.4 | 32 |
| RES_DEEP (ohm.m) | 26.96 | 32 |
| RES_SHALLOW (ohm.m) | 23.78 | 32 |
| **Δ Res (Deep − Shallow)** | **3.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 20% siltstone. 80% pred very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1025U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | siltstone. 80% pred very fine to fine aggs, minor medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 80% pred very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1025U. 100% bri |
| Total Gas | 1025.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 27.76 | 33 |
| RES_SHALLOW (ohm.m) | 25.08 | 33 |
| **Δ Res (Deep − Shallow)** | **2.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 15% siltstone. 85% pred very fine to fine aggs, rare medium to very coarse loose Sandstone. TG: 1075U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | siltstone. 85% pred very fine to fine aggs, rare medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% pred very fine to fine aggs, rare medium to very coarse loose Sandstone. TG: 1075U. 100% bri |
| Total Gas | 1075.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2020m: pl brn,lt gry brn,med brn, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 30.31 | 33 |
| RES_SHALLOW (ohm.m) | 28.15 | 33 |
| **Δ Res (Deep − Shallow)** | **2.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 10% siltstone. 90% pred very fine to fine aggs, common medium to very coarse loose Sandstone. TG: 940U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone. 90% pred very fine to fine aggs, common medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% pred very fine to fine aggs, common medium to very coarse loose Sandstone. TG: 940U. 100% bri |
| Total Gas | 940.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2020m: pl brn,lt gry brn,med brn, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 33 |
| RES_DEEP (ohm.m) | 34.15 | 33 |
| RES_SHALLOW (ohm.m) | 31.26 | 33 |
| **Δ Res (Deep − Shallow)** | **2.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 10% siltstone. 90% pred very fine to fine aggs, trace medium to very coarse loose Sandstone. TG: 1177U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone. 90% pred very fine to fine aggs, trace medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% pred very fine to fine aggs, trace medium to very coarse loose Sandstone. TG: 1177U. 100% bri |
| Total Gas | 1177.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2020m: pl brn,lt gry brn,med brn, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 33 |
| RES_DEEP (ohm.m) | 37.42 | 33 |
| RES_SHALLOW (ohm.m) | 33.23 | 33 |
| **Δ Res (Deep − Shallow)** | **4.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 10% siltstone. 90% pred very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1062U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone. 90% pred very fine to fine aggs, minor medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% pred very fine to fine aggs, minor medium to very coarse loose Sandstone. TG: 1062U. 100% bri |
| Total Gas | 1062.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2020m: pl brn,lt gry brn,med brn, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 32 |
| RES_DEEP (ohm.m) | 31.63 | 32 |
| RES_SHALLOW (ohm.m) | 28.61 | 32 |
| **Δ Res (Deep − Shallow)** | **3.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 10% siltstone. 90% very fine to fine, minor medium & trace coarse loose Sandstone. TG: 838U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium & trace coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, minor medium & trace coarse loose Sandstone. TG: 838U. 100% bri |
| Total Gas | 838.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2020m: pl brn,lt gry brn,med brn, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,pr vis por,fluor.
- **SILTSTONE** @ ~2040m: med gry brn,med dk gry-dk gry,aren,mnr com carb spks,tr micmic, frm-mod hd,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 25.73 | 33 |
| RES_SHALLOW (ohm.m) | 21.14 | 33 |
| **Δ Res (Deep − Shallow)** | **4.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 10% siltstone. 90% very fine to fine aggregated Sandstone. TG: 777U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggregated Sandstone. TG: 777U. 100% mod bri-bri |
| Total Gas | 777.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2020m: pl brn,lt gry brn,med brn, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,pr vis por,fluor.
- **SILTSTONE** @ ~2040m: med gry brn,med dk gry-dk gry,aren,mnr com carb spks,tr micmic, frm-mod hd,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.9 | 33 |
| RES_DEEP (ohm.m) | 25.24 | 33 |
| RES_SHALLOW (ohm.m) | 21.18 | 33 |
| **Δ Res (Deep − Shallow)** | **4.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 10% siltstone. 90% very fine to fine aggregated Sandstone. TG: 765U. 90% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine aggregated Sandstone. TG: 765U. 90% mod bri-dll |
| Total Gas | 765.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2020m: pl brn,lt gry brn,med brn, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt,mnr-loc com brn-gry arg mtx,mnr slty lams,mod hd-fri,pr vis por,fluor.
- **SILTSTONE** @ ~2040m: med gry brn,med dk gry-dk gry,aren,mnr com carb spks,tr micmic, frm-mod hd,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.1 | 33 |
| RES_DEEP (ohm.m) | 24.97 | 33 |
| RES_SHALLOW (ohm.m) | 21.62 | 33 |
| **Δ Res (Deep − Shallow)** | **3.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 15% siltstone. 85% very fine to fine aggregated (trace fine loose) Sandstone. TG: 795U. 75% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 75.0% siltstone. 85% very fine to fine aggregated (trace fine loose) Sandstone. TG: 795U. 75% mod bri-dll |
| Total Gas | 795.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med dk gry-dk gry,aren,mnr com carb spks,tr micmic, frm-mod hd,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 26.76 | 33 |
| RES_SHALLOW (ohm.m) | 23.62 | 33 |
| **Δ Res (Deep − Shallow)** | **3.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 10% siltstone. 90% very fine to fine aggregated (trace fine loose) Sandstone. TG: 798U. 85% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 85.0% siltstone. 90% very fine to fine aggregated (trace fine loose) Sandstone. TG: 798U. 85% mod bri-dll |
| Total Gas | 798.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med dk gry-dk gry,aren,mnr com carb spks,tr micmic, frm-mod hd,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 28.23 | 33 |
| RES_SHALLOW (ohm.m) | 24.90 | 33 |
| **Δ Res (Deep − Shallow)** | **3.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 10% siltstone. 90% very fine to fine aggregated (trace fine to medium loose) Sandstone. TG: 1000U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggregated (trace fine to medium loose) Sandstone. TG: 1000U. 100% mod bri-bri |
| Total Gas | 1000.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med dk gry-dk gry,aren,mnr com carb spks,tr micmic, frm-mod hd,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 32 |
| RES_DEEP (ohm.m) | 26.11 | 32 |
| RES_SHALLOW (ohm.m) | 19.91 | 32 |
| **Δ Res (Deep − Shallow)** | **6.19** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 5% siltstone. 95% very fine to fine aggregated (trace fine to medium loose) Sandstone. TG: 1121U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregated (trace fine to medium loose) Sandstone. TG: 1121U. 100% mod bri-bri |
| Total Gas | 1121.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med gry brn,med dk gry-dk gry,aren,mnr com carb spks,tr micmic, frm-mod hd,sbblky-blky.
- **SANDSTONE** @ ~2070m: lt brn,lt-med gry brn,med brn,clr,trnsl,vf-f,v wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,mnr-loc slty lams,mod hd-fri,tr f disagg f qtz grs,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.6 | 33 |
| RES_DEEP (ohm.m) | 25.00 | 33 |
| RES_SHALLOW (ohm.m) | 20.12 | 33 |
| **Δ Res (Deep − Shallow)** | **4.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 5% siltstone. 95% very fine to fine aggregated Sandstone. TG: 798U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregated Sandstone. TG: 798U. 100% mod bri-bri |
| Total Gas | 798.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brn,lt-med gry brn,med brn,clr,trnsl,vf-f,v wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,mnr-loc slty lams,mod hd-fri,tr f disagg f qtz grs,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 33 |
| RES_DEEP (ohm.m) | 27.87 | 33 |
| RES_SHALLOW (ohm.m) | 21.53 | 33 |
| **Δ Res (Deep − Shallow)** | **6.34** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2065 m MD — Interval 2062.5 – 2067.4 m

**Sample Description (spreadsheet):** Sample 2065m: 100% very fine to fine aggregated (trace fine loose) Sandstone. TG: 949U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine loose) Sandstone. TG: 949U. 100% mod bri |
| Total Gas | 949.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brn,lt-med gry brn,med brn,clr,trnsl,vf-f,v wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,mnr-loc slty lams,mod hd-fri,tr f disagg f qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2080m: lt brn,lt gry brn,med brn, vf-f,tr med-crs,mod-wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,tr slty lams,mod hd-fri,tr disagg f-crs qtz grs,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.7 | 32 |
| RES_DEEP (ohm.m) | 29.74 | 32 |
| RES_SHALLOW (ohm.m) | 22.27 | 32 |
| **Δ Res (Deep − Shallow)** | **7.46** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2067.4 – 2072.4 m

**Sample Description (spreadsheet):** Sample 2069.9m: 100% very fine to fine aggregated (trace fine to very coarse loose) Sandstone. TG: 1173U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine to very coarse loose) Sandstone. TG: 1173U. 100% mod bri-bri |
| Total Gas | 1173.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brn,lt-med gry brn,med brn,clr,trnsl,vf-f,v wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,mnr-loc slty lams,mod hd-fri,tr f disagg f qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2080m: lt brn,lt gry brn,med brn, vf-f,tr med-crs,mod-wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,tr slty lams,mod hd-fri,tr disagg f-crs qtz grs,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 33 |
| RES_DEEP (ohm.m) | 27.99 | 33 |
| RES_SHALLOW (ohm.m) | 24.00 | 33 |
| **Δ Res (Deep − Shallow)** | **3.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2075 m MD — Interval 2072.4 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 5% siltstone, 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 890U. 100% bri mod-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 890U. 100% bri mod-bri |
| Total Gas | 890.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brn,lt-med gry brn,med brn,clr,trnsl,vf-f,v wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,mnr-loc slty lams,mod hd-fri,tr f disagg f qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2080m: lt brn,lt gry brn,med brn, vf-f,tr med-crs,mod-wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,tr slty lams,mod hd-fri,tr disagg f-crs qtz grs,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 25.15 | 33 |
| RES_SHALLOW (ohm.m) | 23.12 | 33 |
| **Δ Res (Deep − Shallow)** | **2.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 10% siltstone, 90% very fine to fine aggregated (trace fine loose) Sandstone. TG: 864U. 100% bri mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (trace fine loose) Sandstone. TG: 864U. 100% bri mod bri |
| Total Gas | 864.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brn,lt-med gry brn,med brn,clr,trnsl,vf-f,v wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,mnr-loc slty lams,mod hd-fri,tr f disagg f qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2080m: lt brn,lt gry brn,med brn, vf-f,tr med-crs,mod-wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,tr slty lams,mod hd-fri,tr disagg f-crs qtz grs,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 23.53 | 33 |
| RES_SHALLOW (ohm.m) | 22.10 | 33 |
| **Δ Res (Deep − Shallow)** | **1.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 10% siltstone, 90% very fine to fine aggregated (trace fine to coarse loose) Sandstone. TG: 857U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (trace fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (trace fine to coarse loose) Sandstone. TG: 857U. 100% mod bri-bri |
| Total Gas | 857.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brn,lt-med gry brn,med brn,clr,trnsl,vf-f,v wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,mnr-loc slty lams,mod hd-fri,tr f disagg f qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2080m: lt brn,lt gry brn,med brn, vf-f,tr med-crs,mod-wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,tr slty lams,mod hd-fri,tr disagg f-crs qtz grs,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 24.26 | 33 |
| RES_SHALLOW (ohm.m) | 22.09 | 33 |
| **Δ Res (Deep − Shallow)** | **2.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 10% siltstone, 90% very fine to fine aggregated (trace fine loose) Sandstone. TG: 881U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregated (trace fine loose) Sandstone. TG: 881U. 100% mod bri-bri |
| Total Gas | 881.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: lt brn,lt gry brn,med brn, vf-f,tr med-crs,mod-wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,tr slty lams,mod hd-fri,tr disagg f-crs qtz grs,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 26.13 | 33 |
| RES_SHALLOW (ohm.m) | 22.91 | 33 |
| **Δ Res (Deep − Shallow)** | **3.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 5% siltstone, 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 805U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 805U. 100% mod bri-bri |
| Total Gas | 805.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: lt brn,lt gry brn,med brn, vf-f,tr med-crs,mod-wl srt,sbang-sbrnd, mod-wk sil cmt,com brn arg & gry slty mtx,tr slty lams,mod hd-fri,tr disagg f-crs qtz grs,v pr-pr vis por,fluor.
- **SANDSTONE** @ ~2110m: lt brn,lt-med brn gry,clr- trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams, fri-mod hd,tr disagg f disagg qtz grs,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 33 |
| RES_DEEP (ohm.m) | 24.93 | 33 |
| RES_SHALLOW (ohm.m) | 21.75 | 33 |
| **Δ Res (Deep − Shallow)** | **3.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 5% siltstone, 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 948U. 100% bri - mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 948U. 100% bri - mod bri |
| Total Gas | 948.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: lt brn,lt-med brn gry,clr- trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams, fri-mod hd,tr disagg f disagg qtz grs,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 32 |
| RES_DEEP (ohm.m) | 21.02 | 32 |
| RES_SHALLOW (ohm.m) | 18.56 | 32 |
| **Δ Res (Deep − Shallow)** | **2.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 100% very fine to fine aggregated (trace fine loose) Sandstone. TG: 988U. 100% bri - mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine loose) Sandstone. TG: 988U. 100% bri - mod bri |
| Total Gas | 988.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: lt brn,lt-med brn gry,clr- trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams, fri-mod hd,tr disagg f disagg qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2120m: lt brn,lt-med brn gry,clr- trnsl,vf-f,mnr g/t aren SLTST i/p,v wl srt, sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams,fri-mod hd,tr disagg f qtz grs,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 33 |
| RES_DEEP (ohm.m) | 18.89 | 33 |
| RES_SHALLOW (ohm.m) | 16.36 | 33 |
| **Δ Res (Deep − Shallow)** | **2.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 100% very fine to fine aggregated (trace fine loose) Sandstone. TG: 850U. 100% bri - mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregated (trace fine loose) Sandstone. TG: 850U. 100% bri - mod bri |
| Total Gas | 850.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: lt brn,lt-med brn gry,clr- trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams, fri-mod hd,tr disagg f disagg qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2120m: lt brn,lt-med brn gry,clr- trnsl,vf-f,mnr g/t aren SLTST i/p,v wl srt, sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams,fri-mod hd,tr disagg f qtz grs,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 33 |
| RES_DEEP (ohm.m) | 20.38 | 33 |
| RES_SHALLOW (ohm.m) | 17.46 | 33 |
| **Δ Res (Deep − Shallow)** | **2.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 100% very fine to fine aggregated (trace fine loose) Sandstone. TG: 790U. 95% bri - mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 95.0% very fine to fine aggregated (trace fine loose) Sandstone. TG: 790U. 95% bri - mod bri |
| Total Gas | 790.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: lt brn,lt-med brn gry,clr- trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams, fri-mod hd,tr disagg f disagg qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2120m: lt brn,lt-med brn gry,clr- trnsl,vf-f,mnr g/t aren SLTST i/p,v wl srt, sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams,fri-mod hd,tr disagg f qtz grs,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 33 |
| RES_DEEP (ohm.m) | 20.96 | 33 |
| RES_SHALLOW (ohm.m) | 18.08 | 33 |
| **Δ Res (Deep − Shallow)** | **2.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: 100% very fine to fine aggregated (trace fine loose) Sandstone. TG: 860U. 95% bri - mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 95.0% very fine to fine aggregated (trace fine loose) Sandstone. TG: 860U. 95% bri - mod bri |
| Total Gas | 860.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: lt brn,lt-med brn gry,clr- trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams, fri-mod hd,tr disagg f disagg qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2120m: lt brn,lt-med brn gry,clr- trnsl,vf-f,mnr g/t aren SLTST i/p,v wl srt, sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams,fri-mod hd,tr disagg f qtz grs,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 33 |
| RES_DEEP (ohm.m) | 21.81 | 33 |
| RES_SHALLOW (ohm.m) | 19.29 | 33 |
| **Δ Res (Deep − Shallow)** | **2.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: 100% very fine to fine aggregated (trace fine loose) Sandstone. TG: 890U. 95% bri - mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 95.0% very fine to fine aggregated (trace fine loose) Sandstone. TG: 890U. 95% bri - mod bri |
| Total Gas | 890.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: lt brn,lt-med brn gry,clr- trnsl,vf-f,v wl srt,sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams, fri-mod hd,tr disagg f disagg qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2120m: lt brn,lt-med brn gry,clr- trnsl,vf-f,mnr g/t aren SLTST i/p,v wl srt, sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams,fri-mod hd,tr disagg f qtz grs,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 32 |
| RES_DEEP (ohm.m) | 21.90 | 32 |
| RES_SHALLOW (ohm.m) | 19.54 | 32 |
| **Δ Res (Deep − Shallow)** | **2.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 100% very fine to fine aggregated (trace fine loose) Sandstone. TG: 878U. 90% bri - mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% very fine to fine aggregated (trace fine loose) Sandstone. TG: 878U. 90% bri - mod bri |
| Total Gas | 878.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2120m: lt brn,lt-med brn gry,clr- trnsl,vf-f,mnr g/t aren SLTST i/p,v wl srt, sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams,fri-mod hd,tr disagg f qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn,lt gry brn,vf,g/t aren SLTST i/p,v wl srt, sbang-sbrnd,str sil cmt,com pl gry brn arg mtx,tr carb spks,occ sndy lams,tr vf disagg grs,mod hd-hd,v pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 33 |
| RES_DEEP (ohm.m) | 22.34 | 33 |
| RES_SHALLOW (ohm.m) | 19.73 | 33 |
| **Δ Res (Deep − Shallow)** | **2.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2135m: 5% siltstone. 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 775U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 95% very fine to fine aggregated (trace fine loose) Sandstone. TG: 775U. 90% mod bri |
| Total Gas | 775.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2120m: lt brn,lt-med brn gry,clr- trnsl,vf-f,mnr g/t aren SLTST i/p,v wl srt, sbang-sbrnd,mod sil cmt,com brn slty mtx,occ-com slty lams,fri-mod hd,tr disagg f qtz grs,pr vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn,lt gry brn,vf,g/t aren SLTST i/p,v wl srt, sbang-sbrnd,str sil cmt,com pl gry brn arg mtx,tr carb spks,occ sndy lams,tr vf disagg grs,mod hd-hd,v pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.2 | 33 |
| RES_DEEP (ohm.m) | 20.84 | 33 |
| RES_SHALLOW (ohm.m) | 17.33 | 33 |
| **Δ Res (Deep − Shallow)** | **3.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** Sample 2140m: 20% siltstone. 70% very fine to fine aggregates (trace loose) Sandstone. TG: 590U. 60% mod bri - mod dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregates (trace loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 60.0% siltstone. 70% very fine to fine aggregates (trace loose) Sandstone. TG: 590U. 60% mod bri - mod dll |
| Total Gas | 590.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn,lt gry brn,vf,g/t aren SLTST i/p,v wl srt, sbang-sbrnd,str sil cmt,com pl gry brn arg mtx,tr carb spks,occ sndy lams,tr vf disagg grs,mod hd-hd,v pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.9 | 33 |
| RES_DEEP (ohm.m) | 23.81 | 33 |
| RES_SHALLOW (ohm.m) | 18.54 | 33 |
| **Δ Res (Deep − Shallow)** | **5.27** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 50% siltstone. 50% very fine to fine aggregates (trace loose) Sandstone. TG: 1000U. 40% mod bri - mod dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to fine aggregates (trace loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 40.0% siltstone. 50% very fine to fine aggregates (trace loose) Sandstone. TG: 1000U. 40% mod bri - mod dll |
| Total Gas | 1000.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: clr,trnsl,pl brn,lt gry brn,vf,g/t aren SLTST i/p,v wl srt, sbang-sbrnd,str sil cmt,com pl gry brn arg mtx,tr carb spks,occ sndy lams,tr vf disagg grs,mod hd-hd,v pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 33 |
| RES_DEEP (ohm.m) | 27.69 | 33 |
| RES_SHALLOW (ohm.m) | 21.43 | 33 |
| **Δ Res (Deep − Shallow)** | **6.26** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: 20% siltstone. 80% very fine to fine aggregates (trace loose) Sandstone. TG: 940U. 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregates (trace loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 80% very fine to fine aggregates (trace loose) Sandstone. TG: 940U. 80% mod bri |
| Total Gas | 940.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 33 |
| RES_DEEP (ohm.m) | 29.73 | 33 |
| RES_SHALLOW (ohm.m) | 25.10 | 33 |
| **Δ Res (Deep − Shallow)** | **4.63** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 10% siltstone. 90% very fine to fine aggregates, common coarse (common loose) Sandstone. TG: 1060U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates, common coarse (common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggregates, common coarse (common loose) Sandstone. TG: 1060U. 100% bri |
| Total Gas | 1060.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 32 |
| RES_DEEP (ohm.m) | 31.17 | 32 |
| RES_SHALLOW (ohm.m) | 27.84 | 32 |
| **Δ Res (Deep − Shallow)** | **3.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 100% very fine to fine, minor medium, (100% loose) Sandstone. TG: 1050U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium, (100% loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine, minor medium, (100% loose) Sandstone. TG: 1050U. 100% bri |
| Total Gas | 1050.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.0 | 33 |
| RES_DEEP (ohm.m) | 32.63 | 33 |
| RES_SHALLOW (ohm.m) | 30.86 | 33 |
| **Δ Res (Deep − Shallow)** | **1.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 100% very fine to fine, minor medium, (100% loose) Sandstone. TG: 1195U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium, (100% loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine, minor medium, (100% loose) Sandstone. TG: 1195U. 100% bri |
| Total Gas | 1195.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.9 | 33 |
| RES_DEEP (ohm.m) | 34.91 | 33 |
| RES_SHALLOW (ohm.m) | 35.33 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 10% Siltstone. 90% very fine to fine, occasional medium to coarse ( occasional to common loose) Sandstone. TG: 1128U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium to coarse ( occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine, occasional medium to coarse ( occasional to common loose) Sandstone. TG: 1128U. 100% bri |
| Total Gas | 1128.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 33 |
| RES_DEEP (ohm.m) | 37.10 | 33 |
| RES_SHALLOW (ohm.m) | 35.17 | 33 |
| **Δ Res (Deep − Shallow)** | **1.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 5% Siltstone. 95% very fine to fine, occasional medium to coarse ( occasional to common loose) Sandstone. TG: 1096U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium to coarse ( occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine, occasional medium to coarse ( occasional to common loose) Sandstone. TG: 1096U. 100% bri |
| Total Gas | 1096.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.5 | 33 |
| RES_DEEP (ohm.m) | 36.39 | 33 |
| RES_SHALLOW (ohm.m) | 35.05 | 33 |
| **Δ Res (Deep − Shallow)** | **1.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 5% Siltstone. 95% very fine to fine, common medium to coarse (common to predominantly loose) Sandstone. TG: 1100U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, common medium to coarse (common to predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine, common medium to coarse (common to predominantly loose) Sandstone. TG: 1100U. 100% bri |
| Total Gas | 1100.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.4 | 32 |
| RES_DEEP (ohm.m) | 37.32 | 32 |
| RES_SHALLOW (ohm.m) | 37.04 | 32 |
| **Δ Res (Deep − Shallow)** | **0.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 100% very fine coarse, common medium (90% loose) Sandstone. TG: 1045U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine coarse, common medium (90% loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine coarse, common medium (90% loose) Sandstone. TG: 1045U. 100% bri |
| Total Gas | 1045.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.3 | 33 |
| RES_DEEP (ohm.m) | 35.27 | 33 |
| RES_SHALLOW (ohm.m) | 34.81 | 33 |
| **Δ Res (Deep − Shallow)** | **0.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 100% very fine coarse, common medium (100% loose) Sandstone. TG: 880U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine coarse, common medium (100% loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine coarse, common medium (100% loose) Sandstone. TG: 880U. 100% bri |
| Total Gas | 880.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.6 | 33 |
| RES_DEEP (ohm.m) | 32.37 | 33 |
| RES_SHALLOW (ohm.m) | 30.39 | 33 |
| **Δ Res (Deep − Shallow)** | **1.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 100% very fine coarse, common medium (common loose) Sandstone. TG: 1040U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine coarse, common medium (common loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine coarse, common medium (common loose) Sandstone. TG: 1040U. 100% bri |
| Total Gas | 1040.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr,trnsl,pl brn,lt brn gry, vf-f,pr srt,sbang-sbrnd,mod wk sil cmt, com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med-crs disagg qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 33 |
| RES_DEEP (ohm.m) | 23.77 | 33 |
| RES_SHALLOW (ohm.m) | 23.86 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2197.5 – 2202.5 m

**Sample Description (spreadsheet):** Sample 2200m: 100% very fine to coarse, common very fine to fine, (occasional loose) Sandstone. TG: 1022U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, common very fine to fine, (occasional loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to coarse, common very fine to fine, (occasional loose) Sandstone. TG: 1022U. 100% bri |
| Total Gas | 1022.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr,trnsl,pl brn,lt brn gry, vf-f,pr srt,sbang-sbrnd,mod wk sil cmt, com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med-crs disagg qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 22.24 | 33 |
| RES_SHALLOW (ohm.m) | 21.02 | 33 |
| **Δ Res (Deep − Shallow)** | **1.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2205 m MD — Interval 2202.5 – 2207.5 m

**Sample Description (spreadsheet):** Sample 2205m: 10% siltstone. 90% very fine to coarse, common very fine to fine, (occasional loose) Sandstone. TG: 960U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, common very fine to fine, (occasional loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to coarse, common very fine to fine, (occasional loose) Sandstone. TG: 960U. 100% bri |
| Total Gas | 960.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr,trnsl,pl brn,lt brn gry, vf-f,pr srt,sbang-sbrnd,mod wk sil cmt, com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med-crs disagg qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.7 | 32 |
| RES_DEEP (ohm.m) | 23.22 | 32 |
| RES_SHALLOW (ohm.m) | 21.52 | 32 |
| **Δ Res (Deep − Shallow)** | **1.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2207.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 10% siltstone. 90% very fine to coarse, common very fine to fine, (occasional loose) Sandstone. TG: 1005U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, common very fine to fine, (occasional loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to coarse, common very fine to fine, (occasional loose) Sandstone. TG: 1005U. 100% bri |
| Total Gas | 1005.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr,trnsl,pl brn,lt brn gry, vf-f,pr srt,sbang-sbrnd,mod wk sil cmt, com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med-crs disagg qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 33 |
| RES_DEEP (ohm.m) | 22.33 | 33 |
| RES_SHALLOW (ohm.m) | 20.91 | 33 |
| **Δ Res (Deep − Shallow)** | **1.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 10% siltstone. 90% very fine to coarse, common very fine to fine, (occasional to common loose) Sandstone. TG: 930U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, common very fine to fine, (occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to coarse, common very fine to fine, (occasional to common loose) Sandstone. TG: 930U. 100% bri |
| Total Gas | 930.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr,trnsl,pl brn,lt brn gry, vf-f,pr srt,sbang-sbrnd,mod wk sil cmt, com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med-crs disagg qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2230m: clr,trnsl,pl brn,lt brn gry,vf-f,mnr med-crs,pr srt,sbang-sbrnd, mod wk sil cmt,com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med- crs disagg qtz grs,tr qtz ovgths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 33 |
| RES_DEEP (ohm.m) | 25.45 | 33 |
| RES_SHALLOW (ohm.m) | 24.29 | 33 |
| **Δ Res (Deep − Shallow)** | **1.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 10% siltstone. 90% very fine to fine, trace coarse, (trace loose) Sandstone. TG: 1043U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace coarse, (trace loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine, trace coarse, (trace loose) Sandstone. TG: 1043U. 100% bri |
| Total Gas | 1043.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr,trnsl,pl brn,lt brn gry, vf-f,pr srt,sbang-sbrnd,mod wk sil cmt, com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med-crs disagg qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2230m: clr,trnsl,pl brn,lt brn gry,vf-f,mnr med-crs,pr srt,sbang-sbrnd, mod wk sil cmt,com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med- crs disagg qtz grs,tr qtz ovgths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 33 |
| RES_DEEP (ohm.m) | 29.88 | 33 |
| RES_SHALLOW (ohm.m) | 29.94 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 5% siltstone. 95% very fine to fine, minor medium to coarse, (occasional to common loose) Sandstone. TG: 1233U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium to coarse, (occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, minor medium to coarse, (occasional to common loose) Sandstone. TG: 1233U. 100% bri |
| Total Gas | 1233.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr,trnsl,pl brn,lt brn gry, vf-f,pr srt,sbang-sbrnd,mod wk sil cmt, com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med-crs disagg qtz grs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2230m: clr,trnsl,pl brn,lt brn gry,vf-f,mnr med-crs,pr srt,sbang-sbrnd, mod wk sil cmt,com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med- crs disagg qtz grs,tr qtz ovgths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.6 | 33 |
| RES_DEEP (ohm.m) | 29.62 | 33 |
| RES_SHALLOW (ohm.m) | 29.53 | 33 |
| **Δ Res (Deep − Shallow)** | **0.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 5% siltstone. 95% very fine to fine, minor medium to coarse, (occasional to common loose) Sandstone. TG: 1130U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium to coarse, (occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, minor medium to coarse, (occasional to common loose) Sandstone. TG: 1130U. 100% bri |
| Total Gas | 1130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2230m: clr,trnsl,pl brn,lt brn gry,vf-f,mnr med-crs,pr srt,sbang-sbrnd, mod wk sil cmt,com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med- crs disagg qtz grs,tr qtz ovgths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 32 |
| RES_DEEP (ohm.m) | 27.01 | 32 |
| RES_SHALLOW (ohm.m) | 26.48 | 32 |
| **Δ Res (Deep − Shallow)** | **0.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 100% very fine to fine, minor medium to coarse, (occasional to common loose) Sandstone. TG: 1120U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to coarse, (occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine, minor medium to coarse, (occasional to common loose) Sandstone. TG: 1120U. 100% bri |
| Total Gas | 1120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2230m: clr,trnsl,pl brn,lt brn gry,vf-f,mnr med-crs,pr srt,sbang-sbrnd, mod wk sil cmt,com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med- crs disagg qtz grs,tr qtz ovgths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.3 | 33 |
| RES_DEEP (ohm.m) | 26.12 | 33 |
| RES_SHALLOW (ohm.m) | 23.62 | 33 |
| **Δ Res (Deep − Shallow)** | **2.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 100% very fine to coarse, (occasional to common loose) Sandstone. TG: 1120U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, (occasional to common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to coarse, (occasional to common loose) Sandstone. TG: 1120U. 100% bri |
| Total Gas | 1120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2230m: clr,trnsl,pl brn,lt brn gry,vf-f,mnr med-crs,pr srt,sbang-sbrnd, mod wk sil cmt,com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med- crs disagg qtz grs,tr qtz ovgths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.3 | 33 |
| RES_DEEP (ohm.m) | 25.00 | 33 |
| RES_SHALLOW (ohm.m) | 23.47 | 33 |
| **Δ Res (Deep − Shallow)** | **1.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 100% very fine to coarse, (common loose) Sandstone. TG: 878U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, (common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to coarse, (common loose) Sandstone. TG: 878U. 100% bri |
| Total Gas | 878.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2230m: clr,trnsl,pl brn,lt brn gry,vf-f,mnr med-crs,pr srt,sbang-sbrnd, mod wk sil cmt,com pl brn gry mtx,tr slty lams,mod hd-fri,occ-com med- crs disagg qtz grs,tr qtz ovgths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.9 | 33 |
| RES_DEEP (ohm.m) | 23.71 | 33 |
| RES_SHALLOW (ohm.m) | 22.67 | 33 |
| **Δ Res (Deep − Shallow)** | **1.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 5% Siltstone. 95% very fine to coarse, (common loose) Sandstone. TG: 1170U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, (common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine to coarse, (common loose) Sandstone. TG: 1170U. 100% bri |
| Total Gas | 1170.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 22.63 | 33 |
| RES_SHALLOW (ohm.m) | 21.68 | 33 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 5% Siltstone. 95% very fine to coarse, (common loose) Sandstone. TG: 920U. 100% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, (common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine to coarse, (common loose) Sandstone. TG: 920U. 100% bri |
| Total Gas | 920.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: med gry,med gry brn,dk gry,aren,mnr micmic,occ sndy lams, frm,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 32 |
| RES_DEEP (ohm.m) | 22.65 | 32 |
| RES_SHALLOW (ohm.m) | 19.96 | 32 |
| **Δ Res (Deep − Shallow)** | **2.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260: 5% siltstone. 95% very fine to fine, minor medium to coarse (occasionally loose) sandstone. TG: 972U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium to coarse (occasionally loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine, minor medium to coarse (occasionally loose) sandstone. TG: 972U. 100% bri |
| Total Gas | 972.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: med gry,med gry brn,dk gry,aren,mnr micmic,occ sndy lams, frm,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 33 |
| RES_DEEP (ohm.m) | 22.66 | 33 |
| RES_SHALLOW (ohm.m) | 19.10 | 33 |
| **Δ Res (Deep − Shallow)** | **3.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 10% siltstone. 90% very fine to fine, trace medium to coarse (minor loose) sandstone. TG: 895U. 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace medium to coarse (minor loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 90% very fine to fine, trace medium to coarse (minor loose) sandstone. TG: 895U. 80% mod bri |
| Total Gas | 895.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: med gry,med gry brn,dk gry,aren,mnr micmic,occ sndy lams, frm,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 33 |
| RES_DEEP (ohm.m) | 21.95 | 33 |
| RES_SHALLOW (ohm.m) | 19.43 | 33 |
| **Δ Res (Deep − Shallow)** | **2.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 15% siltstone. 85% very fine to fine sandstone. TG: 967U. 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 85% very fine to fine sandstone. TG: 967U. 80% mod bri |
| Total Gas | 967.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: med gry,med gry brn,dk gry,aren,mnr micmic,occ sndy lams, frm,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 33 |
| RES_DEEP (ohm.m) | 23.04 | 33 |
| RES_SHALLOW (ohm.m) | 21.00 | 33 |
| **Δ Res (Deep − Shallow)** | **2.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 10% siltstone. 90% very fine to fine sandstone. TG: 960U. 90% mod bri - bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine sandstone. TG: 960U. 90% mod bri - bri |
| Total Gas | 960.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: med gry,med gry brn,dk gry,aren,mnr micmic,occ sndy lams, frm,sbblky-blky.
- **SANDSTONE** @ ~2290m: clr-trnsl,pl gry brn,pl gry,vf-f,g/t aren sltst,v wl srt, sbang-sbrnd,mod sil cmt,com pl gry- off wh arg mtx,occ-com slty lams,occ carb spks,tr dissag,mod hd-fri,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.1 | 33 |
| RES_DEEP (ohm.m) | 26.30 | 33 |
| RES_SHALLOW (ohm.m) | 24.16 | 33 |
| **Δ Res (Deep − Shallow)** | **2.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 10% siltstone. 90% very fine to fine sandstone. TG: 940U. 80% mod bri - bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 90% very fine to fine sandstone. TG: 940U. 80% mod bri - bri |
| Total Gas | 940.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: med gry,med gry brn,dk gry,aren,mnr micmic,occ sndy lams, frm,sbblky-blky.
- **SANDSTONE** @ ~2290m: clr-trnsl,pl gry brn,pl gry,vf-f,g/t aren sltst,v wl srt, sbang-sbrnd,mod sil cmt,com pl gry- off wh arg mtx,occ-com slty lams,occ carb spks,tr dissag,mod hd-fri,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 33 |
| RES_DEEP (ohm.m) | 23.98 | 33 |
| RES_SHALLOW (ohm.m) | 22.24 | 33 |
| **Δ Res (Deep − Shallow)** | **1.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 20% siltstone. 80% very fine to fine sandstone. TG: 827U. 95% mod bri - dll fluor

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 95.0% siltstone. 80% very fine to fine sandstone. TG: 827U. 95% mod bri - dll |
| Total Gas | 827.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: med gry,med gry brn,dk gry,aren,mnr micmic,occ sndy lams, frm,sbblky-blky.
- **SANDSTONE** @ ~2290m: clr-trnsl,pl gry brn,pl gry,vf-f,g/t aren sltst,v wl srt, sbang-sbrnd,mod sil cmt,com pl gry- off wh arg mtx,occ-com slty lams,occ carb spks,tr dissag,mod hd-fri,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 32 |
| RES_DEEP (ohm.m) | 23.07 | 32 |
| RES_SHALLOW (ohm.m) | 20.46 | 32 |
| **Δ Res (Deep − Shallow)** | **2.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 20% siltstone. 80% very fine to fine sandstone. TG: 660U. 90% mod bri - dll fluor

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 80% very fine to fine sandstone. TG: 660U. 90% mod bri - dll |
| Total Gas | 660.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr-trnsl,pl gry brn,pl gry,vf-f,g/t aren sltst,v wl srt, sbang-sbrnd,mod sil cmt,com pl gry- off wh arg mtx,occ-com slty lams,occ carb spks,tr dissag,mod hd-fri,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 24.72 | 33 |
| RES_SHALLOW (ohm.m) | 22.11 | 33 |
| **Δ Res (Deep − Shallow)** | **2.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 25% siltstone. 75% very fine to fine (g/t aren siltstone) sandstone. TG: 851U. 85% mod bri - dll fluor

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (g/t aren siltstone (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 85.0% siltstone. 75% very fine to fine (g/t aren siltstone) sandstone. TG: 851U. 85% mod bri - dll |
| Total Gas | 851.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr-trnsl,pl gry brn,pl gry,vf-f,g/t aren sltst,v wl srt, sbang-sbrnd,mod sil cmt,com pl gry- off wh arg mtx,occ-com slty lams,occ carb spks,tr dissag,mod hd-fri,pr vis
- **SANDSTONE** @ ~2310m: pl-lt gry brn,lt gry,clr, trnsl,vf-f,mnr med-v crs,v pr srt,sbang- sbrnd,tr ang v crs,mod-wk sil cmt,com gry slty-brn arg mtx,mnr slty lams,tr carb spks,mod hd-fri,mnr disagg f-v crs qtz

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 22.87 | 33 |
| RES_SHALLOW (ohm.m) | 20.05 | 33 |
| **Δ Res (Deep − Shallow)** | **2.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 20% siltstone. 80% very fine to fine (g/t aren siltstone) sandstone. TG: 840U. 80% mod bri - dll fluor

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (g/t aren siltstone (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 80% very fine to fine (g/t aren siltstone) sandstone. TG: 840U. 80% mod bri - dll |
| Total Gas | 840.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr-trnsl,pl gry brn,pl gry,vf-f,g/t aren sltst,v wl srt, sbang-sbrnd,mod sil cmt,com pl gry- off wh arg mtx,occ-com slty lams,occ carb spks,tr dissag,mod hd-fri,pr vis
- **SANDSTONE** @ ~2310m: pl-lt gry brn,lt gry,clr, trnsl,vf-f,mnr med-v crs,v pr srt,sbang- sbrnd,tr ang v crs,mod-wk sil cmt,com gry slty-brn arg mtx,mnr slty lams,tr carb spks,mod hd-fri,mnr disagg f-v crs qtz

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 33 |
| RES_DEEP (ohm.m) | 24.79 | 33 |
| RES_SHALLOW (ohm.m) | 21.54 | 33 |
| **Δ Res (Deep − Shallow)** | **3.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 15% siltstone. 85% very fine to fine (g/t aren siltstone) sandstone. TG: 870U. 90% mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (g/t aren siltstone (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 85% very fine to fine (g/t aren siltstone) sandstone. TG: 870U. 90% mod bri |
| Total Gas | 870.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr-trnsl,pl gry brn,pl gry,vf-f,g/t aren sltst,v wl srt, sbang-sbrnd,mod sil cmt,com pl gry- off wh arg mtx,occ-com slty lams,occ carb spks,tr dissag,mod hd-fri,pr vis
- **SANDSTONE** @ ~2310m: pl-lt gry brn,lt gry,clr, trnsl,vf-f,mnr med-v crs,v pr srt,sbang- sbrnd,tr ang v crs,mod-wk sil cmt,com gry slty-brn arg mtx,mnr slty lams,tr carb spks,mod hd-fri,mnr disagg f-v crs qtz

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 33 |
| RES_DEEP (ohm.m) | 23.35 | 33 |
| RES_SHALLOW (ohm.m) | 21.39 | 33 |
| **Δ Res (Deep − Shallow)** | **1.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 15% siltstone. 85% very fine to fine sandstone. TG: 1109U. 100% bri-mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to fine sandstone. TG: 1109U. 100% bri-mod bri |
| Total Gas | 1109.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: pl-lt gry brn,lt gry,clr, trnsl,vf-f,mnr med-v crs,v pr srt,sbang- sbrnd,tr ang v crs,mod-wk sil cmt,com gry slty-brn arg mtx,mnr slty lams,tr carb spks,mod hd-fri,mnr disagg f-v crs qtz

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 32 |
| RES_DEEP (ohm.m) | 24.64 | 32 |
| RES_SHALLOW (ohm.m) | 23.28 | 32 |
| **Δ Res (Deep − Shallow)** | **1.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 10% siltstone. 90% very fine to fine (minor medium to very coarse loose) sandstone. TG: 1307U. 100% mod bri-bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (minor medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine (minor medium to very coarse loose) sandstone. TG: 1307U. 100% mod bri-bri |
| Total Gas | 1307.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: pl-lt gry brn,lt gry,clr, trnsl,vf-f,mnr med-v crs,v pr srt,sbang- sbrnd,tr ang v crs,mod-wk sil cmt,com gry slty-brn arg mtx,mnr slty lams,tr carb spks,mod hd-fri,mnr disagg f-v crs qtz

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 33 |
| RES_DEEP (ohm.m) | 27.11 | 33 |
| RES_SHALLOW (ohm.m) | 27.76 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.64** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 5% siltstone. 95% very fine to fine (minor medium to very coarse loose) sandstone. TG: 1440U. 100% bri-mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (minor medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine (minor medium to very coarse loose) sandstone. TG: 1440U. 100% bri-mod bri |
| Total Gas | 1440.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: pl-lt gry brn,lt gry,clr, trnsl,vf-f,mnr med-v crs,v pr srt,sbang- sbrnd,tr ang v crs,mod-wk sil cmt,com gry slty-brn arg mtx,mnr slty lams,tr carb spks,mod hd-fri,mnr disagg f-v crs qtz

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 33 |
| RES_DEEP (ohm.m) | 30.09 | 33 |
| RES_SHALLOW (ohm.m) | 28.47 | 33 |
| **Δ Res (Deep − Shallow)** | **1.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 10% siltstone. 90% very fine to fine (trace medium to coarse loose) sandstone. TG: 1333U. 100% bri-mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (trace medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine (trace medium to coarse loose) sandstone. TG: 1333U. 100% bri-mod bri |
| Total Gas | 1333.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2310m: pl-lt gry brn,lt gry,clr, trnsl,vf-f,mnr med-v crs,v pr srt,sbang- sbrnd,tr ang v crs,mod-wk sil cmt,com gry slty-brn arg mtx,mnr slty lams,tr carb spks,mod hd-fri,mnr disagg f-v crs qtz

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 33 |
| RES_DEEP (ohm.m) | 32.19 | 33 |
| RES_SHALLOW (ohm.m) | 27.56 | 33 |
| **Δ Res (Deep − Shallow)** | **4.63** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 25% siltstone. 75% very fine to fine (minor medium to coarse loose) sandstone. TG: 1410U. 100% bri-mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (minor medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 75% very fine to fine (minor medium to coarse loose) sandstone. TG: 1410U. 100% bri-mod bri |
| Total Gas | 1410.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.4 | 33 |
| RES_DEEP (ohm.m) | 36.38 | 33 |
| RES_SHALLOW (ohm.m) | 25.67 | 33 |
| **Δ Res (Deep − Shallow)** | **10.71** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2335 m MD — Interval 2332.5 – 2336.0 m

**Sample Description (spreadsheet):** Sample 2335m: 40% siltstone. 60% very fine to fine (minor medium to coarse loose) sandstone. TG: 669U. 75% mod bri-bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine (minor medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 40.0% siltstone. 60% very fine to fine (minor medium to coarse loose) sandstone. TG: 669U. 75% mod bri-bri |
| Total Gas | 669.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.9 | 23 |
| RES_DEEP (ohm.m) | 30.10 | 23 |
| RES_SHALLOW (ohm.m) | 22.02 | 23 |
| **Δ Res (Deep − Shallow)** | **8.07** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2337 m MD — Interval 2336.0 – 2338.5 m

**Sample Description (spreadsheet):** Sample 2337m: 60% siltstone. 40% very fine to fine (trace medium to coarse loose) sandstone. TG: 674U. 60% mod bri-dll fluor

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to fine (trace medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 60.0% siltstone. 40% very fine to fine (trace medium to coarse loose) sandstone. TG: 674U. 60% mod bri-dll |
| Total Gas | 674.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.5 | 16 |
| RES_DEEP (ohm.m) | 26.16 | 16 |
| RES_SHALLOW (ohm.m) | 19.19 | 16 |
| **Δ Res (Deep − Shallow)** | **6.96** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2338.5 – 2341.5 m

**Sample Description (spreadsheet):** Sample 2340m: 50% siltstone. 50% very fine to fine aggregated (com fine to coarse, trace very coarse loose) sandstone. TG: 669U. 60% dll-mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to fine aggregated (com fine to coarse, trace very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 60.0% siltstone. 50% very fine to fine aggregated (com fine to coarse, trace very coarse loose) sandstone. TG: 669U. 60% dll-mod bri |
| Total Gas | 669.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 122.5 | 20 |
| RES_DEEP (ohm.m) | 24.85 | 20 |
| RES_SHALLOW (ohm.m) | 17.56 | 20 |
| **Δ Res (Deep − Shallow)** | **7.28** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2379 m MD — Interval 2377.5 – 2382.0 m

**Sample Description (spreadsheet):** Sample 2379m: 35% siltstone. 65% pred fine to coarse loose (mnr vf-f aggs) sandstone. TG: 513U. 50% dll-trace mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 65.0 |
| Grain Size | siltstone. 65% pred fine to coarse loose (mnr vf-f aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 50.0% siltstone. 65% pred fine to coarse loose (mnr vf-f aggs) sandstone. TG: 513U. 50% dll-trace mod bri |
| Total Gas | 513.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 29 |
| RES_DEEP (ohm.m) | 24.30 | 29 |
| RES_SHALLOW (ohm.m) | 19.44 | 29 |
| **Δ Res (Deep − Shallow)** | **4.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2385 m MD — Interval 2382.0 – 2386.5 m

**Sample Description (spreadsheet):** Sample 2385m: 30% siltstone. 70% very fine to fine aggs (fine to coarse loose) sandstone. TG: 609U. 80% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine aggs (fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 70% very fine to fine aggs (fine to coarse loose) sandstone. TG: 609U. 80% mod bri-bri |
| Total Gas | 609.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 30 |
| RES_DEEP (ohm.m) | 24.31 | 30 |
| RES_SHALLOW (ohm.m) | 23.41 | 30 |
| **Δ Res (Deep − Shallow)** | **0.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2388 m MD — Interval 2386.5 – 2389.5 m

**Sample Description (spreadsheet):** Sample 2388m: 15% siltstone. 85% very fine to fine aggs (com fine to coarse loose) sandstone. TG: 638U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs (com fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to fine aggs (com fine to coarse loose) sandstone. TG: 638U. 100% mod bri-bri |
| Total Gas | 638.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 20 |
| RES_DEEP (ohm.m) | 21.18 | 20 |
| RES_SHALLOW (ohm.m) | 20.28 | 20 |
| **Δ Res (Deep − Shallow)** | **0.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2391 m MD — Interval 2389.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2391m: 15% siltstone. 85% very fine to fine aggs (com fine to very coarse loose) sandstone. TG: 639U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs (com fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to fine aggs (com fine to very coarse loose) sandstone. TG: 639U. 100% mod bri-bri |
| Total Gas | 639.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.0 | 19 |
| RES_DEEP (ohm.m) | 21.52 | 19 |
| RES_SHALLOW (ohm.m) | 21.40 | 19 |
| **Δ Res (Deep − Shallow)** | **0.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2394 m MD — Interval 2392.5 – 2395.5 m

**Sample Description (spreadsheet):** Sample 2394m: 5% siltstone. 95% very fine to fine aggs (com fine to medium, trace coarse loose) sandstone. TG: 641U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (com fine to medium, trace coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs (com fine to medium, trace coarse loose) sandstone. TG: 641U. 100% mod bri-bri |
| Total Gas | 641.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 20 |
| RES_DEEP (ohm.m) | 20.71 | 20 |
| RES_SHALLOW (ohm.m) | 20.12 | 20 |
| **Δ Res (Deep − Shallow)** | **0.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2397 m MD — Interval 2395.5 – 2398.5 m

**Sample Description (spreadsheet):** Sample 2397m: 5% siltstone. 95% very fine to fine aggs (com fine to medium, trace coarse loose) sandstone. TG: 681U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (com fine to medium, trace coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs (com fine to medium, trace coarse loose) sandstone. TG: 681U. 100% mod bri-bri |
| Total Gas | 681.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 20 |
| RES_DEEP (ohm.m) | 20.64 | 20 |
| RES_SHALLOW (ohm.m) | 19.25 | 20 |
| **Δ Res (Deep − Shallow)** | **1.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2398.5 – 2401.5 m

**Sample Description (spreadsheet):** Sample 2400m: 10% siltstone. 90% very fine to fine aggs (com fine to medium, trace coarse loose) sandstone. TG: 632U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs (com fine to medium, trace coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggs (com fine to medium, trace coarse loose) sandstone. TG: 632U. 100% mod bri |
| Total Gas | 632.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 19 |
| RES_DEEP (ohm.m) | 20.26 | 19 |
| RES_SHALLOW (ohm.m) | 18.97 | 19 |
| **Δ Res (Deep − Shallow)** | **1.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2403 m MD — Interval 2401.5 – 2404.5 m

**Sample Description (spreadsheet):** Sample 2403m: 10% siltstone. 90% very fine to fine aggs (minor fine to coarse loose) sandstone. TG: 609U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs (minor fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggs (minor fine to coarse loose) sandstone. TG: 609U. 100% mod bri |
| Total Gas | 609.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 20 |
| RES_DEEP (ohm.m) | 19.10 | 20 |
| RES_SHALLOW (ohm.m) | 17.81 | 20 |
| **Δ Res (Deep − Shallow)** | **1.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2406 m MD — Interval 2404.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2406m: 10% siltstone. 90% very fine to fine aggs (rare fine to coarse loose) sandstone. TG: 584U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs (rare fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine aggs (rare fine to coarse loose) sandstone. TG: 584U. 90% mod bri |
| Total Gas | 584.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 20 |
| RES_DEEP (ohm.m) | 18.31 | 20 |
| RES_SHALLOW (ohm.m) | 16.76 | 20 |
| **Δ Res (Deep − Shallow)** | **1.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2409 m MD — Interval 2407.5 – 2410.5 m

**Sample Description (spreadsheet):** Sample 2409m: 5% siltstone. 95% very fine to fine aggs (rare fine to coarse loose) sandstone. TG: 540U. 90% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (rare fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 95% very fine to fine aggs (rare fine to coarse loose) sandstone. TG: 540U. 90% mod bri-dll |
| Total Gas | 540.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 19 |
| RES_DEEP (ohm.m) | 18.25 | 19 |
| RES_SHALLOW (ohm.m) | 17.23 | 19 |
| **Δ Res (Deep − Shallow)** | **1.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2412 m MD — Interval 2410.5 – 2413.5 m

**Sample Description (spreadsheet):** Sample 2412m: 5% siltstone. 95% very fine to fine aggs (trace fine to medium loose) sandstone. TG: 620U. 90% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (trace fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 95% very fine to fine aggs (trace fine to medium loose) sandstone. TG: 620U. 90% mod bri-dll |
| Total Gas | 620.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 20 |
| RES_DEEP (ohm.m) | 20.01 | 20 |
| RES_SHALLOW (ohm.m) | 18.61 | 20 |
| **Δ Res (Deep − Shallow)** | **1.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2415 m MD — Interval 2413.5 – 2417.5 m

**Sample Description (spreadsheet):** Sample 2415m: 5% siltstone. 95% very fine to fine aggs (minor fine to medium loose) sandstone. TG: 728U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs (minor fine to medium loose) sandstone. TG: 728U. 100% mod bri |
| Total Gas | 728.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2430m: lt gry brn,lt gry,lt brn gry, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt, com gry-brn arg mtx,tr carb spks,tr-loc com slty lams,fri-mod hd,rr disagg f qtz grs,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 26 |
| RES_DEEP (ohm.m) | 19.04 | 26 |
| RES_SHALLOW (ohm.m) | 17.52 | 26 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2417.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2420m: 5% siltstone. 95% very fine to fine aggs (minor fine to medium loose) sandstone. TG: 847U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs (minor fine to medium loose) sandstone. TG: 847U. 100% mod bri |
| Total Gas | 847.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2430m: lt gry brn,lt gry,lt brn gry, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt, com gry-brn arg mtx,tr carb spks,tr-loc com slty lams,fri-mod hd,rr disagg f qtz grs,pr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 33 |
| RES_DEEP (ohm.m) | 17.35 | 33 |
| RES_SHALLOW (ohm.m) | 16.66 | 33 |
| **Δ Res (Deep − Shallow)** | **0.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2425 m MD — Interval 2422.5 – 2427.5 m

**Sample Description (spreadsheet):** Sample 2425m: 5% siltstone. 95% very fine to fine aggs  sandstone. TG: 796U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs  sandstone. TG: 796U. 100% mod bri |
| Total Gas | 796.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2430m: lt gry brn,lt gry,lt brn gry, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt, com gry-brn arg mtx,tr carb spks,tr-loc com slty lams,fri-mod hd,rr disagg f qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2440m: dk gry,med dk gry,med-dk gry brn,aren,tr carb spks,tr sndy lams,tr frm-mod hd,sbblky-blky. 78 / 5 / 4 / 5 / 8 877 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 33 |
| RES_DEEP (ohm.m) | 16.44 | 33 |
| RES_SHALLOW (ohm.m) | 15.68 | 33 |
| **Δ Res (Deep − Shallow)** | **0.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2427.5 – 2432.5 m

**Sample Description (spreadsheet):** Sample 2430m: 10% siltstone. 90% very fine to fine aggregated (rare loose fine) sandstone. TG: 694U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (rare loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggregated (rare loose fine) sandstone. TG: 694U. 100% mod bri |
| Total Gas | 694.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2430m: lt gry brn,lt gry,lt brn gry, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt, com gry-brn arg mtx,tr carb spks,tr-loc com slty lams,fri-mod hd,rr disagg f qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2440m: dk gry,med dk gry,med-dk gry brn,aren,tr carb spks,tr sndy lams,tr frm-mod hd,sbblky-blky. 78 / 5 / 4 / 5 / 8 877 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 16.57 | 33 |
| RES_SHALLOW (ohm.m) | 15.79 | 33 |
| **Δ Res (Deep − Shallow)** | **0.78** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2435 m MD — Interval 2432.5 – 2437.5 m

**Sample Description (spreadsheet):** Sample 2435m: 15% siltstone. 85% very fine to fine aggregated (rare loose fine) sandstone. TG: 756U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregated (rare loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to fine aggregated (rare loose fine) sandstone. TG: 756U. 100% mod bri |
| Total Gas | 756.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2430m: lt gry brn,lt gry,lt brn gry, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt, com gry-brn arg mtx,tr carb spks,tr-loc com slty lams,fri-mod hd,rr disagg f qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2440m: dk gry,med dk gry,med-dk gry brn,aren,tr carb spks,tr sndy lams,tr frm-mod hd,sbblky-blky. 78 / 5 / 4 / 5 / 8 877 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 17.11 | 33 |
| RES_SHALLOW (ohm.m) | 15.66 | 33 |
| **Δ Res (Deep − Shallow)** | **1.45** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2437.5 – 2442.5 m

**Sample Description (spreadsheet):** Sample 2440m: 15% siltstone. 85% very fine to fine aggregated (rare loose fine) sandstone. TG: 684U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregated (rare loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 85% very fine to fine aggregated (rare loose fine) sandstone. TG: 684U. 90% mod bri |
| Total Gas | 684.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2430m: lt gry brn,lt gry,lt brn gry, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt, com gry-brn arg mtx,tr carb spks,tr-loc com slty lams,fri-mod hd,rr disagg f qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2440m: dk gry,med dk gry,med-dk gry brn,aren,tr carb spks,tr sndy lams,tr frm-mod hd,sbblky-blky. 78 / 5 / 4 / 5 / 8 877 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 32 |
| RES_DEEP (ohm.m) | 18.89 | 32 |
| RES_SHALLOW (ohm.m) | 17.20 | 32 |
| **Δ Res (Deep − Shallow)** | **1.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2445 m MD — Interval 2442.5 – 2447.5 m

**Sample Description (spreadsheet):** Sample 2445m: 10% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 869U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 869U. 90% mod bri |
| Total Gas | 869.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2430m: lt gry brn,lt gry,lt brn gry, vf-f,v wl srt,sbang-sbrnd,mod-wk sil cmt, com gry-brn arg mtx,tr carb spks,tr-loc com slty lams,fri-mod hd,rr disagg f qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2440m: dk gry,med dk gry,med-dk gry brn,aren,tr carb spks,tr sndy lams,tr frm-mod hd,sbblky-blky. 78 / 5 / 4 / 5 / 8 877 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 18.77 | 33 |
| RES_SHALLOW (ohm.m) | 17.31 | 33 |
| **Δ Res (Deep − Shallow)** | **1.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: 15% siltstone. 85% very fine to fine aggregated (minor loose fine) sandstone. TG: 861U. 95% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregated (minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 95.0% siltstone. 85% very fine to fine aggregated (minor loose fine) sandstone. TG: 861U. 95% mod bri |
| Total Gas | 861.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2440m: dk gry,med dk gry,med-dk gry brn,aren,tr carb spks,tr sndy lams,tr frm-mod hd,sbblky-blky. 78 / 5 / 4 / 5 / 8 877 U
- **SILTSTONE** @ ~2460m: med brn gry,dk gry, med gry,aren,mnr g/t slty SST,tr carb spks,mnr micmic,frm-mod hd, sbblky-blky. ADD STARGLIDE TO ACTIVE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.7 | 33 |
| RES_DEEP (ohm.m) | 19.84 | 33 |
| RES_SHALLOW (ohm.m) | 19.20 | 33 |
| **Δ Res (Deep − Shallow)** | **0.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: 10% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 1221U. 95% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 95.0% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 1221U. 95% mod bri |
| Total Gas | 1221.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2440m: dk gry,med dk gry,med-dk gry brn,aren,tr carb spks,tr sndy lams,tr frm-mod hd,sbblky-blky. 78 / 5 / 4 / 5 / 8 877 U
- **SILTSTONE** @ ~2460m: med brn gry,dk gry, med gry,aren,mnr g/t slty SST,tr carb spks,mnr micmic,frm-mod hd, sbblky-blky. ADD STARGLIDE TO ACTIVE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 19.55 | 33 |
| RES_SHALLOW (ohm.m) | 18.68 | 33 |
| **Δ Res (Deep − Shallow)** | **0.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 10% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG:1200U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG:1200U. 100% bri |
| Total Gas | 1200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med brn gry,dk gry, med gry,aren,mnr g/t slty SST,tr carb spks,mnr micmic,frm-mod hd, sbblky-blky. ADD STARGLIDE TO ACTIVE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 33 |
| RES_DEEP (ohm.m) | 19.52 | 33 |
| RES_SHALLOW (ohm.m) | 18.33 | 33 |
| **Δ Res (Deep − Shallow)** | **1.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: 10% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 726U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 726U. 90% mod bri |
| Total Gas | 726.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med brn gry,dk gry, med gry,aren,mnr g/t slty SST,tr carb spks,mnr micmic,frm-mod hd, sbblky-blky. ADD STARGLIDE TO ACTIVE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 32 |
| RES_DEEP (ohm.m) | 20.91 | 32 |
| RES_SHALLOW (ohm.m) | 18.25 | 32 |
| **Δ Res (Deep − Shallow)** | **2.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: 10% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 743U. 90% mod bri - bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregated (minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine aggregated (minor loose fine) sandstone. TG: 743U. 90% mod bri - bri |
| Total Gas | 743.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med brn gry,dk gry, med gry,aren,mnr g/t slty SST,tr carb spks,mnr micmic,frm-mod hd, sbblky-blky. ADD STARGLIDE TO ACTIVE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.1 | 33 |
| RES_DEEP (ohm.m) | 17.49 | 33 |
| RES_SHALLOW (ohm.m) | 15.85 | 33 |
| **Δ Res (Deep − Shallow)** | **1.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 5% siltstone. 95% very fine to fine aggregated (trace to minor loose fine) sandstone. TG: 827U. 85% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace to minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 85.0% siltstone. 95% very fine to fine aggregated (trace to minor loose fine) sandstone. TG: 827U. 85% mod bri |
| Total Gas | 827.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med brn gry,dk gry, med gry,aren,mnr g/t slty SST,tr carb spks,mnr micmic,frm-mod hd, sbblky-blky. ADD STARGLIDE TO ACTIVE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 33 |
| RES_DEEP (ohm.m) | 16.46 | 33 |
| RES_SHALLOW (ohm.m) | 15.25 | 33 |
| **Δ Res (Deep − Shallow)** | **1.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 5% siltstone. 95% very fine to fine aggregated (trace to minor loose fine) sandstone. TG: 685U. 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace to minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 95% very fine to fine aggregated (trace to minor loose fine) sandstone. TG: 685U. 80% mod bri |
| Total Gas | 685.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.1 | 33 |
| RES_DEEP (ohm.m) | 16.79 | 33 |
| RES_SHALLOW (ohm.m) | 15.54 | 33 |
| **Δ Res (Deep − Shallow)** | **1.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 5% siltstone. 95% very fine to fine aggregated (trace to minor loose fine) sandstone. TG: 675U. 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (trace to minor loose fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 95% very fine to fine aggregated (trace to minor loose fine) sandstone. TG: 675U. 80% mod bri |
| Total Gas | 675.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 17.74 | 33 |
| RES_SHALLOW (ohm.m) | 16.22 | 33 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 5% siltstone. 95% very fine to fine aggregated (occasional to common medium-coarse loose) sandstone. TG: 960U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (occasional to common medium-coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 95% very fine to fine aggregated (occasional to common medium-coarse loose) sandstone. TG: 960U. 90% mod bri |
| Total Gas | 960.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 32 |
| RES_DEEP (ohm.m) | 19.04 | 32 |
| RES_SHALLOW (ohm.m) | 19.06 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.01** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 100% very fine to fine aggregated (common medium-coarse loose) sandstone. TG: 1118U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (common medium-coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregated (common medium-coarse loose) sandstone. TG: 1118U. 100% bri |
| Total Gas | 1118.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.8 | 33 |
| RES_DEEP (ohm.m) | 19.35 | 33 |
| RES_SHALLOW (ohm.m) | 19.05 | 33 |
| **Δ Res (Deep − Shallow)** | **0.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2497.5 – 2501.0 m

**Sample Description (spreadsheet):** Sample 2500m: 100% very fine to fine aggregated (common medium-coarse loose) sandstone. TG: 1190U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregated (common medium-coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregated (common medium-coarse loose) sandstone. TG: 1190U. 100% bri |
| Total Gas | 1190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 23 |
| RES_DEEP (ohm.m) | 20.69 | 23 |
| RES_SHALLOW (ohm.m) | 17.75 | 23 |
| **Δ Res (Deep − Shallow)** | **2.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2502 m MD — Interval 2501.0 – 2503.5 m

**Sample Description (spreadsheet):** Sample 2502m: 5% siltstone. 95% very fine to fine aggregated (predominantly medium-coarse loose) sandstone. TG: 700U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregated (predominantly medium-coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregated (predominantly medium-coarse loose) sandstone. TG: 700U. 100% bri |
| Total Gas | 700.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 17 |
| RES_DEEP (ohm.m) | 22.00 | 17 |
| RES_SHALLOW (ohm.m) | 19.42 | 17 |
| **Δ Res (Deep − Shallow)** | **2.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2505 m MD — Interval 2503.5 – 2506.5 m

**Sample Description (spreadsheet):** Sample 2505m 100% very fine to fine (100% loose) sandstone. TG: 763U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (100% loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine (100% loose) sandstone. TG: 763U. 100% bri |
| Total Gas | 763.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 19 |
| RES_DEEP (ohm.m) | 23.34 | 19 |
| RES_SHALLOW (ohm.m) | 20.01 | 19 |
| **Δ Res (Deep − Shallow)** | **3.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2508 m MD — Interval 2506.5 – 2509.5 m

**Sample Description (spreadsheet):** Sample 2508m 5% siltstone, 95% very fine to coarse, predominantly medium (100% loose) sandstone. TG: 725U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | siltstone, 95% very fine to coarse, predominantly medium (100% loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 95% very fine to coarse, predominantly medium (100% loose) sandstone. TG: 725U. 100% bri |
| Total Gas | 725.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.0 | 20 |
| RES_DEEP (ohm.m) | 21.10 | 20 |
| RES_SHALLOW (ohm.m) | 18.08 | 20 |
| **Δ Res (Deep − Shallow)** | **3.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2511 m MD — Interval 2509.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2511m 40% siltstone, 60% very fine to coarse, predominantly medium (common loose) sandstone. TG: 554U. 50% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to coarse, predominantly medium (common loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 50.0% siltstone, 60% very fine to coarse, predominantly medium (common loose) sandstone. TG: 554U. 50% bri |
| Total Gas | 554.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.0 | 20 |
| RES_DEEP (ohm.m) | 21.03 | 20 |
| RES_SHALLOW (ohm.m) | 18.97 | 20 |
| **Δ Res (Deep − Shallow)** | **2.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2514 m MD — Interval 2512.5 – 2517.0 m

**Sample Description (spreadsheet):** Sample 2514m 60% siltstone, 40% very fine to coarse, predominantly medium (occasionally  loose) sandstone. TG: 500U. 30% bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to coarse, predominantly medium (occasionally  loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 30.0% siltstone, 40% very fine to coarse, predominantly medium (occasionally  loose) sandstone. TG: 500U. 30% bri |
| Total Gas | 500.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2500m: clr,trnsl,pl brn,pl brn gry, FROM 2499.5-2531.5m vf-f,wl srt,sbang-sbrnd,nil sil cmt & mtx, 100% lse cln qtz grs,gd inf por,fluor 76 / 5 / 4 / 6 / 9 770 U
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.5 | 29 |
| RES_DEEP (ohm.m) | 21.34 | 29 |
| RES_SHALLOW (ohm.m) | 19.72 | 29 |
| **Δ Res (Deep − Shallow)** | **1.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2517.0 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 60% siltstone, 40% very fine to coarse, predominantly medium (occasionally loose) sandstone. TG: 480U. 20% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to coarse, predominantly medium (occasionally loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 20.0% siltstone, 40% very fine to coarse, predominantly medium (occasionally loose) sandstone. TG: 480U. 20% mod bri-dll |
| Total Gas | 480.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.8 | 36 |
| RES_DEEP (ohm.m) | 20.64 | 36 |
| RES_SHALLOW (ohm.m) | 18.80 | 36 |
| **Δ Res (Deep − Shallow)** | **1.84** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: 55% siltstone, 45% very fine aggregates (common coarse loose) sandstone. TG: 670U. 40% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 44.99999999999999 |
| Grain Size | very fine aggregates (common coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 40.0% siltstone, 45% very fine aggregates (common coarse loose) sandstone. TG: 670U. 40% mod bri-dll |
| Total Gas | 670.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: med gry,med gry brn,aren, mnr carb spks & micmic,tr sandy lams, sft-mnr frm,sbblky-blky. 20-60% of SST,mod bri grn yel ppt
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 33 |
| RES_DEEP (ohm.m) | 22.81 | 33 |
| RES_SHALLOW (ohm.m) | 18.56 | 33 |
| **Δ Res (Deep − Shallow)** | **4.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2527.5 – 2531.0 m

**Sample Description (spreadsheet):** Sample 2530m: 40% siltstone, 60% very fine aggregates (common coarse loose) sandstone. TG: 715U. 40% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine aggregates (common coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 40.0% siltstone, 60% very fine aggregates (common coarse loose) sandstone. TG: 715U. 40% mod bri-dll |
| Total Gas | 715.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.5 | 23 |
| RES_DEEP (ohm.m) | 24.61 | 23 |
| RES_SHALLOW (ohm.m) | 20.93 | 23 |
| **Δ Res (Deep − Shallow)** | **3.67** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2532 m MD — Interval 2531.0 – 2533.5 m

**Sample Description (spreadsheet):** Sample 2532m: 20% siltstone, 80% very fine aggregates (predominantly coarse loose) sandstone. TG: 623U. 85% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine aggregates (predominantly coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 85.0% siltstone, 80% very fine aggregates (predominantly coarse loose) sandstone. TG: 623U. 85% mod bri |
| Total Gas | 623.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.7 | 17 |
| RES_DEEP (ohm.m) | 21.70 | 17 |
| RES_SHALLOW (ohm.m) | 18.80 | 17 |
| **Δ Res (Deep − Shallow)** | **2.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2535 m MD — Interval 2533.5 – 2536.5 m

**Sample Description (spreadsheet):** Sample 2535m: 20% siltstone, 80% very fine aggregates (predominantly coarse loose) sandstone. TG: 620U. 85% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine aggregates (predominantly coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 85.0% siltstone, 80% very fine aggregates (predominantly coarse loose) sandstone. TG: 620U. 85% mod bri |
| Total Gas | 620.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 19 |
| RES_DEEP (ohm.m) | 19.01 | 19 |
| RES_SHALLOW (ohm.m) | 17.11 | 19 |
| **Δ Res (Deep − Shallow)** | **1.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2538 m MD — Interval 2536.5 – 2539.5 m

**Sample Description (spreadsheet):** Sample 2538m: 10% siltstone, 90% very fine aggregates (predominantly coarse loose) sandstone. TG: 618U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine aggregates (predominantly coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine aggregates (predominantly coarse loose) sandstone. TG: 618U. 100% mod bri |
| Total Gas | 618.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 20 |
| RES_DEEP (ohm.m) | 19.00 | 20 |
| RES_SHALLOW (ohm.m) | 18.55 | 20 |
| **Δ Res (Deep − Shallow)** | **0.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2541 m MD — Interval 2539.5 – 2543.0 m

**Sample Description (spreadsheet):** Sample 2541m: 10% siltstone, 90% very fine aggregates (predominantly coarse loose) sandstone. TG: 615U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine aggregates (predominantly coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine aggregates (predominantly coarse loose) sandstone. TG: 615U. 100% mod bri |
| Total Gas | 615.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 23 |
| RES_DEEP (ohm.m) | 18.62 | 23 |
| RES_SHALLOW (ohm.m) | 17.60 | 23 |
| **Δ Res (Deep − Shallow)** | **1.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2545 m MD — Interval 2543.0 – 2547.5 m

**Sample Description (spreadsheet):** Sample 2545m: 10% siltstone, 90% very fine to fine aggregates (occasionally coarse loose) sandstone. TG: 1070U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (occasionally coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregates (occasionally coarse loose) sandstone. TG: 1070U. 100% bri |
| Total Gas | 1070.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2530m: med dk gry,med gry brn, aren,mnr carb spks,occ micmic,sft, sbblky-blky. CONTROL DRILL @ 10M/HR FROM 2531.5m-2542.5
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.5 | 29 |
| RES_DEEP (ohm.m) | 17.97 | 29 |
| RES_SHALLOW (ohm.m) | 17.79 | 29 |
| **Δ Res (Deep − Shallow)** | **0.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2547.5 – 2552.5 m

**Sample Description (spreadsheet):** Sample 2550m: 5% siltstone, 95% very fine to fine aggregates (occasionally coarse loose) sandstone. TG: 1080U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (occasionally coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregates (occasionally coarse loose) sandstone. TG: 1080U. 100% bri |
| Total Gas | 1080.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2560m: pl brn gry,pl gry,clr,trnsl, vf-f,g/t aren,slty i/p,tr med-crs,sbang- 79 / 5 / 4 / 5 / 7 819 U sbrnd,wk sil cmt,com pl gry-off wh arg mtx,mnr slty lams,tr lse med-crs grs,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 33 |
| RES_DEEP (ohm.m) | 17.51 | 33 |
| RES_SHALLOW (ohm.m) | 16.49 | 33 |
| **Δ Res (Deep − Shallow)** | **1.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2555 m MD — Interval 2552.5 – 2557.5 m

**Sample Description (spreadsheet):** Sample 2555m: 5% siltstone, 95% very fine to fine aggregates (common coarse loose) sandstone. TG: 1026U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (common coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggregates (common coarse loose) sandstone. TG: 1026U. 100% bri |
| Total Gas | 1026.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: pl brn,clr,trnsl,vf-crs,vf aggs,v pr srt,sbang-sbrnd,mod wk sil cmt,occ pl gry-off wh slty/arg mtx,tr slty lams,occ lse crs grs,tr qtz ovgths, fri aggs,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2560m: pl brn gry,pl gry,clr,trnsl, vf-f,g/t aren,slty i/p,tr med-crs,sbang- 79 / 5 / 4 / 5 / 7 819 U sbrnd,wk sil cmt,com pl gry-off wh arg mtx,mnr slty lams,tr lse med-crs grs,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 33 |
| RES_DEEP (ohm.m) | 17.41 | 33 |
| RES_SHALLOW (ohm.m) | 16.23 | 33 |
| **Δ Res (Deep − Shallow)** | **1.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2557.5 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 5% siltstone, 95% very fine aggregates (minor medium loose) sandstone. TG: 710U. 90% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine aggregates (minor medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone, 95% very fine aggregates (minor medium loose) sandstone. TG: 710U. 90% bri |
| Total Gas | 710.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: pl brn gry,pl gry,clr,trnsl, vf-f,g/t aren,slty i/p,tr med-crs,sbang- 79 / 5 / 4 / 5 / 7 819 U sbrnd,wk sil cmt,com pl gry-off wh arg mtx,mnr slty lams,tr lse med-crs grs,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 16.94 | 33 |
| RES_SHALLOW (ohm.m) | 14.74 | 33 |
| **Δ Res (Deep − Shallow)** | **2.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 5% siltstone, 95% very fine aggregates (minor medium loose) sandstone. TG: 810U. 90% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine aggregates (minor medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone, 95% very fine aggregates (minor medium loose) sandstone. TG: 810U. 90% bri |
| Total Gas | 810.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: pl brn gry,pl gry,clr,trnsl, vf-f,g/t aren,slty i/p,tr med-crs,sbang- 79 / 5 / 4 / 5 / 7 819 U sbrnd,wk sil cmt,com pl gry-off wh arg mtx,mnr slty lams,tr lse med-crs grs,
- **SILTSTONE** @ ~2580m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. SURVEY @ 2586.4m INC: 90.21° AZI: 91.07°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 33 |
| RES_DEEP (ohm.m) | 17.95 | 33 |
| RES_SHALLOW (ohm.m) | 15.22 | 33 |
| **Δ Res (Deep − Shallow)** | **2.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 5% siltstone, 95% very fine aggregates (trace medium to coarse loose) sandstone. TG: 635U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine aggregates (trace medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone, 95% very fine aggregates (trace medium to coarse loose) sandstone. TG: 635U. 90% mod bri |
| Total Gas | 635.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: pl brn gry,pl gry,clr,trnsl, vf-f,g/t aren,slty i/p,tr med-crs,sbang- 79 / 5 / 4 / 5 / 7 819 U sbrnd,wk sil cmt,com pl gry-off wh arg mtx,mnr slty lams,tr lse med-crs grs,
- **SILTSTONE** @ ~2580m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. SURVEY @ 2586.4m INC: 90.21° AZI: 91.07°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 32 |
| RES_DEEP (ohm.m) | 18.17 | 32 |
| RES_SHALLOW (ohm.m) | 15.65 | 32 |
| **Δ Res (Deep − Shallow)** | **2.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 10% siltstone, 90% very fine to fine sandstone. TG: 590U. 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone, 90% very fine to fine sandstone. TG: 590U. 80% mod bri |
| Total Gas | 590.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: pl brn gry,pl gry,clr,trnsl, vf-f,g/t aren,slty i/p,tr med-crs,sbang- 79 / 5 / 4 / 5 / 7 819 U sbrnd,wk sil cmt,com pl gry-off wh arg mtx,mnr slty lams,tr lse med-crs grs,
- **SILTSTONE** @ ~2580m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. SURVEY @ 2586.4m INC: 90.21° AZI: 91.07°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 17.53 | 33 |
| RES_SHALLOW (ohm.m) | 15.35 | 33 |
| **Δ Res (Deep − Shallow)** | **2.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 10% siltstone, 90% very fine to fine sandstone. TG: 650U. 85% mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 85.0% siltstone, 90% very fine to fine sandstone. TG: 650U. 85% mod bri |
| Total Gas | 650.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2580m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. SURVEY @ 2586.4m INC: 90.21° AZI: 91.07°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 33 |
| RES_DEEP (ohm.m) | 17.87 | 33 |
| RES_SHALLOW (ohm.m) | 15.45 | 33 |
| **Δ Res (Deep − Shallow)** | **2.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 10% siltstone, 90% very fine sandstone. TG: 667U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone, 90% very fine sandstone. TG: 667U. 90% mod bri |
| Total Gas | 667.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2580m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. SURVEY @ 2586.4m INC: 90.21° AZI: 91.07°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.4 | 33 |
| RES_DEEP (ohm.m) | 17.93 | 33 |
| RES_SHALLOW (ohm.m) | 16.03 | 33 |
| **Δ Res (Deep − Shallow)** | **1.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 15% siltstone, 85% very fine sandstone. TG: 933U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 85% very fine sandstone. TG: 933U. 100% mod bri |
| Total Gas | 933.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2580m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. SURVEY @ 2586.4m INC: 90.21° AZI: 91.07°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 20.98 | 33 |
| RES_SHALLOW (ohm.m) | 18.60 | 33 |
| **Δ Res (Deep − Shallow)** | **2.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 10% siltstone, 90% very fine to fine sandstone. TG: 850U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine to fine sandstone. TG: 850U. 100% mod bri |
| Total Gas | 850.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2580m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. SURVEY @ 2586.4m INC: 90.21° AZI: 91.07°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 32 |
| RES_DEEP (ohm.m) | 19.52 | 32 |
| RES_SHALLOW (ohm.m) | 18.26 | 32 |
| **Δ Res (Deep − Shallow)** | **1.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2600 m MD — Interval 2597.5 – 2602.5 m

**Sample Description (spreadsheet):** Sample 2600m: 10% siltstone, 90% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 900U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone, 90% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 900U. 100% mod bri |
| Total Gas | 900.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.5 | 33 |
| RES_DEEP (ohm.m) | 18.92 | 33 |
| RES_SHALLOW (ohm.m) | 17.62 | 33 |
| **Δ Res (Deep − Shallow)** | **1.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2605 m MD — Interval 2602.5 – 2607.5 m

**Sample Description (spreadsheet):** Sample 2605m: 100% very fine to fine aggregates (predominantly medium to coarse loose) sandstone. TG: 937U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (predominantly medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregates (predominantly medium to coarse loose) sandstone. TG: 937U. 100% mod bri |
| Total Gas | 937.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.8 | 33 |
| RES_DEEP (ohm.m) | 19.31 | 33 |
| RES_SHALLOW (ohm.m) | 18.49 | 33 |
| **Δ Res (Deep − Shallow)** | **0.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2607.5 – 2612.5 m

**Sample Description (spreadsheet):** Sample 2610m: 100% very fine to fine aggregates (predominantly medium to coarse loose) sandstone. TG: 1086U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggregates (predominantly medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggregates (predominantly medium to coarse loose) sandstone. TG: 1086U. 100% bri |
| Total Gas | 1086.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.4 | 33 |
| RES_DEEP (ohm.m) | 19.81 | 33 |
| RES_SHALLOW (ohm.m) | 20.61 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.80** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2615 m MD — Interval 2612.5 – 2617.5 m

**Sample Description (spreadsheet):** Sample 2615m: 5% siltstone. 95% very fine to fine aggregates (abundant medium to coarse loose) sandstone. TG: 1124U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (abundant medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregates (abundant medium to coarse loose) sandstone. TG: 1124U. 100% bri |
| Total Gas | 1124.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.8 | 33 |
| RES_DEEP (ohm.m) | 19.53 | 33 |
| RES_SHALLOW (ohm.m) | 19.98 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.45** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2617.5 – 2622.5 m

**Sample Description (spreadsheet):** Sample 2620m: 5% siltstone. 95% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 1247U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 1247U. 100% bri |
| Total Gas | 1247.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.9 | 33 |
| RES_DEEP (ohm.m) | 23.15 | 33 |
| RES_SHALLOW (ohm.m) | 20.75 | 33 |
| **Δ Res (Deep − Shallow)** | **2.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2625 m MD — Interval 2622.5 – 2627.5 m

**Sample Description (spreadsheet):** Sample 2625m: 5% siltstone. 95% very fine to fine aggregates (occasional medium to coarse loose) sandstone. TG: 1250U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (occasional medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregates (occasional medium to coarse loose) sandstone. TG: 1250U. 100% bri |
| Total Gas | 1250.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2640m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. 75-90% of SST,mod bri-dll yel grn evn

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 32 |
| RES_DEEP (ohm.m) | 25.39 | 32 |
| RES_SHALLOW (ohm.m) | 20.53 | 32 |
| **Δ Res (Deep − Shallow)** | **4.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2627.5 – 2632.5 m

**Sample Description (spreadsheet):** Sample 2630m: 5% siltstone. 95% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 908U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 908U. 100% bri |
| Total Gas | 908.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2640m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. 75-90% of SST,mod bri-dll yel grn evn

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 26.10 | 33 |
| RES_SHALLOW (ohm.m) | 22.91 | 33 |
| **Δ Res (Deep − Shallow)** | **3.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2635 m MD — Interval 2632.5 – 2637.5 m

**Sample Description (spreadsheet):** Sample 2635m: 50% siltstone. 50% very fine to fine aggregates (rare medium loose) sandstone. TG: 936U. 80% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to fine aggregates (rare medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 80.0% siltstone. 50% very fine to fine aggregates (rare medium loose) sandstone. TG: 936U. 80% bri-mod bri |
| Total Gas | 936.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2640m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. 75-90% of SST,mod bri-dll yel grn evn
- **SANDSTONE** @ ~2650m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod str sil cmt,com brn-gry arg mtx,mod hd-hd aggs,com med-crs disagg grs,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.6 | 33 |
| RES_DEEP (ohm.m) | 21.13 | 33 |
| RES_SHALLOW (ohm.m) | 21.26 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2640 m MD — Interval 2637.5 – 2642.5 m

**Sample Description (spreadsheet):** Sample 2640m: 10% siltstone. 90% pred med-crs loose grains (very fine to fine aggregates) sandstone. TG: 1127U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone. 90% pred med-crs loose grains (very fine to fine aggregates (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% siltstone. 90% pred med-crs loose grains (very fine to fine aggregates) sandstone. TG: 1127U. 100% bri |
| Total Gas | 1127.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2640m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. 75-90% of SST,mod bri-dll yel grn evn
- **SANDSTONE** @ ~2650m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod str sil cmt,com brn-gry arg mtx,mod hd-hd aggs,com med-crs disagg grs,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 56.5 | 33 |
| RES_DEEP (ohm.m) | 23.63 | 33 |
| RES_SHALLOW (ohm.m) | 22.56 | 33 |
| **Δ Res (Deep − Shallow)** | **1.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2645 m MD — Interval 2642.5 – 2647.5 m

**Sample Description (spreadsheet):** Sample 2645m: 15% siltstone. 85% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 982U. 90% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregates (common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 85% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 982U. 90% bri |
| Total Gas | 982.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2640m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. 75-90% of SST,mod bri-dll yel grn evn
- **SANDSTONE** @ ~2650m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod str sil cmt,com brn-gry arg mtx,mod hd-hd aggs,com med-crs disagg grs,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.0 | 33 |
| RES_DEEP (ohm.m) | 17.35 | 33 |
| RES_SHALLOW (ohm.m) | 17.41 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2650 m MD — Interval 2647.5 – 2652.5 m

**Sample Description (spreadsheet):** Sample 2650m: 10% siltstone. 90% pred med-crs loose grains (very fine to fine aggregates) sandstone. TG: 853U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone. 90% pred med-crs loose grains (very fine to fine aggregates (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% siltstone. 90% pred med-crs loose grains (very fine to fine aggregates) sandstone. TG: 853U. 100% mod bri |
| Total Gas | 853.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2640m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. 75-90% of SST,mod bri-dll yel grn evn
- **SANDSTONE** @ ~2650m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod str sil cmt,com brn-gry arg mtx,mod hd-hd aggs,com med-crs disagg grs,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 32 |
| RES_DEEP (ohm.m) | 16.51 | 32 |
| RES_SHALLOW (ohm.m) | 15.44 | 32 |
| **Δ Res (Deep − Shallow)** | **1.08** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2655 m MD — Interval 2652.5 – 2657.5 m

**Sample Description (spreadsheet):** Sample 2655m: 10% siltstone. 90% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 922U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 922U. 100% bri |
| Total Gas | 922.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2640m: dk gry,med dk gry,med gry brn,aren,com micmic,mnr carb spks, sft-frm,sbblky-blky. 75-90% of SST,mod bri-dll yel grn evn
- **SANDSTONE** @ ~2650m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod str sil cmt,com brn-gry arg mtx,mod hd-hd aggs,com med-crs disagg grs,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 17.91 | 33 |
| RES_SHALLOW (ohm.m) | 16.04 | 33 |
| **Δ Res (Deep − Shallow)** | **1.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2660 m MD — Interval 2657.5 – 2662.5 m

**Sample Description (spreadsheet):** Sample 2660m: 5% siltstone. 95% very fine to fine aggregates (minor medium to coarse loose) sandstone. TG: 796U. 80% mod bri-dllfluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (minor medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 80.0% nan |
| Total Gas | 796.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2650m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod str sil cmt,com brn-gry arg mtx,mod hd-hd aggs,com med-crs disagg grs,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 33 |
| RES_DEEP (ohm.m) | 17.98 | 33 |
| RES_SHALLOW (ohm.m) | 15.63 | 33 |
| **Δ Res (Deep − Shallow)** | **2.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2665 m MD — Interval 2662.5 – 2667.5 m

**Sample Description (spreadsheet):** Sample 2665m: 10% siltstone. 90% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 622U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine aggregates (common medium to coarse loose) sandstone. TG: 622U. 90% mod bri |
| Total Gas | 622.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2650m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod str sil cmt,com brn-gry arg mtx,mod hd-hd aggs,com med-crs disagg grs,pr vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 33 |
| RES_DEEP (ohm.m) | 18.14 | 33 |
| RES_SHALLOW (ohm.m) | 15.64 | 33 |
| **Δ Res (Deep − Shallow)** | **2.50** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2667.5 – 2672.5 m

**Sample Description (spreadsheet):** Sample 2670m: 5% siltstone. 95% very fine to fine aggregates (minor fine to medium loose) sandstone. TG: 566U. 75% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 75.0% siltstone. 95% very fine to fine aggregates (minor fine to medium loose) sandstone. TG: 566U. 75% mod bri-dll |
| Total Gas | 566.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 33 |
| RES_DEEP (ohm.m) | 18.97 | 33 |
| RES_SHALLOW (ohm.m) | 16.99 | 33 |
| **Δ Res (Deep − Shallow)** | **1.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2675 m MD — Interval 2672.5 – 2677.5 m

**Sample Description (spreadsheet):** Sample 2675m: 10% siltstone. 90% very fine to fine aggregates (trace fine loose) sandstone. TG: 715U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggregates (trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 90.0% siltstone. 90% very fine to fine aggregates (trace fine loose) sandstone. TG: 715U. 90% mod bri |
| Total Gas | 715.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2690m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,com brn-gry arg mtx,mod hd-fri aggs,com f-crs disagg grs,tr sndy lams, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 32 |
| RES_DEEP (ohm.m) | 19.86 | 32 |
| RES_SHALLOW (ohm.m) | 18.60 | 32 |
| **Δ Res (Deep − Shallow)** | **1.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2677.5 – 2682.5 m

**Sample Description (spreadsheet):** Sample 2680m: 5% siltstone. 95% very fine to fine aggregates (rare fine to coarse loose) sandstone. TG: 1010U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggregates (rare fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggregates (rare fine to coarse loose) sandstone. TG: 1010U. 100% mod bri |
| Total Gas | 1010.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2690m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,com brn-gry arg mtx,mod hd-fri aggs,com f-crs disagg grs,tr sndy lams, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.4 | 33 |
| RES_DEEP (ohm.m) | 20.42 | 33 |
| RES_SHALLOW (ohm.m) | 20.33 | 33 |
| **Δ Res (Deep − Shallow)** | **0.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2685 m MD — Interval 2682.5 – 2687.5 m

**Sample Description (spreadsheet):** Sample 2685m: 5% siltstone. 95% fine to medium loose (very fine to fine aggregates) sandstone. TG: 1030U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine to medium loose (very fine to fine aggregates (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% fine to medium loose (very fine to fine aggregates) sandstone. TG: 1030U. 100% mod bri |
| Total Gas | 1030.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2690m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,com brn-gry arg mtx,mod hd-fri aggs,com f-crs disagg grs,tr sndy lams, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.8 | 33 |
| RES_DEEP (ohm.m) | 23.60 | 33 |
| RES_SHALLOW (ohm.m) | 22.57 | 33 |
| **Δ Res (Deep − Shallow)** | **1.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2687.5 – 2692.5 m

**Sample Description (spreadsheet):** Sample 2690: 15% siltstone. 85% very fine to fine aggregates (com fine to coarse loose) sandstone. TG: 1430U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregates (com fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to fine aggregates (com fine to coarse loose) sandstone. TG: 1430U. 100% mod bri-bri |
| Total Gas | 1430.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2690m: pl-lt brn,clr-trnsl,vf-crs, vf-f in aggs,pr srt,sbang-sbrnd,mod-wk sil cmt,com brn-gry arg mtx,mod hd-fri aggs,com f-crs disagg grs,tr sndy lams, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.2 | 33 |
| RES_DEEP (ohm.m) | 23.16 | 33 |
| RES_SHALLOW (ohm.m) | 20.78 | 33 |
| **Δ Res (Deep − Shallow)** | **2.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2745 m MD — Interval 2743.5 – 2747.5 m

**Sample Description (spreadsheet):** Sample 2745m: 60% siltstone. 40% very fine to fine aggregates g/t SLTST (trace medium to very coarse loose) sandstone. TG: 367U. trace dll-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to fine aggregates g/t SLTST (trace medium to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 0.0% siltstone. 40% very fine to fine aggregates g/t SLTST (trace medium to very coarse loose) sandstone. TG: 367U. trace dll-mod bri |
| Total Gas | 367.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2730m: med dk gry,dk brn,aren,loc com sndy lams,tr micmic,tr sid,mod hd hd i/p,tr v hd,sbblky-blky. McKINLAY MEMBER (RE-ENTRY): 2736.8mMDRT (-1195.9mTVDSS)
- **SANDSTONE** @ ~2760m: pl-lt brn,lt gry,clr,trnsl,vf- med,com vf-f in aggs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,tr sid cmt,mnr-loc com brn-gry arg mtx,tr slty lams,fri-mod hd,tr hd,com dissag f-med qtz grs,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.0 | 27 |
| RES_DEEP (ohm.m) | 19.32 | 27 |
| RES_SHALLOW (ohm.m) | 15.96 | 27 |
| **Δ Res (Deep − Shallow)** | **3.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2747.5 – 2752.5 m

**Sample Description (spreadsheet):** Sample 2750m: 45% siltstone. 55% very fine to fine aggregates g/t SLTST (trace medium to coarse loose) sandstone. TG: 550U. 10% dll-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 55.00000000000001 |
| Grain Size | very fine to fine aggregates g/t SLTST (trace medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 10.0% siltstone. 55% very fine to fine aggregates g/t SLTST (trace medium to coarse loose) sandstone. TG: 550U. 10% dll-mod bri |
| Total Gas | 550.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: pl-lt brn,lt gry,clr,trnsl,vf- med,com vf-f in aggs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,tr sid cmt,mnr-loc com brn-gry arg mtx,tr slty lams,fri-mod hd,tr hd,com dissag f-med qtz grs,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.7 | 33 |
| RES_DEEP (ohm.m) | 19.37 | 33 |
| RES_SHALLOW (ohm.m) | 18.65 | 33 |
| **Δ Res (Deep − Shallow)** | **0.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2755 m MD — Interval 2752.5 – 2757.5 m

**Sample Description (spreadsheet):** Sample 2755m: 15% siltstone. 85% very fine to fine aggs, com medium to coarse loose sandstone. TG: 870U. 75% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs, com medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 75.0% siltstone. 85% very fine to fine aggs, com medium to coarse loose sandstone. TG: 870U. 75% mod bri-dll |
| Total Gas | 870.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: pl-lt brn,lt gry,clr,trnsl,vf- med,com vf-f in aggs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,tr sid cmt,mnr-loc com brn-gry arg mtx,tr slty lams,fri-mod hd,tr hd,com dissag f-med qtz grs,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.3 | 32 |
| RES_DEEP (ohm.m) | 19.34 | 32 |
| RES_SHALLOW (ohm.m) | 18.70 | 32 |
| **Δ Res (Deep − Shallow)** | **0.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2757.5 – 2762.5 m

**Sample Description (spreadsheet):** Sample 2760m: 10% siltstone. 90% very fine to fine aggs, com fine to very coarse loose sandstone. TG: 883U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, com fine to very coarse loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggs, com fine to very coarse loose sandstone. TG: 883U. 100% mod bri |
| Total Gas | 883.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: pl-lt brn,lt gry,clr,trnsl,vf- med,com vf-f in aggs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,tr sid cmt,mnr-loc com brn-gry arg mtx,tr slty lams,fri-mod hd,tr hd,com dissag f-med qtz grs,pr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 33 |
| RES_DEEP (ohm.m) | 17.84 | 33 |
| RES_SHALLOW (ohm.m) | 18.61 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.76** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2765 m MD — Interval 2762.5 – 2767.5 m

**Sample Description (spreadsheet):** Sample 2765m: 5% siltstone. 95% very fine to fine aggs, com fine to coarse loose sandstone. TG: 992U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, com fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, com fine to coarse loose sandstone. TG: 992U. 100% mod bri-bri |
| Total Gas | 992.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: pl-lt brn,lt gry,clr,trnsl,vf- med,com vf-f in aggs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,tr sid cmt,mnr-loc com brn-gry arg mtx,tr slty lams,fri-mod hd,tr hd,com dissag f-med qtz grs,pr vis
- **SANDSTONE** @ ~2780m: pl-lt brn,lt gry,clr,trnsl,vf- med,vf-f in aggs,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg mtx,fri-mod hd,rr dissag f-med qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 33 |
| RES_DEEP (ohm.m) | 16.56 | 33 |
| RES_SHALLOW (ohm.m) | 17.44 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.88** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2767.5 – 2772.5 m

**Sample Description (spreadsheet):** Sample 2770m: 5% siltstone. 95% very fine to fine aggs, com fine to medium loose sandstone. TG: 1001U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, com fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, com fine to medium loose sandstone. TG: 1001U. 100% mod bri |
| Total Gas | 1001.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: pl-lt brn,lt gry,clr,trnsl,vf- med,com vf-f in aggs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,tr sid cmt,mnr-loc com brn-gry arg mtx,tr slty lams,fri-mod hd,tr hd,com dissag f-med qtz grs,pr vis
- **SANDSTONE** @ ~2780m: pl-lt brn,lt gry,clr,trnsl,vf- med,vf-f in aggs,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg mtx,fri-mod hd,rr dissag f-med qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 33 |
| RES_DEEP (ohm.m) | 17.32 | 33 |
| RES_SHALLOW (ohm.m) | 16.78 | 33 |
| **Δ Res (Deep − Shallow)** | **0.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2775 m MD — Interval 2772.5 – 2777.5 m

**Sample Description (spreadsheet):** Sample 2775m: 15% siltstone. 85% very fine to fine aggs, com fine to coarse loose sandstone. TG: 937U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs, com fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 85% very fine to fine aggs, com fine to coarse loose sandstone. TG: 937U. 100% mod bri |
| Total Gas | 937.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: pl-lt brn,lt gry,clr,trnsl,vf- med,com vf-f in aggs,mod-wl srt,sbang- sbrnd,wk-mod sil cmt,tr sid cmt,mnr-loc com brn-gry arg mtx,tr slty lams,fri-mod hd,tr hd,com dissag f-med qtz grs,pr vis
- **SANDSTONE** @ ~2780m: pl-lt brn,lt gry,clr,trnsl,vf- med,vf-f in aggs,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg mtx,fri-mod hd,rr dissag f-med qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 17.68 | 33 |
| RES_SHALLOW (ohm.m) | 16.08 | 33 |
| **Δ Res (Deep − Shallow)** | **1.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2777.5 – 2782.5 m

**Sample Description (spreadsheet):** Sample 2780m: 25% siltstone. 75% very fine to fine aggs, com fine to coarse loose sandstone. TG: 458U. 50% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine aggs, com fine to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 50.0% siltstone. 75% very fine to fine aggs, com fine to coarse loose sandstone. TG: 458U. 50% mod bri-dll |
| Total Gas | 458.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: pl-lt brn,lt gry,clr,trnsl,vf- med,vf-f in aggs,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg mtx,fri-mod hd,rr dissag f-med qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.9 | 32 |
| RES_DEEP (ohm.m) | 16.68 | 32 |
| RES_SHALLOW (ohm.m) | 14.68 | 32 |
| **Δ Res (Deep − Shallow)** | **1.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2785 m MD — Interval 2782.5 – 2787.5 m

**Sample Description (spreadsheet):** Sample 2785m: 25% siltstone. 75% very fine to fine aggs, minor fine to medum loose sandstone. TG: 542U. 55% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine aggs, minor fine to medum loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 55.00000000000001% siltstone. 75% very fine to fine aggs, minor fine to medum loose sandstone. TG: 542U. 55% mod bri |
| Total Gas | 542.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: pl-lt brn,lt gry,clr,trnsl,vf- med,vf-f in aggs,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg mtx,fri-mod hd,rr dissag f-med qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 15.52 | 33 |
| RES_SHALLOW (ohm.m) | 14.07 | 33 |
| **Δ Res (Deep − Shallow)** | **1.45** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2787.5 – 2792.5 m

**Sample Description (spreadsheet):** Sample 2790m: 20% siltstone. 80% very fine to fine aggs, rare fine to medum loose sandstone. TG: 684U. 60% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggs, rare fine to medum loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 60.0% siltstone. 80% very fine to fine aggs, rare fine to medum loose sandstone. TG: 684U. 60% mod bri |
| Total Gas | 684.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: pl-lt brn,lt gry,clr,trnsl,vf- med,vf-f in aggs,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg mtx,fri-mod hd,rr dissag f-med qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.1 | 33 |
| RES_DEEP (ohm.m) | 15.80 | 33 |
| RES_SHALLOW (ohm.m) | 15.08 | 33 |
| **Δ Res (Deep − Shallow)** | **0.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2795 m MD — Interval 2792.5 – 2797.5 m

**Sample Description (spreadsheet):** Sample 2795m: 15% siltstone. 85% very fine to fine aggs, rare fine & trace med-crs loose sandstone. TG: 780U. 75% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs, rare fine & trace med-crs loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 75.0% siltstone. 85% very fine to fine aggs, rare fine & trace med-crs loose sandstone. TG: 780U. 75% mod bri |
| Total Gas | 780.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: pl-lt brn,lt gry,clr,trnsl,vf- med,vf-f in aggs,wl srt,sbang-sbrnd, wk-mod sil cmt,mnr-loc com brn-gry arg mtx,fri-mod hd,rr dissag f-med qtz grs, pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.0 | 33 |
| RES_DEEP (ohm.m) | 16.49 | 33 |
| RES_SHALLOW (ohm.m) | 16.46 | 33 |
| **Δ Res (Deep − Shallow)** | **0.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2797.5 – 2802.5 m

**Sample Description (spreadsheet):** Sample 2800m: 10% siltstone. 90% very fine to fine aggs, mnr fine to medium loose sandstone. TG: 1214U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs, mnr fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 90% very fine to fine aggs, mnr fine to medium loose sandstone. TG: 1214U. 100% mod bri |
| Total Gas | 1214.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 17.39 | 33 |
| RES_SHALLOW (ohm.m) | 17.77 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.38** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2805 m MD — Interval 2802.5 – 2807.5 m

**Sample Description (spreadsheet):** Sample 2805m: 5% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 1354U. 100% mod bri-BRI fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 1354U. 100% mod bri-BRI |
| Total Gas | 1354.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 32 |
| RES_DEEP (ohm.m) | 17.76 | 32 |
| RES_SHALLOW (ohm.m) | 18.67 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.91** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2807.5 – 2812.5 m

**Sample Description (spreadsheet):** Sample 2810m: 5% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 725U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 725U. 100% mod bri |
| Total Gas | 725.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 16.13 | 33 |
| RES_SHALLOW (ohm.m) | 16.55 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2815 m MD — Interval 2812.5 – 2817.5 m

**Sample Description (spreadsheet):** Sample 2815m: 5% siltstone. 95% very fine to fine aggs, mnr fine & trace med-crs loose sandstone. TG: 731U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, mnr fine & trace med-crs loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, mnr fine & trace med-crs loose sandstone. TG: 731U. 100% mod bri |
| Total Gas | 731.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 16.06 | 33 |
| RES_SHALLOW (ohm.m) | 16.08 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2817.5 – 2822.5 m

**Sample Description (spreadsheet):** Sample 2820m: 5% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 971U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 971U. 100% mod bri |
| Total Gas | 971.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 15.60 | 33 |
| RES_SHALLOW (ohm.m) | 15.48 | 33 |
| **Δ Res (Deep − Shallow)** | **0.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2825 m MD — Interval 2822.5 – 2827.5 m

**Sample Description (spreadsheet):** Sample 2825m: 5% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 810U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, mnr fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, mnr fine loose sandstone. TG: 810U. 100% mod bri |
| Total Gas | 810.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 33 |
| RES_DEEP (ohm.m) | 14.98 | 33 |
| RES_SHALLOW (ohm.m) | 15.18 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2827.5 – 2832.5 m

**Sample Description (spreadsheet):** Sample 2830m: 5% siltstone. 95% very fine to fine aggs, com fine-med loose sandstone. TG: 847U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, com fine-med loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% siltstone. 95% very fine to fine aggs, com fine-med loose sandstone. TG: 847U. 100% mod bri |
| Total Gas | 847.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 32 |
| RES_DEEP (ohm.m) | 14.99 | 32 |
| RES_SHALLOW (ohm.m) | 15.19 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2835 m MD — Interval 2832.5 – 2837.5 m

**Sample Description (spreadsheet):** Sample 2835m: 100% very fine to fine aggs, rare fine to very fine-loose sandstone. TG: 850U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rare fine to very fine-loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggs, rare fine to very fine-loose sandstone. TG: 850U. 100% mod bri |
| Total Gas | 850.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 33 |
| RES_DEEP (ohm.m) | 14.79 | 33 |
| RES_SHALLOW (ohm.m) | 14.87 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2840 m MD — Interval 2837.5 – 2842.5 m

**Sample Description (spreadsheet):** Sample 2840m: 100% very fine to fine aggs, minor fine to very fine-loose sandstone. TG: 724U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor fine to very fine-loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggs, minor fine to very fine-loose sandstone. TG: 724U. 100% mod bri |
| Total Gas | 724.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 14.25 | 33 |
| RES_SHALLOW (ohm.m) | 14.41 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2845 m MD — Interval 2842.5 – 2847.5 m

**Sample Description (spreadsheet):** Sample 2845m: 100% very fine to fine aggs, minor fine loose sandstone. TG: 705U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggs, minor fine loose sandstone. TG: 705U. 100% mod bri |
| Total Gas | 705.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.1 | 33 |
| RES_DEEP (ohm.m) | 14.09 | 33 |
| RES_SHALLOW (ohm.m) | 13.91 | 33 |
| **Δ Res (Deep − Shallow)** | **0.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2850 m MD — Interval 2847.5 – 2852.5 m

**Sample Description (spreadsheet):** Sample 2850m: 10% Siltstone, 90% very fine to fine aggs, rare fine loose sandstone. TG: 555U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, rare fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone, 90% very fine to fine aggs, rare fine loose sandstone. TG: 555U. 100% mod bri |
| Total Gas | 555.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 14.13 | 33 |
| RES_SHALLOW (ohm.m) | 13.76 | 33 |
| **Δ Res (Deep − Shallow)** | **0.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2855 m MD — Interval 2852.5 – 2857.5 m

**Sample Description (spreadsheet):** Sample 2855m: 10% Siltstone, 90% very fine to fine aggs, occasional fine loose sandstone. TG: 561U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, occasional fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone, 90% very fine to fine aggs, occasional fine loose sandstone. TG: 561U. 100% mod bri |
| Total Gas | 561.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 33 |
| RES_DEEP (ohm.m) | 14.67 | 33 |
| RES_SHALLOW (ohm.m) | 14.33 | 33 |
| **Δ Res (Deep − Shallow)** | **0.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2860 m MD — Interval 2857.5 – 2862.5 m

**Sample Description (spreadsheet):** Sample 2860m: 10% Siltstone, 90% very fine to fine aggs, occasional fine loose sandstone. TG: 655U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, occasional fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone, 90% very fine to fine aggs, occasional fine loose sandstone. TG: 655U. 100% mod bri |
| Total Gas | 655.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 14.57 | 33 |
| RES_SHALLOW (ohm.m) | 14.45 | 33 |
| **Δ Res (Deep − Shallow)** | **0.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2865 m MD — Interval 2862.5 – 2867.5 m

**Sample Description (spreadsheet):** Sample 2865m: 10% Siltstone, 90% very fine aggs, occasional fine loose sandstone. TG: 612U. 90% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine aggs, occasional fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% Siltstone, 90% very fine aggs, occasional fine loose sandstone. TG: 612U. 90% mod bri |
| Total Gas | 612.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.0 | 33 |
| RES_DEEP (ohm.m) | 16.95 | 33 |
| RES_SHALLOW (ohm.m) | 17.03 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2867.5 – 2872.5 m

**Sample Description (spreadsheet):** Sample 2870m: 15% Siltstone, 85% very fine aggs, occasional fine loose sandstone. TG: 410U. 80% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine aggs, occasional fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% Siltstone, 85% very fine aggs, occasional fine loose sandstone. TG: 410U. 80% mod bri |
| Total Gas | 410.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.9 | 33 |
| RES_DEEP (ohm.m) | 17.32 | 33 |
| RES_SHALLOW (ohm.m) | 16.49 | 33 |
| **Δ Res (Deep − Shallow)** | **0.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2875 m MD — Interval 2872.5 – 2877.5 m

**Sample Description (spreadsheet):** Sample 2875m: 15% Siltstone, 85% very fine aggs, minor fine loose sandstone. TG: 360U. 85% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine aggs, minor fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 85.0% Siltstone, 85% very fine aggs, minor fine loose sandstone. TG: 360U. 85% mod bri |
| Total Gas | 360.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: clr,trnsl,pl brn gry,vf-f,v wl srt,mnr g/t aren SLTST,sbang-sbrnd,str sil cmt,com pl gry slty mtx,com pl brn arg mtx,abdt vf disagg grs,mod hd-fri,rr hd,pr-fr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 18.34 | 33 |
| RES_SHALLOW (ohm.m) | 16.91 | 33 |
| **Δ Res (Deep − Shallow)** | **1.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2880 m MD — Interval 2877.5 – 2882.5 m

**Sample Description (spreadsheet):** Sample 2880m: 15% Siltstone, 85% very fine to fine aggs, minor fine loose sandstone. TG: 430U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs, minor fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone, 85% very fine to fine aggs, minor fine loose sandstone. TG: 430U. 100% bri |
| Total Gas | 430.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: clr,trnsl,pl brn gry,vf-f,v wl srt,mnr g/t aren SLTST,sbang-sbrnd,str sil cmt,com pl gry slty mtx,com pl brn arg mtx,abdt vf disagg grs,mod hd-fri,rr hd,pr-fr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 33 |
| RES_DEEP (ohm.m) | 17.88 | 33 |
| RES_SHALLOW (ohm.m) | 17.19 | 33 |
| **Δ Res (Deep − Shallow)** | **0.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2885 m MD — Interval 2882.5 – 2887.5 m

**Sample Description (spreadsheet):** Sample 2885m 10% Siltstone 90% very fine to fine aggs, minor fine loose sandstone. TG: 400U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, minor fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone 90% very fine to fine aggs, minor fine loose sandstone. TG: 400U. 100% bri |
| Total Gas | 400.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: clr,trnsl,pl brn gry,vf-f,v wl srt,mnr g/t aren SLTST,sbang-sbrnd,str sil cmt,com pl gry slty mtx,com pl brn arg mtx,abdt vf disagg grs,mod hd-fri,rr hd,pr-fr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 32 |
| RES_DEEP (ohm.m) | 19.00 | 32 |
| RES_SHALLOW (ohm.m) | 18.43 | 32 |
| **Δ Res (Deep − Shallow)** | **0.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2890 m MD — Interval 2887.5 – 2892.5 m

**Sample Description (spreadsheet):** Sample 2890m 10% Siltstone 90% very fine to fine aggs, minor to occasional fine to medium loose sandstone. TG: 375U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, minor to occasional fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone 90% very fine to fine aggs, minor to occasional fine to medium loose sandstone. TG: 375U. 100% bri |
| Total Gas | 375.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: clr,trnsl,pl brn gry,vf-f,v wl srt,mnr g/t aren SLTST,sbang-sbrnd,str sil cmt,com pl gry slty mtx,com pl brn arg mtx,abdt vf disagg grs,mod hd-fri,rr hd,pr-fr vis por,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 17.81 | 33 |
| RES_SHALLOW (ohm.m) | 17.56 | 33 |
| **Δ Res (Deep − Shallow)** | **0.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2895 m MD — Interval 2892.5 – 2897.5 m

**Sample Description (spreadsheet):** Sample 2895m 5% Siltstone 100% very fine to fine aggs, abundant very fine loose sandstone. TG: 640U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, abundant very fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone 100% very fine to fine aggs, abundant very fine loose sandstone. TG: 640U. 100% bri |
| Total Gas | 640.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: clr,trnsl,pl brn gry,vf-f,v wl srt,mnr g/t aren SLTST,sbang-sbrnd,str sil cmt,com pl gry slty mtx,com pl brn arg mtx,abdt vf disagg grs,mod hd-fri,rr hd,pr-fr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2910m: dk gry,dk gry brn,med gry brn,aren,occ carb spks & micmic,rr sndy 82 / 5 / 3 / 4 / 6 547 U lams,sft,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.5 | 33 |
| RES_DEEP (ohm.m) | 18.96 | 33 |
| RES_SHALLOW (ohm.m) | 18.95 | 33 |
| **Δ Res (Deep − Shallow)** | **0.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2897.5 – 2902.5 m

**Sample Description (spreadsheet):** Sample 2900m 5% Siltstone. 95% very fine aggs, abundant very fine loose sandstone. TG: 860U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine aggs, abundant very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine aggs, abundant very fine loose sandstone. TG: 860U. 100% bri |
| Total Gas | 860.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: clr,trnsl,pl brn gry,vf-f,v wl srt,mnr g/t aren SLTST,sbang-sbrnd,str sil cmt,com pl gry slty mtx,com pl brn arg mtx,abdt vf disagg grs,mod hd-fri,rr hd,pr-fr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2910m: dk gry,dk gry brn,med gry brn,aren,occ carb spks & micmic,rr sndy 82 / 5 / 3 / 4 / 6 547 U lams,sft,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 33 |
| RES_DEEP (ohm.m) | 19.71 | 33 |
| RES_SHALLOW (ohm.m) | 19.71 | 33 |
| **Δ Res (Deep − Shallow)** | **0.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2905 m MD — Interval 2902.5 – 2907.5 m

**Sample Description (spreadsheet):** Sample 2905m 100% very fine aggs, abundant very fine loose sandstone. TG: 767U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, abundant very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, abundant very fine loose sandstone. TG: 767U. 100% bri |
| Total Gas | 767.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: clr,trnsl,pl brn gry,vf-f,v wl srt,mnr g/t aren SLTST,sbang-sbrnd,str sil cmt,com pl gry slty mtx,com pl brn arg mtx,abdt vf disagg grs,mod hd-fri,rr hd,pr-fr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2910m: dk gry,dk gry brn,med gry brn,aren,occ carb spks & micmic,rr sndy 82 / 5 / 3 / 4 / 6 547 U lams,sft,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 33 |
| RES_DEEP (ohm.m) | 20.05 | 33 |
| RES_SHALLOW (ohm.m) | 19.78 | 33 |
| **Δ Res (Deep − Shallow)** | **0.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2907.5 – 2912.5 m

**Sample Description (spreadsheet):** Sample 2910m 100% very fine aggs, occasional very fine loose sandstone. TG: 720U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, occasional very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, occasional very fine loose sandstone. TG: 720U. 100% bri |
| Total Gas | 720.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,dk gry brn,med gry brn,aren,occ carb spks & micmic,rr sndy 82 / 5 / 3 / 4 / 6 547 U lams,sft,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.3 | 32 |
| RES_DEEP (ohm.m) | 20.49 | 32 |
| RES_SHALLOW (ohm.m) | 20.21 | 32 |
| **Δ Res (Deep − Shallow)** | **0.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2915 m MD — Interval 2912.5 – 2917.5 m

**Sample Description (spreadsheet):** Sample 2915m 100% very fine aggs, occasional very fine loose sandstone. TG: 667U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, occasional very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, occasional very fine loose sandstone. TG: 667U. 100% bri |
| Total Gas | 667.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,dk gry brn,med gry brn,aren,occ carb spks & micmic,rr sndy 82 / 5 / 3 / 4 / 6 547 U lams,sft,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.9 | 33 |
| RES_DEEP (ohm.m) | 21.51 | 33 |
| RES_SHALLOW (ohm.m) | 22.66 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.15** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2917.5 – 2922.5 m

**Sample Description (spreadsheet):** Sample 2920m 100% very fine aggs, occasional very fine loose sandstone. TG: 540U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, occasional very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, occasional very fine loose sandstone. TG: 540U. 100% bri |
| Total Gas | 540.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,dk gry brn,med gry brn,aren,occ carb spks & micmic,rr sndy 82 / 5 / 3 / 4 / 6 547 U lams,sft,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.6 | 33 |
| RES_DEEP (ohm.m) | 18.57 | 33 |
| RES_SHALLOW (ohm.m) | 18.89 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2925 m MD — Interval 2922.5 – 2927.5 m

**Sample Description (spreadsheet):** Sample 2925m 5% Siltstone. 95% very fine aggs, occasional to common very fine loose sandstone. TG: 480U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine aggs, occasional to common very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine aggs, occasional to common very fine loose sandstone. TG: 480U. 100% bri |
| Total Gas | 480.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,dk gry brn,med gry brn,aren,occ carb spks & micmic,rr sndy 82 / 5 / 3 / 4 / 6 547 U lams,sft,sbblky-blky.
- **SANDSTONE** @ ~2940m: pl brn gry,clr-trnsl,vf-f, mnr med-crs,mod pr srt,occ g/t aren SLTST,sbrnd-sbang,mod wk sil cmt, com pl gry slty mtx,com pl brn arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.0 | 33 |
| RES_DEEP (ohm.m) | 18.91 | 33 |
| RES_SHALLOW (ohm.m) | 19.14 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2930 m MD — Interval 2927.5 – 2932.5 m

**Sample Description (spreadsheet):** Sample 2930m 5% Siltstone. 95% very fine aggs, occasional to common very fine loose sandstone. TG: 920U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine aggs, occasional to common very fine loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine aggs, occasional to common very fine loose sandstone. TG: 920U. 100% bri |
| Total Gas | 920.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: pl brn gry,clr-trnsl,vf-f, mnr med-crs,mod pr srt,occ g/t aren SLTST,sbrnd-sbang,mod wk sil cmt, com pl gry slty mtx,com pl brn arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 33 |
| RES_DEEP (ohm.m) | 16.70 | 33 |
| RES_SHALLOW (ohm.m) | 17.30 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.60** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2935 m MD — Interval 2932.5 – 2937.5 m

**Sample Description (spreadsheet):** Sample 2935m 100% very fine aggs, occasional to common very fine to rare medium loose sandstone. TG: 928U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, occasional to common very fine to rare medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, occasional to common very fine to rare medium loose sandstone. TG: 928U. 100% bri |
| Total Gas | 928.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: pl brn gry,clr-trnsl,vf-f, mnr med-crs,mod pr srt,occ g/t aren SLTST,sbrnd-sbang,mod wk sil cmt, com pl gry slty mtx,com pl brn arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.4 | 32 |
| RES_DEEP (ohm.m) | 18.02 | 32 |
| RES_SHALLOW (ohm.m) | 18.22 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2940 m MD — Interval 2937.5 – 2942.5 m

**Sample Description (spreadsheet):** Sample 2940m 100% very fine aggs, occasional to common very fine to rare medium loose sandstone. TG: 1035U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, occasional to common very fine to rare medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, occasional to common very fine to rare medium loose sandstone. TG: 1035U. 100% bri |
| Total Gas | 1035.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: pl brn gry,clr-trnsl,vf-f, mnr med-crs,mod pr srt,occ g/t aren SLTST,sbrnd-sbang,mod wk sil cmt, com pl gry slty mtx,com pl brn arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 18.26 | 33 |
| RES_SHALLOW (ohm.m) | 18.62 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.36** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2945 m MD — Interval 2942.5 – 2947.5 m

**Sample Description (spreadsheet):** Sample 2945m 100% very fine aggs, occasional to common very fine to rare coarse loose sandstone. TG: 915U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, occasional to common very fine to rare coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, occasional to common very fine to rare coarse loose sandstone. TG: 915U. 100% bri |
| Total Gas | 915.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: pl brn gry,clr-trnsl,vf-f, mnr med-crs,mod pr srt,occ g/t aren SLTST,sbrnd-sbang,mod wk sil cmt, com pl gry slty mtx,com pl brn arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 18.08 | 33 |
| RES_SHALLOW (ohm.m) | 18.55 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.47** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2947.5 – 2952.5 m

**Sample Description (spreadsheet):** Sample 2950m 100% very fine aggs, occasional to common very fine to rare coarse loose sandstone. TG: 920U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, occasional to common very fine to rare coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, occasional to common very fine to rare coarse loose sandstone. TG: 920U. 100% bri |
| Total Gas | 920.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: pl brn gry,clr-trnsl,vf-f, mnr med-crs,mod pr srt,occ g/t aren SLTST,sbrnd-sbang,mod wk sil cmt, com pl gry slty mtx,com pl brn arg mtx,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 33 |
| RES_DEEP (ohm.m) | 18.11 | 33 |
| RES_SHALLOW (ohm.m) | 18.65 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.55** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2955 m MD — Interval 2952.5 – 2957.5 m

**Sample Description (spreadsheet):** Sample 2955m 100% very fine aggs, common very fine to rare medium loose sandstone. TG: 1186U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, common very fine to rare medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, common very fine to rare medium loose sandstone. TG: 1186U. 100% bri |
| Total Gas | 1186.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: pl brn gry,clr-trnsl,vf-f, mnr med-crs,mod pr srt,occ g/t aren SLTST,sbrnd-sbang,mod wk sil cmt, com pl gry slty mtx,com pl brn arg mtx,
- **SANDSTONE** @ ~2970m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,occ-com med-crs disagg grs,fri,por vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 17.95 | 33 |
| RES_SHALLOW (ohm.m) | 19.44 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.49** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2957.5 – 2962.5 m

**Sample Description (spreadsheet):** Sample 2960m 100% very fine aggs, common very fine to rare medium loose sandstone. TG: 1075U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine aggs, common very fine to rare medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine aggs, common very fine to rare medium loose sandstone. TG: 1075U. 100% bri |
| Total Gas | 1075.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,occ-com med-crs disagg grs,fri,por vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 32 |
| RES_DEEP (ohm.m) | 16.33 | 32 |
| RES_SHALLOW (ohm.m) | 17.10 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.76** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2965 m MD — Interval 2962.5 – 2967.5 m

**Sample Description (spreadsheet):** Sample 2965m 10% Siltstone. 90% very fine to fine aggs, common very fine to medium loose sandstone. TG: 915U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, common very fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine aggs, common very fine to medium loose sandstone. TG: 915U. 100% bri |
| Total Gas | 915.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,occ-com med-crs disagg grs,fri,por vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,com lse,occ-com med-crs 79 / 5 / 4 / 5 / 7 1090 U disagg grs,fri,por vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 16.31 | 33 |
| RES_SHALLOW (ohm.m) | 15.91 | 33 |
| **Δ Res (Deep − Shallow)** | **0.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2970 m MD — Interval 2967.5 – 2972.5 m

**Sample Description (spreadsheet):** Sample 2970m 5% Siltstone. 95% very fine to fine aggs, common medium to coarse loose sandstone. TG: 996U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggs, common medium to coarse loose sandstone. TG: 996U. 100% bri |
| Total Gas | 996.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,occ-com med-crs disagg grs,fri,por vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,com lse,occ-com med-crs 79 / 5 / 4 / 5 / 7 1090 U disagg grs,fri,por vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 16.55 | 33 |
| RES_SHALLOW (ohm.m) | 16.53 | 33 |
| **Δ Res (Deep − Shallow)** | **0.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2975 m MD — Interval 2972.5 – 2977.5 m

**Sample Description (spreadsheet):** Sample 2975m 5% Siltstone. 95% very fine to fine aggs, common medium to coarse loose sandstone. TG: 927U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggs, common medium to coarse loose sandstone. TG: 927U. 100% bri |
| Total Gas | 927.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,occ-com med-crs disagg grs,fri,por vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,com lse,occ-com med-crs 79 / 5 / 4 / 5 / 7 1090 U disagg grs,fri,por vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 33 |
| RES_DEEP (ohm.m) | 16.39 | 33 |
| RES_SHALLOW (ohm.m) | 16.25 | 33 |
| **Δ Res (Deep − Shallow)** | **0.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2980 m MD — Interval 2977.5 – 2982.5 m

**Sample Description (spreadsheet):** Sample 2980m 100% very fine to fine aggs, common to occasionally medium to coarse loose sandstone. TG: 910U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, common to occasionally medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggs, common to occasionally medium to coarse loose sandstone. TG: 910U. 100% bri |
| Total Gas | 910.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,occ-com med-crs disagg grs,fri,por vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,com lse,occ-com med-crs 79 / 5 / 4 / 5 / 7 1090 U disagg grs,fri,por vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 33 |
| RES_DEEP (ohm.m) | 17.25 | 33 |
| RES_SHALLOW (ohm.m) | 17.30 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2985 m MD — Interval 2982.5 – 2987.5 m

**Sample Description (spreadsheet):** Sample 2985m 100% very fine to fine aggs, common medium to coarse loose sandstone. TG: 1080U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggs, common medium to coarse loose sandstone. TG: 1080U. 100% bri |
| Total Gas | 1080.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2970m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,occ-com med-crs disagg grs,fri,por vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,com lse,occ-com med-crs 79 / 5 / 4 / 5 / 7 1090 U disagg grs,fri,por vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 2 |
| RES_DEEP (ohm.m) | 17.27 | 33 |
| RES_SHALLOW (ohm.m) | 17.09 | 33 |
| **Δ Res (Deep − Shallow)** | **0.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2990 m MD — Interval 2987.5 – 2992.5 m

**Sample Description (spreadsheet):** Sample 2990m 100% very fine to fine aggs, occasional to common medium to coarse loose sandstone. TG: 1064U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, occasional to common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggs, occasional to common medium to coarse loose sandstone. TG: 1064U. 100% bri |
| Total Gas | 1064.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2980m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,com lse,occ-com med-crs 79 / 5 / 4 / 5 / 7 1090 U disagg grs,fri,por vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2990m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang-sbrnd, mod wk sil cmt,com pl gry brn,slty/arg mtx,occ med disagg grs,fri,por vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 17.54 | 20 |
| RES_SHALLOW (ohm.m) | 17.03 | 20 |
| **Δ Res (Deep − Shallow)** | **0.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2995 m MD — Interval 2992.5 – 2997.5 m

**Sample Description (spreadsheet):** Sample 2995m 100% very fine to fine aggs, occasional medium loose sandstone. TG: 772U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, occasional medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% very fine to fine aggs, occasional medium loose sandstone. TG: 772U. 100% bri |
| Total Gas | 772.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2980m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang- sbrnd,mod wk sil cmt,com pl gry brn, slty/arg mtx,com lse,occ-com med-crs 79 / 5 / 4 / 5 / 7 1090 U disagg grs,fri,por vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2990m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang-sbrnd, mod wk sil cmt,com pl gry brn,slty/arg mtx,occ med disagg grs,fri,por vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

### 3000 m MD — Interval 2997.5 – 3002.5 m

**Sample Description (spreadsheet):** Sample 3000m: 5% Siltstone. 95% very fine to fine aggs, occasional medium loose sandstone. TG: 690U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, occasional medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Loose Grains | No |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine aggs, occasional medium loose sandstone. TG: 690U. 100% bri |
| Total Gas | 690.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: clr,trnsl,v pl brn,v pl gry, vf-crs,vf-f aggs,pr vis por,sbang-sbrnd, mod wk sil cmt,com pl gry brn,slty/arg mtx,occ med disagg grs,fri,por vis por, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 275 |
| Depth range | 1635 – 3000 m |
| Avg % Sandstone | 88.5% |
| Avg Δ Res (Deep−Shallow) | 2.15 ohm.m |
| Max Δ Res | 17.52 ohm.m |
| Min Δ Res | -1.49 ohm.m |
| Mudlog matches | 204 / 275 |
