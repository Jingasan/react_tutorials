/**
 * useRef
 * useRefとは、DOMの中身を参照(Reference)するためのReact Hooksである。
 * useRefでDOM参照用の変数を作成し、参照先のDOMのref属性に指定する。
 *
 * ref属性
 * ref属性とは、DOMの中身を参照(Reference)するためのHTMLタグの属性である。
 *
 * Refオブジェクトはpropsやstateとは違い、レンダー毎に値が作られるのではないため、
 * レンダーと値が一対一になっていない。
 * そして値が自由に書き換え可能であるため、同じレンダーのなかでも値が変わり得る。
 * これは、「宣言的にUIを記述する」というReactの流儀に反する。
 * 便利に使えるケースもあるが多用はせず、Reactの原則から逸脱せざるを得ないときに、
 * 原則から逸脱していることを自覚しながら使うべきである。
 * Refオブジェクトのcurrentプロパティは、
 *
 * その値が更新されてもReactによってそのことが通知されないため、その点にも注意する。
 * 別の言い方をすると、currentプロパティの更新をトリガーに自動的に何かが発生することはない。
 * この点がuseStateとの違いである。useStateの場合はページの再レンダリングが行われるが、
 * refのcurrentプロパティを更新してもページの再レンダリングは行われない。
 *
 * React Hooks
 * React Hooksとは、Reactのstateやライフサイクル系の機能などを関数コンポーネント内で使用するための
 * React組み込みの関数である。
 */
import { useRef } from "react";

export default function App() {
  // useRef使用時には、参照先のDOMの型を指定すること
  const inputEl = useRef<HTMLInputElement>(null);
  // ボタンクリック時にテキスト入力エリアをフォーカスする処理
  const handleClick = () => {
    if (!inputEl.current) return;
    inputEl.current.focus(); // テキスト入力エリアをフォーカスする
    console.log("inputEl.current:", inputEl.current);
  };

  return (
    <>
      {/* useRefで作成したrefオブジェクトをHTMLタグのref属性に指定してDOMを参照する */}
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>Force to text area</button>
    </>
  );
}
