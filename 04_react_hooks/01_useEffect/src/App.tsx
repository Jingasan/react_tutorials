/**
 * useEffect
 * useEffectとは、副作用を実行するためのReact Hooksである。
 * 副作用とは、コンポーネントのレンダリング（表示処理）とは直接関係のないその他の処理のことである。
 * 例１：React管理外でのDOM更新処理
 * 例２：APIを通じた外部リソースとの通信
 * useEffectの第１引数に指定するコールバック関数は副作用関数と呼ばれる。
 * 副作用関数は、コンポーネントの初回レンダリング時、
 * および第２引数の配列に指定された依存変数の値が変更されたときに実行される。
 *
 * クリーンアップ関数
 * クリーンアップ関数とは、useEffectの副作用関数の戻り値に指定することができる関数のことである。
 * クリーンアップ関数はコンポーネントのアンマウント時に実行される。
 * コンポーネントがレンダリングされる度にuseEffectが重複して実行されるため、
 * クリーンアップ関数でマウント時に実行した処理をアンマウント時に削除する必要がある。
 * 例１：タイマーのキャンセル
 * 例２：イベントリスナーの削除
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState("");

  useEffect(
    // 副作用関数：初回ページレンダリング時、および依存状態変数が変更された場合に実行される。
    () => {
      setStr(`useEffectが実行されました(${count}回目)`);
      console.log("副作用関数が実行されました。");
      // クリーンアップ関数：コンポーネントのアンマウント時に実行される。
      return () => {
        console.log("クリーンアップ関数が実行されました。");
      };
    },
    [count]
  ); // 第２引数には、useEffectの実行タイミングを制御する依存変数を指定する。

  return (
    <div>
      <p>{str}</p>
      <button onClick={() => setCount(count + 1)}>useEffect実行</button>
    </div>
  );
}
