import type { Product } from "../../data";

// Brand storefront listing types --------------------------------------------

/**
 * A product on the brand store extends the shared marketplace Product with the
 * extra fields the listing page needs to sort / filter (sub-category, recency,
 * ship-from country, fulfilled flag). The shared ProductCard only reads the
 * Product fields, so this is a superset.
 */
export interface BrandProduct extends Product {
  category: string; // one of storeCategories
  daysAgo: number; // listing age in days (drives the "Latest" sort)
  shippedFrom: string; // ship-from country (Shipped From filter)
  fulfilled?: boolean; // fulfilled by the platform (Shop Type filter)
}

/** The featured brand / shop shown in the "Top Picks" card. */
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
  topPickPromo?: { discount: string; minSpend: number }; // claim box in Top Picks card
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

// Sort tabs in the listing toolbar.
export const sortTabs = [
  { key: "relevant", label: "Relevance" },
  { key: "latest", label: "Latest" },
  { key: "top", label: "Top Sales" },
] as const;

// Includes the two price directions set via the arrow buttons.
export type SortKey =
  | "relevant"
  | "latest"
  | "top"
  | "priceAsc"
  | "priceDesc";

/* ----------------------------- filter option lists ------------------------ */
// Each checkbox section in "SHOP BY FILTER". Keys map to product fields in the
// SearchListing filter pipeline (see matchSection there); options whose key has
// no backing data are visual-only (toggled but don't narrow results).

export interface FilterOption {
  key: string;
  label: string;
}

export const shopTypeOptions: FilterOption[] = [
  { key: "mall", label: "Shopee Mall" },
  { key: "preferred", label: "Shopee Preferred" },
  { key: "fulfilled", label: "Fulfilled by Shopee" },
  { key: "premium", label: "Shopee Premium" },
];

export const serviceOptions: FilterOption[] = [
  { key: "shopeeVoucher", label: "Shopee Vouchers" },
  { key: "brandVoucher", label: "Brand Vouchers" },
  { key: "supportLocal", label: "Support Local" },
  { key: "wholesale", label: "Wholesale" },
];

export const shippedFromOptions: FilterOption[] = [
  { key: "Singapore", label: "Singapore" },
  { key: "Mainland China", label: "Mainland China" },
  { key: "Korea", label: "Korea" },
  { key: "Indonesia", label: "Indonesia" },
  { key: "Overseas", label: "Overseas" },
];

export const shippingOptions: FilterOption[] = [
  { key: "doorstep", label: "Doorstep Delivery" },
  { key: "nextDay", label: "Next Day Delivery" },
  { key: "express", label: "Express Delivery (Intl)" },
  { key: "selfCollection", label: "Self Collection" },
];

/* ------------------------------- filter state ----------------------------- */
/**
 * Active filter / sort state for the listing. Each checkbox section is an
 * array of selected option keys (multi-select). Lifted into the SearchListing
 * client wrapper so the sidebar, toolbar and grid all stay in sync.
 */
export interface FilterState {
  categories: string[]; // storeCategories entries (empty = All)
  shopType: string[]; // shopTypeOptions keys
  services: string[]; // serviceOptions keys
  shippedFrom: string[]; // shippedFromOptions keys
  shipping: string[]; // shippingOptions keys
  ratingMin: number; // 0 = any
  priceMin: string; // text inputs (kept as strings)
  priceMax: string;
  activePriceChip: string | null; // label of the active chip, if any
  sort: SortKey;
  view: "grid" | "list";
}

/** The checkbox-backed sections (for the generic toggle helper). */
export type CheckboxSection =
  | "categories"
  | "shopType"
  | "services"
  | "shippedFrom"
  | "shipping";

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
