'use client';
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
              href="/#about"
            >
              About
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
              href="/about"
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
    title: 'Contacts',
    href: '#contact',
  },
];

interface NavigationProps {
  image?: string;
  alt?: string;
  black?: boolean;
}

export function Navigation({ image, alt, black }: NavigationProps) {
  const defaultImage = image || '/placeholder.svg';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      setScrolled(scrollTop > 20);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'flex bg-white justify-between items-center w-full font-display p-4 fixed z-50 text-black transition-all duration-300',
        scrolled ? 'h-[60px] border-b border-black py-2' : 'h-[74px]'
      )}
    >
      <div
        className={cn(
          'flex items-start min-w-24 relative',
          scrolled ? 'w-[35px]' : 'h-[42px]'
        )}
      >
        <Link href="/">
          <ExportedImage
            src={defaultImage}
            width={96}
            height={42}
            className={cn(
              'transition-all',
              scrolled ? 'h-[35px] w-[80px]' : 'h-[42px] w-[96px]'
            )}
            alt={alt || 'Logo Wisdoor'}
            priority
          />
        </Link>
      </div>
      <div
        className={cn(
          'flex self-end justify-around flex-grow',
          scrolled ? 'h-8' : 'h-9'
        )}
      >
        {links.map((link) =>
          link.href ? (
            <NavigationMenu key={link.title}>
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
            <NavigationMenu key={link.title}>
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
  );
}
