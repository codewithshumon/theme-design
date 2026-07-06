import type { DealProduct } from "../data";
import FlashDealCard from "../../components/FlashDealCard";
import SectionHeader from "../../components/shared/SectionHeader";

/**
 * "Ending Soon" — low-stock deals rendered as flash cards so the urgency bar
 * ("Only X left") is front and center.
 */
export default function EndingSoon({ products }: { products: DealProduct[] }) {
  if (products.length === 0) return null;
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader
        title="⏰ Ending Soon"
        subtitle="Almost gone — grab them before they're out"
      />
      <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
        {products.map((product) => (
          <FlashDealCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
