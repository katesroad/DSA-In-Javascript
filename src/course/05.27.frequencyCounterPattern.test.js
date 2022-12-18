import { isTheSame, isTheSameSolution2 } from "./05.27.frequencyCounterPattern";

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

describe("isTheSameSolution2", () => {
  it("return flase for different size of array", () => {
    expect(isTheSameSolution2([], [2])).toBe(false);
  });

  it("Return false for the same size yet not match condition", () => {
    expect(isTheSameSolution2([1], [2])).toBe(false);
  });

  it("Return true matched condition", () => {
    expect(isTheSameSolution2([1, 3, 2], [1, 4, 9])).toBe(true);
  });
});
