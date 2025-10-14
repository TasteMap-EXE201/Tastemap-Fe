"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/component/common/Header";

// COMPONENT IMPORTS
import SettingsSidebar from "./components/SettingsSidebar";
import DisplayModeSection from "./components/DisplayModeSection";
import ColorThemeSection from "./components/ColorThemeSection";
import DisplayOptionsSection from "./components/DisplayOptionsSection";
import FontSizeSection from "./components/FontSizeSection";
import GuideSection from "./components/GuideSection";
import QuickTipsSection from "./components/QuickTipsSection";
import AccountSection from "./components/AccountSection";
import LogoutSection from "./components/LogoutSection";

// ICONS
import {
  MoonIcon,
  BookOpenIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  StarIcon,
  HeartIcon,
  BellIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { FiSearch, FiHeart, FiMapPin } from "react-icons/fi";

const SettingsPage = () => {
  // STATE
  const [activeTab, setActiveTab] = useState("settings");
  const [displayMode, setDisplayMode] = useState("light");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [displayOption, setDisplayOption] = useState("comfortable");
  const [fontSize, setFontSize] = useState(50);

  // DATA
  const colors = [
    { name: "Xanh dương", value: "blue", color: "bg-blue-500" },
    { name: "Xanh lá", value: "green", color: "bg-green-500" },
    { name: "Tím", value: "purple", color: "bg-purple-500" },
    { name: "Hồng", value: "pink", color: "bg-pink-500" },
    { name: "Cam", value: "orange", color: "bg-orange-500" },
    { name: "Đỏ", value: "red", color: "bg-red-500" },
    { name: "Vàng", value: "yellow", color: "bg-yellow-500" },
    { name: "Chàm", value: "indigo", color: "bg-indigo-500" },
    { name: "Xanh ngọc", value: "teal", color: "bg-teal-500" },
    { name: "Xanh lơ", value: "cyan", color: "bg-cyan-500" },
    { name: "Ngọc lục bảo", value: "emerald", color: "bg-emerald-500" },
    { name: "Hồng phấn", value: "rose", color: "bg-rose-500" },
  ];

  const displayModes = [
    { value: "light", label: "Chế độ sáng", icon: CiLight },
    { value: "dark", label: "Chế độ tối", icon: MdDarkMode },
    { value: "auto", label: "Tự động", icon: WiMoonAltThirdQuarter },
  ];

  const displayOptions = [
    {
      value: "compact",
      label: "Thu gọn",
      description: "Hiển thị nhiều thông tin ít hơn.",
    },
    {
      value: "comfortable",
      label: "Thoải mái",
      description: "Cân bằng giữa thông tin và khoảng trắng.",
    },
    {
      value: "spacious",
      label: "Rộng rãi",
      description: "Nhiều khoảng trắng, dễ đọc.",
    },
  ];

  const sidebarItems = [
    {
      id: "settings",
      icon: MoonIcon,
      label: "Đổi chế độ ban đêm, cài đặt về màu sắc",
    },
    {
      id: "guide",
      icon: BookOpenIcon,
      label: "Hướng dẫn",
    },
    {
      id: "account",
      icon: UserIcon,
      label: "Đổi tài khoản",
    },
    {
      id: "logout",
      icon: ArrowRightOnRectangleIcon,
      label: "Đăng xuất",
    },
  ];

  const guideItems = [
    {
      icon: MagnifyingGlassIcon,
      title: "Tìm kiếm nhà hàng",
      description: "Sử dụng bộ lọc để tìm nhà hàng phù hợp",
      color: "bg-blue-50 text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      icon: CalendarDaysIcon,
      title: "Đặt bàn online",
      description: "Đặt bàn nhanh chóng chỉ với vài cú click",
      color: "bg-purple-50 text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      icon: StarIcon,
      title: "Đánh giá nhà hàng",
      description: "Chia sẻ trải nghiệm của bạn với cộng đồng",
      iconBg: "bg-yellow-100",
    },
    {
      icon: HeartIcon,
      title: "Lưu nhà hàng yêu thích",
      description: "Tạo danh sách các nhà hàng bạn thích",
      color: "bg-red-50 text-red-600",
      iconBg: "bg-red-100",
    },
    {
      icon: BellIcon,
      title: "Nhận thông báo",
      description: "Cập nhật về ưu đãi và sự kiện mới",
      color: "bg-green-50 text-green-600",
      iconBg: "bg-green-100",
    },
    {
      icon: MapPinIcon,
      title: "Tìm theo vị trí",
      description: "Khám phá nhà hàng gần bạn",
      color: "bg-indigo-50 text-indigo-600",
      iconBg: "bg-indigo-100",
    },
  ];

  const quickTips = [
    {
      icon: FiSearch,
      title: "Tìm kiếm nhanh",
      description: "Nhấn Ctrl + K để mở hộp tìm kiếm nhanh",
      bgColor: "#FFF9E6",
      iconColor: "#F59E0B",
      textColor: "#92400E",
    },
    {
      icon: FiHeart,
      title: "Lưu yêu thích",
      description: "Nhấp đúp vào icon trái tim để lưu nhanh",
      bgColor: "#E6F9EF",
      iconColor: "#10B981",
      textColor: "#065F46",
    },
    {
      icon: FiMapPin,
      title: "Tìm theo vị trí",
      description: "Bật định vị để tìm nhà hàng gần bạn",
      bgColor: "#E6F0FF",
      iconColor: "#3B82F6",
      textColor: "#1E40AF",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        {/* Banner */}
        <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/setting.png"
            alt="Settings Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative h-full flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl font-bold mb-2 relative right-28">
              Cài đặt
            </h1>
            <p className="text-white text-lg font-normal">
              Tùy chỉnh ứng dụng theo sở thích của bạn
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <SettingsSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            sidebarItems={sidebarItems}
          />

          {/* Main content */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-8">
            {activeTab === "settings" && (
              <div className="space-y-8">
                <DisplayModeSection
                  displayMode={displayMode}
                  setDisplayMode={setDisplayMode}
                  displayModes={displayModes}
                />
                <ColorThemeSection
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  colors={colors}
                />
                <DisplayOptionsSection
                  displayOption={displayOption}
                  setDisplayOption={setDisplayOption}
                  displayOptions={displayOptions}
                />
                <FontSizeSection
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                />
              </div>
            )}

            {activeTab === "guide" && (
              <div className="space-y-8">
                <GuideSection guideItems={guideItems} />
                <QuickTipsSection quickTips={quickTips} />
              </div>
            )}

            {activeTab === "account" && <AccountSection />}

            {activeTab === "logout" && (
              <LogoutSection
                onCancel={() => setActiveTab("settings")}
                onConfirm={() => console.log("Đăng xuất")}
              />
            )}
          </div>
        </div>
      </div>

      {/* Slider Style */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;
