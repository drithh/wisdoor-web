import { cn } from '@/lib/utils';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

interface DoorButtonProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  isActive?: boolean;
  onClick?: (evt: React.MouseEvent) => void;
}

export const DoorAccordionItem = (props: DoorButtonProps) => {
  return (
    <AccordionItem
      value={props.value}
      onClick={(evt) => {
        props.onClick?.(evt);
      }}
      className={cn(
        `w-full rounded-sm border-black border-opacity-50 opacity-50 hover:opacity-100 hover:text-black  border transition-opacity hover:bg-gray-100 duration-300 overflow-visible`,
        props.className,
        { 'opacity-100 bg-gray-100 border-black': props.isActive }
      )}
    >
      {props.children}
    </AccordionItem>
  );
};
