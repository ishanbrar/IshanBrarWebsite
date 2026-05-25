import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  personJsonLd,
  personName,
  personShortName,
  siteDescription,
} from "@/lib/seo";
import { siteUrl } from "@/lib/site";

const meUrl = `${siteUrl}/me`;

export const metadata: Metadata = {
  title: `About ${personShortName}`,
  description: siteDescription,
  alternates: { canonical: meUrl },
  openGraph: {
    title: `${personName} — Bio`,
    description: siteDescription,
    url: meUrl,
  },
};

export default function MePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-2xl flex-col items-center px-6 py-12 sm:py-16">
      <JsonLd data={personJsonLd({ pageUrl: meUrl })} />
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
        {personName}
      </h1>

      <div className="mt-12 space-y-8 font-serif text-[1.05rem] leading-relaxed text-[#4a3f38]">
        <p>
          TL;DR: I build stuff with AI that I never would have had the patience to do the right way.
          Thank God for that, because I&apos;ve always been more of an ideator than a bot.
        </p>

        <p>
          B.S. Computer Science, CISSP, and cybersec experience at two industry leading consulting
          firms. More importantly, I am a 5 handicap golfer (not joking), pan-sport athlete, and
          prideful student of history.
        </p>

        <p>
          My motivations may be easy to guess given my portfolio of work. One thing I&apos;d like to
          point out: this is only the work that the clanker&apos;s dumb policies ALLOWED me to
          create. There is much better stuff in the pipeline!
        </p>

        <p>
          If you really need to know more about me, you can find my WikiMe article{" "}
          <a
            href="https://wikime.online/ishanbrar"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-[#2a211c]"
          >
            here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
