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

interface Type {
  type: string;
  image: string;
  price: number;
  modal: string;
}

const CMS_ID = process.env.NEXT_PUBLIC_CMS_ID;
const CMS_PUBLIC_TOKEN = process.env.NEXT_PUBLIC_CMS_PUBLIC_TOKEN;
const MODEL_ID = process.env.NEXT_PUBLIC_CMS_MODEL_ID;

const getFinshingVariants = async () => {
  console.log(process.env);
  interface FileMetadata {
    url: string;
    name: string;
    size: number; // in bytes
    mimetype: string; // MIME type of the file
    imageMeta: {
      width: number;
      height: number;
    };
  }
  interface Data {
    type: string; // e.g., "hpl"
    code: string; // e.g., "F-7025-1"
    price: number; // Price in the specified currency
    file: FileMetadata; // The file metadata
  }

  // Define the main type for the object
  interface Item {
    id: string; // Unique identifier
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    identifier: string; // e.g., "F-7025-1"
    data: Data; // The data field containing type, code, price, and file
  }

  interface Response {
    rows: Item[];
  }

  const response = await fetch(
    `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${MODEL_ID}/query`,
    {
      headers: {
        // Your CMS ID and CMS Public API token
        'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`,
      },
    }
  );
  console.log(response);
  const itemResponse = (await response.json()) as Response;

  return itemResponse.rows;
};
interface FinishingVariantProps {
  className?: string;
}

export const FinishingVariant = (props: FinishingVariantProps) => {
  const storage = useDoorStore((state) => ({
    finishingVariant: state.finishingVariant,
    setFinishingVariant: state.setFinishingVariant,
  }));

  const { data: variants } = usePlasmicQueryData(
    '/finishing-variants',
    async () => {
      const resp = await getFinshingVariants();
      return resp;
    }
  );

  if (!variants) {
    return null;
  }
  console.log(variants);

  return (
    <div className="grid grid-cols-2 w-full gap-3">
      {variants?.map((variant) => (
        <DoorButton
          key={variant.id}
          onClick={() => {
            storage.setFinishingVariant({
              name: variant.data.code,
              price: variant.data.price,
            });
          }}
          isActive={variant.data.code === storage.finishingVariant?.name}
          className="flex h-full gap-2 flex-col px-4 items-center cursor-pointer"
        >
          <div className="w-12 min-h-12 rounded-full  border-2  border-gray-300 flex items-center justify-center overflow-hidden peer-aria-checked:border-primary transition-colors">
            <ExportedImage
              src={variant.data.file.url}
              alt={variant.data.code}
              width={48}
              height={48}
              className=""
            />
          </div>
          <div className="flex flex-col gap-2 w-full h-full place-content-between">
            <p className="whitespace-pre-wrap flex-1 text-sm text-center transition-colors">
              {variant.data.code}
            </p>

            <p className="text-sm text-emerald-700">
              {priceFormatPerThousand(variant.data.price)}
            </p>
          </div>
        </DoorButton>
      ))}
    </div>
  );
};
