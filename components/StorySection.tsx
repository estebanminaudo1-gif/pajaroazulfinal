"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="historia" className="relative py-24 bg-[#FAF6F0] overflow-hidden border-t border-[#e2d5c5]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Card replicating reference label 2.png */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-white border-2 border-[#1e40af] rounded-2xl p-8 sm:p-12 shadow-xl relative"
          >
            {/* Fine vintage border accents */}
            <div className="absolute inset-3 border border-[#d4af37]/50 rounded-xl pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-6">
              {/* Header Icon ornament */}
              <div className="flex justify-center items-center gap-3">
                <span className="h-[1px] w-12 bg-[#1e40af]/60" />
                <span className="text-[#1e40af] text-xl">❖</span>
                <span className="h-[1px] w-12 bg-[#1e40af]/60" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e40af] tracking-wide">
                Bondiola Artesanal Curada
              </h2>

              <p className="font-serif italic text-sm text-[#8c6239] uppercase tracking-wider font-semibold">
                HAY SABORES QUE SOBREVIVEN AL PASO DE LOS AÑOS.
              </p>

              <div className="text-xs sm:text-sm text-[#3c2d24] font-sans leading-relaxed space-y-4 text-justify sm:text-center">
                <p>
                  SABORES QUE HABITAN EN CUADERNOS DE HOJAS AMARILLENTAS, EN GALPONES PERFUMADOS POR LA SAL Y LAS ESPECIAS, EN EL RECUERDO DE QUIENES APRENDIERON QUE LAS COSAS BUENAS NO SE APURAN.
                </p>
                <p>
                  EN LA FINCA <strong className="font-rye text-[#1e40af] font-normal text-base">PÁJARO AZUL</strong> UBICADA EN LAS SECAS TIERRAS DE MENDOZA, AL PIE DE LA CORDILLERA, NACIÓ HACE GENERACIONES UN OFICIO SILENCIOSO: EL ARTE DE ESPERAR.. ESPERAR QUE EL AIRE HAGA SU TRABAJO, QUE EL TIEMPO DEJE SU HUELLA Y QUE CADA PIEZA ALCANCE, LENTAMENTE, SU MEJOR EXPRESIÓN.
                </p>
                <p>
                  MUCHOS AÑOS DESPUÉS, ESE LEGADO EMPRENDIÓ SU VIAJE HASTA MAR DEL PLATA.
                </p>
                <p>
                  EN PÁJARO AZUL VOLVEMOS A ENCENDER ESA VIEJA LLAMA. RESCATAMOS UNA TRADICIÓN QUE PARECÍA DORMIDA ENTRE RECUERDOS Y LA LLEVAMOS NUEVAMENTE A LA MESA, RESPETANDO CADA PASO, CADA PAUSA Y CADA ENSEÑANZA HEREDADA.
                </p>
                <p className="italic text-[#8c6239] font-medium">
                  PORQUE UNA BONDIOLA ARTESANAL NO SE FABRICA. SE CURA CON PACIENCIA, SE CUIDA CON RESPETO, Y SE COMPARTE CON ORGULLO.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e40af]/30">
                <h3 className="font-rye text-3xl text-[#1e40af]">
                  Pájaro Azul
                </h3>
                <p className="text-xs text-[#8c6239] tracking-widest uppercase mt-1 font-semibold">
                  Donde el tiempo vuelve a tener sabor
                </p>
              </div>

              <div className="flex justify-center items-center gap-3 pt-2">
                <span className="h-[1px] w-12 bg-[#1e40af]/60" />
                <span className="text-[#1e40af] text-xl">❖</span>
                <span className="h-[1px] w-12 bg-[#1e40af]/60" />
              </div>
            </div>
          </motion.div>

          {/* Right column: Editorial imagery of history & atmosphere */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8c6239] font-bold">
                Nuestra Identidad
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C221E] mt-2">
                Tradición familiar del campo argentino
              </h2>
            </div>

            <p className="text-base text-[#4a3b32] font-sans leading-relaxed">
              En Pájaro Azul entendemos la chacinería como un oficio de nobleza y paciencia. Cada pieza recibe una dedicación artesanal única, sin apurar el proceso y respetando el ambiente de maduración natural al aire de estancia.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="relative h-64 rounded-xl overflow-hidden border border-[#e2d5c5] shadow-md group">
                <Image
                  src="/images/bondiola_board_platter_1786229016216.jpg"
                  alt="Tabla servida para compartir en el campo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-serif text-white font-semibold">
                  Para compartir en la mesa
                </span>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden border border-[#e2d5c5] shadow-md group">
                <Image
                  src="/images/bondiola_macro_slices_1786229039438.jpg"
                  alt="Detalle de vetas de bondiola curada"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-serif text-white font-semibold">
                  Sabor e intensidad única
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
