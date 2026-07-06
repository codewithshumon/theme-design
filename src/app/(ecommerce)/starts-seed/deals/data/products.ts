import { img } from "../../data";
import { dealCategoryTabs, type DealProduct } from "./types";

/** Valid deal categories = the listing tabs minus "All". */
type Category = Exclude<(typeof dealCategoryTabs)[number], "All">;

/**
 * Mock deals catalog. Mirrors the parent `p()` helper (deterministic sold /
 * rating / stock so sort orders are stable) and extends the shared Product with
 * a sub-category. `left` (stock remaining) drives the flash-card urgency bar.
 */
let pid = 0;
const locations = ["Overseas", "Singapore", "Dhaka", "Chattogram", "Khulna"];

const dp = (
  name: string,
  seed: string,
  price: number,
  discount: number,
  category: Category,
  opts: Omit<Partial<DealProduct>, "category"> = {}
): DealProduct => {
  const id = ++pid;
  const originalPrice = Math.round((price / (1 - discount / 100)) * 100) / 100;
  return {
    id,
    name,
    image: img(seed, 300, 300),
    originalPrice,
    price,
    discount,
    sold: 200 + Math.floor(Math.abs(Math.sin(id * 1.7)) * 18000),
    location: locations[id % locations.length],
    rating: 4 + ((id * 7) % 10) / 10,
    ratingCount: 40 + ((id * 137) % 6000),
    freeShipping: id % 2 === 0,
    left: 2 + ((id * 13) % 90), // 2..91 -> some fall in the "ending soon" low band
    category,
    ...opts,
  };
};

