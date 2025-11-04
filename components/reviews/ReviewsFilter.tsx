"use client";

import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewsFilter() {
  const [openRating, setOpenRating] = useState(true);
  const [openTopics, setOpenTopics] = useState(true);

  return (
    <aside className="w-full md:w-64 border border-gray-200 rounded-lg p-4 h-fit">
      <h3 className="font-bold text-gray-900">Reviews Filter</h3>

      {/* Rating */}

      <button
        onClick={() => setOpenRating((v) => !v)}
        className="mt-4 w-full flex items-center justify-between text-sm text-gray-700"
      >
        <span className="font-bold">Rating</span>
        <FiChevronDown
          className={`transition ${openRating ? "rotate-180" : ""}`}
        />
      </button>
      {openRating && (
        <ul className="mt-3 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <li key={star} className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-black" />
              <div className="flex items-center gap-1">
                <span>{star}</span>
                <FaStar className="text-orange-400" />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Topics */}

      <button
        onClick={() => setOpenTopics((v) => !v)}
        className="mt-6 w-full flex items-center justify-between text-sm text-gray-700"
      >
        <span className="font-bold">Review Topics</span>
        <FiChevronDown
          className={`transition ${openTopics ? "rotate-180" : ""}`}
        />
      </button>
      {openTopics && (
        <ul className="mt-3 space-y-2 text-sm font-medium text-[#818B9C]">
          {[
            "Product Quality",
            "Seller Services",
            "Product Price",
            "Shipment",
            "Match with Description",
          ].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
