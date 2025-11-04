"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX,
  FiGrid,
  FiHelpCircle,
} from "react-icons/fi";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const [selectedCategory, setSelectedCategory] =
    useState<string>("Categories");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <header className="w-full border-b border-gray-200 relative z-50">
      {/* Top Promo Bar */}
      <div className="w-full bg-[#141414] text-white text-sm py-2 text-center flex items-center justify-center gap-1 md:gap-2 px-4 font-medium">
        <p className="leading-tight">
          New season coming! Discount 10% for all product! Checkout Now!
        </p>
        <span className="bg-[#383838] px-2 py-1 rounded text-xs">20:40</span>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-10 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="John Lewis & Partners"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          {/* Search */}

          <button
            aria-label="Search"
            className="hover:text-black transition cursor-pointer"
          >
            <FiSearch size={20} />
          </button>

          {/* Categories Dropdown */}

          <div className="relative flex items-center">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-black transition font-semibold"
            >
              <span className="cursor-pointer">{selectedCategory}</span>
              <FiChevronDown
                size={16}
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 shadow-md rounded-md overflow-hidden z-20">
                <ul className="text-sm text-gray-700">
                  {["Electronics", "Clothing", "Accessories", "Home Decor"].map(
                    (item) => (
                      <li
                        key={item}
                        onClick={() => handleCategorySelect(item)}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                          selectedCategory === item
                            ? "bg-gray-200 font-medium"
                            : ""
                        }`}
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Sign In */}

          <button className="flex items-center gap-1 hover:text-black transition font-semibold cursor-pointer">
            <FiUser size={18} />
            <span>Sign in</span>
          </button>

          {/* Wishlist */}

          <button
            aria-label="Wishlist"
            className="hover:text-black transition font-semibold cursor-pointer"
          >
            <FiHeart size={20} />
          </button>

          {/* Cart */}

          <button
            aria-label="Cart"
            className="relative hover:text-black transition font-semibold cursor-pointer"
          >
            <FiShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>

        {/* Mobile Icons */}

        <div className="flex md:hidden items-center gap-4 text-gray-800">
          <button aria-label="Search">
            <FiSearch size={20} />
          </button>

          <button aria-label="Cart" className="relative">
            <FiShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          {/* Mobile Menu Toggle */}

          <button aria-label="Menu" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 z-40 md:hidden animate-slide-down">
          <ul className="flex flex-col text-gray-700 text-sm">
            <li className="px-6 py-3 border-b hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FiGrid /> Categories
            </li>
            <li className="px-6 py-3 border-b hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FiUser /> Sign in
            </li>
            <li className="px-6 py-3 border-b hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FiHeart /> Wishlist
            </li>
            <li className="px-6 py-3 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FiHelpCircle /> Help
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
