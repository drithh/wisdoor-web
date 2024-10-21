import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { priceFormatPerThousand } from '@/lib/price-format';
import { DoorModal } from '../components/modal';
import ExportedImage from 'next-image-export-optimizer';
import { usePlasmicQueryData } from '@plasmicapp/react-web/lib/query';
import { DataProvider } from '@plasmicpkgs/plasmic-basic-components';
import variants from '../../../public/variants.json';

interface Type {
  type: string;
  image: string;
  price: number;
  modal: string;
}

interface FinishingVariantProps {
  className?: string;
}

export const FinishingVariant = (props: FinishingVariantProps) => {
  const storage = useDoorStore((state) => ({
    finishing: state.finishing,
    finishingVariant: state.finishingVariant,
    setFinishingVariant: state.setFinishingVariant,
  }));

  return (
    <div className="flex sm:grid flex-wrap sm:grid-cols-6 justify-center sm:px-1 w-full gap-1 mx-auto">
      {variants
        ?.filter((variant) =>
          storage.finishing?.name
            .toLocaleLowerCase()
            .includes(variant.data.type)
        )
        .map((variant) => (
          <DoorButton
            key={variant.id}
            onClick={() => {
              storage.setFinishingVariant({
                name: variant.data.code,
                price: 0,
              });
            }}
            isActive={variant.data.code === storage.finishingVariant?.name}
            className="flex sm:w-15 sm:h-15 h-12 w-12 gap-2 rounded-full border-2  border-gray-300 p-0 flex-col items-center cursor-pointer"
          >
            {/* <div className="flex gap-2 w-full place-content-between"> */}
            {/* <p className="whitespace-pre-wrap  text-sm text-center transition-colors">
                {variant.data.code}
              </p>

              <p className="text-sm text-emerald-700">
                {priceFormatPerThousand(variant.data.price)}
              </p> */}
            {/* </div> */}
            <div
              className="w-full h-full rounded-full  flex items-center justify-center overflow-hidden peer-aria-checked:border-primary transition-colors"
              style={{
                background: variant.data.hex,
              }}
            >
              {variant.data.file && (
                <ExportedImage
                  src={variant.data.file.url}
                  alt={variant.data.code}
                  width={160}
                  height={80}
                  className=""
                />
              )}
            </div>
          </DoorButton>
        ))}
    </div>
  );
};
