import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import BrandScroll from "./components/BrandScroll";
import Categories from "./components/Categories";
import FlashDeals from "./components/FlashDeals";
import ShopeeMall from "./components/ShopeeMall";
import ProductSection from "./components/ProductSection";
import CategoryGrid from "./components/CategoryGrid";
import InternationalCustomers from "./components/InternationalCustomers";
import ComplexCategoryGrid from "./components/ComplexCategoryGrid";
import ComputersBestSellers from "./components/ComputersBestSellers";
import DailyDiscover from "./components/DailyDiscover";
import WhyGenuineSony from "./components/WhyGenuineSony";
import WhyShopWithUs from "./components/WhyShopWithUs";
import Testimonials from "./components/Testimonials";
import LatestBlog from "./components/LatestBlog";
import TopBrands from "./components/TopBrands";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { topProducts, bestSellers, mostViewed } from "./data";

export const metadata = {
  title: "Starts Seed Mall — Shop Authentic. Shop with Confidence.",
  description:
    "Marketplace & mall for authentic products from authorized distributors. Flash deals, daily discover and the best brands.",
};

export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-shopee-gray">
      {/* Full-width header */}
      <Header />

      <main className="mx-auto w-full max-w-350 flex-1 space-y-3 px-3 py-3 sm:px-4">
        {/* Hero area: slider + scrolling brands */}
        <HeroSlider />
        <BrandScroll />

        {/* Section 2 — Categories */}
        <Categories />

        {/* Section 3 — Flash Sale (campaign) */}
        <FlashDeals />

        {/* Section 4 — Starts Seed Mall */}
        <ShopeeMall />

        {/* Section 5 — Top Products */}
        <ProductSection
          title="Top Products"
          subtitle="Best of the best"
          icon="🔥"
          products={topProducts}
        />

        {/* Section 6 — Amazon-style 4-image category cards */}
        <CategoryGrid />

        {/* Section 7 — Best Sellers (Shopee cards) */}
        <ProductSection
          title="Best Sellers"
          subtitle="Most-loved by shoppers"
          icon="🏆"
          products={bestSellers}
        />

        {/* Section 8 — Most Viewed / Popular (Shopee cards) */}
        <ProductSection
          title="Most Viewed"
          subtitle="Popular right now"
          icon="👀"
          products={mostViewed}
          linkLabel="See all"
        />

        {/* Section 9 — Amazon "international customers purchased" (image only) */}
        <InternationalCustomers />

        {/* Section 10 — Amazon complex 4+4+1+4 grid */}
        <ComplexCategoryGrid />

        {/* Section 11 — Amazon "Best Sellers in Computers" (image only) */}
        <ComputersBestSellers />

        {/* Section 12 — Shopee "Daily Discover" */}
        <DailyDiscover />

        {/* Section 13 — Why Genuine (Sony style) */}
        <WhyGenuineSony />

        {/* Section 14 — Why Shop With Us (Sony style) */}
        <WhyShopWithUs />

        {/* Section 14 — What Our Customers Say */}
        <Testimonials />

        {/* Section 14 — Latest from Our Blog */}
        <LatestBlog />

        {/* Section 18 — Top Brands */}
        <TopBrands />

        {/* Section 19 — Subscribe */}
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}
