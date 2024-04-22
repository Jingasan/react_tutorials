/**
 * useDeferredValue
 * useDeferredValueとは、Suspenseコンポーネントによって、
 * コンポーネントのレンダリングに遅延が発生する場合などに、
 * 最新のデータを取得するまでの間、古いデータを表示するためのReact Hooksである。
 *
 * useDeferredValueでは、useDeferredValueが更新された時、まずは裏側で更新後の値でレンダリングを試行する。
 * 遅延なくレンダリングされた場合は、最新の値を反映する。
 * もし最新の値でのレンダリングが遅延している場合は、そのまま古い値でのレンダリングを継続する。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useState, useDeferredValue } from "react";
import SlowList from "./SlowList";

export default function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
