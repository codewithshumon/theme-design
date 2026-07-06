// Order tracking types --------------------------------------------------------

export type OrderStatus = "processing" | "in_transit" | "delivered";

export interface TimelineEvent {
  key: string;
  label: string; // "Order Placed", "Shipped", ...
  date: string; // "Jul 4, 09:24"
  description?: string;
}

export interface TrackItem {
  id: number;
  name: string;
  imageSeed: string; // -> img(seed)
  qty: number;
  price: number;
  variant?: string;
}

export interface ShippingAddress {
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  zip: string;
  country: string;
}

export interface TrackedOrder {
  orderId: string; // "SS-100482173"
  status: OrderStatus;
  statusLabel: string; // "On the way"
  statusNote: string; // "Arriving today by 9 PM"
  carrier: string; // "Ninja Van"
  trackingNo: string;
  shippingMethod: string; // "Standard Delivery"
  estimatedDelivery: string; // "Tue, 8 Jul"
  placedDate: string;
  progress: number; // 0–100 (progress bar)
  currentStep: number; // index into timeline
  timeline: TimelineEvent[];
  items: TrackItem[];
  address: ShippingAddress;
  total: number;
}
