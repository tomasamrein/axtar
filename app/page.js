import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { AiPartner } from "@/components/sections/AiPartner";
import { Automations } from "@/components/sections/Automations";
import { Websites } from "@/components/sections/Websites";
import { Products } from "@/components/sections/Products";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Process } from "@/components/sections/Process";
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
        <TechStack />
        <Services />
        <AiPartner />
        <Automations />
        <Websites />
        <Products />
        <CaseStudy />
        <About />
        <Process />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
