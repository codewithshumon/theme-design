import { computersBestSellers } from "../data";

/**
 * Amazon "Best Sellers in Computers & Accessories" — image-only products,
 * each with a numeric rank badge, in a horizontal scroll.
 */
export default function ComputersBestSellers() {
  return (
    <section className="rounded-md bg-white p-4 ring-1 ring-black/5">
      <h3 className="mb-3 text-lg font-bold text-gray-900">
        Best Sellers in Computers &amp; Accessories
      </h3>
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-1">
        {computersBestSellers.map((item) => (
          <a
            key={item.id}
            href="#"
            className="group relative w-36 shrink-0 sm:w-44"
          >
            <span className="absolute left-0 top-0 z-10 flex h-7 w-7 items-center justify-center rounded-br-lg bg-amazon-dark text-sm font-bold text-white">
              #{item.rank}
            </span>
            <div className="aspect-square overflow-hidden rounded bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-1.5 line-clamp-2 text-xs text-gray-700 group-hover:text-amazon-link">
              {item.title}
            </p>
          </a>
        ))}
      </div>
      <a
        href="#"
        className="mt-3 inline-block text-sm font-medium text-amazon-link hover:text-shopee"
      >
        See all best sellers →
      </a>
    </section>
  );
}
