//  24, what is memoization
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

// 28 ~ 30 module

// cookie
document.cookie;
// expiration time
// cookie.js
// protocals about setting cookie on server side
export function parseCookie() {
  return document.cookie.split("; ").reduce((acc, cur) => {
    const [name, value] = cur.split("=");
    acc[name] = decodeURIComponent(value);

    return acc;
  }, {});
}
