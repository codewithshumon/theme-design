/**
 * Shopee-style promo strip pinned to the bottom-left of a product image.
 * Segments sit side by side, each with its own background color and a stacked
 * (multi-line) label, with a "+" between perks to show stacking:
 *
 *   [ 4.9 ] [ FREE      +] [ SHOPEE     +] [ 15%        ]
 *   [ white] [ SHIPPING  ] [ VOUCHERS   ] [ SHOP       ]
 *    white    green          red            [ VOUCHERS  ]
 *                                            blue
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
      lines: [`${shopVoucher}%`, "Shop", "Vouchers"],
      bg: "bg-blue-600",
    });

  return (
    <div
      className={`absolute bottom-1 left-1 flex max-w-[calc(100%-0.5rem)] items-stretch overflow-hidden rounded-[3px] text-white shadow-sm ring-1 ring-black/10 ${className}`}
    >
      {/* rating — white background, red number */}
      {rating !== undefined && (
        <span className="flex items-center justify-center whitespace-nowrap bg-white px-1.5 text-[10px] font-bold leading-tight text-shopee sm:text-[11px]">
          {rating.toFixed(1)}
        </span>
      )}

      {/* perks — colored segments with stacked labels and "+" between */}
      {perks.map((perk, i) => (
        <span
          key={perk.key}
          className={`flex items-center gap-1 px-1.5 py-1 text-[9px] font-semibold uppercase leading-[1.15] tracking-wide sm:text-[10px] ${perk.bg}`}
        >
          <span className="flex flex-col">
            {perk.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
          {i < perks.length - 1 && (
            <span className="font-bold text-white/90" aria-hidden="true">
              +
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
