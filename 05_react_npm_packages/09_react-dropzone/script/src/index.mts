import * as fs from "fs";

async function generateFile() {
  const line =
    "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890\n"; // 改行を含む文字列
  const linesToWrite = 10000000;
  const filePath = "output.txt";

  try {
    const stream = fs.createWriteStream(filePath);

    // 10000行の文字列をファイルに書き込む
    for (let i = 0; i < linesToWrite; i++) {
      stream.write(line);
    }

    // ファイル書き込み完了後にストリームを閉じる
    stream.end();

    console.log("ファイルが生成されました:", filePath);
  } catch (error) {
    console.error("ファイルの生成中にエラーが発生しました:", error);
  }
}

generateFile();
