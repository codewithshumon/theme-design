import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandHero from "./components/BrandHero";
import FeaturedBrands from "./components/FeaturedBrands";
import BrandsDirectory from "./components/BrandsDirectory";

export const metadata = {
  title: "All Brands — Starts Seed Mall",
  description:
    "Browse official Mall brand stores — authentic products from Apple, Samsung, Sony, Nike and more, with free shipping and buyer protection.",
};

export default function BrandsPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-shopee-gray">
      <Header />

      <main className="mx-auto w-full max-w-[1920px] flex-1 space-y-3 px-[5%] py-3">
        <BrandHero />
        <FeaturedBrands />
        <BrandsDirectory />
      </main>

      <Footer />
    </div>
  );
}
