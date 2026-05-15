import type { GiftIcon } from "@/data/gifts";

type ProjectIconProps = {
  icon: GiftIcon;
  className?: string;
  style?: React.CSSProperties;
};

export function ProjectIcon({ icon, className = "h-7 w-7", style }: ProjectIconProps) {
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
    case "language":
      return (
        <svg {...props}>
          <path d="M4 5h8" />
          <path d="M8 5v14" />
          <path d="M5 19h6" />
          <path d="M14 9h6" />
          <path d="M17 9v10" />
          <path d="M14 14h6" />
          <path d="M14 19h6" />
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
    case "trivia":
      return (
        <svg {...props}>
          <path d="M8 4h8l2 4H6l2-4z" />
          <path d="M6 8v4a6 6 0 0 0 12 0V8" />
          <path d="M9 20h6" />
          <path d="M10 16h4" />
        </svg>
      );
    case "corner":
      return (
        <svg {...props}>
          <path d="M5 5h10v10H5z" />
          <path d="M9 9h10v10H9z" fill="currentColor" fillOpacity={0.2} />
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
    case "citrus":
      return (
        <svg {...props}>
          <circle cx="12" cy="13" r="7" />
          <path d="M12 6V3" />
          <path d="M9 4l3-2 3 2" />
          <path d="M8 13h8M12 9v8" />
        </svg>
      );
    default:
      return null;
  }
}
