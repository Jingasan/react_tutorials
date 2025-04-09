import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { NodeViewWrapper } from "@tiptap/react";
import { ResizableBox } from "react-resizable";
import "./resize.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResizableImageComponent = (props: any) => {
  const { node, updateAttributes, selected } = props;
  const { src, alt, width = 300, height = 200 } = node.attrs;

  return (
    <NodeViewWrapper
      className="resizable-image"
      style={{ display: "inline-block" }}
    >
      <ResizableBox
        width={width}
        height={height}
        resizeHandles={["se"]}
        minConstraints={[50, 50]}
        onResizeStop={(_event, { size }) => {
          updateAttributes({ width: size.width, height: size.height });
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            border: selected ? "2px solid #409eff" : "none",
            userSelect: "none",
          }}
          draggable={false}
        />
      </ResizableBox>
    </NodeViewWrapper>
  );
};

export const ResizableImage = Node.create({
  name: "resizableImage",
  group: "block",
  draggable: true,
  selectable: true,
  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      width: { default: 300 },
      height: { default: 200 },
    };
  },
  parseHTML() {
    return [
      {
        tag: "img[src]",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["img", HTMLAttributes];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageComponent);
  },
});
