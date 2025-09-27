import React from 'react';

export default function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Liên hệ</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-600 mt-1">
                  📍
                </div>
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-600 mt-1">
                  📞
                </div>
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <p className="text-gray-600">
                    <a href="tel:0123456789" className="hover:text-blue-600">0123 456 789</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-600 mt-1">
                  ✉️
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">
                    <a href="mailto:contact@restaurant.com" className="hover:text-blue-600">
                      contact@restaurant.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-600 mt-1">
                  🕒
                </div>
                <div>
                  <p className="font-medium">Giờ mở cửa</p>
                  <div className="text-gray-600 space-y-1">
                    <p>Thứ 2 - Thứ 6: 10:00 - 22:00</p>
                    <p>Thứ 7 - Chủ nhật: 09:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Đặt bàn</h3>
            <p className="text-gray-600 mb-4">
              Để đảm bảo có chỗ ngồi, vui lòng đặt bàn trước. 
              Chúng tôi nhận đặt bàn qua điện thoại hoặc trực tiếp tại nhà hàng.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                📞 Gọi đặt bàn
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                💬 Chat Zalo
              </button>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Gửi tin nhắn</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên *
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập họ và tên"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại *
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập số điện thoại"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nội dung *
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập nội dung tin nhắn..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Bản đồ</h3>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">
            [Tích hợp Google Maps hoặc bản đồ khác tại đây]
          </p>
        </div>
      </div>
    </div>
  );
}