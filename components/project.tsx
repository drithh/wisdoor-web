'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { classNames } from '@plasmicapp/react-web';
import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { Icon, Link, LucideIcon, MoveLeft, MoveRight } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { LineReveal } from './magicui/line-reveal';

interface ProjectImage {
  image: string;
  alt: string;
}

interface ProjectProps {
  projectImages: ProjectImage[];
  className?: string;
}

export function Project({ projectImages, className }: ProjectProps) {
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

  const [imageIndex, setImageIndex] = useState(0);
  // const tabRefs = useRef<Array<RefObject<HTMLButtonElement>>>(
  //   projectImages.map(() => createRef<HTMLButtonElement>())
  // );

  // const handleTabClick = (index: number) => {
  //   const ref = tabRefs.current[index].current;
  //   if (ref) {
  //     ref.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'nearest',
  //       inline: 'center',
  //     });
  //   }
  // };

  return (
    <div className="w-full flex flex-col" ref={ref}>
      <LineReveal mainControls={mainControls} />
      <div
        className={`flex-grow overflow-y-hidden py-4 px-2 sm:py-8 sm:px-4 overflow-x-auto flex-row flex w-full ${className}`}
      >
        {projectImages.map((project, index) => (
          <span
            // ref={tabRefs.current[index]}
            key={index}
            className="relative mx-2 sm:mx-4 min-w-[24rem] sm:min-w-[44rem] h-[24rem] sm:min-h-[44rem]"
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
                delay: index * 0.5,
                ease: 'easeInOut',
              }}
            ></motion.div>
            <ExportedImage
              src={project.image}
              className="object-cover z-0"
              fill
              alt={project.alt}
            />
          </span>
        ))}
      </div>
      <LineReveal mainControls={mainControls} />
    </div>
  );
}
