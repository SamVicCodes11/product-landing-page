import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";

interface RelatedProductsProps {
  title?: string;
  products: Product[];
  showViewAll?: boolean;
}

export default function RelatedProducts({
  title = "Related Products",
  products,
  showViewAll = true,
}: RelatedProductsProps) {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        {showViewAll && (
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-black underline"
          >
            View All
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
