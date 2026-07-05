import type { Brand } from "./types";

// Continuously scrolling brand strip (right -> left)
export const brands: Brand[] = [
  { id: 1, name: "Apple", seed: "brand-apple", color: "#555", href: "#" },
  { id: 2, name: "Samsung", seed: "brand-samsung", color: "#1428a0", href: "#" },
  { id: 3, name: "Sony", seed: "brand-sony", color: "#000", href: "#" },
  { id: 4, name: "Nike", seed: "brand-nike", color: "#111", href: "#" },
  { id: 5, name: "Adidas", seed: "brand-adidas", color: "#0a0a0a", href: "#" },
  { id: 6, name: "Lenovo", seed: "brand-lenovo", color: "#e2231a", href: "#" },
  { id: 7, name: "HP", seed: "brand-hp", color: "#0096d6", href: "#" },
  { id: 8, name: "Dell", seed: "brand-dell", color: "#007db8", href: "#" },
  { id: 9, name: "Asus", seed: "brand-asus", color: "#000", href: "#" },
  { id: 10, name: "Xiaomi", seed: "brand-xiaomi", color: "#ff6900", href: "#" },
  { id: 11, name: "Oppo", seed: "brand-oppo", color: "#1ba784", href: "#" },
  { id: 12, name: "Bose", seed: "brand-bose", color: "#222", href: "#" },
  { id: 13, name: "LG", seed: "brand-lg", color: "#a50034", href: "#" },
  { id: 14, name: "Panasonic", seed: "brand-panasonic", color: "#0054a6", href: "#" },
  { id: 15, name: "Philips", seed: "brand-philips", color: "#0067a5", href: "#" },
];

// "Top Brands" showcase (Sony-style footer section) — circular logos
export const topBrands: Brand[] = [
  { id: 1, name: "Apple", seed: "top-apple", color: "#555", href: "#" },
  { id: 2, name: "Samsung", seed: "top-samsung", color: "#1428a0", href: "#" },
  { id: 3, name: "Sony", seed: "top-sony", color: "#000", href: "#" },
  { id: 4, name: "Bose", seed: "top-bose", color: "#222", href: "#" },
  { id: 5, name: "LG", seed: "top-lg", color: "#a50034", href: "#" },
  { id: 6, name: "JBL", seed: "top-jbl", color: "#e82c2c", href: "#" },
  { id: 7, name: "Canon", seed: "top-canon", color: "#cc0000", href: "#" },
  { id: 8, name: "Nikon", seed: "top-nikon", color: "#ffe600", href: "#" },
  { id: 9, name: "GoPro", seed: "top-gopro", color: "#0a0a0a", href: "#" },
  { id: 10, name: "Dyson", seed: "top-dyson", color: "#9b1c2b", href: "#" },
];
