import React from "react";
import { LeafletEvent } from "leaflet";
import dynamic from "next/dynamic";
import { MapProps, TileLayerProps } from "react-leaflet";
import Input from "../../../../Share/Components/Common/Form/Input/Input";
import Style from "./MyAddressesContainer.module.sass";
import MarkerIcon from "../../../../Resources/image/markerIcon.svg";
import Button from "../../../../Share/Components/Common/Button/Button";
import AddressService from "../../../../Share/Services/Address";
import debounce from "../../../../Share/Helpers/Debounce/debounce";
import Icon from "../../../../Share/Components/Common/Icon/Icon";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Map = dynamic<MapProps>(() => import("react-leaflet/lib/Map"), {
  ssr: false,
});

const TileLayer = dynamic<TileLayerProps>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("react-leaflet/lib/TileLayer"),
  {
    ssr: false,
  },
);

interface StepOneProps {
  onClick: () => void;
}

const StepOne = (props: StepOneProps) => {
  const searchAddress = (text: string) => {
    AddressService.addressSearch({ text })
      .then(res => {
        console.log(res.data.value);
      })
      .catch(err => console.log(err));
  };

  const eventHandler: any = debounce(searchAddress, 800);

  return (
    <>
      <Input
        className={Style.inputSearch}
        placeholder="جستجو"
        type="text"
        onChange={event => {
          event.persist();
          eventHandler(event.target.value);
        }}
        minLength={1}
        maxLength={50}
        suffix={<Icon name="search" size="large" />}
      />
      <div className={Style.mapContainer}>
        <Map
          onclick={(e: LeafletEvent) => {
            console.log("onclick", e);
          }}
          onViewportChanged={viewport => {
            console.log("viewport", viewport);
          }}
          ondragend={() => {
            console.log("drag");
          }}
          className="w100 h100 radius-8"
          center={[35.6892, 51.389]}
          zoom={14}>
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=fa&s=IR"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>

        <img src={MarkerIcon} alt="marker pin" className={Style.pin} />
      </div>
      <Button color="green" className="w100" onClick={props.onClick}>
        <span className="fontSize-18 fontWeight-700 p-y-8">ذخیره و ادامه</span>
      </Button>
    </>
  );
};

export default StepOne;
