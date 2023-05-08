import { IProduct } from "../../../../../../infrastructure/Models/Entity/IProduct";

export interface IPdpDetailContainerState {
  product: Partial<IProduct>;
  loading: boolean;
}
