"use client";
import { useState } from "react";
import { UserIcon, BuildingStorefrontIcon } from "@heroicons/react/24/outline";

const RoleSelector = () => {
    const [role, setRole] = useState<"owner" | "customer" | null>(null);

    return (
        <div className="w-[448px] flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Chọn vai trò của bạn</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Chủ quán ăn */}
                <button
                    onClick={() => setRole("owner")}
                    className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${role === "owner"
                            ? "border-orange-500 bg-orange-50 shadow-sm"
                            : "border-gray-200 bg-white hover:bg-gray-50"
                        }`}
                >
                    <BuildingStorefrontIcon className="w-8 h-8 text-orange-500 mb-2" />
                    <span className="font-semibold text-gray-900">Chủ quán ăn</span>
                    <span className="text-sm text-gray-500 mt-1">
                        Quảng bá quán ăn của bạn
                    </span>
                </button>

                {/* Khách hàng */}
                <button
                    onClick={() => setRole("customer")}
                    className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${role === "customer"
                            ? "border-orange-500 bg-orange-50 shadow-sm"
                            : "border-gray-200 bg-white hover:bg-gray-50"
                        }`}
                >
                    <UserIcon className="w-8 h-8 text-orange-500 mb-2" />
                    <span className="font-semibold text-gray-900">Khách hàng</span>
                    <span className="text-sm text-gray-500 mt-1">
                        Khám phá quán ăn ngon
                    </span>
                </button>
            </div>
        </div>
    );
};

export default RoleSelector;
