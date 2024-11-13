import { Link } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselMainContainer,
  SliderMainItem,
  CarouselThumbsContainer,
  CarouselIndicator,
} from './ui/carousel';
import ExportedImage from 'next-image-export-optimizer';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CarouselProps {
  carousels: {
    alt: string;
    image: string;
  }[];
  className?: string;
}

export function CarouselWrapper({ carousels, className }: CarouselProps) {
  return (
    <Carousel
      className={cn(
        'w-full h-screen pt-[72px] max-h-[1280px] overflow-x-hidden',
        className
      )}
    >
      <CarouselPrevious
        variant={'ghost'}
        className="border-0 bg-transparent text-white hover:bg-transparent"
      />
      <CarouselNext
        variant={'ghost'}
        className="border-0 bg-transparent text-white hover:bg-transparent"
      />

      <div className="relative z-0 w-full">
        <CarouselMainContainer className="">
          {carousels?.map((carousel, index) => (
            <SliderMainItem
              key={index}
              className="relative h-[50vh] w-full bg-transparent p-0 md:h-[calc(100vh-72px)]"
            >
              <ExportedImage
                fill
                className="absolute object-cover"
                alt={carousel.alt}
                src={carousel.image}
              />
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {carousels?.map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  );
}
