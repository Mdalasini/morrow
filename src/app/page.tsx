import { CanvasCard } from "@/components/canvas-card/card";
import entries from "@/lib/data/sample-entries";

function randomEntry() {
  const randomIndex = Math.floor(Math.random() * entries.length);
  return entries[randomIndex];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <CanvasCard content={randomEntry()} />
    </div>
  );
}
