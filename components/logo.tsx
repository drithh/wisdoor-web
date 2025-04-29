import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LogoProps {
  image?: string;
  alt?: string;
}

export function Logo({ image, alt }: LogoProps) {
  const defaultImage = image || '/placeholder.svg';

  return (
    <div className="w-24 h-12 mx-4 my-2 flex items-start  fixed top-0 left-0 z-[10000]">
      <Link href="/">
        <ArrowLeft />
        {/* <ExportedImage
          src={defaultImage}
          fill
          className="object-contain"
          alt={alt || 'Logo Wisdoor'}
          priority
        /> */}
      </Link>
    </div>
  );
}
