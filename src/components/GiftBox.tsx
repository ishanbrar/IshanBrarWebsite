"use client";

import type { Gift } from "@/data/gifts";
import { ProjectIcon } from "@/components/ProjectIcon";

type GiftBoxProps = {
  gift: Gift;
  onOpen: (gift: Gift) => void;
};

export function GiftBox({ gift, onOpen }: GiftBoxProps) {
  const dim = Math.round(44 * gift.size);

  return (
    <button
      type="button"
      onClick={() => onOpen(gift)}
      className="gift-box group shrink-0 cursor-pointer rounded-2xl border-0 p-0 shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      style={{
        width: dim,
        height: dim,
        backgroundColor: gift.color,
        color: gift.iconColor,
      }}
      aria-label={`Open ${gift.title}`}
    >
      <span className="flex h-full w-full items-center justify-center">
        <ProjectIcon
          icon={gift.icon}
          className="transition-transform duration-300 group-hover:scale-110"
          style={{ width: dim * 0.42, height: dim * 0.42 }}
        />
      </span>
    </button>
  );
}
