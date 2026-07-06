import type { TrackedOrder } from "../data";
import { img } from "../../data";

/** The items in this order, with line totals and the order total. */
export default function OrderSummary({ order }: { order: TrackedOrder }) {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <h2 className="text-[15px] font-semibold tracking-wide text-gray-700">Order Items</h2>
        <span className="text-xs text-gray-400">#{order.orderId}</span>
      </div>

      <ul className="divide-y divide-gray-100 px-5">
        {order.items.map((item) => (
          <li key={item.id} className="flex gap-3 py-3">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100">
              <img
                src={img(item.imageSeed, 120, 120)}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <p className="line-clamp-2 text-sm leading-snug text-gray-800">{item.name}</p>
              {item.variant && <p className="text-xs text-gray-400">{item.variant}</p>}
              <p className="mt-0.5 text-xs text-gray-500">
                {item.qty} × <span className="text-shopee">${item.price.toFixed(2)}</span>
              </p>
            </div>
            <div className="self-center text-right text-sm font-semibold text-gray-800">
              ${(item.qty * item.price).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
        <div className="text-sm">
          <span className="text-gray-500">Order total</span>{" "}
          <span className="ml-2 text-base font-bold text-shopee">${order.total.toFixed(2)}</span>
        </div>
        <button
          type="button"
          className="rounded-md bg-shopee px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-shopee-dark"
        >
          Buy Again
        </button>
      </div>
    </section>
  );
}
