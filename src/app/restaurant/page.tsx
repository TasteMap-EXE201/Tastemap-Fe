"use client";

import React, { useState } from 'react';
import { NavigationTabs } from '@/component/restaurant/navigation';
import Banner from './banner';
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
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Banner Section */}
        <div className="mb-6">
          <Banner onNavigateToContact={() => setActiveTab('contact')} />
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

