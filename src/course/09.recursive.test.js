import {
  reverseString,
  isPalindrome,
  someRecursive,
  flatten,
  capitalizeFirst,
  nestedEvenSum,
  stringifyNumbers,
  collectStrings,
} from "./09.recursive";

describe("reverseString", () => {
  it("revers empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("revers not empty string", () => {
    expect(reverseString("abd")).toBe("dba");
  });
});

describe("isPalindrome", () => {
  it("expect return true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("expect to return false for not matched condition", () => {
    expect(isPalindrome("abd")).toBe(false);
  });

  it("expect to return true for matched condition", () => {
    expect(isPalindrome("abba")).toBe(true);
  });
});

describe("someRecursive", () => {
  it("expect return true for an empty array", () => {
    const array = [];
    const isUndefined = (number) => number === undefined;

    expect(someRecursive(array, isUndefined)).toBe(false);
  });

  it("expect to return false for not matched condition", () => {
    const array = [4, 100];
    const isMoreThanFive = (number) => number > 5;

    expect(someRecursive(array, isMoreThanFive)).toBe(true);
  });

  it("expect to return true for matched condition", () => {
    const array = [3, 8];
    const isOdd = (number) => number % 2;

    expect(someRecursive(array, isOdd)).toBe(true);
  });
});

describe("flatten", () => {
  it("return empty array if arrayOfArray is an empty array", () => {
    const array = [];

    expect(flatten(array)).toEqual([]);
  });

  it("return flattened array", () => {
    const input = [4, 100, [4, 100, [4, 100]]];
    const result = [4, 100, 4, 100, 4, 100];

    expect(flatten(input)).toEqual(result);
  });
});

describe("capitalizeFirst", () => {
  it("return empty array if arrayOfString is an empty array", () => {
    const array = [];

    expect(capitalizeFirst(array)).toEqual([]);
  });

  it("return capitalize  array of string", () => {
    const input = ["hello world", "you are welcome"];
    const result = ["Hello world", "You are welcome"];

    expect(capitalizeFirst(input)).toEqual(result);
  });
});

describe("nestedEvenSum", () => {
  it("return 0 for empty object", () => {
    const object = {};

    expect(nestedEvenSum(object)).toEqual(0);
  });

  it("return sum obect fields(including nested)", () => {
    const object = {
      outer: 2,
      inner: {
        inner: 2,
        name: {
          inner: 8,
        },
      },
    };

    expect(nestedEvenSum(object)).toEqual(12);
  });

  it("return zero for object without number property value", () => {
    const object = {
      outer: "outer",
      empty: {},
    };

    expect(nestedEvenSum(object)).toEqual(0);
  });
});

describe("stringifyNumbers", () => {
  it("return {} for empty object", () => {
    const object = {};

    expect(stringifyNumbers(object)).toEqual({});
  });

  it("stringify number fields(including nested)", () => {
    const object = {
      name: "example",
      outer: 2,
      inner: {
        count: 2,
      },
    };

    expect(stringifyNumbers(object)).toEqual({
      name: "example",
      outer: "2",
      inner: {
        count: "2",
      },
    });
  });

  it("return equal object if there is no number fields", () => {
    const object = {
      outer: "outer",
      boolean: true,
    };

    expect(stringifyNumbers(object)).toEqual(object);
  });
});

describe("collectStrings", () => {
  it("return [] for empty object", () => {
    const object = {};

    expect(collectStrings(object)).toEqual([]);
  });

  it("return sum obect fields(including nested)", () => {
    const object = {
      outer: 2,
      inner: {
        count: "2",
        inner: {
          count: "2",
        },
      },
    };

    expect(collectStrings(object)).toEqual(["2", "2"]);
  });

  it("return zero for object without number property value", () => {
    const object = {
      outer: "outer",
    };

    expect(stringifyNumbers(object)).toEqual(object);
  });
});
