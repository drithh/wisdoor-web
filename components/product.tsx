'use client';

import ExportedImage from 'next-image-export-optimizer';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { Icon, Link, LucideIcon, MoveLeft, MoveRight } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { LineReveal } from './magicui/line-reveal';
import Marquee from './ui/marquee';
import { cn } from '@/lib/utils';

interface ProductImage {
  image: string;
  alt: string;
}

interface ProductProps {
  productImages: ProductImage[];
  children?: React.ReactNode;
  className?: string;
  isBottom?: boolean;
}

export function Product({
  productImages,
  children,
  className,
  isBottom,
}: ProductProps) {
  const mainControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '-20% 0px -20% 0px',
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  const [imageIndex, setImageIndex] = useState(0);
  const tabRefs = useRef<Array<RefObject<HTMLButtonElement>>>(
    productImages.map(() => createRef<HTMLButtonElement>())
  );

  const handleTabClick = (index: number) => {
    if (index < 0 || index >= productImages.length) return;
    const ref = tabRefs.current[index].current;
    if (ref) {
      ref.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  interface NavigateButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
  }
  const NavigateButton = ({ children, onClick }: NavigateButtonProps) => {
    return (
      <motion.button
        whileHover="hover"
        className="z-0 relative bg-transparent rounded-full overflow-hidden border border-black px-2 py-1 flex items-center justify-center"
        onClick={onClick}
      >
        <motion.div
          variants={{
            hover: {
              scaleY: 1,
              backgroundColor: '#000',
              transition: { duration: 0.4, ease: 'easeInOut' },
              transformOrigin: 'bottom',
            },
          }}
          className="w-full h-full absolute inset-0 -z-10"
          initial={{ scaleY: 0, transformOrigin: 'top' }}
        />

        <motion.div
          variants={{
            hover: {
              color: '#fff',
              transition: { duration: 0.4, ease: 'easeInOut' },
            },
          }}
          initial={{ color: '#000' }}
          className="flex items-center z-10 justify-center"
        >
          {children}
        </motion.div>
      </motion.button>
    );
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full">
        <div className="sm:block hidden h-full w-[32rem]">
          <LineReveal origin="right" mainControls={mainControls} />
        </div>
        <div className="flex-grow h-full">
          <LineReveal mainControls={mainControls} />
        </div>
      </div>
      <div ref={ref} className="relative flex w-full sm:flex-row flex-col">
        <div className="w-screen p-4 sm:p-8 shrink-0 sm:w-[32rem] flex flex-col sm:h-[40rem]">
          {children}
          <div className="image flex-grow hidden sm:flex gap-4 flex-col justify-end">
            <p className="tracking-wider font-display">
              PRODUCTS {imageIndex + 1} / {productImages.length}
            </p>
            <div className="flex gap-4  ">
              <NavigateButton
                onClick={() => {
                  setImageIndex(Math.max(0, imageIndex - 1));
                  handleTabClick(imageIndex - 1);
                }}
              >
                <MoveLeft className="w-8 h-5" />
              </NavigateButton>
              <NavigateButton
                onClick={() => {
                  setImageIndex(
                    Math.min(productImages.length - 1, imageIndex + 1)
                  );
                  handleTabClick(imageIndex + 1);
                }}
              >
                <MoveRight className="w-8 h-5" />
              </NavigateButton>
            </div>
          </div>
        </div>
        <LineReveal
          className="hidden sm:block"
          type="vertical"
          origin="top"
          mainControls={mainControls}
        />

        <div
          className={cn(
            'group flex overflow-y-hidden scroll-smooth p-4 flex-row',
            className
          )}
        >
          <div className={cn('flex shrink-0 h-full justify-around gap-4')}>
            {productImages.map((project, index) => (
              <span
                ref={tabRefs.current[index]}
                key={index}
                className="relative h-[14rem] sm:h-[40rem]"
              >
                <motion.div
                  className="absolute insert-0 z-10 w-full h-full bg-white"
                  variants={{
                    hidden: { y: '0' },
                    visible: { y: '100%' },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.5,
                    ease: 'easeInOut',
                  }}
                ></motion.div>
                <ExportedImage
                  src={project.image}
                  width={1000}
                  height={1000}
                  className="z-0 w-auto h-full"
                  alt={project.alt}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {isBottom && (
        <div className="flex w-full">
          <div className="sm:block hidden h-full w-[32rem]">
            <LineReveal origin="right" mainControls={mainControls} />
          </div>
          <div className="flex-grow h-full">
            <LineReveal mainControls={mainControls} />
          </div>
        </div>
      )}
    </div>
  );
}
