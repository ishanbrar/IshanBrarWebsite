import quotesData from "./quotes.json";

export type Quote = {
  text: string;
  author: string;
};

export const quotes: Quote[] = quotesData;

/** Fix missing spaces after punctuation and typos from source transcripts. */
export function normalizeQuoteText(text: string): string {
  return text
    .replace(/\bpermament\b/gi, "permanent")
    .replace(/\bHe who as no\b/gi, "He who has no")
    .replace(/([.!?])([A-Za-z])/g, "$1 $2")
    .replace(/,([A-Za-z])/g, ", $1")
    .replace(/\s+/g, " ")
    .trim();
}

export function pickRandomQuote(): Quote {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]!;
  return { ...quote, text: normalizeQuoteText(quote.text) };
}
