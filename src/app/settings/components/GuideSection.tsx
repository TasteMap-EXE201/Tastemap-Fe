"use client";
import React from "react";

interface GuideItem {
    icon: React.ElementType;
    title: string;
    description: string;
    color?: string;
    iconBg?: string;
}

interface Props {
    guideItems: GuideItem[];
}

export default function GuideSection({ guideItems }: Props) {
    return (
        <section>
            <h3 className="text-gray-900 font-bold text-xl mb-6">
                Hướng dẫn sử dụng
            </h3>
            <div className="grid grid-cols-2 gap-6">
                {guideItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className={`p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-all duration-200 ${item.color || ""}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-full ${item.iconBg || "bg-gray-100"}`}>
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
