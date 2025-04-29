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
import RichTextViewer from './rich-text-viewer';

interface ProjectImage {
  image: string;
  alt: string;
  title: string;
}

interface ProjectProps {
  projectImages: ProjectImage[];
  className?: string;
}

export function Project({ projectImages, className }: ProjectProps) {
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
        <Marquee repeat={60}>
          {projectImages.map((project, index) => (
            <span
              // ref={tabRefs.current[index]}
              key={index}
              className="relative h-[14rem] sm:h-[26rem] flex flex-col"
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
                className="z-0 w-auto h-4/5 sm:h-[86%]"
                alt={project.alt}
              />
              <div className="flex flex-col space-y-1 sm:space-y-0 text-center my-auto text-white items-center justify-center w-full h-48 bg-black">
                {/* <RichTextViewer value={project.title} /> */}

                {project.alt.split(';').map((line, i) => (
                  <h3
                    key={i}
                    className={`font-display leading-3 sm:leading-5 text-xs sm:text-base text-white text-center ${
                      i === 1 ? 'text-[0.6rem] sm:text-xs' : ''
                    }`}
                  >
                    {line}
                  </h3>
                ))}
              </div>
            </span>
          ))}
        </Marquee>
      </div>
      <LineReveal mainControls={mainControls} />
    </div>
  );
}
