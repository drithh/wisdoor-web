import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { priceFormatPerThousand } from '@/lib/price-format';
import { DoorModal } from '../components/modal';
import ExportedImage from 'next-image-export-optimizer';

interface Type {
  type: string;
  image: string;
  price: number;
  modal: string;
}

interface TypeDoorProps {
  types: Type[];
  className?: string;
}

export const TypeDoor = (props: TypeDoorProps) => {
  // const storage = useDoorStore((state) => ({
  //   type: state.type,
  //   setType: state.setType,
  // }));

  return (
    <div className="grid grid-cols-2 w-full gap-3">
      {/* {props.types.map((type) => (
        <DoorButton
          key={type.type}
          onClick={() => {
            const selectedType = props.types.find(
              (propType) => propType.type === type.type
            )!;
            storage.setType({
              name: selectedType.type,
              price: selectedType.price,
            });
          }}
          isActive={type.type === storage.type.name}
          className="flex h-full gap-2 flex-col px-4 items-center cursor-pointer"
        >
          <div className="w-12 min-h-12 rounded-full  border-2  border-gray-300 flex items-center justify-center overflow-hidden peer-aria-checked:border-primary transition-colors">
            <ExportedImage
              src={type.image}
              alt={type.type}
              width={48}
              height={48}
              className=""
            />
          </div>
          <div className="flex flex-col gap-2 w-full h-full place-content-between">
            <p className="whitespace-pre-wrap flex-1 text-sm text-center transition-colors">
              {type.type}
              <DoorModal
                title={type.type}
                richText={type.modal}
                className="top-1"
              />
            </p>

            <p className="text-sm text-emerald-700">
              {priceFormatPerThousand(type.price)}
            </p>
          </div>
        </DoorButton>
      ))} */}
    </div>
  );
};
