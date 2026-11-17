# Jardín de Eva

Sitio web de una florería y estudio de diseño floral en Tuxtla Gutiérrez, Chiapas. Los pedidos se realizan en línea.

## Requisitos

- Node.js compatible con la versión instalada de Next.js.
- pnpm `12.11.2`.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Scripts

- `pnpm dev`: inicia el servidor de desarrollo.
- `pnpm build`: genera la compilación de producción.
- `pnpm start`: inicia la aplicación compilada.
- `pnpm lint`: ejecuta ESLint cuando se solicite.

## Estructura

- `src/app/`: rutas, metadatos y estilos globales.
- `src/components/`: componentes compartidos, como el encabezado y el pie de página.
- `data/arreglos.ts`: catálogo de ramos y arreglos.
- `public/`: logotipos, fotografías, iconos, ilustraciones y fuentes locales.

## Rutas actuales

- `/`: portada en desarrollo.
- `/ramos-y-arreglos`: catálogo de productos.

## Despliegue

El despliegue previsto es Vercel y lo administra el propietario. El dominio `jardindeeva.com.mx` se gestiona en Hostinger.

Consulta [AGENTS.md](./AGENTS.md) antes de modificar el proyecto: documenta decisiones de marca, límites de contenido y convenciones técnicas.
