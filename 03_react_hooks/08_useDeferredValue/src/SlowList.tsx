import { memo } from "react";

interface SlowItemHandle {
  text: string;
}
function SlowItem({ text }: SlowItemHandle) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <li className="item">Text: {text}</li>;
}

interface SlowListHandle {
  text: string;
}
const SlowList = memo(function SlowList({ text }: SlowListHandle) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  const items: React.ReactElement[] = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

export default SlowList;
