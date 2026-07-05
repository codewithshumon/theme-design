import type { Product } from "../data/types";
import PromoBar from "./shared/PromoBar";

interface FlashDealCardProps {
  product: Product;
  /** fixed width for carousel usage */
  width?: number;
  className?: string;
}

/**
 * Shopee.sg-style flash sale card: square image with discount badge, a single
 * red price, and a selling-status line — "FAST SELLING" while stock > 20,
 * otherwise "ONLY {left} LEFT" in red to convey urgency.
 */
export default function FlashDealCard({
  product,
  width,
  className = "",
}: FlashDealCardProps) {
  const { name, image, price, discount, left = 0, rating, freeShipping, shopeeVoucher, shopVoucher } = product;
  const lowStock = left <= 20;
  // Bar fill grows as stock runs low; floored so the label stays on the fill.
  const fillPct = Math.max(55, Math.min(100, Math.round(100 - left * 1.4)));

  return (
    <article
      style={width ? { width } : undefined}
      className={`group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-sm bg-white ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:ring-shopee/30 ${className}`}
    >
      {/* image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* discount badge */}
        {discount > 0 && (
          <div className="absolute right-0 top-0 flex flex-col items-center bg-[rgba(249,237,237,0.95)] px-1.5 py-1">
            <span className="text-sm font-semibold leading-none text-shopee">
              {discount}%
            </span>
            <span className="text-[9px] font-medium uppercase leading-tight text-shopee">
              OFF
            </span>
          </div>
        )}

        {/* promo strip: rating | free shipping | vouchers (only if perks exist) */}
        <PromoBar
          rating={rating}
          freeShipping={freeShipping}
          shopeeVoucher={shopeeVoucher}
          shopVoucher={shopVoucher}
        />
      </div>

      {/* body: centered price + selling-status progress bar */}
      <div className="flex flex-col items-center gap-2 p-2">
        {/* price (centered) */}
        <div className="flex items-baseline gap-0.5 text-shopee">
          <span className="text-xs font-normal">$</span>
          <span className="text-base font-semibold leading-none">
            {price.toFixed(2)}
          </span>
        </div>

        {/* status pill: fire icon + label inside a progress bar */}
        <div className="relative h-5 w-full overflow-hidden rounded-full bg-shopee/20">
          {/* fill */}
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-shopee to-shopee-dark transition-[width] duration-500"
            style={{ width: `${fillPct}%` }}
          />
          {/* centered label on top of the fill */}
          <div className="absolute inset-0 flex items-center justify-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            <span>{lowStock ? `Only ${left} left` : "Fast selling"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
