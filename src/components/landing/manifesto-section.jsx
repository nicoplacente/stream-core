import Image from "next/image";

export function ManifestoSection() {
  return (
    <section className="manifesto-section" aria-labelledby="manifesto-title">
      <div className="container manifesto-panel">
        <span className="manifesto-grid" aria-hidden="true" />
        <div className="manifesto-index" aria-hidden="true">
          <span>
            <Image src="/streamcore.webp" alt="" width={32} height={32} />
          </span>
          <i />
          <small>01</small>
        </div>
        <div className="manifesto-copy">
          <span className="eyebrow">NUESTRA VISIÓN</span>
          <h2 id="manifesto-title">
            Esto no es una simple página web; es una{" "}
            <em>máquina diseñada para revolucionar tu stream.</em>
          </h2>
          <p>
            Creada para streamers de Kick que quieren marcar la diferencia,
            lleva la interacción con tu audiencia a un nivel nunca antes visto
            y convierte cada directo en una experiencia inmersiva e
            inolvidable para tus viewers.
          </p>
        </div>
        <span className="manifesto-signal" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i />
        </span>
      </div>
    </section>
  );
}
