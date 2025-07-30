class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    console.log(this);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("A pilha está vazia!");
      return null;
    }

    if (this.length === 1) {
      const temp = this.top;
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return temp;
    }

    const temp = this.top;
    this.top = this.top.next;
    this.length--;

    return temp;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // deve mostrar 20
myStack.pop();
console.log(myStack.peek()); // deve mostrar 10
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true
