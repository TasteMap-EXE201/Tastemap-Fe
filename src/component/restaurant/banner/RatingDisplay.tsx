import React from "react";
import { Star } from "lucide-react";

interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
  followCount: number;
  className?: string;
}

export default function RatingDisplay({
  rating,
  reviewCount,
  followCount,
  className = "",
}: RatingDisplayProps) {
  return (
    <div className={`flex items-center space-x-6 text-sm ${className}`}>
      <div className="flex items-center space-x-1">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="text-white font-medium">{rating}</span>
      </div>

      <div className="text-gray-200">
        {reviewCount.toLocaleString("vi-VN")} đánh giá
      </div>

      <div className="text-gray-200">
        {followCount.toLocaleString("vi-VN")} theo dõi
      </div>
    </div>
  );
}
