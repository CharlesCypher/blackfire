import Navbar from "@/components/home/navbar";
import TopBanner from "@/components/home/top-banner";
import Hero from "@/components/home/hero";
import Reviews from "@/components/home/reviews";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <Hero />
      <Reviews />
    </div>
  );
}
