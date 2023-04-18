export function placeZerosAtEnd<Type, Key extends keyof Type>(arr: Array<Type>, key: Key, sortKeyZero: Key): Array<Type> {
  return arr.filter((d) => isntZero(Number(d[key]))).concat(arr.filter((d) => isZero(Number(d[key]))).sort((a, b) => Number(b[sortKeyZero]) - Number(a[sortKeyZero])));
}
export function isntZero(element: number): boolean {
  return element > 0;
}
export function isZero(element: number): boolean {
  return element == 0;
}
export function convertToInternationalCurrencySystem(labelValue: number) {

  // Nine Zeroes for Billions
  let value = Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

        : Math.abs(Number(labelValue)) + '฿';
  return labelValue > 0 ? value : `-${value}`
}




export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}