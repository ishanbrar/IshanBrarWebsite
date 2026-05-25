import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const personName = "Ishan Singh Brar";
export const personShortName = "Ishan Brar";

export const siteTitle = `${personName} — Portfolio`;
export const siteDescription =
  "Ishan Singh Brar (Ishan Brar) — B.S. Computer Science, CISSP, builder of LegaTree, WikiMe, EthnoMapper, and other apps. Portfolio and bio.";

export const githubUrl = "https://github.com/ishanbrar";

export function personJsonLd(options?: { pageUrl?: string }) {
  const url = options?.pageUrl ?? siteUrl;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personName,
    alternateName: personShortName,
    url,
    description: siteDescription,
    jobTitle: "Software Engineer",
    sameAs: [githubUrl, siteUrl],
    knowsAbout: [
      "Software engineering",
      "Computer science",
      "Cybersecurity",
      "Web development",
      "Mobile development",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: personName,
    alternateName: personShortName,
    url: siteUrl,
    description: siteDescription,
    author: { "@type": "Person", name: personName, url: siteUrl },
  };
}

/** Favicon + Open Graph / share preview (animated GIF). */
export const brandImagePath = "/icons/user.gif";

export function buildSiteMetadata(overrides?: Metadata): Metadata {
  const verification = process.env.GOOGLE_SITE_VERIFICATION;
  const ogImage = `${siteUrl}${brandImagePath}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteTitle,
      template: `%s · ${personName}`,
    },
    description: siteDescription,
    keywords: [
      personName,
      personShortName,
      "Ishan Brar portfolio",
      "Ishan Singh Brar",
      "Ishan Brar developer",
      "Ishan Brar projects",
    ],
    authors: [{ name: personName, url: siteUrl }],
    creator: personName,
    robots: { index: true, follow: true },
    alternates: { canonical: siteUrl },
    icons: {
      icon: [{ url: brandImagePath, type: "image/gif" }],
      shortcut: [brandImagePath],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: personName,
      title: siteTitle,
      description: siteDescription,
      images: [{ url: ogImage, type: "image/gif", alt: personName }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [ogImage],
    },
    ...(verification
      ? { verification: { google: verification } }
      : {}),
    ...overrides,
  };
}
