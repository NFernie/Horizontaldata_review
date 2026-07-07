import { Link } from "react-router-dom";
import type { AssistantCitation } from "@/types/assistant";

interface CitationLinkProps {
  citation: AssistantCitation;
}

export function CitationLink({ citation }: CitationLinkProps) {
  const content = (
    <span className="inline-flex max-w-full flex-col gap-0.5 rounded-card border border-border bg-bg px-2.5 py-1.5 text-left transition-colors hover:border-accent/40">
      <span className="truncate text-xs font-medium text-text">{citation.label}</span>
      <span className="truncate font-mono text-[10px] text-text-muted">{citation.source}</span>
    </span>
  );

  if (citation.route) {
    return (
      <Link to={citation.route} className="inline-block max-w-full">
        {content}
      </Link>
    );
  }

  return <div className="max-w-full">{content}</div>;
}
