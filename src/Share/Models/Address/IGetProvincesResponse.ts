import { IProvince } from "../../../infrastructure/Models/Entity/IProvince";

export interface IGetProvincesResponse {
  Provinces: Partial<IProvince>[];
}
