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
      id="configurator-wrapper"
      className={cn(
        `fixed sm:static overflow-auto bottom-0 sm:h-full h-[calc(100dvh-16rem)] w-dvw sm:w-[467px] sm:min-w-[467px]`,
        `sm:mt-[4rem] sm:ml-[0.5rem] sm:mr-[4.5rem]`,
        className
      )}
    >
      <div className="sm:hidden fixed top-[16rem] left-0 m-0 z-[1000] inset-0 w-full h-20 bg-gradient-to-t from-transparent to-white pointer-events-none" />
      <div className="flex gap-10 flex-col sm:p-0 p-4 z-0">{children}</div>
    </div>
  );
}
