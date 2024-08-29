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
    <div className="flex justify-between items-center p-4 fixed top-0 left-0 h-20 w-screen z-[1000]">
      <div className="flex-shrink-0 h-full flex-grow">
        <div className="w-24 h-full relative">
          <Image
            src={defaultImage}
            layout="fill"
            objectFit="contain"
            alt={alt || 'Logo Wisdoor'}
            priority
          />
        </div>
      </div>
      <nav className="grid gap-6 grid-flow-col text-white">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="font-semibold">
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="flex-grow w-24" />
    </div>
  );
}
