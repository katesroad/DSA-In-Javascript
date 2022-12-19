import { debounce } from "./421-440";

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

  const callback = debounce(fn, debounceTime);

  const t1 = setInterval(() => {
    if (count > 10) {
      clearInterval(t1);
    } else {
      callback(count);
    }

    count += 1;
  }, debounceTime - 100);

  jest.runAllTimers();

  expect(fn).toBeCalledWith(10);
});
