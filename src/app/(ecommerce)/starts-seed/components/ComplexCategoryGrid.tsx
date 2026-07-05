import { complexCategoryGrid as grid } from "../data";

function MiniGrid({
  title,
  items,
}: {
  title: string;
  items: { title: string; image: string }[];
}) {
  return (
    <div className="flex flex-col">
      <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
      <div className="grid flex-1 grid-cols-2 gap-2">
        {items.map((it) => (
          <a key={it.title} href="#" className="group">
            <div className="aspect-square overflow-hidden rounded bg-gray-100">
              <img
                src={it.image}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-1 truncate text-[11px] text-gray-700 group-hover:text-amazon-link">
              {it.title}
            </p>
          </a>
        ))}
      </div>
      <a
        href="#"
        className="mt-2 inline-block text-sm font-medium text-amazon-link hover:text-shopee"
      >
        See more →
      </a>
    </div>
  );
}

/**
 * Section 10 — Amazon composite category card laid out as 4 columns:
 *   [ 4-image grid ] [ 4-image grid ] [ 1 image / banner ] [ 4-image grid ]
 */
export default function ComplexCategoryGrid() {
  return (
    <section className="rounded-md bg-white p-4 ring-1 ring-black/5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MiniGrid title="Gaming & Tech" items={grid.row1} />
        <MiniGrid title="Beauty Picks" items={grid.row2} />

        {/* 1-image banner column */}
        <a href={grid.banner.link} className="group flex flex-col">
          <h3 className="mb-2 text-base font-bold text-gray-900">
            {grid.banner.title}
          </h3>
          <div className="relative flex-1 overflow-hidden rounded bg-gray-100">
            <img
              src={grid.banner.image}
              alt={grid.banner.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white">
              {grid.banner.subtitle}
            </p>
          </div>
          <span className="mt-2 inline-block text-sm font-medium text-amazon-link group-hover:text-shopee">
            Learn more →
          </span>
        </a>

        <MiniGrid title="Sports & Outdoors" items={grid.row4} />
      </div>
    </section>
  );
}
