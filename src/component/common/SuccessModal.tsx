import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToProfile: () => void;
  title?: string;
  message?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  onGoToProfile,
  title = "Thành công!",
  message = "Món ăn đã được thêm vào thực đơn của bạn thành công."
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-gray-700 opacity-50 backdrop-filter backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="relative bg-white rounded-xl shadow-2xl p-8 mx-4 max-w-md w-full pointer-events-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Success Icon */}
            <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {title}
            </h2>

            {/* Message */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {message}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onGoToProfile}
                className="
                  flex-1 px-6 py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-orange-500 to-red-500 
                  hover:from-orange-600 hover:to-red-600
                  transition-all duration-200 shadow-lg hover:shadow-xl
                "
              >
                Về Profile
              </button>
              
              <button
                onClick={onClose}
                className="
                  flex-1 px-6 py-3 rounded-lg font-semibold
                  border-2 border-gray-300 text-gray-700
                  hover:border-gray-400 hover:text-gray-900
                  transition-all duration-200
                "
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};