import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ComparisonPanel } from "@/components/executive/ComparisonPanel";
import { DualLateralPanel } from "@/components/executive/DualLateralPanel";
import { PortfolioElevatedStrip } from "@/components/executive/PortfolioElevatedStrip";
import { Legend } from "@/components/Legend";
import { JENA31_DUAL_ALIAS } from "@/config";
import { topClusterAnalog } from "@/lib/clusterAnalogs";
import {
  writeStoredWaterRiskLeft,
  writeStoredWaterRiskRight,
  writeStoredWell,
} from "@/hooks/useWellSelection";
import { pageStateKey, usePersistedState } from "@/hooks/usePageState";
import { fetchJson } from "@/lib/utils";
import type { ClustersPayload } from "@/types/stats";
import type { WellRecord } from "@/types/wells";

interface ExecutiveSummaryProps {
  wells: WellRecord[];
}

interface PanelSelection {
  focus: string;
  compare: string;
}

export function ExecutiveSummary({ wells }: ExecutiveSummaryProps) {
  const [clusters, setClusters] = useState<ClustersPayload | null>(null);
  const [panelA, setPanelA] = useState<PanelSelection>({ focus: "JENA31", compare: "" });
  const [panelB, setPanelB] = useState<PanelSelection>({ focus: "JENA31DW1", compare: "" });
  const [panelCCompare, setPanelCCompare] = useState("");
  const [showElevated, setShowElevated] = usePersistedState(
    pageStateKey("/", "execShowElevatedFlags"),
    true,
  );
  const [showHigh, setShowHigh] = usePersistedState(
    pageStateKey("/", "execShowHighFlags"),
    true,
  );

  useEffect(() => {
    fetchJson<ClustersPayload>("data/stats/clusters.json")
      .then(setClusters)
      .catch(() => setClusters(null));
  }, []);

  const highlightAliases = useMemo(() => {
    const aliases = new Set<string>([JENA31_DUAL_ALIAS]);
    for (const sel of [panelA, panelB]) {
      if (sel.focus) aliases.add(sel.focus);
      if (sel.compare) aliases.add(sel.compare);
    }
    if (panelCCompare) aliases.add(panelCCompare);
    return aliases;
  }, [panelA, panelB, panelCCompare]);

  const handlePanelAChange = useCallback((focus: string, compare: string) => {
    setPanelA({ focus, compare });
  }, []);

  const handlePanelBChange = useCallback((focus: string, compare: string) => {
    setPanelB({ focus, compare });
  }, []);

  const openWaterRisk = () => {
    if (!clusters) return;
    const left = panelA.focus || "JENA31";
    const right = panelA.compare || topClusterAnalog(left, clusters) || left;
    writeStoredWell(left);
    writeStoredWaterRiskLeft(left);
    writeStoredWaterRiskRight(right);
  };

  if (!clusters) {
    return <p className="text-sm text-text-muted">Loading executive summary…</p>;
  }

  return (
    <section id="executive-summary" className="space-y-4" aria-labelledby="executive-summary-title">
      <header>
        <h2 id="executive-summary-title" className="text-lg font-semibold text-text sm:text-xl">
          Executive Summary — Analog Concern Hub
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Compare concern zones and cluster cosine analogs — graphic-first view across 24 wells.
        </p>
      </header>

      <Legend
        title="Track Legend"
        items={[
          { label: "Elevated", color: "var(--risk-elev)", description: "open circle ○" },
          { label: "High", color: "var(--risk-high)", description: "larger marker" },
          { label: "Isolated concern", color: "var(--risk-high)", description: "filled ●" },
          { label: "OWC", color: "var(--owc-line)", description: "field oil–water contact" },
          { label: "Hard floor (+3 m)", color: "var(--hard-floor-line)", description: "shallower than OWC" },
          { label: "Trajectory", color: "var(--trajectory-line)", description: "lateral well path" },
          {
            label: "Overburden",
            color: "var(--overburden-corridor)",
            description: "Murta excursion along path",
          },
          {
            label: "Mechanical isolation",
            color: "var(--isolation-hatch-stripe)",
            description: "grey/white hatch along path corridor",
          },
          { label: "JENA 31 lateral", color: "var(--lateral-jena31)" },
          { label: "JENA 31DW1 lateral", color: "var(--lateral-jena31dw1)" },
        ]}
      />

      <div
        className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-card border border-border bg-surface-2 px-4 py-3"
        role="group"
        aria-label="Trajectory flag visibility"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          Show on trajectory
        </p>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-text">
          <input
            type="checkbox"
            checked={showElevated}
            onChange={(e) => setShowElevated(e.target.checked)}
            className="h-4 w-4 cursor-pointer accent-accent"
          />
          Elevated flags
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-text">
          <input
            type="checkbox"
            checked={showHigh}
            onChange={(e) => setShowHigh(e.target.checked)}
            className="h-4 w-4 cursor-pointer accent-accent"
          />
          High flags
        </label>
      </div>

      <ComparisonPanel
        panelId="A"
        defaultFocus="JENA31"
        wells={wells}
        clusters={clusters}
        onSelectionChange={handlePanelAChange}
        showElevated={showElevated}
        showHigh={showHigh}
      />

      <ComparisonPanel
        panelId="B"
        defaultFocus="JENA31DW1"
        wells={wells}
        clusters={clusters}
        onSelectionChange={handlePanelBChange}
        showElevated={showElevated}
        showHigh={showHigh}
      />

      <DualLateralPanel
        wells={wells}
        clusters={clusters}
        onSelectionChange={setPanelCCompare}
        showElevated={showElevated}
        showHigh={showHigh}
      />

      <PortfolioElevatedStrip wells={wells} highlightAliases={highlightAliases} />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          to="/water-risk"
          onClick={openWaterRisk}
          className="inline-flex items-center justify-center rounded-card border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20"
        >
          Open in Water-Risk Explorer →
        </Link>
      </div>
    </section>
  );
}
