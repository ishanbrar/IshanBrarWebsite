"use client";

import { useTheme } from "next-themes";

function Icon({ name }: { name: "sun" | "moon" | "system" }) {
  if (name === "moon") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
        />
      </svg>
    );
  }
  if (name === "sun") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16h1v3h-1V2ZM12 19h1v3h-1v-3ZM2 11h3v1H2v-1Zm17 0h3v1h-3v-1ZM4.22 19.78l2.12-2.12.7.7-2.12 2.12-.7-.7ZM16.96 7.04l2.12-2.12.7.7-2.12 2.12-.7-.7ZM19.78 19.78l-.7.7-2.12-2.12.7-.7 2.12 2.12ZM7.04 7.04l-.7.7L4.22 5.62l.7-.7 2.12 2.12Z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4V6Zm4 2h8v2H8V8Zm0 4h6v2H8v-2Z"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const effective = resolvedTheme ?? theme ?? "system";
  const label = theme ?? "system";

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-[var(--panel-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        onClick={() => {
          const next =
            theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
          setTheme(next);
        }}
        aria-label="Toggle theme"
      >
        <span className="text-foreground/80">
          {effective === "dark" ? (
            <Icon name="moon" />
          ) : effective === "light" ? (
            <Icon name="sun" />
          ) : (
            <Icon name="system" />
          )}
        </span>
        <span className="hidden sm:inline">{label}</span>
      </button>
    </div>
  );
}
