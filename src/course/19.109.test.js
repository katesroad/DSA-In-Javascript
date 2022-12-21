import { LinkedList } from "./19.109";

const firstMessage = "hello";
const secondMessage = "world";

describe("Singly Linked List", () => {
  describe("push", () => {
    const messageList = new LinkedList();

    it("One item", () => {
      messageList.push(firstMessage);

      expect(messageList.length).toBe(1);
      expect(messageList.tail).toEqual(messageList.head);
    });

    it("More than one item", () => {
      messageList.push(secondMessage);

      expect(messageList.head).not.toEqual(messageList.tail);
      expect(messageList.length).toBe(2);
    });
  });

  describe("pop", () => {
    const messageList = new LinkedList();

    it("empty list", () => {
      const result = messageList.pop();

      expect(result).toBe(undefined);
    });

    it("one item list", () => {
      messageList.push(firstMessage);

      const result = messageList.pop();

      expect(result).toEqual({ next: null, value: "hello" });

      expect(messageList.length).toBe(0);
      expect(messageList.tail).toBe(null);
      expect(messageList.head).toBe(null);
    });

    it("more than one item list", () => {
      messageList.push(firstMessage);
      messageList.push(secondMessage);

      const result = messageList.pop();

      expect(result).toEqual({ next: null, value: "world" });

      expect(messageList.length).toBe(1);
      expect(messageList.tail.next).toBe(null);
    });
  });

  describe("get", () => {
    const messageList = new LinkedList();

    it("retrive from empty list", () => {
      const node = messageList.get(0);

      expect(node).toBe(null);
    });

    it("retrive index that is larger than list length", () => {
      const node = messageList.get(100);

      expect(node).toBe(null);
    });

    it("retrive index within list length", () => {
      messageList.push(firstMessage);
      messageList.push(secondMessage);

      const node = messageList.get(1);

      expect(node.value).toBe(secondMessage);
    });
  });

  describe("insert", () => {
    it("insert item for empty list", () => {
      const messageList = new LinkedList();

      messageList.insert(0, firstMessage);

      expect(messageList.length).toBe(1);
      expect(messageList.head).toEqual(messageList.head);
    });

    it("insert value at head", () => {
      const messageList = new LinkedList();

      messageList.push(firstMessage).push(secondMessage);
      messageList.insert(0, "!");

      expect(messageList.head.value).toBe("!");
    });

    it("insert value at tail", () => {
      const messageList = new LinkedList();

      messageList.push(firstMessage).push(secondMessage);
      messageList.insert(2, "!");

      expect(messageList.tail.value).toBe("!");
    });

    it("insert value within list", () => {
      const messageList = new LinkedList();

      messageList.push(firstMessage).push(secondMessage);
      messageList.insert(1, "!");

      expect(messageList.get(1).value).toBe("!");
    });
  });

  describe("set", () => {
    it("set value at an exisiting index", () => {
      const messageList = new LinkedList();

      messageList.push(firstMessage);
      messageList.set(0, secondMessage);

      expect(messageList.get(0).value).toBe(secondMessage);
    });

    it("set value at  not exisiting index", () => {
      const messageList = new LinkedList();

      messageList.push(firstMessage);

      // Expect test case to throw error in Jest
      // https://jestjs.io/docs/expect#tothrowerror
      expect(() => {
        messageList.set(10, secondMessage);
      }).toThrowError("Referencing a position doesnt exisit");
    });
  });

  describe("reverse", () => {
    it("list with one item", () => {
      const messageList = new LinkedList().push(firstMessage);

      messageList.reverse();

      expect(messageList.tail).toEqual(messageList.head);
    });

    it("list with two item", () => {
      const messageList = new LinkedList();

      messageList.push("a");
      messageList.push("b");
      messageList.push("c");
      messageList.push("d");

      messageList.reverse();

      expect(messageList.get(2).value).toBe("b");
    });
  });
});
