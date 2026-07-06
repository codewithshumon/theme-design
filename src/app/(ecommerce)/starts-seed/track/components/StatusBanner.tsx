import type { TrackedOrder } from "../data";

/** Top status card: icon + status copy + ETA + carrier + a progress bar. */
export default function StatusBanner({ order }: { order: TrackedOrder }) {
  const Icon = order.status === "delivered" ? CheckIcon : order.status === "processing" ? BoxIcon : TruckIcon;

  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
        {/* status icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-shopee-light text-shopee">
          <Icon />
        </div>

        {/* status copy */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <h2 className="text-lg font-bold text-gray-900">{order.statusLabel}</h2>
            <span className="text-sm text-gray-500">· {order.statusNote}</span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Estimated delivery: <span className="font-semibold text-gray-700">{order.estimatedDelivery}</span>
          </p>

          {/* progress bar */}
          <div className="mt-3 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-linear-to-r from-shopee to-shopee-dark transition-[width] duration-500"
                style={{ width: `${order.progress}%` }}
              />
            </div>
            <span className="w-10 text-right text-xs font-semibold tabular-nums text-shopee">
              {order.progress}%
            </span>
          </div>
        </div>

        {/* carrier */}
        <div className="shrink-0 rounded-md bg-gray-50 px-4 py-3 text-sm sm:text-right">
          <p className="text-xs uppercase tracking-wide text-gray-400">Carrier</p>
          <p className="font-semibold text-gray-800">{order.carrier}</p>
          <p className="mt-1 text-xs text-gray-500">Tracking #{order.trackingNo}</p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- icons -------------------------------- */
function TruckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 4h13v12H1z" />
      <path d="M14 8h4l3 3v5h-7z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </svg>
  );
}
