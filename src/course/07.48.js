/**
 * 
 * export function outer(input) {
  let outerscopeVairable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }

  helper(input);

  return outerscopeVairable;
}
 */

export function collectOdds(nums) {
  // functional programming idea, without polluting external scope
  let result = [];

  const helper = (helperInput) => {
    const firstElement = helperInput[0];

    if (firstElement === undefined) {
      return;
    }

    if (firstElement % 2 !== 0) {
      result.push(firstElement);
    }

    // keep shrinking the array
    helper(helperInput.slice(1));
  };

  helper(nums);

  return result;
}
