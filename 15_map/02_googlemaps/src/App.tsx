/**
 * GoogleMaps
 * 2D GIS(地図描画)ライブラリ
 * https://mapsplatform.google.com/intl/ja/
 */
import { useEffect, useRef, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// GoogleCloudから取得したGoogleMapsのAPIキーを指定
const apiKey = "xxxxx";

const render = (status: Status): ReactElement => {
  return <h1>{status}</h1>;
};

const MapComponent = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current)
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
  });
  return <div style={{ width: "100%", height: "100vh" }} ref={ref} id="map" />;
};

export default function App() {
  // 初期値
  const center: google.maps.LatLngLiteral = { lat: 35.681236, lng: 139.767125 };
  const zoom: number = 15;
  return (
    // GoogleMap描画
    <Wrapper apiKey={apiKey} render={render}>
      <MapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}
