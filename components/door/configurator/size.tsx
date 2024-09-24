import { useEffect, useRef, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// import { DoorAccordion } from '../components/accordion';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { DoorAccordionItem } from '../components/accordion';
import { priceFormatPerThousand } from '@/lib/price-format';

interface Size {
  doorId: string;
  defaultHeight: number;
  maxHeight: number;
  minHeight: number;
  defaultWidth: number;
  maxWidth: number;
  minWidth: number;
  defaultPrice: number;
  addedPriceAbove: number;
  addedPriceBelow: number;
}

interface SizeDoorProps {
  sizes: Size[];
  className?: string;
}

export const SizeDoor = (props: SizeDoorProps) => {
  const storage = useDoorStore((state) => ({
    id: state.door.id,
    size: state.size,
    setSize: state.setSize,
  }));
  const [accordionValue, setAccordionValue] = useState(storage.size.name);

  useEffect(() => {
    setAccordionValue(storage.size.name);
  }, [storage.size.name]);

  const size =
    props.sizes.find((size) => size.doorId === storage.id) || props.sizes[0];

  const calculatePrice = (width?: number, height?: number) => {
    const currentWidth = width ?? storage.size.width;
    const currentHeight = height ?? storage.size.height;
    const defaultArea = size.defaultWidth * size.defaultHeight;
    const currentArea = currentWidth * currentHeight;
    if (
      currentWidth === size.defaultWidth &&
      currentHeight === size.defaultHeight
    ) {
      return size.defaultPrice;
    } else if (currentArea > defaultArea) {
      return size.defaultPrice + size.addedPriceAbove;
    } else {
      return size.defaultPrice + size.addedPriceBelow;
    }
  };

  return (
    <div className="flex font-text flex-col gap-4 w-full">
      <DoorButton
        isActive={storage.size.name === 'standard'}
        onClick={() => {
          setAccordionValue('');
          storage.setSize({
            name: 'standard',
            price: size.defaultPrice,
            height: size.defaultHeight,
            width: size.defaultWidth,
          });
        }}
      >
        <div className="flex w-full place-content-between">
          <p>
            Standard ({size.defaultWidth} cm x {size.defaultHeight} cm)
          </p>
          <p className="text-sm text-emerald-700">
            {priceFormatPerThousand(size.defaultPrice)}
          </p>
        </div>
      </DoorButton>
      <Accordion
        collapsible
        type="single"
        value={accordionValue}
        onValueChange={(value) => {
          setAccordionValue(value);
        }}
      >
        <DoorAccordionItem
          onClick={() => {
            storage.setSize({
              name: 'custom',
              price: size.defaultPrice,
              height: size.defaultHeight,
              width: size.defaultWidth,
            });
          }}
          isActive={storage.size.name === 'custom'}
          value="custom"
          className="w-full"
        >
          <AccordionTrigger className="hover:no-underline text-sm px-4 py-3 w-full h-full flex justify-start rounded-sm hover:opacity-100  hover:bg-gray-100">
            <div className="flex w-full place-content-between">
              <p>
                Custom{' '}
                {storage.size.width !== size.defaultWidth ||
                storage.size.height !== size.defaultHeight
                  ? `(${storage.size.width} cm x ${storage.size.height}) cm`
                  : ''}
              </p>
              <p className="text-sm text-emerald-600">
                {priceFormatPerThousand(calculatePrice())}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className="mt-4 px-4 "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label>Lebar Pintu</Label>
                <div className="flex gap-2">
                  <Slider
                    min={size.minWidth}
                    max={size.maxWidth}
                    step={1}
                    defaultValue={[storage.size.width]}
                    onValueChange={(value) => {
                      const currentWidth = value[0];
                      storage.setSize({
                        name: 'custom',
                        price: calculatePrice(currentWidth),
                        height: storage.size.height,
                        width: currentWidth,
                      });
                    }}
                  />
                  <div className="w-20">{storage.size.width} cm</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Tinggi Pintu</Label>
                <div className="flex gap-2">
                  <Slider
                    min={size.minHeight}
                    max={size.maxHeight}
                    step={1}
                    defaultValue={[storage.size.height]}
                    onValueChange={(value) => {
                      const currentHeight = value[0];
                      storage.setSize({
                        name: 'custom',
                        price: calculatePrice(currentHeight),
                        width: storage.size.width,
                        height: currentHeight,
                      });
                    }}
                  />
                  <div className="w-20">{storage.size.height} cm</div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </DoorAccordionItem>
      </Accordion>
    </div>
  );
};
