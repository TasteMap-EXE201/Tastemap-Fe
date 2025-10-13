import React, { useState } from 'react';
import { Heart, MessageCircle, Ban } from 'lucide-react';
import RatingDisplay from './RatingDisplay';
import ActionButton from './ActionButton';

interface RestaurantBannerProps {
  coverImage: string;
  logo: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  followCount: number;
  onNavigateToContact?: () => void;
}

export default function RestaurantBanner({
  coverImage,
  logo,
  name,
  description,
  rating,
  reviewCount,
  followCount,
  onNavigateToContact
}: RestaurantBannerProps) {
  const [isBlacklisted, setIsBlacklisted] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleContact = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      console.log('Contact clicked - no navigation handler provided');
    }
  };

  const handleBlacklist = () => {
    if (isBlacklisted) {
      // Nếu đang blacklist, click để tắt
      setIsBlacklisted(false);
    } else {
      // Nếu chưa blacklist, click để bật và tắt favorite
      setIsBlacklisted(true);
      setIsFavorited(false);
    }
  };

  const handleFavorite = () => {
    if (isFavorited) {
      setIsFavorited(false);
    } else {
      setIsFavorited(true);
      setIsBlacklisted(false);
    }
  };

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative h-full flex items-end p-6">
        <div className="flex items-end justify-between w-full">
          <div className="flex items-end space-x-4">
            <div className="w-24 h-24 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pb-2">
              <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
              <p className="text-gray-100 text-base mb-3 max-w-md">{description}</p>

              <RatingDisplay
                rating={rating}
                reviewCount={reviewCount}
                followCount={followCount}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pb-2">

            <div></div>

            <ActionButton
              icon={MessageCircle}
              label="Liên hệ"
              onClick={handleContact}
              variant="primary"
            />

            <ActionButton
              icon={Ban}
              label="Blacklist"
              onClick={handleBlacklist}
              variant="blacklist"
              isActive={isBlacklisted}
            />

            <ActionButton
              icon={Heart}
              label="Yêu thích"
              onClick={handleFavorite}
              variant="favorite"
              isActive={isFavorited}
            />
          </div>
        </div>
      </div>
    </div>
  );
}