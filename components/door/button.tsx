import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '../ui/button';

interface DoorButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export const DoorButton = (props: DoorButtonProps) => {
  return (
    <Button
      onClick={(evt) => {
        console.log('DoorButton Clicked');
        props.onClick?.(evt);
      }}
      variant="outline"
      className={cn(
        `flex justify-start rounded-sm border-opacity-50 opacity-50 hover:opacity-100 hover:text-black  border-2 items-start w-full h-fit py-3 transition-opacity hover:bg-gray-100 duration-300`,
        props.className,
        { 'opacity-100 bg-gray-100': props.isActive }
      )}
    >
      {props.children}
    </Button>
  );
};
