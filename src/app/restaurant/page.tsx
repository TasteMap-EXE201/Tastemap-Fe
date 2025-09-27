"use client";

import React, { useState } from 'react';
import NavigationTabs from '../../component/restaurant/navigationTabs';
import Overview from './tab/overview';
import Menu from './tab/menu';
import Story from './tab/story';
import Article from './tab/article';
import Image from './tab/image';
import Contact from './tab/contact';

export default function RestaurantIndex() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'menu':
        return <Menu />;
      case 'story':
        return <Story />;
      case 'article':
        return <Article />;
      case 'image':
        return <Image />;
      case 'contact':
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container - Tất cả thẳng hàng */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="bg-white shadow-sm rounded-2xl mb-6">
          <div className="py-6 px-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Tên Nhà Hàng
            </h1>
            <p className="mt-2 text-gray-600">
              Khám phá hương vị đặc sắc của ẩm thực Việt Nam
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <NavigationTabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm">
          {renderTabContent()}
        </div>
        
      </div>
    </div>
  );
}

