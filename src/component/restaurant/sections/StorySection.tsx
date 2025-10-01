import React from 'react';

interface StorySectionProps {
  title: string;
  subtitle?: string;
  content: string;
  icon?: React.ReactNode;
}

export default function StorySection({ title, subtitle, content, icon }: StorySectionProps) {
  return (
    <div className="bg-gray-50 rounded-md p-4">
      <div className="flex items-start space-x-4">
        {icon && (
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-orange-600 text-xl">{icon}</span>
          </div>
        )}
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-gray-900 font-bold text-lg">{title}</h3>
            {subtitle && (
              <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
            )}
          </div>
          <p className="text-gray-700 text-base leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}