"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: "pieza-entera",
    title: "Bondiola Entera Curada",
    subtitle: "Pieza individual con red tradicional",
    description: "Ideal para conservar y cortar a gusto. Curada pacientemente con sal marina y especias, con su red y etiqueta artesanal.",
    image: "/images/bondiola_whole_piece_1786228992583.jpg",
    alt: "Pieza entera de bondiola artesanal Pájaro Azul",
  },
  {
    id: "fetas-seleccion",
    title: "Vetas y Fetas de Bondiola",
    subtitle: "Corte fino de sabor concentrado",
    description: "Fetas con el marmolado justo entre magro y grasa natural. Textura suave, aroma intenso y equilibrio en boca.",
    image: "/images/bondiola_macro_slices_1786229039438.jpg",
    alt: "Fetas de bondiola curada artesanal",
  },
  {
    id: "presentacion-picada",
    title: "Presentación para la Mesa",
    subtitle: "Para compartir en momentos especiales",
    description: "Acompañamiento perfecto para pan artesanal, quesos de campo y buenos momentos familiares.",
    image: "/images/bondiola_board_platter_1786229016216.jpg",
    alt: "Tabla de bondiola para compartir en familia",
  },
];

export default function ProductSection() {
  const whatsappUrl = "https://wa.me/5492236689837?text=" + encodeURIComponent("Hola! Quisiera consultar sobre la disponibilidad y pedidos de bondiola Pájaro Azul.");

  return (
    <section id="producto" className="py-24 bg-[#FAF6F0] relative border-t border-[#e2d5c5]">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8c6239] font-bold">
            Calidad Premium Artesanal
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C221E] mt-3">
            Nuestra Bondiola
          </h2>
          <p className="text-base text-[#4a3b32] font-sans font-light mt-4">
            Fotografía real de nuestro producto. Piezas cuidadas una a una para lograr una experiencia gastronómica única.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white border border-[#e2d5c5] rounded-2xl overflow-hidden hover:border-[#1e40af] transition-all duration-300 group shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Product Photo */}
                <div className="relative h-72 w-full overflow-hidden bg-[#f4ebe1]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 bg-[#1e40af] text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-md">
                    Artesanal
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#2C221E] group-hover:text-[#1e40af] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#8c6239] font-semibold">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#4a3b32] font-sans leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f4ebe1] hover:bg-[#1e40af] text-[#2C221E] hover:text-white border border-[#e2d5c5] hover:border-[#1e40af] py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  <span>Consultar por WhatsApp</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 1.99.53 3.84 1.45 5.42L2 22l4.63-1.2a9.94 9.94 0 0 0 5.41 1.48c5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.48 14.36c-.25.7-1.46 1.33-2.02 1.42-.53.1-1.19.14-3.04-.41-2.52-.72-4.14-2.61-4.6-3.06-.46-.45-1.85-1.98-2.06-3.16-.21-1.18-.14-1.73.09-1.94.24-.22.53-.29.82-.29.27 0 .54.01.78.02.25.02.58-.09.9.68.32.76 1.09 2.6 1.19 2.8.1.21.17.46.02.73-.15.27-.22.45-.44.71-.22.27-.46.58-.21.99.25.41 1.11 1.82 2.38 3 1.64 1.53 3.01 1.86 3.45 1.99.44.13.7.11.96-.06.26-.17 1.04-.38 1.18-.47.14-.09.39-.18.55-.35.16-.17.34-.41.48-.67.14-.26.28-.45.46-.48.18-.02.59-.02.88-.02.29 0 .77-.11 1.01.52.24.63.24 1.33-.01 2.02z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
