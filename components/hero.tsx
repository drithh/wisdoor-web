import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
interface HeroProps {
  className?: string;
  mobileImage?: string;
  desktopImage?: string;
  alt?: string;
  children?: React.ReactNode;
}

export function Hero({
  mobileImage,
  desktopImage,
  alt,
  className,
  children,
}: HeroProps) {
  const firstImage = mobileImage || '/placeholder.svg';
  const secondImage = desktopImage || '/placeholder.svg';

  return (
    <div id="hero" className="w-full  h-[100dvh] sm:h-screen max-h-[1080px]">
      <div className="relative h-[100dvh] sm:h-[calc(100vh-70px)] max-h-[1080px] top-[70px] w-full">
        <ExportedImage
          src={firstImage}
          fill
          className={`${className} object-scale-down sm:hidden`}
          alt={alt || 'Logo Wisdoor'}
          priority
        />
        <ExportedImage
          src={secondImage}
          fill
          className={`${className} object-cover hidden sm:block`}
          alt={alt || 'Logo Wisdoor'}
          priority
        />
        <div className="absolute inset-0 hidden sm:block pointer-events-none bg-gradient-to-r from-white/100 from-[15%] via-white/10 to-transparent/0" />
        <div className="absolute inset-0  sm:hidden pointer-events-none bg-gradient-to-t from-white/100 from-[5%] via-white/10 to-transparent/0" />
        {children}
      </div>
    </div>
  );
}
