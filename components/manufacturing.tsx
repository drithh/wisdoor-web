'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { classNames } from '@plasmicapp/react-web';
import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';
import { LineReveal } from './magicui/line-reveal';
import Marquee from './ui/marquee';

interface ManufacturingImage {
  image: string;
  alt: string;
}

interface ManufacturingProps {
  manufacturingImages: ManufacturingImage[];
  className?: string;
}

export function Manufacturing({
  manufacturingImages,
  className,
}: ManufacturingProps) {
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

  return (
    <div className="w-full flex flex-col" ref={ref}>
      {/* <LineReveal mainControls={mainControls} /> */}
      <div
        className={`flex-grow overflow-y-hidden py-2 px-1 sm:py-2 sm:px-1 overflow-x-auto flex-row flex w-full ${className}`}
      >
        <Marquee repeat={20}>
          {manufacturingImages.map((manufacturing, index) => (
            <span
              // ref={tabRefs.current[index]}
              key={index}
              className="relative h-[14rem] sm:h-[26rem]"
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
                src={manufacturing.image}
                width={384}
                height={384}
                className="z-0 w-auto h-full object-cover"
                alt={manufacturing.alt}
              />
            </span>
          ))}
        </Marquee>
      </div>
      <LineReveal mainControls={mainControls} />
    </div>
  );
}
