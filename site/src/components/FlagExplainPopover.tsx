import type { RiskExplainResult } from "@/lib/flagExplain";
import { RISK_LABELS } from "@/config";
import { cn } from "@/lib/utils";

interface FlagExplainContentProps {
  explain: RiskExplainResult;
  className?: string;
}

export function FlagExplainContent({ explain, className }: FlagExplainContentProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div>
        <p className="font-mono text-xs font-semibold text-accent">{explain.depthLabel}</p>
        <p className="mt-0.5 text-sm font-semibold text-text">
          {RISK_LABELS[explain.riskClass]}
        </p>
      </div>
      <p className="text-xs leading-relaxed text-text-muted">{explain.ruleSummary}</p>
      {explain.owcSuppressedHigh ? (
        <p className="rounded border border-risk-elev/40 bg-risk-elev/10 px-2 py-1 text-xs text-risk-elev">
          High risk suppressed: RES_DEEP &gt; 30 Ω·m rule caps classification at Elevated.
        </p>
      ) : null}
      <ul className="list-disc space-y-1 pl-4 text-xs text-text">
        {explain.flagLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {explain.isolated ? (
        <p className="text-xs font-medium text-emerald-400">Mechanically isolated at this depth.</p>
      ) : null}
    </div>
  );
}
