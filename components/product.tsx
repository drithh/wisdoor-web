'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { classNames } from '@plasmicapp/react-web';
import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { Icon, Link, LucideIcon, MoveLeft, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LineReveal } from './magicui/line-reveal';

interface ProductImage {
  image: string;
  alt: string;
}

interface ProductProps {
  productImages: ProductImage[];
  children?: React.ReactNode;
  className?: string;
}

export function Product({ productImages, children, className }: ProductProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const tabRefs = useRef<Array<RefObject<HTMLButtonElement>>>(
    productImages.map(() => createRef<HTMLButtonElement>())
  );

  // useEffect(() => {
  //   const ref = tabRefs.current[imageIndex].current;
  //   console.log(ref);
  //   if (ref) {
  //     ref.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'nearest',
  //       inline: 'center',
  //     });
  //   }
  // }, [imageIndex]);

  const handleTabClick = (index: number) => {
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
        <div className="h-full w-[39rem]">
          <LineReveal origin="right" />
        </div>
        <div className="flex-grow h-full">
          <LineReveal />
        </div>
      </div>
      <div className="flex w-full sm:flex-row flex-col">
        <div className="w-screen p-4 sm:p-8 max-w-[39rem] flex flex-col sm:h-[48rem]">
          {children}
          <div className="image flex-grow hidden sm:flex gap-4 flex-col justify-end">
            <p className="tracking-wider font-display">
              IMAGES {imageIndex + 1} / {productImages.length}
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
        <LineReveal type="vertical" origin="top" />
        <div
          className={`flex-grow py-4 px-2 sm:py-8 sm:px-4 overflow-x-auto flex-row flex w-full ${className}`}
        >
          {productImages.map((product, index) => (
            <span
              ref={tabRefs.current[index]}
              key={index}
              className="relative mx-2 sm:mx-4 min-w-[24rem] sm:min-w-[44rem] h-[24rem] sm:h-full"
            >
              <ExportedImage
                src={product.image}
                className="object-contain"
                fill
                alt={product.alt}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
