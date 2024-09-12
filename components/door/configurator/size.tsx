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

interface Size {
  doorId: string;
  length: number;
  width: number;
  price: number;
  priceBelowDefaultWidth: number;
  priceAboveDefaultWidth: number;
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

  const [customWidth, setCustomWidth] = useState(storage.size?.width ?? 0);
  const [customWidthText, setCustomWidthText] = useState(
    customWidth.toString()
  );

  useEffect(() => {
    setCustomWidth(storage.size?.width ?? 0);
    setCustomWidthText(storage.size?.width.toString());
  }, [storage.size?.width]);

  const isMoreThanLimit = () => Math.abs(customWidth - size.width) === 30;

  return (
    <div className="flex font-text flex-col gap-4 w-full">
      <DoorButton
        isActive={storage.size.name === 'standard'}
        onClick={() => {
          setAccordionValue('');
          storage.setSize({
            name: 'standard',
            price: size.price,
            length: size.length,
            width: size.width,
          });
        }}
      >
        Standard ({size.width} cm x {size.length} cm)
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
            const currentWidth = customWidth;
            storage.setSize({
              name: 'custom',
              price:
                currentWidth < size.width
                  ? size.price + size.priceBelowDefaultWidth
                  : size.price + size.priceAboveDefaultWidth,
              length: size.length,
              width: size.width,
              limit: isMoreThanLimit(),
            });
          }}
          isActive={storage.size.name === 'custom'}
          value="custom"
          className="w-full"
        >
          <AccordionTrigger className="hover:no-underline text-sm px-4 py-3 w-full h-full flex justify-start rounded-sm hover:opacity-100  hover:bg-gray-100">
            Custom
            {customWidth !== size.width &&
              ` (${customWidthText} cm x ${size.length} cm)`}
          </AccordionTrigger>
          <AccordionContent
            className="mt-4 px-4 "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col gap-2">
              <Label>Lebar Pintu</Label>
              <div className="flex gap-2">
                <Slider
                  min={size.width - 30}
                  max={size.width + 30}
                  step={1}
                  defaultValue={[customWidth]}
                  onValueChange={(value) => {
                    const currentWidth = value[0];
                    setCustomWidth(currentWidth);
                    console.log('currentWidth', currentWidth);
                    if (currentWidth === size.width - 30) {
                      setCustomWidthText(`<${currentWidth}`);
                    } else if (currentWidth === size.width + 30) {
                      setCustomWidthText(`>${currentWidth}`);
                    } else {
                      setCustomWidthText(`${currentWidth}`);
                    }
                    storage.setSize({
                      name: 'custom',
                      price:
                        currentWidth < size.width
                          ? size.price + size.priceBelowDefaultWidth
                          : size.price + size.priceAboveDefaultWidth,
                      length: size.length,
                      width: currentWidth,
                      limit: isMoreThanLimit(),
                    });
                  }}
                />
                <div className="w-20">{customWidthText} cm</div>
              </div>
            </div>
          </AccordionContent>
        </DoorAccordionItem>
      </Accordion>
    </div>
  );
};
