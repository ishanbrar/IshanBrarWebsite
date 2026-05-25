import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Gurmukhi, Oswald } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { buildSiteMetadata, personJsonLd, personName, websiteJsonLd } from "@/lib/seo";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const gurmukhi = Noto_Sans_Gurmukhi({
  subsets: ["gurmukhi"],
  weight: ["500", "700"],
  variable: "--font-gurmukhi",
});

/** Bold condensed sans — classic ESPN Bottom Line feel */
const espn = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-espn",
});

export const metadata: Metadata = buildSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${gurmukhi.variable} ${espn.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-[#3a2f28]">
        <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
        <div className="flex-1">{children}</div>
        <footer className="relative z-30 border-t border-white/20 bg-white/25 px-4 py-5 text-center backdrop-blur-md">
          <p className="text-xs tracking-wide text-[#6b5d52]">
            © {new Date().getFullYear()} {personName}
          </p>
          <p className="mt-1 text-xs text-[#6b5d52]">
            <Link href="/me" className="underline-offset-2 hover:text-[#2a211c] hover:underline">
              About Ishan Brar
            </Link>
            {" · "}
            <a
              href="https://github.com/ishanbrar"
              className="underline-offset-2 hover:text-[#2a211c] hover:underline"
              rel="me noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
