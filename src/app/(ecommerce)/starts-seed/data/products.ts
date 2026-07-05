import type { Product, MallStore } from "./types";
import { img } from "./types";

// Helper to build a product quickly
let pid = 0;
const p = (
  name: string,
  seed: string,
  price: number,
  discount: number,
  opts: Partial<Product> = {}
): Product => {
  const originalPrice = Math.round((price / (1 - discount / 100)) * 100) / 100;
  return {
    id: ++pid,
    name,
    image: img(seed, 300, 300),
    originalPrice,
    price,
    discount,
    sold: 100 + Math.floor(Math.abs(Math.sin(pid)) * 9000),
    location: ["Dhaka", "Chattogram", "Khulna", "Singapore", "Overseas"][pid % 5],
    rating: 4 + ((pid * 7) % 10) / 10,
    ratingCount: 20 + ((pid * 137) % 4000),
    freeShipping: pid % 2 === 0,
    ...opts,
  };
};

// Flash deals (campaign) -----------------------------------------------------
export const flashDeals: Product[] = [
  p("Wireless Noise-Cancelling Headphones", "fd-headphones", 59.9, 62, { mall: true }),
  p("Smart Watch Series 9 GPS 45mm", "fd-watch", 129.0, 45, { preferred: true }),
  p("Bluetooth Speaker Portable IPX7", "fd-speaker", 24.5, 53),
  p("Mechanical Keyboard RGB Hot-Swap", "fd-keyboard", 39.9, 38, { mall: true }),
  p("4K Action Camera 20MP Waterproof", "fd-camera", 89.0, 50),
  p("Fast Charging Power Bank 20000mAh", "fd-powerbank", 18.9, 64, { preferred: true }),
  p("True Wireless Earbuds ANC", "fd-earbuds", 29.9, 57, { mall: true }),
  p("USB-C Hub 9-in-1 4K HDMI", "fd-hub", 22.9, 41),
  p("Gaming Mouse 16000 DPI", "fd-mouse", 16.9, 47, { preferred: true }),
  p("1080p Webcam with Ring Light", "fd-webcam", 27.9, 44),
  p("Portable SSD 1TB USB 3.2", "fd-ssd", 79.0, 39, { mall: true }),
  p("Smart Plug Mini WiFi", "fd-plug", 9.9, 55),
];

// Top products (Shopee Mall "Top Products") ----------------------------------
export const topProducts: Product[] = [
  p("Flagship Smartphone 5G 256GB", "tp-phone", 699.0, 22, { mall: true, preferred: true }),
  p("Ultra-Thin Laptop 16GB i7", "tp-laptop", 899.0, 18, { mall: true }),
  p("Mirrorless Camera Kit 24MP", "tp-camera", 749.0, 15, { mall: true }),
  p("OLED Smart TV 55\" 4K", "tp-tv", 549.0, 28, { mall: true, preferred: true }),
  p("Robot Vacuum Cleaner LiDAR", "tp-vacuum", 219.0, 35, { mall: true }),
  p("Air Purifier HEPA H13", "tp-purifier", 129.0, 30, { mall: true }),
  p("Espresso Machine 15 Bar", "tp-espresso", 189.0, 33, { mall: true, preferred: true }),
  p(" Cordless Drill 20V Kit", "tp-drill", 79.0, 26, { mall: true }),
];

// Best sellers (Shopee product cards) ----------------------------------------
export const bestSellers: Product[] = [
  p("Stainless Steel Water Bottle 1L", "bs-bottle", 12.9, 30, { preferred: true }),
  p("Organic Cotton T-Shirt Pack", "bs-tshirt", 19.9, 40),
  p("LED Desk Lamp Dimmable USB", "bs-lamp", 14.5, 45, { mall: true }),
  p("Yoga Mat Non-Slip 6mm", "bs-yoga", 16.9, 35),
  p("Backpack Anti-Theft 25L", "bs-back", 24.9, 42, { preferred: true }),
  p("Stainless Steel Cookware Set", "bs-cookware", 49.0, 38, { mall: true }),
  p("Memory Foam Pillow Cooling", "bs-pillow", 18.9, 33),
  p("Resistance Bands Set 5pcs", "bs-bands", 9.9, 50),
  p("Electric Kettle 1.7L Fast Boil", "bs-kettle", 22.9, 36, { mall: true }),
  p("Wireless Charger 15W Qi", "bs-charger", 13.9, 44, { preferred: true }),
  p("Smart Scale Body Composition", "bs-scale", 19.9, 39),
  p("Air Fryer 5.5L Digital", "bs-fryer", 59.0, 31, { mall: true }),
];

// Most viewed / popular (Shopee product cards) -------------------------------
export const mostViewed: Product[] = [
  p("Minimalist Wallet RFID Slim", "mv-wallet", 15.9, 28, { preferred: true }),
  p("Sunglasses UV400 Polarized", "mv-sunglass", 12.9, 35),
  p("Smart Door Lock Fingerprint", "mv-lock", 89.0, 25, { mall: true }),
  p("Portable Blender USB Rechargeable", "mv-blender", 21.9, 41),
  p("Himalayan Salt Lamp Natural", "mv-saltlamp", 17.9, 33, { preferred: true }),
  p("Foldable Camping Chair", "mv-chair", 26.9, 30),
  p("Digital Body Thermometer", "mv-thermo", 6.9, 48, { mall: true }),
  p("Microfiber Cleaning Cloths x12", "mv-cloth", 8.9, 52),
  p("Laptop Stand Aluminum Adjustable", "mv-stand", 19.9, 37, { preferred: true }),
  p("Plant Pots Self-Watering Set", "mv-pot", 14.9, 34),
  p("Hair Dryer Ionic 1875W", "mv-dryer", 29.9, 36, { mall: true }),
  p("Stainless Insulated Lunch Box", "mv-lunch", 11.9, 40),
];

