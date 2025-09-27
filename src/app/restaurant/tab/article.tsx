import React from 'react';

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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Bài viết</h2>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                {article.title}
              </h3>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                {article.readTime}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {article.summary}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{article.date}</span>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Đọc thêm →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Xem tất cả bài viết
        </button>
      </div>
    </div>
  );
}