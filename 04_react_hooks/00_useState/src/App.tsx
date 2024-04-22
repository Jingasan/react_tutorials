/**
 * useState
 * useStateとは、状態管理のためのReact Hookである。
 * useStateは、状態変数とその値を更新するためのセッター関数を返す。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useState } from "react";

export default function App() {
  // 悪い例
  let badCount = 0;
  const init = () => (badCount = 0);
  const plus = () => badCount++;
  const minus = () => badCount--;
  // count という名前の状態変数を宣言、初期値として0をセット。
  // setCountは状態変数countを更新するセッター関数。
  // 状態変数が更新されると、ページが再レンダリング（表示が更新）される。
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>状態変数の扱い方</h2>
      <h3>正しい例 useStateを使う → 画面が更新される</h3>
      <p>現在の数値：{count}</p>
      <button onClick={() => setCount(0)}>初期値に戻す</button>
      {/* セッター関数は状態変数を引数で受け取ることもできる。*/}
      <button onClick={() => setCount(count - 1)}>- 1</button>
      {/* セッター関数内で関数を定義することもできる。引数には状態変数を利用できる。*/}
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        + 1
      </button>
      <h3>悪い例 useStateを使わない → 画面が更新されない</h3>
      <p>現在の数値：{badCount}</p>
      <button onClick={init}>初期値に戻す</button>
      <button onClick={minus}>- 1</button>
      <button onClick={plus}>+ 1</button>
    </>
  );
}
