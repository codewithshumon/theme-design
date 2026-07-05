export type ThemeStatus = "live" | "soon";

export interface Theme {
  /** Route slug — live themes navigate to `/${slug}`. */
  slug: string;
  title: string;
  description: string;
  category: string;
  emoji: string;
  /** Tailwind gradient classes used for the card's accent glow. */
  gradient: string;
  /** Searchable keywords. */
  tags: string[];
  status: ThemeStatus;
}

/**
 * Theme / page catalogue shown on the home page.
 * The search bar filters this list by title, description, category and tags.
 * Add new entries here — they appear as cards automatically.
 */
export const themes: Theme[] = [
  {
    slug: "starts-seed",
    title: "Starts Seed Mall",
    description:
      "Marketplace & mall storefront with flash deals, daily discover and the best brands.",
    category: "Ecommerce",
    emoji: "🌱",
    gradient: "from-orange-500/40 via-rose-500/25 to-amber-400/20",
    tags: ["marketplace", "shopee", "amazon", "shopping", "storefront", "mall"],
    status: "live",
  },
  {
    slug: "saas-landing",
    title: "SaaS Landing",
    description:
      "Conversion-focused landing page for modern software products and startups.",
    category: "Marketing",
    emoji: "🚀",
    gradient: "from-indigo-500/40 via-sky-500/25 to-cyan-400/20",
    tags: ["saas", "landing", "startup", "pricing", "software"],
    status: "soon",
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    description:
      "Data-rich control panel with charts, tables and a collapsible sidebar.",
    category: "Dashboard",
    emoji: "📊",
    gradient: "from-violet-500/40 via-fuchsia-500/25 to-purple-400/20",
    tags: ["admin", "dashboard", "analytics", "charts", "panel"],
    status: "soon",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "Minimal personal portfolio to showcase projects, writing and case studies.",
    category: "Personal",
    emoji: "🎨",
    gradient: "from-emerald-500/40 via-teal-500/25 to-green-400/20",
    tags: ["portfolio", "personal", "resume", "creative", "designer"],
    status: "soon",
  },
  {
    slug: "blog-magazine",
    title: "Blog & Magazine",
    description:
      "Editorial layout for long-form articles, newsletters and content sites.",
    category: "Publishing",
    emoji: "📰",
    gradient: "from-rose-500/40 via-pink-500/25 to-red-400/20",
    tags: ["blog", "magazine", "article", "news", "editorial", "writing"],
    status: "soon",
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    description:
      "Appetizing menu-first layout with reservations and location details.",
    category: "Hospitality",
    emoji: "🍽️",
    gradient: "from-amber-500/40 via-orange-500/25 to-yellow-400/20",
    tags: ["restaurant", "menu", "food", "cafe", "reservation"],
    status: "soon",
  },
];
