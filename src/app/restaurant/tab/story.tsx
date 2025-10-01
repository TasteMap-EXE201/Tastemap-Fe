import React from 'react';
import { StorySection, TimelineItem } from '../../../component/restaurant/sections';

export default function Story() {
  const timelineData = [
    {
      year: '1995',
      description: 'Quán được thành lập bởi ông Nguyễn Văn Tâm, bắt đầu từ một xe đẩy nhỏ trên vỉa hè Sài Gòn.'
    },
    {
      year: '2000',
      description: 'Mở rộng thành quán ăn cố định đầu tiên với không gian nhỏ nhưng ấm cúng.'
    },
    {
      year: '2010',
      description: 'Nâng cấp cơ sở vật chất, mở rộng thực đơn và cải thiện chất lượng dịch vụ.'
    },
    {
      year: '2020',
      description: 'Ứng dụng công nghệ trong quản lý và phục vụ, mở rộng dịch vụ giao hàng.'
    },
    {
      year: '2024',
      description: 'Trở thành một trong những địa chỉ cơm tấm nổi tiếng và được yêu thích nhất Sài Gòn.'
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900">Câu chuyện & lịch sử quán</h2>
      <div className="mx-auto">
        <div className="bg-white rounded-lg p-8">
          <div className="mb-8">
            <StorySection
              title="Câu chuyện thành lập"
              subtitle="Thành lập năm 1995"
              content="Quán Cơm Tấm Sài Gòn được thành lập bởi ông Nguyễn Văn Tâm từ năm 1995. Bắt đầu từ một xe đẩy nhỏ trên vỉa hè, quán đã phát triển thành một trong những địa chỉ cơm tấm nổi tiếng nhất Sài Gòn. Với hương vị truyền thống được giữ nguyên qua nhiều thế hệ, quán luôn là điểm đến của nhiều thực khách yêu thích món ăn đặc sắc. Từ những ngày đầu khó khăn với chỉ vài món ăn đơn giản, quán đã không ngừng cải tiến và phát triển, nhưng vẫn giữ được bản sắc và hương vị truyền thống làm nên thương hiệu."
              icon="📜"
            />
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-4">Các mốc quan trọng</h3>
            <div className="space-y-4">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}