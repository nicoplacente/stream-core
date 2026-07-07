import { Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="/#inicio">
            {/* <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span> */}
            <Image
              src="/streamcore.webp"
              width={30}
              height={30}
              loading="eager"
              alt="Logo StreamCore"
            />
            <span>StreamCore</span>
          </a>
          <p>
            El núcleo de interacción para streamers que quieren construir una
            comunidad más activa.
          </p>
        </div>
        <nav aria-label="Enlaces del producto">
          <strong>Producto</strong>
          <a href="/#capacidades">Capacidades</a>
          <a href="/#demos">Demos</a>
          <a href="/#ecosistema">Ecosistema</a>
          <a href="/#como-funciona">Cómo funciona</a>
          <a href="/terminos">Términos y condiciones</a>
          <a href="/politicas">Política de privacidad</a>
        </nav>
        <div className="footer-contact">
          <strong>Contacto</strong>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={15} /> {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.mailto}>
            <Mail size={15} /> {CONTACT.email}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()}{" "}
          <a
            className="footer-credit-link"
            href="https://codeluxe.tech"
            target="_blank"
            rel="noopener"
          >
            Codeluxe
          </a>
          . Todos los derechos reservados.
        </span>
        <span className="mono-label">
          <i /> SISTEMA OPERATIVO
        </span>
      </div>
    </footer>
  );
}
