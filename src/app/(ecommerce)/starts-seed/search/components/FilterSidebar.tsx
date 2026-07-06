"use client";

import { useState } from "react";
import {
  storeCategories,
  shopTypeOptions,
  serviceOptions,
  shippedFromOptions,
  shippingOptions,
  priceChips,
  ratingFilters,
  type FilterState,
  type FilterOption,
  type CheckboxSection,
} from "../data";

interface FilterSidebarProps {
  filters: FilterState;
  /** patch scalar fields (category / rating / price / sort / view) */
  set: (patch: Partial<FilterState>) => void;
  /** toggle one checkbox key within a multi-select section */
  toggle: (section: CheckboxSection, key: string) => void;
  clearAll: () => void;
}

/**
 * Shopee "SHOP BY FILTER" rail. Collapsible sections:
 *  CATEGORIES (single-select) · SHOP TYPE · SERVICE & PROMOTION · SHIPPED FROM ·
 *  SHIPPING OPTION (all checkbox multi-selects) · PRICE RANGE · RATINGS.
 */
export default function FilterSidebar({ filters, set, toggle, clearAll }: FilterSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-60">
      <div className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
        {/* header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
          <h2 className="text-xs font-bold uppercase tracking-wide text-gray-900">
            Shop by Filter
          </h2>
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] font-medium text-shopee hover:text-shopee-dark"
          >
            CLEAR ALL
          </button>
        </div>

        {/* categories */}
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

        {/* shop type */}
        <CheckSection
          title="Shop Type"
          section="shopType"
          options={shopTypeOptions}
          selected={filters.shopType}
          onToggle={toggle}
        />

        {/* service & promotion */}
        <CheckSection
          title="Service & Promotion"
          section="services"
          options={serviceOptions}
          selected={filters.services}
          onToggle={toggle}
        />

        {/* shipped from */}
        <CheckSection
          title="Shipped From"
          section="shippedFrom"
          options={shippedFromOptions}
          selected={filters.shippedFrom}
          onToggle={toggle}
        />

        {/* shipping option */}
        <CheckSection
          title="Shipping Option"
          section="shipping"
          options={shippingOptions}
          selected={filters.shipping}
          onToggle={toggle}
        />

        {/* price */}
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

        {/* ratings */}
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
      </div>
    </aside>
  );
}

/* --------------------------- checkbox section ------------------------------ */
function CheckSection({
  title,
  section,
  options,
  selected,
  onToggle,
}: {
  title: string;
  section: CheckboxSection;
  options: FilterOption[];
  selected: string[];
  onToggle: (section: CheckboxSection, key: string) => void;
}) {
  return (
    <Section title={title} defaultOpen>
      <ul className="space-y-0.5">
        {options.map((opt) => {
          const checked = selected.includes(opt.key);
          return (
            <li key={opt.key}>
              <label className="flex cursor-pointer items-center gap-2 py-1 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(section, opt.key)}
                  className="h-4 w-4 rounded-sm border-gray-300 text-shopee accent-shopee"
                />
                {opt.label}
              </label>
            </li>
          );
        })}
      </ul>
    </Section>
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
