class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}


class Stack {
  constructor (max = 10) {
    if (!Number.isInteger(max)) {
      throw new Error('Error');
    }
    this.max = max;
    this.current = 0;
    this.top = null;
  }

  push(element) {
    if(this.current === this.max) {
      throw new Error('Error');
    }

    let newNode = new Node(element);
    this.top = newNode;
    this.top.previous = newNode;
    this.current++;

    return this.current - 1;
  }

  isEmpty() {
    return this.current === 0;
  }

  pop() {
    if(this.isEmpty()) {
      throw new Error('Error');
    }

    let element = this.top;
    this.top = element.previous;
    this.current--;
    return element.value;
  }

  peek() {
    if(this.isEmpty()) {
      return null;
    } else {
      return this.top.value;
    }   
  }

  toArray() {
    let arr = [];
    let elem  = this.top;

    while (elem) {
        arr = [...arr, elem.value];
        elem = elem.previous;
    }

    return arr;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Error');
    } else {
      const list = [...iterable];
      const stack = new Stack(list.length);

      for (let value of list) {
        stack.push(value);
      }

      return stack;
    }
  }
}


module.exports = { Stack };

