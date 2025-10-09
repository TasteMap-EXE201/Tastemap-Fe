"use client";

import React, { useState } from "react";
import Header from "@/component/common/Header";
import {
  BellIcon,
  CheckIcon,
  LockClosedIcon,
  GiftIcon,
  ChatBubbleLeftIcon,
  XMarkIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { CiDiscount1 } from "react-icons/ci";
import { PiArticle } from "react-icons/pi";
import { RiRestaurantLine } from "react-icons/ri";
import Image from "next/image";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Mock data cho thông báo
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order",
      icon: LockClosedIcon,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      title: "Đơn hàng #12345 đã được xác nhận",
      content:
        "Chef đã bắt đầu chuẩn bị món ăn của bạn tại Nhà hàng Hương Việt.",
      time: "2 phút trước",
      isRead: false,
      hasButton: true,
      buttonText: "Xem đơn hàng",
      buttonColor: "bg-green-500 hover:bg-green-600",
      avatar: "/chef-avatar.jpg",
    },
    {
      id: 2,
      type: "promotion",
      icon: CiDiscount1,
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      title: "Khuyến mãi đặc biệt cuối tuần",
      content:
        "Giảm 30% cho tất cả món nướng tại các nhà hàng BBQ. Áp dụng từ thứ 6 đến chủ nhật.",
      time: "1 giờ trước",
      isRead: true,
      hasImage: true,
      image: "/món nướng.png",
      hasCloseButton: true,
    },
    {
      id: 3,
      type: "review",
      icon: ChatBubbleLeftIcon,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      title: "Đánh giá của bạn đã được duyệt",
      content:
        "Cảm ơn bạn đã đánh giá Nhà hàng Món Huế. Review của bạn giúp ích cho cộng đồng.",
      time: "3 giờ trước",
      isRead: true,
      hasCloseButton: true,
    },
  ]);

  const getFilteredNotifications = () => {
    switch (activeTab) {
      case "unread":
        return notifications.filter((n) => !n.isRead);
      case "orders":
        return notifications.filter((n) => n.type === "order");
      default:
        return notifications;
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const orderCount = notifications.filter((n) => n.type === "order").length;
  const filteredNotifications = getFilteredNotifications();

  const markAllAsRead = () => {
    // Đánh dấu tất cả thông báo đã đọc
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const trackOrder = () => {
    // Logic theo dõi đơn hàng
    console.log("Theo dõi đơn hàng");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-8">
        {/* Header and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Thông báo
              </h1>
              <p className="text-gray-600">
                Bạn có {unreadCount} thông báo chưa đọc
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={trackOrder}
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <EyeIcon className="w-4 h-4" />
                Theo dõi đơn hàng
              </button>
              <button
                onClick={markAllAsRead}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <CheckIcon className="w-4 h-4" />
                Đánh dấu tất cả đã đọc
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === "all"
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 hover:bg-gray-200"
              }`}
            >
              Tất cả ({notifications.length})
            </button>
            <button
              onClick={() => setActiveTab("unread")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === "unread"
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 hover:bg-gray-200"
              }`}
            >
              Chưa đọc ({unreadCount})
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === "orders"
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 hover:bg-gray-200"
              }`}
            >
              Đơn hàng ({orderCount})
            </button>
          </div>
        </div>

        {/* Notification Cards */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-white border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ${
                  notification.type === "order"
                    ? "border-l-4 border-l-blue-500"
                    : "border-gray-200"
                }`}
              >
                {/* Order Notification */}
                {notification.type === "order" && (
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="p-3 rounded-full bg-green-100 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">
                            {notification.title}
                          </h3>
                          {/* Unread indicator and close button */}
                          <div className="flex items-center gap-2">
                            {!notification.isRead && (
                              <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                            )}
                            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                              <XMarkIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {notification.content}
                        </p>

                        <div className="flex items-center text-sm text-gray-500 mb-4 gap-2">
                          <span>15 phút trước</span>
                          <span>·</span>
                          <div className="flex items-center gap-1">
                            <RiRestaurantLine className="w-3.5 h-3.5" />
                            <span>Hương Việt</span>
                          </div>
                          <span>·</span>
                          <div className="flex items-center gap-1">
                            <PiArticle className="w-3.5 h-3.5" />
                            <span>#12345</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        {notification.hasButton && (
                          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                            {notification.buttonText}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Promotion Notification */}
                {notification.type === "promotion" && (
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <div className="p-3 rounded-full bg-red-100 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-red-600" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2">
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {notification.content}
                          </p>
                          <span className="text-sm text-gray-500">
                            {notification.time}
                          </span>
                        </div>
                      </div>

                      {/* Close button */}
                      {notification.hasCloseButton && (
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <XMarkIcon className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Promotion Image */}
                    {notification.hasImage && (
                      <div className="w-[320px] h-32 rounded-lg bg-gray-100 overflow-hidden relative left-18">
                        <Image
                          src={notification.image}
                          alt="Promotion"
                          width={400}
                          height={128}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Other Notifications */}
                {notification.type !== "order" &&
                  notification.type !== "promotion" && (
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`p-3 rounded-full ${notification.iconBg} flex-shrink-0`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${notification.iconColor}`}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                              {notification.title}
                            </h3>
                            {/* Close button */}
                            {notification.hasCloseButton && (
                              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                <XMarkIcon className="w-4 h-4" />
                              </button>
                            )}
                          </div>

                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {notification.content}
                          </p>

                          <div className="flex items-center text-sm text-gray-500 gap-2">
                            <span>{notification.time}</span>
                            <span>·</span>
                            <div className="flex items-center gap-1">
                              <RiRestaurantLine className="w-3.5 h-3.5" />
                              <span>Món Huế</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
            Tải thêm thông báo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
