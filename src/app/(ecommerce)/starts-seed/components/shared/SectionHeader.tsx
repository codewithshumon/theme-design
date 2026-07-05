import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  accent?: "shopee" | "dark" | "white";
  link?: string;
  linkLabel?: string;
  /** right-side custom content (e.g. a countdown or tabs) */
  right?: ReactNode;
  /** Shopee sections sit inside a white card with a colored top accent line */
  card?: boolean;
}

/**
 * Shopee-style section header: a white bar with a thin colored accent stripe
 * across the top, a bold title on the left and a "See all" link on the right.
 */
export default function SectionHeader({
  title,
  subtitle,
  icon,
  accent = "shopee",
  link,
  linkLabel = "See all",
  right,
  card = true,
}: SectionHeaderProps) {
  const accentColor =
    accent === "dark"
      ? "bg-amazon-nav"
      : accent === "white"
        ? "bg-gray-300"
        : "bg-shopee";

  const Wrapper = card ? "div" : "div";

  return (
    <Wrapper
      className={`relative overflow-hidden ${card ? "rounded-t-md bg-white" : ""}`}
    >
      <div className={`h-0.75 w-full ${accentColor}`} />
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-[15px] font-medium tracking-wide text-gray-700 sm:text-base">
            {title}
          </h2>
          {subtitle && (
            <span className="hidden text-sm text-gray-400 sm:inline">
              {subtitle}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {right}
          {link && (
            <a
              href={link}
              className="group flex items-center gap-1 text-sm text-shopee hover:text-shopee-dark"
            >
              {linkLabel}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
