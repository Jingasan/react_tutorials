/**
 * @codesandbox/sandpack-react
 * CodeSandboxを画面に埋め込むことができるReact専用ライブラリ
 * https://sandpack.codesandbox.io/docs/getting-started/usage
 */
import { Sandpack } from "@codesandbox/sandpack-react";

export default function App() {
  return (
    <Sandpack
      template="react-ts"
      customSetup={{
        dependencies: {
          "generate-password": "^1.7.0", // パスワード生成ライブラリをインストール
        },
      }}
      files={{
        "/App.tsx": {
          code: `
import { useState } from "react";
import { GeneratedPassword } from "./export";

export default function App() {
  const [password, setPassword] = useState("");

  const generate = () => {
    const generator = require("generate-password");
    const pwd = generator.generate({
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
      strict: true,
    });
    setPassword(pwd);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={generate} style={{ marginBottom: 10 }}>
        パスワードを生成
      </button>
      <GeneratedPassword password={password} />
    </div>
  );
}
`,
        },
        "/export.ts": {
          code: `
export * from "./GeneratedPassword";
`,
        },
        "/GeneratedPassword.tsx": {
          code: `
type Props = {
  password: string;
};

export function GeneratedPassword({ password }: Props) {
  if (!password) return null;
  return (
    <div>
      <p>生成されたパスワード: {password}</p>
    </div>
  );
}
`,
        },
      }}
    />
  );
}
