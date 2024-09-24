'use client';

import { cn } from '@/lib/utils';
import { useDoorStore } from '../store';
interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export function ConfiguratorWrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={cn(
        `flex flex-shrink-0 gap-6 flex-col w-screen sm:p-0 p-4 z-0 sm:w-[24rem] sm:pt-[4rem] sm:ml-[0.5rem] sm:mr-[4.5rem]`,
        className
      )}
    >
      {children}
    </div>
  );
}
