import * as React from "react";

interface InfiniteScrollContainerProps {
  children: React.ReactNode;
  fetchMore: () => void;
}
export const InfiniteScrollContainer: React.FC<
  InfiniteScrollContainerProps
> = ({ children, fetchMore }) => {
  // ボトム要素のRef、この Ref を監視(Observer)する
  const bottomBoundaryRef = React.useRef(null);
  const [needFetchMore, setNeedFetchMore] = React.useState(false);

  const scrollObserver = React.useCallback((node: Element) => {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          console.log(en.isIntersecting);
          if (en.isIntersecting) {
            // 時間がかかる重い処理はここに置かないように注意
            setNeedFetchMore(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 0,
      }
    ).observe(node);
  }, []);

  React.useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  React.useEffect(() => {
    if (needFetchMore) {
      fetchMore();
      setNeedFetchMore(false);
    }
  }, [needFetchMore, fetchMore, setNeedFetchMore]);

  return (
    <div>
      {children}
      <div ref={bottomBoundaryRef} />
    </div>
  );
};
