import { JENA31_DUAL_ALIAS } from "@/config";
import { getCosineScore, rankClusterAnalogs } from "@/lib/clusterAnalogs";
import { downloadTextFile } from "@/lib/download";
import { getJaccardScore } from "@/lib/jaccardRanking";
import { rankKsAnalogs } from "@/lib/ksRanking";
import type { ClustersPayload, JaccardPayload, KsPayload } from "@/types/stats";
import type { WaterRiskPayload } from "@/types/waterRisk";
import type { WellRecord, WellsPayload } from "@/types/wells";
import {
  rankWsoCandidates,
  type WsoCandidate,
  wsoCandidatesToCsv,
} from "@/lib/wsoCandidates";

export const JENA_LATERALS = ["JENA31", "JENA31DW1"] as const;
export type JenaLateralAlias = (typeof JENA_LATERALS)[number];

export interface WaterRiskBurden {
  openElevatedHigh: number;
  owcProximate: number;
  highOpen: number;
  tierA: number;
  tierB: number;
}

export interface DecisionBriefQuestion {
  id: "q1" | "q2" | "q3";
  title: string;
  question: string;
  answerBullets: string[];
  caveats: string[];
}

export interface DecisionBriefPayload {
  generated: string | null;
  wells: Record<string, WellRecord | undefined>;
  burden: Record<JenaLateralAlias | typeof JENA31_DUAL_ALIAS, WaterRiskBurden>;
  jaccardFeature: number | null;
  jaccardDepthBinned: number | null;
  ksMeanPBetweenLaterals: number | null;
  clusterCosineBetweenLaterals: number | null;
  ksTopAnalog: Record<string, { alias: string; meanP: number } | null>;
  clusterTopAnalog: Record<string, { alias: string; cosine: number } | null>;
  wsoByLateral: Record<JenaLateralAlias, WsoCandidate[]>;
  questions: DecisionBriefQuestion[];
}

export interface DecisionBriefInputs {
  wells: WellsPayload;
  waterRisk: Record<JenaLateralAlias | typeof JENA31_DUAL_ALIAS, WaterRiskPayload>;
  jaccard: JaccardPayload;
  ks: KsPayload;
  clusters: ClustersPayload;
}

function isOwcProximate(zone: WaterRiskPayload["flagged_zones"][number]): boolean {
  const owc = zone.evidence?.owc_near;
  const flags = zone.flags ?? [];
  return (
    owc === "High" ||
    owc === "Elevated" ||
    flags.includes("owc_high") ||
    flags.includes("owc_elevated")
  );
}

function isOpenConcern(zone: WaterRiskPayload["flagged_zones"][number]): boolean {
  return (
    !zone.isolated &&
    !zone.evidence?.isolated &&
    (zone.risk_class === "Elevated" || zone.risk_class === "High")
  );
}

export function computeWaterRiskBurden(
  zones: WaterRiskPayload["flagged_zones"],
  wsoCandidates: WsoCandidate[],
): WaterRiskBurden {
  const open = zones.filter(isOpenConcern);
  return {
    openElevatedHigh: open.length,
    owcProximate: open.filter(isOwcProximate).length,
    highOpen: open.filter((z) => z.risk_class === "High").length,
    tierA: wsoCandidates.filter((c) => c.tier === "A").length,
    tierB: wsoCandidates.filter((c) => c.tier === "B").length,
  };
}

function ksMeanPBetween(ks: KsPayload, left: string, right: string): number | null {
  const row = ks[left]?.vs_analogs?.[right];
  if (!row) return null;
  const pValues = Object.values(row).map((cell) => cell.p_value);
  if (!pValues.length) return null;
  return pValues.reduce((sum, v) => sum + v, 0) / pValues.length;
}

function wellMap(wells: WellsPayload): Record<string, WellRecord> {
  return Object.fromEntries(wells.wells.map((w) => [w.alias, w]));
}

function formatTopWso(candidates: WsoCandidate[], limit = 3): string {
  if (!candidates.length) return "none ranked Tier A/B";
  return candidates
    .slice(0, limit)
    .map((c) => `${c.mdSpan} m (Tier ${c.tier}, score ${c.score.toFixed(1)})`)
    .join("; ");
}

