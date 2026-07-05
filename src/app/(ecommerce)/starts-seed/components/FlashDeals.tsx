"use client";

import { useEffect, useState } from "react";
import { flashDeals } from "../data";
import ProductCard from "./shared/ProductCard";
import Carousel from "./shared/Carousel";

/** Live countdown to the end of the flash sale (mm:ss:ss). */
function useCountdown(hours: number) {
  const [remaining, setRemaining] = useState(hours * 3600);
  useEffect(() => {
    const id = setInterval(
      () => setRemaining((r) => (r > 0 ? r - 1 : hours * 3600)),
      1000
    );
    return () => clearInterval(id);
  }, [hours]);
  const h = Math.floor(remaining / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { h: pad(h), m: pad(m), s: pad(s) };
}

function TimeBox({ value }: { value: string }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded bg-amazon-dark text-xs font-bold text-white tabular-nums sm:h-7 sm:w-7">
      {value}
    </span>
  );
}

/** Shopee "Flash Sale" section — countdown + horizontal product carousel. */
export default function FlashDeals() {
  const { h, m, s } = useCountdown(2);

  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <div className="h-[3px] w-full bg-shopee" />
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-base font-semibold tracking-wide text-shopee sm:text-lg">
            ⚡ Flash Sale
          </span>
          <span className="hidden text-sm text-gray-400 sm:inline">
            On Sale Now
          </span>
          <div className="flex items-center gap-1">
            <TimeBox value={h} />
            <span className="font-bold text-shopee">:</span>
            <TimeBox value={m} />
            <span className="font-bold text-shopee">:</span>
            <TimeBox value={s} />
          </div>
        </div>
        <a
          href="#"
          className="group flex items-center gap-1 text-sm text-shopee hover:text-shopee-dark"
        >
          See all
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="px-2 pb-3">
        <Carousel
          ariaLabel="Flash sale products"
          step={700}
          className="px-1"
          itemClassName="w-[160px] sm:w-[190px]"
        >
          {flashDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
