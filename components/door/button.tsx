import { Button, ButtonProps } from '../ui/button';

interface DoorButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const DoorButton = (props: DoorButtonProps) => {
  return (
    <Button variant="outline" {...props}>
      {props.children}
    </Button>
  );
};
