/**
 * react-d3-speedometer
 * React専用のバロメーターライブラリ
 * https://www.npmjs.com/package/react-d3-speedometer
 */
import ReactSpeedometer from "react-d3-speedometer";

function App() {
  function segmentValueFormatter(value: string) {
    return `${value} kW`;
  }
  return (
    <div className="App">
      <div>Default meter</div>
      <ReactSpeedometer />
      <div>Customized meter 1</div>
      <ReactSpeedometer
        maxValue={500}
        value={473}
        needleColor="red"
        startColor="green"
        segments={10}
        endColor="blue"
      />
      <div>Customized meter 2</div>
      <ReactSpeedometer
        width={150}
        ringWidth={20}
        needleHeightRatio={0.5}
        dimensionUnit={"kW"}
        minValue={0}
        maxValue={15}
        value={5}
        labelFontSize={"10px"}
        segments={2}
        customSegmentStops={[0, 5, 15]}
        segmentColors={["#5BE12C", "#DCDCDC"]}
        segmentValueFormatter={segmentValueFormatter}
        currentValueText={"${value} kW"}
        valueTextFontSize={"14px"}
      />
    </div>
  );
}

export default App;
