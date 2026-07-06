"use client";

import type { CompareProduct } from "../data";
import { MAX_COMPARE } from "../data";

interface ComparePickerProps {
  products: CompareProduct[];
  selectedIds: number[];
  onToggle: (id: number) => void;
  onReset: () => void;
}

/** Toggle chips to add/remove products to the comparison + a reset button. */
export default function ComparePicker({
  products,
  selectedIds,
  onToggle,
  onReset,
}: ComparePickerProps) {
  const count = selectedIds.length;
  const atMax = count >= MAX_COMPARE;

  return (
    <section className="rounded-md bg-white p-4 ring-1 ring-black/5 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-bold text-gray-900 sm:text-xl">Compare Products</h1>
          <p className="text-sm text-gray-500">
            {count}/{MAX_COMPARE} selected — pick up to {MAX_COMPARE} to compare side by side.
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="rounded-md px-3 py-1.5 text-xs font-semibold text-shopee ring-1 ring-shopee/30 transition hover:bg-shopee-light"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {products.map((p) => {
          const selected = selectedIds.includes(p.id);
          const disabled = !selected && atMax;
          return (
            <button
              key={p.id}
              type="button"
              disabled={disabled}
              onClick={() => onToggle(p.id)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${
                selected
                  ? "bg-shopee text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {selected ? <CheckIcon /> : <PlusIcon />}
              {p.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
