import Navbar from "@/components/home/navbar";
import TopBanner from "@/components/home/top-banner";
import Hero from "@/components/home/hero";
import Reviews from "@/components/home/reviews";
import Vision from "@/components/home/vision";
import Character1 from "@/components/home/character1";
import Character2 from "@/components/home/character2";
import Character3 from "@/components/home/character3";
import Character4 from "@/components/home/character4";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <Hero />
      <Reviews />
      <Vision />
      <Character1 />
      <Character2 />
      <Character3 />
      <Character4 />
    </div>
  );
}
