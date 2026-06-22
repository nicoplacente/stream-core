"use client";

import { useRef } from "react";
import { AppWindow, Globe2, LayoutDashboard, RadioTower } from "lucide-react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const products = [
  { icon: Globe2, label: "EXTENSIÓN", title: "Chat mejorado", copy: "Personalización y progreso visibles para la audiencia." },
  { icon: AppWindow, label: "DESKTOP", title: "Control sin distracciones", copy: "Administra alertas y acciones desde una interfaz dedicada." },
  { icon: LayoutDashboard, label: "DASHBOARD", title: "Todo en un solo lugar", copy: "Configura recompensas, apuestas y overlays desde la web." },
];

export function EcosystemSection() {
  const containerRef = useRef(null);
  const coreRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const refs = [firstRef, secondRef, thirdRef];

  return (
    <section className="section ecosystem-section" id="ecosistema" aria-labelledby="ecosystem-title">
      <div className="container">
        <div className="section-heading split-heading">
          <div><span className="eyebrow">ECOSISTEMA</span><h2 id="ecosystem-title">Cada herramienta.<br /><em>Un mismo núcleo.</em></h2></div>
          <p>Una experiencia coherente para configurar, controlar y hacer visible la interacción sin sumar complejidad a tu setup.</p>
        </div>
        <div className="ecosystem-map" ref={containerRef}>
          <div className="core-node" ref={coreRef}>
            <span className="core-rings" aria-hidden="true" />
            <RadioTower size={30} aria-hidden="true" />
            <strong>STREAM<br />CORE</strong>
            <small>SEÑAL CENTRAL</small>
          </div>
          <div className="product-nodes">
            {products.map(({ icon: Icon, ...product }, index) => (
              <article className="product-node" ref={refs[index]} key={product.label}>
                <span className="product-icon"><Icon size={22} aria-hidden="true" /></span>
                <div><span className="eyebrow">{product.label}</span><h3>{product.title}</h3><p>{product.copy}</p></div>
              </article>
            ))}
          </div>
          {refs.map((reference, index) => (
            <AnimatedBeam
              key={index}
              className="ecosystem-beam"
              containerRef={containerRef}
              fromRef={coreRef}
              toRef={reference}
              curvature={(index - 1) * 36}
              delay={index * 0.8}
              duration={4.5 + index}
              gradientStartColor="#c27aff"
              gradientStopColor={index === 1 ? "#36f6a5" : "#40d9ff"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
