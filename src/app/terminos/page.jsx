import { LegalPage } from "@/components/legal/legal-page";
import Link from "next/link";

const title = "Términos y condiciones";
const description =
  "Condiciones de uso de StreamCore, incluyendo herramientas web, puntos, créditos, recompensas, sorteos, canjes, extensión de navegador, aplicación de escritorio, overlays e integraciones para comunidades de streaming.";
const lastUpdated = "25 de junio de 2026";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/terminos" },
  openGraph: {
    type: "article",
    locale: "es_AR",
    url: "/terminos",
    siteName: "StreamCore",
    title: `${title} | StreamCore`,
    description,
  },
  twitter: {
    card: "summary",
    title: `${title} | StreamCore`,
    description,
  },
};

const sections = [
  {
    id: "aceptacion-y-alcance",
    title: "1. Aceptación y alcance",
    paragraphs: [
      "Estos términos regulan el uso de StreamCore, incluyendo el sitio web, dashboard, sistema de puntos, créditos, ranking, sorteos, canjes, market, rachas, recompensas del stream, extensión de navegador, aplicación de escritorio, overlays, integraciones con plataformas externas y cualquier otra herramienta vinculada al servicio.",
      "Al usar StreamCore aceptás estas condiciones y las reglas particulares publicadas para cada canal, comunidad, recompensa, sorteo, canje o función. Si no estás de acuerdo, no uses el sitio ni sus funcionalidades.",
      "StreamCore funciona como una plataforma configurable para streamers, creadores y comunidades. Cada comunidad puede tener reglas propias, beneficios específicos, nombres personalizados para sus puntos, requisitos de participación y condiciones internas de uso.",
    ],
  },
  {
    id: "cuentas-acceso-y-verificacion",
    title: "2. Cuentas, acceso y verificación",
    paragraphs: [
      "El acceso a ciertas funciones puede requerir iniciar sesión, verificar identidad mediante una plataforma externa, vincular una cuenta de streaming o completar datos necesarios para participar en una comunidad.",
      "La cuenta debe representar a una persona real y no puede usarse para suplantar a otros usuarios, manipular rankings, reclamar recompensas de forma indebida o generar ventajas injustas.",
      "Cada usuario es responsable por las acciones realizadas desde su sesión. StreamCore, el streamer o el equipo administrador de una comunidad pueden limitar, suspender, revisar o bloquear una cuenta si detectan abuso, fraude, automatización indebida, múltiples cuentas usadas para obtener ventajas, incumplimiento de reglas o actividad sospechosa.",
      "StreamCore no solicita, almacena, procesa ni tiene acceso a las contraseñas de las cuentas de Kick. La autenticación se realiza exclusivamente mediante el sistema oficial de inicio de sesión (OAuth) proporcionado por Kick, por lo que las credenciales son gestionadas únicamente por dicha plataforma.",
      "La información obtenida durante la autenticación se utiliza únicamente para el funcionamiento de los servicios ofrecidos por StreamCore y no se vende, distribuye ni comparte con terceros sin autorización o sin que exista una obligación legal. Ningún miembro del equipo de StreamCore puede acceder a la cuenta de Kick de un streamer o de un usuario, ya que el acceso se realiza mediante permisos autorizados por el propio titular de la cuenta.",
    ],
  },
  {
    id: "roles-dentro-de-una-comunidad",
    title: "3. Roles dentro de una comunidad",
    paragraphs: [
      "StreamCore puede diferenciar entre distintos tipos de usuarios, como administradores, streamers, moderadores, miembros del equipo, viewers, participantes o usuarios finales.",
      "Los administradores y streamers son responsables de configurar las reglas de su comunidad, definir recompensas, aprobar o rechazar canjes, revisar tickets de soporte y mantener actualizada la información publicada.",
      "Los usuarios finales son responsables de usar el sistema de forma correcta, respetar las reglas del canal y aportar información válida cuando una recompensa, sorteo o canje lo requiera.",
    ],
  },
  {
    id: "puntos-creditos-y-recompensas",
    title: "4. Puntos, créditos y recompensas",
    paragraphs: [
      "Los puntos, créditos, cofres, rachas, rankings, recompensas y beneficios generados dentro de StreamCore son elementos internos de cada comunidad. No representan dinero real, no tienen valor monetario fuera de la plataforma y no son canjeables por efectivo salvo que una regla específica indique otra cosa.",
      "El sistema puede sumar puntos o créditos por watchtime, mensajes elegibles, participación en stream, cofres, eventos especiales, recompensas de chat, compras internas, sorteos, acciones del usuario u otras dinámicas habilitadas por cada comunidad.",
      "Los saldos pueden corregirse, reiniciarse, ajustarse o eliminarse si existen errores técnicos, cambios de reglas, abuso, actividad no válida, problemas de sincronización, duplicación de eventos o decisiones operativas necesarias para mantener la integridad del sistema.",
      "El streamer, el equipo administrador o StreamCore pueden restablecer puntos, créditos o rankings cuando lo consideren necesario para mantener el correcto progreso de los premios, la economía interna y la experiencia de la comunidad.",
    ],
  },
  {
    id: "market-canjes-y-recompensas-configurables",
    title: "5. Market, canjes y recompensas configurables",
    paragraphs: [
      "Los productos, premios, acciones, beneficios y recompensas publicados en el market dependen de disponibilidad, stock, requisitos de entrega, reglas de la comunidad y revisión del equipo correspondiente.",
      "Un canje no se considera finalizado hasta que figure como aprobado, entregado o completado dentro del sistema o hasta que el equipo administrador confirme su resolución.",
      "El equipo puede rechazar, pausar, cancelar, modificar o revertir canjes cuando el usuario no cumpla las reglas, no pueda verificarse la información necesaria, exista falta de stock, se detecte abuso, ocurra un problema técnico o exista una imposibilidad razonable de entrega.",
      "Los premios pueden cancelarse, modificarse o reemplazarse por un beneficio equivalente cuando no exista stock disponible, el stock informado no coincida con la disponibilidad real, el proveedor no pueda cumplir la entrega o surja una situación razonable que impida completar el canje original.",
      "Está prohibido publicar, ofrecer o configurar productos, premios, acciones, beneficios o recompensas cuyo contenido sea ilegal o infrinja la legislación aplicable. Esto incluye, entre otros, material pornográfico, explotación sexual, drogas o sustancias ilícitas, armas, actividades delictivas, estafas, contenido violento, discriminatorio o cualquier otro contenido que vulnere estos Términos y Condiciones o las políticas de la plataforma. StreamCore podrá eliminar este tipo de contenido y suspender o bloquear las cuentas involucradas sin previo aviso.",
    ],
  },
  {
    id: "sorteos-predicciones-y-dinamicas-del-stream",
    title: "6. Sorteos, predicciones y dinámicas del stream",
    paragraphs: [
      "La participación en sorteos, predicciones, apuestas internas, desafíos, eventos especiales o dinámicas del stream puede requerir puntos, créditos, actividad mínima, verificación de cuenta u otras condiciones indicadas por cada comunidad.",
      "Participar no garantiza ganar. Los resultados pueden depender de reglas automáticas, selección aleatoria, criterios del equipo o condiciones publicadas para cada actividad.",
      "Los ganadores deben responder y aportar la información necesaria dentro del plazo informado. Si no lo hacen, el premio puede reasignarse, cancelarse, quedar pendiente o resolverse según criterio del equipo administrador.",
    ],
  },
  {
    id: "extension-de-navegador",
    title: "7. Extensión de navegador",
    paragraphs: [
      "StreamCore incluye una extensión de navegador para mejorar la experiencia de la comunidad dentro de plataformas de streaming compatibles.",
      "La extensión puede mostrar un panel visual, consultar puntos, mostrar watchtime, validar participación, registrar actividad elegible del chat, habilitar cofres, sincronizar recompensas, mostrar rankings y conectar acciones del usuario con el sistema de la comunidad.",
      "La extensión funciona vinculada al ecosistema de StreamCore y a las comunidades que tengan habilitada esta integración. Algunas funciones pueden estar disponibles solo en determinados canales, plataformas, navegadores o versiones de la extensión.",
      "Para funcionar correctamente, la extensión puede necesitar permisos del navegador relacionados con las páginas compatibles, autenticación, lectura de estado de sesión, almacenamiento local o comunicación con los servidores de StreamCore.",
      "El usuario puede desinstalar o desactivar la extensión desde la configuración de su navegador. Al hacerlo, algunas funciones como puntos por actividad, panel visual, cofres, sincronización de watchtime o recompensas pueden dejar de estar disponibles.",
    ],
  },
  {
    id: "aplicacion-de-escritorio",
    title: "8. Aplicación de escritorio | StreamScream",
    paragraphs: [
      "StreamScream es una aplicación de escritorio opcional incluida de StreamCore que permite mostrar screamers configurables en la pantalla del streamer como parte de una recompensa especial disponible en la tienda.",
      "Cuando el streamer habilita esta función y vincula correctamente la aplicación con su cuenta, los usuarios podrán canjear la recompensa correspondiente para activar un screamer previamente configurado por el streamer.",
      "Los screamers pueden mostrarse por encima de cualquier ventana abierta en el dispositivo donde StreamScream esté ejecutándose, con el objetivo de sorprender o asustar al streamer durante una transmisión o mientras utiliza su equipo.",
      "El streamer es el único responsable de configurar los screamers disponibles, habilitar o deshabilitar la función, establecer las recompensas compatibles y decidir cuándo utilizar la aplicación.",
      "El funcionamiento de StreamScream depende de la configuración realizada por el streamer, los permisos otorgados al sistema operativo, la conexión con StreamCore y el correcto funcionamiento de la aplicación.",
      "StreamScream no recopila información sobre el contenido mostrado en pantalla ni controla las ventanas abiertas por el usuario. Su única función es renderizar los efectos visuales configurados cuando una recompensa válida es canjeada.",
      "La aplicación no debe utilizarse para afectar dispositivos de terceros sin su consentimiento, interferir con el funcionamiento normal de otros equipos, simular amenazas de seguridad, engañar al usuario fuera del contexto previsto o ejecutar acciones distintas de las expresamente ofrecidas por StreamCore.",
    ],
  },
  {
    id: "overlays-obs-e-integraciones-externas",
    title: "9. Overlays, OBS e integraciones externas",
    paragraphs: [
      "StreamCore puede integrarse con herramientas externas como plataformas de streaming, OBS, navegadores, servicios de autenticación, sistemas de chat, servicios de hosting, bases de datos, almacenamiento de imágenes, APIs de terceros u otras herramientas necesarias para operar el servicio.",
      "Las integraciones pueden cambiar, fallar, limitarse o dejar de funcionar si una plataforma externa modifica sus reglas, permisos, APIs, políticas, diseño del sitio, sistema de autenticación o condiciones de uso.",
      "StreamCore intentará mantener la estabilidad del servicio, pero no garantiza disponibilidad permanente de funciones que dependan de terceros.",
      "Los overlays ofrecidos por StreamCore no constituyen servicios de terceros. Son desarrollados y mantenidos por StreamCore - Codeluxe y se integran con OBS mediante una fuente de navegador (Browser Source) utilizando las páginas y enlaces generados por la propia plataforma. Su funcionamiento depende de la correcta configuración realizada por el usuario y de la disponibilidad de StreamCore.",
    ],
  },
  {
    id: "planes-pagos-y-servicios-contratados",
    title: "10. Planes, pagos y servicios contratados",
    paragraphs: [
      "Algunas funciones de StreamCore pueden estar disponibles mediante planes, suscripciones, configuraciones personalizadas, servicios contratados o acuerdos particulares con streamers y comunidades.",
      "Las condiciones comerciales, precios, alcance del servicio, tiempos de implementación, mantenimiento, soporte y funcionalidades incluidas pueden variar según el acuerdo vigente con cada cliente.",
      "El acceso a funciones pagas puede suspenderse o limitarse ante falta de pago, uso abusivo, incumplimiento de condiciones, finalización del acuerdo o decisión operativa justificada.",
      "Salvo que la legislación aplicable disponga lo contrario, los pagos realizados por planes, suscripciones, servicios personalizados o cualquier otra contratación dentro de StreamCore son definitivos y no son reembolsables, incluso si el usuario deja de utilizar el servicio, cancela su suscripción o decide finalizar el acuerdo antes de su vencimiento.",
    ],
  },
  {
    id: "conducta-y-uso-prohibido",
    title: "11. Conducta y uso prohibido",
    paragraphs: [
      "No está permitido manipular el sistema, explotar errores, automatizar interacciones no autorizadas, alterar datos, interferir con el backend, suplantar usuarios, abusar de integraciones, evadir límites, acosar a otros usuarios o usar StreamCore para fines ajenos a la comunidad correspondiente.",
      "También está prohibido intentar obtener acceso no autorizado a cuentas, dashboards, tokens, sesiones, bases de datos, archivos, endpoints privados, configuraciones internas o información de otros usuarios.",
      "Cualquier conducta que afecte la integridad del ranking, los sorteos, los canjes, el stream, la aplicación de escritorio, la extensión, los overlays o la experiencia de otros usuarios puede derivar en pérdida de puntos, anulación de premios, bloqueo de funciones, suspensión de acceso o eliminación de la cuenta.",
    ],
  },
  {
    id: "soporte-y-comunicaciones",
    title: "12. Soporte y comunicaciones",
    paragraphs: [
      "Los canales de soporte pueden utilizarse para consultas sobre cuentas, canjes, sorteos, créditos, entregas, configuración, extensión, aplicación de escritorio, overlays, errores técnicos o funcionamiento general del sitio.",
      "El equipo puede pedir datos adicionales para verificar identidad, revisar actividad, resolver una solicitud, entregar un premio o investigar un problema.",
      "Los tiempos de respuesta pueden variar según la disponibilidad del equipo, la complejidad del caso, el volumen de solicitudes y la actividad de cada comunidad.",
    ],
  },
  {
    id: "disponibilidad-mantenimiento-y-cambios-del-servicio",
    title: "13. Disponibilidad, mantenimiento y cambios del servicio",
    paragraphs: [
      "StreamCore puede cambiar, pausar, limitar o eliminar funciones, reglas, recompensas, productos, sorteos, integraciones, dashboards, overlays, extensión, aplicación de escritorio o cualquier parte del servicio cuando sea necesario por mantenimiento, seguridad, cambios de la comunidad, decisiones operativas o problemas técnicos.",
      "También podemos actualizar estos términos. La versión vigente será la publicada en esta página y el uso continuo de StreamCore implica aceptación de los cambios.",
    ],
  },
  {
    id: "limitacion-de-responsabilidad",
    title: "14. Limitación de responsabilidad",
    paragraphs: [
      "StreamCore se ofrece como una herramienta para mejorar la interacción de comunidades de streaming. No garantizamos que el servicio funcione sin interrupciones, errores, demoras, pérdida de datos, incompatibilidades o fallas causadas por terceros.",
      "Cada streamer, administrador o comunidad es responsable por las reglas que configure, los premios que prometa, los canjes que apruebe y el uso que haga de las herramientas disponibles.",
    ],
  },
  {
    id: "modificaciones-y-aceptacion-de-los-terminos",
    title: "15. Modificaciones y aceptación de los términos",
    paragraphs: [
      <>
        StreamCore podrá modificar, actualizar, ampliar o reemplazar estos
        Términos y Condiciones, así como su{" "}
        <Link className="legal-inline-link" href="/politicas">
          Política de Privacidad
        </Link>
        , en cualquier momento y sin previo aviso cuando resulte necesario por
        motivos legales, técnicos, operativos o comerciales.
      </>,
      "La versión vigente será la publicada dentro de la plataforma o en los medios oficiales de StreamCore, reemplazando cualquier versión anterior desde el momento de su publicación, salvo que se indique expresamente lo contrario.",
      "El uso continuado de StreamCore, el registro de una cuenta, la vinculación con una plataforma compatible, la contratación de un servicio, la realización de un pago o la utilización de cualquiera de las funcionalidades de la plataforma implican que el usuario o streamer declara haber leído, comprendido y aceptado estos Términos y Condiciones, así como la Política de Privacidad vigente.",
      "Si el usuario o streamer no está de acuerdo con estos Términos y Condiciones o con la Política de Privacidad, deberá abstenerse de utilizar los servicios ofrecidos por StreamCore.",
    ],
  },

  {
    id: "contacto",
    title: "16. Contacto",
    paragraphs: [
      <>
        Para consultas sobre estos términos, soporte, privacidad o
        funcionamiento de StreamCore, podés escribir a{" "}
        <a
          rel="noopener noreferrer"
          className="legal-inline-link"
          href="mailto:contacto@codeluxe.tech"
        >
          contacto@codeluxe.tech
        </a>
        .
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title={title}
      description={description}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
