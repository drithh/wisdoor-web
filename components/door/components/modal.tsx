import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CircleHelp } from 'lucide-react';
import RichTextViewer from '@/components/rich-text-viewer';

interface DoorModalProps {
  title: string;
  richText: string;
}

export const DoorModal = (props: DoorModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>
          <CircleHelp
            size={18}
            className="hover:text-emerald-600 text-gray-500 rounded-full hover:bg-gray-100 hover:scale-110 duration-300 transition-all"
          />
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
