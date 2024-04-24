/**
 * useState
 * useStateとは、状態管理のためのReact Hookである。
 * useStateは、状態変数とその値を更新するためのセッター関数を返す。
 *
 * Dispatch<SetStateAction<型>はuseStateのセッター関数の型である。
 * propsでセッター関数を渡すときなどに利用する。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useState } from "react";
import Child from "./Child";

export default function App() {
  const [animalName, setAnimalName] = useState("dog");
  return (
    <>
      <div>animalName:{animalName}</div>
      {animalName === `dogpig` && (
        <div>子コンポーネントで`pig`を設定しました</div>
      )}
      <Child setAnimalName={setAnimalName} />
    </>
  );
}
