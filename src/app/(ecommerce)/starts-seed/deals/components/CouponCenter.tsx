"use client";

import { useState } from "react";
import type { Coupon } from "../data";
import SectionHeader from "../../components/shared/SectionHeader";

/**
 * Row of claimable coupon "tickets". Each ticket has a notched edge, the
 * discount value, scope + min spend, the code, and a Claim / Claimed button
 * that toggles locally.
 */
export default function CouponCenter({ coupons }: { coupons: Coupon[] }) {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader title="Voucher Center" subtitle="Collect & save at checkout" />
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-4">
        {coupons.map((coupon) => (
          <CouponTicket key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- coupon ticket ----------------------------- */
function CouponTicket({ coupon }: { coupon: Coupon }) {
  const [claimed, setClaimed] = useState(false);

  return (
    <div className="relative flex w-64 shrink-0 snap-start overflow-hidden rounded-md ring-1 ring-black/10">
      {/* left value panel */}
      <div
        className="relative flex w-28 shrink-0 flex-col items-center justify-center gap-0.5 px-2 py-3 text-white"
        style={{ backgroundColor: coupon.color }}
      >
        <span className="text-lg font-black leading-none">{coupon.value}</span>
        <span className="text-[10px] uppercase tracking-wide text-white/85">
          {coupon.scope}
        </span>
        {/* perforation notches */}
        <Notch className="-left-1.5 top-1/2 -translate-y-1/2" />
        <Notch className="-right-1.5 top-1/2 -translate-y-1/2" />
      </div>

      {/* right details */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 border-l border-dashed border-gray-300 bg-white px-3 py-2">
        <p className="truncate text-sm font-semibold text-gray-800">
          Min. spend ${coupon.minSpend}
        </p>
        <p className="text-[11px] text-gray-500">{coupon.expiresLabel}</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <code className="rounded border border-dashed border-gray-300 bg-gray-50 px-1.5 py-0.5 text-[11px] font-bold tracking-wider text-gray-700">
            {coupon.code}
          </code>
          <button
            type="button"
            onClick={() => setClaimed((c) => !c)}
            aria-pressed={claimed}
            className={`rounded px-2 py-1 text-[11px] font-semibold transition ${
              claimed
                ? "bg-gray-100 text-gray-500 ring-1 ring-gray-300"
                : "bg-shopee text-white hover:bg-shopee-dark"
            }`}
          >
            {claimed ? "✓ Claimed" : "Claim"}
          </button>
        </div>
      </div>
    </div>
  );
}

/** A small circular notch punched out of the perforation seam (coupon ticket edge). */
function Notch({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-3 w-3 rounded-full bg-white ${className}`}
    />
  );
}
