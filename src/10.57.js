// Big O: Worst case: O(n), Best case: O(1), average: O(n)
export function linearSearch(array, num) {
  for (let index in array) {
    if (array[index] === num) {
      return +index;
    }
  }

  return -1;
}

// sortted array, divide and conquer
export function binarySearch(array, num) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let middleIndex = Math.floor((rightIndex - leftIndex) / 2 + leftIndex);

  while (array[middleIndex] !== num && leftIndex < rightIndex) {
    if (array[middleIndex] > num) {
      rightIndex = middleIndex - 1;
    } else if (array[middleIndex] < num) {
      leftIndex = middleIndex + 1;
    } else {
      /* empty */
    }

    middleIndex = Math.floor((rightIndex - leftIndex) / 2 + leftIndex);
  }

  return array[middleIndex] === num ? middleIndex : -1;
}
