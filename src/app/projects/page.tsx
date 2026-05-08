import { Container } from "@/components/Container";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Reveal } from "@/components/motion/Reveal";
import { featuredProjects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Featured case studies across iOS, web, and mapping/data projects.",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{
    tag?: string | string[];
    category?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const selectedTag = Array.isArray(params.tag) ? params.tag[0] : params.tag;
  const selectedCategory = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  return (
    <main className="py-16 sm:py-20">
      <Container className="space-y-10">
        <Reveal className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
            Project index
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                A curated body of work across apps, mapping, and web systems.
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-7 text-[var(--muted)]">
                The goal here is signal over volume: projects with enough depth to
                show interface quality, architecture choices, and the kind of
                product problems I enjoy solving.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <ProjectsExplorer
            projects={featuredProjects}
            initialTag={selectedTag}
            initialCategory={selectedCategory}
          />
        </Reveal>
      </Container>
    </main>
  );
}
