// Product comparison types ----------------------------------------------------

export interface CompareProduct {
  id: number;
  name: string;
  brand: string;
  imageSeed: string; // -> img(seed)
  color: string;
  price: number;
  originalPrice: number;
  rating: number; // 0..5
  ratingCount: number;
  inStock: boolean;
  specs: Record<string, string>; // keyed by CompareAttribute.key
}

export interface CompareAttribute {
  key: string;
  label: string;
  group: string;
}

/** Spec rows rendered (in order) below the special Price/Rating/Availability rows. */
export const compareAttributes: CompareAttribute[] = [
  { key: "display", label: "Display", group: "Display" },
  { key: "processor", label: "Processor", group: "Performance" },
  { key: "ram", label: "RAM", group: "Performance" },
  { key: "storage", label: "Storage", group: "Performance" },
  { key: "rearCam", label: "Rear Camera", group: "Camera" },
  { key: "frontCam", label: "Front Camera", group: "Camera" },
  { key: "battery", label: "Battery", group: "Power" },
  { key: "charging", label: "Charging", group: "Power" },
  { key: "weight", label: "Weight", group: "Design" },
  { key: "water", label: "Water Resistance", group: "Design" },
  { key: "os", label: "OS", group: "Software" },
  { key: "warranty", label: "Warranty", group: "Service" },
];

/** Max number of products compared at once. */
export const MAX_COMPARE = 4;
