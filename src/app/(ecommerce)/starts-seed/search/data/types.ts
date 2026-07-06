import type { Product } from "../../data";

// Brand storefront listing types --------------------------------------------

/**
 * A product on the brand store extends the shared marketplace Product with the
 * extra fields the listing page needs to sort / filter (sub-category, recency).
 * The shared ProductCard only reads the Product fields, so this is a superset.
 */
export interface BrandProduct extends Product {
  category: string; // one of storeCategories
  daysAgo: number; // listing age in days (drives the "Latest" sort)
}

/** The featured brand whose official store this page renders. */
export interface BrandStore {
  name: string;
  tagline: string;
  category: string; // marketplace category
  logoSeed: string; // square logo -> img(logoSeed)
  bannerSeed: string; // wide banner -> wideImg(bannerSeed)
  color: string; // accent color for overlays / fallbacks
  rating: number; // 4.x
  ratingCount: number;
  followers: number;
  productsCount: number; // listed catalog size
  joinedLabel: string; // e.g. "3 Years Ago"
  responseRate: string; // e.g. "98%"
  responseTime: string; // e.g. "within hours"
  shippedOnTime: string; // e.g. "97%"
  chatPerformance: string; // e.g. "95%"
  mall?: boolean; // Shopee Mall badge
  preferred?: boolean; // Preferred seller badge
  promo?: string; // e.g. "Up to 40% Off Storewide"
}

// Sub-categories shown in the filter sidebar ("All" clears the filter).
export const storeCategories = [
  "All",
  "Storage Boxes & Bins",
  "Shelving & Racks",
  "Kitchen Organization",
  "Wardrobe & Closet",
  "Laundry & Baskets",
  "Travel & Totes",
  "Desk & Drawer",
  "Bathroom Storage",
] as const;

// Sort tabs in the listing toolbar (the two price directions are set via the
// arrow buttons, not the tab row, but share the same SortKey union).
export const sortTabs = [
  { key: "relevant", label: "Relevance" },
  { key: "latest", label: "Latest" },
  { key: "top", label: "Top Sales" },
] as const;

export type SortKey =
  | "relevant"
  | "latest"
  | "top"
  | "priceAsc"
  | "priceDesc";

/**
 * The active filter / sort state for the listing. Lifted into the SearchListing
 * client wrapper so the sidebar, toolbar and grid all stay in sync.
 */
export interface FilterState {
  category: string; // storeCategories entry ("All" clears it)
  freeShipping: boolean;
  mallOnly: boolean;
  preferredOnly: boolean;
  voucherOnly: boolean;
  ratingMin: number; // 0 = any
  priceMin: string; // text inputs (kept as strings)
  priceMax: string;
  activePriceChip: string | null; // label of the active chip, if any
  sort: SortKey;
  view: "grid" | "list";
}

// Quick price-range chips in the PRICE filter block.
export interface PriceChip {
  label: string;
  min: number;
  max: number;
}

export const priceChips: PriceChip[] = [
  { label: "Under $10", min: 0, max: 10 },
  { label: "$10 – $25", min: 10, max: 25 },
  { label: "$25 – $50", min: 25, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Number.POSITIVE_INFINITY },
];

export interface RatingFilter {
  label: string;
  min: number;
}

export const ratingFilters: RatingFilter[] = [
  { label: "5 Stars", min: 5 },
  { label: "4 Stars & Up", min: 4 },
  { label: "3 Stars & Up", min: 3 },
];
