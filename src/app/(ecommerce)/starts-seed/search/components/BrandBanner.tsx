"use client";

import { useState } from "react";
import type { BrandStore } from "../data";
import { formatFollowers } from "../data";
import { img, wideImg } from "../../data";

/**
 * Shopee-style official brand store header: a wide banner with a brand-colored
 * overlay, an overlapping logo tile, the shop name + verified badges, a row of
 * performance stats, and Chat / Follow actions. Follow toggles locally.
 */
export default function BrandBanner({ brand }: { brand: BrandStore }) {
  const [following, setFollowing] = useState(false);

  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      {/* banner */}
      <div className="relative h-32 w-full sm:h-40 lg:h-48">
        <img
          src={wideImg(brand.bannerSeed, 1600, 480)}
          alt={`${brand.name} banner`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {/* brand-color overlay so text stays readable on any stock photo */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${brand.color}f2 0%, ${brand.color}99 45%, ${brand.color}40 100%)`,
          }}
        />
        {brand.promo && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-shopee shadow">
            {brand.promo}
          </span>
        )}
      </div>

      {/* identity + stats */}
      <div className="flex flex-col gap-4 px-4 pb-4 sm:flex-row sm:items-end sm:gap-6">
        {/* overlapping logo */}
        <div className="relative -mt-10 shrink-0 sm:-mt-12">
          <div className="h-20 w-20 overflow-hidden rounded-md bg-white shadow-md ring-4 ring-white sm:h-24 sm:w-24">
            <img
              src={img(brand.logoSeed, 200, 200)}
              alt={`${brand.name} logo`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* name + badges */}
        <div className="flex flex-1 flex-col gap-1.5 sm:pb-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {brand.name}
            </h1>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <VerifiedIcon /> Official Shop
            </span>
            {brand.mall && (
              <span className="rounded bg-shopee px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                Mall
              </span>
            )}
            {brand.preferred && (
              <span className="rounded bg-shopee-yellow px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                Preferred
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">
            {brand.tagline} · {brand.category}
          </p>
        </div>

        {/* stats */}
        <div className="grid shrink-0 grid-cols-3 gap-4 border-gray-100 text-center sm:border-l sm:pl-6 lg:grid-cols-5">
          <Stat value={(brand.ratingCount / 1000).toFixed(0) + "K"} label="Ratings" />
          <Stat value={brand.rating.toFixed(1)} label="Rating" accent />
          <Stat value={formatFollowers(brand.followers)} label="Followers" />
          <Stat value={brand.productsCount.toLocaleString()} label="Products" hideMobile />
          <Stat value={brand.joinedLabel} label="Joined" hideMobile />
        </div>

        {/* actions */}
        <div className="flex shrink-0 items-center gap-2 sm:pb-1">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-50"
          >
            <ChatIcon /> Chat
          </button>
          <button
            type="button"
            onClick={() => setFollowing((f) => !f)}
            aria-pressed={following}
            className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold transition ${
              following
                ? "bg-white text-shopee ring-1 ring-shopee hover:bg-shopee-light"
                : "bg-shopee text-white hover:bg-shopee-dark"
            }`}
          >
            {following ? <CheckIcon /> : <PlusIcon />}
            {following ? "Following" : `+ Follow`}
          </button>
        </div>
      </div>

      {/* shop performance strip */}
      <div className="grid grid-cols-2 gap-px bg-gray-100 text-center ring-1 ring-black/5 sm:grid-cols-4">
        <PerfStat label="Shipped On Time" value={brand.shippedOnTime} />
        <PerfStat label="Chat Response" value={brand.responseRate} />
        <PerfStat label="Response Time" value={brand.responseTime} />
        <PerfStat label="Chat Performance" value={brand.chatPerformance} />
      </div>
    </section>
  );
}

/* ------------------------------- primitives -------------------------------- */
function Stat({
  value,
  label,
  accent,
  hideMobile,
}: {
  value: string;
  label: string;
  accent?: boolean;
  hideMobile?: boolean;
}) {
  return (
    <div className={hideMobile ? "hidden lg:block" : undefined}>
      <div className={`text-base font-bold ${accent ? "text-shopee" : "text-gray-900"}`}>
        {value}
      </div>
      <div className="text-[11px] text-gray-500">{label}</div>
    </div>
  );
}

function PerfStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white px-2 py-2.5">
      <div className="text-sm font-bold text-shopee">{value}</div>
      <div className="text-[11px] text-gray-500">{label}</div>
    </div>
  );
}

/* --------------------------------- icons ----------------------------------- */
function VerifiedIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 1.8 3-.3 1 2.8 2.6 1.5-.8 2.9.8 2.9-2.6 1.5-1 2.8-3-.3L12 22l-2.4-1.8-3 .3-1-2.8L3 16.2l.8-2.9L3 10.4l2.6-1.5 1-2.8 3 .3L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
