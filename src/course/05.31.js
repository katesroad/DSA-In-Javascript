export const findLargestSum = (array, number) => {
  if (array.length < number) {
    return;
  }

  let maxSum = 0;
  let tempSum = maxSum;

  for (let i = 0; i < number; i++) {
    maxSum += array[i];
  }

  for (let i = number, len = array.length; i < len; i++) {
    // curValue = array[i];
    // prevFirstValue = array[i - number]
    // newly added value = curValue - prevFirstValue
    tempSum = maxSum + (array[i] - array[i - number]);

    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};
