import Split from "react-split";
import "./style.css";

const ComponentA = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Component A</h1>
    </div>
  );
};
const ComponentB = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Component B</h1>
    </div>
  );
};

function C1() {
  return (
    <div className="comp">
      <h1>Component 1</h1>
    </div>
  );
}
function C2() {
  return (
    <div>
      <Split className="comp2 intterWrap" sizes={[50, 50]} direction="vertical">
        <ComponentA />
        <ComponentB />
      </Split>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Split
        className="wrap"
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <C1 />
        <C2 />
      </Split>
    </div>
  );
}
