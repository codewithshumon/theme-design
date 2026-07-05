const footerColumns = [
  {
    title: "Customer Service",
    links: ["Help Centre", "How to Buy", "Returns & Refunds", "Shipping Info", "Track Order", "Contact Us"],
  },
  {
    title: "About Starts Seed",
    links: ["About Us", "Careers", "Start Selling", "Mall Program", "Affiliates", "Press"],
  },
  {
    title: "Payment",
    links: ["Visa", "Mastercard", "PayPal", "Apple Pay", "Cash on Delivery", "Installments"],
  },
  {
    title: "Follow Us",
    links: ["Facebook", "Instagram", "YouTube", "TikTok", "Twitter / X", "LinkedIn"],
  },
];

const paymentBadges = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE", "G PAY"];

/** Site footer — link columns, payment badges, app badges, copyright. */
export default function Footer() {
  return (
    <footer className="mt-2 w-full bg-amazon-dark text-gray-300">
      {/* back to top */}
      <a
        href="#top"
        className="block w-full bg-amazon-hover py-3 text-center text-sm text-white hover:bg-amazon-nav"
      >
        ↑ Back to top
      </a>

      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl">🌱</span>
            <span className="text-lg font-bold text-white">
              starts<span className="text-shopee">·</span>seed
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Mall &amp; marketplace for authentic products from authorized
            distributors. Shop with confidence.
          </p>
          <div className="mt-4 flex gap-3 text-gray-400">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:text-white">f</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:text-white">ig</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:text-white">yt</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:text-white">x</span>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-sm font-semibold text-white">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-400 hover:text-shopee">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* payment row */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <div className="flex flex-wrap items-center gap-2">
            {paymentBadges.map((p) => (
              <span
                key={p}
                className="rounded bg-white/10 px-2 py-1 text-[11px] font-semibold text-gray-200"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Starts Seed Mall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
