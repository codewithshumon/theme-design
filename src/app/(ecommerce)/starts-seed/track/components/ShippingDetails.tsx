import type { TrackedOrder } from "../data";

/** Sidebar: delivery address card + shipping/carrier info card. */
export default function ShippingDetails({ order }: { order: TrackedOrder }) {
  const { address, carrier, trackingNo, shippingMethod, placedDate } = order;

  return (
    <div className="flex flex-col gap-3">
      {/* delivery address */}
      <section className="rounded-md bg-white p-4 ring-1 ring-black/5">
        <div className="mb-2 flex items-center gap-2 text-gray-700">
          <PinIcon className="text-shopee" />
          <h3 className="text-sm font-semibold">Delivery Address</h3>
        </div>
        <p className="text-sm font-medium text-gray-800">{address.name}</p>
        <p className="text-xs text-gray-500">{address.phone}</p>
        <p className="mt-1 text-sm leading-snug text-gray-600">
          {address.line1}
          {address.line2 ? `, ${address.line2}` : ""}, {address.city} {address.zip}, {address.country}
        </p>
      </section>

      {/* shipping info */}
      <section className="rounded-md bg-white p-4 ring-1 ring-black/5">
        <div className="mb-2 flex items-center gap-2 text-gray-700">
          <TruckIcon className="text-shopee" />
          <h3 className="text-sm font-semibold">Shipping Information</h3>
        </div>
        <dl className="space-y-1.5 text-sm">
          <Row label="Carrier" value={carrier} />
          <Row label="Tracking no." value={trackingNo} mono />
          <Row label="Shipping method" value={shippingMethod} />
          <Row label="Order placed" value={placedDate} />
        </dl>
      </section>
    </div>
  );
}

function Row({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-gray-400">{label}</dt>
      <dd className={`text-right font-medium text-gray-700 ${mono ? "tabular-nums" : ""}`}>{value}</dd>
    </div>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function TruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1 4h13v12H1z" />
      <path d="M14 8h4l3 3v5h-7z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}
