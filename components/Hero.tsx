import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  image?: string;
  alt?: string;
}

export function Hero({ image, alt }: HeroProps) {
  const defaultImage = image || '/placeholder.svg';
  return (
    <div className="w-screen h-screen">
      <Image
        src={defaultImage}
        fill
        className="object-cover"
        alt={alt || 'Logo Wisdoor'}
        priority
      />
    </div>
  );
}
