import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { CONTACT } from "@/lib/constants";

function StreamConsole() {
  return (
    <div className="hero-console" aria-label="Vista previa del centro de control StreamCore">
      <div className="console-topbar">
        <div className="console-dots" aria-hidden="true"><span /><span /><span /></div>
        <span className="mono-label">STREAMCORE / CONTROL</span>
        <span className="live-badge"><i /> EN VIVO</span>
      </div>
      <div className="console-grid">
        <aside className="console-sidebar" aria-hidden="true">
          <span className="active" /><span /><span /><span /><span />
        </aside>
        <div className="console-main">
          <div className="console-heading">
            <div><span className="eyebrow">SEÑAL ACTIVA</span><strong>Control de interacción</strong></div>
            <span className="signal-bars" aria-hidden="true"><i /><i /><i /><i /><i /></span>
          </div>
          <div className="metric-row">
            <div><span>Eventos</span><strong>128</strong><small>sesión actual</small></div>
            <div><span>Participación</span><strong>84%</strong><small className="positive">+12% hoy</small></div>
            <div><span>Latencia</span><strong>42ms</strong><small>respuesta estable</small></div>
          </div>
          <div className="chart-panel" aria-hidden="true">
            <div className="chart-grid" />
            <div className="chart-bars">
              {[28, 44, 38, 62, 51, 73, 57, 81, 69, 88, 76, 94].map((height, index) => (
                <i key={index} style={{ "--bar-height": `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="event-row">
            <span className="event-icon">SC</span>
            <div><strong>Recompensa activada</strong><small>Overlay enviado a OBS</small></div>
            <span className="event-status"><Check size={13} /> COMPLETADO</span>
          </div>
        </div>
      </div>
      <div className="floating-alert">
        <span className="alert-pulse" />
        <div><small>NUEVO EVENTO</small><strong>+500 Core Points</strong></div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="status-pill"><span /> DISEÑADO PARA KICK</div>
          <h1>Tu comunidad no solo mira. <em>Activa el stream.</em></h1>
          <p>
            Centraliza recompensas, apuestas, overlays y acciones del chat en un sistema creado para que cada directo se sienta vivo.
          </p>
          <div className="hero-actions">
            <ShimmerButton
              as="a"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="primary-cta"
              aria-label="Hablar con Codeluxe por WhatsApp sobre StreamCore"
            >
              <MessageCircle size={19} aria-hidden="true" /> Hablemos de tu stream
              <ArrowUpRight size={17} aria-hidden="true" />
            </ShimmerButton>
            <a className="secondary-cta" href={CONTACT.mailto}>
              <Mail size={18} aria-hidden="true" /> Escribir por correo
            </a>
          </div>
          <div className="hero-proof" aria-label="Características principales">
            <span><Check size={15} /> Integración con OBS</span>
            <span><Check size={15} /> Control en tiempo real</span>
            <span><Check size={15} /> Experiencia personalizable</span>
          </div>
        </div>
        <StreamConsole />
      </div>
      <div className="container capability-strip" aria-label="Ecosistema compatible">
        <span>UN SOLO NÚCLEO PARA</span>
        <strong>KICK CHAT</strong><i />
        <strong>OBS</strong><i />
        <strong>OVERLAYS</strong><i />
        <strong>DESKTOP</strong><i />
        <strong>CHROME</strong>
      </div>
    </section>
  );
}
