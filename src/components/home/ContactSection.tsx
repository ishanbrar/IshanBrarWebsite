import Link from "next/link";
import { contactLine } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <Reveal className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted-2)]">
                Contact
              </p>
              <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Strong signal beats a long intro.
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-8 text-[var(--muted)]">
                {contactLine}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-white"
              >
                Browse case studies
              </Link>
              <a
                href="https://github.com/ishanbrar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel-2)] px-6 text-sm font-medium text-foreground hover:bg-[var(--panel-2)]"
              >
                GitHub /ishanbrar
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
