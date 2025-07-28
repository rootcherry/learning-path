// 10 -> 5 -> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    let node = this.head;
    let counter = 0;

    while (node != null) {
      if (counter === index - 1) {
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
        break;
      }
      counter++;
      node = node.next;
    }
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
// console.log(myLinkedList);
