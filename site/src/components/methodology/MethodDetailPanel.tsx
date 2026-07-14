import { type ReactNode, type RefObject } from "react";
import { Link } from "react-router-dom";
import { FormulaBlock } from "@/components/FormulaBlock";
import {
  CLUSTER_FEATURES,
  JACCARD_DEPTH_BINS,
  JACCARD_FEATURES,
  JACCARD_PRESENCE_PCT,
  KS_FOCUS_ALIASES,
  KS_PROPERTIES,
  MAD_SCALE,
  SPEARMAN_VARS,
  ZSCORE_METRICS,
  ZSCORE_THRESHOLD,
} from "@/config";
import { readStoredWell } from "@/hooks/useWellSelection";
import type { MethodId } from "@/components/methodology/types";

interface MethodDetailPanelProps {
  methodId: MethodId;
  panelRef?: RefObject<HTMLDivElement>;
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-xs font-semibold uppercase tracking-wide text-text-muted">{children}</h4>
  );
}

function IntraWellRouteLink() {
  const alias = readStoredWell("JENA31");
  return (
    <Link
      to={`/intra/${alias}`}
      className="inline-flex items-center gap-2 rounded-card border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/20"
    >
      Open Intra-well Statistics →
    </Link>
  );
}

function CompareRouteLink() {
  return (
    <Link
      to="/compare"
      className="inline-flex items-center gap-2 rounded-card border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/20"
    >
      Open Inter-well Comparison →
    </Link>
  );
}

function Method2Panel() {
  return (
    <div className="space-y-4 text-sm text-text-muted">
      <div>
        <SectionHeading>Objective</SectionHeading>
        <p className="mt-1">
          Find intervals statistically unusual within their own well — subtle water-zone signatures
          beyond fixed WRCI thresholds.
        </p>
        <p className="mt-1 text-xs">Type: Intra-well</p>
      </div>

      <div>
        <SectionHeading>Inputs / properties</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>
            Metrics (ZSCORE_METRICS): {ZSCORE_METRICS.join(", ")}
          </li>
          <li>Per-well median + MAD across retained intervals</li>
        </ul>
      </div>

      <FormulaBlock title="Equations">
        <p>z = {MAD_SCALE} × (x − median(x)) / MAD(x)</p>
        <p>Flag when |z| &gt; {ZSCORE_THRESHOLD}</p>
      </FormulaBlock>

      <div>
        <SectionHeading>Diagnostic pattern</SectionHeading>
        <p className="mt-1">
          Low RES_DEEP + high GR + high %SS → classic water-zone signature (good rock without
          hydrocarbon charge).
        </p>
      </div>

      <div>
        <SectionHeading>Outputs &amp; JSON</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5 font-mono text-xs">
          <li>site/public/data/intervals/{"{ALIAS}"}.json</li>
          <li>intervals[].z_scores{"{}"}</li>
          <li>intervals[].anomalies[]</li>
        </ul>
      </div>

      <div>
        <SectionHeading>Site route</SectionHeading>
        <div className="mt-2">
          <IntraWellRouteLink />
        </div>
      </div>

      <div>
        <SectionHeading>Water-risk mapping</SectionHeading>
        <p className="mt-1">
          Surfaces intervals where petrophysics decouple within a well before WRCI flags fire —
          useful for explaining &ldquo;hidden&rdquo; charge risk on Jena.
        </p>
      </div>
    </div>
  );
}

function Method3Panel() {
  return (
    <div className="space-y-4 text-sm text-text-muted">
      <div>
        <SectionHeading>Objective</SectionHeading>
        <p className="mt-1">
          Rank-based correlations between petrophysical variables within each well (robust to
          non-linearity and text ordinals).
        </p>
        <p className="mt-1 text-xs">Type: Intra-well</p>
      </div>

      <div>
        <SectionHeading>Inputs / properties</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>Variables (SPEARMAN_VARS): {SPEARMAN_VARS.join(", ")}</li>
          <li>n = retained interval count per well</li>
        </ul>
      </div>

      <FormulaBlock title="Equations">
        <p>Spearman ρ for each pair; two-tailed p-value</p>
      </FormulaBlock>

      <div>
        <SectionHeading>Interpretation table</SectionHeading>
        <div className="mt-2 overflow-x-auto rounded-card border border-border">
          <table className="min-w-full text-xs">
            <thead className="bg-surface-2">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-text">Pattern</th>
                <th className="px-3 py-2 text-left font-semibold text-text">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-3 py-2 font-mono">RQI ↔ RES_DEEP (+)</td>
                <td className="px-3 py-2">Rock quality tracks resistivity</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-mono">RQI ↔ GR (−)</td>
                <td className="px-3 py-2">Cleaner sand vs higher gamma ray</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-mono">RQI ↔ fluor (−/weak)</td>
                <td className="px-3 py-2">Good rock without fluorescence</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 rounded-card border border-risk-elev/30 bg-risk-elev/10 px-3 py-2 text-xs text-risk-elev">
          Caveat: Small n → interpret p-values cautiously.
        </p>
      </div>

      <div>
        <SectionHeading>Outputs &amp; JSON</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5 font-mono text-xs">
          <li>site/public/data/stats/correlations.json → per-well 6×6 ρ + p</li>
        </ul>
      </div>

      <div>
        <SectionHeading>Site route</SectionHeading>
        <div className="mt-2">
          <IntraWellRouteLink />
        </div>
      </div>

      <div>
        <SectionHeading>Water-risk mapping</SectionHeading>
        <p className="mt-1">
          Decoupling of permeability from hydrocarbon indicators suggests water-prone zones —
          explains <em>why</em> Jena intervals are risky.
        </p>
      </div>
    </div>
  );
}

