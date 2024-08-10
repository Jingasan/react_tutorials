/**
 * react-dropzone
 * ファイルのドラッグアンドドロップ領域を実装するライブラリ
 * https://react-dropzone.js.org/
 */
import React from "react";
import { useDropzone } from "react-dropzone";

const App: React.FC = () => {
  /**
   * ファイル選択時の実行関数
   */
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles[0]);

    // 1つ目のファイルの先頭10行,最大1MBを読み込む
    const file = acceptedFiles[0];
    const startByte = 0; // 開始位置
    const endByte = 1024 * 1024; // 1MBまで読み込む
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
      if (!event.target || typeof event.target.result === "object") return;
      const partialContent = event.target.result; // 部分的に読み込まれた内容を取得
      // 改行を基準に先頭10行を取得
      const lines = partialContent.split("\n").slice(0, 10).join("\n");
      // ここで先頭10行を使って何かを行う
      console.log(lines);
    };
    // ファイルの一部を読み込む
    const slicedBlob = file.slice(startByte, endByte);
    fileReader.readAsText(slicedBlob); // テキストとして読み込む場合
  }, []);

  // Dropzoneの設定
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      accept: {
        "text/plain": [],
      },
    });
  // 入力許可ファイル群の表示
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));
  // 入力拒否ファイル群とエラー内容の表示
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section>
      <h4>Dropzone Area</h4>
      <div {...getRootProps()} style={{ backgroundColor: "yellow" }}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
};

export default App;
