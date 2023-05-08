import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";

type color = "green" | "red";

export interface ICommentStatusProps extends IBaseComponentProps {
  success?: boolean;
  color?: color;
}
