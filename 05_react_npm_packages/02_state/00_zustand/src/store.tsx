/**
 * Zustand
 * 軽量のグローバル状態管理ライブラリ
 * https://zustand-demo.pmnd.rs/
 *
 * 以下は、Zustandを利用したグローバルな状態ストアの定義である。
 */
import { create } from "zustand";

/**
 * 状態変数の型定義
 */
type State = {
  count: number;
};
/**
 * 状態変数の更新関数の型定義
 */
type Action = {
  inc: (num: number) => void;
};

/**
 * 状態ストアの作成
 */
export const useStore = create<State & Action>()((set) => ({
  // 状態変数の初期値
  count: 0,
  // 状態変数の更新関数：指定された値を加える
  inc: (num) => set((state) => ({ count: state.count + num })),
}));
