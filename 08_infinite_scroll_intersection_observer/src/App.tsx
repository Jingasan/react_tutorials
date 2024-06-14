/**
 * IntersectionObserver
 * IntersectionObserver APIとは、特定の領域を監視して指定した要素がその領域に入ったかどうかを検知してくれるJSのAPIである。
 * IntersectionObserver APIは、スクロールスパイ, 遅延読み込み, スクロールによるアニメーションなど様々な場面で利用することができる。
 * IntersectionObserver APIを利用してスクロールイベントを検出することで、無限スクロールを実装することができる。
 */
import React from "react";
import { InfiniteScrollContainer } from "./useInfiniteScroll";

const countPerFetch = 30;

const App: React.FC = () => {
  // demo のため、データフェッチ用のライブラリを使わず、ダミーデータを利用
  const [listItems, setListItems] = React.useState([
    ...Array(countPerFetch).keys(),
  ]);

  // 実際のデータフェッチ用のライブラリを使う場合は loading や error も考慮しないといけない
  const fetchMore = () => {
    setListItems([...Array(listItems.length + countPerFetch).keys()]);
  };

  return (
    <div>
      <h1>Infinite Scroll Demo</h1>
      <InfiniteScrollContainer fetchMore={fetchMore}>
        <ul>
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </InfiniteScrollContainer>
    </div>
  );
};

export default App;
