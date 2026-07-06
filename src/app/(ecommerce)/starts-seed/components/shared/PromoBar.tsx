/**
 * Shopee-style promo strip pinned to the bottom-left of a product image.
 * Segments sit flush side by side, each with its own background color and a
 * stacked (multi-line) label. A "+" is centered on each seam between perks
 * (absolutely positioned, so it takes no layout width):
 *
 *   | 4.9 | FREE    | SHOPEE    | 15%      |
 *   | white| SHIPPING+VOUCHERS +SHOP       |
 *   | w   | green     red        VOUCHERS  |
 *                              blue
 *
 * Only segments with data are rendered; the strip only appears when the product
 * has at least one perk (free shipping / vouchers). All values are dynamic.
 */
interface PromoBarProps {
  rating?: number;
  freeShipping?: boolean;
  shopeeVoucher?: boolean;
  shopVoucher?: number;
  className?: string;
}

interface Perk {
  key: string;
  lines: string[];
  bg: string;
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

  const perks: Perk[] = [];
  if (freeShipping)
    perks.push({ key: "ship", lines: ["Free", "Shipping"], bg: "bg-green-600" });
  if (shopeeVoucher)
    perks.push({ key: "sv", lines: ["Shopee", "Vouchers"], bg: "bg-red-600" });
  if (shopVoucher !== undefined)
    perks.push({
      key: "shop",
      lines: [`${shopVoucher}% Shop`, "Vouchers"],
      bg: "bg-blue-600",
    });

  return (
    <div
      className={`absolute bottom-1 left-1 flex max-w-[calc(100%-0.5rem)] items-stretch overflow-hidden rounded-[3px] text-white shadow-sm ring-1 ring-black/10 ${className}`}
    >
      {/* rating — white background, red number */}
      {rating !== undefined && (
        <span className="flex items-center justify-center whitespace-nowrap bg-white px-1.5 text-[12px] font-bold leading-tight text-shopee sm:text-[13px]">
          {rating.toFixed(1)}
        </span>
      )}

      {/* perks — colored segments with stacked labels. The "+" is absolutely
          positioned on each seam (translated to straddle the boundary) so it
          sits centered between perks without consuming any layout width. */}
      {perks.map((perk, i) => (
        <span
          key={perk.key}
          className={`relative flex items-center px-1.5 py-1 text-[8px] font-semibold uppercase leading-[1.15] tracking-wide sm:text-[9px] ${perk.bg}`}
        >
          <span className="flex flex-col">
            {perk.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
          {i < perks.length - 1 && (
            <span
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 text-[11px] font-bold leading-none text-white/90"
              aria-hidden="true"
            >
              +
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
