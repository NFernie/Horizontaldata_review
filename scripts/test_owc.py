#!/usr/bin/env python3
"""Unit tests for OWC proximity tiers and resistivity suppression."""

from __future__ import annotations

import unittest

import config
from owc import apply_owc_res_suppress, owc_proximity_tier


class TestOwcProximity(unittest.TestCase):
    def test_good_rock_bands(self):
        self.assertEqual(owc_proximity_tier(3.9, 0.65, False), "High")
        self.assertEqual(owc_proximity_tier(5.0, 0.65, False), "Elevated")
        self.assertEqual(owc_proximity_tier(6.5, 0.65, False), "Low")

    def test_good_rock_at_rqi_threshold(self):
        self.assertEqual(owc_proximity_tier(3.0, 0.5, False), "High")

    def test_poor_rock_no_owc_flags(self):
        self.assertEqual(owc_proximity_tier(1.9, 0.4, False), "Low")
        self.assertEqual(owc_proximity_tier(3.0, 0.4, False), "Low")
        self.assertEqual(owc_proximity_tier(4.5, 0.4, False), "Low")

    def test_res_suppress_clears_high_tier(self):
        self.assertEqual(apply_owc_res_suppress("High", 31.0), "Low")
        self.assertEqual(apply_owc_res_suppress("Elevated", 35.0), "Low")

    def test_res_suppress_keeps_tier_when_below_threshold(self):
        self.assertEqual(apply_owc_res_suppress("High", 22.9), "High")
        self.assertEqual(apply_owc_res_suppress("High", config.OWC_RES_SUPPRESS), "High")

    def test_res_suppress_missing_res_unchanged(self):
        self.assertEqual(apply_owc_res_suppress("High", None), "High")


if __name__ == "__main__":
    unittest.main()
