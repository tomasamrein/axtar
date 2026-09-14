import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <About />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
