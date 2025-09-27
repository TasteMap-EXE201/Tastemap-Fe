import React from 'react';

export default function Menu() {
  const menuCategories = [
    {
      name: 'Món khai vị',
      items: [
        { name: 'Gỏi cuốn', price: '25,000đ', description: 'Tôm, thịt, rau thơm' },
        { name: 'Chả cá', price: '35,000đ', description: 'Chả cá truyền thống' }
      ]
    },
    {
      name: 'Món chính',
      items: [
        { name: 'Phở bò', price: '45,000đ', description: 'Phở bò tái, chín' },
        { name: 'Cơm tấm', price: '40,000đ', description: 'Sườn nướng, chả trứng' }
      ]
    },
    {
      name: 'Đồ uống',
      items: [
        { name: 'Cà phê sữa đá', price: '15,000đ', description: 'Cà phê truyền thống' },
        { name: 'Trà đá', price: '5,000đ', description: 'Trà đá miễn phí' }
      ]
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Thực đơn</h2>
      
      {menuCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.name}</h3>
          <div className="grid gap-4">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white rounded-lg shadow p-4 flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-lg">{item.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-green-600">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Lưu ý:</strong> Giá có thể thay đổi. Vui lòng liên hệ nhà hàng để có thông tin giá chính xác nhất.
        </p>
      </div>
    </div>
  );
}