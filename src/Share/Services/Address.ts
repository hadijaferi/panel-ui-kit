import { BaseService, Body, GET, Headers, POST } from "ts-retrofit";
import IResponse from "../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../infrastructure/HttpClient/HttpService";
import API_ADDRESS from "../Constants/Api/API_ADDRESS";
import { IGetCitiesResponse } from "../Models/Address/IGetCitiesResponse";
import { IGetProvincesResponse } from "../Models/Address/IGetProvincesResponse";
import { IAddressSearchRequest } from "../Models/Address/IAddressSearchRequest";
import { IAddressSearchResponse } from "../Models/Address/IAddressSearchResponse";
import { IMapIrResponse } from "../../infrastructure/Models/HttpClient/IMapIrResponse";

class AddressService extends BaseService {
  @GET(API_ADDRESS.GET_CITIES)
  async getCities(): Promise<IResponse<IGetCitiesResponse>> {
    return {} as IResponse<IGetCitiesResponse>;
  }

  @GET(API_ADDRESS.GET_PROVINCES)
  async getProvinces(): Promise<IResponse<IGetProvincesResponse>> {
    return {} as IResponse<IGetProvincesResponse>;
  }

  @POST(API_ADDRESS.ADDRESS_SEARCH)
  @Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIwMTExNzliNmVjM2NmZmQxNzRlZTExN2I4MzkzOTcwMjdkODU4YTFlZDE4ZmQxYzFlZjZlMGU2ZjBiNmYzMTNjMDlhNWRjMmEyMWI0NTZiIn0.eyJhdWQiOiIxMDgzOCIsImp0aSI6ImIwMTExNzliNmVjM2NmZmQxNzRlZTExN2I4MzkzOTcwMjdkODU4YTFlZDE4ZmQxYzFlZjZlMGU2ZjBiNmYzMTNjMDlhNWRjMmEyMWI0NTZiIiwiaWF0IjoxNjAwMDc5NzYwLCJuYmYiOjE2MDAwNzk3NjAsImV4cCI6MTYwMjc2MTc2MCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.GLKb5prp8Q6yoOANxcK_tuJb37k_ZquaeI9yiNRUWaGSO9XYQ8KIeTxwvUF8P0NZV52R7zCw-7B5Ys8ZWEZ-kJ9DsoPLHsbMmER8zZSio0VoXTU52d7kfPEIq1w1u-ihWPhL6IR7fpPcBlsDNYKSNgLslwUNNJ-26DJ7nyb3wEM-JXpgDJqZiudy_IoXK9Im_GeTkAHWcyrzPJxOtggW6JvQEPavuOPgTmyLxcz-TY9C0OQYuiPXc24TARvKo2h2dMmdPgzUQdUUIm2xQqtgOzDAUh-IyFsCY9BQY8g6DPubwYnR28FDYgRrfC9vQKTvUTNo11-YoXP44FALuERpig",
  })
  async addressSearch(
    @Body _body: IAddressSearchRequest,
  ): Promise<IMapIrResponse<IAddressSearchResponse>> {
    return {} as IMapIrResponse<IAddressSearchResponse>;
  }
}

export default HttpService.build(AddressService);
