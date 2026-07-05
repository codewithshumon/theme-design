import { brands } from "../data";

/**
 * Brand logos scrolling continuously right -> left (Sony Smart style).
 * The list is duplicated so the CSS marquee loops seamlessly.
 */
export default function BrandScroll() {
  const loop = [...brands, ...brands];
  return (
    <div className="overflow-hidden rounded-md bg-white py-4 ring-1 ring-black/5">
      <div className="marquee-pause relative">
        <div className="animate-marquee-rtl flex w-max items-center gap-10 px-5">
          {loop.map((brand, i) => (
            <a
              key={`${brand.id}-${i}`}
              href={brand.href}
              className="group flex shrink-0 items-center gap-2"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: brand.color }}
              >
                {brand.name.charAt(0)}
              </span>
              <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-gray-600 transition-colors group-hover:text-shopee">
                {brand.name}
              </span>
            </a>
          ))}
        </div>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
