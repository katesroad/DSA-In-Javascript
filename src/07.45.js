export const sumRange = (number) => {
  if (number === 1) {
    return 1;
  }

  return number + sumRange(number - 1);
};
