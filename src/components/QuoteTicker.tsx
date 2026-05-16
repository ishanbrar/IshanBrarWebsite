"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { buildTickerRun, formatQuoteLine, type TickerSegment } from "@/lib/ticker";

function EmblemSpacer({ src }: { src: string }) {
  return (
    <span className="mx-1.5 inline-flex shrink-0 items-center" aria-hidden>
      <Image
        src={src}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
        unoptimized
      />
    </span>
  );
}

function TickerSegmentRow({ segment }: { segment: TickerSegment }) {
  return (
    <>
      <span className="shrink-0 whitespace-nowrap px-2 text-white">
        {formatQuoteLine(segment.quote)}
      </span>
      <EmblemSpacer src={segment.emblemSrc} />
    </>
  );
}

export function QuoteTicker() {
  const [segments, setSegments] = useState<TickerSegment[]>([]);

  useEffect(() => {
    setSegments(buildTickerRun());
  }, []);

  const tickerRows = useMemo(
    () => (segments.length > 0 ? [...segments, ...segments] : []),
    [segments],
  );

  return (
    <div
      className="quote-ticker fixed bottom-0 left-0 right-0 z-40 flex h-8 items-stretch border-t-2 border-[#cc0000] font-[family-name:var(--font-espn)] shadow-[0_-2px_12px_rgba(0,0,0,0.35)]"
      aria-live="off"
    >
      <div
        className="flex shrink-0 items-center bg-[#cc0000] px-3"
        aria-hidden
      >
        <span className="text-sm font-bold italic tracking-wide text-white">
          JAR JAR SAYS
        </span>
      </div>

      <div className="relative min-w-0 flex-1 overflow-hidden bg-black">
        {tickerRows.length > 0 ? (
          <div className="quote-ticker-track flex h-full w-max items-center">
            {tickerRows.map((segment, index) => (
              <TickerSegmentRow
                key={`${index}-${segment.quote.text.slice(0, 24)}`}
                segment={segment}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
