import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageGradientProps {
  image?: string;
  alt?: string;
  gradientTopWhite?: boolean;
  gradientBottomBlack?: boolean;
  className?: string;
}

export function ImageGradient({
  image,
  alt,
  gradientTopWhite,
  gradientBottomBlack,
  className,
}: ImageGradientProps) {
  const defaultImage = image || '/placeholder.svg';
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={defaultImage}
        fill
        className="object-cover"
        alt={alt || 'Logo Wisdoor'}
        priority
      />
      {gradientTopWhite && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/10 to-transparent/0 pointer-events-none"></div>
      )}
      {gradientBottomBlack && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/5 to-transparent/0 pointer-events-none"></div>
      )}
    </div>
  );
}
