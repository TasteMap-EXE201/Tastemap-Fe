import React from 'react';
import { Check } from 'lucide-react';

interface FormCheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex items-center space-x-3 mb-4 ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`
            w-5 h-5 rounded border-2 flex items-center justify-center
            transition-all duration-200 cursor-pointer
            ${
              checked
                ? 'bg-orange-500 border-orange-500'
                : 'bg-white border-gray-300 hover:border-gray-400'
            }
          `}
          onClick={() => {
            const event = {
              target: { name, checked: !checked }
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
          }}
        >
          {checked && <Check className="w-3 h-3 text-white" />}
        </div>
      </div>
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};