export type GiftLink =
  | { type: "site"; url: string; label?: string }
  | { type: "placeholder" }
  | { type: "github"; url: string };

export type GiftIcon =
  | "tree"
  | "gurmukhi"
  | "map"
  | "crossword"
  | "question"
  | "book"
  | "golf"
  | "gurdwara"
  | "code"
  | "bot"
  | "chat"
  | "wiki";

export type TechId =
  | "astro"
  | "express"
  | "firebase"
  | "framer"
  | "googlegemini"
  | "mapbox"
  | "netlify"
  | "nextjs"
  | "nodedotjs"
  | "openapiinitiative"
  | "openrouter"
  | "postgresql"
  | "react"
  | "sqlite"
  | "supabase"
  | "swift"
  | "tailwindcss"
  | "telegram"
  | "typescript"
  | "vercel";

export type Gift = {
  id: string;
  title: string;
  size: number;
  color: string;
  iconColor: string;
  icon: GiftIcon;
  link: GiftLink;
  summary: string;
  stack: TechId[];
  screenshot?: {
    src: string;
    alt: string;
  };
};

/** Larger `size` = bigger tile on the wheel. Order sets position (first = top). */
export const gifts: Gift[] = [
  {
    id: "legatree",
    title: "LegaTree — Family Ancestry Platform",
    size: 1.38,
    color: "#2d6a4f",
    iconColor: "#d8f3dc",
    icon: "tree",
    link: { type: "site", url: "https://legatree.us" },
    summary:
      "A family-tree app for building shared ancestry profiles, mapping relatives, and exploring heritage in one calm place.",
    stack: ["nextjs", "typescript", "tailwindcss", "supabase", "postgresql", "vercel"],
    screenshot: {
      src: "/gift-shots/legatree.png",
      alt: "LegaTree landing page",
    },
  },
  {
    id: "wikime",
    title: "WikiMe — AI Wikipedia Pages",
    size: 1.28,
    color: "#3366cc",
    iconColor: "#ffffff",
    icon: "wiki",
    link: { type: "site", url: "https://wiki-me-iota.vercel.app" },
    summary:
      "An AI tool that turns your facts, headshot, and screenshots into an editable, shareable Wikipedia-style biography.",
    stack: ["nextjs", "typescript", "tailwindcss", "supabase", "googlegemini", "vercel"],
    screenshot: {
      src: "/gift-shots/wikime.png",
      alt: "WikiMe homepage",
    },
  },
  {
    id: "punjabitutor",
    title: "Punjabi Tutor (iOS + API)",
    size: 1.24,
    color: "#c45c00",
    iconColor: "#fff3e0",
    icon: "gurmukhi",
    link: { type: "placeholder" },
    summary:
      "An iOS Punjabi-learning app with structured lessons, flashcards, offline progress sync, and a curriculum API.",
    stack: ["swift", "sqlite", "nodedotjs", "express", "openapiinitiative"],
  },
  {
    id: "ethnic-mapper",
    title: "EthnoMapper — Demographic Map",
    size: 1.12,
    color: "#1d6ea5",
    iconColor: "#e3f2fd",
    icon: "map",
    link: { type: "site", url: "https://ethnic-mapper.vercel.app" },
    summary:
      "A live demographic map for exploring clustered ethnic groups, regional context, and comparison tables without spreadsheet pain.",
    stack: ["react", "typescript", "mapbox", "vercel"],
    screenshot: {
      src: "/gift-shots/ethnic-mapper.png",
      alt: "EthnoMapper map view",
    },
  },
  {
    id: "mymini",
    title: "NYT-Style Mini Crossword (MyMini)",
    size: 1.0,
    color: "#3d405b",
    iconColor: "#f8f9fa",
    icon: "crossword",
    link: { type: "site", url: "https://mymini-sikhomode.vercel.app/login" },
    summary:
      "A daily mini-crossword app with accounts, puzzle browsing, keyboard-first solving, timers, and leaderboard tracking.",
    stack: ["nextjs", "typescript", "tailwindcss", "supabase", "postgresql", "vercel"],
    screenshot: {
      src: "/gift-shots/mymini.png",
      alt: "MyMini login page",
    },
  },
  {
    id: "trivia",
    title: "Trivia Duel (iOS)",
    size: 0.92,
    color: "#7b2cbf",
    iconColor: "#f3e8ff",
    icon: "question",
    link: { type: "github", url: "https://github.com/ishanbrar" },
    summary:
      "A realtime head-to-head trivia game with matchmaking, fair scoring, and live match state syncing.",
    stack: ["swift", "supabase", "postgresql"],
  },
  {
    id: "cornerapp",
    title: "Corner — Fact Pack Reader (iOS)",
    size: 0.86,
    color: "#e76f51",
    iconColor: "#fff5f2",
    icon: "book",
    link: { type: "github", url: "https://github.com/ishanbrar/CornerApp" },
    summary:
      "An iOS fact-pack reader built around swiping, reactions, comments, profiles, and stats that feel product-grade.",
    stack: ["swift", "firebase"],
  },
  {
    id: "pga",
    title: "DFW Punjabi Golf Club Website",
    size: 0.8,
    color: "#386641",
    iconColor: "#eaf4e9",
    icon: "golf",
    link: { type: "site", url: "https://pga-alpha.vercel.app" },
    summary:
      "A client site for the DFW Punjabi Golf Club with polished community pages, schedules, galleries, and future admin hooks.",
    stack: ["react", "typescript", "framer", "vercel"],
    screenshot: {
      src: "/gift-shots/pga.png",
      alt: "DFW Punjabi Golf Club homepage",
    },
  },
  {
    id: "gssofnt",
    title: "Gurdwara Singh Sabha of North Texas Website",
    size: 0.74,
    color: "#9a6b1a",
    iconColor: "#fff9e8",
    icon: "gurdwara",
    link: { type: "site", url: "https://gss-of-nt.vercel.app" },
    summary:
      "A calm gurdwara website that makes prayer times, announcements, location details, and community information easy to find.",
    stack: ["astro", "tailwindcss", "vercel"],
    screenshot: {
      src: "/gift-shots/gssofnt.png",
      alt: "Gurdwara Singh Sabha homepage",
    },
  },
  {
    id: "dfwss2",
    title: "Astro Citrus Blog (DFWSS2)",
    size: 0.68,
    color: "#5c4d7a",
    iconColor: "#f0ecf7",
    icon: "code",
    link: { type: "github", url: "https://github.com/ishanbrar/DFWSS2" },
    summary:
      "A redesigned Astro Citrus demo focused on typography, article layout, docs, and responsive reading.",
    stack: ["astro", "tailwindcss", "netlify"],
    screenshot: {
      src: "/gift-shots/dfwss2.png",
      alt: "Astro Citrus homepage",
    },
  },
  {
    id: "bot-tutor",
    title: "Gurpreet Ji — Punjabi Tutor Bot (Telegram)",
    size: 0.66,
    color: "#b85c00",
    iconColor: "#fff8ef",
    icon: "gurmukhi",
    link: { type: "github", url: "https://github.com/ishanbrar/bot_backup" },
    summary:
      "A Telegram Punjabi tutor that tracks progress, teaches through structured lessons, and replies like a real ustaad.",
    stack: ["telegram", "nodedotjs", "openapiinitiative"],
  },
  {
    id: "bot-jarjar",
    title: "Jar Jar — Telegram Assistant (Gemini Flash)",
    size: 0.62,
    color: "#2f4858",
    iconColor: "#e8f4f8",
    icon: "chat",
    link: { type: "github", url: "https://github.com/ishanbrar/bot_backup" },
    summary:
      "A Telegram assistant that pairs Gemini chat with scheduled quotes, weather check-ins, and home-server automation.",
    stack: ["telegram", "googlegemini", "openrouter", "nodedotjs"],
  },
];
