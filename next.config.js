/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Añade dominios externos si servirás imágenes desde CDN
    domains: ['images.unsplash.com', 'cdn.example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimización recomendada para producción
  output: 'standalone',
};

module.exports = nextConfig;
