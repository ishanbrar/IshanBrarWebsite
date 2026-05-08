import Link from "next/link";
import type { Project } from "@/data/projects";
import { TagPill } from "@/components/TagPill";

function kindLabel(kind: Project["links"][number]["kind"]) {
  if (kind === "github") return "GitHub";
  if (kind === "demo") return "Live demo";
  return "Docs";
}

export function ProjectCard({ project }: { project: Project }) {
  const primaryLink = project.links.find((l) => l.kind === "demo") ?? project.links[0];

  return (
    <article className="group relative rounded-3xl border border-black/10 bg-background p-6 shadow-sm shadow-black/[0.02] transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/[0.06]">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Open ${project.title}`}
        className="absolute inset-0 rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight">
            <span className="relative">{project.title}</span>
          </h3>
          <p className="text-sm leading-6 text-foreground/70">
            {project.subtitle}
          </p>
        </div>
        {project.productionDate ? (
          <span className="shrink-0 rounded-full border border-black/10 px-3 py-1 text-xs text-foreground/70">
            {project.productionDate}
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="relative inline-flex items-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-foreground/90"
        >
          View case study
        </Link>
        {primaryLink ? (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noreferrer"
            className="relative text-xs font-medium text-foreground/75 hover:text-foreground"
          >
            {kindLabel(primaryLink.kind)}
          </a>
        ) : null}
      </div>
    </article>
  );
}

