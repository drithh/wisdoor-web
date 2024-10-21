'use client';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from '@radix-ui/react-checkbox';
interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export function Checkbox({
  checked,
  onCheckedChange,
  className,
  children,
}: CheckboxProps) {
  return (
    <div
      className={cn(
        `cursor-pointer px-2 font-text flex justify-start rounded-sm border-black/50  opacity-70 hover:opacity-100 hover:text-black  border items-start w-full h-fit py-2 transition-opacity hover:bg-gray-100 duration-300`,
        className,
        { 'opacity-100 bg-gray-100': checked }
      )}
      onClick={() => onCheckedChange(!checked)}
    >
      <div className="relative">
        <CheckboxPrimitive
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="sr-only"
        />
        <div
          className={cn(
            'w-5 h-5 bg-gray-200 border-2 rounded-sm transition-all duration-300 ease-in-out border-gray-300'
          )}
        ></div>
        <div
          className={cn(
            'absolute inset-0 left-[0.6px] top-[0.8px] rounded-md transition-all duration-300 ease-in-out origin-center',
            checked ? 'scale-100' : 'scale-0 '
          )}
        >
          <Check size={18} className="text-gray-500" />
        </div>
      </div>
      <div className="ml-3 text-sm w-full font-medium text-gray-700">
        {children}
      </div>
    </div>
  );
}
