import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'blacklist' | 'favorite';
  isActive?: boolean;
  className?: string;
}

export default function ActionButton({ 
  icon: Icon, 
  label, 
  onClick, 
  variant = 'secondary',
  isActive = false,
  className = '' 
}: ActionButtonProps) {
  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors";
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return "bg-black/40 text-white hover:bg-black/50";
      case 'blacklist':
        return isActive 
          ? "bg-gray-700 text-white hover:bg-gray-800" 
          : "bg-white text-gray-800 hover:bg-gray-100";
      case 'favorite':
        return isActive 
          ? "bg-red-500 text-white hover:bg-red-600" 
          : "bg-white text-gray-800 hover:bg-gray-100";
      case 'secondary':
      default:
        return "bg-white text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}