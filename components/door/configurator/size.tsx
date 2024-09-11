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

  const [isDefaultSize, setIsDefaultSize] = useState(false);

  const size =
    props.sizes.find((size) => size.doorId === storage.id) || props.sizes[0];

  const customWidth = useRef<number>(size.width);
  const customWidthText = useRef<string>(customWidth.current.toString());

  const isMoreThanLimit = () =>
    Math.abs(customWidth.current - size.width) === 30;

  return (
    <div className="flex font-text flex-col gap-4 w-full">
      <DoorButton
        isActive={isDefaultSize}
        onClick={() => {
          setIsDefaultSize(true);
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
      <Accordion collapsible type="single">
        <DoorAccordionItem
          onClick={() => {
            setIsDefaultSize(false);
          }}
          isActive={!isDefaultSize}
          value="custom"
          className="w-full"
        >
          <AccordionTrigger className="hover:no-underline text-sm px-4 py-0 w-full h-full flex justify-start rounded-sm hover:opacity-100  hover:bg-gray-100">
            Custom
            {customWidth.current !== size.width &&
              ` (${customWidthText.current} cm x ${size.length} cm)`}
          </AccordionTrigger>
          <AccordionContent className="mt-4 px-4 ">
            <div className="flex flex-col gap-2">
              <Label>Lebar Pintu</Label>
              <div className="flex gap-2">
                <Slider
                  min={size.width - 30}
                  max={size.width + 30}
                  step={1}
                  defaultValue={[customWidth.current]}
                  onValueChange={(value) => {
                    const currentWidth = value[0];
                    customWidth.current = currentWidth;

                    if (currentWidth === size.width - 30) {
                      customWidthText.current = `<${currentWidth}`;
                    } else if (currentWidth === size.width + 30) {
                      customWidthText.current = `>${currentWidth}`;
                    } else {
                      customWidthText.current = `${currentWidth}`;
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
                  onValueCommit={(value) => {}}
                />
                <div className="w-20">{customWidthText.current} cm</div>
              </div>
            </div>
          </AccordionContent>
        </DoorAccordionItem>
      </Accordion>
    </div>
  );
};
