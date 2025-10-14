"use client";
import React from "react";

interface SidebarItem {
    id: string;
    icon: React.ElementType;
    label: string;
}

interface Props {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    sidebarItems: SidebarItem[];
}

export default function SettingsSidebar({ activeTab, setActiveTab, sidebarItems }: Props) {
    return (
        <div className="w-64 bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Cài đặt</h2>
            <div className="space-y-2">
                {sidebarItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                        <div
                            key={index}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${isActive
                                    ? "bg-blue-50 text-blue-600 border border-blue-500"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            <IconComponent className="w-5 h-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}