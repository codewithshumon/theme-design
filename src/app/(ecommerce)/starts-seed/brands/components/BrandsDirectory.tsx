"use client";

import { useState } from "react";
import { allBrands, brandCategories } from "../data";
import SectionHeader from "../../components/shared/SectionHeader";
import BrandCard from "./BrandCard";

/**
 * "All Brands" directory — category filter chips above a responsive grid of
 * compact brand cards. Filtering is client-side; "All" resets the view.
 */
export default function BrandsDirectory() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? allBrands
      : allBrands.filter((b) => b.category === active);

  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader title="All Brands" subtitle={`${allBrands.length} stores`} link="#" />

      {/* category chips */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3">
        {brandCategories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                isActive
                  ? "bg-shopee text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* grid — same 2→7 ladder the product cards use, for consistency */}
      <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {visible.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="px-4 pb-6 text-center text-sm text-gray-400">
          No brands in this category yet.
        </p>
      )}
    </section>
  );
}
