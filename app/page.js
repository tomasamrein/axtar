import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ScrollBlackout } from "@/components/ui/ScrollBlackout";
import { KineticBand } from "@/components/ui/KineticBand";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Samples } from "@/components/sections/Samples";
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
        <ScrollBlackout />
        <Services />
        <KineticBand
          texts={[
            "Desarrollo a medida — Sitios web — E-commerce —",
            "Automatizaciones — Auditoría técnica — Soporte continuo —",
          ]}
          label="Desarrollo a medida, sitios web, e-commerce, automatizaciones, auditoría técnica y soporte continuo."
        />
        <Process />
        <Work />
        <Samples />
        <Testimonials />
        <About />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
