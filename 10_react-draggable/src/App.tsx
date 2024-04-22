/**
 * react-draggable
 * コンポーネントをドラッグ可能にするライブラリ
 * https://www.npmjs.com/package/react-draggable
 */
import React from "react";
import Draggable from "react-draggable";

export default function App() {
  const ref = React.useRef(null);
  const handleStart = () => {
    console.log("start");
  };
  const handleDrag = () => {
    console.log("drag");
  };
  const handleStop = () => {
    console.log("stop");
  };
  const handleMouseDown = () => {
    console.log("mouse down");
  };
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Draggable
        nodeRef={ref}
        handle=".dragHandle"
        defaultPosition={{ x: 0, y: 0 }}
        bounds="parent"
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        onMouseDown={handleMouseDown}
      >
        <div
          ref={ref}
          style={{ width: "300px", height: "200px", backgroundColor: "red" }}
        >
          <div className="dragHandle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </div>
  );
}
