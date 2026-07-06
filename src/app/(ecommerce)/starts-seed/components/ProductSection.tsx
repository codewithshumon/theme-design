import type { Product } from "../data/types";
import SectionHeader from "./shared/SectionHeader";
import Carousel, { carouselItemCols } from "./shared/Carousel";
import ProductCard from "./shared/ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  link?: string;
  linkLabel?: string;
  icon?: string;
}

/**
 * Reusable Shopee-style product carousel: section header + horizontal
 * scroll of ProductCards. Used for Top Products, Best Sellers, Most Viewed.
 * Card width is responsive so exactly 7 fit on wide screens (fewer, wider,
 * on smaller screens); extra cards scroll horizontally.
 */
export default function ProductSection({
  title,
  subtitle,
  products,
  link = "#",
  linkLabel = "See all",
  icon,
}: ProductSectionProps) {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        link={link}
        linkLabel={linkLabel}
        icon={icon ? <span className="text-base">{icon}</span> : undefined}
      />
      <div className="px-2 pb-3 pt-1">
        <Carousel ariaLabel={title} step={700} className="px-1" itemClassName={carouselItemCols}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
