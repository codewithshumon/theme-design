import { dailyDiscover } from "../data";
import SectionHeader from "./shared/SectionHeader";
import ProductCard from "./shared/ProductCard";

/** Shopee "Daily Discover" — large responsive grid of product cards. */
export default function DailyDiscover() {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader
        title="Daily Discover"
        subtitle="Top picks updated daily"
        accent="shopee"
        link="#"
        linkLabel="See more"
      />
      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {dailyDiscover.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center pb-4 pt-1">
        <button className="rounded-full bg-shopee-light px-8 py-2 text-sm font-medium text-shopee transition hover:bg-shopee hover:text-white">
          See More
        </button>
      </div>
    </section>
  );
}
