"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";

export function RotatingWord({ words }: { words: string[] }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || words.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % words.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [reduced, words]);

  const word = words[index] ?? words[0] ?? "products";

  if (reduced) {
    return <span className="text-[var(--brand-2)]">{word}</span>;
  }

  return (
    <span className="relative inline-grid min-w-[12ch] align-baseline text-left text-[var(--brand-2)]">
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={word}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1"
        >
          {word}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
