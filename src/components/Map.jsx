import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FireIcon from "./FireIcon";

const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ data, center, zoom }) => {
  const markers = data.map((ev, index) => {
    const lat = ev.geometries[0].coordinates[1];
    const lng = ev.geometries[0].coordinates[0];

    if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      return (
        <Marker key={index} position={[lat, lng]} icon={FireIcon}>
          <Popup>{ev.title}</Popup>
        </Marker>
      );
    }
    return null;
  });

  return (
    <div className="w-full flex-grow">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[center.lat, center.lng]}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
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
