/**
 * Shopee-style promo strip pinned to the bottom-left of a product image.
 * One orange bar, white text, thin white dividers between segments. Only
 * segments that have data are rendered, and the strip only appears when the
 * product has at least one perk (free shipping / vouchers):
 *
 *   4.9 │ FREE SHIPPING │ SHOPEE VOUCHERS │ 15% SHOP VOUCHERS
 *
 * All values are dynamic — pass whatever the product has.
 */
interface PromoBarProps {
  rating?: number;
  freeShipping?: boolean;
  shopeeVoucher?: boolean;
  shopVoucher?: number;
  className?: string;
}

export default function PromoBar({
  rating,
  freeShipping,
  shopeeVoucher,
  shopVoucher,
  className = "",
}: PromoBarProps) {
  // Only show the strip when the product actually has a perk beyond its rating.
  const hasPerk = freeShipping || shopeeVoucher || shopVoucher !== undefined;
  if (!hasPerk) return null;

  const segments: string[] = [];
  if (rating !== undefined) segments.push(rating.toFixed(1));
  if (freeShipping) segments.push("Free Shipping");
  if (shopeeVoucher) segments.push("Shopee Voucher");
  if (shopVoucher !== undefined) segments.push(`${shopVoucher}% Shop Voucher`);

  if (segments.length === 0) return null;

  return (
    <div
      className={`absolute bottom-1 left-1 flex max-w-[calc(100%-0.5rem)] items-stretch overflow-hidden rounded-[3px] bg-shopee text-white shadow-sm ${className}`}
    >
      {segments.map((seg, i) => (
        <span
          key={`${seg}-${i}`}
          className={`flex items-center whitespace-nowrap px-1.5 py-0.5 text-[8px] font-semibold uppercase leading-tight tracking-wide sm:text-[9px] ${
            i > 0 ? "border-l border-white/40" : ""
          }`}
        >
          {seg}
        </span>
      ))}
    </div>
  );
}
