import type { DealCategory } from "./types";

/** "Shop deals by category" tiles — each shows the max discount + deal count. */
export const dealCategories: DealCategory[] = [
  { id: 1, name: "Tech & Gadgets", seed: "deal-cat-tech", discount: 70, count: 1_240 },
  { id: 2, name: "Home & Kitchen", seed: "deal-cat-home", discount: 65, count: 2_180 },
  { id: 3, name: "Fashion", seed: "deal-cat-fashion", discount: 75, count: 3_640 },
  { id: 4, name: "Beauty", seed: "deal-cat-beauty", discount: 55, count: 980 },
  { id: 5, name: "Sports", seed: "deal-cat-sports", discount: 50, count: 720 },
  { id: 6, name: "Audio", seed: "deal-cat-audio", discount: 60, count: 540 },
];
