"use client";

import React, { useState } from "react";
import { NavigationTabs } from "@/component/restaurant/navigation";
import Banner from "./banner";
import Overview from "./tab/overview";
import Menu from "./tab/menu";
import Story from "./tab/story";
import Article from "./tab/article";
import Image from "./tab/image";
import Contact from "./tab/contact";
import QuanTam from "./tab/quantam";

export default function RestaurantIndex() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample followers data - replace with actual API call
  const sampleFollowers = [
    {
      id: "1",
      name: "Nguyễn Văn An",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      status: "Đang theo dõi",
    },
    {
      id: "2",
      name: "Trần Thị Bình",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      status: "Đang theo dõi",
    },
    {
      id: "3",
      name: "Lê Minh Cường",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      status: "Đang theo dõi",
    },
  ];

  const handleViewFollower = (followerId: string) => {
    console.log("Viewing follower:", followerId);
    // Implement navigation to user profile or open modal
  };

  const handleLoadMore = () => {
    console.log("Loading more followers...");
    // Implement load more functionality
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "quantam":
        return (
          <QuanTam
            followers={sampleFollowers}
            onViewFollower={handleViewFollower}
            onLoadMore={handleLoadMore}
            hasMore={false}
            isLoading={false}
          />
        );
      case "menu":
        return <Menu />;
      case "story":
        return <Story />;
      case "article":
        return <Article />;
      case "image":
        return <Image />;
      case "contact":
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner Section */}
        <div className="mb-6">
          <Banner onNavigateToContact={() => setActiveTab("contact")} />
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
