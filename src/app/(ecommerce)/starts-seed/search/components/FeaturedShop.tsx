"use client";

import { useState } from "react";
import type { BrandProduct, BrandStore } from "../data";
import { formatFollowers } from "../data";
import { img } from "../../data";

interface FeaturedShopProps {
  shop: BrandStore;
  /** the shop's top products to thumbnail (usually 3) */
  products: BrandProduct[];
}

/**
 * Shopee "Top Picks" card: a featured official shop's profile (logo, name,
 * tagline, badges, rating, followers, Visit Shop) next to a few top-selling
 * product thumbnails and a promo "Claim" box.
 */
export default function FeaturedShop({ shop, products }: FeaturedShopProps) {
  const [claimed, setClaimed] = useState(false);

  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      {/* label */}
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2">
        <span className="text-sm font-semibold text-shopee">✨ Top Picks</span>
        <span className="text-xs text-gray-400">Official shops matching your search</span>
      </div>

      <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-stretch">
        {/* shop profile */}
        <div className="flex flex-1 items-center gap-3 lg:border-r lg:border-gray-100 lg:pr-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-100 ring-1 ring-black/5 sm:h-16 sm:w-16">
            <img
              src={img(shop.logoSeed, 120, 120)}
              alt={`${shop.name} logo`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                {shop.name}
              </h3>
              {shop.preferred && (
                <span className="rounded bg-shopee px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                  Preferred
                </span>
              )}
            </div>
            <p className="mt-0.5 line-clamp-1 text-xs text-gray-500">{shop.tagline}</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-gray-500">
              <span className="flex items-center gap-0.5 text-shopee">
                <Stars value={shop.rating} />
                <span className="font-medium text-gray-700">{shop.rating.toFixed(1)}</span>
              </span>
              <span className="text-gray-300">|</span>
              <span>{formatFollowers(shop.followers)} Followers</span>
              <span className="text-gray-300">|</span>
              <span>{shop.productsCount.toLocaleString()} Products</span>
            </div>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-shopee ring-1 ring-shopee transition hover:bg-shopee hover:text-white"
            >
              Visit Shop
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* top products */}
        <div className="grid grid-cols-3 gap-2 lg:max-w-md">
          {products.map((product) => (
            <a key={product.id} href="#" className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.discount > 0 && (
                  <span className="absolute right-0 top-0 bg-shopee px-1 py-0.5 text-[10px] font-bold text-white">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="mt-1 flex items-baseline gap-0.5 text-shopee">
                <span className="text-[9px]">$</span>
                <span className="text-xs font-semibold leading-none">{product.price.toFixed(2)}</span>
              </div>
              <span className="text-[10px] text-gray-400">{formatSold(product.sold)} sold</span>
            </a>
          ))}
        </div>

        {/* promo claim box */}
        {shop.topPickPromo && (
          <div className="flex flex-col items-center justify-center gap-1 rounded-md bg-shopee-light px-4 py-3 text-center ring-1 ring-shopee/30 lg:w-40">
            <span className="text-lg font-black text-shopee">{shop.topPickPromo.discount}</span>
            <span className="text-[11px] text-gray-600">
              Min. Spend ${shop.topPickPromo.minSpend}
            </span>
            <button
              type="button"
              onClick={() => setClaimed((c) => !c)}
              className={`mt-1 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                claimed
                  ? "bg-white text-gray-500 ring-1 ring-gray-300"
                  : "bg-shopee text-white hover:bg-shopee-dark"
              }`}
            >
              {claimed ? "✓ Claimed" : "Claim"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------- helpers ----------------------------------- */
function formatSold(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}M+`;
  if (n >= 1000) return `${Math.round(n / 1000)}k+`;
  return `${n}`;
}

/** 5 stars; fills each based on the rounded rating value. */
function Stars({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-px" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill={i < Math.round(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </span>
  );
}
