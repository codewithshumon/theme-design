/* ------------------------------------------------------------------ */
/* QuickLinks — Shopee-style service strip under the hero slider       */
/* 5 flat tiles: icon on top, colored label below.                     */
/* ------------------------------------------------------------------ */

type QuickLink = {
  label: string;
  emoji: string;
  /** accent color applied to icon + label */
  color: string;
  /** tinted background on hover */
  hover: string;
};

const quickLinks: QuickLink[] = [
  {
    label: "Fulfilled by Shopee",
    emoji: "📦",
    color: "text-shopee",
    hover: "hover:bg-shopee-light",
  },
  {
    label: "Shopee Supermarket",
    emoji: "🛒",
    color: "text-sky-600",
    hover: "hover:bg-sky-50",
  },
  {
    label: "Shopee Tech",
    emoji: "💻",
    color: "text-gray-500",
    hover: "hover:bg-gray-100",
  },
  {
    label: "Shopee Mall",
    emoji: "🏬",
    color: "text-shopee",
    hover: "hover:bg-shopee-light",
  },
  {
    label: "Payment Promotions",
    emoji: "💳",
    color: "text-sky-600",
    hover: "hover:bg-sky-50",
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full rounded-xl bg-white p-2 shadow-sm sm:p-3">
      <div className="grid grid-cols-3 gap-1 sm:grid-cols-5 sm:gap-2">
        {quickLinks.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`group flex flex-col items-center justify-center gap-2 rounded-lg px-2 py-4 text-center transition-colors ${item.hover}`}
          >
            <span
              className={`text-3xl transition-transform duration-200 group-hover:scale-110 sm:text-4xl ${item.color}`}
            >
              {item.emoji}
            </span>
            <span
              className={`text-xs font-medium leading-tight sm:text-sm ${item.color}`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
