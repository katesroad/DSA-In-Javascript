export function sameFrequency(num1, num2) {
  const num1Array = `${num1}`.split("");
  const num2Array = `${num2}`.split("");

  if (num1Array.length !== num2Array.length) {
    return false;
  }

  const num1TrackMap = new Map();

  for (let i = 0, len = num1Array.length; i < len; i++) {
    const currrentNumber = num1Array[i];
    const currentNumerFrequency = num1TrackMap.get(currrentNumber) ?? 0;

    num1TrackMap.set(currrentNumber, currentNumerFrequency + 1);
  }

  for (let i = 0, len = num2Array.length; i < len; i++) {
    const currrentNumber = num2Array[i];
    const curNumberfrequencyInNumber1 = num1TrackMap.get(currrentNumber);

    if (curNumberfrequencyInNumber1 === undefined) {
      return false;
    } else {
      num1TrackMap.set(currrentNumber, curNumberfrequencyInNumber1 - 1);
    }
  }

  return true;
}
