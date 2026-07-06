"use client";

import { useMemo, useState } from "react";
import { brandProducts, type FilterState } from "../data";
import FilterSidebar from "./FilterSidebar";
import ListingToolbar from "./ListingToolbar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

const PAGE_SIZE = 12;

const defaultFilters: FilterState = {
  category: "All",
  freeShipping: false,
  mallOnly: false,
  preferredOnly: false,
  voucherOnly: false,
  ratingMin: 0,
  priceMin: "",
  priceMax: "",
  activePriceChip: null,
  sort: "relevant",
  view: "grid",
};

/**
 * Owns the listing state (filters + sort + view + page) and composes the
 * sidebar, toolbar, grid and pagination. Server-rendered data flows in as
 * props; everything interactive lives here.
 */
export default function SearchListing() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [page, setPage] = useState(1);

  /** patch filters and snap back to page 1 so users see fresh results. */
  const set = (patch: Partial<FilterState>) => {
    setFilters((f) => ({ ...f, ...patch }));
    setPage(1);
  };
  const clearAll = () => {
    setFilters(defaultFilters);
    setPage(1);
  };

  /* ----- apply filters ----- */
  const filtered = useMemo(() => {
    const min = filters.priceMin ? Number(filters.priceMin) : -Infinity;
    const max = filters.priceMax ? Number(filters.priceMax) : Infinity;
    return brandProducts.filter((p) => {
      if (filters.category !== "All" && p.category !== filters.category) return false;
      if (filters.freeShipping && !p.freeShipping) return false;
      if (filters.mallOnly && !p.mall) return false;
      if (filters.preferredOnly && !p.preferred) return false;
      if (filters.voucherOnly && !(p.shopeeVoucher || p.shopVoucher !== undefined)) return false;
      if (filters.ratingMin && p.rating < filters.ratingMin) return false;
      if (p.price < min || p.price > max) return false;
      return true;
    });
  }, [filters]);

  /* ----- apply sort ----- */
  const sorted = useMemo(() => {
    const list = [...filtered];
    switch (filters.sort) {
      case "latest":
        list.sort((a, b) => a.daysAgo - b.daysAgo);
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

  /* ----- paginate ----- */
  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const paged = sorted.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const activeChips = buildActiveChips(filters);

  return (
    <section>
      {/* sort / count / view */}
      <ListingToolbar filters={filters} set={set} count={sorted.length} />

      {/* active filter chips */}
      {activeChips.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5 rounded-md bg-white px-3 py-2 ring-1 ring-black/5">
          <span className="text-xs text-gray-500">Active:</span>
          {activeChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={() => set(chip.clear)}
              className="flex items-center gap-1 rounded-full bg-shopee-light px-2 py-1 text-[11px] font-medium text-shopee ring-1 ring-shopee/30 transition hover:bg-shopee hover:text-white"
            >
              {chip.label}
              <CloseX />
            </button>
          ))}
        </div>
      )}

      <div className="mt-2 flex flex-col gap-3 lg:flex-row">
        {/* filter rail (sticky on desktop) */}
        <div className="lg:sticky lg:top-3 lg:self-start">
          <FilterSidebar filters={filters} set={set} clearAll={clearAll} />
        </div>

        {/* results */}
        <div className="min-w-0 flex-1">
          <ProductGrid products={paged} view={filters.view} />

          <Pagination page={current} pageCount={pageCount} onPage={setPage} />

          {sorted.length > 0 && (
            <p className="py-2 text-center text-xs text-gray-400">
              Page {current} of {pageCount} · {sorted.length} products
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- active-filter chip builders ----------------------- */
function buildActiveChips(f: FilterState) {
  const chips: { key: string; label: string; clear: Partial<FilterState> }[] = [];
  if (f.category !== "All")
    chips.push({ key: "cat", label: f.category, clear: { category: "All" } });
  if (f.freeShipping)
    chips.push({ key: "ship", label: "Free Shipping", clear: { freeShipping: false } });
  if (f.mallOnly) chips.push({ key: "mall", label: "Shopee Mall", clear: { mallOnly: false } });
  if (f.preferredOnly)
    chips.push({ key: "pref", label: "Preferred", clear: { preferredOnly: false } });
  if (f.voucherOnly)
    chips.push({ key: "voucher", label: "With Vouchers", clear: { voucherOnly: false } });
  if (f.ratingMin)
    chips.push({ key: "rating", label: `${f.ratingMin}★ & Up`, clear: { ratingMin: 0 } });
  if (f.activePriceChip)
    chips.push({
      key: "price",
      label: f.activePriceChip,
      clear: { activePriceChip: null, priceMin: "", priceMax: "" },
    });
  else if (f.priceMin || f.priceMax)
    chips.push({
      key: "price",
      label: `$${f.priceMin || "0"} – $${f.priceMax || "∞"}`,
      clear: { priceMin: "", priceMax: "" },
    });
  return chips;
}

function CloseX() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
