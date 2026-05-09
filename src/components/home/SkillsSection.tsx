import { skillClusters } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <Reveal className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
            Skills and tools
          </p>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Clustered by the kind of problems I like to solve.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {skillClusters.map((cluster, index) => (
            <Reveal key={cluster.title} delay={0.04 * index}>
              <div className="h-full rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-semibold tracking-tight text-foreground">
                      {cluster.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {cluster.blurb}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cluster.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--border)] bg-[var(--panel-2)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
