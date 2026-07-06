interface PaginationProps {
  page: number;
  pageCount: number;
  onPage: (p: number) => void;
}

/**
 * Shopee-style pagination: previous / next arrows around a windowed list of
 * page numbers with ellipses. The active page is highlighted in brand orange.
 */
export default function Pagination({ page, pageCount, onPage }: PaginationProps) {
  if (pageCount <= 1) return null;
  const pages = pageWindow(page, pageCount, 1);

  return (
    <nav className="flex items-center justify-center gap-1 px-2 py-3" aria-label="Pagination">
      <NavArrow
        disabled={page <= 1}
        onClick={() => onPage(page - 1)}
        label="Previous page"
        dir="left"
      />

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="px-1 text-sm text-gray-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPage(p)}
            aria-current={p === page ? "page" : undefined}
            className={`h-9 min-w-9 rounded-sm px-2 text-sm transition ${
              p === page
                ? "bg-shopee text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 hover:text-shopee"
            }`}
          >
            {p}
          </button>
        )
      )}

      <NavArrow
        disabled={page >= pageCount}
        onClick={() => onPage(page + 1)}
        label="Next page"
        dir="right"
      />
    </nav>
  );
}

/* ------------------------------- primitives -------------------------------- */
function NavArrow({
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
      className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-gray-700 ring-1 ring-gray-200 transition hover:bg-gray-50 hover:text-shopee disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

/**
 * Build a windowed page list: always include the first page, the last page,
 * a window of `pad` pages around the current page, and "…" ellipses where
 * there is a gap. Returns an array of numbers and "…" strings.
 */
function pageWindow(page: number, total: number, pad: number): (number | "…")[] {
  const start = Math.max(2, page - pad);
  const end = Math.min(total - 1, page + pad);

  const out: (number | "…")[] = [1];
  if (start > 2) out.push("…");
  for (let i = start; i <= end; i++) out.push(i);
  if (end < total - 1) out.push("…");
  if (total > 1) out.push(total);
  return out;
}
