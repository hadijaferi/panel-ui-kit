export default interface IRequest {
  retryable?: boolean;
  notification?: boolean;
  successNotification?: boolean;
  errorNotification?: boolean;
}
