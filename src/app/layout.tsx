import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Gurmukhi, Oswald } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

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

export const metadata: Metadata = {
  title: {
    default: "Ishan Singh Brar",
    template: "%s · Ishan Singh Brar",
  },
  description: "A minimalist portfolio of projects by Ishan Singh Brar.",
  metadataBase: new URL(siteUrl),
};

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
        <div className="flex-1">{children}</div>
        <footer className="relative z-30 border-t border-white/20 bg-white/25 py-5 text-center text-xs tracking-wide text-[#6b5d52] backdrop-blur-md">
          <p>© {new Date().getFullYear()} Ishan Singh Brar</p>
        </footer>
      </body>
    </html>
  );
}
