import { areThereDuplicates } from "./06.exercise.05";

describe("areThereDuplicatesFrequencySolution", () => {
  it("Expect return false for not matched condition", () => {
    expect(areThereDuplicates(22, 1)).toBe(false);
  });

  it("Expect return true for matched condition", () => {
    expect(areThereDuplicates(212, 212)).toBe(true);
  });
});
