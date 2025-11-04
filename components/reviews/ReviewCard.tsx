"use client";

import { useState } from "react";
import Image from "next/image";
import { FiStar, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import type { ReviewItem } from "../../types/reviewItem";

interface Props {
  review: ReviewItem;
}

export default function ReviewCard({ review }: Props) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(review.likes);
  const [dislikesCount, setDislikesCount] = useState(review.dislikes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
      if (disliked) {
        setDisliked(false);
        setDislikesCount((prev) => prev - 1);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikesCount((prev) => prev - 1);
    } else {
      setDisliked(true);
      setDislikesCount((prev) => prev + 1);
      if (liked) {
        setLiked(false);
        setLikesCount((prev) => prev - 1);
      }
    }
  };

  return (
    <article className="py-6 border-b border-dashed">
      {/* Stars */}
      <div className="flex items-center gap-1 text-orange-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={18}
            className={i < review.rating ? "text-orange-400" : "text-gray-300"}
            fill={i < review.rating ? "#f59e0b" : "none"}
          />
        ))}
      </div>

      {/* Title & timestamp */}

      <h4 className="mt-2 font-bold text-gray-900">{review.title}</h4>
      <p className="text-xs text-gray-500 mt-1">{review.createdAt}</p>

      {/* User Info */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 mt-3">
          <Image
            src={review.avatar}
            alt={review.userName}
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">
            {review.userName}
          </span>
        </div>

        {/* Like / Dislike Buttons */}

        <div className="mt-4 flex items-center gap-3">
          {/* Like Button */}

          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-1 text-sm rounded-md border transition ${
              liked
                ? "bg-black text-white border-black"
                : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <FiThumbsUp size={16} />
            <span>{likesCount}</span>
          </button>

          {/* Dislike Button */}
          <button
            onClick={handleDislike}
            className={`flex items-center gap-2 px-3 py-1 text-sm rounded-md border transition ${
              disliked
                ? "bg-black text-white border-black"
                : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <FiThumbsDown size={16} />
            <span>{dislikesCount}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
