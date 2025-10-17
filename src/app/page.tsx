"use client";

import React from "react";
import Link from "next/link";
import {
  RiFireLine,
  RiPlayCircleLine,
  RiRestaurantLine,
  RiArticleLine,
} from "react-icons/ri";
import { MdOutlineExplore, MdLocationOn, MdDashboard } from "react-icons/md";
import { PiNotificationLight } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { GrRestaurant, GrFormNextLink } from "react-icons/gr";
import { FaBookOpen, FaPlay, FaEye, FaComment, FaClock } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { Header } from "@/component/common";

// Interface definitions
interface Story {
  id: string;
  name: string;
  avatar: string;
}

interface FeaturedStory {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  likes: number;
  comments: number;
  gradient: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconBg: string;
}

interface ChefContent {
  id: string;
  title: string;
  content: string;
  author: string;
  avatar: string;
  date: string;
}

const Homepage: React.FC = () => {
  // Sample data
  const friendStories: Story[] = [
    {
      id: "1",
      name: "Nguyễn Quốc",
      avatar: "/images/Nguyễn Quốc Cường.png",
    },
    {
      id: "2",
      name: "Minh Anh",
      avatar: "/images/Minh Anh.png",
    },
    {
      id: "3",
      name: "Linh Linh",
      avatar: "/images/Linh Linh.png",
    },
    {
      id: "4",
      name: "Ngọc Dũng",
      avatar: "/images/Ngọc Dũng.png",
    },
    {
      id: "5",
      name: "Nguyen Th",
      avatar: "/images/Nguyen Th.png",
    },
  ];

  const featuredStories: FeaturedStory[] = [
    {
      id: "1",
      title: "",
      description:
        '"Hôm nay tôi sẽ chia sẻ bí quyết làm món phở đặc biệt với nước dùng được ninh từ xương bò trong 12 tiếng và những gia vị bí mật..."',
      author: "Chef Minh Tuấn",
      avatar: "/images/chef Minh Tuấn.png",
      likes: 124,
      comments: 32,
      gradient: "from-red-400 to-yellow-400",
    },
    {
      id: "2",
      title: "",
      description:
        '"Vừa thử món sushi mới tại Tokyo Restaurant! Cá hồi tươi ngon, cơm vừa miệng, đầu bếp thực sự tài năng. Không thể tin được..."',
      author: "Lan Phương",
      avatar: "/images/Lan Phương.png",
      likes: 89,
      comments: 21,
      gradient: "from-green-400 to-cyan-400",
    },
    {
      id: "3",
      title: "",
      description:
        '"Paradise ra mắt thực đơn mùa hè với những món ăn tươi mát đặc biệt! Đừng bỏ lỡ dòng đồ uống detox và những món salad độc đáo..."',
      author: "Anh Khoa",
      avatar: "/images/Anh Khoa.png",
      likes: 156,
      comments: 45,
      gradient: "from-purple-600 to-blue-500",
    },
  ];

  const features: Feature[] = [
    {
      id: "1",
      title: "Chia Sẻ Công Thức",
      description: "Khám phá và chia sẻ những công thức độc đáo",
      icon: "📝",
      bgColor: "bg-orange-100",
      iconBg: "bg-orange-500",
    },
    {
      id: "2",
      title: "Cộng Đồng Đầu Bếp",
      description: "Kết nối với các đầu bếp chuyên nghiệp",
      icon: "👨‍🍳",
      bgColor: "bg-green-100",
      iconBg: "bg-green-500",
    },
    {
      id: "3",
      title: "Video Hướng Dẫn",
      description: "Học nấu ăn qua video chi tiết từng bước",
      icon: "🎥",
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-500",
    },
  ];

  const chefContents: ChefContent[] = [
    {
      id: "1",
      title: "Bí quyết làm nước dùng phở đậm đà",
      content:
        "Để có được nước dùng phở thơm ngon, bạn cần ninh xương trong ít nhất 8-12 tiếng với lửa nhỏ...",
      author: "Chef Hoàng",
      avatar:
        "https://ui-avatars.com/api/?name=Chef+Hoang&background=f3f4f6&color=374151&size=32",
      date: "2 giờ trước",
    },
    {
      id: "2",
      title: "Cách chọn nguyên liệu tươi ngon",
      content:
        "Việc chọn nguyên liệu tươi ngon là yếu tố quyết định 70% hương vị món ăn. Hãy chú ý đến...",
      author: "Chef Mai",
      avatar:
        "https://ui-avatars.com/api/?name=Chef+Mai&background=f3f4f6&color=374151&size=32",
      date: "5 giờ trước",
    },
    {
      id: "3",
      title: "Nghệ thuật trang trí món ăn",
      content:
        'Mắt là cơ quan đầu tiên "nếm" món ăn. Cách trang trí đẹp mắt sẽ làm tăng cảm giác ngon miệng...',
      author: "Chef Lan",
      avatar:
        "https://ui-avatars.com/api/?name=Chef+Lan&background=f3f4f6&color=374151&size=32",
      date: "1 ngày trước",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header currentPage="homepage" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image - Luxury restaurant with bokeh lighting */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/restaurant-bg.png")',
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-start justify-between">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-2xl">
            {/* Trending Badge */}
            <div className="inline-flex items-center mb-6">
              <div
                className="rounded-full text-white text-lg font-bold flex items-center gap-3"
                style={{
                  paddingTop: "8px",
                  paddingRight: "16px",
                  paddingBottom: "8px",
                  paddingLeft: "16px",
                  background: "#FFFFFF33",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              >
                <RiFireLine
                  size={20}
                  style={{
                    color: "#FB923C",
                    flexShrink: 0,
                  }}
                />
                Trending Stories
              </div>
            </div>

            {/* Main Title */}
            <h1 className="mb-6 leading-tight">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                Khám phá
              </div>
              <div className="text-5xl md:text-6xl font-bold">
                <span
                  className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF4DFF 0%, #FF9900 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Story{" "}
                </span>
                <span
                  className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF4DFF 0%, #FF9900 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ẩm thực
                </span>
              </div>
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg mb-8 leading-relaxed max-w-xl"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6",
              }}
            >
              Kết nối với cộng đồng yêu ẩm thực, chia sẻ trải nghiệm và khám phá
              những câu chuyện từ chef hàng đầu
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore">
                <button
                  className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6A00 0%, #FF3CAC 100%)",
                  }}
                >
                  <MdOutlineExplore
                    size={16}
                    style={{
                      color: "#FFFFFF",
                      flexShrink: 0,
                    }}
                  />
                  Khám phá ngay
                </button>
              </Link>
              <button
                className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  background: "transparent",
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.backdropFilter = "blur(10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.border =
                    "1px solid rgba(255, 255, 255, 0.5)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.backdropFilter = "none";
                }}
              >
                <span>📅</span>
                Đặt bàn
              </button>
            </div>
          </div>

          {/* Right Sidebar - Recent Stories (Enhanced Glassmorphism) */}
          <div className="hidden lg:block ml-8 xl:ml-12 self-start">
            <div
              className="relative overflow-hidden"
              style={{
                width: "592px",
                height: "178px",
                borderRadius: "16px",
                padding: "25px",
                background: "#FFFFFF1A",
                border: "1px solid #FFFFFF33",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Content */}
              <div className="relative z-10 h-full">
                {/* Header with play icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center">
                    <RiPlayCircleLine
                      size={18}
                      style={{
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold tracking-wide"
                    style={{ color: "white" }}
                  >
                    Stories gần đây
                  </h3>
                </div>

                {/* Stories Grid - More flexible layout */}
                <div className="flex justify-start gap-8 pl-5">
                  {friendStories.slice(0, 3).map((story, index) => (
                    <div
                      key={story.id}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      {/* Avatar with gradient ring */}
                      <div className="relative mb-3">
                        <div
                          className="w-16 h-16 rounded-full p-[2px] transition-all duration-300 group-hover:scale-105"
                          style={{
                            background:
                              "linear-gradient(135deg, #FF4DFF 0%, #FF9900 100%)",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            <img
                              src={story.avatar}
                              alt={story.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Name */}
                      <p
                        className="text-xs font-medium text-center leading-tight transition-colors duration-300 group-hover:text-white whitespace-nowrap"
                        style={{
                          color: "rgba(255, 255, 255, 0.8)",
                          maxWidth: "60px",
                        }}
                      >
                        {story.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những câu chuyện thú vị từ cộng đồng ẩm thực
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Story Content */}
                <div className="p-6">
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {story.author}
                      </h4>
                      <p className="text-sm text-gray-500">Chef</p>
                    </div>
                  </div>

                  {/* Story Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <FaEye />
                        {story.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment />
                        {story.comments}
                      </span>
                    </div>
                    <span>2 giờ trước</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tính Năng Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những tính năng độc đáo giúp bạn kết nối với cộng đồng ẩm
              thực
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nội Dung Từ Chef
              </h2>
              <p className="text-lg text-gray-600">
                Học hỏi từ những đầu bếp hàng đầu
              </p>
            </div>
            <Link href="/chef-corner">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Xem tất cả
              </button>
            </Link>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Bài viết */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <HiDocumentText className="text-[#FF6B35] text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333]">
                    Bài viết
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-[#FF6B35] text-sm font-semibold hover:underline"
                >
                  Xem tất cả
                </a>
              </div>

              {/* Content Items */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div
                  className="flex gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <img
                    src="/images/1.png"
                    alt="Nước dùng phở"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      Bí quyết làm nước dùng phở đậm đà
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Để có được nước dùng phở thơm ngon, bạn cần ninh xương...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        12K
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-xs" />
                        340
                      </span>
                      <span>2 giờ trước</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  className="flex gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <img
                    src="/images/2.png"
                    alt="Nghệ thuật trang trí"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      Nghệ thuật trang trí món ăn
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Mắt là cơ quan đầu tiên "nếm" món ăn. Cách trang trí...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        8.5K
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-xs" />
                        210
                      </span>
                      <span>5 giờ trước</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Mẹo vặt */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <RiRestaurantLine className="text-[#10B981] text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333]">Mẹo vặt</h3>
                </div>
                <a
                  href="#"
                  className="text-[#10B981] text-sm font-semibold hover:underline"
                >
                  Xem tất cả
                </a>
              </div>

              {/* Content Items */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div
                  className="flex gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <img
                    src="/images/2.png"
                    alt="Nguyên liệu tươi"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      Bí quyết chọn nguyên liệu tươi ngon
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Kinh nghiệm 20 năm chia sẻ cách chọn thịt, cá, rau củ...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        15K
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-xs" />
                        980
                      </span>
                      <span>1 tuần trước</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Hướng dẫn */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <AiOutlinePlaySquare className="text-[#4CAF50] text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333]">
                    Hướng dẫn
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-[#4CAF50] text-sm font-semibold hover:underline"
                >
                  Xem tất cả
                </a>
              </div>

              {/* Content Items */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div
                  className="flex gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <img
                    src="/images/3.png"
                    alt="Bánh flan cà phê"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      Làm bánh flan cà phê tại nhà
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Video hướng dẫn từng bước làm bánh flan cà phê...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        25K
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-xs" />
                        1.2K
                      </span>
                      <span>2 ngày trước</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  className="flex gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <img
                    src="/images/4.png"
                    alt="Chọn nguyên liệu"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      Kỹ thuật thái rau chuyên nghiệp
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Hướng dẫn các kỹ thuật thái rau cơ bản đến nâng cao...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        18K
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-xs" />
                        850
                      </span>
                      <span>4 ngày trước</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Khám phá Góc đầu bếp Button */}
          <div className="flex justify-center">
            <Link href="/chef-corner">
              <button
                className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #FF7043 0%, #E53935 100%)",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #FF8A65 0%, #F44336 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #FF7043 0%, #E53935 100%)";
                }}
              >
                Khám phá Góc đầu bếp
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Community Join Section */}
      <footer className="relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/footer.png")',
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-[75vh] px-4">
          {/* Main Headline */}
          <div className="mb-6 text-left -ml-4 md:-ml-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative left-[-18rem]">
              Tham gia Cộng đồng
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold ml-8 md:ml-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                Story Ẩm thực
              </span>
            </h2>
          </div>

          {/* Subtitle Description */}
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4 leading-relaxed">
            Kết nối với hàng ngàn người yêu ẩm thực, chia sẻ những trải nghiệm
            tuyệt vời và khám phá những câu chuyện đặc biệt từ khắp nơi.
          </p>

          {/* Buttons Row */}
          <div className="flex justify-center gap-4 mt-8">
            {/* Primary Button - Bắt đầu khám phá */}
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:brightness-110 transition-all duration-300 hover:scale-105">
              <IoNotificationsOutline size={18} />
              Bắt đầu khám phá
            </button>

            {/* Secondary Button - Dashboard */}
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <MdDashboard size={18} />
              Dashboard
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
