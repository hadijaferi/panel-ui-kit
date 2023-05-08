export interface IToken {
  Token: string;
  ExpiryDate: Date;
  RefreshTokenExpiryDate: Date;
  RefreshToken: string;
  ExpiryTotalSeconds?: number;
  RefreshTokenExpiryTotalSeconds?: number;
}
