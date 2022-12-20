// 434
export const debounce = (fn, delay) => {
  let timer = undefined;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 435
export const throttle = (fn, limit) => {
  let isInThrottle;

  return (...args) => {
    if (!isInThrottle) {
      isInThrottle = true;

      fn.apply(this, args);

      setTimeout(() => {
        isInThrottle = false;
      }, limit);
    }
  };
};
