/**
 * react-dropzone
 * ファイルのドラッグアンドドロップ領域を実装するライブラリ
 * https://react-dropzone.js.org/
 */
import React from "react";
import * as ExcelJS from "exceljs";
import { useDropzone } from "react-dropzone";

const App: React.FC = () => {
  /**
   * ファイル選択時の実行関数
   */
  const onDrop = React.useCallback(async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const arrayBuffer = fileReader.result as ArrayBuffer;
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(arrayBuffer);
        workbook.eachSheet((worksheet, sheetId) => {
          console.log(`Sheet ID: ${sheetId}`);
          console.log(`Sheet Name: ${worksheet.name}`);
          worksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber} values:`, row.values);
          });
        });
      };
      fileReader.readAsArrayBuffer(file);
    }
  }, []);

  // Dropzoneの設定
  const { getRootProps, getInputProps } = useDropzone({
    onDrop, // ファイル入力時のコールバック関数
    accept: {
      // 対応拡張子
      "text/csv": [], // csv
      "application/vnd.ms-excel": [], // xls
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [], // xlsx
    },
  });

  return (
    <section>
      <h4>Dropzone Area</h4>
      <div {...getRootProps()} style={{ backgroundColor: "yellow" }}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
};

export default App;
