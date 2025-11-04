"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
  FiUpload,
} from "react-icons/fi";

export default function ProductHero() {
  const thumbnails = [
    "/images/product-thumb-1.png",
    "/images/product-thumb-2.png",
    "/images/product-thumb-3.png",
    "/images/product-thumb-4.png",
  ];

  const [activeImage, setActiveImage] = useState(thumbnails[0]);
  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("8");

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8">
      {/* Breadcrumb */}

      <div className="text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:text-black">Homepage</span> &gt;{" "}
        <span className="cursor-pointer hover:text-black">Women</span> &gt;{" "}
        <span className="cursor-pointer hover:text-black">
          Women&apos;s Shirts & Tops
        </span>{" "}
        &gt;{" "}
        <span className="text-black font-medium">
          Long Sleeve Overshirt, Khaki, 6
        </span>
      </div>

      {/* Main layout */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-start">
        {/* LEFT: Image gallery */}

        <div className="flex flex-col gap-4 w-full">
          {/* Image wrapper */}

          <div
            className="relative mx-auto bg-[#F2F2F2] rounded-lg py-6 flex items-center justify-center max-h-[520px] 
     w-full max-w-[420px] sm:max-w-[500px] md:max-w-[520px]"
          >
            <Image
              src={activeImage}
              alt="Main Product"
              width={450}
              height={600}
              className="object-contain h-auto max-h-[480px]"
            />

            {/* Right-side icons */}

            <div className="absolute top-6 right-0 md:-right-12 flex flex-col gap-3">
              <button className="bg-[#F2F2F2] p-2 cursor-pointer rounded-md   shadow-sm hover:bg-gray-100 transition">
                <FiUpload size={18} />
              </button>
              <button className="bg-[#F2F2F2] p-2 cursor-pointer rounded-md   shadow-sm hover:bg-gray-100 transition">
                <FiHeart size={18} />
              </button>
            </div>

            {/* Navigation arrows */}

            <div className="absolute bottom-6 right-0 md:-right-12 flex flex-col gap-3">
              <button className="bg-[#F2F2F2] p-2 cursor-pointer rounded-md   shadow-sm hover:bg-gray-100 transition">
                <FiChevronLeft size={18} />
              </button>
              <button className="bg-[#F2F2F2] p-2 cursor-pointer rounded-md   shadow-sm hover:bg-gray-100 transition">
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal thumbnails */}

          <div className="flex gap-3 justify-center">
            {thumbnails.map((thumb, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(thumb)}
                className={`border rounded-md cursor-pointer p-1 transition bg-[#F2F2F2] ${
                  activeImage === thumb ? "border-black" : "border-gray-300"
                }`}
              >
                <Image
                  src={thumb}
                  alt={`Thumb ${i + 1}`}
                  width={75}
                  height={75}
                  className="object-cover rounded-md"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Product details */}

        <div className="self-start">
          <p className="text-sm text-gray-500">John Lewis ANYDAY</p>

          <h1 className="text-[26px] md:text-[32px] font-bold text-gray-900 leading-snug">
            Long Sleeve Overshirt, Khaki, 6
          </h1>

          {/* Price and Rating  */}

          <div className="flex items-center justify-between mt-4">
            {/* Left Section: Price + Sold */}

            <div className="flex items-center gap-4">
              <span className="line-through text-gray-400">£40.00</span>
              <span className="text-2xl font-semibold text-black">£28.00</span>
            </div>

            {/* Right Section: Rating */}

            <div className="flex items-center gap-1 text-base">
              <span className="text-gray-500 mr-2">1,238 Sold</span>
              <FaStar className="text-yellow-500" />
              <span className="font-bold">4.5</span>
            </div>
          </div>

          {/* Divider line under title */}

          <div className="w-full border-b border-dashed border-gray-300 my-4"></div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-1xl font-bold text-gray-900 mb-2">
              Description:
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Boba etium ut bulla tea est potus dilectus singulari compositiones
              saporum et textuum, quae in Taiwan annis 1980 orta sunt Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsa debitis
              tempore veritatis dignissimos inventore, distinctio ullam at
              eveniet ex nesciunt!.{" "}
              <span className="text-black font-medium cursor-pointer">
                See More...
              </span>
            </p>
          </div>

          {/* Color Selection */}

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-900 mb-2">
              Color: <span className="font-bold">Royal Brown</span>
            </p>
            <div className="flex gap-3">
              {[
                { id: "brown", color: "#5a4b32" },
                { id: "gray", color: "#e2e2e2" },
                { id: "blue", color: "#9db4d3" },
                { id: "navy", color: "#0d1b2a" },
              ].map(({ id, color }) => (
                <button
                  key={id}
                  onClick={() => setSelectedColor(id)}
                  className={`cursor-pointer w-15 h-8 rounded-md flex items-center justify-center transition 
          ${
            selectedColor === id
              ? "border-2 border-black p-[3px] bg-white"
              : "border border-gray-300"
          }`}
                >
                  <span
                    style={{ backgroundColor: color }}
                    className="w-full h-full rounded-md"
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-900">
                Size: <span className="font-bold">{selectedSize}</span>
              </p>
              <button className="text-sm text-gray-500 hover:text-black underline">
                View Size Chart
              </button>
            </div>
            <div className="flex gap-3 mt-3 flex-wrap">
              {["6", "8", "10", "14", "18", "20"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`cursor-pointer w-10 h-10 rounded-md flex items-center justify-center transition border ${
                    selectedSize === size
                      ? "border-black bg-[#EBEBEB] font-bold"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}

          <div className="mt-8 mb-5 md:flex gap-4 w-full">
            <button className="bg-black text-white mb-4 md:mb-0 w-[60%]  md:w-full px-6 py-3 rounded-md hover:bg-gray-800 transition cursor-pointer">
              Add To Cart
            </button>
            <button className="border md:w-full cursor-pointer border-[#B8B8B8] text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
              Checkout Now
            </button>
          </div>

          {/* Delivery T&C */}
          <div className="mt-4 text-sm text-gray-500 hover:text-black underline cursor-pointer">
            Delivery T&C
          </div>
        </div>
      </div>
    </section>
  );
}
