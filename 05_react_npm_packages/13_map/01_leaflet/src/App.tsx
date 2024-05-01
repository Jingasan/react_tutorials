/**
 * Leaflet
 * 2D GIS(地図描画)ライブラリ
 * https://leafletjs.com/
 *
 * React Leaflet
 * LeafletのReactコンポーネントを提供するライブラリ
 * https://react-leaflet.js.org/
 */
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

/**
 * マーカーの定義
 */
const DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

/**
 * 地図コンポーネント
 * @returns
 */
const Map = () => {
  const zoom = 8;
  const position = {
    lat: 35.0,
    lng: 135.0,
  };

  return (
    <div>
      {/* 2D地図の表示 */}
      <MapContainer center={position} zoom={zoom} style={{ height: "80vh" }}>
        {/* 表示する地図レイヤー：OpenStreetMapを利用 */}
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* マーカーアイコンの表示 */}
        <Marker position={position}>
          {/* アイコン押下時に表示するポップアップ */}
          <Popup>Hello Leaflet!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Map />
    </div>
  );
};

export default App;
