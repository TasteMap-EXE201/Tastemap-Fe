"use client";
import React from "react";
import { ArrowRightOnRectangleIcon, CheckIcon } from "@heroicons/react/24/outline";

interface Props {
    onCancel: () => void;
    onConfirm: () => void;
}

export default function LogoutSection({ onCancel, onConfirm }: Props) {
    return (
        <section className="max-w-2xl mx-auto">
            {/* Top Icon Badge */}
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                    <ArrowRightOnRectangleIcon className="w-8 h-8 text-red-500" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                Đăng xuất khỏi ứng dụng?
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-center mb-8 leading-relaxed">
                Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng
            </p>

            {/* Info Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Trước khi đăng xuất:
                </h4>
                <div className="space-y-3">
                    {[
                        "Dữ liệu đã được đồng bộ",
                        "Cài đặt đã được lưu",
                        "Không có thay đổi chưa lưu",
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
                <button
                    onClick={onCancel}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors duration-200 font-medium"
                >
                    Hủy
                </button>
                <button
                    onClick={onConfirm}
                    className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 transition-colors duration-200 font-semibold"
                >
                    Đăng xuất
                </button>
            </div>
        </section>
    );
}
