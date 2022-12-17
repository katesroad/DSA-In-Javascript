/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | undefined}
 */
export const twoSum = function (nums, target) {
  if (nums.length <= 1) {
    return;
  }

  const trackMap = new Map();
  let start = 0;
  let end = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    const curValue = nums[i];
    const neededValue = target - curValue;

    if (trackMap.get(neededValue) !== undefined) {
      return [trackMap.get(neededValue), i];
    } else {
      trackMap.set(curValue, i);
    }
  }

  if (end > 0) {
    return [start, end];
  }

  return;
};
