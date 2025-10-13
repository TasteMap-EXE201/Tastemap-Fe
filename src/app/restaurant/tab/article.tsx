import RecentActivities from '@/component/restaurant/recentActivities';
import React from 'react';
import { Plus } from 'lucide-react';

export default function Article() {
  const articles = [
    {
      title: 'Bí quyết làm món phở truyền thống',
      date: '15/12/2023',
      summary: 'Khám phá những bí quyết để có được một tô phở đúng chuẩn với nước dùng trong veo, thơm ngon...',
      readTime: '5 phút đọc'
    },
    {
      title: 'Văn hóa ẩm thực Việt Nam qua từng món ăn',
      date: '10/12/2023',
      summary: 'Mỗi món ăn Việt Nam đều mang trong mình một câu chuyện, một nét văn hóa độc đáo...',
      readTime: '7 phút đọc'
    },
    {
      title: 'Nguyên liệu tươi ngon - Chìa khóa thành công',
      date: '05/12/2023',
      summary: 'Việc lựa chọn nguyên liệu tươi ngon là yếu tố quan trọng nhất để tạo ra những món ăn chất lượng...',
      readTime: '4 phút đọc'
    }
  ];

  const handleAddArticle = () => {
    // Navigate to add article page
    window.location.href = '/restaurant/add-article';
  };

  return (
    <div className="space-y-6 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-center flex-1">Bài viết của quán</h2>
        <button
          onClick={handleAddArticle}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Viết bài</span>
        </button>
      </div>
      <RecentActivities />
    </div>
  );
}