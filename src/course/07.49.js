export function collectOdds(array) {
  let resultArray = [];

  if (array.length === 0) {
    return resultArray;
  }

  if (array[0] % 2 !== 0) {
    resultArray.push(array[0]);
  }

  resultArray = resultArray.concat(collectOdds(array.slice(1)));

  return resultArray;
}