function Method4Panel() {
  return (
    <div className="space-y-4 text-sm text-text-muted">
      <div>
        <SectionHeading>Objective</SectionHeading>
        <p className="mt-1">
          Inter-well similarity of binary flag / geological feature sets, independent of absolute
          depth.
        </p>
        <p className="mt-1 text-xs">Type: Inter-well</p>
      </div>

      <div>
        <SectionHeading>Inputs / properties</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>Features (JACCARD_FEATURES): {JACCARD_FEATURES.join(", ")}</li>
          <li>
            Presence rule: ≥ {JACCARD_PRESENCE_PCT}% of well intervals
          </li>
        </ul>
      </div>

      <FormulaBlock title="Equations">
        <p>J(A, B) = |A ∩ B| / |A ∪ B| &nbsp;(0 … 1)</p>
        <p>Depth-binned variant: {JACCARD_DEPTH_BINS} normalized lateral bins</p>
      </FormulaBlock>

      <div>
        <SectionHeading>Outputs &amp; JSON</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5 font-mono text-xs">
          <li>site/public/data/stats/jaccard.json</li>
          <li>matrix, depth_binned_matrix, aliases</li>
          <li>jena_analog_ranking{"{JENA31, JENA31DW1}"}[]</li>
        </ul>
      </div>

      <div>
        <SectionHeading>Site route</SectionHeading>
        <div className="mt-2">
          <CompareRouteLink />
        </div>
      </div>

      <div>
        <SectionHeading>Water-risk mapping</SectionHeading>
        <p className="mt-1">
          Ranks analog wells whose known water behaviour may inform Jena risk assessment (e.g.
          STIMPEE 7, BIALA 19 at J=1.0).
        </p>
      </div>
    </div>
  );
}

function Method5Panel() {
  return (
    <div className="space-y-4 text-sm text-text-muted">
      <div>
        <SectionHeading>Objective</SectionHeading>
        <p className="mt-1">
          Group wells by aggregate petrophysical signature; test whether Jena distributions are
          statistically distinguishable from analogs (KS).
        </p>
        <p className="mt-1 text-xs">Type: Inter-well</p>
      </div>

      <div>
        <SectionHeading>Inputs / properties — Part A (clustering)</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>Feature vector (CLUSTER_FEATURES): {CLUSTER_FEATURES.join(", ")}</li>
          <li>Standardise → cosine + Euclidean distances → Ward linkage</li>
        </ul>
      </div>

      <div>
        <SectionHeading>Inputs / properties — Part B (KS)</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>Properties (KS_PROPERTIES): {KS_PROPERTIES.join(", ")}</li>
          <li>Focus wells: {KS_FOCUS_ALIASES.join(", ")} vs each analog</li>
        </ul>
      </div>

      <FormulaBlock title="Equations">
        <p>KS two-sample test → D-statistic + p-value per (focus, analog, prop)</p>
        <p>Low p → distributions significantly different (less comparable)</p>
      </FormulaBlock>

      <div>
        <SectionHeading>Outputs &amp; JSON</SectionHeading>
        <ul className="mt-1 list-disc space-y-1 pl-5 font-mono text-xs">
          <li>site/public/data/stats/clusters.json — dendrogram, cluster_id</li>
          <li>site/public/data/stats/ks.json — significance grid</li>
        </ul>
      </div>

      <div>
        <SectionHeading>Site route</SectionHeading>
        <div className="mt-2">
          <CompareRouteLink />
        </div>
      </div>

      <div>
        <SectionHeading>Water-risk mapping</SectionHeading>
        <p className="mt-1">
          Confidence layer — quantifies which analogs are truly comparable for transfer of
          water-risk insight to Jena wells.
        </p>
      </div>
    </div>
  );
}

const PANELS: Record<MethodId, () => ReactNode> = {
  "method-2": Method2Panel,
  "method-3": Method3Panel,
  "method-4": Method4Panel,
  "method-5": Method5Panel,
};

const PANEL_TITLES: Record<MethodId, string> = {
  "method-2": "Method 2 — Robust Z-Score Anomaly Detection",
  "method-3": "Method 3 — Spearman Rank-Correlation Matrix",
  "method-4": "Method 4 — Jaccard Similarity on Binary Flag Sets",
  "method-5": "Method 5 — Hierarchical Clustering + KS Significance",
};

export function MethodDetailPanel({ methodId, panelRef }: MethodDetailPanelProps) {
  const Panel = PANELS[methodId];

  return (
    <div
      ref={panelRef}
      role="tabpanel"
      id={`panel-${methodId}`}
      aria-labelledby={`tab-${methodId}`}
      className="rounded-card border border-border bg-surface p-4 sm:p-5"
    >
      <h3 tabIndex={-1} className="text-base font-semibold text-text outline-none">
        {PANEL_TITLES[methodId]}
      </h3>
      <div className="mt-4">
        <Panel />
      </div>
    </div>
  );
}
