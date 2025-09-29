'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ProgressStepper,
  FormInput,
  FormCheckbox,
  PageHeader,
  ActionButtons,
  ImageUpload,
  SpicyLevelSelector,
  TagSelector,
} from '../../../../component/common';

interface Step2FormData {
  images: File[];
  servingSize: string;
  spicyLevel: string;
  tags: string[];
  isAvailable: boolean;
  isFeatured: boolean;
}

const availableTags = [
  { id: 'healthy', label: 'Lành mạnh' },
  { id: 'vegetarian', label: 'Chay' },
  { id: 'gluten-free', label: 'Không gluten' },
  { id: 'spicy', label: 'Cay' },
  { id: 'sweet', label: 'Ngọt' },
  { id: 'sour', label: 'Chua' },
  { id: 'traditional', label: 'Truyền thống' },
  { id: 'modern', label: 'Hiện đại' },
  { id: 'signature', label: 'Đặc sản' },
  { id: 'popular', label: 'Phổ biến' },
  { id: 'new', label: 'Món mới' },
  { id: 'seasonal', label: 'Theo mùa' },
];

export default function AddMenuItemStep2Page() {
  const router = useRouter();
  const [formData, setFormData] = useState<Step2FormData>({
    images: [],
    servingSize: '',
    spicyLevel: 'none',
    tags: [],
    isAvailable: true,
    isFeatured: false,
  });

  // Check if step 1 data exists, if not redirect to step 1
  React.useEffect(() => {
    const step1Data = localStorage.getItem('addMenuItemStep1');
    if (!step1Data) {
      router.push('/restaurant/add-menu-item');
    }
  }, [router]);

  const steps = [
    { id: 1, label: 'Thông tin cơ bản', isActive: false, isCompleted: true },
    { id: 2, label: 'Hình ảnh & Chi tiết', isActive: true, isCompleted: false },
    { id: 3, label: 'Xác nhận & Hoàn tất', isActive: false, isCompleted: false },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImagesChange = (images: File[]) => {
    setFormData(prev => ({ ...prev, images }));
  };

  const handleSpicyLevelChange = (spicyLevel: string) => {
    setFormData(prev => ({ ...prev, spicyLevel }));
  };

  const handleTagsChange = (tags: string[]) => {
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleBack = () => {
    router.push('/restaurant/add-menu-item');
  };

  const handleNext = () => {
    // Validate required fields
    if (formData.images.length === 0) {
      alert('Vui lòng thêm ít nhất 1 hình ảnh');
      return;
    }
    
    // Save form data to localStorage for persistence across steps
    localStorage.setItem('addMenuItemStep2', JSON.stringify(formData));
    
    // Navigate to step 3
    router.push('/restaurant/add-menu-item/step3');
  };

  const isFormValid = formData.images.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with background image */}
      <PageHeader
        title="Thêm Món Ăn Mới"
        subtitle="Tạo món ăn hấp dẫn cho thực đơn của bạn"
        backgroundImage="/restaurant/banner_hero.jpg"
      />

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress stepper */}
        <ProgressStepper
          steps={steps}
          currentStep={2}
          totalSteps={3}
        />

        {/* Form container */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Hình ảnh & Chi tiết
          </h2>

          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            {/* Upload ảnh */}
            <ImageUpload
              label="Hình ảnh món ăn"
              images={formData.images}
              onImagesChange={handleImagesChange}
              maxFiles={5}
              maxSize={5}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Khẩu phần */}
              <FormInput
                label="Khẩu phần"
                name="servingSize"
                value={formData.servingSize}
                onChange={handleInputChange}
                placeholder="VD: 1 người, 2-3 người..."
              />

              {/* Độ cay - full width on mobile, half on desktop */}
              <div className="md:col-span-2">
                <SpicyLevelSelector
                  label="Độ cay"
                  value={formData.spicyLevel}
                  onChange={handleSpicyLevelChange}
                />
              </div>
            </div>

            {/* Tags */}
            <TagSelector
              label="Thẻ mô tả (chọn các thẻ phù hợp)"
              tags={availableTags}
              selectedTags={formData.tags}
              onChange={handleTagsChange}
            />

            {/* Checkboxes */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tùy chọn khác
              </h3>
              
              <FormCheckbox
                label="Món ăn có sẵn"
                name="isAvailable"
                checked={formData.isAvailable}
                onChange={handleInputChange}
              />

              <FormCheckbox
                label="Đặt làm món nổi bật"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
              />
            </div>

            {/* Action buttons */}
            <ActionButtons
              onBack={handleBack}
              onNext={handleNext}
              backLabel="< Quay lại"
              nextLabel="Tiếp tục →"
              nextDisabled={!isFormValid}
            />
          </form>
        </div>
      </div>
    </div>
  );
}