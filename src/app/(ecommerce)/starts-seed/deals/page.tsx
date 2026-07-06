import Header from "../components/Header";
import Footer from "../components/Footer";
import DealHero from "./components/DealHero";
import CouponCenter from "./components/CouponCenter";
import FlashSaleSection from "./components/FlashSaleSection";
import DealCategories from "./components/DealCategories";
import EndingSoon from "./components/EndingSoon";
import DealsListing from "./components/DealsListing";
import { campaign, coupons, dealCategories, flashDeals, endingSoon } from "./data";

export const metadata = {
  title: `${campaign.name} — Up to 70% Off | Starts Seed Mall`,
  description: `${campaign.subtitle}. Flash deals, claimable vouchers and ending-soon bargains across every category.`,
};

/**
 * Deals / campaign hub page. Same composition pattern as the starts-seed home
 * page: this file is a server component that pulls mock data from ./data and
 * composes section components (all interactivity — countdowns, claim toggles,
 * filters — lives inside the client components).
 */
export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-shopee-gray">
      <Header />

      <main className="mx-auto w-full max-w-[1920px] flex-1 space-y-3 px-[5%] py-3">
        {/* campaign hero with live countdown */}
        <DealHero campaign={campaign} />

        {/* claimable vouchers */}
        <CouponCenter coupons={coupons} />

        {/* flash sale carousel */}
        <FlashSaleSection products={flashDeals} />

        {/* shop deals by category */}
        <DealCategories categories={dealCategories} />

        {/* ending soon — low stock */}
        <EndingSoon products={endingSoon} />

        {/* all deals: filter + sort + paginate */}
        <DealsListing />
      </main>

      <Footer />
    </div>
  );
}
