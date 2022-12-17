import { maxSubarraySum } from "./06.exercise.07";

describe("maxSubarraySum", () => {
  it("Expect return max sum for matched condition", () => {
    expect(maxSubarraySum([1, 2, 3], 2)).toBe(5);
  });

  it("Expect return undefined for not matched condition", () => {
    expect(maxSubarraySum([-1, 0, 3, 4, 5, 6], 100)).toBe(undefined);
  });
});
