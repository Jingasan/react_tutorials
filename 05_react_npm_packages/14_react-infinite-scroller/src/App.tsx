/**
 * React Infinite Scroller
 * 無限スクロールライブラリ
 * https://github.com/danbovey/react-infinite-scroller
 */
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import { useState } from "react";

interface ItemState {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  // 表示データ
  const [items, setItems] = useState<ItemState[]>([]);
  // 現在の取得ページ番号
  const [page, setPage] = useState(1);

  // 表示するデータの取得関数
  const fetchData = async () => {
    // コールされる度に新しいページ番号のデータを取得する
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    // [
    //   {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   },
    //   ：
    // ]
    console.log(response.data);
    // 表示データに新しく取得したデータを追加
    setItems([...items, ...response.data]);
    // ページを更新
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      style={{ margin: "10px" }}
      // ユーザーがスクロールで更にアイテムを要求したときに呼び出されるコールバック関数
      // コールバック関数内で新たな表示データを取得して追加する
      loadMore={fetchData}
      // 更に読み込むべきアイテムがあるかどうか
      // falseの場合、イベントリスナーは削除される
      hasMore={true}
      // 読み込む最初のページの番号
      pageStart={0}
      // 新たなアイテムを読み込んでいる際に表示するコンポーネント
      // 親コンポーネントにはユニークなkeyプロパティを付ける必要がある
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default App;
