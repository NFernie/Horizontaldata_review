import { fetchJson } from "@/lib/utils";
import type { AssistantResult } from "@/types/assistant";
import type { ParsedQuery } from "../types";
import { loadManifest, loadMethods } from "../corpusLoader";
import { resolveWell } from "../wellResolver";

const METHOD_ID_MAP: Record<string, string> = {
  wrci: "method:1-wrci",
  zscore: "method:2-zscore",
  spearman: "method:3-spearman",
  jaccard: "method:4-jaccard",
  ks: "method:5-clustering-ks",
};

export async function handleMethodLookup(parsed: ParsedQuery): Promise<AssistantResult> {
  const doc = await loadMethods();
  const methodKey = parsed.methodKey ?? "wrci";
  const methodId = METHOD_ID_MAP[methodKey];
  const method = doc.methods.find((entry) => entry.id === methodId) ?? doc.methods[0];

  const firstParagraph =
    method.markdown
      .split("\n")
      .find((line) => line.trim() && !line.startsWith("#") && !line.startsWith("**Reference")) ??
    method.title;

  return {
    intent: "METHOD_LOOKUP",
    title: method.title,
    summary: {
      Method: method.title,
      Summary: firstParagraph.replace(/\*\*/g, ""),
      Source: doc.source,
    },
    detail_markdown: method.markdown,
    citations: [
      {
        label: doc.source,
        source: doc.source,
        route: "/methodology",
      },
    ],
  };
}

export async function handleSummaryLookup(parsed: ParsedQuery): Promise<AssistantResult> {
  if (!parsed.summaryType) {
    throw new Error("Summary type is required.");
  }

  const manifest = await loadManifest();
  const wellMatch = parsed.alias
    ? manifest.wells.find((entry) => entry.alias === parsed.alias)
    : resolveWell(parsed.rawQuery, manifest.wells);

  if (!wellMatch) {
    throw new Error("Could not resolve well for summary lookup.");
  }

  const subdir = parsed.summaryType === "pay_summary" ? "pay" : "process";
  const path = `corpus/summaries/${subdir}/${wellMatch.alias}.json`;
  const summary = await fetchJson<{
    title: string;
    markdown: string;
    source: string;
    display: string;
  }>(path);

  return {
    intent: "SUMMARY_LOOKUP",
    title: summary.title,
    summary: {
      Well: summary.display,
      Type: parsed.summaryType === "pay_summary" ? "Pay summary" : "Process summary",
      Source: summary.source,
    },
    detail_markdown: summary.markdown,
    citations: [
      {
        label: summary.source,
        source: summary.source,
        route: `/well/${wellMatch.alias}`,
      },
    ],
  };
}
