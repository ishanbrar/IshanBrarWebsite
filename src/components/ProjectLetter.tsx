"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Gift, GiftLink } from "@/data/gifts";
import { StackIcons } from "@/components/StackIcons";

type ProjectLetterProps = {
  gift: Gift | null;
  onClose: () => void;
};

function visitLabel(link: GiftLink) {
  if (link.type === "github") return "View on GitHub";
  if (link.type === "site") return link.label ?? "Visit site";
  return null;
}

export function ProjectLetter({ gift, onClose }: ProjectLetterProps) {
  const visitHref =
    gift?.link.type === "site" || gift?.link.type === "github" ? gift.link.url : null;
  const visitText = gift ? visitLabel(gift.link) : null;

  return (
    <AnimatePresence>
      {gift ? (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-black/25 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-label="Close letter"
          />
          <motion.div
            role="dialog"
            aria-modal
            aria-labelledby="letter-title"
            className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[min(94vw,46rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            <div className="letter-card relative overflow-hidden rounded-sm bg-[#fffaf4] px-6 py-8 text-[#3a2f28] shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10">
              <motion.div
                className="pointer-events-none absolute inset-x-6 top-0 h-1 bg-gradient-to-r from-transparent via-[#d91414]/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              />
              <h2 id="letter-title" className="text-center font-serif text-2xl text-[#2a211c]">
                {gift.title}
              </h2>
              <motion.p
                className="mx-auto mt-4 max-w-2xl text-center font-serif text-[1rem] leading-relaxed text-[#4a3f38] sm:text-[1.05rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {gift.summary}
              </motion.p>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                  {gift.screenshot ? (
                    <Image
                      src={gift.screenshot.src}
                      alt={gift.screenshot.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 90vw, 720px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[#9a8475]">
                      Screenshot coming soon.
                    </div>
                  )}
                </div>
              </motion.div>
              <motion.div
                className="mt-5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
              >
                <StackIcons tech={gift.stack} />
              </motion.div>
              <motion.div
                className="mt-7 flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                {visitHref && visitText ? (
                  <a
                    href={visitHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#d91414]/30 bg-[#d91414] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#b81010]"
                  >
                    {visitText}
                  </a>
                ) : (
                  <p className="text-sm text-[#9a8475]">Link coming soon</p>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm text-[#9a8475] underline-offset-4 hover:text-[#4a3f38] hover:underline"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
