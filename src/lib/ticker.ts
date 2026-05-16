import { quotes, type Quote, normalizeQuoteText } from "@/data/quotes";
import { mw2Emblems } from "@/data/mw2-emblems";

export type TickerSegment = {
  quote: Quote;
  emblemSrc: string;
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** One pass through every quote, each with a different emblem (shuffled). */
export function buildTickerRun(): TickerSegment[] {
  const shuffledQuotes = shuffle(quotes);
  const shuffledEmblems = shuffle(mw2Emblems);

  return shuffledQuotes.map((quote, index) => ({
    quote: {
      ...quote,
      text: normalizeQuoteText(quote.text),
    },
    emblemSrc: shuffledEmblems[index % shuffledEmblems.length]!.src,
  }));
}

export function formatQuoteLine(quote: Quote): string {
  return `"${quote.text}" — ${quote.author}`;
}
