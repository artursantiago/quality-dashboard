export function formatDecimal(value: number | string): string {
  return new Intl.NumberFormat('en-US').format(parseFloat(value.toString()));
}
