import React from 'react';

interface TimelineItemProps {
  year: string;
  description: string;
}

export default function TimelineItem({ year, description }: TimelineItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-blue-600 font-semibold text-sm">{year}</span>
      </div>
      <div className="flex-1 pt-2">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}