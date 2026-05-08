import { timelineEntries } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <Reveal className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
            Timeline / build log
          </p>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            A quick read on how the work has evolved.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[1.1rem] top-0 hidden h-full w-px bg-[var(--border)] md:block" />
          <div className="grid gap-5">
            {timelineEntries.map((entry, index) => (
              <Reveal key={`${entry.year}-${entry.title}`} delay={0.04 * index}>
                <article className="grid gap-4 rounded-[30px] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] md:grid-cols-[120px_minmax(0,1fr)] md:items-start md:pl-10">
                  <div className="relative md:pl-4">
                    <span className="hidden h-4 w-4 rounded-full border border-[var(--border)] bg-[var(--brand)] shadow-[0_0_0_8px_rgba(255,47,85,0.12)] md:absolute md:-left-[1.85rem] md:top-1 md:block" />
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted-2)]">
                      {entry.year}
                    </p>
                    <p className="mt-2 text-xs text-[var(--muted)]">{entry.project}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {entry.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                      {entry.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
