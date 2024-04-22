/**
 * 画像ファイル入力のサンプルコード
 */
import { ChangeEvent, useState } from "react";

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        setSelectedFile(file);
      } else {
        alert("Please select a PNG or JPEG file.");
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default App;
