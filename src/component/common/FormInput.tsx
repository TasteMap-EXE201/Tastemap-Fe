import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
  step,
  className = '',
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        className="
          w-full px-3 py-3 border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
          transition-colors duration-200
          placeholder-gray-400
        "
      />
    </div>
  );
};