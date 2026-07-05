import { internationalProducts } from "../data";

/**
 * Amazon "New international customers purchased" — a single wide card whose
 * body is a pure image grid (no prices / text, just images + tiny captions).
 */
export default function InternationalCustomers() {
  return (
    <section className="rounded-md bg-white p-4 ring-1 ring-black/5">
      <h3 className="mb-3 text-lg font-bold text-gray-900">
        New international customers purchased
      </h3>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {internationalProducts.map((item) => (
          <a key={item.id} href={item.link} className="group">
            <div className="aspect-square overflow-hidden rounded bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-1 truncate text-center text-[11px] text-gray-600 group-hover:text-amazon-link">
              {item.title}
            </p>
          </a>
        ))}
      </div>
      <a
        href="#"
        className="mt-3 inline-block text-sm font-medium text-amazon-link hover:text-shopee"
      >
        See more →
      </a>
    </section>
  );
}
