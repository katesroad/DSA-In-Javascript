// Big O: O(n)
export function linearSearch(array, num) {
  for (let index in array) {
    if (array[index] === num) {
      return +index;
    }
  }

  return -1;
}
