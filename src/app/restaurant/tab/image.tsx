import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ImageCard } from '../../../component/restaurant/cards';
import { AddImageModal } from '../../../component/common';

export default function Image() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allImages = [
    { src: '/restaurant/Tabs/Image/1.jpg', alt: 'Khu vực tiếp khách chính với thiết kế hiện đại' },
    { src: '/restaurant/Tabs/Image/2.jpg', alt: 'Phòng VIP sang trọng dành cho khách đặc biệt' },
    { src: '/restaurant/Tabs/Image/3.jpg', alt: 'Sân vườn xanh mát với không gian thoáng đãng' },
    { src: '/restaurant/Tabs/Image/4.jpg', alt: 'Quầy bar với đầy đủ đồ uống cao cấp' },
  ];

  const handleAddImage = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleImageSubmit = (data: any) => {
    console.log('Image upload data:', data);
    // Xử lý upload ảnh ở đây
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 text-center flex-1">
              Hình ảnh & Video
            </h2>
            <button
              onClick={handleAddImage}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm ảnh</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((image, index) => (
              <ImageCard
                key={index}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add Image Modal */}
      <AddImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleImageSubmit}
      />
    </div>
  );
}