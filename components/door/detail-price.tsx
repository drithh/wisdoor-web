import { priceFormat, priceFormatPerThousand } from '@/lib/price-format';
import { useDoorStore } from './store';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { FloatingNav } from '../ui/floating-navbar';
import { useRef } from 'react';

export const DetailPrice = () => {
  const storage = useDoorStore((state) => ({
    door: state.door,
    size: state.size,
    type: state.type,
    finishing: state.finishing,
    keyHole: state.keyHole,
    weatherStrip: state.weatherStrip,
    frame: state.frame,
    frameFinishing: state.frameFinishing,
    hinge: state.hinge,
  }));

  const totalPrice =
    storage.size.price +
    storage.type.price +
    (storage.finishing?.price ?? 0) +
    (storage.keyHole?.price ?? 0) +
    (storage.weatherStrip?.price ?? 0) +
    (storage.frame?.price ?? 0) +
    (storage.frameFinishing?.price ?? 0) +
    (storage.hinge?.price ?? 0);

  const detailPrice = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={detailPrice}
      className="flex relative flex-col gap-6 font-text md:mb-[20vh] mt-8 w-full text-black"
    >
      {/* card order now */}

      <div className="flex flex-col items-center">
        <p className="font-display text-2xl font-medium">Model Pintumu</p>
        <p className="text-gray-500 text-lg">{storage.door.name}</p>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <p className="text-xl font-display">Detail Pintu</p>
        <div className="flex text-gray-500 flex-col gap-2 pl-3">
          <div className="flex place-content-between">
            <p className="">
              <span className="capitalize">{storage.size.name}</span> (
              {storage.size.length} cm x {storage.size.width} cm)
            </p>
            <p className=" text-emerald-700">
              {priceFormatPerThousand(storage.size.price)}
            </p>
          </div>
          <div className="flex place-content-between">
            <p className="">{storage.type.name}</p>
            <p className=" text-emerald-700">
              {priceFormatPerThousand(storage.type.price)}
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
          {storage.keyHole && (
            <div className="flex place-content-between">
              <p className="">Lubang Kunci</p>
              <p className=" text-emerald-700">
                {priceFormatPerThousand(storage.keyHole.price)}
              </p>
            </div>
          )}
          {storage.weatherStrip && (
            <div className="flex place-content-between">
              <p className="">Tali Air ({storage.weatherStrip.amount}x)</p>
              <p className=" text-emerald-700">
                {priceFormatPerThousand(storage.weatherStrip.price)}
              </p>
            </div>
          )}
        </div>
      </div>
      {storage.frame?.name !== 'Tanpa Frame' && (
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
            {storage.frameFinishing?.price !== 0 && (
              <div className="flex place-content-between">
                <p className="">
                  {storage.frameFinishing?.name} (
                  {storage.frameFinishing?.color})
                </p>
                <p className=" text-emerald-700">
                  {priceFormatPerThousand(storage.frameFinishing?.price ?? 0)}
                </p>
              </div>
            )}
            {storage.hinge?.price !== 0 && (
              <div className="flex place-content-between">
                <p className="">{storage.hinge?.name}</p>
                <p className=" text-emerald-700">
                  {priceFormatPerThousand(storage.hinge?.price ?? 0)}
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
      <Button variant="outline" className="h-12 my-4 w-full">
        Pesan Sekarang
      </Button>
      <FloatingNav targetRef={detailPrice} price={totalPrice} />
      {/* <Card className="sticky bottom-[2rem] left-[50%] -translate-x-1/2 bg-red-300">
        <CardContent>wd</CardContent>
      </Card> */}
    </div>
  );
};
