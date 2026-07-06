import type { TrackedOrder } from "./types";

// Mock tracked orders — keyed by orderId. `currentStep` is the index of the
// most recent completed timeline event; events at or below it are "done".

const address = {
  name: "Aisha Rahman",
  phone: "+60 12-345 6789",
  line1: "12 Jalan Bukit Bintang",
  line2: "Apt 7-03, Kiara Residences",
  city: "Kuala Lumpur",
  zip: "55100",
  country: "Malaysia",
};

export const trackedOrders: TrackedOrder[] = [
  {
    orderId: "SS-100482173",
    status: "in_transit",
    statusLabel: "On the way",
    statusNote: "Arriving today by 9 PM",
    carrier: "Ninja Van",
    trackingNo: "NVSG88241033",
    shippingMethod: "Standard Delivery",
    estimatedDelivery: "Tue, 8 Jul",
    placedDate: "Jul 3, 2026",
    progress: 65,
    currentStep: 3,
    timeline: [
      { key: "placed", label: "Order Placed", date: "Jul 3, 09:24", description: "Order received and confirmed" },
      { key: "paid", label: "Payment Confirmed", date: "Jul 3, 09:31", description: "Paid via ShopeePay" },
      { key: "packed", label: "Packed", date: "Jul 4, 14:02", description: "Packed by the seller" },
      { key: "shipped", label: "Shipped", date: "Jul 5, 08:15", description: "Picked up by Ninja Van" },
      { key: "out", label: "Out for Delivery", date: "Pending" },
      { key: "delivered", label: "Delivered", date: "Pending" },
    ],
    items: [
      { id: 1, name: "Wireless Noise-Cancelling Headphones", imageSeed: "trk-headphones", qty: 1, price: 59.9, variant: "Midnight Black" },
      { id: 2, name: "USB-C Cable Braided 2m", imageSeed: "trk-cable", qty: 2, price: 4.9 },
    ],
    address,
    total: 74.6,
  },
  {
    orderId: "SS-100482099",
    status: "delivered",
    statusLabel: "Delivered",
    statusNote: "Package handed to customer",
    carrier: "J&T Express",
    trackingNo: "JT55677821",
    shippingMethod: "Express Delivery",
    estimatedDelivery: "Delivered Jun 30",
    placedDate: "Jun 27, 2026",
    progress: 100,
    currentStep: 5,
    timeline: [
      { key: "placed", label: "Order Placed", date: "Jun 27, 11:08", description: "Order received and confirmed" },
      { key: "paid", label: "Payment Confirmed", date: "Jun 27, 11:12", description: "Paid via Credit Card" },
      { key: "packed", label: "Packed", date: "Jun 27, 16:40", description: "Packed by the seller" },
      { key: "shipped", label: "Shipped", date: "Jun 28, 07:55", description: "Picked up by J&T Express" },
      { key: "out", label: "Out for Delivery", date: "Jun 30, 09:20", description: "Out with the courier" },
      { key: "delivered", label: "Delivered", date: "Jun 30, 14:36", description: "Delivered to recipient" },
    ],
    items: [
      { id: 1, name: "Smart Watch Series 9 GPS 45mm", imageSeed: "trk-watch", qty: 1, price: 129.0, variant: "Starlight" },
      { id: 2, name: "Tempered Glass Screen Protector", imageSeed: "trk-protector", qty: 2, price: 3.5 },
    ],
    address,
    total: 136.0,
  },
  {
    orderId: "SS-100482087",
    status: "processing",
    statusLabel: "Preparing your order",
    statusNote: "The seller is packing your items",
    carrier: "Standard Delivery",
    trackingNo: "—",
    shippingMethod: "Standard Delivery",
    estimatedDelivery: "Thu, 9 Jul",
    placedDate: "Jul 5, 2026",
    progress: 15,
    currentStep: 1,
    timeline: [
      { key: "placed", label: "Order Placed", date: "Jul 5, 19:02", description: "Order received and confirmed" },
      { key: "paid", label: "Payment Confirmed", date: "Jul 5, 19:05", description: "Paid via Online Banking" },
      { key: "packed", label: "Packed", date: "Pending" },
      { key: "shipped", label: "Shipped", date: "Pending" },
      { key: "out", label: "Out for Delivery", date: "Pending" },
      { key: "delivered", label: "Delivered", date: "Pending" },
    ],
    items: [
      { id: 1, name: "Mechanical Keyboard RGB Hot-Swap", imageSeed: "trk-keyboard", qty: 1, price: 39.9, variant: "Blue Switches" },
    ],
    address,
    total: 39.9,
  },
];
