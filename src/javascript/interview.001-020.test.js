// 06 && 07
describe("array methods", () => {
  it("slice", () => {
    const array = [1, 2, 3];

    expect(array.slice(0, 1)).toEqual([1]);
    expect(array).toEqual(array);
  });

  it("splice", () => {
    const array = [1, 2, 3];

    expect(array.splice(0, 1)).toEqual([1]);
    expect(array).toEqual([2, 3]);
  });
});

// 08: object vs map

describe("object vs map", () => {
  it("iterate map", () => {
    const keys = [];
    const map = new Map();

    map.set("name", "javascript");
    map.set("type", "fed");

    // [key, value] of
    for (let [key] of map) {
      keys.push(key);
    }

    expect(keys).toEqual(["name", "type"]);
  });
});
