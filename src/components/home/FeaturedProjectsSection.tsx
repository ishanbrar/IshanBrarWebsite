import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { Container } from "@/components/Container";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
              Featured projects
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Case studies built to show both the interface and the thinking underneath it.
            </h2>
            <p className="max-w-2xl text-pretty text-base leading-7 text-[var(--muted)]">
              Filter by category or stack and skim the strongest builds first.
              Each card links to a deeper case study with architecture notes,
              engineering decisions, and media.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-[var(--muted)] hover:text-foreground"
          >
            Open the full project index
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <ProjectsExplorer projects={featuredProjects} limit={6} />
        </Reveal>
      </Container>
    </section>
  );
}
