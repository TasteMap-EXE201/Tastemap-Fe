"use client";

import React, { useState } from "react";
import Header from "@/component/common/Header";
import Image from "next/image";
import {
  MoonIcon,
  PaintBrushIcon,
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
  const [activeTab, setActiveTab] = useState("settings");
  const [displayMode, setDisplayMode] = useState("light");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [displayOption, setDisplayOption] = useState("comfortable");
  const [fontSize, setFontSize] = useState(50);

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
        {/* Banner Section */}
        <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/setting.png"
            alt="Settings Banner"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#00000066" }}
          ></div>
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
          <div className="w-64 bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Cài đặt</h2>

            <div className="space-y-2">
              {sidebarItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border border-blue-500"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-8">
            {activeTab === "settings" && (
              <div className="space-y-8">
                {/* Display Mode Section */}
                <div>
                  <h3 className="text-gray-800 font-semibold mb-4">
                    Chế độ hiển thị
                  </h3>
                  <div className="space-y-2">
                    {displayModes.map((mode) => {
                      const IconComponent = mode.icon;
                      return (
                        <label
                          key={mode.value}
                          className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                            displayMode === mode.value
                              ? "border-blue-500 bg-blue-50 text-blue-600"
                              : "border-gray-200 hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="displayMode"
                            value={mode.value}
                            checked={displayMode === mode.value}
                            onChange={(e) => setDisplayMode(e.target.value)}
                            className="sr-only"
                          />
                          <IconComponent className="w-5 h-5" />
                          <div className="flex-1">
                            <span className="font-medium">{mode.label}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Color Theme Section */}
                <div>
                  <h3 className="text-gray-800 font-semibold mb-4">
                    Màu chủ đạo
                  </h3>
                  <div className="grid grid-cols-6 gap-4">
                    {colors.map((color) => (
                      <div
                        key={color.value}
                        className="text-center p-3 rounded-lg cursor-pointer transition-all duration-200"
                        onClick={() => setSelectedColor(color.value)}
                        style={{
                          borderWidth: "2px",
                          borderStyle: "solid",
                          borderColor:
                            selectedColor === color.value
                              ? "#1F2937"
                              : "#E5E7EB",
                        }}
                      >
                        <button
                          className={`w-10 h-10 rounded-full ${
                            color.color
                          } transition-all duration-200 ${
                            selectedColor === color.value
                              ? "ring-2 ring-blue-500 ring-offset-2"
                              : "hover:scale-110"
                          } mx-auto block`}
                        />
                        <p className="text-sm text-gray-700 mt-1">
                          {color.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Display Options Section */}
                <div>
                  <h3 className="text-gray-800 font-semibold mb-4">
                    Tùy chọn hiển thị
                  </h3>
                  <div className="space-y-2">
                    {displayOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`relative flex flex-col p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                          displayOption === option.value
                            ? "border-blue-500 bg-blue-50 text-blue-600"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="displayOption"
                          value={option.value}
                          checked={displayOption === option.value}
                          onChange={(e) => setDisplayOption(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-start justify-between">
                          <div>
                            <span
                              className={`font-medium block ${
                                displayOption === option.value
                                  ? "text-blue-600"
                                  : "text-gray-900"
                              }`}
                            >
                              {option.label}
                            </span>
                            <span
                              className={`text-sm mt-1 ${
                                displayOption === option.value
                                  ? "text-blue-500"
                                  : "text-gray-600"
                              }`}
                            >
                              {option.description}
                            </span>
                          </div>
                          {displayOption === option.value && (
                            <CheckIcon className="w-5 h-5 text-blue-600 absolute right-4 top-7" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Font Size Section */}
                <div>
                  <h3 className="text-gray-800 font-semibold mb-4">Cỡ chữ</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Nhỏ</span>
                      <span>Lớn</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #2563EB 0%, #2563EB ${fontSize}%, #e5e7eb ${fontSize}%, #e5e7eb 100%)`,
                        }}
                      />
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p
                        className="text-gray-700"
                        style={{ fontSize: `${12 + (fontSize / 100) * 8}px` }}
                      >
                        Văn bản mẫu để xem trước cỡ chữ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "guide" && (
              <div className="space-y-8">
                {/* Guide Content */}
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-6">
                    Hướng dẫn sử dụng
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {guideItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-all duration-200 ${item.color}`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-full ${item.iconBg}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Tips Section */}
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-6">
                    Mẹo nhanh
                  </h3>
                  <div className="space-y-4">
                    {quickTips.map((tip, index) => {
                      const IconComponent = tip.icon;
                      return (
                        <div
                          key={index}
                          className="p-4 rounded-lg flex items-center gap-4"
                          style={{ backgroundColor: tip.bgColor }}
                        >
                          <div
                            className="p-3 rounded-full"
                            style={{ backgroundColor: tip.iconColor + "20" }}
                          >
                            <IconComponent
                              className="w-5 h-5"
                              style={{ color: tip.iconColor }}
                            />
                          </div>
                          <div className="flex-1">
                            <h4
                              className="font-semibold mb-1"
                              style={{ color: tip.textColor }}
                            >
                              {tip.title}
                            </h4>
                            <p
                              className="text-sm"
                              style={{ color: tip.textColor + "CC" }}
                            >
                              {tip.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "account" && (
              <div className="text-center py-12">
                <UserIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Đổi tài khoản
                </h3>
              </div>
            )}

            {activeTab === "logout" && (
              <div className="max-w-2xl mx-auto">
                {/* Top Icon Badge */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                    <ArrowRightOnRectangleIcon className="w-8 h-8 text-red-500" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                  Đăng xuất khỏi ứng dụng?
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-center mb-8 leading-relaxed">
                  Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng
                </p>

                {/* Info Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Trước khi đăng xuất:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        Dữ liệu đã được đồng bộ
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">Cài đặt đã được lưu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        Không có thay đổi chưa lưu
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setActiveTab("settings")}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors duration-200 font-medium"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={() => {
                      // Handle logout logic here
                      // Add your logout logic
                      console.log("Đăng xuất");
                    }}
                    className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 transition-colors duration-200 font-semibold"
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
