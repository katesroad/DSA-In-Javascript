import { linearSearch } from "./10.57";

describe("lineaderSearch", () => {
  it("return index if an item is found in array", () => {
    const array = [12, -44, 10];
    const num = 10;

    expect(linearSearch(array, num)).toBe(2);
  });

  it("return -1 if no item is found in array", () => {
    const array = [12, -44, 10];
    const num = 1;

    expect(linearSearch(array, num)).toBe(-1);
  });
});
