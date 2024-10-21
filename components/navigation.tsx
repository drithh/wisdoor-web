import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
import { cn } from '@/lib/utils';

const links = [
  // {
  //   title: 'Home',
  //   href: '/',
  // },
  {
    title: 'About',
    href: '/about#about',
  },
  {
    title: 'Products',
    href: '/about#product',
  },
];

interface NavigationProps {
  image?: string;
  alt?: string;
  black?: boolean;
}

export function Navigation({ image, alt, black }: NavigationProps) {
  const defaultImage = image || '/placeholder.svg';

  return (
    <div
      className={cn(
        'font-display flex justify-between items-center p-4  top-0 left-0 h-20 w-full z-50',
        black ? 'text-black' : 'text-white'
      )}
    >
      <div className="flex-shrink-0 h-full flex-grow">
        <div className="w-16 h-full relative">
          <Link href="/">
            <ExportedImage
              src={defaultImage}
              fill
              className="object-contain"
              alt={alt || 'Logo Wisdoor'}
              priority
            />
          </Link>
        </div>
      </div>
      <nav
        className={cn(
          'grid gap-2 md:gap-6 grid-cols-2 grid-flow-col  md:mr-0 mr-2'
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-text text-center font-medium"
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="flex-grow w-16 sm:flex hidden" />
    </div>
  );
}
