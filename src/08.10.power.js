export function power(n, level) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (level === 0) {
    return 1;
  }

  return n * power(n, level - 1);
}
