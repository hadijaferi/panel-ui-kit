export interface IAddCommentRequest {
  Title: string;
  ReviewText: string;
  Rating: number;
  ProductId: number;
  SendAnonymously: boolean;
}
