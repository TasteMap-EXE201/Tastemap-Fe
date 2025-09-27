import React from 'react';
import Activity from './Activity';

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      avatar: "/api/placeholder/32/32",
      restaurantName: "Quán Cơm Tâm",
      timestamp: "2 giờ trước",
      title: "Món bún bò Huế đặc biệt cuối tuần",
      description: "Hôm nay quán có món bún bò Huế đặc biệt với nước dùng được ninh từ xương heo và thịt bò tươi ngon. Đặc biệt có thêm chả cua và giò heo thủ đức.",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      avatar: "/api/placeholder/32/32",
      restaurantName: "Bánh Mì Hương",
      timestamp: "5 giờ trước",
      title: "Ra mắt bánh mì thịt nướng mới",
      description: "Bánh mì thịt nướng với công thức gia truyền, thịt được ướp gia vị đặc biệt và nướng than hoa. Kèm theo pate gan tự làm và rau củ tươi.",
      likes: 31,
      comments: 12
    },
    {
      id: 3,
      avatar: "/api/placeholder/32/32",
      restaurantName: "Phở Hà Nội",
      timestamp: "1 ngày trước",
      title: "Phở bò đặc biệt tái chín",
      description: "Nước dùng được ninh từ xương bò suốt 12 tiếng, bánh phở tươi làm hàng ngày. Thịt bò nhập khẩu Australia, tái mỏng như lụa.",
      likes: 45,
      comments: 18
    },
    {
      id: 4,
      avatar: "/api/placeholder/32/32",
      restaurantName: "Bún Chả Hà Nội",
      timestamp: "2 ngày trước",
      title: "Bún chả nướng than hoa truyền thống",
      description: "Thịt heo được ướp gia vị 24h trước khi nướng. Than hoa tự nhiên tạo hương vị đặc trưng. Kèm bún tươi và nước mắm pha đặc biệt.",
      likes: 28,
      comments: 6
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Hoạt động gần đây
      </h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            avatar={activity.avatar}
            restaurantName={activity.restaurantName}
            timestamp={activity.timestamp}
            title={activity.title}
            description={activity.description}
            likes={activity.likes}
            comments={activity.comments}
          />
        ))}
      </div>
    </div>
  );
}