import { img } from "../../data";
import { storeCategories, type BrandProduct } from "./types";

/** Valid product sub-categories = the sidebar categories minus "All". */
type Category = Exclude<(typeof storeCategories)[number], "All">;

/**
 * Mock catalog for the UrbanVault brand store. ~40 storage & organization
 * products so the Shopee-style pagination shows multiple pages.
 *
 * Mirrors the parent `p()` helper: deterministic sold/rating/etc. so the sort
 * orders are stable across renders. Extends the shared Product with a
 * sub-category and recency (daysAgo) for the listing filters / sorts.
 */
let pid = 0;
const locations = ["Overseas", "Singapore", "Dhaka", "Chattogram", "Khulna"];
const shipCountries = ["Singapore", "Mainland China", "Korea", "Indonesia", "Overseas"];

const p = (
  name: string,
  seed: string,
  price: number,
  discount: number,
  category: Category,
  opts: Omit<Partial<BrandProduct>, "id" | "category" | "daysAgo" | "shippedFrom"> = {}
): BrandProduct => {
  const id = ++pid;
  const originalPrice = Math.round((price / (1 - discount / 100)) * 100) / 100;
  return {
    id,
    name,
    image: img(seed, 300, 300),
    originalPrice,
    price,
    discount,
    sold: 80 + Math.floor(Math.abs(Math.sin(id * 1.3)) * 12000),
    location: locations[id % locations.length],
    rating: 4 + ((id * 7) % 10) / 10,
    ratingCount: 30 + ((id * 137) % 5200),
    freeShipping: id % 2 === 0,
    daysAgo: 1 + ((id * 53) % 380),
    shippedFrom: shipCountries[id % shipCountries.length],
    fulfilled: id % 5 === 0, // ~20% fulfilled by the platform
    category,
    ...opts,
  };
};

