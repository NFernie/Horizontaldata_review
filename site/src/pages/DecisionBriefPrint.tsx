import { Link } from "react-router-dom";
import { AnalogComparisonTable } from "@/components/executive/AnalogComparisonTable";
import { useDecisionBrief } from "@/hooks/useDecisionBrief";
import { fetchJson } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface DecisionBriefContext {
  generated: string;
  interpretations: Array<{
    alias: string;
    display: string;
    td: string;
    shortcomings: string[];
    analysisWindow: string;
  }>;
}

export function DecisionBriefPrint() {
  const { brief, loading, error } = useDecisionBrief();
  const [context, setContext] = useState<DecisionBriefContext | null>(null);

  useEffect(() => {
    fetchJson<DecisionBriefContext>("data/exports/decision_brief_context.json")
      .then(setContext)
      .catch(() => setContext(null));
  }, []);

  if (error) {
    return (
      <div className="print-page mx-auto max-w-3xl p-8 text-risk-high">
        Unable to load decision brief: {error}
      </div>
    );
  }

  if (loading || !brief) {
    return (
      <div className="print-page mx-auto max-w-3xl p-8 text-text-muted">
        Loading decision brief…
      </div>
    );
  }

  return (
    <div className="print-root min-h-screen bg-bg text-text">
      <div className="print-toolbar mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/executive-summary" className="text-sm text-accent hover:underline">
          ← Executive Summary
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-card border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
        >
          Save as PDF (print)
        </button>
      </div>

      <article className="print-page mx-auto max-w-3xl px-6 pb-10 pt-2">
        <header className="border-b border-border pb-4">
          <p className="text-xs uppercase tracking-wide text-text-muted">
            McKinlay Water-Risk Review · Advisory brief
          </p>
          <h1 className="mt-1 text-2xl font-bold text-text">
            JENA 31 Dual Lateral — Executive Decision Brief
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Data generated {brief.generated ?? context?.generated ?? "—"}. Cuttings and log
            interpretation only — no production or rate data.
          </p>
        </header>

        <section className="mt-5 space-y-4">
          {brief.questions.map((q, index) => (
            <div key={q.id} className="break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-wide text-accent">
                Question {index + 1} — {q.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-text">{q.question}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text">
                {q.answerBullets.map((bullet) => (
                  <li key={bullet.slice(0, 48)}>{bullet}</li>
                ))}
              </ul>
              {q.id === "q1" ? (
                <div className="mt-3 text-[10px]">
                  <AnalogComparisonTable rows={brief.analogTable} />
                </div>
              ) : null}
              <p className="mt-2 text-xs text-text-muted">
                <span className="font-semibold">Caveats:</span> {q.caveats.join(" ")}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-6 break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wide text-accent">
            WSO shortlist (top windows)
          </h2>
          <div className="mt-2 grid gap-3 text-xs sm:grid-cols-2">
            {(["JENA31", "JENA31DW1"] as const).map((alias) => (
              <div key={alias}>
                <p className="font-semibold text-text">{brief.wells[alias]?.display ?? alias}</p>
                <ol className="mt-1 list-decimal space-y-0.5 pl-4 text-text-muted">
                  {brief.wsoByLateral[alias].slice(0, 5).map((c) => (
                    <li key={c.rank}>
                      {c.mdSpan} m — Tier {c.tier}, WRCI {c.WRCI?.toFixed(1) ?? "—"},{" "}
                      {c.owc_near ?? "no OWC flag"}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {context ? (
          <section className="mt-6 break-inside-avoid border-t border-border pt-4">
            <h2 className="text-sm font-bold uppercase tracking-wide text-accent">
              Interpretation context
            </h2>
            {context.interpretations.map((interp) => (
              <div key={interp.alias} className="mt-3">
                <p className="text-sm font-semibold text-text">
                  {interp.display} · TD {interp.td}
                </p>
                <p className="text-xs text-text-muted">{interp.analysisWindow}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-text-muted">
                  {interp.shortcomings.slice(0, 4).map((line) => (
                    <li key={line.slice(0, 40)}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : null}

        <footer className="mt-6 border-t border-border pt-3 text-[10px] text-text-muted">
          Source: site/public/data exports + output/*_Interpretation.md excerpts. WSO tiers are
          heuristic rankings for discussion — not operational instructions.
        </footer>
      </article>

      <style>{`
        @media print {
          .print-toolbar { display: none !important; }
          .print-root { background: white !important; color: #111 !important; }
          .print-page { max-width: 100% !important; padding: 0.5in !important; }
          .break-inside-avoid { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
