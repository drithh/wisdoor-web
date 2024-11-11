'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { classNames } from '@plasmicapp/react-web';
import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { Icon, LucideIcon, MoveLeft, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    const ref = tabRefs.current[imageIndex].current;
    console.log(ref);
    if (ref) {
      ref.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [imageIndex]);

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
        // onClick={() => setImageIndex(Math.max(0, imageIndex - 1))}
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
    <div className="flex w-full sm:flex-row flex-col">
      <div className="w-screen p-8 max-w-[24rem] flex flex-col h-[40rem]">
        {children}
        <div>asda</div>
        <div className="image flex-grow gap-4 flex flex-col justify-end">
          <p className="tracking-wider font-display">
            IMAGES {imageIndex + 1} / {productImages.length}
          </p>
          <div className="flex gap-4">
            <NavigateButton
              onClick={() => setImageIndex(Math.max(0, imageIndex - 1))}
            >
              <MoveLeft className="w-8 h-5" />
            </NavigateButton>
            <NavigateButton
              onClick={() =>
                setImageIndex(
                  Math.min(productImages.length - 1, imageIndex + 1)
                )
              }
            >
              <MoveRight className="w-8 h-5" />
            </NavigateButton>
          </div>
        </div>
      </div>
      <div
        className={`flex-grow py-8 px-4 overflow-x-auto flex w-full ${className}`}
      >
        {productImages.map((product, index) => (
          <span
            ref={tabRefs.current[index]}
            key={index}
            className="relative mx-4 w-full min-w-[36rem] h-full"
          >
            <ExportedImage
              src={product.image}
              className="object-contain"
              fill
              alt={product.alt}
            />
          </span>
        ))}

        {/* <TabsList className="overflow-hidden flex md:px-0 pl-4 pr-16 font-text bg-transparent  gap-4 h-40 justify-between py-8">
        {productImages.map((product, index) => (
          <TabsTrigger
            key={index}
            value={product.alt}
            onClick={() => handleTabClick(index)}
            ref={tabRefs.current[index]}
            className="data-[state=active]:bg-black h-full flex-1 min-w-72 max-w-96 text-white/50 whitespace-normal border-muted-foreground border-t-2 rounded-none data-[state=active]:border-t-4 data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:shadow-none"
          ></TabsTrigger>
        ))}
      </TabsList> */}
      </div>
    </div>
  );
}
