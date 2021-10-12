import L from "leaflet";
import fireImg from "./fire.png";

const greenIcon = L.icon({
  iconUrl: fireImg,

  iconSize: [32, 32], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export default greenIcon;
