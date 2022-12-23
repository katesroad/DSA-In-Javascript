import { Stack } from "./21";

describe("stack", () => {
  describe("push", () => {
    it("push one item", () => {
      const stack = new Stack();
      const size1 = stack.push("Flower1");

      expect(size1).toBe(1);
      expect(stack.size).toBe(1);
      expect(stack.first).toEqual(stack.last);
    });

    it("push more one item", () => {
      const stack = new Stack();

      stack.push("Flower1");
      stack.push("Flower2");

      expect(stack.size).toBe(2);
      expect(stack.first.value).toBe("Flower2");
      expect(stack.last.value).toBe("Flower1");
    });
  });

  describe("pop", () => {
    it("Empty stack", () => {
      const stack = new Stack();

      expect(stack.pop()).toBe(undefined);
    });

    it("Stack with one item", () => {
      const stack = new Stack();

      stack.push("Flower1");

      expect(stack.pop()).toBe("Flower1");
      expect(stack.size).toBe(0);
      expect(stack.first).toBe(null);
      expect(stack.last).toBe(null);
    });
  });
});
