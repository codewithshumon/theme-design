"use client";

import { useState } from "react";
import type { MallBrand } from "../data";
import { formatFollowers } from "../data";
import { img, wideImg } from "../../data";

interface BrandCardProps {
  brand: MallBrand;
  /** "grid" = compact directory card, "featured" = larger banner card */
  variant?: "grid" | "featured";
  className?: string;
}

/**
 * Brand card in two variants:
 *  - grid:    square logo tile + name + rating/followers + Follow (directory)
 *  - featured: wide banner with overlapping logo + details + Follow
 * The Follow button toggles locally (mock interactivity).
 */
export default function BrandCard({
  brand,
  variant = "grid",
  className = "",
}: BrandCardProps) {
  if (variant === "featured") return <FeaturedCard brand={brand} className={className} />;
  return <GridCard brand={brand} className={className} />;
}

/* ----------------------------- compact card ----------------------------- */
function GridCard({ brand, className = "" }: { brand: MallBrand; className?: string }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-md bg-white ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-shopee/30 ${className}`}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={img(brand.logoSeed, 300, 300)}
          alt={`${brand.name} logo`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-1 top-1 rounded-sm bg-shopee px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
          Mall
        </span>
        {brand.promo && (
          <span className="absolute bottom-1 left-1 rounded-sm bg-black/60 px-1 py-0.5 text-[9px] font-semibold text-white">
            {brand.promo}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-2">
        <h3 className="truncate text-[13px] font-semibold text-gray-800 group-hover:text-shopee">
          {brand.name}
        </h3>
        <div className="flex items-center gap-1 text-[11px] text-gray-500">
          <StarIcon className="text-shopee" />
          <span className="tabular-nums">{brand.rating.toFixed(1)}</span>
          <span className="text-gray-300">·</span>
          <span className="truncate">{formatFollowers(brand.followers)} followers</span>
        </div>
        <FollowButton className="mt-auto w-full" />
      </div>
    </article>
  );
}

/* ----------------------------- featured card ---------------------------- */
function FeaturedCard({ brand, className = "" }: { brand: MallBrand; className?: string }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-md bg-white ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-shopee/30 ${className}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={wideImg(brand.bannerSeed, 600, 340)}
          alt={`${brand.name} banner`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-sm bg-shopee px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          Mall
        </span>
        {/* overlapping logo */}
        <div className="absolute -bottom-5 left-3 h-12 w-12 overflow-hidden rounded-md bg-white shadow ring-2 ring-white">
          <img
            src={img(brand.logoSeed, 120, 120)}
            alt={`${brand.name} logo`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-7">
        <h3 className="truncate text-sm font-semibold text-gray-800 group-hover:text-shopee">
          {brand.name}
        </h3>
        <div className="flex items-center gap-1 text-[11px] text-gray-500">
          <StarIcon className="text-shopee" />
          <span className="tabular-nums">{brand.rating.toFixed(1)}</span>
          <span className="text-gray-300">·</span>
          <span className="truncate">{formatFollowers(brand.followers)} followers</span>
        </div>
        {brand.promo && (
          <span className="text-[11px] font-semibold text-shopee">{brand.promo}</span>
        )}
        <FollowButton className="mt-auto w-full" />
      </div>
    </article>
  );
}

/* ------------------------------ follow button --------------------------- */
function FollowButton({ className = "" }: { className?: string }) {
  const [following, setFollowing] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFollowing((f) => !f)}
      aria-pressed={following}
      className={`flex items-center justify-center gap-1 rounded-md py-1.5 text-xs font-semibold transition ${
        following
          ? "bg-white text-shopee ring-1 ring-shopee hover:bg-shopee-light"
          : "bg-shopee text-white hover:bg-shopee-dark"
      } ${className}`}
    >
      {following ? <CheckIcon /> : <PlusIcon />}
      {following ? "Following" : "Follow"}
    </button>
  );
}

/* -------------------------------- icons --------------------------------- */
function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
