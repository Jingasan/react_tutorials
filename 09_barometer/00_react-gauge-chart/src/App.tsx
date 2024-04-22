/**
 * react-d3-speedometer
 * React専用のバロメーターライブラリ
 * https://www.npmjs.com/package/react-gauge-chart
 */
import GaugeChart from "react-gauge-chart";

export default function App() {
  return (
    <div className="App">
      {/* デフォルトチャート */}
      <div>Default chart</div>
      <GaugeChart id="gauge-chart1" textColor={"black"} />
      {/* 20段階で86%を指すチャート */}
      <div>Chart with 20 levels and pointer at 86%</div>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={20}
        percent={0.86}
        textColor={"black"}
      />
      {/* カスタムカラーチャート */}
      <div>Chart with custom colors and larger arc width</div>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={30}
        colors={["#FF5F6D", "#FFC371"]}
        arcWidth={0.3}
        percent={0.37}
        textColor={"black"}
      />
      {/* Chart with other corner radius and larger padding between arcs */}
      <div>Chart with other corner radius and larger padding between arcs</div>
      <GaugeChart
        id="gauge-chart4"
        nrOfLevels={10}
        arcPadding={0.1}
        cornerRadius={3}
        percent={0.6}
        textColor={"black"}
      />
      {/* Chart with custom arcs width */}
      <div>Chart with custom arcs width</div>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={15}
        arcsLength={[0.37, 0.63]}
        colors={["#5BE12C", "#DCDCDC"]}
        percent={0.37}
        arcPadding={0}
        textColor={"red"}
        fontSize={"16px"}
        arcWidth={0.2}
        cornerRadius={0}
        style={{ width: "200px", height: "100px" }}
      />
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        percent={0.3}
        arcPadding={0.02}
        textColor={"black"}
      />
      {/* Chart with disabled animation */}
      <div>Chart with disabled animation</div>
      <GaugeChart
        id="gauge-chart6"
        animate={false}
        nrOfLevels={15}
        percent={0.56}
        needleColor="#345243"
        textColor={"black"}
      />
    </div>
  );
}
