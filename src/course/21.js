class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }
}

// LIFO
export class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      return undefined;
    }

    const first = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return first.value;
  }
}

// o(1), FIFO
export class Queue {
  constructor() {
    this.last = null;
    this.first = null;
    this.size = 0;
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    }

    const first = this.first;

    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = first.next;
    }

    this.size--;

    return first.value;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
}
