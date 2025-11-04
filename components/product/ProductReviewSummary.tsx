"use client";

import { FaStar } from "react-icons/fa";
import type { ReviewSummary } from "../../types/review";

interface Props {
  data: ReviewSummary;
}

export default function ProductReviewSummary({ data }: Props) {
  const totalReviews = data.totalReviews;
  const breakdown = data.breakdown;
  const totalCount = Object.values(breakdown).reduce(
    (sum, num) => sum + num,
    0
  );

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10">
      {/* Title */}

      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
        Product Reviews
      </h2>

      {/* Main Box */}

      <div className="border border-dashed border-gray-300 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Left: Rating Summary */}

        <div className="flex items-center gap-6 w-full md:w-1/3">
          {/* Circular Rating */}

          <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
            {/* Orange circle */}

            <div className="absolute inset-0 rounded-full border-[3px] md:border-4 border-orange-400"></div>
            {/* Gray progress gap */}

            <div className="absolute inset-0 rounded-full border-[3px] md:border-4 border-gray-200 border-t-transparent rotate-[-45deg]"></div>
            {/* Rating number */}

            <span className="text-lg md:text-2xl font-bold text-gray-900">
              {data.averageRating.toFixed(1)}
            </span>
          </div>

          {/* Stars & text */}

          <div className="flex flex-col items-center md:items-start">
            {/* Stars */}

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={20}
                  className={
                    i < Math.round(data.averageRating)
                      ? "text-orange-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            {/* Review count text */}

            <p className="text-sm text-gray-600 mt-1">
              from{" "}
              {totalReviews >= 1000
                ? `${(totalReviews / 1000).toFixed(1)}k`
                : totalReviews}{" "}
              reviews
            </p>
          </div>
        </div>

        {/* Right: Breakdown */}

        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = breakdown[star as keyof typeof breakdown] || 0;

            const percentage = totalCount ? (count / totalCount) * 100 : 0;

            return (
              <div key={star} className="flex items-center gap-3 mb-4">
                {/* Star Label */}

                <span className="text-sm font-medium text-gray-800 w-10 flex items-center">
                  {star}.0 <FaStar className="text-orange-400 ml-1" size={14} />
                </span>

                {/* Progress Bar */}

                <div className="flex-1 h-[6px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-900 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                {/* Count */}

                <span className="text-sm text-gray-800 font-medium w-10 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
