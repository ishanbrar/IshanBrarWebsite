import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { heroKeywords } from "@/data/site";
import { Container } from "@/components/Container";
import { HeroProjectShowcase } from "@/components/home/HeroProjectShowcase";
import { Reveal } from "@/components/motion/Reveal";
import { RotatingWord } from "@/components/home/RotatingWord";

const showcaseProjects = [
  featuredProjects.find((project) => project.slug === "punjabitutor")!,
  featuredProjects.find((project) => project.slug === "ethnic-mapper")!,
  featuredProjects.find((project) => project.slug === "trivia")!,
  featuredProjects.find((project) => project.slug === "gssofnt")!,
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--muted-2)]">
              Portfolio 2026 · iOS · web · systems
            </p>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Building <RotatingWord words={heroKeywords} /> that feel like products,
              not just projects.
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Ishan Brar builds polished interfaces, data-heavy tools, and app
              systems that try to be memorable for the right reasons: clarity,
              behavior, and real product thinking.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-white"
            >
              View Projects
            </Link>
            <Link
              href="/#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-6 text-sm font-medium text-foreground hover:bg-[var(--panel-2)]"
            >
              About
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            {[
              "Interfaces with taste",
              "Realtime + offline aware apps",
              "Mapping and data exploration",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:pt-3">
          <HeroProjectShowcase projects={showcaseProjects} />
        </Reveal>
      </Container>
    </section>
  );
}
