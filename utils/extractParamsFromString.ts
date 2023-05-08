interface IKeyValuePair {
  [key: string]: any;
}
export function extractParamsFromString(str: string | any): IKeyValuePair {
  if (typeof str === "object") {
    return str as IKeyValuePair;
  }
  if (typeof str === "string") {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    const params: IKeyValuePair = {};
    let match: any;
    // eslint-disable-next-line no-cond-assign
    while ((match = regex.exec(str))) {
      // eslint-disable-next-line prefer-destructuring
      params[match[1]] = match[2];
    }
    return params;
  }
  return {} as IKeyValuePair;
}
