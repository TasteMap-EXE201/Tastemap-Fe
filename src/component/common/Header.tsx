"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbSettings2 } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";

interface HeaderProps {
  currentPage?: "homepage" | "restaurant";
}

const Header: React.FC<HeaderProps> = ({ currentPage = "homepage" }) => {
  const navigationItems = [
    { label: "Khám Phá", href: "/explore", active: currentPage === "homepage" },
    { label: "Góc Đầu Bếp", href: "/chef-corner", active: false },
    { label: "Giới Thiệu", href: "/about", active: false },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/logo.png"
                  alt="TasteMap Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Menu - Center */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`
                  text-gray-600 hover:text-blue-600 transition-colors duration-200
                  font-medium text-sm lg:text-base
                  relative group
                  ${item.active ? "text-blue-600" : ""}
                `}
              >
                {item.label}
                {/* Hover underline effect */}
                <span
                  className={`
                  absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 
                  ${item.active ? "w-full" : "w-0 group-hover:w-full"}
                `}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Action Icons - Right */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Settings Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <TbSettings2 className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Notification Icon with Red Dot */}
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 relative">
              <IoIosNotificationsOutline className="w-5 h-5 lg:w-6 lg:h-6" />
              {/* Red notification dot */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Dashboard Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <MdOutlineDashboard className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Account Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <RiAccountPinCircleLine className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-gray-100 py-4">
          <nav className="flex flex-col space-y-3">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`
                  text-gray-600 hover:text-blue-600 transition-colors duration-200
                  font-medium text-base py-2 px-4 rounded-lg hover:bg-gray-50
                  ${item.active ? "text-blue-600 bg-blue-50" : ""}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