export const allDeals: DealProduct[] = [
  // Tech & Gadgets
  dp("Flagship Smartphone 5G 256GB", "dl-phone", 599.0, 35, "Tech & Gadgets", { mall: true, preferred: true, shopeeVoucher: true, shopVoucher: 25 }),
  dp("Smart Watch Series 9 GPS 45mm", "dl-watch", 119.0, 45, "Tech & Gadgets", { preferred: true, shopeeVoucher: true, shopVoucher: 20 }),
  dp("True Wireless Earbuds ANC Pro", "dl-earbuds", 27.9, 57, "Tech & Gadgets", { mall: true, shopVoucher: 15 }),
  dp("4K Action Camera 20MP Waterproof", "dl-actioncam", 79.0, 50, "Tech & Gadgets"),
  dp("Fast Charge Power Bank 20000mAh", "dl-powerbank", 17.9, 64, "Tech & Gadgets", { preferred: true, shopVoucher: 10 }),
  dp("1080p Webcam with Ring Light", "dl-webcam", 25.9, 44, "Tech & Gadgets", { mall: true }),
  dp("Gaming Mouse 16000 DPI RGB", "dl-gmouse", 15.9, 47, "Tech & Gadgets"),
  dp("USB-C Hub 9-in-1 4K HDMI", "dl-hub", 21.9, 41, "Tech & Gadgets", { shopeeVoucher: true }),

  // Home & Kitchen
  dp("Air Fryer 5.5L Digital Touch", "dl-airfryer", 54.0, 48, "Home & Kitchen", { mall: true, shopVoucher: 15 }),
  dp("Robot Vacuum Cleaner LiDAR", "dl-vacuum", 209.0, 35, "Home & Kitchen", { mall: true, preferred: true, shopeeVoucher: true, shopVoucher: 20 }),
  dp("Espresso Machine 15 Bar", "dl-espresso", 179.0, 33, "Home & Kitchen", { mall: true }),
  dp("Stainless Cookware Set 10pc", "dl-cookware", 46.0, 45, "Home & Kitchen", { preferred: true, shopVoucher: 10 }),
  dp("Electric Kettle 1.7L Fast Boil", "dl-kettle", 20.9, 50, "Home & Kitchen"),
  dp("Air Purifier HEPA H13", "dl-purifier", 119.0, 30, "Home & Kitchen", { mall: true, shopeeVoucher: true }),
  dp("Espresso Burr Grinder", "dl-grinder", 64.9, 38, "Home & Kitchen"),
  dp("Vacuum Insulated Bottle 1L", "dl-bottle", 11.9, 52, "Home & Kitchen", { preferred: true, shopVoucher: 10 }),

  // Fashion
  dp("Running Sneakers Pro Air", "dl-sneaker", 44.9, 55, "Fashion", { preferred: true, shopeeVoucher: true, shopVoucher: 15 }),
  dp("Genuine Leather Wallet RFID", "dl-wallet", 14.9, 48, "Fashion"),
  dp("UV400 Polarized Sunglasses", "dl-sunglass", 12.9, 60, "Fashion", { mall: true, shopVoucher: 10 }),
  dp("Packable Down Jacket Warm", "dl-jacket", 59.9, 40, "Fashion", { preferred: true }),
  dp("Italian Leather Watch Strap", "dl-strap", 9.9, 44, "Fashion"),
  dp("Organic Cotton Tee Pack of 3", "dl-tee", 19.9, 50, "Fashion", { shopeeVoucher: true, shopVoucher: 10 }),

  // Beauty
  dp("Ionic Hair Dryer 1875W", "dl-dryer", 27.9, 45, "Beauty", { mall: true, shopVoucher: 15 }),
  dp("Vitamin C Brightening Serum", "dl-serum", 13.9, 40, "Beauty", { preferred: true, shopeeVoucher: true }),
  dp("Everyday Makeup Palette 35", "dl-palette", 18.9, 52, "Beauty"),
  dp("Eau de Parfum 50ml", "dl-perfume", 34.9, 38, "Beauty", { mall: true, shopVoucher: 10 }),
  dp("Gentle Facial Foam Cleanser", "dl-cleanser", 7.9, 46, "Beauty"),

  // Sports
  dp("Non-Slip Yoga Mat 6mm", "dl-yoga", 15.9, 50, "Sports", { preferred: true, shopVoucher: 10 }),
  dp("Adjustable Dumbbell Set 20kg", "dl-dumbbell", 89.0, 35, "Sports", { mall: true, shopeeVoucher: true }),
  dp("Resistance Bands Set 5pc", "dl-bands", 8.9, 55, "Sports"),
  dp("Insulated Cycling Bottle 750ml", "dl-cbottle", 10.9, 42, "Sports"),
  dp("Bearing Jump Rope Pro", "dl-jumprope", 6.9, 48, "Sports", { preferred: true }),

  // Audio
  dp("Wireless Noise-Cancelling Headphones", "dl-headphones", 54.9, 62, "Audio", { mall: true, preferred: true, shopeeVoucher: true, shopVoucher: 20 }),
  dp("Studio Monitor Speakers Pair", "dl-monitor", 149.0, 30, "Audio", { mall: true }),
  dp("2.1 Channel Soundbar", "dl-soundbar", 79.0, 40, "Audio", { preferred: true, shopVoucher: 15 }),
  dp("Bluetooth Vinyl Turntable", "dl-turntable", 119.0, 33, "Audio", { mall: true, shopeeVoucher: true }),
  dp("Entry DJ Controller USB", "dl-dj", 94.0, 36, "Audio"),

  // A few more across categories to round out the grid
  dp("Portable SSD 1TB USB 3.2", "dl-ssd", 74.0, 39, "Tech & Gadgets", { mall: true, shopVoucher: 15 }),
  dp("Mechanical Keyboard RGB Hot-Swap", "dl-keyboard", 38.9, 38, "Tech & Gadgets", { preferred: true }),
  dp("Cast Iron Skillet 12 inch", "dl-skillet", 22.9, 44, "Home & Kitchen", { mall: true, shopVoucher: 10 }),
  dp("Merino Wool Beanie", "dl-beanie", 9.9, 50, "Fashion"),
  dp("Electric Facial Cleansing Brush", "dl-facebrush", 16.9, 47, "Beauty", { preferred: true, shopVoucher: 10 }),
  dp("Foam Roller Recovery 33cm", "dl-roller", 12.9, 45, "Sports"),
];

// Flash sale = the deepest discounts (carousel of urgency cards).
export const flashDeals = [...allDeals]
  .sort((a, b) => b.discount - a.discount)
  .slice(0, 12);

// Ending soon = lowest remaining stock.
export const endingSoon = allDeals
  .filter((d) => (d.left ?? 99) <= 18)
  .sort((a, b) => (a.left ?? 99) - (b.left ?? 99))
  .slice(0, 8);
