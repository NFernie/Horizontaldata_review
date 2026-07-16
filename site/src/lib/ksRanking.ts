import { KS_PROPERTIES } from "@/config";
import type { KsPayload } from "@/types/stats";

export interface RankedAnalog {
  alias: string;
  rank: number;
  meanP: number;
  meanD: number;
  sigCount: number;
}

const SIG_THRESHOLD = 0.05;

export function rankKsAnalogs(
  data: KsPayload,
  focusAlias: string,
  excludeAliases: readonly string[] = [],
): RankedAnalog[] {
  const focus = data[focusAlias];
  if (!focus) return [];

  const exclude = new Set([focusAlias, ...excludeAliases]);
  const candidates: Omit<RankedAnalog, "rank">[] = [];

  for (const [alias, properties] of Object.entries(focus.vs_analogs)) {
    if (exclude.has(alias)) continue;

    const pValues: number[] = [];
    const dValues: number[] = [];
    let sigCount = 0;

    for (const prop of KS_PROPERTIES) {
      const cell = properties[prop];
      if (!cell) continue;
      pValues.push(cell.p_value);
      dValues.push(cell.D);
      if (cell.p_value < SIG_THRESHOLD) sigCount += 1;
    }

    if (!pValues.length) continue;

    const meanP = pValues.reduce((sum, v) => sum + v, 0) / pValues.length;
    const meanD = dValues.reduce((sum, v) => sum + v, 0) / dValues.length;
    candidates.push({ alias, meanP, meanD, sigCount });
  }

  candidates.sort(
    (a, b) =>
      b.meanP - a.meanP || a.meanD - b.meanD || a.alias.localeCompare(b.alias),
  );

  return candidates.map((entry, index) => ({
    ...entry,
    rank: index + 1,
  }));
}

/** Abbreviate McKinlay in header labels for horizontal space. */
export function abbreviateKsHeaderLabel(label: string): string {
  return label.replace(/MCKINLAY/g, "MCK").replace(/McKinlay/g, "MCK");
}

export function formatKsColumnHeader(
  alias: string,
  rank: number,
  displayNames?: Record<string, string>,
): string {
  const raw = displayNames?.[alias] ?? alias;
  return `#${rank} ${abbreviateKsHeaderLabel(raw)}`;
}

export function formatKsColumnTooltip(entry: RankedAnalog): string {
  const sigLabel = entry.sigCount === 1 ? "sig. diff" : "sig. diffs";
  return `mean p=${entry.meanP.toFixed(3)} · ${entry.sigCount} ${sigLabel}`;
}
