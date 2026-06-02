import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Modalidades } from "@/components/Modalidades";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Location />
      <Modalidades />
      <Benefits />
      <Pricing />
      <Footer />
    </main>
  );
}
