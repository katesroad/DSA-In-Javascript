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
