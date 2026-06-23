# Iconos y manifest — Diseño aprobado

## Objetivo

Integrar los recursos gráficos entregados mediante las convenciones nativas de metadata de Next.js 16 y mantener el manifest alineado con el tema visual actual de StreamCore.

## Implementación

- Ubicar `favicon.ico`, `icon0.svg`, `icon1.png` y `apple-icon.png` en `src/app`.
- Ubicar los iconos de instalación de 192 × 192 y 512 × 512 píxeles en `public`.
- Crear `src/app/manifest.json` con referencias a los iconos públicos.
- Usar `#070b17` como color de tema y fondo del manifest.
- Conservar las convenciones de archivos de Next.js para que genere automáticamente las etiquetas correspondientes.

## Verificación

- Ejecutar el build de producción.
- Verificar que los recursos se publiquen en sus rutas esperadas.
- Comprobar que Next.js incluya favicon, iconos, Apple Touch Icon y manifest en la metadata generada.
