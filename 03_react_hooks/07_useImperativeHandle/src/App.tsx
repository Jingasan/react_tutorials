/**
 * useImperativeHandle
 * useImperativeHandleとは、子コンポーネントに追加したメソッドを
 * 親コンポーネントから渡されたRefオブジェクトを介して
 * 親コンポーネントから利用できるようにするためのReact Hooksである。
 * useImperativeHandleを利用するためには、
 * まずRefオブジェクトを子コンポーネントに渡す必要があるため、
 * 必然的にforwardRefを利用することになる。
 *
 * useRefと同様にuseImperativeHandleも基本的には使用を避けるべきである。
 *
 * forwardRef
 * forwardRefとは、子コンポーネントにRefオブジェクトを渡し、
 * 子コンポーネント内で渡されたRefオブジェクトを自由に使用できるようにする機能である。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useRef, useImperativeHandle, forwardRef } from "react";

/**
 * 公開したいメソッドのインターフェース
 */
interface Handler {
  setFocus(): void;
}

/**
 * 公開したいメソッドを持つ子コンポーネント
 * プロパティを追加する場合は、forwardRef<Handler, Props>と定義する。
 */
const MyFocus = forwardRef<Handler>((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // 子コンポーネントに追加したメソッドを
  // 親コンポーネントから渡されたRefオブジェクトを介して
  // 親コンポーネントから利用できるようにする。
  useImperativeHandle(ref, () => {
    // 親コンポーネントに対して公開する子コンポーネントのメソッド
    return {
      setFocus() {
        if (!inputRef.current) return;
        inputRef.current.focus();
      },
    };
  });
  return <input ref={inputRef} type="text" />;
});

/**
 * 親コンポーネント
 * @returns
 */
export default function App() {
  // 子コンポーネントを参照するRefオブジェクトを作成
  const ref = useRef<Handler>(null);
  return (
    <>
      {/* Refオブジェクトを子子コンポーネントに渡す */}
      <MyFocus ref={ref} />
      <button
        onClick={() => {
          if (!ref.current) return;
          // 子コンポーネントのメソッドを親コンポーネントから利用
          ref.current.setFocus();
        }}
      >
        Click
      </button>
    </>
  );
}
