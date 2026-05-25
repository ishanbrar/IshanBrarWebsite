import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const personName = "Ishan Singh Brar";
export const personShortName = "Ishan Brar";

export const siteTitle = "Ishan Brar: A Portfolio";
export const siteDescription = "Congratulations, you are now breathing manually";

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
    name: siteTitle,
    alternateName: personShortName,
    url: siteUrl,
    description: siteDescription,
    author: { "@type": "Person", name: personName, url: siteUrl },
  };
}

/** Static icon assets work better for Google, browser tabs, and share cards. */
export const brandImagePath = "/brand-icon.png";

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
    applicationName: siteTitle,
    manifest: "/manifest.webmanifest",
    creator: personName,
    robots: { index: true, follow: true },
    alternates: { canonical: siteUrl },
    icons: {
      icon: [
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        { url: brandImagePath, type: "image/png" },
      ],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
      apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: siteTitle,
      title: siteTitle,
      description: siteDescription,
      images: [{ url: ogImage, type: "image/png", alt: personName }],
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
