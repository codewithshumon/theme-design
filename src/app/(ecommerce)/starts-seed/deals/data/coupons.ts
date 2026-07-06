import type { Coupon } from "./types";

/** Claimable coupon / voucher cards for the coupon center. */
export const coupons: Coupon[] = [
  { id: 1, code: "MEGA15", value: "$15 OFF", minSpend: 80, scope: "Storewide", expiresLabel: "Expires in 2 days", color: "#ee4d2d" },
  { id: 2, code: "TECH25", value: "25% OFF", minSpend: 120, scope: "Tech & Gadgets", expiresLabel: "Expires in 5 days", color: "#0f766e" },
  { id: 3, code: "HOME20", value: "20% OFF", minSpend: 90, scope: "Home & Kitchen", expiresLabel: "Expires in 3 days", color: "#2563eb" },
  { id: 4, code: "FASHION30", value: "30% OFF", minSpend: 60, scope: "Fashion", expiresLabel: "Expires today", color: "#9333ea" },
  { id: 5, code: "SHIP0", value: "Free Ship", minSpend: 0, scope: "Storewide", expiresLabel: "Expires in 1 day", color: "#16a34a" },
  { id: 6, code: "BEAUTY10", value: "$10 OFF", minSpend: 50, scope: "Beauty", expiresLabel: "Expires in 4 days", color: "#db2777" },
];
