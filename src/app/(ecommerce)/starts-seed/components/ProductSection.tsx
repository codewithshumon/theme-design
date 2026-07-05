import type { Product } from "../data/types";
import SectionHeader from "./shared/SectionHeader";
import Carousel from "./shared/Carousel";
import ProductCard from "./shared/ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  link?: string;
  linkLabel?: string;
  icon?: string;
  /** item width inside the carousel */
  itemWidth?: number;
}

/**
 * Reusable Shopee-style product carousel: colored-accent header + horizontal
 * scroll of ProductCards. Used for Top Products, Best Sellers, Most Viewed.
 */
export default function ProductSection({
  title,
  subtitle,
  products,
  link = "#",
  linkLabel = "See all",
  icon,
  itemWidth = 190,
}: ProductSectionProps) {
  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        accent="shopee"
        link={link}
        linkLabel={linkLabel}
        icon={icon ? <span className="text-base">{icon}</span> : undefined}
      />
      <div className="px-2 pb-3 pt-1">
        <Carousel
          ariaLabel={title}
          step={itemWidth * 4}
          className="px-1"
          itemClassName=""
        >
          {products.map((product) => (
            <div key={product.id} style={{ width: itemWidth }}>
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
