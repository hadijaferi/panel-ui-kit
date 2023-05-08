import IResponse from "../../../../../infrastructure/Models/HttpClient/IResponse";

export default interface IDeleteCartItemModalProps {
  isOpen: boolean;
  closeAction: () => void;
  deleteAction: () => Promise<IResponse>;
  isLoading: boolean;
}
