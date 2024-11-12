import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type HorizontalOrigin = 'left' | 'right';
type VerticalOrigin = 'top' | 'bottom';
interface LineRevealProps {
  duration?: number;
  delay?: number;
  type?: 'vertical' | 'horizontal';
  origin?: HorizontalOrigin | VerticalOrigin;
}

export function LineReveal({
  duration = 1.5,
  delay = 0,
  type = 'horizontal',
  origin = 'left',
}: LineRevealProps) {
  return (
    <motion.div
      className={cn(
        'bg-[#535353]',
        type === 'vertical' ? 'h-full w-[1px]' : 'w-full h-[1px]',
        origin === 'left' && 'origin-left',
        origin === 'right' && 'origin-right',
        origin === 'top' && 'origin-top',
        origin === 'bottom' && 'origin-bottom'
      )}
      initial={type === 'vertical' ? { scaleY: 0 } : { scaleX: 0 }}
      animate={type === 'vertical' ? { scaleY: 1 } : { scaleX: 1 }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}
