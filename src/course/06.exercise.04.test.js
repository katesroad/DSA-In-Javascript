import { sameFrequency } from "./06.exercise.04";

describe("sameFrequency", () => {
  it("Expect return true for matched condition", () => {
    expect(sameFrequency(22, 1)).toBe(false);
  });

  it("Expect return false for not matched condition", () => {
    expect(sameFrequency(212, 221)).toBe(true);
  });
});
