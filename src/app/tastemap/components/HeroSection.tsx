"use client";

import React from "react";

const HeroSection: React.FC = () => {
    return (
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
                                background: "linear-gradient(135deg, #FF4DFF 0%, #FF9900 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Story{" "}
                        </span>
                        <span
                            className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(135deg, #FF4DFF 0%, #FF9900 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Ẩm thực
                        </span>
                    </h1>
                </div>
                <p
                    className="text-base md:text-lg max-w-4xl mx-auto mt-6 leading-relaxed px-6 font-normal text-center"
                    style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        lineHeight: "1.6",
                    }}
                >
                    Nền tảng kết nối cộng đồng yêu ẩm thực, nơi mọi người chia sẻ trải
                    nghiệm và khám phá <br />
                    những câu chuyện đặc biệt về món ăn
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
