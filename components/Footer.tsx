import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f4ebe1] text-[#2C221E] border-t border-[#e2d5c5] py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        
        {/* Logo and Brand Title */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <div className="relative w-16 h-16 rounded-full bg-white p-1 border-2 border-[#1e40af] shadow-md">
            <Image
              src="/images/logo-bird.png"
              alt="Pájaro Azul Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div>
            <h3 className="font-rye text-3xl text-[#1e40af]">
              Pájaro Azul
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#8c6239] font-bold mt-1">
              Fábrica Familiar de Bondiola Artesanal
            </p>
          </div>
        </div>

        {/* Brand Tagline */}
        <p className="font-serif italic text-base text-[#4a3b32] max-w-md mx-auto mb-8">
          "Donde el tiempo vuelve a tener sabor. Una bondiola artesanal se cura con paciencia, se cuida con respeto y se comparte con orgullo."
        </p>

        {/* Exclusive Contact Notice */}
        <div className="mb-10">
          <a
            href="https://wa.me/5492236689837?text=Hola!%20Quisiera%20consultar%20por%20bondiolas%20P%C3%A1jaro%20Azul."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#1e40af] hover:text-[#1d4ed8] font-semibold border-b border-[#1e40af]/30 pb-1"
          >
            <span>Contacto exclusivo vía WhatsApp: +54 9 2236 68-9837</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-[#e2d5c5] mx-auto mb-8" />

        {/* Copyright */}
        <p className="text-xs text-[#786658] font-sans">
          © {new Date().getFullYear()} Pájaro Azul. Todos los derechos reservados. Elaboración artesanal en Argentina.
        </p>

      </div>
    </footer>
  );
}
