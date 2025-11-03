"use client";

import "@/components/tiptap/tiptap.css";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
  content: string;
  editable: boolean;
}

export function Editor({ content, editable }: Props) {
  const editor = useEditor({
    extensions: [StarterKit, TaskList, TaskItem],
    content: content,
    editable: editable,
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
}
