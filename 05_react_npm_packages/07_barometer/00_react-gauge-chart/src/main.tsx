import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // StrictModeとは、アプリケーションの潜在的な問題点を洗い出すためのツールである。
  // StrictModeにより、初回にレンダリングが２度行われるようになる。= useEffectは２回呼び出されるようになる。
  // これにより、useEffectのアンマウント処理漏れを検出しやすくなる。
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
