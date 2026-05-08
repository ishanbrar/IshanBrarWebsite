import { aboutPrinciples, aboutStats } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
        <Reveal className="rounded-[32px] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow)] sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
            About
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            I like work where the product feel and the technical decisions both matter.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              A lot of my projects live at the intersection of interface design,
              systems thinking, and curiosity. I tend to gravitate toward builds
              where the experience needs taste and the implementation needs a real point of view.
            </p>
            <p>
              That shows up in different forms: mapping products that make dense
              data navigable, iOS apps with real sync concerns, and web work that
              feels more like a product launch than a code sample.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow)]"
              >
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.08} className="rounded-[32px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[var(--shadow)]">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
              Working principles
            </p>
            <div className="mt-5 grid gap-3">
              {aboutPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-4 py-4 text-sm leading-6 text-[var(--muted)]"
                >
                  {principle}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
