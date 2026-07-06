import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCompare from "./components/ProductCompare";

export const metadata = {
  title: "Compare Products — Starts Seed Mall",
  description:
    "Compare products side by side — price, rating, availability and full specifications to help you decide.",
};

export default function ComparePage() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-shopee-gray">
      <Header />

      <main className="mx-auto w-full max-w-[1920px] flex-1 px-[5%] py-3">
        <ProductCompare />
      </main>

      <Footer />
    </div>
  );
}
