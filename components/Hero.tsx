"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5492236689837?text=" + encodeURIComponent("Hola! Quisiera consultar sobre la bondiola artesanal Pájaro Azul.");

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image: Bright sunny countryside with green pastures & rustic table */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bright_countryside.jpg"
          alt="Campo argentino soleado con bondiola artesanal Pájaro Azul sobre tabla de madera"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Natural subtle gradient overlays for crisp legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#1c140e]/30 to-[#1c140e]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center max-w-4xl">
        {/* Bird Sketch Emblem Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex flex-col items-center mb-6"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 relative mb-4 p-3 rounded-full bg-white border-4 border-[#1e40af] shadow-2xl overflow-hidden ring-4 ring-[#d4af37]/40 flex items-center justify-center">
            <Image
              src="/images/bird-logo-exact.png"
              alt="Logo Pájaro Azul en rama"
              fill
              className="object-contain p-2 mix-blend-multiply"
            />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold bg-[#1c140e]/60 backdrop-blur-sm px-4 py-1 rounded-full border border-[#d4af37]/30 text-white">
            Fábrica Familiar de Chacinados
          </span>
        </motion.div>

        {/* Main Brand Title in RYE Font */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-rye text-white tracking-wide drop-shadow-lg mb-3"
        >
          Pájaro Azul
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-serif italic text-[#fef08a] drop-shadow mb-6"
        >
          El arte de esperar el sabor auténtico
        </motion.p>

        {/* Subtitle Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-white/95 font-sans font-normal leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
        >
          Elaboración artesanal de bondiola curada con paciencia, sal marina y especias seleccionadas. Tradición familiar directo del campo a tu mesa.
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-semibold text-base px-8 py-4 rounded-full shadow-2xl shadow-[#1e40af]/50 transition-all hover:scale-105 active:scale-95 group"
          >
            <span>Hacé tu pedido por WhatsApp</span>
            <svg className="w-5 h-5 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
              <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 1.99.53 3.84 1.45 5.42L2 22l4.63-1.2a9.94 9.94 0 0 0 5.41 1.48c5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.48 14.36c-.25.7-1.46 1.33-2.02 1.42-.53.1-1.19.14-3.04-.41-2.52-.72-4.14-2.61-4.6-3.06-.46-.45-1.85-1.98-2.06-3.16-.21-1.18-.14-1.73.09-1.94.24-.22.53-.29.82-.29.27 0 .54.01.78.02.25.02.58-.09.9.68.32.76 1.09 2.6 1.19 2.8.1.21.17.46.02.73-.15.27-.22.45-.44.71-.22.27-.46.58-.21.99.25.41 1.11 1.82 2.38 3 1.64 1.53 3.01 1.86 3.45 1.99.44.13.7.11.96-.06.26-.17 1.04-.38 1.18-.47.14-.09.39-.18.55-.35.16-.17.34-.41.48-.67.14-.26.28-.45.46-.48.18-.02.59-.02.88-.02.29 0 .77-.11 1.01.52.24.63.24 1.33-.01 2.02z" />
            </svg>
          </a>

          <a
            href="#proceso"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-white text-white font-medium text-base px-7 py-4 rounded-full transition-all bg-[#1c140e]/50 backdrop-blur-sm"
          >
            <span>Conocé el Proceso</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#5c4028] text-xs tracking-widest uppercase font-semibold">
        <span>Descubrí más</span>
        <div className="w-5 h-8 border-2 border-[#5c4028]/60 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#5c4028] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
