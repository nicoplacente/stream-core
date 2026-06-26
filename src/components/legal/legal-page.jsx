import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export function LegalPage({ title, description, lastUpdated, sections }) {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <Header />
      <main id="contenido" className="legal-main">
        <section className="legal-hero" aria-labelledby="legal-title">
          <div className="container legal-hero-inner">
            <p className="status-pill">
              <span aria-hidden="true" />
              DOCUMENTO LEGAL
            </p>
            <h1 id="legal-title">{title}</h1>
            <p className="legal-lead">{description}</p>
            <p className="legal-updated">Última actualización: {lastUpdated}</p>
          </div>
        </section>

        <article className="container legal-layout">
          <nav className="legal-index" aria-labelledby="legal-index-title">
            <h2 id="legal-index-title">Contenido</h2>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-content">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.id}-${index}`}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
