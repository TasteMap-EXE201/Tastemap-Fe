"use client";
import React from "react";

interface ColorOption {
    name: string;
    value: string;
    color: string;
}

interface Props {
    selectedColor: string;
    setSelectedColor: (color: string) => void;
    colors: ColorOption[];
}

export default function ColorThemeSection({ selectedColor, setSelectedColor, colors }: Props) {
    return (
        <section>
            <h3 className="text-gray-800 font-semibold mb-4">Màu chủ đạo</h3>
            <div className="grid grid-cols-6 gap-4">
                {colors.map((color) => (
                    <div
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className="text-center p-3 rounded-lg cursor-pointer transition-all duration-200"
                        style={{
                            borderWidth: "2px",
                            borderStyle: "solid",
                            borderColor: selectedColor === color.value ? "#1F2937" : "#E5E7EB",
                        }}
                    >
                        <button
                            className={`w-10 h-10 rounded-full ${color.color} transition-all duration-200 ${selectedColor === color.value
                                ? "ring-2 ring-blue-500 ring-offset-2"
                                : "hover:scale-110"
                                } mx-auto block`}
                        />
                        <p className="text-sm text-gray-700 mt-1">{color.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
