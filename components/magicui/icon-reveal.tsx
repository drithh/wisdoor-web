import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface IconRevealProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const IconReveal: React.FC<IconRevealProps> = ({
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

  const radius = 40; // Half of the width/height (the radius of the circle)
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  return (
    <div
      ref={ref}
      className={cn(
        'relative p-6 w-24 h-24 flex items-center justify-center overflow-hidden rounded-full',
        className
      )}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#535353"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          variants={{
            hidden: {
              strokeDashoffset: circumference,
            },
            visible: {
              strokeDashoffset: 0,
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
      </motion.svg>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0, rotate: 0 },
          visible: { opacity: 1, scale: 1, rotate: 360 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay: delay,
          stiffness: 260,
          damping: 20,
          mass: 0.5,
        }}
        className="inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
};
