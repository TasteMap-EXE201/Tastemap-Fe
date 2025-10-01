import React from 'react';
import Activity from './Activity';

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      avatar: "/restaurant/avatar_restaurant.jpg",
      restaurantName: "Quán Cơm Tấm Sài Gòn",
      timestamp: "2 giờ trước",
      title: "Công thức cơm tấm truyền thống",
      description: "Chia sẻ bí quyết làm cơm tấm ngon đúng vị Sài Gòn...",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      avatar: "/restaurant/avatar_restaurant.jpg",
      restaurantName: "Quán Cơm Tấm Sài Gòn",
      timestamp: "5 giờ trước",
      title: "Thực đơn mới tháng 12",
      description: "Chúng tôi vừa ra mắt những món ăn mới...",
      likes: 31,
      comments: 12
    },
  ];

  return (
    <div className="space-y-4">
     
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