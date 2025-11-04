"use client";

import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F2F2F2] text-gray-700 mt-10">
      {/* Top Section */}

      <div className="w-full px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column */}

        <div className="col-span-1">
          {/* Logo */}

          <Image
            src="/images/logo.png"
            width={150}
            height={50}
            alt="John Lewis & Partners"
          />

          {/* Email Subscription */}

          <div className="mt-6 flex items-center bg-transparent border-b border-gray-400 w-full max-w-xs">
            <input
              type="text"
              placeholder="Get latest offers to your inbox"
              className="bg-transparent outline-none w-full text-sm py-2"
            />
            <button className="bg-black text-white p-2 rounded-md">➜</button>
          </div>

          {/* Social Icons */}

          <div className="flex items-center gap-4 mt-6">
            <FiFacebook className="text-xl cursor-pointer hover:text-black" />
            <FiInstagram className="text-xl cursor-pointer hover:text-black" />
            <FiTwitter className="text-xl cursor-pointer hover:text-black" />
            <FiMail className="text-xl cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Shop Column */}

        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">My account</li>
            <li className="hover:text-black cursor-pointer">Login</li>
            <li className="hover:text-black cursor-pointer">Wishlist</li>
            <li className="hover:text-black cursor-pointer">Cart</li>
          </ul>
        </div>

        {/* Information Column */}

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Information
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Shipping Policy</li>
            <li className="hover:text-black cursor-pointer">
              Returns & Refunds
            </li>
            <li className="hover:text-black cursor-pointer">Cookies Policy</li>
            <li className="hover:text-black cursor-pointer">
              Frequently asked
            </li>
          </ul>
        </div>

        {/* Company Column */}

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}

      <div className="border-t border-dashed border-gray-300 mx-6 md:mx-12 lg:mx-20"></div>

      {/* Bottom Section */}

      <div className="w-full px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© John Lewis plc 2001 - 2024</p>

        <div className="flex items-center gap-6 text-sm">
          {/* Language */}

          <div className="flex items-center gap-1 cursor-pointer">
            <span>English</span>
            <FiChevronDown size={14} />
          </div>

          {/* Currency */}

          <div className="flex items-center gap-1 cursor-pointer">
            <span>USD</span>
            <FiChevronDown size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
}
