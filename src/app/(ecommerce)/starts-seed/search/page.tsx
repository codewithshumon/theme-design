import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchListing from "./components/SearchListing";
import { searchQuery, store } from "./data";

export const metadata = {
  title: `Search results for “${searchQuery}” | Starts Seed Mall`,
  description: `Shop the best ${searchQuery} deals from official stores like ${store.name} — filter by shop type, shipping, price and rating.`,
};

/**
 * Search / category results page (Shopee-style): the same home-page header, a
 * search-results context, then a "SHOP BY FILTER" sidebar + sort toolbar + a
 * "Top Picks" featured shop card + product grid + pagination, and the footer.
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
          <a href="#" className="hover:text-shopee">Search</a>
          <ChevronRight />
          <span className="font-medium text-gray-800">{searchQuery}</span>
        </nav>

        {/* listing: filters + sort + top picks + grid + pagination */}
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
