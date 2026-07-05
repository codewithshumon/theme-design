import type { Product } from "../../data/types";
import Stars from "./Stars";

interface ProductCardProps {
  product: Product;
  /** fixed width for carousel usage */
  width?: number;
  className?: string;
}

const formatSold = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k sold` : `${n} sold`;

/**
 * Shopee-style product card: square image with discount badge, ribbon tags,
 * 2-line name, orange price + strikethrough, rating + sold, location footer.
 */
export default function ProductCard({
  product,
  width,
  className = "",
}: ProductCardProps) {
  const { name, image, price, originalPrice, discount, sold, location, rating, mall, preferred, freeShipping } =
    product;

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

        {/* left ribbon: Mall / Preferred */}
        {(mall || preferred) && (
          <div className="absolute left-0 top-0 flex flex-col gap-1">
            {mall && (
              <span className="bg-shopee px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                Mall
              </span>
            )}
            {preferred && (
              <span className="bg-shopee-yellow px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black">
                Preferred
              </span>
            )}
          </div>
        )}

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

        {/* heart */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-400 opacity-0 shadow transition hover:text-shopee group-hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-1.5 p-2">
        {/* free shipping tag */}
        {freeShipping && (
          <span className="w-fit rounded-sm bg-shopee-light px-1 text-[10px] font-medium text-shopee">
            Free Shipping
          </span>
        )}

        <h3 className="line-clamp-2 min-h-[2.4rem] text-[13px] leading-tight text-gray-700 group-hover:text-shopee">
          {name}
        </h3>

        {/* price */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs font-normal text-shopee">$</span>
          <span className="text-base font-medium leading-none text-shopee">
            {price.toFixed(2)}
          </span>
          {originalPrice > price && (
            <span className="text-[11px] text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* rating + sold */}
        <div className="mt-auto flex items-center gap-1.5 pt-1 text-[11px] text-gray-400">
          <Stars rating={rating} size={11} />
          <span className="ml-0.5">{rating.toFixed(1)}</span>
          <span className="ml-auto">{formatSold(sold)}</span>
        </div>

        {/* location */}
        <div className="flex items-center gap-1 border-t border-gray-100 pt-1.5 text-[11px] text-gray-400">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="truncate">{location}</span>
        </div>
      </div>
    </article>
  );
}
