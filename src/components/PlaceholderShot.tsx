import { cn } from "@/lib/cn";

export function PlaceholderShot({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-black/[0.06] via-black/[0.02] to-black/[0.06]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background:radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.12),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.10),transparent_55%)]" />
      <div className="relative px-6 text-center">
        <p className="text-xs font-medium tracking-tight text-foreground/60">
          Screenshot placeholder
        </p>
        <p className="mt-2 text-sm font-semibold tracking-tight">{title}</p>
        <p className="mt-2 text-xs text-foreground/60">
          Drop an image at <span className="font-mono">public/projects/…</span>
        </p>
      </div>
    </div>
  );
}

