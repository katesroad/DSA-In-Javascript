export function power(n, level) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (level === 0) {
    return 1;
  }

  return n * power(n, level - 1);
}

export function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

export function productOfArray(array) {
  let result = 1;

  if (array.length === 0) {
    return result;
  }

  result = result * array[0] * productOfArray(array.slice(1));

  return result;
}

export function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }

  return num + recursiveRange(num - 1);
}
