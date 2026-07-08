import { ContactCta } from "@/components/landing/contact-cta";
import { DemoSection } from "@/components/landing/demo-section";
import { EcosystemSection } from "@/components/landing/ecosystem-section";
import { FeatureSection } from "@/components/landing/feature-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ManifestoSection } from "@/components/landing/manifesto-section";
import { ProcessSection } from "@/components/landing/process-section";
import { SignalFlow } from "@/components/landing/signal-flow";
import { StreamersSection } from "@/components/landing/streamers-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <Header />
      <main id="contenido">
        <HeroSection />
        <ManifestoSection />
        <FeatureSection />
        <DemoSection />
        <StreamersSection />
        <SignalFlow />
        <EcosystemSection />
        <ProcessSection />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
