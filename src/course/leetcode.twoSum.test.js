import { twoSum } from "./leetcode.twoSum";

describe("twoSum", () => {
  it("expect return an array with two index", () => {
    const sum = 10;
    const nums = [1, 2, 9, 0];

    expect(twoSum(nums, sum)).toEqual([0, 2]);
  });

  it("expect return undefined if there is no result", () => {
    const sum = 100;
    const nums = [1, 1];

    expect(twoSum(nums, sum)).toBe(undefined);
  });

  it("expect return undefined if the array has less than two elements", () => {
    const sum = 100;
    const nums = [1];

    expect(twoSum(nums, sum)).toBe(undefined);
  });
});