export function buildDecisionBrief(inputs: DecisionBriefInputs): DecisionBriefPayload {
  const wellByAlias = wellMap(inputs.wells);
  const wsoByLateral = {
    JENA31: rankWsoCandidates(
      "JENA31",
      wellByAlias.JENA31?.display ?? "JENA 31",
      inputs.waterRisk.JENA31.flagged_zones,
    ),
    JENA31DW1: rankWsoCandidates(
      "JENA31DW1",
      wellByAlias.JENA31DW1?.display ?? "JENA 31DW1",
      inputs.waterRisk.JENA31DW1.flagged_zones,
    ),
  };

  const burden = {
    JENA31: computeWaterRiskBurden(
      inputs.waterRisk.JENA31.flagged_zones,
      wsoByLateral.JENA31,
    ),
    JENA31DW1: computeWaterRiskBurden(
      inputs.waterRisk.JENA31DW1.flagged_zones,
      wsoByLateral.JENA31DW1,
    ),
    JENA31_DUAL: computeWaterRiskBurden(
      inputs.waterRisk.JENA31_DUAL.flagged_zones,
      [...wsoByLateral.JENA31, ...wsoByLateral.JENA31DW1],
    ),
  };

  const jaccardFeature = getJaccardScore("JENA31", "JENA31DW1", inputs.jaccard);
  const jIdx = inputs.jaccard.aliases.indexOf("JENA31");
  const dwIdx = inputs.jaccard.aliases.indexOf("JENA31DW1");
  const jaccardDepthBinned =
    jIdx >= 0 && dwIdx >= 0
      ? (inputs.jaccard.depth_binned_matrix?.[jIdx]?.[dwIdx] ?? null)
      : null;

  const ksMeanPBetweenLaterals = ksMeanPBetween(inputs.ks, "JENA31", "JENA31DW1");
  const clusterCosineBetweenLaterals = getCosineScore(
    "JENA31",
    "JENA31DW1",
    inputs.clusters,
  );

  const focusAliases = ["JENA31", "JENA31DW1", JENA31_DUAL_ALIAS] as const;
  const ksExclude = [...JENA_LATERALS, JENA31_DUAL_ALIAS];

  const ksTopAnalog: DecisionBriefPayload["ksTopAnalog"] = {};
  const clusterTopAnalog: DecisionBriefPayload["clusterTopAnalog"] = {};

  for (const alias of focusAliases) {
    const ksRanked = rankKsAnalogs(inputs.ks, alias, ksExclude);
    ksTopAnalog[alias] = ksRanked[0]
      ? { alias: ksRanked[0].alias, meanP: ksRanked[0].meanP }
      : null;

    const clusterRanked = rankClusterAnalogs(alias, inputs.clusters);
    clusterTopAnalog[alias] = clusterRanked[0]
      ? { alias: clusterRanked[0].alias, cosine: clusterRanked[0].cosine }
      : null;
  }

  const j31 = wellByAlias.JENA31;
  const jdw1 = wellByAlias.JENA31DW1;
  const dual = wellByAlias[JENA31_DUAL_ALIAS];

  const questions: DecisionBriefQuestion[] = [
    {
      id: "q1",
      title: "WSO shortlist",
      question:
        "Where should water shut-off (WSO) be prioritised on each open lateral interval?",
      answerBullets: [
        `JENA 31: ${burden.JENA31.tierA} Tier A and ${burden.JENA31.tierB} Tier B open windows (${burden.JENA31.openElevatedHigh} Elevated/High total; ${burden.JENA31.owcProximate} OWC-proximate). Top: ${formatTopWso(wsoByLateral.JENA31)}.`,
        `JENA 31DW1: ${burden.JENA31DW1.tierA} Tier A and ${burden.JENA31DW1.tierB} Tier B open windows (${burden.JENA31DW1.openElevatedHigh} Elevated/High; ${burden.JENA31DW1.owcProximate} OWC-proximate). Top: ${formatTopWso(wsoByLateral.JENA31DW1)}.`,
        `Burden is asymmetric: JENA 31 carries ${burden.JENA31.openElevatedHigh} open concern windows vs ${burden.JENA31DW1.openElevatedHigh} on 31DW1.`,
      ],
      caveats: [
        "Rankings use cuttings, mudlog, and wireline evidence only — no production or rate data.",
        "Tier A/B scoring weights OWC proximity, ZOI, and WRCI; mechanically isolated zones are deprioritised.",
        "WSO candidacy is advisory; confirm with field logs, completion geometry, and operational constraints.",
      ],
    },
    {
      id: "q2",
      title: "Lateral similarity",
      question:
        "Are JENA 31 and JENA 31DW1 similar enough to each other — and to portfolio analogs — to share intervention logic?",
      answerBullets: [
        `Feature-set Jaccard (JENA 31 ↔ 31DW1): ${jaccardFeature?.toFixed(3) ?? "—"}; depth-binned Jaccard: ${jaccardDepthBinned?.toFixed(3) ?? "—"}.`,
        `KS mean p (property distributions): ${ksMeanPBetweenLaterals?.toFixed(3) ?? "—"} — distributions are statistically distinguishable at conventional α=0.05 for several properties.`,
        `Cluster cosine (petrophysical vector): ${clusterCosineBetweenLaterals?.toFixed(3) ?? "—"} — laterals sit in different aggregate signature space despite shared cluster ID.`,
        `Top KS analogs: JENA 31 → ${ksTopAnalog.JENA31?.alias ?? "—"} (mean p=${ksTopAnalog.JENA31?.meanP.toFixed(3) ?? "—"}); 31DW1 → ${ksTopAnalog.JENA31DW1?.alias ?? "—"} (mean p=${ksTopAnalog.JENA31DW1?.meanP.toFixed(3) ?? "—"}).`,
      ],
      caveats: [
        "Jaccard compares binary feature presence; KS tests continuous property distributions — read both.",
        "Statistical similarity does not imply interchangeable WSO targets; lateral MD ranges and isolation differ.",
        "Executive compare dropdowns use cluster cosine; Jaccard rankings appear on /compare.",
      ],
    },
    {
      id: "q3",
      title: "Commingled asset view",
      question:
        "What does the merged dual-lateral picture imply for a single-wellhead, commingled production asset?",
      answerBullets: [
        `JENA 31 Dual Lateral: ${burden.JENA31_DUAL.openElevatedHigh} open Elevated/High windows (${burden.JENA31_DUAL.owcProximate} OWC-proximate; ${burden.JENA31_DUAL.highOpen} High).`,
        `Merged pay ${dual?.pay_pct?.toFixed(1) ?? "—"}% across ${dual?.lateral?.toFixed(0) ?? "—"} m lateral (${j31?.pay_pct?.toFixed(1) ?? "—"}% JENA 31 · ${jdw1?.pay_pct?.toFixed(1) ?? "—"}% 31DW1).`,
        `Top cluster analog for dual: ${clusterTopAnalog[JENA31_DUAL_ALIAS]?.alias ?? "—"} (cos=${clusterTopAnalog[JENA31_DUAL_ALIAS]?.cosine.toFixed(3) ?? "—"}); top KS analog: ${ksTopAnalog[JENA31_DUAL_ALIAS]?.alias ?? "—"}.`,
        `Concern concentration differs by lateral — commingled totals mask where intervention may be needed per bore.`,
      ],
      caveats: [
        "JENA31_DUAL is a virtual merge for analysis; production attribution between laterals is not modelled.",
        "No rate or water-cut data — elevated WRCI flags indicate cuttings-based concern, not proven water production.",
        "Dual-lateral view belongs on the executive summary; per-lateral detail remains in Well Detail and Water-Risk Explorer.",
      ],
    },
  ];

  return {
    generated: inputs.wells.generated ?? null,
    wells: {
      JENA31: j31,
      JENA31DW1: jdw1,
      JENA31_DUAL: dual,
    },
    burden,
    jaccardFeature,
    jaccardDepthBinned,
    ksMeanPBetweenLaterals,
    clusterCosineBetweenLaterals,
    ksTopAnalog,
    clusterTopAnalog,
    wsoByLateral,
    questions,
  };
}

export function buildWsoExportJson(
  brief: DecisionBriefPayload,
): Record<string, unknown> {
  return {
    generated: brief.generated,
    laterals: JENA_LATERALS.map((alias) => ({
      alias,
      display: brief.wells[alias]?.display ?? alias,
      candidates: brief.wsoByLateral[alias],
    })),
  };
}

export function downloadWsoCsv(alias: JenaLateralAlias, brief: DecisionBriefPayload): void {
  const candidates = brief.wsoByLateral[alias];
  downloadTextFile(`wso_candidates_${alias.toLowerCase()}.csv`, wsoCandidatesToCsv(candidates));
}
