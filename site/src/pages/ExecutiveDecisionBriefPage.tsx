import { Link } from "react-router-dom";
import { DecisionBriefPanel } from "@/components/executive/DecisionBriefPanel";
import { useDecisionBrief } from "@/hooks/useDecisionBrief";
import { useScrollRestore } from "@/hooks/usePageState";

export function ExecutiveDecisionBriefPage() {
  useScrollRestore("/executive-summary");
  const { brief, loading, error } = useDecisionBrief();

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          JENA 31 dual lateral
        </p>
        <h1 className="text-xl font-semibold text-text sm:text-2xl">Executive Summary</h1>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Decision brief — drill acceptability, lateral similarity, and WSO shortlist from
          exported cuttings and inter-well statistics. For trajectory and analog tracks, see{" "}
          <Link to="/" className="text-accent hover:underline">
            Portfolio
          </Link>
          .
        </p>
      </header>

      {loading ? (
        <p className="text-sm text-text-muted">Loading decision brief…</p>
      ) : error ? (
        <p className="text-sm text-risk-high">Unable to load decision brief: {error}</p>
      ) : brief ? (
        <DecisionBriefPanel brief={brief} />
      ) : null}
    </div>
  );
}
