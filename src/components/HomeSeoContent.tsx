import Link from "next/link";
import { personName, personShortName } from "@/lib/seo";

/** Crawlable name + project text for search engines (not shown on screen). */
export function HomeSeoContent() {
  return (
    <section className="sr-only" aria-label="About this site">
      <h1>Ishan Brar: A Portfolio</h1>
      <p>
        &quot;I can show you the ropes, but you&apos;d probably start chewing on them&quot; - JJS,
        2024. This is the portfolio website of {personName}, also known as{" "}
        {personShortName}.{" "}
        <Link href="/me">About {personShortName}</Link>
      </p>
    </section>
  );
}
