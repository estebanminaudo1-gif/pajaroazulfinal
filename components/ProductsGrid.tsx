import React from 'react';
import ProductCard from './ProductCard';

type Product = {
  id: string;
  name: string;
  description: string;
  weight?: string;
  price?: string;
  image: string;
};

export default function ProductsGrid({ products, onConsult }: { products: Product[]; onConsult?: (id: string) => void }) {
  return (
    <section id="productos" className="container mx-auto px-6 lg:px-20 py-12">
      <h2 className="font-serif text-3xl text-amber-50 mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onConsult={onConsult} />
        ))}
      </div>
    </section>
  );
}
