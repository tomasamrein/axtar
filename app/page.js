import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Samples } from "@/components/sections/Samples";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
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
        <Testimonials />
        <Samples />
        <About />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
