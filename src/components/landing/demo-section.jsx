import { Expand, Play, Radio, Volume2 } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const demos = [
  {
    label: "DEMO 01 / CONTROL",
    title: "La experiencia del streamer",
    description: "Panel, alertas y control de eventos sin perder de vista el directo.",
    accent: "purple",
  },
  {
    label: "DEMO 02 / AUDIENCIA",
    title: "La experiencia de tu comunidad",
    description: "Recompensas y apuestas que pasan del chat a la pantalla en segundos.",
    accent: "green",
  },
];

function DemoPlayer({ demo, index }) {
  return (
    <article className={`demo-card demo-${demo.accent}`}>
      <div className="demo-meta">
        <span className="eyebrow">{demo.label}</span>
        <span className="demo-status"><i /> VIDEO PREPARADO</span>
      </div>
      <div className="video-shell">
        <video
          controls
          preload="none"
          aria-label={`${demo.title}. El video se incorporará próximamente.`}
        >
          Tu navegador no puede reproducir este video.
        </video>
        <div className="video-placeholder" aria-hidden="true">
          <div className="video-noise" />
          <span className="play-orbit"><Play size={26} fill="currentColor" /></span>
          <strong>DEMO PRÓXIMAMENTE</strong>
          <small>Reproductor listo para incorporar el material final</small>
        </div>
        <div className="custom-controls" aria-hidden="true">
          <Play size={14} fill="currentColor" />
          <span className="timeline"><i /></span>
          <span className="timecode">00:00 / 01:24</span>
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
        <span className="demo-index"><Radio size={15} /> 0{index + 1}</span>
        <div><h3>{demo.title}</h3><p>{demo.description}</p></div>
      </div>
    </article>
  );
}

export function DemoSection() {
  return (
    <section className="section demo-section" id="demos" aria-labelledby="demos-title">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="eyebrow">STREAMCORE EN ACCIÓN</span>
          <h2 id="demos-title">No lo imagines.<br /><em>Míralo funcionar.</em></h2>
          <p>Dos recorridos preparados para mostrar cómo se vive StreamCore desde ambos lados del directo.</p>
        </div>
        <div className="demo-grid">
          {demos.map((demo, index) => <DemoPlayer demo={demo} index={index} key={demo.title} />)}
        </div>
      </div>
    </section>
  );
}
