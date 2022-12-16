import { isTheSame } from "./05.27.frequencyCounterPattern";

describe("isTheSame", () => {
  it("Return false for different size of array", () => {
    expect(isTheSame([], [2])).toBe(false);
  });

  it("Return false for the same size yet not match condition", () => {
    expect(isTheSame([1], [2])).toBe(false);
  });

  it("Return true matched condition", () => {
    expect(isTheSame([1], [1])).toBe(true);
  });
});
