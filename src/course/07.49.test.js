import { collectOdds } from "./07.49";

it("Expect return odds elements of giving array", () => {
  const array = [1, 2, 7, 6, 9];
  const expected = [1, 7, 9];

  expect(collectOdds(array)).toEqual(expected);
});
