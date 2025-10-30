"use client";

import "./card.css";

import { useState } from "react";
import { Editor } from "@/components/tiptap-editor/editor";
import { CardOptions } from "@/components/canvas-card-options/options";

interface CanvasCardProps {
  content: string;
}

export function CanvasCard({ content }: CanvasCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-md max-w-3xs"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="editor block overflow-hidden max-h-110">
        <Editor content={content} editable={false} />
      </div>
      {isHovered && (
        <div className="">
          <CardOptions />
        </div>
      )}
    </div>
  );
}
