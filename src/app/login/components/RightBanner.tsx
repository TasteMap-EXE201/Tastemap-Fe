"use client";

import RoleSelector from "./LoginPage/RoleSelector";
import LoginForm from "./LoginPage/LoginForm";

const RightBanner = () => {
    return (
        <div className="relative w-1/2 h-screen flex items-center justify-center bg-white">
            {/* Form container */}
            <div className="absolute w-[448px] h-[850px] left-[136px] top-[295px] flex flex-col items-center justify-start gap-8">
                <RoleSelector />
                <LoginForm />
            </div>
        </div>
    );
};

export default RightBanner;
