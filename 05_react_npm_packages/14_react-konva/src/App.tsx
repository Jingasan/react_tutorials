/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * react-konva
 * React専用のキャンバス描画ライブラリ
 * https://konvajs.org/docs/react/index.html
 */
import React from "react";
import { Stage, Layer, Line } from "react-konva";
import { SketchPicker } from "react-color";
import styled from "styled-components";

const App = () => {
  const [tool, setTool] = React.useState("pen");
  const [size, setSize] = React.useState<number>(5);
  const [color, setColor] = React.useState("#000000");
  type LineType = {
    tool: string;
    points: any[];
    color: string;
    size: number;
  };
  const [lines, setLines] = React.useState<LineType[]>([]);
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef<any>();

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([
      ...lines,
      {
        tool,
        points: [pos.x, pos.y],
        color,
        size,
      },
    ]);
  };

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  return (
    <>
      <FlexDiv>
        <select
          value={tool}
          onChange={(e) => {
            setTool(e.target.value);
          }}
        >
          <option value="pen">ペン</option>
          <option value="eraser">消しゴム</option>
        </select>
        <select
          value={size}
          onChange={(e) => {
            setSize(Number(e.target.value));
          }}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button
          id="save"
          onClick={() => {
            if (stageRef.current) {
              downloadURI(
                stageRef.current
                  .getStage()
                  .toDataURL({ mimeType: "image/png", quality: 1.0 }),
                "export_" + formatDate(new Date(), "yyyyMMddHHmmssSSS") + ".png"
              );
            }
          }}
        >
          Save as PNG
        </button>
      </FlexDiv>
      <FlexDiv>
        <StageDiv>
          <Stage
            width={300}
            height={300}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
            style={{
              border: "solid",
              marginTop: "10px",
            }}
            ref={stageRef}
          >
            <Layer>
              {lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke={line.color}
                  strokeWidth={line.size}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    line.tool === "eraser" ? "destination-out" : "source-over"
                  }
                />
              ))}
            </Layer>
          </Stage>
        </StageDiv>
        <CustomSketchPicker
          color={color}
          onChangeComplete={handleChangeComplete}
        />
      </FlexDiv>
    </>
  );
};
export default App;

function downloadURI(uri: any, name: any) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function formatDate(date: any, format: any) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
  return format;
}

const FlexDiv = styled.div`
  display: flex;
`;

const StageDiv = styled.div`
  background-color: #ffffff;
  width: 303px;
  height: 303px;
`;

const CustomSketchPicker = styled(SketchPicker)({
  marginTop: "10px",
  marginLeft: "20px",
});
