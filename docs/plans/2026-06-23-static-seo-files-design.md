# Archivos SEO estáticos — Diseño aprobado

## Objetivo

Publicar `sitemap.xml` y `robots.txt` como archivos estáticos desde `public`, establecer `https://streamcore.codeluxe.tech` como único dominio canónico y reforzar las señales SEO de la landing.

## Implementación

- Eliminar los generadores dinámicos `src/app/sitemap.js` y `src/app/robots.js`.
- Crear `public/sitemap.xml` con la única URL indexable de la landing.
- Crear `public/robots.txt` permitiendo el rastreo y declarando el sitemap canónico.
- Centralizar el dominio fijo en `src/lib/constants.js`, sin variables de entorno ni referencias al dominio anterior.
- Reutilizar esa constante en metadata y datos estructurados.
- Completar metadata canónica, Open Graph, Twitter y directivas para robots sin inventar recursos gráficos inexistentes.

## Verificación

- Ejecutar el build de producción.
- Comprobar que no queden referencias al dominio anterior.
- Validar el contenido y las rutas públicas de `sitemap.xml` y `robots.txt`.
