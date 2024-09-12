import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

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
          <p className="whitespace-pre-wrap text-sm text-center transition-colors">
            {hinge.name}
          </p>
        </DoorButton>
      ))}
    </div>
  );
};
