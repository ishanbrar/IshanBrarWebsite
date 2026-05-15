"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/me", label: "Me" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative z-30 border-b border-white/20 bg-white/30 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-center gap-8 px-6 py-4 text-sm font-medium tracking-wide text-[#3a2f28]">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                active
                  ? "text-[#2a211c] underline decoration-[#d91414] decoration-2 underline-offset-8"
                  : "text-[#5c4f45] hover:text-[#2a211c]"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
