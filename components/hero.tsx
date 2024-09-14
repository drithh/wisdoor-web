import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
interface HeroProps {
  image?: string;
  alt?: string;
}

export function Hero({ image, alt }: HeroProps) {
  const defaultImage = image || '/placeholder.svg';
  return (
    <div className="w-full">
      <ExportedImage
        src={defaultImage}
        fill
        className="object-cover"
        alt={alt || 'Logo Wisdoor'}
        priority
      />
    </div>
  );
}
