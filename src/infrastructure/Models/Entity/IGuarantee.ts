import { IPicture } from "./IPicture";

export interface IGuarantee {
  CompanyName: string
  Description: string
  DurationDays: number
  Id: number
  Name: string
  Picture: IPicture
  Published: boolean
}