import { search } from "./05.30";

describe("search", () => {
  it("expect return undefined for not matched case", () => {
    const array = [1, 2, 3];
    const expectedSum = 0;

    expect(search(array, expectedSum)).toBe(undefined);
  });

  it("expect return matched pair for matched case", () => {
    const array = [-3, -2, -1, 0, 1, 2, 3];
    const expectedSum = 0;

    expect(search(array, expectedSum)).toEqual([-3, 3]);
  });
});
