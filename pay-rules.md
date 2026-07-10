# McKinlay Member Pay Rules

**Established:** 2026-07-10

## Scope

- **Formation:** McKinlay Member only (horizontal target interval)
- **Lateral reference:** DC30 top to TD (deepest sample or LAS stop)
- **Exclusions:** Each Murta/McKinlay overburden entry pair excludes from entry depth to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Entry pairs falling inside an existing exclusion interval share that zone. Initial DC30/McKinlay reservoir entry is not excluded.

## Pay Categories

### 1. Cuttings-Only Pay

**Source:** Sample description spreadsheets (Input Sheet or legacy Sheet1)

**Criteria (both required):**
| Parameter | Cutoff |
|-----------|--------|
| % Sandstone (%SS) | > 50% |
| % Fluorescence (%Fluor) | > 75% |

**Method:**
- Use McKinlay Member sample depth intervals (midpoints between consecutive samples)
- Flag intervals meeting both cuttings criteria
- Merge overlapping flagged intervals
- Sum merged interval lengths = **Pay MD (m)**

### 2. Resistivity-Only Pay

**Source:** LAS wireline files (GR, RES_DEEP, RES_SHALLOW) — **not** batch interpretation summaries

**Criteria:**
| Parameter | Cutoff |
|-----------|--------|
| RES_DEEP | > 20 ohm.m |

**Method:**
- Scan LAS at native sampling (~0.15 m) within McKinlay Member window
- Exclude NULL values (-999.25)
- Exclude overburden/re-entry zones
- Identify contiguous runs where RES_DEEP > cutoff
- Merge and sum = **Pay MD (m)**

### 3. Matching Pay (Cuttings + Resistivity)

**Source:** Sample intervals with LAS average resistivity

**Criteria (all three required):**
| Parameter | Cutoff |
|-----------|--------|
| % Sandstone | > 50% |
| % Fluorescence | > 75% |
| Average RES_DEEP (interval) | > 20 ohm.m |

**Method:**
- For each McKinlay sample interval, compute average RES_DEEP from LAS
- Flag intervals meeting all three criteria
- Merge overlapping intervals
- Sum = **Pay MD (m)**

## Reporting Metrics

| Metric | Definition |
|--------|------------|
| **Pay MD (m)** | Total measured depth of merged pay intervals |
| **Lateral length (m)** | TD − DC30 top |
| **Pay %** | Pay MD ÷ Lateral length × 100 |

## Output Files

| File | Description |
|------|-------------|
| `pay-rules.md` | This document |
| `output/<Well Name>/pay-summary.md` | Per-well pay breakdown |
| `output/ALL_WELLS_PAY_SUMMARY.md` | Comparison table all wells |

## Recompute

```bash
python3 scripts/compute_pay_summary.py
```
