# All Wells — McKinlay Pay Comparison

**Generated:** 2026-07-13 02:13 UTC

## Summary Table

| Well | DC30 (m) | TD (m) | Lateral (m) | Cuttings Pay (m) | Cuttings % | Res Pay (m) | Res % | Matching Pay (m) | Matching % |
|------|----------|--------|-------------|------------------|------------|-------------|-------|------------------|------------|
| BIALA 19 | 1730.4 | 3730.0 | 1999.6 | 1692.0 | 84.6% | 1652.3 | 82.6% | 1576.0 | 78.8% |
| BIALA 20 | 1583.4 | 3315.0 | 1731.6 | 1202.5 | 69.4% | 1281.2 | 74.0% | 1202.5 | 69.4% |
| BIALA 21 | 1920.6 | 3278.1 | 1357.6 | 910.5 | 67.1% | 887.2 | 65.4% | 750.0 | 55.2% |
| FROSTILLICUS 2 | 1614.2 | 3724.0 | 2109.8 | 1677.0 | 79.5% | 1862.7 | 88.3% | 1677.0 | 79.5% |
| GRANCHIO 4 | 1678.3 | 2825.0 | 1146.7 | 990.0 | 86.3% | 1033.7 | 90.1% | 955.0 | 83.3% |
| HOBBES 5 | 1701.2 | 2590.0 | 888.8 | 407.0 | 45.8% | 363.3 | 40.9% | 256.0 | 28.8% |
| HOBBES 6 | 1685.5 | 2500.0 | 814.5 | 466.0 | 57.2% | 580.3 | 71.2% | 466.0 | 57.2% |
| JENA 31 | 2249.7 | 3394.0 | 1144.3 | 940.0 | 82.1% | 972.6 | 85.0% | 920.0 | 80.4% |
| JENA 31DW1 | 2060.8 | 3658.0 | 1597.2 | 1180.0 | 73.9% | 1204.3 | 75.4% | 1175.0 | 73.6% |
| MCKINLAY 10 | 1579.7 | 2111.0 | 531.4 | 260.0 | 48.9% | 487.2 | 91.7% | 260.0 | 48.9% |
| MCKINLAY 11 | 1600.2 | 2068.2 | 468.0 | 310.0 | 66.2% | 350.9 | 75.0% | 310.0 | 66.2% |
| MCKINLAY 12 | 1680.4 | 2903.5 | 1223.2 | 795.0 | 65.0% | 820.1 | 67.1% | 745.0 | 60.9% |
| MCKINLAY 13 | 1831.5 | 3228.7 | 1397.2 | 1035.0 | 74.1% | 1058.4 | 75.8% | 935.0 | 66.9% |
| MCKINLAY 14 | 1832.8 | 2643.5 | 810.8 | 440.0 | 54.3% | 546.2 | 67.4% | 425.0 | 52.4% |
| MCKINLAY 15 | 1717.8 | 2589.1 | 871.3 | 170.0 | 19.5% | 162.9 | 18.7% | 140.0 | 16.1% |
| MCKINLAY 20 | 1633.2 | 3000.0 | 1366.8 | 1168.0 | 85.5% | 828.5 | 60.6% | 746.0 | 54.6% |
| MCKINLAY 21 | 1769.7 | 2417.0 | 647.3 | 470.0 | 72.6% | 497.0 | 76.8% | 400.0 | 61.8% |
| MCKINLAY 22 | 1671.6 | 3206.3 | 1534.7 | 1302.0 | 84.8% | 1045.0 | 68.1% | 922.0 | 60.1% |
| MCKINLAY 23 | 1678.6 | 2590.0 | 911.4 | 870.0 | 95.5% | 866.5 | 95.1% | 850.0 | 93.3% |
| MCKINLAY 24 | 1633.5 | 2598.0 | 964.5 | 749.5 | 77.7% | 581.7 | 60.3% | 544.5 | 56.5% |
| STIMPEE 6 | 1631.0 | 3186.1 | 1555.0 | 1158.5 | 74.5% | 1241.3 | 79.8% | 1153.0 | 74.1% |
| STIMPEE 7 | 1704.5 | 2840.1 | 1135.6 | 707.5 | 62.3% | 795.4 | 70.0% | 707.5 | 62.3% |
| TERINGIE 6 | 1580.0 | 3444.4 | 1864.4 | 955.0 | 51.2% | 1301.6 | 69.8% | 810.0 | 43.4% |

## Portfolio Totals (arithmetic sum — not normalised by well count)

| Metric | Total MD (m) | Avg per well (m) |
|--------|-------------|------------------|
| Lateral length | 28071.7 | 1220.5 |
| Cuttings pay | 19855.5 | 863.3 |
| Resistivity pay | 20420.3 | 887.8 |
| Matching pay | 17925.5 | 779.4 |

## Key Issues & Limitations

1. **Lateral length** = TD (or deepest sample/LAS) minus DC30 top — not horizontal displacement (TVD/VS).
2. **Cuttings pay** uses sample interval midpoints; irregular spacing means overlapping intervals are merged.
3. **Resistivity pay** scans LAS at ~0.15 m steps; NULL values (-999.25) excluded; gaps may break or shorten pay zones.
4. **Matching pay** uses *average* RES_DEEP per sample interval — not point-by-point LAS; can differ from res-only totals.
5. **Cutoffs:** %Fluor > 75%, %SS > 50%, RES_DEEP > 20 ohm.m.
6. **McKinlay Member only** — overburden intervals (Murta/McKinlay entry → lone McKinlay re-entry) excluded from pay.
7. **HOBBES 4** not included — no data files in repository.
8. **Legacy McKinlay spreadsheets** (20–24) — fluorescence/sandstone from Sheet1 cols G/H; parsing quality varies.

## Interpretation Notes

- **High cuttings % + low res %** suggests fluorescent sand at cuttings scale but low deep resistivity on log (tight, fresh, or invasion effects).
- **High res % + low cuttings %** suggests log-quality reservoir with cuttings not meeting fluorescence/sandstone cutoffs.
- **Matching pay** is the most conservative — requires both datasets to agree at sample resolution.
