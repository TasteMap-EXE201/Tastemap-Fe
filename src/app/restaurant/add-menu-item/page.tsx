'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ProgressStepper,
  FormInput,
  FormTextarea,
  FormSelect,
  PageHeader,
  ActionButtons,
} from '../../../component/common';

interface FormData {
  name: string;
  category: string;
  price: number;
  cookingTime: number;
  description: string;
  ingredients: string;
}

const categoryOptions = [
  { value: 'appetizer', label: 'Khai vị' },
  { value: 'main-course', label: 'Món chính' },
  { value: 'dessert', label: 'Tráng miệng' },
  { value: 'beverage', label: 'Đồ uống' },
  { value: 'soup', label: 'Canh/Súp' },
  { value: 'salad', label: 'Salad' },
  { value: 'seafood', label: 'Hải sản' },
  { value: 'vegetarian', label: 'Chay' },
];

export default function AddMenuItemPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    category: '',
    price: 0,
    cookingTime: 15,
    description: '',
    ingredients: '',
  });

  const steps = [
    { id: 1, label: 'Thông tin cơ bản', isActive: true, isCompleted: false },
    { id: 2, label: 'Hình ảnh & Media', isActive: false, isCompleted: false },
    { id: 3, label: 'Xác nhận & Hoàn tất', isActive: false, isCompleted: false },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'cookingTime' ? Number(value) : value,
    }));
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    // Validate required fields
    if (!formData.name || !formData.category || !formData.description) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }
    
    // Save form data to localStorage for persistence across steps
    localStorage.setItem('addMenuItemStep1', JSON.stringify(formData));
    
    // Navigate to step 2
    router.push('/restaurant/add-menu-item/step2');
  };

  const isFormValid = formData.name && formData.category && formData.description;

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
          currentStep={1}
          totalSteps={3}
        />

        {/* Form container */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Thông tin cơ bản
          </h2>

          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tên món ăn */}
              <FormInput
                label="Tên món ăn"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nhập tên món ăn"
                required
                className="md:col-span-2"
              />

              {/* Danh mục */}
              <FormSelect
                label="Danh mục"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                options={categoryOptions}
                placeholder="Chọn danh mục món ăn"
                required
              />

              {/* Giá */}
              <FormInput
                label="Giá (VNĐ)"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="0"
                min={0}
                step={1000}
                required
              />

              {/* Thời gian chế biến */}
              <FormInput
                label="Thời gian chế biến (phút)"
                name="cookingTime"
                type="number"
                value={formData.cookingTime}
                onChange={handleInputChange}
                placeholder="15"
                min={1}
                max={300}
                className="md:col-span-1"
              />
            </div>

            {/* Mô tả món ăn */}
            <FormTextarea
              label="Mô tả món ăn"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Mô tả chi tiết về món ăn, hương vị, cách chế biến..."
              required
              rows={4}
              maxLength={500}
              showCounter
            />

            {/* Nguyên liệu chính */}
            <FormTextarea
              label="Nguyên liệu chính"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleInputChange}
              placeholder="Liệt kê các nguyên liệu chính của món ăn..."
              rows={3}
              maxLength={300}
              showCounter
            />

            {/* Action buttons */}
            <ActionButtons
              onBack={handleBack}
              onNext={handleNext}
              backLabel="< Quay lại Profile"
              nextLabel="Tiếp tục →"
              nextDisabled={!isFormValid}
            />
          </form>
        </div>
      </div>
    </div>
  );
}