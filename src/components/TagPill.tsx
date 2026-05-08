import { cn } from "@/lib/cn";

export function TagPill({
  children,
  active,
}: {
  children: string;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        active
          ? "border-[var(--border-2)] bg-[var(--panel-2)] text-foreground"
          : "border-[var(--border)] bg-[var(--panel)] text-[var(--muted)]",
      )}
    >
      {children}
    </span>
  );
}
