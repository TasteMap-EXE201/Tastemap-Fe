"use client";

import React from "react";

const features = [
    {
        title: "Tìm kiếm Thông minh",
        desc: "Tìm nhà hàng, món ăn theo vị trí, giá cả và sở thích cá nhân",
        color: "linear-gradient(135deg, #FB923C 0%, #EF4444 100%)",
        icon: (
            <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
            />
        ),
    },
    {
        title: "Đánh giá Chân thực",
        desc: "Hệ thống đánh giá minh bạch từ cộng đồng người dùng thực",
        color: "linear-gradient(135deg, #34D399 0%, #14B8A6 100%)",
        icon: (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292..." />
        ),
    },
    {
        title: "Định vị Chính xác",
        desc: "Tìm nhà hàng gần bạn với thông tin chi tiết và chỉ đường",
        color: "linear-gradient(135deg, #818CF8 0%, #A855F7 100%)",
        icon: (
            <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z..."
                clipRule="evenodd"
            />
        ),
    },
    {
        title: "Cộng đồng Sôi động",
        desc: "Kết nối với những người có cùng đam mê ẩm thực",
        color: "linear-gradient(135deg, #F472B6 0%, #F43F5E 100%)",
        icon: (
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8..."
                clipRule="evenodd"
            />
        ),
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-bold text-gray-900 mb-6 text-3xl">
                        Tính Năng Nổi Bật
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg font-normal">
                        Những tính năng được thiết kế đặc biệt để mang đến trải nghiệm tốt
                        nhất cho cộng đồng yêu ẩm thực
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {features.map((f, i) => (
                        <div key={i} className="text-center">
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                                style={{ background: f.color }}
                            >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    {f.icon}
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mt-4 text-xl">{f.title}</h3>
                            <p className="text-gray-600 mt-1 text-base">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
