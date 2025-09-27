import React from 'react';
import StatCard from '../../../component/restaurant/StatCard';
import RecentActivities from '../../../component/restaurant/recentActivities';

export default function Overview() {
  return (
    <div className="space-y-6">

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon="📖"
          number="25"
          title="Câu chuyện"
          text="Những câu chuyện thú vị về lịch sử và truyền thống ẩm thực"
          bgColor="bg-gradient-to-tr from-purple-500 to-purple-700"
          iconColor="text-white"
          numberColor="text-white"
          titleColor="text-white"
          textColor="text-purple-100"
        />
        
        <StatCard
          icon="📰"
          number="40"
          title="Bài viết"
          text="Các bài viết đánh giá và chia sẻ kinh nghiệm ẩm thực"
          bgColor="bg-gradient-to-br from-green-500 to-green-700"
          iconColor="text-white"
          numberColor="text-white"
          titleColor="text-white"
          textColor="text-purple-100"
        />
        
        <StatCard
          icon="🍽️"
          number="120"
          title="Thực đơn"
          text="Món ăn đa dạng từ các vùng miền khắp Việt Nam"
          bgColor="bg-gradient-to-br from-orange-500 via-orange-500 to-orange-700"
          iconColor="text-white"
          numberColor="text-white"
          titleColor="text-white"
          textColor="text-purple-100"
        />
      </div>

      {/* Recent Activities Section */}
      <RecentActivities />
    </div>
  );
}