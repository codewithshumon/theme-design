"use client";

import { useMemo, useState } from "react";
import {
  brandProducts,
  shopTypeOptions,
  serviceOptions,
  shippedFromOptions,
  shippingOptions,
  store,
  searchQuery,
  type BrandProduct,
  type CheckboxSection,
  type FilterState,
} from "../data";
import FilterSidebar from "./FilterSidebar";
import ListingToolbar from "./ListingToolbar";
import ProductGrid from "./ProductGrid";
import FeaturedShop from "./FeaturedShop";
import Pagination from "../../components/shared/Pagination";

const PAGE_SIZE = 18;

const defaultFilters: FilterState = {
  categories: [],
  shopType: [],
  services: [],
  shippedFrom: [],
  shipping: [],
  ratingMin: 0,
  priceMin: "",
  priceMax: "",
  activePriceChip: null,
  sort: "relevant",
  view: "grid",
};

/**
 * Owns the listing state (filters + sort + view + page) and composes the
 * sidebar, toolbar, "Top Picks" card, grid and pagination. Server-rendered
 * data flows in from ./data; everything interactive lives here.
 */
export default function SearchListing() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [page, setPage] = useState(1);

  /** patch scalar fields and snap back to page 1. */
  const set = (patch: Partial<FilterState>) => {
    setFilters((f) => ({ ...f, ...patch }));
    setPage(1);
  };

  /** toggle one checkbox within a multi-select section. */
  const toggle = (section: CheckboxSection, key: string) => {
    setFilters((f) => {
      const arr = f[section];
      const next = arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key];
      return { ...f, [section]: next };
    });
    setPage(1);
  };

  const clearAll = () => {
    setFilters(defaultFilters);
    setPage(1);
  };

  /* ----- apply filters ----- */
  const filtered = useMemo(() => {
    const f = filters;
    const min = f.priceMin ? Number(f.priceMin) : -Infinity;
    const max = f.priceMax ? Number(f.priceMax) : Infinity;
    return brandProducts.filter((p) => {
      if (f.categories.length && !f.categories.includes(p.category)) return false;
      if (
        !matchSection(f.shopType, {
          mall: () => !!p.mall,
          preferred: () => !!p.preferred,
          fulfilled: () => !!p.fulfilled,
        })
      )
        return false;
      if (
        !matchSection(f.services, {
          shopeeVoucher: () => !!p.shopeeVoucher,
          brandVoucher: () => p.shopVoucher !== undefined,
        })
      )
        return false;
      if (
        !matchSection(
          f.shippedFrom,
          Object.fromEntries(shippedFromOptions.map((o) => [o.key, () => p.shippedFrom === o.key]))
        )
      )
        return false;
      if (!matchSection(f.shipping, { doorstep: () => !!p.freeShipping })) return false;
      if (f.ratingMin && p.rating < f.ratingMin) return false;
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

  /* ----- "Top Picks" featured shop: stable top-5 by sales (page 1 only) ----- */
  const topPicks = useMemo<BrandProduct[]>(
    () => [...brandProducts].sort((a, b) => b.sold - a.sold).slice(0, 5),
    []
  );

  const activeChips = buildActiveChips(filters);

  return (
    <section>
      {/* sort / count / view / mini-pagination */}
      <ListingToolbar
        filters={filters}
        set={set}
        count={sorted.length}
        query={searchQuery}
        page={current}
        pageCount={pageCount}
        onPage={setPage}
      />

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
        {/* filter rail */}
        <div className="lg:sticky lg:top-3 lg:self-start">
          <FilterSidebar filters={filters} set={set} toggle={toggle} clearAll={clearAll} />
        </div>

        {/* results */}
        <div className="min-w-0 flex-1 space-y-3">
          {/* "Top Picks" featured shop — stays visible on every page */}
          <FeaturedShop shop={store} products={topPicks} />

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

/* --------------------------- section match helper -------------------------- */
/**
 * Returns true if the product satisfies a checkbox section. Only option keys
 * with a matcher are considered; options with no backing data (e.g. "Premium")
 * are visual-only and never narrow the results.
 */
function matchSection(selected: string[], fns: Record<string, () => boolean>) {
  const keys = selected.filter((k) => k in fns);
  if (keys.length === 0) return true;
  return keys.some((k) => fns[k]());
}

/* ----------------------- active-filter chip builders ----------------------- */
function buildActiveChips(f: FilterState) {
  const chips: { key: string; label: string; clear: Partial<FilterState> }[] = [];
  for (const cat of f.categories) {
    chips.push({
      key: "cat" + cat,
      label: cat,
      clear: { categories: f.categories.filter((c) => c !== cat) },
    });
  }

  const sections: ReadonlyArray<[CheckboxSection, typeof shopTypeOptions]> = [
    ["shopType", shopTypeOptions],
    ["services", serviceOptions],
    ["shippedFrom", shippedFromOptions],
    ["shipping", shippingOptions],
  ];
  for (const [section, options] of sections) {
    for (const opt of options) {
      if (f[section].includes(opt.key)) {
        chips.push({
          key: section + opt.key,
          label: opt.label,
          clear: { [section]: f[section].filter((k) => k !== opt.key) } as Partial<FilterState>,
        });
      }
    }
  }

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
