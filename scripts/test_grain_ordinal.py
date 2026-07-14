#!/usr/bin/env python3
"""Unit tests for grain-size ordinal parsing (Jena Excel abbreviations)."""

import os
import sys
import unittest

SCRIPTS = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SCRIPTS)

from process_mckinlay_wells import grain_ordinal  # noqa: E402


class TestGrainOrdinal(unittest.TestCase):
    def test_jena31_single_letter_max_grain(self):
        """JENA 31 Max Grain column uses F, M, C — must not return 0."""
        self.assertEqual(grain_ordinal("f", "F"), 2)
        self.assertEqual(grain_ordinal("f-crs", "C"), 4)
        self.assertEqual(grain_ordinal("f-med", "M"), 3)
        self.assertEqual(grain_ordinal("vf-med", "M"), 3)
        self.assertEqual(grain_ordinal("f-med, rr crs", "C"), 4)
        self.assertEqual(grain_ordinal("med-v crs", "VC"), 5)
        self.assertEqual(grain_ordinal("vf-f", "VF"), 2)

    def test_jena31dw1_spelled_max_grain(self):
        self.assertEqual(grain_ordinal("vf", "crs"), 4)
        self.assertEqual(grain_ordinal("vf", "v crs"), 5)
        self.assertEqual(grain_ordinal("med", "crs"), 4)
        self.assertEqual(grain_ordinal("f", "med"), 3)

    def test_grain_text_without_max(self):
        self.assertEqual(grain_ordinal("f-crs", None), 4)
        self.assertEqual(grain_ordinal("", ""), 0)


if __name__ == "__main__":
    unittest.main()
