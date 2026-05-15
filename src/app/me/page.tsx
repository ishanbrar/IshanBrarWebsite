import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Me",
  description: "About Ishan Singh Brar.",
};

export default function MePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-2xl flex-col items-center px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="mb-8 text-sm text-[#6b5d52] underline-offset-4 hover:text-[#2a211c] hover:underline"
      >
        ← Home
      </Link>
      <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:h-52 sm:w-52">
        <Image
          src="/me/headshot.png"
          alt="Ishan Singh Brar"
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 176px, 208px"
          priority
        />
      </div>
      <h1 className="mt-10 text-center font-[family-name:var(--font-serif)] text-3xl text-[#2a211c] sm:text-4xl">
        Ishan Singh Brar
      </h1>

      <div className="mt-12 space-y-8 font-serif text-[1.05rem] leading-relaxed text-[#4a3f38]">
        <section>
          <h2 className="sr-only">Who I am</h2>
          <p>
            I am a builder who splits time between SwiftUI apps, thoughtful web experiences, and
            the quiet engineering that makes both feel trustworthy. I study computer science at UT
            Dallas and treat every project—whether a family tree, a gurdwara site, or a map of
            demographic stories—as a chance to practice craft with empathy. I care about interfaces
            that feel calm under pressure and products that respect the people using them.
          </p>
        </section>

        <section>
          <h2 className="sr-only">My goals</h2>
          <p>
            My goal is to keep shipping work that is both technically sound and emotionally clear:
            tools families actually open, communities proud to share, and experiments that teach me
            something new. I want to deepen my skills across mobile, web, and data-heavy products
            while staying close to the why behind each build. Long term, I am aiming for roles and
            collaborations where I can own the full arc—from first sketch to deployed product—and
            keep raising the bar on taste, performance, and accessibility.
          </p>
        </section>

        <section>
          <h2 className="sr-only">What motivates me</h2>
          <p>
            I am motivated by heritage, competition, and curiosity in equal measure. Language apps,
            trivia duels, and crossword rituals scratch the itch to grow and play; LegaTree and
            community sites ground me in people who matter; mapping projects feed a fascination with
            how places shape identity. When a cousin texts that the family tree finally makes sense,
            or a friend keeps returning to a daily puzzle, that is the signal I build for—not
            résumé lines, but moments that feel useful and alive.
          </p>
        </section>
      </div>
    </main>
  );
}
