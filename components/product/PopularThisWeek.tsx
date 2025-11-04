"use client";

import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";

interface PopularThisWeekProps {
  products: Product[];
}

export default function PopularThisWeek({ products }: PopularThisWeekProps) {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl  md:text-2xl font-bold text-gray-900">
          Popular This Week
        </h2>
        <a href="#" className="text-sm text-gray-500 hover:text-black">
          View All
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
