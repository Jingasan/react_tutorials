/**
 * 関数コンポーネント
 * コンポーネントとは、画面に表示するUI部品のことである。
 * Reactのコンポーネントには、古典的なクラスコンポーネントと関数コンポーネントがあり、
 * 関数コンポーネントの方が簡潔に書けるため、利用が推奨されている。
 */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
