// Image helper ---------------------------------------------------------------
// Uses Lorem Picsum (https://picsum.photos) — free, stock-style placeholder
// images that always load. A deterministic seed keeps the same image per key.
export const img = (seed: string | number, w = 300, h = 300) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Wide stock-style photo for banners / hero slides
export const wideImg = (seed: string | number, w = 1200, h = 400) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Shared domain types --------------------------------------------------------
export interface TopBarItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  hot?: boolean;
}

// Side drawer (Amazon "All menu") --------------------------------------------
export interface SideMenuItem {
  label: string;
  href?: string;
  highlight?: boolean; // active/selected row (e.g. "Shop By Interest")
  seeAll?: boolean; // renders a down-caret "See all" row
}

export interface SideMenuSection {
  title: string;
  items: SideMenuItem[];
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  align: "left" | "right";
  badge?: string;
}

export interface Brand {
  id: number;
  name: string;
  seed: string;
  color: string;
  href: string;
}

export interface Category {
  id: number;
  name: string;
  emoji: string;
  href: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  price: number;
  discount: number; // percent
  sold: number;
  location: string;
  rating: number;
  ratingCount: number;
  mall?: boolean;
  preferred?: boolean;
  freeShipping?: boolean;
  liked?: boolean;
}

export interface MallStore {
  id: number;
  name: string;
  seed: string;
  images: string[];
}

// Amazon-style card: a titled box with up to 4 sub-images + a "see more" link
export interface CategoryCard {
  id: number;
  title: string;
  link: string;
  items: { label: string; image: string }[];
  cta: string;
}

// Single large image tile (Amazon "international customers" style)
export interface ImageTile {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  product: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export interface WhyFeature {
  emoji: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
