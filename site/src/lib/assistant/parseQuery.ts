import type { CorpusWellEntry } from "@/types/corpus";
import { parseDepth } from "./depthResolver";
import { expandQuery } from "./synonyms";
import type { IntervalFilter, ParsedQuery } from "./types";
import { resolveWell } from "./wellResolver";

const METHOD_PATTERNS: Array<{ key: string; patterns: RegExp[] }> = [
  { key: "wrci", patterns: [/\bwrci\b/i, /water[- ]risk composite/i, /rock quality index/i] },
  {
    key: "zscore",
    patterns: [/\bz[- ]?score/i, /robust z/i, /anomaly detection/i, /modified z/i],
  },
  { key: "spearman", patterns: [/\bspearman\b/i, /rank[- ]correlation/i, /correlation matrix/i] },
  { key: "jaccard", patterns: [/\bjaccard\b/i, /binary flag sets/i] },
  {
    key: "ks",
    patterns: [/\bks\b/i, /kolmogorov/i, /smirnov/i, /\bclustering\b/i, /hierarchical cluster/i],
  },
];

const INTERVAL_KEYWORDS =
  /\b(cuttings?|description|interval|sample|mudlog|lithology|spreadsheet)\b/i;

function detectMethodKey(query: string): string | undefined {
  const asksHow =
    /\b(how|what|explain|describe)\b/i.test(query) &&
    /\b(calculated|computed|defined|work|mean)\b/i.test(query);

  for (const { key, patterns } of METHOD_PATTERNS) {
    if (patterns.some((pattern) => pattern.test(query))) {
      return key;
    }
  }

  if (asksHow) {
    for (const { key, patterns } of METHOD_PATTERNS) {
      if (patterns.some((pattern) => pattern.test(query))) {
        return key;
      }
    }
  }

  if (/\bhow\b/i.test(query) && /\bwrci\b/i.test(query)) return "wrci";
  if (/\bhow\b/i.test(query) && /\bz[- ]?score\b/i.test(query)) return "zscore";
  if (/\bhow\b/i.test(query) && /\bspearman\b/i.test(query)) return "spearman";

  return undefined;
}

function detectSummaryType(query: string): "pay_summary" | "process_summary" | undefined {
  if (/\bpay\s+summary\b/i.test(query)) return "pay_summary";
  if (/\bprocess\s+summary\b/i.test(query)) return "process_summary";
  return undefined;
}

function detectStatsTopic(
  query: string,
): ParsedQuery["statsTopic"] | undefined {
  if (/\b(flagged|water[- ]risk)\s+zones?\b/i.test(query)) return "water_risk";
  if (/\banalog\b/i.test(query) || /\bjaccard\b/i.test(query)) return "jaccard";
  if (/\bcorrelation\b/i.test(query) || /\bspearman\b/i.test(query)) return "correlations";
  if (/\bks\b/i.test(query) || /kolmogorov/i.test(query)) return "ks";
  if (/\bcluster/i.test(query) || /dendrogram/i.test(query)) return "clusters";
  return undefined;
}

function detectIntervalFilter(query: string): IntervalFilter | undefined {
  const filter: IntervalFilter = {};
  if (/\bloose\s+grains?\b/i.test(query) || /\blse\b/i.test(query) || /\bloose\b/i.test(query)) {
    filter.looseGrains = true;
  }
  if (/\bhigh\s+risk\b/i.test(query)) {
    filter.riskClass = "High";
  } else if (/\belevated\b/i.test(query)) {
    filter.riskClass = "Elevated";
  }

  const wrciMatch = query.match(/\bwrci\s*(?:>|>=|above|over)\s*(\d+(?:\.\d+)?)/i);
  if (wrciMatch) {
    filter.minWrci = Number.parseFloat(wrciMatch[1]);
  }
  const wrciMaxMatch = query.match(/\bwrci\s*(?:<|<=|below|under)\s*(\d+(?:\.\d+)?)/i);
  if (wrciMaxMatch) {
    filter.maxWrci = Number.parseFloat(wrciMaxMatch[1]);
  }

  const rqiMatch = query.match(/\brqi\s*(?:>|>=|above|over)\s*(\d+(?:\.\d+)?)/i);
  if (rqiMatch) {
    filter.minRqi = Number.parseFloat(rqiMatch[1]);
  }
  const rqiMaxMatch = query.match(/\brqi\s*(?:<|<=|below|under)\s*(\d+(?:\.\d+)?)/i);
  if (rqiMaxMatch) {
    filter.maxRqi = Number.parseFloat(rqiMaxMatch[1]);
  }

  if (Object.keys(filter).length === 0) return undefined;
  return filter;
}

function hasIntervalLookupSignals(query: string, depth?: number, alias?: string): boolean {
  if (alias && depth != null) return true;
  if (depth != null && INTERVAL_KEYWORDS.test(query)) return true;
  if (alias && INTERVAL_KEYWORDS.test(query)) return true;
  return false;
}

export function parseQuery(query: string, wells: CorpusWellEntry[]): ParsedQuery {
  const rawQuery = query.trim();
  const searchQuery = expandQuery(rawQuery);
  const normalized = searchQuery.toLowerCase();

  if (!rawQuery) {
    return { intent: "KEYWORD_FALLBACK", rawQuery };
  }

  const well = resolveWell(searchQuery, wells);
  const depth = parseDepth(rawQuery);
  const methodKey = detectMethodKey(searchQuery);
  const summaryType = detectSummaryType(searchQuery);
  const statsTopic = detectStatsTopic(searchQuery);
  const filter = detectIntervalFilter(rawQuery);

  if (summaryType) {
    return {
      intent: "SUMMARY_LOOKUP",
      rawQuery,
      alias: well?.alias,
      summaryType,
    };
  }

  if (
    methodKey &&
    (!statsTopic || methodKey !== "jaccard") &&
    (!well || /\b(how|what|explain|calculated|defined)\b/i.test(normalized))
  ) {
    return {
      intent: "METHOD_LOOKUP",
      rawQuery,
      methodKey,
    };
  }

  if (statsTopic) {
    return {
      intent: "STATS_LOOKUP",
      rawQuery,
      alias: well?.alias,
      statsTopic,
    };
  }

  if (filter && well) {
    return {
      intent: "INTERVAL_FILTER",
      rawQuery,
      alias: well.alias,
      depth,
      filter,
    };
  }

  if (hasIntervalLookupSignals(searchQuery, depth, well?.alias)) {
    return {
      intent: "INTERVAL_LOOKUP",
      rawQuery,
      alias: well?.alias,
      depth,
    };
  }

  if (methodKey) {
    return {
      intent: "METHOD_LOOKUP",
      rawQuery,
      methodKey,
    };
  }

  if (well && depth != null) {
    return {
      intent: "INTERVAL_LOOKUP",
      rawQuery,
      alias: well.alias,
      depth,
    };
  }

  return { intent: "KEYWORD_FALLBACK", rawQuery };
}
