# Cierre automático del menú móvil

## Objetivo

Cerrar el menú móvil después de seleccionar cualquier opción de navegación o contacto.

## Diseño

El header continuará como Server Component. Solo el `<details>` del menú móvil se extraerá a un Client Component pequeño.

El componente mantendrá una referencia al elemento `<details>` y establecerá su propiedad `open` en `false` cuando el usuario seleccione un enlace. Se conserva el comportamiento nativo, la navegación por teclado y la semántica existente.

## Verificación

- Build de producción.
- Cierre al seleccionar enlaces internos.
- Cierre al seleccionar el enlace de correo.
- El header de escritorio permanece sin hidratación adicional.
