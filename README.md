# Pájaro Azul — Landing Page (Next.js + Tailwind + Framer Motion)

Starter minimal para la landing de Bondiolas Artesanales.

Requisitos:
- Node.js 18+
- npm o yarn

Instalación rápida y configuración:

```bash
# Inicializar proyecto (si no tienes package.json aún)
npm init -y

# Instalar dependencias declaradas en package.json
npm install

# Ejecutar desarrollo
npm run dev
```

Archivos de config ya creados: `tailwind.config.js`, `postcss.config.js`, `styles/globals.css`.

Estructura relevante creada:
- `components/Hero.tsx`
- `components/FloatingWhatsAppButton.tsx`
- `components/ProductCard.tsx`
- `components/ProductsGrid.tsx`
- `components/Process.tsx`
- `components/Gallery.tsx`
- `app/layout.tsx`
- `public/images/*` placeholders

Comandos útiles:

```bash
# desarrollo
npm run dev
# producción
npm run build
npm start
```

Siguientes pasos recomendados:
- Añadir `next.config.js` con dominios de imágenes (si usas CDN)
- Añadir `package.json` scripts ("dev": "next dev", "build": "next build", "start": "next start")
- Reemplazar placeholders en `public/images` por fotos profesionales
- Integrar API route para envío de formulario o usar servicio externo
- Auditar performance con Lighthouse y optimizar LCP

Si quieres, puedo:
- Añadir ejemplos de datos para `ProductsGrid`
- Integrar la galería en la página principal
- Generar `package.json` y scripts automáticamente
