import { StatusComponent } from "../../infrastructure/Enum/StatusComponent";

export function returnStatus(isLoading: boolean, value: any) {
  if (isLoading) {
    return StatusComponent.loading;
  }
  if (!isLoading && !!value) {
    return StatusComponent.full;
  }
  return StatusComponent.null;
}
export function returnLoading(isLoading: boolean) {
  if (isLoading) {
    return StatusComponent.loading;
  }
  return StatusComponent.full;
}
