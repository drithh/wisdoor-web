import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CircleHelpIcon } from '@/lib/icons';
import RichTextViewer from '@/components/rich-text-viewer';
import { cn } from '@/lib/utils';

interface DoorModalProps {
  title: string;
  richText: string;
  className?: string;
}

export const DoorModal = (props: DoorModalProps) => {
  if (props.richText === undefined || props.richText === '') {
    return null;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span
          className={cn('inline-block ml-1 top-0.5 relative', props.className)}
        >
          <CircleHelpIcon />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-[5000]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">
            {props.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <RichTextViewer value={props.richText} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
