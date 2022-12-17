export function areThereDuplicates(...args) {
  const trackMap = new Map();

  for (let value of args) {
    const currentValueFrequency = trackMap.get(value);

    if (currentValueFrequency === undefined) {
      trackMap.set(value, 1);
    } else {
      return true;
    }
  }

  return false;
}
