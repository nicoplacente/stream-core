"use client";

import { useEffect, useRef } from "react";
import { Bot, MessageSquareText, MonitorUp, Zap } from "lucide-react";

const steps = [
  { icon: MessageSquareText, label: "CHAT", title: "La comunidad participa", copy: "Un comando, una apuesta o una recompensa inicia el evento." },
  { icon: Bot, label: "CORE", title: "StreamCore interpreta", copy: "Las reglas del canal procesan la acción con respuesta inmediata." },
  { icon: MonitorUp, label: "OBS", title: "El directo responde", copy: "El resultado aparece en pantalla y vuelve a activar el chat." },
];

export function SignalFlow() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let context;
    let active = true;

    const setup = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!active || !sectionRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        const cards = gsap.utils.toArray("[data-flow-card]");
        gsap.set(cards, { opacity: 0.34, y: 28 });
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        });

        timeline
          .to(lineRef.current, { scaleX: 1, ease: "none", duration: 3 }, 0)
          .to(cards, { opacity: 1, y: 0, stagger: 0.7, duration: 0.8, ease: "power2.out" }, 0.15)
          .to("[data-flow-pulse]", { xPercent: 620, ease: "none", duration: 3 }, 0);
      }, sectionRef);
    };

    setup();
    return () => {
      active = false;
      context?.revert();
    };
  }, []);

  return (
    <section className="section signal-section" ref={sectionRef} aria-labelledby="signal-title">
      <div className="container">
        <div className="section-heading centered-heading signal-heading">
          <span className="eyebrow">UNA SOLA SEÑAL</span>
          <h2 id="signal-title">Del chat a la pantalla.<br /><em>Sin romper el ritmo.</em></h2>
        </div>
        <div className="flow-track">
          <div className="flow-line-base" aria-hidden="true" />
          <div className="flow-line-active" ref={lineRef} aria-hidden="true" />
          <span className="flow-pulse" data-flow-pulse aria-hidden="true"><Zap size={14} fill="currentColor" /></span>
          {steps.map(({ icon: Icon, ...step }, index) => (
            <article className="flow-card" data-flow-card key={step.label}>
              <span className="flow-node"><Icon size={22} aria-hidden="true" /></span>
              <span className="eyebrow">0{index + 1} / {step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
