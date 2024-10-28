import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { priceFormatPerThousand } from '@/lib/price-format';
import { DoorModal } from '../components/modal';

interface Groove {
  name: string;
  price: number;
  modal: string;
}

interface grooveDoorProps {
  grooves: Groove[];
  className?: string;
}

export const GrooveDoor = (props: grooveDoorProps) => {
  const storage = useDoorStore((state) => ({
    groove: state.groove,
    setGroove: state.setGroove,
    door: state.door,
  }));

  return (
    <div className="flex flex-col sm:grid grid-cols-2 w-full gap-3">
      {props.grooves?.map((groove) => (
        <DoorButton
          key={groove.name}
          onClick={() => {
            const selectedgroove = props.grooves.find(
              (propgroove) => propgroove.name === groove.name
            )!;
            storage.setGroove({
              name: selectedgroove.name,
              price: selectedgroove.price,
            });
          }}
          isActive={groove.name === storage.groove?.name}
          className="flex h-full gap-2 flex-col  items-center cursor-pointer"
        >
          <div className="flex sm:flex-col  gap-2 w-full items-center h-full place-content-between">
            <p className="whitespace-pre-wrap flex flex-1 text-sm text-center items-center transition-colors">
              {groove.name}
              <DoorModal
                title={groove.name}
                richText={groove.modal}
                className="top-0"
              />
            </p>
            {groove.price !== 0 && (
              <p className="text-sm text-emerald-700">
                {priceFormatPerThousand(groove.price)}
              </p>
            )}
          </div>
        </DoorButton>
      ))}
    </div>
  );
};
