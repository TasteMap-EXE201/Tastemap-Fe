"use client";

import React, { useState } from "react";
import Header from "@/component/common/Header";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  MapPinIcon,
  EyeIcon,
  UserIcon,
  CalendarIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { MdBlock } from "react-icons/md";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filters, setFilters] = useState({
    area: "all",
    budget: "all",
    rating: "all",
    criteria: "all",
    cuisine: "all",
  });
  const [favorites, setFavorites] = useState<number[]>([]);
  const [blacklisted, setBlacklisted] = useState<number[]>([]);

  // Mock data cho danh mục phổ biến
  const popularCategories = [
    { id: 1, name: "Việt Nam", icon: "🍜", color: "bg-red-100 text-red-600" },
    { id: 2, name: "Nhật Bản", icon: "🍣", color: "bg-pink-100 text-pink-600" },
    {
      id: 3,
      name: "Hàn Quốc",
      icon: "🍲",
      color: "bg-orange-100 text-orange-600",
    },
    { id: 4, name: "Pháp", icon: "🥐", color: "bg-green-100 text-green-600" },
    {
      id: 5,
      name: "Ấn Độ",
      icon: "🍛",
      color: "bg-purple-100 text-purple-600",
    },
    { id: 6, name: "Ý", icon: "🍝", color: "bg-yellow-100 text-yellow-600" },
  ];

  // Mock data cho bài viết/nhà hàng
  const articles = [
    {
      id: 1,
      title: "Khám phá hương vị cà phê truyền thống Sài Gòn",
      description:
        "Những quán cà phê cổ kính giữa lòng Sài Gòn với hương vị đậm đà, truyền thống được lưu giữ qua nhiều thế hệ.",
      image: "/khám phá ẩm thực.png",
      author: "Nguyễn Văn A",
      date: "13/03/2024",
      views: "1.2k",
      location: "Quán Cà Phê Sài Gòn – Quận 1, TP.HCM",
      category: "Việt Nam",
    },
    {
      id: 2,
      title: "Bí quyết làm sushi chuẩn Nhật tại nhà",
      description:
        "Hướng dẫn chi tiết cách chọn nguyên liệu và kỹ thuật làm sushi như các đầu bếp chuyên nghiệp.",
      image: "/khám phá ẩm thực.png",
      author: "Trần Thị B",
      date: "12/03/2024",
      views: "2.5k",
      location: "Nhà hàng Sakura – Quận 3, TP.HCM",
      category: "Nhật Bản",
    },
    {
      id: 3,
      title: "Kimchi và những món ăn lên men của Hàn Quốc",
      description:
        "Khám phá văn hóa ẩm thực lên men độc đáo của Hàn Quốc và cách chúng mang lại lợi ích cho sức khỏe.",
      image: "/khám phá ẩm thực.png",
      author: "Lê Văn C",
      date: "11/03/2024",
      views: "1.8k",
      location: "Seoul Kitchen – Quận 7, TP.HCM",
      category: "Hàn Quốc",
    },
    {
      id: 4,
      title: "Nghệ thuật làm bánh croissant Pháp",
      description:
        "Từng lớp bơ mỏng manh tạo nên chiếc bánh croissant hoàn hảo - bí quyết từ các thầy bánh Pháp.",
      image: "/khám phá ẩm thực.png",
      author: "Phạm Thị D",
      date: "10/03/2024",
      views: "3.1k",
      location: "La Boulangerie – Quận 1, TP.HCM",
      category: "Pháp",
    },
    {
      id: 5,
      title: "Gia vị Ấn Độ và sức mạnh chữa lành",
      description:
        "Tìm hiểu về những loại gia vị đặc trưng của Ấn Độ và tác dụng tuyệt vời của chúng đối với sức khỏe.",
      image: "/khám phá ẩm thực.png",
      author: "Hoàng Văn E",
      date: "09/03/2024",
      views: "1.9k",
      location: "Spice Garden – Quận 2, TP.HCM",
      category: "Ấn Độ",
    },
    {
      id: 6,
      title: "Pasta tươi và bí quyết từ nước Ý",
      description:
        "Cách làm pasta tươi từ đầu với những nguyên liệu đơn giản nhưng tạo nên hương vị khó quên.",
      image: "/khám phá ẩm thực.png",
      author: "Vũ Thị F",
      date: "08/03/2024",
      views: "2.7k",
      location: "Nonna's Kitchen – Quận 3, TP.HCM",
      category: "Ý",
    },
  ];

  const handleSearch = () => {
    console.log("Tìm kiếm:", searchQuery);
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? "" : categoryName);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const toggleFavorite = (articleId: number) => {
    setFavorites((prev) =>
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  };

  const handleBlacklist = (articleId: number) => {
    setBlacklisted((prev) => [...prev, articleId]);
    // Cũng remove khỏi favorites nếu có
    setFavorites((prev) => prev.filter((id) => id !== articleId));
  };

  const filteredArticles = articles.filter((article) => {
    // Loại bỏ các bài viết bị blacklist
    if (blacklisted.includes(article.id)) {
      return false;
    }
    if (selectedCategory && article.category !== selectedCategory) {
      return false;
    }
    if (
      searchQuery &&
      !article.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !article.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96">
        <Image
          src="/khám phá ẩm thực.png"
          alt="Khám phá ẩm thực"
          fill
          className="object-cover -z-0"
          priority
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <h1 className="text-5xl font-bold mb-4 text-center">
            Khám Phá Ẩm Thực
          </h1>
          <p className="text-xl mb-8 text-center opacity-90">
            Tìm kiếm nhà hàng yêu thích của bạn
          </p>

          {/* Search Bar */}
          <div
            className="w-full max-w-2xl bg-white rounded-full shadow-[0px_2px_6px_rgba(0,0,0,0.15)] p-1.5 flex items-center mx-auto"
            style={{ borderRadius: "50px" }}
          >
            <input
              type="text"
              placeholder="Tìm kiếm món ăn, nhà hàng, khu vực..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800 text-base bg-transparent border-0 rounded-full"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                color: "#757575",
                padding: "12px 20px",
              }}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-blue-800 hover:bg-blue-600 active:bg-blue-900 text-white font-medium transition-all duration-200 flex items-center gap-2 rounded-full"
              style={{
                backgroundColor: "#1E40AF",
                fontFamily: "Roboto, sans-serif",
                fontSize: "15px",
                fontWeight: "500",
                minWidth: "120px",
              }}
            >
              <MagnifyingGlassIcon className="w-4 h-4" />
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        {/* Popular Categories */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Danh mục phổ biến
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category.name
                    ? `${category.color} border-current shadow-md`
                    : `${category.color} border-transparent hover:border-current`
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-medium text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Bộ lọc tìm kiếm
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <select
              value={filters.area}
              onChange={(e) => handleFilterChange("area", e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">Khu vực - Tất cả</option>
              <option value="district1">Quận 1</option>
              <option value="district3">Quận 3</option>
              <option value="district7">Quận 7</option>
              <option value="district2">Quận 2</option>
            </select>

            <select
              value={filters.budget}
              onChange={(e) => handleFilterChange("budget", e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">Ngân sách - Tất cả</option>
              <option value="budget">Bình dân (&lt; 100k)</option>
              <option value="mid">Trung bình (100k - 300k)</option>
              <option value="high">Cao cấp (&gt; 300k)</option>
            </select>

            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange("rating", e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">Đánh giá - Tất cả</option>
              <option value="5">5 sao</option>
              <option value="4">4 sao trở lên</option>
              <option value="3">3 sao trở lên</option>
            </select>

            <select
              value={filters.criteria}
              onChange={(e) => handleFilterChange("criteria", e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">Tiêu chí - Tất cả</option>
              <option value="popular">Phổ biến</option>
              <option value="newest">Mới nhất</option>
              <option value="nearest">Gần nhất</option>
            </select>

            <select
              value={filters.cuisine}
              onChange={(e) => handleFilterChange("cuisine", e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">Món ăn - Tất cả</option>
              <option value="main">Món chính</option>
              <option value="appetizer">Khai vị</option>
              <option value="dessert">Tráng miệng</option>
              <option value="drink">Đồ uống</option>
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Meta Information */}
                <div className="space-y-3 mb-4">
                  {/* Hàng trên: Tác giả và ngày đăng */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Hàng dưới: Lượt xem và lượt thích */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="w-3 h-3" />
                      <span>{article.views} lượt xem</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HandThumbUpIcon className="w-3 h-3 text-gray-400" />
                      <span
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        89 thích
                      </span>
                    </div>
                  </div>

                  {/* Địa điểm */}
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "#FF5722" }}
                  >
                    <MapPinIcon
                      className="w-3 h-3"
                      style={{ color: "#FF5722" }}
                    />
                    <span>{article.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start gap-2">
                    {/* Nút yêu thích */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleFavorite(article.id)}
                        className={`transition-all duration-200 ${
                          favorites.includes(article.id)
                            ? "bg-red-50 hover:bg-red-100 px-2.5 py-1.5 rounded-2xl"
                            : "bg-gray-100 hover:bg-red-50 w-9 h-9 rounded-full flex items-center justify-center"
                        }`}
                      >
                        {favorites.includes(article.id) ? (
                          <HeartSolidIcon
                            className="w-4 h-4"
                            style={{ color: "#E53935" }}
                          />
                        ) : (
                          <HeartIcon
                            className="w-4 h-4"
                            style={{ color: "#F44336" }}
                          />
                        )}
                      </button>

                      {/* Nút blacklist */}
                      <button
                        onClick={() => handleBlacklist(article.id)}
                        className="bg-gray-100 hover:bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        <MdBlock className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Text "Yêu thích" khi đã yêu thích */}
                    {favorites.includes(article.id) && (
                      <span
                        className="text-xs"
                        style={{
                          color: "#E53935",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Yêu thích
                      </span>
                    )}
                  </div>

                  <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    Đọc thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
            Tải thêm bài viết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
