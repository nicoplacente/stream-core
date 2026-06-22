"use client";

import { useRef } from "react";
import { Mail, Menu } from "lucide-react";

export function MobileMenu({ links, mailto }) {
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
        <a href={mailto} onClick={closeMenu}>
          <Mail size={16} aria-hidden="true" /> Contactar por correo
        </a>
      </nav>
    </details>
  );
}
