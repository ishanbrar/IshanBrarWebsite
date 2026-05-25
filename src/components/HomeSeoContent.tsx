import Link from "next/link";
import { personName, personShortName } from "@/lib/seo";

/** Crawlable name + project text for search engines (not shown on screen). */
export function HomeSeoContent() {
  return (
    <section className="sr-only" aria-label="About this site">
      <h1>{personName}</h1>
      <p>
        Congratulations, you are now breathing manually. Portfolio of projects by{" "}
        {personShortName} — LegaTree, WikiMe, EthnoMapper, Punjabi Tutor, and more.{" "}
        <Link href="/me">About {personShortName}</Link>
      </p>
    </section>
  );
}
