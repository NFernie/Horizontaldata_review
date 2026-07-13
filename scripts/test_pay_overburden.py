#!/usr/bin/env python3
"""Assert pay intervals do not overlap overburden exclusion zones (all wells)."""

import os
import sys
import unittest

import pandas as pd

SCRIPTS = os.path.dirname(os.path.abspath(__file__))
WORKSPACE = os.path.abspath(os.path.join(SCRIPTS, ".."))
sys.path.insert(0, SCRIPTS)

from compute_pay_summary import analyze_well, verify_pay_excludes_overburden  # noqa: E402
from process_mckinlay_wells import WELLS  # noqa: E402


class TestPayOverburden(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    cls.dc30_df = pd.read_excel(os.path.join(WORKSPACE, "DC30.xlsx"))
    cls.mck_murta_df = pd.read_excel(os.path.join(WORKSPACE, "Mck_Murta.xlsx"))

  def test_all_wells_pay_excludes_overburden(self):
    errors: list[str] = []
    for cfg in WELLS:
      result = analyze_well(cfg, self.dc30_df, self.mck_murta_df)
      errors.extend(verify_pay_excludes_overburden(result))
    self.assertEqual(errors, [], "\n".join(errors))


if __name__ == "__main__":
  unittest.main()
