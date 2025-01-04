import React, { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export default function FormInput({ 
  label, 
  icon, 
  id, 
  className = '', 
  ...props 
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`
            appearance-none relative block w-full px-3 py-2 
            ${icon ? 'pl-10' : ''}
            border border-gray-300 rounded-lg
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            sm:text-sm
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
}