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
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const handleSmoothScroll = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string
) => {
  // url path
  const isRoot = window.location.pathname === '/';
  if (href.startsWith('/#') && isRoot) {
    href = href.replace('/', '');
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const links = [
  {
    title: 'Custom',
    href: '/door',
  },
  {
    title: 'About',
    desktop: (
      <NavigationMenuContent>
        <ul className="grid gap-1 p-2 sm:w-64 uppercase text-xs">
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
              href="/#about"
              onClick={(event) => handleSmoothScroll(event, '/#about')}
            >
              About
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
              href="/#manufacturing"
            >
              Manufacturing
            </a>
          </NavigationMenuLink>
        </ul>
      </NavigationMenuContent>
    ),
    mobile: [
      {
        title: 'About',
        href: '/#about',
      },
      {
        title: 'Manufacturing',
        href: '/#manufacturing"',
      },
    ],
  },
  {
    title: 'Products',
    href: '/#product',
  },
  {
    title: 'Projects',
    href: '/#project',
  },
  {
    title: 'Contacts',
    href: '/#contact',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link
          href="/"
          onClick={(event) => handleSmoothScroll(event, '/#hero')}
          passHref
        >
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
      <button
        className="block md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2">
          <Menu size={24} />
        </div>
      </button>

      {isMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'absolute top-[74px] right-0 overflow-hidden bg-white w-full shadow-lg md:hidden',
            scrolled ? 'top-[60px]' : 'top-[74px]'
          )}
        >
          <ul className="flex flex-col items-center p-4 space-y-2">
            {links.map((link) =>
              link.href ? (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-black uppercase text-sm"
                    onClick={(event) => {
                      handleSmoothScroll(event, link.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ) : (
                link.mobile?.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-black uppercase text-sm"
                      onClick={(event) => {
                        handleSmoothScroll(event, item.href);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))
              )
            )}
          </ul>
        </motion.div>
      )}

      <div
        className={cn(
          'hidden md:flex self-end justify-around flex-grow',
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
                  onClick={(event) => handleSmoothScroll(event, link.href)}
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
                  {link.desktop}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )
        )}
      </div>
    </nav>
  );
}
