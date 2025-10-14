"use client";

import { FaGoogle, FaFacebookF } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="w-[448px] bg-white shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">Đăng nhập</h2>
            <p className="text-center text-gray-500 mb-6">Chào mừng bạn trở lại!</p>

            <form className="space-y-5">
                {/* Email field */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">
                            {/* Gmail Icon */}
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB" />
                                <path
                                    d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z"
                                    fill="#9CA3AF"
                                />
                            </svg>
                        </span>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none placeholder-gray-400"
                            placeholder="Nhập email của bạn"
                        />
                    </div>
                </div>

                {/* Password field */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Mật khẩu</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">
                            {/* Password Icon */}
                            <svg
                                width="14"
                                height="16"
                                viewBox="0 0 14 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_303_297)">
                                    <path
                                        d="M4.5 4.5V6H9.5V4.5C9.5 3.11875 8.38125 2 7 2C5.61875 2 4.5 3.11875 4.5 4.5ZM2.5 6V4.5C2.5 2.01562 4.51562 0 7 0C9.48438 0 11.5 2.01562 11.5 4.5V6H12C13.1031 6 14 6.89687 14 8V14C14 15.1031 13.1031 16 12 16H2C0.896875 16 0 15.1031 0 14V8C0 6.89687 0.896875 6 2 6H2.5Z"
                                        fill="#9CA3AF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_303_297">
                                        <path d="M0 0H14V16H0V0Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none placeholder-gray-400"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                </div>

                {/* Checkbox + Forgot password */}
                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                        <span className="text-gray-700">Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" className="text-orange-500 font-medium hover:underline">
                        Quên mật khẩu?
                    </a>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold transition-all duration-200"
                >
                    Đăng nhập
                </button>

                {/* OR */}
                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-400 text-sm">Hoặc đăng nhập với</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Social buttons */}
                <div className="flex justify-center gap-4">
                    <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                        <FaGoogle className="text-red-500 text-lg" />
                        <span className="font-medium text-gray-700">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                        <FaFacebookF className="text-blue-600 text-lg" />
                        <span className="font-medium text-gray-700">Facebook</span>
                    </button>
                </div>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-6">
                Chưa có tài khoản?{" "}
                <a href="#" className="text-orange-500 font-semibold hover:underline">
                    Đăng ký ngay
                </a>
            </p>
        </div>
    );
};

export default LoginForm;
