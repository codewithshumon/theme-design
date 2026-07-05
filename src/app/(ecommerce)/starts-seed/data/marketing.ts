import type { WhyFeature, Testimonial, BlogPost, Stat } from "./types";
import { img } from "./types";

// Newsletter subscribe section copy ------------------------------------------
export const subscribeCopy = {
  title: "Get $10 off your first order",
  subtitle:
    "Subscribe to our newsletter for exclusive deals, new arrivals and member-only campaigns. No spam, unsubscribe anytime.",
  finePrint: "By subscribing you agree to our Privacy Policy & Terms of Service.",
};

// "Why Genuine from Authorized Distributor" ----------------------------------
export const genuineFeatures: WhyFeature[] = [
  { emoji: "✅", title: "100% Authentic", description: "Every product ships with a verifiable serial and official warranty." },
  { emoji: "🛡️", title: "Official Warranty", description: "Manufacturer-backed coverage honored at authorized service centers." },
  { emoji: "📦", title: "Sealed Packaging", description: "Brand-new, factory-sealed units — never refurbished or opened." },
  { emoji: "🌐", title: "Authorized Source", description: "Imported directly from licensed regional distributors." },
];

export const genuineStats: Stat[] = [
  { value: "1M+", label: "Genuine products sold" },
  { value: "4.9★", label: "Avg. authenticity rating" },
  { value: "200+", label: "Authorized brands" },
  { value: "2 Yr", label: "Extended warranty" },
];

// "Why Shop With Us" ---------------------------------------------------------
export const whyShopFeatures: WhyFeature[] = [
  { emoji: "🚚", title: "Free & Fast Shipping", description: "Free delivery on orders over $25, with same-day options in metro areas." },
  { emoji: "↩️", title: "30-Day Returns", description: "Changed your mind? Return any item within 30 days, no questions asked." },
  { emoji: "🔒", title: "Secure Payments", description: "256-bit encrypted checkout with buyer protection on every order." },
  { emoji: "💬", title: "24/7 Support", description: "Real humans on chat, email and phone — whenever you need help." },
  { emoji: "🏆", title: "Best Price Guarantee", description: "Find it cheaper elsewhere and we'll match the price." },
  { emoji: "🎁", title: "Reward Points", description: "Earn points on every purchase and redeem them for real discounts." },
];

// "What Our Customers Say" ---------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Rahman",
    avatar: img("avatar-aisha", 100, 100),
    location: "Dhaka",
    rating: 5,
    text: "Genuinely authentic products and lightning-fast delivery. The warranty gave me total peace of mind.",
    product: "Wireless Headphones",
  },
  {
    id: 2,
    name: "Tanvir Hossain",
    avatar: img("avatar-tanvir", 100, 100),
    location: "Chattogram",
    rating: 5,
    text: "Best prices I could find anywhere. The flash deals are unreal — saved almost 60% on my laptop.",
    product: "Ultra-Thin Laptop",
  },
  {
    id: 3,
    name: "Mei Ling",
    avatar: img("avatar-mei", 100, 100),
    location: "Singapore",
    rating: 4,
    text: "Smooth checkout and great support. Returns were hassle-free when I needed a different size.",
    product: "Smart Watch",
  },
  {
    id: 4,
    name: "Daniel Cruz",
    avatar: img("avatar-daniel", 100, 100),
    location: "Manila",
    rating: 5,
    text: "The mall section guarantees authentic brands. This is now my go-to store for electronics.",
    product: "Mirrorless Camera",
  },
];

// "Latest from Our Blog" -----------------------------------------------------
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Gadgets That Will Upgrade Your Home Office in 2026",
    image: img("blog-office", 400, 240),
    date: "Jul 2, 2026",
    excerpt: "From ergonomic chairs to smart lighting, here's everything you need for productivity.",
    category: "Tech",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Spot a Fake: A Buyer's Guide to Authentic Electronics",
    image: img("blog-authentic", 400, 240),
    date: "Jun 28, 2026",
    excerpt: "Learn the tell-tale signs of counterfeit products and shop with confidence.",
    category: "Guides",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Mega Summer Sale: The Best Deals You Can't Miss",
    image: img("blog-sale", 400, 240),
    date: "Jun 20, 2026",
    excerpt: "Our editors rounded up the deepest discounts across every category.",
    category: "Deals",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Sustainable Living: Eco-Friendly Swaps for Your Kitchen",
    image: img("blog-eco", 400, 240),
    date: "Jun 15, 2026",
    excerpt: "Small changes, big impact. Start your sustainable journey today.",
    category: "Lifestyle",
    readTime: "6 min read",
  },
];
