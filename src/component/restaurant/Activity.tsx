import React from 'react';

interface ActivityProps {
  avatar: string;
  restaurantName: string;
  timestamp: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
}

export default function Activity({
  avatar,
  restaurantName,
  timestamp,
  title,
  description,
  likes,
  comments
}: ActivityProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-5 space-y-3">
      {/* Header Row */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={avatar} 
            alt={restaurantName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center space-x-1 min-w-0">
          <span className="font-semibold text-gray-900 truncate">
            {restaurantName}
          </span>
          <span className="text-gray-500 text-sm">·</span>
          <span className="text-gray-500 text-sm whitespace-nowrap">
            {timestamp}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900 text-base">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Footer Row - Interaction Stats */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <span className="text-sm">❤️</span>
          <span className="text-gray-500 text-sm">{likes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-sm">💬</span>
          <span className="text-gray-500 text-sm">{comments}</span>
        </div>
      </div>
    </div>
  );
}