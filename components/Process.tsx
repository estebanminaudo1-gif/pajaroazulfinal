"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Selección de Origen",
    desc: "Contamos con proveedores certificados que garantizan la calidad y sanidad de nuestro producto desde el inicio.",
  },
  {
    number: "02",
    title: "Curado Natural",
    desc: "Sin acelerantes ni aditivos. Solo sal marina y nuestra mezcla seleccionada de especias.",
  },
  {
    number: "03",
    title: "Maduración Lenta",
    desc: "Respetamos la maduración natural e individual de cada pieza para lograr el sabor y aroma que la caracteriza.",
  },
  {
    number: "04",
    title: "Seguimiento Artesanal",
    desc: "Realizamos un seguimiento de la evolución de cada pieza para asegurar que cumple con nuestros estándares.",
  },
  {
    number: "05",
    title: "Sello de Garantía Familiar",
    desc: "Cuando la pieza alcanza el sabor y aroma que nos caracteriza, es etiquetada con el sello familiar de Pájaro Azul y está lista para que puedas compartirla en tu mesa.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#F4EBE1] relative overflow-hidden border-t border-[#e2d5c5]">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8c6239] font-bold">
            Oficio y Paciencia
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C221E] mt-3">
            Cómo hacemos nuestra bondiola
          </h2>
          <p className="text-base text-[#4a3b32] font-sans font-light mt-4">
            Un proceso artesanal libre de acelerantes, donde el tiempo y el cuidado individual le dan su carácter distintivo.
          </p>
        </div>

        {/* 5 Steps timeline cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-white border border-[#e2d5c5] rounded-xl p-6 hover:border-[#1e40af] transition-all hover:-translate-y-1 flex flex-col justify-between shadow-md hover:shadow-xl"
            >
              <div>
                <span className="font-serif text-4xl font-bold text-[#1e40af] mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-semibold text-[#2C221E] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#4a3b32] font-sans">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e2d5c5] flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#8c6239] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e40af]" />
                <span>Paso {idx + 1} de 5</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-16 bg-white border-2 border-[#1e40af]/30 rounded-2xl p-8 max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold text-[#2C221E]">
              ¿Querés probar el sabor de una verdadera bondiola artesanal?
            </h4>
            <p className="text-sm text-[#4a3b32] mt-1">
              Consultanos disponibilidad directa por WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/5492236689837?text=Hola!%20Quisiera%20consultar%20por%20pedidos%20de%20bondiola."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1e40af] hover:bg-[#1d4ed8] text-white px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all whitespace-nowrap shadow-lg shadow-[#1e40af]/30"
          >
            <span>Pedir por WhatsApp</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 1.99.53 3.84 1.45 5.42L2 22l4.63-1.2a9.94 9.94 0 0 0 5.41 1.48c5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.48 14.36c-.25.7-1.46 1.33-2.02 1.42-.53.1-1.19.14-3.04-.41-2.52-.72-4.14-2.61-4.6-3.06-.46-.45-1.85-1.98-2.06-3.16-.21-1.18-.14-1.73.09-1.94.24-.22.53-.29.82-.29.27 0 .54.01.78.02.25.02.58-.09.9.68.32.76 1.09 2.6 1.19 2.8.1.21.17.46.02.73-.15.27-.22.45-.44.71-.22.27-.46.58-.21.99.25.41 1.11 1.82 2.38 3 1.64 1.53 3.01 1.86 3.45 1.99.44.13.7.11.96-.06.26-.17 1.04-.38 1.18-.47.14-.09.39-.18.55-.35.16-.17.34-.41.48-.67.14-.26.28-.45.46-.48.18-.02.59-.02.88-.02.29 0 .77-.11 1.01.52.24.63.24 1.33-.01 2.02z" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
