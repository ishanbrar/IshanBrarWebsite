"use client";

import { useState } from "react";
import { gifts, type Gift } from "@/data/gifts";
import { GiftBox } from "@/components/GiftBox";
import { ProjectLetter } from "@/components/ProjectLetter";
import { CenterUserIcon } from "@/components/CenterUserIcon";

const WHEEL_RADIUS_PERCENT = 42;

function wheelPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    left: `${50 + WHEEL_RADIUS_PERCENT * Math.cos(angle)}%`,
    top: `${50 + WHEEL_RADIUS_PERCENT * Math.sin(angle)}%`,
  };
}

export function GiftField() {
  const [openGift, setOpenGift] = useState<Gift | null>(null);

  return (
    <>
      <section
        className="flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center overflow-hidden px-4 pb-12 pt-4"
        aria-label="Projects"
      >
        <div className="relative aspect-square w-[min(88vw,22rem)] max-w-full sm:w-[min(78vw,24rem)]">
          <CenterUserIcon />
          {gifts.map((gift, index) => (
            <div
              key={gift.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={wheelPosition(index, gifts.length)}
            >
              <GiftBox gift={gift} onOpen={setOpenGift} />
            </div>
          ))}
        </div>
      </section>
      <ProjectLetter gift={openGift} onClose={() => setOpenGift(null)} />
    </>
  );
}
