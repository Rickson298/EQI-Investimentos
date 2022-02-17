export function getProfitPercent(baseValue, value) {
  if (baseValue && value) {
    return `${((value / baseValue) * 100 - 100).toFixed(2)}%`;
  }
}
