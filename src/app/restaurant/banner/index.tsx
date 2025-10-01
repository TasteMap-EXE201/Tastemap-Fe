import React from "react";
import { RestaurantBanner } from "../../../component/restaurant/banner";

interface BannerProps {
  onNavigateToContact?: () => void;
}

export default function Banner({ onNavigateToContact }: BannerProps) {
  const restaurantData = {
    coverImage: "/restaurant/banner_hero.jpg",
    logo: "/restaurant/avatar_restaurant.jpg",
    name: "Quán Cơm Tấm Sài Gòn",
    description:
      "Hương vị truyền thống Sài Gòn từ năm 1995 - Cơm tấm ngon nhất thành phố",
    rating: 4.8,
    reviewCount: 1250,
    followCount: 5420,
  };

  return (
    <RestaurantBanner
      {...restaurantData}
      onNavigateToContact={onNavigateToContact}
    />
  );
}
