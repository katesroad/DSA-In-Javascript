// 67, strict mode
// eslint-disable-next-line no-unused-vars
function testStrictMode() {
  // strict mode is not reliable as a way to do feature test
  // Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors.
  // For example, it eliminates accidentally creating a global variable by throwing an error and
  //  also throws an error for assignment to a non - writable property, a getter - only property,
  // a non - existing property, a non - existing variable, or a non - existing object.
  ("use strict");
}

// 70 delete operator
{
  const array = [1, 2, 3];
  delete array[0]; // [undefined, 2, 3];

  const user = {
    name: "Javascript",
    age: "10+ years",
  };

  delete user.age; // {name: 'Javascript'}
}

// 73, typeof

{
  // All of these results are 'object'
  typeof null;
  typeof [];
  typeof {};
}

// 78, detect caps lock
