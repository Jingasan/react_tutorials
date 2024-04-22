/**
 * react-color
 * Reactの色選択ライブラリ
 * https://casesandberg.github.io/react-color/
 *
 * ChromePickerコンポーネントで色を選択させることができる。
 */
import * as React from "react";
import reactCSS from "reactcss";
import { RGBColor, ColorResult, ChromePicker } from "react-color";

export default function App() {
  // 選択色
  const [color, setColor] = React.useState<RGBColor>({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });

  /**
   * 選択色変更
   * @param selected
   */
  const changeColor = (selected: ColorResult) => {
    setColor(selected.rgb);
    console.log(color);
  };

  // カラーボックスCSS
  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
    },
  });

  return (
    <div>
      <div style={styles.color} />
      {/* カラーピッカーコンポーネント */}
      <ChromePicker color={color} onChangeComplete={changeColor} disableAlpha />
    </div>
  );
}
