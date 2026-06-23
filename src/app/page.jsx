import { DemoSection } from "@/components/landing/demo-section";
import { EcosystemSection } from "@/components/landing/ecosystem-section";
import { FeatureSection } from "@/components/landing/feature-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ManifestoSection } from "@/components/landing/manifesto-section";
import { ProcessSection } from "@/components/landing/process-section";
import { SignalFlow } from "@/components/landing/signal-flow";
import { ContactCta } from "@/components/landing/contact-cta";
import { CONTACT, SITE_URL } from "@/lib/constants";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Codeluxe",
  url: SITE_URL,
  brand: { "@type": "Brand", name: "StreamCore" },
  email: CONTACT.email,
  telephone: CONTACT.phoneDisplay,
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StreamCore",
  url: SITE_URL,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows, Web, Chrome",
  description:
    "Ecosistema de interacción, overlays y control para streamers de Kick.",
  author: { "@type": "Organization", name: "Codeluxe" },
};

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
        <SignalFlow />
        <EcosystemSection />
        <ProcessSection />
        <ContactCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, softwareSchema]).replaceAll("<", "\\u003c"),
        }}
      />
    </>
  );
}
