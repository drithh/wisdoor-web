import { cn } from '@/lib/utils';
import { DoorButton } from '../components/button';
import { DoorModal } from '../components/modal';
import { DoorState, useDoorStore } from '../store';

type DoorStateDoor = DoorState['door'];

interface Door extends DoorStateDoor {
  modal: string;
}

interface ChooseDoorProps {
  doorNames: Door[];
  className?: string;
}

export const ChooseDoor = (props: ChooseDoorProps) => {
  const storage = useDoorStore((state) => ({
    door: state.door,
    setDoor: state.setDoor,
  }));
  return (
    <div className="flex w-full flex-col gap-3">
      {props.doorNames?.map((door) => (
        <DoorButton
          isActive={door.id === storage.door.id}
          onClick={() => storage.setDoor(door)}
          key={door.id}
          className={cn(props.className, 'flex gap-2 items-center')}
        >
          <div className="flex gap-2">{door.name}</div>
          <DoorModal title={door.name} richText={door.modal} />
        </DoorButton>
      ))}
    </div>
  );
};
