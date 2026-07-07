import { formatNumber, formatPercent } from "@/lib/utils";
import type { AssistantResult } from "@/types/assistant";
import type { ParsedQuery } from "../types";
import { loadIntervals } from "../corpusLoader";
import { findNearestInterval } from "../depthResolver";

function intervalSummaryRows(
  record: Awaited<ReturnType<typeof loadIntervals>>["intervals"][number],
): Record<string, string | number | boolean | null> {
  const s = record.summary;
  return {
    Depth: `${record.depth} m MD`,
    Interval: `${record.top} – ${record.bot} m`,
    "%SS": s.pct_ss,
    Grain: s.grain,
    Porosity: s.poro_class,
    "Loose grains": s.loose_grains ? "Yes" : "No",
    Fluorescence: s.fluor != null ? formatPercent(s.fluor, 0) : null,
    WRCI: s.WRCI != null ? formatNumber(s.WRCI, 1) : null,
    "Risk class": s.risk_class,
    Flags: s.flags.length ? s.flags.join(", ") : "—",
    Description: s.long_desc,
  };
}

export async function handleIntervalLookup(parsed: ParsedQuery): Promise<AssistantResult> {
  if (!parsed.alias) {
    throw new Error("Well is required for interval lookup.");
  }
  if (parsed.depth == null) {
    throw new Error("Depth is required for interval lookup.");
  }

  const payload = await loadIntervals(parsed.alias);
  const match = findNearestInterval(payload.intervals, parsed.depth);
  if (!match) {
    return {
      intent: "INTERVAL_LOOKUP",
      title: `No intervals — ${payload.display}`,
      summary: "No retained McKinlay intervals were found for this well.",
      citations: [{ label: payload.display, source: `corpus/intervals/${parsed.alias}.json` }],
    };
  }

  const { record, matchNote } = match;
  return {
    intent: "INTERVAL_LOOKUP",
    title: `Interval — ${payload.display} @ ${record.depth} m MD`,
    summary: intervalSummaryRows(record),
    detail_markdown: record.detail_markdown,
    match_note: matchNote,
    citations: [
      {
        label: record.source.file,
        source: record.source.file,
        route: `/well/${parsed.alias}`,
      },
      {
        label: "Intra-well statistics",
        source: `corpus/intervals/${parsed.alias}.json`,
        route: `/intra/${parsed.alias}`,
      },
    ],
  };
}

export async function handleIntervalFilter(parsed: ParsedQuery): Promise<AssistantResult> {
  if (!parsed.alias || !parsed.filter) {
    throw new Error("Well and filter are required.");
  }

  const payload = await loadIntervals(parsed.alias);
  const { filter } = parsed;
  const matches = payload.intervals.filter((record) => {
    const s = record.summary;
    if (filter.looseGrains && !s.loose_grains) return false;
    if (filter.riskClass && s.risk_class !== filter.riskClass) return false;
    if (filter.minWrci != null && (s.WRCI == null || s.WRCI < filter.minWrci)) return false;
    if (filter.maxWrci != null && (s.WRCI == null || s.WRCI > filter.maxWrci)) return false;
    return true;
  });

  const lines = matches.slice(0, 25).map((record) => {
    const flags = record.summary.flags.length ? record.summary.flags.join(", ") : "—";
    return `| ${record.depth} | ${record.summary.pct_ss ?? "—"} | ${record.summary.WRCI ?? "—"} | ${record.summary.risk_class} | ${flags} |`;
  });

  const markdown = [
    `# Filtered intervals — ${payload.display}`,
    "",
    `Matched **${matches.length}** interval(s).`,
    "",
    "| Depth (m) | %SS | WRCI | Risk | Flags |",
    "|---:|---:|---:|---|---|",
    ...lines,
    matches.length > 25 ? `\n_(Showing first 25 of ${matches.length}.)_` : "",
  ].join("\n");

  return {
    intent: "INTERVAL_FILTER",
    title: `Filtered intervals — ${payload.display}`,
    summary: {
      Matches: matches.length,
      Well: payload.display,
    },
    detail_markdown: markdown,
    citations: [
      {
        label: payload.display,
        source: `corpus/intervals/${parsed.alias}.json`,
        route: `/well/${parsed.alias}`,
      },
    ],
  };
}
