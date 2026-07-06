import { allBrands, formatFollowers } from "../data";

/**
 * Brand directory banner — branded gradient with the page title, a subtitle,
 * a live brand count, and three trust badges (Mall / Authentic / Returns).
 */
export default function BrandHero() {
  const totalFollowers = allBrands.reduce((sum, b) => sum + b.followers, 0);

  return (
    <section className="overflow-hidden rounded-md bg-linear-to-br from-shopee to-shopee-dark text-white ring-1 ring-black/5">
      <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
        <div>
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-widest">
            Official Mall Brands
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            All Brands
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/85">
            Shop authentic products from {allBrands.length}+ authorized brand
            stores — trusted by {formatFollowers(totalFollowers)}+ followers.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-xs sm:text-sm">
            <TrustBadge icon={<ShieldIcon />} label="100% Authentic" />
            <TrustBadge icon={<ReturnIcon />} label="15-Day Free Returns" />
            <TrustBadge icon={<MallIcon />} label="Shopee Mall" />
          </div>
        </div>

        <span className="hidden text-7xl font-black opacity-20 sm:block">🛍️</span>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-white/90">{icon}</span>
      {label}
    </span>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function ReturnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v4h4" />
    </svg>
  );
}
function MallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-5h16l1 5" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
