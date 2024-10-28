'use client';

import { cn } from '@/lib/utils';
import { useDoorStore } from '../store';
import { Navigation } from '@/components/navigation';
interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export function RootWrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={cn(
        `flex relative sm:flex-row flex-col sm:h-full h-screen w-screen`,
        className
      )}
    >
      {children}
    </div>
  );
}
