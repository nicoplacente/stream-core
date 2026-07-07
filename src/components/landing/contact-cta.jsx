import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { DossierDownloadModal } from "@/components/landing/dossier-download-modal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { CONTACT } from "@/lib/constants";

export function ContactCta() {
  return (
    <section className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <span className="contact-grid" aria-hidden="true" />
          <div className="contact-copy">
            <span className="eyebrow">SIGUIENTE TRANSMISIÓN</span>
            <h2 id="contact-title">Hagamos que tu próximo stream <em>se sienta distinto.</em></h2>
            <p>Cuéntanos cómo funciona tu canal y te mostraremos dónde StreamCore puede generar más participación.</p>
          </div>
          <div className="contact-actions">
            <ShimmerButton as="a" href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="primary-cta">
              <MessageCircle size={19} aria-hidden="true" /> Conversar por WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
            </ShimmerButton>
            <DossierDownloadModal />
            <a className="secondary-cta" href={CONTACT.mailto}><Mail size={18} aria-hidden="true" /> {CONTACT.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
