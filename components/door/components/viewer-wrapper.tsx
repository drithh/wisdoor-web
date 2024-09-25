'use client';

import { cn } from '@/lib/utils';
import { useDoorStore } from '../store';
interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export function ViewerWrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={cn(
        `flex relative sm:flex-row flex-col overflow-hidden max-h-screen w-screen`,
        className
      )}
    >
      {children}
    </div>
  );
}
