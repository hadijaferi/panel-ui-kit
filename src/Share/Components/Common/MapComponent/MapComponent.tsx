import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import style from "./MapComponent.module.sass";

class MapComponent extends Component<any, any> {
  state = {
    marker: [35.6892, 51.389],
  };

  render() {
    const DefaultIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    return (
      <div className={style.mapContainer}>
        <Map
          attributionControl={false}
          className="w100 h100 radius-8"
          zoomControl={false}
          center={this.state.marker as any}
          zoom={12}>
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=fa&s=IR"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker key="marker-1" position={this.state.marker as any} />
        </Map>
      </div>
    );
  }
}

export default MapComponent;
