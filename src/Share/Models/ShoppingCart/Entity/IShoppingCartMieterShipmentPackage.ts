import IShoppingMieter from "./IShoppingMieter";
import IShoppingCartShipmentPackageItem from "./IShoppingCartShipmentPackageItem";

export default interface IShoppingCartMieterShipmentPackage {
  Mieter: IShoppingMieter;
  ShipmentPackages: IShoppingCartShipmentPackageItem[];
}
