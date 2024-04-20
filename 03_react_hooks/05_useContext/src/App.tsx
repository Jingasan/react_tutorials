/**
 * useContext
 * useContextとは、複数のコンポーネント間で値を共有するためのReact Hooksである。
 * コンテキストを利用して作成した値は、そのコンテキストで囲まれた配下のコンポーネントで
 * useContextを利用して簡単にアクセス可能になる。
 * コンテキストを利用することで、コンポーネント間で値をpropsのバケツリレーで渡す必要がなくなる。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import React from "react";

/**
 * コンテキストの作成
 */
const defaultValue = {
  name: "Taro",
  age: 27,
};
const Context = React.createContext(defaultValue);

/**
 * 孫コンポーネント
 * @returns
 */
const Grandchild = () => {
  // コンテキストから状態変数を取得
  const value = React.useContext(Context);
  return (
    <div>
      <h1>useContext</h1>
      <div>{value.name}</div>
      <div>{value.age}</div>
    </div>
  );
};

/**
 * 子コンポーネント
 * @returns
 */
const Child = () => {
  return <Grandchild />;
};

/**
 * 親コンポーネント
 * @returns
 */
export default function App() {
  return (
    // コンテキストで囲まれた配下のコンポーネントで状態変数にアクセスできるようになる。
    <Context.Provider value={defaultValue}>
      <Child />
    </Context.Provider>
  );
}
