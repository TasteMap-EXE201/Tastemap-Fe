import React from 'react';

export default function Image() {
  const imageCategories = [
    {
      name: 'Không gian nhà hàng',
      images: [
        { src: '/placeholder-restaurant-1.jpg', alt: 'Khu vực tiếp khách' },
        { src: '/placeholder-restaurant-2.jpg', alt: 'Phòng VIP' },
        { src: '/placeholder-restaurant-3.jpg', alt: 'Sân vườn' }
      ]
    },
    {
      name: 'Món ăn đặc sắc',
      images: [
        { src: '/placeholder-food-1.jpg', alt: 'Phở bò đặc biệt' },
        { src: '/placeholder-food-2.jpg', alt: 'Cơm tấm sườn nướng' },
        { src: '/placeholder-food-3.jpg', alt: 'Gỏi cuốn tôm thịt' }
      ]
    },
    {
      name: 'Hoạt động & Sự kiện',
      images: [
        { src: '/placeholder-event-1.jpg', alt: 'Sinh nhật khách hàng' },
        { src: '/placeholder-event-2.jpg', alt: 'Tiệc công ty' },
        { src: '/placeholder-event-3.jpg', alt: 'Lễ khai trương' }
      ]
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Hình ảnh</h2>
      
      {imageCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.images.map((image, imageIndex) => (
              <div key={imageIndex} className="relative group cursor-pointer">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">{image.alt}</span>
                  </div>
                  {/* Placeholder for actual image */}
                  {/* <img src={image.src} alt={image.alt} className="w-full h-full object-cover" /> */}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>Lưu ý:</strong> Nhấp vào hình ảnh để xem kích thước lớn hơn. 
          Tất cả hình ảnh được chụp tại nhà hàng và phản ánh chân thực về không gian, món ăn.
        </p>
      </div>
    </div>
  );
}