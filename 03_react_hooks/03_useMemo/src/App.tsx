/**
 * useMemo
 * useMemoとは、関数の実行結果をキャッシュするためのReact Hooksである。
 * 同じ結果が返る関数が何度も実行される場合、メモから結果を取り出すことで、
 * 関数の再実行がスキップされるため、Reactの実行パフォーマンスが向上する。
 * また、第２引数の配列に依存変数を指定することで、
 * 依存変数の値が変更されたときにだけ関数が実行されるようになる。
 *
 * useCallbackとの違い
 * useMemo：関数の結果をメモする
 * useCallback：関数自体をメモする
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useState, useMemo } from "react";

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const doCount1 = () => setCounter1(counter1 + 1);
  const doCount2 = () => setCounter2(counter2 + 1);

  // 以下の関数はuseMemoを用いない場合、本コンポーネントがレンダリングされる度に計算されてしまう。
  // (ここでは、状態変数counter1,counter2の値が更新される度に計算されてしまう)
  // useMemoを用いた場合、関数の返り値が同じ場合は関数が実行されず、メモから返り値が返される。
  // また、第２引数の配列に指定した依存変数counter2の値が変更されたときにだけ関数が実行される。
  const square = useMemo(() => {
    // テストの為、関数の計算を重くする処理
    let i = 0;
    while (i < 1000000000) i++;
    // 二乗計算の結果
    return counter2 * counter2;
  }, [counter2]);

  return (
    <>
      <button onClick={doCount1}>ボタン１</button>
      <p>ボタン１の押下回数: {counter1}</p>
      <button onClick={doCount2}>ボタン２</button>
      <p>ボタン２の押下回数: {counter2}</p>
      <p>ボタン２を押下した回数の二乗値：{square}</p>
    </>
  );
}
