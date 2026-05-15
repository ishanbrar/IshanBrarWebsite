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
  | "chat";

export type Gift = {
  id: string;
  title: string;
  size: number;
  color: string;
  iconColor: string;
  icon: GiftIcon;
  link: GiftLink;
  letter: string;
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
    letter:
      "LegaTree is a Next.js app for building a shared family tree with rich member profiles, relationship editing, and a globe that shows where relatives live. " +
      "Families can join an existing network or start their own, export a polished tree image, and explore health-heritage views in the product’s demo mode. " +
      "I built it so genealogy feels like a living archive—photos, places, and connections in one calm place instead of scattered threads and albums. " +
      "The stack includes authenticated accounts, Supabase-backed data, and careful UX for relatives who are not technical. " +
      "I made it for my own family first: heritage should feel inviting, not like filling out a government form.",
  },
  {
    id: "punjabitutor",
    title: "Punjabi Tutor (iOS + API)",
    size: 1.24,
    color: "#c45c00",
    iconColor: "#fff3e0",
    icon: "gurmukhi",
    link: { type: "placeholder" },
    letter:
      "Punjabi Tutor pairs a SwiftUI iOS app with a Node/Express curriculum API so learners can study Path, Review, flashcards, music, and profile progress in one loop. " +
      "Progress is queued offline in SQLite and synced in batches when connectivity returns, because language practice happens on the subway—not only at a desk. " +
      "Lessons follow a real curriculum with vocabulary targets, and the backend exposes an OpenAPI schema for automation clients. " +
      "I built it for Doabi Punjabi in particular: the app should feel dependable day to day, not flashy and fragile. " +
      "A public App Store link is not live yet, but the product is built to ship, not to demo.",
  },
  {
    id: "ethnic-mapper",
    title: "EthnoMapper — Demographic Map",
    size: 1.12,
    color: "#1d6ea5",
    iconColor: "#e3f2fd",
    icon: "map",
    link: { type: "site", url: "https://ethnic-mapper.vercel.app" },
    letter:
      "EthnoMapper (ethnic-mapper) is a live map for exploring clustered ethnic groups worldwide—zoom into clusters, click points, and read which major communities shape a region. " +
      "A sidebar and tables view reuse the same selection state so you can scan dense global demographics without drowning in spreadsheets. " +
      "There is also an embed route for dropping the map into other pages. " +
      "I built it after Mapper: the goal was a shareable, deployed product that still feels curious and respectful when the data gets heavy. " +
      "It is the public face of my mapping work—exploration-first, comparison-friendly, and fast on Vercel.",
  },
  {
    id: "mymini",
    title: "NYT-Style Mini Crossword (MyMini)",
    size: 1.0,
    color: "#3d405b",
    iconColor: "#f8f9fa",
    icon: "crossword",
    link: { type: "site", url: "https://mymini-sikhomode.vercel.app/login" },
    letter:
      "MyMini is a daily mini crossword web app: sign in with Supabase, pick a puzzle from the dashboard, solve on an interactive grid with keyboard navigation and a timer, then compare times on the leaderboard. " +
      "Puzzles are ingested from .puz files into a consistent play format, so the game loop feels like a real product—not a weekend grid mockup. " +
      "Auth, puzzle browsing, and play had to work together from the start because crosswords are a habit game. " +
      "I built it to practice shipping a complete small game: tight UI, real accounts, and scoring people actually care about. " +
      "It is my take on the NYT Mini rhythm with my own stack and polish.",
  },
  {
    id: "trivia",
    title: "Trivia Duel (iOS)",
    size: 0.92,
    color: "#7b2cbf",
    iconColor: "#f3e8ff",
    icon: "question",
    link: { type: "github", url: "https://github.com/ishanbrar" },
    letter:
      "Trivia Duel is a SwiftUI head-to-head trivia app backed by Supabase Auth, Postgres, realtime match state, and SQL policies for fair play. " +
      "Matchmaking, profiles, question seeding, and scoring tests are treated as first-class work—not leftovers after the UI looks good. " +
      "I wrote latency and fairness simulations because competitive trivia breaks the moment timing feels rigged. " +
      "There is no public web build yet; the project lives in the repo while I keep hardening the multiplayer loop. " +
      "I made it to learn what “fair” feels like in a live game, not just how to animate a win screen.",
  },
  {
    id: "cornerapp",
    title: "Corner — Fact Pack Reader (iOS)",
    size: 0.86,
    color: "#e76f51",
    iconColor: "#fff5f2",
    icon: "book",
    link: { type: "github", url: "https://github.com/ishanbrar/CornerApp" },
    letter:
      "Corner is a UIKit iOS app for browsing fact packs—swipeable cards with likes, dislikes, comments, sharing, profiles, and stats behind dedicated managers. " +
      "Firebase handles auth and data; screens are split across controllers for auth, fact packs, comments, and profile so the app reads like a product, not a single demo view. " +
      "I built the engagement loop on purpose: a fact is only interesting if saving, discussing, and returning feel natural. " +
      "There is no marketing site yet; the GitHub repo is the best place to see the architecture. " +
      "Corner taught me how much of “small app” quality lives in the surrounding flows people never screenshot.",
  },
  {
    id: "pga",
    title: "DFW Punjabi Golf Club Website",
    size: 0.8,
    color: "#386641",
    iconColor: "#eaf4e9",
    icon: "golf",
    link: { type: "site", url: "https://pga-alpha.vercel.app" },
    letter:
      "This is the public website for the DFW Punjabi Golf Club—a React/TypeScript site with pages for home, about, schedule, gallery, members, and contact. " +
      "Framer Motion adds polish to transitions without stealing attention from photography of the community and course. " +
      "An admin portal scaffold is included for future content updates, and the design system keeps typography and spacing consistent on mobile. " +
      "I built it so the club has a presence that matches how members talk about it: premium, welcoming, and rooted in Punjabi community in Dallas–Fort Worth. " +
      "It is a real client-facing site, not a generic golf template with a logo swapped in.",
  },
  {
    id: "gssofnt",
    title: "Gurdwara Singh Sabha of North Texas Website",
    size: 0.74,
    color: "#9a6b1a",
    iconColor: "#fff9e8",
    icon: "gurdwara",
    link: { type: "site", url: "https://gss-of-nt.vercel.app" },
    letter:
      "This Astro site serves Gurdwara Singh Sabha of North Texas in Richardson—daily diwan, announcements, contact details, and imagery for a gurdwara that is a spiritual and cultural hub in DFW. " +
      "The live site opens with Gurmukhi and English greetings, links to the Facebook page for updates, and calm layout so visitors find service times and location quickly. " +
      "Static generation on Vercel keeps loads fast; photography and pacing do most of the storytelling. " +
      "I built it separately from LegaTree: one product is family genealogy, this one is community worship and presence. " +
      "The goal was respect and clarity for sangat and first-time visitors alike.",
  },
  {
    id: "dfwss2",
    title: "Astro Citrus Blog (DFWSS2)",
    size: 0.68,
    color: "#5c4d7a",
    iconColor: "#f0ecf7",
    icon: "code",
    link: { type: "github", url: "https://github.com/ishanbrar/DFWSS2" },
    letter:
      "DFWSS2 is my fork and redesign of the Astro Citrus content theme—an Astro + Tailwind static site focused on typography, article layout, and responsive reading. " +
      "The deployed demo (Astro Citrus on Netlify) shows the customized posts/pages structure, light/dark styling patterns, and editorial spacing I tuned by hand. " +
      "I used the project to practice turning a template into something authored: hierarchy, rhythm, and mobile pacing matter more than novelty components. " +
      "The GitHub repo is the source of truth for how the theme was adapted. " +
      "It is a design exercise that made later community sites faster and more confident.",
  },
  {
    id: "bot-tutor",
    title: "Gurpreet Ji — Punjabi Tutor Bot (Telegram)",
    size: 0.66,
    color: "#b85c00",
    iconColor: "#fff8ef",
    icon: "gurmukhi",
    link: { type: "github", url: "https://github.com/ishanbrar/bot_backup" },
    letter:
      "This is my Telegram Punjabi tutor: a structured Doabi teacher named Gurpreet Ji who follows curriculum.json, tracks vocabulary mastery, streaks, and lesson progress in progress.json. " +
      "You message the bot in Telegram and get guided lessons, quizzes, and replies in a warm ustaad-ji tone—not a generic chatbot ramble. " +
      "The implementation lives in bot_backup (telegram-bot.js and punjabi-tutor mirrors) with authorized chat, session history, and optional voice via TTS. " +
      "Lesson dialogue uses OpenAI models tuned for teaching; it is separate from my Jar Jar assistant that runs on Gemini Flash. " +
      "I built it so I could practice Punjabi daily in the same app I already live in: Telegram.",
  },
  {
    id: "bot-jarjar",
    title: "Jar Jar — Telegram Assistant (Gemini Flash)",
    size: 0.62,
    color: "#2f4858",
    iconColor: "#e8f4f8",
    icon: "chat",
    link: { type: "github", url: "https://github.com/ishanbrar/bot_backup" },
    letter:
      "Jar Jar is my personal Telegram assistant powered by OpenClaw with Google Gemini 2.5 Flash Lite (via OpenRouter) underneath—you can have normal back-and-forth text conversations in Telegram, not just one-shot commands. " +
      "The gateway config in bot_backup wires Telegram DMs to the model with pairing, tool policies, and restartable services on a home server. " +
      "On a schedule it also pushes Stoic, Ernst Jünger, and Sikhi quotes, plus a morning NYC weather check-in—cron scripts in the same repo post those messages to Telegram. " +
      "Sync jobs and systemd units keep OpenClaw env, SSH, and configs restored if anything breaks. " +
      "I built it to combine a capable Gemini Flash chat companion with small daily rituals I actually read.",
  },
];
