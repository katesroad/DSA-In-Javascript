export function maxSubarraySum(array, num) {
  if (array.length < num) {
    return undefined;
  }

  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  for (let i = num, len = array.length; i < len; i++) {
    const addedValue = array[i] - array[i - num];
    const tempSum = maxSum + addedValue;

    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}
