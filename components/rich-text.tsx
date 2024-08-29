import React from 'react';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
interface TiptapTextViewerProps {
  content: string;
}
// export function TiptapTextViewer({ content }: TiptapTextViewerProps) {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: '<p><strong>100asdasdasdasdsa0mee</strong></p>',
//     editable: false, // Set to false for read-only mode
//   });

//   console.log('content', content);

//   return (
//     <div className="w-32 h-16">
//       <EditorContent className="w-full h-full" editor={editor} />
//     </div>
//   );
// }

export const TiptapTextViewer = ({ content }: TiptapTextViewerProps) => {
  console.log('content', content);
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'w-full bg-transparent  text-white',
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
    ],
    content: '<p><strong>kenapaas</strong></p>', // Set the initial content with the provided value
  });

  return <EditorContent editor={editor} />;
};
