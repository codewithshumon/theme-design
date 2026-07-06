"use client";

import type { DealProduct } from "../data";
import FlashDealCard from "../../components/FlashDealCard";
import Carousel, { carouselItemCols } from "../../components/shared/Carousel";
import { useCountdown } from "./useCountdown";

/** Isolated countdown so per-second ticks don't re-render the carousel. */
function FlashCountdown() {
  const { h, m, s } = useCountdown(3 * 3600); // 3-hour flash window
  return (
    <div className="flex items-center gap-1">
      <TimeBox value={h} />
      <span className="font-bold text-shopee">:</span>
      <TimeBox value={m} />
      <span className="font-bold text-shopee">:</span>
      <TimeBox value={s} />
    </div>
  );
}

function TimeBox({ value }: { value: string }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded bg-amazon-dark text-xs font-bold tabular-nums text-white sm:h-7 sm:w-7">
      {value}
    </span>
  );
}

/** Shopee "Flash Sale" section — countdown + horizontal carousel of deal cards. */
export default function FlashSaleSection({ products }: { products: DealProduct[] }) {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-base font-semibold tracking-wide text-shopee sm:text-lg">
            ⚡ Flash Sale
          </span>
          <span className="hidden text-sm text-gray-400 sm:inline">On Sale Now</span>
          <FlashCountdown />
        </div>
        <a
          href="#all-deals"
          className="group flex items-center gap-1 text-sm text-shopee hover:text-shopee-dark"
        >
          See all
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="px-2 pb-3">
        <Carousel ariaLabel="Flash sale deals" step={700} className="px-1" itemClassName={carouselItemCols}>
          {products.map((product) => (
            <FlashDealCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
