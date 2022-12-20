import { debounce, throttle } from "./interview.421-440";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.clearAllMocks();
});

it("debounce: expect to be excuted one time only", () => {
  const debounceTime = 400;
  const fn = jest.fn();
  let count = 0;

  const debouncedFn = debounce(fn, debounceTime);

  const t1 = setInterval(() => {
    if (count > 10) {
      clearInterval(t1);
    } else {
      debouncedFn(count);
    }

    count += 1;
  }, debounceTime - 100);

  jest.runAllTimers();

  expect(fn).toBeCalledWith(10);
});

it("throttle", () => {
  let count = 0;
  const fn = jest.fn();
  const throttleFn = throttle(fn, 100);

  let timer = setInterval(() => {
    if (count > 100 * 3) {
      clearInterval(timer);
    } else {
      throttleFn(count);
    }

    count++;
  }, 1);

  jest.runAllTimers();

  expect(fn).toBeCalledTimes(3);
});
