import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface RevealProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  duration = 0.5,
  delay = 0,
}) => {
  const mainControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        className={cn('font-display ', className)}
        variants={{
          hidden: { y: 75 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: duration,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
