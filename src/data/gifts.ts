export type GiftLink =
  | { type: "site"; url: string; label?: string }
  | { type: "placeholder" }
  | { type: "github"; url: string };

export type GiftIcon =
  | "tree"
  | "language"
  | "map"
  | "crossword"
  | "trivia"
  | "corner"
  | "golf"
  | "gurdwara"
  | "citrus";

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

/** Larger `size` = bigger tile in the row. */
export const gifts: Gift[] = [
  {
    id: "legatree",
    title: "LegaTree",
    size: 1.45,
    color: "#2d6a4f",
    iconColor: "#d8f3dc",
    icon: "tree",
    link: { type: "site", url: "https://legatree.us" },
    letter:
      "LegaTree is a living family tree I built so our stories, photos, and connections stay in one place instead of scattered chats and albums. " +
      "I wanted relatives of every age to feel welcome opening it—clear names, gentle navigation, and room to grow as the family does. " +
      "Behind the scenes it is a full product: accounts, careful data modeling, and a calm interface that still feels personal. " +
      "I made it because preserving heritage should feel warm and alive, not like filing paperwork in a database.",
  },
  {
    id: "punjabitutor",
    title: "Punjabi Tutor",
    size: 1.28,
    color: "#c45c00",
    iconColor: "#fff3e0",
    icon: "language",
    link: { type: "placeholder" },
    letter:
      "Punjabi Tutor is my answer to learning a language that lives in my home but rarely gets the thoughtful app treatment it deserves. " +
      "Lessons, review, cards, and music sit together so practice feels like a daily ritual instead of a chore. " +
      "The app works offline and syncs progress when you are back online, because real learning happens in stolen minutes—not only at a desk. " +
      "I built it to help myself and others hold onto Punjabi with pride, patience, and a little joy along the way.",
  },
  {
    id: "ethnic-mapper",
    title: "Ethnic Mapper",
    size: 1.15,
    color: "#1d6ea5",
    iconColor: "#e3f2fd",
    icon: "map",
    link: { type: "site", url: "https://ethnic-mapper.vercel.app" },
    letter:
      "Ethnic Mapper turns dense demographic data into something you can actually wander through—click a place, learn something human, keep exploring. " +
      "I kept returning to the same frustration: the numbers were right, but the tools felt cold and exhausting. " +
      "So I designed a map-first experience with a sidebar that reads like a short story about a region, not a spreadsheet. " +
      "I made it to prove that data about people can still feel curious, respectful, and beautiful.",
  },
  {
    id: "mymini",
    title: "MyMini",
    size: 1.02,
    color: "#3d405b",
    iconColor: "#f8f9fa",
    icon: "crossword",
    link: { type: "site", url: "https://mymini-sikhomode.vercel.app/login" },
    letter:
      "MyMini is a daily mini crossword you can play in a few focused minutes—sign in, solve, see how you stack up. " +
      "I wanted the rhythm of a newspaper puzzle with the polish of a modern web app: clean grid, clear feedback, and a leaderboard that nudges you back tomorrow. " +
      "Accounts, puzzles, and scoring had to work together from day one, not as an afterthought. " +
      "I built it because small rituals of thinking are worth designing as carefully as any big platform.",
  },
  {
    id: "trivia",
    title: "Trivia Duel",
    size: 0.94,
    color: "#7b2cbf",
    iconColor: "#f3e8ff",
    icon: "trivia",
    link: { type: "github", url: "https://github.com/ishanbrar" },
    letter:
      "Trivia Duel is a head-to-head quiz game where fairness and speed matter as much as the questions themselves. " +
      "Two players, one match, tight timing—if anything feels off, the fun collapses immediately. " +
      "I spent as much energy on match flow and integrity as on the SwiftUI screens, because trust is the real product in a competitive game. " +
      "There is no public site yet; the work lives in code while I keep shaping the experience. " +
      "I made it to chase that electric moment when you and a friend are truly in sync.",
  },
  {
    id: "cornerapp",
    title: "Corner",
    size: 0.88,
    color: "#e76f51",
    iconColor: "#fff5f2",
    icon: "corner",
    link: { type: "placeholder" },
    letter:
      "Corner is an iOS app built around calm browsing—content that feels curated, navigation that stays out of the way. " +
      "I treated it like a real product, not a demo: managers for services, thoughtful screens, and loops that reward coming back. " +
      "The goal was a pocket-sized space that feels intentional every time you open it. " +
      "A public link is not ready yet, but the app taught me how much care goes into the parts users never name out loud.",
  },
  {
    id: "pga",
    title: "Punjabi Golf Club",
    size: 0.82,
    color: "#386641",
    iconColor: "#eaf4e9",
    icon: "golf",
    link: { type: "site", url: "https://pga-alpha.vercel.app" },
    letter:
      "This site is the digital home for a Punjabi golf community—warm photography, clear pages, and motion that guides instead of distracts. " +
      "I wanted visitors to feel the club before they ever visit in person: pride, hospitality, and a modern standard of craft. " +
      "Typography, layout, and responsive details carry the brand as much as the words do. " +
      "I built it to show that community websites can feel premium without losing their heart.",
  },
  {
    id: "gssofnt",
    title: "GSS of NT",
    size: 0.76,
    color: "#9a6b1a",
    iconColor: "#fff9e8",
    icon: "gurdwara",
    link: { type: "site", url: "https://gss-of-nt.vercel.app" },
    letter:
      "This is the public website for a gurdwara community—events, imagery, and information presented with clarity and respect. " +
      "Visitors should find what they need quickly, whether they are local or visiting for the first time. " +
      "I leaned on strong photography and quiet structure so the spirit of the place leads, not the framework around it. " +
      "I made it to serve a community I care about with the same seriousness I bring to any product build.",
  },
  {
    id: "dfwss2",
    title: "Astro Citrus",
    size: 0.7,
    color: "#f4a261",
    iconColor: "#2d1b0e",
    icon: "citrus",
    link: { type: "site", url: "https://astrocitrus.netlify.app" },
    letter:
      "Astro Citrus is a content-forward site experiment—typography, rhythm, and responsive layout doing most of the talking. " +
      "I rebuilt the experience in Astro to keep pages fast and the authoring model simple. " +
      "It was a chance to practice taste in the small decisions: spacing, hierarchy, and how a page breathes on mobile. " +
      "I made it to remind myself that even a quieter site deserves the same design discipline as a complex app.",
  },
];
