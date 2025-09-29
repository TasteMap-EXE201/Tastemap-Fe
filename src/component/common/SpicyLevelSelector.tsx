import React from 'react';
import { Flame } from 'lucide-react';

interface SpicyLevel {
  id: string;
  label: string;
  level: number;
}

interface SpicyLevelSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const spicyLevels: SpicyLevel[] = [
  { id: 'none', label: 'Không cay', level: 0 },
  { id: 'mild', label: 'Cay nhẹ', level: 1 },
  { id: 'medium', label: 'Cay vừa', level: 2 },
  { id: 'hot', label: 'Cay nồng', level: 3 },
];

export const SpicyLevelSelector: React.FC<SpicyLevelSelectorProps> = ({
  label,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {spicyLevels.map((level) => (
          <button
            key={level.id}
            type="button"
            onClick={() => onChange(level.id)}
            className={`
              flex items-center justify-center space-x-2 px-4 py-3 rounded-lg
              border-2 transition-all duration-200
              ${
                value === level.id
                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }
            `}
          >
            <div className="flex items-center space-x-1">
              {Array.from({ length: level.level }, (_, i) => (
                <Flame
                  key={i}
                  className={`w-3 h-3 ${
                    value === level.id ? 'text-red-500' : 'text-gray-400'
                  }`}
                />
              ))}
              {level.level === 0 && (
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              )}
            </div>
            <span className="text-sm font-medium">{level.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};