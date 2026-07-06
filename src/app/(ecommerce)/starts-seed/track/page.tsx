import Header from "../components/Header";
import Footer from "../components/Footer";
import TrackOrder from "./components/TrackOrder";

export const metadata = {
  title: "Track Your Order — Starts Seed Mall",
  description:
    "Track your order in real time — delivery status, estimated arrival, shipment timeline, items and shipping details.",
};

export default function TrackPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-shopee-gray">
      <Header />

      <main className="mx-auto w-full max-w-[1920px] flex-1 px-[5%] py-3">
        <TrackOrder />
      </main>

      <Footer />
    </div>
  );
}
