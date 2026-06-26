"use client";

import { useRef } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function MobileMenu({ links }) {
  const detailsRef = useRef(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details className="mobile-menu" ref={detailsRef}>
      <summary aria-label="Abrir menú">
        <Menu size={22} aria-hidden="true" />
      </summary>
      <nav aria-label="Navegación móvil">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu}>
          <MessageCircle size={16} aria-hidden="true" /> Hablemos
        </a>
      </nav>
    </details>
  );
}
