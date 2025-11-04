"use client";

interface Props {
  active?: "all" | "media" | "desc";
}

export default function ReviewTabs({ active = "all" }: Props) {
  const base = "px-3 py-1 text-sm rounded-md border transition";
  const activeCls = "bg-[#EBEBEB] text-[#141414] border-black";
  const ghost = "bg-white text-gray-700 border-gray-200 hover:border-gray-300";

  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-4">Review Lists</h3>

      <div className="flex items-center gap-2">
        <button className={`${base} ${active === "all" ? activeCls : ghost}`}>
          All Reviews
        </button>
        <button className={`${base} ${active === "media" ? activeCls : ghost}`}>
          With Photo & Video
        </button>
        <button className={`${base} ${active === "desc" ? activeCls : ghost}`}>
          With Description
        </button>
      </div>
    </div>
  );
}
