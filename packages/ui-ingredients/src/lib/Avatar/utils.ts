export function initials(name: string, max = 2) {
  const arr = name
    .trim()
    .split(' ')
    .map((n) => n[0]);

  const len = arr.length;

  if (len <= 0 || max <= 0) return '';
  if (max <= 1) return arr[0]?.toUpperCase() || '';
  if (len <= max) return arr.join('').toUpperCase();

  return arr
    .slice(0, max - 1)
    .concat(arr[len - 1])
    .join('')
    .toUpperCase();
}
