import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

type HorizontalOrigin = 'left' | 'right';
type VerticalOrigin = 'top' | 'bottom';
interface LineRevealProps {
  duration?: number;
  delay?: number;
  type?: 'vertical' | 'horizontal';
  origin?: HorizontalOrigin | VerticalOrigin;
  className?: string;
  mainControls: ReturnType<typeof useAnimation>;
}

export function LineReveal({
  duration = 1,
  delay = 0,
  type = 'horizontal',
  origin = 'left',
  className,
  mainControls,
}: LineRevealProps) {
  return (
    <motion.div
      className={cn(
        'bg-[#535353] shrink-0',
        type === 'vertical' ? 'h-full w-[1px]' : 'w-full h-[1px]',
        origin === 'left' && 'origin-left',
        origin === 'right' && 'origin-right',
        origin === 'top' && 'origin-top',
        origin === 'bottom' && 'origin-bottom',
        className
      )}
      variants={{
        hidden: {
          scaleX: type === 'horizontal' ? 0 : 1,
          scaleY: type === 'vertical' ? 0 : 1,
        },
        visible: {
          scaleX: 1,
          scaleY: 1,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}
