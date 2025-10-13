'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  PageHeader, 
  ProgressStepper, 
  ActionButtons,
  SuccessModal 
} from '@/component/common';
import { AlertTriangle, ImageIcon } from 'lucide-react';

interface FormData {
  // Step 1 data
  name: string;
  category: string;
  price: string;
  cookingTime: string;
  description: string;
  ingredients: string;
  
  // Step 2 data
  images: File[];
  spicyLevel: string;
  tags: string[];
  isAvailable: boolean;
  isFeatured: boolean;
  servingSize: string;
}

const AddMenuItemStep3: React.FC = () => {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    category: '',
    price: '',
    cookingTime: '',
    description: '',
    ingredients: '',
    images: [],
    spicyLevel: '',
    tags: [],
    isAvailable: true,
    isFeatured: false,
    servingSize: ''
  });

  useEffect(() => {
    // Load data from localStorage
    const step1Data = localStorage.getItem('addMenuItemStep1');
    const step2Data = localStorage.getItem('addMenuItemStep2');
    
    if (step1Data && step2Data) {
      const parsedStep1 = JSON.parse(step1Data);
      const parsedStep2 = JSON.parse(step2Data);
      
      setFormData({
        ...parsedStep1,
        ...parsedStep2,
        images: [] // Images can't be stored in localStorage, so we'll show placeholder
      });
    }
  }, []);

  const steps = [
    { id: 1, label: 'Thông tin cơ bản', isActive: false, isCompleted: true },
    { id: 2, label: 'Hình ảnh & Chi tiết', isActive: false, isCompleted: true },
    { id: 3, label: 'Xác nhận & Xuất bản', isActive: true, isCompleted: false },
  ];

  const handleBack = () => {
    router.push('/restaurant/add-menu-item/step2');
  };

  const handlePublish = () => {
    // Here you would typically send the data to your API
    console.log('Publishing menu item:', formData);
    
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleGoToProfile = () => {
    // Clear localStorage
    localStorage.removeItem('addMenuItemStep1');
    localStorage.removeItem('addMenuItemStep2');
    
    // Navigate back to menu tab
    router.push('/restaurant?tab=menu');
  };

  const getSpicyLevelText = (level: string) => {
    switch (level) {
      case 'none': return 'Không cay';
      case 'mild': return 'Cay nhẹ';
      case 'medium': return 'Cay vừa';
      case 'hot': return 'Cay nồng';
      default: return 'Không cay';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Thêm Món Ăn Mới"
        subtitle="Tạo món ăn hấp dẫn cho thực đơn của bạn"
        backgroundImage="/images/chef-cooking.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <ProgressStepper 
          steps={steps} 
          currentStep={3} 
          totalSteps={3} 
        />

        <div className="space-y-6">
          {/* Preview món ăn */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Preview món ăn</h2>
            
            <div className="flex gap-4">
              {/* Ảnh preview */}
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="w-8 h-8 text-gray-400" />
              </div>
              
              {/* Thông tin món ăn */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {formData.name || 'Tên món ăn'}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {formData.description || 'Mô tả món ăn'}
                </p>
                <span className="text-red-500 text-sm font-medium">
                  {formData.category || 'Danh mục'}
                </span>
              </div>
            </div>
          </div>

          {/* Chi tiết món ăn */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Chi tiết món ăn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cột trái */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Thời gian chế biến:</span>
                  <span className="text-gray-600">{formData.cookingTime || '0'} phút</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Khẩu phần:</span>
                  <span className="text-gray-600">{formData.servingSize || '1 người'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Độ cay:</span>
                  <span className="text-gray-600">{getSpicyLevelText(formData.spicyLevel)}</span>
                </div>
              </div>

              {/* Cột phải */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Có sẵn:</span>
                  <span className={`font-medium ${formData.isAvailable ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {formData.isAvailable ? 'Có sẵn' : 'Hết hàng'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Món nổi bật:</span>
                  <span className={`font-medium ${formData.isFeatured ? 'text-red-500' : 'text-gray-400'}`}>
                    {formData.isFeatured ? 'Có' : 'Không'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Giá bán:</span>
                  <span className="text-gray-900 font-semibold">
                    {formData.price ? `${parseInt(formData.price).toLocaleString('vi-VN')}đ` : '0đ'}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {formData.tags.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Nguyên liệu */}
            {formData.ingredients && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Nguyên liệu:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {formData.ingredients}
                </p>
              </div>
            )}


          </div>

          {/* Lưu ý */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-1">Lưu ý quan trọng</h3>
                <p className="text-yellow-800 text-sm">
                  Sau khi xuất bản, món ăn sẽ hiển thị trên thực đơn của nhà hàng. 
                  Bạn có thể chỉnh sửa thông tin món ăn bất cứ lúc nào từ trang quản lý thực đơn.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <ActionButtons
            onBack={handleBack}
            onNext={handlePublish}
            backLabel="< Quay lại"
            nextLabel="✓ Xuất bản món ăn"
            nextClassName="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          />
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        onGoToProfile={handleGoToProfile}
        title="Thành công!"
        message="Món ăn đã được thêm vào thực đơn của bạn thành công. Khách hàng có thể xem và đặt món này ngay bây giờ."
      />
    </div>
  );
};

export default AddMenuItemStep3;