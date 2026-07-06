import type { MallBrand } from "./types";

// Mock brand directory — logos/banners are turned into free stock images
// (Lorem Picsum) by the components via the shared img/wideImg helpers,
// using these deterministic seeds.
export const allBrands: MallBrand[] = [
  { id: 1, name: "Apple", category: "Mobile & Gadgets", color: "#555", followers: 12_400_000, rating: 4.9, promo: "Up to 15% Off", featured: true, logoSeed: "b-logo-apple", bannerSeed: "b-banner-apple" },
  { id: 2, name: "Samsung", category: "Electronics", color: "#1428a0", followers: 9_800_000, rating: 4.8, promo: "Up to 25% Off", featured: true, logoSeed: "b-logo-samsung", bannerSeed: "b-banner-samsung" },
  { id: 3, name: "Sony", category: "Electronics", color: "#111", followers: 6_200_000, rating: 4.8, promo: "Up to 30% Off", featured: true, logoSeed: "b-logo-sony", bannerSeed: "b-banner-sony" },
  { id: 4, name: "Google", category: "Mobile & Gadgets", color: "#4285f4", followers: 4_100_000, rating: 4.7, promo: "Up to 20% Off", featured: true, logoSeed: "b-logo-google", bannerSeed: "b-banner-google" },
  { id: 5, name: "Xiaomi", category: "Mobile & Gadgets", color: "#ff6900", followers: 5_500_000, rating: 4.6, promo: "Up to 40% Off", logoSeed: "b-logo-xiaomi", bannerSeed: "b-banner-xiaomi" },
  { id: 6, name: "Oppo", category: "Mobile & Gadgets", color: "#1ba784", followers: 3_200_000, rating: 4.5, promo: "Up to 35% Off", logoSeed: "b-logo-oppo", bannerSeed: "b-banner-oppo" },

  { id: 7, name: "Bose", category: "Audio", color: "#222", followers: 2_800_000, rating: 4.9, promo: "Up to 30% Off", featured: true, logoSeed: "b-logo-bose", bannerSeed: "b-banner-bose" },
  { id: 8, name: "JBL", category: "Audio", color: "#e82c2c", followers: 4_600_000, rating: 4.7, promo: "Up to 45% Off", logoSeed: "b-logo-jbl", bannerSeed: "b-banner-jbl" },
  { id: 9, name: "Sennheiser", category: "Audio", color: "#1a1a1a", followers: 1_400_000, rating: 4.8, promo: "Up to 25% Off", logoSeed: "b-logo-sennheiser", bannerSeed: "b-banner-sennheiser" },

  { id: 10, name: "Lenovo", category: "Computers", color: "#e2231a", followers: 3_900_000, rating: 4.6, promo: "Up to 30% Off", logoSeed: "b-logo-lenovo", bannerSeed: "b-banner-lenovo" },
  { id: 11, name: "Dell", category: "Computers", color: "#007db8", followers: 2_100_000, rating: 4.5, promo: "Up to 28% Off", logoSeed: "b-logo-dell", bannerSeed: "b-banner-dell" },
  { id: 12, name: "HP", category: "Computers", color: "#0096d6", followers: 2_600_000, rating: 4.5, promo: "Up to 32% Off", logoSeed: "b-logo-hp", bannerSeed: "b-banner-hp" },
  { id: 13, name: "Asus", category: "Computers", color: "#000", followers: 3_400_000, rating: 4.6, promo: "Up to 35% Off", logoSeed: "b-logo-asus", bannerSeed: "b-banner-asus" },
  { id: 14, name: "Logitech", category: "Computers", color: "#00b8fc", followers: 2_900_000, rating: 4.7, promo: "Up to 30% Off", logoSeed: "b-logo-logitech", bannerSeed: "b-banner-logitech" },

  { id: 15, name: "LG", category: "Electronics", color: "#a50034", followers: 4_800_000, rating: 4.7, promo: "Up to 35% Off", featured: true, logoSeed: "b-logo-lg", bannerSeed: "b-banner-lg" },
  { id: 16, name: "Dyson", category: "Home & Living", color: "#d6006e", followers: 5_100_000, rating: 4.8, promo: "Free Gifts", featured: true, logoSeed: "b-logo-dyson", bannerSeed: "b-banner-dyson" },
  { id: 17, name: "Philips", category: "Home & Living", color: "#0067a5", followers: 3_700_000, rating: 4.6, promo: "Up to 30% Off", logoSeed: "b-logo-philips", bannerSeed: "b-banner-philips" },
  { id: 18, name: "IKEA", category: "Home & Living", color: "#0058a3", followers: 6_800_000, rating: 4.7, promo: "Up to 20% Off", logoSeed: "b-logo-ikea", bannerSeed: "b-banner-ikea" },

  { id: 19, name: "Nike", category: "Fashion", color: "#111", followers: 11_200_000, rating: 4.8, promo: "Up to 40% Off", featured: true, logoSeed: "b-logo-nike", bannerSeed: "b-banner-nike" },
  { id: 20, name: "Adidas", category: "Fashion", color: "#0a0a0a", followers: 7_400_000, rating: 4.7, promo: "Up to 35% Off", logoSeed: "b-logo-adidas", bannerSeed: "b-banner-adidas" },
  { id: 21, name: "Puma", category: "Fashion", color: "#1b1b1b", followers: 2_500_000, rating: 4.5, promo: "Up to 30% Off", logoSeed: "b-logo-puma", bannerSeed: "b-banner-puma" },
  { id: 22, name: "Uniqlo", category: "Fashion", color: "#e60019", followers: 3_600_000, rating: 4.6, promo: "From $9.90", logoSeed: "b-logo-uniqlo", bannerSeed: "b-banner-uniqlo" },

  { id: 23, name: "L'Oréal", category: "Health & Beauty", color: "#000", followers: 4_300_000, rating: 4.7, promo: "Buy 2 Free 1", featured: true, logoSeed: "b-logo-loreal", bannerSeed: "b-banner-loreal" },
  { id: 24, name: "Maybelline", category: "Health & Beauty", color: "#e10915", followers: 2_200_000, rating: 4.5, promo: "Up to 30% Off", logoSeed: "b-logo-maybelline", bannerSeed: "b-banner-maybelline" },
];

// Convenience views
export const featuredBrands = allBrands.filter((b) => b.featured);

/** 12.4M / 280K style follower formatting. */
export const formatFollowers = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1000) return `${Math.round(n / 1000)}K`;
  return `${n}`;
};
