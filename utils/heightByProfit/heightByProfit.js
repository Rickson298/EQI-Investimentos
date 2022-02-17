export function heightByProfit(initialWidth, baseValue, value) {
  let profit = parseFloat(value / baseValue);
  return `${(initialWidth * profit).toFixed(2)}px`;
}
