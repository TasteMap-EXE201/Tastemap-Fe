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
    { label: "Khám Phá", href: "/explore", active: false },
    { label: "Góc Đầu Bếp", href: "/chef-corner", active: false },
    { label: "Giới Thiệu", href: "/tastemap", active: false },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className=" mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section - Far Left */}
          <div className="flex items-center mr-8">
            <Link href="/" className="flex items-center">
              <div
                className="relative w-20 h-18"
                style={{ width: "80px", height: "72px" }}
              >
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
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 lg:space-x-12">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base relative group"
                >
                  {item.label}
                  {/* Hover underline effect */}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 w-0 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Action Icons - Far Right */}
          <div className="flex items-center space-x-2 lg:space-x-3 ml-8">
            {/* Settings Icon */}
            <Link
              href="/settings"
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <TbSettings2 className="w-5 h-5 lg:w-6 lg:h-6" />
            </Link>

            {/* Notification Icon with Red Dot */}
            <Link
              href="/notifications"
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 relative"
            >
              <IoIosNotificationsOutline className="w-5 h-5 lg:w-6 lg:h-6" />
              {/* Red notification dot */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>

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
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-base py-2 px-4 rounded-lg hover:bg-gray-50"
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
