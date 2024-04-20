/**
 * useReducer
 * useReducerとは、状態管理のためのReact Hookである。
 * useReducerはuseStateと似たような機能であり、useStateが内部実装されている。
 * useReducerの第１引数には(state, action) => newStateという型のReducer関数を指定する。
 * state：状態変数
 * action：stateに対してどのような更新をするかを指示する変数
 * Reducer関数の中にactionの値に応じてstateの値をどう更新するかを記述する。
 * 第２引数にはstateの初期値を指定する。
 * useReducerは現在のstateとdispatch関数を返す。
 * dispatch関数はReducerを実行するための呼び出し関数であり、dispatch(action)で実行する。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import React from "react";

export default function App() {
  /**
   * Reducer関数
   * stateとactionを引数に渡して、stateを更新する。
   * @param state 現在のstate
   * @param action stateに対するアクション
   * @returns
   */
  const reducerFunction = (state: number, action: string): number => {
    // actionの値に応じたstateの更新処理を記述する。
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };

  // useReducerの引数にReducer関数とステートの初期値を渡す。
  const [counter, dispatch] = React.useReducer(reducerFunction, 0);
  return (
    <>
      <p>カウント：{counter}</p>
      {/* dispatchでactionを指定してstateを更新する */}
      <button onClick={() => dispatch("increment")}>+1</button>
      <button onClick={() => dispatch("decrement")}>-1</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
      <div className="line"></div>
    </>
  );
}
