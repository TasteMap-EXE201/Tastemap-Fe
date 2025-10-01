import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  number: string | number;
  title: string;
  text: string;
  bgColor?: string;
  iconColor?: string;
  numberColor?: string;
  titleColor?: string;
  textColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  number, 
  title, 
  text, 
  bgColor = "bg-white",
  iconColor = "text-amber-600",
  numberColor = "text-gray-800",
  titleColor = "text-gray-800",
  textColor = "text-gray-600"
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg border border-gray-100`}>
      {/* Top row: Icon và Number */}
      <div className="flex items-center justify-between mb-4">
        <div className={`text-2xl ${iconColor}`}>
          {icon}
        </div>
        <div className={`text-3xl font-bold ${numberColor}`}>
          {number}
        </div>
      </div>
      
      {/* Bottom section: Title và Text */}
      <div className="space-y-2">
        <h3 className={`text-lg font-semibold ${titleColor}`}>
          {title}
        </h3>
        <p className={`text-sm ${textColor} leading-relaxed`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default StatCard;