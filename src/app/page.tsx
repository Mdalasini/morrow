import { Editor } from "@/components/tiptap-editor/editor";
import data from "@/lib/data/sample-text";

export default function Home() {
  return <Editor content={data} editable={true} />;
}
