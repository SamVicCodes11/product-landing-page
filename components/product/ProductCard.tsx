"use client";

import Image from "next/image";
import type { Product } from "../../types/product";
import { FaStar } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full h-64 object-cover rounded-md"
      />

      <p className="mt-3 text-sm font-extrabold text-[#292929]">{product.brand}</p>

      <p className="text-lg font-extrabold mt-1">£{product.price}</p>

      <h3 className="text-sm font-medium text-[#7A7A7A]">{product.title}</h3>

      {product.description && (
        <p className="text-sm text-[#7A7A7A] mt-1">{product.description}</p>
      )}

      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
        <FaStar className="text-yellow-500" />
        <span>{product.rating}</span>
        <span>· {product.sold} Sold</span>
      </div>
    </div>
  );
}
