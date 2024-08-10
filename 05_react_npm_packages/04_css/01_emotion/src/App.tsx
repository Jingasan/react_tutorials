/**
 * emotion
 * CSSフレームワーク
 * https://emotion.sh/
 */
import { css } from "@emotion/react";

const bgColor = css({ backgroundColor: "blue" });
const textColor = css({ color: "white" });

/**
 * メインコンポーネント
 * @returns
 */
const App: React.FC = () => {
  return <div css={css([bgColor, textColor])}>Hello emotion</div>;
};

export default App;
