import type { RiskClass } from "./wells";

/** Corpus manifest (`site/public/corpus/manifest.json`). */
export interface CorpusManifest {
  version: number;
  generated_at: string;
  wells: CorpusWellEntry[];
  chunk_counts: CorpusChunkCounts;
}

export interface CorpusWellEntry {
  alias: string;
  display: string;
  depth_min: number;
  depth_max: number;
  interval_count: number;
  sources: CorpusWellSources;
}

export interface CorpusWellSources {
  interpretation: string;
  pay_summary: string;
  process_summary: string;
}

export interface CorpusChunkCounts {
  interval: number;
  method: number;
  summary: number;
  stats?: number;
}

/** Condensed interval fields merged from `data/intervals/{ALIAS}.json`. */
export interface CorpusIntervalSummary {
  pct_ss: number | null;
  grain: string | null;
  poro_class: string | null;
  loose_grains: boolean;
  fluor: number | null;
  WRCI: number | null;
  risk_class: RiskClass;
  flags: string[];
  long_desc: string;
}

export interface CorpusSourceRef {
  file: string;
  anchor: string;
}

/** Single interval record in `corpus/intervals/{ALIAS}.json`. */
export interface CorpusIntervalRecord {
  alias: string;
  depth: number;
  top: number;
  bot: number;
  summary: CorpusIntervalSummary;
  detail_markdown: string;
  source: CorpusSourceRef;
}

/** Per-well interval index (`corpus/intervals/{ALIAS}.json`). */
export interface CorpusIntervalsPayload {
  alias: string;
  display: string;
  interval_count: number;
  intervals: CorpusIntervalRecord[];
}

export type CorpusChunkType =
  | "interval"
  | "pay_summary"
  | "process_summary"
  | "method"
  | "stats";

/** One line in `corpus/chunks.jsonl`. */
export interface CorpusChunk {
  id: string;
  type: CorpusChunkType;
  alias?: string;
  depth?: number;
  title: string;
  text: string;
  detail_markdown?: string;
  source: string;
}
