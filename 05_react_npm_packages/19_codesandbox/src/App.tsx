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
      files={{
        "/App.tsx": {
          code: `
import { add } from "./utils";

export default function App() {
  return <h1>Result: {add(3, 5)}</h1>;
}
`,
        },
        "/utils.ts": {
          code: `
export function add(a: number, b: number) {
  return a + b;
}
`,
        },
      }}
      //   options={{ openPaths: ["/App.tsx", "/utils.ts"] }}
    />
  );
}
