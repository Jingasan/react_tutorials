/**
 * useTransition
 * useTranstionとは、レンダリングに非常に重い(遅い)処理がある画面レンダリングを遅延し、
 * レンダリングが完了してから表示するためのReact Hooksである。
 * レンダリングに遅い処理がある場合、何も対応しないとその間画面操作がブロッキングされることがある。
 * useTransitionは、startTransitionという関数を提供しており、
 * このstartTransitionに渡した関数内で状態を更新された場合、
 * その状態更新でのレンダリングはノンブロッキングになる。
 *
 * useTransitionを使わないときの処理の流れ
 * 1. setStateで値を更新
 * 2. 新しい状態で画面をレンダリング
 * 3. レンダリング中に遅い処理を実行(この間ユーザーは、操作ブロッキングされる)
 * 4. 処理後、画面が表示されユーザーが操作可能になる。
 *
 * useTransitionを使ったときの流れ
 * 1. startTransitionを使ってsetStateで値を更新
 * 2. 画面表示は変わらず(ペンディング状態)、裏側でレンダリングが実行される。(この間ユーザーは画面操作が可能)
 * 3. 画面レンダリングが完了した時点で画面が切り替わる。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useState, useCallback, useTransition } from "react";

/**
 * 非常に重い処理
 * @returns
 */
function createLargeArray() {
  const array = new Array(20000).fill(0).map((_, index) => index + 1);
  return array;
}

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [counter, setCounter] = useState<number>(0);
  const [array, setArray] = useState<number[]>([]);

  const handleClick = useCallback(async () => {
    const largeArray = createLargeArray();
    startTransition(() => {
      setArray(largeArray);
    });
  }, [startTransition]);

  return (
    <div>
      <h1>useTransition</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((c) => c + 1), handleClick();
        }}
      >
        Create array
      </button>
      {isPending && <p>isPending...</p>}
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
