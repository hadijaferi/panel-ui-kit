import { BaseService, GET, QueryMap } from "ts-retrofit";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import { API_VITRIN } from "../Constants/Vitrin";
import IVitrinInfoRequest from "../Models/IVitrinInfoRequest";
import IVitrinElement from "../Models/IVitrinElement";
import { IVitrinBaseResponse } from "../Models/IVitrinBaseResponse";
import { IVitrinElementRequest } from "../Models/IVitrinElementRequest";
import { IVitrinGalleryRequest } from "../Models/IVitrinGalleryRequest";
import { IVitrinGallery } from "../Models/IVitrinGallery";

class VitrinServices extends BaseService {
  @GET(API_VITRIN.VITRIN_BASE)
  async getVitrinBase(
    @QueryMap _query: Partial<IVitrinInfoRequest>,
  ): Promise<IResponse<IVitrinBaseResponse>> {
    return {} as IResponse<IVitrinBaseResponse>;
  }

  @GET(API_VITRIN.VITRIN_ELEMENT)
  async getElement(
    @QueryMap _query: Partial<IVitrinElementRequest>,
  ): Promise<IResponse<IVitrinElement>> {
    return {} as IResponse<IVitrinElement>;
  }

  @GET(API_VITRIN.VITRIN_GALLERY)
  async getGallery(
    @QueryMap _query: Partial<IVitrinGalleryRequest>,
  ): Promise<IResponse<IVitrinGallery>> {
    return {} as IResponse<IVitrinGallery>;
  }
}

export default HttpService.build(VitrinServices);
