import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
interface HeroProps {
  className?: string;
  image?: string;
  alt?: string;
  children?: React.ReactNode;
}

export function Hero({ image, alt, className, children }: HeroProps) {
  const defaultImage = image || '/placeholder.svg';
  return (
    <div
      id="hero"
      className="relative h-[calc(100vh-70px)] top-[70px] max-h-[1080px] w-full"
    >
      <ExportedImage
        src={defaultImage}
        fill
        className={`object-cover  ${className}`}
        alt={alt || 'Logo Wisdoor'}
        priority
      />
      <div className="absolute inset-0 hidden sm:block pointer-events-none bg-gradient-to-r from-white/100 from-[15%] via-white/10 to-transparent/0" />
      <div className="absolute inset-0  sm:hidden pointer-events-none bg-gradient-to-t from-white/100 from-[15%] via-white/10 to-transparent/0" />
      {children}
    </div>
  );
}
