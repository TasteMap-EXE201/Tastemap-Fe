"use client";
import React from "react";

interface Mode {
    value: string;
    label: string;
    icon: React.ElementType;
}

interface Props {
    displayMode: string;
    setDisplayMode: (mode: string) => void;
    displayModes: Mode[];
}

export default function DisplayModeSection({ displayMode, setDisplayMode, displayModes }: Props) {
    return (
        <section>
            <h3 className="text-gray-800 font-semibold mb-4">Chế độ hiển thị</h3>
            <div className="space-y-2">
                {displayModes.map((mode) => {
                    const IconComponent = mode.icon;
                    return (
                        <label
                            key={mode.value}
                            className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${displayMode === mode.value
                                    ? "border-blue-500 bg-blue-50 text-blue-600"
                                    : "border-gray-200 hover:bg-gray-50 text-gray-700"
                                }`}
                        >
                            <input
                                type="radio"
                                name="displayMode"
                                value={mode.value}
                                checked={displayMode === mode.value}
                                onChange={(e) => setDisplayMode(e.target.value)}
                                className="sr-only"
                            />
                            <IconComponent className="w-5 h-5" />
                            <span className="font-medium">{mode.label}</span>
                        </label>
                    );
                })}
            </div>
        </section>
    );
}
