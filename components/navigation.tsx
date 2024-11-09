import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const links = [
  {
    title: 'Custom',
    href: '/door',
  },
  {
    title: 'About',
    component: (
      <NavigationMenuContent>
        <ul className="grid gap-1 p-2 sm:w-64 uppercase text-xs">
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
              href="/"
            >
              About
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
              href="/"
            >
              Manufacturing
            </a>
          </NavigationMenuLink>
        </ul>
      </NavigationMenuContent>
    ),
  },
  {
    title: 'Products',
    href: '#product',
  },
  {
    title: 'Projects',
    href: '#project',
  },
  {
    title: 'Products',
    href: '#product',
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
      className={cn('w-full font-display fixed h-[74px] p-4 z-50 text-black')}
    >
      <nav className={cn('flex justify-between items-center w-full h-full')}>
        <div className="flex items-start min-w-24 h-[42px] relative">
          <Link href="/">
            <ExportedImage
              src={defaultImage}
              width={96}
              height={42}
              className="w-24"
              alt={alt || 'Logo Wisdoor'}
              priority
            />
          </Link>
        </div>
        <div className="flex h-9 self-end  justify-around flex-grow">
          {links.map((link) =>
            link.href ? (
              <NavigationMenu>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-xs uppercase'
                    )}
                  >
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenu>
            ) : (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="uppercase text-xs">
                      {link.title}
                    </NavigationMenuTrigger>
                    {link.component}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )
          )}
        </div>
      </nav>
    </div>
  );
}
