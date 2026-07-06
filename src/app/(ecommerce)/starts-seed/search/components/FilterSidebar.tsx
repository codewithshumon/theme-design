"use client";

import { useState } from "react";
import {
  storeCategories,
  priceChips,
  ratingFilters,
  type FilterState,
} from "../data";

interface FilterSidebarProps {
  filters: FilterState;
  /** patch one or more filter fields at once */
  set: (patch: Partial<FilterState>) => void;
  clearAll: () => void;
}

/**
 * Shopee-style left filter rail for the brand listing.
 * Collapsible sections: CATEGORIES · SHIPPING · PRICE · RATINGS · SERVICES.
 * All values are lifted into the SearchListing wrapper and patched via `set`.
 */
export default function FilterSidebar({ filters, set, clearAll }: FilterSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-60">
      <div className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-700">
            Filters
          </h2>
          <button
            type="button"
            onClick={clearAll}
            className="text-xs font-medium text-shopee hover:text-shopee-dark"
          >
            CLEAR ALL
          </button>
        </div>

        <Section title="Categories" defaultOpen>
          <ul className="space-y-0.5 text-sm">
            {storeCategories.map((cat) => {
              const active = filters.category === cat;
              return (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => set({ category: cat })}
                    className={`w-full truncate rounded px-2 py-1.5 text-left transition ${
                      active
                        ? "bg-shopee-light font-medium text-shopee"
                        : "text-gray-700 hover:bg-gray-50 hover:text-shopee"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section title="Shipping" defaultOpen>
          <CheckRow
            label="Free Shipping"
            checked={filters.freeShipping}
            onChange={(v) => set({ freeShipping: v })}
          />
        </Section>

        <Section title="Price Range" defaultOpen>
          <div className="flex items-center gap-2">
            <PriceInput
              value={filters.priceMin}
              onChange={(v) => set({ priceMin: v, activePriceChip: null })}
              placeholder="Min"
            />
            <span className="text-gray-400">–</span>
            <PriceInput
              value={filters.priceMax}
              onChange={(v) => set({ priceMax: v, activePriceChip: null })}
              placeholder="Max"
            />
            <button
              type="button"
              onClick={() => set({ priceMin: filters.priceMin, priceMax: filters.priceMax })}
              className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
            >
              Go
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {priceChips.map((chip) => {
              const active = filters.activePriceChip === chip.label;
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() =>
                    set({
                      activePriceChip: active ? null : chip.label,
                      priceMin: active ? "" : String(chip.min),
                      priceMax:
                        active || chip.max === Number.POSITIVE_INFINITY
                          ? ""
                          : String(chip.max),
                    })
                  }
                  className={`rounded-full px-2 py-1 text-[11px] ring-1 transition ${
                    active
                      ? "bg-shopee-light text-shopee ring-shopee/40"
                      : "bg-white text-gray-600 ring-gray-200 hover:ring-shopee/40"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </Section>

        <Section title="Ratings">
          <div className="flex flex-wrap gap-1">
            {ratingFilters.map((r) => {
              const active = filters.ratingMin === r.min;
              return (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => set({ ratingMin: active ? 0 : r.min })}
                  className={`flex items-center gap-1 rounded px-2 py-1 text-[11px] ring-1 transition ${
                    active
                      ? "bg-shopee-light text-shopee ring-shopee/40"
                      : "bg-white text-gray-600 ring-gray-200 hover:ring-shopee/40"
                  }`}
                >
                  <StarIcon className="text-shopee" />
                  {r.label}
                </button>
              );
            })}
          </div>
        </Section>

        <Section title="Services">
          <CheckRow
            label="Shopee Mall"
            checked={filters.mallOnly}
            onChange={(v) => set({ mallOnly: v })}
          />
          <CheckRow
            label="Preferred Seller"
            checked={filters.preferredOnly}
            onChange={(v) => set({ preferredOnly: v })}
          />
          <CheckRow
            label="With Vouchers"
            checked={filters.voucherOnly}
            onChange={(v) => set({ voucherOnly: v })}
          />
        </Section>
      </div>
    </aside>
  );
}

/* --------------------------- collapsible section --------------------------- */
function Section({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 px-3 py-2.5 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-700"
      >
        {title}
        <ChevronIcon className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}

/* ------------------------------- primitives -------------------------------- */
function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 py-1 text-sm text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded-sm border-gray-300 text-shopee accent-shopee"
      />
      {label}
    </label>
  );
}

function PriceInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <input
      type="number"
      min="0"
      inputMode="decimal"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full min-w-0 rounded border border-gray-300 px-2 py-1 text-xs text-gray-800 outline-none focus:border-shopee focus:ring-1 focus:ring-shopee"
    />
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
