import ProductHero from "@/components/product/ProductHero";

import RelatedProducts from "../components/product/RelatedProducts";
import type { Product } from "../types/product";

import ProductReviewSummary from "../components/product/ProductReviewSummary";
import type { ReviewSummary } from "../types/review";

import CustomerReviews from "../components/reviews/CustomerReviews";

import PopularThisWeek from "../components/product/PopularThisWeek";

const reviewsData: ReviewSummary = {
  averageRating: 4.5,
  totalReviews: 1250,
  breakdown: {
    5: 2823,
    4: 923,
    3: 423,
    2: 0,
    1: 0,
  },
};

const sampleProducts: Product[] = [
  {
    id: 1,
    brand: "Whistle",
    title: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    image: "/images/related1.png",
    rating: 4.8,
    sold: 1238,
  },
  {
    id: 2,
    brand: "John Lewis ANYDAY",
    title: "Long Sleeve Utility Shirt, Navy",
    price: 26,
    image: "/images/related2.png",
    rating: 4.8,
    sold: 1238,
  },
  {
    id: 3,
    brand: "John Lewis ANYDAY",
    title: "Stripe Curved Hem Shirt, Blue",
    price: 32,
    image: "/images/related3.png",
    rating: 4.5,
    sold: 620,
  },
  {
    id: 4,
    brand: "John Lewis ANYDAY",
    title: "Denim Overshirt, Mid Wash",
    price: 40,
    image: "/images/related4.png",
    rating: 4.6,
    sold: 238,
  },
  {
    id: 5,
    brand: "John Lewis",
    title: "Linen Blazer, Navy",
    price: 79,
    image: "/images/related5.png",
    rating: 4.8,
    sold: 1238,
  },
];

export default function Home() {
  return (
    <main>
      <ProductHero />

      <RelatedProducts products={sampleProducts} />

      <ProductReviewSummary data={reviewsData} />

      <CustomerReviews />

      <PopularThisWeek products={sampleProducts} />
    </main>
  );
}
