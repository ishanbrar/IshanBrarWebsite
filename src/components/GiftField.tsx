"use client";

import { useState } from "react";
import { gifts, type Gift } from "@/data/gifts";
import { GiftBox } from "@/components/GiftBox";
import { ProjectLetter } from "@/components/ProjectLetter";

export function GiftField() {
  const [openGift, setOpenGift] = useState<Gift | null>(null);

  return (
    <>
      <section
        className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center px-4 py-10"
        aria-label="Projects"
      >
        <div className="flex max-w-full flex-nowrap items-end justify-center gap-3 overflow-x-auto pb-2 md:gap-4">
          {gifts.map((gift) => (
            <GiftBox key={gift.id} gift={gift} onOpen={setOpenGift} />
          ))}
        </div>
      </section>
      <ProjectLetter gift={openGift} onClose={() => setOpenGift(null)} />
    </>
  );
}
