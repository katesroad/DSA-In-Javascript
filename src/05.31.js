export const uniqueCounts = (array) => {
  if (array.length === 0) {
    return 0;
  }

  let count = 1;

  let startIndex = 0;
  const endIndex = array.length - 1;
  let currentIndex = 1;

  while (currentIndex <= endIndex) {
    const startValue = array[startIndex];
    const comparedValue = array[currentIndex];

    if (startValue !== comparedValue) {
      count++;
      startIndex = currentIndex;
    }

    currentIndex++;
  }

  return count;
};
