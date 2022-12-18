export const compare = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const string1Map = new Map();

  for (let letter of string1) {
    const prevFrequency = string1Map.get(letter) ?? 0;

    string1Map.set(letter, prevFrequency + 1);
  }

  // loop the letters of a string
  for (let letter of string2) {
    const letterFrequencyInString1 = string1Map.get(letter);

    if (!letterFrequencyInString1) {
      return false;
    }

    string1Map.set(letter, letterFrequencyInString1 - 1);
  }

  return true;
};
