import { featuredBrands } from "../data";
import SectionHeader from "../../components/shared/SectionHeader";
import BrandCard from "./BrandCard";

/**
 * "Featured Brands" — a responsive grid of larger banner cards (logo
 * overlapping a wide banner). Server component; BrandCard holds the
 * interactive Follow toggle.
 */
export default function FeaturedBrands() {
  if (featuredBrands.length === 0) return null;

  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader
        title="Featured Brands"
        subtitle="Hand-picked official stores"
        link="#"
        linkLabel="See all"
      />
      <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {featuredBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} variant="featured" />
        ))}
      </div>
    </section>
  );
}
