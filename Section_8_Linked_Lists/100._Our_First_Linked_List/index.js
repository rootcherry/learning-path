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

  // insert() - my solution
  // insert(index, value) {
  //   const newNode = new Node(value);
  //   if (index === 0) {
  //     this.prepend(value);
  //     return this;
  //   }

  //   let node = this.head;
  //   let counter = 0;

  //   while (node != null) {
  //     if (counter === index - 1) {
  //       newNode.next = node.next;
  //       node.next = newNode;
  //       this.length++;
  //       break;
  //     }
  //     counter++;
  //     node = node.next;
  //   }
  //   return this;
  // }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }

    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = node;
    node.next = holdingPointer;
    this.length++;
    return console.log(this.printList());
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
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
// myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.printList();

// console.log(myLinkedList);
