import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { priceFormatPerThousand } from '@/lib/price-format';
import { DoorModal } from '../components/modal';
import variants from '../../../public/variants.json';

interface Finishing {
  name: string;
  price: number;
  modal: string;
}

interface finishingDoorProps {
  finishings: Finishing[];
  className?: string;
}

export const FinishingDoor = (props: finishingDoorProps) => {
  const storage = useDoorStore((state) => ({
    finishing: state.finishing,
    setFinishing: state.setFinishing,
    setFinishinVariant: state.setFinishingVariant,
    door: state.door,
  }));

  const getFirstVariant = (type: string) => {
    return variants.find((variant) =>
      type.toLocaleLowerCase().includes(variant.data.type)
    );
  };

  return (
    <div className="grid grid-cols-2 w-full gap-3">
      {props.finishings?.map((finishing) => (
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
            const variant = getFirstVariant(selectedfinishing.name);

            if (!variant) return;
            storage.setFinishinVariant({
              name: variant?.data.code,
              price: variant?.data.price,
            });
          }}
          isActive={finishing.name === storage.finishing?.name}
          className="flex h-full gap-2 flex-col px-4 items-center cursor-pointer"
        >
          <div className="flex flex-col gap-2 w-full items-center h-full place-content-between">
            <p className="whitespace-pre-wrap flex flex-1 text-sm text-center items-center transition-colors">
              {finishing.name}
              <DoorModal
                title={finishing.name}
                richText={finishing.modal}
                className="top-0"
              />
            </p>
            {finishing.price !== 0 && (
              <p className="text-sm text-emerald-700">
                {priceFormatPerThousand(finishing.price)}
              </p>
            )}
          </div>
        </DoorButton>
      ))}
    </div>
  );
};
