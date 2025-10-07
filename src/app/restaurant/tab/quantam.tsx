import React from "react";

// Interface for follower data
interface Follower {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

// Props interface for the main component
interface QuanTamProps {
  followers?: Follower[];
  isLoading?: boolean;
  onViewFollower?: (followerId: string) => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

// Follower Card Component
interface FollowerCardProps {
  follower: Follower;
  onView: (followerId: string) => void;
}

const FollowerCard: React.FC<FollowerCardProps> = ({ follower, onView }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl px-4 py-3 hover:shadow-sm transition-shadow duration-200 w-full"
      style={{ height: "80px" }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Avatar + User Info */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="flex-shrink-0 mr-3">
            <img
              src={follower.avatar}
              alt={follower.name}
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                // Fallback to default avatar if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  follower.name
                )}&background=f3f4f6&color=374151&size=40`;
              }}
            />
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 truncate">
              {follower.name}
            </h3>
            <p className="text-sm text-gray-500">{follower.status}</p>
          </div>
        </div>

        {/* View Button */}
        <div className="flex-shrink-0">
          <button
            onClick={() => onView(follower.id)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200"
          >
            Xem
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function QuanTam({
  followers = [],
  isLoading = false,
  onViewFollower,
  onLoadMore,
  hasMore = false,
}: QuanTamProps) {
  const handleViewFollower = (followerId: string) => {
    if (onViewFollower) {
      onViewFollower(followerId);
    } else {
      console.log("Viewing follower:", followerId);
    }
  };

  const handleLoadMore = () => {
    if (onLoadMore) {
      onLoadMore();
    }
  };

  return (
    <div className="bg-white p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Những người quan tâm
        </h2>
        <div className="text-sm text-gray-500">
          {followers.length} người theo dõi
        </div>
      </div>

      {/* Followers List */}
      <div>
        {isLoading ? (
          // Loading state
          <div className="text-center py-8">
            <div className="text-gray-400">Đang tải...</div>
          </div>
        ) : followers.length > 0 ? (
          // Followers list - 3 cards per row
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {followers.map((follower) => (
              <FollowerCard
                key={follower.id}
                follower={follower}
                onView={handleViewFollower}
              />
            ))}
          </div>
        ) : (
          // Empty state
          <div className="text-center py-12">
            <div className="text-gray-400 text-4xl mb-4">👥</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Chưa có người theo dõi
            </h3>
            <p className="text-gray-600">
              Khi có người quan tâm đến nhà hàng, họ sẽ xuất hiện ở đây.
            </p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {followers.length > 0 && hasMore && (
        <div className="text-center pt-6">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
}
