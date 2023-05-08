export interface AddressSearchResponseValue {
  province: string;
  county: string;
  district: string;
  city: string;
  region: string;
  neighborhood: string;
  title: string;
  address: string;
  type: string;
  fclass: string;
  geom: {
    type: string;
    coordinates: number[];
  };
}

export interface IAddressSearchResponse {
  "odata.count": number;
  value: AddressSearchResponseValue[];
}
