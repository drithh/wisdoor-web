import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
import { cn } from '@/lib/utils';
interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export function Footer({ children, className }: FooterProps) {
  return (
    <div className={cn('bg-black w-screen font-text', className)}>
      {children}
    </div>
  );
}
