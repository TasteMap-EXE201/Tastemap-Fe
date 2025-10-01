import React from 'react';

interface MenuCardProps {
  name: string;
  price: string;
  imageSrc?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function MenuCard({ 
  name, 
  price, 
  imageSrc, 
  onEdit, 
  onDelete 
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center flex-1">
        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 mr-4">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-xs">🍽️</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-orange-600 font-bold">{price}</p>
        </div>
      </div>
      
      <div className="flex items-center ml-3">
        {onEdit && (
          <button
            onClick={onEdit}
            className="text-blue-600 hover:text-blue-700 transition-colors p-1 mr-2"
            title="Chỉnh sửa"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        )}
        
        {onDelete && (
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-700 transition-colors p-1"
            title="Xóa"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}