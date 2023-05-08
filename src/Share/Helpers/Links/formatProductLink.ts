import { IProduct } from "../../../infrastructure/Models/Entity/IProduct";
import { IService } from "../../../infrastructure/Models/Entity/IService";

export default function formatProductLink(
  link: string,
  product: Partial<IProduct> | Partial<IService>,
) {
  return link
    .replace("[id]", String(product.Id))
    .replace("[name]", product.Name ?? "");
}
