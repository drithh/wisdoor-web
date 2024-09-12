import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { priceFormatPerThousand } from '@/lib/price-format';

interface Finishing {
  doorId: string;
  name: string;
  price: number;
}

interface finishingDoorProps {
  finishings: Finishing[];
  className?: string;
}

export const FinishingDoor = (props: finishingDoorProps) => {
  const storage = useDoorStore((state) => ({
    finishing: state.finishing,
    setFinishing: state.setFinishing,
    door: state.door,
  }));

  const finishingByDoorId = props.finishings.filter(
    (finishing) => finishing.doorId === storage.door.id
  );

  return (
    <div className="grid grid-cols-2 w-full gap-3">
      {finishingByDoorId?.map((finishing) => (
        <DoorButton
          key={finishing.name}
          onClick={() => {
            const selectedfinishing = props.finishings.find(
              (propfinishing) => propfinishing.name === finishing.name
            )!;
            storage.setFinishing({
              name: selectedfinishing.name,
              price: selectedfinishing.price,
            });
          }}
          isActive={finishing.name === storage.finishing?.name}
          className="flex h-full gap-2 flex-col px-4 items-center cursor-pointer"
        >
          <div className="flex flex-col gap-2 w-full h-full place-content-between">
            <p className="whitespace-pre-wrap flex-1 text-sm text-center transition-colors">
              {finishing.name}
            </p>
            <p className="text-sm text-emerald-700">
              {priceFormatPerThousand(finishing.price)}
            </p>
          </div>
        </DoorButton>
      ))}
    </div>
  );
};
