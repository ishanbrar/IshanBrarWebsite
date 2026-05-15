import type { GiftIcon } from "@/data/gifts";

type ProjectIconProps = {
  icon: GiftIcon;
  className?: string;
  style?: React.CSSProperties;
};

export function ProjectIcon({ icon, className = "h-7 w-7", style }: ProjectIconProps) {
  if (icon === "gurmukhi") {
    return (
      <span
        className={`leading-none font-normal ${className ?? ""}`}
        style={{
          ...style,
          fontFamily: 'var(--font-gurmukhi), "Raavi", "AnmolUni", sans-serif',
        }}
        aria-hidden
      >
        ੳ
      </span>
    );
  }

  const props = {
    className,
    style,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "tree":
      return (
        <svg {...props}>
          <path d="M12 3v3" />
          <path d="M8 6c0 2 1.5 3.5 4 4 2.5-.5 4-2 4-4" />
          <path d="M6 10c0 2.5 2.2 4.5 6 5 3.8-.5 6-2.5 6-5" />
          <path d="M12 15v6" />
          <path d="M9 21h6" />
        </svg>
      );
    case "map":
      return (
        <svg {...props}>
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
        </svg>
      );
    case "crossword":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      );
    case "question":
      return (
        <svg {...props}>
          <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.8.6-1.2 1.2-1.2 2.2" />
          <circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M5 5c2-1 4-1 7 0 3-1 5-1 7 0v14c-2-1-4-1-7 0-3-1-5-1-7 0V5z" />
          <path d="M12 5v14" />
        </svg>
      );
    case "golf":
      return (
        <svg {...props}>
          <path d="M12 3v16" />
          <path d="M12 3l6 3-6 3" />
          <path d="M8 21h8" />
          <circle cx="17" cy="17" r="2.5" />
        </svg>
      );
    case "gurdwara":
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M7 8h10" />
          <path d="M5 12h14" />
          <path d="M8 21h8" />
          <path d="M9 5l3-2 3 2" />
        </svg>
      );
    case "code":
      return (
        <svg {...props}>
          <path d="M8 8l-4 4 4 4" />
          <path d="M16 8l4 4-4 4" />
          <path d="M13.5 6l-3 12" />
        </svg>
      );
    case "bot":
      return (
        <svg {...props}>
          <rect x="5" y="8" width="14" height="10" rx="3" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          <circle cx="9.5" cy="13" r="1" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="13" r="1" fill="currentColor" stroke="none" />
          <path d="M10 16h4" />
          <path d="M5 12H3M21 12h-2" />
        </svg>
      );
    default:
      return null;
  }
}
