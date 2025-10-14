"use client";

import LeftBanner from "./components/LeftBanner";
import RoleSelector from "./components/LoginPage/RoleSelector";
import LoginForm from "./components/LoginPage/LoginForm";

export default function LoginPage() {
    return (
        <main className="flex w-full h-screen overflow-hidden bg-white font-sans">
            {/* Bên trái: Ảnh nền + overlay + logo + slogan */}
            <LeftBanner />

            {/* Bên phải: form đăng nhập */}
            <section className="w-1/2 h-full bg-[#FFF6F0] flex flex-col justify-center items-center relative">
                <div className="flex flex-col items-center gap-10">
                    {/* Chọn vai trò */}
                    <RoleSelector />

                    {/* Form đăng nhập */}
                    <LoginForm />
                </div>
            </section>
        </main>
    );
}
