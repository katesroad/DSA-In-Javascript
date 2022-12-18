import { collectOdds } from "./07.48";

describe("sumRange", () => {
  it("Expect return odds elements of giving array", () => {
    const array = [1, 2, 7, 6, 9];
    const expected = [1, 7, 9];

    expect(collectOdds(array)).toEqual(expected);
  });
});
