import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ActionButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  showBack?: boolean;
  showNext?: boolean;
  nextDisabled?: boolean;
  className?: string;
  nextClassName?: string;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onBack,
  onNext,
  backLabel = 'Quay lại',
  nextLabel = 'Tiếp tục',
  showBack = true,
  showNext = true,
  nextDisabled = false,
  className = '',
  nextClassName,
}) => {
  return (
    <div className={`flex justify-between items-center pt-6 ${className}`}>
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="
            flex items-center space-x-2 px-4 py-2
            text-gray-600 hover:text-gray-800
            transition-colors duration-200
          "
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{backLabel}</span>
        </button>
      ) : (
        <div></div>
      )}

      {showNext && (
        <button
          type="submit"
          onClick={onNext}
          disabled={nextDisabled}
          className={
            nextClassName || `
            flex items-center space-x-2 px-6 py-3 rounded-lg
            font-semibold text-white
            transition-all duration-200
            ${
              nextDisabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl'
            }
          `}
        >
          <span>{nextLabel}</span>
          {!nextClassName && <ChevronRight className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
};