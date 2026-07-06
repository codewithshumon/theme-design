import { sortTabs, type FilterState } from "../data";

interface ListingToolbarProps {
  filters: FilterState;
  set: (patch: Partial<FilterState>) => void;
  /** number of products after the active filters */
  count: number;
}

/**
 * Shopee-style listing toolbar: sort tabs (Relevance / Latest / Top Sales) with
 * paired price asc/desc arrows, a grid/list view toggle, and the live result
 * count. Sits directly above the product grid.
 */
export default function ListingToolbar({ filters, set, count }: ListingToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md bg-white px-3 py-2 ring-1 ring-black/5">
      {/* sort label */}
      <span className="text-sm text-gray-500">Sort by</span>

      {/* relevance / latest / top-sales */}
      <div className="flex items-center overflow-hidden rounded-sm ring-1 ring-gray-200">
        {sortTabs.map((tab) => {
          const active = filters.sort === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => set({ sort: tab.key })}
              className={`px-3 py-1.5 text-sm capitalize transition ${
                active
                  ? "bg-shopee text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* price asc / desc */}
      <div className="flex items-center gap-1">
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
      </div>

      {/* result count (right-aligned on wide screens) */}
      <span className="ml-auto text-sm text-gray-500">
        <span className="font-semibold text-gray-800">{count.toLocaleString()}</span>{" "}
        Products
      </span>

      {/* grid / list view toggle */}
      <div className="flex items-center gap-1">
        <ViewButton
          active={filters.view === "grid"}
          onClick={() => set({ view: "grid" })}
          label="Grid view"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
              <rect x="13" y="13" width="8" height="8" rx="1" />
            </svg>
          }
        />
        <ViewButton
          active={filters.view === "list"}
          onClick={() => set({ view: "list" })}
          label="List view"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          }
        />
      </div>
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
        active
          ? "bg-shopee-light text-shopee ring-shopee/40"
          : "text-gray-500 ring-gray-200 hover:bg-gray-50"
      }`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === "up" ? <path d="M6 14l6-6 6 6" /> : <path d="M6 10l6 6 6-6" />}
      </svg>
    </button>
  );
}

function ViewButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-8 w-8 items-center justify-center rounded-sm ring-1 transition ${
        active
          ? "bg-shopee text-white ring-shopee"
          : "text-gray-500 ring-gray-200 hover:bg-gray-50"
      }`}
    >
      {icon}
    </button>
  );
}
