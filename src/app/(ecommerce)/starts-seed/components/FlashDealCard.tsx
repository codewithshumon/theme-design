import type { Product } from "../data/types";

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
  const { name, image, price, discount, left = 0 } = product;
  const lowStock = left <= 20;

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
      </div>

      {/* body: price + selling status */}
      <div className="flex flex-col gap-1 p-2">
        {/* price */}
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-normal text-shopee">$</span>
          <span className="text-base font-semibold leading-none text-shopee">
            {price.toFixed(2)}
          </span>
        </div>

        {/* selling status */}
        <span
          className={`text-[11px] font-semibold uppercase tracking-wide ${
            lowStock ? "text-shopee" : "text-gray-400"
          }`}
        >
          {lowStock ? `Only ${left} left` : "Fast selling"}
        </span>
      </div>
    </article>
  );
}
