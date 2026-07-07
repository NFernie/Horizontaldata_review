export const SUGGESTED_PROMPTS = [
  "cuttings at 2500 m MD in Jena 31",
  "how is WRCI calculated",
  "pay summary Jena 31DW1",
  "flagged zones Jena 31",
] as const;

export const INTENT_LABELS: Record<string, string> = {
  INTERVAL_LOOKUP: "Interval lookup",
  INTERVAL_FILTER: "Interval filter",
  METHOD_LOOKUP: "Statistical method",
  SUMMARY_LOOKUP: "Well summary",
  STATS_LOOKUP: "Portfolio statistics",
  KEYWORD_FALLBACK: "Keyword search",
};
