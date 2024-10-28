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
        `fixed sm:static overflow-auto sm:top-0 top-[16rem] sm:h-full h-[calc(100vh-16rem)] w-screen sm:w-[467px] sm:min-w-[467px]`,
        className
      )}
    >
      <div className=" sm:mt-[4rem] sm:ml-[0.5rem] sm:mr-[4.5rem]">
        <div className="sm:hidden sticky left-0 top-0 m-0 z-[1000] inset-0 w-full h-20 bg-gradient-to-t from-transparent to-white pointer-events-none" />
        <div className="flex gap-10 flex-col sm:p-0 p-4 z-0">{children}</div>
      </div>
    </div>
  );
}
