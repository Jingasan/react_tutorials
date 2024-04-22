/**
 * クラスコンポーネント
 * コンポーネントとは、画面に表示するUI部品のことである。
 * Reactのコンポーネントには、古典的なクラスコンポーネントと関数コンポーネントがあり、
 * 関数コンポーネントの方が簡潔に書けるため、クラスコンポーネントの利用は推奨されていない。
 */
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
