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
        `relative flex flex-shrink-0 gap-10 flex-col overflow-auto sm:h-full h-[calc(100vh-16rem)] w-screen sm:p-0 p-4 z-0 sm:w-[24rem] sm:pt-[4rem] sm:ml-[0.5rem] sm:mr-[4.5rem]`,
        className
      )}
    >
      {children}
      <div className="sm:hidden fixed top-[16rem] m-0 inset-0 w-full h-20 bg-gradient-to-t from-transparent to-white pointer-events-none" />
    </div>
  );
}
