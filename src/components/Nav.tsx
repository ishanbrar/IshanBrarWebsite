import Link from "next/link";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] shadow-[var(--header-shadow)] backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--header-bg)]">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-2 font-semibold tracking-tight"
        >
          <span className="relative grid h-8 w-8 place-items-center rounded-xl border border-[var(--border)] bg-[var(--panel)] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand)] shadow-[0_0_0_6px_rgba(255,47,85,0.12)]" />
          </span>
          <span className="text-foreground">Ishan Brar</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-foreground/75 hover:bg-[var(--header-hover)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/ishanbrar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-2 text-foreground/75 hover:bg-[var(--header-hover)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              GitHub
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
