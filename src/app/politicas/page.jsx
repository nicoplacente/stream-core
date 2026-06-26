import { LegalPage } from "@/components/legal/legal-page";

const title = "Política de privacidad";
const description =
  "Información sobre qué datos recopila StreamCore, cómo los usa y cómo se administran en el sitio web, dashboard, extensión de navegador, aplicación de escritorio, overlays e integraciones para comunidades de streaming.";
const lastUpdated = "25 de junio de 2026";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/politicas" },
  openGraph: {
    type: "article",
    locale: "es_AR",
    url: "/politicas",
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
    id: "informacion-que-recopilamos",
    title: "1. Información que recopilamos",
    paragraphs: [
      "Podemos recopilar datos de cuenta como nombre de usuario, identificador de la plataforma vinculada, avatar, rol dentro de una comunidad, estado de suscripción, fecha de registro, última actividad y datos necesarios para autenticar o verificar una cuenta.",
      "También podemos guardar información generada por el uso de StreamCore: puntos, créditos, watchtime, mensajes contabilizados, cofres, rachas, participación en sorteos, rankings, canjes, compras internas, tickets de soporte, recompensas reclamadas, eventos activados y configuraciones de comunidad.",
      "Si usás StreamCore como streamer, administrador o cliente, podemos recopilar datos relacionados con tu canal, configuración del dashboard, recompensas creadas, reglas de participación, overlays, integraciones, estado del servicio contratado y datos necesarios para operar tu comunidad.",
    ],
  },
  {
    id: "datos-de-la-extension-de-navegador",
    title: "2. Datos de la extensión de navegador",
    paragraphs: [
      "Si usás la extensión de navegador de StreamCore o una extensión vinculada a una comunidad, podemos procesar identificadores técnicos, estado de verificación, sesión de usuario, actividad de watchtime, participación en stream, mensajes elegibles para puntos, cofres reclamados, eventos necesarios para calcular recompensas y datos necesarios para mostrar el panel visual.",
      "Estos datos se usan para sincronizar tu actividad con el ranking, mostrar tus puntos, consultar tu watchtime, habilitar recompensas, evitar duplicados, validar rachas, comprobar actividad elegible y mantener la integridad del sistema.",
      "La extensión puede utilizar almacenamiento local del navegador para guardar identificadores, preferencias, estado de sesión, datos temporales de verificación o información necesaria para mantener la experiencia activa.",
      "La extensión puede comunicarse con los servidores de StreamCore para validar tu cuenta, actualizar puntos, consultar recompensas, cargar información del panel, sincronizar eventos y proteger el sistema contra abuso.",
    ],
  },
  {
    id: "datos-de-la-aplicacion-de-escritorio",
    title: "3. Datos de la aplicación de escritorio",
    paragraphs: [
      "StreamScream es una aplicación de escritorio complementaria de StreamCore diseñada exclusivamente para mostrar screamers configurables en la pantalla del streamer cuando una recompensa autorizada es canjeada desde la tienda.",
      "Para utilizar StreamScream, el streamer debe vincular la aplicación con su cuenta mediante un token de vinculación generado por StreamCore. Este token únicamente permite sincronizar la aplicación con la cuenta correspondiente para recibir los eventos autorizados.",
      "Cuando un usuario canjea una recompensa compatible, StreamCore envía el evento a StreamScream para que renderice el screamer previamente configurado por el streamer. La aplicación no realiza ninguna otra acción distinta de mostrar dicho efecto visual.",
      "StreamScream no almacena información personal del streamer ni de los usuarios, no guarda historiales de uso, conversaciones, archivos ni datos del dispositivo. Su funcionamiento se limita a mantener la vinculación con StreamCore y ejecutar los screamers autorizados.",
      "La aplicación no recopila el contenido de la pantalla, no registra las ventanas abiertas, no accede a archivos personales, no lee documentos, no captura imágenes, no graba audio, no activa la cámara, no controla el teclado o el mouse ni obtiene información privada del equipo.",
      "StreamScream tampoco modifica configuraciones del sistema operativo, no administra procesos, no manipula otras aplicaciones y no está diseñada para afectar el rendimiento normal del equipo más allá de los recursos mínimos necesarios para mostrar el screamer correspondiente.",
      "El funcionamiento de StreamScream depende de la correcta configuración realizada por el streamer, de la conexión con StreamCore, de los permisos otorgados por el sistema operativo y del correcto funcionamiento de la propia aplicación.",
      "La aplicación no comparte ni distribuye información con terceros. Los datos utilizados para la sincronización se emplean exclusivamente para identificar la instancia vinculada y permitir la recepción de los eventos necesarios para activar los screamers configurados.",
    ],
  },
  {
    id: "datos-del-stream-chat-e-integraciones",
    title: "4. Datos del stream, chat e integraciones",
    paragraphs: [
      "StreamCore puede procesar datos vinculados a plataformas de streaming, chats, comandos, eventos, recompensas, overlays, OBS, dashboards, autenticación, APIs externas y servicios necesarios para operar el sistema.",
      "Podemos utilizar esta información para detectar acciones del chat, interpretar comandos, validar participación, activar overlays, enviar eventos a OBS, actualizar rankings, registrar canjes, administrar sorteos y sincronizar recompensas con la experiencia del stream.",
      "Las plataformas externas pueden recopilar y procesar datos según sus propias políticas de privacidad y condiciones de uso.",
    ],
  },
  {
    id: "datos-para-entregas-premios-y-soporte",
    title: "5. Datos para entregas, premios y soporte",
    paragraphs: [
      "Cuando un canje, sorteo, recompensa o servicio requiere entrega, contacto o verificación, podemos solicitar datos como nombre, teléfono, provincia, ciudad, código postal, dirección, documento de identidad, usuario de redes sociales, Discord, correo electrónico u otra información necesaria para completar la gestión.",
      "Los mensajes enviados por soporte quedan registrados para responder consultas, dejar historial del caso, verificar información, resolver reclamos, proteger al usuario y proteger al equipo administrador ante solicitudes futuras.",
    ],
  },
  {
    id: "como-usamos-la-informacion",
    title: "6. Cómo usamos la información",
    paragraphs: [
      "Usamos la información para iniciar sesión, mantener perfiles, mostrar saldos, calcular rankings, procesar canjes, administrar sorteos, entregar premios, responder soporte, activar recompensas, conectar overlays, sincronizar la extensión, vincular la aplicación de escritorio y mantener la experiencia de cada comunidad.",
      "También podemos usar registros técnicos para diagnosticar errores, proteger el servicio, investigar actividad sospechosa, prevenir fraude, evitar duplicados, mejorar estabilidad, mantener seguridad y cumplir reglas internas de cada comunidad.",
    ],
  },
  {
    id: "cookies-sesiones-y-almacenamiento-local",
    title: "7. Cookies, sesiones y almacenamiento local",
    paragraphs: [
      "El sitio puede usar cookies, tokens, almacenamiento local u otros mecanismos similares para mantener la sesión iniciada, renovar autenticación, recordar preferencias, proteger rutas privadas y conectar correctamente el dashboard, la extensión o la aplicación de escritorio.",
      "La extensión y la aplicación de escritorio también pueden almacenar datos técnicos necesarios para recordar el estado de conexión, preferencias, identificadores, sesión vinculada o configuración de la comunidad.",
    ],
  },
  {
    id: "seguridad",
    title: "8. Seguridad",
    paragraphs: [
      "Aplicamos controles razonables para proteger la información, reducir accesos no autorizados, preservar la integridad del sistema y evitar abusos.",
      "Ningún sistema conectado a internet es completamente infalible. Por eso recomendamos cerrar sesión en dispositivos compartidos, no compartir el acceso a tu cuenta, mantener actualizado el navegador y descargar la extensión o aplicación únicamente desde fuentes oficiales indicadas por StreamCore.",
    ],
  },
  {
    id: "con-quien-compartimos-datos",
    title: "9. Con quién compartimos datos",
    paragraphs: [
      "No vendemos tus datos personales.",
      "Podemos compartir información solo cuando sea necesario para operar StreamCore, prestar el servicio contratado, cumplir una entrega, resolver soporte, activar integraciones, proteger la comunidad, investigar abuso o responder a obligaciones legales aplicables.",
      "StreamCore puede integrarse con servicios externos de streaming, autenticación, hosting, bases de datos, almacenamiento, imágenes, comunicación, analítica, pagos, correo, infraestructura técnica u otras herramientas necesarias para operar el servicio. Esos servicios pueden procesar datos según sus propias políticas.",
    ],
  },
  {
    id: "conservacion-de-datos",
    title: "10. Conservación de datos",
    paragraphs: [
      "Conservamos los datos mientras la cuenta esté activa, mientras sean necesarios para operar StreamCore o mientras exista una razón legítima para mantener historiales de canjes, soporte, sorteos, seguridad, auditoría, facturación, prevención de fraude o funcionamiento de la comunidad.",
      "Algunos datos pueden conservarse incluso después de una solicitud de eliminación si son necesarios para seguridad, control de abuso, historial operativo, resolución de reclamos, obligaciones legales o integridad del sistema.",
    ],
  },
  {
    id: "revision-correccion-y-eliminacion",
    title: "11. Revisión, corrección y eliminación",
    paragraphs: [
      "Podés solicitar revisión, corrección o eliminación de datos mediante los canales de soporte publicados por StreamCore o por la comunidad correspondiente.",
      "Algunas solicitudes pueden requerir verificación de identidad para proteger la cuenta y evitar que terceros modifiquen o eliminen información sin permiso.",
      "La eliminación de ciertos datos puede afectar el acceso a puntos, rankings, recompensas, historial de canjes, soporte, extensión, aplicación de escritorio o funciones vinculadas a una comunidad.",
    ],
  },
  {
    id: "menores-de-edad",
    title: "12. Menores de edad",
    paragraphs: [
      "StreamCore está pensado para comunidades de streaming y puede ser usado por personas de distintas edades según las reglas de cada plataforma y comunidad.",
      "Si una recompensa, premio, sorteo o entrega requiere datos personales de un menor, el equipo administrador puede solicitar autorización, datos de contacto de un adulto responsable o rechazar la entrega si no puede verificar la información necesaria.",
    ],
  },
  {
    id: "cambios-de-esta-politica",
    title: "13. Cambios de esta política",
    paragraphs: [
      "Podemos actualizar esta política para reflejar cambios del proyecto, nuevas funciones, integraciones, requisitos legales, ajustes de seguridad, cambios en la extensión, cambios en la aplicación de escritorio o modificaciones operativas de StreamCore.",
      "La versión vigente será siempre la publicada en esta página. Si el cambio es importante, podremos comunicarlo dentro del sitio, dashboard, extensión, aplicación de escritorio o por los canales habituales de la comunidad.",
    ],
  },
  {
    id: "contacto",
    title: "14. Contacto",
    paragraphs: [
      <>
        Para consultas sobre privacidad, datos personales, soporte, seguridad,
        extensión, aplicación de escritorio o funcionamiento de StreamCore,
        podés escribirnos a{" "}
        <a className="legal-inline-link" href="mailto:contacto@codeluxe.tech">
          contacto@codeluxe.tech
        </a>
        .
      </>,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title={title}
      description={description}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
