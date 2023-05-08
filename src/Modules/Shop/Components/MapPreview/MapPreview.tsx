import { Map, Marker, TileLayer } from "react-leaflet";
import React from "react";
import L from "leaflet";

interface IMapPreviewProps {
  position: number[];
}

const MapPreview = (_props: IMapPreviewProps) => {
  //  const { position } = props;
  const position = [35.787278, 51.423545];
  L.Marker.prototype.options.icon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (
    <Map
      attributionControl={false}
      className="w100 h100 radius-8"
      zoomControl={false}
      center={position as any}
      touchZoom={false}
      scrollWheelZoom={false}
      dragging={false}
      boxZoom={false}
      keyboard={false}
      doubleClickZoom={false}
      zoom={12}>
      <TileLayer
        url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=fa&s=IR"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key="marker-1" position={position as any} />
    </Map>
  );
};
export default MapPreview;
