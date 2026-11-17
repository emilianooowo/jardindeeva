<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Jardín de Eva

## Contexto del proyecto

- Florería y estudio de diseño floral en Tuxtla Gutiérrez, Chiapas.
- La empresa trabaja con pedidos en línea y envíos. No ofrece cafetería; no agregar contenido, productos ni funciones de café.
- El dominio previsto es `https://jardindeeva.com.mx`.
- Mantener la identidad cálida y floral existente: morado `#5E3F66`, rosa `#F762AD`, durazno `#FCB5BA` y verdes `#128241` / `#AFBF8E`.
- No inventar precios, cobertura, tiempos, costos o políticas de entrega, ni datos de historia empresarial. Si hacen falta para una tarea, preguntar.
- No añadir carrito, checkout, pagos, cuentas, base de datos ni administración de productos sin acordar primero el alcance.
- La frase anterior «Donde las flores y el café se encuentran» incluye una oferta que ya no existe. No usarla en contenido nuevo; consultar al propietario antes de elegir un lema sustituto.

## Comunicación y flujo de trabajo

- Responder en español, de forma breve y directa. Explicar los conceptos con suficiente contexto para alguien que estudia ingeniería de software.
- Antes de cambios con impacto, resumir objetivo, alcance y decisiones y esperar confirmación. Después de confirmar, resolver detalles menores sin interrumpir.
- Priorizar la revisión del propietario. No ejecutar pruebas, linters ni revisiones adicionales por rutina; hacerlo solo si se solicita o si es indispensable y se explica por qué.
- Al terminar, resumir qué cambió, su efecto y cualquier punto pendiente.

## Stack y convenciones

- Next.js `16.4.6`, React `19.3.0`, TypeScript, App Router bajo `src/app/`, CSS Modules y pnpm `12.11.2`.
- Conservar el alias `@/*` hacia `src/*`. Usar CSS Modules para estilos de componentes y páginas.
- Antes de escribir código de Next.js, leer la guía local pertinente en `node_modules/next/dist/docs/`; esta versión puede diferir de la documentación conocida.
- Usar `next/image` para fotografías locales cuando corresponda. No instalar dependencias de interfaz, añadir Tailwind ni crear abstracciones sin una necesidad concreta.
- El despliegue previsto es Vercel y lo realiza el propietario. El dominio se administra en Hostinger; no publicar ni cambiar DNS como parte de tareas de código.
- No activar exportación estática ni deshabilitar la optimización de imágenes sin un requisito concreto.

## Contenido y recursos

- Los datos del catálogo se mantienen en `data/arreglos.ts`; las fotos de producto están en `public/ramos/`.
- Antes de modificar productos, contrastar las composiciones con las fotos. Usar descripciones generales si una flor no se puede identificar con seguridad.
- Reutilizar recursos existentes en `public/` y no reemplazar ni renombrar archivos sin revisar sus referencias.
- Las fuentes locales TAN están en `public/fonts/`. Su licencia para distribución y uso web no está documentada; resolverlo con el propietario antes de publicar esos archivos o depender de ellos en producción.
- No hay precios ni políticas comerciales documentadas. Las tarjetas del catálogo deben limitarse a información confirmada.

## Repositorio

- No incluir secretos, archivos `.env` locales, `node_modules`, `.next`, salidas de compilación ni credenciales en commits.
- Usar mensajes de commit breves y descriptivos. No hacer push, publicar el sitio ni modificar configuración externa salvo que el propietario lo solicite expresamente.
