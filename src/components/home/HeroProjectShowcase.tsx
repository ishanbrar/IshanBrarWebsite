"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

function getShowcaseMedia(project: Project) {
  if (project.slug === "ethnic-mapper") {
    return {
      src: "/globe.svg",
      alt: "Globe illustration for Ethnic Mapper",
      fit: "contain" as const,
      className: "brightness-0 invert opacity-[0.92] p-10 sm:p-14",
      backdrop: "bg-[rgba(8,10,14,0.96)]",
    };
  }

  const shot = project.screenshots[0];
  return {
    src: shot.src,
    alt: shot.alt,
    fit: shot.fit,
    className: shot.fit === "contain" ? "p-8 sm:p-10" : "",
    backdrop: "bg-[rgba(6,8,12,0.92)]",
  };
}

export function HeroProjectShowcase({
  projects,
}: {
  projects: Project[];
}) {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduced || projects.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % projects.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [projects.length, reduced]);

  const activeProject = projects[activeIndex] ?? projects[0];
  const activeMedia = getShowcaseMedia(activeProject);

  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(8,10,14,0.92)] text-white shadow-[0_32px_100px_rgba(0,0,0,0.5)]">
      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/55">
              Featured projects
            </p>
            <p className="mt-2 text-sm text-white/72">
              A rotating look at four of the strongest builds.
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 sm:block">
            {activeIndex + 1} / {projects.length}
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={activeProject.slug}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className={cn(
                  "relative aspect-[4/5] min-h-[28rem] overflow-hidden",
                  activeMedia.backdrop,
                )}
              >
                <Image
                  src={activeMedia.src}
                  alt={activeMedia.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={cn(
                    "transition duration-700",
                    activeMedia.fit === "contain"
                      ? "object-contain"
                      : "object-cover",
                    activeMedia.className,
                  )}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="rounded-[24px] border border-white/10 bg-[rgba(7,9,14,0.76)] p-5 backdrop-blur">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/52">
                      <span>{activeProject.category}</span>
                      <span className="text-white/24">•</span>
                      <span>{activeProject.status}</span>
                      <span className="text-white/24">•</span>
                      <span>{activeProject.productionDate}</span>
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
                      {activeProject.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-white/74 sm:text-[15px]">
                      {activeProject.subtitle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/62"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href={`/projects/${activeProject.slug}`}
                        className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/92"
                      >
                        Open case study
                      </Link>
                      {activeProject.links[0] ? (
                        <a
                          href={activeProject.links[0].url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium text-white/72 hover:bg-white/10"
                        >
                          {activeProject.links[0].kind === "demo"
                            ? "View live"
                            : "Open link"}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {projects.map((project, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={project.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-[22px] border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                  selected
                    ? "border-white/16 bg-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/46">
                      {project.category}
                    </p>
                    <p className="mt-2 text-base font-semibold tracking-tight text-white">
                      {project.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/62">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="mt-1 text-xs text-white/42">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="mt-4 h-px overflow-hidden rounded-full bg-white/8">
                  <m.div
                    className="h-full bg-[var(--brand-2)]"
                    initial={false}
                    animate={{ width: selected ? "100%" : "0%" }}
                    transition={{ duration: reduced ? 0 : 0.35 }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
