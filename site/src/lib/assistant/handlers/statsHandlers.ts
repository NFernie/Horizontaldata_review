import { fetchJson, formatNumber } from "@/lib/utils";
import type { AssistantResult } from "@/types/assistant";
import type { CorrelationsPayload } from "@/types/correlations";
import type { JaccardPayload, KsPayload } from "@/types/stats";
import type { WaterRiskPayload } from "@/types/waterRisk";
import type { ParsedQuery } from "../types";
import { loadManifest } from "../corpusLoader";
import { resolveWell } from "../wellResolver";

export async function handleStatsLookup(parsed: ParsedQuery): Promise<AssistantResult> {
  const topic = parsed.statsTopic ?? "water_risk";
  const manifest = await loadManifest();
  const well = parsed.alias
    ? manifest.wells.find((entry) => entry.alias === parsed.alias)
    : resolveWell(parsed.rawQuery, manifest.wells);

  switch (topic) {
    case "correlations":
      return handleCorrelations(well?.alias ?? "JENA31", well?.display ?? "JENA 31");
    case "jaccard":
    case "analog":
      return handleJaccard(well?.alias ?? "JENA31", well?.display ?? "JENA 31");
    case "ks":
      return handleKs(well?.alias ?? "JENA31", well?.display ?? "JENA 31");
    case "clusters":
      return handleClusters();
    case "water_risk":
    default:
      if (!well) {
        throw new Error("Well is required for water-risk stats lookup.");
      }
      return handleWaterRisk(well.alias, well.display);
  }
}

async function handleCorrelations(alias: string, display: string): Promise<AssistantResult> {
  const data = await fetchJson<CorrelationsPayload>("data/stats/correlations.json");
  const matrix = data[alias];
  if (!matrix) {
    throw new Error(`No correlation data for ${alias}.`);
  }

  const vars = ["pct_ss", "res_sep", "avg_RES_DEEP", "fluor", "avg_GR"] as const;
  const pairs = vars
    .flatMap((a, index) =>
      vars.slice(index + 1).map((b) => {
        const rho = matrix.rho[a]?.[b];
        const pValue = matrix.p_value[a]?.[b];
        if (rho == null || pValue == null) return null;
        return `| ${a} | ${b} | ${formatNumber(rho, 3)} | ${pValue.toExponential(2)} |`;
      }),
    )
    .filter(Boolean)
    .slice(0, 12);

  const markdown = [
    `# Spearman correlations — ${display}`,
    "",
    "| Var A | Var B | ρ | p-value |",
    "|---|---|---:|---:|",
    ...pairs,
  ].join("\n");

  return {
    intent: "STATS_LOOKUP",
    title: `Spearman correlations — ${display}`,
    summary: {
      Well: display,
      Dataset: "data/stats/correlations.json",
    },
    detail_markdown: markdown,
    citations: [
      {
        label: "Correlations JSON",
        source: "data/stats/correlations.json",
        route: `/intra/${alias}`,
      },
    ],
  };
}

async function handleJaccard(alias: string, display: string): Promise<AssistantResult> {
  const data = await fetchJson<JaccardPayload>("data/stats/jaccard.json");
  const ranking = data.jena_analog_ranking[alias] ?? data.jena_analog_ranking.JENA31 ?? [];

  const lines = ranking.slice(0, 10).map(
    (item, index) => `| ${index + 1} | ${item.alias} | ${item.jaccard.toFixed(3)} |`,
  );

  const markdown = [
    `# Jaccard analog ranking — ${display}`,
    "",
    "| Rank | Analog well | Jaccard |",
    "|---:|---|---:|",
    ...lines,
  ].join("\n");

  return {
    intent: "STATS_LOOKUP",
    title: `Jaccard analogs — ${display}`,
    summary: {
      Well: display,
      "Top analog": ranking[0]?.alias ?? "—",
      Dataset: "data/stats/jaccard.json",
    },
    detail_markdown: markdown,
    citations: [
      {
        label: "Jaccard JSON",
        source: "data/stats/jaccard.json",
        route: "/compare",
      },
    ],
  };
}

async function handleKs(alias: string, display: string): Promise<AssistantResult> {
  const data = await fetchJson<KsPayload>("data/stats/ks.json");
  const focus = data[alias] ?? data.JENA31;
  const analogs = Object.entries(focus.vs_analogs).slice(0, 5);

  const lines = analogs.flatMap(([analog, props]) =>
    Object.entries(props)
      .slice(0, 3)
      .map(
        ([prop, result]) =>
          `| ${analog} | ${prop} | ${formatNumber(result.D, 3)} | ${result.p_value.toExponential(2)} |`,
      ),
  );

  const markdown = [
    `# KS significance — ${display}`,
    "",
    "| Analog | Property | D | p-value |",
    "|---|---|---:|---:|",
    ...lines,
  ].join("\n");

  return {
    intent: "STATS_LOOKUP",
    title: `KS significance — ${display}`,
    summary: {
      Well: display,
      Dataset: "data/stats/ks.json",
    },
    detail_markdown: markdown,
    citations: [
      {
        label: "KS JSON",
        source: "data/stats/ks.json",
        route: "/compare",
      },
    ],
  };
}

async function handleClusters(): Promise<AssistantResult> {
  const data = await fetchJson<{ aliases: string[]; cluster_ids: Record<string, number> }>(
    "data/stats/clusters.json",
  );

  const lines = data.aliases.map(
    (alias) => `| ${alias} | C${data.cluster_ids[alias] ?? "—"} |`,
  );

  const markdown = [
    "# Hierarchical clustering assignments",
    "",
    "| Well | Cluster |",
    "|---|---|",
    ...lines,
  ].join("\n");

  return {
    intent: "STATS_LOOKUP",
    title: "Well cluster assignments",
    summary: {
      Wells: data.aliases.length,
      Dataset: "data/stats/clusters.json",
    },
    detail_markdown: markdown,
    citations: [
      {
        label: "Clusters JSON",
        source: "data/stats/clusters.json",
        route: "/compare",
      },
    ],
  };
}

async function handleWaterRisk(alias: string, display: string): Promise<AssistantResult> {
  const data = await fetchJson<WaterRiskPayload>(`data/water_risk/${alias}.json`);
  const lines = data.flagged_zones.slice(0, 15).map(
    (zone) =>
      `| ${zone.depth.toFixed(0)} | ${formatNumber(zone.WRCI, 1)} | ${zone.risk_class} | ${zone.flags.join(", ") || "—"} |`,
  );

  const markdown = [
    `# Flagged water-risk zones — ${display}`,
    "",
    `Total flagged zones: **${data.flagged_zones.length}**`,
    "",
    "| Depth (m) | WRCI | Risk | Flags |",
    "|---:|---:|---|---|",
    ...lines,
    data.flagged_zones.length > 15 ? `\n_(Showing first 15 of ${data.flagged_zones.length}.)_` : "",
  ].join("\n");

  return {
    intent: "STATS_LOOKUP",
    title: `Flagged zones — ${display}`,
    summary: {
      Well: display,
      "Flagged zones": data.flagged_zones.length,
      Dataset: `data/water_risk/${alias}.json`,
    },
    detail_markdown: markdown,
    citations: [
      {
        label: `Water risk — ${display}`,
        source: `data/water_risk/${alias}.json`,
        route: "/water-risk",
      },
      {
        label: display,
        source: `corpus/intervals/${alias}.json`,
        route: `/well/${alias}`,
      },
    ],
  };
}
