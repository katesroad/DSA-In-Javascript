import { linearSearch, binarySearch } from "./10.57";

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

describe("binary search", () => {
  it("return index if an item is found in array", () => {
    const array1 = [1, 2, 3, 3, 4, 5, 10];
    const num1 = 10;

    const array2 = [1, 2, 3, 3, 5, 6];
    const num2 = 6;

    expect(binarySearch(array1, num1)).toBe(6);
    expect(binarySearch(array2, num2)).toBe(5);
  });

  it("return -1 if no item is found in array", () => {
    const array = [-4, 1, 12, 98, 99];
    const num = 11;

    expect(linearSearch(array, num)).toBe(-1);
  });
});
