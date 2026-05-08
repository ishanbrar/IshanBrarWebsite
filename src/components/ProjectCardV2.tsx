"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { TagPill } from "@/components/TagPill";
import { cn } from "@/lib/cn";

function topMedia(project: Project) {
  return project.screenshots[0] ?? null;
}

function linkLabel(kind: Project["links"][number]["kind"]) {
  if (kind === "demo") return "Live demo";
  if (kind === "github") return "GitHub";
  return "Docs";
}

export function ProjectCardV2({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const reduced = useReducedMotion();
  const media = topMedia(project);
  const primaryLink = project.links.find((link) => link.kind === "demo");
  const repoLink = project.links.find((link) => link.kind === "github");

  return (
    <m.article
      layout
      initial={false}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)]"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        aria-label={`Open ${project.title}`}
      />

      <div className="relative h-[260px] w-full overflow-hidden">
        {media ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            className={cn(
              "opacity-[0.92] transition duration-700 group-hover:scale-[1.03]",
              media.fit === "contain" ? "object-contain p-8" : "object-cover",
            )}
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-end bg-[radial-gradient(circle_at_top_left,rgba(255,47,85,0.28),transparent_40%),radial-gradient(circle_at_right,rgba(52,211,153,0.22),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
            <span className="text-xl font-semibold tracking-tight text-white/90">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(7,8,10,0.95)] via-[color:rgba(7,8,10,0.28)] to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          {project.status ? (
            <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              {project.status}
            </span>
          ) : null}
          {project.category ? (
            <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              {project.category}
            </span>
          ) : null}
        </div>
      </div>

      <div className="relative z-0 space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-[var(--muted)]">
              {project.subtitle}
            </p>
          </div>
          {project.productionDate ? (
            <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-xs text-[var(--muted)]">
              {project.productionDate}
            </span>
          ) : null}
        </div>

        <p className="text-sm leading-7 text-[var(--muted)]">{project.purpose}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 6).map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--muted-2)]">
          <span className="font-medium text-[var(--muted)]">Stack</span>
          <span>·</span>
          <span className="line-clamp-1">{project.stack.slice(0, 4).join(" · ")}</span>
        </div>

        <div className="relative z-20 flex flex-wrap items-center gap-3 pt-1 text-xs font-medium">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-background hover:bg-white"
          >
            View case study
          </Link>
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-[var(--muted)] hover:bg-[var(--panel-2)] hover:text-foreground"
            >
              {linkLabel(primaryLink.kind)}
            </a>
          ) : null}
          {!primaryLink && repoLink ? (
            <a
              href={repoLink.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-[var(--muted)] hover:bg-[var(--panel-2)] hover:text-foreground"
            >
              {linkLabel(repoLink.kind)}
            </a>
          ) : null}
        </div>
      </div>
    </m.article>
  );
}
