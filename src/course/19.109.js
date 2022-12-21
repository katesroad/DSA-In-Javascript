class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }
}

// No indice, connected via next poiner, random access is not allowed
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (this.isEmpty() || this.length - 1 < index) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (counter < index) {
      node = node.next;

      counter++;
    }

    return node;
  }

  isEmpty() {
    return this.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const tail = this.tail;

    let newTail = this.head;

    while (newTail.next && newTail.next !== tail) {
      newTail = newTail.next;
    }

    if (newTail.next) {
      this.tail = newTail;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    this.length--;

    return tail;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  reverse() {
    if (this.isEmpty() || this.length === 1) {
      return this;
    }

    let cur = this.head;
    let next = null;
    let prev = null;

    this.head = this.tail;
    this.tail = cur;

    // cur = b;
    for (let i = 0; i < this.length; i++) {
      next = cur.next;

      cur.next = prev;
      prev = cur;
      cur = next;
    }

    return this;
  }

  set(index, value) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
    } else {
      throw new Error("Referencing a position doesnt exisit");
    }

    return this;
  }

  insert(index, value) {
    if (this.length && this.length < index) {
      return this;
    }

    const newNode = new Node(value);

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;

    return this;
  }

  shift() {
    if (this.isEmpty()) {
      return undefined;
    }

    const node = this.head;
    const nextHead = this.head.next;

    if (nextHead) {
      this.head = nextHead;
    } else {
      this.tail = null;
      this.head = null;
    }

    this.length--;

    return node;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  traverse() {
    let current = this.head;

    while (current) {
      current = current.next;
    }

    return this;
  }
}
