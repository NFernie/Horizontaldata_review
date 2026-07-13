#!/usr/bin/env python3
"""Unit tests for Zone of Interest (ZOI) detection."""

import os
import sys
import unittest

SCRIPTS = os.path.join(os.path.dirname(__file__))
sys.path.insert(0, SCRIPTS)

from export_web_data import compute_zoi  # noqa: E402


def _interval(depth, rqi, fluor, gas, res):
    return {
        "depth": depth,
        "top": depth - 2.5,
        "bot": depth + 2.5,
        "pct_ss": 80,
        "grain_ordinal": 3,
        "poro_class": "gd",
        "fluor": fluor,
        "gas": gas,
        "avg_GR": 50.0,
        "avg_RES_DEEP": res,
        "avg_RES_SHALLOW": res * 0.8,
        "hardness_score": 0.3,
        "cement_score": 0.5,
        "sorting_score": 0.6,
        "angularity_score": 0.5,
        "RQI": rqi,
    }


class TestZOI(unittest.TestCase):
    def test_stakeholder_example_pattern(self):
        """
        Reference shallow neighbour: RQI 0.60, fluor 100%, gas 40, res 30.
        Flagged interval: RQI 0.63, fluor 80 (−20%), gas 30 (−25%), res 25 (−17%).
        """
        rows = [
            _interval(2490, 0.60, 100, 40, 30),
            _interval(2495, 0.60, 100, 40, 30),
            _interval(2500, 0.60, 100, 40, 30),
            _interval(2505, 0.63, 80, 30, 25),
            _interval(2510, 0.55, 90, 35, 28),
            _interval(2515, 0.58, 95, 38, 29),
            _interval(2520, 0.57, 92, 36, 27),
        ]
        rows = compute_zoi(rows)
        flagged = rows[3]
        self.assertTrue(flagged["flag_zoi"], "2505 m interval should trigger ZOI")

    def test_no_zoi_below_pay_cutoffs(self):
        """Intervals below fluor/res pay cutoffs should not get ZOI."""
        rows = [
            _interval(1000, 0.65, 100, 40, 30),
            _interval(1005, 0.65, 100, 40, 30),
            _interval(1010, 0.70, 50, 10, 10),
        ]
        rows = compute_zoi(rows)
        self.assertFalse(rows[2]["flag_zoi"])


if __name__ == "__main__":
    unittest.main()
