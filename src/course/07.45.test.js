import { sumRange } from "./07.45";

describe("sumRange", () => {
  it("Expect return 1 for edge case", () => {
    expect(sumRange(1)).toBe(1);
  });

  it("Expect return total value", () => {
    expect(sumRange(10)).toBe(55);
  });
});
