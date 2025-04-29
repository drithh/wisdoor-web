'use client';

import { cn } from '@/lib/utils';
import { useDoorStore } from '../store';
interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export function Wrapper({ className, children }: WrapperProps) {
  const storage = useDoorStore((state) => ({
    frame: state.frame,
  }));

  return (
    <div
      className={cn(`flex flex-col gap-4 w-full`, className, {
        hidden: storage.frame?.name === 'Tanpa Kusen',
      })}
    >
      {children}
    </div>
  );
}
