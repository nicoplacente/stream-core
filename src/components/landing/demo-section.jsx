"use client";

import { useRef, useState } from "react";
import { Expand, Play, Radio, Volume2 } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const demos = [
  {
    label: "DEMO 01 / CONTROL",
    title: "La experiencia del streamer",
    description:
      "Panel, alertas y control de eventos sin perder de vista el directo.",
    accent: "purple",
    src: "/videos/francobertello.mp4",
  },
  {
    label: "DEMO 02 / AUDIENCIA",
    title: "La experiencia de tu comunidad",
    description:
      "Recompensas y apuestas que pasan del chat a la pantalla en segundos.",
    accent: "green",
    src: "/videos/francobertello-2.mp4",
  },
];

function DemoPlayer({ demo, index }) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  async function handleOverlayPlay() {
    if (!videoRef.current) {
      return;
    }

    try {
      await videoRef.current.play();
      setHasStarted(true);
    } catch {
      // Keep native controls available if autoplay is blocked by the browser.
    }
  }

  return (
    <article className={`demo-card demo-${demo.accent}`}>
      <div className="demo-meta">
        <span className="eyebrow">{demo.label}</span>
        <span className="demo-status">
          <i /> VIDEO LISTO
        </span>
      </div>
      <div className="video-shell">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="none"
          aria-label={demo.title}
          onPlay={() => setHasStarted(true)}
        >
          <source src={demo.src} type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
        <button
          type="button"
          className={`video-placeholder${hasStarted ? " is-hidden" : ""}`}
          aria-label={`Reproducir video: ${demo.title}`}
          onClick={handleOverlayPlay}
        >
          <div className="video-noise" />
          <span className="play-orbit">
            <Play size={26} fill="currentColor" />
          </span>
          <strong>REPRODUCIR VIDEO</strong>
          <small>Haz clic para ver el recorrido completo</small>
        </button>
        <div
          className={`custom-controls${hasStarted ? " is-hidden" : ""}`}
          aria-hidden="true"
        >
          <Play size={14} fill="currentColor" />
          <span className="timeline">
            <i />
          </span>
          <span className="timecode">Listo para reproducir</span>
          <Volume2 size={15} />
          <Expand size={15} />
        </div>
        <BorderBeam
          duration={index === 0 ? 9 : 11}
          delay={index * 2}
          reverse={index === 1}
          colorFrom={index === 0 ? "#c27aff" : "#36f6a5"}
          colorTo="#40d9ff"
        />
      </div>
      <div className="demo-copy">
        <span className="demo-index">
          <Radio size={15} /> 0{index + 1}
        </span>
        <div>
          <h3>{demo.title}</h3>
          <p>{demo.description}</p>
        </div>
      </div>
    </article>
  );
}

export function DemoSection() {
  return (
    <section
      className="section demo-section"
      id="demos"
      aria-labelledby="demos-title"
    >
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="eyebrow">STREAMCORE EN ACCIÓN</span>
          <h2 id="demos-title">
            No lo imagines.
            <br />
            <em>Míralo funcionar.</em>
          </h2>
          <p>
            Dos recorridos preparados para mostrar cómo se vive StreamCore desde
            ambos lados del directo.
          </p>
        </div>
        <div className="demo-grid">
          {demos.map((demo, index) => (
            <DemoPlayer demo={demo} index={index} key={demo.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
