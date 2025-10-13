"use client";

import React, { useState } from "react";
import Header from "@/component/common/Header";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  EyeIcon,
  PlayIcon,
  ClockIcon,
  FireIcon,
  DocumentTextIcon,
  UserIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

const ChefCornerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContentType, setSelectedContentType] = useState("stories");
  const [selectedTag, setSelectedTag] = useState("Tất cả");

  // Content type tabs
  const contentTypes = [
    { id: "stories", label: "Stories" },
    { id: "articles", label: "Bài viết" },
    { id: "tutorials", label: "Hướng dẫn" },
  ];

  // Filter tags
  const filterTags = [
    "Tất cả",
    "Tráng miệng",
    "Món chính",
    "Súp",
    "Ăn sáng",
    "Nước uống",
    "Chay",
    "Hải sản",
    "Bánh ngọt",
  ];

  // Mock data for featured stories/reels
  const featuredStories = [
    {
      id: 1,
      chef: "Chef Minh Tuấn",
      restaurant: "Nhà hàng Sài Gòn Xưa",
      title: "Bí quyết nấu phở bò truyền thống",
      description:
        "Chia sẻ bí quyết làm nước dùng phở trong suốt, đậm đà từ xương bò ninh 12 tiếng cùng gia vị đặc biệt...",
      image: "/pho.png",
      avatar: "/strories1.png",
      badge: "Món chính",
      badgeColor: "bg-orange-500",
      timeAgo: "2 ngày trước",
      views: "12.5k",
      likes: "1.2k",
    },
    {
      id: 2,
      chef: "Chef Lan Anh",
      restaurant: "Fine Dining Restaurant",
      title: "Nghệ thuật trang trí món ăn cao cấp",
      description:
        "Hướng dẫn cách trang trí món ăn fine dining với các kỹ thuật chuyên nghiệp, tạo điểm nhấn thị giác...",
      image: "/8.png",
      avatar: "/strories2.png",
      badge: "Khai vị",
      badgeColor: "bg-green-500",
      timeAgo: "1 ngày trước",
      views: "8.3k",
      likes: "950",
    },
    {
      id: 3,
      chef: "Chef Đức Minh",
      restaurant: "Street Food Master",
      title: "Bánh mì thịt nướng chuẩn vị Sài Gòn",
      description:
        "Từ cách ướp thịt, nướng than hoa đến bí quyết làm bánh mì giòn tan, thơm ngon như quán vỉa hè...",
      image: "/bánh mì.png",
      avatar: "/chef Đức Minh.png",
      badge: "Món chính",
      badgeColor: "bg-orange-500",
      timeAgo: "3 giờ trước",
      views: "5.7k",
      likes: "680",
    },
    {
      id: 4,
      chef: "Chef Thúy Hằng",
      restaurant: "Dessert Paradise",
      title: "Làm chè ba màu ngon như quán",
      description:
        "Hướng dẫn chi tiết cách làm chè ba màu với lớp đậu xanh, đậu đỏ và nước cốt dừa thơm béo...",
      image: "/10.png",
      avatar: "/chef Thúy Hằng.png",
      badge: "Tráng miệng",
      badgeColor: "bg-purple-500",
      timeAgo: "5 giờ trước",
      views: "9.2k",
      likes: "1.5k",
    },
  ];

  // Mock data for featured articles
  const featuredArticles = [
    {
      id: 1,
      title: "10 gia vị không thể thiếu trong bếp Việt",
      chef: "Minh Đức",
      image: "/khám phá ẩm thực.png",
      timeAgo: "1 ngày trước",
    },
    {
      id: 2,
      title: "Cách bảo quản thực phẩm tươi ngon lâu hơn",
      chef: "Lan Anh",
      image: "/khám phá ẩm thực.png",
      timeAgo: "2 ngày trước",
    },
  ];

  // Mock data for tutorial videos
  const tutorialVideos = [
    {
      id: 1,
      title: "Cách thái hành tây không làm chảy nước mắt",
      chef: "Đức Minh",
      thumbnail: "/video1-thumbnail.png",
      duration: "20 phút",
    },
    {
      id: 2,
      title: "Kỹ thuật xào rau giữ nguyên màu xanh",
      chef: "Thu Hà",
      thumbnail: "/video2-thumbnail.png",
      duration: "18 phút",
    },
  ];

  const handleSearch = () => {
    console.log("Tìm kiếm:", searchQuery);
  };

  // Function to render content based on selected tab
  const renderContent = () => {
    // Get title and description based on selected tab
    let sectionTitle = "";
    let sectionDescription = "";
    let contentData = [];
    let resultCount = "";

    switch (selectedContentType) {
      case "stories":
        sectionTitle = "Giao diện mặc định";
        sectionDescription =
          "Story/reel của các chef có lượt tương tác cao hoặc view cao";
        contentData = featuredStories;
        resultCount = "4 kết quả";
        break;
      case "articles":
        sectionTitle = "Giao diện mặc định";
        sectionDescription = "Bài viết nổi bật của các chef";
        // Custom data for articles tab with only 2 cards
        contentData = [
          {
            id: 1,
            chef: "Chef Thanh Hà",
            restaurant: "Modern Vietnamese Cuisine",
            title: "Xu hướng ẩm thực Việt hiện đại",
            description:
              "Phân tích những xu hướng mới trong ẩm thực Việt Nam, cách kết hợp truyền thống với hiện đại để tạo nên những món ăn độc đáo...",
            image: "/13.png",
            avatar: "/chef Thanh Hà.png",
            badge: "Món chính",
            badgeColor: "bg-orange-500",
            timeAgo: "2 ngày trước",
            views: "12.5k",
            likes: "1.2k",
          },
          {
            id: 2,
            chef: "Chef Hoàng Nam",
            restaurant: "Traditional Cuisine Expert",
            title: "Bí quyết chọn nguyên liệu tươi ngon",
            description:
              "Kinh nghiệm 20 năm trong nghề chia sẻ cách chọn thịt, cá, rau củ tươi ngon nhất. Những mẹo nhỏ giúp bạn không bao giờ mua phải đồ kém chất lượng...",
            image: "/2.png",
            avatar: "/chef Hoàng Nam.png",
            badge: "Khai vị",
            badgeColor: "bg-green-500",
            timeAgo: "1 ngày trước",
            views: "8.3k",
            likes: "950",
          },
        ];
        resultCount = "2 kết quả";
        break;
      case "tutorials":
        sectionTitle = "Giao diện mặc định";
        sectionDescription = "Clip hướng dẫn";
        // Custom data for tutorials tab with 3 cards
        contentData = [
          {
            id: 1,
            chef: "Chef Mai Linh",
            restaurant: "Pastry Specialist",
            title: "Làm bánh flan cà phê tại nhà",
            description:
              "Video hướng dẫn từng bước làm bánh flan cà phê với vị đắng nhẹ đặc trưng. Công thức đơn giản, nguyên liệu dễ tìm...",
            image: "/15.png",
            avatar: "/18.png",
            badge: "Tráng miệng",
            badgeColor: "bg-purple-500",
            timeAgo: "2 ngày trước",
            views: "12.5k",
            likes: "1.2k",
          },
          {
            id: 2,
            chef: "Chef Việt Anh",
            restaurant: "Culinary Institute",
            title: "Kỹ thuật thái rau chuyên nghiệp",
            description:
              "Hướng dẫn các kỹ thuật thái rau cơ bản đến nâng cao, cách cầm dao đúng cách và bảo đảm an toàn trong bếp...",
            image: "/16.png",
            avatar: "/19.png",
            badge: "Khai vị",
            badgeColor: "bg-green-500",
            timeAgo: "1 ngày trước",
            views: "8.3k",
            likes: "950",
          },
          {
            id: 3,
            chef: "Chef Bảo Châu",
            restaurant: "Dessert Academy",
            title: "Làm bánh tráng nướng Đà Lạt",
            description:
              "Hướng dẫn làm bánh tráng nướng với nhân trứng, tôm khô thơm ngon đúng vị Đà Lạt tại nhà...",
            image: "/17.png",
            avatar: "/20.png",
            badge: "Tráng miệng",
            badgeColor: "bg-purple-500",
            timeAgo: "5 giờ trước",
            views: "9.2k",
            likes: "1.5k",
          },
        ];
        resultCount = "3 kết quả";
        break;
      default:
        sectionTitle = "Giao diện mặc định";
        sectionDescription =
          "Story/reel của các chef có lượt tương tác cao hoặc view cao";
        contentData = featuredStories;
        resultCount = "4 kết quả";
    }

    return (
      <div className="mb-16">
        {/* 1. Tiêu đề section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {sectionTitle}
          </h2>
          <p className="text-sm text-gray-500">
            Bấm vào để mở giao diện mặc định
          </p>
        </div>

        {/* 2. Khối nội dung (Card Grid) */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          {/* Header nhỏ phía trên các card */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {sectionDescription}
            </h3>
            <div className="bg-gray-100 rounded-full px-3 py-1">
              <span className="text-sm text-gray-700">{resultCount}</span>
            </div>
          </div>

          {/* 3. Danh sách các card - Grid 3 cột responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentData.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden group cursor-pointer"
              >
                {/* A. Ảnh đại diện món ăn */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {/* Tag loại món ăn */}
                  <div
                    className={`absolute top-3 left-3 ${story.badgeColor} text-white text-xs font-medium px-3 py-1 rounded-full`}
                  >
                    {story.badge}
                  </div>
                </div>

                {/* B. Nội dung bên dưới ảnh */}
                <div className="p-5 relative">
                  {/* (1) Thông tin chef */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                      <Image
                        src={story.avatar}
                        alt={story.chef}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {story.chef}
                      </p>
                      <p className="text-xs text-gray-500">
                        {story.restaurant}
                      </p>
                    </div>
                  </div>

                  {/* (2) Tiêu đề bài viết */}
                  <h4 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-500 transition-colors duration-200">
                    {story.title}
                  </h4>

                  {/* (3) Mô tả ngắn */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {story.description}
                  </p>

                  {/* (4) Thanh thông tin phụ (meta bar) */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{story.timeAgo}</span>
                    {/* Lượt xem và lượt thích ở góc phải dưới */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>{story.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{story.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
          {/* Title and Subtitle */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Góc đầu bếp
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Khám phá những câu chuyện & kỹ thuật từ các đầu bếp chuyên nghiệp
            </p>
          </div>

          {/* Central UI Block - White container with rounded corners and shadow */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm px-6 py-6">
            {/* 1. Content Type Selection Tabs */}
            <div className="flex justify-center gap-3 mb-8">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedContentType(type.id)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedContentType === type.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* 2. Search Section */}
            <div className="mb-8">
              {/* Search Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">
                Tìm kiếm hướng dẫn nấu ăn
              </h3>

              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm món ăn, công thức, chef..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:shadow-sm bg-white text-gray-700"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
            </div>

            {/* 3. Category Tags Filter */}
            <div>
              <p className="text-sm text-gray-600 mb-3">Danh mục món ăn:</p>
              <div className="flex flex-wrap gap-3">
                {filterTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      selectedTag === tag
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        {/* Dynamic Content based on selected tab */}
        {renderContent()}

        {/* Two Column Content Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Articles */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <DocumentTextIcon className="w-6 h-6 text-gray-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Bài viết nổi bật của các chef
                </h3>
              </div>
              <div className="space-y-4">
                {featuredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Chef {article.chef} •{" "}
                        <span className="ml-1">{article.timeAgo}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tutorial Videos */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Clip hướng dẫn
                </h3>
              </div>
              <div className="space-y-4">
                {tutorialVideos.map((video) => (
                  <div
                    key={video.id}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayIcon className="w-5 h-5 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Chef {video.chef} •{" "}
                        <span className="ml-1">{video.duration}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Banner "Bạn cũng là đầu bếp?" */}
      <section className="relative py-16 mt-16">
        {/* Gradient Background - cam → đỏ đậm */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FF6B00 0%, #D32F2F 100%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-6 text-center text-white">
          {/* Tiêu đề chính */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Bạn cũng là đầu bếp?
          </h2>

          {/* Dòng phụ mô tả */}
          <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto font-light">
            Chia sẻ kinh nghiệm và kỹ thuật nấu ăn của bạn với cộng đồng
          </p>

          {/* Hai nút đặt ngang hàng */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Nút Phụ: "Tham gia ngay" - Nền trắng, chữ cam */}
            <button className="flex items-center gap-2 px-7 py-3 bg-white text-orange-600 font-semibold rounded-2xl hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
              <UserIcon className="w-5 h-5" />
              Tham gia ngay
            </button>

            {/* Nút Chính: "Đăng nội dung" - Nền trong suốt với blur, border trắng */}
            <button
              className="flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-2xl border hover:scale-105 hover:shadow-xl transition-all duration-300 transform backdrop-blur-sm"
              style={{
                backgroundColor: "#FFFFFF33",
                borderColor: "#FFFFFF4D",
                backdropFilter: "blur(4px)",
              }}
            >
              <ArrowUpTrayIcon className="w-5 h-5" />
              Đăng nội dung
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefCornerPage;
