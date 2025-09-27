import React from 'react';

export default function Story() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Câu chuyện nhà hàng</h2>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Lịch sử hình thành</h3>
          <p className="text-gray-700 leading-relaxed">
            [Thêm câu chuyện về lịch sử hình thành nhà hàng, từ những ngày đầu bắt đầu, 
            những khó khăn, thử thách và cách nhà hàng vượt qua để trở thành như ngày hôm nay...]
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Triết lý kinh doanh</h3>
          <p className="text-gray-700 leading-relaxed">
            [Chia sẻ về triết lý, tầm nhìn của nhà hàng, cam kết về chất lượng, 
            dịch vụ và trải nghiệm mà nhà hàng muốn mang đến cho khách hàng...]
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Đội ngũ</h3>
          <p className="text-gray-700 leading-relaxed">
            [Giới thiệu về đội ngũ nhân viên, đầu bếp, những người đã góp phần 
            tạo nên thành công của nhà hàng...]
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Hành trình phát triển</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium">2020 - Thành lập</p>
                <p className="text-gray-600 text-sm">Nhà hàng được thành lập với quy mô nhỏ</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium">2021 - Mở rộng</p>
                <p className="text-gray-600 text-sm">Mở rộng không gian và đa dạng hóa thực đơn</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium">2023 - Hiện tại</p>
                <p className="text-gray-600 text-sm">Trở thành một trong những nhà hàng được yêu thích</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}