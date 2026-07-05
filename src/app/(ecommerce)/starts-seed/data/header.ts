import type { TopBarItem, NavLink } from "./types";

// Row 1 — Shopee-style utility bar ------------------------------------------
export const topBarLeft: TopBarItem[] = [
  { label: "Seller Centre", href: "#" },
  { label: "Start Selling", href: "#" },
  { label: "Download", href: "#" },
];

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
];

export const topBarRight: TopBarItem[] = [
  { label: "Notifications", href: "#" },
  { label: "Help", href: "#" },
];

export const languages = [
  { code: "EN", label: "English" },
  { code: "BN", label: "বাংলা" },
  { code: "HI", label: "हिन्दी" },
  { code: "ZH", label: "中文" },
  { code: "MS", label: "Melayu" },
];

// Row 2 — Amazon-style primary nav locations --------------------------------
export const deliverTo = {
  label: "Deliver to",
  place: "Dhaka 1207",
};

export const accountLinks = {
  greeting: "Hello, sign in",
  lists: ["Your Lists", "Create a Wish List", "Find a Gift", "Wedding Registry"],
  account: [
    "Your Account",
    "Your Orders",
    "Your Wish List",
    "Recommendations",
    "Prime Membership",
    "Subscribe & Save",
    "Memberships",
  ],
};

export const cartCount = 3;

// Row 3 — Amazon-style secondary nav ----------------------------------------
export const mainNav: NavLink[] = [
  { label: "Today's Deals", href: "#", hot: true },
  { label: "Customer Service", href: "#" },
  { label: "Registry", href: "#" },
  { label: "Gift Cards", href: "#" },
  { label: "Sell", href: "#" },
  { label: "Electronics", href: "#" },
  { label: "Home & Kitchen", href: "#" },
  { label: "Fashion", href: "#" },
  { label: "Beauty", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Toys & Games", href: "#" },
];

// Rotating search-bar placeholders. Latest campaign / discount / slogan.
export const searchPlaceholders = [
  "Mega Brand Fest — up to 70% OFF sitewide",
  "Flash Sale: Electronics from $0.99 today",
  "Free Shipping on orders over $25",
  "Mid-Year Deals — Save big on top brands",
  "Shop the Latest Drops & New Arrivals",
];
