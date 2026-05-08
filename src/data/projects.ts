export type ProjectTag =
  | "iOS"
  | "Web"
  | "Mapping"
  | "TypeScript"
  | "Swift"
  | "Astro"
  | "React"
  | "Vercel"
  | "Data"
  | "Supabase"
  | "Node"
  | "Postgres"
  | "Realtime"
  | "FramerMotion"
  | "OpenAPI";

export type ProjectLink =
  | { kind: "github"; url: string }
  | { kind: "demo"; url: string }
  | { kind: "docs"; url: string };

export type ProjectStatus =
  | "Live"
  | "Case Study"
  | "Prototype"
  | "In Progress"
  | "Shipped";

export type ProjectCategory =
  | "AI"
  | "iOS App"
  | "Web App"
  | "Data / Mapping"
  | "Automation"
  | "Systems"
  | "Creative Tools";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  caption?: string;
};

export type ProjectCaseStudy = {
  problem: string;
  whyBuilt: string;
  architecture: Array<{ title: string; detail: string }>;
  interestingDecision: {
    title: string;
    summary: string;
    bullets: string[];
  };
  lessons: string[];
  outcomes: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  productionDate?: string;
  status?: ProjectStatus;
  category?: ProjectCategory;
  tags: ProjectTag[];
  links: ProjectLink[];
  purpose: string;
  features: string[];
  role: string;
  stack: string[];
  caseStudy: ProjectCaseStudy;
  screenshots: ProjectScreenshot[];
  videos?: Array<{ src: string; title: string }>;
};

const github = (repo: string) => ({ kind: "github" as const, url: repo });
const demo = (url: string) => ({ kind: "demo" as const, url });
const shot = (
  src: string,
  alt: string,
  fit?: ProjectScreenshot["fit"],
  caption?: string,
): ProjectScreenshot => ({ src, alt, fit, caption });

