import type { HeroSlide } from "./types";
import { wideImg } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: wideImg("hero-summer-sale", 1200, 460),
    title: "Mega Summer Sale",
    subtitle: "Up to 70% off across every category. Free shipping over $25.",
    cta: "Shop the Sale",
    align: "left",
    badge: "Limited time",
  },
  {
    id: 2,
    image: wideImg("hero-tech-drop", 1200, 460),
    title: "New Tech, Just Dropped",
    subtitle: "Latest phones, laptops & gadgets at member-only prices.",
    cta: "Explore Tech",
    align: "right",
    badge: "New arrivals",
  },
  {
    id: 3,
    image: wideImg("hero-brand-fest", 1200, 460),
    title: "Brand Festival Week",
    subtitle: "Authentic brands you trust — guaranteed genuine.",
    cta: "Browse Brands",
    align: "left",
    badge: "Official Mall",
  },
  {
    id: 4,
    image: wideImg("hero-home-living", 1200, 460),
    title: "Refresh Your Home",
    subtitle: "Furniture, decor & kitchen essentials from $4.90.",
    cta: "Discover More",
    align: "right",
  },
];

// Small promo tiles shown beside the hero slider
export const heroPromos = [
  {
    id: 1,
    title: "Daily Vouchers",
    subtitle: "Claim now",
    image: wideImg("promo-voucher", 600, 220),
  },
  {
    id: 2,
    title: "Free Shipping",
    subtitle: "On $25+",
    image: wideImg("promo-freeship", 600, 220),
  },
];
