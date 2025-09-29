import React from 'react';

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  showCounter?: boolean;
  className?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  maxLength,
  showCounter = false,
  className = '',
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className="
          w-full px-3 py-3 border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
          transition-colors duration-200
          placeholder-gray-400
          resize-vertical
        "
      />
      {showCounter && maxLength && (
        <div className="flex justify-end mt-1">
          <span className="text-sm text-gray-500">
            {value.length}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
};