import { useState, type ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  to: string;
  label: string;
  disabled?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Portfolio" },
  { to: "/well/JENA31DW1", label: "Well Detail", disabled: true },
  { to: "/water-risk", label: "Water Risk", disabled: true },
  { to: "/compare", label: "Compare", disabled: true },
  { to: "/methodology", label: "Methodology", disabled: true },
];

interface AppShellProps {
  children?: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-bg">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-label="Close navigation menu"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface transition-transform duration-200 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Primary navigation"
      >
        <div className="border-b border-border px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">McKinlay</p>
          <h1 className="mt-1 text-lg font-semibold leading-tight text-text">Water Risk Review</h1>
          <p className="mt-1 text-xs text-text-muted">17 horizontal wells</p>
        </div>

        <nav className="flex-1 space-y-1 p-3" aria-label="Site sections">
          {NAV_ITEMS.map((item) =>
            item.disabled ? (
              <span
                key={item.to}
                className="flex cursor-not-allowed items-center rounded-card px-3 py-2 text-sm text-text-muted/60"
                aria-disabled="true"
                title="Coming in a future phase"
              >
                {item.label}
                <span className="ml-auto text-[10px] uppercase">Soon</span>
              </span>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center rounded-card px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-surface-2 text-accent"
                      : "text-text-muted hover:bg-surface-2 hover:text-text",
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="border-t border-border p-4 text-xs text-text-muted">
          <p>Horizontal Data Review</p>
          <p className="mt-1 font-mono">GitHub Pages</p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-border bg-bg/90 px-4 py-3 backdrop-blur sm:px-6">
          <button
            type="button"
            className="rounded-card border border-border bg-surface px-3 py-2 text-sm text-text transition-colors hover:border-accent/50 lg:hidden"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar-nav"
            onClick={() => setSidebarOpen((open) => !open)}
          >
            Menu
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-text-muted">McKinlay Member — portfolio overview</p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-text-muted">
              Dark theme
            </span>
          </div>
        </header>

        <main id="main-content" className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
}
