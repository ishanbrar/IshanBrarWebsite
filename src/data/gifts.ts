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
  technical: string[];
  screenshot?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
    layout?: "landscape" | "portrait" | "square";
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
    technical: [
      "The frontend is a Next.js app that keeps the tree, member profiles, and globe views in sync from a shared family data model.",
      "Supabase handles authentication and the relational family records so households can join an existing network or start their own cleanly.",
      "Image export and demo-friendly heritage views sit on top of the same core relationships instead of branching into a separate mock system.",
    ],
    screenshot: {
      src: "/gift-shots/legatree.png",
      alt: "LegaTree landing page",
      fit: "cover",
      layout: "landscape",
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
    technical: [
      "Users upload a headshot and screenshots, then a Next.js flow packages that intake for Gemini-based article generation.",
      "Supabase stores drafts and published slugs so sections can be regenerated without losing the rest of the page.",
      "Editing tools let the user revise individual sections and infobox content instead of rerunning the entire pipeline every time.",
    ],
    screenshot: {
      src: "/gift-shots/wikime.png",
      alt: "WikiMe homepage",
      fit: "cover",
      layout: "landscape",
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
    technical: [
      "The iOS client is built in SwiftUI and caches learner progress locally in SQLite so lessons still work offline.",
      "A Node and Express API serves curriculum data and accepts sync batches when the device reconnects.",
      "Flashcards, review state, and lesson progression all read from the same structured curriculum model.",
    ],
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
    technical: [
      "A React and TypeScript frontend renders Mapbox clusters and region overlays from a shared geographic dataset.",
      "Selection state drives both the map and the side panel, so clicking a point immediately updates the explanatory content and comparison tables.",
      "The deployed app also exposes an embed-friendly mode built on the same data pipeline.",
    ],
    screenshot: {
      src: "/gift-shots/ethnic-mapper.png",
      alt: "EthnoMapper map view",
      fit: "cover",
      layout: "landscape",
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
    technical: [
      "The app uses Next.js and Supabase Auth to connect sign-in, puzzle browsing, and gameplay inside one product flow.",
      "Crossword files are normalized into a consistent board format so keyboard navigation, timers, and validation behave predictably.",
      "Solve times are written back to Postgres for leaderboard comparisons.",
    ],
    screenshot: {
      src: "/gift-shots/mymini.png",
      alt: "MyMini login page",
      fit: "cover",
      layout: "landscape",
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
    technical: [
      "SwiftUI drives the match UI while Supabase handles authentication and shared multiplayer state.",
      "Questions, scores, and round timing are synchronized through Postgres-backed realtime updates instead of local-only timers.",
      "Fairness checks and latency simulations sit behind the game logic so the match loop stays trustworthy.",
    ],
    screenshot: {
      src: "/gift-shots/trivia.png",
      alt: "Trivia Duel app artwork",
      fit: "contain",
      layout: "square",
    },
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
    technical: [
      "The app is split into dedicated iOS controllers and managers for auth, fact packs, comments, and profiles.",
      "Firebase stores users, reactions, and content so social actions update across the app quickly.",
      "Swipe interactions sit on top of a more structured engagement model than the UI suggests at first glance.",
    ],
    screenshot: {
      src: "/gift-shots/cornerapp.png",
      alt: "Corner app iPhone screenshot",
      fit: "contain",
      layout: "portrait",
    },
  },
  {
    id: "pga",
    title: "DFW Punjabi Golf Club Website",
    size: 0.8,
    color: "#386641",
    iconColor: "#eaf4e9",
    icon: "golf",
    link: { type: "site", url: "https://dfwpunjabigolf.com" },
    summary:
      "A client site for the DFW Punjabi Golf Club with polished community pages, schedules, galleries, and future admin hooks.",
    stack: ["react", "typescript", "framer", "vercel"],
    technical: [
      "The site is a React and TypeScript frontend with Framer Motion used for restrained transitions between content-heavy sections.",
      "Shared components keep schedules, member pages, and galleries visually consistent across mobile and desktop.",
      "An admin-oriented content layer was left scaffolded so the club can evolve the site later without starting over.",
    ],
    screenshot: {
      src: "/gift-shots/pga.png",
      alt: "DFW Punjabi Golf Club homepage",
      fit: "cover",
      layout: "landscape",
    },
  },
  {
    id: "gssofnt",
    title: "Gurdwara Singh Sabha of North Texas Website",
    size: 0.74,
    color: "#9a6b1a",
    iconColor: "#fff9e8",
    icon: "gurdwara",
    link: { type: "site", url: "https://gssofnt.com" },
    summary:
      "A calm gurdwara website that makes prayer times, announcements, location details, and community information easy to find.",
    stack: ["astro", "tailwindcss", "vercel"],
    technical: [
      "The site is statically generated with Astro, which keeps pages fast and simple for a community audience.",
      "Content is organized so prayer times, announcements, and contact details stay easy to update and easy to find.",
      "The visual layer does most of the storytelling while the structure stays lightweight and dependable.",
    ],
    screenshot: {
      src: "/gift-shots/gssofnt.png",
      alt: "Gurdwara Singh Sabha homepage",
      fit: "cover",
      layout: "landscape",
    },
  },
  {
    id: "dfwss2",
    title: "DFW Sikh Shooters Website",
    size: 0.68,
    color: "#5c4d7a",
    iconColor: "#f0ecf7",
    icon: "code",
    link: { type: "site", url: "https://dfwsikhs.com" },
    summary:
      "A Sikh shooters club website that explains the mission, values, and contact details of the DFW-based community.",
    stack: ["astro", "tailwindcss"],
    technical: [
      "The site is built as a lightweight Astro front end so the pages load quickly and stay easy to maintain.",
      "Tailwind handles the visual system, which keeps the typography, spacing, and navigation consistent across the small set of informational pages.",
      "The content is structured more like a focused community landing site than a generic template, with Sikh framing and local club context at the center.",
    ],
    screenshot: {
      src: "/gift-shots/dfwss2.png",
      alt: "DFW Sikh Shooters homepage",
      fit: "cover",
      layout: "landscape",
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
    technical: [
      "A Node.js Telegram bot reads from a structured curriculum file and tracks progress state per learner.",
      "Lesson prompts and session history are stored so the bot can continue a teaching thread instead of replying statelessly.",
      "The teaching loop is built around Telegram messaging first, with automation and voice layered on top.",
    ],
    screenshot: {
      src: "/gift-shots/punjabi-bot.png",
      alt: "Punjabi tutor Telegram bot screenshot",
      fit: "contain",
      layout: "portrait",
    },
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
    technical: [
      "Telegram messages are routed through a Node.js gateway into Gemini via OpenRouter.",
      "Scheduled jobs post quotes and weather updates using the same bot infrastructure that handles direct chat.",
      "Home-server scripts keep the bot environment restartable and easier to recover if anything breaks.",
    ],
    screenshot: {
      src: "/gift-shots/colonel-binks.png",
      alt: "Colonel Binks Telegram bot screenshot",
      fit: "contain",
      layout: "portrait",
    },
  },
];
