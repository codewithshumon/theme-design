import { categories } from "../data";
import SectionHeader from "./shared/SectionHeader";

/** Shopee-style "Categories" grid — icon tile + label. */
export default function Categories() {
  return (
    <section className="rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader
        title="Categories"
        accent="shopee"
        link="#"
        linkLabel="See all"
      />
      <div className="grid grid-cols-5 gap-px bg-gray-100 sm:grid-cols-8 lg:grid-cols-9">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={cat.href}
            className="group flex flex-col items-center gap-2 bg-white px-2 py-4 transition-colors hover:bg-shopee-light"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-2xl transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
              {cat.emoji}
            </span>
            <span className="text-center text-xs leading-tight text-gray-600 group-hover:text-shopee">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
