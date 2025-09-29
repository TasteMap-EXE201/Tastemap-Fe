import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageCard({ src, alt, className = '' }: ImageCardProps) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="w-full rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="relative w-full h-64">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover hover:opacity-90 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}