export const brandProducts: BrandProduct[] = [
  p("Stackable Storage Bins with Lids Set of 6", "uv-bin", 34.9, 30, "Storage Boxes & Bins", { mall: true, preferred: true, shopeeVoucher: true, shopVoucher: 15 }),
  p("Under-Bed Storage Container 90L Clear", "uv-underbed", 22.9, 38, "Storage Boxes & Bins", { preferred: true, shopVoucher: 10 }),
  p("Modular Closet Organizer Cubes 12-Cube", "uv-closet", 49.0, 35, "Wardrobe & Closet", { mall: true, shopeeVoucher: true }),
  p("Foldable Storage Cubes 11 Inch Pack of 8", "uv-cube", 19.9, 40, "Storage Boxes & Bins"),
  p("Over-The-Door Hanging Organizer 6 Pockets", "uv-doororg", 14.9, 33, "Wardrobe & Closet", { preferred: true, shopVoucher: 10 }),
  p("Clear Food Storage Containers 24pc Airtight", "uv-food", 29.9, 36, "Kitchen Organization", { mall: true, freeShipping: true, shopeeVoucher: true, shopVoucher: 20 }),
  p("Vacuum Storage Bags Combo Jumbo 10pc", "uv-vacuum", 18.9, 45, "Storage Boxes & Bins", { preferred: true, shopVoucher: 15 }),
  p("Pantry Can Organizer Rack 3-Tier", "uv-can", 24.9, 28, "Kitchen Organization", { mall: true }),
  p("Pull-Out Cabinet Drawer Slide 2pc", "uv-pullout", 27.9, 31, "Kitchen Organization", { freeShipping: true, shopVoucher: 10 }),
  p("Stackable Shoe Box Clear Door 12pc", "uv-shoebox", 39.9, 42, "Wardrobe & Closet", { mall: true, shopeeVoucher: true, shopVoucher: 15 }),

  p("Woven Seagrass Storage Basket Large", "uv-seagrass", 17.9, 25, "Laundry & Baskets", { preferred: true }),
  p("Collapsible Laundry Hamper 100L", "uv-hamper", 16.9, 38, "Laundry & Baskets", { freeShipping: true, shopVoucher: 10 }),
  p("3-Tier Wire Shelving Unit Rolling", "uv-wireshelf", 59.0, 30, "Shelving & Racks", { mall: true, shopeeVoucher: true }),
  p("Slim Rolling Storage Cart 5-Tier", "uv-rollcart", 49.9, 35, "Shelving & Racks", { mall: true, preferred: true, shopVoucher: 20 }),
  p("Desktop File Organizer 5-Slot Metal", "uv-file", 13.9, 33, "Desk & Drawer"),
  p("Drawer Dividers Adjustable 11pc", "uv-divider", 11.9, 41, "Desk & Drawer", { preferred: true, shopVoucher: 10 }),
  p("Wall-Mounted Floating Shelf Set of 3", "uv-floatshelf", 26.9, 28, "Shelving & Racks", { mall: true }),
  p("Under-Sink Storage Drawers 2-Tier", "uv-undersink", 19.9, 36, "Bathroom Storage", { freeShipping: true, shopVoucher: 15 }),
  p("Jewelry Organizer Cabinet with Mirror", "uv-jewelry", 64.0, 32, "Wardrobe & Closet", { mall: true, shopeeVoucher: true, shopVoucher: 15 }),
  p("Bedside Caddy Organizer 6 Pocket", "uv-caddy", 8.9, 44, "Desk & Drawer", { preferred: true }),

  p("Refrigerator Drawer Bins 8pc Clear", "uv-fridge", 21.9, 37, "Kitchen Organization", { freeShipping: true, shopVoucher: 10 }),
  p("Corner Bathroom Shelf Stainless", "uv-bathshelf", 23.9, 30, "Bathroom Storage", { mall: true }),
  p("Tiered Spice Rack Pull-Out Drawer", "uv-spice", 17.9, 39, "Kitchen Organization", { preferred: true, shopVoucher: 10 }),
  p("Closet Garment Rack Rolling Heavy-Duty", "uv-garment", 54.9, 33, "Wardrobe & Closet", { mall: true, shopeeVoucher: true }),
  p("Over-Cabinet Door Basket 2pc", "uv-cabdoor", 12.9, 35, "Kitchen Organization"),
  p("Nesting Decorative Baskets 3pc Rope", "uv-nestbasket", 28.9, 27, "Laundry & Baskets", { preferred: true }),
  p("Folding Step Stool 9 Inch", "uv-stool", 15.9, 36, "Shelving & Racks", { freeShipping: true }),
  p("Makeup Vanity Organizer 360 Spinning", "uv-vanity", 18.9, 42, "Bathroom Storage", { mall: true, shopeeVoucher: true, shopVoucher: 15 }),
  p("Cable Management Box Wood Cover", "uv-cablebox", 14.9, 34, "Desk & Drawer", { preferred: true, shopVoucher: 10 }),
  p("Under-Desk Drawer Hidden Mount", "uv-deskdraw", 16.9, 38, "Desk & Drawer", { freeShipping: true }),

  p("Stackable Book Bins Color 6pc", "uv-bookbin", 24.9, 30, "Storage Boxes & Bins", { mall: true }),
  p("Gift Wrap & Ribbon Organizer Box", "uv-giftwrap", 13.9, 41, "Travel & Totes", { preferred: true, shopVoucher: 10 }),
  p("Sliding Pantry Shelf Rack Pull-Out", "uv-pantry", 44.9, 29, "Kitchen Organization", { mall: true, shopeeVoucher: true }),
  p("Retractable Drawer Organizers Set", "uv-retract", 10.9, 43, "Desk & Drawer"),
  p("Toy Storage Hammock Corner Net", "uv-toyham", 9.9, 46, "Storage Boxes & Bins", { freeShipping: true, shopVoucher: 10 }),
  p("Hanging Closet Shelves 6-Tier", "uv-hangshelf", 19.9, 37, "Wardrobe & Closet", { preferred: true }),
  p("Plastic Storage Bins with Lids 30L 4pc", "uv-30l", 38.9, 34, "Storage Boxes & Bins", { mall: true, shopeeVoucher: true, shopVoucher: 15 }),
  p("Rolling Tool Chest 5-Drawer Red", "uv-toolchest", 129.0, 22, "Shelving & Racks", { mall: true, preferred: true, shopeeVoucher: true, shopVoucher: 25 }),
  p("Insulated Picnic & Travel Storage Tote", "uv-tote", 21.9, 40, "Travel & Totes", { freeShipping: true, shopVoucher: 10 }),
  p("Bathroom Over-Toilet Storage Ladder", "uv-ladder", 47.9, 31, "Bathroom Storage", { mall: true, shopeeVoucher: true, shopVoucher: 15 }),
];
