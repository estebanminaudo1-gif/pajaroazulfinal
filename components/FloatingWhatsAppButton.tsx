"use client";

import React from "react";

type Props = {
  phone?: string;
  message?: string;
};

export default function FloatingWhatsAppButton({
  phone = "5492236689837",
  message = "Hola! Quisiera consultar sobre la bondiola artesanal Pájaro Azul.",
}: Props) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-6 bottom-6 z-50 animate-bounce-subtle">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Pájaro Azul al +54 9 2236 68-9837"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 md:px-5 md:py-3.5 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative"
      >
        <div className="relative flex items-center justify-center">
          <svg className="w-6 h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 1.99.53 3.84 1.45 5.42L2 22l4.63-1.2a9.94 9.94 0 0 0 5.41 1.48c5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.48 14.36c-.25.7-1.46 1.33-2.02 1.42-.53.1-1.19.14-3.04-.41-2.52-.72-4.14-2.61-4.6-3.06-.46-.45-1.85-1.98-2.06-3.16-.21-1.18-.14-1.73.09-1.94.24-.22.53-.29.82-.29.27 0 .54.01.78.02.25.02.58-.09.9.68.32.76 1.09 2.6 1.19 2.8.1.21.17.46.02.73-.15.27-.22.45-.44.71-.22.27-.46.58-.21.99.25.41 1.11 1.82 2.38 3 1.64 1.53 3.01 1.86 3.45 1.99.44.13.7.11.96-.06.26-.17 1.04-.38 1.18-.47.14-.09.39-.18.55-.35.16-.17.34-.41.48-.67.14-.26.28-.45.46-.48.18-.02.59-.02.88-.02.29 0 .77-.11 1.01.52.24.63.24 1.33-.01 2.02z" />
          </svg>
        </div>

        <span className="hidden sm:inline font-sans text-xs md:text-sm font-bold tracking-wide uppercase">
          Hacé tu pedido
        </span>

        {/* Soft pulse glow ring */}
        <span className="absolute -inset-1 rounded-full bg-green-500/30 animate-ping pointer-events-none -z-10" />
      </a>
    </div>
  );
}
