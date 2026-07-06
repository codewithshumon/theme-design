import type { Campaign } from "./types";

/**
 * The featured mega-sale campaign for the deals hero. `endsInSec` drives the
 * live multi-box countdown (it resets when it reaches zero, so the page always
 * shows an active sale).
 */
export const campaign: Campaign = {
  name: "Mega Mid-Year Sale",
  subtitle: "Up to 70% off storewide — stack vouchers, grab free gifts & free shipping",
  badge: "Limited Time Only",
  heroSeed: "deals-hero",
  color: "#d4380d", // shopee-dark gradient base
  endsInSec: 2 * 86_400 + 8 * 3_600 + 45 * 60 + 12, // ~2d 8h 45m 12s
  perks: [
    { icon: "🚚", label: "Free Shipping over $25" },
    { icon: "🎟️", label: "Stackable Vouchers" },
    { icon: "↩️", label: "15-Day Returns" },
    { icon: "🎁", label: "Free Gifts on $99+" },
  ],
  stats: [
    { value: "70%", label: "Up to Off" },
    { value: "12,480", label: "Deals Live" },
    { value: "$2.4M", label: "Saved Today" },
    { value: "4.9★", label: "Shopper Rating" },
  ],
};
