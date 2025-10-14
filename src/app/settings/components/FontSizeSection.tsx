"use client";
import React from "react";

interface Props {
    fontSize: number;
    setFontSize: (size: number) => void;
}

export default function FontSizeSection({ fontSize, setFontSize }: Props) {
    return (
        <section>
            <h3 className="text-gray-800 font-semibold mb-4">Cỡ chữ</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Nhỏ</span>
                    <span>Lớn</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                        background: `linear-gradient(to right, #2563EB 0%, #2563EB ${fontSize}%, #e5e7eb ${fontSize}%, #e5e7eb 100%)`,
                    }}
                />
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700" style={{ fontSize: `${12 + (fontSize / 100) * 8}px` }}>
                        Văn bản mẫu để xem trước cỡ chữ.
                    </p>
                </div>
            </div>
        </section>
    );
}
