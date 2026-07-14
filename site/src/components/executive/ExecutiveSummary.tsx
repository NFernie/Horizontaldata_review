import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ComparisonPanel } from "@/components/executive/ComparisonPanel";
import { PortfolioElevatedStrip } from "@/components/executive/PortfolioElevatedStrip";
import { Legend } from "@/components/Legend";
import {
  writeStoredWaterRiskLeft,
  writeStoredWaterRiskRight,
  writeStoredWell,
} from "@/hooks/useWellSelection";
import { fetchJson } from "@/lib/utils";
import type { JaccardPayload } from "@/types/stats";
import type { WellRecord } from "@/types/wells";

interface ExecutiveSummaryProps {
  wells: WellRecord[];
}

interface PanelSelection {
  focus: string;
  analog: string;
}

export function ExecutiveSummary({ wells }: ExecutiveSummaryProps) {
  const [jaccard, setJaccard] = useState<JaccardPayload | null>(null);
  const [panelA, setPanelA] = useState<PanelSelection>({ focus: "JENA31", analog: "" });
  const [panelB, setPanelB] = useState<PanelSelection>({ focus: "JENA31DW1", analog: "" });

  useEffect(() => {
    fetchJson<JaccardPayload>("data/stats/jaccard.json")
      .then(setJaccard)
      .catch(() => setJaccard(null));
  }, []);

  const highlightAliases = useMemo(() => {
    const aliases = new Set<string>();
    for (const sel of [panelA, panelB]) {
      if (sel.focus) aliases.add(sel.focus);
      if (sel.analog) aliases.add(sel.analog);
    }
    return aliases;
  }, [panelA, panelB]);

  const handlePanelAChange = useCallback((focus: string, analog: string) => {
    setPanelA({ focus, analog });
  }, []);

  const handlePanelBChange = useCallback((focus: string, analog: string) => {
    setPanelB({ focus, analog });
  }, []);

  const openWaterRisk = () => {
    const left = panelA.focus || "JENA31";
    const right = panelB.focus !== left ? panelB.focus : panelA.analog || panelB.focus;
    writeStoredWell(left);
    writeStoredWaterRiskLeft(left);
    writeStoredWaterRiskRight(right);
  };

  if (!jaccard) {
    return <p className="text-sm text-text-muted">Loading executive summary…</p>;
  }

  return (
    <section className="space-y-4" aria-labelledby="executive-summary-title">
      <header>
        <h2 id="executive-summary-title" className="text-lg font-semibold text-text sm:text-xl">
          Executive Summary — Analog Concern Hub
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Compare concern zones and Jaccard analogs for focus wells — graphic-first view.
        </p>
      </header>

      <ComparisonPanel
        panelId="A"
        defaultFocus="JENA31"
        wells={wells}
        jaccard={jaccard}
        onSelectionChange={handlePanelAChange}
      />

      <ComparisonPanel
        panelId="B"
        defaultFocus="JENA31DW1"
        wells={wells}
        jaccard={jaccard}
        onSelectionChange={handlePanelBChange}
      />

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
