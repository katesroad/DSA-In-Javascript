import { power } from "./08.10.power";

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
