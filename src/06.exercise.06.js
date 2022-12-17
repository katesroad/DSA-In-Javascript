export function averagePair(array, avgValue) {
  const sum = avgValue * 2;
  const trackMap = new Map();

  for (let i = 0, len = array.length; i < len; i++) {
    const currentValue = array[i];
    const neededValue = sum - currentValue;

    if (trackMap.has(neededValue)) {
      return true;
    } else {
      trackMap.set(currentValue, i);
    }
  }

  return false;
}
