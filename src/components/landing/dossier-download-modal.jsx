"use client";

import { Download, FileText, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const dossiers = [
  {
    href: "/dossiers/dossier-streamcore-streamers-espa%C3%B1ol.pdf",
    label: "Español",
    description: "Dossier completo para streamers en español.",
  },
  {
    href: "/dossiers/dossier-streamcore-streamers-english.pdf",
    label: "Inglés",
    description: "Dossier completo para streamers en inglés.",
  },
];

export function DossierDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    function closeWithEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", closeWithEscape);

    return () => document.removeEventListener("keydown", closeWithEscape);
  }, [isOpen]);

  return (
    <>
      <button
        className="secondary-cta dossier-trigger"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        <FileText size={18} aria-hidden="true" />
        Descargar dossier
      </button>

      {isOpen ? (
        <div
          className="dossier-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-modal-title"
        >
          <button
            className="dossier-modal-backdrop"
            type="button"
            aria-label="Cerrar selector de dossier"
            onClick={() => setIsOpen(false)}
          />
          <div className="dossier-modal-panel">
            <div className="dossier-modal-header">
              <div>
                <span className="eyebrow">DOSSIER STREAMCORE</span>
                <h3 id="dossier-modal-title">Elige el idioma de descarga</h3>
              </div>
              <button
                ref={closeButtonRef}
                className="dossier-modal-close"
                type="button"
                aria-label="Cerrar selector de dossier"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="dossier-options">
              {dossiers.map((dossier) => (
                <a
                  key={dossier.href}
                  className="dossier-option"
                  href={dossier.href}
                  download
                  onClick={() => setIsOpen(false)}
                >
                  <span className="dossier-option-icon">
                    <Download size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{dossier.label}</strong>
                    <small>{dossier.description}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
