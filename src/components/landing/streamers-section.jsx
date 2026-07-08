import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Radio, Sparkles } from "lucide-react";

const streamers = [
  {
    name: "Franco Bertello",
    role: "Streamer de Kick",
    image: "/streamers/francobertello.webp",
    alt: "Franco Bertello usando StreamCore en su directo",
    quote:
      "Una experiencia creada para que el chat participe y el directo responda en tiempo real.",
    kickUrl: "https://kick.com/francobertello74",
    signals: ["Kick", "OBS", "Overlays"],
  },
];

export function StreamersSection() {
  return (
    <section
      className="section streamers-section"
      id="streamers"
      aria-labelledby="streamers-title"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">STREAMERS EN ACCIÓN</span>
            <h2 id="streamers-title">
              Streamers que ya confían.
              <br />
              <em>StreamCore en directo.</em>
            </h2>
          </div>
          <p>
            Casos reales donde StreamCore convierte recompensas, alertas y
            acciones del chat en momentos visibles dentro del stream.
          </p>
        </div>

        <div className="streamers-grid">
          {streamers.map((streamer) => (
            <article className="streamer-card" key={streamer.name}>
              <div className="streamer-image-shell">
                <Image
                  src={streamer.image}
                  width={685}
                  height={813}
                  sizes="(max-width: 760px) 100vw, 44vw"
                  alt={streamer.alt}
                  className="streamer-image"
                />
                <span className="streamer-live-badge">
                  <Radio size={14} aria-hidden="true" /> EN USO
                </span>
              </div>

              <div className="streamer-content">
                <span className="streamer-kicker">
                  <BadgeCheck size={16} aria-hidden="true" />
                  Caso activo
                </span>
                <h3>{streamer.name}</h3>
                <p className="streamer-role">{streamer.role}</p>
                <p className="streamer-quote">{streamer.quote}</p>
                <a
                  className="streamer-channel-link"
                  href={streamer.kickUrl}
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  aria-label={`Abrir canal de Kick de ${streamer.name}`}
                >
                  Ver canal en Kick
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <div
                  className="streamer-signals"
                  aria-label="Integraciones usadas"
                >
                  {streamer.signals.map((signal) => (
                    <span key={signal}>
                      <Sparkles size={13} aria-hidden="true" />
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
