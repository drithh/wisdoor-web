import { useEffect, useState } from 'react';
import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

interface Type {
  type: string;
  image: string;
  price: number;
}

interface TypeDoorProps {
  types: Type[];
  className?: string;
}

export const TypeDoor = (props: TypeDoorProps) => {
  const storage = useDoorStore((state) => ({
    type: state.type,
    setType: state.setType,
  }));

  const [selectedValue, setSelectedValue] = useState(props.types[0]);

  useEffect(() => {
    console.log(selectedValue, storage.type);
  }, [selectedValue, storage.type]);

  return (
    <div className="grid grid-cols-2 w-full gap-3">
      {props.types.map((type) => (
        <DoorButton
          key={type.type}
          onClick={() => {
            const selectedType = props.types.find(
              (propType) => propType.type === type.type
            )!;
            setSelectedValue(selectedType);
            storage.setType({
              name: selectedType.type,
              price: selectedType.price,
            });
          }}
          isActive={type.type === storage.type.name}
          className="flex h-full gap-2 flex-col px-4 items-center cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full  border-2  border-gray-300 flex items-center justify-center overflow-hidden peer-aria-checked:border-primary transition-colors">
            <Image
              src={type.image}
              alt={type.type}
              width={48}
              height={48}
              className=""
            />
          </div>
          <p className="whitespace-pre-wrap text-sm text-center transition-colors">
            {type.type}
          </p>
        </DoorButton>
      ))}
    </div>
  );
};
