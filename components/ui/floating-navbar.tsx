'use client';
import React, { RefObject, useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './button';
import { priceFormat } from '@/lib/price-format';

interface FloatingNavProps {
  className?: string;
  targetRef?: RefObject<HTMLDivElement>;
  price: number;
}

export const FloatingNav = ({
  className,
  targetRef,
  price,
}: FloatingNavProps) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting); // Set the visibility state
      },
      {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (targetRef?.current) {
      observer.observe(targetRef.current); // Observe the target element
    }

    return () => {
      if (targetRef?.current) {
        observer.unobserve(targetRef.current); // Cleanup
      }
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex sm:max-w-[25rem] fixed right-0 bottom-0 sm:right-[4rem] w-screen border border-transparent rounded-t-xl  bg-white shadow-[0_10px_50px_rgba(0,0,0,0.3)] z-50 sm:py-4 py-2 px-8 items-center  place-content-between space-x-4',
          className
        )}
      >
        <div className="flex flex-col gap-0">
          <p className="text-sm sm:text-lg text-gray-500">Total</p>
          <p className="text-base sm:text-xl font-medium">
            {priceFormat(price)}
          </p>
        </div>
        <Button
          className="h-8 sm:h-12 my-1 sm:my-4 text-base sm:text-xl font-text bg-green-500 hover:bg-green-300"
          onClick={() => {
            targetRef?.current?.scrollIntoView({
              behavior: 'smooth', // Smooth scrolling
              block: 'start', // Scroll until the top of the element is at the top of the viewport
            });
          }}
        >
          Order Now
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
