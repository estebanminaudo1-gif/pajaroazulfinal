"use client";

import React from 'react';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  description: string;
  weight?: string;
  price?: string;
  image: string;
};

export default function ProductCard({ product, onConsult }: { product: Product; onConsult?: (id: string) => void }) {
  return (
    <article className="bg-white/5 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      <div className="relative w-full h-56">
        <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} className="" />
      </div>

      <div className="p-4">
        <h3 className="font-serif text-xl text-amber-50 mb-1">{product.name}</h3>
        <p className="text-sm text-amber-100/85 mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-amber-200">
            {product.weight && <span className="mr-2">{product.weight}</span>}
            {product.price && <span className="font-semibold">{product.price}</span>}
          </div>
          <button
            onClick={() => onConsult?.(product.id)}
            className="ml-4 bg-amber-600 hover:bg-amber-500 text-white px-3 py-2 rounded-md text-sm transition"
          >
            Consultar
          </button>
        </div>
      </div>
    </article>
  );
}
