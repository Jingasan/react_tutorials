/**
 * react-quill
 * React専用の編集エディタ(wysiwyg)ライブラリ
 * https://github.com/zenoamaro/react-quill
 */
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function App() {
  // 書き込み内容
  const [contents, setContents] = React.useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  /**
   * エディタ書き込み内容のコンソール出力
   */
  React.useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <div>
      {/* 編集エディタ */}
      <div>Default</div>
      <ReactQuill theme="snow" value={contents} onChange={setContents} />
      <div>Customized</div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={contents}
        onChange={setContents}
      />
    </div>
  );
}
