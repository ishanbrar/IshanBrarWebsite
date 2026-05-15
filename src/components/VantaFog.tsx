"use client";

import { useEffect, useRef } from "react";

export function VantaFog() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | null = null;
    let cancelled = false;

    async function init() {
      const THREE = await import("three");
      const vantaModule = await import("vanta/dist/vanta.fog.min");
      if (cancelled || !hostRef.current) return;

      const VANTA = vantaModule.default as (opts: Record<string, unknown>) => {
        destroy: () => void;
      };

      effect = VANTA({
        el: hostRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0xe1dad2,
        midtoneColor: 0xeb9113,
        lowlightColor: 0xd91414,
      });
    }

    void init();

    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, []);

  return (
    <div ref={hostRef} className="pointer-events-none fixed inset-0 -z-10" aria-hidden />
  );
}
