import { categoryCards } from "../data";

/**
 * Amazon "category card" — a titled box with a 2×2 image grid and a
 * "See all" link. Renders the full row of cards (Section 6).
 */
export default function CategoryGrid() {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {categoryCards.map((card) => (
        <div key={card.id} className="rounded-md bg-white p-4 ring-1 ring-black/5">
          <h3 className="mb-3 text-lg font-bold text-gray-900">{card.title}</h3>
          <div className="grid grid-cols-2 gap-2">
            {card.items.map((item) => (
              <a key={item.label} href={card.link} className="group">
                <div className="aspect-square overflow-hidden rounded bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1 truncate text-xs text-gray-700 group-hover:text-amazon-link">
                  {item.label}
                </p>
              </a>
            ))}
          </div>
          <a
            href={card.link}
            className="mt-3 inline-block text-sm font-medium text-amazon-link hover:text-shopee"
          >
            {card.cta} →
          </a>
        </div>
      ))}
    </section>
  );
}
