"use client";

import React from "react";
import Link from "next/link";
import { MdOutlineExplore } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";

const FooterCTA: React.FC = () => {
    return (
        <section
            className="relative py-20 px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/images/footer-cta.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 relative left-[-25rem]">
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
                            style={{ background: "linear-gradient(135deg, #FF6A00 0%, #FF3CAC 100%)" }}
                        >
                            <MdOutlineExplore size={18} />
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
    );
};

export default FooterCTA;
