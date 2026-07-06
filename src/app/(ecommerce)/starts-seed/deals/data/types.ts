import type { Product } from "../../data";

// Deals / campaign page types ------------------------------------------------

/**
 * A deal product extends the shared marketplace Product with the sub-category
 * the listing filters by. The shared ProductCard / FlashDealCard only read the
 * Product fields, so this is a superset. `left` (stock remaining) already lives
 * on Product and drives the flash-card urgency bar.
 */
export interface DealProduct extends Product {
  category: string; // one of dealCategoryTabs
}

/** The featured mega-sale campaign shown in the hero. */
export interface Campaign {
  name: string;
  subtitle: string;
  badge: string; // small tag, e.g. "Limited Time"
  heroSeed: string; // wide hero image -> wideImg(heroSeed)
  color: string; // gradient base color for overlays
  endsInSec: number; // countdown duration (resets to this when it hits 0)
  perks: { icon: string; label: string }[];
  stats: { value: string; label: string }[];
}

/** A claimable coupon / voucher card. */
export interface Coupon {
  id: number;
  code: string; // e.g. "MEGA15"
  value: string; // e.g. "$15 OFF" or "25% OFF"
  minSpend: number; // minimum spend in $
  scope: string; // "Storewide" or a category
  expiresLabel: string; // e.g. "Expires in 2 days"
  color: string; // accent for the ticket edge
}

/** A "shop by category" deal tile. */
export interface DealCategory {
  id: number;
  name: string;
  seed: string; // stock image -> img(seed)
  discount: number; // percent, shown as "Up to X% Off"
  count: number; // number of live deals in the category
}

// Filter tabs for the deals listing ("All" clears the category filter).
export const dealCategoryTabs = [
  "All",
  "Tech & Gadgets",
  "Home & Kitchen",
  "Fashion",
  "Beauty",
  "Sports",
  "Audio",
] as const;

// Sort tabs in the listing toolbar.
export const sortTabs = [
  { key: "relevant", label: "Relevance" },
  { key: "latest", label: "Latest" },
  { key: "top", label: "Top Sales" },
] as const;

// Includes the two price directions set via the arrow buttons.
export type SortKey = "relevant" | "latest" | "top" | "priceAsc" | "priceDesc";

/** Active filter state for the deals listing. */
export interface FilterState {
  category: string; // dealCategoryTabs entry ("All" clears it)
  sort: SortKey;
  view: "grid" | "list";
}
