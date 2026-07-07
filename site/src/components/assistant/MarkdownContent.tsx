import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h3 className="mb-2 mt-4 text-base font-semibold text-text first:mt-0">{children}</h3>
  ),
  h2: ({ children }) => (
    <h4 className="mb-2 mt-3 text-sm font-semibold text-text">{children}</h4>
  ),
  h3: ({ children }) => (
    <h5 className="mb-1 mt-3 text-sm font-medium text-text">{children}</h5>
  ),
  p: ({ children }) => <p className="mb-2 text-sm leading-relaxed text-text-muted">{children}</p>,
  ul: ({ children }) => (
    <ul className="mb-2 list-disc space-y-1 pl-5 text-sm text-text-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-2 list-decimal space-y-1 pl-5 text-sm text-text-muted">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-text">{children}</strong>,
  code: ({ children }) => (
    <code className="rounded bg-surface px-1 py-0.5 font-mono text-xs text-accent">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="mb-2 overflow-x-auto rounded-card border border-border bg-bg p-3 font-mono text-xs text-text-muted">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="mb-3 overflow-x-auto rounded-card border border-border">
      <table className="w-full min-w-[20rem] text-left text-xs">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-surface-2 text-text">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-border">{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => (
    <th className="px-2 py-1.5 font-medium text-text-muted">{children}</th>
  ),
  td: ({ children }) => <td className="px-2 py-1.5 text-text">{children}</td>,
  hr: () => <hr className="my-3 border-border" />,
  blockquote: ({ children }) => (
    <blockquote className="mb-2 border-l-2 border-accent/40 pl-3 text-sm italic text-text-muted">
      {children}
    </blockquote>
  ),
};

interface MarkdownContentProps {
  markdown: string;
  className?: string;
}

export function MarkdownContent({ markdown, className }: MarkdownContentProps) {
  return (
    <div className={className}>
      <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
    </div>
  );
}
