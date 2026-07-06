import type { CompareProduct } from "./types";

// 8 comparable smartphones, each with every spec key filled.
export const compareProducts: CompareProduct[] = [
  {
    id: 1, name: "Alpha Phone 15 Pro", brand: "Alpha", imageSeed: "cmp-alpha15pro", color: "#555",
    price: 999, originalPrice: 1099, rating: 4.8, ratingCount: 3200, inStock: true,
    specs: {
      display: '6.7" LTPO OLED 120Hz', processor: "Alpha A17 Pro", ram: "8GB", storage: "256GB",
      rearCam: "48MP + 12MP + 12MP", frontCam: "12MP", battery: "4422mAh", charging: "27W wired",
      weight: "187g", water: "IP68", os: "iOS 17", warranty: "1 Year",
    },
  },
  {
    id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", imageSeed: "cmp-galaxys24", color: "#1428a0",
    price: 1099, originalPrice: 1299, rating: 4.7, ratingCount: 5100, inStock: true,
    specs: {
      display: '6.8" QHD+ AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ram: "12GB", storage: "512GB",
      rearCam: "200MP + 50MP + 12MP + 10MP", frontCam: "12MP", battery: "5000mAh", charging: "45W wired",
      weight: "232g", water: "IP68", os: "Android 14 (One UI)", warranty: "1 Year",
    },
  },
  {
    id: 3, name: "Pixel 8 Pro", brand: "Google", imageSeed: "cmp-pixel8pro", color: "#4285f4",
    price: 899, originalPrice: 999, rating: 4.6, ratingCount: 2800, inStock: true,
    specs: {
      display: '6.7" LTPO OLED 120Hz', processor: "Tensor G3", ram: "12GB", storage: "256GB",
      rearCam: "50MP + 48MP + 48MP", frontCam: "10.5MP", battery: "5050mAh", charging: "30W wired",
      weight: "213g", water: "IP68", os: "Android 14", warranty: "1 Year",
    },
  },
  {
    id: 4, name: "OnePlus 12", brand: "OnePlus", imageSeed: "cmp-oneplus12", color: "#eb0028",
    price: 799, originalPrice: 899, rating: 4.5, ratingCount: 1900, inStock: true,
    specs: {
      display: '6.82" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB",
      rearCam: "50MP + 48MP + 64MP", frontCam: "32MP", battery: "5400mAh", charging: "100W wired",
      weight: "220g", water: "IP65", os: "Android 14 (OxygenOS)", warranty: "1 Year",
    },
  },
  {
    id: 5, name: "Xiaomi 14", brand: "Xiaomi", imageSeed: "cmp-xiaomi14", color: "#ff6900",
    price: 749, originalPrice: 829, rating: 4.4, ratingCount: 1500, inStock: false,
    specs: {
      display: '6.36" AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB",
      rearCam: "50MP + 50MP + 50MP (Leica)", frontCam: "32MP", battery: "4610mAh", charging: "90W wired",
      weight: "193g", water: "IP68", os: "Android 14 (HyperOS)", warranty: "1 Year",
    },
  },
  {
    id: 6, name: "Alpha Phone 15", brand: "Alpha", imageSeed: "cmp-alpha15", color: "#777",
    price: 799, originalPrice: 899, rating: 4.6, ratingCount: 4100, inStock: true,
    specs: {
      display: '6.1" OLED 60Hz', processor: "Alpha A16", ram: "6GB", storage: "128GB",
      rearCam: "48MP + 12MP", frontCam: "12MP", battery: "3349mAh", charging: "20W wired",
      weight: "171g", water: "IP68", os: "iOS 17", warranty: "1 Year",
    },
  },
  {
    id: 7, name: "Nothing Phone 2", brand: "Nothing", imageSeed: "cmp-nothing2", color: "#1a1a1a",
    price: 699, originalPrice: 799, rating: 4.3, ratingCount: 1200, inStock: true,
    specs: {
      display: '6.7" LTPO OLED 120Hz', processor: "Snapdragon 8+ Gen 1", ram: "12GB", storage: "256GB",
      rearCam: "50MP + 50MP", frontCam: "32MP", battery: "4700mAh", charging: "45W wired",
      weight: "201g", water: "IP54", os: "Android 13 (Nothing OS)", warranty: "1 Year",
    },
  },
  {
    id: 8, name: "Xperia 1 V", brand: "Sony", imageSeed: "cmp-xperia1v", color: "#111",
    price: 999, originalPrice: 1099, rating: 4.5, ratingCount: 900, inStock: false,
    specs: {
      display: '6.5" 4K OLED 120Hz', processor: "Snapdragon 8 Gen 2", ram: "12GB", storage: "256GB",
      rearCam: "48MP + 12MP + 12MP + 3D iToF", frontCam: "12MP", battery: "5000mAh", charging: "30W wired",
      weight: "187g", water: "IP68", os: "Android 13", warranty: "1 Year",
    },
  },
];
