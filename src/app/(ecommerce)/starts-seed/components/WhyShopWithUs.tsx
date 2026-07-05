import { whyShopFeatures } from "../data";

/**
 * "Why Shop With Us" — Sony Smart style. Light band with a 3×2 feature grid.
 */
export default function WhyShopWithUs() {
  return (
    <section className="rounded-md bg-white px-6 py-12 ring-1 ring-black/5 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-shopee-light px-3 py-1 text-xs font-medium uppercase tracking-widest text-shopee">
          Customer First
        </span>
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-4xl">
          Why Shop With Us
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base">
          We obsess over the details so you can shop with total confidence —
          from checkout to your doorstep.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyShopFeatures.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-5 text-left transition hover:-translate-y-1 hover:border-shopee/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm ring-1 ring-black/5 transition group-hover:bg-shopee-light">
                {f.emoji}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