// Shopee Mall stores (mall logos + preview products) -------------------------
export const mallStores: MallStore[] = [
  {
    id: 1,
    name: "TechHub Official",
    seed: "mall-techhub",
    images: [img("mall-tech-1"), img("mall-tech-2"), img("mall-tech-3")],
  },
  {
    id: 2,
    name: "StyleMall",
    seed: "mall-stylemall",
    images: [img("mall-style-1"), img("mall-style-2"), img("mall-style-3")],
  },
  {
    id: 3,
    name: "HomeComfort",
    seed: "mall-homecomfort",
    images: [img("mall-home-1"), img("mall-home-2"), img("mall-home-3")],
  },
  {
    id: 4,
    name: "BeautyBox",
    seed: "mall-beautybox",
    images: [img("mall-beauty-1"), img("mall-beauty-2"), img("mall-beauty-3")],
  },
  {
    id: 5,
    name: "SportZone",
    seed: "mall-sportzone",
    images: [img("mall-sport-1"), img("mall-sport-2"), img("mall-sport-3")],
  },
  {
    id: 6,
    name: "GadgetGalaxy",
    seed: "mall-gadget",
    images: [img("mall-gadget-1"), img("mall-gadget-2"), img("mall-gadget-3")],
  },
];

// Daily Discover (large grid) ------------------------------------------------
export const dailyDiscover: Product[] = [
  p("Ceramic Coffee Mug 350ml", "dd-mug", 7.9, 35),
  p("Phone Case Silicone Pro", "dd-case", 5.9, 42, { preferred: true }),
  p("Laptop Sleeve 15.6 Waterproof", "dd-sleeve", 11.9, 38),
  p("Wireless Mouse Silent Click", "dd-wmouse", 9.9, 45),
  p("USB-C Cable Braided 2m", "dd-cable", 4.9, 55),
  p("Desk Organizer Wood", "dd-organizer", 13.9, 33, { mall: true }),
  p("Bed Sheet Set Cotton Queen", "dd-sheet", 19.9, 30),
  p("Anti-Fatigue Kitchen Mat", "dd-kmat", 17.9, 36),
  p("Hanging Plant Macrame", "dd-macrame", 6.9, 40),
  p("Throw Blanket Soft Fleece", "dd-blanket", 14.9, 34, { preferred: true }),
  p("Glass Food Storage Set", "dd-storage", 16.9, 37, { mall: true }),
  p("Wooden Cutting Board", "dd-board", 9.9, 31),
  p("Shower Caddy Stainless", "dd-caddy", 12.9, 39),
  p("Towel Set 6pcs Egyptian", "dd-towel", 21.9, 33),
  p("Door Mat Non-Slip", "dd-dmat", 8.9, 41),
  p("Reading Light Clip-On LED", "dd-rlight", 7.9, 44, { preferred: true }),
  p("Laundry Basket Foldable", "dd-basket", 10.9, 38),
  p("Bath Pillow Spa Comfort", "dd-bpillow", 11.9, 35, { mall: true }),
  p("Picture Frame Set Wood", "dd-frame", 13.9, 32),
  p("Curtains Blackout 2 Panel", "dd-curtain", 18.9, 36),
  p("Vase Ceramic Modern", "dd-vase", 9.9, 34),
  p("Wall Clock Silent Sweep", "dd-clock", 12.9, 40, { preferred: true }),
  p("Coat Wall Hooks Rack", "dd-hooks", 7.9, 43),
  p("Bamboo Bath Tray Expandable", "dd-tray", 15.9, 37, { mall: true }),
];

// Amazon "international customers purchased" — image only -------------------
export const internationalProducts = [
  { id: 1, title: "Smartphones", image: img("intl-phone", 200, 200), link: "#" },
  { id: 2, title: "Laptops", image: img("intl-laptop", 200, 200), link: "#" },
  { id: 3, title: "Cameras", image: img("intl-camera", 200, 200), link: "#" },
  { id: 4, title: "Watches", image: img("intl-watch", 200, 200), link: "#" },
  { id: 5, title: "Headphones", image: img("intl-headphones", 200, 200), link: "#" },
  { id: 6, title: "Tablets", image: img("intl-tablet", 200, 200), link: "#" },
];

// Amazon "Best Sellers in Computers & Accessories" — image only --------------
export const computersBestSellers = [
  { id: 1, rank: 1, image: img("comp-1", 200, 200), title: "USB-C Hub 9-in-1" },
  { id: 2, rank: 2, image: img("comp-2", 200, 200), title: "Wireless Mouse" },
  { id: 3, rank: 3, image: img("comp-3", 200, 200), title: "Mechanical Keyboard" },
  { id: 4, rank: 4, image: img("comp-4", 200, 200), title: "Laptop Stand" },
  { id: 5, rank: 5, image: img("comp-5", 200, 200), title: "External SSD 1TB" },
  { id: 6, rank: 6, image: img("comp-6", 200, 200), title: "Webcam 1080p" },
];
