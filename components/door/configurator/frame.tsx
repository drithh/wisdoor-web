import { useEffect, useRef, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DoorAccordionItem } from '../components/accordion';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Checkbox } from '../components/checkbox';

interface Frame {
  name: string;
  length: number;
  width: number;
  price: number;
  architraveFrame: boolean;
}

interface FrameDoorProps {
  frames: Frame[];
  className?: string;
}

export const FrameDoor = (props: FrameDoorProps) => {
  const storage = useDoorStore((state) => ({
    frame: state.frame,
    setFrame: state.setFrame,
  }));

  return (
    <Accordion
      collapsible
      type="single"
      className="flex font-text flex-col gap-4 w-full"
    >
      {props.frames?.map((frame) =>
        frame.architraveFrame ? (
          <DoorAccordionItem
            key={frame.name}
            isActive={frame.name === storage.frame?.name}
            value={frame.name}
            onClick={() => {
              if (storage.frame?.name !== frame.name) {
                storage.setFrame({
                  name: frame.name,
                  price: frame.price,
                  architrave: false,
                });
              }
            }}
          >
            <AccordionTrigger className="hover:no-underline text-sm px-4 py-0 w-full h-full flex justify-start rounded-sm hover:opacity-100  hover:bg-gray-100">
              {frame.name}{' '}
              {frame.width !== 0 && `(${frame.width} cm x ${frame.length} cm)`}
            </AccordionTrigger>
            <AccordionContent className="mt-4 px-4 ">
              <div className="flex flex-col gap-2">
                <Checkbox
                  className="border-0 p-0 ml-4"
                  checked={
                    storage.frame?.name === frame.name &&
                    storage.frame.architrave === true
                  }
                  onCheckedChange={(checked) => {
                    storage.setFrame({
                      name: frame.name,
                      price: frame.price,
                      architrave: checked,
                    });
                  }}
                >
                  Architrave
                </Checkbox>
              </div>
            </AccordionContent>
          </DoorAccordionItem>
        ) : (
          <DoorButton
            key={frame.name}
            onClick={() => {
              storage.setFrame({
                name: frame.name,
                price: frame.price,
                architrave: false,
              });
            }}
            isActive={frame.name === storage.frame?.name}
          >
            {frame.name}{' '}
            {frame.width !== 0 && `(${frame.width} cm x ${frame.length} cm)`}
          </DoorButton>
        )
      )}{' '}
    </Accordion>
  );
};
