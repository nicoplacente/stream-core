import { Cable, SlidersHorizontal, Sparkles } from "lucide-react";

const process = [
  { icon: Cable, title: "Conectamos", copy: "Revisamos tu canal, tu dinámica y las herramientas que ya forman parte del setup." },
  { icon: SlidersHorizontal, title: "Configuramos", copy: "Definimos recompensas, reglas y overlays alineados con la identidad de tu comunidad." },
  { icon: Sparkles, title: "Activamos", copy: "Ponemos el sistema en marcha y dejamos el flujo preparado para tus próximos directos." },
];

export function ProcessSection() {
  return (
    <section className="section process-section" id="como-funciona" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="eyebrow">CÓMO FUNCIONA</span>
          <h2 id="process-title">Tu dinámica, potenciada.<br /><em>No reemplazada.</em></h2>
          <p>Partimos de lo que hace único a tu canal y construimos la interacción alrededor de eso.</p>
        </div>
        <ol className="process-grid">
          {process.map(({ icon: Icon, ...item }, index) => (
            <li key={item.title}>
              <span className="process-number">0{index + 1}</span>
              <span className="process-icon"><Icon size={23} aria-hidden="true" /></span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
