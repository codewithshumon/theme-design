"use client";

import { useState } from "react";
import { compareProducts, MAX_COMPARE, type CompareProduct } from "../data";
import ComparePicker from "./ComparePicker";
import CompareTable from "./CompareTable";

const DEFAULT_IDS = compareProducts.slice(0, 3).map((p) => p.id);

export default function ProductCompare() {
  const [selectedIds, setSelectedIds] = useState<number[]>(DEFAULT_IDS);

  const toggle = (id: number) =>
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });

  const reset = () => setSelectedIds(DEFAULT_IDS);
  const removeProduct = (id: number) =>
    setSelectedIds((prev) => prev.filter((x) => x !== id));

  const selected = selectedIds
    .map((id) => compareProducts.find((p) => p.id === id))
    .filter((p): p is CompareProduct => Boolean(p));

  return (
    <div className="space-y-3">
      <ComparePicker
        products={compareProducts}
        selectedIds={selectedIds}
        onToggle={toggle}
        onReset={reset}
      />

      {selected.length > 0 ? (
        <CompareTable products={selected} onRemove={removeProduct} />
      ) : (
        <section className="rounded-md bg-white p-12 text-center ring-1 ring-black/5">
          <p className="text-4xl">🆚</p>
          <h2 className="mt-3 text-lg font-semibold text-gray-800">Nothing to compare yet</h2>
          <p className="mt-1 text-sm text-gray-500">
            Select up to {MAX_COMPARE} products above to see them side by side.
          </p>
        </section>
      )}
    </div>
  );
}
