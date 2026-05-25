import {
  siAstro,
  siExpress,
  siFirebase,
  siFramer,
  siGooglegemini,
  siMapbox,
  siNetlify,
  siNextdotjs,
  siNodedotjs,
  siOpenapiinitiative,
  siOpenrouter,
  siPostgresql,
  siReact,
  siSqlite,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTelegram,
  siTypescript,
  siVercel,
} from "simple-icons";
import type { TechId } from "@/data/gifts";

const techIcons = {
  astro: siAstro,
  express: siExpress,
  firebase: siFirebase,
  framer: siFramer,
  googlegemini: siGooglegemini,
  mapbox: siMapbox,
  netlify: siNetlify,
  nextjs: siNextdotjs,
  nodedotjs: siNodedotjs,
  openapiinitiative: siOpenapiinitiative,
  openrouter: siOpenrouter,
  postgresql: siPostgresql,
  react: siReact,
  sqlite: siSqlite,
  supabase: siSupabase,
  swift: siSwift,
  tailwindcss: siTailwindcss,
  telegram: siTelegram,
  typescript: siTypescript,
  vercel: siVercel,
} as const satisfies Record<TechId, { title: string; hex: string; path: string }>;

type StackIconsProps = {
  tech: TechId[];
};

export function StackIcons({ tech }: StackIconsProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2.5" aria-label="Tech stack">
      {tech.map((id) => {
        const icon = techIcons[id];

        return (
          <li key={id}>
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/80 shadow-sm"
              title={icon.title}
              aria-label={icon.title}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                aria-hidden
                style={{ color: `#${icon.hex}` }}
                fill="currentColor"
              >
                <path d={icon.path} />
              </svg>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
