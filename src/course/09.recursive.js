export function reverseString(input) {
  if (input === "") {
    return "";
  }

  return reverseString(input.slice(1)) + input.slice(0, 1);
}

export function isPalindrome(input) {
  if (input.length <= 1) {
    return true;
  }

  const firstLetter = input.slice(0, 1);
  const lastLetter = input.slice(-1);

  if (firstLetter === lastLetter) {
    // Remove the first and the last letter
    return isPalindrome(input.slice(1, -1));
  } else {
    return false;
  }
}

export function someRecursive(array, cb) {
  if (array.length === 0) {
    return false;
  }

  const firstValue = array.slice(0, 1);
  const result = !!cb(firstValue);

  if (result) {
    return result;
  } else {
    return someRecursive(array.slice(1), cb);
  }
}

export function flatten(arrayOfArray) {
  if (arrayOfArray.length === 0) {
    return [];
  }

  const [firstElement, ...restElements] = arrayOfArray;

  if (Array.isArray(firstElement)) {
    return flatten(firstElement).concat(flatten(restElements));
  } else {
    return [firstElement].concat(flatten(restElements));
  }
}

export function capitalizeFirst(arrayOfString) {
  if (arrayOfString.length === 0) {
    return [];
  }

  const [firstString, ...restStrings] = arrayOfString;
  const capitalizedFirstString =
    firstString.charAt(0).toUpperCase() + firstString.slice(1);

  return [capitalizedFirstString].concat(capitalizeFirst(restStrings));
}

export function nestedEvenSum(object) {
  if (isEmpty(object) || !isObject(object)) {
    return 0;
  }

  let sum = 0;

  Object.keys(object).forEach((key) => {
    const value = object[key];

    if (isNumber(value)) {
      sum += value;
    } else if (isObject(value)) {
      sum += nestedEvenSum(value);
    } else {
      /* empty */
    }
  });

  return sum;
}

export function stringifyNumbers(object) {
  if (isEmpty(object)) {
    return {};
  }

  const newObject = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];

    if (isNumber(value)) {
      newObject[key] = `${value}`;
    } else if (isObject(value)) {
      newObject[key] = stringifyNumbers(value);
    } else {
      newObject[key] = value;
    }
  });

  return newObject;
}

export function collectStrings(object) {
  if (isEmpty(object)) {
    return [];
  }

  let result = [];

  for (let key in object) {
    const value = object[key];

    if (typeof value === "string") {
      result.push(value);
    } else if (isObject(value)) {
      result = result.concat(collectStrings(value));
    } else {
      /* empty */
    }
  }

  return result;
}

function isEmpty(object) {
  return Object.keys(object).length === 0;
}

function isObject(object) {
  return !Array.isArray(object) && object instanceof Object;
}

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}
