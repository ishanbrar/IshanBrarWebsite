import Link from "next/link";
import { personName, personShortName } from "@/lib/seo";

/** Crawlable name + project text for search engines (not shown on screen). */
export function HomeSeoContent() {
  return (
    <section className="sr-only" aria-label="About this site">
      <h1>Ishan Brar: A Portfolio</h1>
      <p>
        Congratulations, you are now breathing manually. This is the portfolio website of{" "}
        {personName}, also known as {personShortName}.{" "}
        <Link href="/me">About {personShortName}</Link>
      </p>
    </section>
  );
}
