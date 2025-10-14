"use client";

import React from "react";
import Image from "next/image";

const members = [
    {
        name: "Nguyễn Minh Tuấn",
        role: "CEO & Founder",
        color: "#EA580C",
        image: "/images/minh-tuan.png",
        desc: "10 năm kinh nghiệm trong lĩnh vực công nghệ và ẩm thực. Đam mê kết nối cộng đồng qua món ăn.",
    },
    {
        name: "Trần Việt Anh",
        role: "CTO",
        color: "#16A34A",
        image: "/images/viet-anh.png",
        desc: "Chuyên gia công nghệ với 8 năm kinh nghiệm phát triển ứng dụng di động và web platform.",
    },
    {
        name: "Lê Thị Hương",
        role: "CMO",
        color: "#9333EA",
        image: "/images/huong.png",
        desc: "Chuyên gia marketing với niềm đam mê xây dựng thương hiệu và kết nối cộng đồng.",
    },
];

const TeamSection: React.FC = () => {
    return (
        <section className="py-20 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-bold text-gray-900 mb-6 text-3xl">Đội Ngũ Của Chúng Tôi</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-16">
                    Những con người đầy đam mê đứng sau Story Ẩm thực
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                    {members.map((m, i) => (
                        <div key={i} className="text-center group">
                            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                                <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{m.name}</h3>
                            <p className="text-lg mb-4 font-medium" style={{ color: m.color }}>{m.role}</p>
                            <p className="text-gray-600 font-normal">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
