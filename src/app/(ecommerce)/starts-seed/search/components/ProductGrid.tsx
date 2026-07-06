import type { BrandProduct } from "../data";
import ProductCard from "../../components/shared/ProductCard";

interface ProductGridProps {
  products: BrandProduct[];
  view: "grid" | "list";
}

const formatSold = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : `${n}`;

/**
 * The product results. `grid` renders the shared Shopee ProductCard in a
 * responsive grid; `list` renders wide horizontal rows (image + details +
 * add-to-cart) like Shopee's search list view.
 */
export default function ProductGrid({ products, view }: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyState />;
  }

  if (view === "list") {
    return (
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <ListRow key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

/* ------------------------------- list row ---------------------------------- */
function ListRow({ product }: { product: BrandProduct }) {
  const {
    name,
    image,
    price,
    originalPrice,
    discount,
    sold,
    location,
    rating,
    ratingCount,
    mall,
    preferred,
    freeShipping,
    shopVoucher,
  } = product;

  return (
    <article className="group flex cursor-pointer gap-3 rounded-md bg-white p-2 ring-1 ring-black/5 transition-all duration-200 hover:shadow-lg hover:ring-shopee/30">
      {/* image */}
      <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-sm bg-gray-100 sm:w-44">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discount > 0 && (
          <div className="absolute right-0 top-0 flex flex-col items-center bg-[rgba(249,237,237,0.95)] px-1.5 py-1">
            <span className="text-xs font-semibold leading-none text-shopee">{discount}%</span>
            <span className="text-[8px] font-medium uppercase leading-tight text-shopee">OFF</span>
          </div>
        )}
      </div>

      {/* details */}
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="line-clamp-2 text-sm leading-snug text-gray-700 group-hover:text-shopee">
          {name}
        </h3>

        <div className="mt-1 flex flex-wrap items-center gap-1 text-[10px]">
          {mall && (
            <span className="rounded-sm bg-shopee px-1 py-0.5 font-semibold uppercase tracking-wide text-white">Mall</span>
          )}
          {preferred && (
            <span className="rounded-sm bg-shopee-yellow px-1 py-0.5 font-semibold uppercase tracking-wide text-black">Preferred</span>
          )}
          {freeShipping && (
            <span className="rounded-sm bg-green-100 px-1 py-0.5 font-medium uppercase tracking-wide text-green-700">Free Shipping</span>
          )}
          {shopVoucher !== undefined && (
            <span className="rounded-sm bg-blue-100 px-1 py-0.5 font-medium uppercase tracking-wide text-blue-700">{shopVoucher}% Voucher</span>
          )}
        </div>

        <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-500">
          <StarIcon className="text-shopee" />
          <span className="tabular-nums text-gray-700">{rating.toFixed(1)}</span>
          <span className="text-gray-300">|</span>
          <span className="tabular-nums">{ratingCount.toLocaleString()} Ratings</span>
          <span className="text-gray-300">|</span>
          <span className="tabular-nums">{formatSold(sold)} sold</span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-normal text-shopee">$</span>
            <span className="text-lg font-semibold leading-none text-shopee">{price.toFixed(2)}</span>
            {originalPrice > price && (
              <span className="text-[11px] text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          <span className="text-[11px] text-gray-400">{location}</span>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------- empty state ------------------------------- */
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white py-16 text-center ring-1 ring-black/5">
      <span className="text-4xl">🔍</span>
      <p className="text-sm font-medium text-gray-700">No products match these filters</p>
      <p className="text-xs text-gray-500">Try clearing a filter or widening your price range.</p>
    </div>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  );
}
