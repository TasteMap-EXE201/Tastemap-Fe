"use client";

import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const MissionSection: React.FC = () => {
    return (
        <section className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            className="font-bold text-gray-900 mb-6 relative left-[-8rem] top-[-5rem]"
                            style={{ fontSize: "36px" }}
                        >
                            Sứ Mệnh Của Chúng Tôi
                        </h2>
                        <p
                            className="text-gray-600 mb-6 leading-relaxed font-normal relative left-[-8rem] top-[-5rem]"
                            style={{ fontSize: "18px" }}
                        >
                            Story Ẩm thực được sinh ra với mục tiêu kết nối những người yêu
                            thích ẩm thực trên khắp Việt Nam. Chúng tôi tin rằng mỗi món ăn
                            đều có một câu chuyện riêng, và mỗi câu chuyện đều xứng đáng
                            được chia sẻ.
                        </p>
                        <p
                            className="text-gray-600 leading-relaxed font-normal relative left-[-8rem] top-[-5rem] mb-8"
                            style={{ fontSize: "18px" }}
                        >
                            Với sự kết hợp giữa công nghệ hiện đại và tình yêu ẩm thực
                            truyền thống, chúng tôi tạo ra một không gian để mọi người có
                            thể khám phá, học hỏi và kết nối thông qua đam mê chung.
                        </p>

                        <div className="flex items-center relative left-[-8rem] top-[-5rem]">
                            <div
                                className="w-16 h-16 rounded-lg flex items-center justify-center mr-4"
                                style={{
                                    background: "linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)",
                                }}
                            >
                                <CiHeart className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: "18px" }}>
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
    );
};

export default MissionSection;
