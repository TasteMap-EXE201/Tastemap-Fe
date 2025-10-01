import React from 'react';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'overview', name: 'Tổng quan' },
  { id: 'menu', name: 'Thực đơn' },
  { id: 'story', name: 'Câu chuyện' },
  { id: 'article', name: 'Bài viết' },
  { id: 'image', name: 'Hình ảnh' },
  { id: 'contact', name: 'Liên hệ' }
];

export default function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  return (
    <div className=" border-b border-gray-200 bg-white rounded-2xl">
      <nav className="flex rounded-2xl h-16">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative py-3 px-4 text-sm font-medium transition-colors duration-200 flex-1 overflow-hidden ${
              index === 0 ? 'rounded-l-2xl' : ''
            } ${
              index === tabs.length - 1 ? 'rounded-r-2xl' : ''
            } ${
              activeTab === tab.id
                ? 'text-blue-600 bg-blue-100 text-4xl'
                : 'hover:text-gray-700 hover:bg-amber-100 text-4xl'
            }`}
          >
            {tab.name}
             {activeTab === tab.id && (
              <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}