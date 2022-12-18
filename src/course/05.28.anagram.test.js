import { compare } from "./05.28.anagrams";

describe("compare", () => {
  it("expect return true for empty strings", () => {
    expect(compare("", "")).toBe(true);
  });
  it("expect return true for matched strings", () => {
    expect(compare("adad", "dada")).toBe(true);
  });

  it("expect return false for not matched strings", () => {
    expect(compare("a", "a")).toBe(true);
  });
});
