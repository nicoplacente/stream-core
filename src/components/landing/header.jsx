import { MessageCircle } from "lucide-react";
import { MobileMenu } from "@/components/landing/mobile-menu";
import { CONTACT } from "@/lib/constants";
import Image from "next/image";

const links = [
  { href: "/#capacidades", label: "Capacidades" },
  { href: "/#demos", label: "Demos" },
  { href: "/#ecosistema", label: "Ecosistema" },
  { href: "/#como-funciona", label: "Cómo funciona" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/#inicio" aria-label="StreamCore, inicio">
          {/* <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span> */}
          <Image
            src="/streamcore.webp"
            width={30}
            height={30}
            alt="Logo StreamCore"
            loading="eager"
          />
          <span>StreamCore</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar sobre StreamCore por WhatsApp"
        >
          <MessageCircle size={17} aria-hidden="true" />
          Hablemos
        </a>

        <MobileMenu links={links} />
      </div>
    </header>
  );
}
