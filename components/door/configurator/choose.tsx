import { DoorButton } from '../components/button';
import { DoorState, useDoorStore } from '../store';

interface ChooseDoorProps {
  doorNames: DoorState['door'][];
  className?: string;
}

export const ChooseDoor = (props: ChooseDoorProps) => {
  const storage = useDoorStore((state) => ({
    door: state.door,
    setDoor: state.setDoor,
  }));

  return (
    <div className="flex w-full flex-col gap-3">
      {props.doorNames.map((door) => (
        <DoorButton
          isActive={door.id === storage.door.id}
          onClick={() => storage.setDoor(door)}
          key={door.id}
          className={props.className}
        >
          {door.name}
        </DoorButton>
      ))}
    </div>
  );
};
