import { maxSubarraySum, minSubArrayLen } from "./06.exercise.07";

describe("areThereDuplicatesFrequencySolution", () => {
  it("Expect return true for matched condition", () => {
    expect(maxSubarraySum([1, 2, 3], 2)).toBe(5);
  });

  it("Expect return undefined for not matched condition", () => {
    expect(maxSubarraySum([-1, 0, 3, 4, 5, 6], 100)).toBe(undefined);
  });
});

describe("minSubArrayLen", () => {
  it("Expect return 0 if there is no matched result", () => {
    const num = 100;
    const array = [1, 2, 2];

    expect(minSubArrayLen(array, num)).toBe(0);
  });
  it("Expect return min len if there is  matched result", () => {
    const num = 100;
    const array = [1, 2, 2, 100, 200, 1, 99];

    expect(minSubArrayLen(array, num)).toBe(1);
  });
});
