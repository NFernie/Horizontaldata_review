import type { ReactNode } from "react";
import type { AssistantResult, KeywordHit } from "@/types/assistant";
import { MetricCell } from "@/components/MetricCell";
import { cn } from "@/lib/utils";
import { CitationLink } from "./CitationLink";
import { INTENT_LABELS } from "./constants";
import { MarkdownContent } from "./MarkdownContent";

interface ResultCardProps {
  result: AssistantResult;
}

function KeywordHitList({ hits }: { hits: KeywordHit[] }) {
  return (
    <ol className="space-y-3">
      {hits.map((hit, index) => (
        <li key={`${hit.source}-${index}`} className="rounded-card border border-border bg-surface px-3 py-2.5">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-medium text-text">{hit.title}</p>
            <span className="shrink-0 font-mono text-[10px] text-text-muted">{hit.score.toFixed(3)}</span>
          </div>
          <div className="mt-1.5 text-xs leading-relaxed text-text-muted">
            <MarkdownContent markdown={hit.snippet} />
          </div>
          {hit.route ? (
            <div className="mt-2">
              <CitationLink citation={{ label: "Open well", source: hit.source, route: hit.route }} />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function SummaryGrid({ summary }: { summary: Record<string, string | number | boolean | null> }) {
  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {Object.entries(summary).map(([key, value]) => {
        const text = value == null ? "—" : String(value);
        const isLong = text.length > 120;
        const metricKey = key.toUpperCase();
        const numericValue = typeof value === "number" ? value : null;

        let content: ReactNode = isLong
          ? `${text.slice(0, 200)}${text.length > 200 ? "…" : ""}`
          : text;

        if (metricKey === "RQI" && numericValue != null) {
          content = <MetricCell metric="rqi" value={numericValue} />;
        } else if (metricKey === "WRCI" && numericValue != null) {
          content = <MetricCell metric="wrci" value={numericValue} />;
        }

        return (
          <div key={key} className={cn(isLong && "sm:col-span-2")}>
            <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">{key}</dt>
            <dd
              className={cn(
                "mt-0.5 text-sm text-text",
                key === "Description" || isLong ? "font-sans leading-relaxed" : "font-mono",
              )}
            >
              {content}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export function ResultCard({ result }: ResultCardProps) {
  const intentLabel = INTENT_LABELS[result.intent] ?? result.intent;

  return (
    <article className="rounded-card border border-border bg-surface-2 p-4">
      <header className="mb-3 space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{intentLabel}</p>
        <h3 className="text-sm font-semibold leading-snug text-text">{result.title}</h3>
        {result.match_note ? (
          <p className="text-xs text-risk-elev">{result.match_note}</p>
        ) : null}
      </header>

      <div className="space-y-3">
        {typeof result.summary === "string" ? (
          <p className="text-sm text-text-muted">{result.summary}</p>
        ) : (
          <SummaryGrid summary={result.summary} />
        )}

        {result.keyword_hits?.length ? (
          <div className="space-y-2">
            <p className="text-xs font-medium text-text-muted">Top keyword matches</p>
            <KeywordHitList hits={result.keyword_hits} />
          </div>
        ) : null}

        {result.detail_markdown ? (
          <details className="group rounded-card border border-border bg-surface">
            <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-surface-2 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="text-text-muted transition-transform group-open:rotate-90">
                  ▸
                </span>
                Show full detail
              </span>
            </summary>
            <div className="border-t border-border px-3 py-3">
              <MarkdownContent markdown={result.detail_markdown} />
            </div>
          </details>
        ) : null}

        {result.citations.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs font-medium text-text-muted">Sources</p>
            <div className="flex flex-wrap gap-2">
              {result.citations.map((citation, index) => (
                <CitationLink key={`${citation.source}-${index}`} citation={citation} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
