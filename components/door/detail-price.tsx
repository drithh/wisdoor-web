import { priceFormat, priceFormatPerThousand } from '@/lib/price-format';
import { useDoorStore } from './store';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { FloatingNav } from '../ui/floating-navbar';
import { useRef } from 'react';
import Link from 'next/link';

interface DetailPriceProps {
  phone: string;
}

export const DetailPrice = (props: DetailPriceProps) => {
  const storage = useDoorStore((state) => ({
    door: state.door,
    size: state.size,
    finishing: state.finishing,
    finishingVariant: state.finishingVariant,
    groove: state.groove,
    frame: state.frame,

    keyHole: state.keyHole,
    cylinder: state.cylinder,
    handle: state.handle,
    key: state.key,
    hinge: state.hinge,
  }));

  const doorPrice =
    storage.size.price +
    (storage.finishing?.price ?? 0) +
    (storage.finishingVariant?.price ?? 0) +
    (storage.groove?.price ?? 0);
  const framePrice = storage.frame?.price ?? 0;
  const additionalPrice =
    (storage.keyHole?.price ?? 0) +
    (storage.cylinder?.price ?? 0) +
    (storage.handle?.price ?? 0) +
    (storage.key?.price ?? 0) +
    (storage.hinge?.price ?? 0);
  const totalPrice = doorPrice + framePrice + additionalPrice;
  const detailDoorMessage = `
  - Model Pintu: ${storage.door.name}
  - Detail Pintu: 
    - Ukuran: ${storage.size.name} (${storage.size.height} cm x ${
    storage.size.width
  } cm) - ${priceFormat(storage.size.price)}
    - Finishing: ${storage.finishing?.name ?? 'Tanpa Finishing'} ${
    storage.finishing?.price && storage.finishing.price !== 0
      ? `- ${priceFormat(storage.finishing.price)}`
      : ''
  }
    - Variasi Finishing: ${storage.finishingVariant?.name ?? 'Tanpa Variasi'} ${
    storage.finishingVariant?.price && storage.finishingVariant.price !== 0
      ? `- ${priceFormat(storage.finishingVariant.price)}`
      : ''
  }
    - Grooving: ${storage.groove?.name ?? 'Tanpa Grooving'} ${
    storage.groove?.price && storage.groove.price !== 0
      ? `- ${priceFormat(storage.groove.price)}`
      : ''
  }`;

  const detailFrameMessage = `
  - Kusen: ${storage.frame?.name} ${
    storage.frame?.architrave && 'Architrave'
  } ${
    storage.frame?.price === 0
      ? '(Pending)'
      : ` - ${priceFormat(storage.frame?.price ?? 0)}`
  }
  `;

  const detailAdditionalMessage = `
  ${storage.keyHole && `- Lubang Kunci - ${priceFormat(storage.keyHole.price)}`}
  ${storage.cylinder && `- Silinder - ${priceFormat(storage.cylinder.price)}`}
  ${storage.handle && `- Handle - ${priceFormat(storage.handle.price)}`}
  ${storage.key && `- Kunci - ${priceFormat(storage.key.price)}`}
  ${storage.hinge && `- Engsel - ${priceFormat(storage.hinge.price)}`}
  `;

  const generateWhatsappLink = () => {
    let message = `Halo, saya ingin memesan pintu dengan detail`;
    if (doorPrice !== 0) {
      message += detailDoorMessage;
    }
    if (framePrice !== 0) {
      message += detailFrameMessage;
    }
    if (additionalPrice !== 0) {
      message += detailAdditionalMessage;
    }
    message += `\n- Total: ${priceFormat(totalPrice)}`;

    return `https://wa.me/${props.phone}?text=${encodeURIComponent(message)}`;
  };

  const detailPrice = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={detailPrice}
      className="flex relative flex-col gap-6 font-text md:mt-[10vh] md:mb-[20vh] mt-8 w-full text-black"
    >
      {/* card order now */}

      <div className="flex flex-col items-center">
        <p className="font-display text-2xl font-medium">Model Pintumu</p>
        <p className="text-gray-500 text-lg">{storage.door.name}</p>
      </div>

      {doorPrice !== 0 && (
        <div className="flex flex-col gap-2 mt-8">
          <p className="text-xl font-display">Detail Pintu</p>
          <div className="flex text-gray-500 flex-col gap-2 pl-3">
            <div className="flex place-content-between">
              <p className="">
                <span className="capitalize">{storage.size.name}</span> (
                {storage.size.width} cm x {storage.size.height} cm)
              </p>
              <p className=" text-emerald-700">
                {priceFormatPerThousand(storage.size.price)}
              </p>
            </div>
            <div className="flex place-content-between">
              <p className="">{storage.finishing?.name}</p>
              <p className=" text-emerald-700">
                {storage.finishing?.price !== undefined &&
                  storage.finishing?.price !== 0 &&
                  priceFormatPerThousand(storage.finishing?.price)}
              </p>
            </div>
            <div className="flex place-content-between">
              <p className="">{storage.finishingVariant?.name}</p>
              <p className=" text-emerald-700">
                {storage.finishingVariant?.price !== undefined &&
                  storage.finishingVariant?.price !== 0 &&
                  priceFormatPerThousand(storage.finishingVariant?.price)}
              </p>
            </div>
            <div className="flex place-content-between">
              <p className="">{storage.groove?.name}</p>
              <p className=" text-emerald-700">
                {storage.groove?.price !== undefined &&
                  storage.groove?.price !== 0 &&
                  priceFormatPerThousand(storage.groove?.price)}
              </p>
            </div>
          </div>
        </div>
      )}
      {framePrice !== 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xl font-display">Detail Kusen</p>
          <div className="flex text-gray-500 flex-col gap-2 pl-3">
            <div className="flex place-content-between">
              <p className="">
                {storage.frame?.name}{' '}
                {storage.frame?.architrave && 'Architrave'}
              </p>
              <p className=" text-emerald-700">
                {storage.frame?.price === 0
                  ? 'Pending'
                  : priceFormatPerThousand(storage.frame?.price ?? 0)}
              </p>
            </div>
          </div>
        </div>
      )}

      {additionalPrice !== 0 && (
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-xl font-display">Tambahan</p>
          <div className="flex text-gray-500 flex-col gap-2 pl-3">
            {storage.keyHole && storage.keyHole.isAdded && (
              <div className="flex place-content-between">
                <p className="">Lubang Kunci</p>
                <p className=" text-emerald-700">
                  {priceFormatPerThousand(storage.keyHole.price)}
                </p>
              </div>
            )}
            {storage.cylinder && storage.cylinder.isAdded && (
              <div className="flex place-content-between">
                <p className="">Silinder</p>
                <p className=" text-emerald-700">
                  {priceFormatPerThousand(storage.cylinder.price)}
                </p>
              </div>
            )}
            {storage.handle && storage.handle.isAdded && (
              <div className="flex place-content-between">
                <p className="">Handle</p>
                <p className=" text-emerald-700">
                  {priceFormatPerThousand(storage.handle.price)}
                </p>
              </div>
            )}
            {storage.key && storage.key.isAdded && (
              <div className="flex place-content-between">
                <p className="">Kunci</p>
                <p className=" text-emerald-700">
                  {priceFormatPerThousand(storage.key.price)}
                </p>
              </div>
            )}
            {storage.hinge && storage.hinge.isAdded && (
              <div className="flex place-content-between">
                <p className="">Engsel</p>
                <p className=" text-emerald-700">
                  {priceFormatPerThousand(storage.hinge.price)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex place-content-between">
        <p className="text-xl font-display">Total</p>
        <p className="text-xl text-emerald-700 font-display">
          {priceFormat(totalPrice)}
        </p>
      </div>
      <Link href={generateWhatsappLink()} target="_blank">
        <Button variant="outline" className="h-12 my-4 w-full">
          Pesan Sekarang
        </Button>
      </Link>
      <FloatingNav targetRef={detailPrice} price={totalPrice} />
    </div>
  );
};
