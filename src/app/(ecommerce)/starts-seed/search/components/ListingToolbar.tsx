import { sortTabs, type FilterState } from "../data";

interface ListingToolbarProps {
  filters: FilterState;
  set: (patch: Partial<FilterState>) => void;
  /** number of products after the active filters */
  count: number;
  /** active search query (shown on the left) */
  query: string;
  /** current page / total pages for the mini paginator */
  page: number;
  pageCount: number;
  onPage: (p: number) => void;
}

/**
 * Shopee listing toolbar: the search-result label on the left, sort tabs
 * (Relevance / Latest / Top Sales) with paired price arrows, and a mini
 * paginator (page/total with arrows) + grid/list toggle on the right.
 */
export default function ListingToolbar({
  filters,
  set,
  count,
  query,
  page,
  pageCount,
  onPage,
}: ListingToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md bg-white px-3 py-2 ring-1 ring-black/5">
      {/* search-result label */}
      <div className="flex items-baseline gap-2">
        <span className="text-sm text-gray-500">
          Search result for{" "}
          <span className="font-semibold text-gray-900">“{query}”</span>
        </span>
        <span className="text-xs text-gray-400">({count} products)</span>
      </div>

      {/* sort */}
      <div className="flex items-center gap-2">
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

      {/* right: mini pagination + view toggle */}
      <div className="ml-auto flex items-center gap-3">
        <MiniPager page={page} pageCount={pageCount} onPage={onPage} />
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
    </div>
  );
}

/* ------------------------------- mini pager -------------------------------- */
function MiniPager({
  page,
  pageCount,
  onPage,
}: {
  page: number;
  pageCount: number;
  onPage: (p: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 tabular-nums">
        {page}/{pageCount}
      </span>
      <div className="flex items-center gap-1">
        <PagerArrow
          disabled={page <= 1}
          onClick={() => onPage(page - 1)}
          label="Previous page"
          dir="left"
        />
        <PagerArrow
          disabled={page >= pageCount}
          onClick={() => onPage(page + 1)}
          label="Next page"
          dir="right"
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

function PagerArrow({
  disabled,
  onClick,
  label,
  dir,
}: {
  disabled: boolean;
  onClick: () => void;
  label: string;
  dir: "left" | "right";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-7 w-7 items-center justify-center rounded-sm text-gray-600 ring-1 ring-gray-200 transition hover:bg-gray-50 hover:text-shopee disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
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
