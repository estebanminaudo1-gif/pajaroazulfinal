"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ images }: { images: { id: string; src: string; alt?: string }[] }) {
  const [open, setOpen] = useState<{ src: string; alt?: string } | null>(null);

  return (
    <section id="galeria" className="container mx-auto px-6 lg:px-20 py-12">
      <h2 className="font-serif text-3xl text-amber-50 mb-6">Galería</h2>

      <div className="gallery-columns">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setOpen({ src: img.src, alt: img.alt })}
            className="block mb-4 w-full overflow-hidden rounded-md focus:outline-none"
            aria-label={`Abrir imagen ${img.alt || img.id}`}
          >
            <div className="relative w-full h-52">
              <Image src={img.src} alt={img.alt || ''} fill style={{ objectFit: 'cover' }} />
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-6" role="dialog" aria-modal="true">
          <button className="absolute right-6 top-6 text-white text-2xl" onClick={() => setOpen(null)} aria-label="Cerrar">
            ×
          </button>
          <div className="max-w-4xl w-full max-h-[90vh]">
            <div className="relative w-full h-[70vh] rounded-md overflow-hidden">
              <Image src={open.src} alt={open.alt || ''} fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-columns {
          column-count: 2;
          column-gap: 1rem;
        }
        @media(min-width: 768px) {
          .gallery-columns { column-count: 3; }
        }
        @media(min-width: 1024px) {
          .gallery-columns { column-count: 4; }
        }
        .gallery-columns > * { break-inside: avoid; }
      `}</style>
    </section>
  );
}
