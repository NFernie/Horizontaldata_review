#!/usr/bin/env python3
"""Validate McKinlay 11 fluorescence bar extraction against screenshot reference bands."""

import os
import sys

SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from mudlog_bar_fluor import (  # noqa: E402
    MCKINLAY11_VALIDATION_BANDS,
    build_bar_fluorescence_series,
    validate_mckinlay11_bands,
)

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(SCRIPTS_DIR, ".."))
)

PDF = os.path.join(WORKSPACE, "McKinlay 11_Mudlog Spud-6800'_Final.pdf")


def main():
    print("McKinlay 11 — fluorescence bar validation")
    print(f"PDF: {PDF}\n")

    series = build_bar_fluorescence_series(PDF, cap_below_ft=5313, cap_below_pct=10)
    print(f"Bar samples extracted: {len(series)} ft")
    if series:
        print(f"Depth range: {series[0].depth_ft:.0f} – {series[-1].depth_ft:.0f} ft")
        print(f"Raw fill range: {min(s.pct_raw for s in series):.0f} – {max(s.pct_raw for s in series):.0f}%")
        print(f"Calibrated range: {min(s.pct for s in series):.0f} – {max(s.pct for s in series):.0f}%\n")

    print("Screenshot reference bands:")
    results = validate_mckinlay11_bands(series)
    passed = 0
    for r in results:
        status = "PASS" if r["pass"] else "FAIL"
        if r["pass"]:
            passed += 1
        print(f"  [{status}] {r['band_ft']} ft — expected {r['expected']}, got {r['actual']}")
        print(f"         {r['note']}")

    print(f"\nValidation: {passed}/{len(results)} bands passed")

    # Detail for 5262–5356 ft (screenshot interval)
    by_ft = {int(s.depth_ft): s for s in series}
    print("\nPer 5 m bin centres (1603–1635 m) after bar extraction:")
    for centre_m in range(1603, 1636, 5):
        centre_ft = centre_m / 0.3048
        ft = int(round(centre_ft))
        s = by_ft.get(ft)
        if s:
            print(f"  {centre_m} m ({ft} ft): calibrated={s.pct:.0f}% raw={s.pct_raw:.0f}%")

    raise SystemExit(0 if passed >= 3 else 1)


if __name__ == "__main__":
    main()
