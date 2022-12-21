export const memoizAddition = () => {
  const cache = {};

  return (value) => {
    if (value in cache) {
      // Here, cache.value cannot be used as property name starts with the number
      // which is not a valid JavaScript  identifier.
      // Hence, can only be accessed using the square bracket notation.
      return cache[value];
    } else {
      let result = value + 20;
      cache[value] = result;

      return result;
    }
  };
};
