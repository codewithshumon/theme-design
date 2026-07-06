"use client";

import { useMemo, useState } from "react";
import {
  allDeals,
  dealCategoryTabs,
  sortTabs,
  type FilterState,
} from "../data";
import ProductCard from "../../components/shared/ProductCard";
import SectionHeader from "../../components/shared/SectionHeader";
import Pagination from "../../components/shared/Pagination";

const PAGE_SIZE = 12;

const defaultFilters: FilterState = {
  category: "All",
  sort: "relevant",
  view: "grid",
};

/**
 * The "All Deals" results: a horizontal category-chip rail + a sort toolbar
 * (with grid/list toggle) over a paginated product grid. Same lifted-state
 * pattern as the brand listing, but with chips instead of a left sidebar.
 */
export default function DealsListing() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [page, setPage] = useState(1);

  const set = (patch: Partial<FilterState>) => {
    setFilters((f) => ({ ...f, ...patch }));
    setPage(1);
  };

  const filtered = useMemo(
    () =>
      allDeals.filter(
        (p) => filters.category === "All" || p.category === filters.category
      ),
    [filters.category]
  );

  const sorted = useMemo(() => {
    const list = [...filtered];
    switch (filters.sort) {
      case "latest":
        list.sort((a, b) => b.id - a.id);
        break;
      case "top":
        list.sort((a, b) => b.sold - a.sold);
        break;
      case "priceAsc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return list;
  }, [filtered, filters.sort]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const paged = sorted.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <section id="all-deals" className="scroll-mt-3 overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <SectionHeader title="All Deals" subtitle={`${allDeals.length} deals across every category`} />

      {/* category chips */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-gray-100 px-3 py-2.5">
        {dealCategoryTabs.map((tab) => {
          const active = filters.category === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => set({ category: tab })}
              className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-medium ring-1 transition ${
                active
                  ? "bg-shopee text-white ring-shopee"
                  : "bg-white text-gray-700 ring-gray-200 hover:ring-shopee/40 hover:text-shopee"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* sort + count + view */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-3 py-2">
        <span className="text-sm text-gray-500">Sort by</span>
        <div className="flex items-center overflow-hidden rounded-sm ring-1 ring-gray-200">
          {sortTabs.map((tab) => {
            const active = filters.sort === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => set({ sort: tab.key })}
                className={`px-3 py-1.5 text-sm capitalize transition ${
                  active ? "bg-shopee text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <PriceArrow
          active={filters.sort === "priceAsc"}
          onClick={() => set({ sort: "priceAsc" })}
          dir="up"
        />
        <PriceArrow
          active={filters.sort === "priceDesc"}
          onClick={() => set({ sort: "priceDesc" })}
          dir="down"
        />

        <span className="ml-auto text-sm text-gray-500">
          <span className="font-semibold text-gray-800">{sorted.length}</span> deals
        </span>

        <ViewToggle view={filters.view} set={set} />
      </div>

      {/* results */}
      <div className="p-3">
        {paged.length === 0 ? (
          <EmptyState />
        ) : filters.view === "list" ? (
          <div className="flex flex-col gap-2">
            {paged.map((p) => (
              <DealListRow key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {paged.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      <Pagination page={current} pageCount={pageCount} onPage={setPage} />
    </section>
  );
}

/* ------------------------------- list row ---------------------------------- */
function DealListRow({ product }: { product: (typeof allDeals)[number] }) {
  const { name, image, price, originalPrice, discount, sold, location, mall, preferred } = product;
  return (
    <article className="group flex cursor-pointer gap-3 rounded-md p-2 ring-1 ring-black/5 transition-all duration-200 hover:shadow-lg hover:ring-shopee/30">
      <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-sm bg-gray-100 sm:w-40">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discount > 0 && (
          <div className="absolute right-0 top-0 flex flex-col items-center bg-[rgba(249,237,237,0.95)] px-1.5 py-1">
            <span className="text-xs font-semibold leading-none text-shopee">{discount}%</span>
            <span className="text-[8px] font-medium uppercase leading-tight text-shopee">OFF</span>
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="line-clamp-2 text-sm leading-snug text-gray-700 group-hover:text-shopee">{name}</h3>
        {(mall || preferred) && (
          <div className="mt-1 flex flex-wrap gap-1 text-[10px]">
            {mall && <span className="rounded-sm bg-shopee px-1 py-0.5 font-semibold uppercase text-white">Mall</span>}
            {preferred && <span className="rounded-sm bg-shopee-yellow px-1 py-0.5 font-semibold uppercase text-black">Preferred</span>}
          </div>
        )}
        <div className="mt-auto flex items-end justify-between pt-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs text-shopee">$</span>
            <span className="text-lg font-semibold leading-none text-shopee">{price.toFixed(2)}</span>
            {originalPrice > price && (
              <span className="text-[11px] text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          <span className="text-[11px] text-gray-400">{sold.toLocaleString()} sold · {location}</span>
        </div>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <span className="text-4xl">🛒</span>
      <p className="text-sm font-medium text-gray-700">No deals in this category yet</p>
      <p className="text-xs text-gray-500">Check back soon — new deals drop every hour.</p>
    </div>
  );
}

/* ------------------------------- primitives -------------------------------- */
function PriceArrow({
  active,
  onClick,
  dir,
}: {
  active: boolean;
  onClick: () => void;
  dir: "up" | "down";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Price: ${dir === "up" ? "low to high" : "high to low"}`}
      className={`flex h-7 w-7 items-center justify-center rounded-sm ring-1 transition ${
        active ? "bg-shopee-light text-shopee ring-shopee/40" : "text-gray-500 ring-gray-200 hover:bg-gray-50"
      }`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === "up" ? <path d="M6 14l6-6 6 6" /> : <path d="M6 10l6 6 6-6" />}
      </svg>
    </button>
  );
}

function ViewToggle({
  view,
  set,
}: {
  view: FilterState["view"];
  set: (patch: Partial<FilterState>) => void;
}) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => set({ view: "grid" })}
        aria-label="Grid view"
        className={`flex h-8 w-8 items-center justify-center rounded-sm ring-1 transition ${
          view === "grid" ? "bg-shopee text-white ring-shopee" : "text-gray-500 ring-gray-200 hover:bg-gray-50"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
          <rect x="13" y="13" width="8" height="8" rx="1" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => set({ view: "list" })}
        aria-label="List view"
        className={`flex h-8 w-8 items-center justify-center rounded-sm ring-1 transition ${
          view === "list" ? "bg-shopee text-white ring-shopee" : "text-gray-500 ring-gray-200 hover:bg-gray-50"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
    </div>
  );
}
