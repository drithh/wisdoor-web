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

interface Addon {
  keyHole: {
    text: string;
    price: number;
  };
  weatherStrip: {
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
    weatherStrip: state.weatherStrip,
    setKeyHole: state.setKeyHole,
    setWeatherStrip: state.setWeatherStrip,
  }));

  const [weatherStrip, setWeatherStrip] = useState(
    storage.weatherStrip?.amount ?? 0
  );
  useEffect(() => {
    setWeatherStrip(storage.weatherStrip?.amount ?? 0);
  }, [storage.weatherStrip?.amount]);

  return (
    <div className="grid grid-cols-1 w-full gap-3">
      <Checkbox
        checked={storage.keyHole?.isKeyHole || false}
        onCheckedChange={(checked) =>
          storage.setKeyHole({
            isKeyHole: checked,
            price: checked ? props.addons.keyHole.price : 0,
          })
        }
      >
        {props.addons.keyHole.text}
      </Checkbox>
      <Checkbox
        checked={(storage.weatherStrip?.amount ?? 0) > 0}
        onCheckedChange={(checked) =>
          storage.setWeatherStrip({
            amount: checked ? 1 : 0,
            price: checked ? props.addons.weatherStrip.price : 0,
          })
        }
      >
        <div className="w-full flex flex-col gap-2">
          <p>Tali Air</p>
          <div className="flex flex-col gap-2">
            <div
              className="flex gap-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Slider
                min={0}
                max={9}
                step={1}
                value={[weatherStrip]}
                onValueChange={(value) => {
                  const currentStrip = value[0];
                  setWeatherStrip(currentStrip);
                  storage.setWeatherStrip({
                    amount: currentStrip,
                    price: currentStrip * props.addons.weatherStrip.price,
                  });
                }}
              />
              <div className="w-24">
                {weatherStrip >= 9 ? '>9' : weatherStrip} Tali Air
              </div>
            </div>
          </div>
        </div>
      </Checkbox>
    </div>
  );
};
