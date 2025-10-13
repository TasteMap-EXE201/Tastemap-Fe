"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../component/common/Header";
import { CiHeart } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";

const TasteMapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header currentPage="homepage" />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center font-sans">
          <div className="flex flex-col items-center mt-2">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-2 relative left-[-38rem]">
              Về
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
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
            </h1>
          </div>
          <p
            className="text-base md:text-lg max-w-4xl mx-auto mt-6 leading-relaxed px-6 font-normal text-center "
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: "1.6",
            }}
          >
            Nền tảng kết nối cộng đồng yêu ẩm thực, nơi mọi người chia sẻ trải
            nghiệm và khám phá
            <br />
            những câu chuyện đặc biệt về món ăn
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div>
              <h2
                className="font-bold text-gray-900 mb-6 relative left-[-8rem] relative top-[-5rem]"
                style={{ fontSize: "36px" }}
              >
                Sứ Mệnh Của Chúng Tôi
              </h2>
              <p
                className="text-gray-600 mb-6 leading-relaxed font-normal relative left-[-8rem] relative top-[-5rem]"
                style={{ fontSize: "18px" }}
              >
                Story Ẩm thực được sinh ra với mục tiêu kết nối những người yêu
                thích ẩm thực trên khắp Việt Nam. Chúng tôi tin rằng mỗi món ăn
                đều có một câu chuyện riêng, và mỗi câu chuyện đều xứng đáng
                được chia sẻ.
              </p>
              <p
                className="text-gray-600 leading-relaxed font-normal relative left-[-8rem] relative top-[-5rem] mb-8"
                style={{ fontSize: "18px" }}
              >
                Với sự kết hợp giữa công nghệ hiện đại và tình yêu ẩm thực
                truyền thống, chúng tôi tạo ra một không gian để mọi người có
                thể khám phá, học hỏi và kết nối thông qua đam mê chung.
              </p>

              {/* Icon with Heart and Text */}
              <div className="flex items-center relative left-[-8rem] relative top-[-5rem]">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mr-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)",
                  }}
                >
                  <CiHeart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    className="font-bold text-gray-900 mb-1"
                    style={{ fontSize: "18px" }}
                  >
                    Đam mê Ẩm thực
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: "16px" }}>
                    Kết nối qua tình yêu món ăn
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/mission-team.png"
                alt="Mission Team"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-bold text-gray-900 mb-6"
              style={{ fontSize: "36px" }}
            >
              Tính Năng Nổi Bật
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto font-normal"
              style={{ fontSize: "18px" }}
            >
              Những tính năng được thiết kế đặc biệt để mang đến trải nghiệm tốt
              nhất cho cộng đồng yêu ẩm thực
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {/* Feature 1 - Tìm kiếm Thông minh */}
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #FB923C 0%, #EF4444 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3
                className="font-semibold text-gray-900 mt-4"
                style={{ fontSize: "20px" }}
              >
                Tìm kiếm Thông minh
              </h3>
              <p className="text-gray-600 mt-1" style={{ fontSize: "16px" }}>
                Tìm nhà hàng, món ăn theo vị trí, giá cả và sở thích cá nhân
              </p>
            </div>

            {/* Feature 2 - Đánh giá Chân thực */}
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #34D399 0%, #14B8A6 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3
                className="font-semibold text-gray-900 mt-4"
                style={{ fontSize: "20px" }}
              >
                Đánh giá Chân thực
              </h3>
              <p className="text-gray-600 mt-1" style={{ fontSize: "16px" }}>
                Hệ thống đánh giá minh bạch từ cộng đồng người dùng thực
              </p>
            </div>

            {/* Feature 3 - Định vị Chính xác */}
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #818CF8 0%, #A855F7 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3
                className="font-semibold text-gray-900 mt-4"
                style={{ fontSize: "20px" }}
              >
                Định vị Chính xác
              </h3>
              <p className="text-gray-600 mt-1" style={{ fontSize: "16px" }}>
                Tìm nhà hàng gần bạn với thông tin chi tiết và chỉ đường
              </p>
            </div>

            {/* Feature 4 - Cộng đồng Sôi động */}
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #F472B6 0%, #F43F5E 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3
                className="font-semibold text-gray-900 mt-4"
                style={{ fontSize: "20px" }}
              >
                Cộng đồng Sôi động
              </h3>
              <p className="text-gray-600 mt-1" style={{ fontSize: "16px" }}>
                Kết nối với những người có cùng đam mê ẩm thực
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12 lg:p-16 text-white text-center"
            style={{
              background:
                "linear-gradient(to right, #F97316, #EF4444, #EC4899)",
            }}
          >
            <h2 className="font-bold mb-6" style={{ fontSize: "36px" }}>
              Con Số Ấn Tượng
            </h2>
            <p
              className="mb-12"
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Cộng đồng Story Ẩm thực đang phát triển mạnh mẽ
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div
                  className="font-extrabold text-white mb-2"
                  style={{ fontSize: "48px" }}
                >
                  15,000+
                </div>
                <div
                  className="font-semibold text-white mt-2"
                  style={{ fontSize: "18px" }}
                >
                  Nhà hàng
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Trên toàn quốc
                </div>
              </div>
              <div>
                <div
                  className="font-extrabold text-white mb-2"
                  style={{ fontSize: "48px" }}
                >
                  200K+
                </div>
                <div
                  className="font-semibold text-white mt-2"
                  style={{ fontSize: "18px" }}
                >
                  Người dùng
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Hoạt động tích cực
                </div>
              </div>
              <div>
                <div
                  className="font-extrabold text-white mb-2"
                  style={{ fontSize: "48px" }}
                >
                  50K+
                </div>
                <div
                  className="font-semibold text-white mt-2"
                  style={{ fontSize: "18px" }}
                >
                  Stories
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Được chia sẻ
                </div>
              </div>
              <div>
                <div
                  className="font-extrabold text-white mb-2"
                  style={{ fontSize: "48px" }}
                >
                  1M+
                </div>
                <div
                  className="font-semibold text-white mt-2"
                  style={{ fontSize: "18px" }}
                >
                  Đánh giá
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Chân thực
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-bold text-gray-900 mb-6"
              style={{ fontSize: "36px" }}
            >
              Đội Ngũ Của Chúng Tôi
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto font-normal"
              style={{ fontSize: "18px" }}
            >
              Những con người đầy đam mê đứng sau Story Ẩm thực
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <Image
                  src="/images/minh-tuan.png"
                  alt="Minh Tuấn"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Nguyễn Minh Tuấn
              </h3>
              <p
                className="text-lg mb-4 font-medium"
                style={{ color: "#EA580C" }}
              >
                CEO & Founder
              </p>
              <p className="text-gray-600 font-normal">
                10 năm kinh nghiệm trong lĩnh vực công nghệ và ẩm thực. Đam mê
                kết nối cộng đồng qua món ăn.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <Image
                  src="/images/viet-anh.png"
                  alt="Việt Anh"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Trần Việt Anh
              </h3>
              <p className="text-lg text-green-600 mb-4 font-medium">CTO</p>
              <p className="text-gray-600 font-normal">
                Chuyên gia công nghệ với 8 năm kinh nghiệm phát triển ứng dụng
                di động và web platform.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <Image
                  src="/images/huong.png"
                  alt="Hương"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Lê Thị Hương
              </h3>
              <p className="text-lg text-purple-600 mb-4 font-medium">CMO</p>
              <p className="text-gray-600 font-normal">
                Chuyên gia marketing với niềm đam mê xây dựng thương hiệu và kết
                nối cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative py-20 px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/footer-cta.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 relative left-[-25rem] ">
            Sẵn sàng tham gia
          </h2>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Story Ẩm thực?
            </span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4 leading-relaxed mb-8">
            Hãy bắt đầu hành trình khám phá ẩm thực cùng chúng tôi ngay hôm nay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explore">
              <button
                className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6A00 0%, #FF3CAC 100%)",
                }}
              >
                <MdOutlineExplore
                  size={18}
                  style={{
                    color: "#FFFFFF",
                    flexShrink: 0,
                  }}
                />
                Khám phá ngay
              </button>
            </Link>
            <button
              className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 justify-center"
              onClick={() => (window.location.href = "/homepage")}
            >
              <BiHomeAlt2 size={18} />
              Về trang chủ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TasteMapPage;
