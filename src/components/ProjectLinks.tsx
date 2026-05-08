import type { ProjectLink } from "@/data/projects";

const label: Record<ProjectLink["kind"], string> = {
  github: "GitHub",
  demo: "Live demo",
  docs: "Docs",
};

export function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((l) => (
        <a
          key={`${l.kind}:${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-xs font-medium text-foreground/80 hover:bg-[var(--panel-2)] hover:text-foreground"
        >
          {label[l.kind]}
        </a>
      ))}
    </div>
  );
}
