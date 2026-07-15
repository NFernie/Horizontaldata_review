# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root, or
- **`CONTEXT-MAP.md`** at the repo root if it exists — it points at one `CONTEXT.md` per context. Read each one relevant to the topic.
- **`docs/adr/`** — read ADRs that touch the area you're about to work in. In multi-context repos, also check `src/<context>/docs/adr/` for context-scoped decisions.

If any of these files don't exist, **proceed silently**. Don't flag their absence; don't suggest creating them upfront.

**For this repo, also read:**

- `QoL-Updates-2026-07-13.md` — QoL roadmap and agent workflow
- `updated-plan-2026-07-10.md` — pipeline plan (RQI v2, 23 wells)
- `New Statistical Methods.md` — Methods 1–5 canonical definitions
- `2026-07-15-summary.md` — latest agent handoff summary

## File structure

Single-context repo:

```
/
├── CONTEXT.md                    (optional — not yet created)
├── docs/adr/                     (optional)
├── QoL-Updates-2026-07-13.md
├── updated-plan-2026-07-10.md
├── New Statistical Methods.md
├── scripts/config.py             ← tunables (mirror site/src/config.ts)
└── site/src/
```

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in project docs (`New Statistical Methods.md`, `OpusPlanR1.md`). Don't drift to synonyms the glossary explicitly avoids.

## Flag ADR conflicts

If your output contradicts an existing ADR or locked stakeholder decision in `QoL-Updates-2026-07-13.md` §13, surface it explicitly rather than silently overriding.
