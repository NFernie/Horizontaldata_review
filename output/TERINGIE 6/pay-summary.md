# TERINGIE 6 — McKinlay Pay Summary

**Generated:** 2026-07-07 05:39 UTC  
**Formation tops name:** TERINGIE 6  
**McKinlay window:** 1574.3 – 3444.4 m MD  
**DC30 top:** 1580.02 m MD  
**Total lateral length (TD − DC30):** 1864.4 m

---

### Overburden Exclusion Intervals

| Entry (m MD) | Murta (m MD) | Re-entry (m MD) | Length (m) |
|-------------|-------------|-----------------|------------|
| 2117.2 | 2119.2 | 2179.9 | 62.7 |
| 2288.0 | 2290.4 | 2318.3 | 30.3 |
| 2350.4 | 2350.6 | 2400.4 (assumed) | 50.0 |
| 2775.1 | 2777.2 | 2825.1 (assumed) | 50.0 |

## Pay Rules Applied

See [`pay-rules.md`](../../pay-rules.md) for full definitions.

| Category | Criteria | Data source |
|----------|----------|-------------|
| Cuttings only | %SS > 50% AND %Fluor > 75% | Sample spreadsheet intervals |
| Resistivity only | RES_DEEP > 20 ohm.m | LAS file (continuous) |
| Matching both | All three criteria | Sample interval + LAS average |

## Pay Summary

| Category | Pay MD (m) | % of Lateral | Intervals |
|----------|-----------|--------------|-----------|
| Cuttings only | 945.0 | 50.7% | 18 |
| Resistivity only | 641.6 | 34.4% | 200 |
| Matching both | 420.0 | 22.5% | 13 |

**Sample intervals in McKinlay Member:** 161

## Cuttings-Only Pay Intervals

| Top (m MD) | Bottom (m MD) | Length (m) |
|------------|---------------|------------|
| 1645.0 | 1655.0 | 10.0 |
| 1695.0 | 1925.0 | 230.0 |
| 1935.0 | 1975.0 | 40.0 |
| 2225.0 | 2285.0 | 60.0 |
| 2325.0 | 2345.0 | 20.0 |
| 2415.0 | 2555.0 | 140.0 |
| 2565.0 | 2595.0 | 30.0 |
| 2625.0 | 2645.0 | 20.0 |
| 2675.0 | 2685.0 | 10.0 |
| 2765.0 | 2775.0 | 10.0 |
| 2835.0 | 2875.0 | 40.0 |
| 2895.0 | 2975.0 | 80.0 |
| 2985.0 | 3045.0 | 60.0 |
| 3065.0 | 3105.0 | 40.0 |
| 3125.0 | 3145.0 | 20.0 |

_(3 additional intervals omitted)_

## Resistivity-Only Pay Intervals

| Top (m MD) | Bottom (m MD) | Length (m) |
|------------|---------------|------------|
| 1670.7 | 1672.1 | 1.4 |
| 1675.0 | 1678.9 | 4.0 |
| 1679.4 | 1680.0 | 0.6 |
| 1680.6 | 1726.8 | 46.2 |
| 1789.1 | 1821.0 | 31.9 |
| 1821.3 | 1821.9 | 0.6 |
| 1822.0 | 1823.4 | 1.4 |
| 1823.7 | 1824.0 | 0.3 |
| 1825.2 | 1825.5 | 0.3 |
| 1825.8 | 1826.1 | 0.3 |
| 1826.7 | 1827.2 | 0.5 |
| 1827.4 | 1828.0 | 0.6 |
| 1828.1 | 1828.3 | 0.2 |
| 1828.6 | 1828.7 | 0.2 |
| 1828.9 | 1832.4 | 3.5 |

_(185 additional intervals omitted)_

## Matching Pay Intervals

| Top (m MD) | Bottom (m MD) | Length (m) |
|------------|---------------|------------|
| 1695.0 | 1725.0 | 30.0 |
| 1785.0 | 1885.0 | 100.0 |
| 1935.0 | 1955.0 | 20.0 |
| 2225.0 | 2235.0 | 10.0 |
| 2255.0 | 2285.0 | 30.0 |
| 2325.0 | 2345.0 | 20.0 |
| 2435.0 | 2535.0 | 100.0 |
| 2545.0 | 2555.0 | 10.0 |
| 2675.0 | 2685.0 | 10.0 |
| 2765.0 | 2775.0 | 10.0 |
| 2895.0 | 2935.0 | 40.0 |
| 3305.0 | 3325.0 | 20.0 |
| 3385.0 | 3405.0 | 20.0 |

## Data Quality Notes

- **1** sample intervals missing %SS or %Fluor — excluded from cuttings/matching pay.
- **2** intervals lack valid LAS RES_DEEP — excluded from matching pay only.
