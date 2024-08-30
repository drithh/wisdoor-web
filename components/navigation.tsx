import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  {
    title: 'Home',
    href: '/',
  },
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
}

export function Navigation({ image, alt }: NavigationProps) {
  const defaultImage = image || '/placeholder.svg';
  return (
    <div className="font-display flex justify-between items-center p-4 absolute top-0 left-0 h-20 w-full z-[1000]">
      <div className="flex-shrink-0 h-full flex-grow">
        <div className="w-16 h-full relative">
          <Image
            src={defaultImage}
            fill
            className="object-contain"
            alt={alt || 'Logo Wisdoor'}
            priority
          />
        </div>
      </div>
      <nav className="grid gap-6 grid-cols-3 grid-flow-col text-white md:mr-0 mr-4">
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
