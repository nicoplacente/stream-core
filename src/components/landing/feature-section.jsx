import { Gift, Layers3, MessageSquareText, Trophy } from "lucide-react";

const features = [
  {
    icon: Gift,
    number: "01",
    title: "Recompensas que se sienten",
    description: "Convierte los puntos de la comunidad en efectos, sonidos y acciones visibles dentro del directo.",
    accent: "purple",
  },
  {
    icon: Trophy,
    number: "02",
    title: "Apuestas en tiempo real",
    description: "Activa predicciones desde el chat y mantén la atención en cada ronda, partida o desafío.",
    accent: "green",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Overlays listos para OBS",
    description: "Lleva cada evento a pantalla con escenas dinámicas, configurables y sincronizadas.",
    accent: "cyan",
  },
  {
    icon: MessageSquareText,
    number: "04",
    title: "Un chat con identidad",
    description: "Da a tu comunidad estilos, progreso y motivos reales para participar durante más tiempo.",
    accent: "purple",
  },
];

export function FeatureSection() {
  return (
    <section className="section" id="capacidades" aria-labelledby="features-title">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">CAPACIDADES</span>
            <h2 id="features-title">Más interacción.<br /><em>Menos fricción.</em></h2>
          </div>
          <p>StreamCore conecta las piezas que hoy administras por separado para que puedas concentrarte en crear un mejor directo.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, ...feature }) => (
            <article className={`feature-card feature-${feature.accent}`} key={feature.title}>
              <div className="feature-card-top">
                <span className="feature-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                <span className="feature-number">{feature.number}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-signal" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
