import { useCallback } from "react";
import { Link } from "react-router-dom";
import { AnalogComparisonTable } from "@/components/executive/AnalogComparisonTable";
import { Card } from "@/components/Card";
import {
  buildWsoExportJson,
  downloadWsoCsv,
  type DecisionBriefPayload,
  type JenaLateralAlias,
} from "@/lib/decisionBrief";
import { downloadTextFile } from "@/lib/download";
import { wsoCandidatesToCsv } from "@/lib/wsoCandidates";

interface DecisionBriefPanelProps {
  brief: DecisionBriefPayload;
}

function tierBadgeClass(tier: "A" | "B" | "C"): string {
  if (tier === "A") return "bg-risk-high/20 text-risk-high";
  if (tier === "B") return "bg-risk-elev/20 text-risk-elev";
  return "bg-surface-2 text-text-muted";
}

export function DecisionBriefPanel({ brief }: DecisionBriefPanelProps) {
  const downloadJson = useCallback(() => {
    downloadTextFile(
      "wso_candidates_jena.json",
      JSON.stringify(buildWsoExportJson(brief), null, 2),
      "application/json",
    );
  }, [brief]);

  const downloadLateralCsv = useCallback(
    (alias: JenaLateralAlias) => {
      downloadWsoCsv(alias, brief);
    },
    [brief],
  );

  const downloadCombinedCsv = useCallback(() => {
    const combined = [
      ...brief.wsoByLateral.JENA31,
      ...brief.wsoByLateral.JENA31DW1,
    ];
    downloadTextFile("wso_candidates_jena_dual.csv", wsoCandidatesToCsv(combined));
  }, [brief]);

  const q1 = brief.questions.find((q) => q.id === "q1");
  const q2q3 = brief.questions.filter((q) => q.id !== "q1");

  return (
    <section
      id="decision-brief"
      className="space-y-4"
      aria-labelledby="decision-brief-title"
    >
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="decision-brief-title" className="text-lg font-semibold text-text sm:text-xl">
            Decision Brief — JENA 31 Dual Lateral
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-text-muted">
            Three executive questions with auto-filled stats from exported water-risk and
            inter-well data. Advisory only — no production rates.
            {brief.generated ? ` Data generated ${brief.generated}.` : null}
          </p>
        </div>
        <Link
          to="/decision-brief/print"
          className="inline-flex shrink-0 items-center justify-center rounded-card border border-border bg-surface-2 px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-accent/40 hover:text-accent"
        >
          One-page PDF view →
        </Link>
      </header>

      {q1 ? (
        <Card title={q1.title} className="flex flex-col">
          <p className="mb-3 text-sm font-medium text-text">{q1.question}</p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-text">
            {q1.answerBullets.map((bullet) => (
              <li key={bullet.slice(0, 56)}>{bullet}</li>
            ))}
          </ul>

          <div className="mb-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Lateral verdicts
            </p>
            <ul className="grid gap-2 sm:grid-cols-3">
              {brief.lateralAssessments.map((assessment) => (
                <li
                  key={assessment.focusAlias}
                  className="rounded-card border border-border/60 bg-surface-2/40 px-3 py-2 text-xs text-text"
                >
                  <p className="font-semibold text-text">{assessment.focusDisplay}</p>
                  <p className="mt-1 text-text-muted">
                    KS → {assessment.ksAnalogAlias} · Cluster →{" "}
                    {assessment.clusterAnalogAlias}
                  </p>
                  <p className="mt-1.5 text-text">{assessment.verdict}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
              Pay vs concern — focus wells and nominated analogs
            </p>
            <AnalogComparisonTable rows={brief.analogTable} />
          </div>

          <div className="mt-auto rounded-card border border-border/60 bg-surface-2/50 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Caveats
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-text-muted">
              {q1.caveats.map((caveat) => (
                <li key={caveat.slice(0, 40)}>{caveat}</li>
              ))}
            </ul>
          </div>
        </Card>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-2">
        {q2q3.map((q) => (
          <Card key={q.id} title={q.title} className="flex flex-col">
            <p className="mb-3 text-sm font-medium text-text">{q.question}</p>
            <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-text">
              {q.answerBullets.map((bullet) => (
                <li key={bullet.slice(0, 48)}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-auto rounded-card border border-border/60 bg-surface-2/50 px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                Caveats
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-text-muted">
                {q.caveats.map((caveat) => (
                  <li key={caveat.slice(0, 40)}>{caveat}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <Card
        title="WSO candidate export"
        description="Ranked open-interval windows per lateral (Tier A/B) from water-risk JSON."
      >
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => downloadLateralCsv("JENA31")}
            className="rounded-card border border-border bg-surface-2 px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent"
          >
            CSV — JENA 31
          </button>
          <button
            type="button"
            onClick={() => downloadLateralCsv("JENA31DW1")}
            className="rounded-card border border-border bg-surface-2 px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent"
          >
            CSV — JENA 31DW1
          </button>
          <button
            type="button"
            onClick={downloadCombinedCsv}
            className="rounded-card border border-border bg-surface-2 px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent"
          >
            CSV — combined
          </button>
          <button
            type="button"
            onClick={downloadJson}
            className="rounded-card border border-accent/40 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            JSON — both laterals
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {(["JENA31", "JENA31DW1"] as const).map((alias) => {
            const top = brief.wsoByLateral[alias].slice(0, 8);
            const burden = brief.burden[alias];
            return (
              <div key={alias} className="overflow-x-auto">
                <p className="mb-2 text-sm font-semibold text-text">
                  {brief.wells[alias]?.display ?? alias}{" "}
                  <span className="font-normal text-text-muted">
                    — {burden.tierA} Tier A · {burden.tierB} Tier B
                  </span>
                </p>
                <table className="w-full min-w-[28rem] text-left text-xs">
                  <caption className="sr-only">
                    Top WSO candidates for {brief.wells[alias]?.display ?? alias}
                  </caption>
                  <thead>
                    <tr className="border-b border-border text-text-muted">
                      <th className="py-1 pr-2 font-semibold">#</th>
                      <th className="py-1 pr-2 font-semibold">Tier</th>
                      <th className="py-1 pr-2 font-semibold">MD window</th>
                      <th className="py-1 pr-2 font-semibold">WRCI</th>
                      <th className="py-1 pr-2 font-semibold">OWC</th>
                      <th className="py-1 font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {top.map((row) => (
                      <tr key={`${alias}-${row.rank}`} className="border-b border-border/50">
                        <td className="py-1.5 pr-2 font-mono tabular-nums">{row.rank}</td>
                        <td className="py-1.5 pr-2">
                          <span
                            className={`inline-flex rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${tierBadgeClass(row.tier)}`}
                          >
                            {row.tier}
                          </span>
                        </td>
                        <td className="py-1.5 pr-2 font-mono tabular-nums">{row.mdSpan}</td>
                        <td className="py-1.5 pr-2 font-mono tabular-nums">
                          {row.WRCI?.toFixed(1) ?? "—"}
                        </td>
                        <td className="py-1.5 pr-2">{row.owc_near ?? "—"}</td>
                        <td className="py-1.5 font-mono tabular-nums">
                          {row.score.toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
}
