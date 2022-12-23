// 74, null vs undefined
// null, absense of value
// undefined, absense of variable itself
it("null vs undefined", () => {
  expect(+null).toBe(0);
  expect(+undefined).toBe(NaN);
});

it("isNaN", () => {
  const message = "hello, world";
  const amount = 100;
  const amountInString = amount + "";

  expect(isNaN(message)).toBe(true);

  expect(isNaN(amount)).toBe(false);
  // Also works on string like numbers
  expect(isNaN(amountInString)).toBe(false);
});
