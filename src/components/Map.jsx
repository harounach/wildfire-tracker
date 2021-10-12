import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FireIcon from "./FireIcon";

const Map = ({ data, center, zoom }) => {
  return (
    <div className="w-full flex-grow">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[center.lat, center.lng]}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[center.lat, center.lng]} icon={FireIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 13,
};

export default Map;
