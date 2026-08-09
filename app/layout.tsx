import React from "react";
import "./globals.css";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";

export const metadata = {
  title: "Pájaro Azul | Bondiola Artesanal Curada",
  description: "Bondiola artesanal curada con tradición familiar y paciencia. El verdadero sabor del campo argentino directo a tu mesa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rye&family=Cinzel:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAF6F0] text-[#2C221E] font-sans antialiased selection:bg-[#1e40af] selection:text-white">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
