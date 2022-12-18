export function threeSum(array, num) {
  const result = [];
  const trackMap = new Map();

  for (let i = 0, len = array; i < len; i++) {
    const curValue = array[i];
    const neededValue = num - curValue;

    // eslint-disable-next-line no-empty
    if (trackMap.has(neededValue)) {
    } else {
      trackMap.set(curValue, neededValue);
    }
  }

  return result;
}
