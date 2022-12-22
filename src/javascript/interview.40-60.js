// 45, what is a storage event and its handler

window.onstorage = function (e) {
  // eslint-disable-next-line no-console
  console.log(
    "The " +
      e.key +
      " key has been changed from " +
      e.oldValue +
      " to " +
      e.newValue +
      "."
  );
};

// 47, feature detection about storage
// solution: https://featurejs.com/#how-to-use
{
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
  } else {
    // Sorry! No Web Storage support..
  }
}
