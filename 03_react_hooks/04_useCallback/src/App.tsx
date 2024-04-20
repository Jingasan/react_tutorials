/**
 * useCallback
 * useCallbackとは、関数自体をキャッシュするためのReact Hooksである。
 * React.memoと併用することがポイント。
 * React.memoでメモ化したコンポーネントに、useCallbackでメモ化したコールバック関数をPropsとして渡すことで、
 * コンポーネントの不要な再レンダリングをスキップすることができる。
 * これにより、Reactの実行パフォーマンスが向上する。
 * useCallbackの第２引数の配列に依存変数を指定することで、
 * 依存変数の値が変更されたときにだけコールバック関数が実行されるようになる。
 *
 * useCallbackとの違い
 * useMemo：関数の結果をメモする
 * useCallback：関数自体をメモする
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import React from "react";

/**
 * React.memoでメモ化された子コンポーネント
 * @param props
 * @returns
 */
interface ChildProps {
  handleClick: () => void;
}
const Child: React.FC<ChildProps> = React.memo((props) => {
  console.log("render Child");
  return <button onClick={props.handleClick}>Child</button>;
});

/**
 * 親コンポーネント
 * @returns
 */
export default function App() {
  console.log("render App");
  const [count, setCount] = React.useState(0);

  // 以下のuseCallbackの関数をReact.memoでメモ化した子コンポーネントChildに渡す。
  // これにより、新しいhandleClick関数と前回のhandleClick関数は同じものになる。
  // そのため、Childコンポーネントは再レンダリングされない。
  const handleClick = React.useCallback(() => {
    console.log("click");
  }, []);

  // Countボタンを押下しても、親コンポーネントは再レンダリングされても
  // 子コンポーネントのChildは再レンダリングされない。
  // React.memoとReact.useCallbackがないと、
  // Countボタン押下の度に子コンポーネントのChildが再レンダリングされる。
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <Child handleClick={handleClick} />
    </>
  );
}
