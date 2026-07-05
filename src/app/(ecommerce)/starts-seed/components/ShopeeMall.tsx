import { mallStores } from "../data";
import SectionHeader from "./shared/SectionHeader";

/**
 * "Starts Seed Mall" — official store showcase. Each store shows its logo,
 * name and a row of preview product images.
 */
export default function ShopeeMall() {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader
        title="Starts Seed Mall"
        subtitle="100% Authentic"
        icon={<MallIcon />}
        accent="shopee"
        link="#"
        linkLabel="See all"
      />
      <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
        {mallStores.map((store, idx) => (
          <a
            key={store.id}
            href="#"
            className={`flex items-center gap-3 p-3 transition-colors hover:bg-shopee-light ${
              idx >= 3 ? "lg:[&]:border-t" : ""
            }`}
          >
            {/* store logo */}
            <div className="flex shrink-0 flex-col items-center gap-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-shopee to-shopee-dark text-base font-bold text-white">
                {store.name.charAt(0)}
              </span>
              <span className="max-w-[64px] truncate text-[11px] font-medium text-gray-600">
                {store.name}
              </span>
            </div>
            {/* preview images */}
            <div className="flex flex-1 gap-1.5">
              {store.images.map((image, i) => (
                <div
                  key={i}
                  className="aspect-square flex-1 overflow-hidden rounded-sm bg-gray-100"
                >
                  <img
                    src={image}
                    alt={`${store.name} product ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function MallIcon() {
  return (
    <span className="rounded bg-shopee px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
      Mall
    </span>
  );
}
