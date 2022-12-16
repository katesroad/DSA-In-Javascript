import { uniqueCounts } from "./05.31";

describe("uniqueCounts", () => {
  it("empty array", () => {
    expect(uniqueCounts([])).toBe(0);
  });

  it("duplicated values in array", () => {
    const array = [1, 2, 3, 3, 4, 5, 66];

    expect(uniqueCounts(array)).toBe(6);
  });

  it("unique array", () => {
    const array = [1, 2, 3, 4];

    expect(uniqueCounts(array)).toBe(4);
  });
});
