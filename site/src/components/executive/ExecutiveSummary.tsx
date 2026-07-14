import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ComparisonPanel } from "@/components/executive/ComparisonPanel";
import { DistributionHistogramPanel } from "@/components/executive/DistributionHistogramPanel";
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

      <ComparisonPanel
        panelId="A"
        defaultFocus="JENA31"
        wells={wells}
        clusters={clusters}
        onSelectionChange={handlePanelAChange}
      />

      <ComparisonPanel
        panelId="B"
        defaultFocus="JENA31DW1"
        wells={wells}
        clusters={clusters}
        onSelectionChange={handlePanelBChange}
      />

      <DualLateralPanel
        wells={wells}
        clusters={clusters}
        onSelectionChange={setPanelCCompare}
      />

      <DistributionHistogramPanel wells={wells} />

      <PortfolioElevatedStrip wells={wells} highlightAliases={highlightAliases} />

      <Legend
        title="Concern track legend"
        items={[
          { label: "Elevated", color: "var(--risk-elev)", description: "open circle ○" },
          { label: "High", color: "var(--risk-high)", description: "larger marker" },
          { label: "Isolated concern", color: "var(--risk-high)", description: "filled ●" },
          {
            label: "Isolation band",
            color: "rgba(147,161,176,0.45)",
            description: "hatched MD range",
          },
          { label: "JENA 31 lateral", color: "var(--lateral-jena31)" },
          { label: "JENA 31DW1 lateral", color: "var(--lateral-jena31dw1)" },
        ]}
      />

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
