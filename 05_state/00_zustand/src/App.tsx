/**
 * Zustand
 * 軽量のグローバル状態管理ライブラリ
 * https://zustand-demo.pmnd.rs/
 *
 * Zustandを利用することで、グローバルで状態変数を容易に利用することができる。
 * useStoreは、状態変数とその更新関数を取得するZustandのHookである。
 *
 * Zustandの方がRecoilよりもパッケージサイズが軽量である。
 */
import { useStore } from "./store";

export default function App() {
  // 状態変数とその更新関数の取得
  const { count, inc } = useStore();
  return (
    <div>
      <h2>Zustand🐻</h2>
      <div>Count: {count}</div>
      <button onClick={() => inc(1)}>+ 1</button>
    </div>
  );
}
