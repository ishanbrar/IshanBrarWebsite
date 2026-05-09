import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ProjectLinks } from "@/components/ProjectLinks";
import { TagPill } from "@/components/TagPill";
import { Reveal } from "@/components/motion/Reveal";
import { featuredProjects, getProject } from "@/data/projects";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-6xl space-y-10">
          <Reveal className="space-y-8">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--muted)] hover:bg-[var(--panel-2)] hover:text-foreground"
            >
              Back to projects
            </Link>

            <header className="overflow-hidden rounded-[34px] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)]">
              <div className="space-y-8 p-8 sm:p-10 lg:p-12">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                  {project.status ? <TagPill>{project.status}</TagPill> : null}
                  {project.category ? <TagPill>{project.category}</TagPill> : null}
                </div>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
                  <div className="space-y-4">
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                      Case study
                    </p>
                    <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                      {project.title}
                    </h1>
                    <p className="max-w-3xl text-pretty text-lg leading-8 text-[var(--muted)]">
                      {project.subtitle}
                    </p>
                  </div>

                  <dl className="grid gap-4 rounded-[28px] border border-[var(--border)] bg-[var(--panel-2)] p-5 text-sm">
                    <div>
                      <dt className="text-[var(--muted-2)]">Production date</dt>
                      <dd className="mt-1 text-foreground">
                        {project.productionDate ?? "Not set"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[var(--muted-2)]">Role</dt>
                      <dd className="mt-1 text-foreground">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--muted-2)]">Outcome</dt>
                      <dd className="mt-1 text-foreground">
                        {project.caseStudy.outcomes[0] ?? project.status ?? "Active build"}
                      </dd>
                    </div>
                  </dl>
                </div>

                <ProjectLinks links={project.links} />
              </div>
            </header>
          </Reveal>

          <section className="grid gap-5 lg:grid-cols-2">
            <Reveal delay={0.04}>
              <div className="h-full rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                  Problem / purpose
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  {project.caseStudy.problem}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                  Why I built it
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  {project.caseStudy.whyBuilt}
                </p>
              </div>
            </Reveal>
          </section>

          <Reveal delay={0.12}>
            <section className="rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                    Technical architecture
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    The system behind the surface.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                  {project.purpose}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {project.caseStudy.architecture.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[var(--border)] bg-[var(--panel-2)] p-5"
                  >
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <section className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
            <Reveal delay={0.16}>
              <div className="rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                  Most interesting engineering decision
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {project.caseStudy.interestingDecision.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {project.caseStudy.interestingDecision.summary}
                </p>
                <div className="mt-5 grid gap-3">
                  {project.caseStudy.interestingDecision.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] px-4 py-4 text-sm leading-6 text-[var(--muted)]"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                  Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--panel-2)] px-3 py-2 text-xs font-medium text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                  Outcomes
                </p>
                <div className="mt-4 grid gap-3">
                  {project.caseStudy.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] px-4 py-4 text-sm leading-6 text-[var(--muted)]"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <Reveal delay={0.24}>
            <section className="rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                Key features
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4 text-sm leading-6 text-[var(--muted)]"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.28}>
            <section className="rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                Lessons learned
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {project.caseStudy.lessons.map((lesson) => (
                  <div
                    key={lesson}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4 text-sm leading-6 text-[var(--muted)]"
                  >
                    {lesson}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <section className="space-y-5">
            <Reveal delay={0.32}>
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                  Media
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Screens, demos, and supporting visuals
                </h2>
              </div>
            </Reveal>

            {project.videos && project.videos.length > 0 ? (
              <div className="grid gap-4">
                {project.videos.map((video, index) => (
                  <Reveal key={video.src} delay={0.34 + index * 0.04}>
                    <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)]">
                      <video controls preload="metadata" className="h-full w-full">
                        <source src={video.src} />
                      </video>
                      <div className="border-t border-[var(--border)] p-4 text-xs text-[var(--muted)]">
                        {video.title}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}

            <div className="grid gap-4 md:grid-cols-2">
              {project.screenshots.map((screenshot, index) => (
                <Reveal key={screenshot.src} delay={0.36 + index * 0.04}>
                  <figure className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)]">
                    <div className="group relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className={cn(
                          "transition duration-500 group-hover:scale-[1.02]",
                          screenshot.fit === "contain"
                            ? "object-contain p-8"
                            : "object-cover",
                        )}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    {screenshot.caption ? (
                      <figcaption className="border-t border-[var(--border)] px-4 py-3 text-xs leading-6 text-[var(--muted)]">
                        {screenshot.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
