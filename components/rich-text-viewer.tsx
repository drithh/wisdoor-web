'use client';
import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BoldIcon, StrikethroughIcon, ItalicIcon, ListIcon, ListOrderedIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import TextStyle from '@tiptap/extension-text-style';

const RichTextViewer = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: cn(
          'min-h-[150px] font-text w-full rounded-bl-none bg-transparent placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto',
          className
        ),
      },
    },

    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
      }),
      TextStyle,
    ],
    content: value, // Set the initial content with the provided value
    editable: false,
  });

  return (
    <div>
      <EditorContent editor={editor as Editor} />
    </div>
  );
};

export default RichTextViewer;
