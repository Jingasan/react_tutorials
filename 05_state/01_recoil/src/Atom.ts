/**
 * Recoil
 * グローバル状態管理ライブラリ
 * https://recoiljs.org/
 *
 * State
 * AtomとSelectorを合わせた概念のこと。
 *
 * Atom
 * 複数コンポーネントで共有されるグローバルなステートのこと。
 * Atomはkeyによって識別される。keyの値はグローバルでユニークでなくてはならない。
 *
 * Selector
 * Atomの値から計算される別の値のこと。
 * Atomとは異なり、Selector自身は状態値を持たない。
 */
import { atom } from "recoil";

/**
 * Atomの定義
 */
export const countAtom = atom<number>({
  key: "count", // 識別キー
  default: 0, // 初期値
});
