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

  describe("set", () => {
    it("set item for empty list", () => {
      const messageList = new LinkedList();
      messageList.set(0, firstMessage);

      expect(messageList.length).toBe(1);
      expect(messageList.head).toEqual(messageList.head);
    });

    it("set message at head", () => {
      const messageList = new LinkedList();
      messageList.push(firstMessage).push(secondMessage);

      messageList.set(0, "!");

      expect(messageList.head.value).toBe("!");
    });

    it("set message at tail", () => {
      const messageList = new LinkedList();
      messageList.push(firstMessage).push(secondMessage);

      messageList.set(2, "!");

      expect(messageList.tail.value).toBe("!");
    });

    it("set message within list", () => {
      const messageList = new LinkedList();
      messageList.push(firstMessage).push(secondMessage);

      messageList.set(1, "!");

      expect(messageList.get(1).value).toBe("!");
    });
  });
});
