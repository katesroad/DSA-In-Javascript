export const isTheSame = (targetArray, comparedArray) => {
  if (targetArray.length != comparedArray.length) {
    return false;
  }

  const squaredArray = targetArray.map((item) => item * item);
  const jointSet = new Set([...squaredArray, ...comparedArray]);

  return jointSet.size === targetArray.length;
};

/**
 * Strategy: compare frequency and length
 * @param {*} targetArray
 * @param {*} comparedArray
 * @returns boolean
 */
export const isTheSameSolution2 = (targetArray, comparedArray) => {
  if (targetArray.length !== comparedArray.length) {
    return false;
  }

  const targetMap = new Map();

  for (let value of targetArray) {
    const prevFrequency = targetMap.get(value) ?? 0;

    targetMap.set(value, prevFrequency + 1);
  }

  const comparedMap = new Map();

  for (let value of comparedArray) {
    const prevFrequency = comparedMap.get(value) ?? 0;

    comparedMap.set(value, prevFrequency + 1);
  }

  for (let key of targetMap.keys()) {
    const keyFrequencyInTargetMap = targetMap.get(key);
    const keyInComparedMap = key * key;
    const keyFrequencyInComparedMap = comparedMap.get(keyInComparedMap);

    if (keyFrequencyInComparedMap !== keyFrequencyInTargetMap) {
      return false;
    }
  }

  return true;
};
