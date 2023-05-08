export function discountPercent(price = 0, oldPrice = 0) {
  if (price >= oldPrice) {
    return 0;
  }
  return Math.floor(100 - (price * 100) / oldPrice);
}
