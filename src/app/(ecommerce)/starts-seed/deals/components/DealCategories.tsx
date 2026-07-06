import type { DealCategory } from "../data";
import { img } from "../../data";
import SectionHeader from "../../components/shared/SectionHeader";

/** "Shop deals by category" — image tiles with the max discount + deal count. */
export default function DealCategories({ categories }: { categories: DealCategory[] }) {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader title="Shop by Category" subtitle="Deals in every aisle" />
      <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href="#all-deals"
            className="group relative overflow-hidden rounded-md ring-1 ring-black/5"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={img(cat.seed, 300, 300)}
                alt={cat.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-2 text-white">
              <span className="rounded-full bg-shopee px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide w-fit">
                Up to {cat.discount}% Off
              </span>
              <span className="truncate text-sm font-semibold">{cat.name}</span>
              <span className="text-[11px] text-white/80">
                {cat.count.toLocaleString()} deals
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
