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

  push(message) {
    const newNode = new Node(message);

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

  set(index, message) {
    if (this.length && this.length < index) {
      return this;
    }

    const newNode = new Node(message);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;

      this.length++;

      return this;
    }

    if (index === 0) {
      newNode.next = this.head.next;
      this.head = newNode;

      this.length++;

      return this;
    }

    // index range: 0 ~ this.length;

    let prevNode = this.head;
    let current = 0;

    while (current < index - 1) {
      prevNode = prevNode.next;

      current++;
    }

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (index === this.length) {
      this.tail = newNode;
      this.tail.next = null;
    }

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

  unshift(message) {
    const newNode = new Node(message);

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
      if (current) {
        current = current.next;
      }
    }
  }
}
