"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination() {
  const pageBtn =
    "w-9 h-9 flex items-center justify-center border rounded-md text-sm text-gray-700 hover:bg-gray-50";

  return (
    <nav className="mt-6 flex justify-center items-center gap-2">
      <button className={pageBtn} aria-label="Previous page">
        <FiChevronLeft />
      </button>
      <button className={`${pageBtn} bg-black text-white border-black`}>
        1
      </button>
      <button className={pageBtn}>2</button>
      <button className={pageBtn}>3</button>
      <span className="px-2 text-gray-500">...</span>
      <button className={pageBtn}>19</button>
      <button className={pageBtn} aria-label="Next page">
        <FiChevronRight />
      </button>
    </nav>
  );
}
