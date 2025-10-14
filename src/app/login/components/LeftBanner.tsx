import Image from "next/image";
import RestaurantIcon from "../icon/RestaurantIcon";
import CustomerIcon from "../icon/CustomerIcon";
import TrendingIcon from "../icon/GrowthIcon";

const LeftBanner = () => {
    return (
        <div className="relative w-1/2 h-screen">
            {/* Ảnh nền */}
            <Image
                src="/images/LeftBackGround.png"
                alt="Restaurant Background"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay gradient cam trong suốt + blur nhẹ */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/50 to-[#FF8C42]/50 backdrop-blur-[1px]"></div>

            {/* Logo + Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">

                <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">TasteMap</h1>
                <p className="text-lg mb-6 opacity-90">Nền tảng quảng cáo quán ăn hàng đầu</p>

                <div className="flex gap-10 mt-4 text-sm font-medium">
                    <div className="flex flex-col items-center gap-1">
                        <RestaurantIcon />
                        <span>Quán ăn</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <CustomerIcon />
                        <span>Khách hàng</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <TrendingIcon />
                        <span>Tăng trưởng</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBanner;
