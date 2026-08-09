"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nuestra Bondiola", href: "#producto" },
    { name: "El Proceso", href: "#proceso" },
    { name: "Nuestra Historia", href: "#historia" },
  ];

  const whatsappUrl = "https://wa.me/5492236689837?text=" + encodeURIComponent("Hola! Quisiera consultar sobre la bondiola artesanal de Pájaro Azul.");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#e2d5c5] py-2 shadow-md text-[#2C221E]"
          : "bg-gradient-to-b from-[#1c140e]/70 via-[#1c140e]/30 to-transparent py-4 text-white"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1 border-2 border-[#1e40af] shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <Image
              src="/images/bird-logo-exact.png"
              alt="Logo Pájaro Azul"
              width={48}
              height={48}
              className="object-contain w-full h-full mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-rye tracking-wider text-xl md:text-2xl transition-colors ${
              scrolled ? "text-[#1e40af] group-hover:text-[#1d4ed8]" : "text-white drop-shadow"
            }`}>
              Pájaro Azul
            </span>
            <span className={`text-[9px] tracking-[0.2em] uppercase font-sans font-semibold -mt-1 ${
              scrolled ? "text-[#8c6239]" : "text-[#d4af37]"
            }`}>
              Bondiola Artesanal
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1e40af] hover:after:w-full after:transition-all ${
                scrolled ? "text-[#3c2d24] hover:text-[#1e40af]" : "text-white hover:text-[#d4af37]"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg shadow-[#1e40af]/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Consultar</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 1.99.53 3.84 1.45 5.42L2 22l4.63-1.2a9.94 9.94 0 0 0 5.41 1.48c5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.48 14.36c-.25.7-1.46 1.33-2.02 1.42-.53.1-1.19.14-3.04-.41-2.52-.72-4.14-2.61-4.6-3.06-.46-.45-1.85-1.98-2.06-3.16-.21-1.18-.14-1.73.09-1.94.24-.22.53-.29.82-.29.27 0 .54.01.78.02.25.02.58-.09.9.68.32.76 1.09 2.6 1.19 2.8.1.21.17.46.02.73-.15.27-.22.45-.44.71-.22.27-.46.58-.21.99.25.41 1.11 1.82 2.38 3 1.64 1.53 3.01 1.86 3.45 1.99.44.13.7.11.96-.06.26-.17 1.04-.38 1.18-.47.14-.09.39-.18.55-.35.16-.17.34-.41.48-.67.14-.26.28-.45.46-.48.18-.02.59-.02.88-.02.29 0 .77-.11 1.01.52.24.63.24 1.33-.01 2.02z" />
            </svg>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none ${scrolled ? "text-[#2C221E]" : "text-white"}`}
          aria-label="Abrir menú de navegación"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#e2d5c5] px-6 py-6 space-y-4 text-[#2C221E] transition-all">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#2C221E] hover:text-[#1e40af]"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#1e40af] text-white py-3 rounded-xl font-semibold uppercase text-xs tracking-wider"
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
