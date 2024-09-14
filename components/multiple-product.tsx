'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { classNames } from '@plasmicapp/react-web';
import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import { createRef, RefObject, useRef } from 'react';

interface Product {
  title: string;
  description: string;
  image: string;
}

interface MultipleProductProps {
  products: Product[];
  className?: string;
}

export function MultipleProduct({ products, className }: MultipleProductProps) {
  const firstProduct = products[0];

  const tabRefs = useRef<Array<RefObject<HTMLButtonElement>>>(
    products.map(() => createRef<HTMLButtonElement>())
  );

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

  return (
    <Tabs
      className={`text-white mx-auto md:max-w-screen-xl w-full ${className}`}
      defaultValue={'Solar'}
    >
      {products.map((product, index) => (
        <TabsContent key={index} value={product.title}>
          <div className="relative w-full h-96">
            <ExportedImage
              src={product.image}
              fill
              className="object-cover md:rounded-md"
              alt={product.title}
            />
          </div>
        </TabsContent>
      ))}
      <TabsList className="overflow-hidden flex md:px-0 pl-4 pr-16 font-text bg-transparent  gap-4 h-40 justify-between py-8">
        {products.map((product, index) => (
          <TabsTrigger
            key={index}
            value={product.title}
            onClick={() => handleTabClick(index)}
            ref={tabRefs.current[index]}
            className="data-[state=active]:bg-black h-full flex-1 min-w-72 max-w-96 text-white/50 whitespace-normal border-muted-foreground border-t-2 rounded-none data-[state=active]:border-t-4 data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:shadow-none"
          >
            <div className="flex gap-4 h-full border-inherit w-full flex-col">
              <p className="font-semibold text-lg text-left">{product.title}</p>
              <p className="text-left flex-1">{product.description}</p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
