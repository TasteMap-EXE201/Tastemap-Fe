import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = '',
}) => {
  return (
    <div
      className={`
        relative h-64 bg-cover bg-center bg-no-repeat
        flex items-center justify-center
        ${className}
      `}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-100 opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};