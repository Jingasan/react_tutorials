/**
 * Recoil
 * グローバル状態管理ライブラリ
 * https://recoiljs.org/
 *
 * Recoilを利用することで、グローバルで状態変数を容易に利用することができる。
 * useRecoilStateは、状態変数とそのセッター関数を取得するRecoilのHookである。
 *
 * Zustandの方がRecoilよりもパッケージサイズが軽量である。
 *
 * Reduxとの違い
 * [Redux]
 * 状態の管理が中央集権的である。
 * Reduxでは、各コンポーネントがストアと呼ばれるすべてのステートを集約した巨大な状態管理領域から
 * 使いたいステートを参照する。
 * [Recoil]
 * 状態の管理が局所的である。
 * Recoilでは、個々のステートはそのステートを使いたいコンポーネントの間だけで直接共有される。
 * 中央の状態管理領域を経由しない。
 * RecoilはReduxと比較して扱いがシンプルであること、フックとの相性が良いこと、宣言的であることを特長にしている。
 */
import { countAtom } from "./Atom";
import { useRecoilState } from "recoil";

const App: React.FC = () => {
  // 状態変数とそのセッター関数の取得
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <h2>Recoil</h2>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
};

export default App;
