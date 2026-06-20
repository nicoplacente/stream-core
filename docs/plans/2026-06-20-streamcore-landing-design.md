# StreamCore Landing — Diseño aprobado

## Objetivo

Crear una landing profesional para StreamCore orientada a streamers de Kick. La conversión principal será iniciar una conversación por WhatsApp y la secundaria, enviar un correo a Codeluxe. La página no ofrecerá una prueba gratuita.

## Audiencia

Streamers y equipos de producción que necesitan aumentar la interacción de su comunidad mediante recompensas, apuestas, chat mejorado, overlays y herramientas de control.

## Dirección visual

La dirección combina un centro de control de transmisión profesional con energía neón contenida. La base utiliza fondos azul tinta, superficies tipo consola y jerarquía técnica. El violeta eléctrico, el verde de señal en vivo y el cian se reservan para acciones, estados y conexiones.

La experiencia debe sentirse como entrar al centro de control de un streamer profesional. La profundidad se construirá mediante superficies escalonadas, bordes luminosos sutiles y brillos localizados, sin glassmorphism excesivo.

## Firma visual

Una señal animada conectará chat, motor de interacción y overlay. Esta firma aparecerá en el hero, el flujo interactivo, los reproductores demo, las métricas y los indicadores de estado.

## Arquitectura de contenido

1. Header compacto con navegación por anclas y CTA a WhatsApp.
2. Hero con propuesta de valor, CTA a WhatsApp, CTA por correo y mockup operativo.
3. Barra de confianza basada en capacidades reales, sin cifras inventadas.
4. Beneficios: recompensas, apuestas, overlays y chat.
5. Dos reproductores preparados para futuras demos: experiencia del streamer y experiencia de la audiencia.
6. Ecosistema StreamCore: extensión, aplicación de escritorio y panel compatible con OBS.
7. Flujo de trabajo: conectar, configurar y activar.
8. CTA final orientado a conversar sobre el canal.
9. Footer con contacto, navegación y datos de Codeluxe.

## Conversión

- WhatsApp: `+54 9 2926 40-2409`.
- Correo: `codeluxetech@gmail.com`.
- Los CTA comunicarán conversación, asesoramiento y adaptación al canal.

## Video

Los videos todavía no existen. La interfaz incluirá reproductores visibles con poster, controles accesibles y un estado claro de demostración próximamente disponible. La estructura quedará preparada para reemplazar los placeholders por archivos finales.

## Animación

GSAP y ScrollTrigger animarán una única sección narrativa: la señal recorrerá chat, motor de interacción y overlay mientras los módulos cambian de estado. La animación vivirá en una isla cliente aislada, se limpiará al desmontar y tendrá una alternativa estática para `prefers-reduced-motion`.

Se adaptarán como componentes locales patrones de Magic UI:

- Animated Beam para conexiones del ecosistema.
- Border Beam para los reproductores demo.
- Shimmer Button exclusivamente para el CTA principal de WhatsApp.

## Arquitectura técnica

- Next.js 16 App Router, React 19 y Tailwind CSS 4.
- Server Components por defecto.
- Componentes cliente únicamente para menú móvil, reproductores y animación GSAP.
- Contenido repetido centralizado en estructuras de datos.
- Iconos reutilizables centralizados, sin SVG inline en componentes de página.
- Componentes organizados por responsabilidad y sección.

## SEO y accesibilidad

- Metadata, canonical, Open Graph, Twitter Cards, robots, sitemap y JSON-LD.
- HTML semántico, headings jerárquicos, foco visible y navegación por teclado.
- Contraste suficiente, nombres accesibles y enlaces descriptivos.
- Soporte para `prefers-reduced-motion`.

## Performance

- Hidratación limitada a islas interactivas.
- Fuentes optimizadas con `next/font`.
- Animaciones de terceros aisladas y cargadas solo donde aportan valor.
- Sin imágenes externas bloqueantes ni JavaScript decorativo global.

## Verificación

- Build de producción.
- Revisión responsive en móvil y escritorio.
- Navegación por teclado y estados de foco.
- Comprobación visual de animaciones y reducción de movimiento.
- Cierre de servidores y procesos de prueba al finalizar.
