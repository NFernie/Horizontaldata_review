import type { ReactNode } from "react";
import { Card } from "@/components/Card";
import {
  FLAG_LABELS,
  FLAG_LOW_GR,
  FLAG_LOWFLUOR_PCT,
  FLAG_LOWRES_RES_DEEP,
  JACCARD_DEPTH_BINS,
  JACCARD_FEATURES,
  JACCARD_PRESENCE_PCT,
  KS_PROPERTIES,
  MAD_SCALE,
  OWC_BANDS_GOOD,
  OWC_BANDS_POOR,
  OWC_RES_SUPPRESS,
  PORO_SCORES,
  RES_DEEP_CUTOFF,
  RISK_LABELS,
  ROBUST_NORM_PERCENTILES,
  RQI_THRESHOLD,
  RQI_WEIGHTS,
  SPEARMAN_VARS,
  SS_CUTOFF,
  FLUOR_CUTOFF,
  WRCI_ELEVATED_THRESHOLD,
  WRCI_HIGH_THRESHOLD,
  WRCI_WEIGHTS,
  ZOI_DROP_PCT,
  ZOI_MIN_DROPS,
  ZOI_NEIGHBOUR_WINDOW,
  ZSCORE_METRICS,
  ZSCORE_THRESHOLD,
} from "@/config";

function FormulaBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-card border border-border bg-surface-2 p-4">
      <h3 className="text-sm font-semibold text-text">{title}</h3>
      <div className="mt-2 space-y-2 font-mono text-xs leading-relaxed text-text-muted">{children}</div>
    </div>
  );
}

