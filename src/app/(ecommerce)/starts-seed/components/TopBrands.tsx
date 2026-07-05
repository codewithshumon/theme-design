import { topBrands } from "../data";

/**
 * "Top Brands" — Sony Smart style. Circular logo wall on a branded band.
 */
export default function TopBrands() {
  return (
    <section className="rounded-md bg-linear-to-b from-shopee-light to-white px-6 py-12 ring-1 ring-black/5 sm:py-16">
      <div className="w-full text-center">
        <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-widest text-shopee ring-1 ring-shopee/20">
          Official Partners
        </span>
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-4xl">
          Top Brands
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
          Shop authentic products from the world&apos;s most trusted brands.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-10">
          {topBrands.map((brand) => (
            <a
              key={brand.id}
              href={brand.href}
              title={brand.name}
              className="group flex flex-col items-center gap-2"
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white shadow-sm ring-2 ring-white transition group-hover:scale-110 group-hover:ring-shopee/40"
                style={{ backgroundColor: brand.color }}
              >
                {brand.name.charAt(0)}
              </span>
              <span className="text-[11px] font-medium text-gray-500 group-hover:text-shopee">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
