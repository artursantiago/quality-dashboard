export function formatDecimal(value: number | string): string {
  return new Intl.NumberFormat('en-US').format(parseFloat(value.toString()));
}

export function formatShortNumber(value: number | string): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(parseFloat(value.toString()));
}