export function Methodology() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text sm:text-2xl">Methodology</h1>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Statistical methods for the McKinlay Member water-risk review —{" "}
          <strong className="font-normal text-text">23 horizontal wells</strong>, RQI v2 (8 components),
          WRCI v2 (OWC-aware), ZOI along-wellbore flags, and pay summaries with overburden exclusion.
          Tunable cutoffs mirror <code className="text-accent">scripts/config.py</code> and{" "}
          <code className="text-accent">site/src/config.ts</code>.
        </p>
      </header>

      <Card title="Pipeline overview" description="updated-plan-2026-07-10 — Phases 1–6">
        <ol className="list-decimal space-y-2 pl-5 text-sm text-text-muted">
          <li>
            <strong className="text-text">Process</strong> — mudlog + cuttings + LAS + trajectory →
            interpretation markdown and interval records (McKinlay 10–15 via litho/gas ingest).
          </li>
          <li>
            <strong className="text-text">Pay</strong> — cuttings, resistivity, and matching pay with
            overburden zones excluded (<code className="text-accent">compute_pay_summary.py</code>).
          </li>
          <li>
            <strong className="text-text">Export</strong> — RQI v2, ZOI, OWC proximity, WRCI, risk class,
            Spearman / Jaccard / KS / clusters → <code className="text-accent">site/public/data/</code>.
          </li>
          <li>
            <strong className="text-text">Site</strong> — Well Detail, Water-Risk Explorer, and inter-well
            comparison views consume exported JSON.
          </li>
        </ol>
        <p className="mt-3 text-sm text-text-muted">
          Retired: ΔRes (<code className="text-accent">res_sep</code>) and{" "}
          <code className="text-accent">highperm</code> permeability proxy — suspended per stakeholder
          decision (see <code className="text-accent">updated-plan-2026-07-10.md</code>).
        </p>
      </Card>

      <Card title="Water-Risk Composite Index (WRCI)" description="updated-plan §3B — intra-well scoring">
        <div className="space-y-4 text-sm text-text-muted">
          <FormulaBlock title="Step A — Rock Quality Index (RQI), 0–1">
            <p>
              RQI = {RQI_WEIGHTS.pct_ss}·norm(%SS) + {RQI_WEIGHTS.low_gr}·norm(1−GR) +{" "}
              {RQI_WEIGHTS.grain_ordinal}·norm(grain) + {RQI_WEIGHTS.porosity}·porosity_score +{" "}
              {RQI_WEIGHTS.hardness}·norm(hardness) + {RQI_WEIGHTS.cement}·norm(cement) +{" "}
              {RQI_WEIGHTS.sorting}·norm(sorting) + {RQI_WEIGHTS.angularity}·norm(angularity)
            </p>
            <p>
              Optional text-derived components (hardness, cement, sorting, angularity) are omitted
              when not parsed; remaining weights are renormalised per interval.
            </p>
            <p>norm() clips to P{ROBUST_NORM_PERCENTILES[0]}–P{ROBUST_NORM_PERCENTILES[1]} within each well.</p>
            <p>
              Porosity scores:{" "}
              {Object.entries(PORO_SCORES)
                .map(([k, v]) => `${k}=${v}`)
                .join(", ")}
            </p>
          </FormulaBlock>

          <FormulaBlock title={`Step B — Red flags (RQI ≥ ${RQI_THRESHOLD} unless noted)`}>
            <ul className="list-disc space-y-1 pl-4 font-sans">
              <li>
                <strong className="text-text">{FLAG_LABELS.lowres}</strong> — avg_RES_DEEP &lt;{" "}
                {FLAG_LOWRES_RES_DEEP} ohm.m
              </li>
              <li>
                <strong className="text-text">{FLAG_LABELS.lowfluor}</strong> — fluor &lt; {FLAG_LOWFLUOR_PCT}%
              </li>
              <li>
                <strong className="text-text">{FLAG_LABELS.low_GR}</strong> — avg_GR &lt; {FLAG_LOW_GR} gAPI
                (boolean only; not a WRCI severity term)
              </li>
              <li>
                <strong className="text-text">{FLAG_LABELS.ZOI}</strong> — along-wellbore deterioration
                (±{ZOI_NEIGHBOUR_WINDOW} neighbours; ≥{ZOI_MIN_DROPS} metrics drop &gt;{ZOI_DROP_PCT * 100}%)
              </li>
              <li>
                <strong className="text-text">OWC proximity</strong> — tiers from trajectory mTVDss vs field
                OWC (good rock: &lt;{OWC_BANDS_GOOD.high_lt}m High, {OWC_BANDS_GOOD.high_lt}–
                {OWC_BANDS_GOOD.elevated_lt}m Elevated; poor rock: &lt;{OWC_BANDS_POOR.high_lt}m High,{" "}
                {OWC_BANDS_POOR.high_lt}–{OWC_BANDS_POOR.elevated_lt}m Elevated). Suppressed when
                avg_RES_DEEP &gt; {OWC_RES_SUPPRESS} Ω·m.
              </li>
            </ul>
          </FormulaBlock>

          <FormulaBlock title="Step C — WRCI (0–100)">
            <p>
              WRCI = 100 × ({WRCI_WEIGHTS.rqi}·RQI + {WRCI_WEIGHTS.lowres_severity}·lowres_severity +{" "}
              {WRCI_WEIGHTS.lowfluor_severity}·lowfluor_severity + {WRCI_WEIGHTS.owc_severity}·owc_severity)
            </p>
            <p>lowres_severity = clamp(({RES_DEEP_CUTOFF} − RES_DEEP) / {RES_DEEP_CUTOFF}, 0, 1)</p>
            <p>lowfluor_severity = clamp(({FLUOR_CUTOFF} − fluor) / {FLUOR_CUTOFF}, 0, 1)</p>
            <ul className="list-disc space-y-1 pl-4 font-sans">
              <li>
                <strong className="text-risk-high">{RISK_LABELS.High}</strong> — WRCI ≥ {WRCI_HIGH_THRESHOLD}{" "}
                and (OWC High or ≥2 of lowres/lowfluor/low_GR) or (ZOI and WRCI ≥ {WRCI_HIGH_THRESHOLD})
              </li>
              <li>
                <strong className="text-risk-elev">{RISK_LABELS.Elevated}</strong> — WRCI{" "}
                {WRCI_ELEVATED_THRESHOLD}–{WRCI_HIGH_THRESHOLD}, or qualifying flags / OWC Elevated / ZOI
              </li>
              <li>
                <strong className="text-risk-low">{RISK_LABELS.Low}</strong> — otherwise
              </li>
            </ul>
          </FormulaBlock>
        </div>
      </Card>

      <Card title="Other statistical methods">
        <div className="grid gap-4 md:grid-cols-2">
          <FormulaBlock title="§1.2 Robust Z-scores">
            <p>z = {MAD_SCALE} × (x − median) / MAD</p>
            <p>Metrics: {ZSCORE_METRICS.join(", ")}</p>
            <p>Flag when |z| &gt; {ZSCORE_THRESHOLD}</p>
          </FormulaBlock>
          <FormulaBlock title="§1.3 Spearman correlations">
            <p>Variables: {SPEARMAN_VARS.join(", ")}</p>
            <p>Rank-based ρ and p-value per well (n = interval count).</p>
          </FormulaBlock>
          <FormulaBlock title="§1.4 Jaccard similarity">
            <p>Features: {JACCARD_FEATURES.join(", ")}</p>
            <p>Present when ≥ {JACCARD_PRESENCE_PCT}% of intervals fire the feature.</p>
            <p>Depth-binned variant uses {JACCARD_DEPTH_BINS} normalized lateral bins.</p>
          </FormulaBlock>
          <FormulaBlock title="§1.5 Clustering + KS">
            <p>Cosine/Euclidean on standardized well aggregates; Ward hierarchical clustering.</p>
            <p>KS properties: {KS_PROPERTIES.join(", ")}</p>
          </FormulaBlock>
        </div>
      </Card>

      <Card title="Pay cutoffs & overburden">
        <ul className="list-disc space-y-1 pl-5 text-sm text-text-muted">
          <li>% Sandstone &gt; {SS_CUTOFF}% (cuttings pay)</li>
          <li>% Fluorescence &gt; {FLUOR_CUTOFF}% (cuttings pay)</li>
          <li>RES_DEEP &gt; {RES_DEEP_CUTOFF} ohm.m (resistivity and matching pay)</li>
          <li>
            Overburden intervals (Murta/McKinlay entry → lone McKinlay re-entry) are excluded from pay
            totals and all interval statistics — verified by{" "}
            <code className="text-accent">test_pay_overburden.py</code>.
          </li>
        </ul>
      </Card>

      <Card title="Data quality caveats" description="OpusPlanR1 §6">
        <ul className="space-y-3 text-sm text-text-muted">
          <li>
            <strong className="text-text">LAS curve order</strong> — mnemonic-based parsing required;
            fixed column order corrupts GR/RES for several wells including Jena 31DW1.
          </li>
          <li>
            <strong className="text-text">Text-derived RQI components</strong> — hardness, cement, sorting,
            angularity parsed from free text; coverage varies by well.
          </li>
          <li>
            <strong className="text-text">Legacy Excel wells</strong> — McKinlay 20–24 and Frostillicus 2
            use Sheet1 columns; weaker grain/fluor detail may reduce RQI confidence.
          </li>
          <li>
            <strong className="text-text">Small n per well</strong> — KS and Spearman p-values should be
            read with caution; n is reported per well.
          </li>
          <li>
            <strong className="text-text">Overburden exclusion</strong> — Murta/McKinlay entry → lone
            McKinlay re-entry intervals excluded from all statistics.
          </li>
          <li>
            <strong className="text-text">McKinlay 10–15</strong> — litho + drill-gas ASCII ingest (5 m bins);
            fluorescence from bar track (Mck 10–11) or text FLUOR blocks (Mck 12–15).
          </li>
          <li>
            <strong className="text-text">Trajectory / OWC</strong> — mTVDss from Petrel{" "}
            <code className="text-accent">*_trajectory</code> files; OWC distance uses field contacts in{" "}
            <code className="text-accent">Oil_Water_Contact.csv</code>.
          </li>
          <li>
            <strong className="text-text">HOBBES 4</strong> — no data files; excluded from analysis.
          </li>
        </ul>
      </Card>
    </div>
  );
}
