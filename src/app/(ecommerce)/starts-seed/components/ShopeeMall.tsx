import type { ReactNode } from "react";
import { mallProducts } from "../data";

/**
 * Shopee Mall — left trust banner ("100% Authentic") + a 2×4 grid of featured
 * products (image + title + promo). Mirrors the Shopee Mall section layout:
 * ~1/3 banner on the left, ~2/3 product grid on the right.
 */
export default function ShopeeMall() {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      {/* Header: title + trust badges + See All */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="rounded bg-shopee px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
            Mall
          </span>
          <h2 className="text-base font-semibold tracking-wide text-gray-800 sm:text-lg">
            SHOPEE MALL
          </h2>
        </div>
        <div className="hidden items-center gap-5 text-xs text-gray-600 md:flex">
          <span className="flex items-center gap-1.5">
            <ReturnIcon className="h-4 w-4 text-shopee" />
            15-Day Free Returns
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldIcon className="h-4 w-4 text-shopee" />
            100% Authentic
          </span>
          <span className="flex items-center gap-1.5">
            <TruckIcon className="h-4 w-4 text-shopee" />
            Free Shipping
          </span>
        </div>
        <a
          href="#"
          className="group flex items-center gap-1 text-sm font-medium text-shopee hover:text-shopee-dark"
        >
          See All
          <ArrowIcon />
        </a>
      </div>

      {/* Body: left banner (1/3) + right product grid (2/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left — full-height trust banner */}
        <div className="flex flex-col justify-between bg-shopee p-5 text-white">
          <h3 className="text-xl font-bold sm:text-2xl">Shopee Mall</h3>

          <div className="flex flex-col items-center py-6 text-center">
            <ShieldIcon className="h-10 w-10" />
            <span className="mt-2 text-5xl font-black leading-none sm:text-6xl">
              100%
            </span>
            <span className="text-xl font-bold tracking-[0.15em] sm:text-2xl">
              AUTHENTIC
            </span>
            <span className="mt-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-shopee sm:text-xs">
              OR 2X MONEY BACK
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] leading-tight sm:text-[11px]">
            <BannerBadge icon={<ShieldIcon className="h-4 w-4" />} label="100% Authentic" />
            <BannerBadge icon={<ReturnIcon className="h-4 w-4" />} label="15-Day Return" />
            <BannerBadge icon={<TruckIcon className="h-4 w-4" />} label="Next-Day Delivery" />
          </div>
        </div>

        {/* Right — 2 rows × 4 cols of products (image + title + promo) */}
        <div className="grid grid-cols-2 gap-px bg-gray-100 sm:grid-cols-4 lg:col-span-2">
          {mallProducts.map((product) => (
            <a
              key={product.id}
              href="#"
              className="group flex flex-col gap-1.5 bg-white p-2 transition-colors hover:bg-shopee-light"
            >
              <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="line-clamp-2 text-xs leading-snug text-gray-700">
                {product.title}
              </span>
              <span className="text-[11px] font-semibold text-shopee">
                {product.promo}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BannerBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-white/90">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

/* ----------------------------- icons ------------------------------ */
function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function ReturnIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v4h4" />
    </svg>
  );
}
function TruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1 4h13v12H1z" />
      <path d="M14 8h4l3 3v5h-7z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
