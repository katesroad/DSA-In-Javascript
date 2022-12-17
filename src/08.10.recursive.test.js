import { factorial, power, productOfArray } from "./08.10.recursive";

describe("power", () => {
  it("power a value that is not 1 or 0", () => {
    const number = 10;
    const level = 3;

    expect(power(number, level)).toEqual(1000);
  });

  it("power 1", () => {
    const number = 1;
    const level = 3;

    expect(power(number, level)).toEqual(1);
  });

  it("power 0", () => {
    const number = 0;
    const level = 3;

    expect(power(number, level)).toEqual(0);
  });
});

describe("factorial", () => {
  it("base case", () => {
    expect(factorial(0)).toBe(1);
  });

  it("recursive case", () => {
    expect(factorial(4)).toBe(24);
  });
});

describe("productArray", () => {
  it("base case", () => {
    expect(productOfArray([])).toBe(1);
  });

  it("recursive case", () => {
    expect(productOfArray([3, 5])).toBe(15);
  });
});
