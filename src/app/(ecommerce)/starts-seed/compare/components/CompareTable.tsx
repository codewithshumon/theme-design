import type { CompareAttribute, CompareProduct } from "../data";
import { compareAttributes } from "../data";
import { img } from "../../data";
import Stars from "../../components/shared/Stars";

interface CompareTableProps {
  products: CompareProduct[];
  onRemove: (id: number) => void;
}

/** Group spec attributes (preserving order) for section headers. */
function buildGroups(): { name: string; attrs: CompareAttribute[] }[] {
  const groups: { name: string; attrs: CompareAttribute[] }[] = [];
  for (const a of compareAttributes) {
    let g = groups.find((x) => x.name === a.group);
    if (!g) {
      g = { name: a.group, attrs: [] };
      groups.push(g);
    }
    g.attrs.push(a);
  }
  return groups;
}

/** Side-by-side comparison table with a sticky attribute-name column. */
export default function CompareTable({ products, onRemove }: CompareTableProps) {
  const groups = buildGroups();
  const minPrice = Math.min(...products.map((p) => p.price));

  return (
    <section className="overflow-x-auto rounded-md bg-white ring-1 ring-black/5">
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 w-40 border-b border-gray-100 bg-white px-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
              Product
            </th>
            {products.map((p) => (
              <th key={p.id} className="relative w-[180px] min-w-[180px] border-b border-gray-100 p-3 align-top">
                {products.length > 1 && (
                  <button
                    type="button"
                    aria-label={`Remove ${p.name}`}
                    onClick={() => onRemove(p.id)}
                    className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-shopee"
                  >
                    <CloseIcon />
                  </button>
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 overflow-hidden rounded-md bg-gray-100">
                    <img src={img(p.imageSeed, 160, 160)} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-gray-400">{p.brand}</span>
                  <span className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold text-gray-800">{p.name}</span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-xs text-shopee">$</span>
                    <span className="text-lg font-bold text-shopee">{p.price}</span>
                    <span className="text-[11px] text-gray-400 line-through">${p.originalPrice}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <Stars rating={p.rating} size={11} />
                    <span className="text-[11px] text-gray-400">{p.ratingCount.toLocaleString()}</span>
                  </div>
                  {p.price === minPrice && (
                    <span className="mt-1 rounded-full bg-shopee-light px-2 py-0.5 text-[10px] font-bold uppercase text-shopee">
                      Best Price
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm">
          {/* availability */}
          <Row label="Availability">
            {products.map((p) => (
              <td key={p.id} className="border-b border-gray-100 px-3 py-3 text-center">
                <span className={`font-medium ${p.inStock ? "text-green-600" : "text-red-500"}`}>
                  {p.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </td>
            ))}
          </Row>

          {/* spec groups */}
          {groups.map((group) => (
            <GroupBlock key={group.name} name={group.name} colCount={products.length + 1}>
              {group.attrs.map((attr) => (
                <Row key={attr.key} label={attr.label}>
                  {products.map((p) => (
                    <td key={p.id} className="border-b border-gray-100 px-3 py-3 text-center text-gray-700">
                      {p.specs[attr.key]}
                    </td>
                  ))}
                </Row>
              ))}
            </GroupBlock>
          ))}

          {/* actions */}
          <Row label="">
            {products.map((p) => (
              <td key={p.id} className="px-3 py-3 text-center">
                <button
                  type="button"
                  className="rounded-md bg-shopee px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-shopee-dark"
                >
                  View Deals
                </button>
              </td>
            ))}
          </Row>
        </tbody>
      </table>
    </section>
  );
}

/* A normal row: sticky label cell + one data cell per product (children). */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr>
      <th scope="row" className="sticky left-0 z-10 w-40 border-b border-gray-100 bg-white px-4 py-3 text-left text-xs font-semibold text-gray-500">
        {label}
      </th>
      {children}
    </tr>
  );
}

/* A full-width group band, then its attribute rows (passed as children). */
function GroupBlock({
  name,
  colCount,
  children,
}: {
  name: string;
  colCount: number;
  children: React.ReactNode;
}) {
  return (
    <>
      <tr>
        <td
          colSpan={colCount}
          className="bg-gray-50 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-gray-500"
        >
          {name}
        </td>
      </tr>
      {children}
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
