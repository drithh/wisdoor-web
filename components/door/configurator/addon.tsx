import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useDoorStore } from '../store';
import { Checkbox } from '@/components/door/components/checkbox';
import { useEffect, useRef, useState } from 'react';
import { priceFormatPerThousand } from '@/lib/price-format';

interface Addon {
  keyHole: {
    text: string;
    price: number;
  };
  cylinder: {
    text: string;
    price: number;
  };
  handle: {
    text: string;
    price: number;
  };
  key: {
    text: string;
    price: number;
  };
  hinge: {
    text: string;
    price: number;
  };
}

interface addonDoorProps {
  addons: Addon;
  className?: string;
}

export const AddonDoor = (props: addonDoorProps) => {
  const storage = useDoorStore((state) => ({
    keyHole: state.keyHole,
    cylinder: state.cylinder,
    handle: state.handle,
    key: state.key,
    hinge: state.hinge,
    setKeyHole: state.setKeyHole,
    setCylinder: state.setCylinder,
    setHandle: state.setHandle,
    setKey: state.setKey,
    setHinge: state.setHinge,
  }));

  return (
    <div className="grid grid-cols-1 w-full gap-3">
      <Checkbox
        checked={storage.keyHole?.isAdded ?? false}
        onCheckedChange={(checked) =>
          storage.setKeyHole({
            isAdded: checked,
            price: checked ? props.addons.keyHole.price : 0,
          })
        }
      >
        <div className="flex w-full place-content-between">
          <p>{props.addons.keyHole.text}</p>
          <p className="text-sm text-emerald-700">
            {priceFormatPerThousand(props.addons.keyHole.price)}
          </p>
        </div>
      </Checkbox>

      <Checkbox
        checked={storage.cylinder?.isAdded ?? false}
        onCheckedChange={(checked) =>
          storage.setCylinder({
            isAdded: checked,
            price: checked ? props.addons.cylinder.price : 0,
          })
        }
      >
        <div className="flex w-full place-content-between">
          <p>{props.addons.cylinder.text}</p>
          <p className="text-sm text-emerald-700">
            {priceFormatPerThousand(props.addons.cylinder.price)}
          </p>
        </div>
      </Checkbox>

      <Checkbox
        checked={storage.handle?.isAdded ?? false}
        onCheckedChange={(checked) =>
          storage.setHandle({
            isAdded: checked,
            price: checked ? props.addons.handle.price : 0,
          })
        }
      >
        <div className="flex w-full place-content-between">
          <p>{props.addons.handle.text}</p>
          <p className="text-sm text-emerald-700">
            {priceFormatPerThousand(props.addons.handle.price)}
          </p>
        </div>
      </Checkbox>

      <Checkbox
        checked={storage.key?.isAdded ?? false}
        onCheckedChange={(checked) =>
          storage.setKey({
            isAdded: checked,
            price: checked ? props.addons.key.price : 0,
          })
        }
      >
        <div className="flex w-full place-content-between">
          <p>{props.addons.key.text}</p>
          <p className="text-sm text-emerald-700">
            {priceFormatPerThousand(props.addons.key.price)}
          </p>
        </div>
      </Checkbox>

      <Checkbox
        checked={storage.hinge?.isAdded ?? false}
        onCheckedChange={(checked) =>
          storage.setHinge({
            isAdded: checked,
            price: checked ? props.addons.hinge.price : 0,
          })
        }
      >
        <div className="flex w-full place-content-between">
          <p>{props.addons.hinge.text}</p>
          <p className="text-sm text-emerald-700">
            {priceFormatPerThousand(props.addons.hinge.price)}
          </p>
        </div>
      </Checkbox>
    </div>
  );
};
