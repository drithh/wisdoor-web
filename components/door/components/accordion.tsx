import { cn } from '@/lib/utils';
import { Accordion } from '@/components/ui/accordion';

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
        props.onClick?.(evt);
      }}
      collapsible
      className={cn(
        `w-full rounded-sm border-black border-opacity-50 opacity-50 hover:opacity-100 hover:text-black  border py-3 transition-opacity hover:bg-gray-100 duration-300`,
        props.className,
        { 'opacity-100 bg-gray-100 border-black': props.isActive }
      )}
    >
      {props.children}
    </Accordion>
  );
};
