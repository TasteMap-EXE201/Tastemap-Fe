"use client";
import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

export default function AccountSection() {
    return (
        <section className="text-center py-12">
            <UserIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Đổi tài khoản
            </h3>
        </section>
    );
}
