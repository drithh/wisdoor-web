import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface DoorButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export const DoorButton = (props: DoorButtonProps) => {
  return (
    <Button
      onClick={(evt) => {
        props.onClick?.(evt);
      }}
      variant="outline"
      className={cn(
        `font-text p-2 flex justify-start rounded-sm border-black/50  opacity-70  hover:opacity-100 hover:text-black  border items-start w-full h-fit py-3 transition-opacity hover:bg-gray-100 duration-300`,
        props.className,
        { 'opacity-100 bg-gray-100 animate-expand': props.isActive }
      )}
    >
      {props.children}
    </Button>
  );
};
