import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold } from "@tiptap/extension-bold";
import { BulletList } from "@tiptap/extension-bullet-list";
import { ListItem } from "@tiptap/extension-list-item";
import { ResizableImage } from "./ResizeableImage";

// 簡単なツールバー
function MenuBar({ editor }: { editor: Editor }) {
  const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !editor) return;

    const reader = new FileReader();
    reader.onload = () => {
      const src = reader.result as string;
      editor
        .chain()
        .focus()
        .insertContent({
          type: "resizableImage",
          attrs: {
            src,
            alt: file.name,
            width: 300,
            height: 200,
          },
        })
        .run();
    };
    reader.readAsDataURL(file);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={{ fontWeight: editor.isActive("bold") ? "bold" : "normal" }}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={{
          fontWeight: editor.isActive("bulletList") ? "bold" : "normal",
        }}
      >
        Bullet List
      </button>
      <input type="file" accept="image/*" onChange={addImage} />
    </div>
  );
}

export default function App() {
  const editor = useEditor({
    extensions: [
      StarterKit, // 基本機能 (段落・見出し・テキストなど)
      ResizableImage,
      Bold, // 太字 (⌘+B で使えます)
      BulletList, // ・リスト
      ListItem, // リスト項目
    ],
    content: "",
  });

  if (!editor) return <div>Waiting editor setup</div>;

  return (
    <div>
      <div>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
