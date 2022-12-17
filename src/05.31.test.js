import { findLargestSum } from "./05.31";

describe("search", () => {
  it("expect return undefined for array with less than required items", () => {
    const array = [1];
    const size = 2;

    expect(findLargestSum(array, size)).toBe(undefined);
  });

  it("expect return biggest sum value", () => {
    const array = [1, 2, 9, 10, -10, 0];
    const size = 3;

    expect(findLargestSum(array, size)).toBe(21);
  });
});
