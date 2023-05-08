/**
 * ensured type
 * type cast strictly
 *
 * @param value
 */
export function forceToStringType(value: any): string {
  if (!value) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  let tempValue: string;
  try {
    tempValue = JSON.stringify(value);
  } catch (e) {
    tempValue = "";
  }
  return tempValue;
}
