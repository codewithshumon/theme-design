// Brand directory types -------------------------------------------------------

export interface MallBrand {
  id: number;
  name: string;
  logoSeed: string; // square logo -> img(logoSeed)
  bannerSeed: string; // wide banner -> wideImg(bannerSeed)
  color: string; // accent color for the logo tile fallback
  category: string; // one of brandCategories
  followers: number; // e.g. 12_400_000
  rating: number; // 4.x
  promo?: string; // e.g. "Up to 70% Off"
  featured?: boolean; // shown in the Featured row
}

// Filter tabs for the all-brands grid ("All" shows every brand).
export const brandCategories = [
  "All",
  "Electronics",
  "Mobile & Gadgets",
  "Computers",
  "Audio",
  "Home & Living",
  "Fashion",
  "Health & Beauty",
] as const;
