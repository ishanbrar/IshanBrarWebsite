import type { Metadata } from "next";
import { GiftField } from "@/components/GiftField";
import { HomeSeoContent } from "@/components/HomeSeoContent";
import { QuoteTicker } from "@/components/QuoteTicker";
import { VantaFog } from "@/components/VantaFog";
import { siteDescription, siteTitle } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <main className="relative">
      <VantaFog />
      <HomeSeoContent />
      <GiftField />
      <QuoteTicker />
    </main>
  );
}
