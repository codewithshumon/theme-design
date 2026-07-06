import type { BrandStore } from "./types";

/**
 * The featured brand whose official store this page renders.
 * Logos / banners are turned into free stock images (Lorem Picsum) by the
 * components via the shared img/wideImg helpers, using these deterministic seeds.
 */
export const store: BrandStore = {
  name: "UrbanVault",
  tagline: "Smart Storage & Home Organization",
  category: "Home & Living",
  logoSeed: "uv-logo",
  bannerSeed: "uv-banner",
  color: "#0f766e", // teal accent for overlays
  rating: 4.8,
  ratingCount: 184_320,
  followers: 2_460_000,
  productsCount: 4_820,
  joinedLabel: "3 Years Ago",
  responseRate: "98%",
  responseTime: "within hours",
  shippedOnTime: "97%",
  chatPerformance: "95%",
  mall: true,
  preferred: true,
  promo: "Up to 40% Off Storewide",
};

/** 2.46M / 280K style follower formatting. */
export const formatFollowers = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1000) return `${Math.round(n / 1000)}K`;
  return `${n}`;
};
