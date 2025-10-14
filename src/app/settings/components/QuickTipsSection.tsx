"use client";
import React from "react";

interface Tip {
    icon: React.ElementType;
    title: string;
    description: string;
    bgColor: string;
    iconColor: string;
    textColor: string;
}

interface Props {
    quickTips: Tip[];
}

export default function QuickTipsSection({ quickTips }: Props) {
    return (
        <section>
            <h3 className="text-gray-900 font-bold text-xl mb-6">Mẹo nhanh</h3>
            <div className="space-y-4">
                {quickTips.map((tip, index) => {
                    const IconComponent = tip.icon;
                    return (
                        <div
                            key={index}
                            className="p-4 rounded-lg flex items-center gap-4"
                            style={{ backgroundColor: tip.bgColor }}
                        >
                            <div
                                className="p-3 rounded-full"
                                style={{ backgroundColor: tip.iconColor + "20" }}
                            >
                                <IconComponent
                                    className="w-5 h-5"
                                    style={{ color: tip.iconColor }}
                                />
                            </div>
                            <div className="flex-1">
                                <h4
                                    className="font-semibold mb-1"
                                    style={{ color: tip.textColor }}
                                >
                                    {tip.title}
                                </h4>
                                <p
                                    className="text-sm"
                                    style={{ color: tip.textColor + "CC" }}
                                >
                                    {tip.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
