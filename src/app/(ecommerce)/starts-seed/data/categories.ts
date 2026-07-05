import type { Category, CategoryCard } from "./types";
import { img } from "./types";

// Shopee-style categories grid (icon + label) -------------------------------
export const categories: Category[] = [
  { id: 1, name: "Electronics", emoji: "📱", href: "#" },
  { id: 2, name: "Computers & Laptops", emoji: "💻", href: "#" },
  { id: 3, name: "Audio", emoji: "🎧", href: "#" },
  { id: 4, name: "Cameras", emoji: "📷", href: "#" },
  { id: 5, name: "Home Appliances", emoji: "🧺", href: "#" },
  { id: 6, name: "Kitchen", emoji: "🍳", href: "#" },
  { id: 7, name: "Fashion Men", emoji: "👔", href: "#" },
  { id: 8, name: "Fashion Women", emoji: "👗", href: "#" },
  { id: 9, name: "Shoes", emoji: "👟", href: "#" },
  { id: 10, name: "Bags", emoji: "👜", href: "#" },
  { id: 11, name: "Watches", emoji: "⌚", href: "#" },
  { id: 12, name: "Beauty", emoji: "💄", href: "#" },
  { id: 13, name: "Health", emoji: "💊", href: "#" },
  { id: 14, name: "Sports", emoji: "⚽", href: "#" },
  { id: 15, name: "Toys & Games", emoji: "🧸", href: "#" },
  { id: 16, name: "Baby", emoji: "🍼", href: "#" },
  { id: 17, name: "Groceries", emoji: "🛒", href: "#" },
  { id: 18, name: "Automotive", emoji: "🚗", href: "#" },
];

// Amazon-style "4 image grid" category cards --------------------------------
export const categoryCards: CategoryCard[] = [
  {
    id: 1,
    title: "Shop deals in Electronics",
    link: "#",
    cta: "See all deals",
    items: [
      { label: "Headphones", image: img("cat-headphones", 200, 200) },
      { label: "Tablets", image: img("cat-tablets", 200, 200) },
      { label: "Wearables", image: img("cat-wearables", 200, 200) },
      { label: "Accessories", image: img("cat-accessories", 200, 200) },
    ],
  },
  {
    id: 2,
    title: "Home & Kitchen essentials",
    link: "#",
    cta: "Shop more",
    items: [
      { label: "Cookware", image: img("cat-cookware", 200, 200) },
      { label: "Storage", image: img("cat-storage", 200, 200) },
      { label: "Decor", image: img("cat-decor", 200, 200) },
      { label: "Bedding", image: img("cat-bedding", 200, 200) },
    ],
  },
  {
    id: 3,
    title: "Refresh your space",
    link: "#",
    cta: "See more",
    items: [
      { label: "Lighting", image: img("cat-lighting", 200, 200) },
      { label: "Furniture", image: img("cat-furniture", 200, 200) },
      { label: "Rugs", image: img("cat-rugs", 200, 200) },
      { label: "Storage", image: img("cat-storage2", 200, 200) },
    ],
  },
  {
    id: 4,
    title: "Top deals in Fashion",
    link: "#",
    cta: "See all",
    items: [
      { label: "Tops", image: img("cat-tops", 200, 200) },
      { label: "Denim", image: img("cat-denim", 200, 200) },
      { label: "Shoes", image: img("cat-shoes", 200, 200) },
      { label: "Bags", image: img("cat-bags", 200, 200) },
    ],
  },
];

// Section 10 — Amazon complex grid: 4 + 4 + 1 + 4 layout ---------------------
export const complexCategoryGrid = {
  row1: [
    { title: "Gaming gear", image: img("grid-game1", 220, 220) },
    { title: "Keyboards", image: img("grid-game2", 220, 220) },
    { title: "Mice", image: img("grid-game3", 220, 220) },
    { title: "Headsets", image: img("grid-game4", 220, 220) },
  ],
  row2: [
    { title: "Skincare", image: img("grid-beauty1", 220, 220) },
    { title: "Makeup", image: img("grid-beauty2", 220, 220) },
    { title: "Fragrance", image: img("grid-beauty3", 220, 220) },
    { title: "Hair care", image: img("grid-beauty4", 220, 220) },
  ],
  banner: {
    title: "Prime Day is coming",
    subtitle: "Members save big — July 16–17",
    image: img("grid-banner-prime", 900, 460),
    link: "#",
  },
  row4: [
    { title: "Fitness", image: img("grid-sport1", 220, 220) },
    { title: "Outdoor", image: img("grid-sport2", 220, 220) },
    { title: "Cycling", image: img("grid-sport3", 220, 220) },
    { title: "Yoga", image: img("grid-sport4", 220, 220) },
  ],
};
