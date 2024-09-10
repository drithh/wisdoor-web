import { cn } from '@/lib/utils';
import { Accordion } from '../ui/accordion';

interface DoorButtonProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: (evt: React.MouseEvent) => void;
}

export const DoorAccordion = (props: DoorButtonProps) => {
  return (
    <Accordion
      type="single"
      onClick={(evt) => {
        console.log('DoorButton Clicked');
        props.onClick?.(evt);
      }}
      collapsible
      className={cn(
        `flex justify-start w-full rounded-sm border-black border-opacity-50 opacity-50 hover:opacity-100 hover:text-black  border-2 items-start h-fit py-3 transition-opacity hover:bg-gray-100 duration-300`,
        props.className,
        { 'opacity-100 bg-gray-100 border-black': props.isActive }
      )}
    >
      {props.children}
    </Accordion>
  );
};
