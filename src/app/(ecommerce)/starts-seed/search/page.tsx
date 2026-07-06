import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandBanner from "./components/BrandBanner";
import SearchListing from "./components/SearchListing";
import { store } from "./data";

export const metadata = {
  title: `${store.name} — Official Store | Starts Seed Mall`,
  description: `${store.tagline}. Shop authentic ${store.category} products from the ${store.name} official store — ${store.promo ?? "daily deals"}.`,
};

/**
 * Brand official-store page, laid out like a Shopee category / search listing:
 * the same home-page header, a brand store banner, then a filter sidebar +
 * sort toolbar + product grid + pagination, and the site footer.
 *
 * Same composition pattern as the starts-seed home page: this file is a server
 * component that pulls mock data from ./data and composes section components
 * (all interactivity lives inside the client components).
 */
export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-shopee-gray">
      <Header />

      <main className="mx-auto w-full max-w-[1920px] flex-1 space-y-3 px-[5%] py-3">
        {/* breadcrumb */}
        <nav className="flex flex-wrap items-center gap-1 text-xs text-gray-500">
          <a href="#" className="hover:text-shopee">Home</a>
          <ChevronRight />
          <a href="#" className="hover:text-shopee">Brands</a>
          <ChevronRight />
          <a href="#" className="hover:text-shopee">{store.category}</a>
          <ChevronRight />
          <span className="font-medium text-gray-800">{store.name}</span>
        </nav>

        {/* brand store header */}
        <BrandBanner brand={store} />

        {/* listing: filters + sort + grid + pagination */}
        <SearchListing />
      </main>

      <Footer />
    </div>
  );
}

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
