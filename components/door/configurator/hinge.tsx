import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { priceFormatPerThousand } from '@/lib/price-format';

interface Hinge {
  name: string;
  price: number;
}

interface HingeDoorProps {
  hinges: Hinge[];
  className?: string;
}

export const HingeDoor = (props: HingeDoorProps) => {
  const storage = useDoorStore((state) => ({
    hinge: state.hinge,
    setHinge: state.setHinge,
  }));

  return (
    <div className="grid grid-cols-2 w-full gap-3">
      {props.hinges?.map((hinge) => (
        <DoorButton
          key={hinge.name}
          onClick={() => {
            const selectedHinge = props.hinges.find(
              (propHinge) => propHinge.name === hinge.name
            )!;
            storage.setHinge({
              name: selectedHinge.name,
              price: selectedHinge.price,
            });
          }}
          isActive={hinge.name === storage.hinge?.name}
          className="flex h-full gap-2 flex-col px-4 items-center cursor-pointer"
        >
          <div className="flex flex-col gap-2 w-full h-full items-center place-items-center">
            <p className="whitespace-pre-wrap flex flex-1 text-sm text-center items-center transition-colors">
              {hinge.name}
            </p>
            {hinge.price !== 0 && (
              <Label className="text-sm text-emerald-700">
                {priceFormatPerThousand(hinge.price)}
              </Label>
            )}
          </div>
        </DoorButton>
      ))}
    </div>
  );
};
