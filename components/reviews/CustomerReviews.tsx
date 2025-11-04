"use client";

import ReviewsFilter from "./ReviewsFilter";
import ReviewTabs from "./ReviewTabs";
import ReviewCard from "./ReviewCard";
import Pagination from "./Pagination";
import { FiFilter } from "react-icons/fi";
import type { ReviewItem } from "../../types/reviewItem";

const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    userName: "Darrell Steward",
    avatar: "/images/avatars/user1.png",
    rating: 5,
    title: "This is amazing product I have.",
    content:
      "Quality is great and delivery was quick. Fits perfectly and the material feels premium.",
    createdAt: "July 2, 2020 03:29 PM",
    likes: 128,
    dislikes: 6,
  },
  {
    id: 2,
    userName: "Darlene Robertson",
    avatar: "/images/avatars/user2.png",
    rating: 5,
    title: "This is amazing product I have.",
    createdAt: "July 2, 2020 1:04 PM",
    likes: 82,
    dislikes: 2,
  },
  {
    id: 3,
    userName: "Kathryn Murphy",
    avatar: "/images/avatars/user3.png",
    rating: 5,
    title: "This is amazing product I have.",
    createdAt: "June 26, 2020 10:03 PM",
    likes: 9,
    dislikes: 0,
  },
  {
    id: 4,
    userName: "Ronald Richards",
    avatar: "/images/avatars/user4.png",
    rating: 5,
    title: "This is amazing product I have.",
    createdAt: "July 7, 2020 10:14 AM",
    likes: 124,
    dislikes: 3,
  },
];

export default function CustomerReviews() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8">
        {/*  LEFT - Reviews Filter ( */}
        <div className="hidden md:block">
          <ReviewsFilter />
        </div>

        {/*  RIGHT - Review List Section */}
        <div>
          <div className="flex items-center justify-between">
            <ReviewTabs active="all" />

            {/*  Mobile Filter Icon */}
            <button className="md:hidden p-2 border rounded-md">
              <FiFilter size={18} className="text-gray-700" />
            </button>
          </div>

          {/* Review Cards */}
          <div className="mt-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </section>
  );
}
