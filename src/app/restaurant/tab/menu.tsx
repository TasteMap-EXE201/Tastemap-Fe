'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { MenuCard } from '@/component/restaurant/cards';

export default function Menu() {
  const router = useRouter();
  
  const menuItems = [
    { 
      name: 'Gỏi cuốn tôm thịt', 
      price: '25,000đ', 
      imageSrc: '/restaurant/Tabs/Menu/1.jpg'
    },
    { 
      name: 'Chả cá Lã Vọng', 
      price: '35,000đ', 
      imageSrc: '/restaurant/Tabs/Menu/2.jpg'
    },
    { 
      name: 'Nem nướng Nha Trang', 
      price: '30,000đ', 
      imageSrc: '/restaurant/Tabs/Menu/3.jpg'
    },
    { 
      name: 'Bánh khọt Vũng Tàu', 
      price: '28,000đ', 
      imageSrc: '/restaurant/Tabs/Menu/4.jpg'
    },
  ];

  const handleEdit = (itemName: string) => {
    console.log('Edit item:', itemName);
  };

  const handleDelete = (itemName: string) => {
    console.log('Delete item:', itemName);
  };

  const handleAddMenuItem = () => {
    router.push('/restaurant/add-menu-item');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 text-center flex-1">
              Thực đơn
            </h2>
            <button
              onClick={handleAddMenuItem}
              className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm món</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                price={item.price}
                imageSrc={item.imageSrc}
                onEdit={() => handleEdit(item.name)}
                onDelete={() => handleDelete(item.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}