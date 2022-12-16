export const isTheSame = (targetArray, comparedArray) => {
  if (targetArray.length != comparedArray.length) {
    return false;
  }

  const squaredArray = targetArray.map((item) => item * item);
  const jointSet = new Set([...squaredArray, ...comparedArray]);

  return jointSet.size === targetArray.length;
};
