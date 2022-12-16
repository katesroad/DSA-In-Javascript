export const search = (array, expectedSum) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let sum = array[start] + array[end];

    if (sum === expectedSum) {
      return [array[start], array[end]];
    } else if (sum > expectedSum) {
      end--;
    } else {
      start++;
    }
  }

  return;
};
