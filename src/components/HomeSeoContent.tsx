import Link from "next/link";
import { personName, personShortName } from "@/lib/seo";

/** Crawlable name + project text for search engines (visually subtle). */
export function HomeSeoContent() {
  return (
    <section
      className="pointer-events-none absolute left-0 right-0 top-4 z-20 mx-auto max-w-lg px-6 text-center"
      aria-label="About this site"
    >
      <h1 className="text-sm font-medium tracking-wide text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] sm:text-base">
        {personName}
      </h1>
      <p className="mt-1 text-xs leading-relaxed text-white/75 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:text-sm">
        Portfolio of projects by {personShortName} — LegaTree, WikiMe, EthnoMapper,
        Punjabi Tutor, and more.{" "}
        <Link
          href="/me"
          className="pointer-events-auto underline underline-offset-2 hover:text-white"
        >
          About {personShortName}
        </Link>
      </p>
    </section>
  );
}
