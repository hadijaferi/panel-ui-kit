import { IPicture } from "./IPicture";

export interface ICustomer {
  Id: number;
  FirstName: string;
  LastName: string;
  FullName: string;
  Picture: IPicture;
}
