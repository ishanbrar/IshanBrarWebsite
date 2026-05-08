import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Container } from "@/components/Container";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Ishan Brar",
    template: "%s · Ishan Brar",
  },
  description: "Portfolio showcasing projects, apps, and engineering work by Ishan Brar.",
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
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground selection:bg-white/15 selection:text-white">
        <ThemeProvider>
          <MotionProvider>
            <Nav />
            <div className="flex-1">{children}</div>
            <footer className="border-t border-[var(--border)] py-12">
              <Container className="flex flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Ishan Brar</p>
                <p className="flex gap-4">
                  <a
                    href="https://github.com/ishanbrar"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground"
                  >
                    GitHub
                  </a>
                </p>
              </Container>
            </footer>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
