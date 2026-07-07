export type AssistantIntent =
  | "INTERVAL_LOOKUP"
  | "INTERVAL_FILTER"
  | "METHOD_LOOKUP"
  | "SUMMARY_LOOKUP"
  | "STATS_LOOKUP"
  | "KEYWORD_FALLBACK";

export interface AssistantCitation {
  label: string;
  source: string;
  route?: string;
}

export type AssistantSummary = Record<string, string | number | boolean | null>;

export interface AssistantResult {
  intent: AssistantIntent;
  title: string;
  summary: AssistantSummary | string;
  detail_markdown?: string;
  citations: AssistantCitation[];
  match_note?: string;
}

export interface AssistantResponse {
  query: string;
  results: AssistantResult[];
}

export interface StatisticalMethodsDoc {
  source: string;
  methods: Array<{
    id: string;
    method_number: number;
    title: string;
    markdown: string;
    source: string;
  }>;
}

export interface CorpusSummaryDoc {
  alias: string;
  display: string;
  type: "pay_summary" | "process_summary";
  title: string;
  markdown: string;
  source: string;
}

export interface CorpusStatsIndex {
  generated_at: string;
  entries: Array<{
    id: string;
    label: string;
    path: string;
    type: string;
    alias?: string;
  }>;
}
