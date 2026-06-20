# Ajuste de iconos móviles y manifiesto

## Objetivo

Corregir la visibilidad de los iconos del ecosistema en dispositivos móviles y añadir el mensaje de posicionamiento aprobado sin alterar la arquitectura general de la landing.

## Corrección móvil

La regla responsive del ecosistema oculta todos los elementos `svg`, incluidos los iconos de Lucide. La regla se limitará a los SVG directos del contenedor, que corresponden a los haces animados de Magic UI. Los iconos anidados permanecerán visibles.

## Manifiesto

Se añadirá una sección semántica después del hero y antes de capacidades. Tendrá una etiqueta “Nuestra visión” y el siguiente texto:

> Esto no es una simple página web; es una máquina diseñada para revolucionar tu stream. Creada para streamers de Kick que quieren marcar la diferencia, lleva la interacción con tu audiencia a un nivel nunca antes visto y convierte cada directo en una experiencia inmersiva e inolvidable para tus viewers.

La frase “máquina diseñada para revolucionar tu stream” tendrá énfasis visual. El bloque reutilizará la paleta, tipografía y profundidad ya definidas, sin incorporar nueva lógica cliente ni dependencias.

## Verificación

- Build de producción.
- Comprobación de que los iconos siguen visibles en el breakpoint móvil.
- Revisión de jerarquía semántica y legibilidad del manifiesto.