export const featuredProjects: Project[] = [
  {
    slug: "mapper",
    title: "Demographic Mapper",
    subtitle: "An exploration-first map for browsing dense demographic data with speed and clarity.",
    productionDate: "2025",
    status: "Prototype",
    category: "Data / Mapping",
    tags: ["Web", "Mapping", "Data"],
    links: [],
    purpose:
      "Make it easy to explore global demographic patterns without getting lost in a complicated data tool.",
    features: [
      "Interactive map with cluster + point selection",
      "Region highlight overlays and contextual region lookup",
      "Sidebar details: population, religion, TFR, languages, and facts",
      "Mobile bottom-sheet panel that opens automatically on selection",
      "Tables view for scanning and comparing data",
      "Embeddable view for integrating into other pages",
    ],
    role: "Solo project",
    stack: ["Mapping APIs", "UI/UX", "Data visualization"],
    caseStudy: {
      problem:
        "Most demographic tools are accurate, but they make people work too hard to answer simple questions about a place.",
      whyBuilt:
        "I wanted a map that felt inviting: click anywhere, learn something quickly, and keep exploring without losing your place.",
      architecture: [
        {
          title: "Map-first interaction model",
          detail:
            "Selection state drives the rest of the interface so the map, region overlays, and supporting content stay synchronized.",
        },
        {
          title: "Shared data presentation layer",
          detail:
            "The same data powers sidebar summaries, table rows, and embed views so the product can adapt to different modes without fragmenting behavior.",
        },
        {
          title: "Responsive detail surfaces",
          detail:
            "Desktop uses a persistent side panel while mobile shifts to a bottom sheet that opens automatically on selection.",
        },
      ],
      interestingDecision: {
        title: "Treat the detail panel as the product, not a tooltip",
        summary:
          "Instead of treating the detail panel like an extra, I made it the main place where people understand what they clicked.",
        bullets: [
          "It makes the information feel easier to read instead of overwhelming.",
          "It also helps the map and table views feel like one product.",
          "It adds some complexity behind the scenes, but the experience is much clearer because of it.",
        ],
      },
      lessons: [
        "Fast state transitions matter as much as visual polish in map-heavy products.",
        "Mobile map UX improves when the detail surface feels intentional instead of bolted on.",
        "The best mapping interfaces narrow choice at the moment of interaction.",
      ],
      outcomes: [
        "Established reusable interaction patterns that carried into later mapping work.",
        "Produced a case study-worthy prototype with map, tables, and embed modes.",
      ],
    },
    screenshots: [
      shot("/projects/mapper/01-home.png", "Mapper home/map view", "cover", "Map-first landing state with contextual drill-down."),
      shot("/projects/mapper/02-tables.png", "Mapper tables view", "cover", "Comparison-friendly table mode for scanning data."),
      shot("/projects/mapper/03-embed.png", "Mapper embed view", "cover", "Compact embed presentation for integrating the map elsewhere."),
    ],
  },
  {
    slug: "mymini",
    title: "Mini Crossword",
    subtitle:
      "A daily mini crossword web app with auth, gameplay, and leaderboard tracking.",
    productionDate: "2026",
    status: "Case Study",
    category: "Web App",
    tags: ["Web", "TypeScript", "React", "Supabase", "Postgres"],
    links: [github("https://github.com/ishanbrar/MyMini")],
    purpose:
      "Create a crossword app that feels fun, polished, and worth coming back to every day.",
    features: [
      "Auth flows (login/signup) via Supabase",
      "Puzzle dashboard to browse available .puz files",
      "Interactive crossword gameplay with timer and keyboard navigation",
      "Leaderboard tracking solve times",
    ],
    role: "Solo project",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (Postgres + Auth)",
      ".puz parsing + puzzle ingestion",
    ],
    caseStudy: {
      problem:
        "Crossword apps seem simple until you try to make them feel smooth, readable, and worth returning to every day.",
      whyBuilt:
        "I wanted to build a small daily game with the kind of care people expect from a real product, not a quick clone.",
      architecture: [
        {
          title: "App Router frontend",
          detail:
            "The interface is structured around fast transitions between auth, puzzle discovery, and active play while preserving tight keyboard interactions.",
        },
        {
          title: "Puzzle ingestion pipeline",
          detail:
            "Binary .puz files are parsed and normalized into a format the app can render consistently across game sessions.",
        },
        {
          title: "Supabase-backed account layer",
          detail:
            "Authentication and leaderboards live in a backend that turns the project into a real product rather than a local toy.",
        },
      ],
      interestingDecision: {
        title: "Build the product shell before chasing game complexity",
        summary:
          "I focused on the full experience first, so the app would feel complete even before every puzzle edge case was perfect.",
        bullets: [
          "That made the design feel more grounded because it lived inside a believable product flow.",
          "It also pushed the app to support real users instead of a perfect demo scenario.",
          "The result feels more like a real product, even though there is still room to add features.",
        ],
      },
      lessons: [
        "Game-feel on the web depends heavily on keyboard latency and visual clarity.",
        "Product framing can make a niche interaction pattern immediately legible to users.",
        "A small game becomes much more interesting once persistence and competition exist.",
      ],
      outcomes: [
        "Shipped a playable crossword experience with real authentication and leaderboard infrastructure.",
        "Created reusable ingestion and render patterns for structured content apps.",
      ],
    },
    screenshots: [
      shot("/projects/mymini/01-login.png", "MyMini login screen", "cover", "Clean authentication entry point."),
      shot("/projects/mymini/02-signup.png", "MyMini signup screen", "cover", "Account creation flow aligned with the product aesthetic."),
      shot("/projects/mymini/03-puzzles.png", "MyMini puzzles dashboard", "cover", "Puzzle browser showing available crossword sessions."),
    ],
  },
  {
    slug: "punjabitutor",
    title: "Punjabi Tutor",
    subtitle:
      "An offline-capable Punjabi learning app backed by a curriculum API, sync layer, and iOS client.",
    productionDate: "2026",
    status: "Shipped",
    category: "iOS App",
    tags: ["iOS", "Swift", "Node", "OpenAPI"],
    links: [],
    purpose:
      "Help people learn Punjabi in a way that feels smooth, dependable, and useful even when they are offline.",
    features: [
      "Express API serving curriculum, progress, lessons, and music endpoints",
      "Offline event queue (SQLite) + batched sync for reliable progress",
      "SwiftUI app with home/path/review/flashcards/music/profile flows",
      "Configurable API base URL for local dev vs production",
      "OpenAPI schema for GPT Actions",
    ],
    role: "Solo project",
    stack: [
      "Node.js (Express) API",
      "Curriculum + progress store (merge rules, SRS-ish metadata)",
      "SwiftUI iOS app (offline flashcards + sync)",
      "SQLite-backed offline queue + batched sync events",
      "OpenAPI (GPT Actions schema)",
    ],
    caseStudy: {
      problem:
        "Language apps get frustrating fast when progress feels fragile or the lessons do not fit the way people actually study.",
      whyBuilt:
        "I wanted a Punjabi learning app that felt dependable day to day and stayed useful even when the internet was unreliable.",
      architecture: [
        {
          title: "SwiftUI learning surfaces",
          detail:
            "Home, path, review, cards, music, and profile each serve a different part of the learning loop while sharing a consistent design language.",
        },
        {
          title: "Offline-first sync layer",
          detail:
            "Queued progress events are stored locally and merged in batches so usage can continue even when the API is unavailable.",
        },
        {
          title: "Node API + OpenAPI contract",
          detail:
            "The backend is structured so the same curriculum and progress model can serve the app and automation clients cleanly.",
        },
      ],
      interestingDecision: {
        title: "Design around reliable progress sync instead of optimistic assumptions",
        summary:
          "The big product choice was to make progress feel safe, so learning never feels interrupted by connectivity problems.",
        bullets: [
          "The app stays usable when the connection is weak or unavailable.",
          "When syncing catches up later, progress still stays consistent.",
          "That adds work under the hood, but it makes the app feel much more trustworthy.",
        ],
      },
      lessons: [
        "Education products become more credible when the progress model is resilient.",
        "An app can feel calm and lightweight even when the sync logic underneath is not.",
        "API design is stronger when it is treated as a product surface from the start.",
      ],
      outcomes: [
        "Delivered a multi-surface iOS learning app backed by a real API and offline queue.",
        "Created a foundation that can support app experiences and automation workflows together.",
      ],
    },
    screenshots: [
      shot("/projects/punjabitutor/01-home.png", "PunjabiTutor home screen", "cover", "Home view showing curriculum entry points and progress."),
      shot("/projects/punjabitutor/02-flow.png", "PunjabiTutor flow screen", "cover", "A representative learning flow inside the app."),
    ],
  },
  {
    slug: "trivia",
    title: "Trivia Duel",
    subtitle:
      "A real-time 1v1 trivia app with SwiftUI, Supabase, matchmaking, and fairness testing.",
    productionDate: "2026",
    status: "Prototype",
    category: "iOS App",
    tags: ["iOS", "Swift", "Supabase", "Realtime", "Postgres"],
    links: [],
    purpose:
      "Build a head-to-head trivia app that feels fair, fast, and genuinely competitive.",
    features: [
      "SwiftUI client scaffold for realtime game flows",
      "Supabase migrations/functions/policies for game + profiles",
      "Question seeding and curated ingestion tooling",
      "Scoring tests and latency fairness simulation scripts",
    ],
    role: "Solo project",
    stack: [
      "SwiftUI iOS app",
      "Supabase (Postgres + Auth + Realtime)",
      "SQL migrations + policies/functions",
      "Question ingestion + curated seed tooling",
      "Test suite + latency fairness simulation",
    ],
    caseStudy: {
      problem:
        "Head-to-head trivia is fun in theory, but it quickly feels broken if the timing, scoring, or match flow do not feel fair.",
      whyBuilt:
        "I wanted to explore what makes a multiplayer app feel trustworthy, not just visually exciting.",
      architecture: [
        {
          title: "SwiftUI shell with session-aware routing",
          detail:
            "The app switches between auth and a multi-tab logged-in experience, keeping the core game loop nested inside a broader social product.",
        },
        {
          title: "Supabase data and realtime layer",
          detail:
            "Profiles, matchmaking, match state, and storage policies are modeled directly in migrations and backed by realtime updates.",
        },
        {
          title: "Fairness validation tooling",
          detail:
            "Scoring tests and latency simulations help evaluate whether the rules hold up under less-than-ideal network conditions.",
        },
      ],
      interestingDecision: {
        title: "Treat fairness as a first-class feature",
        summary:
          "The most important choice here was to treat fairness like part of the product experience, not just a backend concern.",
        bullets: [
          "That pushes the project beyond a nice-looking prototype.",
          "It helps catch the moments where the game could start to feel unfair.",
          "The result is a stronger base for a real competitive app.",
        ],
      },
      lessons: [
        "Realtime apps need product decisions and database rules to be designed together.",
        "A credible multiplayer experience depends on boring infrastructure being right.",
        "Even prototype apps benefit from simulation tooling when fairness matters.",
      ],
      outcomes: [
        "Built a production-minded foundation for matchmaking, profiles, and live game state.",
        "Documented and tested fairness assumptions instead of leaving them implicit.",
      ],
    },
    screenshots: [
      shot("/projects/trivia/01.png", "Trivia app screenshot", "cover", "Trivia Duel interface from the current app build."),
    ],
  },
  {
    slug: "dfwss2",
    title: "Astro Content Site",
    subtitle: "An Astro-based content site rebuild focused on typography, layout, and responsive structure.",
    productionDate: "2025",
    status: "Prototype",
    category: "Web App",
    tags: ["Web", "Astro"],
    links: [github("https://github.com/ishanbrar/DFWSS2"), demo("https://astrocitrus.netlify.app")],
    purpose:
      "Turn a content site template into something that feels cleaner, sharper, and more intentionally designed.",
    features: [
      "Content-first layout with clean typography",
      "Responsive light/dark styling patterns",
      "Template structure for posts/pages and reusable components",
      "Deployed demo for quick review",
    ],
    role: "Fork/customization",
    stack: ["Astro", "Tailwind", "Static site"],
    caseStudy: {
      problem:
        "A lot of content sites look good in a screenshot but lose their polish once real pages and navigation are involved.",
      whyBuilt:
        "I used this project to learn how to make a template feel more authored and less off-the-shelf.",
      architecture: [
        {
          title: "Astro content structure",
          detail:
            "Pages and reusable components are organized around editorial readability and straightforward authoring.",
        },
        {
          title: "Responsive visual system",
          detail:
            "Typography and spacing are tuned so the same layout language holds up on both compact and wide screens.",
        },
        {
          title: "Deployable static shell",
          detail:
            "The project stays lightweight and easy to ship while still feeling custom.",
        },
      ],
      interestingDecision: {
        title: "Use customization as a design exercise, not just a code fork",
        summary:
          "The goal was not to copy a template perfectly, but to understand how small design choices change the feel of a site.",
        bullets: [
          "That made typography and spacing worth revisiting again and again.",
          "It also clarified which parts of a content site really matter to people using it.",
          "The result feels more considered than a one-off recreation.",
        ],
      },
      lessons: [
        "Templates become interesting when you are willing to break their defaults.",
        "Content hierarchy is usually more important than decorative flourish.",
        "Static sites can still feel premium if the fundamentals are intentional.",
      ],
      outcomes: [
        "Produced a polished Astro customization and a live demo for review.",
        "Strengthened responsive typography and layout instincts for later site work.",
      ],
    },
    screenshots: [
      shot("/projects/dfwss2/01.png", "DFWSS2 screenshot 1"),
      shot("/projects/dfwss2/02.png", "DFWSS2 screenshot 2"),
      shot("/projects/dfwss2/03.png", "DFWSS2 screenshot 3"),
      shot("/projects/dfwss2/04.png", "DFWSS2 screenshot 4"),
    ],
  },
  {
    slug: "gssofnt",
    title: "GSS of NT Website",
    subtitle: "A deployed Astro website with a clean content experience, strong imagery, and modern design.",
    productionDate: "2026",
    status: "Live",
    category: "Web App",
    tags: ["Web", "Astro", "Vercel"],
    links: [github("https://github.com/ishanbrar/GSSofNT"), demo("https://gss-of-nt.vercel.app")],
    purpose:
      "Create a public-facing website that feels welcoming, well organized, and easy to browse.",
    features: [
      "Static site built with Astro + Tailwind",
      "Deployed on Vercel",
      "Content organization suitable for posts/pages",
      "Media-rich pages with gallery-style assets",
    ],
    role: "Solo build / customization",
    stack: ["Astro", "Tailwind", "Vercel"],
    caseStudy: {
      problem:
        "Sites with lots of imagery can feel cluttered quickly if the structure around that imagery is not calm and easy to follow.",
      whyBuilt:
        "I wanted to make a public-facing site that felt welcoming, polished, and easy to browse.",
      architecture: [
        {
          title: "Astro publishing model",
          detail:
            "Static generation keeps the site fast while still supporting a content structure that can grow.",
        },
        {
          title: "Media presentation layer",
          detail:
            "Gallery-style assets are woven into the information architecture so imagery supports the content instead of overpowering it.",
        },
        {
          title: "Vercel deployment loop",
          detail:
            "The project is set up to publish quickly and predictably, which is part of the product quality story.",
        },
      ],
      interestingDecision: {
        title: "Keep the content system quiet so the imagery can do the talking",
        summary:
          "I kept the layout and navigation restrained so the content and imagery could do more of the work.",
        bullets: [
          "That made pacing and spacing more important than novelty.",
          "It also helped the site feel calmer and more confident.",
          "The final result feels cleaner and easier to trust.",
        ],
      },
      lessons: [
        "Publishing workflows are part of product quality, not just ops.",
        "Simple content systems become memorable when pacing and imagery are thoughtful.",
        "Restraint is often the difference between polished and merely busy.",
      ],
      outcomes: [
        "Shipped a live Astro site with strong media presentation and quick load times.",
        "Expanded a repeatable pattern for future content-driven launches.",
      ],
    },
    screenshots: [
      shot("/projects/gssofnt/01.jpg", "GSSofNT screenshot 1"),
      shot("/projects/gssofnt/02.jpg", "GSSofNT screenshot 2"),
      shot("/projects/gssofnt/03.jpg", "GSSofNT screenshot 3"),
      shot("/projects/gssofnt/logo.svg", "GSS of NT logo", "contain", "Brand mark used across the deployed site."),
    ],
  },
  {
    slug: "ethnic-mapper",
    title: "Ethnic Mapper",
    subtitle: "A live mapping and data-visualization project built for clear demographic storytelling.",
    productionDate: "2026",
    status: "Live",
    category: "Data / Mapping",
    tags: ["Web", "TypeScript", "Mapping", "Vercel"],
    links: [github("https://github.com/ishanbrar/ethnic-mapper"), demo("https://ethnic-mapper.vercel.app")],
    purpose:
      "Give people a clearer way to browse and compare demographic stories across places.",
    features: [
      "Interactive map experience with sidebar panels",
      "Tables view for scanning and comparisons",
      "Embed route for integration",
      "Vercel deployment for a live demo",
    ],
    role: "Solo project",
    stack: ["TypeScript", "Mapping", "Data viz", "Vercel"],
    caseStudy: {
      problem:
        "Data stories are hard to explore when the interface feels too dense or does not guide people toward what matters.",
      whyBuilt:
        "I wanted a version of the mapping work that felt easier to share, easier to browse, and stronger as a public-facing product.",
      architecture: [
        {
          title: "Interactive map and panel pairing",
          detail:
            "Selection state flows into side panels and comparisons so users can move between overview and detail naturally.",
        },
        {
          title: "Alternate viewing modes",
          detail:
            "Tables and embed routes reuse the same data framing while serving different consumption contexts.",
        },
        {
          title: "Live deployment surface",
          detail:
            "Hosting on Vercel makes the work easy to review and raises the bar for stability and polish.",
        },
      ],
      interestingDecision: {
        title: "Design the storytelling modes alongside the core map",
        summary:
          "The project works better because the map, tables, and embed view all feel like parts of one experience.",
        bullets: [
          "That makes the work easier to share in different contexts.",
          "It also keeps the story clear even when people are not looking at the main map view.",
          "The result feels more complete as a product.",
        ],
      },
      lessons: [
        "Live demos reveal UX rough edges much faster than local prototypes.",
        "Data tools gain reach when their views can adapt to different contexts.",
        "A strong map product needs just as much editorial thinking as technical execution.",
      ],
      outcomes: [
        "Published a live mapping project with multiple exploration modes.",
        "Turned a dense data concept into a more reviewable, portfolio-friendly product.",
      ],
    },
    screenshots: [
      shot("/projects/ethnic-mapper/02-tables.png", "ethnic-mapper tables view"),
      shot("/projects/ethnic-mapper/01-home.png", "ethnic-mapper home/map view"),
      shot("/projects/ethnic-mapper/03-embed.png", "ethnic-mapper embed view"),
    ],
  },
  {
    slug: "pga",
    title: "Punjabi Golf Club Website",
    subtitle:
      "A premium club website with responsive design, polished motion, and a modern brand feel.",
    productionDate: "2026",
    status: "Live",
    category: "Web App",
    tags: ["Web", "TypeScript", "React", "FramerMotion", "Vercel"],
    links: [github("https://github.com/ishanbrar/PGA"), demo("https://pga-alpha.vercel.app")],
    purpose:
      "Give the club a website that feels premium, modern, and easy for people to navigate.",
    features: [
      "Multi-page site: Home, About, Schedule, Gallery, Members, Contact",
      "Admin portal scaffold for content updates",
      "Framer Motion transitions + micro-interactions",
      "Responsive design and cohesive design system",
    ],
    role: "Solo project",
    stack: [
      "React + TypeScript",
      "Tailwind CSS (custom component styling)",
      "Framer Motion animations",
      "Responsive layout system",
      "Vercel deployment",
    ],
    caseStudy: {
      problem:
        "Club websites often feel either too plain to be memorable or too flashy to be useful.",
      whyBuilt:
        "I wanted to give the club a web presence that felt proud, current, and easy for people to use.",
      architecture: [
        {
          title: "Multi-page information architecture",
          detail:
            "The site separates story, logistics, membership, and gallery content into pages that are easy to navigate and maintain.",
        },
        {
          title: "Reusable design system",
          detail:
            "Shared components and Tailwind patterns keep the visual language consistent across page types.",
        },
        {
          title: "Motion layer",
          detail:
            "Framer Motion is used to add polish to page transitions and interactions without slowing the experience down.",
        },
      ],
      interestingDecision: {
        title: "Use motion to reinforce hierarchy instead of stealing attention",
        summary:
          "I used motion as a polish layer, not a spectacle, so the site would feel premium without becoming distracting.",
        bullets: [
          "That helps the site feel credible for both members and first-time visitors.",
          "It also makes the site feel more intentional on different screen sizes.",
          "The tradeoff is less flash, but the result is stronger and more confident.",
        ],
      },
      lessons: [
        "Premium web design is usually about pacing and restraint, not maximal effects.",
        "Community-oriented sites still benefit from product-level design systems.",
        "Motion earns its keep when it improves comprehension and perceived quality together.",
      ],
      outcomes: [
        "Shipped a live premium-feeling site with a cohesive multi-page experience.",
        "Strengthened a pattern for using motion tastefully in client-facing products.",
      ],
    },
    screenshots: [
      shot("/projects/pga/01.png", "PGA logo", "contain", "Primary logo treatment for the club site."),
      shot("/projects/pga/02.png", "PGA community photo", "cover", "Community-oriented visual storytelling."),
      shot("/projects/pga/03.png", "PGA course photo", "cover", "Course imagery used in the live site experience."),
      shot("/projects/pga/logo-main.svg", "PGA site logo (SVG)", "contain", "Vector brand asset used in the interface."),
    ],
  },
  {
    slug: "cornerapp",
    title: "Corner App",
    subtitle: "A Swift iOS app focused on clean UI, content browsing, and real product-style flows.",
    productionDate: "2025",
    status: "Case Study",
    category: "iOS App",
    tags: ["iOS", "Swift"],
    links: [github("https://github.com/ishanbrar/CornerApp")],
    purpose:
      "Make a small iPhone app feel like a real product instead of a one-screen demo.",
    features: [
      "Authentication flow UI",
      "Fact packs and browsing experience",
      "Profiles, stats, and saved/liked flows",
      "Firebase integration (project includes GoogleService config)",
    ],
    role: "Solo project",
    stack: ["Swift", "iOS UI", "App architecture"],
    caseStudy: {
      problem:
        "A simple content app can feel forgettable if everything around the main screen feels thin or unfinished.",
      whyBuilt:
        "I wanted to build the surrounding flows that make a small app feel like something people could actually live with.",
      architecture: [
        {
          title: "UIKit view controller structure",
          detail:
            "The app is organized around dedicated controllers for auth, profile, stats, comments, and fact pack browsing.",
        },
        {
          title: "Manager-based app services",
          detail:
            "Firebase, sound, offline handling, comments, and fact pack data each live behind their own managers to keep screens focused.",
        },
        {
          title: "Engagement loop",
          detail:
            "Likes, dislikes, sharing, comments, and profile views turn a single-fact interaction into a broader product experience.",
        },
      ],
      interestingDecision: {
        title: "Build out the supporting product surfaces, not just the content screen",
        summary:
          "The main content screen matters, but the app feels much more real because the supporting screens are there too.",
        bullets: [
          "That gives the app a fuller sense of purpose.",
          "It also creates more real product pressure, which made the build more useful.",
          "The result feels much closer to a real iPhone app than a demo.",
        ],
      },
      lessons: [
        "Product depth often comes from surrounding flows rather than the headline feature.",
        "UIKit structure gets easier to maintain once responsibilities are pushed into managers.",
        "Even a small app benefits from clear service boundaries early.",
      ],
      outcomes: [
        "Built a multi-screen Swift app with authentication, engagement, and profile flows.",
        "Created a foundation that reads more like a real app than a single-screen demo.",
      ],
    },
    screenshots: [
      shot("/projects/cornerapp/01.png", "CornerApp logo", "contain", "Current brand asset for the app."),
    ],
  },
];

export const allTags: ProjectTag[] = [
  "Web",
  "iOS",
  "TypeScript",
  "Swift",
  "Mapping",
  "Data",
  "Astro",
  "React",
  "Vercel",
  "Supabase",
  "Postgres",
  "Node",
  "Realtime",
  "FramerMotion",
  "OpenAPI",
];

export const allCategories: ProjectCategory[] = [
  "Web App",
  "iOS App",
  "Data / Mapping",
  "AI",
  "Automation",
  "Systems",
  "Creative Tools",
];

export function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug) ?? null;
}
