"use client";

import { useState } from "react";
import { trackedOrders } from "../data";
import StatusBanner from "./StatusBanner";
import ShipmentTimeline from "./ShipmentTimeline";
import OrderSummary from "./OrderSummary";
import ShippingDetails from "./ShippingDetails";

/**
 * The tracking experience: an order-ID search box + sample-order chips, and the
 * active order's status banner, timeline, items, and shipping details.
 */
export default function TrackOrder() {
  const [activeOrderId, setActiveOrderId] = useState(trackedOrders[0].orderId);
  const [query, setQuery] = useState("");
  const [notFound, setNotFound] = useState(false);

  const activeOrder = trackedOrders.find((o) => o.orderId === activeOrderId)!;

  function selectOrder(id: string) {
    setActiveOrderId(id);
    setQuery(id);
    setNotFound(false);
  }

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    const id = query.trim().toUpperCase();
    if (!id) return;
    const match = trackedOrders.find((o) => o.orderId.toUpperCase() === id);
    if (match) {
      setActiveOrderId(match.orderId);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }

  return (
    <div className="space-y-3">
      {/* search */}
      <section className="overflow-hidden rounded-md bg-linear-to-br from-shopee to-shopee-dark p-5 text-white sm:p-6">
        <h1 className="text-xl font-bold sm:text-2xl">Track Your Order</h1>
        <p className="mt-1 text-sm text-white/85">
          Enter your order ID to see live delivery updates.
        </p>

        <form onSubmit={handleTrack} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <div className="flex flex-1 items-center overflow-hidden rounded-md bg-white">
            <span className="pl-3 text-gray-400">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setNotFound(false);
              }}
              placeholder="e.g. SS-100482173"
              aria-label="Order ID"
              className="min-w-0 flex-1 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-shopee transition hover:bg-shopee-light"
          >
            Track
          </button>
        </form>

        {notFound && (
          <p className="mt-2 text-sm text-white/90">
            We couldn&apos;t find an order with that ID. Try one of the samples below.
          </p>
        )}

        {/* sample order chips */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-white/75">Try:</span>
          {trackedOrders.map((o) => (
            <button
              key={o.orderId}
              type="button"
              onClick={() => selectOrder(o.orderId)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                o.orderId === activeOrderId
                  ? "bg-white text-shopee"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {o.orderId}
            </button>
          ))}
        </div>
      </section>

      {/* active order */}
      <StatusBanner order={activeOrder} />
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ShipmentTimeline order={activeOrder} />
        </div>
        <div className="flex flex-col gap-3 lg:col-span-2">
          <OrderSummary order={activeOrder} />
          <ShippingDetails order={activeOrder} />
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
